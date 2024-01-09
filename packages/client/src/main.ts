import { createApp } from 'vue'
import './styles/reset.css'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import registerElpComp from './utils/registerElpComp'
const app = createApp(App)
registerElpComp(app)
app.use(store).use(router)
app.mount('#app', true)
