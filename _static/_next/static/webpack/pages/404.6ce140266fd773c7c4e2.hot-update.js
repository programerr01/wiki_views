/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Article; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/request */ \"./src/utils/request.js\");\n/* harmony import */ var _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/globalUrl */ \"./src/config/globalUrl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/yogesh/Desktop/wiki_views/src/pages/404.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Article(_ref) {\n  _s();\n\n  var params = _ref.params;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      Views = _useState[0],\n      setViews = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),\n      summary = _useState2[0],\n      setSummary = _useState2[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  console.log(router.asPath);\n\n  if (router.asPath.indexOf(\"/insights/\") != 0 && router.asPath.split(\"/\").length != 3) {\n    return \"\";\n  }\n\n  console.log(params);\n  if (!params) return \"\";\n  var today = new Date();\n  var dd = String(today.getDate() - 1).padStart(2, '0');\n  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n\n  var yyyy = today.getFullYear();\n  var d = yyyy + mm + dd;\n  _utils_request__WEBPACK_IMPORTED_MODULE_3__.default.request('GET', _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__.default.viewsUrl + \"\".concat(params.id, \"/daily/\").concat(d, \"/\").concat(d)).then(function (res) {\n    console.log(res);\n\n    if (res.items) {\n      setViews(res.items[0].views);\n      _utils_request__WEBPACK_IMPORTED_MODULE_3__.default.request('GET', _config_globalUrl__WEBPACK_IMPORTED_MODULE_4__.default.summaryUrl + \"\\\\\".concat(params.id)).then(function (res) {\n        console.log(res);\n        setSummary(res.extract_html);\n        console.log(summary);\n      });\n    } else {\n      setViews(\"Not Found\");\n    }\n  });\n\n  if (Views == \"Not Found\") {\n    return \"Not Found\";\n  } else if (Views == \"\") {\n    return '';\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n          textAlign: 'center',\n          margin: 'auto 10px'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: params ? params.id : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: summary\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"stats\",\n        style: {\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '400px'\n        },\n        children: [\"This Article got\\xA0 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: [\" \", Views]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 40\n        }, this), \" \\xA0 Views\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Article, \"UnTW9gqngrO3Rg9vWXW5itp1DNU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Article;\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzLzQwNC5qcz9jMzY5Il0sIm5hbWVzIjpbIkFydGljbGUiLCJwYXJhbXMiLCJ1c2VTdGF0ZSIsIlZpZXdzIiwic2V0Vmlld3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJhc1BhdGgiLCJpbmRleE9mIiwic3BsaXQiLCJsZW5ndGgiLCJ0b2RheSIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJkIiwiUmVxdWVzdCIsImdsb2JhbFVybCIsImlkIiwidGhlbiIsInJlcyIsIml0ZW1zIiwidmlld3MiLCJleHRyYWN0X2h0bWwiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJfX2h0bWwiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUFBLGtCQUNkQywrQ0FBUSxDQUFDLEVBQUQsQ0FETTtBQUFBLE1BQ2hDQyxLQURnQztBQUFBLE1BQzFCQyxRQUQwQjs7QUFBQSxtQkFFUkYsK0NBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUVoQ0csT0FGZ0M7QUFBQSxNQUV2QkMsVUFGdUI7O0FBR3ZDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQU0sQ0FBQ0ksTUFBbkI7O0FBQ0EsTUFBR0osTUFBTSxDQUFDSSxNQUFQLENBQWNDLE9BQWQsQ0FBc0IsWUFBdEIsS0FBdUMsQ0FBdkMsSUFBNENMLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjRSxLQUFkLENBQW9CLEdB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dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XG5pbXBvcnQgZ2xvYmFsVXJsIGZyb20gXCIuLi9jb25maWcvZ2xvYmFsVXJsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgcGFyYW1zIH0pe1xuICAgIGNvbnN0IFtWaWV3cyxzZXRWaWV3c10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeSBdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocm91dGVyLmFzUGF0aClcbiAgICBpZihyb3V0ZXIuYXNQYXRoLmluZGV4T2YoXCIvaW5zaWdodHMvXCIpICE9IDAgJiYgcm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIikubGVuZ3RoICE9IDMpe1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpXG4gICAgaWYoIXBhcmFtcylyZXR1cm5cIlwiXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpLTEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgdmFyIG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIGQ9IHl5eXkrbW0rZGRcbiAgICBSZXF1ZXN0LnJlcXVlc3QoJ0dFVCcsZ2xvYmFsVXJsLnZpZXdzVXJsK2Ake3BhcmFtcy5pZH0vZGFpbHkvJHtkfS8ke2R9YClcbiAgICAudGhlbigocmVzKT0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIGlmKHJlcy5pdGVtcyl7XG4gICAgICAgIHNldFZpZXdzKHJlcy5pdGVtc1swXS52aWV3cylcbiAgICAgICAgUmVxdWVzdC5yZXF1ZXN0KCdHRVQnLGdsb2JhbFVybC5zdW1tYXJ5VXJsK2BcXFxcJHtwYXJhbXMuaWR9YClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgc2V0U3VtbWFyeShyZXMuZXh0cmFjdF9odG1sKVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VtbWFyeSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldFZpZXdzKFwiTm90IEZvdW5kXCIpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZihWaWV3cyA9PSBcIk5vdCBGb3VuZFwiKXtcbiAgICAgICAgcmV0dXJuIFwiTm90IEZvdW5kXCJcbiAgICB9XG4gICAgZWxzZSBpZihWaWV3cyA9PSBcIlwiKXtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxtYXJnaW46J2F1dG8gMTBweCd9fT5cbiAgICAgICAgICAgICAgICA8aDI+e3BhcmFtcyA/IHBhcmFtcy5pZCA6Jyd9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDpzdW1tYXJ5fX0gPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnNDAwcHgnfX0+XG4gICAgICAgICAgICAgICAgVGhpcyBBcnRpY2xlIGdvdCZuYnNwOyA8Yj4ge1ZpZXdzfTwvYj4gJm5ic3A7IFZpZXdzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/404.js\n");

/***/ })

});