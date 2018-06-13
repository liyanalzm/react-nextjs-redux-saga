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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Errors/NoResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_js__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes_js__);
var _jsxFileName = "C:\\Users\\theoc\\Documents\\Factoring\\react-nextjs-redux-saga\\pages\\Errors\\NoResults.js";



var NotFound = function NotFound(_ref) {
  var searchData = _ref.searchData;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "No results found"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes_js__["Link"], {
    route: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Please try again. ")));
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "./pages/Errors/SomethingWrong.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\theoc\\Documents\\Factoring\\react-nextjs-redux-saga\\pages\\Errors\\SomethingWrong.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NotFound =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      var error = this.props.error;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "Something went wrong!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, " Error name: ", error.name, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, " Error message: ", error.message)));
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "./pages/movies/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = failure;
/* unused harmony export submitForm */
/* harmony export (immutable) */ __webpack_exports__["d"] = loadData;
/* harmony export (immutable) */ __webpack_exports__["c"] = getData;
/* unused harmony export getSearchData */
/* harmony export (immutable) */ __webpack_exports__["e"] = loadDataSuccess;
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

/***/ "./pages/movies/movieList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_movieList__ = __webpack_require__("./pages/movies/templates/movieList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__("./pages/movies/actions.js");

var _jsxFileName = "C:\\Users\\theoc\\Documents\\Factoring\\react-nextjs-redux-saga\\pages\\movies\\movieList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MovieListDynamic = __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./pages/movies/templates/movieList.js");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  new Promise(function(resolve) { resolve(); }).then((function (require) {
    try {
      var m = __webpack_require__("./pages/movies/templates/movieList.js");

      m.__webpackChunkName = 'pages_movies_templates_movieList_c259ab86f742c1ada1f2de86e070fa40';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}), {
  loading: function loading() {
    return __WEBPACK_IMPORTED_MODULE_4__templates_movieList__["mocktemplate"];
  },
  ssr: false
});

var MovieList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList() {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).apply(this, arguments));
  }

  _createClass(MovieList, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          movies = _props.movies,
          error = _props.error,
          isFetching = _props.isFetching;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Index Page"), !isFetching && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MovieListDynamic, {
        movies: movies,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }) || __WEBPACK_IMPORTED_MODULE_4__templates_movieList__["mocktemplate"]);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var _props$ctx, store, query;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$ctx = props.ctx, store = _props$ctx.store, query = _props$ctx.query;
                store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions__["d" /* loadData */])(query.id));

              case 2:
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

  return MovieList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return state;
})(MovieList));

/***/ }),

/***/ "./pages/movies/templates/movieList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mocktemplate", function() { return mocktemplate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Errors_NoResults__ = __webpack_require__("./pages/Errors/NoResults.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Errors_SomethingWrong__ = __webpack_require__("./pages/Errors/SomethingWrong.js");
var _jsxFileName = "C:\\Users\\theoc\\Documents\\Factoring\\react-nextjs-redux-saga\\pages\\movies\\templates\\movieList.js";
// import {Link} from 'next-url-prettifier';
// import { Link, Router } from '../../../routes.js';




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var movies = _ref.movies,
      error = _ref.error;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, !movies && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Errors_SomethingWrong__["a" /* default */], {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }) || movies.length <= 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Errors_NoResults__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }) || movies.map(function (_ref2) {
    var show = _ref2.show;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
      href: "/movies/desc?id=".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, show.name)));
  }));
});
var mocktemplate = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  }
}, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  }
}, "mock")));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports) {

// TODO: split this object up into three: one for for routes with 1 param, 2params, and 3 params. Then change routing function to use the correct obj depending on the num of params
var routes = [{
  page: '/Errors/NotFound'
}, {
  path: '/movies',
  page: '/movies'
}, {
  path: '/movies/list',
  page: '/movies/movieList'
}, {
  path: '/movies/desc',
  page: '/movies/movieDetails'
}];
module.exports = routes;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/movies/movieList.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=movieList.js.map