import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/app/dataSource'
    },
    {
      path: '/app/dataSource',
      name: 'dataSource',
      component: () => import('../views/DataSourceView.vue')
    },
    {
      path: '/app/layout',
      name: 'layout',
      component: () => import('../views/LayoutView.vue')
    },
    {
      path: '/app/actions',
      name: 'actions',
      component: () => import('../views/ActionsView.vue')
    }
  ]
})

export default router
