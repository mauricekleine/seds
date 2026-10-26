import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/volunteer-experience";
import { pageHead } from "../seo";
export const Route = createFileRoute("/volunteer-experience")({
  component: Page,
  head: () => pageHead(meta()),
});
