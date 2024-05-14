/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import Keycloak from "keycloak-js";

// Composables
import { createApp } from 'vue'
import router from "@/router/router";

let initOptions = {
    url: 'http://127.0.0.1:8080/', // Адрес Keycloak
    realm: 'dripId', // Имя нашего realm в Keycloak
    clientId: 'pbpkce_client', // Идентификатор клиента в Keycloak

    // Перенаправлять неавторизованных пользователей на страницу входа
}

// Создать Keycloak JS Adapter
let keycloak = new Keycloak(initOptions);

// Инициализировать Keycloak JS Adapter
keycloak.init({}).then((auth) => {
    console.log(auth, keycloak)
})

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
