import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')

const a = 1
