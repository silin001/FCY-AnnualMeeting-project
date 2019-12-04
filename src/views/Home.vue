<style lang="less">
.home {
  width: 100%;
  height: 100%;
  h1 {
    color: red;
  }
}
//  进入前和结束后的状态
.my-enter,
.my-leave-to {
  opacity: 0;
  transform: translateX(80px);
}
// 进入和离开的动画时间段
.my-enter-active,
.my-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <div class="home">
    <button @click="goLogin">跳转登录页面</button>
    <h1>Hello world 我是home页面</h1>
    <button v-on:click="show = !show">
      Toggle
    </button>

    <transition name="my">
      <p v-if="show">hello</p>
    </transition>
    <br />
    <ul>
      <li v-for="data of datas" :key="data.id">
        <h2>{{ data.id }}</h2>
        <p class="completed">{{ data.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import https from "../request/https";
export default {
  name: "home",
  data() {
    return {
      datas: [],
      show: true
    };
  },
  components: {},
  mounted() {
    this.onGET();
    this.onPOST(27);
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login"
        // params: {
        //   id: 1
        // }
      });
    },
    // GET请求
    onGET() {
      var url = "http://jsonplaceholder.typicode.com/todos";
      https
        .GetRequest(url)
        .then(res => {
          // console.log(res);
          this.datas = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // POST请求
    onPOST(poiTypeid) {
      var params = {
        poiTypeid: poiTypeid
      };
      https
        .PostRequest("/api/queryMapPointInfo", params)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
