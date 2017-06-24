<template>
  <div class="hello">
    <div class="go-back" v-show="goBackState" @click="goBack">回去</div>
    <ul>
      <li v-for="item in webAddress">
        <a :href="item.link" target="showHere" @click="showIframe">{{item.name}}</a>
      </li>
    </ul>
    <iframe v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto src=""></iframe>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      iframeState:false,
      goBackState:false,
      webAddress: [
        {
            name:'router',
            link:'http://router.vuejs.org/'
        },
        {
          name:'vuex',
          link:'http://vuex.vuejs.org/'
        },
        {
          name:'iframeAPI',
          link:'https://msdn.microsoft.com/en-us/library/ms535258(v=vs.85).aspx'
        },
        {
          name:'必应',
          link:'http://cn.bing.com/'
        },
        {
          name:'国美在线',
          link:'https://www.gomeplus.com/'
        },
        {
          name:'12306-页面滚动',
          link:'http://www.12306.cn/'
        },
        {
          name:'iframe兼容',
          link:'http://blog.sina.com.cn/s/blog_a5262d050102wd5i.html'
        },
        {
          name:'iframe滚动',
          link:'http://blog.sina.com.cn/s/blog_86acf48e0102vhaw.html'
        },
        {
          name:'百度',
          link:'https://www.baidu.com/'
        },
        {
          name:'axios',
          link:'https://www.awesomes.cn/repo/mzabriskie/axios'
        },
        {
          name:'leono',
          link:'http://support.lenovo.com.cn/'
        }
      ]
    }
  },
  mounted(){
    const oIframe = document.getElementById('show-iframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + 'px';
    oIframe.style.height = deviceHeight + 'px';
  },
  methods:{
    goBack(){
      console.log('回到主页');
      this.goBackState = false;
      this.iframeState = false;
    },
    showIframe(){
      console.log('显示iframe');
      this.goBackState = true;
      this.iframeState = true;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  #show-iframe{
    height: 100%;
    width: 100%;
    background-color: aquamarine;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
  }
  .go-back{
    position: fixed;
    left: 0;
    top: 0;
    background-color: aqua;
    z-index: 3;
  }
</style>
