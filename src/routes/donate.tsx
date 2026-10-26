import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/donate";
import { pageHead } from "../seo";
export const Route = createFileRoute("/donate")({
  component: Page,
  head: () => pageHead(meta()),
});
