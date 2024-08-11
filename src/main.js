/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import Keycloak from 'keycloak-js'
import 'animate.css'

// Composables
import { createApp } from 'vue'
import router from '@/router/router'

let initOptions = {
	url: 'https://212.233.73.223:9000', // Адрес Keycloak
	realm: 'dripId', // Имя нашего realm в Keycloak
	clientId: 'pbpkce_client', // Идентификатор клиента в Keycloak
}

// Создать Keycloak JS Adapter
let keycloak = new Keycloak(initOptions)

// Инициализировать Keycloak JS Adapter
keycloak
	.init({
		onLoad: 'login-required',
		flow: 'standard',
		pkceMethod: 'S256',
		silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
		checkLoginIframe: false,
		scope: 'openid email profile roles',
	})
	.then((auth) => {
		console.log(auth, keycloak.token)
		localStorage.setItem('token', keycloak.token)
	})

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
