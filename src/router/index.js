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
    component: () => import('../views/Customer.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/type',
    name: 'type',
    component: () => import('../views/Type.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/Employees',
    name: 'Employees',
    component: () => import('../views/Employees.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/Add_customer.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import('../views/Add_employee.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/product_API',
    name: 'product_API',
    component: () => import('../views/Product_API.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/show_product',
    name: 'show_product',
    component: () => import('../views/Show_product.vue')
  },

  {
    path: '/Customer_crud',
    name: 'Customer_crud',
    component: () => import('../views/Customer_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/employees_crud',
    name: 'employees_crud',
    component: () => import('../views/employees_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  {
    path: '/type_crud',
    name: 'type_crud',
    component: () => import('../views/Type_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/product_crud',
    name: 'product_crud',
    component: () => import('../views/Product_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/emproyees_crud_image',
    name: 'emproyees_crud_image',
    component: () => import('../views/Emproyees_crud_image.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/productDetail',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue')
  
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* ✅ ROUTE GUARD */
router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem("adminLogin")

  // ถ้าหน้านั้นต้อง login แต่ยังไม่ login
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } 
  // ถ้า login แล้วแต่พยายามเข้าหน้า login
  else if (to.path === '/login' && isLoggedIn) {
    next('/')   // หรือ dashboard
  }
  else {
    next()
  }
})

export default router
