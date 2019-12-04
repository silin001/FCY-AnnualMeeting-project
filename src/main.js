import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import QS from "qs"; //传参序列化
Vue.config.productionTip = false;
// 1注册全局公共组件(缺点：一个组件内容改变  所有调用该组件内容也改变)
// import topBar from "./components/topBar";
// Vue.component("topBar", topBar);
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.prototype.$axios = axios; //在原型链上挂载这个方法 在其他组件才可以使用（或者在各个组件中引入axios）
Vue.prototype.qs = QS;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
