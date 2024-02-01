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
      <draggable
        :list="map[key]"
        :group="{ name: 'dragCanvas', pull: 'clone', put: false }"
        item-key="name"
        :clone="cloneFn"
        @end="endFn"
        :sort="false"
        :move="dragMove"
        @start="starFn"
        class="component-panel-list">
        <template #item="{ element }">
          <p>
            <font-awesome-icon :icon="['fas', element.icon]"/>{{ element.alias }}
          </p>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, watch } from "vue"
import { ComponentMeta } from '@/types'
import draggable from 'vuedraggable'
export default {
  name: 'component-panel',
  components: {
    draggable
  },
  props: ['components'],
  setup(props) {
    const inputModel = ref('')
    const { components } = props;
    const drag = ref(false)
    const data = reactive<{
      openKeys: string[],
      curComponent: ComponentMeta | null
    }>({
      openKeys: [],
      curComponent: null
    })
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
    watch(
      () => components,
      (newVal: ComponentMeta[]) => {
        newVal.length && newVal.forEach((element) => {
          element.key && data.openKeys.push(element.key)
        });
      },
      {
        deep: true,
      }
    )
    const move = (e: any) => {
      console.log(3333, e)
    }
    const cloneFn = element => {
      console.log(111, element)
    };

    const starFn = event => {
      console.log(222, event)
    };

    const endFn = event => {
      console.log(333, event)
    };
    const dragMove = (e: any) => {
      console.log(444, e)
    }
    return {
      myArray,
      inputModel,
      onChange,
      map,
      move,
      drag,
      cloneFn,
      starFn,
      endFn,
      dragMove
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
  left: 0;
  top: 9px;
}
</style>