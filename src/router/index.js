import Vue from 'vue' //相当于 var Vue = require('vue')
import VueRouter from 'vue-router'
Vue.use(VueRouter) //Vue.propertype.$route Vue.propertype.$router

import axios from 'axios'
//设置baseURL
axios.defaults.baseURL = "http://47.106.148.205:8899/"
//开启cookies
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//路由对象相关
/**
import goodslist from '../components/goods/goodslist'
import shopcart from '../components/shopcart/shopcart'
import goodsinfo from '../components/goods/goodsinfo'
import order from '../components/order/order'
import login from '../components/account/login'
import payOrder from '../components/pay/payOrder'
import pcPaySuccess from '../components/pay/pcPaySuccess'
import vipCenter from '../components/vipCenter/vipCenter'
import myOrders from '../components/vipCenter/myOrders'
import orderInfo from '../components/vipCenter/orderInfo'
 */
const goodslist = () => import("../components/goods/goodslist")
const shopcart = () => import("../components/shopcart/shopcart")
const goodsinfo = () => import("../components/goods/goodsinfo")
const order = () => import("../components/order/order")
const login = () => import("../components/account/login")
const payOrder = () => import("../components/pay/payOrder")
const pcPaySuccess = () => import("../components/pay/pcPaySuccess")
const vipCenter = () => import("../components/vipCenter/vipCenter")
const myOrders = () => import("../components/vipCenter/myOrders")
const orderInfo = () => import("../components/vipCenter/orderInfo")
const table = () => import("../test/table")
const table2 = () => import("../test/table2")
const iframe = () => import("../test/iframe")
const APP = () => import("../test/APP")
const father = () => import("../test/father")
const appbus = () => import("../test/appbus")
const game = () => import("../test/game")
const table4= () => import("../test/table4")
const upload= () => import("../test/upload")
const form= () => import("../form/form")
const vuex1= () => import("../form/vuex1")
const select= () => import("../form/select")

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/goodslist' },
        { path: '/goodslist', component: goodslist },
        { path: '/shopcart', component: shopcart },
        { path: '/goodsinfo/:goodsId', component: goodsinfo },
        { path:'/login',component:login},
        { path:'/table',component:table},
        { path:'/table2',component:table2,},
        { path:'/cicdMain',component:game,},
        { path:'/iframe',component:iframe},
        { path:'/table4',component:table4},
        { path:'/app',component:APP},
        { path:'/father',component:father},
        { path:'/appbus',component:appbus},
        { path:'/upload',component:upload},
        { path:'/form',component:form},
        { path:'/vuex1',component:vuex1},
        { path:'/select',component:select},
        //==================华丽的分隔线，下面都是需要先判断是否登录的
        //meta 代表的是给某个路由规则额外设置些数据
        { path: '/order/:ids', component: order,meta: { requiresAuth: true } },
        { path: '/payOrder/:orderId', component: payOrder,meta: { requiresAuth: true } },
        { path: '/pcPaySuccess', component: pcPaySuccess,meta: { requiresAuth: true } },
        { path: '/vipCenter', component: vipCenter,meta: { requiresAuth: true } },
        { path: '/myOrders', component: myOrders,meta: { requiresAuth: true } },
        //params
        // { name:'orderInfo', path: '/orderInfo/:orderId/:goodsId',component:orderInfo,meta: { requiresAuth: true } },
        //query
        { path: '/orderInfo',component:orderInfo,meta: { requiresAuth: true } }
    ]
})

//导航守卫
/**
 * to:Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: 决定你是否能继续往下走，可以理解成是一个开关
 */
router.beforeEach((to, from, next) => {
    //记录最后一次访问的路径(除开登录路径)
    if(to.path!='/login'){
        localStorage.setItem('lastVisitPath',to.path)
    }

    if (to.meta.requiresAuth) {//需要进行登录验证,才能去的组件order.vue
        axios.get('site/account/islogin').then(res=>{
            if(res.data.code=='nologin'){//没有登录
                //跳转到登录页面
                // router.push({path:'/login'})
                next('/login') //相当于上面的写法
            }else{
                next()
            }
        })
    } else {//不需要登录验证就可以去的组件，比如goodslist.vue,goodsinfo.vue
        next()
    }
})

export default router