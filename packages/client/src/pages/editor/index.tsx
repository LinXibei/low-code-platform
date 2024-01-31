import { defineComponent, h, ref } from "vue";
import '@/styles/editor/index.scss';
// import Home from "@/layouts/Home.vue";
// import EditorHeader from '@/components/EditorHeader.vue'
import propPanel from "./prop/index";
import editorMenu from "./menu/index";
import editorArea from "./editor-area/index";
export default defineComponent({
  components: {
    editorMenu,
    editorArea,
    propPanel
  },
  name: 'editor',
  setup() {
    // const first = ref('2343423')
    return () => (
      <div class="editor-container">
        <editorMenu />
        <editorArea />
        <propPanel />
      </div>
    )
  }
})