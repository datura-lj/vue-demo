<template>
  <div id="app">
    <h1 class="title">Ueditor与Vue结合</h1>
    <hr>
    <div class="jump">
      <router-link to="./edit">进入编辑页面</router-link>
      <router-link to="./show">数据展示页面</router-link>
    </div>
    <hr>
    <div>
      <keep-alive>
        <router-view v-if="!$route.meta.notKeepAlive"></router-view>
      </keep-alive>
      <router-view v-if="$route.meta.notKeepAlive"></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style type="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title{
  width: 100%;
  text-align: center;
}
.jump{
  padding: 10px 0;
  text-align: center;
  background-color: blue;
}
a{
  display: inline-block;
  margin: 5px;
  color: red;
  background-color: lawngreen;
  padding: 4px;
}
</style>
