import { createServerFn } from "@tanstack/react-start";
export const getReports = createServerFn({ method: "GET" }).handler(async () => {
  const { reports } = await import("./reports.server");
  return reports();
});
export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: { kind: "contact" | "collaborate"; fields: Record<string, unknown> }) => {
    if (!data || !["contact", "collaborate"].includes(data.kind) || !data.fields || typeof data.fields !== "object")
      throw new Error("Invalid form");
    return data;
  })
  .handler(async ({ data }) => {
    const { inquiry } = await import("./inquiry.server");
    return inquiry(data.kind, data.fields);
  });
