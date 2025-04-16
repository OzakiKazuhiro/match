"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_JobListings_tsx"],{

/***/ "./resources/js/Pages/JobListings.tsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/JobListings.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobListings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



// 共通レイアウトコンポーネント（ログイン不要）
function Layout(_ref) {
  var header = _ref.header,
    children = _ref.children;
  var _ref2 = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props,
    auth = _ref2.auth;
  var user = auth === null || auth === void 0 ? void 0 : auth.user;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "min-h-screen bg-f5f7fa",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("header", {
      className: "l-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "l-header__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: "/",
          className: "l-header__logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "l-header__logo-accent",
            children: "match"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
          className: "l-header__nav",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: "/job-listings",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u4E00\u89A7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: "/post-job",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u3092\u6295\u7A3F"
          }), auth !== null && auth !== void 0 && auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/dashboard",
              className: "l-header__nav-link",
              children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/logout",
              method: "post",
              as: "button",
              className: "l-header__nav-link",
              children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/login",
              className: "l-header__nav-link",
              children: "\u30ED\u30B0\u30A4\u30F3"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/register",
              className: "l-header__nav-link l-header__nav-link--button",
              children: "\u4F1A\u54E1\u767B\u9332"
            })]
          })]
        })]
      })
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
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/",
              className: "l-footer__logo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "l-footer__logo-accent",
                children: "match"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "l-footer__description",
              children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002 \u5358\u767A\u6848\u4EF6\u304B\u3089\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u307E\u3067\u3001 \u30B7\u30F3\u30D7\u30EB\u306B\u63A2\u305B\u3066\u3001\u3059\u3050\u306B\u5FDC\u52DF\u3067\u304D\u307E\u3059\u3002"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u6848\u4EF6\u3092\u63A2\u3059"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  href: "/job-listings?type=onetime",
                  className: "l-footer__link",
                  children: "\u5358\u767A\u6848\u4EF6"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
              className: "l-footer__links",
              children: auth !== null && auth !== void 0 && auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  className: "l-footer__link-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: "/dashboard",
                    className: "l-footer__link",
                    children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  className: "l-footer__link-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: "/profile",
                    className: "l-footer__link",
                    children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
                  })
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  className: "l-footer__link-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: "/login",
                    className: "l-footer__link",
                    children: "\u30ED\u30B0\u30A4\u30F3"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  className: "l-footer__link-item",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    href: "/register",
                    className: "l-footer__link",
                    children: "\u4F1A\u54E1\u767B\u9332"
                  })
                })]
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
function JobListings(_ref3) {
  var auth = _ref3.auth,
    jobListings = _ref3.jobListings,
    filters = _ref3.filters;
  // 状態管理
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(filters.type ? filters.type : "all"),
    _useState4 = _slicedToArray(_useState3, 2),
    activeFilter = _useState4[0],
    setActiveFilter = _useState4[1];

  // フィルタリングされた案件リスト
  var filteredJobs = jobListings.data.filter(function (job) {
    // 検索クエリのフィルタリング
    var matchesQuery = searchQuery === "" || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()) || job.category && job.category.toLowerCase().includes(searchQuery.toLowerCase());

    // タイプフィルタリング（SPA対応）
    var matchesType = activeFilter === "all" || job.type === activeFilter;
    return matchesQuery && matchesType;
  });

  // 案件タイプの表示名
  var jobTypeNames = {
    one_time: "単発案件",
    revenue_share: "レベニューシェア"
  };

  // 予算表示のフォーマット
  var formatBudget = function formatBudget(budgetMin, budgetMax) {
    if (!budgetMin && !budgetMax) {
      return null;
    }
    if (budgetMin && budgetMax) {
      return "\xA5".concat(budgetMin.toLocaleString(), " \u301C \xA5").concat(budgetMax.toLocaleString());
    } else if (budgetMin) {
      return "\xA5".concat(budgetMin.toLocaleString(), " \u301C");
    } else if (budgetMax) {
      return "\u301C \xA5".concat(budgetMax.toLocaleString());
    }
  };

  // 日付のフォーマット
  var formatDate = function formatDate(dateString) {
    var date = new Date(dateString);
    var now = new Date();
    var diffTime = Math.abs(now.getTime() - date.getTime());
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      return "今日";
    } else if (diffDays <= 7) {
      return "".concat(diffDays, "\u65E5\u524D");
    } else if (diffDays <= 30) {
      return "".concat(Math.floor(diffDays / 7), "\u9031\u9593\u524D");
    } else {
      return date.toLocaleDateString("ja-JP");
    }
  };

  // タイプフィルターの変更（SPA対応）
  var handleFilterChange = function handleFilterChange(type) {
    setActiveFilter(type);

    // URL更新（SPA対応：history APIを使用）
    var url = type === "all" ? route("job-listings.index") : route("job-listings.index", {
      type: type
    });
    window.history.pushState({}, "", url);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Layout, {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "p-job-listings__title",
      children: "\u6848\u4EF6\u4E00\u89A7"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\u6848\u4EF6\u4E00\u89A7 - Match"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "p-job-listings__header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-job-listings__header-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "p-job-listings__title",
          children: "\u6848\u4EF6\u3092\u63A2\u3059"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "p-job-listings__subtitle",
          children: "\u5358\u767A\u6848\u4EF6\u3084\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u3092\u63A2\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002 \u3042\u306A\u305F\u306E\u30B9\u30AD\u30EB\u3084\u5E0C\u671B\u306B\u5408\u3063\u305F\u6848\u4EF6\u304C\u898B\u3064\u304B\u308A\u307E\u3059\u3002"
        }), !(auth !== null && auth !== void 0 && auth.user) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "p-job-listings__login-notice",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "12",
              y1: "8",
              x2: "12",
              y2: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "12",
              y1: "16",
              x2: "12.01",
              y2: "16"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            children: ["\u6848\u4EF6\u8A73\u7D30\u306E\u95B2\u89A7\u306B\u306F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: "/login",
              className: "p-job-listings__login-link",
              children: "\u30ED\u30B0\u30A4\u30F3"
            }), "\u304C\u5FC5\u8981\u3067\u3059"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "p-job-listings__search-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
            className: "p-job-listings__search-form",
            onSubmit: function onSubmit(e) {
              return e.preventDefault();
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              type: "text",
              className: "p-job-listings__search-input",
              placeholder: "\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u691C\u7D22\uFF08\u6848\u4EF6\u540D\u3001\u5185\u5BB9\u306A\u3069\uFF09",
              value: searchQuery,
              onChange: function onChange(e) {
                return setSearchQuery(e.target.value);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              type: "submit",
              className: "p-job-listings__search-button",
              children: "\u691C\u7D22"
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "p-job-listings__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-job-listings__filter-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "p-job-listings__filter-tabs",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__filter-tab ".concat(activeFilter === "all" ? "p-job-listings__filter-tab--active" : ""),
            onClick: function onClick() {
              return handleFilterChange("all");
            },
            children: "\u3059\u3079\u3066\u306E\u6848\u4EF6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__filter-tab ".concat(activeFilter === "one_time" ? "p-job-listings__filter-tab--active" : ""),
            onClick: function onClick() {
              return handleFilterChange("one_time");
            },
            children: "\u5358\u767A\u6848\u4EF6"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__filter-tab ".concat(activeFilter === "revenue_share" ? "p-job-listings__filter-tab--active" : ""),
            onClick: function onClick() {
              return handleFilterChange("revenue_share");
            },
            children: "\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "p-job-listings__sort-dropdown",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            className: "p-job-listings__sort-button",
            children: ["\u65B0\u7740\u9806", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
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
          })
        })]
      }), filteredJobs.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "p-job-listings__grid",
        children: filteredJobs.map(function (job) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "p-job-listings__card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-job-listings__card-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "p-job-listings__card-type p-job-listings__card-type--".concat(job.type === "one_time" ? "onetime" : "revenue"),
                children: jobTypeNames[job.type]
              }), (job.budget_min || job.budget_max) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "p-job-listings__card-budget",
                children: formatBudget(job.budget_min, job.budget_max)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-job-listings__card-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "p-job-listings__card-title",
                children: job.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "p-job-listings__card-desc",
                children: job.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "p-job-listings__card-meta",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "p-job-listings__card-date",
                  children: formatDate(job.created_at)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  className: "p-job-listings__card-author",
                  children: ["\u6295\u7A3F\u8005: ", job.user.name]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "p-job-listings__card-footer",
              children: [job.category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "p-job-listings__card-category",
                children: job.category
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: auth !== null && auth !== void 0 && auth.user ? route("job-listings.show", job.id) : route("login", {
                  redirect: route("job-listings.show", job.id)
                }),
                className: "p-job-listings__card-link",
                children: "\u8A73\u7D30\u3092\u898B\u308B"
              })]
            })]
          }, job.id);
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-job-listings__no-results",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "p-job-listings__no-results-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "80",
            height: "80",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "12",
              y1: "8",
              x2: "12",
              y2: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "12",
              y1: "16",
              x2: "12.01",
              y2: "16"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "p-job-listings__no-results-text",
          children: "\u8A72\u5F53\u3059\u308B\u6848\u4EF6\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "\u691C\u7D22\u6761\u4EF6\u3092\u5909\u66F4\u3059\u308B\u304B\u3001\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u518D\u5EA6\u691C\u7D22\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "u-mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "p-job-listings__no-results-button",
            onClick: function onClick() {
              setSearchQuery("");
              setActiveFilter("all");
              // URLも更新
              var url = route("job-listings.index");
              window.history.pushState({}, "", url);
            },
            children: "\u3059\u3079\u3066\u306E\u6848\u4EF6\u3092\u8868\u793A"
          })
        })]
      })]
    }), filteredJobs.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "p-job-listings__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "p-job-listings__search-result",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "p-job-listings__search-result-text",
          children: searchQuery ? "\u300C".concat(searchQuery, "\u300D\u306E\u691C\u7D22\u7D50\u679C: ").concat(filteredJobs.length, "\u4EF6") : "\u5168".concat(jobListings.total, "\u4EF6\u4E2D ").concat(jobListings.from, "\u301C").concat(jobListings.to, "\u4EF6\u3092\u8868\u793A")
        })
      })
    }), jobListings.last_page > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "p-job-listings__container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-job-listings__pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: jobListings.links[0].url || "",
          className: "p-job-listings__pagination-button ".concat(!jobListings.links[0].url ? "p-job-listings__pagination-button--disabled" : ""),
          preserveScroll: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
              points: "15 18 9 12 15 6"
            })
          })
        }), jobListings.links.slice(1, -1).map(function (link, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: link.url || "",
            className: "p-job-listings__pagination-button ".concat(link.active ? "p-job-listings__pagination-button--active" : ""),
            preserveScroll: true,
            children: link.label
          }, i);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          href: jobListings.links[jobListings.links.length - 1].url || "",
          className: "p-job-listings__pagination-button ".concat(!jobListings.links[jobListings.links.length - 1].url ? "p-job-listings__pagination-button--disabled" : ""),
          preserveScroll: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
              points: "9 18 15 12 9 6"
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "p-job-listings__features",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "p-job-listings__features-title",
        children: "\u6848\u4EF6\u63A2\u3057\u3092\u3082\u3063\u3068\u7C21\u5358\u306B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "p-job-listings__features-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "p-job-listings__feature",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__feature-icon",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                cx: "8.5",
                cy: "7",
                r: "4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
                points: "17 11 19 13 23 9"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "p-job-listings__feature-title",
            children: "\u7C21\u5358\u5FDC\u52DF"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "p-job-listings__feature-text",
            children: "\u6C17\u306B\u306A\u3063\u305F\u6848\u4EF6\u306B\u306F\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u5FDC\u52DF\u3002 \u8907\u96D1\u306A\u624B\u7D9A\u304D\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "p-job-listings__feature",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__feature-icon",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "p-job-listings__feature-title",
            children: "\u6700\u65B0\u306E\u6848\u4EF6\u60C5\u5831"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "p-job-listings__feature-text",
            children: "\u5E38\u306B\u6700\u65B0\u306E\u6848\u4EF6\u60C5\u5831\u3092\u63B2\u8F09\u3002 \u65B0\u7740\u901A\u77E5\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u304A\u6C17\u306B\u5165\u308A\u306E\u6848\u4EF6\u3092\u898B\u9003\u3055\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3057\u3087\u3046\u3002"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "p-job-listings__feature",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "p-job-listings__feature-icon",
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "16"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "8",
                y1: "12",
                x2: "16",
                y2: "12"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "p-job-listings__feature-title",
            children: "\u6848\u4EF6\u6295\u7A3F\u3082\u7C21\u5358"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "p-job-listings__feature-text",
            children: "\u3042\u306A\u305F\u306E\u6848\u4EF6\u3092\u6295\u7A3F\u3057\u3066\u3001\u512A\u79C0\u306A\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u30DE\u30C3\u30C1\u30F3\u30B0\u3002 \u30B7\u30F3\u30D7\u30EB\u306A\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u3067\u3001\u3059\u3050\u306B\u6848\u4EF6\u3092\u516C\u958B\u3067\u304D\u307E\u3059\u3002"
          })]
        })]
      })]
    })]
  });
}

/***/ })

}]);