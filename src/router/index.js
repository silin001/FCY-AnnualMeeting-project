import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"; //首页

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "home",
    component: Home
  },

  {
    path: "/login",
    name: "登录",
    component: () => import("../views/login")
  },
  // 一级路由重定向
  { path: "*", redirect: "/Home" }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
