import { defineComponent, h, ref } from "vue";
import '@/styles/editor/menu.scss';
import { ElTabs, ElTabPane } from 'element-plus'
import { ComponentMeta } from '@/types'
import componentPanel from './component-panel';
const btns = [
  {
    label: '组件概览',
    icon: 'icon-suohuicaidan-',
    action: 'default',
  },
  {
    label: '页面结构',
    icon: 'icon-tree-table',
    action: 'pageStructure',
  },
  // {
  //   label: '',
  //   icon: 'icon-changjing',
  //   action: 'run',
  // },
  {
    label: '接口数据',
    icon: 'icon-data',
    action: 'getData',
  }
]
export default defineComponent({
  components: {
    ElTabs,
    componentPanel
  },
  name: 'editor-menu',
  setup() {
    const components = ref<ComponentMeta[]>([])
    components.value.push({
      name: 'button',
      key: 'button',
      alias: '按钮',
      icon: 'icon-shijian',
      props: {},
      version: '1.0.1'
    })
    const elTabPanes = btns.map((btn, index) => {
      const iconTag = h('i', { class: 'iconfont ' + btn.icon })
      return h(ElTabPane, {}, {
        label: () => h('span', {
          class: 'pane-label',
        }, [h(iconTag)]),
        default: () => {
          return index === 0 ? <componentPanel /> : btn.label
        }
      })
    })
    const style = { height: '100%' }
    return () => {
      return h(ElTabs, {
        tabPosition: 'left',
        stretch: true,
        style,
        class: 'menu-tabs',
      }, () => [...elTabPanes])
    }
  }
})