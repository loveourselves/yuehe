import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import group from '@/components/group/group'
import shopcar from '@/components/shopcar/shopcar'
import me from '@/components/me/me'
import reg from '@/components/reg/reg'
import details1 from '@/components/details1/details1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    }
  ]
})
