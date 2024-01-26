<template>
  <div class="component-panel-container">
    <el-input 
      v-model="inputModel"
      prefixIcon="el-icon-search"
      class="component-panel-search-input"
      placeholder="组件/模板名称"
      onChange="onChange"
      clearable
      />
    <div class="component-panel-list-container" v-for="key in Object.keys(map)" :key="key">
      <h3>{{ key }}</h3>
      <div class="component-panel-list">
        <draggable-component
          :move="move"
          v-model="myArray" 
          group="people" 
          @start="drag=true" 
          @end="drag=false"
          :componentData="map[key]">
          <template #item="{ element }">
            <p>
              <font-awesome-icon :icon="['fas', element.icon]"/>{{ element.alias }}
            </p>
          </template>
        </draggable-component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "vue"
import { ComponentMeta } from '@/types'
import draggableComponent from '@/components/vuedraggable'
export default {
  name: 'component-panel',
  components: {
    draggableComponent
  },
  props: ['components'],
  setup(props) {
    const inputModel = ref('')
    const { components } = props;
    const drag = ref(false)
    const onChange = (e: any) => {
      console.log(99999, e)
    }
    const myArray = reactive([])
    // {
    //   name: 'button',
    //   key: 'button',
    //   alias: '按钮',
    //   type: 'normal',
    //   typeCn: '普通组件',
    //   icon: 'icon-shijian',
    //   props: {},
    //   version: '1.0.1'
    // }
    const map = reactive<Record<string, ComponentMeta[]>>({})
    for (const item of components) {
      map[item.typeCn] = [...map[item.typeCn] || [], item]
    }
    const move = (e: any) => {
      
    }
    return {
      myArray,
      inputModel,
      onChange,
      map,
      move,
      drag
    }
  }
}
</script>
<style lang="scss" scoped>
.component-panel-container{
  height: 100%;
  padding: 0px 10px 10px 5px;
  h3 {
    text-align: left;
    margin-bottom: 10px;
  }
  .component-panel-list-container{
    position: relative;
    top: 15px;
  }
  .component-panel-list{
    display: flex;
    justify-content: space-between;
    p{
      width: 96px;
      padding: 5px 10px;
      box-sizing: border-box;
      background: #f6f7ff;
      border-radius: 4px;
      line-height: 2;
      font-size: 12px;
      text-align: left;
      cursor: move;
      &:hover{
        background: rgba( 64, 158, 255 , .1);
        color: #409eff;
        transition: all ease-in-out .3s;
        user-select: none;
      }
      svg{
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
}
.component-panel-search-input{
  width: 210px;
  position: relative;
  left: -5px;
  top: 9px;
}
</style>