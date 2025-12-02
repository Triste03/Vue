<template>
  <el-aside :width="collapsed ? '60px' : '220px'" class='aside'>
    <!-- 顶部 LOGO -->
    <div class="logo_box" @click="goHome">
      <el-icon class="logo_icon">
        <Guide />
      </el-icon>
      <span v-if="!collapsed" class="logo_text">Vue</span>
    </div>

    <!-- 侧边菜单 -->
    <el-menu class="menu" :default-active="activeMenu" :collapse="collapsed" :collapse-transition="false">
      <MenuItem v-for="item in layoutRouters" :key="item.path" :route="item" />
    </el-menu>

  </el-aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from "pinia";
import { layoutRouters } from '@/router/route'
import { Guide } from '@element-plus/icons-vue'
import { useGlobalConfig } from '@/stores/global'
import MenuItem from './MenuItem.vue'

const globalConfig = useGlobalConfig()
const { collapsed } = storeToRefs(globalConfig)

const route = useRoute()
const router = useRouter()

// 当前激活菜单：始终使用当前路由的完整 path
const activeMenu = computed(() => route.path)

const goHome = () => {
  if (route.path !== '/home') {
    router.push('/home')
  }
}
</script>

<style scoped lang="less">
.aside {
  height: 100vh;
  border-right: 1px solid #e5e7eb;
}

.logo_box {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  cursor: pointer;
  transition: justify-content 0.2s ease;
}

.logo_icon {
  font-size: 26px;
  color: #38bdf8;
  transition: transform 0.2s ease;
}

.logo_text {
  margin-left: 10px;
  font-size: 18px;
}

.menu {
  border-right: 1px solid transparent;
}
</style>
