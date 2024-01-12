<template>
  <div class="editor-header">
    <div class="logo-container">
      <img :src="logoBase"/>
      <b>Editor</b></div>
    <div class="editor-menu">
      <el-button
        type="primary"
        text
        >
        <font-awesome-icon :icon="['fas', 'trash-restore-alt']" />
        <span class="btn-name">重置</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <font-awesome-icon :icon="['fas', 'eye']" />
        <span class="btn-name">预览</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <font-awesome-icon :icon="['fas', 'file-export']" />
        <span class="btn-name">导出</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <font-awesome-icon :icon="['fas', 'code']" />
        <span class="btn-name">源码</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <i class="iconfont icon-baocun"></i>
        <span class="btn-name">保存</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <i class="iconfont icon-houtui"></i>
        <span class="btn-name">上一步</span>
      </el-button>
      <el-button
        type="primary"
        text
        >
        <i class="iconfont icon-qianjin"></i>
        <span class="btn-name">下一步</span>
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import logoBase from '@/assets/logo-base.png'
</script>
<style lang="scss" scoped>
.editor-header{
  display: flex;
  height: 50px;
  background: #fff;
  color: #2a2a2a;
  line-height: 50px;
  font-size: 24px;
  padding: 0 20px;
  justify-content: space-between;
  img {
    height: 30px;
    position: relative;
    top: 5px;
    margin-right: 20px;
  }
  span.btn-name{
    margin-left: 5px;
  }
}
</style>
<style>
.editor-menu .el-button+.el-button{
  margin-left: 0;
}
</style>