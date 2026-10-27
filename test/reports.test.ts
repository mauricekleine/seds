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
