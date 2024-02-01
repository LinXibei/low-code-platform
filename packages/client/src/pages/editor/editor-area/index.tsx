import { defineComponent, h, ref } from "vue";
import dragWrap from "./drag-wrap.vue";
export default defineComponent({
  components: {
    dragWrap,
  },
  name: 'editor-area',
  setup(props, { attrs }) {
    const renderModal = () => h('div', {}, 'renderModal');
    const renderDrawer = () => h('div', {}, 'renderDrawer');
    console.log('drag-area', props)
    return {
      props,
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