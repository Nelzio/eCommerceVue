import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '', component: () => import('../views/home/Products.vue') },
      { path: 'details', component: () => import('../views/home/Details.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('../layouts/Base.vue'),
    children: [ 
      { path: '', component: () => import('../views/admin/Index.vue') },
      { path: 'add', component: () => import('../views/admin/products/Add.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
