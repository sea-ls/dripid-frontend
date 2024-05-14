import { createMemoryHistory, createRouter } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import MainPage from "../pages/MainPage.vue";
import PersonalAreaPage from "../pages/PersonalAreaPage.vue";

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
                component: PersonalAreaPage
            }
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
