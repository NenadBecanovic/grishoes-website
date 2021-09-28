import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Shoes from '../components/Shoes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/obuca',
    name: 'Shoes',
    component: Shoes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
