<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Purchase Return</h3></div>
      <div>
        <Button>
          <router-link class="text-white" to="/purchase-return-list"
            >Purchase return List
          </router-link>
        </Button>
      </div>
    </div>

    <card class="p-mt-2">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="purchaseReturnDate">Purchase Return Date</label>
           <Calendar id="purchaseReturnDate" v-model="date1" />
          </div>
          <div class="p-field p-col">
            <label for="customerName">Customer Name</label>
            <Dropdown
              v-model="customerName"
              :options="customerName"
              optionLabel="customerName"
              :filter="true"
              placeholder="Product"
            />
          </div>
          <div class="p-field p-col">
            <label for="warehouse">Werehouse</label>
            <Dropdown
              v-model="customerName"
              :options="customerName"
              optionLabel="customerName"
              :filter="true"
              placeholder="Product"
            />
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="referenceNumber">Reference No</label>
            <InputText id="referenceNumber" type="number" />
          </div>
          <div class="p-field p-col">
            <label for="invoiceNumber">Invoice Number</label>
            <Dropdown
              v-model="invoiceNumber"
              :options="invoiceNumber"
              optionLabel="invoiceNumber"
              :filter="true"
              placeholder="1"
            />
          </div>

          <div class="p-field p-col">
            <label for="purchaseReturnStatus">Purchase Return status</label>
            <Dropdown
              v-model="purchaseReturnStatus"
              :options="purchaseReturnStatus"
              optionLabel="purchaseReturnStatus"
              :filter="true"
              placeholder="Ordered"
            />
          </div>
        </div>

        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <label for="paymentSystem">Payment System</label>
            <Dropdown
              v-model="paymentSystem"
              :options="paymentSystem"
              optionLabel="paymentSystem"
              :filter="true"
              placeholder="Paid"
            />
          </div>

          <div class="p-field p-col">
            <label for="salesBy">Sales By</label>
            <Dropdown
              v-model="salesBy"
              :options="salesBy"
              optionLabel="salesBy"
              :filter="true"
              placeholder="Employee"
            />
          </div>
          <div class="p-field p-col">
            <label for="notes">Notes</label>
            <InputText id="notes" type="text" />
          </div>
        </div>

        <div
          class="p-fluid p-formgrid p-grid p-md-10"
          v-for="(item, id) in items"
          :key="id"
        >
          <div class="p-field p-col">
            <label for="productName">Product Name</label>
            <Dropdown
              v-model="item.productName"
              :options="productName"
              optionLabel="productName"
              :filter="true"
              placeholder="Product"
            />
          </div>

          <div class="p-field p-col">
            <label for="qty">Qty</label>
            <InputText id="qty" type="text" v-model="item.qty" />
          </div>
          <div class="p-field p-col">
            <label for="perPrice">Per Price</label>
            <InputText id="perPrice" type="text" v-model="item.perPrice" />
          </div>
          <div class="p-field p-col">
            <label for="totalPrice">Total Price</label>
            <InputText id="totalPrice" type="text" v-model="item.totalPrice" />
          </div>
          <div class="p-mt-5">
          <button @click="remove(id)" class="btn btn-danger">-</button>
          </div>
        </div>
        <button @click="add" class="btn btn-success">+</button>

        <div class="p-grid ">
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="saleDiscount">Sale Discount</label>
            <InputText id="saleDiscount" type="Number"  />
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="totalDiscount">Total Discount</label>
            <InputText id="totalDiscount" type="Number"  />
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="totalTax">Total Tax</label>
            <InputText id="totalTax" type="Number"  />
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="shippingCost">Shipping Cost</label>
            <InputText id="shippingCost" type="Number"  />
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="grandTotal">Grand Total</label>
            <InputText id="grandTotal" type="Number"  />
          </div>
          <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="previous">Previous </label>
            <InputText id="previous" type="Number"  />
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="netTotal">Net Total</label>
            <InputText id="netTotal" type="Number"  />
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="paidAmount">Paid Amount</label>
            <InputText id="paidAmount" type="Number"  />
          </div>
            <div  class=" p-col-6 p-offset-6 p-d-flex p-jc-between">
            <label for="due">Due</label>
            <InputText id="due" type="Number"  />
          </div>
          
      
          <!-- <div class="p-field p-col">
            <label for="notes">Notes </label><br />
            <Textarea v-model="value2" :autoResize="true" rows="3" cols="30" />
          </div> -->
        </div>
        <Button label="Save Purchase Return" class="p-button-outlined" />
      </template>
    </card>
  </div>
</template>
<script>
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

//  import Calendar from 'primevue/calendar';
export default {
  components: {
    Dropdown,
    Textarea,
   Calendar,
   Button
  },
  name: "PurchaseReturn",
  data() {
    return {
      date1 :null,
      items: [{ productName: "", qty: "", perPrice: "", totalPrice: "" }],

       home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Purchase"},
        { label: "Puchase Return List",to:"/purchase-return-list" },
        { label: "Create Puchase Return"},

      ],
    };
  },
  methods: {
    add() {
      this.items.push({
        productName: "",
        qty: "",
        perPrice: "",
        totalPrice: "",
      });
    },
      remove(id) {
      this.items.splice(id,1);
      if(id===0){
        this.add();
      }
  },
  }
};
</script>
