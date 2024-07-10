import { createRouter, createWebHistory } from 'vue-router'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dataSource',
      name: 'dataSource',
      component: () => h('div', 'dataSource')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => h('div', 'layout')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => h('div', 'layout')
    }
  ]
})

export default router
