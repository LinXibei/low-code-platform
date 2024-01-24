import Sortable from 'sortablejs';
import { defineComponent, h } from 'vue';

/**
 * core sortableEvents
*/
const manageAndEmit = ['Start', 'Add', 'Remove', 'Update', 'End'];
const emit = ['Choose', 'Unchoose', 'Sort', 'Filter', 'Clone']
const manage = ['Move'];

interface sortInterface extends Sortable {
  [key: string]: any
}
const props = {
  move: {
    type: Function,
    default: () => {},
  },
  clone: {
    type: Function,
    default: (original: any) => original,
  },
  componentData: {
    type: Object,
    default: () => {},
  }
}
const draggableComponent = defineComponent({
  name: 'draggable',
  inheritAttrs: false,
  data() {
    return {
      error: false,
      _sortable: null as unknown as sortInterface
    }
  },
  created() {
    console.log('nihaoya!!!')
  },
  mounted() {
    if (this.error) {
      return
    }
    const { $el, $attrs } = this;
    const targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
    this._sortable = new Sortable(targetDomElement, {
      ...$attrs
    })
  },
  render() {
    try {
      this.error = false;
      const { $attrs, $slots }  = this;
      console.log(3333, $slots.item)
      return h('div', $attrs, $slots)
    } catch(err: any) {
      this.error = true
      return h('pre', { style: { color: 'red' } }, err.stack)
    }
  },
  watch: {
    $attrs: {
      handler(newV) {
        const { _sortable } = this;
        if (!_sortable) {
          return
        }
        _sortable.option(newV)
      },
      deep: true
    }
  },
  methods: {
    initSortable() {
      new Sortable(this.$el, {
        ...this.$attrs
      })
    },
    onDragStart(evt) {
      console.log(222, evt);
    },
    onDragAdd(evt) {
      console.log(333, evt);
    },
    onDragRemove(evt) {
      console.log(444, evt);
    },
    onDragUpdate(evt) {
      console.log(555, evt);
    },
    onDragMove(evt) {
      console.log(666, evt);
    },
    onDragEnd() {
      console.log(777);
    }
  }
})

export default draggableComponent