const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  console.log("Here", phase);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("returning from first if");
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
  console.log("returning from 2nd if");
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
