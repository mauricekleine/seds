import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/clean-development-mechanism";
import { pageHead } from "../seo";
export const Route = createFileRoute("/clean-development-mechanism")({
  component: Page,
  head: () => pageHead(meta()),
});
