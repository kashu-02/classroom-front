import Vue from 'vue'
import VueRouter from 'vue-router'

// store
import Store from '@/store/index.js'

//views
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ManageClasses from '../views/ManageClasses.vue'
import Settings from '../views/Settings.vue'
import TermsofUse from '../views/TermsofUse'
import PrivacyPolicy from '../views/PrivacyPolicy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/classes',
    name: 'Classes',
    component: ManageClasses,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true }
  },
  {
    path: '/termsofuse',
    name: 'TermsofUse',
    component: TermsofUse
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.jwt_token) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router
