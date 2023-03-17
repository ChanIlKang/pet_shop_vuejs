import { createWebHistory, createRouter } from "vue-router";
import Form from "@/components/Form";
import Main from "@/components/Main";
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Main,
        props: true
    },
    {
        path: "/form",
        name: "Form",
        component: Form,
        props: true
    },
    {
        path: '/product/:id',
        name: 'Id',
        component: Product,
        props: true,
        children: [
            {
                path: 'edit',
                name: 'Edit',
                component: EditProduct,
                props: true
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;