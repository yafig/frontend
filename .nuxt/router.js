import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c9ab12a = () => interopDefault(import('../pages/feed.vue' /* webpackChunkName: "pages/feed" */))
const _44dbac0d = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _77cdb34d = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _546854a2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _d1e82198 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _12dc4682 = () => interopDefault(import('../pages/p/_id/index.vue' /* webpackChunkName: "pages/p/_id/index" */))
const _57b54c72 = () => interopDefault(import('../pages/u/_id/index.vue' /* webpackChunkName: "pages/u/_id/index" */))
const _7b3408f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/feed",
    component: _4c9ab12a,
    name: "feed"
  }, {
    path: "/login",
    component: _44dbac0d,
    name: "login"
  }, {
    path: "/profile",
    component: _77cdb34d,
    name: "profile"
  }, {
    path: "/register",
    component: _546854a2,
    name: "register"
  }, {
    path: "/search",
    component: _d1e82198,
    name: "search"
  }, {
    path: "/p/:id?",
    component: _12dc4682,
    name: "p-id"
  }, {
    path: "/u/:id?",
    component: _57b54c72,
    name: "u-id"
  }, {
    path: "/",
    component: _7b3408f6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
