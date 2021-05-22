import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/week3-ex1-ex2',
    name: 'Week3Ex1Ex2',
    component: () => import('@/views/week3/ex1-ex2.vue'),
  },
  {
    path: '/week3-ex3',
    name: 'Week3Ex3',
    component: () => import('@/views/week3/ex3.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
