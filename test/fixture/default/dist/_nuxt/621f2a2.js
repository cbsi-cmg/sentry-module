(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/pages/index.vue?vue&type=template&id=2f041bf2
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('h3', [_vm._v("Server-side")]), _vm._v(" "), _c('span', {
    attrs: {
      "id": "server-side"
    }
  }, [_vm._v(_vm._s(_vm.serverSentryPresent ? 'Works!' : '$sentry object is missing!'))]), _vm._v(" "), _c('h3', [_vm._v("Client-side")]), _vm._v(" "), _c('span', {
    attrs: {
      "id": "client-side"
    }
  }, [_vm._v(_vm._s(_vm.clientSentryPresent ? 'Works!' : '$sentry object is missing!'))]), _vm._v(" "), _c('p', [_c('button', {
    attrs: {
      "id": "crash-button"
    },
    on: {
      "click": function click($event) {
        return _vm.crash_me();
      }
    }
  }, [_vm._v("\n      crash me\n    ")])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./test/fixture/default/pages/index.vue?vue&type=template&id=2f041bf2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var pagesvue_type_script_lang_js = ({
  asyncData: function asyncData(_ref) {
    var $sentry = _ref.$sentry,
      query = _ref.query;
    if (query.crashOnLoad) {
      // @ts-ignore forces a crash
      // eslint-disable-next-line no-undef
      crashOnLoad();
    }
    if (false) {}
  },
  data: function data() {
    return {
      clientSentryPresent: false,
      serverSentryPresent: false
    };
  },
  created: function created() {
    if (true) {
      var _this$$sentry;
      this.clientSentryPresent = Boolean((_this$$sentry = this.$sentry) === null || _this$$sentry === void 0 ? void 0 : _this$$sentry.captureException);
    }
  }
});
// CONCATENATED MODULE: ./test/fixture/default/pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var default_pagesvue_type_script_lang_js = (pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(119);

// CONCATENATED MODULE: ./test/fixture/default/pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  default_pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);