import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {createPinia} from "pinia";
import App from './App.vue'
import Football from "./views/Football.vue"
import AboutPage from "./views/AboutPage.vue"
import Home from "./views/Home.vue"
import SalvadorDali from "./views/ArtistPages/SalvadorDali.vue"
import PabloPicasso from "./views/ArtistPages/PabloPicasso.vue"
import Bosch from "./views/ArtistPages/Bosch.vue"
import Magritte from "./views/ArtistPages/Magritte.vue"
import Amaral from "./views/ArtistPages/Amaral.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/football', component: Football},
        {path: '/about', component: AboutPage},
        {path: '/dali', component: SalvadorDali},
        {path: '/picasso', component: PabloPicasso},
        {path: '/bosch', component: Bosch},
        {path: '/magritte', component: Magritte},
        {path: '/doamaral', component: Amaral},
    ],
    
});



const app = createApp(App)

app.use(router).use(createPinia());

app.mount('#app')
