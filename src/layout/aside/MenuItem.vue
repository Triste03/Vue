<template>
  <el-sub-menu v-if="hasChildren" :index="fullPath" class="menu-sub" :title="menuTitle">
    <template #title>
      <el-icon v-if="route.meta?.icon" class="menu-icon">
        <component :is="route.meta.icon" />
      </el-icon>
      <span class="menu-text">{{ route.meta?.title }}</span>
    </template>

    <MenuItem v-for="child in route.children" :key="child.path" :route="child" :parent-path="fullPath" />
  </el-sub-menu>

  <el-menu-item v-else :index="fullPath" @click="handleClick" :title="menuTitle">
    <el-icon v-if="route.meta?.icon" class="menu-icon">
      <component :is="route.meta.icon" />
    </el-icon>
    <span class="menu-text">{{ route.meta?.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  route: RouteRecordRaw
  parentPath?: string
}>()

const router = useRouter()
const currentRoute = useRoute()

const menuTitle = computed(() => ((props.route.meta?.title ?? '') as string))

const hasChildren = computed(
  () => Array.isArray(props.route.children) && props.route.children.length > 0
)

// 计算当前路由在菜单中的完整路径
const fullPath = computed(() => {
  const parent = props.parentPath ?? ''
  const path = props.route.path || ''

  // 如果本身是绝对路径，直接返回
  if (path.startsWith('/')) return path

  if (!parent) return `/${path}`

  return `${parent.replace(/\/$/, '')}/${path}`
})

const handleClick = () => {
  if (currentRoute.path !== fullPath.value) {
    router.push(fullPath.value)
  }
}
</script>

<style scoped lang="less">
.menu-title {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}


.menu-icon {
  font-size: 18px;
  color: #a5b4fc;
  transition: transform 0.2s ease;
}
</style>
