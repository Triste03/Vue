<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <el-config-provider>
      <transition>
        <component :is="Component" />
      </transition>
    </el-config-provider>
  </router-view>
</template>

<style scoped></style>
