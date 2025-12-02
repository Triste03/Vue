<template>
    <div class="library">
        <div style="width: 280px;">
            <FileTree @node-selected="onTreeNodeSelected" />
        </div>

        <div style="flex: 1;">
            <FileList ref="fileListRef" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileTree from './components/file-tree/index.vue'
import FileList from './components/file-list/index.vue'
import type { TreeNodeData } from 'element-plus'

const fileListRef = ref<InstanceType<typeof FileList>>()

// 处理文件树节点选中事件
const onTreeNodeSelected = (node: TreeNodeData, ancestors: TreeNodeData[]) => {
    if (fileListRef.value) {
        fileListRef.value.onNodeSelected(node, ancestors)
    }
}
</script>



<style scoped lang="less">
.library {
    display: flex;
    height: 100%;
    gap: 20px;
}
</style>
