const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const path = require("path");

module.exports = {
  // webpack: (config, { isServer }) => {
  //     // Fixes npm packages that depend on `fs` module
  //     if (!isServer) {
  //       config.node = {
  //         fs: 'empty',
  //         tls: 'empty',
  //         net: 'empty',
  //         console: 'empty',
  //       }
  //     }
  //     return config;
  // },
  cssLoaderOptions: {
    url: true,
    importLoaders: 1,
    sourceMap: true,
    modules: true,
    getLocalIdent: (context, localIdentName, localName, options) => {
      const pathSplit = context.context.split("/");

      const pathSplitLength = pathSplit.length;

      const path = pathSplit[pathSplitLength - 1];

      const resourcePathSplit = context.resourcePath.split("/");

      const resourcePathLength = resourcePathSplit.length;

      const resourcePath = resourcePathSplit[resourcePathLength - 1].split(
        "."
      )[0];

      // const resourcePath = path.split('.')[0];

      if (path === "styles") {
        return localName;
      }
      return `${path}_${resourcePath}_${localName}`;
    },
  },
};
