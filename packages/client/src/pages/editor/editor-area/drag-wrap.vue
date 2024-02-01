<template>
  <drag-area :components="components" :areaProps="areaProps" class="drag-wrap">
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
  props: ['components', 'areaProps']
})
</script>
<style lang="scss" scoped>
</style>