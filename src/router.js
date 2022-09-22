import { createRouter, createWebHistory  } from "vue-router";
import HomePage from './components/pages/HomePage';
import ContactComp from './components/pages/ContactComp';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/Contact",
            component: ContactComp,
        },
    ],
});

export default router;