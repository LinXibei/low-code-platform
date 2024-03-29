import { DefineComponent, defineComponent, h } from "vue";
import dragDiv from "./drag-div";
const component: DefineComponent = defineComponent({
  name: 'drag-item',
  components: {
    dragDiv
  },
  props: ['element', 'index'],
  setup(props) {
    const itemComponent = () => {
      const componentSchema = props.element;
      let componentVNode;
      switch (componentSchema.tag) {
        case 'Div':
          console.log(1, 3)
          componentVNode = <dragDiv elementNode={componentSchema}/>
          break;
        default:
          componentVNode = <div>{componentSchema.tag}</div>
          break;
      }
      return componentVNode
    }
    const parentProps = {
      class: ['use-drag-item'],
      ['data-uuid']: props.element.uuid,
      ['data-index']: props.index,
      onclick: (event: MouseEvent) => {
        const target = event.target;
        console.log('parentProps', target)
        event.stopPropagation();
      },
      onMouseover: (event: MouseEvent) => {
        const target = event.target;
        console.log('parentProps onmouseover', target)
      }
    }
    return {
      props,
      itemComponent,
      parentProps
    }
  },
  render() {
    // return h('div', this.parentProps, this.itemComponent())
    return h('div', this.parentProps, h(dragDiv, {
      elementNode: {
        uuid: 1232243,
        children: []
      }
    }, {
      default: () => this.itemComponent()
    }))
  }
})
export default component;