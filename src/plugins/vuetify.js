import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { VCard } from 'vuetify/lib/components/index.mjs'

export default createVuetify({
	aliases: {
		AppCardStories: VCard,
	},
	defaults: {
		AppCardStories: {
			style: 'border-radius: 70px',
		},
	},
	theme: {
		defaultTheme: 'light',
		themes: {
			light: {
				colors: {
					primary: '#0011ff', // #E53935
					// secondary: colors.red.lighten4, // #FFCDD2
				},
			},
		},
	},
})
