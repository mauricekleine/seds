import { afterEach, expect, spyOn, test } from "bun:test";
import { reports } from "../src/reports.server";
const previous = { ...process.env };
afterEach(() => {
  process.env = { ...previous };
});
test("reports resolve Contentful asset links without exposing credentials", async () => {
  process.env.CONTENTFUL_SPACE_ID = "stub-space";
  process.env.CONTENTFUL_ACCESS_TOKEN = "stub-contentful";
  const transport = spyOn(globalThis, "fetch").mockResolvedValue(
    Response.json({
      items: [
        {
          sys: { id: "report1" },
          fields: { code: "2025", title: "Annual report", file: { sys: { type: "Link", id: "asset1" } } },
        },
      ],
      includes: {
        Asset: [
          {
            sys: { id: "asset1" },
            fields: { file: { fileName: "report.pdf", url: "//images.ctfassets.net/example/report.pdf" } },
          },
        ],
      },
    }),
  );
  try {
    const data = await reports();
    expect(data.entries.items[0].fields.file?.fields.file.fileName).toBe("report.pdf");
    expect(JSON.stringify(data)).not.toContain("stub-contentful");
  } finally {
    transport.mockRestore();
  }
});
test("reports retain the existing empty state when CMS is absent or unavailable", async () => {
  delete process.env.CONTENTFUL_ACCESS_TOKEN;
  expect(await reports()).toEqual({ entries: { items: [] } });
  process.env.CONTENTFUL_SPACE_ID = "stub-space";
  process.env.CONTENTFUL_ACCESS_TOKEN = "stub-contentful";
  const transport = spyOn(globalThis, "fetch").mockResolvedValue(new Response("unavailable", { status: 503 }));
  try {
    expect(await reports()).toEqual({ entries: { items: [] } });
  } finally {
    transport.mockRestore();
  }
});
test("reports skip entries without an https asset and time out the CMS request", async () => {
  process.env.CONTENTFUL_SPACE_ID = "stub-space";
  process.env.CONTENTFUL_ACCESS_TOKEN = "stub-contentful";
  const entry = (id: string, asset: string) => ({
    sys: { id },
    fields: { code: id, title: id, file: { sys: { type: "Link", id: asset } } },
  });
  const asset = (id: string, url: unknown) => ({ sys: { id }, fields: { file: { fileName: `${id}.pdf`, url } } });
  const transport = spyOn(globalThis, "fetch").mockResolvedValue(
    Response.json({
      items: [
        entry("https", "a1"),
        entry("relative", "a2"),
        entry("script", "a3"),
        entry("http", "a4"),
        entry("missing", "absent"),
        entry("nourl", "a5"),
      ],
      includes: {
        Asset: [
          asset("a1", "https://assets.ctfassets.net/example/a1.pdf"),
          asset("a2", "//images.ctfassets.net/example/a2.pdf"),
          asset("a3", "javascript:alert(1)"),
          asset("a4", "http://example.invalid/a4.pdf"),
          asset("a5", undefined),
        ],
      },
    }),
  );
  try {
    const data = await reports();
    expect(data.entries.items.map((item) => item.sys.id)).toEqual(["https", "relative"]);
    expect(data.entries.items.map((item) => item.fields.file.fields.file.url)).toEqual([
      "https://assets.ctfassets.net/example/a1.pdf",
      "https://images.ctfassets.net/example/a2.pdf",
    ]);
    expect(transport.mock.calls[0][1]?.signal).toBeInstanceOf(AbortSignal);
  } finally {
    transport.mockRestore();
  }
});
