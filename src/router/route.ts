import { home_path } from "@/constants";
import { RouteRecordRaw } from "vue-router";
import {
  House,
  FolderOpened,
} from '@element-plus/icons-vue'

export const layoutRouters: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/view/home/index.vue"),
    meta: {
      title: "首页",
      icon: House,
    },
  },
  {
    path: "/file",
    name: "file",
    meta: {
      title: "文件管理",
      icon: FolderOpened,
    },
    children:[
      {
        path: "library",
        name: "file-library",
        component: () => import("@/view/file/file-library/index.vue"),
        meta: {
          title: "文件库",
        }
      }
    ]
  },
];

export const staticRoutes = [
  {
    path: "/",
    redirect: home_path,
  },
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: layoutRouters,
  },
];

export const errorRoutes = [
  {
    path: "/500",
    name: "no-network",
    component: () => import("@/view/error/500.vue"),
    meta: {
      title: "无网络",
      hide: true,
    },
  },
  {
    path: "/:path(.*)*",
    name: "not-found",
    component: () => import("@/view/error/404.vue"),
    meta: {
      title: "未找到",
      hide: true,
    },
  },
];
