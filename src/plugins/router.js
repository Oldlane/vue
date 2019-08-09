import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/pages/Home'
import Follow from '@/pages/Follow'
import User from '@/pages/User'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Column from '@/pages/Column'
import Detail from '@/pages/Detail'
import Error from '@/pages/Error'

let routes=[
    {path:'/home',component:Home},
    {path:'/follow',component:Follow},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/column',component:Column},
    {name:"detail",path:'/detail/:id',component:Detail},
    {path:'/',redirect:'/home'},
    {path:'*',component:Error}
]

let router = new VueRouter({
    routes,
    scrollBehavior:(to,from,savePostion)=>{
        return {x:0,y:0}
    }
})

export default router