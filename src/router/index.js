import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import homeHeader from '../components/homeHeader.vue'
import singleProduct from '../components/products/singleProduct.vue'
import Error from '../components/Error.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contanct',
    name: 'Contanct',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homeHeader',
    name: 'homeHeader',
    component: homeHeader
  },
  {
    path:'/homeHeader/:id',
    name: 'singleProduct',
    component: singleProduct,
    props: true
  },
  {
    path:'/:catchAll(.*)',
    name:'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
