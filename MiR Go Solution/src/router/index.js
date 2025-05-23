import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Mirgo from '../views/mirgo.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/MirGo',
      name: 'MirGo',
      component: Mirgo
    },
  ]})


export default router