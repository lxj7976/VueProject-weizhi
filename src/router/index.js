import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home/Home'
import Banner from 'common/Banner'
import Search from '@/components/common/Search'
import Baking from 'pages/Baking/Baking'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
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
      path:'/baking',
      component:Baking
    }
  ]
})
