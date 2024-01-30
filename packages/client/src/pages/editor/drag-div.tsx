import { defineComponent, shallowRef, Ref, watchEffect, defineAsyncComponent } from "vue";
// import dragWrap from "./drag-wrap.vue";
// import { defineAsyncComponent } from "@vue/runtime-dom";

export default defineComponent({
  components: {
    dragWrap: defineAsyncComponent(() => import('./drag-wrap.vue')),
  },
  props: ['elementNode'],
  name: 'drag-div',
  setup(props) {
    const elementNodeProps: Ref = shallowRef(null)
    watchEffect(() => {
      const uuid = props.elementNode?.uuid
      elementNodeProps.value = {
        id: uuid,
        isEdit: true,
        class: 'component-select',
        ['data-uuid']: uuid
      }
    })
    const slots = {
      default: () => {
        const areaProps = {
          ['data-uuid']: props.elementNode.uuid,
          ['data-container']: true,
          class: ['edit-canvas-dragArea__div', {
            'edit-canvas-dragArea__div--empty': !props.elementNode.children?.length
          }]
        }
        const draggableWrapProps = {
          areaProps,
          list: props.elementNode.children,
        }
        return (
          <dragWrap {...draggableWrapProps}>333333</dragWrap>
        )
      }
    }
    return () => (
      <div {...elementNodeProps.value} v-slots={slots}>
      </div>
    )
  },
})
