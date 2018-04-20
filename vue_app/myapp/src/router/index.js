import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/home_page'
import classify from'@/components/classify'
import cart from'@/components/cart'
import mine from'@/components/mine'
import recommend from'@/components/recommend'
import VueScroller from 'vue-scroller'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)
Vue.use(VueScroller)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
     {
      path: '/home',
      component: homePage
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/cart',
      component: cart
    },
     {
     	//path: '/mine/:year',
      path: '/mine',
      component: mine
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
