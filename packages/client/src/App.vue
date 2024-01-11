<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue'
import Menu from './components/Menu.vue'
// import PageBread from './components/PageBread.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <BaseHeader v-if="$route.path !== '/editor'"/>
    <div class="content">
      <Menu v-if="$route.path !== '/editor'" />
      <div class="router-container">
        <p class="page-name">Home</p>
        <div class="router-view">
          <router-view />
        </div>
        <!-- <PageBread /> -->
      </div>
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
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
}
.router-container{
  width: 100%;
}
.page-name{
  line-height: 50px;
  height: 50px;
  background-color: #fff;
  color: #2a2a2a;
  font-weight: 600;
  text-align: left;
  padding-left: 20px;
}
.router-view{
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
  background: #fff;
  min-height: calc(100vh - 170px);
  color: #2a2a2a;
}
.router-container{
  display: flex;
  background: #f5f6f9;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  flex: 1;
  overflow: hidden;
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
