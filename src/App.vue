<template>
  <div id="app">
    <!-- 路由展示home 页面 -->
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  created() {
    // 页面刷新后判断重定向的首页，如果不是就用路由的方法replace 切换
    // if (this.$router.path !== "/index") {
    //   this.$router.replace("/index");
    // }
  }
};
</script>
