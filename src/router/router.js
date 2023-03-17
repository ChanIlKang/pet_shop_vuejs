import { createWebHistory, createRouter } from "vue-router";

import { createApp } from 'vue'
import Form from "@/components/Form";
import Main from "@/components/Main";
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'
import App from "@/App";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Main,
        },
        {
            path: "/form",
            name: "Form",
            component: Form,
        },
        {
            path: '/product/:id',
            name: 'Id',
            component: Product,
            children: [
                {
                    path: 'edit',
                    name: 'Edit',
                    component: EditProduct,
                }
            ]
        },
    ],
});

const app = createApp(App);

app.use(router)

export default router;