import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Template',
    component: () => import('@/views/template/index')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/editor/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
