import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/editor',
    name: '编辑器',
    component: () => import('@/pages/editor-area/index.tsx')
  },
  {
    path: '/home',
    name: '主页',
    component: () => import('@/pages/home/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router;