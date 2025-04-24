"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_VerifyEmail_tsx"],{

/***/ "./resources/js/Components/PrimaryButton.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/PrimaryButton.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "disabled", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function PrimaryButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    disabled = _ref.disabled,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", _objectSpread(_objectSpread({}, props), {}, {
    className: "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ".concat(disabled && 'opacity-25', " ") + className,
    disabled: disabled,
    children: children
  }));
}

/***/ }),

/***/ "./resources/js/Layouts/GuestLayout.tsx":
/*!**********************************************!*\
  !*** ./resources/js/Layouts/GuestLayout.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Guest)
/* harmony export */ });
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Guest(_ref) {
  var children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "ログイン" : _ref$title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "min-h-screen bg-f5f7fa",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", {
      className: "l-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "l-header__inner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/",
          className: "l-header__logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "l-header__logo-accent",
            children: "match"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("main", {
      className: "main-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "p-auth__container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "p-auth__box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
            className: "p-auth__title",
            children: title
          }), children]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
      className: "l-footer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "l-footer__container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "l-footer__copyright",
          children: ["\xA9 ", new Date().getFullYear(), " match. All rights reserved."]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.tsx":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerifyEmail)
/* harmony export */ });
/* harmony import */ var _Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/PrimaryButton */ "./resources/js/Components/PrimaryButton.tsx");
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/GuestLayout */ "./resources/js/Layouts/GuestLayout.tsx");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function VerifyEmail(_ref) {
  var status = _ref.status;
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({}),
    post = _useForm.post,
    processing = _useForm.processing;
  var submit = function submit(e) {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u30E1\u30FC\u30EB\u8A8D\u8A3C",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
      title: "\u30E1\u30FC\u30EB\u8A8D\u8A3C - Match"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mb-4 text-sm text-gray-600",
      children: "\u3054\u767B\u9332\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01 \u59CB\u3081\u308B\u524D\u306B\u3001\u5148\u307B\u3069\u304A\u9001\u308A\u3057\u305F\u30E1\u30FC\u30EB\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F \u30E1\u30FC\u30EB\u304C\u5C4A\u3044\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u559C\u3093\u3067\u5225\u306E\u30E1\u30FC\u30EB\u3092\u304A\u9001\u308A\u3057\u307E\u3059\u3002"
    }), status === "verification-link-sent" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "mb-4 text-sm font-medium text-green-600",
      children: "\u767B\u9332\u6642\u306B\u5165\u529B\u3055\u308C\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306B\u65B0\u3057\u3044\u78BA\u8A8D\u30EA\u30F3\u30AF\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("form", {
      onSubmit: submit,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-4 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
          disabled: processing,
          children: "\u78BA\u8A8D\u30E1\u30FC\u30EB\u3092\u518D\u9001\u4FE1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
        })]
      })
    })]
  });
}

/***/ })

}]);