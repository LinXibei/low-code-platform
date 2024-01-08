import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/pages/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router;