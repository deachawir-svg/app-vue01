import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Customer',
    name: 'Customer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/type',
    name: 'type',
    component: () => import('../views/Type.vue')
  },

  {
    path: '/Employees',
    name: 'Employees',
    component: () => import('../views/Employees.vue')
  },
  
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/Add_customer.vue')
  },
  
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import('../views/Add_employee.vue')
  },

  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },

  {
    path: '/product_API',
    name: 'product_API',
    component: () => import('../views/Product_API.vue')
  },

  {
    path: '/show_product',
    name: 'show_product',
    component: () => import('../views/Show_product.vue')
  },

  {
    path: '/Customer_crud',
    name: 'Customer_crud',
    component: () => import('../views/Customer_crud.vue')
  },

  {
    path: '/employees_crud',
    name: 'employees_crud',
    component: () => import('../views/employees_crud.vue')
  },
  {
    path: '/type_crud',
    name: 'type_crud',
    component: () => import('../views/Type_crud.vue')
  },

  {
    path: '/product_crud',
    name: 'product_crud',
    component: () => import('../views/Product_crud.vue')
  },

  {
    path: '/emproyees_crud_image',
    name: 'emproyees_crud_image',
    component: () => import('../views/Emproyees_crud_image.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
