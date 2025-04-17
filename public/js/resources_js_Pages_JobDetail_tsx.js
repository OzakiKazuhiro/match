"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_JobDetail_tsx"],{

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

/***/ "./resources/js/Pages/JobDetail.tsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/JobDetail.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





/**
 * アバター画像のURLを適切な形式に変換する
 * URLが"/"で始まっていない場合は先頭に"/"を追加する
 */
var getAvatarUrl = function getAvatarUrl(avatarPath) {
  if (!avatarPath) return "";
  return avatarPath.startsWith("/") ? avatarPath : "/".concat(avatarPath);
};
function JobDetail(_ref) {
  var auth = _ref.auth,
    jobListing = _ref.jobListing,
    canEdit = _ref.canEdit,
    canApply = _ref.canApply;
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      message: ""
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    post = _useForm.post,
    processing = _useForm.processing,
    errors = _useForm.errors,
    reset = _useForm.reset;

  // メッセージタブの状態管理（パブリック/ダイレクト）
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("public"),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var handleSubmitMessage = function handleSubmitMessage(e) {
    e.preventDefault();
    post(route("job-listings.messages.store", jobListing.id), {
      onSuccess: function onSuccess() {
        return reset();
      }
    });
  };

  // 予算表示のフォーマット
  var formatBudget = function formatBudget() {
    if (jobListing.type === "revenue_share" || !jobListing.budget_min && !jobListing.budget_max) {
      return null;
    }
    if (jobListing.budget_min && jobListing.budget_max) {
      return "\xA5".concat(jobListing.budget_min.toLocaleString(), " \u301C \xA5").concat(jobListing.budget_max.toLocaleString());
    } else if (jobListing.budget_min) {
      return "\xA5".concat(jobListing.budget_min.toLocaleString(), " \u301C");
    } else if (jobListing.budget_max) {
      return "\u301C \xA5".concat(jobListing.budget_max.toLocaleString());
    }
  };

  // 作成日のフォーマット
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  // メッセージの日時フォーマット
  var formatMessageDate = function formatMessageDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "p-job-detail__title",
      children: "\u6848\u4EF6\u8A73\u7D30"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "".concat(jobListing.title, " - Match")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "p-job-detail",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "p-job-detail__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "p-job-detail__breadcrumb",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: route("job-listings.index"),
            className: "p-job-detail__breadcrumb-link",
            children: "\u6848\u4EF6\u4E00\u89A7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "p-job-detail__breadcrumb-separator",
            children: ">"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "p-job-detail__breadcrumb-current",
            children: jobListing.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "p-job-detail__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "p-job-detail__main",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-job-detail__card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-job-detail__header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__meta",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "p-job-detail__type p-job-detail__type--".concat(jobListing.type === "one_time" ? "onetime" : "revenue"),
                    children: jobListing.type === "one_time" ? "単発案件" : "レベニューシェア"
                  }), jobListing.category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "p-job-detail__category",
                    children: jobListing.category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    className: "p-job-detail__date",
                    children: ["\u6295\u7A3F\u65E5:", " ", formatDate(jobListing.created_at)]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                  className: "p-job-detail__title",
                  children: jobListing.title
                }), formatBudget() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__budget",
                  children: ["\u4E88\u7B97: ", formatBudget()]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-job-detail__body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "p-job-detail__description",
                  children: jobListing.description.split("\n").map(function (paragraph, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      className: "p-job-detail__paragraph",
                      children: paragraph
                    }, index);
                  })
                }), jobListing.skills && jobListing.skills.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__skills",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "p-job-detail__section-title",
                    children: "\u5FC5\u8981\u306A\u30B9\u30AD\u30EB"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "p-job-detail__skill-tags",
                    children: jobListing.skills.map(function (skill, index) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "p-job-detail__skill-tag",
                        children: skill
                      }, index);
                    })
                  })]
                }), jobListing.preferred_skills && jobListing.preferred_skills.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__skills",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "p-job-detail__section-title",
                    children: "\u3042\u308C\u3070\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "p-job-detail__skill-tags",
                    children: jobListing.preferred_skills.map(function (skill, index) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "p-job-detail__skill-tag p-job-detail__skill-tag--preferred",
                        children: skill
                      }, index);
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "p-job-detail__info-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-label",
                      children: "\u4F5C\u696D\u5834\u6240:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-value",
                      children: jobListing.location
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "p-job-detail__info-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-label",
                      children: "\u30B9\u30C6\u30FC\u30BF\u30B9:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-value p-job-detail__status p-job-detail__status--".concat(jobListing.is_closed ? "closed" : "open"),
                      children: jobListing.is_closed ? "募集終了" : "募集中"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "p-job-detail__info-item",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-label",
                      children: "\u95B2\u89A7\u6570:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "p-job-detail__info-value",
                      children: jobListing.view_count
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "p-job-detail__footer",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__actions",
                  children: [canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                      href: route("job-listings.edit", jobListing.id),
                      className: "p-job-detail__message-button",
                      children: "\u7DE8\u96C6\u3059\u308B"
                    }), !jobListing.is_closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                      href: route("job-listings.close", jobListing.id),
                      method: "patch",
                      as: "button",
                      className: "p-job-detail__message-button",
                      children: "\u52DF\u96C6\u3092\u7D42\u4E86\u3059\u308B"
                    })]
                  }), canApply && !jobListing.is_closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: route("job-listings.apply.create", jobListing.id),
                    className: "p-job-detail__apply-button",
                    children: "\u5FDC\u52DF\u3059\u308B"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-job-detail__card p-job-detail__card--messages",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-job-detail__message-tabs",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "p-job-detail__message-tab ".concat(activeTab === "public" ? "p-job-detail__message-tab--active" : ""),
                  onClick: function onClick() {
                    return setActiveTab("public");
                  },
                  children: "\u516C\u958B\u30E1\u30C3\u30BB\u30FC\u30B8"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "p-job-detail__message-tab ".concat(activeTab === "direct" ? "p-job-detail__message-tab--active" : ""),
                  onClick: function onClick() {
                    return setActiveTab("direct");
                  },
                  children: "\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8"
                })]
              }), activeTab === "public" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "p-job-detail__messages-title",
                  children: "\u516C\u958B\u30E1\u30C3\u30BB\u30FC\u30B8"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "p-job-detail__messages",
                  children: jobListing.public_messages && jobListing.public_messages.length > 0 ? jobListing.public_messages.map(function (message) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "p-job-detail__message",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "p-job-detail__message-header",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                          className: "p-job-detail__message-user",
                          children: [message.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                            src: getAvatarUrl(message.user.avatar),
                            alt: message.user.name,
                            className: "p-job-detail__message-avatar",
                            onError: function onError(e) {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "";
                              if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.innerHTML = message.user.name.charAt(0).toUpperCase();
                              }
                            }
                          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                            className: "p-job-detail__message-avatar-placeholder",
                            children: message.user.name.charAt(0)
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                            className: "p-job-detail__message-name",
                            children: message.user.name
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "p-job-detail__message-date",
                          children: formatMessageDate(message.created_at)
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "p-job-detail__message-content",
                        children: message.message
                      })]
                    }, message.id);
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "p-job-detail__no-messages",
                    children: "\u307E\u3060\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6700\u521D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u6295\u7A3F\u3057\u307E\u3057\u3087\u3046\u3002"
                  })
                }), auth.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__message-form-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "p-job-detail__message-form-title",
                    children: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u6295\u7A3F"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
                    onSubmit: handleSubmitMessage,
                    className: "p-job-detail__message-form",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
                      id: "message",
                      className: "p-job-detail__message-input",
                      placeholder: "\u8CEA\u554F\u3084\u5FDC\u52DF\u306E\u610F\u601D\u306A\u3069\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u3057\u3066\u304F\u3060\u3055\u3044",
                      value: data.message,
                      onChange: function onChange(e) {
                        return setData("message", e.target.value);
                      },
                      rows: 4,
                      required: true
                    }), errors.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      message: errors.message,
                      className: "mt-2"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                      type: "submit",
                      className: "p-job-detail__message-submit",
                      disabled: processing,
                      children: processing ? "送信中..." : "メッセージを送信"
                    })]
                  })]
                }), !auth.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__login-prompt",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    children: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u6295\u7A3F\u3059\u308B\u306B\u306F\u3001\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: route("login"),
                    className: "p-job-detail__apply-button",
                    children: "\u30ED\u30B0\u30A4\u30F3"
                  })]
                })]
              }), activeTab === "direct" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "p-job-detail__messages-title",
                  children: "\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "p-job-detail__no-messages",
                  children: auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      children: "\u6848\u4EF6\u6295\u7A3F\u8005\u3068\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u307E\u3060\u5B9F\u88C5\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                      children: "\u516C\u958B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u901A\u3058\u3066\u9023\u7D61\u3092\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    children: "\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8868\u793A\u3059\u308B\u306B\u306F\u3001\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
                  })
                }), !auth.user && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "p-job-detail__login-prompt",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: route("login"),
                    className: "p-job-detail__apply-button",
                    children: "\u30ED\u30B0\u30A4\u30F3"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "p-job-detail__sidebar",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-job-detail__card p-job-detail__card--author",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "p-job-detail__section-title",
                children: "\u6295\u7A3F\u8005\u60C5\u5831"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-job-detail__author",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__author-header",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "p-job-detail__author-avatar",
                    children: jobListing.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                      src: getAvatarUrl(jobListing.user.avatar),
                      alt: jobListing.user.name,
                      className: "p-job-detail__author-image",
                      onError: function onError(e) {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = jobListing.user.name.charAt(0).toUpperCase();
                        }
                      }
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-avatar-placeholder",
                      children: jobListing.user.name.charAt(0)
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "p-job-detail__author-info",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-name",
                      children: jobListing.user.name
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "p-job-detail__author-stats",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "p-job-detail__author-stat",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-stat-label",
                      children: "\u6295\u7A3F\u3057\u305F\u6848\u4EF6"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-stat-value",
                      children: "5\u4EF6"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "p-job-detail__author-stat",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-stat-label",
                      children: "\u4F1A\u54E1\u767B\u9332\u65E5"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "p-job-detail__author-stat-value",
                      children: formatDate(jobListing.user.created_at || jobListing.created_at)
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "p-job-detail__card p-job-detail__card--share",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "p-job-detail__section-title",
                children: "\u3053\u306E\u6848\u4EF6\u3092\u30B7\u30A7\u30A2\u3059\u308B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "p-job-detail__share-buttons",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(jobListing.title), "&url=").concat(encodeURIComponent(window.location.href)),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "p-job-detail__share-button p-job-detail__share-button--twitter",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    })
                  }), "Twitter"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.href)),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "p-job-detail__share-button p-job-detail__share-button--facebook",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    })
                  }), "Facebook"]
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
}

/***/ })

}]);