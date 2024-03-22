import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue' //como se importe es como se usara, nombrar como al componente - NO mesclar minusculas y mayusculas


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/FormularioP.vue')
    }//para todas las demas vistas
  ]
})

export default router
