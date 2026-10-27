import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/contact";
import { pageHead } from "../seo";
export const Route = createFileRoute("/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { inquiry } = await import("../inquiry.server");
        const result = await inquiry("contact", Object.fromEntries((await request.formData()).entries()));
        return new Response(null, {
          status: 303,
          headers: { Location: "/contact?" + (result.success ? "success=true" : "error=true") },
        });
      },
    },
  },
  component: Page,
  head: () => pageHead(meta()),
});
