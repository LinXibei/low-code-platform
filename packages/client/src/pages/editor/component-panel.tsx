import { defineComponent, h, ref, watch } from "vue"
import { ElInput } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import '@/styles/editor/component-panel.scss'
export default defineComponent({
  name: 'component-panel',
  setup(props) {
    // const elementInput = 
    // <el-input
    //   v-model="input2"
    //   class="w-50 m-2"
    //   placeholder="Please Input"
    //   :suffix-icon="Search"
    // />
    const inputModel = ref('')
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
    // h(ElInput, {
    //   modelValue: inputModel.value,
    //   prefixIcon: Search,
    //   class: 'component-panel-search-input',
    //   placeholder: '组件/模板名称',
    //   // onChange: (e: any) => {
    //   //   // inputModel.value = e
    //   //   // 筛选组件、模版逻辑
    //   // }
    // })
    return () => {
      return h('div', {}, [searchInput()])
    }
  }
})