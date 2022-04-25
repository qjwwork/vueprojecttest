import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
const Home = () =>
    import ('../views/home/home.vue')
const Category = () =>
    import ('../views/category/category.vue')
const ShopCart = () =>
    import ('../views/shopcart/shopcart.vue')
const Profile = () =>
    import ('../views/profile/profile.vue')

const routes = [{
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router