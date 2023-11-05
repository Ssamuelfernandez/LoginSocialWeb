
import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        props: { view: 'login' },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue'),
        props: { view: 'register' },
      },
      {
        path: 'forget',
        name: 'forget',
        component: () => import('@/views/ForgetPassword.vue'),
        props: { view: 'forgot' },
      },
    ],
  },
  {
    path: '/app',
    component: AppLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(''), // Agrega la ruta para el dashboard
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import(''), // Agrega la ruta para el perfil
      },
      // Otras rutas de la aplicación interna
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
