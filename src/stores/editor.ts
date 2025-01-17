import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const blocks = ref(['block1', 'block2'])

  const addBlock = (block: any) => {
    blocks.value.push(block)
    console.log(blocks.value)
  }

  return { blocks, addBlock }
})
