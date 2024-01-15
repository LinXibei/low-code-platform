<template>
  <div class="editor-area">
    Home gagagaga
    <slot></slot>
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
  </div>
</template>
<script setup lang="ts">
defineProps({
  firstName: String
})
defineEmits(['update:firstName'])
</script>
<style lang="scss" scoped>
.editor-area {
  width: calc(100% - 650px);
  height: 100%;
  background: #fff;
  border-radius: 4px;
}
</style>
