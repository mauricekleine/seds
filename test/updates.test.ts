import { expect, test } from "bun:test";
import { meta } from "../app/pages/updates.$slug";
test("update metadata treats prototype keys as unknown slugs", () => {
  for (const slug of ["__proto__", "constructor", "toString", "hasOwnProperty", "missing"])
    expect(meta({ params: { slug } })).toEqual({
      title: "Update - SEDS",
      description: "Field update from SEDS programs.",
    });
  expect(meta({ params: { slug: "annual-science-fair" } }).title).toBe("Annual Science Fair at SEDS School - SEDS");
});
