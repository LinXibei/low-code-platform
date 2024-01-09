<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
// import HelloWorld from './components/HelloWorld.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="container">
    <BaseHeader />
    <div class="content">
      <div class="menu-container">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
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
      <router-view />
    </div>
  </div>
</template>
<style lang="scss" scoped>
// @import "./styles/global-var.scss";
// div{
//   background: $defaultColor;
// }
.content{
  display: flex;
}
.menu-container{
  width: 200px;
}
</style>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
