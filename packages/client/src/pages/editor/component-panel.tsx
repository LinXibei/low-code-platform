import { defineComponent, h, reactive, ref, Ref, VNode, watch } from "vue"
import { ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import '@/styles/editor/component-panel.scss'
import { ComponentMeta } from '@/types'
export default defineComponent({
  name: 'component-panel',
  props: ['components'],
  setup(props) {
    const inputModel = ref('')
    const { components } = props;
    const onChange = (e: any) => {
      console.log(99999, e)
    }
    const searchInput = () =>
      <ElInput
        v-model={inputModel.value}
        prefixIcon={Search}
        class="component-panel-search-input"
        placeholder="组件/模板名称"
        onChange={onChange}
        clearable
        />
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
    const component: Ref<VNode[]> = ref([])
    watch(map, (newV) => {
      for (const [key, item] of Object.entries(newV)) {
        component.value.push(<h3 class="component-panel-title">{key}</h3>)
        const tmpComps = []
        for (const comp of item) {
          tmpComps.push(<p><font-awesome-icon icon={['fas', comp.icon]} />{comp.alias}</p>)
        }
        component.value.push( 
          <div class="component-panel-list">
            {tmpComps}
          </div>
        )
      }
    }, { immediate: true, deep: true })
    const componentContainer = () => h(
      <div class="component-panel-container">
        { component.value }
      </div>
    )
    return () => {
      return h('div', {}, [searchInput(), componentContainer()])
    }
  }
})