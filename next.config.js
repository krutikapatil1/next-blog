const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        reactStrictMode: true,
        mongodb_username: "nextJsPractice",
        mongodb_password: "nextJsPractice34",
        mongodb_cluster: "cluster0",
        mongodb_site: "my-site-dev",
      },
    };
  }
  return {
    env: {
      reactStrictMode: true,
      mongodb_username: "nextJsPractice",
      mongodb_password: "nextJsPractice34",
      mongodb_cluster: "cluster0",
      mongodb_site: "my-site",
    },
  };
};
