(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createGetCounter */
/* unused harmony export empty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return globalHandleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return interopDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hasFetch; });
/* unused harmony export purifyData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getChildrenComponentInstancesUsingFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applyAsyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMatchedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getMatchedComponentsInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flatMapComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return resolveRouteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return middlewareSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return promisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getQueryDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return normalizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLifecycleHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return urlJoin; });
/* unused harmony export stripTrailingSlash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isSamePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return setScrollRestoration; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(285);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(361);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(117);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(118);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(363);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(212);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(365);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(288);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(289);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(14);
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(72);





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






























// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (true) {
  window.onNuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window.onNuxtReadyCbs.push(cb);
  };
}
function createGetCounter(counterObject) {
  var defaultKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function getCounter() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultKey;
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler) {
    vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(function (m) {
    return m.default || m;
  });
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn("".concat(key, " is not able to be stringified. This will break in a production environment."));
    }
    return valid;
  }).reduce(function (obj, _ref3) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm) {
  var instances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var children = vm.$children || [];
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      if (child.$fetch) {
        instances.push(child);
      }
      if (child.$children) {
        getChildrenComponentInstancesUsingFetch(child, instances);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  var ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    var data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return _objectSpread(_objectSpread({}, data), asyncData);
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = vue__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'components';
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m[prop]).map(function (key) {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).reduce(function (promises, key) {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Component, instance, match, key) {
      var timeNow, previousReloadTime;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof Component === 'function' && !Component.options)) {
              _context.next = 11;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return Component();
          case 4:
            Component = _context.sent;
            _context.next = 11;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            // Handle webpack chunk loading errors
            // This may be due to a new deployment or a network problem
            if (_context.t0 && _context.t0.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
              timeNow = Date.now();
              previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely
              if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
                window.sessionStorage.setItem('nuxt-reload', timeNow);
                window.location.reload(true /* skip cache */);
              }
            }
            throw _context.t0;
          case 11:
            match.components[key] = Component = sanitizeComponent(Component);
            return _context.abrupt("return", typeof fn === 'function' ? fn(Component, instance, match, key) : Component);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 7]]);
    }));
    return function (_x, _x2, _x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }()));
}
function getRouteData(_x5) {
  return _getRouteData.apply(this, arguments);
}
function _getRouteData() {
  _getRouteData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(route) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (route) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          _context2.next = 4;
          return resolveRouteComponents(route);
        case 4:
          return _context2.abrupt("return", _objectSpread(_objectSpread({}, route), {}, {
            meta: getMatchedComponents(route).map(function (Component, index) {
              return _objectSpread(_objectSpread({}, Component.options.meta), (route.matched[index] || {}).meta);
            })
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getRouteData.apply(this, arguments);
}
function setContext(_x6, _x7) {
  return _setContext.apply(this, arguments);
}
function _setContext() {
  _setContext = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(app, context) {
    var _yield$Promise$all, _yield$Promise$all2, currentRouteData, fromRouteData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // If context not defined, create it
          if (!app.context) {
            app.context = {
              isStatic: true,
              isDev: false,
              isHMR: false,
              app: app,
              payload: context.payload,
              error: context.error,
              base: app.router.options.base,
              env: {}
            };
            // Only set once

            if (context.req) {
              app.context.req = context.req;
            }
            if (context.res) {
              app.context.res = context.res;
            }
            if (context.ssrContext) {
              app.context.ssrContext = context.ssrContext;
            }
            app.context.redirect = function (status, path, query) {
              if (!status) {
                return;
              }
              app.context._redirected = true;
              // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
              var pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(path);
              if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                query = path || {};
                path = status;
                pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(path);
                status = 302;
              }
              if (pathType === 'object') {
                path = app.router.resolve(path).route.fullPath;
              }
              // "/absolute/route", "./relative/route" or "../relative/route"
              if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                app.context.next({
                  path: path,
                  query: query,
                  status: status
                });
              } else {
                path = Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* withQuery */ "d"])(path, query);
                if (false) {}
                if (true) {
                  // https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
                  window.location.assign(path);

                  // Throw a redirect error
                  throw new Error('ERR_REDIRECT');
                }
              }
            };
            if (false) {}
            if (true) {
              app.context.nuxtState = window.__NUXT__;
            }
          }

          // Dynamic keys
          _context3.next = 3;
          return Promise.all([getRouteData(context.route), getRouteData(context.from)]);
        case 3:
          _yield$Promise$all = _context3.sent;
          _yield$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_yield$Promise$all, 2);
          currentRouteData = _yield$Promise$all2[0];
          fromRouteData = _yield$Promise$all2[1];
          if (context.route) {
            app.context.route = currentRouteData;
          }
          if (context.from) {
            app.context.from = fromRouteData;
          }
          if (context.error) {
            app.context.error = context.error;
          }
          app.context.next = context.next;
          app.context._redirected = false;
          app.context._errored = false;
          app.context.isHMR = false;
          app.context.params = app.context.route.params || {};
          app.context.query = app.context.route.query || {};
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _setContext.apply(this, arguments);
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  var promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  var path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  var fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo__WEBPACK_IMPORTED_MODULE_33__[/* normalizeURL */ "c"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  var diff = {};
  var queries = _objectSpread(_objectSpread({}, toQuery), fromQuery);
  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  var message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = "[".concat(err.constructor.name, "]");
    }
  } else {
    message = err.message || err;
  }
  return _objectSpread(_objectSpread({}, err), {}, {
    message: message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  var re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var _i = 0; _i < tokens.length; _i++) {
      var token = tokens[_i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      var value = data[token.name || 'pathMatch'];
      var segment = void 0;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[_i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[_i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
var urlJoin = ufo__WEBPACK_IMPORTED_MODULE_33__[/* joinURL */ "b"];
var stripTrailingSlash = ufo__WEBPACK_IMPORTED_MODULE_33__[/* withoutTrailingSlash */ "e"];
var isSamePath = ufo__WEBPACK_IMPORTED_MODULE_33__[/* isSamePath */ "a"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(212);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


















var requestIdleCallback = window.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
var cancelIdleCallback = window.cancelIdleCallback || function (id) {
  clearTimeout(id);
};
var observer = window.IntersectionObserver && new window.IntersectionObserver(function (entries) {
  entries.forEach(function (_ref) {
    var intersectionRatio = _ref.intersectionRatio,
      link = _ref.target;
    if (intersectionRatio <= 0 || !link.__prefetch) {
      return;
    }
    link.__prefetch();
  });
});
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtLink',
  extends: vue__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (this.prefetch && !this.noPrefetch) {
      this.handleId = requestIdleCallback(this.observe, {
        timeout: 2e3
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    cancelIdleCallback(this.handleId);
    if (this.__observed) {
      observer.unobserve(this.$el);
      delete this.$el.__prefetch;
    }
  },
  methods: {
    observe: function observe() {
      // If no IntersectionObserver, avoid prefetching
      if (!observer) {
        return;
      }
      // Add to observer
      if (this.shouldPrefetch()) {
        this.$el.__prefetch = this.prefetchLink.bind(this);
        observer.observe(this.$el);
        this.__observed = true;
      }
    },
    shouldPrefetch: function shouldPrefetch() {
      return this.getPrefetchComponents().length > 0;
    },
    canPrefetch: function canPrefetch() {
      var conn = navigator.connection;
      var hasBadConnection = this.$nuxt.isOffline || conn && ((conn.effectiveType || '').includes('2g') || conn.saveData);
      return !hasBadConnection;
    },
    getPrefetchComponents: function getPrefetchComponents() {
      var ref = this.$router.resolve(this.to, this.$route, this.append);
      var Components = ref.resolved.matched.map(function (r) {
        return r.components.default;
      });
      return Components.filter(function (Component) {
        return typeof Component === 'function' && !Component.options && !Component.__prefetched;
      });
    },
    prefetchLink: function prefetchLink() {
      if (!this.canPrefetch()) {
        return;
      }
      // Stop observing this link (in case of internet connection changes)
      observer.unobserve(this.$el);
      var Components = this.getPrefetchComponents();
      var _iterator = _createForOfIteratorHelper(Components),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var Component = _step.value;
          var componentOrPromise = Component();
          if (componentOrPromise instanceof Promise) {
            componentOrPromise.catch(function () {});
          }
          Component.__prefetched = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
});

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var middleware = {};
/* harmony default export */ __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(297).default
var update = add("4d2b205a", content, true, {"sourceMap":false});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(297).default
var update = add("ac24266e", content, true, {"sourceMap":false});

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);






var isSsrHydration = function isSsrHydration(vm) {
  return vm.$vnode && vm.$vnode.elm && vm.$vnode.elm.dataset && vm.$vnode.elm.dataset.fetchKey;
};
var nuxtState = window.__NUXT__;
/* harmony default export */ __webpack_exports__["a"] = ({
  beforeCreate: function beforeCreate() {
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* hasFetch */ "l"])(this)) {
      return;
    }
    this._fetchDelay = typeof this.$options.fetchDelay === 'number' ? this.$options.fetchDelay : 200;
    vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].util.defineReactive(this, '$fetchState', {
      pending: false,
      error: null,
      timestamp: Date.now()
    });
    this.$fetch = $fetch.bind(this);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* addLifecycleHook */ "a"])(this, 'created', created);
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* addLifecycleHook */ "a"])(this, 'beforeMount', beforeMount);
  }
});
function beforeMount() {
  if (!this._hydrated) {
    return this.$fetch();
  }
}
function created() {
  if (!isSsrHydration(this)) {
    return;
  }

  // Hydrate component
  this._hydrated = true;
  this._fetchKey = this.$vnode.elm.dataset.fetchKey;
  var data = nuxtState.fetch[this._fetchKey];

  // If fetch error
  if (data && data._error) {
    this.$fetchState.error = data._error;
    return;
  }

  // Merge data
  for (var key in data) {
    vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].set(this.$data, key, data[key]);
  }
}
function $fetch() {
  var _this = this;
  if (!this._fetchPromise) {
    this._fetchPromise = $_fetch.call(this).then(function () {
      delete _this._fetchPromise;
    });
  }
  return this._fetchPromise;
}
function $_fetch() {
  return _$_fetch.apply(this, arguments);
}
function _$_fetch() {
  _$_fetch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _this2 = this;
    var error, startTime, delayLeft;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          this.$nuxt.nbFetching++;
          this.$fetchState.pending = true;
          this.$fetchState.error = null;
          this._hydrated = false;
          error = null;
          startTime = Date.now();
          _context.prev = 6;
          _context.next = 9;
          return this.$options.fetch.call(this);
        case 9:
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](6);
          if (false) {}
          error = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[/* normalizeError */ "p"])(_context.t0);
        case 15:
          delayLeft = this._fetchDelay - (Date.now() - startTime);
          if (!(delayLeft > 0)) {
            _context.next = 19;
            break;
          }
          _context.next = 19;
          return new Promise(function (resolve) {
            return setTimeout(resolve, delayLeft);
          });
        case 19:
          this.$fetchState.error = error;
          this.$fetchState.pending = false;
          this.$fetchState.timestamp = Date.now();
          this.$nextTick(function () {
            return _this2.$nuxt.nbFetching--;
          });
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[6, 11]]);
  }));
  return _$_fetch.apply(this, arguments);
}

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(321);


/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(329);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(342);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(344);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(139);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(140);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(143);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(144);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(114);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(212);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(115);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(116);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(14);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(298);
/* harmony import */ var _middleware_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(231);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(12);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(77);
/* harmony import */ var _mixins_fetch_client__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(305);
/* harmony import */ var _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(192);






function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


























 // should be included after ./index.js

// Fetch mixin
if (!vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].__nuxt__fetch__mixin__) {
  vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].mixin(_mixins_fetch_client__WEBPACK_IMPORTED_MODULE_31__[/* default */ "a"]);
  vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].component(_components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"].name, _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"]);
vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].component('NLink', _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_32__[/* default */ "a"]);
if (!global.fetch) {
  global.fetch = unfetch__WEBPACK_IMPORTED_MODULE_27__[/* default */ "a"];
}

// Global shared references
var _lastPaths = [];
var app;
var router;

// Try to rehydrate SSR data from window
var NUXT = window.__NUXT__ || {};
var $config = NUXT.config || {};
if ($config._app) {
  __webpack_require__.p = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* urlJoin */ "v"])($config._app.cdnURL, $config._app.assetsPath);
}
Object.assign(vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].config, {
  "silent": true,
  "performance": false
});
var errorHandler = vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].config.errorHandler || console.error;

// Create and mount App
Object(_index_js__WEBPACK_IMPORTED_MODULE_30__[/* createApp */ "b"])(null, NUXT.config).then(mountApp).catch(errorHandler);
function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return option.apply(void 0, args);
  }
  return option;
}
function mapTransitions(toComponents, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? {
      name: transition
    } : transition;
  };
  var fromComponents = from ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponents */ "g"])(from) : [];
  var maxDepth = Math.max(toComponents.length, fromComponents.length);
  var mergedTransitions = [];
  var _loop = function _loop() {
    // Clone original objects to prevent overrides
    var toTransitions = Object.assign({}, componentTransitions(toComponents[i]));
    var transitions = Object.assign({}, componentTransitions(fromComponents[i]));

    // Combine transitions & prefer `leave` properties of "from" route
    Object.keys(toTransitions).filter(function (key) {
      return typeof toTransitions[key] !== 'undefined' && !key.toLowerCase().includes('leave');
    }).forEach(function (key) {
      transitions[key] = toTransitions[key];
    });
    mergedTransitions.push(transitions);
  };
  for (var i = 0; i < maxDepth; i++) {
    _loop();
  }
  return mergedTransitions;
}
function loadAsyncComponents(_x, _x2, _x3) {
  return _loadAsyncComponents.apply(this, arguments);
}
function _loadAsyncComponents() {
  _loadAsyncComponents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(to, from, next) {
    var _this3 = this;
    var Components, startLoader, err, statusCode, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // Check if route changed (this._routeChanged), only if the page is not an error (for validate())
          this._routeChanged = Boolean(app.nuxt.err) || from.name !== to.name;
          this._paramChanged = !this._routeChanged && from.path !== to.path;
          this._queryChanged = !this._paramChanged && from.fullPath !== to.fullPath;
          this._diffQuery = this._queryChanged ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getQueryDiff */ "i"])(to.query, from.query) : [];
          if ((this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual) {
            this.$loading.start();
          }
          _context2.prev = 5;
          if (!this._queryChanged) {
            _context2.next = 12;
            break;
          }
          _context2.next = 9;
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* resolveRouteComponents */ "r"])(to, function (Component, instance) {
            return {
              Component: Component,
              instance: instance
            };
          });
        case 9:
          Components = _context2.sent;
          // Add a marker on each component that it needs to refresh or not
          startLoader = Components.some(function (_ref2) {
            var Component = _ref2.Component,
              instance = _ref2.instance;
            var watchQuery = Component.options.watchQuery;
            if (watchQuery === true) {
              return true;
            }
            if (Array.isArray(watchQuery)) {
              return watchQuery.some(function (key) {
                return _this3._diffQuery[key];
              });
            }
            if (typeof watchQuery === 'function') {
              return watchQuery.apply(instance, [to.query, from.query]);
            }
            return false;
          });
          if (startLoader && this.$loading.start && !this.$loading.manual) {
            this.$loading.start();
          }
        case 12:
          // Call next()
          next();
          _context2.next = 26;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);
          err = _context2.t0 || {};
          statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
          message = err.message || ''; // Handle chunk loading errors
          // This may be due to a new deployment or a network problem
          if (!/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
            _context2.next = 23;
            break;
          }
          window.location.reload(true /* skip cache */);
          return _context2.abrupt("return");
        case 23:
          this.error({
            statusCode: statusCode,
            message: message
          });
          this.$nuxt.$emit('routeChanged', to, from, err);
          next();
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this, [[5, 15]]);
  }));
  return _loadAsyncComponents.apply(this, arguments);
}
function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* applyAsyncData */ "b"])(Component, ssrData);
  }
  Component._Ctor = Component;
  return Component;
}

// Get matched components
function resolveComponents(route) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* flatMapComponents */ "d"])(route, /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Component, _, match, key, index) {
      var _Component;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof Component === 'function' && !Component.options)) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return Component();
          case 3:
            Component = _context.sent;
          case 4:
            // Sanitize it and save it
            _Component = applySSRData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* sanitizeComponent */ "s"])(Component), NUXT.data ? NUXT.data[index] : null);
            match.components[key] = _Component;
            return _context.abrupt("return", _Component);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());
}
function callMiddleware(Components, context, layout, renderState) {
  var _this = this;
  var midd = [];
  var unknownMiddleware = false;

  // If layout is undefined, only call global middleware
  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)
    layout = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* sanitizeComponent */ "s"])(layout);
    if (layout.options.middleware) {
      midd = midd.concat(layout.options.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }
  midd = midd.map(function (name) {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _middleware_js__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"][name] !== 'function') {
      unknownMiddleware = true;
      _this.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _middleware_js__WEBPACK_IMPORTED_MODULE_28__[/* default */ "a"][name];
  });
  if (unknownMiddleware) {
    return;
  }
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* middlewareSeries */ "o"])(midd, context, renderState);
}
function render(_x9, _x10, _x11, _x12) {
  return _render.apply(this, arguments);
} // Fix components format in matched, it's due to code-splitting of vue-router
function _render() {
  _render = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(to, from, next, renderState) {
    var _this4 = this;
    var spaFallback, fromMatches, nextCalled, _next, matches, Components, errorLayout, layout, _layout, isValid, _iterator, _step, Component, instances, error, _layout2;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(this._routeChanged === false && this._paramChanged === false && this._queryChanged === false)) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return", next());
        case 2:
          // Handle first render on SPA mode
          spaFallback = false;
          if (to === from) {
            _lastPaths = [];
            spaFallback = true;
          } else {
            fromMatches = [];
            _lastPaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponents */ "g"])(from, fromMatches).map(function (Component, i) {
              return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* compile */ "c"])(from.matched[fromMatches[i]].path)(from.params);
            });
          }

          // nextCalled is true when redirected
          nextCalled = false;
          _next = function _next(path) {
            if (from.path === path.path && _this4.$loading.finish) {
              _this4.$loading.finish();
            }
            if (from.path !== path.path && _this4.$loading.pause) {
              _this4.$loading.pause();
            }
            if (nextCalled) {
              return;
            }
            nextCalled = true;
            next(path);
          }; // Update context
          _context4.next = 8;
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* setContext */ "t"])(app, {
            route: to,
            from: from,
            error: function error(err) {
              if (renderState.aborted) {
                return;
              }
              app.nuxt.error.call(_this4, err);
            },
            next: _next.bind(this)
          });
        case 8:
          this._dateLastError = app.nuxt.dateErr;
          this._hadError = Boolean(app.nuxt.err);

          // Get route's matched components
          matches = [];
          Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponents */ "g"])(to, matches); // If no Components matched, generate 404
          if (Components.length) {
            _context4.next = 33;
            break;
          }
          _context4.next = 15;
          return callMiddleware.call(this, Components, app.context, undefined, renderState);
        case 15:
          if (!nextCalled) {
            _context4.next = 17;
            break;
          }
          return _context4.abrupt("return");
        case 17:
          if (!renderState.aborted) {
            _context4.next = 20;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 20:
          // Load layout for error page
          errorLayout = (_index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"]).layout;
          _context4.next = 23;
          return this.loadLayout(typeof errorLayout === 'function' ? errorLayout.call(_index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"], app.context) : errorLayout);
        case 23:
          layout = _context4.sent;
          _context4.next = 26;
          return callMiddleware.call(this, Components, app.context, layout, renderState);
        case 26:
          if (!nextCalled) {
            _context4.next = 28;
            break;
          }
          return _context4.abrupt("return");
        case 28:
          if (!renderState.aborted) {
            _context4.next = 31;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 31:
          // Show error page
          app.context.error({
            statusCode: 404,
            message: 'This page could not be found'
          });
          return _context4.abrupt("return", next());
        case 33:
          // Update ._data and other properties if hot reloaded
          Components.forEach(function (Component) {
            if (Component._Ctor && Component._Ctor.options) {
              Component.options.asyncData = Component._Ctor.options.asyncData;
              Component.options.fetch = Component._Ctor.options.fetch;
            }
          });

          // Apply transitions
          this.setTransitions(mapTransitions(Components, to, from));
          _context4.prev = 35;
          _context4.next = 38;
          return callMiddleware.call(this, Components, app.context, undefined, renderState);
        case 38:
          if (!nextCalled) {
            _context4.next = 40;
            break;
          }
          return _context4.abrupt("return");
        case 40:
          if (!renderState.aborted) {
            _context4.next = 43;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 43:
          if (!app.context._errored) {
            _context4.next = 45;
            break;
          }
          return _context4.abrupt("return", next());
        case 45:
          // Set layout
          _layout = Components[0].options.layout;
          if (typeof _layout === 'function') {
            _layout = _layout(app.context);
          }
          _context4.next = 49;
          return this.loadLayout(_layout);
        case 49:
          _layout = _context4.sent;
          _context4.next = 52;
          return callMiddleware.call(this, Components, app.context, _layout, renderState);
        case 52:
          if (!nextCalled) {
            _context4.next = 54;
            break;
          }
          return _context4.abrupt("return");
        case 54:
          if (!renderState.aborted) {
            _context4.next = 57;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 57:
          if (!app.context._errored) {
            _context4.next = 59;
            break;
          }
          return _context4.abrupt("return", next());
        case 59:
          // Call .validate()
          isValid = true;
          _context4.prev = 60;
          _iterator = _createForOfIteratorHelper(Components);
          _context4.prev = 62;
          _iterator.s();
        case 64:
          if ((_step = _iterator.n()).done) {
            _context4.next = 75;
            break;
          }
          Component = _step.value;
          if (!(typeof Component.options.validate !== 'function')) {
            _context4.next = 68;
            break;
          }
          return _context4.abrupt("continue", 73);
        case 68:
          _context4.next = 70;
          return Component.options.validate(app.context);
        case 70:
          isValid = _context4.sent;
          if (isValid) {
            _context4.next = 73;
            break;
          }
          return _context4.abrupt("break", 75);
        case 73:
          _context4.next = 64;
          break;
        case 75:
          _context4.next = 80;
          break;
        case 77:
          _context4.prev = 77;
          _context4.t0 = _context4["catch"](62);
          _iterator.e(_context4.t0);
        case 80:
          _context4.prev = 80;
          _iterator.f();
          return _context4.finish(80);
        case 83:
          _context4.next = 89;
          break;
        case 85:
          _context4.prev = 85;
          _context4.t1 = _context4["catch"](60);
          // ...If .validate() threw an error
          this.error({
            statusCode: _context4.t1.statusCode || '500',
            message: _context4.t1.message
          });
          return _context4.abrupt("return", next());
        case 89:
          if (isValid) {
            _context4.next = 92;
            break;
          }
          this.error({
            statusCode: 404,
            message: 'This page could not be found'
          });
          return _context4.abrupt("return", next());
        case 92:
          _context4.next = 94;
          return Promise.all(Components.map( /*#__PURE__*/function () {
            var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Component, i) {
              var childPathChanged, watchParam, watchQuery, promises, hasAsyncData, hasFetch, loadingIncrease, promise, p;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    // Check if only children route changed
                    Component._path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* compile */ "c"])(to.matched[matches[i]].path)(to.params);
                    Component._dataRefresh = false;
                    childPathChanged = Component._path !== _lastPaths[i]; // Refresh component (call asyncData & fetch) when:
                    // Route path changed part includes current component
                    // Or route param changed part includes current component and watchParam is not `false`
                    // Or route query is changed and watchQuery returns `true`
                    if (_this4._routeChanged && childPathChanged) {
                      Component._dataRefresh = true;
                    } else if (_this4._paramChanged && childPathChanged) {
                      watchParam = Component.options.watchParam;
                      Component._dataRefresh = watchParam !== false;
                    } else if (_this4._queryChanged) {
                      watchQuery = Component.options.watchQuery;
                      if (watchQuery === true) {
                        Component._dataRefresh = true;
                      } else if (Array.isArray(watchQuery)) {
                        Component._dataRefresh = watchQuery.some(function (key) {
                          return _this4._diffQuery[key];
                        });
                      } else if (typeof watchQuery === 'function') {
                        if (!instances) {
                          instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponentsInstances */ "h"])(to);
                        }
                        Component._dataRefresh = watchQuery.apply(instances[i], [to.query, from.query]);
                      }
                    }
                    if (!(!_this4._hadError && _this4._isMounted && !Component._dataRefresh)) {
                      _context3.next = 6;
                      break;
                    }
                    return _context3.abrupt("return");
                  case 6:
                    promises = [];
                    hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
                    hasFetch = Boolean(Component.options.fetch) && Component.options.fetch.length;
                    loadingIncrease = hasAsyncData && hasFetch ? 30 : 45; // Call asyncData(context)
                    if (hasAsyncData) {
                      promise = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* promisify */ "q"])(Component.options.asyncData, app.context);
                      promise.then(function (asyncDataResult) {
                        Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* applyAsyncData */ "b"])(Component, asyncDataResult);
                        if (_this4.$loading.increase) {
                          _this4.$loading.increase(loadingIncrease);
                        }
                      });
                      promises.push(promise);
                    }

                    // Check disabled page loading
                    _this4.$loading.manual = Component.options.loading === false;

                    // Call fetch(context)
                    if (hasFetch) {
                      p = Component.options.fetch(app.context);
                      if (!p || !(p instanceof Promise) && typeof p.then !== 'function') {
                        p = Promise.resolve(p);
                      }
                      p.then(function (fetchResult) {
                        if (_this4.$loading.increase) {
                          _this4.$loading.increase(loadingIncrease);
                        }
                      });
                      promises.push(p);
                    }
                    return _context3.abrupt("return", Promise.all(promises));
                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x14, _x15) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 94:
          if (nextCalled) {
            _context4.next = 100;
            break;
          }
          if (this.$loading.finish && !this.$loading.manual) {
            this.$loading.finish();
          }
          if (!renderState.aborted) {
            _context4.next = 99;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 99:
          next();
        case 100:
          _context4.next = 119;
          break;
        case 102:
          _context4.prev = 102;
          _context4.t2 = _context4["catch"](35);
          if (!renderState.aborted) {
            _context4.next = 107;
            break;
          }
          next(false);
          return _context4.abrupt("return");
        case 107:
          error = _context4.t2 || {};
          if (!(error.message === 'ERR_REDIRECT')) {
            _context4.next = 110;
            break;
          }
          return _context4.abrupt("return", this.$nuxt.$emit('routeChanged', to, from, error));
        case 110:
          _lastPaths = [];
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* globalHandleError */ "k"])(error);

          // Load error layout
          _layout2 = (_index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"]).layout;
          if (typeof _layout2 === 'function') {
            _layout2 = _layout2(app.context);
          }
          _context4.next = 116;
          return this.loadLayout(_layout2);
        case 116:
          this.error(error);
          this.$nuxt.$emit('routeChanged', to, from, error);
          next();
        case 119:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this, [[35, 102], [60, 85], [62, 77, 80, 83]]);
  }));
  return _render.apply(this, arguments);
}
function normalizeComponents(to, ___) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* flatMapComponents */ "d"])(to, function (Component, _, match, key) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Component) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}
function setLayoutForNextPage(to) {
  // Set layout
  var hasError = Boolean(this.$options.nuxt.err);
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    hasError = false;
  }
  var layout = hasError ? (_index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"].options || _index_js__WEBPACK_IMPORTED_MODULE_30__[/* NuxtError */ "a"]).layout : to.matched[0].components.default.options.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  this.setLayout(layout);
}
function checkForErrors(app) {
  // Hide error component if no error
  if (app._hadError && app._dateLastError === app.$options.nuxt.dateErr) {
    app.error();
  }
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this2 = this;
  if (this._routeChanged === false && this._paramChanged === false && this._queryChanged === false) {
    return;
  }
  var instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponentsInstances */ "h"])(to);
  var Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* getMatchedComponents */ "g"])(to);
  var triggerScroll = false;
  vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].nextTick(function () {
    instances.forEach(function (instance, i) {
      if (!instance || instance._isDestroyed) {
        return;
      }
      if (instance.constructor._dataRefresh && Components[i] === instance.constructor && instance.$vnode.data.keepAlive !== true && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].set(instance.$data, key, newData[key]);
        }
        triggerScroll = true;
      }
    });
    if (triggerScroll) {
      // Ensure to trigger scroll event after calling scrollBehavior
      window.$nuxt.$nextTick(function () {
        window.$nuxt.$emit('triggerScroll');
      });
    }
    checkForErrors(_this2);
  });
}
function nuxtReady(_app) {
  window.onNuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}
function mountApp(_x13) {
  return _mountApp.apply(this, arguments);
}
function _mountApp() {
  _mountApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(__app) {
    var _app, layout, mount, Components, renderState, boundRender, clientFirstMount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          // Set global variables
          app = __app.app;
          router = __app.router;

          // Create Vue instance
          _app = new vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"](app); // Load layout
          layout = NUXT.layout || 'default';
          _context5.next = 6;
          return _app.loadLayout(layout);
        case 6:
          _app.setLayout(layout);

          // Mounts Vue app to DOM element
          mount = function mount() {
            _app.$mount('#__nuxt');

            // Add afterEach router hooks
            router.afterEach(normalizeComponents);
            router.afterEach(setLayoutForNextPage.bind(_app));
            router.afterEach(fixPrepatch.bind(_app));

            // Listen for first Vue update
            vue__WEBPACK_IMPORTED_MODULE_26__[/* default */ "a"].nextTick(function () {
              // Call window.{{globals.readyCallback}} callbacks
              nuxtReady(_app);
            });
          }; // Resolve route components
          _context5.next = 10;
          return Promise.all(resolveComponents(app.context.route));
        case 10:
          Components = _context5.sent;
          // Enable transitions
          _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);
          if (Components.length) {
            _app.setTransitions(mapTransitions(Components, router.currentRoute));
            _lastPaths = router.currentRoute.matched.map(function (route) {
              return Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* compile */ "c"])(route.path)(router.currentRoute.params);
            });
          }

          // Initialize error handler
          _app.$loading = {}; // To avoid error while _app.$nuxt does not exist
          if (NUXT.error) {
            _app.error(NUXT.error);
          }

          // Add beforeEach router hooks
          router.beforeEach(loadAsyncComponents.bind(_app));

          // Each new invocation of render() aborts previous invocation
          renderState = null;
          boundRender = render.bind(_app);
          router.beforeEach(function (to, from, next) {
            if (renderState) {
              renderState.aborted = true;
            }
            renderState = {
              aborted: false
            };
            boundRender(to, from, next, renderState);
          });

          // Fix in static: remove trailing slash to force hydration
          // Full static, if server-rendered: hydrate, to allow custom redirect to generated page

          // Fix in static: remove trailing slash to force hydration
          if (!(NUXT.serverRendered && Object(_utils_js__WEBPACK_IMPORTED_MODULE_29__[/* isSamePath */ "n"])(NUXT.routePath, _app.context.route.path))) {
            _context5.next = 21;
            break;
          }
          return _context5.abrupt("return", mount());
        case 21:
          // First render on client-side
          clientFirstMount = function clientFirstMount() {
            normalizeComponents(router.currentRoute, router.currentRoute);
            setLayoutForNextPage.call(_app, router.currentRoute);
            checkForErrors(_app);
            // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render
            mount();
          }; // fix: force next tick to avoid having same timestamp when an error happen on spa fallback
          _context5.next = 24;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 0);
          });
        case 24:
          render.call(_app, router.currentRoute, router.currentRoute, function (path) {
            // If not redirected
            if (!path) {
              clientFirstMount();
              return;
            }

            // Add a one-time afterEach hook to
            // mount the app wait for redirect and route gets resolved
            var unregisterHook = router.afterEach(function (to, from) {
              unregisterHook();
              clientFirstMount();
            });

            // Push the path and let route to be resolved
            router.push(path, undefined, function (err) {
              if (err) {
                errorHandler(err);
              }
            });
          }, {
            aborted: false
          });
        case 25:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _mountApp.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(78)))

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_f6c14312_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_f6c14312_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_f6c14312_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(292);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{align-items:center;background:#f7f8fb;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;padding:1rem;text-align:center;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;bottom:0;left:0;position:absolute;right:0;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_4940477c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_4940477c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_4940477c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(292);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createApp; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ nuxt_error; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(113);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.esm.browser.js
var vue_meta_esm_browser = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(232);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(126);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.mjs + 3 modules
var dist = __webpack_require__(72);

// EXTERNAL MODULE: ./test/fixture/default/.nuxt/utils.js
var utils = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(381);

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/router.scrollBehavior.js





if (true) {
  if ('scrollRestoration' in window.history) {
    Object(utils["u" /* setScrollRestoration */])('manual');

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', function () {
      Object(utils["u" /* setScrollRestoration */])('auto');
    });

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', function () {
      Object(utils["u" /* setScrollRestoration */])('manual');
    });
  }
}
function shouldScrollToTop(route) {
  var Pages = Object(utils["g" /* getMatchedComponents */])(route);
  if (Pages.length === 1) {
    var _Pages$0$options = Pages[0].options,
      options = _Pages$0$options === void 0 ? {} : _Pages$0$options;
    return options.scrollToTop !== false;
  }
  return Pages.some(function (_ref) {
    var options = _ref.options;
    return options && options.scrollToTop;
  });
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  var position = false;
  var isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  var nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(function () {
      return nuxt.$emit('triggerScroll');
    });
  }
  return new Promise(function (resolve) {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', function () {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        var hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          var el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            var y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y: y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/router.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }














var router_7a215946 = function _7a215946() {
  return Object(utils["m" /* interopDefault */])(__webpack_require__.e(/* import() | pages/index */ 2).then(__webpack_require__.bind(null, 397)));
};
var emptyFn = function emptyFn() {};
vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
var routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: router_7a215946,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  var base = config._app && config._app.basePath || routerOptions.base;
  var router = new vue_router_esm["a" /* default */](_objectSpread(_objectSpread({}, routerOptions), {}, {
    base: base
  }));

  // TODO: remove in Nuxt 3
  var originalPush = router.push;
  router.push = function push(location) {
    var onComplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyFn;
    var onAbort = arguments.length > 2 ? arguments[2] : undefined;
    return originalPush.call(this, location, onComplete, onAbort);
  };
  var resolve = router.resolve.bind(router);
  router.resolve = function (to, current, append) {
    if (typeof to === 'string') {
      to = Object(dist["c" /* normalizeURL */])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-child.js


/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render: function render(_, _ref) {
    var parent = _ref.parent,
      data = _ref.data,
      props = _ref.props;
    var h = parent.$createElement;
    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (true) {
      // Add triggerScroll event on beforeEnter (fix #1376)
      var beforeEnter = listeners.beforeEnter;
      listeners.beforeEnter = function (el) {
        // Ensure to trigger scroll event after calling scrollBehavior
        window.$nuxt.$nextTick(function () {
          window.$nuxt.$emit('triggerScroll');
        });
        if (beforeEnter) {
          return beforeEnter.call(_parent, el);
        }
      };
    }

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      var leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = function (el, done) {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    var routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/.nuxt/components/nuxt-error.vue?vue&type=template&id=f6c14312
var nuxt_errorvue_type_template_id_f6c14312_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_c('div', {
    staticClass: "error"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "90",
      "height": "90",
      "fill": "#DBE1EC",
      "viewBox": "0 0 48 48"
    }
  }, [_c('path', {
    attrs: {
      "d": "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _vm.statusCode === 404 ? _c('p', {
    staticClass: "description"
  }, [typeof _vm.$route === 'undefined' ? _c('a', {
    staticClass: "error-link",
    attrs: {
      "href": "/"
    }
  }) : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._v(" "), _vm._m(0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "https://nuxtjs.org",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Nuxt")])]);
}];

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-error.vue?vue&type=template&id=f6c14312

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode: function statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message: function message() {
      return this.error.message || 'Error';
    }
  },
  head: function head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./test/fixture/default/.nuxt/components/nuxt-error.vue?vue&type=style&index=0&id=f6c14312&prod&lang=css
var nuxt_errorvue_type_style_index_0_id_f6c14312_prod_lang_css = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(119);

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-error.vue






/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  nuxt_errorvue_type_template_id_f6c14312_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(114);

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt.js









/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured: function errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(utils["c" /* compile */])(this.$route.matched[0].path)(this.$route.params);
      }
      var _this$$route$matched = Object(slicedToArray["a" /* default */])(this.$route.matched, 1),
        matchedRoute = _this$$route$matched[0];
      if (!matchedRoute) {
        return this.$route.path;
      }
      var Component = matchedRoute.components.default;
      if (Component && Component.options) {
        var options = Component.options;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      var strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render: function render(h) {
    var _this = this;
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(function () {
        return _this.errorFromNuxtError = false;
      });
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', "Error details: ".concat(this.errorFromNuxtError.toString())), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(function () {
      return _this.displayingNuxtError = false;
    });
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js

/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left: function left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
  },
  methods: {
    clear: function clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start: function start() {
      var _this = this;
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(function () {
          return _this.startTimer();
        }, this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get: function get() {
      return this.percent;
    },
    increase: function increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease: function decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    resume: function resume() {
      this.startTimer();
      return this;
    },
    finish: function finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide: function hide() {
      var _this2 = this;
      this.clear();
      this._hide = setTimeout(function () {
        _this2.show = false;
        _this2.$nextTick(function () {
          _this2.percent = 0;
          _this2.reversed = false;
        });
      }, 500);
      return this;
    },
    fail: function fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer: function startTimer() {
      var _this3 = this;
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(function () {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (_this3.skipTimerCount > 0) {
          _this3.skipTimerCount--;
          return;
        }
        if (_this3.reversed) {
          _this3.decrease(_this3._cut);
        } else {
          _this3.increase(_this3._cut);
        }
        if (_this3.continuous) {
          if (_this3.percent >= 100) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          } else if (_this3.percent <= 0) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          }
        }
      }, 100);
    }
  },
  render: function render(h) {
    var el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./test/fixture/default/.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&id=4940477c&prod&lang=css
var nuxt_loadingvue_type_style_index_0_id_4940477c_prod_lang_css = __webpack_require__(387);

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns





/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./test/fixture/default/.nuxt/layouts/default.vue?vue&type=template&id=583047e1
var defaultvue_type_template_id_583047e1_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_583047e1_staticRenderFns = [];

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/layouts/default.vue?vue&type=template&id=583047e1

// CONCATENATED MODULE: ./test/fixture/default/.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_583047e1_render,
  defaultvue_type_template_id_583047e1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/App.js

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



















var layouts = {
  "_default": Object(utils["s" /* sanitizeComponent */])(layouts_default)
};
/* harmony default export */ var App = ({
  render: function render(h, props) {
    var loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(function () {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: function data() {
    return {
      isOnline: true,
      layout: null,
      layoutName: '',
      nbFetching: 0
    };
  },
  beforeCreate: function beforeCreate() {
    vue_runtime_esm["a" /* default */].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (true) {
      // add to window so we can listen when ready
      window.$nuxt = this;
      this.refreshOnlineStatus();
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus);
      window.addEventListener('offline', this.refreshOnlineStatus);
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  mounted: function mounted() {
    var _this = this;
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.$loading = _this.$refs.loading;
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline: function isOffline() {
      return !this.isOnline;
    },
    isFetching: function isFetching() {
      return this.nbFetching > 0;
    },
    isPreview: function isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus: function refreshOnlineStatus() {
      if (true) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true;
        } else {
          this.isOnline = window.navigator.onLine;
        }
      }
    },
    refresh: function refresh() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var pages, promises;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              pages = Object(utils["h" /* getMatchedComponentsInstances */])(_this2.$route);
              if (pages.length) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              _this2.$loading.start();
              promises = pages.map( /*#__PURE__*/function () {
                var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page) {
                  var p, _iterator, _step, component;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        p = []; // Old fetch
                        if (page.$options.fetch && page.$options.fetch.length) {
                          p.push(Object(utils["q" /* promisify */])(page.$options.fetch, _this2.context));
                        }
                        if (page.$options.asyncData) {
                          p.push(Object(utils["q" /* promisify */])(page.$options.asyncData, _this2.context).then(function (newData) {
                            for (var key in newData) {
                              vue_runtime_esm["a" /* default */].set(page.$data, key, newData[key]);
                            }
                          }));
                        }

                        // Wait for asyncData & old fetch to finish
                        _context2.next = 5;
                        return Promise.all(p);
                      case 5:
                        // Cleanup refs
                        p = [];
                        if (page.$fetch) {
                          p.push(page.$fetch());
                        }
                        // Get all component instance to call $fetch
                        _iterator = _createForOfIteratorHelper(Object(utils["e" /* getChildrenComponentInstancesUsingFetch */])(page.$vnode.componentInstance));
                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            component = _step.value;
                            p.push(component.$fetch());
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                        return _context2.abrupt("return", Promise.all(p));
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context3.prev = 5;
              _context3.next = 8;
              return Promise.all(promises);
            case 8:
              _context3.next = 15;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](5);
              _this2.$loading.fail(_context3.t0);
              Object(utils["k" /* globalHandleError */])(_context3.t0);
              _this2.error(_context3.t0);
            case 15:
              _this2.$loading.finish();
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 10]]);
      }))();
    },
    errorChanged: function errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        var errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: ./test/fixture/default/.nuxt/empty.js
var empty = __webpack_require__(301);
var empty_default = /*#__PURE__*/__webpack_require__.n(empty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(168);

// EXTERNAL MODULE: ./node_modules/lodash.mergewith/index.js
var lodash_mergewith = __webpack_require__(234);
var lodash_mergewith_default = /*#__PURE__*/__webpack_require__.n(lodash_mergewith);

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/index.js + 18 modules
var esm = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@sentry/browser/build/npm/esm/sdk.js
var sdk = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/@sentry/browser/build/npm/esm/index.js
var npm_esm = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@sentry/core/build/esm/integrations/extraerrordata.js
var extraerrordata = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/@sentry/browser/build/npm/esm/integrations/reportingobserver.js
var reportingobserver = __webpack_require__(296);

// EXTERNAL MODULE: ./node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js
var browserapierrors = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/@sentry-internal/replay/build/npm/esm/index.js + 3 modules
var build_npm_esm = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/@sentry/vue/build/esm/sdk.js + 6 modules
var esm_sdk = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/@sentry/vue/build/esm/browserTracingIntegration.js + 1 modules
var browserTracingIntegration = __webpack_require__(396);

// CONCATENATED MODULE: ./test/fixture/default/config/custom-client-integrations.js


/**
 * @param {import('@nuxt/types').Context} context
 * @return {Promise<import('@sentry/types').Integration[]>}
 */
// eslint-disable-next-line require-await
/* harmony default export */ var custom_client_integrations = (function (_x) {
  return custom_client_integrations_ref.apply(this, arguments);
});
function custom_client_integrations_ref() {
  custom_client_integrations_ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", []);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return custom_client_integrations_ref.apply(this, arguments);
}
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/sentry.client.shared.js















function sentry_client_shared_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function sentry_client_shared_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? sentry_client_shared_ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sentry_client_shared_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }







var SentrySdk = sentry_client_shared_objectSpread(sentry_client_shared_objectSpread({}, esm), {
  captureUserFeedback: sdk["a" /* captureUserFeedback */],
  forceLoad: sdk["b" /* forceLoad */],
  onLoad: sdk["e" /* onLoad */],
  showReportDialog: sdk["f" /* showReportDialog */],
  wrap: npm_esm["wrap"]
});

/** @type {string[]} */
var DISABLED_INTEGRATION_KEYS = [];

/**
 * @typedef {Parameters<typeof init>[0]} InitConfig
 * @param {import('@nuxt/types').Context} ctx
 * @return {Promise<InitConfig>}
 */
function getConfig(_x) {
  return _getConfig.apply(this, arguments);
}
function _getConfig() {
  _getConfig = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var config, resolvedIntegrations, customIntegrations, runtimeConfigKey;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          /** @type {InitConfig} */
          config = {
            dsn: "https://fe8b7df6ea7042f69d7a97c66c2934f7@sentry.io.nuxt/1429779",
            environment: "production",
            tracesSampleRate: 1,
            replaysSessionSampleRate: 0.1,
            replaysOnErrorSampleRate: 1,
            release: "d7b07ea8b75345c1fdf467f9ecdbdc16b468b2e6"
          };
          /** @type {NonNullable<InitConfig>['integrations']} */
          resolvedIntegrations = [Object(extraerrordata["a" /* extraErrorDataIntegration */])(), Object(reportingobserver["a" /* reportingObserverIntegration */])({
            types: ["crash"]
          }), Object(browserapierrors["a" /* browserApiErrorsIntegration */])({
            eventTarget: false
          }), Object(build_npm_esm["a" /* replayIntegration */])()];
          resolvedIntegrations.push(Object(browserTracingIntegration["a" /* browserTracingIntegration */])(sentry_client_shared_objectSpread({
            router: ctx.app.router
          }, {
            "routeLabel": "name"
          })));
          lodash_mergewith_default()(config, {
            "trackComponents": true
          }, {
            "tracesSampleRate": 1
          });
          _context.next = 6;
          return custom_client_integrations(ctx);
        case 6:
          customIntegrations = _context.sent;
          if (Array.isArray(customIntegrations)) {
            resolvedIntegrations.push.apply(resolvedIntegrations, Object(toConsumableArray["a" /* default */])(customIntegrations));
          } else {
            console.error("[@nuxtjs/sentry] Invalid value returned from customClientIntegrations plugin. Expected an array, got \"".concat(Object(esm_typeof["a" /* default */])(customIntegrations), "\"."));
          }
          config.integrations = function (defaultIntegrations) {
            return [].concat(Object(toConsumableArray["a" /* default */])(defaultIntegrations.filter(function (integration) {
              return !DISABLED_INTEGRATION_KEYS.includes(integration.name);
            })), resolvedIntegrations);
          };
          runtimeConfigKey = "sentry";
          if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
            lodash_mergewith_default()(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig);
          }
          return _context.abrupt("return", config);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getConfig.apply(this, arguments);
}
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/sentry.client.js










function sentry_client_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function sentry_client_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? sentry_client_ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sentry_client_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



/** @type {import('@nuxt/types').Plugin} */
/* harmony default export */ var sentry_client = (function (_x, _x2) {
  return sentry_client_ref.apply(this, arguments);
});
function sentry_client_ref() {
  sentry_client_ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, inject) {
    var config;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getConfig(ctx);
        case 2:
          config = _context.sent;
          Object(esm_sdk["a" /* init */])(sentry_client_objectSpread({
            Vue: vue_runtime_esm["a" /* default */]
          }, config));
          inject('sentry', SentrySdk);
          ctx.$sentry = SentrySdk;
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return sentry_client_ref.apply(this, arguments);
}
// CONCATENATED MODULE: ./test/fixture/default/.nuxt/index.js









function _nuxt_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _nuxt_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _nuxt_ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _nuxt_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
















/* Plugins */

 // Source: ./sentry.server.js (mode: 'server')
 // Source: ./sentry.client.js (mode: 'client')

// Component: <ClientOnly>
vue_runtime_esm["a" /* default */].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
vue_runtime_esm["a" /* default */].component(vue_no_ssr_common_default.a.name, _nuxt_objectSpread(_nuxt_objectSpread({}, vue_no_ssr_common_default.a), {}, {
  render: function render(h, ctx) {
    if ( true && !vue_no_ssr_common_default.a._warned) {
      vue_no_ssr_common_default.a._warned = true;
      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead');
    }
    return vue_no_ssr_common_default.a.render(h, ctx);
  }
}));

// Component: <NuxtChild>
vue_runtime_esm["a" /* default */].component(nuxt_child.name, nuxt_child);
vue_runtime_esm["a" /* default */].component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
vue_runtime_esm["a" /* default */].component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, '$nuxt', {
  get: function get() {
    var globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if ( true && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt;
    }
    return globalNuxt;
  },
  configurable: true
});
vue_runtime_esm["a" /* default */].use(vue_meta_esm_browser["a" /* default */], {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
var defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
function createApp(_x) {
  return _createApp.apply(this, arguments);
}
function _createApp() {
  _createApp = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ssrContext) {
    var config,
      store,
      router,
      app,
      next,
      route,
      path,
      inject,
      _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          inject = function _inject(key, value) {
            if (!key) {
              throw new Error('inject(key, value) has no key provided');
            }
            if (value === undefined) {
              throw new Error("inject('".concat(key, "', value) has no value provided"));
            }
            key = '$' + key;
            // Add into app
            app[key] = value;
            // Add into context
            if (!app.context[key]) {
              app.context[key] = value;
            }

            // Check if plugin not already installed
            var installKey = '__nuxt_' + key + '_installed__';
            if (vue_runtime_esm["a" /* default */][installKey]) {
              return;
            }
            vue_runtime_esm["a" /* default */][installKey] = true;
            // Call Vue.use() to install the plugin into vm
            vue_runtime_esm["a" /* default */].use(function () {
              if (!Object.prototype.hasOwnProperty.call(vue_runtime_esm["a" /* default */].prototype, key)) {
                Object.defineProperty(vue_runtime_esm["a" /* default */].prototype, key, {
                  get: function get() {
                    return this.$root.$options[key];
                  }
                });
              }
            });
          };
          config = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          store = null;
          _context2.next = 5;
          return createRouter(ssrContext, config, {
            store: store
          });
        case 5:
          router = _context2.sent;
          // Create Root instance
          // here we inject the router and store to all child components,
          // making them available everywhere as `this.$router` and `this.$store`.
          app = _nuxt_objectSpread({
            head: {
              "meta": [],
              "link": [],
              "style": [],
              "script": []
            },
            router: router,
            nuxt: {
              defaultTransition: defaultTransition,
              transitions: [defaultTransition],
              setTransitions: function setTransitions(transitions) {
                if (!Array.isArray(transitions)) {
                  transitions = [transitions];
                }
                transitions = transitions.map(function (transition) {
                  if (!transition) {
                    transition = defaultTransition;
                  } else if (typeof transition === 'string') {
                    transition = Object.assign({}, defaultTransition, {
                      name: transition
                    });
                  } else {
                    transition = Object.assign({}, defaultTransition, transition);
                  }
                  return transition;
                });
                this.$options.nuxt.transitions = transitions;
                return transitions;
              },
              err: null,
              dateErr: null,
              error: function error(err) {
                err = err || null;
                app.context._errored = Boolean(err);
                err = err ? Object(utils["p" /* normalizeError */])(err) : null;
                var nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
                if (this) {
                  nuxt = this.nuxt || this.$options.nuxt;
                }
                nuxt.dateErr = Date.now();
                nuxt.err = err;
                // Used in src/server.js
                if (ssrContext) {
                  ssrContext.nuxt.error = err;
                }
                return err;
              }
            }
          }, App);
          next = ssrContext ? ssrContext.next : function (location) {
            return app.router.push(location);
          }; // Resolve route
          if (ssrContext) {
            route = router.resolve(ssrContext.url).route;
          } else {
            path = Object(utils["f" /* getLocation */])(router.options.base, router.options.mode);
            route = router.resolve(path).route;
          }

          // Set context to app.context
          _context2.next = 11;
          return Object(utils["t" /* setContext */])(app, {
            route: route,
            next: next,
            error: app.nuxt.error.bind(app),
            payload: ssrContext ? ssrContext.payload : undefined,
            req: ssrContext ? ssrContext.req : undefined,
            res: ssrContext ? ssrContext.res : undefined,
            beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
            beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
            ssrContext: ssrContext
          });
        case 11:
          // Inject runtime config as $config
          inject('config', config);

          // Add enablePreview(previewData = {}) in context for plugins
          if (true) {
            app.context.enablePreview = function () {
              var previewData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              app.previewData = Object.assign({}, previewData);
              inject('preview', previewData);
            };
          }
          // Plugin execution
          if (true) {
            _context2.next = 16;
            break;
          }
          _context2.next = 16;
          return empty_default()(app.context, inject);
        case 16:
          if (!( true && typeof sentry_client === 'function')) {
            _context2.next = 19;
            break;
          }
          _context2.next = 19;
          return sentry_client(app.context, inject);
        case 19:
          // Lock enablePreview in context
          if (true) {
            app.context.enablePreview = function () {
              console.warn('You cannot call enablePreview() outside a plugin.');
            };
          }

          // Wait for async component to be resolved first
          _context2.next = 22;
          return new Promise(function (resolve, reject) {
            // Ignore 404s rather than blindly replacing URL in browser
            if (true) {
              var _router$resolve = router.resolve(app.context.route.fullPath),
                _route = _router$resolve.route;
              if (!_route.matched.length) {
                return resolve();
              }
            }
            router.replace(app.context.route.fullPath, resolve, function (err) {
              // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
              if (!err._isRouter) return reject(err);
              if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

              // navigated to a different route in router guard
              var unregister = router.afterEach( /*#__PURE__*/function () {
                var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (false) {}
                        _context.next = 3;
                        return Object(utils["j" /* getRouteData */])(to);
                      case 3:
                        app.context.route = _context.sent;
                        app.context.params = to.params || {};
                        app.context.query = to.query || {};
                        unregister();
                        resolve();
                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            });
          });
        case 22:
          return _context2.abrupt("return", {
            app: app,
            router: router
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createApp.apply(this, arguments);
}


/***/ })

},[[320,3,1,4]]]);