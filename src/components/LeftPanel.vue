<script setup lang="ts">
import { WaterfallsH, Equalizer } from '@icon-park/vue-next'
import { ref } from 'vue'
type Mode = 'outline' | 'blocks' | null

const mode = ref<Mode>(null)

const toggleMode = (type: Mode) => {
  if (mode.value === type) {
    mode.value = null
  } else {
    mode.value = type
  }
}
</script>

<template>
  <div class="left-panel-wrapper">
    <div class="left-panel-menu">
      <div class="btn" @click="toggleMode('outline')" :class="{ active: mode === 'outline' }">
        <waterfalls-h theme="outline" size="18 " fill="#333" />
      </div>
      <div class="btn" @click="toggleMode('blocks')" :class="{ active: mode === 'blocks' }">
        <equalizer theme="outline" size="18" fill="#333" />
      </div>
    </div>
    <Transition name="left-panel">
      <div class="left-panel-material" v-show="mode">{{ mode }}</div>
    </Transition>
  </div>
</template>

<style scoped>
.left-panel-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-right: 1px solid #e8e8e8;
}
.left-panel-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  background-color: #e8e8e8;
}
.left-panel-menu .btn {
  margin-top: 15px;
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 32px;
  width: 32px;
  cursor: pointer;
}
.left-panel-menu .btn:hover {
  background-color: #f5f5f5;
}
.active {
  border: 1px dashed var(--color-gray-700);
  background-color: #f5f5f5;
}
.left-panel-material {
  flex: 1;
  width: 180px;
  height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.left-panel-enter-active,
.left-panel-leave-active {
  transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.left-panel-enter-from,
.left-panel-leave-to {
  width: 0px;
}
</style>
