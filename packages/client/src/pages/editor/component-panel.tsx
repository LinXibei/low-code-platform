import { defineComponent, h, reactive, ref } from "vue"
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
    //   icon: 'icon-shijian',
    //   props: {},
    //   version: '1.0.1'
    // }
    const map = reactive({})
    for (const item of components) {
      map[item.key] = item
    }
    const component = components.map((item: ComponentMeta) => {
      const icons = ['fas', item.icon]
      return (
        <p><font-awesome-icon icon={icons} />{item.alias}</p>
      )
    })
    return () => {
      return h('div', {}, [searchInput(), component])
    }
  }
})