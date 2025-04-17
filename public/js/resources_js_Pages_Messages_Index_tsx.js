"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Messages_Index_tsx"],{

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

/***/ "./resources/js/Pages/Messages/Index.tsx":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Messages/Index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// 簡単な時間フォーマット関数
function formatTimeAgo(dateString) {
  var date = new Date(dateString);
  var now = new Date();
  var diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diffInSeconds < 60) {
    return "".concat(diffInSeconds, "\u79D2\u524D");
  }
  var diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return "".concat(diffInMinutes, "\u5206\u524D");
  }
  var diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return "".concat(diffInHours, "\u6642\u9593\u524D");
  }
  var diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return "".concat(diffInDays, "\u65E5\u524D");
  }
  var diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return "".concat(diffInMonths, "\u30F6\u6708\u524D");
  }
  var diffInYears = Math.floor(diffInMonths / 12);
  return "".concat(diffInYears, "\u5E74\u524D");
}

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
function Index(_ref) {
  var auth = _ref.auth,
    conversationGroups = _ref.conversationGroups;
  var currentUserId = auth.user.id;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: "font-semibold text-xl text-gray-800 leading-tight",
      children: "\u30E1\u30C3\u30BB\u30FC\u30B8"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\u30E1\u30C3\u30BB\u30FC\u30B8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bg-white overflow-hidden shadow-sm sm:rounded-lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "p-6 text-gray-900",
            children: conversationGroups.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              children: "\u30E1\u30C3\u30BB\u30FC\u30B8\u306F\u3042\u308A\u307E\u305B\u3093\u3002"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
              className: "divide-y divide-gray-200",
              children: conversationGroups.map(function (group) {
                // 自分以外の参加者を特定
                var otherParticipant = group.job_owner_id === currentUserId ? group.applicant : group.job_owner;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  className: "py-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: "/messages/".concat(group.id),
                    className: "block hover:bg-gray-50",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "flex items-center space-x-4",
                      children: [otherParticipant.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                        src: getAvatarUrl(otherParticipant.avatar),
                        alt: otherParticipant.name,
                        className: "h-12 w-12 rounded-full"
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold",
                        children: getInitials(otherParticipant.name)
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          className: "text-sm font-medium text-gray-900 truncate",
                          children: otherParticipant.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          className: "text-sm text-gray-500 truncate",
                          children: group.latest_message ? "".concat(group.latest_message.sender.id === currentUserId ? "あなた: " : "").concat(group.latest_message.message) : "メッセージがありません"
                        })]
                      }), group.latest_message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "text-xs text-gray-500",
                        children: formatTimeAgo(group.latest_message.created_at)
                      })]
                    })
                  })
                }, group.id);
              })
            })
          })
        })
      })
    })]
  });
}

/***/ })

}]);