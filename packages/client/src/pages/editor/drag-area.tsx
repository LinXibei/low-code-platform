import { defineComponent, h } from "vue";
import DraggableItem from "./drag-item";
import Draggable from 'vuedraggable';
interface slotItemInterface {
  element: any
  index: number
}
export default defineComponent({
  name: 'drag-area',
  props: ['first'],
  components: {
    DraggableItem,
    Draggable
  },
  setup(props, ctx) {
    const { slots } = ctx;
    console.log(22221111, slots)
    const dragStart = () => {
      console.log('dragStart')
    }
    const dragEnd = () => {
      console.log('dragEnd')
    }
    const dragMove = () => {
      console.log('dragMove')
    }
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
      group: { name: 'dragCanvas' }
    }
    return {
      slots,
      props,
      dragProps
    }
  },
  render() {
    console.log(322, this.props, this.dragProps)
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