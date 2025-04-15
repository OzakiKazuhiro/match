"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_Partials_UpdatePasswordForm_tsx"],{

/***/ "./node_modules/@headlessui/react/dist/components/transition/transition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transition/transition.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: () => (/* binding */ ze),
/* harmony export */   TransitionChild: () => (/* binding */ Fe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_class_names_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function ue(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:de)!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment||react__WEBPACK_IMPORTED_MODULE_0__.Children.count(e.children)===1}let w=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);w.displayName="TransitionContext";var _e=(n=>(n.Visible="visible",n.Hidden="hidden",n))(_e||{});function De(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(w);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function He(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);M.displayName="NestingContext";function U(e){return"children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Te(e,t){let n=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(e),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),S=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)(),R=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)(),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((o,i=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden)=>{let a=l.current.findIndex(({el:s})=>s===o);a!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(i,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount](){l.current.splice(a,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden](){l.current[a].state="hidden"}}),R.microTask(()=>{var s;!U(l)&&S.current&&((s=n.current)==null||s.call(n))}))}),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(o=>{let i=l.current.find(({el:a})=>a===o);return i?i.state!=="visible"&&(i.state="visible"):l.current.push({el:o,state:"visible"}),()=>d(o,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount)}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Promise.resolve()),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({enter:[],leave:[]}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((o,i,a)=>{p.current.splice(0),t&&(t.chains.current[i]=t.chains.current[i].filter(([s])=>s!==o)),t==null||t.chains.current[i].push([o,new Promise(s=>{p.current.push(s)})]),t==null||t.chains.current[i].push([o,new Promise(s=>{Promise.all(C.current[i].map(([r,f])=>f)).then(()=>s())})]),i==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(i)):a(i)}),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((o,i,a)=>{Promise.all(C.current[i].splice(0).map(([s,r])=>r)).then(()=>{var s;(s=p.current.shift())==null||s()}).then(()=>a(i))});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:l,register:y,unregister:d,onStart:h,onStop:g,wait:c,chains:C}),[y,d,l,h,g,C,c])}let de=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,fe=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderFeatures.RenderStrategy;function Ae(e,t){var ee,te;let{transition:n=!0,beforeEnter:l,afterEnter:S,beforeLeave:R,afterLeave:d,enter:y,enterFrom:p,enterTo:c,entered:C,leave:h,leaveFrom:g,leaveTo:o,...i}=e,[a,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=ue(e),j=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(...f?[r,t,s]:t===null?[]:[t]),H=(ee=i.unmount)==null||ee?_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden,{show:u,appear:z,initial:K}=De(),[v,G]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(u?"visible":"hidden"),Q=He(),{register:A,unregister:I}=Q;(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>A(r),[A,r]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(H===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden&&r.current){if(u&&v!=="visible"){G("visible");return}return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(v,{["hidden"]:()=>I(r),["visible"]:()=>A(r)})}},[v,r,A,I,u,H]);let B=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__.useServerHandoffComplete)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(f&&B&&v==="visible"&&r.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[r,v,B,f]);let ce=K&&!z,Y=z&&u&&K,W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),L=Te(()=>{W.current||(G("hidden"),I(r))},Q),Z=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(k=>{W.current=!0;let F=k?"enter":"leave";L.onStart(r,F,_=>{_==="enter"?l==null||l():_==="leave"&&(R==null||R())})}),$=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(k=>{let F=k?"enter":"leave";W.current=!1,L.onStop(r,F,_=>{_==="enter"?S==null||S():_==="leave"&&(d==null||d())}),F==="leave"&&!U(L)&&(G("hidden"),I(r))});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{f&&n||(Z(u),$(u))},[u,f,n]);let pe=(()=>!(!n||!f||!B||ce))(),[,T]=(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_10__.useTransition)(pe,a,u,{start:Z,end:$}),Ce=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.compact)({ref:j,className:((te=(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_11__.classNames)(i.className,Y&&y,Y&&p,T.enter&&y,T.enter&&T.closed&&p,T.enter&&!T.closed&&c,T.leave&&h,T.leave&&!T.closed&&g,T.leave&&T.closed&&o,!T.transition&&u&&C))==null?void 0:te.trim())||void 0,...(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_10__.transitionDataAttributes)(T)}),N=0;v==="visible"&&(N|=_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Open),v==="hidden"&&(N|=_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Closed),T.enter&&(N|=_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Opening),T.leave&&(N|=_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Closing);let he=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:L},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.OpenClosedProvider,{value:N},he({ourProps:Ce,theirProps:i,defaultTag:de,features:fe,visible:v==="visible",name:"Transition.Child"})))}function Ie(e,t){let{show:n,appear:l=!1,unmount:S=!0,...R}=e,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),y=ue(e),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(...y?[d,t]:t===null?[]:[t]);(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__.useServerHandoffComplete)();let c=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.useOpenClosed)();if(n===void 0&&c!==null&&(n=(c&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.State.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[C,h]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n?"visible":"hidden"),g=Te(()=>{n||h("hidden")}),[o,i]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([n]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{o!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),i(!1))},[a,n]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:n,appear:l,initial:o}),[n,l,o]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{n?h("visible"):!U(g)&&d.current!==null&&h("hidden")},[n,g]);let r={unmount:S},f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(()=>{var u;o&&i(!1),(u=e.beforeEnter)==null||u.call(e)}),j=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(()=>{var u;o&&i(!1),(u=e.beforeLeave)==null||u.call(e)}),H=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(M.Provider,{value:g},react__WEBPACK_IMPORTED_MODULE_0__.createElement(w.Provider,{value:s},H({ourProps:{...r,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(me,{ref:p,...r,...R,beforeEnter:f,beforeLeave:j})},theirProps:{},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:fe,visible:C==="visible",name:"Transition"})))}function Le(e,t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(w)!==null,l=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_12__.useOpenClosed)()!==null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!n&&l?react__WEBPACK_IMPORTED_MODULE_0__.createElement(X,{ref:t,...e}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(me,{ref:t,...e}))}let X=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(Ie),me=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(Ae),Fe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(Le),ze=Object.assign(X,{Child:Fe,Root:X});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlags: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function c(u=0){let[t,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(u),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(e),[t]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a|e),[t]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>(t&e)===e,[t]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a&~e),[l]),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>l(a=>a^e),[l]);return{flags:t,setFlag:g,addFlag:s,hasFlag:m,removeFlag:n,toggleFlag:F}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let n=(e,t)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,t):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,t)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function s(){let r=typeof document=="undefined";return"useSyncExternalStore" in /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))?(o=>o.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))))(()=>()=>{},()=>!1,()=>!r):!1}function l(){let r=s(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{e!==!0&&n(!0)},[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),r?!1:e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transitionDataAttributes: () => (/* binding */ R),
/* harmony export */   useTransition: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_flags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var T,b;typeof process!="undefined"&&typeof globalThis!="undefined"&&typeof Element!="undefined"&&((T=process==null?void 0:process.env)==null?void 0:T["NODE_ENV"])==="test"&&typeof((b=Element==null?void 0:Element.prototype)==null?void 0:b.getAnimations)=="undefined"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var L=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Enter=2]="Enter",r[r.Leave=4]="Leave",r))(L||{});function R(t){let n={};for(let e in t)t[e]===!0&&(n[`data-${e}`]="");return n}function x(t,n,e,i){let[r,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),{hasFlag:s,addFlag:a,removeFlag:l}=(0,_use_flags_js__WEBPACK_IMPORTED_MODULE_1__.useFlags)(t&&r?3:0),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),E=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)();return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{var d;if(t){if(e&&o(!0),!n){e&&a(3);return}return(d=i==null?void 0:i.start)==null||d.call(i,e),C(n,{inFlight:u,prepare(){f.current?f.current=!1:f.current=u.current,u.current=!0,!f.current&&(e?(a(3),l(4)):(a(4),l(2)))},run(){f.current?e?(l(3),a(4)):(l(4),a(3)):e?l(1):a(1)},done(){var p;f.current&&typeof n.getAnimations=="function"&&n.getAnimations().length>0||(u.current=!1,l(7),e||o(!1),(p=i==null?void 0:i.end)==null||p.call(i,e))}})}},[t,e,n,E]),t?[r,{closed:s(1),enter:s(2),leave:s(4),transition:s(2)||s(4)}]:[e,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function C(t,{prepare:n,run:e,done:i,inFlight:r}){let o=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();return j(t,{prepare:n,inFlight:r}),o.nextFrame(()=>{e(),o.requestAnimationFrame(()=>{o.add(M(t,i))})}),o.dispose}function M(t,n){var o,s;let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_4__.disposables)();if(!t)return e.dispose;let i=!1;e.add(()=>{i=!0});let r=(s=(o=t.getAnimations)==null?void 0:o.call(t).filter(a=>a instanceof CSSTransition))!=null?s:[];return r.length===0?(n(),e.dispose):(Promise.allSettled(r.map(a=>a.finished)).then(()=>{i||n()}),e.dispose)}function j(t,{inFlight:n,prepare:e}){if(n!=null&&n.current){e();return}let i=t.style.transition;t.style.transition="none",e(),t.offsetHeight,t.style.transition=i}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ c),
/* harmony export */   ResetOpenClosedProvider: () => (/* binding */ s),
/* harmony export */   State: () => (/* binding */ i),
/* harmony export */   useOpenClosed: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var i=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(i||{});function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},t)}function s({children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:null},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ t)
/* harmony export */ });
function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.includes(e)||n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderFeatures: () => (/* binding */ O),
/* harmony export */   RenderStrategy: () => (/* binding */ A),
/* harmony export */   compact: () => (/* binding */ m),
/* harmony export */   forwardRefWithAs: () => (/* binding */ K),
/* harmony export */   mergeProps: () => (/* binding */ _),
/* harmony export */   useRender: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var O=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(O||{}),A=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(A||{});function L(){let n=U();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(r=>C({mergeRefs:n,...r}),[n])}function C({ourProps:n,theirProps:r,slot:e,defaultTag:a,features:s,visible:t=!0,name:l,mergeRefs:i}){i=i!=null?i:$;let o=P(r,n);if(t)return F(o,e,a,l,i);let y=s!=null?s:0;if(y&2){let{static:f=!1,...u}=o;if(f)return F(u,e,a,l,i)}if(y&1){let{unmount:f=!0,...u}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(f?0:1,{[0](){return null},[1](){return F({...u,hidden:!0,style:{display:"none"}},e,a,l,i)}})}return F(o,e,a,l,i)}function F(n,r={},e,a,s){let{as:t=e,children:l,refName:i="ref",...o}=h(n,["unmount","static"]),y=n.ref!==void 0?{[i]:n.ref}:{},f=typeof l=="function"?l(r):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(r)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let u={};if(r){let d=!1,p=[];for(let[c,T]of Object.entries(r))typeof T=="boolean"&&(d=!0),T===!0&&p.push(c.replace(/([A-Z])/g,g=>`-${g.toLowerCase()}`));if(d){u["data-headlessui-state"]=p.join(" ");for(let c of p)u[`data-${c}`]=""}}if(t===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(Object.keys(m(o)).length>0||Object.keys(m(u)).length>0))if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(f)||Array.isArray(f)&&f.length>1){if(Object.keys(m(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(m(o)).concat(Object.keys(m(u))).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}else{let d=f.props,p=d==null?void 0:d.className,c=typeof p=="function"?(...R)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p(...R),o.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p,o.className),T=c?{className:c}:{},g=P(f.props,m(h(o,["ref"])));for(let R in u)R in g&&delete u[R];return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(f,Object.assign({},g,u,y,{ref:s(H(f),y.ref)},T))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,Object.assign({},h(o,["ref"]),t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u),f)}function U(){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{for(let a of n.current)a!=null&&(typeof a=="function"?a(e):a.current=e)},[]);return(...e)=>{if(!e.every(a=>a==null))return n.current=e,r}}function $(...n){return n.every(r=>r==null)?void 0:r=>{for(let e of n)e!=null&&(typeof e=="function"?e(r):e.current=r)}}function P(...n){var a;if(n.length===0)return{};if(n.length===1)return n[0];let r={},e={};for(let s of n)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):r[t]=s[t];if(r.disabled||r["aria-disabled"])for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(e[s]=[t=>{var l;return(l=t==null?void 0:t.preventDefault)==null?void 0:l.call(t)}]);for(let s in e)Object.assign(r,{[s](t,...l){let i=e[s];for(let o of i){if((t instanceof Event||(t==null?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...l)}}});return r}function _(...n){var a;if(n.length===0)return{};if(n.length===1)return n[0];let r={},e={};for(let s of n)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):r[t]=s[t];for(let s in e)Object.assign(r,{[s](...t){let l=e[s];for(let i of l)i==null||i(...t)}});return r}function K(n){var r;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(n),{displayName:(r=n.displayName)!=null?r:n.name})}function m(n){let r=Object.assign({},n);for(let e in r)r[e]===void 0&&delete r[e];return r}function h(n,r=[]){let e=Object.assign({},n);for(let a of r)a in e&&delete e[a];return e}function H(n){return react__WEBPACK_IMPORTED_MODULE_0__.version.split(".")[0]>="19"?n.props.ref:n.ref}


/***/ }),

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

/***/ "./resources/js/Pages/Profile/Partials/UpdatePasswordForm.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Profile/Partials/UpdatePasswordForm.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdatePasswordForm)
/* harmony export */ });
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.tsx");
/* harmony import */ var _Components_InputLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/InputLabel */ "./resources/js/Components/InputLabel.tsx");
/* harmony import */ var _Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/PrimaryButton */ "./resources/js/Components/PrimaryButton.tsx");
/* harmony import */ var _Components_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/TextInput */ "./resources/js/Components/TextInput.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transition/transition.js");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function UpdatePasswordForm(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var passwordInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var currentPasswordInput = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_4__.useForm)({
      current_password: "",
      password: "",
      password_confirmation: ""
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    errors = _useForm.errors,
    put = _useForm.put,
    reset = _useForm.reset,
    processing = _useForm.processing,
    recentlySuccessful = _useForm.recentlySuccessful;
  var updatePassword = function updatePassword(e) {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: function onSuccess() {
        return reset();
      },
      onError: function onError(errors) {
        if (errors.password) {
          var _passwordInput$curren;
          reset("password", "password_confirmation");
          (_passwordInput$curren = passwordInput.current) === null || _passwordInput$curren === void 0 || _passwordInput$curren.focus();
        }
        if (errors.current_password) {
          var _currentPasswordInput;
          reset("current_password");
          (_currentPasswordInput = currentPasswordInput.current) === null || _currentPasswordInput === void 0 || _currentPasswordInput.focus();
        }
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "text-lg font-medium text-gray-900",
        children: "\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "mt-1 text-sm text-gray-600",
        children: "\u5B89\u5168\u6027\u3092\u4FDD\u3064\u305F\u3081\u3001\u9577\u304F\u3066\u30E9\u30F3\u30C0\u30E0\u306A\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
      onSubmit: updatePassword,
      className: "mt-6 space-y-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "current_password",
          value: "\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "current_password",
          ref: currentPasswordInput,
          value: data.current_password,
          onChange: function onChange(e) {
            return setData("current_password", e.target.value);
          },
          type: "password",
          className: "mt-1 block w-full",
          autoComplete: "current-password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.current_password,
          className: "mt-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "password",
          value: "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "password",
          ref: passwordInput,
          value: data.password,
          onChange: function onChange(e) {
            return setData("password", e.target.value);
          },
          type: "password",
          className: "mt-1 block w-full",
          autoComplete: "new-password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.password,
          className: "mt-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          htmlFor: "password_confirmation",
          value: "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u78BA\u8A8D\uFF09"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: "password_confirmation",
          value: data.password_confirmation,
          onChange: function onChange(e) {
            return setData("password_confirmation", e.target.value);
          },
          type: "password",
          className: "mt-1 block w-full",
          autoComplete: "new-password"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_0__["default"], {
          message: errors.password_confirmation,
          className: "mt-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          disabled: processing,
          children: "\u4FDD\u5B58"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Transition, {
          show: recentlySuccessful,
          enter: "transition ease-in-out",
          enterFrom: "opacity-0",
          leave: "transition ease-in-out",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-sm text-gray-600",
            children: "\u4FDD\u5B58\u3057\u307E\u3057\u305F"
          })
        })]
      })]
    })]
  });
}

/***/ })

}]);