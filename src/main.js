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
import { initKeycloak } from './use/auth'

const app = createApp(App)

registerPlugins(app)
await initKeycloak()
app.use(router)

app.mount('#app')
