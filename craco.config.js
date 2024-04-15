const path = require("path")
const CracoLessPlugin = require("craco-less")
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    proxy: {
      "/v1": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: { "^/v1": "/v1" }
      }
    }
  },
  webpack: {
    alias: {
      "@": resolve("src")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@theme-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
