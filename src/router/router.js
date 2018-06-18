import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/main'
import contentNav from '../components/content/contentNav'
import userManage from '../components/content/userManage'
import content from '../components/content/content'
import addNew from '../components/content/addNew'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path:'/contentNav',
          name:'contentNav',
          component:contentNav
        },{
          path:'/userManage',
          name:'userManage',
          component:userManage
        },{
          path:'/content',
          name:'content',
          component:content
        },{
          path:'/addNew',
          name:'addNew',
          component:addNew
        }
      ]
    } 
  ]
})
