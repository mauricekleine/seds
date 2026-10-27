import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/impact-map";
import { pageHead } from "../seo";
export const Route = createFileRoute("/impact-map")({
  component: Page,
  head: () => pageHead(meta()),
});
