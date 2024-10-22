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
import { keycloak, login } from '@/use/auth'

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
		meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (localStorage.getItem('token')) {
			next()
		} else {
			router.push('/')
		}
	} else {
		next()
	}
})

export default router
