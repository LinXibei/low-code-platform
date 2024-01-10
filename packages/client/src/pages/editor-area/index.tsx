import { defineComponent, h } from "vue";
import Home from "@/layouts/Home.vue";
export default defineComponent({
  name: 'editor-area',
  setup() {
    return () => {
      return h(Home, {
        style: { color: 'red' }
      }, {
        default: () => h('div', {}, 'editor-area')
      })
    }
  }
})