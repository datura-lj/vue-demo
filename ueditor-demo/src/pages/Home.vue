<template>
  <div class="hello">
    <h1 class="title">我是Ueditor</h1>
    <router-link to="./edit">
      <button>进入富文本编辑器编辑页面</button>
    </router-link>
    <router-link to="./show">
      <button>数据展示页面</button>
    </router-link>
  </div>
</template>
<style scoped>
  .title{
    width: 100%;
    text-align: center;
  }
</style>
