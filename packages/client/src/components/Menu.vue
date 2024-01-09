<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Fold,
  Expand,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isFold = ref(false)
</script>
<template>
  <div class="menu-container">
    <div class="menu-vertical-container">
      <el-menu
        default-active="2"
        class="menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
        <el-menu-item index="/home">
          <el-icon><location /></el-icon>
          <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="/login">
          <el-icon><icon-menu /></el-icon>
          <template #title>Login</template>
        </el-menu-item>
        <el-menu-item index="/editor">
          <el-icon><document /></el-icon>
          <template #title>Editor</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="menu-fold">
      <span @click="isFold = !isFold"><el-icon size="22"><Fold /></el-icon></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.menu-container{
  width: 200px;
  height: 100%;
  background-color: #fff;
  .menu-vertical-container{
    height: calc(100vh - 120px);
    overflow-y: auto;
    font-weight: 600;
  }
  .menu-fold{
    height: 60px;
    line-height: 60px;
    span{
      padding: 10px;
      color: #303133;
      cursor: pointer;
      &:hover{
        background: #f5f6f9;
      }
    }
  }
}
</style>