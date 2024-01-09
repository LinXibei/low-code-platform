<template>
  <el-page-header :icon="ArrowLeft" :title="title" class="page-bread">
    <template #content>
      <span class="text-large font-600 mr-3"> Home </span>
    </template>
  </el-page-header>
</template>
<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'
const title = ref("")
</script>
<style lang="scss" scoped>
.page-bread {
  background-color: #fff;
  line-height: 50px;
  height: 50px;
}
.text-large{
  line-height: 50px;
}
</style>
