"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[136],{6228:(t,e,i)=>{i.d(e,{Z:()=>n});var r=i(3645),a=i.n(r)()((function(t){return t[1]}));a.push([t.id,'.p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:"";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:"";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}',""]);const n=a},2870:(t,e,i)=>{i.d(e,{Z:()=>n});var r=i(3645),a=i.n(r)()((function(t){return t[1]}));a.push([t.id,"td{font-weight:700;padding:5px}",""]);const n=a},7844:(t,e,i)=>{t.exports=i(6188)},6188:(t,e,i)=>{i.d(e,{default:()=>o});const r={props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align)},{"p-divider-center":"horizontal"===this.layout&&"center"===this.align},{"p-divider-right":"horizontal"===this.layout&&"right"===this.align},{"p-divider-top":"vertical"===this.layout&&"top"===this.align},{"p-divider-center":"vertical"===this.layout&&(!this.align||"center"===this.align)},{"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}]}}};var a=i(3379),n=i.n(a),l=i(6228),s={insert:"head",singleton:!1};n()(l.Z,s);l.Z.locals;const o=(0,i(1900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.containerClass,attrs:{role:"separator"}},[t.$slots.default?i("div",{staticClass:"p-divider-content"},[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports},2773:(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});const r={name:"PurchaseInvoice",components:{Divider:i(7844).default},data:function(){return{PurchaseInvoice:[{sl:"1",item:"Flatter Theme",quantity:"10",unit_price:"$18",total_price:"$180"},{sl:"2",item:"Flat Icon",quantity:"6",unit_price:"$59",total_price:"$254"},{sl:"3",item:"Wordpress Version",quantity:"4",unit_price:"$95",total_price:"$285"},{sl:"4",item:"Server Development",quantity:"1",unit_price:"$300",total_price:"$300"}],home:{icon:"pi pi-home",to:"/"},items:[{label:"Purchase"},{label:"Purchase Invoice"}]}}};var a=i(3379),n=i.n(a),l=i(2870),s={insert:"head",singleton:!1};n()(l.Z,s);l.Z.locals;const o=(0,i(1900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"p-mb-4"},[i("Breadcrumb",{attrs:{home:t.home,model:t.items}})],1),t._v(" "),i("div",{staticClass:"p-d-flex p-jc-between p-mb-4"},[i("h2",[t._v("Purchase Invoice")]),t._v(" "),i("button",{staticClass:"btn btn-danger"},[i("router-link",{staticClass:"text-white",attrs:{to:"/create-purchase"}},[t._v("Create Purchase")])],1)]),t._v(" "),i("Card",{scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"p-text-right p-p-4"},[i("h3",[t._v("INVOICE-12345678")]),t._v("\n                9th September 2021\n            ")]),t._v(" "),i("Divider"),t._v(" "),i("div",{staticClass:"p-grid p-jc-between p-px-4"},[i("div",{staticClass:"p-col-3"},[i("h4",[t._v("From: Dynofy")]),t._v(" "),i("p",[t._v("\n                        350 Rhode Island Street, Suit 240 San fransisco, California 94103 "),i("br"),t._v("\n                        Phone: 415-767-3600"),i("br"),t._v("\n                        Email: contact@dynofy.com\n                    ")])]),t._v(" "),i("div",{staticClass:"p-col-3"},[i("h4",[t._v("To: John Doe")]),t._v(" "),i("p",[t._v("\n                        425 Market Street, Suit 2200 San fransisco, California 94104 "),i("br"),t._v("\n                        Phone: 415-767-3600"),i("br"),t._v("\n                        Email: john@doe.com\n                    ")])]),t._v(" "),i("div",{staticClass:"p-col-5 p-text-right"},[i("h4",[t._v("Pament Details")]),t._v("\n                    Date: DK888-777"),i("br"),t._v("\n                    Vat: $1019"),i("br"),t._v("\n                    Total Amount: 9th September 2021"),i("br"),t._v("\n                    Account Name: Flater"),i("br")])])]},proxy:!0},{key:"content",fn:function(){return[i("DataTable",{attrs:{value:t.PurchaseInvoice}},[i("Column",{attrs:{field:"sl",header:"#",headerStyle:"width: 50px"}}),t._v(" "),i("Column",{attrs:{field:"item",header:"Item"}}),t._v(" "),i("Column",{attrs:{field:"quantity",header:"Quantity",headerStyle:"width: 150px"}}),t._v(" "),i("Column",{attrs:{field:"unit_price",header:"Unit Price",headerStyle:"width: 150px"}}),t._v(" "),i("Column",{attrs:{field:"total_price",header:"Total Price",headerStyle:"width: 150px"}})],1)]},proxy:!0},{key:"footer",fn:function(){return[i("div",{staticClass:"p-grid p-jc-between"},[i("div",{staticClass:"p-col-6"},[i("h3",{staticClass:"p-mb-4"},[t._v("Thank you")]),t._v(" "),i("button",{staticClass:"btn btn-success"},[i("i",{staticClass:"pi pi-print",staticStyle:{fontSize:"1rem"}}),t._v(" Print Invoice")]),t._v(" "),i("button",{staticClass:"btn btn-danger"},[i("i",{staticClass:"pi pi-envelope",staticStyle:{fontSize:"1rem"}}),t._v(" Mail Invoice")])]),t._v(" "),i("div",{staticClass:"p-col-6"},[i("div",{staticClass:"p-grid p-jc-end"},[i("table",[i("tr",[i("td",[t._v("Subtotal")]),t._v(" "),i("td",[t._v(":")]),t._v(" "),i("td",{staticClass:"p-text-right"},[t._v("$1019")])]),t._v(" "),i("tr",[i("td",[t._v("Discount(10%)")]),t._v(" "),i("td",[t._v(":")]),t._v(" "),i("td",{staticClass:"p-text-right"},[t._v("$101")])]),t._v(" "),i("tr",[i("td",[t._v("VAT(8%)")]),t._v(" "),i("td",[t._v(":")]),t._v(" "),i("td",{staticClass:"p-text-right"},[t._v("$73")])]),t._v(" "),i("tr",[i("td",[t._v("Total")]),t._v(" "),i("td",[t._v(":")]),t._v(" "),i("td",{staticClass:"p-text-right"},[t._v("$991")])])])])])])]},proxy:!0}])})],1)}),[],!1,null,null,null).exports}}]);