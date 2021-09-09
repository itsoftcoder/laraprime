"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_purchases_PurchaseReturnInvoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/button */ "./node_modules/primevue/button/index.js");
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
  components: {
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_0__.default
  },
  name: "PurchaseReturnInvoice",
  data: function data() {
    return {
      home: {
        icon: "pi pi-home",
        to: "/"
      },
      Breadcrumb: [{
        label: "Purchase"
      }, {
        label: "Puchase Return List",
        to: "/purchase-return-list"
      }, {
        label: "Create Puchase Return",
        to: "/create-purchase-return"
      }, {
        label: "Purchase Return Invoice"
      }],
      PurchaseReturnInvoice: [{
        id: "1",
        item: "Flatter Theme",
        quantity: "10",
        unitPrice: "$18",
        totalPrice: "$180"
      }, {
        id: "2",
        item: "Flat Icons",
        quantity: "6",
        unitPrice: "$59",
        totalPrice: "$254"
      }, {
        id: "3",
        item: "Wordpress version",
        quantity: "4",
        unitPrice: "$95",
        totalPrice: "$385"
      }, {
        id: "4",
        item: "Server Development",
        quantity: "1",
        unitPrice: "$300",
        totalPrice: "$300"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/primevue/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/primevue/button/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(/*! ./Button.vue */ "./node_modules/primevue/button/Button.vue");

/***/ }),

/***/ "./node_modules/primevue/button/Button.vue":
/*!*************************************************!*\
  !*** ./node_modules/primevue/button/Button.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=3339e4ae& */ "./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./node_modules/primevue/button/Button.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/primevue/button/Button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ripple_Ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ripple/Ripple */ "./node_modules/primevue/ripple/Ripple.js");
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
    props: {
        label: {
            type: String
        },
        icon: {
            type: String
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        badge: {
            type: String
        },
        badgeClass: {
            type: String,
            default: null
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-component': true,
                'p-button-icon-only': this.icon && !this.label,
                'p-button-vertical': (this.iconPos === 'top' || this.iconPos === 'bottom') && this.label,
                'p-disabled': this.disabled
            }
        },
        iconClass() {
            return [
                this.icon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label,
                    'p-button-icon-top': this.iconPos === 'top' && this.label,
                    'p-button-icon-bottom': this.iconPos === 'bottom' && this.label
                }
            ]
        },
        badgeStyleClass() {
            return [
                'p-badge p-component', this.badgeClass, {
                    'p-badge-no-gutter': this.badge && String(this.badge).length === 1
            }]
        }
    },
    directives: {
        'ripple': _ripple_Ripple__WEBPACK_IMPORTED_MODULE_0__.default
    }
});


/***/ }),

/***/ "./resources/js/views/purchases/PurchaseReturnInvoice.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/purchases/PurchaseReturnInvoice.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50& */ "./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50&");
/* harmony import */ var _PurchaseReturnInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseReturnInvoice.vue?vue&type=script&lang=js& */ "./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _PurchaseReturnInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__.render,
  _PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/purchases/PurchaseReturnInvoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseReturnInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseReturnInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseReturnInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/primevue/button/Button.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./node_modules/primevue/button/Button.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae&":
/*!********************************************************************************!*\
  !*** ./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_3339e4ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=3339e4ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae&");


/***/ }),

/***/ "./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseReturnInvoice_vue_vue_type_template_id_5a218b50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/primevue/button/Button.vue?vue&type=template&id=3339e4ae& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "button",
    _vm._g(
      {
        directives: [{ name: "ripple", rawName: "v-ripple" }],
        class: _vm.buttonClass,
        attrs: { type: "button" }
      },
      _vm.$listeners
    ),
    [
      _vm._t("default", function() {
        return [
          _vm.icon ? _c("span", { class: _vm.iconClass }) : _vm._e(),
          _vm._v(" "),
          _c("span", { staticClass: "p-button-label" }, [
            _vm._v(_vm._s(_vm.label || " "))
          ]),
          _vm._v(" "),
          _vm.badge
            ? _c(
                "span",
                { staticClass: "p-badge", class: _vm.badgeStyleClass },
                [_vm._v(_vm._s(_vm.badge))]
              )
            : _vm._e()
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/purchases/PurchaseReturnInvoice.vue?vue&type=template&id=5a218b50& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("Breadcrumb", { attrs: { home: _vm.home, model: _vm.Breadcrumb } }),
      _vm._v(" "),
      _c("div", { staticClass: "p-d-flex p-jc-between p-mt-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "Button",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-white",
                    attrs: { to: "/purchase-return-list" }
                  },
                  [_vm._v("Purchase return List\n        ")]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("card", {
        staticClass: "p-mt-2",
        scopedSlots: _vm._u([
          {
            key: "content",
            fn: function() {
              return [
                _c("div", { staticClass: "p-d-flex p-jc-between p-mt-2" }, [
                  _c("div"),
                  _vm._v(" "),
                  _c("div", [
                    _c("h2", [_vm._v("Invoice-1234578")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-right" }, [
                      _vm._v("14 april 2014")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "p-grid" }, [
                  _c("div", { staticClass: "p-col-3" }, [
                    _c("div", { staticClass: "text-left" }, [
                      _c("h3", [_vm._v("From : Dynofy")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("350 rhode Island State")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Suite 240, san francisco")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Califonia, 94103")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Phone: 244-11-39")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Email: contact@dynofy.com")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-col-1" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-col-3" }, [
                    _c("div", { staticClass: "text-left" }, [
                      _c("h3", [_vm._v("To : John Doe")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("425 market State")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Suite 2200, san francisco")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Califonia, 94103")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Phone: 244-11-39")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Email: jhon@doe.com")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-col-2" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "p-col-3" }, [
                    _c("div", { staticClass: "text-right" }, [
                      _c("h3", [_vm._v("Payment Details")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("date: 14 april 2014")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Vat: DK888-777")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Total Amount: $1019")]),
                      _vm._v(" "),
                      _c("p", [_vm._v("Acount Name: Flatter")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "DataTable",
                  {
                    attrs: {
                      scrollable: true,
                      value: _vm.PurchaseReturnInvoice
                    }
                  },
                  [
                    _c("Column", {
                      attrs: {
                        field: "id",
                        headerStyle: "width: 50px",
                        header: "#"
                      }
                    }),
                    _vm._v(" "),
                    _c("Column", {
                      attrs: {
                        field: "item",
                        headerStyle: "width: 550px",
                        header: "Item"
                      }
                    }),
                    _vm._v(" "),
                    _c("Column", {
                      attrs: {
                        field: "quantity",
                        headerStyle: "width: 150px",
                        header: "Quantity"
                      }
                    }),
                    _vm._v(" "),
                    _c("Column", {
                      attrs: {
                        field: "unitPrice",
                        headerStyle: "width: 150px",
                        header: "Unit Price"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-right" },
                      [
                        _c("Column", {
                          attrs: {
                            field: "totalPrice",
                            headerStyle: "width: 150px",
                            header: "Total Price"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "p-mt-2 p-d-flex p-jc-between" }, [
                  _c("div", [
                    _c("div", { staticClass: "p-mt-2" }, [
                      _c("h3", [_vm._v("Thank You")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-mt-4" }, [
                      _c("button", { staticClass: "btn btn-success" }, [
                        _vm._v("Print invoice")
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "btn btn-danger" }, [
                        _vm._v("Mail invoice")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("table", [
                      _c("tr", [
                        _c("th", [_vm._v("Subtotal")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$1019")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Discount(10%)")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$101")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Vat(8%)")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$73")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(":")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$991")])
                      ])
                    ])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h3", [_vm._v("Purchase Return Invoice")])])
  }
]
render._withStripped = true



/***/ })

}]);