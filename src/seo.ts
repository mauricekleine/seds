import { calculateSEDSYears } from "../app/utils/seds-years";
export function pageHead(meta: { title?: string; description?: string }) {
  return {
    meta: [
      { title: meta.title ?? "SEDS - Social Education and Development Society" },
      {
        name: "description",
        content:
          meta.description ??
          `SEDS (Social Education and Development Society) has been transforming rural communities in Andhra Pradesh through sustainable development, education, and environmental programs for over ${calculateSEDSYears()} years.`,
      },
    ],
  };
}
