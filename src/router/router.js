import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import PersonalAreaPage from '../pages/PersonalAreaPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'
import BuyApplicationPage from '@/pages/BuyApplicationPage.vue'
import CalculatorPage from '@/pages/CalculatorPage.vue'
import TrackPage from '@/pages/TrackPage.vue'
import PersonalPage from '@/pages/PersonalPage.vue'
import InfoPage from '@/pages/InfoPage.vue'
import WaitingTrackPage from '@/pages/WaitingTrackPage.vue'

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainPage,
	},
	{
		path: '/lk',
		name: 'personal-area',
		component: PersonalAreaPage,
		children: [
			{
				name: 'personal',
				path: '/lk/personal',
				component: PersonalPage,
			},
			{
				name: 'orders',
				path: '/lk/orders/:role',
				component: OrdersPage,
			},
			{
				name: 'buy',
				path: '/lk/buy',
				component: BuyApplicationPage,
			},
			{
				name: 'calc',
				path: '/lk/calc',
				component: CalculatorPage,
			},
			{
				name: 'track',
				path: '/lk/track',
				component: TrackPage,
			},
			{
				name: 'info',
				path: '/lk/info',
				component: InfoPage,
			},
			{
				name: 'waiting',
				path: '/lk/wait',
				component: WaitingTrackPage,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
