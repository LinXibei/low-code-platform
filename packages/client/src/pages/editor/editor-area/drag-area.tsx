import { defineComponent, h, Ref, ref, reactive, onMounted, watch, ComponentInternalInstance } from "vue";
import DraggableItem from "./drag-item";
import Draggable from 'vuedraggable';
interface slotItemInterface {
  element: any
  index: number
}
export const parentClassEffect = function(instance: ComponentInternalInstance) {
  const parentRef: Ref = ref(null);
  const parentProps = reactive({
    class: []
  })
  const clearClass = function() {
    [...instance.vnode.el?.classList].forEach(item => {
      if (item.includes('el') && item !== 'el') {
        instance.vnode.el?.classList.remove(item)
      }
    })
  }
  onMounted(() => {
    parentRef.value = instance.parent?.vnode.el;
  })
  watch(() => instance.parent?.props, () => {
    clearClass()
  })
  return parentProps
}
export const curClasssEffect = function (instance: ComponentInternalInstance) {
  const curRef: Ref = ref(null);
  const curProps = reactive({
    class: []
  })
  console.log(9999, instance)
  const clearClass = function() {
    [...instance.vnode.el?.classList].forEach(item => {
      if (item.includes('el') && item !== 'el') {
        instance.vnode.el?.classList.remove(item)
      }
    })
  }
  watch(() => instance.parent?.props, () => {
    clearClass()
  })
  onMounted(() => {
    curRef.value = instance.vnode.el;
  })
  return curProps
}
export default defineComponent({
  name: 'drag-area',
  props: ['components', 'areaProps'],
  components: {
    DraggableItem,
    Draggable
  },
  setup(props, ctx) {
    const { slots } = ctx
    const dragStart = () => {
      console.log('dragStart')
    }
    const dragEnd = () => {
      console.log('dragEnd')
    }
    const dragMove = () => {
      console.log('dragMove')
    }
    const dragArea = ref(null)
    const dragProps = {
      move: dragMove,
      onEnd: dragEnd,
      onStart: dragStart,
      list: [{
        name: '1',
        key: '1',
        uuid: 12432432,
        tag: 'Div',
      }],
      itemKey: 'name',
      // tag: 'a-row',
      ['data-draggable']: true,
      group: { name: 'dragCanvas' },
      ref: 'dragArea',
    }
    const curProps: Ref = ref(null)
    onMounted(() => {
      if (dragArea.value) {
        curProps.value = curClasssEffect(dragArea.value)
      }
    })
    return {
      slots,
      props,
      dragProps,
      dragArea,
      curProps
    }
  },
  render() {
    return h(Draggable, {
      ...this.dragProps
    }, {
      item: ({ element, index }: slotItemInterface) => {
        const tmpProps = {
          element,
          index,
        }
        return h(DraggableItem, tmpProps)
      }
    });
  }
})