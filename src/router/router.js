import { createMemoryHistory, createRouter } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import MainPage from "../pages/MainPage.vue";
import PersonalAreaPage from "../pages/PersonalAreaPage.vue";
import OrdersPage from "@/pages/OrdersPage.vue";
import BuyApplicationPage from "@/pages/BuyApplicationPage.vue";
import CalculatorPage from "@/pages/CalculatorPage.vue";
import TrackPage from "@/pages/TrackPage.vue";
import PersonalPage from "@/pages/PersonalPage.vue";

const routes = [
    {
        path: '/layout',
        component: MainLayout,
        children: [
            {
                path: '/',
                name: 'main',
                component: MainPage
            },
            {
                path: '/lk',
                name: 'personal-area',
                component: PersonalAreaPage,
                children: [
                    {
                        name: 'personal',
                        path: '/lk/personal',
                        component: PersonalPage
                    },
                    {
                        name: 'orders',
                        path: '/lk/orders',
                        component: OrdersPage
                    },
                    {
                        name: 'buy',
                        path: '/lk/buy',
                        component: BuyApplicationPage
                    },
                    {
                        name: 'calc',
                        path: '/lk/calc',
                        component: CalculatorPage
                    },
                    {
                        name: 'track',
                        path: '/lk/track',
                        component: TrackPage
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
