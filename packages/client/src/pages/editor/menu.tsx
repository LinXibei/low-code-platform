import { defineComponent, h } from "vue";
import '@/styles/editor/menu.scss';
import { ElTabs, ElTabPane } from 'element-plus'
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
  },
  name: 'editor-menu',
  setup() {
    const elTabPanes = btns.map(btn => {
      const iconTag = h('i', { class: 'iconfont ' + btn.icon })
      return h(ElTabPane, {}, {
        label: () => h('span', {
          class: 'pane-label',
        }, [h(iconTag)]),
        default: () => btn.label
      })
    })
    const style = { height: '100%' }
    return () => {
      return h(ElTabs, {
        tabPosition: 'left',
        stretch: true,
        style,
        class: 'menu-tabs',
      }, [...elTabPanes])
    }
  }
})