const fs = require("fs");
const path = require("path");

require("dotenv").config({
  path: ".env"
});

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN
});

const filePath = path.join(__dirname, "data");

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath);
}

["reports"].map(async type => {
  const entries = await client.getEntries({
    content_type: type
  });

  fs.writeFileSync(
    path.join(filePath, `${type}.json`),
    JSON.stringify(entries)
  );
});
