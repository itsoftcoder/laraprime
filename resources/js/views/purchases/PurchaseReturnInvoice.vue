<template>
  <div>
    <Breadcrumb :home="home" :model="Breadcrumb" />
    <div class="p-d-flex p-jc-between p-mt-2">
      <div><h3>Purchase Return Invoice</h3></div>
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
        <div class="p-d-flex p-jc-between p-mt-2">
          <div></div>
          <div>
            <h2>Invoice-1234578</h2>
            <p class="text-right">14 april 2014</p>
          </div>
        </div>
        <hr />
        <div class="p-grid">
          <div class="p-col-3">
            <div class="text-left">
              <h3>From : Dynofy</h3>
              <p>350 rhode Island State</p>
              <p>Suite 240, san francisco</p>
              <p>Califonia, 94103</p>
              <p>Phone: 244-11-39</p>
              <p>Email: contact@dynofy.com</p>
            </div>
          </div>
          <div class="p-col-1"></div>
          <div class="p-col-3">
            <div class="text-left">
              <h3>To : John Doe</h3>
              <p>425 market State</p>
              <p>Suite 2200, san francisco</p>
              <p>Califonia, 94103</p>
              <p>Phone: 244-11-39</p>
              <p>Email: jhon@doe.com</p>
            </div>
          </div>
          <div class="p-col-2"></div>
          <div class="p-col-3">
            <div class="text-right">
              <h3>Payment Details</h3>
              <p>date: 14 april 2014</p>
              <p>Vat: DK888-777</p>
              <p>Total Amount: $1019</p>
              <p>Acount Name: Flatter</p>
            </div>
          </div>
        </div>
        <DataTable :scrollable="true" :value="PurchaseReturnInvoice">
          <Column field="id" headerStyle="width: 50px" header="#"></Column>
          <Column
            field="item"
            headerStyle="width: 550px"
            header="Item"
          ></Column>

          <Column
            field="quantity"
            headerStyle="width: 150px"
            header="Quantity"
          ></Column>
          <Column
            field="unitPrice"
            headerStyle="width: 150px"
            header="Unit Price"
          ></Column>
          <div class="text-right">
            <Column
              field="totalPrice"
              headerStyle="width: 150px"
              header="Total Price"
            ></Column>
          </div>
        </DataTable>

        <div class="p-mt-2 p-d-flex p-jc-between">
          <div>
            <div class="p-mt-2"><h3>Thank You</h3></div>
            <div class="p-mt-4">
              <button class="btn btn-success">Print invoice</button>
              <button class="btn btn-danger">Mail invoice</button>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <th>Subtotal</th>
                <td>:</td>
                <td>$1019</td>
              </tr>
              <tr>
                <th>Discount(10%)</th>
                <td>:</td>
                <td>$101</td>
              </tr>
              <tr>
                <th>Vat(8%)</th>
                <td>:</td>
                <td>$73</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>:</td>
                <td>$991</td>
              </tr>
            </table>
          </div>
        </div>
      </template>
    </card>
  </div>
</template>
<script>
import Button from "primevue/button";
export default {
  components: {
    Button,
  },
  name: "PurchaseReturnInvoice",
  data() {
    return {
      home: { icon: "pi pi-home", to: "/" },
      Breadcrumb: [
        { label: "Purchase" },
        { label: "Puchase Return List", to: "/purchase-return-list" },
        { label: "Create Puchase Return",to: "/create-purchase-return" },
        { label: "Purchase Return Invoice"},

      ],
      PurchaseReturnInvoice: [
        {
          id: "1",
          item: "Flatter Theme",
          quantity: "10",
          unitPrice: "$18",
          totalPrice: "$180",
        },
        {
          id: "2",
          item: "Flat Icons",
          quantity: "6",
          unitPrice: "$59",
          totalPrice: "$254",
        },
        {
          id: "3",
          item: "Wordpress version",
          quantity: "4",
          unitPrice: "$95",
          totalPrice: "$385",
        },
        {
          id: "4",
          item: "Server Development",
          quantity: "1",
          unitPrice: "$300",
          totalPrice: "$300",
        },
      ],
    };
  },
};
</script>