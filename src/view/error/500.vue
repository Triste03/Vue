<template>
  <el-result status="500" title="500" subTitle="Sorry, the server is wrong.">
    <template #extra>
      <el-button link @click="onBack">Back Home</el-button>
    </template>
  </el-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const onBack = () => {
  if (window.history.state.back !== null) {
    router.replace(window.history.state.back)
  } else {
    router.replace('/')
  }
}
</script>

<style scoped lang="less"></style>
