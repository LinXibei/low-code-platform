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
    return {
      props,
      itemComponent
    }
  },
  render() {
    return h(this.itemComponent)
    // return h(dragDiv, {
    //   elementNode: {
    //     uuid: 1232243,
    //     children: []
    //   }
    // }, '234324')
  }
})
export default component;