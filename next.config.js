require("dotenv").config();

module.exports = {
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/utils/get-content");
    }

    return config;
  },
};
