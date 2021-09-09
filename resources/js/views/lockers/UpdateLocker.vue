<template>
  <div>
    <Breadcrumb :home="home" :model="items" />
        <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Update Locker</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/department-list">Locker list</router-link>
        </Button>
      </div>
    </div>
    <Card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="Name">Name </label>
            <InputText id="Name" type="text" />
          </div>
          <div class="p-field p-col">
            <label for="description">Description</label>
            <InputText id="description" type="text" />
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-6">
            <label for="parent">Parent </label>
            <Dropdown
              v-model="parent"
              :options="parents"
              optionLabel="name"
              :filter="true"
              placeholder="Select a Parent"
            />
          </div>
           <div class="p-field p-col-6">
            <label for="softOrder">Soft Order </label>
            <Dropdown
              v-model="softOrder"
              :options="softOrders"
              optionLabel="order"
              :filter="true"
              placeholder="Select a Order"
            />
          </div>
          <div class="p-field p-col-6">
            <label for="status">Status</label>
            <br>

            <Checkbox v-model="status" :binary="true" />
            <span v-if="status">Active</span>
            <span v-else>Inactive</span>
          </div>
        </div>
      

        <div class="form-group">
          <label> </label>
          <Button label="Submit" class="col-md-3 p-button-success" />
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Button from 'primevue/button';
export default {
  components: {
    Dropdown,
    Checkbox,
    Button,
  },

  name: "UpdateLocker",

  data() {
    return {
      status: true,

      softOrder:null,
      softOrders:[
          {order:'Order1'},
            {order:'Order2'},
              {order:'Order3'},
      ],
      parent: null,
      parents: [
        { name: "Parent 1" },
        { name: "Parent 2" },
        { name: "Parent 3" },
        { name: "Parent 4" },
        { name: "Parent 5" },
      ],
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Lockers"},
         { label: "Create Locker",to:"/create-locker" },
        { label: "Locker List",to:"/locker-list" },
        { label: "Update Locker"},
       
      
      ],
    };
  },
};
</script>