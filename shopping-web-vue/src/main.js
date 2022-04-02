import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HomePage from './components/HomePage.vue'
import NewCategoryPage from './components/NewCategoryPage.vue'
import NewProductPage from './components/NewProductPage.vue'

const routes = [
    {
        path: "",
        component: HomePage
    },
    {
        path: "/newCategory",
        component: NewCategoryPage
    },
    {
        path: "/newProduct",
        component: NewProductPage
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

createApp(App)
.use(router)
.mount('#app')
