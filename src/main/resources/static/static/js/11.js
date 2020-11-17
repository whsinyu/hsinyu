(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/user */ \"./src/api/user.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Register\",\n  data: function data() {\n    var _this = this;\n\n    var validatePass = function validatePass(rule, value, callback) {\n      if (value === '') {\n        callback(new Error('请再次输入密码'));\n      } else if (value !== _this.ruleForm.pass) {\n        callback(new Error('两次输入密码不一致!'));\n      } else {\n        callback();\n      }\n    };\n\n    return {\n      loading: false,\n      ruleForm: {\n        name: \"\",\n        pass: \"\",\n        checkPass: \"\",\n        email: \"\"\n      },\n      rules: {\n        name: [{\n          required: true,\n          message: '请输入账号',\n          trigger: 'blur'\n        }, {\n          min: 2,\n          max: 10,\n          message: '长度在 2 到 10 个字符',\n          trigger: 'blur'\n        }],\n        pass: [{\n          required: true,\n          message: '请输入密码',\n          trigger: 'blur'\n        }, {\n          min: 6,\n          max: 20,\n          message: '长度在 6 到 20 个字符',\n          trigger: 'blur'\n        }],\n        checkPass: [{\n          required: true,\n          message: '请再次输入密码',\n          trigger: 'blur'\n        }, {\n          validator: validatePass,\n          trigger: 'blur'\n        }],\n        email: [{\n          required: true,\n          message: '请输入邮箱地址',\n          trigger: 'blur'\n        }, {\n          type: 'email',\n          message: '请输入正确的邮箱地址',\n          trigger: ['blur', 'change']\n        }]\n      }\n    };\n  },\n  methods: {\n    submitForm: function submitForm(formName) {\n      var _this2 = this;\n\n      this.$refs[formName].validate(function (valid) {\n        if (valid) {\n          _this2.loading = true;\n          Object(_api_user__WEBPACK_IMPORTED_MODULE_0__[\"userRegister\"])(_this2.ruleForm).then(function () {\n            setTimeout(function () {\n              _this2.loading = false;\n\n              _this2.$router.push({\n                path: _this2.redirect || '/login'\n              });\n            }, 0.1 * 1000);\n          }).catch(function () {\n            _this2.loading = false;\n          });\n        } else {\n          console.log('error submit!!');\n          return false;\n        }\n      });\n    },\n    resetForm: function resetForm(formName) {\n      this.$refs[formName].resetFields();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/auth/Register.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"550781b6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"550781b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"columns is-mobile\" }, [\n    _c(\"div\", { staticClass: \"column is-half is-offset-one-quarter\" }, [\n      _c(\"article\", { staticClass: \"message is-light my-6\" }, [\n        _vm._m(0),\n        _c(\n          \"div\",\n          { staticClass: \"message-body\" },\n          [\n            _c(\n              \"el-form\",\n              {\n                directives: [\n                  {\n                    name: \"loading\",\n                    rawName: \"v-loading\",\n                    value: _vm.loading,\n                    expression: \"loading\"\n                  }\n                ],\n                ref: \"ruleForm\",\n                staticClass: \"demo-ruleForm\",\n                attrs: {\n                  model: _vm.ruleForm,\n                  \"status-icon\": \"\",\n                  rules: _vm.rules,\n                  \"label-width\": \"100px\"\n                }\n              },\n              [\n                _c(\n                  \"el-form-item\",\n                  { attrs: { label: \"账号\", prop: \"name\" } },\n                  [\n                    _c(\"el-input\", {\n                      model: {\n                        value: _vm.ruleForm.name,\n                        callback: function($$v) {\n                          _vm.$set(_vm.ruleForm, \"name\", $$v)\n                        },\n                        expression: \"ruleForm.name\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"el-form-item\",\n                  { attrs: { label: \"密码\", prop: \"pass\" } },\n                  [\n                    _c(\"el-input\", {\n                      attrs: { type: \"password\", autocomplete: \"off\" },\n                      model: {\n                        value: _vm.ruleForm.pass,\n                        callback: function($$v) {\n                          _vm.$set(_vm.ruleForm, \"pass\", $$v)\n                        },\n                        expression: \"ruleForm.pass\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"el-form-item\",\n                  { attrs: { label: \"确认密码\", prop: \"checkPass\" } },\n                  [\n                    _c(\"el-input\", {\n                      attrs: { type: \"password\", autocomplete: \"off\" },\n                      model: {\n                        value: _vm.ruleForm.checkPass,\n                        callback: function($$v) {\n                          _vm.$set(_vm.ruleForm, \"checkPass\", $$v)\n                        },\n                        expression: \"ruleForm.checkPass\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"el-form-item\",\n                  { attrs: { label: \"邮箱\", prop: \"email\" } },\n                  [\n                    _c(\"el-input\", {\n                      attrs: { autocomplete: \"off\" },\n                      model: {\n                        value: _vm.ruleForm.email,\n                        callback: function($$v) {\n                          _vm.$set(_vm.ruleForm, \"email\", $$v)\n                        },\n                        expression: \"ruleForm.email\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"el-form-item\",\n                  [\n                    _c(\n                      \"el-button\",\n                      {\n                        attrs: { type: \"primary\" },\n                        on: {\n                          click: function($event) {\n                            return _vm.submitForm(\"ruleForm\")\n                          }\n                        }\n                      },\n                      [_vm._v(\"立即注册\")]\n                    ),\n                    _c(\n                      \"el-button\",\n                      {\n                        on: {\n                          click: function($event) {\n                            return _vm.resetForm(\"ruleForm\")\n                          }\n                        }\n                      },\n                      [_vm._v(\"重置\")]\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"message-header\" }, [\n      _c(\"p\", [_vm._v(\"新用户入驻\")])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/auth/Register.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22550781b6-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/api/user.js":
/*!*************************!*\
  !*** ./src/api/user.js ***!
  \*************************/
/*! exports provided: userRegister, getInfoByName, getInfoById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRegister\", function() { return userRegister; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfoByName\", function() { return getInfoByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInfoById\", function() { return getInfoById; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n// 导入封装好的axios实例\n\nfunction userRegister(userDTO) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/auth/register',\n    method: 'post',\n    data: userDTO\n  });\n} // 获取用户信息\n\nfunction getInfoByName(username) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/user/' + username,\n    method: 'get'\n  });\n} // 根据ID获取用户信息\n\nfunction getInfoById(id) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/u',\n    method: 'get',\n    params: {\n      id: id\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/api/user.js?");

/***/ }),

/***/ "./src/views/auth/Register.vue":
/*!*************************************!*\
  !*** ./src/views/auth/Register.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=17c846a0&scoped=true& */ \"./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true&\");\n/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ \"./src/views/auth/Register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"17c846a0\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/auth/Register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/auth/Register.vue?");

/***/ }),

/***/ "./src/views/auth/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/Register.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/auth/Register.vue?");

/***/ }),

/***/ "./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"550781b6-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=17c846a0&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"550781b6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/auth/Register.vue?vue&type=template&id=17c846a0&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_550781b6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_17c846a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/auth/Register.vue?");

/***/ })

}]);