import { afterEach, beforeEach, expect, spyOn, test } from "bun:test";
import { inquiry } from "../src/inquiry.server";
let transport: ReturnType<typeof spyOn>;
const previous = { ...process.env };
const fields = {
  email: "sender@example.invalid",
  name: "Example",
  message: "Hello <script>",
  token: "stub",
  organization: "Example",
  role: "Engineer",
  focus: "Water",
};
beforeEach(() => {
  process.env.MANDRILL_API_KEY = "stub-mandrill-not-a-real-key";
  process.env.RECAPTCHA_SECRET_KEY = "stub-captcha-not-a-real-key";
  // A closed transport stub: no test can reach Google or send real mail.
  transport = spyOn(globalThis, "fetch").mockImplementation(
    Object.assign(
      async () => {
        throw new Error("Unexpected network request");
      },
      { preconnect: fetch.preconnect },
    ),
  );
});
afterEach(() => {
  transport.mockRestore();
  process.env = { ...previous };
});
for (const kind of ["contact", "collaborate"] as const) {
  test(`${kind}: required fields and email are validated before transport`, async () => {
    for (const invalid of [
      { ...fields, name: "" },
      { ...fields, email: "invalid" },
      ...(kind === "collaborate" ? [{ ...fields, organization: "" }] : []),
    ])
      expect(await inquiry(kind, invalid)).toEqual({ success: false });
    expect(transport).not.toHaveBeenCalled();
  });
  test(`${kind}: oversized fields and control characters in name or email are rejected before transport`, async () => {
    for (const invalid of [
      { ...fields, message: "x".repeat(5001) },
      { ...fields, name: "x".repeat(201) },
      { ...fields, email: `${"x".repeat(250)}@example.invalid` },
      { ...fields, phonenumber: "1".repeat(201) },
      { ...fields, name: "Example\r\nBcc: other@example.invalid" },
      { ...fields, name: "Example\u0000" },
      { ...fields, email: "sender@example.invalid\n" },
    ])
      expect(await inquiry(kind, invalid)).toEqual({ success: false });
    expect(transport).not.toHaveBeenCalled();
  });
  test(`${kind}: a message at the length limit is still sent`, async () => {
    transport
      .mockResolvedValueOnce(Response.json({ success: true }))
      .mockResolvedValueOnce(Response.json([{ status: "sent" }]));
    expect(await inquiry(kind, { ...fields, message: "line\n".repeat(1000) })).toEqual({ success: true });
  });
  test(`${kind}: CAPTCHA and mail requests carry a timeout`, async () => {
    transport
      .mockResolvedValueOnce(Response.json({ success: true }))
      .mockResolvedValueOnce(Response.json([{ status: "sent" }]));
    await inquiry(kind, fields);
    for (const [, init] of transport.mock.calls) expect(init.signal).toBeInstanceOf(AbortSignal);
  });
  test(`${kind}: missing credentials fail without transport`, async () => {
    delete process.env.MANDRILL_API_KEY;
    expect(await inquiry(kind, fields)).toEqual({ success: false });
    expect(transport).not.toHaveBeenCalled();
  });
  test(`${kind}: captcha rejection never sends mail`, async () => {
    transport.mockResolvedValue(Response.json({ success: false }));
    expect(await inquiry(kind, fields)).toEqual({ success: false });
    expect(transport).toHaveBeenCalledTimes(1);
  });
  test(`${kind}: accepted inquiry preserves recipient and escapes HTML`, async () => {
    transport
      .mockResolvedValueOnce(Response.json({ success: true }))
      .mockResolvedValueOnce(Response.json([{ status: "sent" }]));
    expect(await inquiry(kind, fields)).toEqual({ success: true });
    const mail = JSON.parse(String(transport.mock.calls[1][1].body)).message;
    expect(mail.to[0].email).toBe("info@sedsngo.org");
    expect(mail.to[1].email).toBe(fields.email);
    expect(mail.html).toContain("Hello &lt;script&gt;");
    expect(mail.text).toBe(fields.message);
  });
  test(`${kind}: Mandrill rejection, HTTP errors and network errors return error`, async () => {
    for (const failure of [
      Response.json([{ status: "rejected" }]),
      new Response("Unavailable", { status: 503 }),
      new Error("offline"),
    ]) {
      transport.mockResolvedValueOnce(Response.json({ success: true }));
      if (failure instanceof Error) transport.mockRejectedValueOnce(failure);
      else transport.mockResolvedValueOnce(failure);
      expect(await inquiry(kind, fields)).toEqual({ success: false });
    }
  });
}
