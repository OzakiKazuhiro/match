"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ApplicationsToMyJobs_tsx"],{

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

/***/ "./resources/js/Pages/ApplicationsToMyJobs.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/ApplicationsToMyJobs.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApplicationsToMyJobs)
/* harmony export */ });
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function ApplicationsToMyJobs(_ref) {
  var auth = _ref.auth,
    rawApplications = _ref.applications;
  // 各案件の展開状態を管理
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    expandedJobs = _useState2[0],
    setExpandedJobs = _useState2[1];

  // 案件カードの開閉切り替え
  var toggleJobExpand = function toggleJobExpand(jobId) {
    setExpandedJobs(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, jobId, !prev[jobId]));
    });
  };
  var applications = rawApplications.map(function (app) {
    return _objectSpread(_objectSpread({}, app), {}, {
      jobListing: app.jobListing || app.job_listing
    });
  });

  // 日付のフォーマット
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  // ステータスの表示
  var getStatusText = function getStatusText(status) {
    switch (status) {
      case "pending":
        return "応募中（確認待ち）";
      case "accepted":
        return "承認済み";
      case "declined":
        return "不採用";
      default:
        return "";
    }
  };

  // ステータスのクラス
  var getStatusClass = function getStatusClass(status) {
    switch (status) {
      case "pending":
        return "p-applications__status--pending";
      case "accepted":
        return "p-applications__status--accepted";
      case "declined":
        return "p-applications__status--declined";
      default:
        return "";
    }
  };

  // ステータス更新処理
  var handleStatusUpdate = function handleStatusUpdate(applicationId, status) {
    if (confirm("\u3053\u306E\u5FDC\u52DF\u3092".concat(status === "accepted" ? "承認" : "拒否", "\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"))) {
      _inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.router.patch(route("applications.update-status", [applicationId, status]));
    }
  };

  // 案件ごとにグループ化（jobListingが存在する応募のみ）
  var filteredApplications = applications.filter(function (app) {
    return app.jobListing != null;
  });
  var groupedApplications = {};
  filteredApplications.forEach(function (application) {
    if (!groupedApplications[application.job_listing_id]) {
      groupedApplications[application.job_listing_id] = [];
    }
    groupedApplications[application.job_listing_id].push(application);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "p-applications__title",
      children: "\u5FDC\u52DF\u4E00\u89A7"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "\u81EA\u5206\u306E\u6848\u4EF6\u3078\u306E\u5FDC\u52DF\u4E00\u89A7 - Match"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "p-applications",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "p-applications__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "p-applications__tabs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: route("applications.index"),
            className: "p-applications__tab",
            children: "\u5FDC\u52DF\u3057\u305F\u6848\u4EF6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: route("applications.to-my-jobs"),
            className: "p-applications__tab p-applications__tab--active",
            children: "\u81EA\u5206\u306E\u6848\u4EF6\u3078\u306E\u5FDC\u52DF"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "p-applications__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "p-applications__card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "p-applications__card-title",
              children: "\u81EA\u5206\u306E\u6848\u4EF6\u3078\u306E\u5FDC\u52DF\u4E00\u89A7"
            }), applications.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "p-applications__empty",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "p-applications__empty-message",
                children: "\u307E\u3060\u3042\u306A\u305F\u306E\u6848\u4EF6\u3078\u306E\u5FDC\u52DF\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("job-listings.create"),
                className: "p-applications__browse-button",
                children: "\u6848\u4EF6\u3092\u6295\u7A3F\u3059\u308B"
              })]
            }) : Object.keys(groupedApplications).length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "p-applications__empty",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "p-applications__empty-message",
                children: "\u5FDC\u52DF\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u4E2D\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                onClick: function onClick() {
                  return window.location.reload();
                },
                className: "p-applications__browse-button",
                children: "\u518D\u8AAD\u307F\u8FBC\u307F"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "p-applications__job-cards",
              children: Object.keys(groupedApplications).map(function (jobId) {
                var _jobApplications$;
                var jobApplications = groupedApplications[Number(jobId)];

                // jobListingが存在するかチェック
                if (!((_jobApplications$ = jobApplications[0]) !== null && _jobApplications$ !== void 0 && _jobApplications$.jobListing)) {
                  return null;
                }
                var jobListing = jobApplications[0].jobListing;
                var isExpanded = expandedJobs[jobId] || false;
                var applicationsCount = jobApplications.length;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "p-applications__job-card",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "p-applications__job-card-header",
                    onClick: function onClick() {
                      return toggleJobExpand(jobId);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "p-applications__job-card-title-container",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                        className: "p-applications__job-card-title",
                        children: jobListing.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "p-applications__job-applications-count",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "p-applications__count-badge",
                          children: applicationsCount
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "p-applications__count-text",
                          children: "\u4EF6\u306E\u5FDC\u52DF"
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "p-applications__job-card-status-container",
                      children: [jobListing.is_closed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "p-applications__job-closed",
                        children: "\u52DF\u96C6\u7D42\u4E86"
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "p-applications__job-open",
                        children: "\u52DF\u96C6\u4E2D"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "p-applications__expand-icon ".concat(isExpanded ? "expanded" : ""),
                        children: isExpanded ? "▼" : "▶"
                      })]
                    })]
                  }), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "p-applications__job-card-content",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "p-applications__list",
                      children: jobApplications.map(function (application) {
                        var _application$user;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "p-applications__item",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            className: "p-applications__item-header",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                              className: "p-applications__applicant-info",
                              children: application.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                                  className: "p-applications__applicant-avatar",
                                  children: application.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                                    src: "/storage/".concat(application.user.avatar),
                                    alt: application.user.name,
                                    className: "p-applications__avatar-image",
                                    onError: function onError(e) {
                                      // 画像読み込みエラー時に頭文字を表示
                                      var target = e.target;
                                      target.style.display = "none";
                                      target.parentElement.innerText = application.user.name.charAt(0).toUpperCase();
                                    }
                                  }) : application.user.name.charAt(0).toUpperCase()
                                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                                  className: "p-applications__applicant-details",
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                                    className: "p-applications__applicant-name",
                                    children: application.user.name
                                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                                    className: "p-applications__applicant-email",
                                    children: application.user.email
                                  })]
                                })]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                              className: "p-applications__status ".concat(getStatusClass(application.status)),
                              children: getStatusText(application.status)
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            className: "p-applications__item-body",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                              className: "p-applications__meta",
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                                className: "p-applications__applied-date",
                                children: ["\u5FDC\u52DF\u65E5:", " ", formatDate(application.created_at)]
                              })
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                              className: "p-applications__message",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                                className: "p-applications__message-title",
                                children: "\u5FDC\u52DF\u30E1\u30C3\u30BB\u30FC\u30B8:"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                                className: "p-applications__message-content",
                                children: application.message
                              })]
                            }), application.status === "pending" && !jobListing.is_closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                              className: "p-applications__actions",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                                onClick: function onClick() {
                                  return handleStatusUpdate(application.id, "accepted");
                                },
                                className: "p-applications__accept-button",
                                children: "\u627F\u8A8D\u3059\u308B"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                                onClick: function onClick() {
                                  return handleStatusUpdate(application.id, "declined");
                                },
                                className: "p-applications__decline-button",
                                children: "\u898B\u9001\u308B"
                              })]
                            }), application.status === "accepted" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                              className: "p-applications__accepted-message",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                                children: "\u3053\u306E\u5FDC\u52DF\u306F\u627F\u8A8D\u6E08\u307F\u3067\u3059\u3002\u5FDC\u52DF\u8005\u3068\u76F4\u63A5\u9023\u7D61\u3092\u53D6\u308A\u3001\u8A73\u7D30\u3092\u76F8\u8AC7\u3057\u307E\u3057\u3087\u3046\u3002"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                                className: "p-applications__contact-info",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("strong", {
                                    children: ["\u9023\u7D61\u5148:", " "]
                                  }), (_application$user = application.user) === null || _application$user === void 0 ? void 0 : _application$user.email]
                                })
                              })]
                            })]
                          })]
                        }, application.id);
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "p-applications__job-card-footer",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                        href: route("job-listings.show", jobListing.id),
                        className: "p-applications__view-job-button",
                        children: "\u6848\u4EF6\u8A73\u7D30\u3092\u898B\u308B"
                      })
                    })]
                  })]
                }, jobId);
              })
            })]
          })
        })]
      })
    })]
  });
}

/***/ })

}]);