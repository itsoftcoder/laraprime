import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateDesignation = () => import('./views/HRM/designations/CreateDesignation.vue');
const DesignationList = () => import('./views/HRM/designations/DesignationList.vue');
const CreateDepartment = () => import('./views/HRM/departments/CreateDepartment.vue');
const DepartmentList = () => import('./views/HRM/departments/DepartmentList.vue');
const CreateBrand = () => import('./views/Base/brands/CreateBrand.vue');
const BrandList = () => import('./views/Base/brands/BrandList.vue');
const CreateManufacture = () => import('./views/Base/manufactures/CreateManufacture.vue');
const ManufactureList = () => import('./views/Base/manufactures/ManufactureList.vue');
const Sales = () => import('./views/sales.vue');
const PurchaseReturn = () => import('./views/purchase/PurchaseReturn.vue');
const PurchaseReturnList = () => import('./views/purchase/PurchaseReturnList.vue');





const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-designation',
        name: 'CreateDesignation',
        component: CreateDesignation
    },
    {
        path: '/designation-list',
        name: 'designationList',
        component: DesignationList
    },
    {
        path: '/create-department',
        name: 'CreateDepartment',
        component: CreateDepartment
    },
    {
        path: '/department-list',
        name: 'DepartmentList',
        component: DepartmentList
    },
    {
        path: '/create-brand',
        name: 'CreateBrand',
        component: CreateBrand
    },
    {
        path: '/brand-list',
        name: 'BrandList',
        component: BrandList
    },
    {
        path: '/create-manufacture',
        name: 'CreateManufacture',
        component: CreateManufacture
    },
    {
        path: '/manufacture-list',
        name: 'ManufactureList',
        component: ManufactureList
    },
    {
        path: '/sales',
        name: 'Sale',
        component: Sales
    },
    {
        path: '/create-purchase-return',
        name: 'PurchaseReturn',
        component: PurchaseReturn
    },
        {
        path: '/purchase-return-list',
        name: ' PurchaseReturnList',
        component:PurchaseReturnList
    },
   

]

export default new VueRouter({
    // mode: 'history',
    routes
});


