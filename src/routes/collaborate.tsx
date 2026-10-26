import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/collaborate";
import { pageHead } from "../seo";
export const Route = createFileRoute("/collaborate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { inquiry } = await import("../inquiry.server");
        const result = await inquiry("collaborate", Object.fromEntries((await request.formData()).entries()));
        return new Response(null, {
          status: 303,
          headers: { Location: "/collaborate?" + (result.success ? "success=true" : "error=true") },
        });
      },
    },
  },
  component: Page,
  head: () => pageHead(meta()),
});
