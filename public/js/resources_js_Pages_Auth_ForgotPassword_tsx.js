"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_ForgotPassword_tsx"],{

/***/ "./resources/js/Components/InputError.tsx":
/*!************************************************!*\
  !*** ./resources/js/Components/InputError.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function InputError(_ref) {
  var message = _ref.message,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  if (!message) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "c-error ".concat(className),
    children: message
  });
}

/***/ }),

/***/ "./resources/js/Components/InputLabel.tsx":
/*!************************************************!*\
  !*** ./resources/js/Components/InputLabel.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["value", "className", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function InputLabel(_ref) {
  var value = _ref.value,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", _objectSpread(_objectSpread({}, props), {}, {
    className: "c-label ".concat(className),
    children: value || children
  }));
}

/***/ }),

/***/ "./resources/js/Components/TextInput.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Components/TextInput.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["type", "className", "isFocused"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextInput(_ref, ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$isFocused = _ref.isFocused,
    isFocused = _ref$isFocused === void 0 ? false : _ref$isFocused,
    props = _objectWithoutProperties(_ref, _excluded);
  var localRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        var _localRef$current;
        return (_localRef$current = localRef.current) === null || _localRef$current === void 0 ? void 0 : _localRef$current.focus();
      }
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFocused) {
      var _localRef$current2;
      (_localRef$current2 = localRef.current) === null || _localRef$current2 === void 0 || _localRef$current2.focus();
    }
  }, [isFocused]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    className: "c-input ".concat(className),
    ref: localRef
  }));
}));

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function Guest(_ref) {
  var children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "ログイン" : _ref$title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "min-h-screen bg-f5f7fa",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header", {
      className: "l-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "l-header__inner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "/",
          className: "l-header__logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "l-header__logo-accent",
            children: "match"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
      className: "main-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "p-auth__container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-auth__box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
            className: "p-auth__title",
            children: title
          }), children]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer", {
      className: "l-footer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "l-footer__container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "l-footer__copyright",
          children: ["\xA9 ", new Date().getFullYear(), " match. All rights reserved."]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPassword)
/* harmony export */ });
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.tsx");
/* harmony import */ var _Components_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/TextInput */ "./resources/js/Components/TextInput.tsx");
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/GuestLayout */ "./resources/js/Layouts/GuestLayout.tsx");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Components_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/InputLabel */ "./resources/js/Components/InputLabel.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function ForgotPassword(_ref) {
  var status = _ref.status;
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_3__.useForm)({
      email: ""
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    post = _useForm.post,
    processing = _useForm.processing,
    errors = _useForm.errors;
  var submit = function submit(e) {
    e.preventDefault();
    post(route("password.email"));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_3__.Head, {
      title: "\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "p-auth__message",
      children: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u3067\u3059\u304B\uFF1F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u3044\u305F\u3060\u3051\u308C\u3070\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u306E\u30EA\u30F3\u30AF\u3092\u30E1\u30FC\u30EB\u3067\u304A\u9001\u308A\u3057\u307E\u3059\u3002"
    }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "p-auth__status",
      children: status
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
      onSubmit: submit,
      className: "p-auth__form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-auth__form-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_InputLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
          htmlFor: "email",
          value: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "p-auth__input",
          isFocused: true,
          autoComplete: "email",
          onChange: function onChange(e) {
            return setData("email", e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.email,
          className: "p-auth__error"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-auth__actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          href: route("login"),
          className: "p-auth__link",
          children: "\u30ED\u30B0\u30A4\u30F3\u753B\u9762\u306B\u623B\u308B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "p-auth__button p-auth__button--primary",
          disabled: processing,
          children: "\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30EA\u30F3\u30AF\u3092\u9001\u4FE1"
        })]
      })]
    })]
  });
}

/***/ })

}]);