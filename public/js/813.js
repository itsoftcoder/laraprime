"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[813],{6813:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const o={name:"ListQuotation",data:function(){return{ListQuotation:[{purchase_date:"hghghjghj",suplier_name:"ghjfhjfghjgh",warehouse:"ghjfghjghj",reference_no:"hgjghj",invoice_no:"fghjfghjgh",purchase_status:"ghjfhgjgfhj",payment_status:"hkkhjkhk",purchased_by:"dfyrteyrtyert",total_price:"hjkghjkhjk",subtotal_price:"hjkghjkghjk",total_quantity:"hjkghjkghk",total_product:"hgjkhjkghjkh"},{purchase_date:"hghghjghj",suplier_name:"ghjfhjfghjgh",warehouse:"ghjfghjghj",reference_no:"hgjghj",invoice_no:"fghjfghjgh",purchase_status:"ghjfhgjgfhj",payment_status:"hkkhjkhk",purchased_by:"dfyrteyrtyert",total_price:"hjkghjkhjk",subtotal_price:"hjkghjkghjk",total_quantity:"hjkghjkghk",total_product:"hgjkhjkghjkh"},{purchase_date:"hghghjghj",suplier_name:"ghjfhjfghjgh",warehouse:"ghjfghjghj",reference_no:"hgjghj",invoice_no:"fghjfghjgh",purchase_status:"ghjfhgjgfhj",payment_status:"hkkhjkhk",purchased_by:"dfyrteyrtyert",total_price:"hjkghjkhjk",subtotal_price:"hjkghjkghjk",total_quantity:"hjkghjkghk",total_product:"hgjkhjkghjkh"},{purchase_date:"hghghjghj",suplier_name:"ghjfhjfghjgh",warehouse:"ghjfghjghj",reference_no:"hgjghj",invoice_no:"fghjfghjgh",purchase_status:"ghjfhgjgfhj",payment_status:"hkkhjkhk",purchased_by:"dfyrteyrtyert",total_price:"hjkghjkhjk",subtotal_price:"hjkghjkghjk",total_quantity:"hjkghjkghk",total_product:"hgjkhjkghjkh"}],filters:{},selectedTitle:null,home:{icon:"pi pi-home",to:"/"},items:[{label:"Quotation"},{label:"Create Quotation",to:"/create-quotation"},{label:"List Quotation"}]}}};const l=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"p-mb-4"},[a("Breadcrumb",{attrs:{home:e.home,model:e.items}})],1),e._v(" "),a("div",{staticClass:"p-d-flex p-jc-between p-mb-4"},[a("h2",[e._v("List Quotation")]),e._v(" "),a("button",{staticClass:"btn btn-danger"},[a("router-link",{staticClass:"text-white",attrs:{to:"/create-quotation"}},[e._v("Create Quotation")])],1)]),e._v(" "),a("Card",{scopedSlots:e._u([{key:"content",fn:function(){return[a("DataTable",{attrs:{value:e.ListQuotation,scrollable:!0,paginator:!0,rows:10,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}",filters:e.filters,dataKey:"id",selection:e.selectedTitle},on:{"update:selection":function(t){e.selectedTitle=t}},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"table-header p-d-flex p-jc-end"},[a("span",{staticClass:"p-input-icon-left "},[a("i",{staticClass:"pi pi-search"}),e._v(" "),a("InputText",{attrs:{placeholder:"Global Search"},model:{value:e.filters.global,callback:function(t){e.$set(e.filters,"global",t)},expression:"filters['global']"}})],1)])]},proxy:!0}])},[e._v(" "),a("Column",{attrs:{selectionMode:"multiple",headerStyle:"width: 3em"}}),e._v(" "),a("Column",{attrs:{field:"invoice_no",header:"Invoice No",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"purchase_date",header:"Purchase Date",sortable:!0,headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"suplier_name",header:"Suplier Name",sortable:!0,headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"warehouse",header:"Warehouse",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"reference_no",header:"Reference No",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"purchase_status",header:"Purchase Status",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"payment_status",header:"Payment Status",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"purchased_by",header:"Purchaseed by",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"total_price",header:"Total Price",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"subtotal_price",header:"Subtotal Price",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"total_quantity",header:"Total Quantity",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),a("Column",{attrs:{field:"total_product",header:"Total Product",headerStyle:"width: 250px"},scopedSlots:e._u([{key:"editor",fn:function(t){return[a("InputText",{model:{value:t.data[t.column.field],callback:function(a){e.$set(t.data,t.column.field,a)},expression:"slotProps.data[slotProps.column.field]"}})]}}])})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null).exports}}]);