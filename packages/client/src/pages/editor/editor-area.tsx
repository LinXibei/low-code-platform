import { defineComponent, h, ref } from "vue";
// import Home from "@/layouts/Home.vue";
import dragWrap from "./drag-wrap.vue";
export default defineComponent({
  components: {
    dragWrap,
  },
  name: 'editor-area',
  setup(props, { attrs }) {
    const first = ref('2343423')
    const renderModal = () => h('div', {}, 'renderModal');
    const renderDrawer = () => h('div', {}, 'renderDrawer');
    return {
      props,
      first,
      attrs,
      renderModal,
      renderDrawer
    }
  },
  render() {
    return (
      <>
        <dragWrap {...this.props} {...this.attrs}/>
      </>
    )
  }
})