import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const About = () => import('./views/About.vue');
const CreateDesignation = () => import('./views/designations/CreateDesignation.vue');
const CreateCustomer = () => import('./views/customers/CreateCustomer.vue');
const From = () => import('./views/forms/Form.vue');


const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/create-customer/:id',
        name: 'CreateCustomer',
        component: CreateCustomer
    },
    {
        path: '/form',
        name: 'Form',
        component: From
    },

]

export default new VueRouter({
    mode: 'history',
    routes
});


