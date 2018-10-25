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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maurice/Projects/seds/components/Container.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, props, {
    className: "jsx-1831885696" + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1831885696",
    css: "div.jsx-1831885696{margin:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWdCLEFBR29CLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL21hdXJpY2UvUHJvamVjdHMvc2Vkcy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxkaXYgey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBkaXYge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/maurice/Projects/seds/components/Container.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
var _jsxFileName = "/Users/maurice/Projects/seds/components/Footer.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Copyright 2018 - All information on this site is part of SEDS");
});

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
var _jsxFileName = "/Users/maurice/Projects/seds/components/Navigation.js";




var _styles$className = {
  styles: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "1412024740",
    css: "div.jsx-1412024740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt5QyxBQUdrQiwwRUFDZiIsImZpbGUiOiIvVXNlcnMvbWF1cmljZS9Qcm9qZWN0cy9zZWRzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5cbmNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZXMgfSA9IGNzcy5yZXNvbHZlYFxuICBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBwcmVmZXRjaD5cbiAgICAgICAgPGE+QWJvdXQgU0VEUzwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9lbnZpcm9ubWVudFwiIHByZWZldGNoPlxuICAgICAgICA8YT5FbnZpcm9ubWVudDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9lZHVjYXRpb25cIiBwcmVmZXRjaD5cbiAgICAgICAgPGE+Q2hpbGRyZW4ncyBFZHVjYXRpb248L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcmVwb3J0c1wiIHByZWZldGNoPlxuICAgICAgICA8YT5SZXBvcnRzPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gICAge3N0eWxlc31cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/maurice/Projects/seds/components/Navigation.js */",
    __self: undefined
  }),
  className: "jsx-1412024740"
},
    className = _styles$className.className,
    styles = _styles$className.styles;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "jsx-4261466549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "jsx-4261466549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About SEDS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/environment",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "jsx-4261466549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Environment")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/education",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "jsx-4261466549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Children's Education")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/reports",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "jsx-4261466549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Reports")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "4261466549",
    css: "a.jsx-4261466549{margin-right:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFHNkIsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcblxuY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlcyB9ID0gY3NzLnJlc29sdmVgXG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBwcmVmZXRjaD5cbiAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIHByZWZldGNoPlxuICAgICAgICA8YT5BYm91dCBTRURTPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8TGluayBocmVmPVwiL2Vudmlyb25tZW50XCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPkVudmlyb25tZW50PC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8TGluayBocmVmPVwiL2VkdWNhdGlvblwiIHByZWZldGNoPlxuICAgICAgICA8YT5DaGlsZHJlbidzIEVkdWNhdGlvbjwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmsgaHJlZj1cIi9yZXBvcnRzXCIgcHJlZmV0Y2g+XG4gICAgICAgIDxhPlJlcG9ydHM8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICB7c3R5bGVzfVxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/maurice/Projects/seds/components/Navigation.js */",
    __self: this
  })), styles);
});

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
var _jsxFileName = "/Users/maurice/Projects/seds/components/Page.js";



var _styles$className = {
  styles: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3437452344",
    css: "div.jsx-3437452344{background:red;-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5QyxBQUdvQixlQUNSLGlDQUNUIiwiZmlsZSI6Ii9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcblxuY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlcyB9ID0gY3NzLnJlc29sdmVgXG4gIGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGZsZXg6IDE7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtzdHlsZXN9XG4gICAgPC9Db250YWluZXI+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/maurice/Projects/seds/components/Page.js */",
    __self: undefined
  }),
  className: "jsx-3437452344"
},
    className = _styles$className.className,
    styles = _styles$className.styles;
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children, styles));
});

/***/ }),

/***/ "./components/Wrapper.js":
/*!*******************************!*\
  !*** ./components/Wrapper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maurice/Projects/seds/components/Wrapper.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-669606030",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "669606030",
    css: "div.jsx-669606030{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvY29tcG9uZW50cy9XcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQixBQUdzQiwwRUFDUyw4RUFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL21hdXJpY2UvUHJvamVjdHMvc2Vkcy9jb21wb25lbnRzL1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/maurice/Projects/seds/components/Wrapper.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Wrapper */ "./components/Wrapper.js");

var _jsxFileName = "/Users/maurice/Projects/seds/pages/_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Wrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        className: "jsx-2831955035" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "2831955035",
        css: "*{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXVyaWNlL1Byb2plY3RzL3NlZHMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBR3NCLFNBQ1giLCJmaWxlIjoiL1VzZXJzL21hdXJpY2UvUHJvamVjdHMvc2Vkcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG5cbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1BhZ2U+XG5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvV3JhcHBlcj5cblxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/maurice/Projects/seds/pages/_app.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

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
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map