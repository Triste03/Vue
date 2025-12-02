<template>
  <el-container>
    <Aside />
    <el-container>
      <Header />
      <el-main class="main">
        <RouterView />
      </el-main>
      <el-footer class="footer">
        Copyright © {{ new Date().getFullYear() }} Vue
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from './aside/index.vue'
import Header from './header/index.vue'
</script>

<style scoped lang="less">
.main {
  padding: 16px 20px;
  background: #f3f4f6;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}
</style>
