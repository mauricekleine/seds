import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/updates.$slug";
import { pageHead } from "../seo";
export const Route = createFileRoute("/updates_/$slug")({
  component: Page,
  head: ({ params }) => pageHead(meta({ params })),
});
