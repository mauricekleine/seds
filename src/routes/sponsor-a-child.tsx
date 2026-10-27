import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/sponsor-a-child";
import { pageHead } from "../seo";
export const Route = createFileRoute("/sponsor-a-child")({
  component: Page,
  head: () => pageHead(meta()),
});
