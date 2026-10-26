import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/about";
import { pageHead } from "../seo";
export const Route = createFileRoute("/about")({
  component: Page,
  head: () => pageHead(meta()),
});
