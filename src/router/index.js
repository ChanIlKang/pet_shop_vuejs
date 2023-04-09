import { createWebHistory, createRouter } from "vue-router";

import { createApp } from 'vue'
import Form from "@/components/Form";
import Main from "@/components/Main";
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'
import App from "@/App";

const index = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Main,
            props:true,
        },
        {
            path: "/form",
            name: "Form",
            component: Form,
            props:true,
        },
        {
            path: '/product/:id',
            name: 'Id',
            component: Product,
            props:true,
            children: [
                {
                    path: 'edit',
                    name: 'Edit',
                    component: EditProduct,
                    props: true
                }
            ]
        }
    ],
});

const app = createApp(App);

app.use(index)

export default index;