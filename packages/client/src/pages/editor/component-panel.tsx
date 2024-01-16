import { defineComponent, h, ref } from "vue"
import { ElInput } from 'element-plus'
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
    console.log(9999, props)
    const inputModel = ref('')
    const searchInput = () => h(ElInput, {
      modelValue: inputModel.value,
      onChange: (e: any) => {
        inputModel.value = e
        // 筛选组件、模版逻辑
      }
    })
    return () => {
      return h('p', '组件面板')
    }
  }
})