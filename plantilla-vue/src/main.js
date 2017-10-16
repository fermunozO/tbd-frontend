import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import Actors from './Actors.vue';
import VueResource from 'vue-resource';
require("./style.scss");
import addUser from './addUser.vue';
import grafico from './grafico.vue';
import grafico2 from './grafico2.vue';



import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/actors', component: Actors},
  { path: '/newActor', component: addUser },
  { path: '/Graphic', component: grafico },
  { path: '/BarGraph', component: grafico2}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
