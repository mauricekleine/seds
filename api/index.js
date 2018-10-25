import { createClient } from "contentful";
import fs from "fs";
import path from "path";

require('dotenv').config({
  path: '.env'
});

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN
});

const types = ["documents"];

export const getcontent = async () => {
  types.map(type => {
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    });

    if (entries.total === 1) {
      const { fields } = entries.items[0];

      fs.writeFileSync(
        path.join(__dirname, `${type}.json`),
        JSON.stringify(fields)
      );
    }
  });
};

if (process.argv[2] === "install") {
  getcontent();
}
