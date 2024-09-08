<template>
  <div class="layout-wrapper" :class="{ debug: debug }" @click="debugStore.toggleDebug">
    <div class="left-panel">
      <LeftPanel />
    </div>
    <div class="center-panel">
      <!-- <CenterPanel /> -->
      <SmoothDndContainer
        class="block-group"
        group-name="blocks"
        orientation="vertical"
        tag="div"
        @drop="(payload) => editorStore.addBlock(payload)"
      >
        <SmoothDndDraggable v-for="(block, index) in blocks" :key="index">
          <div class="block-item">
            {{ block }}
          </div>
        </SmoothDndDraggable>
      </SmoothDndContainer>
    </div>
    <div class="right-panel">
      <RightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebugStore } from '@/stores/debug'
import { useEditorStore } from '@/stores/editor'
import LeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel.vue'
import { SmoothDndDraggable } from '@/components/SmoothDnd/SmoothDndDraggable'
import { SmoothDndContainer } from '@/components/SmoothDnd/SmoothDndContainer'
import { storeToRefs } from 'pinia'
const debugStore = useDebugStore()
const { debug } = storeToRefs(debugStore)

const editorStore = useEditorStore()
const { blocks } = storeToRefs(editorStore)
// console.log('blokcs', blocks.value)
</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  height: 100%;
  .center-panel {
    flex: 1;
  }
}
</style>
