import Vue from 'vue'
import Router from 'vue-router'
import Introduction from './views/Introduction.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/spec',
      name: 'spec',
      // route level code-splitting
      // this generates a separate chunk (spec.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "spec" */ './views/Spec.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import( /* webpackChunkName: "history" */ './views/History.vue')
    },
    {
      path: '/*',
      name: 'unknown',
      component: () => import( /* webpackChunkName: "unknown" */ './views/unknown.vue')
    }
  ]
})
