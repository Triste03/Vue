<template>
    <el-container>
        <Aside />
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <RouterView />
            </el-main>
            <el-footer class="footer">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Aside from './aside/index.vue'

</script>



<style scoped lang="less">
.aside {
    height: 100vh;
    background: lightgreen;
}

.header {
    background: black;
}

.main {
    background: #fff;
}

.footer {
    background: gray;
}
</style>
