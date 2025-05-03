"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_PostJob_tsx"],{

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ H),
/* harmony export */   useDescribedBy: () => (/* binding */ U),
/* harmony export */   useDescriptions: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);a.displayName="DescriptionContext";function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return r}function U(){var r,e;return(e=(r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a))==null?void 0:r.value)!=null?e:void 0}function w(){let[r,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(t){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e(s=>[...s,n]),()=>e(s=>{let o=s.slice(),p=o.indexOf(n);return p!==-1&&o.splice(p,1),o}))),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:t.slot,name:t.name,props:t.props,value:t.value}),[i,t.slot,t.name,t.props,t.value]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:l},t.children)},[e])]}let S="p";function C(r,e){let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),t=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__.useDisabled)(),{id:i=`headlessui-description-${d}`,...l}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(e);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>n.register(i),[i,n.register]);let o=t||!1,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...n.slot,disabled:o}),[n.slot,o]),D={ref:s,...n.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.useRender)()({ourProps:D,theirProps:l,slot:p,defaultTag:S,name:n.name||"Description"})}let _=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(C),H=Object.assign(_,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ yt),
/* harmony export */   DialogBackdrop: () => (/* binding */ Dt),
/* harmony export */   DialogDescription: () => (/* binding */ Pt),
/* harmony export */   DialogPanel: () => (/* binding */ je),
/* harmony export */   DialogTitle: () => (/* binding */ Ye)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_escape_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-escape.js */ "./node_modules/@headlessui/react/dist/hooks/use-escape.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-inert-others.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js");
/* harmony import */ var _hooks_use_is_touch_device_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-is-touch-device.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js");
/* harmony import */ var _hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-on-disappear.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-root-containers.js */ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js");
/* harmony import */ var _hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-scroll-lock.js */ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_close_provider_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../internal/close-provider.js */ "./node_modules/@headlessui/react/dist/internal/close-provider.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../focus-trap/focus-trap.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _portal_portal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
/* harmony import */ var _transition_transition_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../transition/transition.js */ "./node_modules/@headlessui/react/dist/components/transition/transition.js");
"use client";var Oe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Oe||{}),he=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(he||{});let Se={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},k=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);k.displayName="DialogContext";function O(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(k);if(t===null){let o=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,O),o}return t}function Ie(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,Se,e,t)}let V=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:l=`headlessui-dialog-${a}`,open:i,onClose:p,initialFocus:d,role:s="dialog",autoFocus:f=!0,__demoMode:u=!1,unmount:P=!1,...h}=t,R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);s=function(){return s==="dialog"||s==="alertdialog"?s:(R.current||(R.current=!0,console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let c=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.useOpenClosed)();i===void 0&&c!==null&&(i=(c&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(T,o),F=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(T),g=i?0:1,[b,q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ie,{titleId:null,descriptionId:null,panelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>p(!1)),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(r=>q({type:0,id:r})),D=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)()?g===0:!1,[z,Q]=(0,_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.useNestedPortals)(),Z={get current(){var r;return(r=b.panelRef.current)!=null?r:T.current}},v=(0,_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__.useMainTreeNode)(),{resolveContainers:I}=(0,_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__.useRootContainers)({mainTreeNode:v,portals:z,defaultContainers:[Z]}),B=c!==null?(c&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closing)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closing:!1;(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_10__.useInertOthers)(u||B?!1:D,{allowed:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var r,H;return[(H=(r=T.current)==null?void 0:r.closest("[data-headlessui-portal]"))!=null?H:null]}),disallowed:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var r;return[(r=v==null?void 0:v.closest("body > *:not(#headlessui-portal-root)"))!=null?r:null]})}),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__.useOutsideClick)(D,I,r=>{r.preventDefault(),m()}),(0,_hooks_use_escape_js__WEBPACK_IMPORTED_MODULE_12__.useEscape)(D,F==null?void 0:F.defaultView,r=>{r.preventDefault(),r.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),m()}),(0,_hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_13__.useScrollLock)(u||B?!1:D,F,I),(0,_hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_14__.useOnDisappear)(D,T,m);let[ee,te]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_15__.useDescriptions)(),oe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:g,close:m,setTitleId:w,unmount:P},b],[g,b,m,w,P]),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:g===0}),[g]),ne={ref:S,id:l,role:s,tabIndex:-1,"aria-modal":u?void 0:g===0?!0:void 0,"aria-labelledby":b.titleId,"aria-describedby":ee,unmount:P},re=!(0,_hooks_use_is_touch_device_js__WEBPACK_IMPORTED_MODULE_16__.useIsTouchDevice)(),y=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrapFeatures.None;D&&!u&&(y|=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrapFeatures.RestoreFocus,y|=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrapFeatures.TabLock,f&&(y|=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrapFeatures.AutoFocus),re&&(y|=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrapFeatures.InitialFocus));let le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.ResetOpenClosedProvider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.Portal,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(k.Provider,{value:oe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.PortalGroup,{target:T},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__.ForcePortalRoot,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(te,{slot:U},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Q,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_17__.FocusTrap,{initialFocus:d,initialFocusFallback:T,containers:I,features:y},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_close_provider_js__WEBPACK_IMPORTED_MODULE_19__.CloseProvider,{value:m},le({ourProps:ne,theirProps:h,slot:U,defaultTag:Me,features:Ge,visible:g===0,name:"Dialog"})))))))))))}),Me="div",Ge=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderFeatures.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderFeatures.Static;function ke(e,t){let{transition:o=!1,open:a,...l}=e,i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.useOpenClosed)(),p=e.hasOwnProperty("open")||i!==null,d=e.hasOwnProperty("onClose");if(!p&&!d)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!p)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!d)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!i&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(a!==void 0||o)&&!l.static?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__.MainTreeProvider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_transition_transition_js__WEBPACK_IMPORTED_MODULE_20__.Transition,{show:a,transition:o,unmount:l.unmount},react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{ref:t,...l}))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__.MainTreeProvider,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{ref:t,open:a,...l}))}let we="div";function Be(e,t){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:a=`headlessui-dialog-panel-${o}`,transition:l=!1,...i}=e,[{dialogState:p,unmount:d},s]=O("Dialog.Panel"),f=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t,s.panelRef),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0}),[p]),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(S=>{S.stopPropagation()}),h={ref:f,id:a,onClick:P},R=l?_transition_transition_js__WEBPACK_IMPORTED_MODULE_20__.TransitionChild:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,c=l?{unmount:d}:{},T=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,{...c},T({ourProps:h,theirProps:i,slot:u,defaultTag:we,name:"Dialog.Panel"}))}let Ue="div";function He(e,t){let{transition:o=!1,...a}=e,[{dialogState:l,unmount:i}]=O("Dialog.Backdrop"),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l===0}),[l]),d={ref:t,"aria-hidden":!0},s=o?_transition_transition_js__WEBPACK_IMPORTED_MODULE_20__.TransitionChild:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,f=o?{unmount:i}:{},u=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(s,{...f},u({ourProps:d,theirProps:a,slot:p,defaultTag:Ue,name:"Dialog.Backdrop"}))}let Ne="h2";function We(e,t){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:a=`headlessui-dialog-title-${o}`,...l}=e,[{dialogState:i,setTitleId:p}]=O("Dialog.Title"),d=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(p(a),()=>p(null)),[a,p]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i===0}),[i]),f={ref:d,id:a};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.useRender)()({ourProps:f,theirProps:l,slot:s,defaultTag:Ne,name:"Dialog.Title"})}let $e=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(ke),je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(Be),Dt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(He),Ye=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(We),Pt=_description_description_js__WEBPACK_IMPORTED_MODULE_15__.Description,yt=Object.assign($e,{Panel:je,Title:Ye,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_15__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusTrap: () => (/* binding */ ye),
/* harmony export */   FocusTrapFeatures: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/active-element-history.js */ "./node_modules/@headlessui/react/dist/utils/active-element-history.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function U(o){if(!o)return new Set;if(typeof o=="function")return new Set(o());let e=new Set;for(let t of o.current)t.current instanceof HTMLElement&&e.add(t.current);return e}let Z="div";var x=(n=>(n[n.None=0]="None",n[n.InitialFocus=1]="InitialFocus",n[n.TabLock=2]="TabLock",n[n.FocusLock=4]="FocusLock",n[n.RestoreFocus=8]="RestoreFocus",n[n.AutoFocus=16]="AutoFocus",n))(x||{});function $(o,e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),r=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__.useSyncRefs)(t,e),{initialFocus:s,initialFocusFallback:a,containers:n,features:u=15,...f}=o;(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)()||(u=0);let l=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(t);ee(u,{ownerDocument:l});let i=te(u,{ownerDocument:l,container:t,initialFocus:s,initialFocusFallback:a});re(u,{ownerDocument:l,container:t,containers:n,previousActiveElement:i});let R=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.useTabDirection)(),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(c=>{let m=t.current;if(!m)return;(G=>G())(()=>{(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(R.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First,{skipElements:[c.relatedTarget,a]})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Last,{skipElements:[c.relatedTarget,a]})}})})}),v=(0,_hooks_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_8__.useIsTopLayer)(!!(u&2),"focus-trap#tab-lock"),N=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)(),F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),k={ref:r,onKeyDown(c){c.key=="Tab"&&(F.current=!0,N.requestAnimationFrame(()=>{F.current=!1}))},onBlur(c){if(!(u&4))return;let m=U(n);t.current instanceof HTMLElement&&m.add(t.current);let d=c.relatedTarget;d instanceof HTMLElement&&d.dataset.headlessuiFocusGuard!=="true"&&(I(m,d)||(F.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(t.current,(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(R.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous})|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(c.target)))}},B=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,v&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.HiddenFeatures.Focusable}),B({ourProps:k,theirProps:f,defaultTag:Z,name:"FocusTrap"}),v&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:g,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.HiddenFeatures.Focusable}))}let D=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.forwardRefWithAs)($),ye=Object.assign(D,{features:x});function w(o=!0){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_12__.history.slice());return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(([t],[r])=>{r===!0&&t===!1&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_14__.microTask)(()=>{e.current.splice(0)}),r===!1&&t===!0&&(e.current=_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_12__.history.slice())},[o,_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_12__.history,e]),(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{var t;return(t=e.current.find(r=>r!=null&&r.isConnected))!=null?t:null})}function ee(o,{ownerDocument:e}){let t=!!(o&8),r=w(t);(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(r())},[t]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_15__.useOnUnmount)(()=>{t&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(r())})}function te(o,{ownerDocument:e,container:t,initialFocus:r,initialFocusFallback:s}){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_8__.useIsTopLayer)(!!(o&1),"focus-trap#initial-focus"),u=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_16__.useIsMounted)();return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_13__.useWatch)(()=>{if(o===0)return;if(!n){s!=null&&s.current&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(s.current);return}let f=t.current;f&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_14__.microTask)(()=>{if(!u.current)return;let l=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===l){a.current=l;return}}else if(f.contains(l)){a.current=l;return}if(r!=null&&r.current)(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(r.current);else{if(o&16){if((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.AutoFocus)!==_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error)return}else if((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(f,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)!==_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error)return;if(s!=null&&s.current&&((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(s.current),(e==null?void 0:e.activeElement)===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}a.current=e==null?void 0:e.activeElement})},[s,n,o]),a}function re(o,{ownerDocument:e,container:t,containers:r,previousActiveElement:s}){let a=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_16__.useIsMounted)(),n=!!(o&4);(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_17__.useEventListener)(e==null?void 0:e.defaultView,"focus",u=>{if(!n||!a.current)return;let f=U(r);t.current instanceof HTMLElement&&f.add(t.current);let l=s.current;if(!l)return;let i=u.target;i&&i instanceof HTMLElement?I(f,i)?(s.current=i,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(i)):(u.preventDefault(),u.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(l)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(s.current)},!0)}function I(o,e){for(let t of o)if(t.contains(e))return!0;return!1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ oe),
/* harmony export */   PortalGroup: () => (/* binding */ D),
/* harmony export */   useNestedPortals: () => (/* binding */ le)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function j(e){let l=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H),[r,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var i;if(!l&&o!==null)return(i=o.current)!=null?i:null;if(_utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let a=e.createElement("div");return a.setAttribute("id","headlessui-portal-root"),e.body.appendChild(a)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{l||o!==null&&u(o.current)},[o,u,l]),r}let M=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,I=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(function(l,o){let{ownerDocument:r=null,...u}=l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.optionalRef)(s=>{t.current=s}),o),i=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_6__.useOwnerDocument)(t),f=r!=null?r:i,p=j(f),[n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var s;return _utils_env_js__WEBPACK_IMPORTED_MODULE_3__.env.isServer?null:(s=f==null?void 0:f.createElement("div"))!=null?s:null}),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(g),b=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{!p||!n||p.contains(n)||(n.setAttribute("data-headlessui-portal",""),p.appendChild(n))},[p,n]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(n&&P)return P.register(n)},[P,n]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__.useOnUnmount)(()=>{var s;!p||!n||(n instanceof Node&&p.contains(n)&&p.removeChild(n),p.childNodes.length<=0&&((s=p.parentElement)==null||s.removeChild(p)))});let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.useRender)();return b?!p||!n?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(h({ourProps:{ref:a},theirProps:u,slot:{},defaultTag:M,name:"Portal"}),n):null});function J(e,l){let o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(l),{enabled:r=!0,ownerDocument:u,...t}=e,a=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.useRender)();return r?react__WEBPACK_IMPORTED_MODULE_0__.createElement(I,{...t,ownerDocument:u,ref:o}):a({ourProps:{ref:o},theirProps:t,slot:{},defaultTag:M,name:"Portal"})}let X=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function k(e,l){let{target:o,...r}=e,t={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(l)},a=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.useRender)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:o},a({ourProps:t,theirProps:r,defaultTag:X,name:"Popover.Group"}))}let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function le(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(g),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(t=>(l.current.push(t),e&&e.register(t),()=>r(t))),r=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(t=>{let a=l.current.indexOf(t);a!==-1&&l.current.splice(a,1),e&&e.unregister(t)}),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:o,unregister:r,portals:l}),[o,r,l]);return[l,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function({children:a}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(g.Provider,{value:u},a)},[u])]}let B=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(J),D=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_4__.forwardRefWithAs)(k),oe=Object.assign(B,{Group:D});


/***/ }),

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

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustScrollbarPadding: () => (/* binding */ d)
/* harmony export */ });
function d(){let r;return{before({doc:e}){var l;let o=e.documentElement,t=(l=e.defaultView)!=null?l:window;r=Math.max(0,t.innerWidth-o.clientWidth)},after({doc:e,d:o}){let t=e.documentElement,l=Math.max(0,t.clientWidth-t.offsetWidth),n=Math.max(0,r-l);o.style(t,"paddingRight",`${n}px`)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleIOSLocking: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
function d(){return (0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_0__.isIOS)()?{before({doc:r,d:n,meta:c}){function o(a){return c.containers.flatMap(l=>l()).some(l=>l.contains(a))}n.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();t.style(r.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>t.dispose()))}let a=(s=window.scrollY)!=null?s:window.pageYOffset,l=null;n.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(l=i)}catch{}},!0),n.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;n.style(e,"overscrollBehavior","contain")}else n.style(t.target,"touchAction","none")}),n.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement){if(t.target.tagName==="INPUT")return;if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault()}else t.preventDefault()}},{passive:!1}),n.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overflows: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust-scrollbar-padding.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js");
/* harmony import */ var _handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-ios-locking.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js");
/* harmony import */ var _prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-scroll.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js");
function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a=(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_0__.createStore)(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[(0,_handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__.handleIOSLocking)(),(0,_adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__.adjustScrollbarPadding)(),(0,_prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__.preventScroll)()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});a.subscribe(()=>{let e=a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a.dispatch("TEARDOWN",t)}});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventScroll: () => (/* binding */ r)
/* harmony export */ });
function r(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentOverflowLockedEffect: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overflow-store.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js");
function a(r,e,n=()=>({containers:[]})){let f=(0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__.useStore)(_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{if(!(!e||!r))return _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("PUSH",e,n),()=>_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("POP",e,n)},[r,e]),i}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(t,e,o,n){let u=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(o);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!t)return;function r(m){u.current(m)}return document.addEventListener(e,r,n),()=>document.removeEventListener(e,r,n)},[t,e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-escape.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-escape.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEscape: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _use_event_listener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
function a(o,r=typeof document!="undefined"?document.defaultView:null,t){let n=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__.useIsTopLayer)(o,"escape");(0,_use_event_listener_js__WEBPACK_IMPORTED_MODULE_1__.useEventListener)(r,"keydown",e=>{n&&(e.defaultPrevented||e.key===_components_keyboard_js__WEBPACK_IMPORTED_MODULE_2__.Keys.Escape&&t(e))})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListener: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInertOthers: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let f=new Map,u=new Map;function h(t){var e;let r=(e=u.get(t))!=null?e:0;return u.set(t,r+1),r!==0?()=>m(t):(f.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),t.setAttribute("aria-hidden","true"),t.inert=!0,()=>m(t))}function m(t){var i;let r=(i=u.get(t))!=null?i:1;if(r===1?u.delete(t):u.set(t,r-1),r!==1)return;let e=f.get(t);e&&(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert,f.delete(t))}function y(t,{allowed:r,disallowed:e}={}){let i=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__.useIsTopLayer)(t,"inert-others");(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{var d,c;if(!i)return;let a=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)();for(let n of(d=e==null?void 0:e())!=null?d:[])n&&a.add(h(n));let s=(c=r==null?void 0:r())!=null?c:[];for(let n of s){if(!n)continue;let l=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_3__.getOwnerDocument)(n);if(!l)continue;let o=n.parentElement;for(;o&&o!==l.body;){for(let p of o.children)s.some(E=>p.contains(E))||a.add(h(p));o=o.parentElement}}return a.dispose},[i,r,e])}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsTopLayer: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_default_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/default-map.js */ "./node_modules/@headlessui/react/dist/utils/default-map.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
let p=new _utils_default_map_js__WEBPACK_IMPORTED_MODULE_1__.DefaultMap(()=>(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_2__.createStore)(()=>[],{ADD(r){return this.includes(r)?this:[...this,r]},REMOVE(r){let e=this.indexOf(r);if(e===-1)return this;let t=this.slice();return t.splice(e,1),t}}));function x(r,e){let t=p.get(e),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),h=(0,_use_store_js__WEBPACK_IMPORTED_MODULE_3__.useStore)(t);if((0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>{if(r)return t.dispatch("ADD",i),()=>t.dispatch("REMOVE",i)},[t,r]),!r)return!1;let s=h.indexOf(i),o=h.length;return s===-1&&(s=o,o+=1),s===o-1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsTouchDevice: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){var t;let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[o,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((t=e==null?void 0:e.matches)!=null?t:!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e)return;function n(r){c(r.matches)}return e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[e]),o}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnDisappear: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function m(s,n,l){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t=>{let e=t.getBoundingClientRect();e.x===0&&e.y===0&&e.width===0&&e.height===0&&l()});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return;let t=n===null?null:n instanceof HTMLElement?n:n.current;if(!t)return;let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)();if(typeof ResizeObserver!="undefined"){let r=new ResizeObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}if(typeof IntersectionObserver!="undefined"){let r=new IntersectionObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}return()=>e.dispose()},[n,i,s])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnUnmount: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function c(t){let r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(t),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!1,()=>{e.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__.microTask)(()=>{e.current&&r()})}),[r])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
const E=30;function R(p,f,C){let u=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_1__.useIsTopLayer)(p,"outside-click"),m=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(C),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e,n){if(e.defaultPrevented)return;let r=n(e);if(r===null||!r.getRootNode().contains(r)||!r.isConnected)return;let h=function l(o){return typeof o=="function"?l(o()):Array.isArray(o)||o instanceof Set?o:[o]}(f);for(let l of h)if(l!==null&&(l.contains(r)||e.composed&&e.composedPath().includes(l)))return;return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__.isFocusableElement)(r,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_3__.FocusableMode.Loose)&&r.tabIndex!==-1&&e.preventDefault(),m.current(e,r)},[m,f]),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"pointerdown",t=>{var e,n;i.current=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"mousedown",t=>{var e,n;i.current=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"click",t=>{(0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_5__.isMobile)()||i.current&&(s(t,()=>i.current),i.current=null)},!0);let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({x:0,y:0});(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"touchstart",t=>{a.current.x=t.touches[0].clientX,a.current.y=t.touches[0].clientY},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_4__.useDocumentEvent)(u,"touchend",t=>{let e={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY};if(!(Math.abs(e.x-a.current.x)>=E||Math.abs(e.y-a.current.y)>=E))return s(t,()=>t.target instanceof HTMLElement?t.target:null)},!0),(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_6__.useWindowEvent)(u,"blur",t=>s(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTreeProvider: () => (/* binding */ O),
/* harmony export */   useMainTreeNode: () => (/* binding */ b),
/* harmony export */   useRootContainers: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _use_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
function R({defaultContainers:l=[],portals:n,mainTreeNode:o}={}){let r=(0,_use_owner_js__WEBPACK_IMPORTED_MODULE_1__.useOwnerDocument)(o),u=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(()=>{var i,c;let t=[];for(let e of l)e!==null&&(e instanceof HTMLElement?t.push(e):"current"in e&&e.current instanceof HTMLElement&&t.push(e.current));if(n!=null&&n.current)for(let e of n.current)t.push(e);for(let e of(i=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(o&&(e.contains(o)||e.contains((c=o==null?void 0:o.getRootNode())==null?void 0:c.host))||t.some(m=>e.contains(m))||t.push(e));return t});return{resolveContainers:u,contains:(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(t=>u().some(i=>i.contains(t)))}}let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function O({children:l,node:n}){let[o,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),u=b(n!=null?n:o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:u},l,u===null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.HiddenFeatures.Hidden,ref:t=>{var i,c;if(t){for(let e of(c=(i=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_4__.getOwnerDocument)(t))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?c:[])if(e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e!=null&&e.contains(t)){r(e);break}}}}))}function b(l=null){var n;return(n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a))!=null?n:l}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScrollLock: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-overflow/use-document-overflow.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js");
/* harmony import */ var _use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-is-top-layer.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js");
function f(e,c,n=()=>[document.body]){let r=(0,_use_is_top_layer_js__WEBPACK_IMPORTED_MODULE_0__.useIsTopLayer)(e,"scroll-lock");(0,_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__.useDocumentOverflowLockedEffect)(r,c,t=>{var o;return{containers:[...(o=t.containers)!=null?o:[],n]}})}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-store.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-store.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function o(t){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot)}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Direction: () => (/* binding */ a),
/* harmony export */   useTabDirection: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var a=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(a||{});function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)(!0,"keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}


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

/***/ "./node_modules/@headlessui/react/dist/hooks/use-watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-watch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWatch: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[a,l]of t.entries())if(e.current[a]!==l){let n=r(t,o);return e.current=t,n}},[r,...t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(t,e,o,n){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(o);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!t)return;function r(d){i.current(d)}return window.addEventListener(e,r,n),()=>window.removeEventListener(e,r,n)},[t,e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/close-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/close-provider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseProvider: () => (/* binding */ C),
/* harmony export */   useClose: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
"use client";let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function C({value:t,children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:t},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/disabled.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/disabled.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisabledProvider: () => (/* binding */ l),
/* harmony export */   useDisabled: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l({value:t,children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:t},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hidden: () => (/* binding */ f),
/* harmony export */   HiddenFeatures: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="span";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function l(t,r){var n;let{features:d=1,...e}=t,o={ref:r,"aria-hidden":(d&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,hidden:(d&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(d&4)===4&&(d&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.useRender)()({ourProps:o,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let f=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(l);


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

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcePortalRoot: () => (/* binding */ l),
/* harmony export */   usePortalRoot: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o.force},o.children)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/active-element-history.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/active-element-history.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   history: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _document_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-ready.js */ "./node_modules/@headlessui/react/dist/utils/document-ready.js");
/* harmony import */ var _focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
let r=[];(0,_document_ready_js__WEBPACK_IMPORTED_MODULE_0__.onDocumentReady)(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||r[0]===t.target)return;let n=t.target;n=n.closest(_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusableSelector),r.unshift(n!=null?n:t.target),r=r.filter(o=>o!=null&&o.isConnected),r.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});


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

/***/ "./node_modules/@headlessui/react/dist/utils/default-map.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/default-map.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMap: () => (/* binding */ a)
/* harmony export */ });
class a extends Map{constructor(t){super();this.factory=t}get(t){let e=super.get(t);return e===void 0&&(e=this.factory(t),this.set(t,e)),e}}


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

/***/ "./node_modules/@headlessui/react/dist/utils/document-ready.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/document-ready.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDocumentReady: () => (/* binding */ t)
/* harmony export */ });
function t(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}


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

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ F),
/* harmony export */   FocusResult: () => (/* binding */ T),
/* harmony export */   FocusableMode: () => (/* binding */ h),
/* harmony export */   focusElement: () => (/* binding */ I),
/* harmony export */   focusFrom: () => (/* binding */ j),
/* harmony export */   focusIn: () => (/* binding */ P),
/* harmony export */   focusableSelector: () => (/* binding */ f),
/* harmony export */   getAutoFocusableElements: () => (/* binding */ S),
/* harmony export */   getFocusableElements: () => (/* binding */ b),
/* harmony export */   isFocusableElement: () => (/* binding */ A),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ G),
/* harmony export */   sortByDomNode: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),p=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n[n.AutoFocus=64]="AutoFocus",n))(F||{}),T=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(T||{}),y=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(y||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(h||{});function A(e,r=0){var t;return e===((t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:t.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r,{[0](){return e.matches(f)},[1](){let u=e;for(;u!==null;){if(u.matches(f))return!0;u=u.parentElement}return!1}})}function G(e){let r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{r&&!A(r.activeElement,0)&&I(e)})}var H=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(H||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function I(e){e==null||e.focus({preventScroll:!0})}let w=["textarea","input"].join(",");function O(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,w))!=null?t:!1}function _(e,r=t=>t){return e.slice().sort((t,u)=>{let o=r(t),c=r(u);if(o===null||c===null)return 0;let l=o.compareDocumentPosition(c);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j(e,r){return P(b(),r,{relativeTo:e})}function P(e,r,{sorted:t=!0,relativeTo:u=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?t?_(e):e:r&64?S(e):b(e);o.length>0&&l.length>1&&(l=l.filter(s=>!o.some(a=>a!=null&&"current"in a?(a==null?void 0:a.current)===s:a===s))),u=u!=null?u:c.activeElement;let n=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,l.indexOf(u))-1;if(r&4)return Math.max(0,l.indexOf(u))+1;if(r&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),M=r&32?{preventScroll:!0}:{},m=0,d=l.length,i;do{if(m>=d||m+d<=0)return 0;let s=x+m;if(r&16)s=(s+d)%d;else{if(s<0)return 3;if(s>=d)return 1}i=l[s],i==null||i.focus(M),m+=n}while(i!==c.activeElement);return r&6&&O(i)&&i.select(),2}


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

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function o(n){var e,r;return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:n?"ownerDocument"in n?n.ownerDocument:"current"in n?(r=(e=n.current)==null?void 0:e.ownerDocument)!=null?r:document:null:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/platform.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAndroid: () => (/* binding */ i),
/* harmony export */   isIOS: () => (/* binding */ t),
/* harmony export */   isMobile: () => (/* binding */ n)
/* harmony export */ });
function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return t()||i()}


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

/***/ "./node_modules/@headlessui/react/dist/utils/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/store.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ a)
/* harmony export */ });
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}


/***/ }),

/***/ "./node_modules/ziggy-js/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ziggy-js/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZiggyVue: () => (/* binding */ o),
/* harmony export */   route: () => (/* binding */ s),
/* harmony export */   useRoute: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/ziggy-js/node_modules/qs/lib/index.js");
function e(){return e=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)({}).hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},e.apply(null,arguments)}class i{constructor(t,r,e){var i,n;this.name=t,this.definition=r,this.bindings=null!=(i=r.bindings)?i:{},this.wheres=null!=(n=r.wheres)?n:{},this.config=e}get template(){const t=`${this.origin}/${this.definition.uri}`.replace(/\/+$/,"");return""===t?"/":t}get origin(){return this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?`:${this.config.port}`:""}`:this.config.url:""}get parameterSegments(){var t,r;return null!=(t=null==(r=this.template.match(/{[^}?]+\??}/g))?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))?t:[]}matchesUrl(r){var e;if(!this.definition.methods.includes("GET"))return!1;const i=this.template.replace(/[.*+$()[\]]/g,"\\$&").replace(/(\/?){([^}?]*)(\??)}/g,(t,r,e,i)=>{var n;const s=`(?<${e}>${(null==(n=this.wheres[e])?void 0:n.replace(/(^\^)|(\$$)/g,""))||"[^/?]+"})`;return i?`(${r}${s})?`:`${r}${s}`}).replace(/^\w+:\/\//,""),[n,s]=r.replace(/^\w+:\/\//,"").split("?"),o=null!=(e=new RegExp(`^${i}/?$`).exec(n))?e:new RegExp(`^${i}/?$`).exec(decodeURI(n));if(o){for(const t in o.groups)o.groups[t]="string"==typeof o.groups[t]?decodeURIComponent(o.groups[t]):o.groups[t];return{params:o.groups,query:(0,qs__WEBPACK_IMPORTED_MODULE_0__.parse)(s)}}return!1}compile(t){return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,(r,e,i)=>{var n,s;if(!i&&[null,void 0].includes(t[e]))throw new Error(`Ziggy error: '${e}' parameter is required for route '${this.name}'.`);if(this.wheres[e]&&!new RegExp(`^${i?`(${this.wheres[e]})?`:this.wheres[e]}$`).test(null!=(s=t[e])?s:""))throw new Error(`Ziggy error: '${e}' parameter '${t[e]}' does not match required format '${this.wheres[e]}' for route '${this.name}'.`);return encodeURI(null!=(n=t[e])?n:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.config.absolute?/(\.[^/]+?)(\/\/)/:/(^)(\/\/)/,"$1/").replace(/\/+$/,""):this.template}}class n extends String{constructor(t,r,n=!0,s){if(super(),this.t=null!=s?s:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,this.t=e({},this.t,{absolute:n}),t){if(!this.t.routes[t])throw new Error(`Ziggy error: route '${t}' is not in the route list.`);this.i=new i(t,this.t.routes[t],this.t),this.o=this.u(r)}}toString(){const t=Object.keys(this.o).filter(t=>!this.i.parameterSegments.some(({name:r})=>r===t)).filter(t=>"_query"!==t).reduce((t,r)=>e({},t,{[r]:this.o[r]}),{});return this.i.compile(this.o)+(0,qs__WEBPACK_IMPORTED_MODULE_0__.stringify)(e({},t,this.o._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:(t,r)=>"boolean"==typeof t?Number(t):r(t)})}h(t){t?this.t.absolute&&t.startsWith("/")&&(t=this.l().host+t):t=this.m();let r={};const[n,s]=Object.entries(this.t.routes).find(([e,n])=>r=new i(e,n,this.t).matchesUrl(t))||[void 0,void 0];return e({name:n},r,{route:s})}m(){const{host:t,pathname:r,search:e}=this.l();return(this.t.absolute?t+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+e}current(t,r){const{name:n,params:s,query:o,route:u}=this.h();if(!t)return n;const h=new RegExp(`^${t.replace(/\./g,"\\.").replace(/\*/g,".*")}$`).test(n);if([null,void 0].includes(r)||!h)return h;const a=new i(n,u,this.t);r=this.u(r,a);const l=e({},s,o);if(Object.values(r).every(t=>!t)&&!Object.values(l).some(t=>void 0!==t))return!0;const c=(t,r)=>Object.entries(t).every(([t,e])=>Array.isArray(e)&&Array.isArray(r[t])?e.every(e=>r[t].includes(e)):"object"==typeof e&&"object"==typeof r[t]&&null!==e&&null!==r[t]?c(e,r[t]):r[t]==e);return c(r,l)}l(){var t,r,e,i,n,s;const{host:o="",pathname:u="",search:h=""}="undefined"!=typeof window?window.location:{};return{host:null!=(t=null==(r=this.t.location)?void 0:r.host)?t:o,pathname:null!=(e=null==(i=this.t.location)?void 0:i.pathname)?e:u,search:null!=(n=null==(s=this.t.location)?void 0:s.search)?n:h}}get params(){const{params:t,query:r}=this.h();return e({},t,r)}get routeParams(){return this.h().params}get queryParams(){return this.h().query}has(t){return this.t.routes.hasOwnProperty(t)}u(t={},r=this.i){null!=t||(t={}),t=["string","number"].includes(typeof t)?[t]:t;const i=r.parameterSegments.filter(({name:t})=>!this.t.defaults[t]);return Array.isArray(t)?t=t.reduce((t,r,n)=>e({},t,i[n]?{[i[n].name]:r}:"object"==typeof r?r:{[r]:""}),{}):1!==i.length||t[i[0].name]||!t.hasOwnProperty(Object.values(r.bindings)[0])&&!t.hasOwnProperty("id")||(t={[i[0].name]:t}),e({},this.$(r),this.p(t,r))}$(t){return t.parameterSegments.filter(({name:t})=>this.t.defaults[t]).reduce((t,{name:r},i)=>e({},t,{[r]:this.t.defaults[r]}),{})}p(t,{bindings:r,parameterSegments:i}){return Object.entries(t).reduce((t,[n,s])=>{if(!s||"object"!=typeof s||Array.isArray(s)||!i.some(({name:t})=>t===n))return e({},t,{[n]:s});if(!s.hasOwnProperty(r[n])){if(!s.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${n}' parameter is missing route model binding key '${r[n]}'.`);r[n]="id"}return e({},t,{[n]:s[r[n]]})},{})}valueOf(){return this.toString()}}function s(t,r,e,i){const s=new n(t,r,e,i);return t?s.toString():s}const o={install(t,r){const e=(t,e,i,n=r)=>s(t,e,i,n);parseInt(t.version)>2?(t.config.globalProperties.route=e,t.provide("route",e)):t.mixin({methods:{route:e}})}};function u(t){if(!t&&!globalThis.Ziggy&&"undefined"==typeof Ziggy)throw new Error("Ziggy error: missing configuration. Ensure that a `Ziggy` variable is defined globally or pass a config object into the useRoute hook.");return(r,e,i,n=t)=>s(r,e,i,n)}


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js":
/*!**************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/formats.js ***!
  \**************************************************************/
/***/ ((module) => {



var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/ziggy-js/node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/ziggy-js/node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/parse.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var utils = __webpack_require__(/*! ./utils */ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/stringify.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var utils = __webpack_require__(/*! ./utils */ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/utils.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


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

/***/ "./resources/js/Components/Modal.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Components/Modal.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transition/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function Modal(_ref) {
  var children = _ref.children,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? '2xl' : _ref$maxWidth,
    _ref$closeable = _ref.closeable,
    closeable = _ref$closeable === void 0 ? true : _ref$closeable,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  var close = function close() {
    if (closeable) {
      onClose();
    }
  };
  var maxWidthClass = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    '2xl': 'sm:max-w-2xl'
  }[maxWidth];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
    show: show,
    leave: "duration-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
      as: "div",
      id: "modal",
      className: "fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",
      onClose: close,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionChild, {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "absolute inset-0 bg-gray-500/75"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionChild, {
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo: "opacity-100 translate-y-0 sm:scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.DialogPanel, {
          className: "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ".concat(maxWidthClass),
          children: children
        })
      })]
    })
  });
}

/***/ }),

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
    children = _ref.children,
    _ref$showFooter = _ref.showFooter,
    showFooter = _ref$showFooter === void 0 ? true : _ref$showFooter;
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
                  children: [user !== null && user !== void 0 && user.name && user.name.length > 10 ? "".concat(user.name.substring(0, 10), "...") : (user === null || user === void 0 ? void 0 : user.name) || "ユーザー", "\u3055\u3093"]
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
              children: [user !== null && user !== void 0 && user.name && user.name.length > 10 ? "".concat(user.name.substring(0, 10), "...") : (user === null || user === void 0 ? void 0 : user.name) || "ユーザー", "\u3055\u3093"]
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
    }), showFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("footer", {
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

/***/ "./resources/js/Pages/PostJob.tsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/PostJob.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostJob)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "./node_modules/@inertiajs/react/dist/index.esm.js");
/* harmony import */ var _Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/AuthenticatedLayout */ "./resources/js/Layouts/AuthenticatedLayout.tsx");
/* harmony import */ var _Components_InputError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/InputError */ "./resources/js/Components/InputError.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Modal */ "./resources/js/Components/Modal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








// 文字数表示コンポーネント

function DescriptionCount(_ref) {
  var current = _ref.current,
    max = _ref.max;
  // 残り文字数に応じた色を設定
  var getCountColor = function getCountColor() {
    if (current > max) return "#dc3545"; // 赤（エラー）
    if (current > max * 0.9) return "#ffc107"; // 黄色（警告）
    return "#444"; // デフォルト色
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
    className: "p-post-job__character-count",
    style: {
      color: getCountColor()
    },
    children: [current, " / ", max, "\u6587\u5B57"]
  });
}
function PostJob(_ref2) {
  var auth = _ref2.auth;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    customSkill = _useState2[0],
    setCustomSkill = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    customPreferredSkill = _useState4[0],
    setCustomPreferredSkill = _useState4[1];
  // 表示用の実際の金額を保持する状態
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    displayBudgetMin = _useState6[0],
    setDisplayBudgetMin = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    displayBudgetMax = _useState8[0],
    setDisplayBudgetMax = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    submitting = _useState10[0],
    setSubmitting = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showConfirmModal = _useState12[0],
    setShowConfirmModal = _useState12[1];
  // バリデーションエラーの状態
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    validationErrors = _useState14[0],
    setValidationErrors = _useState14[1];
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      title: "",
      type: "one_time",
      description: "",
      budget_min: "",
      budget_max: "",
      category: "",
      skills: [],
      preferred_skills: [],
      location: "リモート（在宅勤務）"
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    processing = _useForm.processing,
    errors = _useForm.errors;

  // 予算入力時に実際の表示金額を更新
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    updateDisplayBudget(data.budget_min, setDisplayBudgetMin);
    updateDisplayBudget(data.budget_max, setDisplayBudgetMax);
  }, [data.budget_min, data.budget_max]);

  // カテゴリーの選択肢
  var categoryOptions = ["ウェブ開発", "モバイルアプリ開発", "デザイン", "サーバー/インフラ", "AI/機械学習", "データ分析", "ECサイト", "API開発", "WordPress開発", "エンジニアに相談", "その他"];

  // スキルの選択肢
  var skillOptions = ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Next.js", "PHP", "Laravel", "Ruby", "Ruby on Rails", "Python", "Django", "Java", "C#", "Swift", "Kotlin", "Flutter", "React Native", "AWS", "Docker", "Kubernetes", "UI/UXデザイン", "Figma", "Photoshop", "Illustrator", "WordPress", "データベース設計", "SQL", "NoSQL"];
  var addSkill = function addSkill() {
    // 15文字以上の場合は追加しない
    if (customSkill && customSkill.length <= 15 && !data.skills.includes(customSkill)) {
      setData("skills", [].concat(_toConsumableArray(data.skills), [customSkill]));
      setCustomSkill("");
    }
  };
  var removeSkill = function removeSkill(skillToRemove) {
    setData("skills", data.skills.filter(function (skill) {
      return skill !== skillToRemove;
    }));
  };
  var addPreferredSkill = function addPreferredSkill() {
    // 15文字以上の場合は追加しない
    if (customPreferredSkill && customPreferredSkill.length <= 15 && !data.preferred_skills.includes(customPreferredSkill)) {
      setData("preferred_skills", [].concat(_toConsumableArray(data.preferred_skills), [customPreferredSkill]));
      setCustomPreferredSkill("");
    }
  };
  var removePreferredSkill = function removePreferredSkill(skillToRemove) {
    setData("preferred_skills", data.preferred_skills.filter(function (skill) {
      return skill !== skillToRemove;
    }));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var isValid, errorFields, _i, _errorFields, field, element;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            // フォームバリデーションを実行
            isValid = validateForm(); // バリデーションエラーがある場合は送信を中止し、フォーカスを最初のエラーフィールドに移動
            if (isValid) {
              _context.next = 18;
              break;
            }
            // エラーのある最初の要素を特定
            errorFields = ["title", "category", "description"];
            if (data.type === "one_time") {
              errorFields.push("budget_min", "budget_max");
            }

            // 最初のエラーフィールドを探して、そこにフォーカスする
            _i = 0, _errorFields = errorFields;
          case 6:
            if (!(_i < _errorFields.length)) {
              _context.next = 17;
              break;
            }
            field = _errorFields[_i];
            if (!validationErrors[field]) {
              _context.next = 14;
              break;
            }
            element = document.getElementById(field);
            if (!element) {
              _context.next = 14;
              break;
            }
            element.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
            element.focus();
            return _context.abrupt("break", 17);
          case 14:
            _i++;
            _context.next = 6;
            break;
          case 17:
            return _context.abrupt("return");
          case 18:
            // バリデーションが通った場合は確認モーダルを表示
            setShowConfirmModal(true);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  // 実際の送信処理
  var submitForm = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _document$querySelect, submissionData, csrfToken, response, firstErrorField, element;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setSubmitting(true);
            _context2.prev = 1;
            // 送信用のデータを準備
            submissionData = _objectSpread({}, data); // 単発案件の場合のみ、送信前に金額を千円単位から円単位に変換
            if (data.type === "one_time") {
              if (data.budget_min) {
                submissionData.budget_min = String(parseInt(data.budget_min) * 1000);
              }
              if (data.budget_max) {
                submissionData.budget_max = String(parseInt(data.budget_max) * 1000);
              }
            }

            // CSRFトークンを取得
            csrfToken = (_document$querySelect = document.querySelector('meta[name="csrf-token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute("content"); // 直接axiosを使って送信
            _context2.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_7__["default"].post((0,ziggy_js__WEBPACK_IMPORTED_MODULE_4__.route)("job-listings.store"), submissionData, {
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken
              }
            });
          case 7:
            response = _context2.sent;
            // 成功したら適切なページに遷移
            if (response.data.url) {
              window.location.href = response.data.url;
            } else {
              window.location.href = (0,ziggy_js__WEBPACK_IMPORTED_MODULE_4__.route)("job-listings.index");
            }
            _context2.next = 17;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            console.error("送信エラー:", _context2.t0);

            // サーバーからのバリデーションエラーがある場合は表示
            if (_context2.t0.response && _context2.t0.response.data && _context2.t0.response.data.errors) {
              setValidationErrors(_context2.t0.response.data.errors);

              // エラーのある最初のフィールドにスクロール
              firstErrorField = Object.keys(_context2.t0.response.data.errors)[0];
              element = document.getElementById(firstErrorField);
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "center"
                });
                element.focus();
              }
            }
            setSubmitting(false);
            setShowConfirmModal(false);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 11]]);
    }));
    return function submitForm() {
      return _ref4.apply(this, arguments);
    };
  }();

  // 入力された千円単位の金額を実際の金額に変換して表示する関数
  var updateDisplayBudget = function updateDisplayBudget(value, setter) {
    if (!value) {
      setter("");
      return;
    }
    try {
      // 数値に変換して千円単位を円単位に変換
      var amount = parseInt(value) * 1000;
      // 金額をカンマ区切りで表示
      setter(amount.toLocaleString() + "円");
    } catch (e) {
      setter("");
    }
  };

  // フォームバリデーション関数
  var validateForm = function validateForm() {
    var newErrors = {};

    // タイトルのバリデーション
    if (!data.title.trim()) {
      newErrors.title = "タイトルは必須です";
    } else if (data.title.length > 50) {
      newErrors.title = "タイトルは50文字以内で入力してください";
    }

    // 予算のバリデーション（単発案件の場合）
    if (data.type === "one_time") {
      var minBudget = data.budget_min ? parseInt(data.budget_min) : 0;
      var maxBudget = data.budget_max ? parseInt(data.budget_max) : 0;
      if (!data.budget_min && !data.budget_max) {
        newErrors.budget_min = "最小・最大予算を設定してください";
      } else if (minBudget > 0 && maxBudget > 0 && minBudget > maxBudget) {
        newErrors.budget_max = "最大予算は最小予算以上に設定してください";
      }

      // 予算の上限をチェック
      if (minBudget > 50000) {
        newErrors.budget_min = "最小予算は5,000万円（50,000千円）以下に設定してください";
      }
      if (maxBudget > 50000) {
        newErrors.budget_max = "最大予算は5,000万円（50,000千円）以下に設定してください";
      }
    }

    // カテゴリーのバリデーション
    if (!data.category) {
      newErrors.category = "カテゴリーを選択してください";
    }

    // 説明のバリデーション
    if (!data.description.trim()) {
      newErrors.description = "案件の説明は必須です";
    } else if (data.description.length > 3000) {
      newErrors.description = "案件の説明は3000文字以内で入力してください";
    }
    setValidationErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 予算入力のリアルタイムバリデーション
  var validateBudgetInput = function validateBudgetInput(value, field) {
    if (!value) return;
    var budget = parseInt(value);
    var otherField = field === "budget_min" ? "budget_max" : "budget_min";
    var otherBudget = data[otherField] ? parseInt(data[otherField]) : 0;

    // 新しいエラーオブジェクトを作成
    var newErrors = _objectSpread({}, validationErrors);

    // 上限チェック
    if (budget > 50000) {
      newErrors[field] = "予算は5,000万円（50,000千円）以下に設定してください";
    } else {
      delete newErrors[field];

      // 最小値と最大値の関係性チェック（両方の値が入力されている場合のみ）
      if (field === "budget_max" && budget > 0 && otherBudget > 0 && budget < otherBudget) {
        newErrors[field] = "最大予算は最小予算以上に設定してください";
      } else if (field === "budget_min" && budget > 0 && otherBudget > 0 && budget > otherBudget) {
        newErrors[otherField] = "最大予算は最小予算以上に設定してください";
      } else {
        delete newErrors[otherField];
      }
    }
    setValidationErrors(newErrors);
  };

  // タイトル入力のリアルタイムバリデーション
  var validateTitleInput = function validateTitleInput(value) {
    // 新しいエラーオブジェクトを作成
    var newErrors = _objectSpread({}, validationErrors);
    if (!value.trim()) {
      newErrors.title = "タイトルは必須です";
    } else if (value.length > 50) {
      newErrors.title = "タイトルは50文字以内で入力してください";
    } else {
      delete newErrors.title;
    }
    setValidationErrors(newErrors);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Layouts_AuthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "p-post-job__header-title",
      children: "\u6848\u4EF6\u3092\u6295\u7A3F"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\u6848\u4EF6\u767B\u9332"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "p-post-job",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "p-post-job__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "p-post-job__header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            className: "p-post-job__title",
            children: "\u6848\u4EF6\u3092\u6295\u7A3F\u3059\u308B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "p-post-job__subtitle",
            children: ["\u3042\u306A\u305F\u306E\u6848\u4EF6\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u3092\u52DF\u96C6\u3057\u307E\u3057\u3087\u3046\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {
              className: "hidden md:block"
            }), "\u5358\u767A\u6848\u4EF6\u3084\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6\u3092\u7C21\u5358\u306B\u6295\u7A3F\u3067\u304D\u307E\u3059\u3002"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
          onSubmit: handleSubmit,
          className: "p-post-job__form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "p-post-job__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "p-post-job__section-title",
              children: "\u57FA\u672C\u60C5\u5831"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                htmlFor: "title",
                className: "p-post-job__label",
                children: ["\u6848\u4EF6\u30BF\u30A4\u30C8\u30EB", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                id: "title",
                type: "text",
                className: "p-post-job__input ".concat(errors.title || validationErrors.title ? "p-post-job__input--error" : ""),
                placeholder: "\u4F8B\uFF1AReact\u3092\u4F7F\u7528\u3057\u305F\u30A6\u30A7\u30D6\u30A2\u30D7\u30EA\u958B\u767A",
                value: data.title,
                onChange: function onChange(e) {
                  var value = e.target.value;
                  setData("title", value);
                  // リアルタイムバリデーション
                  validateTitleInput(value);
                },
                maxLength: 50
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "p-post-job__title-help",
                children: "\u203B 50\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DescriptionCount, {
                current: data.title.length,
                max: 50
              }), (errors.title || validationErrors.title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_3__["default"], {
                message: errors.title || validationErrors.title,
                className: "mt-1"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "p-post-job__label",
                children: ["\u6848\u4EF6\u7A2E\u5225", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__radio-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                  className: "p-post-job__radio",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                    type: "radio",
                    name: "type",
                    value: "one_time",
                    checked: data.type === "one_time",
                    onChange: function onChange() {
                      return setData("type", "one_time");
                    },
                    className: "p-post-job__radio-input"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__radio-text",
                    children: "\u5358\u767A\u6848\u4EF6"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                  className: "p-post-job__radio",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                    type: "radio",
                    name: "type",
                    value: "revenue_share",
                    checked: data.type === "revenue_share",
                    onChange: function onChange() {
                      return setData("type", "revenue_share");
                    },
                    className: "p-post-job__radio-input"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__radio-text",
                    children: "\u30EC\u30D9\u30CB\u30E5\u30FC\u30B7\u30A7\u30A2\u6848\u4EF6"
                  })]
                })]
              }), errors.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_InputError__WEBPACK_IMPORTED_MODULE_3__["default"], {
                message: errors.type,
                className: "mt-1"
              })]
            }), data.type === "one_time" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "p-post-job__label",
                children: ["\u4E88\u7B97", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__budget-inputs",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "p-post-job__budget-input-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__currency",
                    children: "\xA5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                    type: "number",
                    placeholder: "\u6700\u5C0F\u91D1\u984D\uFF08\u5343\u5186\u5358\u4F4D\uFF09",
                    value: data.budget_min,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setData("budget_min", value);
                      updateDisplayBudget(value, setDisplayBudgetMin);

                      // リアルタイムバリデーション
                      validateBudgetInput(value, "budget_min");
                    },
                    className: "p-post-job__input p-post-job__input--budget ".concat(errors.budget_min || validationErrors.budget_min ? "p-post-job__input--error" : ""),
                    min: "0",
                    max: "50000",
                    style: {
                      paddingRight: "45px"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__unit",
                    children: "\u5343\u5186"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__budget-separator",
                  children: "\u301C"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "p-post-job__budget-input-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__currency",
                    children: "\xA5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                    type: "number",
                    placeholder: "\u6700\u5927\u91D1\u984D\uFF08\u5343\u5186\u5358\u4F4D\uFF09",
                    value: data.budget_max,
                    onChange: function onChange(e) {
                      var value = e.target.value;
                      setData("budget_max", value);
                      updateDisplayBudget(value, setDisplayBudgetMax);

                      // リアルタイムバリデーション
                      validateBudgetInput(value, "budget_max");
                    },
                    className: "p-post-job__input p-post-job__input--budget ".concat(errors.budget_max || validationErrors.budget_max ? "p-post-job__input--error" : ""),
                    min: "0",
                    max: "50000",
                    style: {
                      paddingRight: "45px"
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "p-post-job__unit",
                    children: "\u5343\u5186"
                  })]
                })]
              }), (displayBudgetMin || displayBudgetMax) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__budget-preview",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__budget-preview-label",
                  children: "\u8868\u793A\u3055\u308C\u308B\u91D1\u984D\uFF1A"
                }), displayBudgetMin && displayBudgetMax ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                  className: "p-post-job__budget-preview-value",
                  children: [displayBudgetMin, " \u301C", " ", displayBudgetMax]
                }) : displayBudgetMin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                  className: "p-post-job__budget-preview-value",
                  children: [displayBudgetMin, " \u301C"]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                  className: "p-post-job__budget-preview-value",
                  children: ["\u301C ", displayBudgetMax]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__budget-help",
                children: ["\u203B \u91D1\u984D\u306F\u5343\u5186\u5358\u4F4D\u3067\u534A\u89D2\u6570\u5B57\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u4F8B\uFF1A50 = 5\u4E07\u5186\u3001100 = 10\u4E07\u5186\uFF09", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "\u203B \u4E88\u7B97\u306E\u4E0A\u9650\u306F5,000\u4E07\u5186\uFF0850,000\u5343\u5186\uFF09\u307E\u3067\u3068\u306A\u308A\u307E\u3059"]
              }), (errors.budget_min || validationErrors.budget_min || errors.budget_max || validationErrors.budget_max) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "p-post-job__error",
                children: errors.budget_min || validationErrors.budget_min || errors.budget_max || validationErrors.budget_max
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                htmlFor: "category",
                className: "p-post-job__label",
                children: ["\u30AB\u30C6\u30B4\u30EA\u30FC", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
                id: "category",
                className: "p-post-job__select ".concat(errors.category || validationErrors.category ? "p-post-job__select--error" : ""),
                value: data.category,
                onChange: function onChange(e) {
                  setData("category", e.target.value);
                  // 入力時にエラーをクリア
                  if (validationErrors.category) {
                    setValidationErrors(_objectSpread(_objectSpread({}, validationErrors), {}, {
                      category: undefined
                    }));
                  }
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: "",
                  children: "\u30AB\u30C6\u30B4\u30EA\u30FC\u3092\u9078\u629E"
                }), categoryOptions.map(function (category) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                    value: category,
                    children: category
                  }, category);
                })]
              }), (errors.category || validationErrors.category) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "p-post-job__error",
                children: errors.category || validationErrors.category
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                htmlFor: "location",
                className: "p-post-job__label",
                children: ["\u4F5C\u696D\u5834\u6240", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
                id: "location",
                className: "p-post-job__select",
                value: data.location,
                onChange: function onChange(e) {
                  return setData("location", e.target.value);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: "\u30EA\u30E2\u30FC\u30C8\uFF08\u5728\u5B85\u52E4\u52D9\uFF09",
                  children: "\u30EA\u30E2\u30FC\u30C8\uFF08\u5728\u5B85\u52E4\u52D9\uFF09"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: "\u73FE\u5834\u52E4\u52D9\uFF08\u30AA\u30F3\u30B5\u30A4\u30C8\uFF09",
                  children: "\u73FE\u5834\u52E4\u52D9\uFF08\u30AA\u30F3\u30B5\u30A4\u30C8\uFF09"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                  value: "\u4F75\u7528\u578B\uFF08\u5728\u5B85\uFF0B\u73FE\u5834\uFF09",
                  children: "\u4F75\u7528\u578B\uFF08\u5728\u5B85\uFF0B\u73FE\u5834\uFF09"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "p-post-job__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "p-post-job__section-title",
              children: "\u6848\u4EF6\u8A73\u7D30"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                htmlFor: "description",
                className: "p-post-job__label",
                children: ["\u6848\u4EF6\u306E\u8AAC\u660E", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__required",
                  children: "\u5FC5\u9808"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("textarea", {
                id: "description",
                className: "p-post-job__textarea ".concat(errors.description || validationErrors.description ? "p-post-job__textarea--error" : ""),
                placeholder: "\u6848\u4EF6\u306E\u8A73\u7D30\u306A\u8AAC\u660E\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F5C\u696D\u5185\u5BB9\u3001\u6C42\u3081\u308B\u30B9\u30AD\u30EB\u3001\u6210\u679C\u7269\u3001\u7D0D\u671F\u306A\u3069\u3092\u5177\u4F53\u7684\u306B\u8A18\u8F09\u3059\u308B\u3068\u3001\u5FDC\u52DF\u304C\u96C6\u307E\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059",
                value: data.description,
                onChange: function onChange(e) {
                  setData("description", e.target.value);
                  // 入力時にエラーをクリア
                  if (validationErrors.description) {
                    setValidationErrors(_objectSpread(_objectSpread({}, validationErrors), {}, {
                      description: undefined
                    }));
                  }
                },
                rows: 8
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "p-post-job__description-help",
                children: "\u203B 3000\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DescriptionCount, {
                current: data.description.length,
                max: 3000
              }), (errors.description || validationErrors.description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "p-post-job__error",
                children: errors.description || validationErrors.description
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "p-post-job__label",
                children: ["\u5FC5\u8981\u306A\u30B9\u30AD\u30EB", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__optional",
                  children: "\u81EA\u7531\u8FFD\u52A0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__skills-container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "p-post-job__skills-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "p-post-job__skills-input-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
                      className: "p-post-job__select",
                      value: customSkill,
                      onChange: function onChange(e) {
                        return setCustomSkill(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                        value: "",
                        children: "\u30B9\u30AD\u30EB\u3092\u9078\u629E\u3057\u3066\u8FFD\u52A0\u30DC\u30BF\u30F3\u3067\u8FFD\u52A0"
                      }), skillOptions.map(function (skill) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                          value: skill,
                          children: skill
                        }, skill);
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                      type: "button",
                      className: "p-post-job__add-button p-post-job__add-button--middle",
                      onClick: addSkill,
                      children: "\u8FFD\u52A0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                      type: "text",
                      placeholder: "\u30B9\u30AD\u30EB\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u30DC\u30BF\u30F3\u3067\u8FFD\u52A0",
                      value: !skillOptions.includes(customSkill) ? customSkill : "",
                      onChange: function onChange(e) {
                        // 15文字までの入力に制限
                        if (e.target.value.length <= 15) {
                          setCustomSkill(e.target.value);
                        }
                      },
                      className: "p-post-job__input p-post-job__input--skill",
                      maxLength: 15
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                      type: "button",
                      className: "p-post-job__add-button p-post-job__add-button--end",
                      onClick: addSkill,
                      children: "\u8FFD\u52A0"
                    })]
                  })
                }), data.skills.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "p-post-job__skills-tags",
                  children: data.skills.map(function (skill) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "p-post-job__skill-tag",
                      children: [skill, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                        type: "button",
                        className: "p-post-job__skill-remove",
                        onClick: function onClick() {
                          return removeSkill(skill);
                        },
                        children: "\xD7"
                      })]
                    }, skill);
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "p-post-job__form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("label", {
                className: "p-post-job__label",
                children: ["\u3042\u308C\u3070\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "p-post-job__optional",
                  children: "\u81EA\u7531\u8FFD\u52A0"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__skills-container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "p-post-job__skills-input",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "p-post-job__skills-input-row",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("select", {
                      className: "p-post-job__select",
                      value: customPreferredSkill,
                      onChange: function onChange(e) {
                        return setCustomPreferredSkill(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                        value: "",
                        children: "\u30B9\u30AD\u30EB\u3092\u9078\u629E\u3057\u3066\u8FFD\u52A0\u30DC\u30BF\u30F3\u3067\u8FFD\u52A0"
                      }), skillOptions.map(function (skill) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
                          value: skill,
                          children: skill
                        }, skill);
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                      type: "button",
                      className: "p-post-job__add-button p-post-job__add-button--middle",
                      onClick: addPreferredSkill,
                      children: "\u8FFD\u52A0"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                      type: "text",
                      placeholder: "\u30B9\u30AD\u30EB\u3092\u5165\u529B\u3057\u3066\u8FFD\u52A0\u30DC\u30BF\u30F3\u3067\u8FFD\u52A0",
                      value: !skillOptions.includes(customPreferredSkill) ? customPreferredSkill : "",
                      onChange: function onChange(e) {
                        // 15文字までの入力に制限
                        if (e.target.value.length <= 15) {
                          setCustomPreferredSkill(e.target.value);
                        }
                      },
                      className: "p-post-job__input p-post-job__input--skill",
                      maxLength: 15
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                      type: "button",
                      className: "p-post-job__add-button p-post-job__add-button--end",
                      onClick: addPreferredSkill,
                      children: "\u8FFD\u52A0"
                    })]
                  })
                }), data.preferred_skills.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "p-post-job__skills-tags",
                  children: data.preferred_skills.map(function (skill) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "p-post-job__skill-tag p-post-job__skill-tag--preferred",
                      children: [skill, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                        type: "button",
                        className: "p-post-job__skill-remove",
                        onClick: function onClick() {
                          return removePreferredSkill(skill);
                        },
                        children: "\xD7"
                      })]
                    }, skill);
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "p-post-job__action",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "submit",
              className: "p-post-job__submit",
              disabled: processing,
              children: processing ? "投稿中..." : "案件を投稿する"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "p-post-job__tips",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "p-post-job__tips-title",
            children: "\u6848\u4EF6\u304C\u5FDC\u52DF\u3055\u308C\u3084\u3059\u304F\u306A\u308B\u30B3\u30C4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "p-post-job__tips-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              className: "p-post-job__tips-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "p-post-job__tips-icon",
                children: "\uD83D\uDCA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__tips-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "\u5177\u4F53\u7684\u306A\u8AAC\u660E\u3092\u5FC3\u304C\u3051\u308B"
                }), "\uFF1A \u4F5C\u696D\u5185\u5BB9\u3001\u671F\u5F85\u3059\u308B\u6210\u679C\u7269\u3001\u7D0D\u671F\u306A\u3069\u3092\u660E\u78BA\u306B\u8A18\u8F09\u3057\u307E\u3057\u3087\u3046"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              className: "p-post-job__tips-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "p-post-job__tips-icon",
                children: "\uD83D\uDCA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__tips-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "\u9069\u5207\u306A\u4E88\u7B97\u3092\u8A2D\u5B9A\u3059\u308B"
                }), "\uFF1A \u4F5C\u696D\u91CF\u306B\u898B\u5408\u3063\u305F\u4E88\u7B97\u8A2D\u5B9A\u304C\u91CD\u8981\u3067\u3059\u3002\u9069\u6B63\u306A\u5831\u916C\u304C\u5FDC\u52DF\u7387\u3092\u9AD8\u3081\u307E\u3059"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              className: "p-post-job__tips-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "p-post-job__tips-icon",
                children: "\uD83D\uDCA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__tips-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3092\u660E\u8A18\u3059\u308B"
                }), "\uFF1A \u5FC5\u9808\u306E\u30B9\u30AD\u30EB\u3068\u6B53\u8FCE\u3059\u308B\u30B9\u30AD\u30EB\u3092\u5206\u3051\u3066\u8A18\u8F09\u3059\u308B\u3053\u3068\u3067\u3001 \u5FDC\u52DF\u8005\u306E\u30B9\u30AD\u30EB\u30DE\u30C3\u30C1\u5EA6\u304C\u308F\u304B\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              className: "p-post-job__tips-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "p-post-job__tips-icon",
                children: "\uD83D\uDCA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "p-post-job__tips-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                  children: "\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u65B9\u6CD5\u3092\u793A\u3059"
                }), "\uFF1A \u9032\u6357\u5831\u544A\u306E\u983B\u5EA6\u3084\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306E\u6709\u7121\u306A\u3069\u3092\u660E\u78BA\u306B\u3057\u3066\u304A\u304F\u3068\u5B89\u5FC3\u611F\u306B\u3064\u306A\u304C\u308A\u307E\u3059"]
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      show: showConfirmModal,
      onClose: function onClose() {
        return setShowConfirmModal(false);
      },
      maxWidth: "md",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "p-modal__container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "p-modal__title",
          children: "\u6848\u4EF6\u6295\u7A3F\u306E\u78BA\u8A8D"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "p-modal__text",
          children: ["\u4E00\u5EA6\u6295\u7A3F\u3057\u305F\u6848\u4EF6\u306F\u7DE8\u96C6\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "\u5185\u5BB9\u3092\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u6848\u4EF6\u3092\u524A\u9664\u3057\u3066\u65B0\u898F\u306B\u4F5C\u308A\u76F4\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "\u3053\u306E\u6848\u4EF6\u3092\u6295\u7A3F\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "p-modal__buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "p-modal__button p-modal__button--cancel",
            onClick: function onClick() {
              return setShowConfirmModal(false);
            },
            children: "\u30AD\u30E3\u30F3\u30BB\u30EB"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "p-modal__button p-modal__button--success",
            onClick: submitForm,
            disabled: submitting,
            children: submitting ? "送信中..." : "はい、投稿します"
          })]
        })]
      })
    })]
  });
}

/***/ })

}]);