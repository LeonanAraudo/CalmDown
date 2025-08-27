import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../pages/Login.vue'

const routes = [
  { path: '/',name:'Login', component: Login },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router