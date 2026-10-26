import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/education";
import { pageHead } from "../seo";
export const Route = createFileRoute("/education")({
  component: Page,
  head: () => pageHead(meta()),
});
