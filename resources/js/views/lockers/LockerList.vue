<template>
    <div>

<Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Locker list</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/create-locker">Create Locker</router-link>
        </Button>
      </div>
    </div>

    <card class="p-mt-2">
      <template #content>
        <DataTable :value="lockers" :filters="filters" :selection.sync="selectedDepartments"  dataKey="departmentName" :paginator="true" :rows="5"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[5,10,20,50]"
    editMode="row"  :editingRows.sync="editingRows"
        @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel"
    >
    <template #header>
                

<div class="p-d-flex p-jc-between">
    <div class="p-mt-2">List of Lockers</div>

    <div>
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
          <Column field="description" header="Description" sortable>
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
            <Column field="parent" header="Parent" sortable>
           <template #editor="slotProps">
                <InputText v-model="slotProps.data[slotProps.column.field]" />
            </template>
          </Column>
           <Column field="softOrder" header="Soft Order" sortable>
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
    name:"LockerList",
    data() {
        return {
            lockers:[
                {name:'Name1',description:'Employe designation List',parent:'Parent ',softOrder:'Soft Order',status:'Active'},
                 {name:'Name1',description:'Employe designation List',parent:'Parent ',softOrder:'Soft Order',status:'Active'},
                  {name:'Name1',description:'Employe designation List',parent:'Parent ',softOrder:'Soft Order',status:'Active'},
                   {name:'Name1',description:'Employe designation List',parent:'Parent ',softOrder:'Soft Order',status:'Active'},
                    {name:'Name1',description:'Employe designation List',parent:'Parent ',softOrder:'Soft Order',status:'Active'},

            ],
            filters:{},
            selectedDepartments:null,
            editingRows:[],
 home: { icon: "pi pi-home", to: "/" },
      items: [
         { label: "Lockers"},
         { label: "Create Locker",to:"/create-locker" },
        { label: "Update Locker",to:"/update-locker" },
        { label: " Locker List"},
      ],
        }
    },
    methods: {
        onRowEditInit(event) {
            this.originalRows[event.index] = {...this.departments[event.index]};
        },
        onRowEditCancel(event) {
            Vue.set(this.departments, event.index, this.originalRows[event.index]);
        },
    }
}
</script>