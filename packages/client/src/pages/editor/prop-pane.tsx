import { defineComponent, h } from "vue";
import { ElTabs, ElTabPane } from 'element-plus'
import '@/styles/editor/prop.scss'
export default defineComponent({
  components: {
    ElTabs,
  },
  name: 'prop-panel',
  setup() {
    const tabs = [
      {
        label: '组件属性'
      },
      {
        label: '表单属性'
      }
    ]
    return () => {
      const elTabPanes = tabs.map(tab => {
        return h(ElTabPane, {
          label: tab.label
        })
      })
      return h(ElTabs, {
        class: 'prop-tabs',
      }, elTabPanes)
    }
  }
})