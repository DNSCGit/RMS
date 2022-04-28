import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [{
      path: '/',
      component: () => import ('../views/Login.vue'),
    },]
  },
  {
    path: '/home',
    name: 'Main',
    component: () => import('../layouts/main.vue'),
    children: [{
      path: '/dashboard',
      component: () => import ('../views/Dashboard.vue'),
    },
    {
      path: '/home',
      component: () => import ('../views/Home.vue'),
      },
    {
      path: '/about',
      component: () => import ('../views/About.vue'),
    },
    {
      path: '/profile',
      component: () => import ('../views/Profile.vue'),
      },
  ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
