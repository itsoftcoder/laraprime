"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[876],{2876:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const i={name:"ListWarehouse",data:function(){return{ListWarehouse:[{id:"1",title:"kjsdhflsdhf",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"2",title:"ghjghjghj",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"3",title:"hjfghjhjjhkhj",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"4",title:"hjfghjghjuk",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"5",title:"uuikmhjd",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"6",title:"uyikyuye",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"},{id:"7",title:"yjyuioyukryu",location:"Dhaka-1211",desp:"lkhlkjhlhlkggrt",status:"ghdhdfghfhf"}],filters:{},selectedTitle:null,editingRows:[],home:{icon:"pi pi-home",to:"/"},items:[{label:"Base"},{label:"Warehouse"},{label:"Create Warehouse",to:"/create-warehouse"},{label:"List Warehouse"}]}},methods:{onRowEditInit:function(e){this.originalRows[e.index]=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},this.ListWarehouse[e.index])},onRowEditCancel:function(e){Vue.set(this.ListWarehouse,e.index,this.originalRows[e.index])}}};const s=(0,o(1900).Z)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"p-mb-4"},[o("Breadcrumb",{attrs:{home:e.home,model:e.items}})],1),e._v(" "),o("div",{staticClass:"p-d-flex p-jc-between p-mb-4"},[o("h2",[e._v("List Warehouse")]),e._v(" "),o("Button",[o("router-link",{staticClass:"text-white",attrs:{to:"/create-warehouse"}},[e._v("Create Warehouse")])],1)],1),e._v(" "),o("Card",{scopedSlots:e._u([{key:"content",fn:function(){return[o("DataTable",{attrs:{value:e.ListWarehouse,paginator:!0,rows:10,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}",filters:e.filters,dataKey:"id",selection:e.selectedTitle,editingRows:e.editingRows,editMode:"row"},on:{"update:selection":function(t){e.selectedTitle=t},"update:editingRows":function(t){e.editingRows=t},"update:editing-rows":function(t){e.editingRows=t},"row-edit-init":e.onRowEditInit,"row-edit-cancel":e.onRowEditCancel},scopedSlots:e._u([{key:"header",fn:function(){return[o("div",{staticClass:"table-header p-d-flex p-jc-end"},[o("span",{staticClass:"p-input-icon-left "},[o("i",{staticClass:"pi pi-search"}),e._v(" "),o("InputText",{attrs:{placeholder:"Global Search"},model:{value:e.filters.global,callback:function(t){e.$set(e.filters,"global",t)},expression:"filters['global']"}})],1)])]},proxy:!0}])},[e._v(" "),o("Column",{attrs:{selectionMode:"multiple",headerStyle:"width: 3em"}}),e._v(" "),o("Column",{attrs:{field:"title",header:"Title",sortable:!0},scopedSlots:e._u([{key:"editor",fn:function(t){return[o("InputText",{attrs:{autofocus:""},model:{value:t.data[t.column.field],callback:function(o){e.$set(t.data,t.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),o("Column",{attrs:{field:"location",header:"Location"},scopedSlots:e._u([{key:"editor",fn:function(t){return[o("InputText",{model:{value:t.data[t.column.field],callback:function(o){e.$set(t.data,t.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),o("Column",{attrs:{field:"desp",header:"Description",sortable:!0},scopedSlots:e._u([{key:"editor",fn:function(t){return[o("InputText",{model:{value:t.data[t.column.field],callback:function(o){e.$set(t.data,t.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),o("Column",{attrs:{field:"status",header:"Status",sortable:!0},scopedSlots:e._u([{key:"editor",fn:function(t){return[o("InputText",{model:{value:t.data[t.column.field],callback:function(o){e.$set(t.data,t.column.field,o)},expression:"slotProps.data[slotProps.column.field]"}})]}}])}),e._v(" "),o("Column",{attrs:{rowEditor:!0,headerStyle:"width:7rem",bodyStyle:"text-align:center"}})],1)]},proxy:!0}])})],1)}),[],!1,null,null,null).exports}}]);