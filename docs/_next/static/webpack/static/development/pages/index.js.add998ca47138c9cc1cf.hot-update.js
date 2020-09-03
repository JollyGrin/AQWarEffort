webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dean/github/aqWarEffort/components/Item.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Item = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Item, _Component);\n\n  var _super = _createSuper(Item);\n\n  function Item(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Item);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"formatNumber\", function (rawNum) {\n      return Number(parseFloat(rawNum).toFixed(0)).toLocaleString('en', {\n        minimumFractionDigits: 0\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Item, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        prog: {\n          width: \"\".concat(Math.floor(this.props.current / this.props.total * 100 - 3), \"%\")\n        },\n        full: {\n          width: \"100%\"\n        }\n      };\n\n      var isFull = function isFull(current, total) {\n        if (current / total === 1) {\n          return styles.full;\n        } else {\n          return styles.prog;\n        }\n      };\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }, __jsx(\"a\", {\n        href: \"https://classic.wowhead.com/item=\".concat(this.props.id, \"/\"),\n        \"data-wowhead\": \"item=\".concat(this.props.id),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      }, __jsx(\"img\", {\n        src: \"https://wow.zamimg.com/images/wow/icons/large/\".concat(this.props.pic),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      })), __jsx(\"span\", {\n        className: \"percent\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      }, Math.floor(this.props.current / this.props.total * 100)), __jsx(\"div\", {\n        className: \"meter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      }, __jsx(\"span\", {\n        className: \"progress\",\n        style: isFull(this.props.current, this.props.total),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }\n      }, this.formatNumber(this.props.current), \" /\", ' ', this.formatNumber(this.props.total)))));\n    }\n  }]);\n\n  return Item;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0uanM/YWE4ZiJdLCJuYW1lcyI6WyJJdGVtIiwicHJvcHMiLCJyYXdOdW0iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwic3R5bGVzIiwicHJvZyIsIndpZHRoIiwiTWF0aCIsImZsb29yIiwiY3VycmVudCIsInRvdGFsIiwiZnVsbCIsImlzRnVsbCIsImlkIiwicGljIiwiZm9ybWF0TnVtYmVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxJOzs7OztBQUNuQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsdU5BSUosVUFBQ0MsTUFBRCxFQUFZO0FBQ3pCLGFBQU9DLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDRixNQUFELENBQVYsQ0FBbUJHLE9BQW5CLENBQTJCLENBQTNCLENBQUQsQ0FBTixDQUFzQ0MsY0FBdEMsQ0FBcUQsSUFBckQsRUFBMkQ7QUFDaEVDLDZCQUFxQixFQUFFO0FBRHlDLE9BQTNELENBQVA7QUFHRCxLQVJrQjs7QUFBQTtBQUVsQjs7Ozs2QkFRUTtBQUNQLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxZQUFJLEVBQUU7QUFDSkMsZUFBSyxZQUFLQyxJQUFJLENBQUNDLEtBQUwsQ0FDUCxLQUFLWCxLQUFMLENBQVdZLE9BQVgsR0FBcUIsS0FBS1osS0FBTCxDQUFXYSxLQUFqQyxHQUEwQyxHQUExQyxHQUFnRCxDQUR4QyxDQUFMO0FBREQsU0FETztBQU1iQyxZQUFJLEVBQUU7QUFDSkwsZUFBSztBQUREO0FBTk8sT0FBZjs7QUFXQSxVQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDakMsWUFBSUQsT0FBTyxHQUFHQyxLQUFWLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLGlCQUFPTixNQUFNLENBQUNPLElBQWQ7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBT1AsTUFBTSxDQUFDQyxJQUFkO0FBQ0Q7QUFDRixPQU5EOztBQU9BLGFBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsWUFBSSw2Q0FBc0MsS0FBS1IsS0FBTCxDQUFXZ0IsRUFBakQsTUFETjtBQUVFLHVDQUFzQixLQUFLaEIsS0FBTCxDQUFXZ0IsRUFBakMsQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFDRSxXQUFHLDBEQUFtRCxLQUFLaEIsS0FBTCxDQUFXaUIsR0FBOUQsQ0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkYsQ0FERixFQVNFO0FBQU0saUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dQLElBQUksQ0FBQ0MsS0FBTCxDQUFZLEtBQUtYLEtBQUwsQ0FBV1ksT0FBWCxHQUFxQixLQUFLWixLQUFMLENBQVdhLEtBQWpDLEdBQTBDLEdBQXJELENBREgsQ0FURixFQVlFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsVUFEWjtBQUVFLGFBQUssRUFBRUUsTUFBTSxDQUFDLEtBQUtmLEtBQUwsQ0FBV1ksT0FBWixFQUFxQixLQUFLWixLQUFMLENBQVdhLEtBQWhDLENBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHLEtBQUtLLFlBQUwsQ0FBa0IsS0FBS2xCLEtBQUwsQ0FBV1ksT0FBN0IsQ0FKSCxRQUk0QyxHQUo1QyxFQUtHLEtBQUtNLFlBQUwsQ0FBa0IsS0FBS2xCLEtBQUwsQ0FBV2EsS0FBN0IsQ0FMSCxDQURGLENBWkYsQ0FERixDQURGO0FBMEJEOzs7O0VBeEQrQk0sK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgZm9ybWF0TnVtYmVyID0gKHJhd051bSkgPT4ge1xuICAgIHJldHVybiBOdW1iZXIocGFyc2VGbG9hdChyYXdOdW0pLnRvRml4ZWQoMCkpLnRvTG9jYWxlU3RyaW5nKCdlbicsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgcHJvZzoge1xuICAgICAgICB3aWR0aDogYCR7TWF0aC5mbG9vcihcbiAgICAgICAgICAodGhpcy5wcm9wcy5jdXJyZW50IC8gdGhpcy5wcm9wcy50b3RhbCkgKiAxMDAgLSAzXG4gICAgICAgICl9JWAsXG4gICAgICB9LFxuICAgICAgZnVsbDoge1xuICAgICAgICB3aWR0aDogYDEwMCVgLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgaXNGdWxsID0gKGN1cnJlbnQsIHRvdGFsKSA9PiB7XG4gICAgICBpZiAoY3VycmVudCAvIHRvdGFsID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdHlsZXMuZnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdHlsZXMucHJvZztcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vY2xhc3NpYy53b3doZWFkLmNvbS9pdGVtPSR7dGhpcy5wcm9wcy5pZH0vYH1cbiAgICAgICAgICAgIGRhdGEtd293aGVhZD17YGl0ZW09JHt0aGlzLnByb3BzLmlkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3dvdy56YW1pbWcuY29tL2ltYWdlcy93b3cvaWNvbnMvbGFyZ2UvJHt0aGlzLnByb3BzLnBpY31gfVxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BlcmNlbnQnPlxuICAgICAgICAgICAge01hdGguZmxvb3IoKHRoaXMucHJvcHMuY3VycmVudCAvIHRoaXMucHJvcHMudG90YWwpICogMTAwKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGVyJz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvZ3Jlc3MnXG4gICAgICAgICAgICAgIHN0eWxlPXtpc0Z1bGwodGhpcy5wcm9wcy5jdXJyZW50LCB0aGlzLnByb3BzLnRvdGFsKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TnVtYmVyKHRoaXMucHJvcHMuY3VycmVudCl9IC97JyAnfVxuICAgICAgICAgICAgICB7dGhpcy5mb3JtYXROdW1iZXIodGhpcy5wcm9wcy50b3RhbCl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Item.js\n");

/***/ })

})