import { createRouter, createWebHistory } from 'vue-router'
import Bedankt from '../views/Bedankt'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/bedankt',
        name: 'Bedankt',
        component: Bedankt,
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router