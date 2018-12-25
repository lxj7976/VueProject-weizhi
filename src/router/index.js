import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home/Home'
import Banner from 'common/Banner'
import Search from 'common/Search'
import Baking from 'pages/Baking/Baking'
import School from 'pages/School/School'
import My from 'pages/My/My'
import Header from 'common/Header'


import Focus from 'pages/Baking/table/Focus'
import New from 'pages/Baking/table/New'
import Excellent from 'pages/Baking/table/Excellent'
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
      children:[
        {path:'focus',component:Focus},
        {path:'new',component:New},
        {path:'excellent',component:Excellent},
        {path:'',component:New}
      ],
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
   {
    	path:"/header",
    	component:Header
    }
    
  ]
})
