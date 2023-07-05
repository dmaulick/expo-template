// This is referenced in the context of node_modules/expo-router/entry.js, so the path to src is rooted there (note this would change in a monorepo)
process.env.EXPO_ROUTER_APP_ROOT="../../src/app"

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Relay plugin should be first plugin to run - https://relay.dev/docs/getting-started/installation-and-setup/#set-up-babel-plugin-relay
      require.resolve("relay"),
      require.resolve("expo-router/babel"),
      [
        'transform-inline-environment-variables',
        {
          include: ['EXPO_ROUTER_APP_ROOT'],
        },
      ],
    ],
  };
};
