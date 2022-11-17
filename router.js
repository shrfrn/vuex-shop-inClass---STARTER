const { createRouter, createWebHashHistory } = VueRouter

import homePage from './pages/home-page.js'
import shopApp from './pages/shop-app.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/shop',
        component: shopApp
    },
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})