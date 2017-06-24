<template>
  <div class="set">
    <div class="btn-groups">
      <button @click="save">保存编辑</button>
    </div>
    <div id="ueditor" type="text/plain"></div>
  </div>
</template>

<script>
  import '../../static/utf8-jsp/ueditor.config';
  import '../../static/utf8-jsp/ueditor.all';
  import '../../static/utf8-jsp/lang/zh-cn/zh-cn';
  import Event from '../assets/js/bus.js';

  export default {
    name: 'set',
    data () {
      return {
        ue: ''
      }
    },
    mounted () {
      this.ue = UE.getEditor('ueditor',{
        BaseUrl: '',
        UEDITOR_HOME_URL: 'static/utf8-jsp/',
        toolbars: [
          ['fullscreen', 'source', 'undo', 'redo'],
          ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc']
        ]
      })
    },
    methods: {
      save(){
        let ueditordata = UE.getEditor('ueditor').getContent();
        Event.$emit('seted', ueditordata);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-groups{
    width: 100%;
    border-radius: 10px;
    borer:1px lawngreen solid;
    padding: 10px 0;
    text-align: center;
    background-color: rgba(0,0,0,.1);
  }
  .btn-groups button{font-size: 18px;}
  #ueditor{
    width: 100%;
    height: 400px;
  }
</style>
