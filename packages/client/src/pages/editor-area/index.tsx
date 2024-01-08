import { defineComponent } from "vue";
import Home from "@/layouts/Home.vue";
export default defineComponent({
  name: 'editor-area',
  setup() {
    return () => {
      <Home></Home>
    }
  }
})