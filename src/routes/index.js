import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../pages/Login.vue'
import Inicial from '../pages/Inicial.vue'
import Cadastro from '../pages/Cadastro.vue'

const routes = [
  { path: '/',name:'Login', component: Inicial },
  {path: '/Login', component: Login },
  {path: '/Cadastro', component: Cadastro },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router