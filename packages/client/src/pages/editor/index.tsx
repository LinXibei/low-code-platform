import { defineComponent, h, ref } from "vue";
import '@/styles/editor/index.scss';
// import Home from "@/layouts/Home.vue";
// import EditorHeader from '@/components/EditorHeader.vue'
import propPane from "./prop-pane";
import editorMenu from "./menu";
import editorArea from "./editor-area";
export default defineComponent({
  components: {
    editorMenu,
    editorArea,
    propPane
  },
  name: 'editor',
  setup() {
    // const first = ref('2343423')
    return () => (
      <div class="editor-container">
        <editorMenu />
        <editorArea />
        <propPane />
      </div>
    )
  }
})