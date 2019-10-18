import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'/',
      redirect: { name: 'login' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('./views/verify.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: '/account',
      // name: 'account',
      component: () => import('./views/account/account.vue'),
      children: [
        { path: '', redirect: '/btn' },
        {
          path: '/addAccount',
          name: 'addAccount',
          component: () => import('./views/account/addAccount.vue')
        },
        {
          path: '/btn',
          name: 'btn',
          component: () => import('./views/account/btn.vue')
        }
      ]
    },
    {
      path: '/claimDetail',
      name: 'claimDetail',
      component: () => import('./views/claimDetail.vue')
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('./views/center.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/info.vue')
    },
    {
      path: '/bdDetail',
      name: 'bdDetail',
      component: () => import('./views/bdDetail.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('./views/appointment.vue')
    }
  ]
})
