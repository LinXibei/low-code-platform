import { defineComponent, h, ref } from "vue";
import Home from "@/layouts/Home.vue";
import EditorHeader from '@/components/EditorHeader.vue'
export default defineComponent({
  components: {
    EditorHeader,
  },
  name: 'editor-area',
  setup() {
    const first = ref('2343423')
    return () => {
      return h(Home, {
        style: { color: 'red' },
        firstName: first.value
      }, {
        default: () => h('div', {}, 'editor-area')
      })
    }
  }
})