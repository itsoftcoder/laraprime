/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'


import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/nova-vue/theme.css'

import ToastService from 'primevue/toastservice';

import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from 'primevue/Button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import MultiSelect from 'primevue/multiselect';
import Breadcrumb from 'primevue/breadcrumb';
import Toast from 'primevue/toast';
import Sidebar from 'primevue/sidebar';
import InputMask from 'primevue/inputmask';


Vue.use(PrimeVue)
Vue.use(ToastService)
Vue.use(VueRouter)

import routes from './routes'
import App from './views/App.vue'


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Sidebar', require('./views/Sidebar.vue').default);
Vue.component('Card', Card);
Vue.component('Button', Button);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('MultiSelect', MultiSelect);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Toast',Toast);
Vue.component('Sidebar',Sidebar);
Vue.component('InputText', InputText)
Vue.component('InputMask', InputMask)





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//  const router = new VueRouter({
//      mode: 'history',
//      routes: routes
//  });



const app = new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
});
