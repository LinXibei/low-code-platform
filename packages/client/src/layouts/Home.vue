<template>
  <div>
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
