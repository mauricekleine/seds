import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/low-carbon-farming";
import { pageHead } from "../seo";
export const Route = createFileRoute("/low-carbon-farming")({
  component: Page,
  head: () => pageHead(meta()),
});
