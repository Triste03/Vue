<template>
    <el-aside width="200px" class="aside">
        <div class="logo_box">
            <el-icon size="30">
                <Guide />
            </el-icon>
        </div>
    </el-aside>
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
.aside {
    height: 100vh;
    background: lightgreen;
}

.logo_box {
    background: #3d3d3d;
    height: 60px;
}
</style>
