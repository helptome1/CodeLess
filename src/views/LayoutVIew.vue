<script setup lang="ts">
import { useEditorStore } from '@/stores/debug'
import LeftPanel from '@/components/LeftPanel.vue'
import CenterPanel from '@/components/CenterPanel.vue'
import RightPanel from '@/components/RightPanel.vue'

const { debug, toggleDebug } = useEditorStore()
</script>

<template>
  <div class="layout-wrapper" :class="{ debug: debug }" @click="toggleDebug">
    <div class="left-panel">
      <LeftPanel />
    </div>
    <div class="center-panel">
      <CenterPanel />
    </div>
    <div class="right-panel">
      <RightPanel />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  height: 100%;
  .center-panel {
    flex: 1;
  }
}
</style>
