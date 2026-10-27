import { createFileRoute } from "@tanstack/react-router";
import Page, { meta } from "../../app/pages/reports";
import { pageHead } from "../seo";
import { getReports } from "../functions";
export const Route = createFileRoute("/reports")({
  component: Page,
  loader: () => getReports(),
  head: () => pageHead(meta()),
});
