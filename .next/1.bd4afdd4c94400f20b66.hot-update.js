webpackHotUpdate(1,{

/***/ "./node_modules/react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/react-redux/es/connect/selectorFactory.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_redux_saga__ = __webpack_require__("./node_modules/next-redux-saga/dist/next-redux-saga.es.js");

var _jsxFileName = "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\_app.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_1_next_app___default.a);

var _default = __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6_next_redux_saga__["a" /* default */])({
  async: true
})(MyApp));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyApp, "MyApp", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\_app.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\_app.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/movies/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = failure;
/* unused harmony export submitForm */
/* harmony export (immutable) */ __webpack_exports__["c"] = loadData;
/* unused harmony export getData */
/* unused harmony export getSearchData */
/* harmony export (immutable) */ __webpack_exports__["d"] = loadDataSuccess;
/* unused harmony export getDataSuccess */
/* unused harmony export startClock */
/* unused harmony export tickClock */
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var actionTypes = {
  FAILURE: 'FAILURE',
  SUBMIT_FORM: 'SUBMIT_FORM',
  LOAD_DATA: 'LOAD_DATA',
  GET_DATA: 'GET_DATA',
  GET_SEARCH_DATA: 'GET_SEARCH_DATA',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
  GET_DATA_FAILED: 'GET_DATA_FAILED',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILED: 'LOAD_DATA_FAILED',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
};
function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error: error
  };
}
function submitForm(data) {
  return {
    type: actionTypes.SUBMIT_FORM,
    data: data
  };
}
function loadData(search) {
  return {
    type: actionTypes.LOAD_DATA,
    search: search
  };
}
function getData(id) {
  return {
    type: actionTypes.GET_DATA,
    id: id
  };
}
function getSearchData(data) {
  return {
    type: actionTypes.GET_SEARCH_DATA,
    payload: data
  };
}
function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  };
}
function getDataSuccess(data) {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data: data
  };
}
function startClock() {
  return {
    type: actionTypes.START_CLOCK
  };
}
function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(actionTypes, "actionTypes", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(failure, "failure", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(submitForm, "submitForm", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(loadData, "loadData", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(getData, "getData", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(getSearchData, "getSearchData", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(loadDataSuccess, "loadDataSuccess", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(getDataSuccess, "getDataSuccess", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(startClock, "startClock", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  reactHotLoader.register(tickClock, "tickClock", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\actions.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies\\actions")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/movies/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return exampleInitialState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./pages/movies/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update__ = __webpack_require__("./node_modules/react-addons-update/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_update__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var exampleInitialState = {
  count: 10,
  error: null,
  lastUpdate: 0,
  light: false,
  movies: null,
  show: null,
  searchData: '',
  isFetching: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].FAILURE:
      return _objectSpread({}, state, {
        error: action.error,
        isFetching: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].LOAD_DATA:
      return _objectSpread({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].LOAD_DATA_SUCCESS:
      return _objectSpread({}, state, {
        movies: action.data,
        isFetching: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].LOAD_DATA_FAILED:
      return _objectSpread({}, state, {
        movies: null
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].GET_SEARCH_DATA:
      var _action$payload = action.payload,
          key = _action$payload.key,
          value = _action$payload.value;
      return __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default()(state, {
        searchData: {
          $set: value
        }
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].GET_DATA:
      return _objectSpread({}, state, {
        isFetching: true
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].GET_DATA_SUCCESS:
      return _objectSpread({}, state, {
        show: action.payload,
        isFetching: false
      });

    case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* actionTypes */].GET_DATA_FAILED:
      return _objectSpread({}, state, {
        show: null,
        isFetching: false
      });

    default:
      return state;
  }
}

var _default = reducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(exampleInitialState, "exampleInitialState", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\reducer.js");
  reactHotLoader.register(reducer, "reducer", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\reducer.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\reducer.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies\\reducer")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/movies/saga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = movieSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("./node_modules/redux-saga/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise__ = __webpack_require__("./node_modules/es6-promise/dist/es6-promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_js__ = __webpack_require__("./pages/movies/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(loadDataSaga),
    _marked2 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(getDataSaga),
    _marked3 =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(movieSaga);







__WEBPACK_IMPORTED_MODULE_3_es6_promise___default.a.polyfill();

function loadDataSaga(search) {
  var res, data, results;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function loadDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://api.tvmaze.com/search/shows?q=batman');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          data = _context.sent;
          _context.next = 9;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* call */])(searchData, {
            data: data,
            search: search
          });

        case 9:
          results = _context.sent;
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["d" /* loadDataSuccess */])(results));

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          _context.next = 18;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(_context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 14]]);
}

function searchData(payload) {
  var data = payload.data,
      search = payload.search;
  var results = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].show.name.toUpperCase().includes(search.search.toUpperCase())) {
      results.push(data[i]);
    }
  }

  return results;
}

function getDataSaga(action) {
  var id, res, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function getDataSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = action.id;
          _context2.next = 4;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])({
            type: 'GET_SEARCH_DATA',
            payload: {
              key: "id",
              value: id
            }
          });

        case 4:
          _context2.next = 6;
          return fetch("https://api.tvmaze.com/shows/".concat(id));

        case 6:
          res = _context2.sent;
          _context2.next = 9;
          return res.json();

        case 9:
          data = _context2.sent;

          if (!(res.status >= 200 && res.status < 300)) {
            _context2.next = 15;
            break;
          }

          _context2.next = 13;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])({
            type: 'GET_DATA_SUCCESS',
            payload: data
          });

        case 13:
          _context2.next = 17;
          break;

        case 15:
          _context2.next = 17;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(data));

        case 17:
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 23;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["d" /* put */])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(_context2.t0));

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 19]]);
}

function movieSaga() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function movieSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* all */])([Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* fork */])(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["e" /* takeLatest */], 'LOAD_DATA', loadDataSaga), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["c" /* fork */])(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["e" /* takeLatest */], 'GET_DATA', getDataSaga)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadDataSaga, "loadDataSaga", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\saga.js");
  reactHotLoader.register(searchData, "searchData", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\saga.js");
  reactHotLoader.register(getDataSaga, "getDataSaga", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\saga.js");
  reactHotLoader.register(movieSaga, "movieSaga", "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\movies\\saga.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/movies\\saga")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.bd4afdd4c94400f20b66.hot-update.js.map