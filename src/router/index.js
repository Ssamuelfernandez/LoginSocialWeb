import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      props: { view: 'login' },
    },
    {
      path: '/register',
      name: 'register',
      component: LoginView,
      props: { view: 'register' }, 
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: LoginView,
      props: { view: 'forgot' },
    },
  ]
})

export default router
