import { defineComponent, h } from "vue";
import { ElTabs } from 'element-plus'
export default defineComponent({
  components: {
    ElTabs,
  },
  name: 'prop-panel',
  setup() {
    return () => {
      return h(ElTabs, {})
    }
  }
})