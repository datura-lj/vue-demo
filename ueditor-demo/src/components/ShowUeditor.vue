<template>
  <div class="show-data">
    <ul>
      <li class="show-data-list" v-for="(item,index) in showDataArr" >
        <h6>我是第{{index}}条数据</h6>
        <p v-html="item.data"></p>
      </li>
    </ul>
  </div>
</template>
<script>
  import Event from '../assets/js/bus.js';
  export default {
    name: 'show-data',
    data () {
      return {
          showDataArr:[
            {
              data:`<ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p><strong>啦啦</strong></p></li><li><p><strong>我是一</strong>个人</p></li><li><p>我是一座神<br/></p></li></ul>`
            },
            {
              data:`<ol class=" list-paddingleft-2" style="list-style-type: decimal;"><li><p>下雨了</p></li><li><p>打雷了</p></li><li><p>下雪了</p></li><li><p>吃饭了<br/></p></li></ol>`
            },
            {
              data:`<p><strong><span style="font-size: 24px;">大家好：</span></strong></p><p><strong><span style="font-size: 24px;">&nbsp; &nbsp;<span style="font-size: 24px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">今天是2017年6月18日</span>。<br/></span></strong></p><ol class=" list-paddingleft-2" style="list-style-type: decimal;"><li><p><span style="font-size: 24px;">早饭<font face="黑体, SimHei">喝了一个黄小蕉；</font></span></p></li><li><p><em><span style="font-size: 24px;"><font face="黑体, SimHei">午饭准备吃筋头巴脑</font></span></em><span style="font-size: 24px;"><font face="黑体, SimHei">；</font></span></p></li><li><p><span style="font-size: 24px;"><font face="黑体, SimHei">晚饭？</font></span><span style="font-size: 24px; text-decoration: underline;"><font face="黑体, SimHei">吃啥呢？</font></span><span style="font-size: 24px;"><font face="黑体, SimHei">这是一个值得思考的问题。</font></span></p></li></ol><p><span style="font-size: 24px;"><font face="黑体, SimHei"></font></span><strong><span style="font-size: 24px;"><br/></span></strong></p>`
            },{
              data:`<p><span style="font-family: 宋体, SimSun;"><strong><span style="font-size: 24px;">大家好</span></strong></span><span style="font-size: 24px;">：</span></p><ul class=" list-paddingleft-2" style="list-style-type: circle;"><li><p><span style="font-size: 20px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">欢迎来学习web前端开发</span><span style="font-size: 20px;">;</span></p></li></ul><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p><span style="font-size: 20px; font-family: &quot;andale mono&quot;;">欢迎来学习web前端开发;</span></p></li></ul><ul class=" list-paddingleft-2" style="list-style-type: square;"><li><p><span style="font-size: 20px;">欢迎来学习web前端开发;</span></p></li></ul><ol class=" list-paddingleft-2" style="list-style-type: decimal;"><li><p><strong><span style="font-size: 24px;">我是前端三剑客之一的html；</span></strong></p></li><li><p><em>我是前端三剑客之一的css</em>;<span style="background-color: rgb(255, 0, 0);"></span></p></li><li><p><span style="text-decoration: underline;">我是前端三剑客之一的JavaScript。</span></p></li></ol><ol class=" list-paddingleft-2" style="list-style-type: lower-roman;"><li><p>我是前端三剑客之一的html；</p></li></ol><ol class=" list-paddingleft-2" style="list-style-type: upper-roman;"><li><p><span style="background-color: rgb(255, 0, 0);">我是前端三剑客之一的css;</span></p></li><li><p>我是前端三剑客之一的JavaScript。</p></li></ol><ol class=" list-paddingleft-2" style="list-style-type: upper-alpha;"><li><p><span style="background-color: rgb(255, 255, 0);">我是前端三剑客之一的html</span>；</p></li><li><p>我是前端三剑客之一的css;</p></li></ol><ol class=" list-paddingleft-2" style="list-style-type: decimal;"><li><p>?我是前端三剑客之一的JavaScript。</p></li></ol><p><br/></p>`
            }
          ]
      }
    },
    mounted(){
      const _this = this;
      Event.$on('seted', (val) => {
          _this.showDataArr.unshift({
              data:val
          })
//        console.log(this.showDataArr);
      });
    }
  }
</script>
<style>
  .show-data{
    background-color: #00a2d4;
  }
  .show-data-list ul{padding: 0 0 0 40px;}
  .show-data-list ol{padding: 0 0 0 40px;}
  .show-data-list{
    margin: 5px 0;
    border:1px dashed #ccc;
    background-color: rgba(0,0,0,0.1);
  }
  .show-data-list h6{
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: red;
  }
</style>
