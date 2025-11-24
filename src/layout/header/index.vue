<template>
    <el-header class="header">
        <el-space>
            <el-button size="mini" type="text" @click="onCollapsed">
                <template #icon>
                    <icon-menu-fold :size="18" v-if="!collapsed" />
                    <icon-menu-unfold :size="18" v-if="collapsed" />
                </template>
            </el-button>

            <el-breadcrumb>
                <el-breadcrumb-item>Home</el-breadcrumb-item>
                <el-breadcrumb-item>List</el-breadcrumb-item>
                <el-breadcrumb-item>App</el-breadcrumb-item>
            </el-breadcrumb>
        </el-space>
    </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 是否折叠菜单
const collapsed = ref<boolean>(false);

const onCollapsed = () => {
    collapsed.value = !collapsed.value;
}

</script>



<style scoped lang="less">
.header {
    background: #fff;
}
</style>
