import { createApp } from 'vue'
import './styles/reset.css'
import './style.css'
import '@/assets/icon/iconfont.css';
import '@/assets/icon/iconfont.js';
import App from './App.vue'
import router from './router'
import store from './store'
import registerElpComp from './utils/registerElpComp'
// 创建fontawesome字体（主要用于拖拽组件的icon）
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faCode,
  faEye,
  faFileExport,
  faTrashRestoreAlt,
  faFile,
  faTree,
  faFileArchive,
  faArrowPointer,
} from '@fortawesome/free-solid-svg-icons'
library.add(faCode);
library.add(faEye);
library.add(faFileExport);
library.add(faTrashRestoreAlt);
library.add(faFile);
library.add(faTree);
library.add(faFileArchive);
library.add(faArrowPointer);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

registerElpComp(app)
app.use(store).use(router)
app.mount('#app', true)
