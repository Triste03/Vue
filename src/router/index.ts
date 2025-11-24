import { createRouter, createWebHashHistory } from "vue-router";
import { staticRoutes, errorRoutes } from "./route";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...errorRoutes],
});

export default router;
