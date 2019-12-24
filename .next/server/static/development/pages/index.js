module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Root.jsx":
/*!************************************!*\
  !*** ./components/common/Root.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/techchain/Techchain/Project/Train/nextjs-with-redux-saga/components/common/Root.jsx";



var Root =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Root, _Component);

  function Root() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Root);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Root).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Root, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Reactjs with redux-saga"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "icon",
        href: "../static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })), this.props.children);
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./components/home/Index.js":
/*!**********************************!*\
  !*** ./components/home/Index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/images/logo.svg */ "./static/images/logo.svg");
/* harmony import */ var _static_images_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _configs_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/index */ "./configs/index.js");
/* harmony import */ var _common_Root__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/Root */ "./components/common/Root.jsx");
/* harmony import */ var _redux_actions_appActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/appActions */ "./redux/actions/appActions.js");








var _jsxFileName = "/home/techchain/Techchain/Project/Train/nextjs-with-redux-saga/components/home/Index.js";






var dataDefaults = {
  name: 'Tommy Ai',
  email: 'buithienai@gmail.com'
};

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "updateUser", function (data) {
      _this.props.updateUser(data);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.appReducer.user;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_common_Root__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "App-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _static_images_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "App-logo",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "URL github: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: _configs_index__WEBPACK_IMPORTED_MODULE_11__["default"].github,
        className: "App-link",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, _configs_index__WEBPACK_IMPORTED_MODULE_11__["default"].github)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Learn React"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, user.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, user.email), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(user).length === 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.updateUser(dataDefaults);
        },
        style: {
          marginTop: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Fetch data") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.updateUser({});
        },
        style: {
          marginTop: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Reset data"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    appReducer: state.appReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUser: function updateUser(data) {
      return dispatch(Object(_redux_actions_appActions__WEBPACK_IMPORTED_MODULE_13__["updateUser"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./configs/env/development/index.js":
/*!******************************************!*\
  !*** ./configs/env/development/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  urlApi: "http://development",
  github: "https://github.com/buithienai/nextjs-with-redux-saga"
});

/***/ }),

/***/ "./configs/env/index.js":
/*!******************************!*\
  !*** ./configs/env/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

var app = {
  env: {
    localhost: 'localhost',
    production: 'production',
    development: 'development'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(app));

/***/ }),

/***/ "./configs/env/localhost/index.js":
/*!****************************************!*\
  !*** ./configs/env/localhost/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  urlApi: "http://localhost",
  github: "https://github.com/buithienai/nextjs-with-redux-saga"
});

/***/ }),

/***/ "./configs/env/production/index.js":
/*!*****************************************!*\
  !*** ./configs/env/production/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  urlApi: "http://production",
  github: "https://github.com/buithienai/nextjs-with-redux-saga"
});

/***/ }),

/***/ "./configs/index.js":
/*!**************************!*\
  !*** ./configs/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./configs/env/index.js");


var env = "development" || false;
var config;

switch (env) {
  case "localhost":
    config = __webpack_require__(/*! ./env/localhost/index */ "./configs/env/localhost/index.js").default;
    break;

  case "production":
    config = __webpack_require__(/*! ./env/production/index */ "./configs/env/production/index.js").default;
    break;

  case "development":
    config = __webpack_require__(/*! ./env/development/index */ "./configs/env/development/index.js").default;
    break;

  default:
    config = __webpack_require__(/*! ./env/development/index */ "./configs/env/development/index.js").default;
    break;
}

/* harmony default export */ __webpack_exports__["default"] = (_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(_env__WEBPACK_IMPORTED_MODULE_1__["default"], config));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_home_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Index */ "./components/home/Index.js");





var _jsxFileName = "/home/techchain/Techchain/Project/Train/nextjs-with-redux-saga/pages/index.js";



var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_home_Index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./redux/actions/appActions.js":
/*!*************************************!*\
  !*** ./redux/actions/appActions.js ***!
  \*************************************/
/*! exports provided: updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var _constants_appConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/appConstants */ "./redux/constants/appConstants.js");

function updateUser(data) {
  return {
    type: _constants_appConstants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"],
    data: data
  };
}

/***/ }),

/***/ "./redux/constants/appConstants.js":
/*!*****************************************!*\
  !*** ./redux/constants/appConstants.js ***!
  \*****************************************/
/*! exports provided: UPDATE_USER, UPDATE_USER_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function() { return UPDATE_USER_SUCCESS; });
var UPDATE_USER = 'UPDATE_USER';
var UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

/***/ }),

/***/ "./static/images/logo.svg":
/*!********************************!*\
  !*** ./static/images/logo.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzAuOTYgMTU5LjkzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzA5ZDNhYzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQxLjM1LDczLjI3YzAtNi44OS04LjExLTEzLTIwLjU4LTE2LjczLDMtMTIuNjcsMS42OS0yMi43NS00LjI4LTI2LjE2YTkuNTUsOS41NSwwLDAsMC00Ljc5LTEuMmMtNS41NywwLTEyLjYxLDMuODktMTkuNzIsMTAuNjItNy4xMS02LjY4LTE0LjEzLTEwLjU1LTE5LjY5LTEwLjU1YTkuNDYsOS40NiwwLDAsMC00Ljg2LDEuMjJjLTUuOTQsMy40Mi03LjE3LDEzLjQ0LTQuMjEsMjYuMDUtMTIuNDEsMy43MS0yMC40OCw5Ljc3LTIwLjUsMTYuNjNzOC4xMiwxMywyMC41OSwxNi43MmMtMywxMi42OC0xLjcsMjIuNzUsNC4yOCwyNi4xNmE5LjQxLDkuNDEsMCwwLDAsNC43OCwxLjJjNS41OCwwLDEyLjYyLTMuODksMTkuNzMtMTAuNjIsNy4xLDYuNjgsMTQuMTIsMTAuNTUsMTkuNjksMTAuNTVhOS41OSw5LjU5LDAsMCwwLDQuODYtMS4yMmM1Ljk0LTMuNDIsNy4xNi0xMy40NCw0LjIxLTI2QzEzMy4yNyw4Ni4xOCwxNDEuMzQsODAuMTIsMTQxLjM1LDczLjI3Wk05Ni41Niw0Mi4wNmM4LjE5LTcuMzMsMTMuMzEtOC4xMiwxNS4xMy04LjEyaDBhNC43MSw0LjcxLDAsMCwxLDIuNDIuNThjMi44NiwxLjYzLDQsNy4zOCwzLjA5LDE1YTU2LjczLDU2LjczLDAsMCwxLTEsNS43OSw5Ny43LDk3LjcsMCwwLDAtMTIuNTgtMi4wNyw5OC40Nyw5OC40NywwLDAsMC04LjI0LTEwLjA4Qzk1Ljc1LDQyLjc5LDk2LjE1LDQyLjQyLDk2LjU2LDQyLjA2Wk03MS43Nyw3OC45NGMuNzgsMS41LDEuNjEsMywyLjQ3LDQuNTFTNzYsODYuNDksNzcsODhjLTIuNzEtLjM5LTUuMzQtLjg4LTcuODQtMS40NkM2OS44Niw4NCw3MC43NSw4MS41LDcxLjc3LDc4Ljk0Wk02OSw1OS45YzIuNTMtLjU5LDUuMTgtMS4wOCw3LjkzLTEuNDYtMSwxLjQ4LTEuODYsMy0yLjc2LDQuNTlzLTEuNjksMy0yLjQ2LDQuNTJRNzAuMTgsNjMuNjUsNjksNTkuOVptNS4yMSwxMy4zNHExLjg2LTMuOTMsNC4wOS03Ljg2YzEuNS0yLjYyLDMuMTEtNS4xNyw0Ljc3LTcuNjEsMi45MS0uMjIsNS45MS0uMzQsOS0uMzNzNiwuMTIsOC44OS4zNWMxLjY2LDIuNDIsMy4yNSw1LDQuNzUsNy41NXMyLjg4LDUuMjIsNC4xMiw3LjgzYy0xLjIzLDIuNjItMi42LDUuMjUtNC4wOCw3Ljg1cy0zLjExLDUuMTgtNC43Nyw3LjYyYy0yLjkxLjIzLTUuOTEuMzQtOSwuMzRzLTYtLjEzLTguODktLjM2Yy0xLjY2LTIuNDItMy4yNi00Ljk0LTQuNzYtNy41NVM3NS41LDc1Ljg1LDc0LjI1LDczLjI0Wm0zMi44Ni0xNC43N2MyLjcyLjM4LDUuMzUuODcsNy44NCwxLjQ1LS43NCwyLjQ3LTEuNjIsNS0yLjY0LDcuNTUtLjc5LTEuNS0xLjYxLTMtMi40OC00LjUxUzEwOCw1OS45MywxMDcuMTEsNTguNDdabTIuNzYsMjQuOTJxMS4yOS0yLjI3LDIuNDYtNC41M2MxLDIuNiwyLDUuMTYsMi43LDcuNjYtMi41Mi41OS01LjE3LDEuMDctNy45MiwxLjQ1UTEwOC41Miw4NS43NSwxMDkuODcsODMuMzlaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTY0LjUzLDg1LjI2YTU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVhNTcuNjMsNTcuNjMsMCwwLDEsNS40NC0xLjk0QTk3LjkzLDk3LjkzLDAsMCwwLDY5LDczLjI1LDk4LjcyLDk4LjcyLDAsMCwwLDY0LjUzLDg1LjI2Wm0yMywxOS4xYy04LjE5LDcuMzMtMTMuMzEsOC4xMS0xNS4xNCw4LjExYTQuNjksNC42OSwwLDAsMS0yLjQyLS41OGMtMi44Ni0xLjYzLTQtNy4zOC0zLjA5LTE1YTU2LjA3LDU2LjA3LDAsMCwxLDEtNS43OCw5OS41MSw5OS41MSwwLDAsMCwxMi41OCwyLjA2LDk3LjE3LDk3LjE3LDAsMCwwLDguMjQsMTAuMDhabTQuNTctNC41MWMtMS44LTEuOTItMy41Ny00LTUuMzEtNi4yMywxLjcyLjA4LDMuNDcuMTIsNS4yNC4xMnMzLjU4LDAsNS4zMy0uMTFDOTUuNjMsOTUuODUsOTMuODcsOTcuOTMsOTIuMDksOTkuODVabTIyLjE4LDEyYTQuODIsNC44MiwwLDAsMS0yLjQ4LjU5Yy0xLjgyLDAtNy0uOC0xNS4xNi04LjFsLTEuMTctMS4wN2E5OC40NCw5OC40NCwwLDAsMCw4LjE1LTEwLDk3LDk3LDAsMCwwLDEyLjY2LTIuMDZjLjQ0LDEuOTQuNzksMy44NCwxLDUuNjdDMTE4LjI3LDEwNC40MiwxMTcuMTIsMTEwLjE4LDExNC4yNywxMTEuODFabTEwLjgtMjguNDRjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTQsOTguMSw5OC4xLDAsMCwwLDQuNDktMTIsNTguNzUsNTguNzUsMCwwLDEsNS41NCwyYzcuMDksMywxMS41LDYuODUsMTEuNDksMTAuMTRTMTMyLjE3LDgwLjQyLDEyNS4wNyw4My4zN1pNOTIsODIuMzlhOS4xOCw5LjE4LDAsMSwwLTkuMTctOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsODIuMzlaTTMxLDE3Ljg4VjEyOC41M0gxNTMuMDdWMTcuODhaTTE0OC4zLDEyMy43N0gzNS43OFYyMi42NUgxNDguM1ptLTg1LTMzLjljLTMsMTIuNjgtMS43LDIyLjc1LDQuMjgsMjYuMTZhOS40MSw5LjQxLDAsMCwwLDQuNzgsMS4yYzUuNTgsMCwxMi42Mi0zLjg5LDE5LjczLTEwLjYyLDcuMSw2LjY4LDE0LjEyLDEwLjU1LDE5LjY5LDEwLjU1YTkuNTksOS41OSwwLDAsMCw0Ljg2LTEuMjJjNS45NC0zLjQyLDcuMTYtMTMuNDQsNC4yMS0yNiwxMi40MS0zLjcyLDIwLjQ4LTkuNzgsMjAuNDktMTYuNjNzLTguMTEtMTMtMjAuNTgtMTYuNzNjMy0xMi42NywxLjY5LTIyLjc1LTQuMjgtMjYuMTZhOS41NSw5LjU1LDAsMCwwLTQuNzktMS4yYy01LjU3LDAtMTIuNjEsMy44OS0xOS43MiwxMC42Mi03LjExLTYuNjgtMTQuMTMtMTAuNTUtMTkuNjktMTAuNTVhOS40Niw5LjQ2LDAsMCwwLTQuODYsMS4yMmMtNS45NCwzLjQyLTcuMTcsMTMuNDQtNC4yMSwyNi4wNS0xMi40MSwzLjcxLTIwLjQ4LDkuNzctMjAuNSwxNi42M1M1MC44NCw4Ni4xMyw2My4zMSw4OS44N1ptMjQuMjEsMTQuNDljLTguMTksNy4zMy0xMy4zMSw4LjExLTE1LjE0LDguMTFhNC42OSw0LjY5LDAsMCwxLTIuNDItLjU4Yy0yLjg2LTEuNjMtNC03LjM4LTMuMDktMTVhNTYuMDcsNTYuMDcsMCwwLDEsMS01Ljc4LDk5LjUxLDk5LjUxLDAsMCwwLDEyLjU4LDIuMDYsOTcuMTcsOTcuMTcsMCwwLDAsOC4yNCwxMC4wOFptMjQuNzktMzYuODljLS43OS0xLjUtMS42MS0zLTIuNDgtNC41MXMtMS44LTMtMi43Mi00LjQ5YzIuNzIuMzgsNS4zNS44Nyw3Ljg0LDEuNDVDMTE0LjIxLDYyLjM5LDExMy4zMyw2NC45MiwxMTIuMzEsNjcuNDdabTIuNzIsMTljLTIuNTIuNTktNS4xNywxLjA3LTcuOTIsMS40NXExLjQxLTIuMjIsMi43Ni00LjU4dDIuNDYtNC41M0MxMTMuMzcsODEuNDYsMTE0LjI4LDg0LDExNSw4Ni41MlptLTUuMjEtMTMuMzVjLTEuMjMsMi42Mi0yLjYsNS4yNS00LjA4LDcuODVzLTMuMTEsNS4xOC00Ljc3LDcuNjJjLTIuOTEuMjMtNS45MS4zNC05LC4zNHMtNi0uMTMtOC44OS0uMzZjLTEuNjYtMi40Mi0zLjI2LTQuOTQtNC43Ni03LjU1cy0yLjg3LTUuMjItNC4xMi03LjgzcTEuODYtMy45Myw0LjA5LTcuODZjMS41LTIuNjIsMy4xMS01LjE3LDQuNzctNy42MSwyLjkxLS4yMiw1LjkxLS4zNCw5LS4zM3M2LC4xMiw4Ljg5LjM1YzEuNjYsMi40MiwzLjI1LDUsNC43NSw3LjU1UzEwOC41OCw3MC41NiwxMDkuODIsNzMuMTdaTTc3LDg4Yy0yLjcxLS4zOS01LjM0LS44OC03Ljg0LTEuNDYuNzQtMi40NiwxLjYzLTUsMi42NS03LjU1Ljc4LDEuNSwxLjYxLDMsMi40Nyw0LjUxUzc2LDg2LjQ5LDc3LDg4Wk03NC4yMSw2M2MtLjg3LDEuNS0xLjY5LDMtMi40Niw0LjUyUTcwLjE4LDYzLjY1LDY5LDU5LjljMi41My0uNTksNS4xOC0xLjA4LDcuOTMtMS40NkM3Niw1OS45Miw3NS4xMSw2MS40NSw3NC4yMSw2M1pNOTIuMDksOTkuODVjLTEuOC0xLjkyLTMuNTctNC01LjMxLTYuMjMsMS43Mi4wOCwzLjQ3LjEyLDUuMjQuMTJzMy41OCwwLDUuMzMtLjExQzk1LjYzLDk1Ljg1LDkzLjg3LDk3LjkzLDkyLjA5LDk5Ljg1Wm0yMi4xOCwxMmE0LjgyLDQuODIsMCwwLDEtMi40OC41OWMtMS44MiwwLTctLjgtMTUuMTYtOC4xbC0xLjE3LTEuMDdhOTguNDQsOTguNDQsMCwwLDAsOC4xNS0xMCw5Nyw5NywwLDAsMCwxMi42Ni0yLjA2Yy40NCwxLjk0Ljc5LDMuODQsMSw1LjY3QzExOC4yNywxMDQuNDIsMTE3LjEyLDExMC4xOCwxMTQuMjcsMTExLjgxWm01LjI4LTUwLjY2YTU4Ljc1LDU4Ljc1LDAsMCwxLDUuNTQsMmM3LjA5LDMsMTEuNSw2Ljg1LDExLjQ5LDEwLjE0cy00LjQxLDcuMTYtMTEuNTEsMTAuMTFjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTRBOTguMSw5OC4xLDAsMCwwLDExOS41NSw2MS4xNVptLTIzLTE5LjA5YzguMTktNy4zMywxMy4zMS04LjEyLDE1LjEzLTguMTJoMGE0LjcxLDQuNzEsMCwwLDEsMi40Mi41OGMyLjg2LDEuNjMsNCw3LjM4LDMuMDksMTVhNTYuNzMsNTYuNzMsMCwwLDEtMSw1Ljc5LDk3LjcsOTcuNywwLDAsMC0xMi41OC0yLjA3LDk4LjQ3LDk4LjQ3LDAsMCwwLTguMjQtMTAuMDhDOTUuNzUsNDIuNzksOTYuMTUsNDIuNDIsOTYuNTYsNDIuMDZaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTU5LDYzLjA1YTU3LjYzLDU3LjYzLDAsMCwxLDUuNDQtMS45NEE5Ny45Myw5Ny45MywwLDAsMCw2OSw3My4yNWE5OC43Miw5OC43MiwwLDAsMC00LjQ5LDEyLDU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVabTMzLDFhOS4xOCw5LjE4LDAsMSwwLDkuMTcsOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsNjRabTAsMGE5LjE4LDkuMTgsMCwxLDAsOS4xNyw5LjE5QTkuMTcsOS4xNywwLDAsMCw5Miw2NFptMCwwYTkuMTgsOS4xOCwwLDEsMCw5LjE3LDkuMTlBOS4xNyw5LjE3LDAsMCwwLDkyLDY0Wm00OS4zNSw5LjI0YzAtNi44OS04LjExLTEzLTIwLjU4LTE2LjczLDMtMTIuNjcsMS42OS0yMi43NS00LjI4LTI2LjE2YTkuNTUsOS41NSwwLDAsMC00Ljc5LTEuMmMtNS41NywwLTEyLjYxLDMuODktMTkuNzIsMTAuNjItNy4xMS02LjY4LTE0LjEzLTEwLjU1LTE5LjY5LTEwLjU1YTkuNDYsOS40NiwwLDAsMC00Ljg2LDEuMjJjLTUuOTQsMy40Mi03LjE3LDEzLjQ0LTQuMjEsMjYuMDUtMTIuNDEsMy43MS0yMC40OCw5Ljc3LTIwLjUsMTYuNjNzOC4xMiwxMywyMC41OSwxNi43MmMtMywxMi42OC0xLjcsMjIuNzUsNC4yOCwyNi4xNmE5LjQxLDkuNDEsMCwwLDAsNC43OCwxLjJjNS41OCwwLDEyLjYyLTMuODksMTkuNzMtMTAuNjIsNy4xLDYuNjgsMTQuMTIsMTAuNTUsMTkuNjksMTAuNTVhOS41OSw5LjU5LDAsMCwwLDQuODYtMS4yMmM1Ljk0LTMuNDIsNy4xNi0xMy40NCw0LjIxLTI2QzEzMy4yNyw4Ni4xOCwxNDEuMzQsODAuMTIsMTQxLjM1LDczLjI3Wk05Ni41Niw0Mi4wNmM4LjE5LTcuMzMsMTMuMzEtOC4xMiwxNS4xMy04LjEyaDBhNC43MSw0LjcxLDAsMCwxLDIuNDIuNThjMi44NiwxLjYzLDQsNy4zOCwzLjA5LDE1YTU2LjczLDU2LjczLDAsMCwxLTEsNS43OSw5Ny43LDk3LjcsMCwwLDAtMTIuNTgtMi4wNyw5OC40Nyw5OC40NywwLDAsMC04LjI0LTEwLjA4Qzk1Ljc1LDQyLjc5LDk2LjE1LDQyLjQyLDk2LjU2LDQyLjA2Wk03MS43Nyw3OC45NGMuNzgsMS41LDEuNjEsMywyLjQ3LDQuNTFTNzYsODYuNDksNzcsODhjLTIuNzEtLjM5LTUuMzQtLjg4LTcuODQtMS40NkM2OS44Niw4NCw3MC43NSw4MS41LDcxLjc3LDc4Ljk0Wk02OSw1OS45YzIuNTMtLjU5LDUuMTgtMS4wOCw3LjkzLTEuNDYtMSwxLjQ4LTEuODYsMy0yLjc2LDQuNTlzLTEuNjksMy0yLjQ2LDQuNTJRNzAuMTgsNjMuNjUsNjksNTkuOVptNS4yMSwxMy4zNHExLjg2LTMuOTMsNC4wOS03Ljg2YzEuNS0yLjYyLDMuMTEtNS4xNyw0Ljc3LTcuNjEsMi45MS0uMjIsNS45MS0uMzQsOS0uMzNzNiwuMTIsOC44OS4zNWMxLjY2LDIuNDIsMy4yNSw1LDQuNzUsNy41NXMyLjg4LDUuMjIsNC4xMiw3LjgzYy0xLjIzLDIuNjItMi42LDUuMjUtNC4wOCw3Ljg1cy0zLjExLDUuMTgtNC43Nyw3LjYyYy0yLjkxLjIzLTUuOTEuMzQtOSwuMzRzLTYtLjEzLTguODktLjM2Yy0xLjY2LTIuNDItMy4yNi00Ljk0LTQuNzYtNy41NVM3NS41LDc1Ljg1LDc0LjI1LDczLjI0Wm0zMi44Ni0xNC43N2MyLjcyLjM4LDUuMzUuODcsNy44NCwxLjQ1LS43NCwyLjQ3LTEuNjIsNS0yLjY0LDcuNTUtLjc5LTEuNS0xLjYxLTMtMi40OC00LjUxUzEwOCw1OS45MywxMDcuMTEsNTguNDdabTIuNzYsMjQuOTJxMS4yOS0yLjI3LDIuNDYtNC41M2MxLDIuNiwyLDUuMTYsMi43LDcuNjYtMi41Mi41OS01LjE3LDEuMDctNy45MiwxLjQ1UTEwOC41Miw4NS43NSwxMDkuODcsODMuMzlaTTkyLDQ2LjU2YzEuOCwxLjkyLDMuNTcsNCw1LjMsNi4yMy0xLjcxLS4wNy0zLjQ2LS4xMi01LjIzLS4xMnMtMy41OCwwLTUuMzMuMTJDODguNDUsNTAuNTcsOTAuMiw0OC40OCw5Miw0Ni41NlptLTIyLjE4LTEyQTQuODIsNC44MiwwLDAsMSw3Mi4yOSwzNGExMy4xMSwxMy4xMSwwLDAsMSw1LjE5LDEuMzEsMzkuMDcsMzkuMDcsMCwwLDEsMTAsNi43OGwxLjE3LDEuMDdhOTguNDksOTguNDksMCwwLDAtOC4xNiwxMCw5OC44OCw5OC44OCwwLDAsMC0xMi42NSwyLjA2Yy0uNDQtMS45NC0uOC0zLjg0LTEtNS42N0M2NS44LDQyLDY3LDM2LjI0LDY5LjgxLDM0LjZaTTY0LjUzLDg1LjI2YTU4Ljc1LDU4Ljc1LDAsMCwxLTUuNTQtMmMtNy4xLTMtMTEuNS02Ljg1LTExLjUtMTAuMTRTNTEuOTEsNjYsNTksNjMuMDVhNTcuNjMsNTcuNjMsMCwwLDEsNS40NC0xLjk0QTk3LjkzLDk3LjkzLDAsMCwwLDY5LDczLjI1LDk4LjcyLDk4LjcyLDAsMCwwLDY0LjUzLDg1LjI2Wm0yMywxOS4xYy04LjE5LDcuMzMtMTMuMzEsOC4xMS0xNS4xNCw4LjExYTQuNjksNC42OSwwLDAsMS0yLjQyLS41OGMtMi44Ni0xLjYzLTQtNy4zOC0zLjA5LTE1YTU2LjA3LDU2LjA3LDAsMCwxLDEtNS43OCw5OS41MSw5OS41MSwwLDAsMCwxMi41OCwyLjA2LDk3LjE3LDk3LjE3LDAsMCwwLDguMjQsMTAuMDhabTQuNTctNC41MWMtMS44LTEuOTItMy41Ny00LTUuMzEtNi4yMywxLjcyLjA4LDMuNDcuMTIsNS4yNC4xMnMzLjU4LDAsNS4zMy0uMTFDOTUuNjMsOTUuODUsOTMuODcsOTcuOTMsOTIuMDksOTkuODVabTIyLjE4LDEyYTQuODIsNC44MiwwLDAsMS0yLjQ4LjU5Yy0xLjgyLDAtNy0uOC0xNS4xNi04LjFsLTEuMTctMS4wN2E5OC40NCw5OC40NCwwLDAsMCw4LjE1LTEwLDk3LDk3LDAsMCwwLDEyLjY2LTIuMDZjLjQ0LDEuOTQuNzksMy44NCwxLDUuNjdDMTE4LjI3LDEwNC40MiwxMTcuMTIsMTEwLjE4LDExNC4yNywxMTEuODFabTEwLjgtMjguNDRjLTEuNzEuNy0zLjUyLDEuMzUtNS40NCwxLjkzYTk4LjU0LDk4LjU0LDAsMCwwLTQuNTctMTIuMTQsOTguMSw5OC4xLDAsMCwwLDQuNDktMTIsNTguNzUsNTguNzUsMCwwLDEsNS41NCwyYzcuMDksMywxMS41LDYuODUsMTEuNDksMTAuMTRTMTMyLjE3LDgwLjQyLDEyNS4wNyw4My4zN1pNOTIsODIuMzlhOS4xOCw5LjE4LDAsMSwwLTkuMTctOS4xOUE5LjE3LDkuMTcsMCwwLDAsOTIsODIuMzlabS02OS4zMiw1NC41VjI2LjJMMTcuODksMzFWMTQxLjY2SDEzOS45NGw0Ljc4LTQuNzdaIi8+PC9zdmc+"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/techchain/Techchain/Project/Train/nextjs-with-redux-saga/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map