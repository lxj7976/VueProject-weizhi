import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home/Home'
import Banner from 'common/Banner'
import Search from 'common/Search'
import Baking from 'pages/Baking/Baking'
import School from 'pages/School/School'
import My from 'pages/My/My'
import ImgList from 'common/ImgList'


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
    	path:"/search",
    	component:Search
    },
    {
      path:'/baking',
      component:Baking
    },
    {
      path:'/school',
      component:School
    },
    {
      path:'/my',
      component:My
   },
  ]
})
