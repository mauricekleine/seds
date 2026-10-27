import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/our-work";
import { pageHead } from "../seo";
export const Route = createFileRoute("/our-work")({
  component: Page,
  head: () => pageHead(meta()),
});
