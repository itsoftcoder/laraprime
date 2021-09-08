
<template>
    <div>
       
         <Breadcrumb :home="home" :model="items" />
         <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3> Brand List</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/create-brand">Create Brand</router-link>
        </Button>
      </div>
    </div>
    <card class="p-mt-2">
        <template #content>
              <DataTable :value="brands" :filters="filters" :selection.sync="selectedBrands"  dataKey="title" :paginator="true" :rows="5"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20,50]"
    editMode="row"  :editingRows.sync="editingRows"
        @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"
    >
    <template #header>
                

<div class="p-d-flex p-jc-between">
    <div class="p-mt-2">List of Brands</div>

    <div>
        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
        <InputText v-model="filters['global']" placeholder="Global Search" size="50" />
    </div>

</div>
       
    </template>
            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="title" header="Title" sortable>
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
          <Column field="logo" header="Logo">
           <template #body="slotProps">
                <img :src="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
            <Column field="description" header="Description" >
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

     name:"BrandList",

    data() {
    
    return { 
         brands:[
                {title:'Name1',logo:'images/color.png',description:'description',status:'Active'},
                {title:'Name2',logo:'images/color.png',description:'description',status:'Active'},
                {title:'Name3',logo:'images/color.png',description:'description',status:'Active'},
                {title:'Name4',logo:'images/color.png',description:'description description',status:'Active'},
                {title:'Name5',logo:'images/color.png',description:'description description',status:'Active'},
                {title:'Name6',logo:'images/color.png',description:'description description',status:'Active'},
                {title:'Name7',logo:'images/color.png',description:'description description',status:'Active'},

            ],
              filters:{},
            selectedBrands:null,
            editingRows:[],

        home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Base"},
        { label: "Brand" },
        { label: "Create Brand ",to:"/create-brand"},
        { label: " Brand list" },
      
      ],
          
};
    },

      methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.brands[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.brands, event.index, this.originalRows[event.index]);
        },
    }
}
</script>