"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Privacy_tsx"],{

/***/ "./resources/js/Components/NotificationBadge.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/Components/NotificationBadge.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotificationBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function NotificationBadge() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    unreadCount = _useState2[0],
    setUnreadCount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];

  // 未読通知数を取得する
  var fetchUnreadCount = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading(true);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(route("notifications.unread-count"));
          case 4:
            response = _context.sent;
            setUnreadCount(response.data.count);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error("通知数の取得に失敗しました", _context.t0);
          case 11:
            _context.prev = 11;
            setLoading(false);
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8, 11, 14]]);
    }));
    return function fetchUnreadCount() {
      return _ref.apply(this, arguments);
    };
  }();

  // コンポーネントマウント時と30秒ごとに更新
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUnreadCount();
    var interval = setInterval(function () {
      fetchUnreadCount();
    }, 30000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  if (loading) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: route("notifications.index"),
    className: "l-header__notification-link",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "l-header__notification-icon",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      })]
    }), unreadCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "l-header__notification-badge",
      children: unreadCount
    })]
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
/* harmony import */ var _Components_NotificationBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/NotificationBadge */ "./resources/js/Components/NotificationBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Authenticated(_ref) {
  var _user$name2, _user$name4;
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "min-h-screen bg-f5f7fa",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
      className: "l-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "l-header__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/",
          className: "l-header__logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "l-header__logo-accent",
            children: "match"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
          className: "l-header__nav",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_NotificationBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/job-listings",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u4E00\u89A7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: "/post-job",
            className: "l-header__nav-link",
            children: "\u6848\u4EF6\u3092\u6295\u7A3F"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
            href: route("dashboard"),
            className: "l-header__nav-link",
            children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "l-header__user-menu",
            ref: userDropdownRef,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
              onClick: function onClick() {
                return setShowingUserDropdown(!showingUserDropdown);
              },
              className: "l-header__user-button",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "l-header__user-avatar",
                children: user !== null && user !== void 0 && user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: user.avatar.startsWith("/") ? user.avatar : "/".concat(user.avatar),
                  alt: "".concat(user.name, "\u306E\u30A2\u30D0\u30BF\u30FC"),
                  onError: function onError(e) {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "";
                    if (e.currentTarget.parentElement) {
                      var _user$name;
                      e.currentTarget.parentElement.innerHTML = (user === null || user === void 0 || (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.charAt(0).toUpperCase()) || "U";
                    }
                  }
                }) : (user === null || user === void 0 || (_user$name2 = user.name) === null || _user$name2 === void 0 ? void 0 : _user$name2.charAt(0).toUpperCase()) || "U"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "l-header__user-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "l-header__login-status",
                  children: "\u30ED\u30B0\u30A4\u30F3\u4E2D"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "l-header__user-name",
                  children: [(user === null || user === void 0 ? void 0 : user.name) || "ユーザー", "\u3055\u3093"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  d: "M6 9l6 6 6-6"
                })
              })]
            }), showingUserDropdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "l-header__dropdown",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("dashboard"),
                className: "l-header__dropdown-item",
                children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("profile.edit"),
                className: "l-header__dropdown-item",
                children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                href: route("logout"),
                method: "post",
                as: "button",
                className: "l-header__dropdown-item l-header__dropdown-item--danger",
                children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "l-header__mobile-button",
          onClick: function onClick() {
            return setShowingMobileMenu(!showingMobileMenu);
          },
          ref: mobileButtonRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
              x1: "3",
              y1: "12",
              x2: "21",
              y2: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
              x1: "3",
              y1: "6",
              x2: "21",
              y2: "6"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
              x1: "3",
              y1: "18",
              x2: "21",
              y2: "18"
            })]
          })
        })]
      }), showingMobileMenu && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "l-header__mobile-menu",
        ref: mobileMenuRef,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "l-header__mobile-user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "l-header__user-avatar",
            children: user !== null && user !== void 0 && user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: user.avatar.startsWith("/") ? user.avatar : "/".concat(user.avatar),
              alt: "".concat(user.name, "\u306E\u30A2\u30D0\u30BF\u30FC"),
              onError: function onError(e) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "";
                if (e.currentTarget.parentElement) {
                  var _user$name3;
                  e.currentTarget.parentElement.innerHTML = (user === null || user === void 0 || (_user$name3 = user.name) === null || _user$name3 === void 0 ? void 0 : _user$name3.charAt(0).toUpperCase()) || "U";
                }
              }
            }) : (user === null || user === void 0 || (_user$name4 = user.name) === null || _user$name4 === void 0 ? void 0 : _user$name4.charAt(0).toUpperCase()) || "U"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "l-header__mobile-user-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
              className: "l-header__mobile-user-name",
              children: [(user === null || user === void 0 ? void 0 : user.name) || "ユーザー", "\u3055\u3093"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "l-header__mobile-login-status",
              children: "\u30ED\u30B0\u30A4\u30F3\u4E2D"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/notifications",
          className: "l-header__mobile-link",
          children: "\u901A\u77E5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/job-listings",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u4E00\u89A7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "/post-job",
          className: "l-header__mobile-link",
          children: "\u6848\u4EF6\u3092\u6295\u7A3F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("dashboard"),
          className: "l-header__mobile-link",
          children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("profile.edit"),
          className: "l-header__mobile-link",
          children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "l-header__mobile-link l-header__mobile-link--danger",
          children: "\u30ED\u30B0\u30A2\u30A6\u30C8"
        })]
      })]
    }), header && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "p-dashboard__header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "p-dashboard__header-inner",
        children: header
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer", {
      className: "l-footer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "l-footer__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "l-footer__content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              href: "/",
              className: "l-footer__logo",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "l-footer__logo-accent",
                children: "match"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "l-footer__description",
              children: "\u30A8\u30F3\u30B8\u30CB\u30A2\u5411\u3051\u306E\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u3002 \u5358\u767A\u6848\u4EF6\u304B\u3089\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u307E\u3067\u3001 \u30B7\u30F3\u30D7\u30EB\u306B\u63A2\u305B\u3066\u3001\u3059\u3050\u306B\u5FDC\u52DF\u3067\u304D\u307E\u3059"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u6848\u4EF6\u95A2\u9023"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/job-listings",
                  className: "l-footer__link",
                  children: "\u6848\u4EF6\u4E00\u89A7"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: "/post-job",
                  className: "l-footer__link",
                  children: "\u6848\u4EF6\u3092\u6295\u7A3F"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u30A2\u30AB\u30A6\u30F3\u30C8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("dashboard"),
                  className: "l-footer__link",
                  children: "\u30DE\u30A4\u30DA\u30FC\u30B8"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("profile.edit"),
                  className: "l-footer__link",
                  children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u7DE8\u96C6"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "l-footer__heading",
              children: "\u898F\u7D04\u30FB\u30DD\u30EA\u30B7\u30FC"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: "l-footer__links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("terms"),
                  className: "l-footer__link",
                  children: "\u5229\u7528\u898F\u7D04"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                className: "l-footer__link-item",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
                  href: route("privacy"),
                  className: "l-footer__link",
                  children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "l-footer__copyright",
          children: ["\xA9 ", new Date().getFullYear(), " match. All rights reserved."]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Privacy.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Privacy.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Privacy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Privacy(_ref) {
  var auth = _ref.auth;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: "font-semibold text-xl text-gray-800 leading-tight",
      children: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bg-white overflow-hidden shadow-sm sm:rounded-lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "p-6 bg-white border-b border-gray-200 space-y-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "match \u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u682A\u5F0F\u4F1A\u793Ematch\uFF08\u4EE5\u4E0B\u300C\u5F53\u793E\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306F\u3001\u304A\u5BA2\u69D8\uFF08\u5229\u7528\u4F1A\u54E1\u3001\u51FA\u54C1\u8005\u3001\u53CA\u3073\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u95B2\u89A7\u8005\u3092\u7DCF\u79F0\u3059\u308B\u3082\u306E\u3067\u3059\uFF09\u306E\u500B\u4EBA\u3092\u8B58\u5225\u3057\u3046\u308B\u60C5\u5831\u3092\u9069\u5207\u306B\u4FDD\u8B77\u3059\u308B\u3053\u3068\u304C\u793E\u4F1A\u7684\u8CAC\u52D9\u3068\u3057\u3066\u91CD\u8981\u3068\u8003\u3048\u3001\u4E0B\u8A18\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\uFF08\u4EE5\u4E0B\u300C\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306B\u57FA\u3065\u304D\u3001\u500B\u4EBA\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u95A2\u3059\u308B\u6CD5\u5F8B\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u30FB\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u7B49\u3092\u9075\u5B88\u3057\u3066\u3001\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\u3092\u53D6\u5F97\u3001\u5229\u7528\u3001\u7B2C\u4E09\u8005\u306B\u9810\u8A17\u307E\u305F\u306F\u63D0\u4F9B\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u304A\u5BA2\u69D8\u304C\u3001match\u304C\u904B\u55B6\u3059\u308B\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\uFF08\u4EE5\u4E0B\u300C\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306E\u3054\u5229\u7528\u3092\u3055\u308C\u308B\u305F\u3081\u306B\u306F\u3001\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u3092\u719F\u8AAD\u306E\u3046\u3048\u3001\u5185\u5BB9\u306B\u540C\u610F\u3057\u3066\u3044\u305F\u3060\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u540C\u610F\u3044\u305F\u3060\u3051\u306A\u3044\u5834\u5408\u306F\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u53CA\u3073\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3092\u901A\u3058\u3066\u63D0\u4F9B\u3055\u308C\u308B\u5404\u30B5\u30FC\u30D3\u30B9\uFF08\u4EE5\u4E0B\u300C\u672C\u30B5\u30FC\u30D3\u30B9\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306E\u3054\u5229\u7528\u306F\u304A\u65AD\u308A\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "1. \u53D6\u5F97\u3059\u308B\u60C5\u5831\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u304C\u300C3.\u53D6\u5F97\u60C5\u5831\u306E\u5229\u7528\u76EE\u7684\u306B\u3064\u3044\u3066\u300D\u306B\u5B9A\u3081\u308B\u76EE\u7684\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u53D6\u5F97\u3059\u308B\u60C5\u5831\u306B\u306F\u3001\u6B21\u306E\u3082\u306E\u304C\u542B\u307E\u308C\u307E\u3059\uFF08\u4EE5\u4E0B\uFF081\uFF09\u304A\u3088\u3073\uFF082\uFF09\u3092\u5408\u308F\u305B\u3066\u300C\u53D6\u5F97\u60C5\u5831\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\uFF081\uFF09\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u500B\u4EBA\u60C5\u5831\u3068\u306F\u3001\u500B\u4EBA\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u95A2\u3059\u308B\u6CD5\u5F8B\uFF08\u5E73\u621015\u5E74\u6CD5\u5F8B\u7B2C57\u53F7\u3001\u4EE5\u4E0B\u300C\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u300D\u3068\u3044\u3044\u307E\u3059\uFF092\u67611\u9805\u306B\u5B9A\u3081\u308B\u500B\u4EBA\u60C5\u5831\u3092\u3044\u3044\u3001\u4E0B\u8A18\u3092\u542B\u3080\u3082\u306E\u3068\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "list-disc pl-6 space-y-2 mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u306E\u304A\u540D\u524D\u3001\u751F\u5E74\u6708\u65E5\u3001\u6027\u5225\u3001\u305D\u306E\u4ED6\u306E\u7279\u5B9A\u306E\u500B\u4EBA\u3092\u8B58\u5225\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u60C5\u5831"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u7279\u5B9A\u306E\u500B\u4EBA\u60C5\u5831\u306B\u7D50\u3073\u3064\u3044\u3066\u4F7F\u7528\u3055\u308C\u308B\u3054\u4F4F\u6240\u3001\u96FB\u8A71\u756A\u53F7\u3001\u6240\u5C5E\u3059\u308B\u4F1A\u793E\u305D\u306E\u4ED6\u306E\u7D44\u7E54\u306E\u540D\u79F0\u3001\u6240\u5C5E\u3059\u308B\u90E8\u7F72\u306E\u540D\u79F0\u3001\u30ED\u30B0\u30A4\u30F3ID\u3001\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3001\u96FB\u5B50\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u30D1\u30B9\u30EF\u30FC\u30C9\u7B49\u306E\u4F1A\u54E1\u306B\u95A2\u3059\u308B\u60C5\u5831"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u756A\u53F7\u3001\u305D\u306E\u4ED6\u306E\u30AF\u30EC\u30B8\u30C3\u30C8\u30AB\u30FC\u30C9\u306B\u95A2\u3059\u308B\u60C5\u5831\u3001\u9280\u884C\u53E3\u5EA7\u756A\u53F7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u306E\u672C\u4EBA\u78BA\u8A8D\u306B\u95A2\u3059\u308B\u60C5\u5831"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\uFF082\uFF09\u305D\u306E\u4ED6\u306E\u304A\u5BA2\u69D8\u306B\u95A2\u9023\u3059\u308B\u60C5\u5831\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u500B\u4EBA\u60C5\u5831\u306B\u8A72\u5F53\u3059\u308B\u304B\u5426\u304B\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u5229\u7528\u306B\u95A2\u3059\u308B\u304A\u5BA2\u69D8\u306E\u60C5\u5831\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "list-disc pl-6 space-y-2 mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u304C\u3054\u5229\u7528\u306B\u306A\u3063\u305F\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u5185\u5BB9\u3001\u3054\u5229\u7528\u65E5\u6642\u3001\u3054\u5229\u7528\u56DE\u6570\u306A\u3069\u306E\u3054\u5229\u7528\u5185\u5BB9\u30FB\u3054\u5229\u7528\u5C65\u6B74\u306B\u95A2\u3059\u308B\u60C5\u5831\uFF08\u3053\u308C\u3089\u306E\u60C5\u5831\u306B\u306F\u304A\u5BA2\u69D8\u304C\u5229\u7528\u3055\u308C\u308B\uFF35\uFF32\uFF2C\u3001\u30D6\u30E9\u30A6\u30B6\u3084\u643A\u5E2F\u96FB\u8A71\u306E\u7A2E\u985E\u3084IP\u30A2\u30C9\u30EC\u30B9\u3001\u30AF\u30C3\u30AD\u30FC\u60C5\u5831\u306A\u3069\u306E\u60C5\u5831\u3092\u542B\u307F\u307E\u3059\u3002\uFF09"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u306E\u3054\u5229\u7528\u306B\u95A2\u9023\u3057\u305F\u6C7A\u6E08\u72B6\u6CC1\u306B\u95A2\u3059\u308B\u60C5\u5831"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "2. \u53D6\u5F97\u60C5\u5831\u306E\u53CE\u96C6\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3092\u3054\u5229\u7528\u306B\u306A\u308B\u304A\u5BA2\u69D8\u306E\u53D6\u5F97\u60C5\u5831\u3092\u3001\u4EE5\u4E0B\u306E\u65B9\u6CD5\u306B\u3088\u308A\u53CE\u96C6\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "list-disc pl-6 space-y-2 mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u4E0A\u3067\u304A\u5BA2\u69D8\u81EA\u8EAB\u306B\u76F4\u63A5\u5165\u529B\u3044\u305F\u3060\u304F\u65B9\u6CD5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u304B\u3089\u5F53\u793E\u306B\u5BFE\u3057\u3001\u96FB\u5B50\u30E1\u30FC\u30EB\u3001\u90F5\u4FBF\u3001\u66F8\u9762\u3001\u96FB\u8A71\u7B49\u306E\u624B\u6BB5\u306B\u3088\u308A\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u65B9\u6CD5\uFF08\u5F53\u793E\u306F\u304A\u5BA2\u69D8\u3068\u306E\u96FB\u8A71\u5FDC\u5BFE\u6642\u3001\u54C1\u8CEA\u5411\u4E0A\u7B49\u3092\u76EE\u7684\u3068\u3057\u3001\u901A\u8A71\u3092\u9332\u97F3\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\uFF09"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u304A\u5BA2\u69D8\u304C\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3078\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u305F\u969B\u306B\u53CE\u96C6\u3059\u308B\u65B9\u6CD5"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "3. \u53D6\u5F97\u60C5\u5831\u306E\u5229\u7528\u76EE\u7684\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u53D6\u5F97\u60C5\u5831\u3092\u53D6\u5F97\u30FB\u53CE\u96C6\u3059\u308B\u969B\u306B\u304A\u5BA2\u69D8\u306B\u304A\u77E5\u3089\u305B\u3057\u305F\u5229\u7528\u76EE\u7684\u307E\u305F\u306F\u4EE5\u4E0B\u306E\u76EE\u7684\u306E\u305F\u3081\u306B\u3001\u5229\u7528\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u3053\u308C\u3089\u306E\u5229\u7528\u76EE\u7684\u4EE5\u5916\u306B\u306F\u3001\u4E0B\u8A18\u300C4.\u53D6\u5F97\u60C5\u5831\u306E\u7B2C\u4E09\u8005\u3078\u306E\u9810\u8A17\u3001\u63D0\u4F9B\u306B\u3064\u3044\u3066\u300D\u306B\u8A18\u8F09\u3059\u308B\u5834\u5408\u307E\u305F\u306F\u4E8B\u524D\u306B\u304A\u5BA2\u69D8\u306B\u540C\u610F\u3092\u3044\u305F\u3060\u3044\u305F\u5834\u5408\u3092\u9664\u304D\u3001\u5229\u7528\u81F4\u3057\u307E\u305B\u3093\u3002\u306A\u304A\u3001\u304A\u5BA2\u69D8\u306F\u3001\u304A\u5BA2\u69D8\u306B\u5BFE\u3059\u308B\u60C5\u5831\u63D0\u4F9B\u306B\u3064\u3044\u3066\u3001\u4F1A\u54E1\u767B\u9332\u6642\u53CA\u3073\u767B\u9332\u5F8C\u306B\u3001\u60C5\u5831\u63D0\u4F9B\u3092\u65AD\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u4F46\u3057\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u904B\u55B6\u4E0A\u5FC5\u8981\u3068\u306A\u308B\u60C5\u5831\u63D0\u4F9B\u306B\u3064\u3044\u3066\u306F\u3001\u60C5\u5831\u63D0\u4F9B\u3092\u65AD\u3063\u305F\u5834\u5408\u306B\u306F\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3092\u3054\u5229\u7528\u306A\u308C\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "list-disc pl-6 space-y-2 mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3067\u5B89\u5168\u304B\u3064\u78BA\u5B9F\u306B\u53D6\u5F15\u3092\u3057\u3066\u9802\u304F\u305F\u3081\u306B \u5229\u7528\u8005\u306B\u96FB\u5B50\u30E1\u30FC\u30EB\u7B49\u3067\u53D6\u5F15\u306E\u72B6\u614B\u3084\u91CD\u8981\u306A\u4E8B\u9805\u3092\u9023\u7D61\u3055\u305B\u3066\u9802\u304F\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u53D6\u5F15\uFF08\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306B\u304A\u3044\u3066\u304A\u5BA2\u69D8\u9593\u3067\u30B5\u30FC\u30D3\u30B9\u306E\u8CFC\u5165\u306B\u95A2\u3059\u308B\u53D6\u5F15\u3092\u884C\u3046\u3053\u3068\u3092\u3044\u3044\u3001\u4EE5\u4E0B\u540C\u69D8\u3068\u3057\u307E\u3059\u3002\uFF09\u306E\u8CFC\u5165\u78BA\u8A8D\u3092\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3067\u5F53\u793E\u3068\u304A\u5BA2\u69D8\u3068\u306E\u9593\u3067\u884C\u3046\u53D6\u5F15\uFF08\u4EE5\u4E0B\u300C\u76F4\u63A5\u53D6\u5F15\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306E\u624B\u7D9A\u304D\u3001\u5C65\u884C\u53CA\u3073\u7BA1\u7406\u306E\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u96FB\u5B50\u30E1\u30FC\u30EB\u914D\u4FE1\u30B5\u30FC\u30D3\u30B9\u306E\u304A\u7533\u3057\u8FBC\u307F\u306E\u78BA\u8A8D\u3084\u30E1\u30FC\u30EB\u3092\u914D\u4FE1\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30B5\u30FC\u30D3\u30B9\u3078\u306E\u767B\u9332\u306E\u78BA\u8A8D\u3084\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u53D6\u5F15\u30FB\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u3054\u8ACB\u6C42\u3001\u304A\u652F\u6255\u3044\u3068\u305D\u306E\u78BA\u8A8D\u3092\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u53D6\u5F15\u306B\u3064\u3044\u3066\u3001\u5F8C\u6255\u3044\u3067\u306E\u6C7A\u6E08\u624B\u6BB5\u3092\u5229\u7528\u3059\u308B\u5834\u5408\u306B\u3001\u5B89\u5168\u304B\u3064\u78BA\u5B9F\u306B\u5229\u7528\u3057\u3066\u9802\u304F\u76EE\u7684\u3067\u304A\u5BA2\u69D8\u306E\u4E0E\u4FE1\u5BE9\u67FB\u3092\u884C\u3046\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u904B\u55B6\u4E0A\u306E\u30C8\u30E9\u30D6\u30EB\u306E\u89E3\u6C7A\u306E\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4E0D\u6B63\u5229\u7528\u30FB\u30C8\u30E9\u30D6\u30EB\u306E\u9632\u6B62\u53CA\u3073\u4E0D\u6B63\u5229\u7528\u306E\u8ABF\u67FB\u306E\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u672C\u53D6\u5F15\u30FB\u672C\u30B5\u30FC\u30D3\u30B9\u30FB\u76F4\u63A5\u53D6\u5F15\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306A\u3069\u306E\u5185\u5BB9\u3092\u7686\u3055\u307E\u304C\u3088\u308A\u3054\u6E80\u8DB3\u3044\u305F\u3060\u3051\u308B\u3088\u3046\u6539\u826F\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u7686\u3055\u307E\u304C\u6CE8\u6587\u3055\u308C\u305F\u60C5\u5831\u3084\u672C\u53D6\u5F15\u3001\u76F4\u63A5\u53D6\u5F15\u306A\u3069\u306B\u95A2\u3059\u308B\u6E80\u8DB3\u5EA6\u3092\u8ABF\u67FB\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u500B\u4EBA\u60C5\u5831\u3092\u7D71\u8A08\u7684\u306B\u51E6\u7406\u3057\u305F\u60C5\u5831\u3092\u96C6\u7D04\u3057\u8ABF\u67FB\u7D50\u679C\u3068\u3057\u3066\u516C\u8868\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u7686\u3055\u307E\u306E\u3054\u5229\u7528\u72B6\u6CC1\u3092\u628A\u63E1\u3057\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u6539\u5584\u3084\u65B0\u6A5F\u80FD\u3001\u65B0\u30B5\u30FC\u30D3\u30B9\u306E\u958B\u767A\u306B\u5F79\u7ACB\u3066\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u5404\u7A2E\u4F1A\u54E1\u5236\u30B5\u30FC\u30D3\u30B9\u3001\u305D\u306E\u4ED6\u5404\u7A2E\u30B5\u30FC\u30D3\u30B9\u306E\u3054\u6848\u5185\u3092\u304A\u5C4A\u3051\u3059\u308B\u305F\u3081"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u5F53\u793E\u53C8\u306F\u7B2C\u4E09\u8005\u306B\u3088\u308B\u5E83\u544A\u306E\u914D\u4FE1\u30FB\u8868\u793A\u306E\u305F\u3081"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "4. \u53D6\u5F97\u60C5\u5831\u306E\u7B2C\u4E09\u8005\u3078\u306E\u9810\u8A17\u3001\u63D0\u4F9B\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u4EE5\u4E0B\u306B\u5B9A\u3081\u308B\u5834\u5408\u3092\u9664\u304D\u3001\u4E8B\u524D\u306B\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u306A\u3057\u3067\u53D6\u5F97\u60C5\u5831\u3092\u7B2C\u4E09\u8005\u306B\u9810\u8A17\u3001\u63D0\u4F9B\u3057\u307E\u305B\u3093\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3067\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u305F\u3081\u306B\u5F53\u793E\u304C\u5FC5\u8981\u3068\u5224\u65AD\u3057\u305F\u5834\u5408"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u4E0A\u3067\u306E\u60C5\u5831\u306E\u958B\u793A\u3084\u5171\u6709\u516C\u958B\u3055\u308C\u305F\u53D6\u5F15\u76F8\u624B\u306E\u60C5\u5831\u306F\u3001\u5F53\u8A72\u53D6\u5F15\u306E\u305F\u3081\u306B\u306E\u307F\u5229\u7528\u3059\u308B\u3082\u306E\u3068\u3057\u3001\u3054\u8CFC\u5165\u8005\u306E\u304A\u5BA2\u69D8\u306E\u4E8B\u524D\u306E\u540C\u610F\u306A\u304F\u3001\u3053\u308C\u3092\u7B2C\u4E09\u8005\u306B\u958B\u793A\u3044\u305F\u3057\u307E\u305B\u3093\u3002\u307E\u305F\u304A\u5BA2\u69D8\u306E\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u5229\u7528\u5C65\u6B74\u3084\u4E00\u90E8\u306E\u516C\u958B\u7528\u306E\u53D6\u5F97\u60C5\u5831\uFF08\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3001\u6027\u5225\u3001\u81EA\u5DF1\u7D39\u4ECB\u6587\u7B49\uFF09\u306F\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u4E0A\u3067\u5F53\u793E\u304C\u5B9A\u3081\u308B\u671F\u9593\u3001\u516C\u958B\u3055\u308C\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\u696D\u52D9\u59D4\u8A17\u5148\u3078\u306E\u9810\u8A17\u30FB\u63D0\u4F9B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u300C3. \u53D6\u5F97\u60C5\u5831\u306E\u5229\u7528\u76EE\u7684\u306B\u3064\u3044\u3066\u300D\u306B\u898F\u5B9A\u3055\u308C\u308B\u5229\u7528\u76EE\u7684\u3092\u9054\u6210\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u306B\u304A\u3044\u3066\u3001\u5F53\u793E\u304C\u4FE1\u983C\u306B\u8DB3\u308B\u3068\u5224\u65AD\u3057\u500B\u4EBA\u60C5\u5831\u306E\u5B88\u79D8\u7FA9\u52D9\u5951\u7D04\u3092\u7D50\u3093\u3060\u4F01\u696D\u306B\u3001\u696D\u52D9\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u59D4\u8A17\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u3001\u3053\u306E\u5834\u5408\u3001\u5F53\u793E\u306E\u53B3\u6B63\u306A\u7BA1\u7406\u4E0B\u306E\u3082\u3068\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u5229\u7528\u76EE\u7684\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u3001\u304B\u3064\u696D\u52D9\u3092\u884C\u3046\u306E\u306B\u5FC5\u8981\u6700\u5C0F\u9650\u306E\u7BC4\u56F2\u3067\u3001\u5F53\u8A72\u696D\u52D9\u59D4\u8A17\u5148\u4F01\u696D\u306B\u53D6\u5F97\u60C5\u5831\u3092\u9810\u8A17\u3001\u63D0\u4F9B\u3055\u305B\u3066\u3044\u305F\u3060\u304F\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u306A\u304A\u3001\u5F53\u793E\u306F\u59D4\u8A17\u5148\u306B\u304A\u3051\u308B\u60C5\u5831\u7BA1\u7406\u304C\u9069\u5207\u306B\u884C\u308F\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u9069\u5B9C\u78BA\u8A8D\u3057\u3001\u53D6\u5F97\u60C5\u5831\u304C\u9069\u6B63\u306B\u7BA1\u7406\u3055\u308C\u308B\u3088\u3046\u306B\u78BA\u4FDD\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\u6CD5\u4EE4\u7B49\u306B\u57FA\u3065\u304F\u63D0\u4F9B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u88C1\u5224\u6240\u3001\u884C\u653F\u6A5F\u95A2\u3001\u76E3\u7763\u5B98\u5E81\u305D\u306E\u4ED6\u306E\u516C\u7684\u6A5F\u95A2\u304B\u3089\u53D6\u5F97\u60C5\u5831\u3092\u63D0\u4F9B\u3059\u308B\u3088\u3046\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u3001\u63D0\u4F9B\u3092\u62D2\u5426\u3059\u308B\u5408\u7406\u7684\u306A\u7406\u7531\u304C\u306A\u3044\u5834\u5408\u306B\u306F\u3001\u53D6\u5F97\u60C5\u5831\u3092\u63D0\u4F9B\u3055\u305B\u3066\u3044\u305F\u3060\u304F\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "5. \u30AF\u30C3\u30AD\u30FC\u306E\u4F7F\u7528\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306F\u3001\u304A\u5BA2\u69D8\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u306E\u8A18\u61B6\u88C5\u7F6E\u306B\u3001\u300C\u30AF\u30C3\u30AD\u30FC\u300D\u3068\u547C\u3070\u308C\u308B\u30C6\u30AD\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u9001\u4ED8\u3057\u3001\u4FDD\u5B58\u30FB\u5229\u7528\u3055\u305B\u3066\u3044\u305F\u3060\u304F\u3053\u3068\u304C\u3054\u3056\u3044\u307E\u3059\u3002\u30AF\u30C3\u30AD\u30FC\u306E\u5229\u7528\u76EE\u7684\u306F\u304A\u5BA2\u69D8\u306E\u30B5\u30FC\u30D3\u30B9\u30ED\u30B0\u30A4\u30F3\u6642\u306E\u5FC5\u8981\u60C5\u5831\u306E\u81EA\u52D5\u5165\u529B\u3059\u308B\u3053\u3068\u3084\u8208\u5473\u3092\u304A\u6301\u3061\u3067\u3042\u308D\u3046\u5206\u91CE\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3059\u308B\u306A\u3069\u306E\u5229\u4FBF\u6027\u5411\u4E0A\u306E\u305F\u3081\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002\u306A\u304A\u3001\u304A\u5BA2\u69D8\u306F\u3001\u300C\u30AF\u30C3\u30AD\u30FC\u300D\u3092\u53D7\u3051\u53D6\u308B\u524D\u306B\u30D6\u30E9\u30A6\u30B6\u304C\u8B66\u544A\u3092\u51FA\u3059\u69D8\u306B\u8A2D\u5B9A\u3057\u3066\u304A\u304F\u4E8B\u306B\u3088\u308A\u3001\u304A\u5BA2\u69D8\u306E\u5224\u65AD\u3067\u300C\u30AF\u30C3\u30AD\u30FC\u300D\u3092\u53D7\u3051\u53D6\u308B\u4E8B\u3092\u62D2\u5426\u3067\u304D\u307E\u3059\u304C\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u6A5F\u80FD\u307E\u305F\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u304C\u3054\u5229\u7528\u306B\u306A\u308C\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "6. \u53D6\u5F97\u60C5\u5831\u306E\u7BA1\u7406\u304A\u3088\u3073\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u3067\u306F\u3001\u53CE\u96C6\u3055\u305B\u3066\u3044\u305F\u3060\u3044\u305F\u53D6\u5F97\u60C5\u5831\u3092\u3001\u4E00\u822C\u306E\u5229\u7528\u8005\u304C\u30A2\u30AF\u30BB\u30B9\u3067\u304D\u306A\u3044\u74B0\u5883\u4E0B\u306B\u3042\u308B\u3001\u30D5\u30A1\u30A4\u30E4\u30FC\u30A6\u30A9\u30FC\u30EB\u3067\u4FDD\u8B77\u3055\u308C\u305F\u30B5\u30FC\u30D0\u30FC\u306B\u3066\u5B89\u5168\u306B\u4FDD\u7BA1\u3057\u3001\u4E0D\u6B63\u30A2\u30AF\u30BB\u30B9\u30FB\u7D1B\u5931\u30FB\u7834\u58CA\u30FB\u6539\u3056\u3093\u307E\u305F\u306F\u6F0F\u6D29\u306E\u9632\u6B62\u305D\u306E\u4ED6\u306E\u500B\u4EBA\u30C7\u30FC\u30BF\u306E\u5B89\u5168\u7BA1\u7406\u306E\u305F\u3081\u306B\u5FC5\u8981\u304B\u3064\u9069\u5207\u306A\u63AA\u7F6E\u3092\u8B1B\u3058\u307E\u3059\u3002\u306A\u304A\u3001\u5F53\u793E\u3067\u306F\u3001\u5F53\u793E\u304C\u4FE1\u983C\u306B\u8DB3\u308B\u3068\u5224\u65AD\u3057\u500B\u4EBA\u60C5\u5831\u306E\u5B88\u79D8\u7FA9\u52D9\u5951\u7D04\u3092\u7D50\u3093\u3060\u4F01\u696D\u306B\u3001\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u308A\u6271\u3044\u3092\u59D4\u8A17\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u3053\u306E\u5834\u5408\u306B\u3082\u3001\u53D6\u5F97\u60C5\u5831\u306F\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u3082\u3068\u3067\u4FDD\u8B77\u3055\u308C\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "7. \u514D\u8CAC\u30FB\u6CE8\u610F\u4E8B\u9805\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                className: "list-disc pl-6 space-y-2 mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u5F53\u793E\u306F\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u30A6\u30A7\u30D6\u30DA\u30FC\u30B8\u306B\u30EA\u30F3\u30AF\u3055\u308C\u3066\u3044\u308B\u4ED6\u306E\u4E8B\u696D\u8005\u307E\u305F\u306F\u500B\u4EBA\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306B\u304A\u3051\u308B\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\u7B49\u306E\u4FDD\u8B77\u306B\u3064\u3044\u3066\u3001\u8CAC\u4EFB\u3092\u8CA0\u3046\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u304A\u5BA2\u69D8\u3054\u81EA\u8EAB\u306B\u3066\u5F53\u8A72\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u5185\u5BB9\u3092\u3088\u304F\u3054\u78BA\u8A8D\u306E\u4E0A\u3067\u3001\u95B2\u89A7\u304A\u3088\u3073\u3054\u5229\u7528\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\u3092\u4E0D\u6B63\u306A\u30A2\u30AF\u30BB\u30B9\u304B\u3089\u5B88\u308B\u305F\u3081\uFF64\u30C7\u30FC\u30BF\u306E\u4FDD\u8B77\u304C\u5FC5\u8981\u3067\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\u3001\u30C7\u30FC\u30BF\u8EE2\u9001\u306BSSL(Secure Socket Layer)\u3068\u3044\u3046\u696D\u754C\u6A19\u6E96\u306E\u6697\u53F7\u65B9\u5F0F\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002SSL\u975E\u5BFE\u5FDC\u30D6\u30E9\u30A6\u30B6\u306B\u3088\u308B\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u4E0A\u3067\u306E\u767B\u9332\u3001\u7533\u8FBC\u3082\u3057\u304F\u306F\u6CE8\u6587\u3001\u307E\u305F\u306F\u96FB\u5B50\u30E1\u30FC\u30EB\u3082\u3057\u304F\u306F\u90F5\u4FBF\u306B\u3088\u308A\u53D6\u5F97\u60C5\u5831\u3092\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u5834\u5408\u306F\u3001\u5F53\u793E\u3078\u306E\u60C5\u5831\u5230\u9054\u904E\u7A0B\u306B\u3066\u3001\u5F53\u793E\u306E\u7BA1\u7406\u5916\u306E\u7B2C\u4E09\u8005\u306B\u95B2\u89A7\u3001\u7A83\u53D6\u3055\u308C\u308B\u5371\u967A\u6027\u304C\u9AD8\u307E\u308A\u307E\u3059\u306E\u3067\u3001\u3053\u308C\u3089\u306E\u5371\u967A\u6027\u3092\u3054\u4E86\u89E3\u306E\u4E0A\u3053\u308C\u3089\u306E\u624B\u6BB5\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
                  children: "\u4E07\u4E00\u3001\u5F53\u793E\u306B\u3088\u308B\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u65BD\u7B56\u306B\u3082\u304B\u304B\u308F\u3089\u305A\u3001\u30CF\u30C3\u30AB\u30FC\u7B49\u306B\u3088\u308B\u4E0D\u5F53\u306A\u884C\u70BA\u306B\u3088\u308A\u3001\u304A\u5BA2\u69D8\u304A\u3088\u3073\u7B2C\u4E09\u8005\u306B\u640D\u5BB3\u304C\u751F\u3058\u305F\u5834\u5408\u306B\u3064\u3044\u3066\u306F\u3001\u5F53\u793E\u306F\u8CAC\u4EFB\u3092\u8CA0\u3044\u304B\u306D\u307E\u3059\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002 \u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306E\u60C5\u5831\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u304A\u5BA2\u69D8\u306B\u3066\u3001\u7D1B\u5931\u3001\u5FD8\u5931\u307E\u305F\u306F\u7B2C\u4E09\u8005\u306B\u77E5\u3089\u308C\u308B\u3053\u3068\u306E\u306A\u3044\u3088\u3046\u53B3\u91CD\u306A\u7BA1\u7406\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "8. \u6D77\u5916\u304B\u3089\u306E\u30A2\u30AF\u30BB\u30B9\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306E\u5229\u7528\u3001\u7BA1\u7406\u3001\u904B\u7528\u65B9\u6CD5\u304A\u3088\u3073\u63B2\u8F09\u5185\u5BB9\u304C\u9055\u6CD5\u307E\u305F\u306F\u4E0D\u9069\u5207\u3068\u3055\u308C\u308B\u56FD\u307E\u305F\u306F\u5730\u57DF\u304B\u3089\u306E\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u306F\u3054\u9060\u616E\u3092\u9858\u3044\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "9. \u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u6539\u5584\u304A\u3088\u3073\u6700\u65B0\u306E\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u78BA\u8A8D\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u3064\u3044\u3066\u3001\u9069\u5B9C\u305D\u306E\u6539\u5584\u306B\u52AA\u3081\u3066\u3044\u304D\u307E\u3059\u3002\u6700\u65B0\u306E\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306F\u3001\u5F53\u793E\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u3054\u89A7\u306B\u306A\u308C\u307E\u3059\u3002 \u304A\u5BA2\u69D8\u306F\u3001\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u304B\u5F53\u793E\u306E\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u5229\u7528\u306B\u306A\u308B\u524D\u306B\u3001\u5FC5\u305A\u6700\u65B0\u306E\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u304A\u5BA2\u69D8\u304C\u672C\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u7B49\u306B\u30A2\u30AF\u30BB\u30B9\u3055\u308C\u308B\u304B\u5F53\u793E\u306E\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u5229\u7528\u306B\u306A\u3089\u308C\u305F\u5834\u5408\u306F\u3001\u6700\u65B0\u306E\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u5185\u5BB9\u306B\u540C\u610F\u3055\u308C\u305F\u3082\u306E\u3068\u307F\u306A\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "10. \u53D6\u5F97\u60C5\u5831\u306E\u958B\u793A\u30FB\u8A02\u6B63\u30FB\u5229\u7528\u505C\u6B62\u7B49\u306E\u624B\u7D9A\u306B\u3064\u3044\u3066"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u304B\u3089\u3001\u6CD5\u4EE4\u7B49\u306B\u5B9A\u3081\u308B\u7406\u7531\u306B\u3088\u3063\u3066\u3001\u53D6\u5F97\u60C5\u5831\u306E\u5185\u5BB9\u306E\u8A02\u6B63\u3001\u8FFD\u52A0\u3082\u3057\u304F\u306F\u524A\u9664\u53C8\u306F\u7B2C\u4E09\u8005\u63D0\u4F9B\u8A18\u9332\u306E\u78BA\u8A8D\u3092\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u4ED6\u306E\u6CD5\u4EE4\u306E\u898F\u5B9A\u306B\u3088\u308A\u7279\u5225\u306E\u624B\u7D9A\u304D\u304C\u5B9A\u3081\u3089\u308C\u3066\u3044\u308B\u5834\u5408\u3092\u9664\u304D\u3001\u5229\u7528\u76EE\u7684\u306E\u9054\u6210\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u5185\u306B\u304A\u3044\u3066\u3001\u9045\u6EDE\u306A\u304F\u5FC5\u8981\u306A\u8ABF\u67FB\u3092\u884C\u3044\u3001\u305D\u306E\u7D50\u679C\u306B\u57FA\u3065\u304D\u3001\u53D6\u5F97\u60C5\u5831\u306E\u5185\u5BB9\u306E\u8A02\u6B63\u3001\u8FFD\u52A0\u307E\u305F\u306F\u524A\u9664\u7B49\u6CD5\u4EE4\u4E0A\u5FC5\u8981\u306A\u63AA\u7F6E\u3092\u884C\u3044\u3001\u305D\u306E\u65E8\u3054\u672C\u4EBA\u306B\u901A\u77E5\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-xl font-semibold mt-6",
                children: "11. \u304A\u554F\u3044\u5408\u308F\u305B\u5148"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u672C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u95A2\u3059\u308B\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001\u4E0B\u8A18\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u5148\u307E\u3067\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\u500B\u4EBA\u60C5\u5831\u53D6\u6271\u4E8B\u696D\u8005\u306E\u540D\u79F0\u3001\u4F4F\u6240\u53CA\u3073\u4EE3\u8868\u8005\u6C0F\u540D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                children: ["\u682A\u5F0F\u4F1A\u793Ematch", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "\u4EE3\u8868\u53D6\u7DE0\u5F79 \u5C71\u7530 \u592A\u90CE", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "\u3012150-0000", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\u6E0B\u8C370\u22120\u22120 \u6E0B\u8C37\u30D3\u30EB10F"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-lg font-medium mt-4",
                children: "\u304A\u554F\u3044\u5408\u308F\u305B\u7A93\u53E3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "\u682A\u5F0F\u4F1A\u793Ematch\u3000\u500B\u4EBA\u60C5\u5831\u62C5\u5F53\u8005\u5B9B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "mt-6 text-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: "\u5236\u5B9A\u30FB\u65BD\u884C 2024\u5E741\u67081\u65E5"
                })
              })]
            })
          })
        })
      })
    })]
  });
}

/***/ })

}]);