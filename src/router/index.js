import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home/Home'
import Banner from 'common/Banner'
import Search from '@/components/common/Search'
import Header from '@/components/common/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/banner',
      component: Banner
		},
		{
    	path:"/search",
    	component:Search
   },
   {
    	path:"/header",
    	component:Header
    }
  ]
})
