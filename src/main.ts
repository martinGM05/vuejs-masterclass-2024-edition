import './assets/index.css'
import 'iconify-icon'
import { createApp } from 'vue'
import { plugin } from '@formkit/vue'
import formKitConfig from '../formKit.config'
import { createPinia } from 'pinia'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, formKitConfig)
app.use(createMetaManager())
app.mount('#app')
