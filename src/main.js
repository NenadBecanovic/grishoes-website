import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
/*import Vue from 'vue';
import VueRouter from 'vue-router';
import Shoes from './components/Shoes.vue'
import Homepage from './components/Homepage.vue'

const routes = [
    {path: '/', name: 'homepage', component: Homepage},
    {path: '/obuca', name: 'shoes', component: Shoes},
]

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

const router = new VueRouter({
    mode: 'hash',
    routes: routes
});

new Vue({
  el: '#app',
  router,
});*/
createApp(App).mount('#app')
