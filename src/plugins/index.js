/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { createPinia } from 'pinia'
import vuetify from './vuetify'
import { VueQueryPlugin } from '@tanstack/vue-query'

export function registerPlugins(app) {
	app.use(vuetify)
	app.use(createPinia())
	app.use(VueQueryPlugin)
}
