<template>
  <el-header class="header">
    <div class="header_left">
      <!-- 折叠按钮 -->
      <div class="collapse_toggle" @click="onCollapsed">
        <el-icon :size="16">
          <Fold v-if="!collapsed" />
          <Expand v-else />
        </el-icon>
      </div>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="`${item.title}-${index}`">
          <router-link v-if="(index !== breadcrumbs.length - 1) && item.path" :to="item.path">
            {{ item.title }}
          </router-link>
          <span v-else>{{ item.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="header_right">
      <!-- 用户信息 -->
      <div class="user_info">
        <el-icon>
          <User />
        </el-icon>
        <span>欢迎，admin ~</span>
      </div>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalConfig } from '@/stores/global'
import { storeToRefs } from "pinia";
import { User } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';

const globalConfig = useGlobalConfig()
const { collapsed } = storeToRefs(globalConfig)
const route = useRoute()

// 折叠
const onCollapsed = () => globalConfig.toggleCollapsed()

const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.meta?.title && r.path !== '/')
    .map((r) => ({
      title: r.meta?.title,
      path: (['string', 'object'].includes(typeof r.redirect) ? r.redirect : r.path) as string,
    }))
})
</script>



<style scoped lang="less">
.header {
  height: 44px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
}

.header_left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.collapse_toggle {
  height: 16px;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.collapse_toggle:hover {
  background: #eff6ff;
  color: #3b82f6;
  transform: translateX(1px);
}

.breadcrumb {
  font-size: 13px;
  color: #6b7280;
}

:deep(.el-breadcrumb__inner),
:deep(.el-breadcrumb__inner a) {
  font-weight: 500;
  color: #6b7280;
  transition: color 0.2s ease;
}

:deep(.el-breadcrumb__inner a:hover) {
  color: #2563eb;
}

:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
  color: #111827;
  font-weight: 600;
}

.user_info {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
