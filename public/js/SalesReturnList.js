"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["SalesReturnList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ReturnSalesLists",
  data: function data() {
    return {
      filters: {},
      editingRows: [],
      selectedProducts3: null,
      home: {
        icon: "pi pi-home",
        to: "/"
      },
      items: [{
        label: "Sales Return"
      }, {
        label: "Create Sales Return",
        to: "/CreateSalesReturn"
      }, {
        label: "Return Sales Lists"
      }],
      TableData: [{
        id: 1,
        InvoiceNo: "21651",
        SaleDate: "1/05/21",
        CustomerName: "MR",
        EmployName: "M Korim",
        Warehouse: "asdf",
        ReferenceNo: "151521324651",
        SalesStatus: "Ordered",
        SalesBy: "Mr l",
        PaymentStatus: "Paid",
        TotalProducts: "56516432",
        TotalQty: "100",
        SalaryType: "Monthly",
        SubTotalPrice: "55615",
        TotalPrice: "5464"
      }, {
        id: 2,
        InvoiceNo: "21651",
        SaleDate: "1/05/21",
        CustomerName: "MR",
        EmployName: "M Korim",
        Warehouse: "asdf",
        ReferenceNo: "151521324651",
        SalesStatus: "Ordered",
        SalesBy: "Mr l",
        PaymentStatus: "Paid",
        TotalProducts: "56516432",
        TotalQty: "100",
        SalaryType: "Monthly",
        SubTotalPrice: "55615",
        TotalPrice: "5464"
      }, {
        id: 3,
        InvoiceNo: "21651",
        SaleDate: "1/05/21",
        CustomerName: "MR",
        EmployName: "M Korim",
        Warehouse: "asdf",
        ReferenceNo: "151521324651",
        SalesStatus: "Ordered",
        SalesBy: "Mr l",
        PaymentStatus: "Paid",
        TotalProducts: "56516432",
        TotalQty: "100",
        SalaryType: "Monthly",
        SubTotalPrice: "55615",
        TotalPrice: "5464"
      }]
    };
  },
  method: {
    onRowEditInit: function onRowEditInit(event) {
      this.originalRows[event.index] = _objectSpread({}, this.products3[event.index]);
    },
    onRowEditCancel: function onRowEditCancel(event) {
      Vue.set(this.products3, event.index, this.originalRows[event.index]);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/SalesReturn/SalesReturnList.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/SalesReturn/SalesReturnList.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesReturnList.vue?vue&type=template&id=66271778& */ "./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778&");
/* harmony import */ var _SalesReturnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesReturnList.vue?vue&type=script&lang=js& */ "./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SalesReturnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__.render,
  _SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SalesReturn/SalesReturnList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReturnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesReturnList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReturnList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReturnList_vue_vue_type_template_id_66271778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SalesReturnList.vue?vue&type=template&id=66271778& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SalesReturn/SalesReturnList.vue?vue&type=template&id=66271778& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Breadcrumb", { attrs: { home: _vm.home, model: _vm.items } }),
      _vm._v(" "),
      _c("div", { staticClass: "p-d-flex p-jc-between p-mt-5 p-mb-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            { staticClass: "btn btn-secondary" },
            [
              _c(
                "router-link",
                {
                  staticStyle: { color: "#fff", "text-decoration": "none" },
                  attrs: { to: "/CreateSalesReturn" }
                },
                [_vm._v("Create Sales Return")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "DataTable",
        {
          staticClass:
            "p-mt-2 animate__animated animate__fadeIn p-datatable-sm",
          attrs: {
            value: _vm.TableData,
            scrollable: true,
            paginator: true,
            rows: 7,
            paginatorTemplate:
              "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            rowsPerPageOptions: [10, 20, 50],
            filters: _vm.filters,
            selection: _vm.selectedProducts3,
            editMode: "row",
            dataKey: "id",
            editingRows: _vm.editingRows
          },
          on: {
            "update:selection": function($event) {
              _vm.selectedProducts3 = $event
            },
            "update:editingRows": function($event) {
              _vm.editingRows = $event
            },
            "update:editing-rows": function($event) {
              _vm.editingRows = $event
            },
            "row-edit-init": _vm.onRowEditInit,
            "row-edit-cancel": _vm.onRowEditCancel
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "table-header p-d-flex p-jc-between" },
                    [
                      _c("div", [
                        _c("h2", [_c("i", { staticClass: "pi pi-book" })])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "p-input-icon-left" },
                          [
                            _c("i", { staticClass: "pi pi-search" }),
                            _vm._v(" "),
                            _c("InputText", {
                              attrs: { placeholder: "Global Search" },
                              model: {
                                value: _vm.filters["global"],
                                callback: function($$v) {
                                  _vm.$set(_vm.filters, "global", $$v)
                                },
                                expression: "filters['global']"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return undefined
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("Column", {
            attrs: { selectionMode: "multiple", headerStyle: "width: 3em" }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "InvoiceNo",
              headerStyle: "width: 170px",
              header: "Invoice No",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "SaleDate",
              headerStyle: "width: 170px",
              header: "Sale Date",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "CustomerName",
              headerStyle: "width: 200px",
              header: "Customer Name",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "Warehouse",
              headerStyle: "width: 170px",
              header: "Warehouse",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "ReferenceNo",
              headerStyle: "width: 190px",
              header: "Reference No",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "SalesStatus",
              headerStyle: "width: 170px",
              header: "Sales Status",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "SalesBy",
              headerStyle: "width: 170px",
              header: "Sales By",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "PaymentStatus",
              headerStyle: "width: 200px",
              header: "Payment Status",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "TotalProducts",
              headerStyle: "width: 190px",
              header: "Total Products",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "TotalQty",
              headerStyle: "width: 170px",
              header: "Total Qty",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "SubTotalPrice",
              headerStyle: "width: 190px",
              header: "Sub Total Price",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "TotalPrice",
              headerStyle: "width: 170px",
              header: "Total Price",
              sortable: ""
            }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "Action",
              headerStyle: "width: 150px",
              header: "Action"
            },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function() {
                  return [
                    _c("div", { staticClass: "p-d-flex" }, [
                      _c(
                        "a",
                        { staticClass: "btn btn-info mr-2" },
                        [
                          _c(
                            "router-link",
                            {
                              staticStyle: {
                                color: "#fff",
                                "text-decoration": "none"
                              },
                              attrs: { to: "/ViewSale" }
                            },
                            [_vm._v("View")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("a", { staticClass: "btn btn-danger" }, [
                        _vm._v("Delete")
                      ])
                    ])
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-mr-2" }, [
      _c("h3", [_vm._v("Return Sales Lists")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);