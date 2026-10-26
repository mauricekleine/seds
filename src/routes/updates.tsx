import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/updates";
import { pageHead } from "../seo";
export const Route = createFileRoute("/updates")({
  component: Page,
  head: () => pageHead(meta()),
});
