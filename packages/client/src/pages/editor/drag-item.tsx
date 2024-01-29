import { defineComponent, h } from "vue";
export default defineComponent({
  name: 'drag-item',
  setup(props, ctx) {
    return {
      props,
    }
  },
  render() {
    return h('div', {}, 'drag-item')
  }
})