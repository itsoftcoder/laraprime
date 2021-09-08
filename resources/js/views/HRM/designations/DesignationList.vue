<template>
  <div>
      <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Designation List</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/create-designation">Create Designation</router-link>
        </Button>
      </div>
    </div>
    <card class="p-mt-2">
      <template #content>
        <DataTable :value="designations" :filters="filters" :selection.sync="selectedDesignation"  dataKey="name" :paginator="true" :rows="5"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20,50]"
    editMode="row"  :editingRows.sync="editingRows"
        @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"
    >
    <template #header>

    <div class="p-d-flex p-jc-between">
        <div>
            List of Designations
        </div>
         <div style="p-mt-2">
            <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
            <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
         </div>
    </div>

   
    </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="name" header="Name" sortable>
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column field="description" header="Description">
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column field="status" header="Status" sortable>
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
            </Column>
            <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
        </DataTable>
      </template>
    </card>
  </div>
</template>
<script>
import Button from 'primevue/button';
export default {
   components: {
    Button,
  },
    name:'designationList',
    data() {
        return {
            designations:[
                {name:'Name1',description:'Employe designation List',status:'Active'},
                {name:'Name2',description:'Employe designation List',status:'Active'},
                {name:'Name3',description:'Employe designation List',status:'Active'},
                {name:'Name4',description:'Employe designation List',status:'Active'},
                {name:'Name5',description:'Employe designation List',status:'Active'},
                {name:'Name6',description:'Employe designation List',status:'Active'},
                {name:'Name7',description:'Employe designation List',status:'Active'},


            ],
            filters:{},
            selectedDesignation:null,
            editingRows:[],
             home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "HRM"},
        { label: "Designation" },
        { label: "Create Designation",to:"/create-designation" },
        { label: "Designation List" },
     
      ],

        }
    },
    methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.designations[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.designations, event.index, this.originalRows[event.index]);
        },
    }
};
</script>