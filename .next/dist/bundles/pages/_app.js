module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_redux_saga__ = __webpack_require__("next-redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_redux_saga__);

var _jsxFileName = "C:\\Users\\theoc\\Documents\\with-redux-saga\\pages\\_app.js";

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
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"], {
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

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6_next_redux_saga___default()({
  async: true
})(MyApp)));

/***/ }),

/***/ "./pages/movies/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = failure;
/* unused harmony export submitForm */
/* harmony export (immutable) */ __webpack_exports__["c"] = loadData;
/* unused harmony export getData */
/* unused harmony export getSearchData */
/* harmony export (immutable) */ __webpack_exports__["d"] = loadDataSuccess;
/* unused harmony export getDataSuccess */
/* unused harmony export startClock */
/* unused harmony export tickClock */
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

/***/ }),

/***/ "./pages/movies/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return exampleInitialState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./pages/movies/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update__ = __webpack_require__("react-addons-update");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_update__);
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

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),

/***/ "./pages/movies/saga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = movieSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise__ = __webpack_require__("es6-promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_es6_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_js__ = __webpack_require__("./pages/movies/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);


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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["call"])(searchData, {
            data: data,
            search: search
          });

        case 9:
          results = _context.sent;
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["d" /* loadDataSuccess */])(results));

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          _context.next = 18;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(_context.t0));

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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])({
            type: 'GET_DATA_SUCCESS',
            payload: data
          });

        case 13:
          _context2.next = 17;
          break;

        case 15:
          _context2.next = 17;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(data));

        case 17:
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 23;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_5__actions_js__["b" /* failure */])(_context2.t0));

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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"], 'LOAD_DATA', loadDataSaga), Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["takeLatest"], 'GET_DATA', getDataSaga)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configureStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_movies_reducer__ = __webpack_require__("./pages/movies/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saga__ = __webpack_require__("./store/saga.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();

var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__("redux-devtools-extension"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(void 0, _toConsumableArray(middleware)));
  }

  return __WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(void 0, _toConsumableArray(middleware));
};

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_2__pages_movies_reducer__["b" /* exampleInitialState */];
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__pages_movies_reducer__["a" /* default */], initialState, bindMiddleware([sagaMiddleware]));

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_3__saga__["a" /* default */]);
  };

  store.runSagaTask();
  return store;
}
/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),

/***/ "./store/saga.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_movies_saga__ = __webpack_require__("./pages/movies/saga.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise__ = __webpack_require__("es6-promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_es6_promise__);


var _marked =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(rootSaga);

/* global fetch */



__WEBPACK_IMPORTED_MODULE_3_es6_promise___default.a.polyfill();

function rootSaga() {
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["all"])([Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_2__pages_movies_saga__["a" /* movieSaga */])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["a"] = (rootSaga);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-saga":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-update":
/***/ (function(module, exports) {

module.exports = require("react-addons-update");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map