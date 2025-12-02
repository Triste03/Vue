<template>
    <el-card style="height: 100%;">
        <template #header>文件库</template>

        <el-space direction="vertical">
            <el-input v-model="filterText" placeholder="请搜索关键词">
                <template #prepend>
                    <el-button :icon="Search" />
                </template>
            </el-input>

            <el-tree-v2 ref="treeRef" style="width: 200px" :data="data" :props="defaultProps" default-expand-all
                :filter-method="filterNode" highlight-current @node-click="handleNodeClick">
                <template #default="{ node }">
                    <el-icon class="node-icon" :class="{ 'is-leaf': node.isLeaf }">
                        <Document v-if="node.isLeaf" />
                        <Folder v-else-if="!node.expanded" />
                        <FolderOpened v-else />
                    </el-icon>
                    <span>{{ node.label }}</span>
                </template>
            </el-tree-v2>
        </el-space>
    </el-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
import type { FilterNodeMethodFunction, TreeInstance, TreeNodeData } from 'element-plus'
import { data } from '@/mock'
import type { TreeNode } from 'element-plus/es/components/tree-v2/src/types'

const filterText = ref('')
const treeRef = ref<TreeInstance>()

const defaultProps = {
    label: 'label',
    value: 'id',
    children: 'children',
}

// 定义选中节点事件
const emit = defineEmits<{
    nodeSelected: [node: TreeNodeData, ancestors: TreeNodeData[]]
}>()

const handleNodeClick = (data: TreeNodeData, node: TreeNode) => {
    const ancestors = getNodeAncestors(node)
    emit('nodeSelected', data, ancestors)
}

// 获取节点的所有祖先节点
const getNodeAncestors = (node: TreeNode): TreeNodeData[] => {
    const ancestors: TreeNodeData[] = []
    let currentNode = node.parent
    while (currentNode && currentNode.level > 0) {
        ancestors.unshift(currentNode.data)
        currentNode = currentNode.parent
    }
    return ancestors
}

watch(filterText, (val) => {
    treeRef.value!.filter(val)
})

const filterNode: FilterNodeMethodFunction = (value: string, data) => {
    if (!value) return true
    return data.label.includes(value)
}

</script>



<style scoped lang="less"></style>
