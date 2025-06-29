import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../components/sign_in.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/sign_up.vue'),
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: () => import('../components/depo_sit.vue'),
    },
  ],
})

export default router
