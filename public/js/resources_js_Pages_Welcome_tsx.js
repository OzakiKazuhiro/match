"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Welcome_tsx"],{

/***/ "./resources/js/Pages/Welcome.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Welcome.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Welcome(_ref) {
  var auth = _ref.auth,
    laravelVersion = _ref.laravelVersion,
    phpVersion = _ref.phpVersion;
  var handleImageError = function handleImageError() {
    var _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4;
    (_document$getElementB = document.getElementById("screenshot-container")) === null || _document$getElementB === void 0 || _document$getElementB.classList.add("!hidden");
    (_document$getElementB2 = document.getElementById("docs-card")) === null || _document$getElementB2 === void 0 || _document$getElementB2.classList.add("!row-span-1");
    (_document$getElementB3 = document.getElementById("docs-card-content")) === null || _document$getElementB3 === void 0 || _document$getElementB3.classList.add("!flex-row");
    (_document$getElementB4 = document.getElementById("background")) === null || _document$getElementB4 === void 0 || _document$getElementB4.classList.add("!hidden");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "Welcome"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        margin: "50px auto",
        maxWidth: "500px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        style: {
          color: "#ff6b6b",
          fontSize: "2rem",
          fontWeight: "bold"
        },
        children: "\u306F\u308D\u30FC\u30B0\u30C3\u30D0\u30A4"
      })
    })]
  });
}

/***/ })

}]);