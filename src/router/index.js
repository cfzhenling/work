import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import UCenter from "@/pages/UCenter"
import NotFound from "@/pages/NotFound"
import Layout from "@/pages/layout"
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path:"/",
      component:Layout,
      children:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ucenter',
      name: 'UCenter',
      component:UCenter,
      meta:{
        isLogin:true
      },
    }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
      const token = localStorage.getItem("token");
      if (token) {
          next();
      } else {
          next({
              path: '/login'
          })
      }
  }
  next();
})

export default router
