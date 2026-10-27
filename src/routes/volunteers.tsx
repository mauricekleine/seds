import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/volunteers";
import { pageHead } from "../seo";
export const Route = createFileRoute("/volunteers")({
  component: Page,
  head: () => pageHead(meta()),
});
