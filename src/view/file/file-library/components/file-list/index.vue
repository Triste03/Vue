<template>
    <el-card style="height: 100%;">
        <template #header>
            <div class="header-content">
                <span>文件库</span>
                <span v-if="selectedNode" class="breadcrumb">
                    <span v-for="(ancestor, index) in selectedAncestors" :key="ancestor.id">
                        <span>{{ ancestor.label }}</span>
                        <span v-if="index < selectedAncestors.length - 1"> / </span>
                    </span>
                    <span v-if="selectedAncestors.length > 0"> / </span>
                    <span class="current-node">{{ selectedNode?.label }}</span>
                </span>
            </div>
        </template>

        <!-- 显示选中节点和祖先节点信息 -->
        <div v-if="selectedNode" class="node-info">
            <el-descriptions title="选中节点信息" :column="2" border>
                <el-descriptions-item label="当前节点">{{ selectedNode?.label }}</el-descriptions-item>
                <el-descriptions-item label="节点ID">{{ selectedNode?.id }}</el-descriptions-item>
                <el-descriptions-item label="祖先节点数量">{{ selectedAncestors.length }}</el-descriptions-item>
                <el-descriptions-item label="是否为叶子节点">{{ selectedNode?.children ? '否' : '是' }}</el-descriptions-item>
            </el-descriptions>

            <div v-if="selectedAncestors.length > 0" class="ancestors-list">
                <h4>祖先节点路径：</h4>
                <el-timeline>
                    <el-timeline-item v-for="(ancestor, index) in selectedAncestors" :key="ancestor.id"
                        :timestamp="`层级 ${index + 1}`">
                        {{ ancestor.label }} (ID: {{ ancestor.id }})
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import type { TreeNodeData } from 'element-plus'
import { ref } from 'vue'

// 选中的节点和祖先节点
const selectedNode = ref<TreeNodeData | null>(null)
const selectedAncestors = ref<TreeNodeData[]>([])

defineExpose({
    onNodeSelected: (node: TreeNodeData, ancestors: TreeNodeData[]) => {
        selectedNode.value = node
        selectedAncestors.value = ancestors
    }
})

</script>

<style scoped lang="less">
.header-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.breadcrumb {
    font-size: 14px;
    color: #666;

    .current-node {
        font-weight: 600;
        color: #409eff;
    }
}

.node-info {
    padding: 20px;

    .ancestors-list {
        margin-top: 20px;

        h4 {
            margin-bottom: 16px;
            color: #333;
        }
    }
}
</style>
