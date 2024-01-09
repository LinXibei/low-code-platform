<script lang="ts" setup>
import logoUrl from '@/assets/logo.png'
import avatarImg from '@/assets/avatar.png'
import { SwitchButton, EditPen, Setting } from '@element-plus/icons-vue'
const userSetting = () => {
  console.log('user setting!!')
}
const pswChange = () => {
  console.log('psw change!!')
}
const logout = () => {
  console.log('logout!!')
}
</script>
<template>
  <header>
    <div class="logo-container">
      <img :src="logoUrl"/>
      <h3>低代码平台</h3>
    </div>
    <div class="user-container">
      <el-popover
        popper-class="header-popover-container"
        placement="bottom" trigger="click">
        <template #reference>
          <el-button
            key="plain"
            link
            type="info"
            class="custom"
            >
            <el-avatar :size="36" :src="avatarImg" class="avatar"/>米法
          </el-button>
        </template>
        <ul class="user-popover">
          <li @click="userSetting"><el-icon class="icon-custom"><EditPen /></el-icon>账户设置</li>
          <li @click="pswChange"><el-icon class="icon-custom"><Setting /></el-icon>密码修改</li>
          <li @click="logout"><el-icon class="icon-custom"><SwitchButton /></el-icon>退出系统</li>
        </ul>
      </el-popover>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "@/styles/header-var.scss";
header{
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  background-color: $headerBackgroundColor;
  justify-content: space-between;
  line-height: 60px;
}
.logo-container{
  display: flex;
  img{
    margin-top: 6px;
    height: 48px;
  }
  h3{
    margin-left: 20px;
  }
}
.avatar{
  margin-right: 20px;
}
.icon-custom{
  margin-right: 6px;
  font-size: 18px;
  position: relative;
  top: 4px;
}
.user-popover{
  li {
    padding: 10px 15px;
    cursor: pointer;
    &:hover{
      background-color: $lihoverBackgroundColor;
      color: $lihoverColor;
      border-radius: 4px;
    }
  }
}
</style>
<style>
header .custom.el-button--info.is-link{
  color: #fff;
}
.el-popover.is-light.header-popover-container{
  padding: 5px;
}
</style>