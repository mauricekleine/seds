import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/quiz";
import { pageHead } from "../seo";
export const Route = createFileRoute("/quiz")({
  component: Page,
  head: () => pageHead(meta()),
});
