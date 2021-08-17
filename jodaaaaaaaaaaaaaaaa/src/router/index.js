import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router