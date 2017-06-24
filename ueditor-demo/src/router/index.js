/**
 * Created by Administrator on 2017/6/18 0018.
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue';
import ShowUeditor from '@/components/ShowUeditor.vue';
import SetUeditor from '@/components/SetUeditor.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/edit',
      name: 'edit',
      component: SetUeditor,
      meta: { keepAlive: true }
    },
    {
      path: '/show',
      name: 'show',
      component: ShowUeditor
    }
  ]
})
