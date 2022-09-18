import { createRouter, createWebHistory  } from "vue-router";
import TabWrapper from "./components/TabWrapper.vue";
import TabOne from "./components/TabOne.vue";
import TabTwo from "./components/TabTwo.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: "/",
            component: TabWrapper,
            children: [
                {
                    // use empty string as default view
                    path: "",
                    component: TabOne,
                    alias: "/tab1",
                },
                {
                    path: "/tab2",
                    component: TabTwo,
                },
                {
                    path: "/user/:id",
                    component: TabTwo,
                },
            ],
        },
    ],
});

export default router;