"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Messages_Show_tsx"],{

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

/***/ "./resources/js/Layouts/AuthenticatedLayout.tsx":
/*!******************************************************!*\
  !*** ./resources/js/Layouts/AuthenticatedLayout.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Authenticated)
/* harmony export */ });
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function Authenticated(_ref) {
  var header = _ref.header,
    children = _ref.children;
  var user = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.usePage)().props.auth.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showingUserDropdown = _useState2[0],
    setShowingUserDropdown = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showingMobileMenu = _useState4[0],
    setShowingMobileMenu = _useState4[1];
  var userDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var mobileMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var mobileButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // ユーザードロップダウン外のクリックを検出
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowingUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // モバイルメニュー外のクリックを検出
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      // ボタン自体は例外（ボタンクリックはトグル動作のため）
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileButtonRef.current && !mobileButtonRef.current.contains(event.target)) {
        setShowingMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "min-h-screen bg-f5f7fa",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
      className: "l-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "l-header__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/",
          className: "l-header__logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "l-header__logo-accent",
            children: "match"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
          className: "l-header__nav",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/job-listings",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u4E00\u89A7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/post-job",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u3092\u6295\u7A3F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "l-header__user-menu",
            ref: userDropdownRef,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              onClick: function onClick() {
                return setShowingUserDropdown(!showingUserDropdown);
              },
              className: "l-header__user-button",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "l-header__user-avatar",
                children: user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: user.avatar.startsWith("/") ? user.avatar : "/".concat(user.avatar),
                  alt: "".concat(user.name, "\u306E\u30A2\u30D0\u30BF\u30FC"),
                  onError: function onError(e) {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = user.name.charAt(0).toUpperCase();
                    }
                  }
                }) : user.name.charAt(0).toUpperCase()
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "l-header__user-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "l-header__login-status",
                  children: "\u30ED\u30B0\u30A4\u30F3\u4E2D"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: "l-header__user-name",
                  children: [user.name, "\u3055\u3093"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                  d: "M6 9l6 6 6-6"
                })
              })]
            }), showingUserDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "l-header__dropdown",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("dashboard"),
                className: "l-header__dropdown-item",
                children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("profile.edit"),
                className: "l-header__dropdown-item",
                children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("logout"),
                method: "post",
                as: "button",
                className: "l-header__dropdown-item l-header__dropdown-item--danger",
                children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "l-header__mobile-button",
          onClick: function onClick() {
            return setShowingMobileMenu(!showingMobileMenu);
          },
          ref: mobileButtonRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            })]
          })
        })]
      }), showingMobileMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "l-header__mobile-menu",
        ref: mobileMenuRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "l-header__mobile-user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "l-header__user-avatar",
            children: user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: user.avatar.startsWith("/") ? user.avatar : "/".concat(user.avatar),
              alt: "".concat(user.name, "\u306E\u30A2\u30D0\u30BF\u30FC"),
              onError: function onError(e) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "";
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML = user.name.charAt(0).toUpperCase();
                }
              }
            }) : user.name.charAt(0).toUpperCase()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "l-header__mobile-user-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "l-header__mobile-user-name",
              children: [user.name, "\u3055\u3093"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "l-header__mobile-login-status",
              children: "\u30ED\u30B0\u30A4\u30F3\u4E2D"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/job-listings",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u4E00\u89A7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/post-job",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u3092\u6295\u7A3F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("dashboard"),
          className: "l-header__mobile-link",
          children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("profile.edit"),
          className: "l-header__mobile-link",
          children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "l-header__mobile-link l-header__mobile-link--danger",
          children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
        })]
      })]
    }), header && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "p-dashboard__header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "p-dashboard__header-inner",
        children: header
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
      className: "main-content",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("footer", {
      className: "l-footer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "l-footer__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "l-footer__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/",
              className: "l-footer__logo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "l-footer__logo-accent",
                children: "match"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "l-footer__description",
              children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002 \u5358\u767A\u6848\u4EF6\u304B\u3089\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u307E\u3067\u3001 \u30B7\u30F3\u30D7\u30EB\u306B\u63A2\u305B\u3066\u3001\u3059\u3050\u306B\u5FDC\u52DF\u3067\u304D\u307E\u3059\u3002"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "l-footer__social",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                href: "#",
                className: "l-footer__social-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  })
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u6848\u4EF6\u3092\u63A2\u3059"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/job-listings?type=onetime",
                  className: "l-footer__link",
                  children: "\u5358\u767A\u6848\u4EF6"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/job-listings?type=revenue",
                  className: "l-footer__link",
                  children: "\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u30A2\u30AB\u30A6\u30F3\u30C8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("dashboard"),
                  className: "l-footer__link",
                  children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("profile.edit"),
                  className: "l-footer__link",
                  children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "l-footer__copyright",
          children: ["\xA9 ", new Date().getFullYear(), " match. All rights reserved."]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Messages/Show.tsx":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Messages/Show.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Show)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.tsx");
/* harmony import */ var _Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/PrimaryButton */ "./resources/js/Components/PrimaryButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






// アバターURLを取得する関数
function getAvatarUrl(avatar) {
  if (!avatar) return "";
  // storage/avatarsで始まる場合は/を先頭に追加
  if (avatar.startsWith("storage/avatars/")) {
    return "/".concat(avatar);
  }
  // ファイル名のみの場合はパスを構築する
  return "/storage/avatars/".concat(avatar);
}

// ユーザー名からイニシャルを取得する関数
function getInitials(name) {
  return name.split(" ").map(function (word) {
    return word.charAt(0);
  }).join("").toUpperCase().substring(0, 2);
}
function Show(_ref) {
  var auth = _ref.auth,
    conversationGroup = _ref.conversationGroup,
    messages = _ref.messages,
    participants = _ref.participants;
  var messagesContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // 会話相手を特定（自分以外の参加者）
  var otherParticipant = participants.find(function (participant) {
    return participant.id !== auth.user.id;
  });
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      message: ""
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    post = _useForm.post,
    processing = _useForm.processing,
    errors = _useForm.errors,
    reset = _useForm.reset;

  // メッセージ送信処理
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    post(route("messages.store", conversationGroup.id), {
      onSuccess: function onSuccess() {
        reset("message");
      }
    });
  };

  // メッセージが追加されたらスクロール位置を最下部に移動
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "p-messages__header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
        className: "font-semibold text-xl text-gray-800 leading-tight",
        children: [(otherParticipant === null || otherParticipant === void 0 ? void 0 : otherParticipant.name) || "不明なユーザー", "\u3068\u306E\u4F1A\u8A71"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: route("messages.index"),
        className: "p-messages__back-button",
        children: "\u623B\u308B"
      })]
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "".concat((otherParticipant === null || otherParticipant === void 0 ? void 0 : otherParticipant.name) || "不明なユーザー", "\u3068\u306E\u4F1A\u8A71")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "p-messages__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "p-messages__card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "p-messages__card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            ref: messagesContainerRef,
            className: "p-messages__conversation",
            children: messages.map(function (message) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "p-messages__message ".concat(message.sender_id === auth.user.id ? "p-messages__message--sent" : "p-messages__message--received"),
                children: [message.sender_id !== auth.user.id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "p-messages__avatar",
                  children: message.sender.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    src: getAvatarUrl(message.sender.avatar),
                    alt: message.sender.name,
                    className: "w-8 h-8 rounded-full"
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold",
                    children: getInitials(message.sender.name)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "p-messages__bubble ".concat(message.sender_id === auth.user.id ? "p-messages__bubble--sent" : "p-messages__bubble--received"),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "p-messages__message-text",
                    children: message.message
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "p-messages__message-time",
                    children: new Date(message.created_at).toLocaleString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit"
                    })
                  })]
                })]
              }, message.id);
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "p-messages__card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "p-messages__card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "p-messages__form",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "c-form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                htmlFor: "message",
                className: "c-form-label",
                children: "\u30E1\u30C3\u30BB\u30FC\u30B8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                id: "message",
                value: data.message,
                onChange: function onChange(e) {
                  return setData("message", e.target.value);
                },
                rows: 3,
                className: "p-messages__textarea",
                required: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_3__["default"], {
                message: errors.message,
                className: "c-form-error"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "p-messages__submit-container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
                type: "submit",
                disabled: processing,
                children: "\u9001\u4FE1"
              })
            })]
          })
        })
      })]
    })]
  });
}

/***/ })

}]);