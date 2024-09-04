/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { registerPlugins } from '@/plugins'
import App from './App.vue'
import 'animate.css'
import { createApp } from 'vue'
import router from '@/router/router'

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
