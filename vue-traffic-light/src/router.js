import {createRouter, createWebHistory} from 'vue-router'
import Start from './views/Start.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/red',
            name: 'red',
            component: Start,
            props: { currentColorIs: 'red' },
        },
        {
            path: '/yellow',
            name: 'yellow',
            component: Start,
            props: { currentColorIs: 'yellow' },
        },
        {
            path: '/green',
            name: 'green',
            component: Start,
            props: { currentColorIs: 'green' },
        },
        {
            path: "/:catchAll(.*)",
            name: '404',
            redirect: '/red'
        }
    ],
});

export default router