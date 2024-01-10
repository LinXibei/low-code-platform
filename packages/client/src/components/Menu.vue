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
        <el-menu-item index="/home" class="menu-item-custom">
          <el-icon><location /></el-icon>
          <template #title><span>Home</span></template>
        </el-menu-item>
        <el-menu-item index="/login" class="menu-item-custom">
          <el-icon><icon-menu /></el-icon>
          <template #title><span>Login</span></template>
        </el-menu-item>
        <el-menu-item index="/editor" class="menu-item-custom">
          <el-icon><document /></el-icon>
          <template #title><span>Editor</span></template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="menu-fold">
      <span @click="isFold = !isFold"><el-icon size="22" class="icon-custom"><Fold /></el-icon></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.menu-container{
  width: 200px;
  height: 100%;
  background-color: #fff;
  z-index: 2;
  position: relative;
  box-shadow: 0px 2px 8px rgba(167, 199, 233, 0.2);
  .menu-vertical-container{
    height: calc(100vh - 120px);
    overflow-y: auto;
    font-weight: 600;
  }
  .menu-fold{
    height: 60px;
    line-height: 60px;
    text-align: left;
    span{
      padding: 10px;
      color: #303133;
      cursor: pointer;
      border-radius: 4px;
      &:hover{
        background: #f5f6f9;
      }
      .icon-custom{
        position: relative;
        top: 4px;
      }
    }
  }
  .menu-item-custom{
    height: 48px;
    margin-bottom: 20px;
    position: relative;
    span{
      position: relative;
    }
    &:hover{
      background-color: #fff;
      &:before{
        visibility: visible;
      }
    }
    &:before{
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: #f5f6f9;
      border-radius: 4px;
      width: 180px;
      left: 10px;
      height: 48px;
      visibility: hidden;
    }
  }
}
</style>
<style lang="scss">
.menu-vertical-container .el-menu{
  border-right: none;
}
.menu-vertical-container .el-menu-item{
  border-radius: 4px;
  padding: 5px;
}
.menu-vertical-container .el-menu-item.is-active.menu-item-custom{
  color: #409eff;
  &:before{
    background: rgba( 64, 158, 255 , .1);
    visibility: visible;
  }
  &:after{
    background: #147bd1;
    content: "";
    display: inline-block;
    height: 30px;
    width: 4px;
    position: absolute;
    left: 0;
    top: 9px;
    border-radius: 0 8px 8px 0;
  }
}
</style>