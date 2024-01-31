<template>
  <drag-area :first="attrs.first" v-bind="attrs" class="editor-area">
    <template #item="{ element }">
      <drag-item
        :element="element"
      />
    </template> 
  </drag-area>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import dragItem from './drag-item';
import dragArea from './drag-area';
export default defineComponent({
  name: 'drag-wrap',
  components: {
    dragItem,
    dragArea
  },
  setup(props, context) {
    const { attrs, slots } = context
    console.log('drag-wrap', props, attrs, slots)
    return {
      attrs
    }
  }
})
</script>
<style lang="scss" scoped>
.editor-area {
  width: calc(100% - 650px);
  height: 100%;
  background: #fff;
  border-radius: 4px;
}
</style>