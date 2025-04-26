"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Top_tsx"],{

/***/ "./resources/js/Pages/Top.tsx":
/*!************************************!*\
  !*** ./resources/js/Pages/Top.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Top)
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



function Top(_ref) {
  var auth = _ref.auth,
    laravelVersion = _ref.laravelVersion,
    phpVersion = _ref.phpVersion;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mobileMenuOpen = _useState2[0],
    setMobileMenuOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuVisible = _useState4[0],
    setMenuVisible = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    animating = _useState6[0],
    setAnimating = _useState6[1];
  var mobileMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var mobileButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // メニューの表示状態が変更されたときの処理
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (mobileMenuOpen) {
      setMenuVisible(true);
      setAnimating(true);
      setTimeout(function () {
        return setAnimating(false);
      }, 300);
    } else if (menuVisible) {
      setAnimating(true);
      setTimeout(function () {
        setMenuVisible(false);
        setAnimating(false);
      }, 300);
    }
  }, [mobileMenuOpen]);

  // メニュー外のクリックを検出してメニューを閉じる
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      // ボタン自体のクリックは無視（トグル動作は別のハンドラで処理）
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileButtonRef.current && !mobileButtonRef.current.contains(event.target) && menuVisible && !animating) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible, animating]);
  var toggleMobileMenu = function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "match - \u30A8\u30F3\u30B8\u30CB\u30A2\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
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
        }), (auth === null || auth === void 0 ? void 0 : auth.user) && (auth === null || auth === void 0 ? void 0 : auth.user.email_verified_at) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "l-header__login-status",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "l-header__user-avatar",
            children: auth.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: auth.user.avatar,
              alt: "".concat(auth.user.name, "\u306E\u30A2\u30D0\u30BF\u30FC")
            }) : auth.user.name.charAt(0).toUpperCase()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: auth.user.name
          })]
        }), (auth === null || auth === void 0 ? void 0 : auth.user) && !(auth !== null && auth !== void 0 && auth.user.email_verified_at) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "l-header__login-status",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "l-header__verification-alert",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/verify-email",
              className: "l-header__verification-link",
              children: "\u30E1\u30FC\u30EB\u8A8D\u8A3C\u304C\u672A\u5B8C\u4E86\u3067\u3059"
            })
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
          }), auth !== null && auth !== void 0 && auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/dashboard",
              className: "l-header__nav-link",
              children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/logout",
              method: "post",
              as: "button",
              className: "l-header__nav-link",
              children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/login",
              className: "l-header__nav-link",
              children: "\u30ED\u30B0\u30A4\u30F3"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/register",
              className: "l-header__nav-link l-header__nav-link--button",
              children: "\u4F1A\u54E1\u767B\u9332"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "l-header__mobile-button",
          onClick: toggleMobileMenu,
          "aria-label": "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F",
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
      }), menuVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "l-header__mobile-menu ".concat(mobileMenuOpen ? "menu-fade-in" : "menu-fade-out"),
        ref: mobileMenuRef,
        children: [(auth === null || auth === void 0 ? void 0 : auth.user) && (auth === null || auth === void 0 ? void 0 : auth.user.email_verified_at) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "l-header__mobile-user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "l-header__user-avatar",
            children: auth.user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: auth.user.avatar,
              alt: "".concat(auth.user.name, "\u306E\u30A2\u30D0\u30BF\u30FC")
            }) : auth.user.name.charAt(0).toUpperCase()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "l-header__mobile-user-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "l-header__mobile-user-name",
              children: auth.user.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "l-header__mobile-login-status",
              children: "\u30ED\u30B0\u30A4\u30F3\u4E2D"
            })]
          })]
        }), (auth === null || auth === void 0 ? void 0 : auth.user) && !(auth !== null && auth !== void 0 && auth.user.email_verified_at) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "l-header__mobile-verification-alert",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/verify-email",
            className: "l-header__mobile-verification-link",
            children: "\u30E1\u30FC\u30EB\u8A8D\u8A3C\u304C\u672A\u5B8C\u4E86\u3067\u3059"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/job-listings",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u4E00\u89A7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/post-job",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u3092\u6295\u7A3F"
        }), auth !== null && auth !== void 0 && auth.user && auth !== null && auth !== void 0 && auth.user.email_verified_at ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/dashboard",
            className: "l-header__mobile-link",
            children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/logout",
            method: "post",
            as: "button",
            className: "l-header__mobile-link l-header__mobile-link--danger",
            children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/login",
            className: "l-header__mobile-link",
            children: "\u30ED\u30B0\u30A4\u30F3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/register",
            className: "l-header__mobile-link",
            children: "\u4F1A\u54E1\u767B\u9332"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
      className: "main-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-top__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__hero",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
            className: "p-top__title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "u-break-sp",
              children: "\u30B7\u30F3\u30D7\u30EB\u306A\u30A8\u30F3\u30B8\u30CB\u30A2\u6848\u4EF6"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "u-no-break-sp",
              children: "\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-top__service-name",
            children: "match"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "p-top__subtitle",
            children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u30A2\u30A4\u30C7\u30A2\u30FB\u8AB0\u3067\u3082\u7C21\u5358\u306B\u3064\u306A\u304C\u308B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__buttons",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/register",
              className: "p-top__button p-top__button--primary",
              children: "\u7121\u6599\u3067\u4F1A\u54E1\u767B\u9332"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/job-listings",
              className: "p-top__button",
              children: "\u6848\u4EF6\u3092\u63A2\u3059"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__problems",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "p-top__section-title",
            children: "\u3053\u3093\u306A\u60A9\u307F\u306F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__problem-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__problem-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__problem-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/problems/idea-programming.webp",
                  alt: "\u30A2\u30A4\u30C7\u30A2\u3068\u6280\u8853\u306E\u60A9\u307F",
                  width: "300",
                  height: "300"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__problem-text",
                children: "\u300C\u30A2\u30A4\u30C7\u30A2\u306F\u3042\u308B\u3051\u3069\u3001\u6280\u8853\u304C\u306A\u304F\u3066\u5F62\u306B\u3067\u304D\u306A\u3044...\u300D"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__problem-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__problem-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/problems/hard-to-use-website.webp",
                  alt: "\u4F7F\u3044\u3065\u3089\u3044\u30B5\u30A4\u30C8",
                  width: "300",
                  height: "300"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__problem-text",
                children: "\u300C\u6848\u4EF6\u30B5\u30A4\u30C8\u306F\u8907\u96D1\u3067\u4F7F\u3044\u3065\u3089\u3044...\u300D"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__problem-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__problem-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/problems/not-found-work.webp",
                  alt: "\u6848\u4EF6\u304C\u898B\u3064\u304B\u3089\u306A\u3044",
                  width: "300",
                  height: "300"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__problem-text",
                children: "\u300C\u5E0C\u671B\u306E\u6848\u4EF6\u304C\u306A\u304B\u306A\u304B\u898B\u3064\u304B\u3089\u306A\u3044...\u300D"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
          className: "p-top__solution",
          id: "about",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__solution-inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
              className: "p-top__section-title p-top__section-title--full-underline",
              children: ["\u305D\u308C\u3092\u89E3\u6C7A\u3067\u304D\u308B\u306E\u304C", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "p-top__service-accent",
                children: "match"
              }), "\u3067\u3059"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
              className: "p-top__solution-description",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "service-accent",
                children: "match"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "service-text",
                children: "\u306F"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "p-top__concept-highlight p-top__concept-standalone",
              children: "\u300C\u30B7\u30F3\u30D7\u30EB\u3067\u4F7F\u3044\u3084\u3059\u3044\u300D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "p-top__solution-description",
              children: "\u3092\u30B3\u30F3\u30BB\u30D7\u30C8\u306B\u3057\u305F\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3067\u3059"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "p-top__solution-mobile-image",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: "/images/solution/match-solution.png",
                alt: "match\u306E\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3",
                width: "300",
                height: "200"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
              className: "p-top__section-title p-top__section-title--catchphrase",
              children: ["\u5358\u767A\u6848\u4EF6\u3084\u30B5\u30FC\u30D3\u30B9\u7ACB\u3061\u4E0A\u3052\u6848\u306E\u6295\u7A3F\u30FB\u5FDC\u52DF\u304C\u7C21\u5358\u306B\u3067\u304D\u308B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "\u624B\u8EFD\u306B\u6848\u4EF6\u306E\u6295\u7A3F\u30FB\u5FDC\u52DF\u304C\u3067\u304D\u3001\u30B7\u30F3\u30D7\u30EB\u306A\u64CD\u4F5C\u3067\u6848\u4EF6\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059"]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__features",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
            className: "p-top__section-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "p-top__service-accent",
              children: "match"
            }), "\u3067\u7C21\u5358\u306B\u3067\u304D\u308B\u3053\u3068"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__feature-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__feature",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__feature-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/features/easy-case-submission.webp",
                  alt: "\u7C21\u5358\u306B\u6848\u4EF6\u6295\u7A3F",
                  width: "60",
                  height: "60"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-top__feature-title",
                children: "\u7C21\u5358\u306B\u6848\u4EF6\u6295\u7A3F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__feature-text",
                children: "\u8907\u96D1\u306A\u5165\u529B\u9805\u76EE\u306F\u306A\u304F\u3001\u30B7\u30F3\u30D7\u30EB\u306A\u753B\u9762\u3067\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u3092\u6295\u7A3F\u3067\u304D\u307E\u3059\u3002 \u5358\u767A\u6848\u4EF6\u3068\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u306E\u4E21\u65B9\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__feature",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__feature-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/features/direct-communication.webp",
                  alt: "\u76F4\u63A5\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3",
                  width: "60",
                  height: "60"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-top__feature-title",
                children: "\u76F4\u63A5\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__feature-text",
                children: "\u6848\u4EF6\u6295\u7A3F\u8005\u3068\u5FDC\u52DF\u8005\u304C\u76F4\u63A5\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u3084\u308A\u53D6\u308A\u304C\u3067\u304D\u307E\u3059\u3002 \u30D1\u30D6\u30EA\u30C3\u30AF\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u4E00\u5BFE\u4E00\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u4E21\u65B9\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__feature",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__feature-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/features/easy-sharing.webp",
                  alt: "\u6C17\u8EFD\u306B\u30B7\u30A7\u30A2",
                  width: "60",
                  height: "60"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-top__feature-title",
                children: "\u6C17\u8EFD\u306B\u30B7\u30A7\u30A2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__feature-text",
                children: "\u6848\u4EF6\u3092\uFF38\uFF08\u65E7Twitter\uFF09\u3067\u7C21\u5358\u306B\u5171\u6709\u3067\u304D\u307E\u3059\u3002 \u6C17\u306B\u306A\u308B\u6848\u4EF6\u3092\u591A\u304F\u306E\u4EBA\u306B\u5171\u6709\u3057\u3066\u3001\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u53EF\u80FD\u6027\u3092\u5E83\u3052\u307E\u3057\u3087\u3046\u3002"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__solutions",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
            className: "p-top__section-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "p-top__service-accent",
              children: "match"
            }), "\u304C\u9078\u3070\u308C\u308B\u7406\u7531"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__solution-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__solution-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__solution-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/features/apply-for-projects.webp",
                  alt: "\u30A8\u30F3\u30B8\u30CB\u30A2\u3067\u306A\u304F\u3066\u3082\u6848\u4EF6\u306B\u5FDC\u52DF\u53EF\u80FD",
                  width: "280",
                  height: "200"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-top__solution-title",
                children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u3067\u306A\u304F\u3066\u3082\u6848\u4EF6\u306E\u6295\u7A3F\u53EF\u80FD\uFF01"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__solution-text",
                children: "\u30A2\u30A4\u30C7\u30A2\u3092Web\u3067\u5F62\u306B\u3057\u305F\u3044\u4EBA\u3067\u3042\u308C\u3070\u3001\u4E3B\u5A66\u3067\u3082\u8AB0\u3067\u3082\u6C17\u8EFD\u306B\u3001\u4F1A\u54E1\u767B\u9332\u3057\u3066\u6295\u7A3F\u53EF\u80FD\uFF01"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: "/post-job",
                className: "p-top__solution-button",
                children: "\u6848\u4EF6\u3092\u6295\u7A3F\u3059\u308B"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__solution-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__solution-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/features/find-projects-quickly.webp",
                  alt: "\u30A8\u30F3\u30B8\u30CB\u30A2\u306F\u5E0C\u671B\u306E\u6848\u4EF6\u304C\u3059\u3050\u306B\u898B\u3064\u304B\u308B",
                  width: "280",
                  height: "200"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-top__solution-title",
                children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u306F\u5E0C\u671B\u306E\u6848\u4EF6\u304C\u3059\u3050\u306B\u898B\u3064\u304B\u308B\uFF01"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-top__solution-text",
                children: "\u30B7\u30F3\u30D7\u30EB\u306A\u4F5C\u308A\u306E\u304A\u304B\u3052\u3067\u3001\u6848\u4EF6\u3092\u3059\u3050\u306B\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u53EF\u80FD\uFF01\u6848\u4EF6\u306B\u95A2\u3059\u308B\u8CEA\u554F\u3082\u30A2\u30D7\u30EA\u5185\u3067\u6C17\u8EFD\u306B\u89E3\u6C7A\uFF01"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: "/job-listings",
                className: "p-top__solution-button",
                children: "\u6848\u4EF6\u3092\u63A2\u3059"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__flow",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "p-top__section-title",
            children: "\u7D0D\u54C1\u307E\u3067\u306E\u6D41\u308C"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__flow-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__flow-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-step",
                children: "step1."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-title",
                children: "\u4ED5\u4E8B\u3092\u767A\u6CE8\u3059\u308B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/flow/post-job.webp",
                  alt: "\u4ED5\u4E8B\u3092\u767A\u6CE8\u3059\u308B",
                  width: "320",
                  height: "220"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "p-top__flow-arrow",
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
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
                  points: "12 5 19 12 12 19"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__flow-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-step",
                children: "step2."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-title",
                children: "\u767A\u6CE8\u76F8\u624B\u3092\u9078\u3076"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/flow/select-partner.webp",
                  alt: "\u767A\u6CE8\u76F8\u624B\u3092\u9078\u3076",
                  width: "320",
                  height: "220"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "p-top__flow-arrow",
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
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
                  points: "12 5 19 12 12 19"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__flow-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-step",
                children: "step3."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-title",
                children: "\u7D0D\u54C1\u3092\u5F85\u3064"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-top__flow-image",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: "/images/flow/wait-delivery.webp",
                  alt: "\u7D0D\u54C1\u3092\u5F85\u3064",
                  width: "320",
                  height: "220"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-top__flow-register",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/register",
              className: "p-top__flow-register-button",
              children: "\u7121\u6599\u3067\u767B\u9332\u3057\u3066\u306F\u3058\u3081\u308B"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__popular-jobs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "p-top__section-title",
            children: "\u4EBA\u6C17\u306E\u6848\u4EF6\u4F8B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__job-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__job-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-type p-top__job-type--onetime",
                  children: "\u5358\u767A\u6848\u4EF6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-budget",
                  children: "\xA550,000 \u301C \xA5100,000"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "p-top__job-title",
                  children: "React\u3092\u4F7F\u7528\u3057\u305F\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u958B\u767A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "p-top__job-desc",
                  children: "\u65E2\u5B58\u306E\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092React\u3092\u4F7F\u7528\u3057\u3066\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3059\u308B\u304A\u4ED5\u4E8B\u3067\u3059\u3002\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u5BFE\u5FDC\u5FC5\u9808\u3001TypeScript\u306E\u7D4C\u9A13\u304C\u3042\u308B\u65B9\u6B53\u8FCE\u3057\u307E\u3059\u3002"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__job-footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__job-date",
                    children: "3\u65E5\u524D"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__job-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-type p-top__job-type--revenue",
                  children: "\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-budget",
                  children: "\u53CE\u76CA\u5206\u914D"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "p-top__job-title",
                  children: "\u65B0\u3057\u3044\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30D1\u30FC\u30C8\u30CA\u30FC\u52DF\u96C6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "p-top__job-desc",
                  children: "\u98F2\u98DF\u5E97\u3068\u8FB2\u5BB6\u3092\u7E4B\u3050\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u30D1\u30FC\u30C8\u30CA\u30FC\u3092\u52DF\u96C6\u3057\u3066\u3044\u307E\u3059\u3002\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u958B\u767A\u306E\u7D4C\u9A13\u8005\u6B53\u8FCE\u3002\u53CE\u76CA\u306F\u5747\u7B49\u5206\u914D\u3057\u307E\u3059\u3002"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__job-footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__job-date",
                    children: "1\u9031\u9593\u524D"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__job-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-type p-top__job-type--onetime",
                  children: "\u5358\u767A\u6848\u4EF6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-top__job-budget",
                  children: "\xA5200,000 \u301C \xA5300,000"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__job-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "p-top__job-title",
                  children: "Laravel\u3092\u4F7F\u7528\u3057\u305F\u30A2\u30D1\u30EC\u30EB\u30D6\u30E9\u30F3\u30C9\u306EEC\u30B5\u30A4\u30C8\u306E\u69CB\u7BC9"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "p-top__job-desc",
                  children: "\u30A2\u30D1\u30EC\u30EB\u30D6\u30E9\u30F3\u30C9\u306EEC\u30B5\u30A4\u30C8\u3092Laravel\u3067\u69CB\u7BC9\u3057\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u6C7A\u6E08\u30B7\u30B9\u30C6\u30E0\u306E\u9023\u643A\u3084\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u306E\u5B9F\u88C5\u304C\u4E3B\u306A\u696D\u52D9\u5185\u5BB9\u3067\u3059\u3002"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__job-footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__job-date",
                    children: "2\u65E5\u524D"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "u-text-center u-mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/job-listings",
              className: "c-button c-button--outline",
              children: "\u3059\u3079\u3066\u306E\u6848\u4EF6\u3092\u898B\u308B"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
          className: "p-top__testimonials",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "p-top__section-title",
              children: "\u30E6\u30FC\u30B6\u30FC\u306E\u58F0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__testimonial-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__testimonial",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__testimonial-quote",
                  children: "\""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  className: "p-top__testimonial-content",
                  children: ["\u4F5C\u308A\u305F\u304B\u3063\u305FWeb\u30A2\u30D7\u30EA\u306E\u958B\u767A\u30D1\u30FC\u30C8\u30CA\u30FC\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3057\u305F\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "highlight",
                    children: "\u4E00\u5BFE\u4E00\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u6A5F\u80FD\u304C\u7279\u306B\u4FBF\u5229"
                  }), "\u3067\u3001\u30B9\u30E0\u30FC\u30BA\u306A\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u53D6\u308C\u3066\u3044\u307E\u3059\u3002"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__testimonial-author",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "p-top__testimonial-avatar",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "50",
                      height: "50",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "p-top__testimonial-info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-name",
                      children: "\u4F50\u85E4 \u7F8E\u54B2"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-role",
                      children: "\u30B5\u30FC\u30D3\u30B9\u4F01\u753B\u8005"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__testimonial",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__testimonial-quote",
                  children: "\""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  className: "p-top__testimonial-content",
                  children: ["match\u306F\u4F7F\u3044\u3084\u3059\u3055\u304C\u9B45\u529B\u3067\u3059\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "highlight",
                    children: "\u8907\u96D1\u306A\u5165\u529B\u9805\u76EE\u304C\u306A\u304F\u3001\u76F4\u611F\u7684\u306B\u64CD\u4F5C\u3067\u304D\u308B"
                  }), "\u306E\u3067\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066\u521D\u3081\u3066\u6848\u4EF6\u3092\u53D7\u6CE8\u3059\u308B\u969B\u3082\u5B89\u5FC3\u3057\u3066\u5229\u7528\u3067\u304D\u307E\u3057\u305F\u3002"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__testimonial-author",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "p-top__testimonial-avatar",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "50",
                      height: "50",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "p-top__testimonial-info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-name",
                      children: "\u7530\u4E2D \u5065\u592A"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-role",
                      children: "\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__testimonial",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-top__testimonial-quote",
                  children: "\""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                  className: "p-top__testimonial-content",
                  children: ["\u30B7\u30F3\u30D7\u30EB\u306A\u64CD\u4F5C\u6027\u304C\u6C17\u306B\u5165\u3063\u3066\u3044\u307E\u3059\u3002", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "highlight",
                    children: "\u4ED6\u306E\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3068\u9055\u3063\u3066\u3001\u5FC5\u8981\u306A\u60C5\u5831\u3060\u3051\u304C\u8868\u793A"
                  }), "\u3055\u308C\u308B\u306E\u3067\u3001\u52B9\u7387\u826F\u304F\u6848\u4EF6\u3092\u63A2\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__testimonial-author",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "p-top__testimonial-avatar",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "50",
                      height: "50",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "p-top__testimonial-info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-name",
                      children: "\u9234\u6728 \u5927\u8F14"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: "p-top__testimonial-role",
                      children: "\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u30A8\u30F3\u30B8\u30CB\u30A2"
                    })]
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
          className: "p-top__faq",
          id: "faq",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
              className: "p-top__section-title",
              children: "\u3088\u304F\u3042\u308B\u8CEA\u554F"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-top__faq-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__faq-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
                  className: "p-top__faq-question",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-q",
                    children: "Q."
                  }), "\u3069\u3093\u306A\u6848\u4EF6\u304C\u6295\u7A3F\u3067\u304D\u307E\u3059\u304B\uFF1F"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__faq-answer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-a",
                    children: "A."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                    children: ["\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u3068\u3057\u3066\u3001", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u5358\u767A\u6848\u4EF6"
                    }), "\u3068", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6"
                    }), "\u306E2\u7A2E\u985E\u304C\u6295\u7A3F\u3067\u304D\u307E\u3059\u3002 Web\u30B5\u30A4\u30C8\u3084\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306A\u3069\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u306B\u95A2\u3059\u308B\u6848\u4EF6\u3067\u3042\u308C\u3070\u3001", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u8077\u696D\u30A8\u30F3\u30B8\u30CB\u30A2\u3067\u306A\u304F\u3066\u3082\u8AB0\u3067\u3082"
                    }), "\u6848\u4EF6\u3092\u6295\u7A3F\u3067\u304D\u307E\u3059\u3002"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__faq-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
                  className: "p-top__faq-question",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-q",
                    children: "Q."
                  }), "\u5229\u7528\u306B\u306F\u6599\u91D1\u304C\u304B\u304B\u308A\u307E\u3059\u304B\uFF1F"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__faq-answer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-a",
                    children: "A."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                    children: ["match\u306E\u4F1A\u54E1\u767B\u9332\u30FB\u5229\u7528\u306F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u5B8C\u5168\u7121\u6599"
                    }), "\u3067\u3059\u3002\u6848\u4EF6\u306E\u6295\u7A3F\u3001\u5FDC\u52DF\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u3084\u308A\u53D6\u308A\u306A\u3069\u3001\u3059\u3079\u3066\u306E\u6A5F\u80FD\u3092\u7121\u6599\u3067\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059\u3002"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__faq-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
                  className: "p-top__faq-question",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-q",
                    children: "Q."
                  }), "\u6848\u4EF6\u3078\u306E\u5FDC\u52DF\u65B9\u6CD5\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__faq-answer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-a",
                    children: "A."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    children: "\u6848\u4EF6\u4E00\u89A7\u304B\u3089\u8208\u5473\u306E\u3042\u308B\u6848\u4EF6\u3092\u9078\u3073\u3001\u8A73\u7D30\u30DA\u30FC\u30B8\u3067\u300C\u5FDC\u52DF\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3060\u3051\u3067\u3059\u3002\u5FDC\u52DF\u3059\u308B\u3068\u6848\u4EF6\u6295\u7A3F\u8005\u306B\u901A\u77E5\u304C\u5C4A\u304D\u3001\u305D\u306E\u5F8C\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3084\u308A\u53D6\u308A\u3092\u9032\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__faq-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
                  className: "p-top__faq-question",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-q",
                    children: "Q."
                  }), "\u30D1\u30D6\u30EA\u30C3\u30AF\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u9055\u3044\u306F\u4F55\u3067\u3059\u304B\uFF1F"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__faq-answer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-a",
                    children: "A."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u30D1\u30D6\u30EA\u30C3\u30AF\u30E1\u30C3\u30BB\u30FC\u30B8"
                    }), "\u306F\u6848\u4EF6\u8A73\u7D30\u30DA\u30FC\u30B8\u3067\u8AB0\u3067\u3082\u95B2\u89A7\u3067\u304D\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3001\u6848\u4EF6\u306B\u3064\u3044\u3066\u306E\u8CEA\u554F\u3084\u60C5\u5831\u4EA4\u63DB\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002\u4E00\u65B9\u3001", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
                      children: "\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8"
                    }), "\u306F\u6848\u4EF6\u6295\u7A3F\u8005\u3068\u5FDC\u52DF\u8005\u306E\u9593\u30671\u5BFE1\u3067\u3084\u308A\u53D6\u308A\u3059\u308B\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3059\u3002\u5177\u4F53\u7684\u306A\u6761\u4EF6\u4EA4\u6E09\u3084\u8A73\u7D30\u306A\u6253\u3061\u5408\u308F\u305B\u306B\u3054\u6D3B\u7528\u304F\u3060\u3055\u3044\u3002"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-top__faq-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
                  className: "p-top__faq-question",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-q",
                    children: "Q."
                  }), "\u6848\u4EF6\u306E\u5831\u916C\u306F\u3069\u306E\u3088\u3046\u306B\u6C7A\u307E\u308A\u307E\u3059\u304B\uFF1F"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "p-top__faq-answer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "p-top__faq-a",
                    children: "A."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                    children: "\u5358\u767A\u6848\u4EF6\u306E\u5834\u5408\u306F\u3001\u6848\u4EF6\u6295\u7A3F\u6642\u306B\u4E0A\u9650\u3068\u4E0B\u9650\u306E\u91D1\u984D\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\uFF08\u4F8B\uFF1A5\u4E07\u5186\u301C10\u4E07\u5186\uFF09\u3002\u6700\u7D42\u7684\u306A\u5831\u916C\u984D\u306F\u3001\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u306E\u76F8\u8AC7\u306B\u3088\u308A\u5F53\u4E8B\u8005\u9593\u3067\u6C7A\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u306E\u5834\u5408\u306F\u3001\u30B5\u30FC\u30D3\u30B9\u306E\u53CE\u76CA\u5206\u914D\u65B9\u6CD5\u306B\u3064\u3044\u3066\u5F53\u4E8B\u8005\u9593\u3067\u53D6\u308A\u6C7A\u3081\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002"
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          className: "p-top__hero p-top__final-cta",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "p-top__title",
            children: "\u3042\u306A\u305F\u3082match\u3067\u7406\u60F3\u306E\u6848\u4EF6\u3092\u898B\u3064\u3051\u307E\u305B\u3093\u304B\uFF1F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "p-top__subtitle",
            children: "\u4F1A\u54E1\u767B\u9332\u306F\u7121\u6599\u3067\u3059\u3002\u4ECA\u3059\u3050\u306F\u3058\u3081\u3066\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u30A2\u30A4\u30C7\u30A2\u3092\u3064\u306A\u3052\u307E\u3057\u3087\u3046\u3002"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-top__buttons",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/register",
              className: "p-top__button p-top__button--primary",
              children: "\u7121\u6599\u3067\u4F1A\u54E1\u767B\u9332\u3059\u308B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/job-listings",
              className: "p-top__button",
              children: "\u6848\u4EF6\u3092\u63A2\u3059"
            })]
          })]
        })]
      })
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
              children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002 \u5358\u767A\u6848\u4EF6\u304B\u3089\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u307E\u3067\u3001 \u30B7\u30F3\u30D7\u30EB\u306B\u63A2\u305B\u3066\u3001\u3059\u3050\u306B\u5FDC\u52DF\u3067\u304D\u307E\u3059"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u30B5\u30FC\u30D3\u30B9\u306B\u3064\u3044\u3066"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "#about",
                  className: "l-footer__link",
                  children: "match\u3068\u306F"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/terms",
                  className: "l-footer__link",
                  children: "\u5229\u7528\u898F\u7D04"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/privacy",
                  className: "l-footer__link",
                  children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
                })
              })]
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
              children: "\u30B5\u30DD\u30FC\u30C8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
              className: "l-footer__links",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/#faq",
                  className: "l-footer__link",
                  children: "\u3088\u304F\u3042\u308B\u8CEA\u554F"
                })
              })
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

/***/ })

}]);