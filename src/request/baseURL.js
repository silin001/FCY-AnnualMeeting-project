let baseUrl = ""; //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "https://map.fancysx.com"; //开发环境url
    break;
  case "test": // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = "https://lyt.fancysx.com"; //测试环境中的url
    break;
  case "production":
    baseUrl = "https://map.fancysx.com"; //生产上线环境url
    break;
}

export default baseUrl;
