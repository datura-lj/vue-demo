<template>
  <div id="app">
    <div class="header">
      <h1 v-text="msg" class="top"></h1>
    </div>
    <div class="link">
      <router-link to="/hello">下层的跳转</router-link>
    </div>
    <div class="show-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './common/js/hammer';

import './common/js/fastclick';

export default {
  name: 'app',
  data(){
      return{
          msg:'上层'
      }
  },
  created(){
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
        console.log('事件绑定了')
      }, false);
    }
  },
  mounted(){
    /*var myElement = document.querySelector('.box')
    var hammer = new Hammer.Manager(myElement);
    hammer.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
    hammer.add( new Hammer.Tap({ event: 'singletap' }) );
    hammer.get('doubletap').recognizeWith('singletap');
    hammer.get('singletap').requireFailure('doubletap');
    hammer.on('doubletap', function(ev) {
      console.log(ev.type);
    }).on('singletap', function(ev) {
      console.log(ev.type);
    });*/
    var myElement = document.querySelector('.top');
    var hammer = new Hammer.Manager(myElement);
    hammer.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
    hammer.on('doubletap',this.top);
  },
  methods:{
      top(){
          this.msg = '点击后的上层'
      }
  }
}
</script>

<style>
  *{margin: 0;padding: 0}
  a{text-decoration: none}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .header{
    width: 200px;
    height: 200px;
    background-color: lawngreen;
    line-height:200px;
    /*pointer-events:none;*/
    position: fixed;
    left: 0;
    top: 0;
  }
  .link{
    height: 200px;
    background-color: antiquewhite;
    text-align: right;
    line-height: 200px;
  }
  .link a{
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: block;
    /*pointer-events: none;*/
  }
</style>
