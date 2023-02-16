const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    configure: (config) => {
      config.output.library = `airbnb`;
      config.output.libraryTarget = 'umd';
      config.output.publicPath = '//localhost:3010/'
      return config;
    },
    devServer: (_) => {
      const config = _;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      return config;
    },
  }
}
