import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../layouts/default.vue'
import Home from '../views/home.vue'
import Profile from '../views/profile.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'Home',
                meta: { title: 'Главная' }
            },
            {
                path: 'profile',
                component: Profile,
                name: 'Profile',
                meta: { title: 'Профиль' }
            },
        ]
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
router.beforeEach(async (to) => {
    document.title = to.meta.title || 'Правильный выбор';
})
export default router