<script setup lang="ts">
import { useEditorStore } from '@/stores/debug'
import LeftPanel from '@/components/LeftPanel.vue'

const { debug, toggleDebug } = useEditorStore()
</script>

<template>
  <div class="layout-wrapper" :class="{ debug: debug }" @click="toggleDebug">
    <div class="left-panel">
      <LeftPanel />
    </div>
    <div class="center-panel">中</div>
    <div class="right-panel">右</div>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  height: 100%;
}
</style>
