import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/natural-resource-management";
import { pageHead } from "../seo";
export const Route = createFileRoute("/natural-resource-management")({
  component: Page,
  head: () => pageHead(meta()),
});
