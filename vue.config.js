const path = require("path");
module.exports = {
  /* 部署  生产环境和 开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  // publicPath: process.env.NODE_ENV === "production" ? "/public/" : "./",
  publicPath: "./",
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  // outputDir: "dist",
  outputDir: process.env.outputDir, //测试环境打包到test文件夹
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",

  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,

  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,

  /* 代码保存时进行eslint检测 */
  lintOnSave: true,

  //高德地图配置
  // configureWebpack: {
  //   externals: { AMap: "AMap" }
  // },
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    // host: "0.0.0.0",
    // port: 8066,
    // https: false,
    // hotOnly: false
    /* 使用代理 跨域 */
    proxy: {
      "/api": {
        // target: "https://map.fancysx.com" /* 目标代理服务器地址 */,
        target: "https://lyt.fancysx.com",
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "" //重写接口
        }
      }
    }
  },
  // less
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less"
      // patterns: [
      //   //这个是加上自己的路径，
      //   //注意：试过不能使用别名路径
      //   path.resolve(__dirname, "./src/assets/home.less")
      // ]
    }
  }
};
