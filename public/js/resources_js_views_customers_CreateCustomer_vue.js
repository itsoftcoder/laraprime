"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customers_CreateCustomer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: 'CreateCustomer',
  data: function data() {
    return {
      designation: {
        name: '',
        description: ''
      },
      loading: false
    };
  },
  methods: {
    saveDesignation: function saveDesignation() {
      var self = this;
      self.loading = true;
      var data = self.designation;
      axios.post('/add-designation', data).then(function (response) {
        console.log(response);

        if (response.data == 'success') {
          self.loading = false;
          self.$toast.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Order submitted',
            life: 3000
          });
          self.designation = {
            name: '',
            description: ''
          };
          this.$router.push({
            name: "About"
          });
        } else {
          self.$toast.add({
            severity: 'error',
            summary: 'Server Error',
            detail: 'Something went to wrong!',
            life: 3000
          });
          self.loading = false;
        }
      })["catch"](function (error) {
        if (error.response.status == 401) {
          self.$toast.add({
            severity: 'error',
            summary: 'Unauthenticated',
            detail: 'Your are Not an Authenticated Person!',
            life: 5000
          });
          self.loading = false;
        } else if (error.response.status == 403) {
          self.$toast.add({
            severity: 'error',
            summary: 'Forbidden',
            detail: 'Access denid!',
            life: 5000
          });
          self.loading = false;
        } else if (error.response.status == 404) {
          self.$toast.add({
            severity: 'error',
            summary: 'Not Found',
            detail: 'Your Request Url or Page Not found!',
            life: 5000
          });
          self.loading = false;
        } else if (error.response.status == 405) {
          self.$toast.add({
            severity: 'error',
            summary: 'Method Not Allowed',
            detail: 'Your Request Method does allow between http url',
            life: 5000
          });
          self.loading = false;
        } else if (error.response.status == 500) {
          self.$toast.add({
            severity: 'error',
            summary: 'Internal Server Problem',
            detail: 'Database Server connection or query Problem!',
            life: 5000
          });
          self.loading = false;
        } else {
          self.$toast.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went to Wrong!',
            life: 5000
          });
          self.loading = false;
        } // console.log(error.response.data);
        // console.log(error.response.statusText);
        // console.log(error.response.headers);
        // console.log(error.response)

      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/customers/CreateCustomer.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/customers/CreateCustomer.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=template&id=837ec3da& */ "./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da&");
/* harmony import */ var _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCustomer.vue?vue&type=script&lang=js& */ "./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customers/CreateCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCustomer_vue_vue_type_template_id_837ec3da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCustomer.vue?vue&type=template&id=837ec3da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/CreateCustomer.vue?vue&type=template&id=837ec3da& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("Card", {
        scopedSlots: _vm._u([
          {
            key: "content",
            fn: function() {
              return [
                _c("h2", { staticClass: "title" }, [_vm._v("Create Customer")]),
                _vm._v(" "),
                _c("Toast", { attrs: { position: "bottom-right" } }),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.$route.params.id))]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveDesignation()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group p-mt-3" }, [
                      _c(
                        "span",
                        { staticClass: "p-float-label" },
                        [
                          _c("InputText", {
                            attrs: { id: "name", type: "text" },
                            model: {
                              value: _vm.designation.name,
                              callback: function($$v) {
                                _vm.$set(_vm.designation, "name", $$v)
                              },
                              expression: "designation.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Name")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "span",
                        { staticClass: "p-float-label" },
                        [
                          _c("InputText", {
                            attrs: { id: "description", type: "text" },
                            model: {
                              value: _vm.designation.description,
                              callback: function($$v) {
                                _vm.$set(_vm.designation, "description", $$v)
                              },
                              expression: "designation.description"
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "description" } }, [
                            _vm._v("Description")
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("Button", { attrs: { type: "submit" } }, [
                      _vm.loading
                        ? _c(
                            "span",
                            [
                              _c("ProgressSpinner", {
                                staticStyle: {
                                  width: "20px",
                                  height: "20px",
                                  "margin-right": "5px"
                                },
                                attrs: {
                                  strokeWidth: "8",
                                  fill: "#f0f0f0",
                                  animationDuration: ".5s"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.loading ? _c("span", [_vm._v("Save")]) : _vm._e(),
                      _vm._v(" "),
                      _vm.loading ? _c("span", [_vm._v("Saving..")]) : _vm._e()
                    ])
                  ],
                  1
                )
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);