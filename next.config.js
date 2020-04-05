module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./utils/get-content");
    }

    return config;
  },
};
