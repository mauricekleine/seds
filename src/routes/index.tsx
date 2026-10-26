import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/index";
import { pageHead } from "../seo";
export const Route = createFileRoute("/")({
  component: Page,
  head: () => pageHead(meta()),
});
