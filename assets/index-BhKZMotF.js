(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function n1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function i1(){if(L_)return vl;L_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return vl.Fragment=e,vl.jsx=n,vl.jsxs=n,vl}var j_;function r1(){return j_||(j_=1,Pd.exports=i1()),Pd.exports}var k=r1(),Ud={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function s1(){if(z_)return Se;z_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),w=Symbol.iterator;function I(R){return R===null||typeof R!="object"?null:(R=w&&R[w]||R["@@iterator"],typeof R=="function"?R:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,ie={};function J(R,F,ee){this.props=R,this.context=F,this.refs=ie,this.updater=ee||q}J.prototype.isReactComponent={},J.prototype.setState=function(R,F){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,F,"setState")},J.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function Te(){}Te.prototype=J.prototype;function me(R,F,ee){this.props=R,this.context=F,this.refs=ie,this.updater=ee||q}var fe=me.prototype=new Te;fe.constructor=me,$(fe,J.prototype),fe.isPureReactComponent=!0;var De=Array.isArray,be={H:null,A:null,T:null,S:null,V:null},Ce=Object.prototype.hasOwnProperty;function O(R,F,ee,Z,se,le){return ee=le.ref,{$$typeof:r,type:R,key:F,ref:ee!==void 0?ee:null,props:le}}function A(R,F){return O(R.type,F,void 0,void 0,void 0,R.props)}function C(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function N(R){var F={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return F[ee]})}var M=/\/+/g;function P(R,F){return typeof R=="object"&&R!==null&&R.key!=null?N(""+R.key):F.toString(36)}function x(){}function Tt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(x,x):(R.status="pending",R.then(function(F){R.status==="pending"&&(R.status="fulfilled",R.value=F)},function(F){R.status==="pending"&&(R.status="rejected",R.reason=F)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function tt(R,F,ee,Z,se){var le=typeof R;(le==="undefined"||le==="boolean")&&(R=null);var de=!1;if(R===null)de=!0;else switch(le){case"bigint":case"string":case"number":de=!0;break;case"object":switch(R.$$typeof){case r:case e:de=!0;break;case T:return de=R._init,tt(de(R._payload),F,ee,Z,se)}}if(de)return se=se(R),de=Z===""?"."+P(R,0):Z,De(se)?(ee="",de!=null&&(ee=de.replace(M,"$&/")+"/"),tt(se,F,ee,"",function(Kn){return Kn})):se!=null&&(C(se)&&(se=A(se,ee+(se.key==null||R&&R.key===se.key?"":(""+se.key).replace(M,"$&/")+"/")+de)),F.push(se)),1;de=0;var ct=Z===""?".":Z+":";if(De(R))for(var Ke=0;Ke<R.length;Ke++)Z=R[Ke],le=ct+P(Z,Ke),de+=tt(Z,F,ee,le,se);else if(Ke=I(R),typeof Ke=="function")for(R=Ke.call(R),Ke=0;!(Z=R.next()).done;)Z=Z.value,le=ct+P(Z,Ke++),de+=tt(Z,F,ee,le,se);else if(le==="object"){if(typeof R.then=="function")return tt(Tt(R),F,ee,Z,se);throw F=String(R),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return de}function G(R,F,ee){if(R==null)return R;var Z=[],se=0;return tt(R,Z,"","",function(le){return F.call(ee,le,se++)}),Z}function ne(R){if(R._status===-1){var F=R._result;F=F(),F.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var ue=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function oe(){}return Se.Children={map:G,forEach:function(R,F,ee){G(R,function(){F.apply(this,arguments)},ee)},count:function(R){var F=0;return G(R,function(){F++}),F},toArray:function(R){return G(R,function(F){return F})||[]},only:function(R){if(!C(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Se.Component=J,Se.Fragment=n,Se.Profiler=o,Se.PureComponent=me,Se.StrictMode=s,Se.Suspense=g,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be,Se.__COMPILER_RUNTIME={__proto__:null,c:function(R){return be.H.useMemoCache(R)}},Se.cache=function(R){return function(){return R.apply(null,arguments)}},Se.cloneElement=function(R,F,ee){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var Z=$({},R.props),se=R.key,le=void 0;if(F!=null)for(de in F.ref!==void 0&&(le=void 0),F.key!==void 0&&(se=""+F.key),F)!Ce.call(F,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&F.ref===void 0||(Z[de]=F[de]);var de=arguments.length-2;if(de===1)Z.children=ee;else if(1<de){for(var ct=Array(de),Ke=0;Ke<de;Ke++)ct[Ke]=arguments[Ke+2];Z.children=ct}return O(R.type,se,void 0,void 0,le,Z)},Se.createContext=function(R){return R={$$typeof:f,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},Se.createElement=function(R,F,ee){var Z,se={},le=null;if(F!=null)for(Z in F.key!==void 0&&(le=""+F.key),F)Ce.call(F,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(se[Z]=F[Z]);var de=arguments.length-2;if(de===1)se.children=ee;else if(1<de){for(var ct=Array(de),Ke=0;Ke<de;Ke++)ct[Ke]=arguments[Ke+2];se.children=ct}if(R&&R.defaultProps)for(Z in de=R.defaultProps,de)se[Z]===void 0&&(se[Z]=de[Z]);return O(R,le,void 0,void 0,null,se)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(R){return{$$typeof:m,render:R}},Se.isValidElement=C,Se.lazy=function(R){return{$$typeof:T,_payload:{_status:-1,_result:R},_init:ne}},Se.memo=function(R,F){return{$$typeof:y,type:R,compare:F===void 0?null:F}},Se.startTransition=function(R){var F=be.T,ee={};be.T=ee;try{var Z=R(),se=be.S;se!==null&&se(ee,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(oe,ue)}catch(le){ue(le)}finally{be.T=F}},Se.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()},Se.use=function(R){return be.H.use(R)},Se.useActionState=function(R,F,ee){return be.H.useActionState(R,F,ee)},Se.useCallback=function(R,F){return be.H.useCallback(R,F)},Se.useContext=function(R){return be.H.useContext(R)},Se.useDebugValue=function(){},Se.useDeferredValue=function(R,F){return be.H.useDeferredValue(R,F)},Se.useEffect=function(R,F,ee){var Z=be.H;if(typeof ee=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(R,F)},Se.useId=function(){return be.H.useId()},Se.useImperativeHandle=function(R,F,ee){return be.H.useImperativeHandle(R,F,ee)},Se.useInsertionEffect=function(R,F){return be.H.useInsertionEffect(R,F)},Se.useLayoutEffect=function(R,F){return be.H.useLayoutEffect(R,F)},Se.useMemo=function(R,F){return be.H.useMemo(R,F)},Se.useOptimistic=function(R,F){return be.H.useOptimistic(R,F)},Se.useReducer=function(R,F,ee){return be.H.useReducer(R,F,ee)},Se.useRef=function(R){return be.H.useRef(R)},Se.useState=function(R){return be.H.useState(R)},Se.useSyncExternalStore=function(R,F,ee){return be.H.useSyncExternalStore(R,F,ee)},Se.useTransition=function(){return be.H.useTransition()},Se.version="19.1.0",Se}var B_;function Om(){return B_||(B_=1,Ud.exports=s1()),Ud.exports}var Ve=Om();const V0=n1(Ve);var Ld={exports:{}},El={},jd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function a1(){return q_||(q_=1,function(r){function e(G,ne){var ue=G.length;G.push(ne);e:for(;0<ue;){var oe=ue-1>>>1,R=G[oe];if(0<o(R,ne))G[oe]=ne,G[ue]=R,ue=oe;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ne=G[0],ue=G.pop();if(ue!==ne){G[0]=ue;e:for(var oe=0,R=G.length,F=R>>>1;oe<F;){var ee=2*(oe+1)-1,Z=G[ee],se=ee+1,le=G[se];if(0>o(Z,ue))se<R&&0>o(le,Z)?(G[oe]=le,G[se]=ue,oe=se):(G[oe]=Z,G[ee]=ue,oe=ee);else if(se<R&&0>o(le,ue))G[oe]=le,G[se]=ue,oe=se;else break e}}return ne}function o(G,ne){var ue=G.sortIndex-ne.sortIndex;return ue!==0?ue:G.id-ne.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],T=1,w=null,I=3,q=!1,$=!1,ie=!1,J=!1,Te=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function De(G){for(var ne=n(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=G)s(y),ne.sortIndex=ne.expirationTime,e(g,ne);else break;ne=n(y)}}function be(G){if(ie=!1,De(G),!$)if(n(g)!==null)$=!0,Ce||(Ce=!0,P());else{var ne=n(y);ne!==null&&tt(be,ne.startTime-G)}}var Ce=!1,O=-1,A=5,C=-1;function N(){return J?!0:!(r.unstable_now()-C<A)}function M(){if(J=!1,Ce){var G=r.unstable_now();C=G;var ne=!0;try{e:{$=!1,ie&&(ie=!1,me(O),O=-1),q=!0;var ue=I;try{t:{for(De(G),w=n(g);w!==null&&!(w.expirationTime>G&&N());){var oe=w.callback;if(typeof oe=="function"){w.callback=null,I=w.priorityLevel;var R=oe(w.expirationTime<=G);if(G=r.unstable_now(),typeof R=="function"){w.callback=R,De(G),ne=!0;break t}w===n(g)&&s(g),De(G)}else s(g);w=n(g)}if(w!==null)ne=!0;else{var F=n(y);F!==null&&tt(be,F.startTime-G),ne=!1}}break e}finally{w=null,I=ue,q=!1}ne=void 0}}finally{ne?P():Ce=!1}}}var P;if(typeof fe=="function")P=function(){fe(M)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,Tt=x.port2;x.port1.onmessage=M,P=function(){Tt.postMessage(null)}}else P=function(){Te(M,0)};function tt(G,ne){O=Te(function(){G(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_next=function(G){switch(I){case 1:case 2:case 3:var ne=3;break;default:ne=I}var ue=I;I=ne;try{return G()}finally{I=ue}},r.unstable_requestPaint=function(){J=!0},r.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ue=I;I=G;try{return ne()}finally{I=ue}},r.unstable_scheduleCallback=function(G,ne,ue){var oe=r.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?oe+ue:oe):ue=oe,G){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=ue+R,G={id:T++,callback:ne,priorityLevel:G,startTime:ue,expirationTime:R,sortIndex:-1},ue>oe?(G.sortIndex=ue,e(y,G),n(g)===null&&G===n(y)&&(ie?(me(O),O=-1):ie=!0,tt(be,ue-oe))):(G.sortIndex=R,e(g,G),$||q||($=!0,Ce||(Ce=!0,P()))),G},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(G){var ne=I;return function(){var ue=I;I=ne;try{return G.apply(this,arguments)}finally{I=ue}}}}(zd)),zd}var H_;function o1(){return H_||(H_=1,jd.exports=a1()),jd.exports}var Bd={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function l1(){if(F_)return Kt;F_=1;var r=Om();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,T){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:g,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kt.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,T)},Kt.flushSync=function(g){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=T,s.d.f()}},Kt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Kt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Kt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,w=m(T,y.crossOrigin),I=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:w,integrity:I,fetchPriority:q}):T==="script"&&s.d.X(g,{crossOrigin:w,integrity:I,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Kt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,w=m(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kt.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Kt.requestFormReset=function(g){s.d.r(g)},Kt.unstable_batchedUpdates=function(g,y){return g(y)},Kt.useFormState=function(g,y,T){return f.H.useFormState(g,y,T)},Kt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kt.version="19.1.0",Kt}var G_;function u1(){if(G_)return Bd.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bd.exports=l1(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function c1(){if(Q_)return El;Q_=1;var r=o1(),e=Om(),n=u1();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,E=h.child;E;){if(E===a){v=!0,a=h,l=d;break}if(E===l){v=!0,l=h,a=d;break}E=E.sibling}if(!v){for(E=d.child;E;){if(E===a){v=!0,a=d,l=h;break}if(E===l){v=!0,l=d,a=h;break}E=E.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var T=Object.assign,w=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),me=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var x=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===x?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $:return"Fragment";case J:return"Profiler";case ie:return"StrictMode";case be:return"Suspense";case Ce:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case q:return"Portal";case fe:return(t.displayName||"Context")+".Provider";case me:return(t._context.displayName||"Context")+".Consumer";case De:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:Tt(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return Tt(t(i))}catch{}}return null}var tt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},oe=[],R=-1;function F(t){return{current:t}}function ee(t){0>R||(t.current=oe[R],oe[R]=null,R--)}function Z(t,i){R++,oe[R]=t.current,t.current=i}var se=F(null),le=F(null),de=F(null),ct=F(null);function Ke(t,i){switch(Z(de,i),Z(le,t),Z(se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?f_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=f_(i),t=d_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(se),Z(se,t)}function Kn(){ee(se),ee(le),ee(de)}function er(t){t.memoizedState!==null&&Z(ct,t);var i=se.current,a=d_(i,t.type);i!==a&&(Z(le,t),Z(se,a))}function Ti(t){le.current===t&&(ee(se),ee(le)),ct.current===t&&(ee(ct),ml._currentValue=ue)}var Zr=Object.prototype.hasOwnProperty,Wr=r.unstable_scheduleCallback,Jr=r.unstable_cancelCallback,co=r.unstable_shouldYield,iu=r.unstable_requestPaint,Tn=r.unstable_now,Vh=r.unstable_getCurrentPriorityLevel,ho=r.unstable_ImmediatePriority,$s=r.unstable_UserBlockingPriority,es=r.unstable_NormalPriority,Ph=r.unstable_LowPriority,Zs=r.unstable_IdlePriority,fo=r.log,ru=r.unstable_setDisableYieldValue,ot=null,Fe=null;function cn(t){if(typeof fo=="function"&&ru(t),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(ot,t)}catch{}}var Gt=Math.clz32?Math.clz32:ts,su=Math.log,Uh=Math.LN2;function ts(t){return t>>>=0,t===0?32:31-(su(t)/Uh|0)|0}var ns=256,is=4194304;function Un(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ws(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Un(l):(v&=E,v!==0?h=Un(v):a||(a=E&~t,a!==0&&(h=Un(a))))):(E=l&~d,E!==0?h=Un(E):v!==0?h=Un(v):a||(a=l&~t,a!==0&&(h=Un(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function rs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function mo(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function po(){var t=ns;return ns<<=1,(ns&4194048)===0&&(ns=256),t}function go(){var t=is;return is<<=1,(is&62914560)===0&&(is=4194304),t}function bi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ai(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yo(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,S=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-Gt(a),Y=1<<Q;E[Q]=0,S[Q]=-1;var z=j[Q];if(z!==null)for(j[Q]=null,Q=0;Q<z.length;Q++){var B=z[Q];B!==null&&(B.lane&=-536870913)}a&=~Y}l!==0&&Yn(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function Yn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Gt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function _o(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Gt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function tr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function nr(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:O_(t.type))}function au(t,i){var a=ne.p;try{return ne.p=t,i()}finally{ne.p=a}}var nt=Math.random().toString(36).slice(2),bt="__reactFiber$"+nt,pt="__reactProps$"+nt,bn="__reactContainer$"+nt,vo="__reactEvents$"+nt,Lh="__reactListeners$"+nt,ir="__reactHandles$"+nt,ou="__reactResources$"+nt,ss="__reactMarker$"+nt;function rr(t){delete t[bt],delete t[pt],delete t[vo],delete t[Lh],delete t[ir]}function wi(t){var i=t[bt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[bn]||a[bt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=y_(t);t!==null;){if(a=t[bt])return a;t=y_(t)}return i}t=a,a=t.parentNode}return null}function Xn(t){if(t=t[bt]||t[bn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function $n(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function Jt(t){var i=t[ou];return i||(i=t[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ht(t){t[ss]=!0}var Eo=new Set,ea={};function Ln(t,i){Si(t,i),Si(t+"Capture",i)}function Si(t,i){for(ea[t]=i,t=0;t<i.length;t++)Eo.add(i[t])}var lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},as={};function cu(t){return Zr.call(as,t)?!0:Zr.call(uu,t)?!1:lu.test(t)?as[t]=!0:(uu[t]=!0,!1)}function sr(t,i,a){if(cu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Zn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ut(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var os,hu;function Ri(t){if(os===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);os=i&&i[1]||"",hu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+t+hu}var ta=!1;function na(t,i){if(!t||ta)return"";ta=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var z=B}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(B){z=B}t.call(Y.prototype)}}else{try{throw Error()}catch(B){z=B}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],E=d[1];if(v&&E){var S=v.split(`
`),j=E.split(`
`);for(h=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(l===S.length||h===j.length)for(l=S.length-1,h=j.length-1;1<=l&&0<=h&&S[l]!==j[h];)h--;for(;1<=l&&0<=h;l--,h--)if(S[l]!==j[h]){if(l!==1||h!==1)do if(l--,h--,0>h||S[l]!==j[h]){var Q=`
`+S[l].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=l&&0<=h);break}}}finally{ta=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ri(a):""}function To(t){switch(t.tag){case 26:case 27:case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 15:return na(t.type,!1);case 11:return na(t.type.render,!1);case 1:return na(t.type,!0);case 31:return Ri("Activity");default:return""}}function ia(t){try{var i="";do i+=To(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function en(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jh(t){var i=bo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ra(t){t._valueTracker||(t._valueTracker=jh(t))}function Ao(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=bo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zh=/[\n"\\]/g;function gt(t){return t.replace(zh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(t,i,a,l,h,d,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+en(i)):t.value!==""+en(i)&&(t.value=""+en(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ar(t,v,en(i)):a!=null?ar(t,v,en(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+en(E):t.removeAttribute("name")}function us(t,i,a,l,h,d,v,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+en(a):"",i=i!=null?""+en(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function ar(t,i,a){i==="number"&&ls(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ii(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+en(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ye(t,i,a){if(i!=null&&(i=""+en(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+en(a):""}function cs(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(tt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=en(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function An(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var hs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||hs.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function wo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&fu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&fu(t,d,i[d])}function So(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sa(t){return qh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ci=null;function wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xi=null,Di=null;function Ro(t){var i=Xn(t);if(i&&(t=i.stateNode)){var a=t[pt]||null;e:switch(t=i.stateNode,i.type){case"input":if(hn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[pt]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Ao(l)}break e;case"textarea":Ye(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ii(t,!!a.multiple,i,!1)}}}var Wn=!1;function du(t,i,a){if(Wn)return t(i,a);Wn=!0;try{var l=t(i);return l}finally{if(Wn=!1,(xi!==null||Di!==null)&&(ac(),xi&&(i=xi,t=Di,Di=xi=null,Ro(i),t)))for(i=0;i<t.length;i++)Ro(t[i])}}function fs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[pt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(jn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{Sn=!1}var Jn=null,or=null,Ni=null;function Io(){if(Ni)return Ni;var t,i=or,a=i.length,l,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ni=h.slice(t,1<l?1-l:void 0)}function ei(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ti(){return!0}function Co(){return!1}function Nt(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ti:Co,this.isPropagationStopped=Co,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),i}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=Nt(qe),ms=T({},qe,{view:0,detail:0}),mu=Nt(ms),oa,la,ni,ps=T({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ni&&(ni&&t.type==="mousemove"?(oa=t.screenX-ni.screenX,la=t.screenY-ni.screenY):la=oa=0,ni=t),oa)},movementY:function(t){return"movementY"in t?t.movementY:la}}),Rn=Nt(ps),pu=T({},ps,{dataTransfer:0}),Hh=Nt(pu),gs=T({},ms,{relatedTarget:0}),ua=Nt(gs),xo=T({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),ca=Nt(xo),gu=T({},qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ha=Nt(gu),Fh=T({},qe,{data:0}),Do=Nt(Fh),ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function No(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_u[t])?!!i[t]:!1}function _s(){return No}var vu=T({},ms,{key:function(t){if(t.key){var i=ys[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(t){return t.type==="keypress"?ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fa=Nt(vu),Eu=T({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Nt(Eu),Oi=T({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Tu=Nt(Oi),bu=T({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Au=Nt(bu),wu=T({},ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),da=Nt(wu),tn=T({},qe,{newState:0,oldState:0}),Su=Nt(tn),Ru=[9,13,27,32],ii=jn&&"CompositionEvent"in window,c=null;jn&&"documentMode"in document&&(c=document.documentMode);var p=jn&&"TextEvent"in window&&!c,_=jn&&(!ii||c&&8<c&&11>=c),b=" ",U=!1;function H(t,i){switch(t){case"keyup":return Ru.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function te(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function At(t,i){switch(t){case"compositionend":return te(i);case"keypress":return i.which!==32?null:(U=!0,b);case"textInput":return t=i.data,t===b&&U?null:t;default:return null}}function Ue(t,i){if(Pe)return t==="compositionend"||!ii&&H(t,i)?(t=Io(),Ni=or=Jn=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ot={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ot[t.type]:i==="textarea"}function Mi(t,i,a,l){xi?Di?Di.push(l):Di=[l]:xi=l,i=fc(i,"onChange"),0<i.length&&(a=new aa("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Lt=null,ri=null;function Mo(t){o_(t,0)}function Iu(t){var i=$n(t);if(Ao(i))return t}function Cp(t,i){if(t==="change")return i}var xp=!1;if(jn){var Gh;if(jn){var Qh="oninput"in document;if(!Qh){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Qh=typeof Dp.oninput=="function"}Gh=Qh}else Gh=!1;xp=Gh&&(!document.documentMode||9<document.documentMode)}function Np(){Lt&&(Lt.detachEvent("onpropertychange",Op),ri=Lt=null)}function Op(t){if(t.propertyName==="value"&&Iu(ri)){var i=[];Mi(i,ri,t,wn(t)),du(Mo,i)}}function Ob(t,i,a){t==="focusin"?(Np(),Lt=i,ri=a,Lt.attachEvent("onpropertychange",Op)):t==="focusout"&&Np()}function Mb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(ri)}function kb(t,i){if(t==="click")return Iu(i)}function Vb(t,i){if(t==="input"||t==="change")return Iu(i)}function Pb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fn=typeof Object.is=="function"?Object.is:Pb;function ko(t,i){if(fn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Zr.call(i,h)||!fn(t[h],i[h]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,i){var a=Mp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mp(a)}}function Vp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ls(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ls(t.document)}return i}function Kh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ub=jn&&"documentMode"in document&&11>=document.documentMode,ma=null,Yh=null,Vo=null,Xh=!1;function Up(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xh||ma==null||ma!==ls(l)||(l=ma,"selectionStart"in l&&Kh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&ko(Vo,l)||(Vo=l,l=fc(Yh,"onSelect"),0<l.length&&(i=new aa("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ma)))}function vs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var pa={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},$h={},Lp={};jn&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Es(t){if($h[t])return $h[t];if(!pa[t])return t;var i=pa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lp)return $h[t]=i[a];return t}var jp=Es("animationend"),zp=Es("animationiteration"),Bp=Es("animationstart"),Lb=Es("transitionrun"),jb=Es("transitionstart"),zb=Es("transitioncancel"),qp=Es("transitionend"),Hp=new Map,Zh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zh.push("scrollEnd");function zn(t,i){Hp.set(t,i),Ln(i,[t])}var Fp=new WeakMap;function In(t,i){if(typeof t=="object"&&t!==null){var a=Fp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ia(i)},Fp.set(t,i),i)}return{value:t,source:i,stack:ia(i)}}var Cn=[],ga=0,Wh=0;function Cu(){for(var t=ga,i=Wh=ga=0;i<t;){var a=Cn[i];Cn[i++]=null;var l=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var d=Cn[i];if(Cn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Gp(a,h,d)}}function xu(t,i,a,l){Cn[ga++]=t,Cn[ga++]=i,Cn[ga++]=a,Cn[ga++]=l,Wh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jh(t,i,a,l){return xu(t,i,a,l),Du(t)}function ya(t,i){return xu(t,null,null,i),Du(t)}function Gp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Gt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Du(t){if(50<al)throw al=0,ad=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var _a={};function Bb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,i,a,l){return new Bb(t,i,a,l)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ki(t,i){var a=t.alternate;return a===null?(a=dn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qp(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nu(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")ef(t)&&(v=1);else if(typeof t=="string")v=HA(t,a,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=dn(31,a,i,h),t.elementType=C,t.lanes=d,t;case $:return Ts(a.children,h,d,i);case ie:v=8,h|=24;break;case J:return t=dn(12,a,i,h|2),t.elementType=J,t.lanes=d,t;case be:return t=dn(13,a,i,h),t.elementType=be,t.lanes=d,t;case Ce:return t=dn(19,a,i,h),t.elementType=Ce,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Te:case fe:v=10;break e;case me:v=9;break e;case De:v=11;break e;case O:v=14;break e;case A:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=dn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ts(t,i,a,l){return t=dn(7,t,l,i),t.lanes=a,t}function tf(t,i,a){return t=dn(6,t,null,i),t.lanes=a,t}function nf(t,i,a){return i=dn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var va=[],Ea=0,Ou=null,Mu=0,xn=[],Dn=0,bs=null,Vi=1,Pi="";function As(t,i){va[Ea++]=Mu,va[Ea++]=Ou,Ou=t,Mu=i}function Kp(t,i,a){xn[Dn++]=Vi,xn[Dn++]=Pi,xn[Dn++]=bs,bs=t;var l=Vi;t=Pi;var h=32-Gt(l)-1;l&=~(1<<h),a+=1;var d=32-Gt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Vi=1<<32-Gt(i)+h|a<<h|l,Pi=d+t}else Vi=1<<d|a<<h|l,Pi=t}function rf(t){t.return!==null&&(As(t,1),Kp(t,1,0))}function sf(t){for(;t===Ou;)Ou=va[--Ea],va[Ea]=null,Mu=va[--Ea],va[Ea]=null;for(;t===bs;)bs=xn[--Dn],xn[Dn]=null,Pi=xn[--Dn],xn[Dn]=null,Vi=xn[--Dn],xn[Dn]=null}var nn=null,lt=null,Be=!1,ws=null,si=!1,af=Error(s(519));function Ss(t){var i=Error(s(418,""));throw Lo(In(i,t)),af}function Yp(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[bt]=t,i[pt]=l,a){case"dialog":Oe("cancel",i),Oe("close",i);break;case"iframe":case"object":case"embed":Oe("load",i);break;case"video":case"audio":for(a=0;a<ll.length;a++)Oe(ll[a],i);break;case"source":Oe("error",i);break;case"img":case"image":case"link":Oe("error",i),Oe("load",i);break;case"details":Oe("toggle",i);break;case"input":Oe("invalid",i),us(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ra(i);break;case"select":Oe("invalid",i);break;case"textarea":Oe("invalid",i),cs(i,l.value,l.defaultValue,l.children),ra(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||h_(i.textContent,a)?(l.popover!=null&&(Oe("beforetoggle",i),Oe("toggle",i)),l.onScroll!=null&&Oe("scroll",i),l.onScrollEnd!=null&&Oe("scrollend",i),l.onClick!=null&&(i.onclick=dc),i=!0):i=!1,i||Ss(t)}function Xp(t){for(nn=t.return;nn;)switch(nn.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:nn=nn.return}}function Po(t){if(t!==nn)return!1;if(!Be)return Xp(t),Be=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bd(t.type,t.memoizedProps)),a=!a),a&&lt&&Ss(t),Xp(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){lt=qn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}lt=null}}else i===27?(i=lt,Ar(t.type)?(t=Rd,Rd=null,lt=t):lt=i):lt=nn?qn(t.stateNode.nextSibling):null;return!0}function Uo(){lt=nn=null,Be=!1}function $p(){var t=ws;return t!==null&&(an===null?an=t:an.push.apply(an,t),ws=null),t}function Lo(t){ws===null?ws=[t]:ws.push(t)}var of=F(null),Rs=null,Ui=null;function lr(t,i,a){Z(of,i._currentValue),i._currentValue=a}function Li(t){t._currentValue=of.current,ee(of)}function lf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function uf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var S=0;S<i.length;S++)if(E.context===i[S]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),lf(d.return,a,t),l||(v=null);break e}d=E.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),lf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function jo(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var E=h.type;fn(h.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(h===ct.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}h=h.return}t!==null&&uf(i,t,a,l),i.flags|=262144}function ku(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){Rs=t,Ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return Zp(Rs,t)}function Vu(t,i){return Rs===null&&Is(t),Zp(t,i)}function Zp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ui===null){if(t===null)throw Error(s(308));Ui=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ui=Ui.next=i;return a}var qb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},Hb=r.unstable_scheduleCallback,Fb=r.unstable_NormalPriority,St={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new qb,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&Hb(Fb,function(){t.controller.abort()})}var Bo=null,hf=0,Ta=0,ba=null;function Gb(t,i){if(Bo===null){var a=Bo=[];hf=0,Ta=dd(),ba={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hf++,i.then(Wp,Wp),i}function Wp(){if(--hf===0&&Bo!==null){ba!==null&&(ba.status="fulfilled");var t=Bo;Bo=null,Ta=0,ba=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Qb(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Jp=G.S;G.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Gb(t,i),Jp!==null&&Jp(t,i)};var Cs=F(null);function ff(){var t=Cs.current;return t!==null?t:Je.pooledCache}function Pu(t,i){i===null?Z(Cs,Cs.current):Z(Cs,i.pool)}function eg(){var t=ff();return t===null?null:{parent:St._currentValue,pool:t}}var qo=Error(s(460)),tg=Error(s(474)),Uu=Error(s(542)),df={then:function(){}};function ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lu(){}function ig(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Lu,Lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sg(t),t;default:if(typeof i.status=="string")i.then(Lu,Lu);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,sg(t),t}throw Ho=i,qo}}var Ho=null;function rg(){if(Ho===null)throw Error(s(459));var t=Ho;return Ho=null,t}function sg(t){if(t===qo||t===Uu)throw Error(s(483))}var ur=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Du(t),Gp(t,null,a),i}return xu(t,l,i,a),Du(t)}function Fo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,_o(t,a)}}function gf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var yf=!1;function Go(){if(yf){var t=ba;if(t!==null)throw t}}function Qo(t,i,a,l){yf=!1;var h=t.updateQueue;ur=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var S=E,j=S.next;S.next=null,v===null?d=j:v.next=j,v=S;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==v&&(E===null?Q.firstBaseUpdate=j:E.next=j,Q.lastBaseUpdate=S))}if(d!==null){var Y=h.baseState;v=0,Q=j=S=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Le&z)===z:(l&z)===z){z!==0&&z===Ta&&(yf=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ee=t,ge=E;z=i;var Ze=a;switch(ge.tag){case 1:if(Ee=ge.payload,typeof Ee=="function"){Y=Ee.call(Ze,Y,z);break e}Y=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=ge.payload,z=typeof Ee=="function"?Ee.call(Ze,Y,z):Ee,z==null)break e;Y=T({},Y,z);break e;case 2:ur=!0}}z=E.callback,z!==null&&(t.flags|=64,B&&(t.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(j=Q=B,S=Y):Q=Q.next=B,v|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);Q===null&&(S=Y),h.baseState=S,h.firstBaseUpdate=j,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),vr|=v,t.lanes=v,t.memoizedState=Y}}function ag(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function og(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ag(a[t],i)}var Aa=F(null),ju=F(0);function lg(t,i){t=Gi,Z(ju,t),Z(Aa,i),Gi=t|i.baseLanes}function _f(){Z(ju,Gi),Z(Aa,Aa.current)}function vf(){Gi=ju.current,ee(Aa),ee(ju)}var fr=0,Re=null,Xe=null,yt=null,zu=!1,wa=!1,xs=!1,Bu=0,Ko=0,Sa=null,Kb=0;function ft(){throw Error(s(321))}function Ef(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fn(t[a],i[a]))return!1;return!0}function Tf(t,i,a,l,h,d){return fr=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Gg:Qg,xs=!1,d=a(l,h),xs=!1,wa&&(d=cg(i,a,l,h)),ug(t),d}function ug(t){G.H=Ku;var i=Xe!==null&&Xe.next!==null;if(fr=0,yt=Xe=Re=null,zu=!1,Ko=0,Sa=null,i)throw Error(s(300));t===null||Mt||(t=t.dependencies,t!==null&&ku(t)&&(Mt=!0))}function cg(t,i,a,l){Re=t;var h=0;do{if(wa&&(Sa=null),Ko=0,wa=!1,25<=h)throw Error(s(301));if(h+=1,yt=Xe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=eA,d=i(a,l)}while(wa);return d}function Yb(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?Yo(i):i,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(Re.flags|=1024),i}function bf(){var t=Bu!==0;return Bu=0,t}function Af(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function wf(t){if(zu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}zu=!1}fr=0,yt=Xe=Re=null,wa=!1,Ko=Bu=0,Sa=null}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Re.memoizedState=yt=t:yt=yt.next=t,yt}function _t(){if(Xe===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var i=yt===null?Re.memoizedState:yt.next;if(i!==null)yt=i,Xe=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},yt===null?Re.memoizedState=yt=t:yt=yt.next=t}return yt}function Sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var i=Ko;return Ko+=1,Sa===null&&(Sa=[]),t=ig(Sa,t,i),i=Re,(yt===null?i.memoizedState:yt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Gg:Qg),t}function qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===fe)return Qt(t)}throw Error(s(438,String(t)))}function Rf(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Sf(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=N;return i.index++,a}function ji(t,i){return typeof i=="function"?i(t):i}function Hu(t){var i=_t();return If(i,Xe,t)}function If(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=v=null,S=null,j=i,Q=!1;do{var Y=j.lane&-536870913;if(Y!==j.lane?(Le&Y)===Y:(fr&Y)===Y){var z=j.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Y===Ta&&(Q=!0);else if((fr&z)===z){j=j.next,z===Ta&&(Q=!0);continue}else Y={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(E=S=Y,v=d):S=S.next=Y,Re.lanes|=z,vr|=z;Y=j.action,xs&&a(d,Y),d=j.hasEagerState?j.eagerState:a(d,Y)}else z={lane:Y,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},S===null?(E=S=z,v=d):S=S.next=z,Re.lanes|=Y,vr|=Y;j=j.next}while(j!==null&&j!==i);if(S===null?v=d:S.next=E,!fn(d,t.memoizedState)&&(Mt=!0,Q&&(a=ba,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=S,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var i=_t(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);fn(d,i.memoizedState)||(Mt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function hg(t,i,a){var l=Re,h=_t(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!fn((Xe||h).memoizedState,a);v&&(h.memoizedState=a,Mt=!0),h=h.queue;var E=mg.bind(null,l,h,t);if(Xo(2048,8,E,[t]),h.getSnapshot!==i||v||yt!==null&&yt.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Fu(),dg.bind(null,l,h,a,i),null),Je===null)throw Error(s(349));d||(fr&124)!==0||fg(l,i,a)}return a}function fg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=Sf(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function dg(t,i,a,l){i.value=a,i.getSnapshot=l,pg(i)&&gg(t)}function mg(t,i,a){return a(function(){pg(i)&&gg(t)})}function pg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fn(t,a)}catch{return!0}}function gg(t){var i=ya(t,2);i!==null&&_n(i,t,2)}function xf(t){var i=rn();if(typeof t=="function"){var a=t;if(t=a(),xs){cn(!0);try{a()}finally{cn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:t},i}function yg(t,i,a,l){return t.baseState=a,If(t,Xe,typeof l=="function"?l:ji)}function Xb(t,i,a,l,h){if(Qu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,_g(i,d)):(d.next=a.next,i.pending=a.next=d)}}function _g(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=G.T,v={};G.T=v;try{var E=a(h,l),S=G.S;S!==null&&S(v,E),vg(t,i,E)}catch(j){Df(t,i,j)}finally{G.T=d}}else try{d=a(h,l),vg(t,i,d)}catch(j){Df(t,i,j)}}function vg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Eg(t,i,l)},function(l){return Df(t,i,l)}):Eg(t,i,a)}function Eg(t,i,a){i.status="fulfilled",i.value=a,Tg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,_g(t,a)))}function Df(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Tg(i),i=i.next;while(i!==l)}t.action=null}function Tg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function bg(t,i){return i}function Ag(t,i){if(Be){var a=Je.formState;if(a!==null){e:{var l=Re;if(Be){if(lt){t:{for(var h=lt,d=si;h.nodeType!==8;){if(!d){h=null;break t}if(h=qn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){lt=qn(h.nextSibling),l=h.data==="F!";break e}}Ss(l)}l=!1}l&&(i=a[0])}}return a=rn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:i},a.queue=l,a=qg.bind(null,Re,l),l.dispatch=a,l=xf(!1),d=Vf.bind(null,Re,!1,l.queue),l=rn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=Xb.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function wg(t){var i=_t();return Sg(i,Xe,t)}function Sg(t,i,a){if(i=If(t,i,bg)[0],t=Hu(ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Yo(i)}catch(v){throw v===qo?Uu:v}else l=i;i=_t();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,Ra(9,Fu(),$b.bind(null,h,a),null)),[l,d,t]}function $b(t,i){t.action=i}function Rg(t){var i=_t(),a=Xe;if(a!==null)return Sg(i,a,t);_t(),i=i.memoizedState,a=_t();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ra(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=Sf(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function Fu(){return{destroy:void 0,resource:void 0}}function Ig(){return _t().memoizedState}function Gu(t,i,a,l){var h=rn();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=Ra(1|i,Fu(),a,l)}function Xo(t,i,a,l){var h=_t();l=l===void 0?null:l;var d=h.memoizedState.inst;Xe!==null&&l!==null&&Ef(l,Xe.memoizedState.deps)?h.memoizedState=Ra(i,d,a,l):(Re.flags|=t,h.memoizedState=Ra(1|i,d,a,l))}function Cg(t,i){Gu(8390656,8,t,i)}function xg(t,i){Xo(2048,8,t,i)}function Dg(t,i){return Xo(4,2,t,i)}function Ng(t,i){return Xo(4,4,t,i)}function Og(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Mg(t,i,a){a=a!=null?a.concat([t]):null,Xo(4,4,Og.bind(null,i,t),a)}function Nf(){}function kg(t,i){var a=_t();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Ef(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Vg(t,i){var a=_t();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Ef(i,l[1]))return l[0];if(l=t(),xs){cn(!0);try{t()}finally{cn(!1)}}return a.memoizedState=[l,i],l}function Of(t,i,a){return a===void 0||(fr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=Ly(),Re.lanes|=t,vr|=t,a)}function Pg(t,i,a,l){return fn(a,i)?a:Aa.current!==null?(t=Of(t,a,l),fn(t,i)||(Mt=!0),t):(fr&42)===0?(Mt=!0,t.memoizedState=a):(t=Ly(),Re.lanes|=t,vr|=t,i)}function Ug(t,i,a,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var v=G.T,E={};G.T=E,Vf(t,!1,i,a);try{var S=h(),j=G.S;if(j!==null&&j(E,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Q=Qb(S,l);$o(t,i,Q,yn(t))}else $o(t,i,l,yn(t))}catch(Y){$o(t,i,{then:function(){},status:"rejected",reason:Y},yn())}finally{ne.p=d,G.T=v}}function Zb(){}function Mf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Lg(t).queue;Ug(t,h,i,ue,a===null?Zb:function(){return jg(t),a(l)})}function Lg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:ue},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function jg(t){var i=Lg(t).next.queue;$o(t,i,{},yn())}function kf(){return Qt(ml)}function zg(){return _t().memoizedState}function Bg(){return _t().memoizedState}function Wb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();t=cr(a);var l=hr(i,t,a);l!==null&&(_n(l,i,a),Fo(l,i,a)),i={cache:cf()},t.payload=i;return}i=i.return}}function Jb(t,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Qu(t)?Hg(i,a):(a=Jh(t,i,a,l),a!==null&&(_n(a,t,l),Fg(a,i,l)))}function qg(t,i,a){var l=yn();$o(t,i,a,l)}function $o(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qu(t))Hg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,E=d(v,a);if(h.hasEagerState=!0,h.eagerState=E,fn(E,v))return xu(t,i,h,0),Je===null&&Cu(),!1}catch{}finally{}if(a=Jh(t,i,h,l),a!==null)return _n(a,t,l),Fg(a,i,l),!0}return!1}function Vf(t,i,a,l){if(l={lane:2,revertLane:dd(),action:l,hasEagerState:!1,eagerState:null,next:null},Qu(t)){if(i)throw Error(s(479))}else i=Jh(t,a,l,2),i!==null&&_n(i,t,2)}function Qu(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Hg(t,i){wa=zu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Fg(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,_o(t,a)}}var Ku={readContext:Qt,use:qu,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft},Gg={readContext:Qt,use:qu,useCallback:function(t,i){return rn().memoizedState=[t,i===void 0?null:i],t},useContext:Qt,useEffect:Cg,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Gu(4194308,4,Og.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Gu(4194308,4,t,i)},useInsertionEffect:function(t,i){Gu(4,2,t,i)},useMemo:function(t,i){var a=rn();i=i===void 0?null:i;var l=t();if(xs){cn(!0);try{t()}finally{cn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=rn();if(a!==void 0){var h=a(i);if(xs){cn(!0);try{a(i)}finally{cn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Jb.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=rn();return t={current:t},i.memoizedState=t},useState:function(t){t=xf(t);var i=t.queue,a=qg.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Nf,useDeferredValue:function(t,i){var a=rn();return Of(a,t,i)},useTransition:function(){var t=xf(!1);return t=Ug.bind(null,Re,t.queue,!0,!1),rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=rn();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Je===null)throw Error(s(349));(Le&124)!==0||fg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Cg(mg.bind(null,l,d,t),[t]),l.flags|=2048,Ra(9,Fu(),dg.bind(null,l,d,a,i),null),a},useId:function(){var t=rn(),i=Je.identifierPrefix;if(Be){var a=Pi,l=Vi;a=(l&~(1<<32-Gt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Bu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Kb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:kf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t){var i=rn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Vf.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:Rf,useCacheRefresh:function(){return rn().memoizedState=Wb.bind(null,Re)}},Qg={readContext:Qt,use:qu,useCallback:kg,useContext:Qt,useEffect:xg,useImperativeHandle:Mg,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Vg,useReducer:Hu,useRef:Ig,useState:function(){return Hu(ji)},useDebugValue:Nf,useDeferredValue:function(t,i){var a=_t();return Pg(a,Xe.memoizedState,t,i)},useTransition:function(){var t=Hu(ji)[0],i=_t().memoizedState;return[typeof t=="boolean"?t:Yo(t),i]},useSyncExternalStore:hg,useId:zg,useHostTransitionStatus:kf,useFormState:wg,useActionState:wg,useOptimistic:function(t,i){var a=_t();return yg(a,Xe,t,i)},useMemoCache:Rf,useCacheRefresh:Bg},eA={readContext:Qt,use:qu,useCallback:kg,useContext:Qt,useEffect:xg,useImperativeHandle:Mg,useInsertionEffect:Dg,useLayoutEffect:Ng,useMemo:Vg,useReducer:Cf,useRef:Ig,useState:function(){return Cf(ji)},useDebugValue:Nf,useDeferredValue:function(t,i){var a=_t();return Xe===null?Of(a,t,i):Pg(a,Xe.memoizedState,t,i)},useTransition:function(){var t=Cf(ji)[0],i=_t().memoizedState;return[typeof t=="boolean"?t:Yo(t),i]},useSyncExternalStore:hg,useId:zg,useHostTransitionStatus:kf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t,i){var a=_t();return Xe!==null?yg(a,Xe,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:Bg},Ia=null,Zo=0;function Yu(t){var i=Zo;return Zo+=1,Ia===null&&(Ia=[]),ig(Ia,t,i)}function Wo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Xu(t,i){throw i.$$typeof===w?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Kg(t){var i=t._init;return i(t._payload)}function Yg(t){function i(V,D){if(t){var L=V.deletions;L===null?(V.deletions=[D],V.flags|=16):L.push(D)}}function a(V,D){if(!t)return null;for(;D!==null;)i(V,D),D=D.sibling;return null}function l(V){for(var D=new Map;V!==null;)V.key!==null?D.set(V.key,V):D.set(V.index,V),V=V.sibling;return D}function h(V,D){return V=ki(V,D),V.index=0,V.sibling=null,V}function d(V,D,L){return V.index=L,t?(L=V.alternate,L!==null?(L=L.index,L<D?(V.flags|=67108866,D):L):(V.flags|=67108866,D)):(V.flags|=1048576,D)}function v(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function E(V,D,L,K){return D===null||D.tag!==6?(D=tf(L,V.mode,K),D.return=V,D):(D=h(D,L),D.return=V,D)}function S(V,D,L,K){var ae=L.type;return ae===$?Q(V,D,L.props.children,K,L.key):D!==null&&(D.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===A&&Kg(ae)===D.type)?(D=h(D,L.props),Wo(D,L),D.return=V,D):(D=Nu(L.type,L.key,L.props,null,V.mode,K),Wo(D,L),D.return=V,D)}function j(V,D,L,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=nf(L,V.mode,K),D.return=V,D):(D=h(D,L.children||[]),D.return=V,D)}function Q(V,D,L,K,ae){return D===null||D.tag!==7?(D=Ts(L,V.mode,K,ae),D.return=V,D):(D=h(D,L),D.return=V,D)}function Y(V,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=tf(""+D,V.mode,L),D.return=V,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case I:return L=Nu(D.type,D.key,D.props,null,V.mode,L),Wo(L,D),L.return=V,L;case q:return D=nf(D,V.mode,L),D.return=V,D;case A:var K=D._init;return D=K(D._payload),Y(V,D,L)}if(tt(D)||P(D))return D=Ts(D,V.mode,L,null),D.return=V,D;if(typeof D.then=="function")return Y(V,Yu(D),L);if(D.$$typeof===fe)return Y(V,Vu(V,D),L);Xu(V,D)}return null}function z(V,D,L,K){var ae=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ae!==null?null:E(V,D,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case I:return L.key===ae?S(V,D,L,K):null;case q:return L.key===ae?j(V,D,L,K):null;case A:return ae=L._init,L=ae(L._payload),z(V,D,L,K)}if(tt(L)||P(L))return ae!==null?null:Q(V,D,L,K,null);if(typeof L.then=="function")return z(V,D,Yu(L),K);if(L.$$typeof===fe)return z(V,D,Vu(V,L),K);Xu(V,L)}return null}function B(V,D,L,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return V=V.get(L)||null,E(D,V,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return V=V.get(K.key===null?L:K.key)||null,S(D,V,K,ae);case q:return V=V.get(K.key===null?L:K.key)||null,j(D,V,K,ae);case A:var xe=K._init;return K=xe(K._payload),B(V,D,L,K,ae)}if(tt(K)||P(K))return V=V.get(L)||null,Q(D,V,K,ae,null);if(typeof K.then=="function")return B(V,D,L,Yu(K),ae);if(K.$$typeof===fe)return B(V,D,L,Vu(D,K),ae);Xu(D,K)}return null}function Ee(V,D,L,K){for(var ae=null,xe=null,ce=D,ye=D=0,Vt=null;ce!==null&&ye<L.length;ye++){ce.index>ye?(Vt=ce,ce=null):Vt=ce.sibling;var ze=z(V,ce,L[ye],K);if(ze===null){ce===null&&(ce=Vt);break}t&&ce&&ze.alternate===null&&i(V,ce),D=d(ze,D,ye),xe===null?ae=ze:xe.sibling=ze,xe=ze,ce=Vt}if(ye===L.length)return a(V,ce),Be&&As(V,ye),ae;if(ce===null){for(;ye<L.length;ye++)ce=Y(V,L[ye],K),ce!==null&&(D=d(ce,D,ye),xe===null?ae=ce:xe.sibling=ce,xe=ce);return Be&&As(V,ye),ae}for(ce=l(ce);ye<L.length;ye++)Vt=B(ce,V,ye,L[ye],K),Vt!==null&&(t&&Vt.alternate!==null&&ce.delete(Vt.key===null?ye:Vt.key),D=d(Vt,D,ye),xe===null?ae=Vt:xe.sibling=Vt,xe=Vt);return t&&ce.forEach(function(Cr){return i(V,Cr)}),Be&&As(V,ye),ae}function ge(V,D,L,K){if(L==null)throw Error(s(151));for(var ae=null,xe=null,ce=D,ye=D=0,Vt=null,ze=L.next();ce!==null&&!ze.done;ye++,ze=L.next()){ce.index>ye?(Vt=ce,ce=null):Vt=ce.sibling;var Cr=z(V,ce,ze.value,K);if(Cr===null){ce===null&&(ce=Vt);break}t&&ce&&Cr.alternate===null&&i(V,ce),D=d(Cr,D,ye),xe===null?ae=Cr:xe.sibling=Cr,xe=Cr,ce=Vt}if(ze.done)return a(V,ce),Be&&As(V,ye),ae;if(ce===null){for(;!ze.done;ye++,ze=L.next())ze=Y(V,ze.value,K),ze!==null&&(D=d(ze,D,ye),xe===null?ae=ze:xe.sibling=ze,xe=ze);return Be&&As(V,ye),ae}for(ce=l(ce);!ze.done;ye++,ze=L.next())ze=B(ce,V,ye,ze.value,K),ze!==null&&(t&&ze.alternate!==null&&ce.delete(ze.key===null?ye:ze.key),D=d(ze,D,ye),xe===null?ae=ze:xe.sibling=ze,xe=ze);return t&&ce.forEach(function(t1){return i(V,t1)}),Be&&As(V,ye),ae}function Ze(V,D,L,K){if(typeof L=="object"&&L!==null&&L.type===$&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case I:e:{for(var ae=L.key;D!==null;){if(D.key===ae){if(ae=L.type,ae===$){if(D.tag===7){a(V,D.sibling),K=h(D,L.props.children),K.return=V,V=K;break e}}else if(D.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===A&&Kg(ae)===D.type){a(V,D.sibling),K=h(D,L.props),Wo(K,L),K.return=V,V=K;break e}a(V,D);break}else i(V,D);D=D.sibling}L.type===$?(K=Ts(L.props.children,V.mode,K,L.key),K.return=V,V=K):(K=Nu(L.type,L.key,L.props,null,V.mode,K),Wo(K,L),K.return=V,V=K)}return v(V);case q:e:{for(ae=L.key;D!==null;){if(D.key===ae)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(V,D.sibling),K=h(D,L.children||[]),K.return=V,V=K;break e}else{a(V,D);break}else i(V,D);D=D.sibling}K=nf(L,V.mode,K),K.return=V,V=K}return v(V);case A:return ae=L._init,L=ae(L._payload),Ze(V,D,L,K)}if(tt(L))return Ee(V,D,L,K);if(P(L)){if(ae=P(L),typeof ae!="function")throw Error(s(150));return L=ae.call(L),ge(V,D,L,K)}if(typeof L.then=="function")return Ze(V,D,Yu(L),K);if(L.$$typeof===fe)return Ze(V,D,Vu(V,L),K);Xu(V,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(V,D.sibling),K=h(D,L),K.return=V,V=K):(a(V,D),K=tf(L,V.mode,K),K.return=V,V=K),v(V)):a(V,D)}return function(V,D,L,K){try{Zo=0;var ae=Ze(V,D,L,K);return Ia=null,ae}catch(ce){if(ce===qo||ce===Uu)throw ce;var xe=dn(29,ce,null,V.mode);return xe.lanes=K,xe.return=V,xe}finally{}}}var Ca=Yg(!0),Xg=Yg(!1),Nn=F(null),ai=null;function dr(t){var i=t.alternate;Z(Rt,Rt.current&1),Z(Nn,t),ai===null&&(i===null||Aa.current!==null||i.memoizedState!==null)&&(ai=t)}function $g(t){if(t.tag===22){if(Z(Rt,Rt.current),Z(Nn,t),ai===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(ai=t)}}else mr()}function mr(){Z(Rt,Rt.current),Z(Nn,Nn.current)}function zi(t){ee(Nn),ai===t&&(ai=null),ee(Rt)}var Rt=F(0);function $u(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Sd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Pf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=yn(),h=cr(l);h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,l),i!==null&&(_n(i,t,l),Fo(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=yn(),h=cr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=hr(t,h,l),i!==null&&(_n(i,t,l),Fo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=yn(),l=cr(a);l.tag=2,i!=null&&(l.callback=i),i=hr(t,l,a),i!==null&&(_n(i,t,a),Fo(i,t,a))}};function Zg(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!ko(a,l)||!ko(h,d):!0}function Wg(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Uf.enqueueReplaceState(i,i.state,null)}function Ds(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jg(t){Zu(t)}function ey(t){console.error(t)}function ty(t){Zu(t)}function Wu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ny(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Lf(t,i,a){return a=cr(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(t,i)},a}function iy(t){return t=cr(t),t.tag=3,t}function ry(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){ny(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){ny(i,a,l),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function tA(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&jo(i,a,h,!0),a=Nn.current,a!==null){switch(a.tag){case 13:return ai===null?ld():a.alternate===null&&ut===0&&(ut=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===df?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),cd(t,l,h)),!1;case 22:return a.flags|=65536,l===df?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),cd(t,l,h)),!1}throw Error(s(435,a.tag))}return cd(t,l,h),ld(),!1}if(Be)return i=Nn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==af&&(t=Error(s(422),{cause:l}),Lo(In(t,a)))):(l!==af&&(i=Error(s(423),{cause:l}),Lo(In(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=In(l,a),h=Lf(t.stateNode,l,h),gf(t,h),ut!==4&&(ut=2)),!1;var d=Error(s(520),{cause:l});if(d=In(d,a),sl===null?sl=[d]:sl.push(d),ut!==4&&(ut=2),i===null)return!0;l=In(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Lf(a.stateNode,l,t),gf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Er===null||!Er.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=iy(h),ry(h,t,a,l),gf(a,h),!1}a=a.return}while(a!==null);return!1}var sy=Error(s(461)),Mt=!1;function jt(t,i,a,l){i.child=t===null?Xg(i,null,a,l):Ca(i,t.child,a,l)}function ay(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var E in l)E!=="ref"&&(v[E]=l[E])}else v=l;return Is(i),l=Tf(t,i,a,v,d,h),E=bf(),t!==null&&!Mt?(Af(t,i,h),Bi(t,i,h)):(Be&&E&&rf(i),i.flags|=1,jt(t,i,l,h),i.child)}function oy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!ef(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ly(t,i,d,l,h)):(t=Nu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Qf(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(v,l)&&t.ref===i.ref)return Bi(t,i,h)}return i.flags|=1,t=ki(d,l),t.ref=i.ref,t.return=i,i.child=t}function ly(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(ko(d,l)&&t.ref===i.ref)if(Mt=!1,i.pendingProps=l=d,Qf(t,h))(t.flags&131072)!==0&&(Mt=!0);else return i.lanes=t.lanes,Bi(t,i,h)}return jf(t,i,a,l,h)}function uy(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return cy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pu(i,d!==null?d.cachePool:null),d!==null?lg(i,d):_f(),$g(i);else return i.lanes=i.childLanes=536870912,cy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Pu(i,d.cachePool),lg(i,d),mr(),i.memoizedState=null):(t!==null&&Pu(i,null),_f(),mr());return jt(t,i,h,a),i.child}function cy(t,i,a,l){var h=ff();return h=h===null?null:{parent:St._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Pu(i,null),_f(),$g(i),t!==null&&jo(t,i,l,!0),null}function Ju(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function jf(t,i,a,l,h){return Is(i),a=Tf(t,i,a,l,void 0,h),l=bf(),t!==null&&!Mt?(Af(t,i,h),Bi(t,i,h)):(Be&&l&&rf(i),i.flags|=1,jt(t,i,a,h),i.child)}function hy(t,i,a,l,h,d){return Is(i),i.updateQueue=null,a=cg(i,l,a,h),ug(t),l=bf(),t!==null&&!Mt?(Af(t,i,d),Bi(t,i,d)):(Be&&l&&rf(i),i.flags|=1,jt(t,i,a,d),i.child)}function fy(t,i,a,l,h){if(Is(i),i.stateNode===null){var d=_a,v=a.contextType;typeof v=="object"&&v!==null&&(d=Qt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},mf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Qt(v):_a,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Pf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Uf.enqueueReplaceState(d,d.state,null),Qo(i,l,d,h),Go(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,S=Ds(a,E);d.props=S;var j=d.context,Q=a.contextType;v=_a,typeof Q=="object"&&Q!==null&&(v=Qt(Q));var Y=a.getDerivedStateFromProps;Q=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||j!==v)&&Wg(i,d,l,v),ur=!1;var z=i.memoizedState;d.state=z,Qo(i,l,d,h),Go(),j=i.memoizedState,E||z!==j||ur?(typeof Y=="function"&&(Pf(i,a,Y,l),j=i.memoizedState),(S=ur||Zg(i,a,S,l,z,j,v))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=v,l=S):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,pf(t,i),v=i.memoizedProps,Q=Ds(a,v),d.props=Q,Y=i.pendingProps,z=d.context,j=a.contextType,S=_a,typeof j=="object"&&j!==null&&(S=Qt(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||z!==S)&&Wg(i,d,l,S),ur=!1,z=i.memoizedState,d.state=z,Qo(i,l,d,h),Go();var B=i.memoizedState;v!==Y||z!==B||ur||t!==null&&t.dependencies!==null&&ku(t.dependencies)?(typeof E=="function"&&(Pf(i,a,E,l),B=i.memoizedState),(Q=ur||Zg(i,a,Q,l,z,B,S)||t!==null&&t.dependencies!==null&&ku(t.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,S)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=S,l=Q):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&z===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ju(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ca(i,t.child,null,h),i.child=Ca(i,null,a,h)):jt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Bi(t,i,h),t}function dy(t,i,a,l){return Uo(),i.flags|=256,jt(t,i,a,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:eg()}}function qf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=On),t}function my(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(Rt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?dr(i):mr(),Be){var E=lt,S;if(S=E){e:{for(S=E,E=si;S.nodeType!==8;){if(!E){E=null;break e}if(S=qn(S.nextSibling),S===null){E=null;break e}}E=S}E!==null?(i.memoizedState={dehydrated:E,treeContext:bs!==null?{id:Vi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},S=dn(18,null,null,0),S.stateNode=E,S.return=i,i.child=S,nn=i,lt=null,S=!0):S=!1}S||Ss(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Sd(E)?i.lanes=32:i.lanes=536870912,null;zi(i)}return E=l.children,l=l.fallback,h?(mr(),h=i.mode,E=ec({mode:"hidden",children:E},h),l=Ts(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=Bf(a),h.childLanes=qf(t,v,a),i.memoizedState=zf,l):(dr(i),Hf(i,E))}if(S=t.memoizedState,S!==null&&(E=S.dehydrated,E!==null)){if(d)i.flags&256?(dr(i),i.flags&=-257,i=Ff(t,i,a)):i.memoizedState!==null?(mr(),i.child=t.child,i.flags|=128,i=null):(mr(),h=l.fallback,E=i.mode,l=ec({mode:"visible",children:l.children},E),h=Ts(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ca(i,t.child,null,a),l=i.child,l.memoizedState=Bf(a),l.childLanes=qf(t,v,a),i.memoizedState=zf,i=h);else if(dr(i),Sd(E)){if(v=E.nextSibling&&E.nextSibling.dataset,v)var j=v.dgst;v=j,l=Error(s(419)),l.stack="",l.digest=v,Lo({value:l,source:null,stack:null}),i=Ff(t,i,a)}else if(Mt||jo(t,i,a,!1),v=(a&t.childLanes)!==0,Mt||v){if(v=Je,v!==null&&(l=a&-a,l=(l&42)!==0?1:tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==S.retryLane))throw S.retryLane=l,ya(t,l),_n(v,t,l),sy;E.data==="$?"||ld(),i=Ff(t,i,a)}else E.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=S.treeContext,lt=qn(E.nextSibling),nn=i,Be=!0,ws=null,si=!1,t!==null&&(xn[Dn++]=Vi,xn[Dn++]=Pi,xn[Dn++]=bs,Vi=t.id,Pi=t.overflow,bs=i),i=Hf(i,l.children),i.flags|=4096);return i}return h?(mr(),h=l.fallback,E=i.mode,S=t.child,j=S.sibling,l=ki(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,j!==null?h=ki(j,h):(h=Ts(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E===null?E=Bf(a):(S=E.cachePool,S!==null?(j=St._currentValue,S=S.parent!==j?{parent:j,pool:j}:S):S=eg(),E={baseLanes:E.baseLanes|a,cachePool:S}),h.memoizedState=E,h.childLanes=qf(t,v,a),i.memoizedState=zf,l):(dr(i),a=t.child,t=a.sibling,a=ki(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Hf(t,i){return i=ec({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ec(t,i){return t=dn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ff(t,i,a){return Ca(i,t.child,null,a),t=Hf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function py(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lf(t.return,i,a)}function Gf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function gy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(jt(t,i,l.children,a),l=Rt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,a,i);else if(t.tag===19)py(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Z(Rt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&$u(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Gf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&$u(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Gf(i,!0,a,null,d);break;case"together":Gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),vr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(jo(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=ki(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=ki(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Qf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ku(t)))}function nA(t,i,a){switch(i.tag){case 3:Ke(i,i.stateNode.containerInfo),lr(i,St,t.memoizedState.cache),Uo();break;case 27:case 5:er(i);break;case 4:Ke(i,i.stateNode.containerInfo);break;case 10:lr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?my(t,i,a):(dr(i),t=Bi(t,i,a),t!==null?t.sibling:null);dr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(jo(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return gy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Z(Rt,Rt.current),l)break;return null;case 22:case 23:return i.lanes=0,uy(t,i,a);case 24:lr(i,St,t.memoizedState.cache)}return Bi(t,i,a)}function yy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mt=!0;else{if(!Qf(t,a)&&(i.flags&128)===0)return Mt=!1,nA(t,i,a);Mt=(t.flags&131072)!==0}else Mt=!1,Be&&(i.flags&1048576)!==0&&Kp(i,Mu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")ef(l)?(t=Ds(l,t),i.tag=1,i=fy(null,i,l,t,a)):(i.tag=0,i=jf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===De){i.tag=11,i=ay(null,i,l,t,a);break e}else if(h===O){i.tag=14,i=oy(null,i,l,t,a);break e}}throw i=Tt(l)||l,Error(s(306,i,""))}}return i;case 0:return jf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ds(l,i.pendingProps),fy(t,i,l,h,a);case 3:e:{if(Ke(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,pf(t,i),Qo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,lr(i,St,l),l!==d.cache&&uf(i,[St],a,!0),Go(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=dy(t,i,l,a);break e}else if(l!==h){h=In(Error(s(424)),i),Lo(h),i=dy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(lt=qn(t.firstChild),nn=i,Be=!0,ws=null,si=!0,a=Xg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Uo(),l===h){i=Bi(t,i,a);break e}jt(t,i,l,a)}i=i.child}return i;case 26:return Ju(t,i),t===null?(a=T_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Be||(a=i.type,t=i.pendingProps,l=mc(de.current).createElement(a),l[bt]=i,l[pt]=t,Bt(l,a,t),ht(l),i.stateNode=l):i.memoizedState=T_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return er(i),t===null&&Be&&(l=i.stateNode=__(i.type,i.pendingProps,de.current),nn=i,si=!0,h=lt,Ar(i.type)?(Rd=h,lt=qn(l.firstChild)):lt=h),jt(t,i,i.pendingProps.children,a),Ju(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Be&&((h=l=lt)&&(l=DA(l,i.type,i.pendingProps,si),l!==null?(i.stateNode=l,nn=i,lt=qn(l.firstChild),si=!1,h=!0):h=!1),h||Ss(i)),er(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,bd(h,d)?l=null:v!==null&&bd(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Tf(t,i,Yb,null,null,a),ml._currentValue=h),Ju(t,i),jt(t,i,l,a),i.child;case 6:return t===null&&Be&&((t=a=lt)&&(a=NA(a,i.pendingProps,si),a!==null?(i.stateNode=a,nn=i,lt=null,t=!0):t=!1),t||Ss(i)),null;case 13:return my(t,i,a);case 4:return Ke(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ca(i,null,l,a):jt(t,i,l,a),i.child;case 11:return ay(t,i,i.type,i.pendingProps,a);case 7:return jt(t,i,i.pendingProps,a),i.child;case 8:return jt(t,i,i.pendingProps.children,a),i.child;case 12:return jt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,lr(i,i.type,l.value),jt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Is(i),h=Qt(h),l=l(h),i.flags|=1,jt(t,i,l,a),i.child;case 14:return oy(t,i,i.type,i.pendingProps,a);case 15:return ly(t,i,i.type,i.pendingProps,a);case 19:return gy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=ec(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=ki(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return uy(t,i,a);case 24:return Is(i),l=Qt(St),t===null?(h=ff(),h===null&&(h=Je,d=cf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},mf(i),lr(i,St,h)):((t.lanes&a)!==0&&(pf(t,i),Qo(i,null,null,a),Go()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),lr(i,St,l)):(l=d.cache,lr(i,St,l),l!==h.cache&&uf(i,[St],a,!0))),jt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function qi(t){t.flags|=4}function _y(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R_(i)){if(i=Nn.current,i!==null&&((Le&4194048)===Le?ai!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==ai))throw Ho=df,tg;t.flags|=8192}}function tc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?go():536870912,t.lanes|=i,Oa|=i)}function Jo(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function iA(t,i,a){var l=i.pendingProps;switch(sf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(i),null;case 1:return rt(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Li(St),Kn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Po(i)?qi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$p())),rt(i),null;case 26:return a=i.memoizedState,t===null?(qi(i),a!==null?(rt(i),_y(i,a)):(rt(i),i.flags&=-16777217)):a?a!==t.memoizedState?(qi(i),rt(i),_y(i,a)):(rt(i),i.flags&=-16777217):(t.memoizedProps!==l&&qi(i),rt(i),i.flags&=-16777217),null;case 27:Ti(i),a=de.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return rt(i),null}t=se.current,Po(i)?Yp(i):(t=__(h,l,a),i.stateNode=t,qi(i))}return rt(i),null;case 5:if(Ti(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return rt(i),null}if(t=se.current,Po(i))Yp(i);else{switch(h=mc(de.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[bt]=i,t[pt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Bt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qi(i)}}return rt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&qi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=de.current,Po(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=nn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[bt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||h_(t.nodeValue,a)),t||Ss(i)}else t=mc(t).createTextNode(l),t[bt]=i,i.stateNode=t}return rt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Po(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[bt]=i}else Uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rt(i),h=!1}else h=$p(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(zi(i),i):(zi(i),null)}if(zi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),tc(i,i.updateQueue),rt(i),null;case 4:return Kn(),t===null&&yd(i.stateNode.containerInfo),rt(i),null;case 10:return Li(i.type),rt(i),null;case 19:if(ee(Rt),h=i.memoizedState,h===null)return rt(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Jo(h,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=$u(t),d!==null){for(i.flags|=128,Jo(h,!1),t=d.updateQueue,i.updateQueue=t,tc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Qp(a,t),a=a.sibling;return Z(Rt,Rt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Tn()>rc&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304)}else{if(!l)if(t=$u(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,tc(i,t),Jo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Be)return rt(i),null}else 2*Tn()-h.renderingStartTime>rc&&a!==536870912&&(i.flags|=128,l=!0,Jo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,t=Rt.current,Z(Rt,l?t&1|2:t&1),i):(rt(i),null);case 22:case 23:return zi(i),vf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(rt(i),i.subtreeFlags&6&&(i.flags|=8192)):rt(i),a=i.updateQueue,a!==null&&tc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&ee(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Li(St),rt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function rA(t,i){switch(sf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Li(St),Kn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ti(i),null;case 13:if(zi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Uo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ee(Rt),null;case 4:return Kn(),null;case 10:return Li(i.type),null;case 22:case 23:return zi(i),vf(),t!==null&&ee(Cs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Li(St),null;case 25:return null;default:return null}}function vy(t,i){switch(sf(i),i.tag){case 3:Li(St),Kn();break;case 26:case 27:case 5:Ti(i);break;case 4:Kn();break;case 13:zi(i);break;case 19:ee(Rt);break;case 10:Li(i.type);break;case 22:case 23:zi(i),vf(),t!==null&&ee(Cs);break;case 24:Li(St)}}function el(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(E){We(i,i.return,E)}}function pr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,h=i;var S=a,j=E;try{j()}catch(Q){We(h,S,Q)}}}l=l.next}while(l!==d)}}catch(Q){We(i,i.return,Q)}}function Ey(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{og(i,a)}catch(l){We(t,t.return,l)}}}function Ty(t,i,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){We(t,i,l)}}function tl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){We(t,i,h)}}function oi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){We(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){We(t,i,h)}else a.current=null}function by(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){We(t,t.return,h)}}function Kf(t,i,a){try{var l=t.stateNode;SA(l,t.type,a,i),l[pt]=i}catch(h){We(t,t.return,h)}}function Ay(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ar(t.type)||t.tag===4}function Yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=dc));else if(l!==4&&(l===27&&Ar(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Xf(t,i,a),t=t.sibling;t!==null;)Xf(t,i,a),t=t.sibling}function nc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Ar(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(nc(t,i,a),t=t.sibling;t!==null;)nc(t,i,a),t=t.sibling}function wy(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Bt(i,l,a),i[bt]=t,i[pt]=a}catch(d){We(t,t.return,d)}}var Hi=!1,dt=!1,$f=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,kt=null;function sA(t,i){if(t=t.containerInfo,Ed=Ec,t=Pp(t),Kh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,E=-1,S=-1,j=0,Q=0,Y=t,z=null;t:for(;;){for(var B;Y!==a||h!==0&&Y.nodeType!==3||(E=v+h),Y!==d||l!==0&&Y.nodeType!==3||(S=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(B=Y.firstChild)!==null;)z=Y,Y=B;for(;;){if(Y===t)break t;if(z===a&&++j===h&&(E=v),z===d&&++Q===l&&(S=v),(B=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=B}a=E===-1||S===-1?null:{start:E,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Td={focusedElem:t,selectionRange:a},Ec=!1,kt=i;kt!==null;)if(i=kt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,kt=t;else for(;kt!==null;){switch(i=kt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ee=Ds(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Ee,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ge){We(a,a.return,ge)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)wd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":wd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,kt=t;break}kt=i.return}}function Ry(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:gr(t,a),l&4&&el(5,a);break;case 1:if(gr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){We(a,a.return,v)}else{var h=Ds(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){We(a,a.return,v)}}l&64&&Ey(a),l&512&&tl(a,a.return);break;case 3:if(gr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{og(t,i)}catch(v){We(a,a.return,v)}}break;case 27:i===null&&l&4&&wy(a);case 26:case 5:gr(t,a),i===null&&l&4&&by(a),l&512&&tl(a,a.return);break;case 12:gr(t,a);break;case 13:gr(t,a),l&4&&xy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mA.bind(null,a),OA(t,a))));break;case 22:if(l=a.memoizedState!==null||Hi,!l){i=i!==null&&i.memoizedState!==null||dt,h=Hi;var d=dt;Hi=l,(dt=i)&&!d?yr(t,a,(a.subtreeFlags&8772)!==0):gr(t,a),Hi=h,dt=d}break;case 30:break;default:gr(t,a)}}function Iy(t){var i=t.alternate;i!==null&&(t.alternate=null,Iy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&rr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var it=null,sn=!1;function Fi(t,i,a){for(a=a.child;a!==null;)Cy(t,i,a),a=a.sibling}function Cy(t,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:dt||oi(a,i),Fi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||oi(a,i);var l=it,h=sn;Ar(a.type)&&(it=a.stateNode,sn=!1),Fi(t,i,a),cl(a.stateNode),it=l,sn=h;break;case 5:dt||oi(a,i);case 6:if(l=it,h=sn,it=null,Fi(t,i,a),it=l,sn=h,it!==null)if(sn)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(d){We(a,i,d)}else try{it.removeChild(a.stateNode)}catch(d){We(a,i,d)}break;case 18:it!==null&&(sn?(t=it,g_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_l(t)):g_(it,a.stateNode));break;case 4:l=it,h=sn,it=a.stateNode.containerInfo,sn=!0,Fi(t,i,a),it=l,sn=h;break;case 0:case 11:case 14:case 15:dt||pr(2,a,i),dt||pr(4,a,i),Fi(t,i,a);break;case 1:dt||(oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ty(a,i,l)),Fi(t,i,a);break;case 21:Fi(t,i,a);break;case 22:dt=(l=dt)||a.memoizedState!==null,Fi(t,i,a),dt=l;break;default:Fi(t,i,a)}}function xy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_l(t)}catch(a){We(i,i.return,a)}}function aA(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Sy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Sy),i;default:throw Error(s(435,t.tag))}}function Zf(t,i){var a=aA(t);i.forEach(function(l){var h=pA.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,E=v;e:for(;E!==null;){switch(E.tag){case 27:if(Ar(E.type)){it=E.stateNode,sn=!1;break e}break;case 5:it=E.stateNode,sn=!1;break e;case 3:case 4:it=E.stateNode.containerInfo,sn=!0;break e}E=E.return}if(it===null)throw Error(s(160));Cy(d,v,h),it=null,sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Dy(i,t),i=i.sibling}var Bn=null;function Dy(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:mn(i,t),pn(t),l&4&&(pr(3,t,t.return),el(3,t),pr(5,t,t.return));break;case 1:mn(i,t),pn(t),l&512&&(dt||a===null||oi(a,a.return)),l&64&&Hi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(mn(i,t),pn(t),l&512&&(dt||a===null||oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ss]||d[bt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Bt(d,l,a),d[bt]=t,ht(d),l=d;break e;case"link":var v=w_("link","href",h).get(l+(a.href||""));if(v){for(var E=0;E<v.length;E++)if(d=v[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(E,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=w_("meta","content",h).get(l+(a.content||""))){for(E=0;E<v.length;E++)if(d=v[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(E,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[bt]=t,ht(d),l=d}t.stateNode=l}else S_(h,t.type,t.stateNode);else t.stateNode=A_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?S_(h,t.type,t.stateNode):A_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:mn(i,t),pn(t),l&512&&(dt||a===null||oi(a,a.return)),a!==null&&l&4&&Kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,t),pn(t),l&512&&(dt||a===null||oi(a,a.return)),t.flags&32){h=t.stateNode;try{An(h,"")}catch(B){We(t,t.return,B)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Kf(t,h,a!==null?a.memoizedProps:h)),l&1024&&($f=!0);break;case 6:if(mn(i,t),pn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(B){We(t,t.return,B)}}break;case 3:if(yc=null,h=Bn,Bn=pc(i.containerInfo),mn(i,t),Bn=h,pn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(i.containerInfo)}catch(B){We(t,t.return,B)}$f&&($f=!1,Ny(t));break;case 4:l=Bn,Bn=pc(t.stateNode.containerInfo),mn(i,t),pn(t),Bn=l;break;case 12:mn(i,t),pn(t);break;case 13:mn(i,t),pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(id=Tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zf(t,l)));break;case 22:h=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,j=Hi,Q=dt;if(Hi=j||h,dt=Q||S,mn(i,t),dt=Q,Hi=j,pn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||S||Hi||dt||Ns(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){S=a=i;try{if(d=S.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{E=S.stateNode;var Y=S.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){We(S,S.return,B)}}}else if(i.tag===6){if(a===null){S=i;try{S.stateNode.nodeValue=h?"":S.memoizedProps}catch(B){We(S,S.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zf(t,a))));break;case 19:mn(i,t),pn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Zf(t,l)));break;case 30:break;case 21:break;default:mn(i,t),pn(t)}}function pn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Ay(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Yf(t);nc(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(An(v,""),a.flags&=-33);var E=Yf(t);nc(t,E,v);break;case 3:case 4:var S=a.stateNode.containerInfo,j=Yf(t);Xf(t,j,S);break;default:throw Error(s(161))}}catch(Q){We(t,t.return,Q)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ny(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ny(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function gr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ry(t,i.alternate,i),i=i.sibling}function Ns(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:pr(4,i,i.return),Ns(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ty(i,i.return,a),Ns(i);break;case 27:cl(i.stateNode);case 26:case 5:oi(i,i.return),Ns(i);break;case 22:i.memoizedState===null&&Ns(i);break;case 30:Ns(i);break;default:Ns(i)}t=t.sibling}}function yr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:yr(h,d,a),el(4,d);break;case 1:if(yr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){We(l,l.return,j)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var S=h.shared.hiddenCallbacks;if(S!==null)for(h.shared.hiddenCallbacks=null,h=0;h<S.length;h++)ag(S[h],E)}catch(j){We(l,l.return,j)}}a&&v&64&&Ey(d),tl(d,d.return);break;case 27:wy(d);case 26:case 5:yr(h,d,a),a&&l===null&&v&4&&by(d),tl(d,d.return);break;case 12:yr(h,d,a);break;case 13:yr(h,d,a),a&&v&4&&xy(h,d);break;case 22:d.memoizedState===null&&yr(h,d,a),tl(d,d.return);break;case 30:break;default:yr(h,d,a)}i=i.sibling}}function Wf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function Jf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zo(t))}function li(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Oy(t,i,a,l),i=i.sibling}function Oy(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(t,i,a,l),h&2048&&el(9,i);break;case 1:li(t,i,a,l);break;case 3:li(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&zo(t)));break;case 12:if(h&2048){li(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,E=d.onPostCommit;typeof E=="function"&&E(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){We(i,i.return,S)}}else li(t,i,a,l);break;case 13:li(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(t,i,a,l):nl(t,i):d._visibility&2?li(t,i,a,l):(d._visibility|=2,xa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Wf(v,i);break;case 24:li(t,i,a,l),h&2048&&Jf(i.alternate,i);break;default:li(t,i,a,l)}}function xa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,E=a,S=l,j=v.flags;switch(v.tag){case 0:case 11:case 15:xa(d,v,E,S,h),el(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?xa(d,v,E,S,h):nl(d,v):(Q._visibility|=2,xa(d,v,E,S,h)),h&&j&2048&&Wf(v.alternate,v);break;case 24:xa(d,v,E,S,h),h&&j&2048&&Jf(v.alternate,v);break;default:xa(d,v,E,S,h)}i=i.sibling}}function nl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:nl(a,l),h&2048&&Wf(l.alternate,l);break;case 24:nl(a,l),h&2048&&Jf(l.alternate,l);break;default:nl(a,l)}i=i.sibling}}var il=8192;function Da(t){if(t.subtreeFlags&il)for(t=t.child;t!==null;)My(t),t=t.sibling}function My(t){switch(t.tag){case 26:Da(t),t.flags&il&&t.memoizedState!==null&&GA(Bn,t.memoizedState,t.memoizedProps);break;case 5:Da(t);break;case 3:case 4:var i=Bn;Bn=pc(t.stateNode.containerInfo),Da(t),Bn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=il,il=16777216,Da(t),il=i):Da(t));break;default:Da(t)}}function ky(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function rl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Py(l,t)}ky(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vy(t),t=t.sibling}function Vy(t){switch(t.tag){case 0:case 11:case 15:rl(t),t.flags&2048&&pr(9,t,t.return);break;case 3:rl(t);break;case 12:rl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ic(t)):rl(t);break;default:rl(t)}}function ic(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,Py(l,t)}ky(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:pr(8,i,i.return),ic(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ic(i));break;default:ic(i)}t=t.sibling}}function Py(t,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:pr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=t;kt!==null;){l=kt;var h=l.sibling,d=l.return;if(Iy(l),l===a){kt=null;break e}if(h!==null){h.return=d,kt=h;break e}kt=d}}}var oA={getCacheForType:function(t){var i=Qt(St),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},lA=typeof WeakMap=="function"?WeakMap:Map,Ge=0,Je=null,Ne=null,Le=0,Qe=0,gn=null,_r=!1,Na=!1,ed=!1,Gi=0,ut=0,vr=0,Os=0,td=0,On=0,Oa=0,sl=null,an=null,nd=!1,id=0,rc=1/0,sc=null,Er=null,zt=0,Tr=null,Ma=null,ka=0,rd=0,sd=null,Uy=null,al=0,ad=null;function yn(){if((Ge&2)!==0&&Le!==0)return Le&-Le;if(G.T!==null){var t=Ta;return t!==0?t:dd()}return nr()}function Ly(){On===0&&(On=(Le&536870912)===0||Be?po():536870912);var t=Nn.current;return t!==null&&(t.flags|=32),On}function _n(t,i,a){(t===Je&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(Va(t,0),br(t,Le,On,!1)),Ai(t,a),((Ge&2)===0||t!==Je)&&(t===Je&&((Ge&2)===0&&(Os|=a),ut===4&&br(t,Le,On,!1)),ui(t))}function jy(t,i,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||rs(t,i),h=l?hA(t,i):ud(t,i,!0),d=l;do{if(h===0){Na&&!l&&br(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!uA(a)){h=ud(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var E=t;h=sl;var S=E.current.memoizedState.isDehydrated;if(S&&(Va(E,v).flags|=256),v=ud(E,v,!1),v!==2){if(ed&&!S){E.errorRecoveryDisabledLanes|=d,Os|=d,h=4;break e}d=an,an=h,d!==null&&(an===null?an=d:an.push.apply(an,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Va(t,0),br(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,On,!_r);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=id+300-Tn(),10<h)){if(br(l,i,On,!_r),Ws(l,0,!0)!==0)break e;l.timeoutHandle=m_(zy.bind(null,l,a,an,sc,nd,i,On,Os,Oa,_r,d,2,-0,0),h);break e}zy(l,a,an,sc,nd,i,On,Os,Oa,_r,d,0,-0,0)}}break}while(!0);ui(t)}function zy(t,i,a,l,h,d,v,E,S,j,Q,Y,z,B){if(t.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(dl={stylesheets:null,count:0,unsuspend:FA},My(i),Y=QA(),Y!==null)){t.cancelPendingCommit=Y(Ky.bind(null,t,i,d,a,l,h,v,E,S,Q,1,z,B)),br(t,d,v,!j);return}Ky(t,i,d,a,l,h,v,E,S)}function uA(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(t,i,a,l){i&=~td,i&=~Os,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Gt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Yn(t,a,i)}function ac(){return(Ge&6)===0?(ol(0),!1):!0}function od(){if(Ne!==null){if(Qe===0)var t=Ne.return;else t=Ne,Ui=Rs=null,wf(t),Ia=null,Zo=0,t=Ne;for(;t!==null;)vy(t.alternate,t),t=t.return;Ne=null}}function Va(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,IA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),od(),Je=t,Ne=a=ki(t.current,null),Le=i,Qe=0,gn=null,_r=!1,Na=rs(t,i),ed=!1,Oa=On=td=Os=vr=ut=0,an=sl=null,nd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Gt(l),d=1<<h;i|=t[h],l&=~d}return Gi=i,Cu(),a}function By(t,i){Re=null,G.H=Ku,i===qo||i===Uu?(i=rg(),Qe=3):i===tg?(i=rg(),Qe=4):Qe=i===sy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ne===null&&(ut=1,Wu(t,In(i,t.current)))}function qy(){var t=G.H;return G.H=Ku,t===null?Ku:t}function Hy(){var t=G.A;return G.A=oA,t}function ld(){ut=4,_r||(Le&4194048)!==Le&&Nn.current!==null||(Na=!0),(vr&134217727)===0&&(Os&134217727)===0||Je===null||br(Je,Le,On,!1)}function ud(t,i,a){var l=Ge;Ge|=2;var h=qy(),d=Hy();(Je!==t||Le!==i)&&(sc=null,Va(t,i)),i=!1;var v=ut;e:do try{if(Qe!==0&&Ne!==null){var E=Ne,S=gn;switch(Qe){case 8:od(),v=6;break e;case 3:case 2:case 9:case 6:Nn.current===null&&(i=!0);var j=Qe;if(Qe=0,gn=null,Pa(t,E,S,j),a&&Na){v=0;break e}break;default:j=Qe,Qe=0,gn=null,Pa(t,E,S,j)}}cA(),v=ut;break}catch(Q){By(t,Q)}while(!0);return i&&t.shellSuspendCounter++,Ui=Rs=null,Ge=l,G.H=h,G.A=d,Ne===null&&(Je=null,Le=0,Cu()),v}function cA(){for(;Ne!==null;)Fy(Ne)}function hA(t,i){var a=Ge;Ge|=2;var l=qy(),h=Hy();Je!==t||Le!==i?(sc=null,rc=Tn()+500,Va(t,i)):Na=rs(t,i);e:do try{if(Qe!==0&&Ne!==null){i=Ne;var d=gn;t:switch(Qe){case 1:Qe=0,gn=null,Pa(t,i,d,1);break;case 2:case 9:if(ng(d)){Qe=0,gn=null,Gy(i);break}i=function(){Qe!==2&&Qe!==9||Je!==t||(Qe=7),ui(t)},d.then(i,i);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:ng(d)?(Qe=0,gn=null,Gy(i)):(Qe=0,gn=null,Pa(t,i,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var E=Ne;if(!v||R_(v)){Qe=0,gn=null;var S=E.sibling;if(S!==null)Ne=S;else{var j=E.return;j!==null?(Ne=j,oc(j)):Ne=null}break t}}Qe=0,gn=null,Pa(t,i,d,5);break;case 6:Qe=0,gn=null,Pa(t,i,d,6);break;case 8:od(),ut=6;break e;default:throw Error(s(462))}}fA();break}catch(Q){By(t,Q)}while(!0);return Ui=Rs=null,G.H=l,G.A=h,Ge=a,Ne!==null?0:(Je=null,Le=0,Cu(),ut)}function fA(){for(;Ne!==null&&!co();)Fy(Ne)}function Fy(t){var i=yy(t.alternate,t,Gi);t.memoizedProps=t.pendingProps,i===null?oc(t):Ne=i}function Gy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=hy(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=hy(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:wf(i);default:vy(a,i),i=Ne=Qp(i,Gi),i=yy(a,i,Gi)}t.memoizedProps=t.pendingProps,i===null?oc(t):Ne=i}function Pa(t,i,a,l){Ui=Rs=null,wf(i),Ia=null,Zo=0;var h=i.return;try{if(tA(t,h,i,a,Le)){ut=1,Wu(t,In(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ut=1,Wu(t,In(a,t.current)),Ne=null;return}i.flags&32768?(Be||l===1?t=!0:Na||(Le&536870912)!==0?t=!1:(_r=t=!0,(l===2||l===9||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qy(i,t)):oc(i)}function oc(t){var i=t;do{if((i.flags&32768)!==0){Qy(i,_r);return}t=i.return;var a=iA(i.alternate,i,Gi);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ut===0&&(ut=5)}function Qy(t,i){do{var a=rA(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ut=6,Ne=null}function Ky(t,i,a,l,h,d,v,E,S){t.cancelPendingCommit=null;do lc();while(zt!==0);if((Ge&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Wh,yo(t,a,d,v,E,S),t===Je&&(Ne=Je=null,Le=0),Ma=i,Tr=t,ka=a,rd=d,sd=h,Uy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gA(es,function(){return Wy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=ne.p,ne.p=2,v=Ge,Ge|=4;try{sA(t,i,a)}finally{Ge=v,ne.p=h,G.T=l}}zt=1,Yy(),Xy(),$y()}}function Yy(){if(zt===1){zt=0;var t=Tr,i=Ma,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{Dy(i,t);var d=Td,v=Pp(t.containerInfo),E=d.focusedElem,S=d.selectionRange;if(v!==E&&E&&E.ownerDocument&&Vp(E.ownerDocument.documentElement,E)){if(S!==null&&Kh(E)){var j=S.start,Q=S.end;if(Q===void 0&&(Q=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(Q,E.value.length);else{var Y=E.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var B=z.getSelection(),Ee=E.textContent.length,ge=Math.min(S.start,Ee),Ze=S.end===void 0?ge:Math.min(S.end,Ee);!B.extend&&ge>Ze&&(v=Ze,Ze=ge,ge=v);var V=kp(E,ge),D=kp(E,Ze);if(V&&D&&(B.rangeCount!==1||B.anchorNode!==V.node||B.anchorOffset!==V.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var L=Y.createRange();L.setStart(V.node,V.offset),B.removeAllRanges(),ge>Ze?(B.addRange(L),B.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),B.addRange(L))}}}}for(Y=[],B=E;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Y.length;E++){var K=Y[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Ec=!!Ed,Td=Ed=null}finally{Ge=h,ne.p=l,G.T=a}}t.current=i,zt=2}}function Xy(){if(zt===2){zt=0;var t=Tr,i=Ma,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{Ry(t,i.alternate,i)}finally{Ge=h,ne.p=l,G.T=a}}zt=3}}function $y(){if(zt===4||zt===3){zt=0,iu();var t=Tr,i=Ma,a=ka,l=Uy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?zt=5:(zt=0,Ma=Tr=null,Zy(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Er=null),Js(a),i=i.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ot,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=ne.p,ne.p=2,G.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var E=l[v];d(E.value,{componentStack:E.stack})}}finally{G.T=i,ne.p=h}}(ka&3)!==0&&lc(),ui(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===ad?al++:(al=0,ad=t):al=0,ol(0)}}function Zy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,zo(i)))}function lc(t){return Yy(),Xy(),$y(),Wy()}function Wy(){if(zt!==5)return!1;var t=Tr,i=rd;rd=0;var a=Js(ka),l=G.T,h=ne.p;try{ne.p=32>a?32:a,G.T=null,a=sd,sd=null;var d=Tr,v=ka;if(zt=0,Ma=Tr=null,ka=0,(Ge&6)!==0)throw Error(s(331));var E=Ge;if(Ge|=4,Vy(d.current),Oy(d,d.current,v,a),Ge=E,ol(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ot,d)}catch{}return!0}finally{ne.p=h,G.T=l,Zy(t,i)}}function Jy(t,i,a){i=In(a,i),i=Lf(t.stateNode,i,2),t=hr(t,i,2),t!==null&&(Ai(t,2),ui(t))}function We(t,i,a){if(t.tag===3)Jy(t,t,a);else for(;i!==null;){if(i.tag===3){Jy(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Er===null||!Er.has(l))){t=In(a,t),a=iy(2),l=hr(i,a,2),l!==null&&(ry(a,l,i,t),Ai(l,2),ui(l));break}}i=i.return}}function cd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new lA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(ed=!0,h.add(a),t=dA.bind(null,t,i,a),i.then(t,t))}function dA(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Je===t&&(Le&a)===a&&(ut===4||ut===3&&(Le&62914560)===Le&&300>Tn()-id?(Ge&2)===0&&Va(t,0):td|=a,Oa===Le&&(Oa=0)),ui(t)}function e_(t,i){i===0&&(i=go()),t=ya(t,i),t!==null&&(Ai(t,i),ui(t))}function mA(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),e_(t,a)}function pA(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),e_(t,a)}function gA(t,i){return Wr(t,i)}var uc=null,Ua=null,hd=!1,cc=!1,fd=!1,Ms=0;function ui(t){t!==Ua&&t.next===null&&(Ua===null?uc=Ua=t:Ua=Ua.next=t),cc=!0,hd||(hd=!0,_A())}function ol(t,i){if(!fd&&cc){fd=!0;do for(var a=!1,l=uc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Gt(42|t)+1)-1,d&=h&~(v&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,r_(l,d))}else d=Le,d=Ws(l,l===Je?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||rs(l,d)||(a=!0,r_(l,d));l=l.next}while(a);fd=!1}}function yA(){t_()}function t_(){cc=hd=!1;var t=0;Ms!==0&&(RA()&&(t=Ms),Ms=0);for(var i=Tn(),a=null,l=uc;l!==null;){var h=l.next,d=n_(l,i);d===0?(l.next=null,a===null?uc=h:a.next=h,h===null&&(Ua=a)):(a=l,(t!==0||(d&3)!==0)&&(cc=!0)),l=h}ol(t)}function n_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Gt(d),E=1<<v,S=h[v];S===-1?((E&a)===0||(E&l)!==0)&&(h[v]=mo(E,i)):S<=i&&(t.expiredLanes|=E),d&=~E}if(i=Je,a=Le,a=Ws(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Jr(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||rs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Jr(l),Js(a)){case 2:case 8:a=$s;break;case 32:a=es;break;case 268435456:a=Zs;break;default:a=es}return l=i_.bind(null,t),a=Wr(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Jr(l),t.callbackPriority=2,t.callbackNode=null,2}function i_(t,i){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var l=Le;return l=Ws(t,t===Je?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(jy(t,l,i),n_(t,Tn()),t.callbackNode!=null&&t.callbackNode===a?i_.bind(null,t):null)}function r_(t,i){if(lc())return null;jy(t,i,!0)}function _A(){CA(function(){(Ge&6)!==0?Wr(ho,yA):t_()})}function dd(){return Ms===0&&(Ms=po()),Ms}function s_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sa(""+t)}function a_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function vA(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=s_((h[pt]||null).action),v=l.submitter;v&&(i=(i=v[pt]||null)?s_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var E=new aa("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ms!==0){var S=v?a_(h,v):new FormData(h);Mf(a,{pending:!0,data:S,method:h.method,action:d},null,S)}}else typeof d=="function"&&(E.preventDefault(),S=v?a_(h,v):new FormData(h),Mf(a,{pending:!0,data:S,method:h.method,action:d},d,S))},currentTarget:h}]})}}for(var md=0;md<Zh.length;md++){var pd=Zh[md],EA=pd.toLowerCase(),TA=pd[0].toUpperCase()+pd.slice(1);zn(EA,"on"+TA)}zn(jp,"onAnimationEnd"),zn(zp,"onAnimationIteration"),zn(Bp,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(Lb,"onTransitionRun"),zn(jb,"onTransitionStart"),zn(zb,"onTransitionCancel"),zn(qp,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function o_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var E=l[v],S=E.instance,j=E.currentTarget;if(E=E.listener,S!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=j;try{d(h)}catch(Q){Zu(Q)}h.currentTarget=null,d=S}else for(v=0;v<l.length;v++){if(E=l[v],S=E.instance,j=E.currentTarget,E=E.listener,S!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=j;try{d(h)}catch(Q){Zu(Q)}h.currentTarget=null,d=S}}}}function Oe(t,i){var a=i[vo];a===void 0&&(a=i[vo]=new Set);var l=t+"__bubble";a.has(l)||(l_(i,t,2,!1),a.add(l))}function gd(t,i,a){var l=0;i&&(l|=4),l_(a,t,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[hc]){t[hc]=!0,Eo.forEach(function(a){a!=="selectionchange"&&(bA.has(a)||gd(a,!1,t),gd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[hc]||(i[hc]=!0,gd("selectionchange",!1,i))}}function l_(t,i,a,l){switch(O_(i)){case 2:var h=XA;break;case 8:h=$A;break;default:h=Nd}a=h.bind(null,i,a,t),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function _d(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var E=l.stateNode.containerInfo;if(E===h)break;if(v===4)for(v=l.return;v!==null;){var S=v.tag;if((S===3||S===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;E!==null;){if(v=wi(E),v===null)return;if(S=v.tag,S===5||S===6||S===26||S===27){l=d=v;continue e}E=E.parentNode}}l=l.return}du(function(){var j=d,Q=wn(a),Y=[];e:{var z=Hp.get(t);if(z!==void 0){var B=aa,Ee=t;switch(t){case"keypress":if(ei(a)===0)break e;case"keydown":case"keyup":B=fa;break;case"focusin":Ee="focus",B=ua;break;case"focusout":Ee="blur",B=ua;break;case"beforeblur":case"afterblur":B=ua;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Tu;break;case jp:case zp:case Bp:B=ca;break;case qp:B=Au;break;case"scroll":case"scrollend":B=mu;break;case"wheel":B=da;break;case"copy":case"cut":case"paste":B=ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Oo;break;case"toggle":case"beforetoggle":B=Su}var ge=(i&4)!==0,Ze=!ge&&(t==="scroll"||t==="scrollend"),V=ge?z!==null?z+"Capture":null:z;ge=[];for(var D=j,L;D!==null;){var K=D;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||V===null||(K=fs(D,V),K!=null&&ge.push(ul(D,K,L))),Ze)break;D=D.return}0<ge.length&&(z=new B(z,Ee,null,a,Q),Y.push({event:z,listeners:ge}))}}if((i&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",z&&a!==Ci&&(Ee=a.relatedTarget||a.fromElement)&&(wi(Ee)||Ee[bn]))break e;if((B||z)&&(z=Q.window===Q?Q:(z=Q.ownerDocument)?z.defaultView||z.parentWindow:window,B?(Ee=a.relatedTarget||a.toElement,B=j,Ee=Ee?wi(Ee):null,Ee!==null&&(Ze=u(Ee),ge=Ee.tag,Ee!==Ze||ge!==5&&ge!==27&&ge!==6)&&(Ee=null)):(B=null,Ee=j),B!==Ee)){if(ge=Rn,K="onMouseLeave",V="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ge=Oo,K="onPointerLeave",V="onPointerEnter",D="pointer"),Ze=B==null?z:$n(B),L=Ee==null?z:$n(Ee),z=new ge(K,D+"leave",B,a,Q),z.target=Ze,z.relatedTarget=L,K=null,wi(Q)===j&&(ge=new ge(V,D+"enter",Ee,a,Q),ge.target=L,ge.relatedTarget=Ze,K=ge),Ze=K,B&&Ee)t:{for(ge=B,V=Ee,D=0,L=ge;L;L=La(L))D++;for(L=0,K=V;K;K=La(K))L++;for(;0<D-L;)ge=La(ge),D--;for(;0<L-D;)V=La(V),L--;for(;D--;){if(ge===V||V!==null&&ge===V.alternate)break t;ge=La(ge),V=La(V)}ge=null}else ge=null;B!==null&&u_(Y,z,B,ge,!1),Ee!==null&&Ze!==null&&u_(Y,Ze,Ee,ge,!0)}}e:{if(z=j?$n(j):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var ae=Cp;else if(wt(z))if(xp)ae=Vb;else{ae=Mb;var xe=Ob}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?j&&So(j.elementType)&&(ae=Cp):ae=kb;if(ae&&(ae=ae(t,j))){Mi(Y,ae,a,Q);break e}xe&&xe(t,z,j),t==="focusout"&&j&&z.type==="number"&&j.memoizedProps.value!=null&&ar(z,"number",z.value)}switch(xe=j?$n(j):window,t){case"focusin":(wt(xe)||xe.contentEditable==="true")&&(ma=xe,Yh=j,Vo=null);break;case"focusout":Vo=Yh=ma=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,Up(Y,a,Q);break;case"selectionchange":if(Ub)break;case"keydown":case"keyup":Up(Y,a,Q)}var ce;if(ii)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Pe?H(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(Pe||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Pe&&(ce=Io()):(Jn=Q,or="value"in Jn?Jn.value:Jn.textContent,Pe=!0)),xe=fc(j,ye),0<xe.length&&(ye=new Do(ye,t,null,a,Q),Y.push({event:ye,listeners:xe}),ce?ye.data=ce:(ce=te(a),ce!==null&&(ye.data=ce)))),(ce=p?At(t,a):Ue(t,a))&&(ye=fc(j,"onBeforeInput"),0<ye.length&&(xe=new Do("onBeforeInput","beforeinput",null,a,Q),Y.push({event:xe,listeners:ye}),xe.data=ce)),vA(Y,t,j,a,Q)}o_(Y,i)})}function ul(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=fs(t,a),h!=null&&l.unshift(ul(t,h,d)),h=fs(t,i),h!=null&&l.push(ul(t,h,d))),t.tag===3)return l;t=t.return}return[]}function La(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u_(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var E=a,S=E.alternate,j=E.stateNode;if(E=E.tag,S!==null&&S===l)break;E!==5&&E!==26&&E!==27||j===null||(S=j,h?(j=fs(a,d),j!=null&&v.unshift(ul(a,j,S))):h||(j=fs(a,d),j!=null&&v.push(ul(a,j,S)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var AA=/\r\n?/g,wA=/\u0000|\uFFFD/g;function c_(t){return(typeof t=="string"?t:""+t).replace(AA,`
`).replace(wA,"")}function h_(t,i){return i=c_(i),c_(t)===i}function dc(){}function $e(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||An(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&An(t,""+l);break;case"className":Zn(t,"class",l);break;case"tabIndex":Zn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(t,a,l);break;case"style":wo(t,l,d);break;case"data":if(i!=="object"){Zn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=sa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$e(t,i,"name",h.name,h,null),$e(t,i,"formEncType",h.formEncType,h,null),$e(t,i,"formMethod",h.formMethod,h,null),$e(t,i,"formTarget",h.formTarget,h,null)):($e(t,i,"encType",h.encType,h,null),$e(t,i,"method",h.method,h,null),$e(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=sa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=dc);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=sa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Oe("beforetoggle",t),Oe("toggle",t),sr(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":sr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bh.get(a)||a,sr(t,a,l))}}function vd(t,i,a,l,h,d){switch(a){case"style":wo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?An(t,l):(typeof l=="number"||typeof l=="bigint")&&An(t,""+l);break;case"onScroll":l!=null&&Oe("scroll",t);break;case"onScrollEnd":l!=null&&Oe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ea.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[pt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):sr(t,a,l)}}}function Bt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",t),Oe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,d,v,a,null)}}h&&$e(t,i,"srcSet",a.srcSet,a,null),l&&$e(t,i,"src",a.src,a,null);return;case"input":Oe("invalid",t);var E=d=v=h=null,S=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":v=Q;break;case"checked":S=Q;break;case"defaultChecked":j=Q;break;case"value":d=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:$e(t,i,l,Q,a,null)}}us(t,d,E,S,j,v,h,!1),ra(t);return;case"select":Oe("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":v=E;break;case"multiple":l=E;default:$e(t,i,h,E,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Ii(t,!!l,i,!1):a!=null&&Ii(t,!!l,a,!0);return;case"textarea":Oe("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:$e(t,i,v,E,a,null)}cs(t,l,h,d),ra(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$e(t,i,S,l,a,null)}return;case"dialog":Oe("beforetoggle",t),Oe("toggle",t),Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":Oe("load",t);break;case"video":case"audio":for(l=0;l<ll.length;l++)Oe(ll[l],t);break;case"image":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"embed":case"source":case"link":Oe("error",t),Oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,j,l,a,null)}return;default:if(So(i)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&vd(t,i,Q,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&$e(t,i,E,l,a,null))}function SA(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,E=null,S=null,j=null,Q=null;for(B in a){var Y=a[B];if(a.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=Y;default:l.hasOwnProperty(B)||$e(t,i,B,null,l,Y)}}for(var z in l){var B=l[z];if(Y=a[z],l.hasOwnProperty(z)&&(B!=null||Y!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":j=B;break;case"defaultChecked":Q=B;break;case"value":v=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==Y&&$e(t,i,z,B,l,Y)}}hn(t,v,E,S,j,Q,d,h);return;case"select":B=v=E=z=null;for(d in a)if(S=a[d],a.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":B=S;default:l.hasOwnProperty(d)||$e(t,i,d,null,l,S)}for(h in l)if(d=l[h],S=a[h],l.hasOwnProperty(h)&&(d!=null||S!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":v=d;default:d!==S&&$e(t,i,h,d,l,S)}i=E,a=v,l=B,z!=null?Ii(t,!!a,z,!1):!!l!=!!a&&(i!=null?Ii(t,!!a,i,!0):Ii(t,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:$e(t,i,E,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$e(t,i,v,h,l,d)}Ye(t,z,B);return;case"option":for(var Ee in a)if(z=a[Ee],a.hasOwnProperty(Ee)&&z!=null&&!l.hasOwnProperty(Ee))switch(Ee){case"selected":t.selected=!1;break;default:$e(t,i,Ee,null,l,z)}for(S in l)if(z=l[S],B=a[S],l.hasOwnProperty(S)&&z!==B&&(z!=null||B!=null))switch(S){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:$e(t,i,S,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)z=a[ge],a.hasOwnProperty(ge)&&z!=null&&!l.hasOwnProperty(ge)&&$e(t,i,ge,null,l,z);for(j in l)if(z=l[j],B=a[j],l.hasOwnProperty(j)&&z!==B&&(z!=null||B!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:$e(t,i,j,z,l,B)}return;default:if(So(i)){for(var Ze in a)z=a[Ze],a.hasOwnProperty(Ze)&&z!==void 0&&!l.hasOwnProperty(Ze)&&vd(t,i,Ze,void 0,l,z);for(Q in l)z=l[Q],B=a[Q],!l.hasOwnProperty(Q)||z===B||z===void 0&&B===void 0||vd(t,i,Q,z,l,B);return}}for(var V in a)z=a[V],a.hasOwnProperty(V)&&z!=null&&!l.hasOwnProperty(V)&&$e(t,i,V,null,l,z);for(Y in l)z=l[Y],B=a[Y],!l.hasOwnProperty(Y)||z===B||z==null&&B==null||$e(t,i,Y,z,l,B)}var Ed=null,Td=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function f_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function bd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ad=null;function RA(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var m_=typeof setTimeout=="function"?setTimeout:void 0,IA=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(t){return p_.resolve(null).then(t).catch(xA)}:m_;function xA(t){setTimeout(function(){throw t})}function Ar(t){return t==="head"}function g_(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&cl(v.documentElement),a&2&&cl(v.body),a&4)for(a=v.head,cl(a),v=a.firstChild;v;){var E=v.nextSibling,S=v.nodeName;v[ss]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=E}}if(h===0){t.removeChild(d),_l(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);_l(i)}function wd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wd(a),rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function DA(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ss])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function NA(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qn(t.nextSibling),t===null))return null;return t}function Sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function OA(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function qn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Rd=null;function y_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function __(t,i,a){switch(i=mc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function cl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);rr(t)}var Mn=new Map,v_=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=ne.d;ne.d={f:MA,r:kA,D:VA,C:PA,L:UA,m:LA,X:zA,S:jA,M:BA};function MA(){var t=Qi.f(),i=ac();return t||i}function kA(t){var i=Xn(t);i!==null&&i.tag===5&&i.type==="form"?jg(i):Qi.r(t)}var ja=typeof document>"u"?null:document;function E_(t,i,a){var l=ja;if(l&&typeof i=="string"&&i){var h=gt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),v_.has(h)||(v_.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Bt(i,"link",t),ht(i),l.head.appendChild(i)))}}function VA(t){Qi.D(t),E_("dns-prefetch",t,null)}function PA(t,i){Qi.C(t,i),E_("preconnect",t,i)}function UA(t,i,a){Qi.L(t,i,a);var l=ja;if(l&&t&&i){var h='link[rel="preload"][as="'+gt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+gt(a.imageSizes)+'"]')):h+='[href="'+gt(t)+'"]';var d=h;switch(i){case"style":d=za(t);break;case"script":d=Ba(t)}Mn.has(d)||(t=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Mn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(hl(d))||i==="script"&&l.querySelector(fl(d))||(i=l.createElement("link"),Bt(i,"link",t),ht(i),l.head.appendChild(i)))}}function LA(t,i){Qi.m(t,i);var a=ja;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+gt(l)+'"][href="'+gt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ba(t)}if(!Mn.has(d)&&(t=T({rel:"modulepreload",href:t},i),Mn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(d)))return}l=a.createElement("link"),Bt(l,"link",t),ht(l),a.head.appendChild(l)}}}function jA(t,i,a){Qi.S(t,i,a);var l=ja;if(l&&t){var h=Jt(l).hoistableStyles,d=za(t);i=i||"default";var v=h.get(d);if(!v){var E={loading:0,preload:null};if(v=l.querySelector(hl(d)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Mn.get(d))&&Id(t,a);var S=v=l.createElement("link");ht(S),Bt(S,"link",t),S._p=new Promise(function(j,Q){S.onload=j,S.onerror=Q}),S.addEventListener("load",function(){E.loading|=1}),S.addEventListener("error",function(){E.loading|=2}),E.loading|=4,gc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:E},h.set(d,v)}}}function zA(t,i){Qi.X(t,i);var a=ja;if(a&&t){var l=Jt(a).hoistableScripts,h=Ba(t),d=l.get(h);d||(d=a.querySelector(fl(h)),d||(t=T({src:t,async:!0},i),(i=Mn.get(h))&&Cd(t,i),d=a.createElement("script"),ht(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function BA(t,i){Qi.M(t,i);var a=ja;if(a&&t){var l=Jt(a).hoistableScripts,h=Ba(t),d=l.get(h);d||(d=a.querySelector(fl(h)),d||(t=T({src:t,async:!0,type:"module"},i),(i=Mn.get(h))&&Cd(t,i),d=a.createElement("script"),ht(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function T_(t,i,a,l){var h=(h=de.current)?pc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=za(a.href),a=Jt(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=za(a.href);var d=Jt(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(hl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Mn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mn.set(t,a),d||qA(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ba(a),a=Jt(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function za(t){return'href="'+gt(t)+'"'}function hl(t){return'link[rel="stylesheet"]['+t+"]"}function b_(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function qA(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Bt(i,"link",a),ht(i),t.head.appendChild(i))}function Ba(t){return'[src="'+gt(t)+'"]'}function fl(t){return"script[async]"+t}function A_(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+gt(a.href)+'"]');if(l)return i.instance=l,ht(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ht(l),Bt(l,"style",h),gc(l,a.precedence,t),i.instance=l;case"stylesheet":h=za(a.href);var d=t.querySelector(hl(h));if(d)return i.state.loading|=4,i.instance=d,ht(d),d;l=b_(a),(h=Mn.get(h))&&Id(l,h),d=(t.ownerDocument||t).createElement("link"),ht(d);var v=d;return v._p=new Promise(function(E,S){v.onload=E,v.onerror=S}),Bt(d,"link",l),i.state.loading|=4,gc(d,a.precedence,t),i.instance=d;case"script":return d=Ba(a.src),(h=t.querySelector(fl(d)))?(i.instance=h,ht(h),h):(l=a,(h=Mn.get(d))&&(l=T({},a),Cd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),ht(h),Bt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,a.precedence,t));return i.instance}function gc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var E=l[v];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Id(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Cd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var yc=null;function w_(t,i,a){if(yc===null){var l=new Map,h=yc=new Map;h.set(a,l)}else h=yc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ss]||d[bt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var E=l.get(v);E?E.push(d):l.set(v,[d])}}return l}function S_(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function HA(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function R_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var dl=null;function FA(){}function GA(t,i,a){if(dl===null)throw Error(s(475));var l=dl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=za(a.href),d=t.querySelector(hl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=_c.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,ht(d);return}d=t.ownerDocument||t,a=b_(a),(h=Mn.get(h))&&Id(a,h),d=d.createElement("link"),ht(d);var v=d;v._p=new Promise(function(E,S){v.onload=E,v.onerror=S}),Bt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=_c.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function QA(){if(dl===null)throw Error(s(475));var t=dl;return t.stylesheets&&t.count===0&&xd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&xd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)xd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function xd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,i.forEach(KA,t),vc=null,_c.call(t))}function KA(t,i){if(!(i.state.loading&4)){var a=vc.get(t);if(a)var l=a.get(null);else{a=new Map,vc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var ml={$$typeof:fe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function YA(t,i,a,l,h,d,v,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.hiddenUpdates=bi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function I_(t,i,a,l,h,d,v,E,S,j,Q,Y){return t=new YA(t,i,a,v,E,S,j,Y),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),t.current=d,d.stateNode=t,i=cf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},mf(d),t}function C_(t){return t?(t=_a,t):_a}function x_(t,i,a,l,h,d){h=C_(h),l.context===null?l.context=h:l.pendingContext=h,l=cr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=hr(t,l,i),a!==null&&(_n(a,t,i),Fo(a,t,i))}function D_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Dd(t,i){D_(t,i),(t=t.alternate)&&D_(t,i)}function N_(t){if(t.tag===13){var i=ya(t,67108864);i!==null&&_n(i,t,67108864),Dd(t,67108864)}}var Ec=!0;function XA(t,i,a,l){var h=G.T;G.T=null;var d=ne.p;try{ne.p=2,Nd(t,i,a,l)}finally{ne.p=d,G.T=h}}function $A(t,i,a,l){var h=G.T;G.T=null;var d=ne.p;try{ne.p=8,Nd(t,i,a,l)}finally{ne.p=d,G.T=h}}function Nd(t,i,a,l){if(Ec){var h=Od(l);if(h===null)_d(t,i,l,Tc,a),M_(t,l);else if(WA(h,t,i,a,l))l.stopPropagation();else if(M_(t,l),i&4&&-1<ZA.indexOf(t)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Un(d.pendingLanes);if(v!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var S=1<<31-Gt(v);E.entanglements[1]|=S,v&=~S}ui(d),(Ge&6)===0&&(rc=Tn()+500,ol(0))}}break;case 13:E=ya(d,2),E!==null&&_n(E,d,2),ac(),Dd(d,2)}if(d=Od(l),d===null&&_d(t,i,l,Tc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else _d(t,i,l,null,a)}}function Od(t){return t=wn(t),Md(t)}var Tc=null;function Md(t){if(Tc=null,t=wi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Tc=t,null}function O_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vh()){case ho:return 2;case $s:return 8;case es:case Ph:return 32;case Zs:return 268435456;default:return 32}default:return 32}}var kd=!1,wr=null,Sr=null,Rr=null,pl=new Map,gl=new Map,Ir=[],ZA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(t,i){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":pl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(i.pointerId)}}function yl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&N_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function WA(t,i,a,l,h){switch(i){case"focusin":return wr=yl(wr,t,i,a,l,h),!0;case"dragenter":return Sr=yl(Sr,t,i,a,l,h),!0;case"mouseover":return Rr=yl(Rr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return pl.set(d,yl(pl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,gl.set(d,yl(gl.get(d)||null,t,i,a,l,h)),!0}return!1}function k_(t){var i=wi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,au(t.priority,function(){if(a.tag===13){var l=yn();l=tr(l);var h=ya(a,l);h!==null&&_n(h,a,l),Dd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Od(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ci=l,a.target.dispatchEvent(l),Ci=null}else return i=Xn(a),i!==null&&N_(i),t.blockedOn=a,!1;i.shift()}return!0}function V_(t,i,a){bc(t)&&a.delete(i)}function JA(){kd=!1,wr!==null&&bc(wr)&&(wr=null),Sr!==null&&bc(Sr)&&(Sr=null),Rr!==null&&bc(Rr)&&(Rr=null),pl.forEach(V_),gl.forEach(V_)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,kd||(kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,JA)))}var wc=null;function P_(t){wc!==t&&(wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Md(l||a)===null)continue;break}var d=Xn(a);d!==null&&(t.splice(i,3),i-=3,Mf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function _l(t){function i(S){return Ac(S,t)}wr!==null&&Ac(wr,t),Sr!==null&&Ac(Sr,t),Rr!==null&&Ac(Rr,t),pl.forEach(i),gl.forEach(i);for(var a=0;a<Ir.length;a++){var l=Ir[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Ir.length&&(a=Ir[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&Ir.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[pt]||null;if(typeof d=="function")v||P_(a);else if(v){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[pt]||null)E=v.formAction;else if(Md(h)!==null)continue}else E=v.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),P_(a)}}}function Vd(t){this._internalRoot=t}Sc.prototype.render=Vd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();x_(a,l,t,i,null,null)},Sc.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;x_(t.current,2,null,t,null,null),ac(),i[bn]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var i=nr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ir.length&&i!==0&&i<Ir[a].priority;a++);Ir.splice(a,0,t),a===0&&k_(t)}};var U_=e.version;if(U_!=="19.1.0")throw Error(s(527,U_,"19.1.0"));ne.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var e1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ot=Rc.inject(e1),Fe=Rc}catch{}}return El.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Jg,d=ey,v=ty,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=I_(t,1,!1,null,null,a,l,h,d,v,E,null),t[bn]=i.current,yd(t),new Vd(i)},El.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Jg,v=ey,E=ty,S=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),i=I_(t,1,!0,i,a??null,l,h,d,v,E,S,j),i.context=C_(null),a=i.current,l=yn(),l=tr(l),h=cr(l),h.callback=null,hr(a,h,l),a=l,i.current.lanes=a,Ai(i,a),ui(i),t[bn]=i.current,yd(t),new Sc(i)},El.version="19.1.0",El}var K_;function h1(){if(K_)return Ld.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=c1(),Ld.exports}var f1=h1();const d1=()=>{};var Y_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},m1=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},U0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,T=u>>2,w=(u&3)<<4|m>>4;let I=(m&15)<<2|y>>6,q=y&63;g||(q=64,f||(I=64)),s.push(n[T],n[w],n[I],n[q])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(P0(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):m1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const w=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||w==null)throw new p1;const I=u<<2|m>>4;if(s.push(I),y!==64){const q=m<<4&240|y>>2;if(s.push(q),w!==64){const $=y<<6&192|w;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class p1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g1=function(r){const e=P0(r);return U0.encodeByteArray(e,!0)},Fc=function(r){return g1(r).replace(/\./g,"")},L0=function(r){try{return U0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=()=>y1().__FIREBASE_DEFAULTS__,v1=()=>{if(typeof process>"u"||typeof Y_>"u")return;const r=Y_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},E1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&L0(r[1]);return e&&JSON.parse(e)},fh=()=>{try{return d1()||_1()||v1()||E1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},j0=r=>{var e,n;return(n=(e=fh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},T1=r=>{const e=j0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},z0=()=>{var r;return(r=fh())===null||r===void 0?void 0:r.config},B0=r=>{var e;return(e=fh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function q0(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Fc(JSON.stringify(n)),Fc(JSON.stringify(f)),""].join(".")}const xl={};function w1(){const r={prod:[],emulator:[]};for(const e of Object.keys(xl))xl[e]?r.emulator.push(e):r.prod.push(e);return r}function S1(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let X_=!1;function H0(r,e){if(typeof window>"u"||typeof document>"u"||!io(window.location.host)||xl[r]===e||xl[r]||X_)return;xl[r]=e;function n(I){return`__firebase__banner__${I}`}const s="__firebase__banner",u=w1().prod.length>0;function f(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function g(I,q){I.setAttribute("width","24"),I.setAttribute("id",q),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{X_=!0,f()},I}function T(I,q){I.setAttribute("id",q),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function w(){const I=S1(s),q=n("text"),$=document.getElementById(q)||document.createElement("span"),ie=n("learnmore"),J=document.getElementById(ie)||document.createElement("a"),Te=n("preprendIcon"),me=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const fe=I.element;m(fe),T(J,ie);const De=y();g(me,Te),fe.append(me,$,J,De),document.body.appendChild(fe)}u?($.innerText="Preview backend disconnected.",me.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(me.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function R1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function I1(){var r;const e=(r=fh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F0(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function x1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D1(){const r=Zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function N1(){return!I1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G0(){try{return typeof indexedDB=="object"}catch{return!1}}function Q0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function O1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="FirebaseError";class Qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=M1,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?k1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Qn(o,m,s)}}function k1(r,e){return r.replace(V1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const V1=/\{\$([^}]+)}/g;function P1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function jr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if($_(u)&&$_(f)){if(!jr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function $_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Al(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function wl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function U1(r,e){const n=new L1(r,e);return n.subscribe.bind(n)}class L1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");j1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=qd),o.error===void 0&&(o.error=qd),o.complete===void 0&&(o.complete=qd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j1(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function qd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1e3,B1=2,q1=4*60*60*1e3,H1=.5;function Z_(r,e=z1,n=B1){const s=e*Math.pow(n,r),o=Math.round(H1*s*(Math.random()-.5)*2);return Math.min(q1,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new b1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q1(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:G1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function G1(r){return r===ks?void 0:r}function Q1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const Y1={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},X1=Me.INFO,$1={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Z1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=$1[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=X1,this._logHandler=Z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const W1=(r,e)=>e.some(n=>r instanceof n);let W_,J_;function J1(){return W_||(W_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K0=new WeakMap,sm=new WeakMap,Y0=new WeakMap,Hd=new WeakMap,Mm=new WeakMap;function tw(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Vr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&K0.set(n,r)}).catch(()=>{}),Mm.set(e,r),e}function nw(r){if(sm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});sm.set(r,e)}let am={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return sm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Y0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function iw(r){am=r(am)}function rw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Fd(this),e,...n);return Y0.set(s,e.sort?e.sort():[e]),Vr(s)}:ew().includes(r)?function(...e){return r.apply(Fd(this),e),Vr(K0.get(this))}:function(...e){return Vr(r.apply(Fd(this),e))}}function sw(r){return typeof r=="function"?rw(r):(r instanceof IDBTransaction&&nw(r),W1(r,J1())?new Proxy(r,am):r)}function Vr(r){if(r instanceof IDBRequest)return tw(r);if(Hd.has(r))return Hd.get(r);const e=sw(r);return e!==r&&(Hd.set(r,e),Mm.set(e,r)),e}const Fd=r=>Mm.get(r);function X0(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=Vr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Vr(f.result),g.oldVersion,g.newVersion,Vr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const aw=["get","getKey","getAll","getAllKeys","count"],ow=["put","add","delete","clear"],Gd=new Map;function ev(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Gd.get(e))return Gd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=ow.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||aw.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Gd.set(e,u),u}iw(r=>({...r,get:(e,n,s)=>ev(e,n)||r.get(e,n,s),has:(e,n)=>!!ev(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uw(r){const e=r.getComponent();return e?.type==="VERSION"}const om="@firebase/app",tv="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new dh("@firebase/app"),cw="@firebase/app-compat",hw="@firebase/analytics-compat",fw="@firebase/analytics",dw="@firebase/app-check-compat",mw="@firebase/app-check",pw="@firebase/auth",gw="@firebase/auth-compat",yw="@firebase/database",_w="@firebase/data-connect",vw="@firebase/database-compat",Ew="@firebase/functions",Tw="@firebase/functions-compat",bw="@firebase/installations",Aw="@firebase/installations-compat",ww="@firebase/messaging",Sw="@firebase/messaging-compat",Rw="@firebase/performance",Iw="@firebase/performance-compat",Cw="@firebase/remote-config",xw="@firebase/remote-config-compat",Dw="@firebase/storage",Nw="@firebase/storage-compat",Ow="@firebase/firestore",Mw="@firebase/ai",kw="@firebase/firestore-compat",Vw="firebase",Pw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="[DEFAULT]",Uw={[om]:"fire-core",[cw]:"fire-core-compat",[fw]:"fire-analytics",[hw]:"fire-analytics-compat",[mw]:"fire-app-check",[dw]:"fire-app-check-compat",[pw]:"fire-auth",[gw]:"fire-auth-compat",[yw]:"fire-rtdb",[_w]:"fire-data-connect",[vw]:"fire-rtdb-compat",[Ew]:"fire-fn",[Tw]:"fire-fn-compat",[bw]:"fire-iid",[Aw]:"fire-iid-compat",[ww]:"fire-fcm",[Sw]:"fire-fcm-compat",[Rw]:"fire-perf",[Iw]:"fire-perf-compat",[Cw]:"fire-rc",[xw]:"fire-rc-compat",[Dw]:"fire-gcs",[Nw]:"fire-gcs-compat",[Ow]:"fire-fst",[kw]:"fire-fst-compat",[Mw]:"fire-vertex","fire-js":"fire-js",[Vw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Map,Lw=new Map,um=new Map;function nv(r,e){try{r.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function _i(r){const e=r.name;if(um.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;um.set(e,r);for(const n of Gc.values())nv(n,r);for(const n of Lw.values())nv(n,r);return!0}function Qs(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function kn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Gs("app","Firebase",jw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=Pw;function $0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:lm,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw Pr.create("bad-app-name",{appName:String(o)});if(n||(n=z0()),!n)throw Pr.create("no-options");const u=Gc.get(o);if(u){if(jr(n,u.options)&&jr(s,u.config))return u;throw Pr.create("duplicate-app",{appName:o})}const f=new K1(o);for(const g of um.values())f.addComponent(g);const m=new zw(n,s,f);return Gc.set(o,m),m}function km(r=lm){const e=Gc.get(r);if(!e&&r===lm&&z0())return $0();if(!e)throw Pr.create("no-app",{appName:r});return e}function Pn(r,e,n){var s;let o=(s=Uw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(m.join(" "));return}_i(new Fn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebase-heartbeat-database",qw=1,Pl="firebase-heartbeat-store";let Qd=null;function Z0(){return Qd||(Qd=X0(Bw,qw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Pl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Pr.create("idb-open",{originalErrorMessage:r.message})})),Qd}async function Hw(r){try{const n=(await Z0()).transaction(Pl),s=await n.objectStore(Pl).get(W0(r));return await n.done,s}catch(e){if(e instanceof Qn)$i.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e?.message});$i.warn(n.message)}}}async function iv(r,e){try{const s=(await Z0()).transaction(Pl,"readwrite");await s.objectStore(Pl).put(e,W0(r)),await s.done}catch(n){if(n instanceof Qn)$i.warn(n.message);else{const s=Pr.create("idb-set",{originalErrorMessage:n?.message});$i.warn(s.message)}}}function W0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=1024,Gw=30;class Qw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Gw){const f=Xw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$i.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rv(),{heartbeatsToSend:s,unsentEntries:o}=Kw(this._heartbeatsCache.heartbeats),u=Fc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return $i.warn(n),""}}}function rv(){return new Date().toISOString().substring(0,10)}function Kw(r,e=Fw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),sv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G0()?Q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function sv(r){return Fc(JSON.stringify({version:2,heartbeats:r})).length}function Xw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(r){_i(new Fn("platform-logger",e=>new lw(e),"PRIVATE")),_i(new Fn("heartbeat",e=>new Qw(e),"PRIVATE")),Pn(om,tv,r),Pn(om,tv,"esm2017"),Pn("fire-js","")}$w("");var Zw="firebase",Ww="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(Zw,Ww,"app");function Vm(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function J0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=J0,eE=new Gs("auth","Firebase",J0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new dh("@firebase/auth");function eS(r,...e){Qc.logLevel<=Me.WARN&&Qc.warn(`Auth (${ro}): ${r}`,...e)}function kc(r,...e){Qc.logLevel<=Me.ERROR&&Qc.error(`Auth (${ro}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,...e){throw Pm(r,...e)}function hi(r,...e){return Pm(r,...e)}function tE(r,e,n){const s=Object.assign(Object.assign({},Jw()),{[e]:n});return new Gs("auth","Firebase",s).create(e,{appName:r.name})}function Xi(r){return tE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return eE.create(r,...e)}function _e(r,e,...n){if(!r)throw Pm(e,...n)}function Ki(r){const e="INTERNAL ASSERTION FAILED: "+r;throw kc(e),new Error(e)}function Zi(r,e){r||Ki(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function tS(){return av()==="http:"||av()==="https:"}function av(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||F0()||"connection"in navigator)?navigator.onLine:!0}function iS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zi(n>e,"Short delay should be less than long delay!"),this.isMobile=R1()||x1()}get(){return nS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(r,e){Zi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aS=new Yl(3e4,6e4);function Kr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Yr(r,e,n,s,o={}){return iE(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Kl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:g},u);return C1()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&io(r.emulatorConfig.host)&&(y.credentials="include"),nE.fetch()(await rE(r,r.config.apiHost,n,m),y)})}async function iE(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},rS),e);try{const o=new lS(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Ic(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ic(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Ic(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw Ic(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw tE(r,T,y);Gn(r,T)}}catch(o){if(o instanceof Qn)throw o;Gn(r,"network-request-failed",{message:String(o)})}}async function Xl(r,e,n,s,o={}){const u=await Yr(r,e,n,s,o);return"mfaPendingCredential"in u&&Gn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function rE(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?Um(r.config,o):`${r.config.apiScheme}://${o}`;return sS.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function oS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hi(this.auth,"network-request-failed")),aS.get())})}}function Ic(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=hi(r,e,s);return o.customData._tokenResponse=n,o}function ov(r){return r!==void 0&&r.enterprise!==void 0}class uS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cS(r,e){return Yr(r,"GET","/v2/recaptchaConfig",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(r,e){return Yr(r,"POST","/v1/accounts:delete",e)}async function Kc(r,e){return Yr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fS(r,e=!1){const n=Dt(r),s=await n.getIdToken(e),o=Lm(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Dl(Kd(o.auth_time)),issuedAtTime:Dl(Kd(o.iat)),expirationTime:Dl(Kd(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Kd(r){return Number(r)*1e3}function Lm(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=L0(n);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function lv(r){const e=Lm(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qn&&dS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function dS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(r){var e;const n=r.auth,s=await r.getIdToken(),o=await Ul(r,Kc(n,{idToken:s}));_e(o?.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?sE(u.providerUserInfo):[],m=gS(r.providerData,f),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!m?.length,T=g?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new hm(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(r,w)}async function pS(r){const e=Dt(r);await Yc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function sE(r){return r.map(e=>{var{providerId:n}=e,s=Vm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(r,e){const n=await iE(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await rE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&io(r.emulatorConfig.host)&&(g.credentials="include"),nE.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _S(r,e){return Yr(r,"POST","/v2/accounts:revokeToken",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=lv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await yS(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Ka;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Vm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new hm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ul(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fS(this,e)}reload(){return pS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Xi(this.auth));const e=await this.getIdToken();return await Ul(this,hS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,g,y,T;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,I=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,ie=(m=n.tenantId)!==null&&m!==void 0?m:void 0,J=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,Te=(y=n.createdAt)!==null&&y!==void 0?y:void 0,me=(T=n.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:fe,emailVerified:De,isAnonymous:be,providerData:Ce,stsTokenManager:O}=n;_e(fe&&O,e,"internal-error");const A=Ka.fromJSON(this.name,O);_e(typeof fe=="string",e,"internal-error"),xr(w,e.name),xr(I,e.name),_e(typeof De=="boolean",e,"internal-error"),_e(typeof be=="boolean",e,"internal-error"),xr(q,e.name),xr($,e.name),xr(ie,e.name),xr(J,e.name),xr(Te,e.name),xr(me,e.name);const C=new Hn({uid:fe,auth:e,email:I,emailVerified:De,displayName:w,isAnonymous:be,photoURL:$,phoneNumber:q,tenantId:ie,stsTokenManager:A,createdAt:Te,lastLoginAt:me});return Ce&&Array.isArray(Ce)&&(C.providerData=Ce.map(N=>Object.assign({},N))),J&&(C._redirectEventId=J),C}static async _fromIdTokenResponse(e,n,s=!1){const o=new Ka;o.updateFromServerResponse(n);const u=new Hn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Yc(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?sE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new Ka;m.updateFromIdToken(s);const g=new Hn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new hm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Map;function Yi(r){Zi(r instanceof Function,"Expected a class definition");let e=uv.get(r);return e?(Zi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,uv.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aE.type="NONE";const cv=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(r,e,n){return`firebase:${r}:${e}:${n}`}class Ya{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Vc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Vc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kc(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ya(Yi(cv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Yi(cv);const f=Vc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let w;if(typeof T=="string"){const I=await Kc(e,{idToken:T}).catch(()=>{});if(!I)break;w=await Hn._fromGetAccountInfoResponse(e,I,T)}else w=Hn._fromJSON(e,T);y!==u&&(m=w),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ya(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ya(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(dE(e))return"Webos";if(lE(e))return"Safari";if((e.includes("chrome/")||uE(e))&&!e.includes("edge/"))return"Chrome";if(hE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function oE(r=Zt()){return/firefox\//i.test(r)}function lE(r=Zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uE(r=Zt()){return/crios\//i.test(r)}function cE(r=Zt()){return/iemobile/i.test(r)}function hE(r=Zt()){return/android/i.test(r)}function fE(r=Zt()){return/blackberry/i.test(r)}function dE(r=Zt()){return/webos/i.test(r)}function jm(r=Zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function vS(r=Zt()){var e;return jm(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ES(){return D1()&&document.documentMode===10}function mE(r=Zt()){return jm(r)||hE(r)||dE(r)||fE(r)||/windows phone/i.test(r)||cE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(r,e=[]){let n;switch(r){case"Browser":n=hv(Zt());break;case"Worker":n=`${hv(Zt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ro}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(r,e={}){return Yr(r,"GET","/v2/passwordPolicy",Kr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=6;class wS{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:AS,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fv(this),this.idTokenSubscription=new fv(this),this.beforeStateQueue=new TS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ya.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kc(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o?._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&g?.user&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yc(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(Xi(this));const n=e?Dt(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bS(this),n=new wS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _S(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yi(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Yi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&eS(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ks(r){return Dt(r)}class fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=U1(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RS(r){mh=r}function gE(r){return mh.loadJS(r)}function IS(){return mh.recaptchaEnterpriseScript}function CS(){return mh.gapiScript}function xS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class DS{constructor(){this.enterprise=new NS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class NS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const OS="recaptcha-enterprise",yE="NO_RECAPTCHA";class MS{constructor(e){this.type=OS,this.auth=Ks(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{cS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new uS(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;ov(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(yE)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DS().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&ov(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=IS();g.length!==0&&(g+=m),gE(g).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function dv(r,e,n,s=!1,o=!1){const u=new MS(r);let f;if(o)f=yE;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function fm(r,e,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await dv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await dv(r,e,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(r,e){const n=Qs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(jr(u,e??{}))return o;Gn(o,"already-initialized")}return n.initialize({options:e})}function VS(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Yi);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function PS(r,e,n){const s=Ks(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=_E(e),{host:f,port:m}=US(e),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(jr(y,s.config.emulator)&&jr(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,io(f)?(q0(`${u}//${f}${g}`),H0("Auth",!0)):LS()}function _E(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function US(r){const e=_E(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:mv(f)}}}function mv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function LS(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(e){return Ki("not implemented")}_linkToIdToken(e,n){return Ki("not implemented")}_getReauthenticationResolver(e){return Ki("not implemented")}}async function jS(r,e){return Yr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(r,e){return Xl(r,"POST","/v1/accounts:signInWithPassword",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(r,e){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,e))}async function qS(r,e){return Xl(r,"POST","/v1/accounts:signInWithEmailLink",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends zm{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Ll(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ll(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,n,"signInWithPassword",zS);case"emailLink":return BS(e,{email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fm(e,s,"signUpPassword",jS);case"emailLink":return qS(e,{idToken:n,email:this._email,oobCode:this._password});default:Gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(r,e){return Xl(r,"POST","/v1/accounts:signInWithIdp",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="http://localhost";class js extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Vm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new js(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Xa(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Xa(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xa(e,n)}buildRequest(){const e={requestUri:HS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GS(r){const e=Al(wl(r)).link,n=e?Al(wl(e)).deep_link_id:null,s=Al(wl(r)).deep_link_id;return(s?Al(wl(s)).link:null)||s||n||e||r}class Bm{constructor(e){var n,s,o,u,f,m;const g=Al(wl(e)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,T=(s=g.oobCode)!==null&&s!==void 0?s:null,w=FS((o=g.mode)!==null&&o!==void 0?o:null);_e(y&&T&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=T,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=GS(e);try{return new Bm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Ll._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bm.parseLink(n);return _e(s,"argument-error"),Ll._fromEmailAndCode(e,s.code,s.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends vE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends $l{constructor(){super("facebook.com")}static credential(e){return js._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends $l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return js._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nr.credential(n,s)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends $l{constructor(){super("github.com")}static credential(e){return js._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends $l{constructor(){super("twitter.com")}static credential(e,n){return js._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mr.credential(n,s)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(r,e){return Xl(r,"POST","/v1/accounts:signUp",Kr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Hn._fromIdTokenResponse(e,s,o),f=pv(s);return new zs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=pv(s);return new zs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function pv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Qn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Xc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Xc(e,n,s,o)}}function EE(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Xc._fromErrorAndOperation(r,u,e,s):u})}async function KS(r,e,n=!1){const s=await Ul(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return zs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(r,e,n=!1){const{auth:s}=r;if(kn(s.app))return Promise.reject(Xi(s));const o="reauthenticate";try{const u=await Ul(r,EE(s,o,e,r),n);_e(u.idToken,s,"internal-error");const f=Lm(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(r.uid===m,s,"user-mismatch"),zs._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Gn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(r,e,n=!1){if(kn(r.app))return Promise.reject(Xi(r));const s="signIn",o=await EE(r,s,e),u=await zs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function XS(r,e){return TE(Ks(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(r){const e=Ks(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $S(r,e,n){if(kn(r.app))return Promise.reject(Xi(r));const s=Ks(r),f=await fm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&bE(r),g}),m=await zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function ZS(r,e,n){return kn(r.app)?Promise.reject(Xi(r)):XS(Dt(r),so.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&bE(r),s})}function WS(r,e,n,s){return Dt(r).onIdTokenChanged(e,n,s)}function JS(r,e,n){return Dt(r).beforeAuthStateChanged(e,n)}function eR(r,e,n,s){return Dt(r).onAuthStateChanged(e,n,s)}function tR(r){return Dt(r).signOut()}const $c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=1e3,iR=10;class wE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);ES()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,iR):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const rR=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const RE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new ph(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await sR(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=qm("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const I=w;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(I.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){return window}function oR(r){fi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(){return typeof fi().WorkerGlobalScope<"u"&&typeof fi().importScripts=="function"}async function lR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uR(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function cR(){return IE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",hR=1,Zc="firebaseLocalStorage",xE="fbase_key";class Zl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(r,e){return r.transaction([Zc],e?"readwrite":"readonly").objectStore(Zc)}function fR(){const r=indexedDB.deleteDatabase(CE);return new Zl(r).toPromise()}function dm(){const r=indexedDB.open(CE,hR);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Zc,{keyPath:xE})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Zc)?e(s):(s.close(),await fR(),e(await dm()))})})}async function gv(r,e,n){const s=gh(r,!0).put({[xE]:e,value:n});return new Zl(s).toPromise()}async function dR(r,e){const n=gh(r,!1).get(e),s=await new Zl(n).toPromise();return s===void 0?null:s.value}function yv(r,e){const n=gh(r,!0).delete(e);return new Zl(n).toPromise()}const mR=800,pR=3;class DE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>pR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(cR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dm();return await gv(e,$c,"1"),await yv(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>dR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=gh(o,!1).getAll();return new Zl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DE.type="LOCAL";const gR=DE;new Yl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(r,e){return e?Yi(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xa(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xa(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xa(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _R(r){return TE(r.auth,new Hm(r),r.bypassAuthState)}function vR(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),YS(n,new Hm(r),r.bypassAuthState)}async function ER(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),KS(n,new Hm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:Gn(this.auth,"internal-error")}}resolve(e){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new Yl(2e3,1e4);class Qa extends NE{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qa.currentPopupAction&&Qa.currentPopupAction.cancel(),Qa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const e=qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TR.get())};e()}}Qa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="pendingRedirect",Pc=new Map;class AR extends NE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Pc.get(this.auth._key());if(!e){try{const s=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Pc.set(this.auth._key(),e)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(r,e){const n=IR(e),s=RR(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function SR(r,e){Pc.set(r._key(),e)}function RR(r){return Yi(r._redirectPersistence)}function IR(r){return Vc(bR,r.config.apiKey,r.name)}async function CR(r,e,n=!1){if(kn(r.app))return Promise.reject(Xi(r));const s=Ks(r),o=yR(s,e),f=await new AR(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!OE(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(hi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(_v(e))}saveEventToCache(e){this.cachedEventUids.add(_v(e)),this.lastProcessedEventTime=Date.now()}}function _v(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function OE({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function NR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(r,e={}){return Yr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kR=/^https?/;async function VR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OR(r);for(const n of e)try{if(PR(n))return}catch{}Gn(r,"unauthorized-domain")}function PR(r){const e=cm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!kR.test(n))return!1;if(MR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new Yl(3e4,6e4);function vv(){const r=fi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function LR(r){return new Promise((e,n)=>{var s,o,u;function f(){vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vv(),n(hi(r,"network-request-failed"))},timeout:UR.get()})}if(!((o=(s=fi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=fi().gapi)===null||u===void 0)&&u.load)f();else{const m=xS("iframefcb");return fi()[m]=()=>{gapi.load?f():n(hi(r,"network-request-failed"))},gE(`${CS()}?onload=${m}`).catch(g=>n(g))}}).catch(e=>{throw Uc=null,e})}let Uc=null;function jR(r){return Uc=Uc||LR(r),Uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Yl(5e3,15e3),BR="__/auth/iframe",qR="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Um(e,qR):`https://${r.config.authDomain}/${BR}`,s={apiKey:e.apiKey,appName:r.name,v:ro},o=FR.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function QR(r){const e=await jR(r),n=fi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:GR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=hi(r,"network-request-failed"),m=fi().setTimeout(()=>{u(f)},zR.get());function g(){fi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,$R="_blank",ZR="http://localhost";class Ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WR(r,e,n,s=YR,o=XR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},KR),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Zt().toLowerCase();n&&(m=uE(y)?$R:n),oE(y)&&(e=e||ZR,g.scrollbars="yes");const T=Object.entries(g).reduce((I,[q,$])=>`${I}${q}=${$},`,"");if(vS(y)&&m!=="_self")return JR(e||"",m),new Ev(null);const w=window.open(e||"",m,T);_e(w,r,"popup-blocked");try{w.focus()}catch{}return new Ev(w)}function JR(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="__/auth/handler",t2="emulator/auth/handler",n2=encodeURIComponent("fac");async function Tv(r,e,n,s,o,u){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ro,eventId:o};if(e instanceof vE){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",P1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,w]of Object.entries({}))f[T]=w}if(e instanceof $l){const T=e.getScopes().filter(w=>w!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await r._getAppCheckToken(),y=g?`#${n2}=${encodeURIComponent(g)}`:"";return`${i2(r)}?${Kl(m).slice(1)}${y}`}function i2({config:r}){return r.emulator?Um(r,t2):`https://${r.authDomain}/${e2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="webStorageSupport";class r2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=CR,this._overrideRedirectResult=SR}async _openPopup(e,n,s,o){var u;Zi((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Tv(e,n,s,cm(),o);return WR(e,f,qm())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Tv(e,n,s,cm(),o);return oR(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Zi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await QR(e),s=new DR(e);return n.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yd,{type:Yd},o=>{var u;const f=(u=o?.[0])===null||u===void 0?void 0:u[Yd];f!==void 0&&n(!!f),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mE()||lE()||jm()}}const s2=r2;var bv="@firebase/auth",Av="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l2(r){_i(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pE(r)},y=new SS(s,o,u,g);return VS(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_i(new Fn("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(s=>new a2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(bv,Av,o2(r)),Pn(bv,Av,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=5*60,c2=B0("authIdTokenMaxAge")||u2;let wv=null;const h2=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>c2)return;const o=n?.token;wv!==o&&(wv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function f2(r=km()){const e=Qs(r,"auth");if(e.isInitialized())return e.getImmediate();const n=kS(r,{popupRedirectResolver:s2,persistence:[gR,rR,RE]}),s=B0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=h2(u.toString());JS(n,f,()=>f(n.currentUser)),WS(n,m=>f(m))}}const o=j0("auth");return o&&PS(n,`http://${o}`),n}function d2(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}RS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=hi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",d2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l2("Browser");const ME="@firebase/installations",Fm="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=1e4,VE=`w:${Fm}`,PE="FIS_v2",m2="https://firebaseinstallations.googleapis.com/v1",p2=60*60*1e3,g2="installations",y2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bs=new Gs(g2,y2,_2);function UE(r){return r instanceof Qn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE({projectId:r}){return`${m2}/projects/${r}/installations`}function jE(r){return{token:r.token,requestStatus:2,expiresIn:E2(r.expiresIn),creationTime:Date.now()}}async function zE(r,e){const s=(await e.json()).error;return Bs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function BE({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function v2(r,{refreshToken:e}){const n=BE(r);return n.append("Authorization",T2(e)),n}async function qE(r){const e=await r();return e.status>=500&&e.status<600?r():e}function E2(r){return Number(r.replace("s","000"))}function T2(r){return`${PE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=LE(r),o=BE(r),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:PE,appId:r.appId,sdkVersion:VE},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await qE(()=>fetch(s,m));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:jE(y.authToken)}}else throw await zE("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=/^[cdef][\w-]{21}$/,mm="";function S2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=R2(r);return w2.test(n)?n:mm}catch{return mm}}function R2(r){return A2(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Map;function GE(r,e){const n=yh(r);QE(n,e),I2(n,e)}function QE(r,e){const n=FE.get(r);if(n)for(const s of n)s(e)}function I2(r,e){const n=C2();n&&n.postMessage({key:r,fid:e}),x2()}let Vs=null;function C2(){return!Vs&&"BroadcastChannel"in self&&(Vs=new BroadcastChannel("[Firebase] FID Change"),Vs.onmessage=r=>{QE(r.data.key,r.data.fid)}),Vs}function x2(){FE.size===0&&Vs&&(Vs.close(),Vs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="firebase-installations-database",N2=1,qs="firebase-installations-store";let Xd=null;function Gm(){return Xd||(Xd=X0(D2,N2,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(qs)}}})),Xd}async function Wc(r,e){const n=yh(r),o=(await Gm()).transaction(qs,"readwrite"),u=o.objectStore(qs),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&GE(r,e.fid),e}async function KE(r){const e=yh(r),s=(await Gm()).transaction(qs,"readwrite");await s.objectStore(qs).delete(e),await s.done}async function _h(r,e){const n=yh(r),o=(await Gm()).transaction(qs,"readwrite"),u=o.objectStore(qs),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&GE(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(r){let e;const n=await _h(r.appConfig,s=>{const o=O2(s),u=M2(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===mm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function O2(r){const e=r||{fid:S2(),registrationStatus:0};return YE(e)}function M2(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=k2(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:V2(r)}:{installationEntry:e}}async function k2(r,e){try{const n=await b2(r,e);return Wc(r.appConfig,n)}catch(n){throw UE(n)&&n.customData.serverCode===409?await KE(r.appConfig):await Wc(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function V2(r){let e=await Sv(r.appConfig);for(;e.registrationStatus===1;)await HE(100),e=await Sv(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Qm(r);return s||n}return e}function Sv(r){return _h(r,e=>{if(!e)throw Bs.create("installation-not-found");return YE(e)})}function YE(r){return P2(r)?{fid:r.fid,registrationStatus:0}:r}function P2(r){return r.registrationStatus===1&&r.registrationTime+kE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2({appConfig:r,heartbeatServiceProvider:e},n){const s=L2(r,n),o=v2(r,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:VE,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await qE(()=>fetch(s,m));if(g.ok){const y=await g.json();return jE(y)}else throw await zE("Generate Auth Token",g)}function L2(r,{fid:e}){return`${LE(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(r,e=!1){let n;const s=await _h(r.appConfig,u=>{if(!XE(u))throw Bs.create("not-registered");const f=u.authToken;if(!e&&B2(f))return u;if(f.requestStatus===1)return n=j2(r,e),u;{if(!navigator.onLine)throw Bs.create("app-offline");const m=H2(u);return n=z2(r,m),m}});return n?await n:s.authToken}async function j2(r,e){let n=await Rv(r.appConfig);for(;n.authToken.requestStatus===1;)await HE(100),n=await Rv(r.appConfig);const s=n.authToken;return s.requestStatus===0?Km(r,e):s}function Rv(r){return _h(r,e=>{if(!XE(e))throw Bs.create("not-registered");const n=e.authToken;return F2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function z2(r,e){try{const n=await U2(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Wc(r.appConfig,s),n}catch(n){if(UE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await KE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wc(r.appConfig,s)}throw n}}function XE(r){return r!==void 0&&r.registrationStatus===2}function B2(r){return r.requestStatus===2&&!q2(r)}function q2(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+p2}function H2(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function F2(r){return r.requestStatus===1&&r.requestTime+kE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(r){const e=r,{installationEntry:n,registrationPromise:s}=await Qm(e);return s?s.catch(console.error):Km(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(r,e=!1){const n=r;return await K2(n),(await Km(n,e)).token}async function K2(r){const{registrationPromise:e}=await Qm(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(r){if(!r||!r.options)throw $d("App Configuration");if(!r.name)throw $d("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw $d(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function $d(r){return Bs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="installations",X2="installations-internal",$2=r=>{const e=r.getProvider("app").getImmediate(),n=Y2(e),s=Qs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Z2=r=>{const e=r.getProvider("app").getImmediate(),n=Qs(e,$E).getImmediate();return{getId:()=>G2(n),getToken:o=>Q2(n,o)}};function W2(){_i(new Fn($E,$2,"PUBLIC")),_i(new Fn(X2,Z2,"PRIVATE"))}W2();Pn(ME,Fm);Pn(ME,Fm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="analytics",J2="firebase_id",eI="origin",tI=60*1e3,nI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ym="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new dh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},En=new Gs("analytics","Analytics",iI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(r){if(!r.startsWith(Ym)){const e=En.create("invalid-gtag-resource",{gtagURL:r});return un.warn(e.message),""}return r}function ZE(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function sI(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function aI(r,e){const n=sI("firebase-js-sdk-policy",{createScriptURL:rI}),s=document.createElement("script"),o=`${Ym}?l=${r}&id=${e}`;s.src=n?n?.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function oI(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function lI(r,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const g=(await ZE(n)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(m){un.error(m)}r("config",o,u)}async function uI(r,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await ZE(n);for(const g of f){const y=m.find(w=>w.measurementId===g),T=y&&e[y.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){un.error(u)}}function cI(r,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,g]=f;await uI(r,e,n,m,g)}else if(u==="config"){const[m,g]=f;await lI(r,e,n,s,m,g)}else if(u==="consent"){const[m,g]=f;r("consent",m,g)}else if(u==="get"){const[m,g,y]=f;r("get",m,g,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){un.error(m)}}return o}function hI(r,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=cI(u,r,e,n),{gtagCore:u,wrappedGtag:window[o]}}function fI(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ym)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=30,mI=1e3;class pI{constructor(e={},n=mI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WE=new pI;function gI(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function yI(r){var e;const{appId:n,apiKey:s}=r,o={method:"GET",headers:gI(s)},u=nI.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(m=g.error.message)}catch{}throw En.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function _I(r,e=WE,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw En.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw En.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new TI;return setTimeout(async()=>{m.abort()},tI),JE({appId:s,apiKey:o,measurementId:u},f,m,e)}async function JE(r,{throttleEndTimeMillis:e,backoffCount:n},s,o=WE){var u;const{appId:f,measurementId:m}=r;try{await vI(s,e)}catch(g){if(m)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:f,measurementId:m};throw g}try{const g=await yI(r);return o.deleteThrottleMetadata(f),g}catch(g){const y=g;if(!EI(y)){if(o.deleteThrottleMetadata(f),m)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y?.message}]`),{appId:f,measurementId:m};throw g}const T=Number((u=y?.customData)===null||u===void 0?void 0:u.httpStatus)===503?Z_(n,o.intervalMillis,dI):Z_(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return o.setThrottleMetadata(f,w),un.debug(`Calling attemptFetch again in ${T} millis`),JE(r,w,s,o)}}function vI(r,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(En.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function EI(r){if(!(r instanceof Qn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class TI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bI(r,e,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(){if(G0())try{await Q0()}catch(r){return un.warn(En.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return un.warn(En.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wI(r,e,n,s,o,u,f){var m;const g=_I(r);g.then(q=>{n[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>un.error(q)),e.push(g);const y=AI().then(q=>{if(q)return s.getId()}),[T,w]=await Promise.all([g,y]);fI(u)||aI(u,T.measurementId),o("js",new Date);const I=(m=f?.config)!==null&&m!==void 0?m:{};return I[eI]="firebase",I.update=!0,w!=null&&(I[J2]=w),o("config",T.measurementId,I),T.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.app=e}_delete(){return delete Nl[this.app.options.appId],Promise.resolve()}}let Nl={},Iv=[];const Cv={};let Zd="dataLayer",RI="gtag",xv,eT,Dv=!1;function II(){const r=[];if(F0()&&r.push("This is a browser extension environment."),O1()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=En.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function CI(r,e,n){II();const s=r.options.appId;if(!s)throw En.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw En.create("no-api-key");if(Nl[s]!=null)throw En.create("already-exists",{id:s});if(!Dv){oI(Zd);const{wrappedGtag:u,gtagCore:f}=hI(Nl,Iv,Cv,Zd,RI);eT=u,xv=f,Dv=!0}return Nl[s]=wI(r,Iv,Cv,e,xv,Zd,n),new SI(r)}function xI(r=km()){r=Dt(r);const e=Qs(r,Jc);return e.isInitialized()?e.getImmediate():DI(r)}function DI(r,e={}){const n=Qs(r,Jc);if(n.isInitialized()){const o=n.getImmediate();if(jr(e,n.getOptions()))return o;throw En.create("already-initialized")}return n.initialize({options:e})}function NI(r,e,n,s){r=Dt(r),bI(eT,Nl[r.app.options.appId],e,n,s).catch(o=>un.error(o))}const Nv="@firebase/analytics",Ov="0.10.17";function OI(){_i(new Fn(Jc,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return CI(s,o,n)},"PUBLIC")),_i(new Fn("analytics-internal",r,"PRIVATE")),Pn(Nv,Ov),Pn(Nv,Ov,"esm2017");function r(e){try{const n=e.getProvider(Jc).getImmediate();return{logEvent:(s,o,u)=>NI(n,s,o,u)}}catch(n){throw En.create("interop-component-reg-failed",{reason:n})}}}OI();var Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,tT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,A){function C(){}C.prototype=A.prototype,O.D=A.prototype,O.prototype=new C,O.prototype.constructor=O,O.C=function(N,M,P){for(var x=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)x[Tt-2]=arguments[Tt];return A.prototype[M].apply(N,x)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,A,C){C||(C=0);var N=Array(16);if(typeof A=="string")for(var M=0;16>M;++M)N[M]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(M=0;16>M;++M)N[M]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=O.g[0],C=O.g[1],M=O.g[2];var P=O.g[3],x=A+(P^C&(M^P))+N[0]+3614090360&4294967295;A=C+(x<<7&4294967295|x>>>25),x=P+(M^A&(C^M))+N[1]+3905402710&4294967295,P=A+(x<<12&4294967295|x>>>20),x=M+(C^P&(A^C))+N[2]+606105819&4294967295,M=P+(x<<17&4294967295|x>>>15),x=C+(A^M&(P^A))+N[3]+3250441966&4294967295,C=M+(x<<22&4294967295|x>>>10),x=A+(P^C&(M^P))+N[4]+4118548399&4294967295,A=C+(x<<7&4294967295|x>>>25),x=P+(M^A&(C^M))+N[5]+1200080426&4294967295,P=A+(x<<12&4294967295|x>>>20),x=M+(C^P&(A^C))+N[6]+2821735955&4294967295,M=P+(x<<17&4294967295|x>>>15),x=C+(A^M&(P^A))+N[7]+4249261313&4294967295,C=M+(x<<22&4294967295|x>>>10),x=A+(P^C&(M^P))+N[8]+1770035416&4294967295,A=C+(x<<7&4294967295|x>>>25),x=P+(M^A&(C^M))+N[9]+2336552879&4294967295,P=A+(x<<12&4294967295|x>>>20),x=M+(C^P&(A^C))+N[10]+4294925233&4294967295,M=P+(x<<17&4294967295|x>>>15),x=C+(A^M&(P^A))+N[11]+2304563134&4294967295,C=M+(x<<22&4294967295|x>>>10),x=A+(P^C&(M^P))+N[12]+1804603682&4294967295,A=C+(x<<7&4294967295|x>>>25),x=P+(M^A&(C^M))+N[13]+4254626195&4294967295,P=A+(x<<12&4294967295|x>>>20),x=M+(C^P&(A^C))+N[14]+2792965006&4294967295,M=P+(x<<17&4294967295|x>>>15),x=C+(A^M&(P^A))+N[15]+1236535329&4294967295,C=M+(x<<22&4294967295|x>>>10),x=A+(M^P&(C^M))+N[1]+4129170786&4294967295,A=C+(x<<5&4294967295|x>>>27),x=P+(C^M&(A^C))+N[6]+3225465664&4294967295,P=A+(x<<9&4294967295|x>>>23),x=M+(A^C&(P^A))+N[11]+643717713&4294967295,M=P+(x<<14&4294967295|x>>>18),x=C+(P^A&(M^P))+N[0]+3921069994&4294967295,C=M+(x<<20&4294967295|x>>>12),x=A+(M^P&(C^M))+N[5]+3593408605&4294967295,A=C+(x<<5&4294967295|x>>>27),x=P+(C^M&(A^C))+N[10]+38016083&4294967295,P=A+(x<<9&4294967295|x>>>23),x=M+(A^C&(P^A))+N[15]+3634488961&4294967295,M=P+(x<<14&4294967295|x>>>18),x=C+(P^A&(M^P))+N[4]+3889429448&4294967295,C=M+(x<<20&4294967295|x>>>12),x=A+(M^P&(C^M))+N[9]+568446438&4294967295,A=C+(x<<5&4294967295|x>>>27),x=P+(C^M&(A^C))+N[14]+3275163606&4294967295,P=A+(x<<9&4294967295|x>>>23),x=M+(A^C&(P^A))+N[3]+4107603335&4294967295,M=P+(x<<14&4294967295|x>>>18),x=C+(P^A&(M^P))+N[8]+1163531501&4294967295,C=M+(x<<20&4294967295|x>>>12),x=A+(M^P&(C^M))+N[13]+2850285829&4294967295,A=C+(x<<5&4294967295|x>>>27),x=P+(C^M&(A^C))+N[2]+4243563512&4294967295,P=A+(x<<9&4294967295|x>>>23),x=M+(A^C&(P^A))+N[7]+1735328473&4294967295,M=P+(x<<14&4294967295|x>>>18),x=C+(P^A&(M^P))+N[12]+2368359562&4294967295,C=M+(x<<20&4294967295|x>>>12),x=A+(C^M^P)+N[5]+4294588738&4294967295,A=C+(x<<4&4294967295|x>>>28),x=P+(A^C^M)+N[8]+2272392833&4294967295,P=A+(x<<11&4294967295|x>>>21),x=M+(P^A^C)+N[11]+1839030562&4294967295,M=P+(x<<16&4294967295|x>>>16),x=C+(M^P^A)+N[14]+4259657740&4294967295,C=M+(x<<23&4294967295|x>>>9),x=A+(C^M^P)+N[1]+2763975236&4294967295,A=C+(x<<4&4294967295|x>>>28),x=P+(A^C^M)+N[4]+1272893353&4294967295,P=A+(x<<11&4294967295|x>>>21),x=M+(P^A^C)+N[7]+4139469664&4294967295,M=P+(x<<16&4294967295|x>>>16),x=C+(M^P^A)+N[10]+3200236656&4294967295,C=M+(x<<23&4294967295|x>>>9),x=A+(C^M^P)+N[13]+681279174&4294967295,A=C+(x<<4&4294967295|x>>>28),x=P+(A^C^M)+N[0]+3936430074&4294967295,P=A+(x<<11&4294967295|x>>>21),x=M+(P^A^C)+N[3]+3572445317&4294967295,M=P+(x<<16&4294967295|x>>>16),x=C+(M^P^A)+N[6]+76029189&4294967295,C=M+(x<<23&4294967295|x>>>9),x=A+(C^M^P)+N[9]+3654602809&4294967295,A=C+(x<<4&4294967295|x>>>28),x=P+(A^C^M)+N[12]+3873151461&4294967295,P=A+(x<<11&4294967295|x>>>21),x=M+(P^A^C)+N[15]+530742520&4294967295,M=P+(x<<16&4294967295|x>>>16),x=C+(M^P^A)+N[2]+3299628645&4294967295,C=M+(x<<23&4294967295|x>>>9),x=A+(M^(C|~P))+N[0]+4096336452&4294967295,A=C+(x<<6&4294967295|x>>>26),x=P+(C^(A|~M))+N[7]+1126891415&4294967295,P=A+(x<<10&4294967295|x>>>22),x=M+(A^(P|~C))+N[14]+2878612391&4294967295,M=P+(x<<15&4294967295|x>>>17),x=C+(P^(M|~A))+N[5]+4237533241&4294967295,C=M+(x<<21&4294967295|x>>>11),x=A+(M^(C|~P))+N[12]+1700485571&4294967295,A=C+(x<<6&4294967295|x>>>26),x=P+(C^(A|~M))+N[3]+2399980690&4294967295,P=A+(x<<10&4294967295|x>>>22),x=M+(A^(P|~C))+N[10]+4293915773&4294967295,M=P+(x<<15&4294967295|x>>>17),x=C+(P^(M|~A))+N[1]+2240044497&4294967295,C=M+(x<<21&4294967295|x>>>11),x=A+(M^(C|~P))+N[8]+1873313359&4294967295,A=C+(x<<6&4294967295|x>>>26),x=P+(C^(A|~M))+N[15]+4264355552&4294967295,P=A+(x<<10&4294967295|x>>>22),x=M+(A^(P|~C))+N[6]+2734768916&4294967295,M=P+(x<<15&4294967295|x>>>17),x=C+(P^(M|~A))+N[13]+1309151649&4294967295,C=M+(x<<21&4294967295|x>>>11),x=A+(M^(C|~P))+N[4]+4149444226&4294967295,A=C+(x<<6&4294967295|x>>>26),x=P+(C^(A|~M))+N[11]+3174756917&4294967295,P=A+(x<<10&4294967295|x>>>22),x=M+(A^(P|~C))+N[2]+718787259&4294967295,M=P+(x<<15&4294967295|x>>>17),x=C+(P^(M|~A))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+A&4294967295,O.g[1]=O.g[1]+(M+(x<<21&4294967295|x>>>11))&4294967295,O.g[2]=O.g[2]+M&4294967295,O.g[3]=O.g[3]+P&4294967295}s.prototype.u=function(O,A){A===void 0&&(A=O.length);for(var C=A-this.blockSize,N=this.B,M=this.h,P=0;P<A;){if(M==0)for(;P<=C;)o(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<A;)if(N[M++]=O.charCodeAt(P++),M==this.blockSize){o(this,N),M=0;break}}else for(;P<A;)if(N[M++]=O[P++],M==this.blockSize){o(this,N),M=0;break}}this.h=M,this.o+=A},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var A=1;A<O.length-8;++A)O[A]=0;var C=8*this.o;for(A=O.length-8;A<O.length;++A)O[A]=C&255,C/=256;for(this.u(O),O=Array(16),A=C=0;4>A;++A)for(var N=0;32>N;N+=8)O[C++]=this.g[A]>>>N&255;return O};function u(O,A){var C=m;return Object.prototype.hasOwnProperty.call(C,O)?C[O]:C[O]=A(O)}function f(O,A){this.h=A;for(var C=[],N=!0,M=O.length-1;0<=M;M--){var P=O[M]|0;N&&P==A||(C[M]=P,N=!1)}this.g=C}var m={};function g(O){return-128<=O&&128>O?u(O,function(A){return new f([A|0],0>A?-1:0)}):new f([O|0],0>O?-1:0)}function y(O){if(isNaN(O)||!isFinite(O))return w;if(0>O)return J(y(-O));for(var A=[],C=1,N=0;O>=C;N++)A[N]=O/C|0,C*=4294967296;return new f(A,0)}function T(O,A){if(O.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(O.charAt(0)=="-")return J(T(O.substring(1),A));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(A,8)),N=w,M=0;M<O.length;M+=8){var P=Math.min(8,O.length-M),x=parseInt(O.substring(M,M+P),A);8>P?(P=y(Math.pow(A,P)),N=N.j(P).add(y(x))):(N=N.j(C),N=N.add(y(x)))}return N}var w=g(0),I=g(1),q=g(16777216);r=f.prototype,r.m=function(){if(ie(this))return-J(this).m();for(var O=0,A=1,C=0;C<this.g.length;C++){var N=this.i(C);O+=(0<=N?N:4294967296+N)*A,A*=4294967296}return O},r.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if($(this))return"0";if(ie(this))return"-"+J(this).toString(O);for(var A=y(Math.pow(O,6)),C=this,N="";;){var M=De(C,A).g;C=Te(C,M.j(A));var P=((0<C.g.length?C.g[0]:C.h)>>>0).toString(O);if(C=M,$(C))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function $(O){if(O.h!=0)return!1;for(var A=0;A<O.g.length;A++)if(O.g[A]!=0)return!1;return!0}function ie(O){return O.h==-1}r.l=function(O){return O=Te(this,O),ie(O)?-1:$(O)?0:1};function J(O){for(var A=O.g.length,C=[],N=0;N<A;N++)C[N]=~O.g[N];return new f(C,~O.h).add(I)}r.abs=function(){return ie(this)?J(this):this},r.add=function(O){for(var A=Math.max(this.g.length,O.g.length),C=[],N=0,M=0;M<=A;M++){var P=N+(this.i(M)&65535)+(O.i(M)&65535),x=(P>>>16)+(this.i(M)>>>16)+(O.i(M)>>>16);N=x>>>16,P&=65535,x&=65535,C[M]=x<<16|P}return new f(C,C[C.length-1]&-2147483648?-1:0)};function Te(O,A){return O.add(J(A))}r.j=function(O){if($(this)||$(O))return w;if(ie(this))return ie(O)?J(this).j(J(O)):J(J(this).j(O));if(ie(O))return J(this.j(J(O)));if(0>this.l(q)&&0>O.l(q))return y(this.m()*O.m());for(var A=this.g.length+O.g.length,C=[],N=0;N<2*A;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<O.g.length;M++){var P=this.i(N)>>>16,x=this.i(N)&65535,Tt=O.i(M)>>>16,tt=O.i(M)&65535;C[2*N+2*M]+=x*tt,me(C,2*N+2*M),C[2*N+2*M+1]+=P*tt,me(C,2*N+2*M+1),C[2*N+2*M+1]+=x*Tt,me(C,2*N+2*M+1),C[2*N+2*M+2]+=P*Tt,me(C,2*N+2*M+2)}for(N=0;N<A;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=A;N<2*A;N++)C[N]=0;return new f(C,0)};function me(O,A){for(;(O[A]&65535)!=O[A];)O[A+1]+=O[A]>>>16,O[A]&=65535,A++}function fe(O,A){this.g=O,this.h=A}function De(O,A){if($(A))throw Error("division by zero");if($(O))return new fe(w,w);if(ie(O))return A=De(J(O),A),new fe(J(A.g),J(A.h));if(ie(A))return A=De(O,J(A)),new fe(J(A.g),A.h);if(30<O.g.length){if(ie(O)||ie(A))throw Error("slowDivide_ only works with positive integers.");for(var C=I,N=A;0>=N.l(O);)C=be(C),N=be(N);var M=Ce(C,1),P=Ce(N,1);for(N=Ce(N,2),C=Ce(C,2);!$(N);){var x=P.add(N);0>=x.l(O)&&(M=M.add(C),P=x),N=Ce(N,1),C=Ce(C,1)}return A=Te(O,M.j(A)),new fe(M,A)}for(M=w;0<=O.l(A);){for(C=Math.max(1,Math.floor(O.m()/A.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=y(C),x=P.j(A);ie(x)||0<x.l(O);)C-=N,P=y(C),x=P.j(A);$(P)&&(P=I),M=M.add(P),O=Te(O,x)}return new fe(M,O)}r.A=function(O){return De(this,O).h},r.and=function(O){for(var A=Math.max(this.g.length,O.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)&O.i(N);return new f(C,this.h&O.h)},r.or=function(O){for(var A=Math.max(this.g.length,O.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)|O.i(N);return new f(C,this.h|O.h)},r.xor=function(O){for(var A=Math.max(this.g.length,O.g.length),C=[],N=0;N<A;N++)C[N]=this.i(N)^O.i(N);return new f(C,this.h^O.h)};function be(O){for(var A=O.g.length+1,C=[],N=0;N<A;N++)C[N]=O.i(N)<<1|O.i(N-1)>>>31;return new f(C,O.h)}function Ce(O,A){var C=A>>5;A%=32;for(var N=O.g.length-C,M=[],P=0;P<N;P++)M[P]=0<A?O.i(P+C)>>>A|O.i(P+C+1)<<32-A:O.i(P+C);return new f(M,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,tT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Ur=f}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var Cc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nT,Sl,iT,Lc,pm,rT,sT,aT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,_){return c==Array.prototype||c==Object.prototype||(c[p]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cc=="object"&&Cc];for(var p=0;p<c.length;++p){var _=c[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var _=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in _))break e;_=_[U]}c=c[c.length-1],b=_[c],p=p(b),p!=b&&p!=null&&e(_,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var _=0,b=!1,U={next:function(){if(!b&&_<c.length){var H=_++;return{value:p(H,c[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,_){return c.call.apply(c.bind,arguments)}function w(c,p,_){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(p,U)}}return function(){return c.apply(p,arguments)}}function I(c,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:w,I.apply(null,arguments)}function q(c,p){var _=Array.prototype.slice.call(arguments,1);return function(){var b=_.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function $(c,p){function _(){}_.prototype=p.prototype,c.aa=p.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(b,U,H){for(var te=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)te[Pe-2]=arguments[Pe];return p.prototype[U].apply(b,te)}}function ie(c){const p=c.length;if(0<p){const _=Array(p);for(let b=0;b<p;b++)_[b]=c[b];return _}return[]}function J(c,p){for(let _=1;_<arguments.length;_++){const b=arguments[_];if(g(b)){const U=c.length||0,H=b.length||0;c.length=U+H;for(let te=0;te<H;te++)c[U+te]=b[te]}else c.push(b)}}class Te{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function me(c){return/^[\s\xa0]*$/.test(c)}function fe(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function De(c){return De[" "](c),c}De[" "]=function(){};var be=fe().indexOf("Gecko")!=-1&&!(fe().toLowerCase().indexOf("webkit")!=-1&&fe().indexOf("Edge")==-1)&&!(fe().indexOf("Trident")!=-1||fe().indexOf("MSIE")!=-1)&&fe().indexOf("Edge")==-1;function Ce(c,p,_){for(const b in c)p.call(_,c[b],b,c)}function O(c,p){for(const _ in c)p.call(void 0,c[_],_,c)}function A(c){const p={};for(const _ in c)p[_]=c[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let _,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(_ in b)c[_]=b[_];for(let H=0;H<C.length;H++)_=C[H],Object.prototype.hasOwnProperty.call(b,_)&&(c[_]=b[_])}}function M(c){var p=1;c=c.split(":");const _=[];for(;0<p&&c.length;)_.push(c.shift()),p--;return c.length&&_.push(c.join(":")),_}function P(c){m.setTimeout(()=>{throw c},0)}function x(){var c=oe;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Tt{constructor(){this.h=this.g=null}add(p,_){const b=tt.get();b.set(p,_),this.h?this.h.next=b:this.g=b,this.h=b}}var tt=new Te(()=>new G,c=>c.reset());class G{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ue=!1,oe=new Tt,R=()=>{const c=m.Promise.resolve(void 0);ne=()=>{c.then(F)}};var F=()=>{for(var c;c=x();){try{c.h.call(c.g)}catch(_){P(_)}var p=tt;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}ue=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var se=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,p),m.removeEventListener("test",_,p)}catch{}return c}();function le(c,p){if(Z.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(be){e:{try{De(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else _=="mouseover"?p=c.fromElement:_=="mouseout"&&(p=c.toElement);this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:de[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&le.aa.h.call(this)}}$(le,Z);var de={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Ke=0;function Kn(c,p,_,b,U){this.listener=c,this.proxy=null,this.src=p,this.type=_,this.capture=!!b,this.ha=U,this.key=++Ke,this.da=this.fa=!1}function er(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ti(c){this.src=c,this.g={},this.h=0}Ti.prototype.add=function(c,p,_,b,U){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var te=Wr(c,p,b,U);return-1<te?(p=c[te],_||(p.fa=!1)):(p=new Kn(p,this.src,H,!!b,U),p.fa=_,c.push(p)),p};function Zr(c,p){var _=p.type;if(_ in c.g){var b=c.g[_],U=Array.prototype.indexOf.call(b,p,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(er(p),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Wr(c,p,_,b){for(var U=0;U<c.length;++U){var H=c[U];if(!H.da&&H.listener==p&&H.capture==!!_&&H.ha==b)return U}return-1}var Jr="closure_lm_"+(1e6*Math.random()|0),co={};function iu(c,p,_,b,U){if(Array.isArray(p)){for(var H=0;H<p.length;H++)iu(c,p[H],_,b,U);return null}return _=ru(_),c&&c[ct]?c.K(p,_,y(b)?!!b.capture:!1,U):Tn(c,p,_,!1,b,U)}function Tn(c,p,_,b,U,H){if(!p)throw Error("Invalid event type");var te=y(U)?!!U.capture:!!U,Pe=Zs(c);if(Pe||(c[Jr]=Pe=new Ti(c)),_=Pe.add(p,_,b,te,H),_.proxy)return _;if(b=Vh(),_.proxy=b,b.src=c,b.listener=_,c.addEventListener)se||(U=te),U===void 0&&(U=!1),c.addEventListener(p.toString(),b,U);else if(c.attachEvent)c.attachEvent(es(p.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Vh(){function c(_){return p.call(c.src,c.listener,_)}const p=Ph;return c}function ho(c,p,_,b,U){if(Array.isArray(p))for(var H=0;H<p.length;H++)ho(c,p[H],_,b,U);else b=y(b)?!!b.capture:!!b,_=ru(_),c&&c[ct]?(c=c.i,p=String(p).toString(),p in c.g&&(H=c.g[p],_=Wr(H,_,b,U),-1<_&&(er(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete c.g[p],c.h--)))):c&&(c=Zs(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Wr(p,_,b,U)),(_=-1<c?p[c]:null)&&$s(_))}function $s(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[ct])Zr(p.i,c);else{var _=c.type,b=c.proxy;p.removeEventListener?p.removeEventListener(_,b,c.capture):p.detachEvent?p.detachEvent(es(_),b):p.addListener&&p.removeListener&&p.removeListener(b),(_=Zs(p))?(Zr(_,c),_.h==0&&(_.src=null,p[Jr]=null)):er(c)}}}function es(c){return c in co?co[c]:co[c]="on"+c}function Ph(c,p){if(c.da)c=!0;else{p=new le(p,this);var _=c.listener,b=c.ha||c.src;c.fa&&$s(c),c=_.call(b,p)}return c}function Zs(c){return c=c[Jr],c instanceof Ti?c:null}var fo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(c){return typeof c=="function"?c:(c[fo]||(c[fo]=function(p){return c.handleEvent(p)}),c[fo])}function ot(){ee.call(this),this.i=new Ti(this),this.M=this,this.F=null}$(ot,ee),ot.prototype[ct]=!0,ot.prototype.removeEventListener=function(c,p,_,b){ho(this,c,p,_,b)};function Fe(c,p){var _,b=c.F;if(b)for(_=[];b;b=b.F)_.push(b);if(c=c.M,b=p.type||p,typeof p=="string")p=new Z(p,c);else if(p instanceof Z)p.target=p.target||c;else{var U=p;p=new Z(b,c),N(p,U)}if(U=!0,_)for(var H=_.length-1;0<=H;H--){var te=p.g=_[H];U=cn(te,b,!0,p)&&U}if(te=p.g=c,U=cn(te,b,!0,p)&&U,U=cn(te,b,!1,p)&&U,_)for(H=0;H<_.length;H++)te=p.g=_[H],U=cn(te,b,!1,p)&&U}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var _=c.g[p],b=0;b<_.length;b++)er(_[b]);delete c.g[p],c.h--}}this.F=null},ot.prototype.K=function(c,p,_,b){return this.i.add(String(c),p,!1,_,b)},ot.prototype.L=function(c,p,_,b){return this.i.add(String(c),p,!0,_,b)};function cn(c,p,_,b){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,H=0;H<p.length;++H){var te=p[H];if(te&&!te.da&&te.capture==_){var Pe=te.listener,At=te.ha||te.src;te.fa&&Zr(c.i,te),U=Pe.call(At,b)!==!1&&U}}return U&&!b.defaultPrevented}function Gt(c,p,_){if(typeof c=="function")_&&(c=I(c,_));else if(c&&typeof c.handleEvent=="function")c=I(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function su(c){c.g=Gt(()=>{c.g=null,c.i&&(c.i=!1,su(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Uh extends ee{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(c){ee.call(this),this.h=c,this.g={}}$(ts,ee);var ns=[];function is(c){Ce(c.g,function(p,_){this.g.hasOwnProperty(_)&&$s(p)},c),c.g={}}ts.prototype.N=function(){ts.aa.N.call(this),is(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=m.JSON.stringify,Ws=m.JSON.parse,rs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function mo(){}mo.prototype.h=null;function po(c){return c.h||(c.h=c.i())}function go(){}var bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ai(){Z.call(this,"d")}$(Ai,Z);function yo(){Z.call(this,"c")}$(yo,Z);var Yn={},_o=null;function tr(){return _o=_o||new ot}Yn.La="serverreachability";function Js(c){Z.call(this,Yn.La,c)}$(Js,Z);function nr(c){const p=tr();Fe(p,new Js(p))}Yn.STAT_EVENT="statevent";function au(c,p){Z.call(this,Yn.STAT_EVENT,c),this.stat=p}$(au,Z);function nt(c){const p=tr();Fe(p,new au(p,c))}Yn.Ma="timingevent";function bt(c,p){Z.call(this,Yn.Ma,c),this.size=p}$(bt,Z);function pt(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function vo(c,p,_,b,U,H){c.info(function(){if(c.g)if(H)for(var te="",Pe=H.split("&"),At=0;At<Pe.length;At++){var Ue=Pe[At].split("=");if(1<Ue.length){var Ot=Ue[0];Ue=Ue[1];var wt=Ot.split("_");te=2<=wt.length&&wt[1]=="type"?te+(Ot+"="+Ue+"&"):te+(Ot+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+p+`
`+_+`
`+te})}function Lh(c,p,_,b,U,H,te){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+p+`
`+_+`
`+H+" "+te})}function ir(c,p,_,b){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ss(c,_)+(b?" "+b:"")})}function ou(c,p){c.info(function(){return"TIMEOUT: "+p})}bn.prototype.info=function(){};function ss(c,p){if(!c.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var b=_[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return Un(_)}catch{return p}}var rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}$($n,mo),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function Jt(c,p,_,b){this.j=c,this.i=p,this.l=_,this.R=b||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ht}function ht(){this.i=null,this.g="",this.h=!1}var Eo={},ea={};function Ln(c,p,_){c.L=1,c.v=cs(hn(p)),c.m=_,c.P=!0,Si(c,null)}function Si(c,p){c.F=Date.now(),as(c),c.A=hn(c.v);var _=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Ro(_.i,"t",b),c.C=0,_=c.j.J,c.h=new ht,c.g=Au(c.j,_?p:null,!c.m),0<c.O&&(c.M=new Uh(I(c.Y,c,c.g),c.O)),p=c.U,_=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(ns[0]=U.toString()),U=ns);for(var H=0;H<U.length;H++){var te=iu(_,U[H],b||p.handleEvent,!1,p.h||p);if(!te)break;p.g[te.key]=te}p=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),nr(),vo(c.i,c.u,c.A,c.l,c.R,c.m)}Jt.prototype.ca=function(c){c=c.target;const p=this.M;p&&Rn(c)==3?p.j():this.Y(c)},Jt.prototype.Y=function(c){try{if(c==this.g)e:{const wt=Rn(this.g);var p=this.g.Ba();const Mi=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||wt!=4||p==7||(p==8||0>=Mi?nr(3):nr(2)),sr(this);var _=this.g.Z();this.X=_;t:if(lu(this)){var b=pu(this.g);c="";var U=b.length,H=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Zn(this);var te="";break t}this.h.i=new m.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,c+=this.h.i.decode(b[p],{stream:!(H&&p==U-1)});b.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Lh(this.i,this.u,this.A,this.l,this.R,wt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,At=this.g;if((Pe=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!me(Pe)){var Ue=Pe;break t}}Ue=null}if(_=Ue)ir(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,os(this,_);else{this.o=!1,this.s=3,nt(12),Ut(this),Zn(this);break e}}if(this.P){_=!0;let Lt;for(;!this.J&&this.C<te.length;)if(Lt=uu(this,te),Lt==ea){wt==4&&(this.s=4,nt(14),_=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Eo){this.s=4,nt(15),ir(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else ir(this.i,this.l,Lt,null),os(this,Lt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||te.length!=0||this.h.h||(this.s=1,nt(16),_=!1),this.o=this.o&&_,!_)ir(this.i,this.l,te,"[Invalid Chunked Response]"),Ut(this),Zn(this);else if(0<te.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),_s(Ot),Ot.M=!0,nt(11))}}else ir(this.i,this.l,te,null),os(this,te);wt==4&&Ut(this),this.o&&!this.J&&(wt==4?Eu(this.j,this):(this.o=!1,as(this)))}else Hh(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Ut(this),Zn(this)}}}catch{}finally{}};function lu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function uu(c,p){var _=c.C,b=p.indexOf(`
`,_);return b==-1?ea:(_=Number(p.substring(_,b)),isNaN(_)?Eo:(b+=1,b+_>p.length?ea:(p=p.slice(b,b+_),c.C=b+_,p)))}Jt.prototype.cancel=function(){this.J=!0,Ut(this)};function as(c){c.S=Date.now()+c.I,cu(c,c.I)}function cu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pt(I(c.ba,c),p)}function sr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Jt.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ou(this.i,this.A),this.L!=2&&(nr(),nt(17)),Ut(this),this.s=2,Zn(this)):cu(this,this.S-c)};function Zn(c){c.j.G==0||c.J||Eu(c.j,c)}function Ut(c){sr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,is(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function os(c,p){try{var _=c.j;if(_.G!=0&&(_.g==c||To(_.h,c))){if(!c.K&&To(_.h,c)&&_.G==3){try{var b=_.Da.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)fa(_),ca(_);else break e;No(_),nt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=pt(I(_.Za,_),6e3));if(1>=na(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Oi(_,11)}else if((c.K||_.g==c)&&fa(_),!me(p))for(U=_.Da.g.parse(p),p=0;p<U.length;p++){let Ue=U[p];if(_.T=Ue[0],Ue=Ue[1],_.G==2)if(Ue[0]=="c"){_.K=Ue[1],_.ia=Ue[2];const Ot=Ue[3];Ot!=null&&(_.la=Ot,_.j.info("VER="+_.la));const wt=Ue[4];wt!=null&&(_.Aa=wt,_.j.info("SVER="+_.Aa));const Mi=Ue[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(b=1.5*Mi,_.L=b,_.j.info("backChannelRequestTimeoutMs_="+b)),b=_;const Lt=c.g;if(Lt){const ri=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var H=b.h;H.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ia(H,H.h),H.h=null))}if(b.D){const Mo=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(b.ya=Mo,Ye(b.I,b.D,Mo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),b=_;var te=c;if(b.qa=bu(b,b.J?b.ia:null,b.W),te.K){en(b.h,te);var Pe=te,At=b.L;At&&(Pe.I=At),Pe.B&&(sr(Pe),as(Pe)),b.g=te}else _u(b);0<_.i.length&&ha(_)}else Ue[0]!="stop"&&Ue[0]!="close"||Oi(_,7);else _.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?Oi(_,7):xo(_):Ue[0]!="noop"&&_.l&&_.l.ta(Ue),_.v=0)}}nr(4)}catch{}}var hu=class{constructor(c,p){this.g=c,this.map=p}};function Ri(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ta(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function na(c){return c.h?1:c.g?c.g.size:0}function To(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ia(c,p){c.g?c.g.add(p):c.h=p}function en(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ri.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const _ of c.g.values())p=p.concat(_.D);return p}return ie(c.i)}function jh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],_=c.length,b=0;b<_;b++)p.push(c[b]);return p}p=[],_=0;for(b in c)p[_++]=c[b];return p}function ra(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var _=0;_<c;_++)p.push(_);return p}p=[],_=0;for(const b in c)p[_++]=b;return p}}}function Ao(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var _=ra(c),b=jh(c),U=b.length,H=0;H<U;H++)p.call(void 0,b[H],_&&_[H],c)}var ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zh(c,p){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var b=c[_].indexOf("="),U=null;if(0<=b){var H=c[_].substring(0,b);U=c[_].substring(b+1)}else H=c[_];p(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function gt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof gt){this.h=c.h,us(this,c.j),this.o=c.o,this.g=c.g,ar(this,c.s),this.l=c.l;var p=c.i,_=new Ci;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Ii(this,_),this.m=c.m}else c&&(p=String(c).match(ls))?(this.h=!1,us(this,p[1]||"",!0),this.o=An(p[2]||""),this.g=An(p[3]||"",!0),ar(this,p[4]),this.l=An(p[5]||"",!0),Ii(this,p[6]||"",!0),this.m=An(p[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}gt.prototype.toString=function(){var c=[],p=this.j;p&&c.push(hs(p,wo,!0),":");var _=this.g;return(_||p=="file")&&(c.push("//"),(p=this.o)&&c.push(hs(p,wo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(hs(_,_.charAt(0)=="/"?Bh:So,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",hs(_,sa)),c.join("")};function hn(c){return new gt(c)}function us(c,p,_){c.j=_?An(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function ar(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Ii(c,p,_){p instanceof Ci?(c.i=p,du(c.i,c.h)):(_||(p=hs(p,qh)),c.i=new Ci(p,c.h))}function Ye(c,p,_){c.i.set(p,_)}function cs(c){return Ye(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function An(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function hs(c,p,_){return typeof c=="string"?(c=encodeURI(c).replace(p,fu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,So=/[#\?:]/g,Bh=/[#\?]/g,qh=/[#\?@]/g,sa=/#/g;function Ci(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function wn(c){c.g||(c.g=new Map,c.h=0,c.i&&zh(c.i,function(p,_){c.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=Ci.prototype,r.add=function(c,p){wn(this),this.i=null,c=Wn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(p),this.h+=1,this};function xi(c,p){wn(c),p=Wn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Di(c,p){return wn(c),p=Wn(c,p),c.g.has(p)}r.forEach=function(c,p){wn(this),this.g.forEach(function(_,b){_.forEach(function(U){c.call(p,U,b,this)},this)},this)},r.na=function(){wn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let b=0;b<p.length;b++){const U=c[b];for(let H=0;H<U.length;H++)_.push(p[b])}return _},r.V=function(c){wn(this);let p=[];if(typeof c=="string")Di(this,c)&&(p=p.concat(this.g.get(Wn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)p=p.concat(c[_])}return p},r.set=function(c,p){return wn(this),this.i=null,c=Wn(this,c),Di(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Ro(c,p,_){xi(c,p),0<_.length&&(c.i=null,c.g.set(Wn(c,p),ie(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var b=p[_];const H=encodeURIComponent(String(b)),te=this.V(b);for(b=0;b<te.length;b++){var U=H;te[b]!==""&&(U+="="+encodeURIComponent(String(te[b]))),c.push(U)}}return this.i=c.join("&")};function Wn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function du(c,p){p&&!c.j&&(wn(c),c.i=null,c.g.forEach(function(_,b){var U=b.toLowerCase();b!=U&&(xi(this,b),Ro(this,U,_))},c)),c.j=p}function fs(c,p){const _=new bn;if(m.Image){const b=new Image;b.onload=q(Sn,_,"TestLoadImage: loaded",!0,p,b),b.onerror=q(Sn,_,"TestLoadImage: error",!1,p,b),b.onabort=q(Sn,_,"TestLoadImage: abort",!1,p,b),b.ontimeout=q(Sn,_,"TestLoadImage: timeout",!1,p,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else p(!1)}function jn(c,p){const _=new bn,b=new AbortController,U=setTimeout(()=>{b.abort(),Sn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?Sn(_,"TestPingServer: ok",!0,p):Sn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),Sn(_,"TestPingServer: error",!1,p)})}function Sn(c,p,_,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(_)}catch{}}function ds(){this.g=new rs}function Jn(c,p,_){const b=_||"";try{Ao(c,function(U,H){let te=U;y(U)&&(te=Un(U)),p.push(b+H+"="+encodeURIComponent(te))})}catch(U){throw p.push(b+"type="+encodeURIComponent("_badmap")),U}}function or(c){this.l=c.Ub||null,this.j=c.eb||!1}$(or,mo),or.prototype.g=function(){return new Ni(this.l,this.j)},or.prototype.i=function(c){return function(){return c}}({});function Ni(c,p){ot.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ni,ot),r=Ni.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ti(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?ei(this):ti(this),this.readyState==3&&Io(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ei(this))},r.Qa=function(c){this.g&&(this.response=c,ei(this))},r.ga=function(){this.g&&ei(this)};function ei(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ti(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=p.next();return c.join(`\r
`)};function ti(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Co(c){let p="";return Ce(c,function(_,b){p+=b,p+=":",p+=_,p+=`\r
`}),p}function Nt(c,p,_){e:{for(b in _){var b=!1;break e}b=!0}b||(_=Co(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Ye(c,p,_))}function qe(c){ot.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(qe,ot);var aa=/^https?$/i,ms=["POST","PUT"];r=qe.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,_,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?po(this.o):po(Xn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(H){mu(this,H);return}if(c=_||"",_=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)_.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())_.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ms,p,void 0))||b||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of _)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){mu(this,H)}};function mu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,oa(c),ni(c)}function oa(c){c.A||(c.A=!0,Fe(c,"complete"),Fe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Fe(this,"complete"),Fe(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},r.bb=function(){la(this)};function la(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)Gt(c.Ea,0,c);else if(Fe(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var b;if(b=te===0){var U=String(c.D).match(ls)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),b=!aa.test(U?U.toLowerCase():"")}_=b}if(_)Fe(c,"complete"),Fe(c,"success");else{c.m=6;try{var H=2<Rn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",oa(c)}}finally{ni(c)}}}}function ni(c,p){if(c.g){ps(c);const _=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Fe(c,"ready");try{_.onreadystatechange=b}catch{}}}function ps(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Ws(p)}};function pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Hh(c){const p={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(me(c[b]))continue;var _=M(c[b]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=p[U]||[];p[U]=H,H.push(_)}O(p,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(c,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||p}function ua(c){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,c),this.cb=gs("retryDelaySeedMs",1e4,c),this.Wa=gs("forwardChannelMaxRetries",2,c),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(c&&c.concurrentRequestLimit),this.Da=new ds,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ua.prototype,r.la=8,r.G=1,r.connect=function(c,p,_,b){nt(0),this.W=c,this.H=p||{},_&&b!==void 0&&(this.H.OSID=_,this.H.OAID=b),this.F=this.X,this.I=bu(this,null,this.W),ha(this)};function xo(c){if(gu(c),c.G==3){var p=c.U++,_=hn(c.I);if(Ye(_,"SID",c.K),Ye(_,"RID",p),Ye(_,"TYPE","terminate"),ys(c,_),p=new Jt(c,c.j,p),p.L=2,p.v=cs(hn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=p.v,_=!0),_||(p.g=Au(p.j,null),p.g.ea(p.v)),p.F=Date.now(),as(p)}Tu(c)}function ca(c){c.g&&(_s(c),c.g.cancel(),c.g=null)}function gu(c){ca(c),c.u&&(m.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ha(c){if(!ta(c.h)&&!c.s){c.s=!0;var p=c.Ga;ne||R(),ue||(ne(),ue=!0),oe.add(p,c),c.B=0}}function Fh(c,p){return na(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pt(I(c.Ga,c,p),Oo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Jt(this,this.j,c);let H=this.o;if(this.S&&(H?(H=A(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var b=this.i[_];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(p+=b,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=yu(this,U,p),_=hn(this.I),Ye(_,"RID",c),Ye(_,"CVER",22),this.D&&Ye(_,"X-HTTP-Session-Id",this.D),ys(this,_),H&&(this.O?p="headers="+encodeURIComponent(String(Co(H)))+"&"+p:this.m&&Nt(_,this.m,H)),ia(this.h,U),this.Ua&&Ye(_,"TYPE","init"),this.P?(Ye(_,"$req",p),Ye(_,"SID","null"),U.T=!0,Ln(U,_,null)):Ln(U,_,p),this.G=2}}else this.G==3&&(c?Do(this,c):this.i.length==0||ta(this.h)||Do(this))};function Do(c,p){var _;p?_=p.l:_=c.U++;const b=hn(c.I);Ye(b,"SID",c.K),Ye(b,"RID",_),Ye(b,"AID",c.T),ys(c,b),c.m&&c.o&&Nt(b,c.m,c.o),_=new Jt(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),p&&(c.i=p.D.concat(c.i)),p=yu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ia(c.h,_),Ln(_,b,p)}function ys(c,p){c.H&&Ce(c.H,function(_,b){Ye(p,b,_)}),c.l&&Ao({},function(_,b){Ye(p,b,_)})}function yu(c,p,_){_=Math.min(c.i.length,_);var b=c.l?I(c.l.Na,c.l,c):null;e:{var U=c.i;let H=-1;for(;;){const te=["count="+_];H==-1?0<_?(H=U[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let Pe=!0;for(let At=0;At<_;At++){let Ue=U[At].g;const Ot=U[At].map;if(Ue-=H,0>Ue)H=Math.max(0,U[At].g-100),Pe=!1;else try{Jn(Ot,te,"req"+Ue+"_")}catch{b&&b(Ot)}}if(Pe){b=te.join("&");break e}}}return c=c.i.splice(0,_),p.D=c,b}function _u(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ne||R(),ue||(ne(),ue=!0),oe.add(p,c),c.v=0}}function No(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pt(I(c.Fa,c),Oo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pt(I(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),ca(this),vu(this))};function _s(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function vu(c){c.g=new Jt(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=hn(c.qa);Ye(p,"RID","rpc"),Ye(p,"SID",c.K),Ye(p,"AID",c.T),Ye(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ye(p,"TO",c.ja),Ye(p,"TYPE","xmlhttp"),ys(c,p),c.m&&c.o&&Nt(p,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=cs(hn(p)),_.m=null,_.P=!0,Si(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ca(this),No(this),nt(19))};function fa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Eu(c,p){var _=null;if(c.g==p){fa(c),_s(c),c.g=null;var b=2}else if(To(c.h,p))_=p.D,en(c.h,p),b=1;else return;if(c.G!=0){if(p.o)if(b==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var U=c.B;b=tr(),Fe(b,new bt(b,_)),ha(c)}else _u(c);else if(U=p.s,U==3||U==0&&0<p.X||!(b==1&&Fh(c,p)||b==2&&No(c)))switch(_&&0<_.length&&(p=c.h,p.i=p.i.concat(_)),U){case 1:Oi(c,5);break;case 4:Oi(c,10);break;case 3:Oi(c,6);break;default:Oi(c,2)}}}function Oo(c,p){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*p}function Oi(c,p){if(c.j.info("Error code "+p),p==2){var _=I(c.fb,c),b=c.Xa;const U=!b;b=new gt(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||us(b,"https"),cs(b),U?fs(b.toString(),_):jn(b.toString(),_)}else nt(2);c.G=0,c.l&&c.l.sa(p),Tu(c),gu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Tu(c){if(c.G=0,c.ka=[],c.l){const p=bo(c.h);(p.length!=0||c.i.length!=0)&&(J(c.ka,p),J(c.ka,c.i),c.h.i.length=0,ie(c.i),c.i.length=0),c.l.ra()}}function bu(c,p,_){var b=_ instanceof gt?hn(_):new gt(_);if(b.g!="")p&&(b.g=p+"."+b.g),ar(b,b.s);else{var U=m.location;b=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var H=new gt(null);b&&us(H,b),p&&(H.g=p),U&&ar(H,U),_&&(H.l=_),b=H}return _=c.D,p=c.ya,_&&p&&Ye(b,_,p),Ye(b,"VER",c.la),ys(c,b),b}function Au(c,p,_){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new qe(new or({eb:_})):new qe(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}r=wu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function da(){}da.prototype.g=function(c,p){return new tn(c,p)};function tn(c,p){ot.call(this),this.g=new ua(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!me(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!me(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ii(this)}$(tn,ot),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){xo(this.g)},tn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Un(c),c=_);p.i.push(new hu(p.Ya++,c)),p.G==3&&ha(p)},tn.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,tn.aa.N.call(this)};function Su(c){Ai.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const _ in p){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}$(Su,Ai);function Ru(){yo.call(this),this.status=1}$(Ru,yo);function ii(c){this.g=c}$(ii,wu),ii.prototype.ua=function(){Fe(this.g,"a")},ii.prototype.ta=function(c){Fe(this.g,new Su(c))},ii.prototype.sa=function(c){Fe(this.g,new Ru)},ii.prototype.ra=function(){Fe(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,aT=function(){return new da},sT=function(){return tr()},rT=Yn,pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,Lc=rr,wi.COMPLETE="complete",iT=wi,go.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Sl=go,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,nT=qe}).apply(typeof Cc<"u"?Cc:typeof self<"u"?self:typeof window<"u"?window:{});const kv="@firebase/firestore",Vv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new dh("@firebase/firestore");function qa(){return Hs.logLevel}function re(r,...e){if(Hs.logLevel<=Me.DEBUG){const n=e.map(Xm);Hs.debug(`Firestore (${ao}): ${r}`,...n)}}function Wi(r,...e){if(Hs.logLevel<=Me.ERROR){const n=e.map(Xm);Hs.error(`Firestore (${ao}): ${r}`,...n)}}function zr(r,...e){if(Hs.logLevel<=Me.WARN){const n=e.map(Xm);Hs.warn(`Firestore (${ao}): ${r}`,...n)}}function Xm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,oT(r,s,n)}function oT(r,e,n){let s=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Wi(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||oT(e,o,s)}function we(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class kI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VI{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Us,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Us)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new lT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class PI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new PI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Pv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Pv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=jI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Ie(r,e){return r<e?-1:r>e?1:0}function gm(r,e){let n=0;for(;n<r.length&&n<e.length;){const s=r.codePointAt(n),o=e.codePointAt(n);if(s!==o){if(s<128&&o<128)return Ie(s,o);{const u=uT(),f=zI(u.encode(Uv(r,n)),u.encode(Uv(e,n)));return f!==0?f:Ie(s,o)}}n+=s>65535?2:1}return Ie(r.length,e.length)}function Uv(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function zI(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return Ie(r[n],e[n]);return Ie(r.length,e.length)}function Wa(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="__name__";class ci{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ve(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ci?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=ci.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Ie(e.length,n.length)}static compareSegments(e,n){const s=ci.isNumericId(e),o=ci.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ci.extractNumericId(e).compare(ci.extractNumericId(n)):gm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ur.fromString(e.substring(4,e.length-2))}}class st extends ci{construct(e,n,s){return new st(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new st(n)}static emptyPath(){return new st([])}}const BI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends ci{construct(e,n,s){return new Ht(e,n,s)}static isValidIdentifier(e){return BI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lv}static keyField(){return new Ht([Lv])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new he(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new he(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(st.fromString(e))}static fromName(e){return new pe(st.fromString(e).popFirst(5))}static empty(){return new pe(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new st(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(r,e,n){if(!n)throw new he(W.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function HI(r,e,n,s){if(e===!0&&s===!0)throw new he(W.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function jv(r){if(!pe.isDocumentKey(r))throw new he(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function cT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Zm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Lr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new he(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zm(r);throw new he(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r,e){const n={typeString:r};return e&&(n.value=e),n}function Wl(r,e){if(!cT(r))throw new he(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new he(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=-62135596800,Bv=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Bv);return new et(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zv)throw new he(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bv}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wl(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:Et("string",et._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new et(0,0))}static max(){return new Ae(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=-1;function FI(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new Br(o,pe.empty(),e)}function GI(r){return new Br(r.readTime,r.key,jl)}class Br{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Br(Ae.min(),pe.empty(),jl)}static max(){return new Br(Ae.max(),pe.empty(),jl)}}function QI(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(r.documentKey,e.documentKey),n!==0?n:Ie(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(r){if(r.code!==W.FAILED_PRECONDITION||r.message!==KI)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,s)=>{n(e)})}static reject(e){return new X((n,s)=>{s(e)})}static waitFor(e){return new X((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new X((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(e,n){return new X((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function XI(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=-1;function Eh(r){return r==null}function eh(r){return r===0&&1/r==-1/0}function $I(r){return typeof r=="number"&&Number.isInteger(r)&&!eh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="";function ZI(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=qv(e)),e=WI(r.get(n),e);return qv(e)}function WI(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case hT:n+="";break;default:n+=u}}return n}function qv(r){return r+hT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function Xr(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function fT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??qt.RED,this.left=o??qt.EMPTY,this.right=u??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new qt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return qt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fv(this.data.getIterator())}getIteratorFrom(e){return new Fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class Fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new vn([])}unionWith(e){let n=new xt(Ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wa(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new dT("Invalid base64 string: "+u):u}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const JI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=JI.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:mt(r.seconds),nanos:mt(r.nanos)}}function mt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Hr(r){return typeof r=="string"?Ft.fromBase64String(r):Ft.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="server_timestamp",pT="__type__",gT="__previous_value__",yT="__local_write_time__";function Jm(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[pT])===null||n===void 0?void 0:n.stringValue)===mT}function Th(r){const e=r.mapValue.fields[gT];return Jm(e)?Th(e):e}function zl(r){const e=qr(r.mapValue.fields[yT].timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s,o,u,f,m,g,y,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const th="(default)";class Bl{constructor(e,n){this.projectId=e,this.database=n||th}static empty(){return new Bl("","")}get isDefaultDatabase(){return this.database===th}isEqual(e){return e instanceof Bl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="__type__",tC="__max__",Dc={mapValue:{}},vT="__vector__",nh="value";function Fr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Jm(r)?4:iC(r)?9007199254740991:nC(r)?10:11:ve(28295,{value:r})}function vi(r,e){if(r===e)return!0;const n=Fr(r);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return zl(r).isEqual(zl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=qr(o.timestampValue),m=qr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return Hr(o.bytesValue).isEqual(Hr(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return mt(o.geoPointValue.latitude)===mt(u.geoPointValue.latitude)&&mt(o.geoPointValue.longitude)===mt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return mt(o.integerValue)===mt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=mt(o.doubleValue),m=mt(u.doubleValue);return f===m?eh(f)===eh(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return Wa(r.arrayValue.values||[],e.arrayValue.values||[],vi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Hv(f)!==Hv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!vi(f[g],m[g])))return!1;return!0}(r,e);default:return ve(52216,{left:r})}}function ql(r,e){return(r.values||[]).find(n=>vi(n,e))!==void 0}function Ja(r,e){if(r===e)return 0;const n=Fr(r),s=Fr(e);if(n!==s)return Ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=mt(u.integerValue||u.doubleValue),g=mt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return Gv(r.timestampValue,e.timestampValue);case 4:return Gv(zl(r),zl(e));case 5:return gm(r.stringValue,e.stringValue);case 6:return function(u,f){const m=Hr(u),g=Hr(f);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const T=Ie(m[y],g[y]);if(T!==0)return T}return Ie(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Ie(mt(u.latitude),mt(f.latitude));return m!==0?m:Ie(mt(u.longitude),mt(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Qv(r.arrayValue,e.arrayValue);case 10:return function(u,f){var m,g,y,T;const w=u.fields||{},I=f.fields||{},q=(m=w[nh])===null||m===void 0?void 0:m.arrayValue,$=(g=I[nh])===null||g===void 0?void 0:g.arrayValue,ie=Ie(((y=q?.values)===null||y===void 0?void 0:y.length)||0,((T=$?.values)===null||T===void 0?void 0:T.length)||0);return ie!==0?ie:Qv(q,$)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Dc.mapValue&&f===Dc.mapValue)return 0;if(u===Dc.mapValue)return 1;if(f===Dc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let w=0;w<g.length&&w<T.length;++w){const I=gm(g[w],T[w]);if(I!==0)return I;const q=Ja(m[g[w]],y[T[w]]);if(q!==0)return q}return Ie(g.length,T.length)}(r.mapValue,e.mapValue);default:throw ve(23264,{le:n})}}function Gv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ie(r,e);const n=qr(r),s=qr(e),o=Ie(n.seconds,s.seconds);return o!==0?o:Ie(n.nanos,s.nanos)}function Qv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ja(n[o],s[o]);if(u)return u}return Ie(n.length,s.length)}function eo(r){return ym(r)}function ym(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=qr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Hr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return pe.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=ym(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${ym(n.fields[f])}`;return o+"}"}(r.mapValue):ve(61005,{value:r})}function jc(r){switch(Fr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Th(r);return e?16+jc(e):16;case 5:return 2*r.stringValue.length;case 6:return Hr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+jc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Xr(s.fields,(u,f)=>{o+=u.length+jc(f)}),o}(r.mapValue);default:throw ve(13486,{value:r})}}function _m(r){return!!r&&"integerValue"in r}function ep(r){return!!r&&"arrayValue"in r}function Kv(r){return!!r&&"nullValue"in r}function Yv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zc(r){return!!r&&"mapValue"in r}function nC(r){var e,n;return((n=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{})[_T])===null||n===void 0?void 0:n.stringValue)===vT}function Ol(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Xr(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ol(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ol(r.arrayValue.values[n]);return e}return Object.assign({},r)}function iC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===tC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!zc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ol(n)}setAll(e){let n=Ht.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ol(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());zc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];zc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){Xr(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new ln(Ol(this.value))}}function ET(r){const e=[];return Xr(r.fields,(n,s)=>{const o=new Ht([n]);if(zc(s)){const u=ET(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new $t(e,0,Ae.min(),Ae.min(),Ae.min(),ln.empty(),0)}static newFoundDocument(e,n,s,o){return new $t(e,1,n,Ae.min(),s,o,0)}static newNoDocument(e,n){return new $t(e,2,n,Ae.min(),Ae.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,Ae.min(),Ae.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.position=e,this.inclusive=n}}function Xv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(f.referenceValue),n.key):s=Ja(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function $v(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!vi(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n="asc"){this.field=e,this.dir=n}}function rC(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{}class It extends TT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new aC(e,n,s):n==="array-contains"?new uC(e,s):n==="in"?new cC(e,s):n==="not-in"?new hC(e,s):n==="array-contains-any"?new fC(e,s):new It(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new oC(e,s):new lC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ja(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ja(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ei extends TT{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Ei(e,n)}matches(e){return bT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function bT(r){return r.op==="and"}function AT(r){return sC(r)&&bT(r)}function sC(r){for(const e of r.filters)if(e instanceof Ei)return!1;return!0}function vm(r){if(r instanceof It)return r.field.canonicalString()+r.op.toString()+eo(r.value);if(AT(r))return r.filters.map(e=>vm(e)).join(",");{const e=r.filters.map(n=>vm(n)).join(",");return`${r.op}(${e})`}}function wT(r,e){return r instanceof It?function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&vi(s.value,o.value)}(r,e):r instanceof Ei?function(s,o){return o instanceof Ei&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&wT(f,o.filters[m]),!0):!1}(r,e):void ve(19439)}function ST(r){return r instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(r):r instanceof Ei?function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"}(r):"Filter"}class aC extends It{constructor(e,n,s){super(e,n,s),this.key=pe.fromName(s.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class oC extends It{constructor(e,n){super(e,"in",n),this.keys=RT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lC extends It{constructor(e,n){super(e,"not-in",n),this.keys=RT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RT(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>pe.fromName(s.referenceValue))}class uC extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&ql(n.arrayValue,this.value)}}class cC extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class hC extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ql(this.value.arrayValue,n)}}class fC extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ql(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Pe=null}}function Zv(r,e=null,n=[],s=[],o=null,u=null,f=null){return new dC(r,e,n,s,o,u,f)}function tp(r){const e=we(r);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>vm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>eo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>eo(s)).join(",")),e.Pe=n}return e.Pe}function np(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!rC(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!wT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!$v(r.startAt,e.startAt)&&$v(r.endAt,e.endAt)}function Em(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mC(r,e,n,s,o,u,f,m){return new bh(r,e,n,s,o,u,f,m)}function ip(r){return new bh(r)}function Wv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pC(r){return r.collectionGroup!==null}function Ml(r){const e=we(r);if(e.Te===null){e.Te=[];const n=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xt(Ht.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Te.push(new rh(u,s))}),n.has(Ht.keyField().canonicalString())||e.Te.push(new rh(Ht.keyField(),s))}return e.Te}function di(r){const e=we(r);return e.Ie||(e.Ie=gC(e,Ml(r))),e.Ie}function gC(r,e){if(r.limitType==="F")return Zv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new rh(o.field,u)});const n=r.endAt?new ih(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new ih(r.startAt.position,r.startAt.inclusive):null;return Zv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Tm(r,e,n){return new bh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Ah(r,e){return np(di(r),di(e))&&r.limitType===e.limitType}function IT(r){return`${tp(di(r))}|lt:${r.limitType}`}function Ha(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>ST(o)).join(", ")}]`),Eh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>eo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>eo(o)).join(",")),`Target(${s})`}(di(r))}; limitType=${r.limitType})`}function wh(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ml(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=Xv(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,Ml(s),o)||s.endAt&&!function(f,m,g){const y=Xv(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,Ml(s),o))}(r,e)}function yC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function CT(r){return(e,n)=>{let s=!1;for(const o of Ml(r)){const u=_C(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function _C(r,e,n){const s=r.field.isKeyField()?pe.comparator(e.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?Ja(g,y):ve(42886)}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return fT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new at(pe.comparator);function Ji(){return vC}const xT=new at(pe.comparator);function Rl(...r){let e=xT;for(const n of r)e=e.insert(n.key,n);return e}function DT(r){let e=xT;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ps(){return kl()}function NT(){return kl()}function kl(){return new Ys(r=>r.toString(),(r,e)=>r.isEqual(e))}const EC=new at(pe.comparator),TC=new xt(pe.comparator);function ke(...r){let e=TC;for(const n of r)e=e.add(n);return e}const bC=new xt(Ie);function AC(){return bC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(e)?"-0":e}}function OT(r){return{integerValue:""+r}}function wC(r,e){return $I(e)?OT(e):rp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this._=void 0}}function SC(r,e,n){return r instanceof sh?function(o,u){const f={fields:{[pT]:{stringValue:mT},[yT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jm(u)&&(u=Th(u)),u&&(f.fields[gT]=u),{mapValue:f}}(n,e):r instanceof Hl?kT(r,e):r instanceof Fl?VT(r,e):function(o,u){const f=MT(o,u),m=Jv(f)+Jv(o.Ee);return _m(f)&&_m(o.Ee)?OT(m):rp(o.serializer,m)}(r,e)}function RC(r,e,n){return r instanceof Hl?kT(r,e):r instanceof Fl?VT(r,e):n}function MT(r,e){return r instanceof ah?function(s){return _m(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class sh extends Sh{}class Hl extends Sh{constructor(e){super(),this.elements=e}}function kT(r,e){const n=PT(e);for(const s of r.elements)n.some(o=>vi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Fl extends Sh{constructor(e){super(),this.elements=e}}function VT(r,e){let n=PT(e);for(const s of r.elements)n=n.filter(o=>!vi(o,s));return{arrayValue:{values:n}}}class ah extends Sh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Jv(r){return mt(r.integerValue||r.doubleValue)}function PT(r){return ep(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function IC(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Hl&&o instanceof Hl||s instanceof Fl&&o instanceof Fl?Wa(s.elements,o.elements,vi):s instanceof ah&&o instanceof ah?vi(s.Ee,o.Ee):s instanceof sh&&o instanceof sh}(r.transform,e.transform)}class CC{constructor(e,n){this.version=e,this.transformResults=n}}class mi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mi}static exists(e){return new mi(void 0,e)}static updateTime(e){return new mi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Rh{}function UT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new jT(r.key,mi.none()):new Jl(r.key,r.data,mi.none());{const n=r.data,s=ln.empty();let o=new xt(Ht.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new $r(r.key,s,new vn(o.toArray()),mi.none())}}function xC(r,e,n){r instanceof Jl?function(o,u,f){const m=o.value.clone(),g=t0(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof $r?function(o,u,f){if(!Bc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=t0(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(LT(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Vl(r,e,n,s){return r instanceof Jl?function(u,f,m,g){if(!Bc(u.precondition,f))return m;const y=u.value.clone(),T=n0(u.fieldTransforms,g,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,e,n,s):r instanceof $r?function(u,f,m,g){if(!Bc(u.precondition,f))return m;const y=n0(u.fieldTransforms,g,f),T=f.data;return T.setAll(LT(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(r,e,n,s):function(u,f,m){return Bc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function DC(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=MT(s.transform,o||null);u!=null&&(n===null&&(n=ln.empty()),n.set(s.field,u))}return n||null}function e0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Wa(s,o,(u,f)=>IC(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Jl extends Rh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $r extends Rh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function LT(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function t0(r,e,n){const s=new Map;He(r.length===n.length,32656,{Ae:n.length,Re:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,RC(f,m,n[o]))}return s}function n0(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,SC(u,f,e))}return s}class jT extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NC extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&xC(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Vl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Vl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=NT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=UT(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&Wa(this.mutations,e.mutations,(n,s)=>e0(n,s))&&Wa(this.baseMutations,e.baseMutations,(n,s)=>e0(n,s))}}class sp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=function(){return EC}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new sp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,je;function VC(r){switch(r){case W.OK:return ve(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function zT(r){if(r===void 0)return Wi("GRPC error has no .code"),W.UNKNOWN;switch(r){case vt.OK:return W.OK;case vt.CANCELLED:return W.CANCELLED;case vt.UNKNOWN:return W.UNKNOWN;case vt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case vt.INTERNAL:return W.INTERNAL;case vt.UNAVAILABLE:return W.UNAVAILABLE;case vt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case vt.NOT_FOUND:return W.NOT_FOUND;case vt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case vt.ABORTED:return W.ABORTED;case vt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case vt.DATA_LOSS:return W.DATA_LOSS;default:return ve(39323,{code:r})}}(je=vt||(vt={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Ur([4294967295,4294967295],0);function i0(r){const e=uT().encode(r),n=new tT;return n.update(e),new Uint8Array(n.digest())}function r0(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ur([n,s],0),new Ur([o,u],0)]}class ap{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(s<0)throw new Il(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Ur.fromNumber(this.fe)}pe(e,n,s){let o=e.add(n.multiply(Ur.fromNumber(s)));return o.compare(PC)===1&&(o=new Ur([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=i0(e),[s,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);if(!this.ye(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new ap(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.fe===0)return;const n=i0(e),[s,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.pe(s,o,u);this.we(f)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ih(Ae.min(),o,new at(Ie),Ji(),ke())}}class eu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new eu(s,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,s,o){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=o}}class BT{constructor(e,n){this.targetId=e,this.De=n}}class qT{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class s0{constructor(){this.ve=0,this.Ce=a0(),this.Fe=Ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),n=ke(),s=ke();return this.Ce.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:u})}}),new eu(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=a0()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class UC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ji(),this.je=Nc(),this.Je=Nc(),this.He=new at(Ie)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((s,o)=>{this.nt(o)&&n(o)})}it(e){const n=e.targetId,s=e.De.count,o=this.st(n);if(o){const u=o.target;if(Em(u))if(s===0){const f=new pe(u.path);this.Xe(n,f,$t.newNoDocument(f,Ae.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this.ot(n);if(f!==s){const m=this._t(e),g=m?this.ut(m,e,f):1;if(g!==0){this.rt(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,y)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Hr(s).toUint8Array()}catch(g){if(g instanceof dT)return zr("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new ap(f,o,u)}catch(g){return zr(g instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.fe===0?null:m}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.We.lt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(n,u,null),o++)}),o}Pt(e){const n=new Map;this.Ge.forEach((u,f)=>{const m=this.st(f);if(m){if(u.current&&Em(m.target)){const g=new pe(m.target.path);this.Tt(g).has(f)||this.It(f,g)||this.Xe(f,g,$t.newNoDocument(g,e))}u.Ne&&(n.set(f,u.Le()),u.ke())}});let s=ke();this.Je.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const y=this.st(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ze.forEach((u,f)=>f.setReadTime(e));const o=new Ih(e,n,this.He,this.ze,s);return this.ze=Ji(),this.je=Nc(),this.Je=Nc(),this.He=new at(Ie),o}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new s0,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new xt(Ie),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new xt(Ie),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new s0),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Nc(){return new at(pe.comparator)}function a0(){return new at(pe.comparator)}const LC={asc:"ASCENDING",desc:"DESCENDING"},jC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zC={and:"AND",or:"OR"};class BC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bm(r,e){return r.useProto3Json||Eh(e)?e:{value:e}}function oh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function qC(r,e){return oh(r,e.toTimestamp())}function pi(r){return He(!!r,49232),Ae.fromTimestamp(function(n){const s=qr(n);return new et(s.seconds,s.nanos)}(r))}function op(r,e){return Am(r,e).canonicalString()}function Am(r,e){const n=function(o){return new st(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function FT(r){const e=st.fromString(r);return He(XT(e),10190,{key:e.toString()}),e}function wm(r,e){return op(r.databaseId,e.path)}function Wd(r,e){const n=FT(e);if(n.get(1)!==r.databaseId.projectId)throw new he(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new he(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new pe(QT(n))}function GT(r,e){return op(r.databaseId,e)}function HC(r){const e=FT(r);return e.length===4?st.emptyPath():QT(e)}function Sm(r){return new st(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function QT(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function o0(r,e,n){return{name:wm(r,e),fields:n.value.mapValue.fields}}function FC(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,T){return y.useProto3Json?(He(T===void 0||typeof T=="string",58123),Ft.fromBase64String(T||"")):(He(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ft.fromUint8Array(T||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const T=y.code===void 0?W.UNKNOWN:zT(y.code);return new he(T,y.message||"")}(f);n=new qT(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Wd(r,s.document.name),u=pi(s.document.updateTime),f=s.document.createTime?pi(s.document.createTime):Ae.min(),m=new ln({mapValue:{fields:s.document.fields}}),g=$t.newFoundDocument(o,u,f,m),y=s.targetIds||[],T=s.removedTargetIds||[];n=new qc(y,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Wd(r,s.document),u=s.readTime?pi(s.readTime):Ae.min(),f=$t.newNoDocument(o,u),m=s.removedTargetIds||[];n=new qc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Wd(r,s.document),u=s.removedTargetIds||[];n=new qc([],u,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new kC(o,u),m=s.targetId;n=new BT(m,f)}}return n}function GC(r,e){let n;if(e instanceof Jl)n={update:o0(r,e.key,e.value)};else if(e instanceof jT)n={delete:wm(r,e.key)};else if(e instanceof $r)n={update:o0(r,e.key,e.data),updateMask:ex(e.fieldMask)};else{if(!(e instanceof NC))return ve(16599,{Rt:e.type});n={verify:wm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof sh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Hl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Fl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ah)return{fieldPath:f.field.canonicalString(),increment:m.Ee};throw ve(20930,{transform:f.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:qC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ve(27497)}(r,e.precondition)),n}function QC(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?pi(o.updateTime):pi(u);return f.isEqual(Ae.min())&&(f=pi(u)),new CC(f,o.transformResults||[])}(n,e))):[]}function KC(r,e){return{documents:[GT(r,e.path)]}}function YC(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=GT(r,o);const u=function(y){if(y.length!==0)return YT(Ei.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(T=>function(I){return{field:Fa(I.field),direction:ZC(I.dir)}}(T))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=bm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{Vt:n,parent:o}}function XC(r){let e=HC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=function(w){const I=KT(w);return I instanceof Ei&&AT(I)?I.getFilters():[I]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(I=>function($){return new rh(Ga($.field),function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(I))}(n.orderBy));let m=null;n.limit&&(m=function(w){let I;return I=typeof w=="object"?w.value:w,Eh(I)?null:I}(n.limit));let g=null;n.startAt&&(g=function(w){const I=!!w.before,q=w.values||[];return new ih(q,I)}(n.startAt));let y=null;return n.endAt&&(y=function(w){const I=!w.before,q=w.values||[];return new ih(q,I)}(n.endAt)),mC(e,o,f,u,m,"F",g,y)}function $C(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function KT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return It.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return It.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(r):r.fieldFilter!==void 0?function(n){return It.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Ei.create(n.compositeFilter.filters.map(s=>KT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(n.compositeFilter.op))}(r):ve(30097,{filter:r})}function ZC(r){return LC[r]}function WC(r){return jC[r]}function JC(r){return zC[r]}function Fa(r){return{fieldPath:r.canonicalString()}}function Ga(r){return Ht.fromServerFormat(r.fieldPath)}function YT(r){return r instanceof It?function(n){if(n.op==="=="){if(Yv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NAN"}};if(Kv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NAN"}};if(Kv(n.value))return{unaryFilter:{field:Fa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fa(n.field),op:WC(n.op),value:n.value}}}(r):r instanceof Ei?function(n){const s=n.getFilters().map(o=>YT(o));return s.length===1?s[0]:{compositeFilter:{op:JC(n.op),filters:s}}}(r):ve(54877,{filter:r})}function ex(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function XT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s,o,u=Ae.min(),f=Ae.min(),m=Ft.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.gt=e}}function nx(r){const e=XC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Tm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.Dn=new rx}addToCollectionParentIndex(e,n){return this.Dn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(Br.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class rx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new xt(st.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$T=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on($T,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new to(0)}static ur(){return new to(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="LruGarbageCollector",sx=1048576;function c0([r,e],[n,s]){const o=Ie(r,n);return o===0?Ie(e,s):o}class ax{constructor(e){this.Tr=e,this.buffer=new xt(c0),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();c0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ox{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(u0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){lo(n)?re(u0,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Rr(3e5)})}}class lx{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return X.resolve(vh.ue);const s=new ax(n);return this.Vr.forEachTarget(e,o=>s.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>s.Er(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(l0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),l0):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,o,u,f,m,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(e,s,n))).next(w=>(u=w,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(y=Date.now(),qa()<=Me.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function ux(r,e){return new lx(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(){this.changes=new Ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Vl(s.mutation,o,vn.empty(),et.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ke()){const o=Ps();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Rl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ke()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=Ji();const f=kl(),m=function(){return kl()}();return n.forEach((g,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof $r)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),Vl(T.mutation,y,T.mutation.getFieldMask(),et.now())):f.set(y.key,vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>{var w;return m.set(y,new hx(T,(w=f.get(y))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(e,n){const s=kl();let o=new at((f,m)=>f-m),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||vn.empty();T=m.applyToLocalView(y,T),s.set(g,T);const w=(o.get(m.batchId)||ke()).add(g);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,T=g.value,w=NT();T.forEach(I=>{if(!u.has(I)){const q=UT(n.get(I),s.get(I));q!==null&&w.set(I,q),u=u.add(I)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,w))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return pe.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(Ps());let m=jl,g=u;return f.next(y=>X.forEach(y,(T,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(T)?X.resolve():this.remoteDocumentCache.getEntry(e,T).next(I=>{g=g.insert(T,I)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,g,y,ke())).next(T=>({batchId:m,changes:DT(T)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(s=>{let o=Rl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Rl();return this.indexManager.getCollectionParents(e,u).next(m=>X.forEach(m,g=>{const y=function(w,I){return new bh(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(T=>{T.forEach((w,I)=>{f=f.insert(w,I)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,$t.newInvalidDocument(T)))});let m=Rl();return f.forEach((g,y)=>{const T=u.get(g);T!==void 0&&Vl(T.mutation,y,vn.empty(),et.now()),wh(n,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return X.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:pi(o.createTime)}}(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:nx(o.bundledQuery),readTime:pi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(){this.overlays=new at(pe.comparator),this.kr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ps();return X.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.wt(e,n,u)}),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.kr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=Ps(),u=n.length+1,f=new pe(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new at((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Ps(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=Ps(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return X.resolve(m)}wt(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new MC(n,s));let u=this.kr.get(n);u===void 0&&(u=ke(),this.kr.set(n,u)),this.kr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.qr=new xt(Pt.Qr),this.$r=new xt(Pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new Pt(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Wr(new Pt(e,n))}Gr(e,n){e.forEach(s=>this.removeReference(s,n))}zr(e){const n=new pe(new st([])),s=new Pt(n,e),o=new Pt(n,e+1),u=[];return this.$r.forEachInRange([s,o],f=>{this.Wr(f),u.push(f.key)}),u}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new pe(new st([])),s=new Pt(n,e),o=new Pt(n,e+1);let u=ke();return this.$r.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Pt(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return pe.comparator(e.key,n.key)||Ie(e.Hr,n.Hr)}static Ur(e,n){return Ie(e.Hr,n.Hr)||pe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new xt(Pt.Qr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new OC(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Yr=this.Yr.add(new Pt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Xr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Wm:this.er-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pt(n,0),o=new Pt(n,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],f=>{const m=this.Zr(f.Hr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xt(Ie);return n.forEach(o=>{const u=new Pt(o,0),f=new Pt(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,f],m=>{s=s.add(m.Hr)})}),X.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const f=new Pt(new pe(u),0);let m=new xt(Ie);return this.Yr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Hr)),!0)},f),X.resolve(this.ei(m))}ei(e){const n=[];return e.forEach(s=>{const o=this.Zr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){He(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return X.forEach(n.mutations,o=>{const u=new Pt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,n){const s=new Pt(n,0),o=this.Yr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.ni=e,this.docs=function(){return new at(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let s=Ji();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():$t.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=Ji();const f=n.path,m=new pe(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||QI(GI(T),s)<=0||(o.has(T.key)||wh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){ve(9500)}ri(e,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new _x(this)}getSize(e){return X.resolve(this.size)}}class _x extends cx{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)}),X.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.persistence=e,this.ii=new Ys(n=>tp(n),np),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new lp,this.targetCount=0,this._i=to.ar()}forEachTarget(e,n){return this.ii.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),X.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new to(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.hr(n),X.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.ii.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ii.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n){this.ai={},this.overlays={},this.ui=new vh(0),this.ci=!1,this.ci=!0,this.li=new px,this.referenceDelegate=e(this),this.hi=new vx(this),this.indexManager=new ix,this.remoteDocumentCache=function(o){return new yx(o)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new tx(n),this.Ti=new dx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new gx(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){re("MemoryPersistence","Starting transaction:",e);const o=new Ex(this.ui.next());return this.referenceDelegate.Ii(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ei(e,n){return X.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,n)))}}class Ex extends YI{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Ai=new lp,this.Ri=null}static Vi(e){return new up(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),X.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.mi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.mi,s=>{const o=pe.fromPath(s);return this.fi(e,o).next(u=>{u||n.removeEntry(o,Ae.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return X.or([()=>X.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class lh{constructor(e,n){this.persistence=e,this.gi=new Ys(s=>ZI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=ux(this,n)}static Vi(e,n){return new lh(e,n)}Ii(){}di(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}yr(e){let n=0;return this.gr(e,s=>{n++}).next(()=>n)}gr(e,n){return X.forEach(this.gi,(s,o)=>this.Sr(e,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,f=>this.Sr(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),X.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jc(e.data.value)),n}Sr(e,n,s){return X.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.gi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=o}static Es(e,n){let s=ke(),o=ke();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new cp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return N1()?8:XI(Zt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ps(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ys(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new Tx;return this.ws(e,n,f).next(m=>{if(u.result=m,this.Rs)return this.Ss(e,n,f,m.size)})}).next(()=>u.result)}Ss(e,n,s,o){return s.documentReadCount<this.Vs?(qa()<=Me.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),X.resolve()):(qa()<=Me.DEBUG&&re("QueryEngine","Query:",Ha(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(qa()<=Me.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,di(n))):X.resolve())}ps(e,n){if(Wv(n))return X.resolve(null);let s=di(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Tm(n,null,"F"),s=di(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=ke(...u);return this.gs.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const y=this.bs(n,m);return this.Ds(n,y,f,g.readTime)?this.ps(e,Tm(n,null,"F")):this.vs(e,y,n,g)}))})))}ys(e,n,s,o){return Wv(n)||o.isEqual(Ae.min())?X.resolve(null):this.gs.getDocuments(e,s).next(u=>{const f=this.bs(n,u);return this.Ds(n,f,s,o)?X.resolve(null):(qa()<=Me.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ha(n)),this.vs(e,f,n,FI(o,jl)).next(m=>m))})}bs(e,n){let s=new xt(CT(e));return n.forEach((o,u)=>{wh(e,u)&&(s=s.add(u))}),s}Ds(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,n,s){return qa()<=Me.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ha(n)),this.gs.getDocumentsMatchingQuery(e,n,Br.min(),s)}vs(e,n,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="LocalStore",Ax=3e8;class wx{constructor(e,n,s,o){this.persistence=e,this.Cs=n,this.serializer=o,this.Fs=new at(Ie),this.Ms=new Ys(u=>tp(u),np),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function Sx(r,e,n,s){return new wx(r,e,n,s)}async function WT(r,e){const n=we(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ns(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=ke();for(const y of o){f.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Bs:y,removedBatchIds:f,addedBatchIds:m}))})})}function Rx(r,e){const n=we(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.Os.newChangeBuffer({trackRemovals:!0});return function(m,g,y,T){const w=y.batch,I=w.keys();let q=X.resolve();return I.forEach($=>{q=q.next(()=>T.getEntry(g,$)).next(ie=>{const J=y.docVersions.get($);He(J!==null,48541),ie.version.compareTo(J)<0&&(w.applyToRemoteDocument(ie,y),ie.isValidDocument()&&(ie.setReadTime(y.commitVersion),T.addEntry(ie)))})}),q.next(()=>m.mutationQueue.removeMutationBatch(g,w))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=ke();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function JT(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Ix(r,e){const n=we(r),s=e.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const m=[];e.targetChanges.forEach((T,w)=>{const I=o.get(w);if(!I)return;m.push(n.hi.removeMatchingKeys(u,T.removedDocuments,w).next(()=>n.hi.addMatchingKeys(u,T.addedDocuments,w)));let q=I.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?q=q.withResumeToken(Ft.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):T.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(T.resumeToken,s)),o=o.insert(w,q),function(ie,J,Te){return ie.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-ie.snapshotVersion.toMicroseconds()>=Ax?!0:Te.addedDocuments.size+Te.modifiedDocuments.size+Te.removedDocuments.size>0}(I,q,T)&&m.push(n.hi.updateTargetData(u,q))});let g=Ji(),y=ke();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(Cx(u,f,e.documentUpdates).next(T=>{g=T.Ls,y=T.ks})),!s.isEqual(Ae.min())){const T=n.hi.getLastRemoteSnapshotVersion(u).next(w=>n.hi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.Fs=o,u))}function Cx(r,e,n){let s=ke(),o=ke();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=Ji();return n.forEach((m,g)=>{const y=u.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ae.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):re(hp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{Ls:f,ks:o}})}function xx(r,e){const n=we(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Wm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Dx(r,e){const n=we(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.hi.getTargetData(s,e).next(u=>u?(o=u,X.resolve(o)):n.hi.allocateTargetId(s).next(f=>(o=new kr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s})}async function Rm(r,e,n){const s=we(r),o=s.Fs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!lo(f))throw f;re(hp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function h0(r,e,n){const s=we(r);let o=Ae.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,T){const w=we(g),I=w.Ms.get(T);return I!==void 0?X.resolve(w.Fs.get(I)):w.hi.getTargetData(y,T)}(s,f,di(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Cs.getDocumentsMatchingQuery(f,e,n?o:Ae.min(),n?u:ke())).next(m=>(Nx(s,yC(e),m),{documents:m,qs:u})))}function Nx(r,e,n){let s=r.xs.get(e)||Ae.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.xs.set(e,s)}class f0{constructor(){this.activeTargetIds=AC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ox{constructor(){this.Fo=new f0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new f0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="ConnectivityMonitor";class m0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(d0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(d0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc=null;function Im(){return Oc===null?Oc=function(){return 268435456+Math.round(2147483648*Math.random())}():Oc++,"0x"+Oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="RestConnection",kx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Vx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===th?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,n,s,o,u){const f=Im(),m=this.Go(e,n.toUriEncodedString());re(Jd,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,u);const{host:y}=new URL(m),T=io(y);return this.jo(e,m,g,s,T).then(w=>(re(Jd,`Received RPC '${e}' ${f}: `,w),w),w=>{throw zr(Jd,`RPC '${e}' ${f} failed with error: `,w,"url: ",m,"request:",s),w})}Jo(e,n,s,o,u,f){return this.Wo(e,n,s,o,u)}zo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}Go(e,n){const s=kx[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class Ux extends Vx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,o,u){const f=Im();return new Promise((m,g)=>{const y=new nT;y.setWithCredentials(!0),y.listenOnce(iT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Lc.NO_ERROR:const w=y.getResponseJson();re(Yt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(w)),m(w);break;case Lc.TIMEOUT:re(Yt,`RPC '${e}' ${f} timed out`),g(new he(W.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const I=y.getStatus();if(re(Yt,`RPC '${e}' ${f} failed with status:`,I,"response text:",y.getResponseText()),I>0){let q=y.getResponseJson();Array.isArray(q)&&(q=q[0]);const $=q?.error;if($&&$.status&&$.message){const ie=function(Te){const me=Te.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(me)>=0?me:W.UNKNOWN}($.status);g(new he(ie,$.message))}else g(new he(W.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new he(W.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:f,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{re(Yt,`RPC '${e}' ${f} completed.`)}});const T=JSON.stringify(o);re(Yt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}P_(e,n,s){const o=Im(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=aT(),m=sT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");re(Yt,`Creating RPC '${e}' stream ${o}: ${T}`,g);const w=f.createWebChannel(T,g);this.T_(w);let I=!1,q=!1;const $=new Px({Ho:J=>{q?re(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,J):(I||(re(Yt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),I=!0),re(Yt,`RPC '${e}' stream ${o} sending:`,J),w.send(J))},Yo:()=>w.close()}),ie=(J,Te,me)=>{J.listen(Te,fe=>{try{me(fe)}catch(De){setTimeout(()=>{throw De},0)}})};return ie(w,Sl.EventType.OPEN,()=>{q||(re(Yt,`RPC '${e}' stream ${o} transport opened.`),$.s_())}),ie(w,Sl.EventType.CLOSE,()=>{q||(q=!0,re(Yt,`RPC '${e}' stream ${o} transport closed`),$.__(),this.I_(w))}),ie(w,Sl.EventType.ERROR,J=>{q||(q=!0,zr(Yt,`RPC '${e}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),$.__(new he(W.UNAVAILABLE,"The operation could not be completed")))}),ie(w,Sl.EventType.MESSAGE,J=>{var Te;if(!q){const me=J.data[0];He(!!me,16349);const fe=me,De=fe?.error||((Te=fe[0])===null||Te===void 0?void 0:Te.error);if(De){re(Yt,`RPC '${e}' stream ${o} received error:`,De);const be=De.status;let Ce=function(C){const N=vt[C];if(N!==void 0)return zT(N)}(be),O=De.message;Ce===void 0&&(Ce=W.INTERNAL,O="Unknown error status: "+be+" with message "+De.message),q=!0,$.__(new he(Ce,O)),w.close()}else re(Yt,`RPC '${e}' stream ${o} received:`,me),$.a_(me)}}),ie(m,rT.STAT_EVENT,J=>{J.stat===pm.PROXY?re(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):J.stat===pm.NOPROXY&&re(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.o_()},0),$}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function em(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(r){return new BC(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="PersistentStream";class tb{constructor(e,n,s,o,u,f,m,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new eb(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Wi(n.toString()),Wi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.b_===n&&this.W_(s,o)},s=>{e(()=>{const o=new he(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)})})}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{s(()=>this.G_(o))}),this.stream.onMessage(o=>{s(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return re(p0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(re(p0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lx extends tb{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=FC(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?pi(f.readTime):Ae.min()}(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=Sm(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=Em(g)?{documents:KC(u,g)}:{query:YC(u,g).Vt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=HT(u,f.resumeToken);const y=bm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Ae.min())>0){m.readTime=oh(u,f.snapshotVersion.toTimestamp());const y=bm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=$C(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=Sm(this.serializer),n.removeTarget=e,this.k_(n)}}class jx extends tb{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=QC(e.writeResults,e.commitTime),s=pi(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=Sm(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>GC(this.serializer,s))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{}class Bx extends zx{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new he(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Wo(e,Am(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(W.UNKNOWN,u.toString())})}Jo(e,n,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Jo(e,Am(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new he(W.UNKNOWN,f.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class qx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Wi(n),this._a=!1):re("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="RemoteStore";class Hx{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo(f=>{s.enqueueAndForget(async()=>{Xs(this)&&(re(Fs,"Restarting streams for network reachability change."),await async function(g){const y=we(g);y.Ia.add(4),await tu(y),y.Aa.set("Unknown"),y.Ia.delete(4),await xh(y)}(this))})}),this.Aa=new qx(s,o)}}async function xh(r){if(Xs(r))for(const e of r.da)await e(!0)}async function tu(r){for(const e of r.da)await e(!1)}function nb(r,e){const n=we(r);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),pp(n)?mp(n):uo(n).x_()&&dp(n,e))}function fp(r,e){const n=we(r),s=uo(n);n.Ta.delete(e),s.x_()&&ib(n,e),n.Ta.size===0&&(s.x_()?s.B_():Xs(n)&&n.Aa.set("Unknown"))}function dp(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uo(r).H_(e)}function ib(r,e){r.Ra.$e(e),uo(r).Y_(e)}function mp(r){r.Ra=new UC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),uo(r).start(),r.Aa.aa()}function pp(r){return Xs(r)&&!uo(r).M_()&&r.Ta.size>0}function Xs(r){return we(r).Ia.size===0}function rb(r){r.Ra=void 0}async function Fx(r){r.Aa.set("Online")}async function Gx(r){r.Ta.forEach((e,n)=>{dp(r,e)})}async function Qx(r,e){rb(r),pp(r)?(r.Aa.la(e),mp(r)):r.Aa.set("Unknown")}async function Kx(r,e,n){if(r.Aa.set("Online"),e instanceof qT&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ta.delete(m),o.Ra.removeTarget(m))}(r,e)}catch(s){re(Fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uh(r,s)}else if(e instanceof qc?r.Ra.Ye(e):e instanceof BT?r.Ra.it(e):r.Ra.et(e),!n.isEqual(Ae.min()))try{const s=await JT(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Ra.Pt(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ta.get(y);T&&u.Ta.set(y,T.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const T=u.Ta.get(g);if(!T)return;u.Ta.set(g,T.withResumeToken(Ft.EMPTY_BYTE_STRING,T.snapshotVersion)),ib(u,g);const w=new kr(T.target,g,y,T.sequenceNumber);dp(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){re(Fs,"Failed to raise snapshot:",s),await uh(r,s)}}async function uh(r,e,n){if(!lo(e))throw e;r.Ia.add(1),await tu(r),r.Aa.set("Offline"),n||(n=()=>JT(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{re(Fs,"Retrying IndexedDB access"),await n(),r.Ia.delete(1),await xh(r)})}function sb(r,e){return e().catch(n=>uh(r,n,e))}async function Dh(r){const e=we(r),n=Gr(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Wm;for(;Yx(e);)try{const o=await xx(e.localStore,s);if(o===null){e.Pa.length===0&&n.B_();break}s=o.batchId,Xx(e,o)}catch(o){await uh(e,o)}ab(e)&&ob(e)}function Yx(r){return Xs(r)&&r.Pa.length<10}function Xx(r,e){r.Pa.push(e);const n=Gr(r);n.x_()&&n.Z_&&n.X_(e.mutations)}function ab(r){return Xs(r)&&!Gr(r).M_()&&r.Pa.length>0}function ob(r){Gr(r).start()}async function $x(r){Gr(r).na()}async function Zx(r){const e=Gr(r);for(const n of r.Pa)e.X_(n.mutations)}async function Wx(r,e,n){const s=r.Pa.shift(),o=sp.from(s,e,n);await sb(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Dh(r)}async function Jx(r,e){e&&Gr(r).Z_&&await async function(s,o){if(function(f){return VC(f)&&f!==W.ABORTED}(o.code)){const u=s.Pa.shift();Gr(s).N_(),await sb(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Dh(s)}}(r,e),ab(r)&&ob(r)}async function g0(r,e){const n=we(r);n.asyncQueue.verifyOperationInProgress(),re(Fs,"RemoteStore received new credentials");const s=Xs(n);n.Ia.add(3),await tu(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await xh(n)}async function eD(r,e){const n=we(r);e?(n.Ia.delete(2),await xh(n)):e||(n.Ia.add(2),await tu(n),n.Aa.set("Unknown"))}function uo(r){return r.Va||(r.Va=function(n,s,o){const u=we(n);return u.ia(),new Lx(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:Fx.bind(null,r),e_:Gx.bind(null,r),n_:Qx.bind(null,r),J_:Kx.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),pp(r)?mp(r):r.Aa.set("Unknown")):(await r.Va.stop(),rb(r))})),r.Va}function Gr(r){return r.ma||(r.ma=function(n,s,o){const u=we(n);return u.ia(),new jx(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:$x.bind(null,r),n_:Jx.bind(null,r),ea:Zx.bind(null,r),ta:Wx.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Dh(r)):(await r.ma.stop(),r.Pa.length>0&&(re(Fs,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new gp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(r,e){if(Wi("AsyncQueue",`${e}: ${r}`),lo(r))return new he(W.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{static emptySet(e){return new $a(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||pe.comparator(n.key,s.key):(n,s)=>pe.comparator(n.key,s.key),this.keyedMap=Rl(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $a)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $a;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.fa=new at(pe.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ve(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,s)=>{e.push(s)}),e}}class no{constructor(e,n,s,o,u,f,m,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new no(e,n,$a.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class nD{constructor(){this.queries=_0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const o=we(n),u=o.queries;o.queries=_0(),u.forEach((f,m)=>{for(const g of m.wa)g.onError(s)})})(this,new he(W.ABORTED,"Firestore shutting down"))}}function _0(){return new Ys(r=>IT(r),Ah)}async function iD(r,e){const n=we(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new tD,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await n.onListen(o,!0);break;case 1:u.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=yp(f,`Initialization of query '${Ha(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.wa.push(e),e.va(n.onlineState),u.ya&&e.Ca(u.ya)&&_p(n)}async function rD(r,e){const n=we(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.wa.indexOf(e);f>=0&&(u.wa.splice(f,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function sD(r,e){const n=we(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.wa)m.Ca(o)&&(s=!0);f.ya=o}}s&&_p(n)}function aD(r,e,n){const s=we(r),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(n);s.queries.delete(e)}function _p(r){r.Da.forEach(e=>{e.next()})}var Cm,v0;(v0=Cm||(Cm={})).Fa="default",v0.Cache="cache";class oD{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new no(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Cm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.key=e}}class ub{constructor(e){this.key=e}}class lD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=CT(e),this.eu=new $a(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new y0,o=n?n.eu:this.eu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((T,w)=>{const I=o.get(T),q=wh(this.query,w)?w:null,$=!!I&&this.mutatedKeys.has(I.key),ie=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let J=!1;I&&q?I.data.isEqual(q.data)?$!==ie&&(s.track({type:3,doc:q}),J=!0):this.iu(I,q)||(s.track({type:2,doc:q}),J=!0,(g&&this.Xa(q,g)>0||y&&this.Xa(q,y)<0)&&(m=!0)):!I&&q?(s.track({type:0,doc:q}),J=!0):I&&!q&&(s.track({type:1,doc:I}),J=!0,(g||y)&&(m=!0)),J&&(q?(f=f.add(q),u=ie?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:f,ru:s,Ds:m,mutatedKeys:u}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const f=e.ru.pa();f.sort((T,w)=>function(q,$){const ie=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:J})}};return ie(q)-ie($)}(T.type,w.type)||this.Xa(T.doc,w.doc)),this.su(s),o=o!=null&&o;const m=n&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,y=g!==this.Ya;return this.Ya=g,f.length!==0||y?{snapshot:new no(this.query,e.eu,u,f,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new y0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const n=[];return e.forEach(s=>{this.Za.has(s)||n.push(new ub(s))}),this.Za.forEach(s=>{e.has(s)||n.push(new lb(s))}),n}uu(e){this.Ha=e.qs,this.Za=ke();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return no.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const vp="SyncEngine";class uD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class cD{constructor(e){this.key=e,this.lu=!1}}class hD{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.hu={},this.Pu=new Ys(m=>IT(m),Ah),this.Tu=new Map,this.Iu=new Set,this.du=new at(pe.comparator),this.Eu=new Map,this.Au=new lp,this.Ru={},this.Vu=new Map,this.mu=to.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fD(r,e,n=!0){const s=pb(r);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await cb(s,e,n,!0),o}async function dD(r,e){const n=pb(r);await cb(n,e,!0,!1)}async function cb(r,e,n,s){const o=await Dx(r.localStore,di(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await mD(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&nb(r.remoteStore,o),m}async function mD(r,e,n,s,o){r.gu=(w,I,q)=>async function(ie,J,Te,me){let fe=J.view.nu(Te);fe.Ds&&(fe=await h0(ie.localStore,J.query,!1).then(({documents:O})=>J.view.nu(O,fe)));const De=me&&me.targetChanges.get(J.targetId),be=me&&me.targetMismatches.get(J.targetId)!=null,Ce=J.view.applyChanges(fe,ie.isPrimaryClient,De,be);return T0(ie,J.targetId,Ce._u),Ce.snapshot}(r,w,I,q);const u=await h0(r.localStore,e,!0),f=new lD(e,u.qs),m=f.nu(u.documents),g=eu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,g);T0(r,n,y._u);const T=new uD(e,n,f);return r.Pu.set(e,T),r.Tu.has(n)?r.Tu.get(n).push(e):r.Tu.set(n,[e]),y.snapshot}async function pD(r,e,n){const s=we(r),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter(f=>!Ah(f,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Rm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&fp(s.remoteStore,o.targetId),xm(s,o.targetId)}).catch(oo)):(xm(s,o.targetId),await Rm(s.localStore,o.targetId,!0))}async function gD(r,e){const n=we(r),s=n.Pu.get(e),o=n.Tu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),fp(n.remoteStore,s.targetId))}async function yD(r,e,n){const s=wD(r);try{const o=await function(f,m){const g=we(f),y=et.now(),T=m.reduce((q,$)=>q.add($.key),ke());let w,I;return g.persistence.runTransaction("Locally write mutations","readwrite",q=>{let $=Ji(),ie=ke();return g.Os.getEntries(q,T).next(J=>{$=J,$.forEach((Te,me)=>{me.isValidDocument()||(ie=ie.add(Te))})}).next(()=>g.localDocuments.getOverlayedDocuments(q,$)).next(J=>{w=J;const Te=[];for(const me of m){const fe=DC(me,w.get(me.key).overlayedDocument);fe!=null&&Te.push(new $r(me.key,fe,ET(fe.value.mapValue),mi.exists(!0)))}return g.mutationQueue.addMutationBatch(q,y,Te,m)}).next(J=>{I=J;const Te=J.applyToLocalDocumentSet(w,ie);return g.documentOverlayCache.saveOverlays(q,J.batchId,Te)})}).then(()=>({batchId:I.batchId,changes:DT(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let y=f.Ru[f.currentUser.toKey()];y||(y=new at(Ie)),y=y.insert(m,g),f.Ru[f.currentUser.toKey()]=y}(s,o.batchId,n),await nu(s,o.changes),await Dh(s.remoteStore)}catch(o){const u=yp(o,"Failed to persist write");n.reject(u)}}async function hb(r,e){const n=we(r);try{const s=await Ix(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Eu.get(u);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.lu=!0:o.modifiedDocuments.size>0?He(f.lu,14607):o.removedDocuments.size>0&&(He(f.lu,42227),f.lu=!1))}),await nu(n,s,e)}catch(s){await oo(s)}}function E0(r,e,n){const s=we(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Pu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=we(f);g.onlineState=m;let y=!1;g.queries.forEach((T,w)=>{for(const I of w.wa)I.va(m)&&(y=!0)}),y&&_p(g)}(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _D(r,e,n){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Eu.get(e),u=o&&o.key;if(u){let f=new at(pe.comparator);f=f.insert(u,$t.newNoDocument(u,Ae.min()));const m=ke().add(u),g=new Ih(Ae.min(),new Map,new at(Ie),f,m);await hb(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Ep(s)}else await Rm(s.localStore,e,!1).then(()=>xm(s,e,n)).catch(oo)}async function vD(r,e){const n=we(r),s=e.batch.batchId;try{const o=await Rx(n.localStore,e);db(n,s,null),fb(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nu(n,o)}catch(o){await oo(o)}}async function ED(r,e,n){const s=we(r);try{const o=await function(f,m){const g=we(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let T;return g.mutationQueue.lookupMutationBatch(y,m).next(w=>(He(w!==null,37113),T=w.keys(),g.mutationQueue.removeMutationBatch(y,w))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,T,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T)).next(()=>g.localDocuments.getDocuments(y,T))})}(s.localStore,e);db(s,e,n),fb(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await nu(s,o)}catch(o){await oo(o)}}function fb(r,e){(r.Vu.get(e)||[]).forEach(n=>{n.resolve()}),r.Vu.delete(e)}function db(r,e,n){const s=we(r);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function xm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),n&&r.hu.pu(s,n);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(s=>{r.Au.containsKey(s)||mb(r,s)})}function mb(r,e){r.Iu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(fp(r.remoteStore,n),r.du=r.du.remove(e),r.Eu.delete(n),Ep(r))}function T0(r,e,n){for(const s of n)s instanceof lb?(r.Au.addReference(s.key,e),TD(r,s)):s instanceof ub?(re(vp,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||mb(r,s.key)):ve(19791,{yu:s})}function TD(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Iu.has(s)||(re(vp,"New document in limbo: "+n),r.Iu.add(s),Ep(r))}function Ep(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const n=new pe(st.fromString(e)),s=r.mu.next();r.Eu.set(s,new cD(n)),r.du=r.du.insert(n,s),nb(r.remoteStore,new kr(di(ip(n.path)),s,"TargetPurposeLimboResolution",vh.ue))}}async function nu(r,e,n){const s=we(r),o=[],u=[],f=[];s.Pu.isEmpty()||(s.Pu.forEach((m,g)=>{f.push(s.gu(g,e,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const w=y?!y.fromCache:(T=n?.targetChanges.get(g.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,w?"current":"not-current")}if(y){o.push(y);const w=cp.Es(g.targetId,y);u.push(w)}}))}),await Promise.all(f),s.hu.J_(o),await async function(g,y){const T=we(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>X.forEach(y,I=>X.forEach(I.Is,q=>T.persistence.referenceDelegate.addReference(w,I.targetId,q)).next(()=>X.forEach(I.ds,q=>T.persistence.referenceDelegate.removeReference(w,I.targetId,q)))))}catch(w){if(!lo(w))throw w;re(hp,"Failed to update sequence numbers: "+w)}for(const w of y){const I=w.targetId;if(!w.fromCache){const q=T.Fs.get(I),$=q.snapshotVersion,ie=q.withLastLimboFreeSnapshotVersion($);T.Fs=T.Fs.insert(I,ie)}}}(s.localStore,u))}async function bD(r,e){const n=we(r);if(!n.currentUser.isEqual(e)){re(vp,"User change. New user:",e.toKey());const s=await WT(n.localStore,e);n.currentUser=e,function(u,f){u.Vu.forEach(m=>{m.forEach(g=>{g.reject(new he(W.CANCELLED,f))})}),u.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nu(n,s.Bs)}}function AD(r,e){const n=we(r),s=n.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let o=ke();const u=n.Tu.get(e);if(!u)return o;for(const f of u){const m=n.Pu.get(f);o=o.unionWith(m.view.tu)}return o}}function pb(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=hb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_D.bind(null,e),e.hu.J_=sD.bind(null,e.eventManager),e.hu.pu=aD.bind(null,e.eventManager),e}function wD(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ED.bind(null,e),e}class ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return Sx(this.persistence,new bx,e.initialUser,this.serializer)}Du(e){return new ZT(up.Vi,this.serializer)}bu(e){return new Ox}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ch.provider={build:()=>new ch};class SD extends ch{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){He(this.persistence.referenceDelegate instanceof lh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ox(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new ZT(s=>lh.Vi(s,n),this.serializer)}}class Dm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>E0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bD.bind(null,this.syncEngine),await eD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nD}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),s=function(u){return new Ux(u)}(e.databaseInfo);return function(u,f,m,g){return new Bx(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new Hx(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>E0(this.syncEngine,n,0),function(){return m0.C()?new m0:new Mx}())}createSyncEngine(e,n){return function(o,u,f,m,g,y,T){const w=new hD(o,u,f,m,g,y);return T&&(w.fu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=we(o);re(Fs,"RemoteStore shutting down."),u.Ia.add(5),await tu(u),u.Ea.shutdown(),u.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dm.provider={build:()=>new Dm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Wi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="FirestoreClient";class ID{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=$m.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{re(Qr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(re(Qr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function tm(r,e){r.asyncQueue.verifyOperationInProgress(),re(Qr,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await WT(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>{zr("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{zr("Terminating Firestore due to IndexedDb database deletion failed",o)})}),r._offlineComponents=e}async function b0(r,e){r.asyncQueue.verifyOperationInProgress();const n=await CD(r);re(Qr,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>g0(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>g0(e.remoteStore,o)),r._onlineComponents=e}async function CD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(Qr,"Using user provided OfflineComponentProvider");try{await tm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await tm(r,new ch)}}else re(Qr,"Using default OfflineComponentProvider"),await tm(r,new SD(void 0));return r._offlineComponents}async function gb(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(Qr,"Using user provided OnlineComponentProvider"),await b0(r,r._uninitializedComponentsProvider._online)):(re(Qr,"Using default OnlineComponentProvider"),await b0(r,new Dm))),r._onlineComponents}function xD(r){return gb(r).then(e=>e.syncEngine)}async function A0(r){const e=await gb(r),n=e.eventManager;return n.onListen=fD.bind(null,e.syncEngine),n.onUnlisten=pD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gD.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="firestore.googleapis.com",S0=!0;class R0{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_b,this.ssl=S0}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:S0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$T;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sx)throw new he(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new he(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tp{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new MI;switch(s.type){case"firstParty":return new UI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=w0.get(n);s&&(re("ComponentProvider","Removing Datastore"),w0.delete(n),s.terminate())}(this),Promise.resolve()}}function DD(r,e,n,s={}){var o;r=Lr(r,Tp);const u=io(e),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${n}`;u&&(q0(`https://${g}`),H0("Firestore",!0)),f.host!==_b&&f.host!==g&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!jr(y,m)&&(r._setSettings(y),s.mockUserToken)){let T,w;if(typeof s.mockUserToken=="string")T=s.mockUserToken,w=Xt.MOCK_USER;else{T=A1(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new he(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Xt(I)}r._authCredentials=new kI(new lT(T,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Nh(this.firestore,e,this._query)}}class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}toJSON(){return{type:Ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Wl(n,Ct._jsonSchema))return new Ct(e,s||null,new pe(st.fromString(n.referencePath)))}}Ct._jsonSchemaVersion="firestore/documentReference/1.0",Ct._jsonSchema={type:Et("string",Ct._jsonSchemaVersion),referencePath:Et("string")};class Gl extends Nh{constructor(e,n,s){super(e,n,ip(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new pe(e))}withConverter(e){return new Gl(this.firestore,e,this._path)}}function Tl(r,e,...n){if(r=Dt(r),arguments.length===1&&(e=$m.newId()),qI("doc","path",e),r instanceof Tp){const s=st.fromString(e,...n);return jv(s),new Ct(r,null,new pe(s))}{if(!(r instanceof Ct||r instanceof Gl))throw new he(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(st.fromString(e,...n));return jv(s),new Ct(r.firestore,r instanceof Gl?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="AsyncQueue";class C0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new eb(this,"async_queue_retry"),this.oc=()=>{const s=em();s&&re(I0,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=em();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=em();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Us;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!lo(e))throw e;re(I0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Wi("INTERNAL UNHANDLED ERROR: ",x0(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=gp.createAndSchedule(this,e,n,s,u=>this.lc(u));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:x0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function x0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ql extends Tp{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new C0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C0(e),this._firestoreClient=void 0,await e}}}function ND(r,e){const n=typeof r=="object"?r:km(),s=typeof r=="string"?r:th,o=Qs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=T1("firestore");u&&DD(o,...u)}return o}function vb(r){if(r._terminated)throw new he(W.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||OD(r),r._firestoreClient}function OD(r){var e,n,s;const o=r._freezeSettings(),u=function(m,g,y,T){return new eC(m,g,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,yb(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new ID(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m?._online.build();return{_offline:m?._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(Ft.fromBase64String(e))}catch(n){throw new he(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wl(e,Vn._jsonSchema))return Vn.fromBase64String(e.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:Et("string",Vn._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gi._jsonSchemaVersion}}static fromJSON(e){if(Wl(e,gi._jsonSchema))return new gi(e.latitude,e.longitude)}}gi._jsonSchemaVersion="firestore/geoPoint/1.0",gi._jsonSchema={type:Et("string",gi._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wl(e,yi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yi(e.vectorValues);throw new he(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yi._jsonSchemaVersion="firestore/vectorValue/1.0",yi._jsonSchema={type:Et("string",yi._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=/^__.*__$/;class kD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(e,this.data,n,this.fieldTransforms)}}class Eb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tb(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:r})}}class Ap{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return hh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Tb(this.Ec)&&MD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class VD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ch(e)}Dc(e,n,s,o=!1){return new Ap({Ec:e,methodName:n,bc:s,path:Ht.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bb(r){const e=r._freezeSettings(),n=Ch(r._databaseId);return new VD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function PD(r,e,n,s,o,u={}){const f=r.Dc(u.merge||u.mergeFields?2:0,e,n,o);wp("Data must be an object, but it was:",f,s);const m=Ab(s,f);let g,y;if(u.merge)g=new vn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const w of u.mergeFields){const I=Nm(e,w,n);if(!f.contains(I))throw new he(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Sb(T,I)||T.push(I)}g=new vn(T),y=f.fieldTransforms.filter(w=>g.covers(w.field))}else g=null,y=f.fieldTransforms;return new kD(new ln(m),g,y)}class Mh extends bp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}function UD(r,e,n,s){const o=r.Dc(1,e,n);wp("Data must be an object, but it was:",o,s);const u=[],f=ln.empty();Xr(s,(g,y)=>{const T=Sp(e,g,n);y=Dt(y);const w=o.gc(T);if(y instanceof Mh)u.push(T);else{const I=kh(y,w);I!=null&&(u.push(T),f.set(T,I))}});const m=new vn(u);return new Eb(f,m,o.fieldTransforms)}function LD(r,e,n,s,o,u){const f=r.Dc(1,e,n),m=[Nm(e,s,n)],g=[o];if(u.length%2!=0)throw new he(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<u.length;I+=2)m.push(Nm(e,u[I])),g.push(u[I+1]);const y=[],T=ln.empty();for(let I=m.length-1;I>=0;--I)if(!Sb(y,m[I])){const q=m[I];let $=g[I];$=Dt($);const ie=f.gc(q);if($ instanceof Mh)y.push(q);else{const J=kh($,ie);J!=null&&(y.push(q),T.set(q,J))}}const w=new vn(y);return new Eb(T,w,f.fieldTransforms)}function kh(r,e){if(wb(r=Dt(r)))return wp("Unsupported field value:",e,r),Ab(r,e);if(r instanceof bp)return function(s,o){if(!Tb(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=kh(m,o.yc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return wC(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=et.fromDate(s);return{timestampValue:oh(o.serializer,u)}}if(s instanceof et){const u=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oh(o.serializer,u)}}if(s instanceof gi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Vn)return{bytesValue:HT(o.serializer,s._byteString)};if(s instanceof Ct){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.wc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:op(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof yi)return function(f,m){return{mapValue:{fields:{[_T]:{stringValue:vT},[nh]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.wc("VectorValues must only contain numeric values.");return rp(m.serializer,y)})}}}}}}(s,o);throw o.wc(`Unsupported field value: ${Zm(s)}`)}(r,e)}function Ab(r,e){const n={};return fT(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(r,(s,o)=>{const u=kh(o,e.Vc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function wb(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof gi||r instanceof Vn||r instanceof Ct||r instanceof bp||r instanceof yi)}function wp(r,e,n){if(!wb(n)||!cT(n)){const s=Zm(n);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function Nm(r,e,n){if((e=Dt(e))instanceof Oh)return e._internalPath;if(typeof e=="string")return Sp(r,e);throw hh("Field path arguments must be of type string or ",r,!1,void 0,n)}const jD=new RegExp("[~\\*/\\[\\]]");function Sp(r,e,n){if(e.search(jD)>=0)throw hh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Oh(...e.split("."))._internalPath}catch{throw hh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function hh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new he(W.INVALID_ARGUMENT,m+r+g)}function Sb(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ib("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zD extends Rb{data(){return super.data()}}function Ib(r,e){return typeof e=="string"?Sp(r,e):e instanceof Oh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new he(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qD{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Xr(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[nh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>mt(f.doubleValue));return new yi(u)}convertGeoPoint(e){return new gi(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Th(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zl(e));default:return null}}convertTimestamp(e){const n=qr(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=st.fromString(e);He(XT(s),9688,{name:e});const o=new Bl(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(n)||Wi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class Cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ls extends Rb{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Ib("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ls._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ls._jsonSchema={type:Et("string",Ls._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Hc extends Ls{data(e={}){return super.data(e)}}class Za{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Cl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Hc(this._firestore,this._userDataWriter,s.key,s,new Cl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new Hc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Hc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:FD(m.type),doc:g,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Za._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$m.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FD(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}Za._jsonSchemaVersion="firestore/querySnapshot/1.0",Za._jsonSchema={type:Et("string",Za._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class Cb extends qD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function GD(r,e,n){r=Lr(r,Ct);const s=Lr(r.firestore,Ql),o=HD(r.converter,e);return xb(s,[PD(bb(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,mi.none())])}function nm(r,e,n,...s){r=Lr(r,Ct);const o=Lr(r.firestore,Ql),u=bb(o);let f;return f=typeof(e=Dt(e))=="string"||e instanceof Oh?LD(u,"updateDoc",r._key,e,n,s):UD(u,"updateDoc",r._key,e),xb(o,[f.toMutation(r._key,mi.exists(!0))])}function QD(r,...e){var n,s,o;r=Dt(r);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof e[f]!="object"||D0(e[f])||(u=e[f++]);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(D0(e[f])){const w=e[f];e[f]=(n=w.next)===null||n===void 0?void 0:n.bind(w),e[f+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),e[f+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let g,y,T;if(r instanceof Ct)y=Lr(r.firestore,Ql),T=ip(r._key.path),g={next:w=>{e[f]&&e[f](KD(y,r,w))},error:e[f+1],complete:e[f+2]};else{const w=Lr(r,Nh);y=Lr(w.firestore,Ql),T=w._query;const I=new Cb(y);g={next:q=>{e[f]&&e[f](new Za(y,I,w,q))},error:e[f+1],complete:e[f+2]},BD(r._query)}return function(I,q,$,ie){const J=new RD(ie),Te=new oD(q,J,$);return I.asyncQueue.enqueueAndForget(async()=>iD(await A0(I),Te)),()=>{J.Ou(),I.asyncQueue.enqueueAndForget(async()=>rD(await A0(I),Te))}}(vb(y),T,m,g)}function xb(r,e){return function(s,o){const u=new Us;return s.asyncQueue.enqueueAndForget(async()=>yD(await xD(s),o,u)),u.promise}(vb(r),e)}function KD(r,e,n){const s=n.docs.get(e._key),o=new Cb(r);return new Ls(r,o,e._key,s,new Cl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){ao=o})(ro),_i(new Fn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Ql(new VI(s.getProvider("auth-internal")),new LI(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new he(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(y.options.projectId,T)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Pn(kv,Vv,e),Pn(kv,Vv,"esm2017")})();const YD={apiKey:"AIzaSyA0jsiHGYLynCglojjbI0UPq6sDsKhytmA",authDomain:"dev-quest-70563.firebaseapp.com",projectId:"dev-quest-70563",storageBucket:"dev-quest-70563.appspot.com",messagingSenderId:"850665690939",appId:"1:850665690939:web:daba4a074c03b99528091e",measurementId:"G-D0FY0LYR4J"},Rp=$0(YD),Mc=f2(Rp),bl=ND(Rp);xI(Rp);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$D=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),N0=r=>{const e=$D(r);return e.charAt(0).toUpperCase()+e.slice(1)},Db=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),ZD=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=Ve.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},g)=>Ve.createElement("svg",{ref:g,...WD,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Db("lucide",o),...!u&&!ZD(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,T])=>Ve.createElement(y,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(r,e)=>{const n=Ve.forwardRef(({className:s,...o},u)=>Ve.createElement(JD,{ref:u,iconNode:e,className:Db(`lucide-${XD(N0(r))}`,`lucide-${r}`,s),...o}));return n.displayName=N0(r),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]],tN=Wt("book-copy",eN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],iN=Wt("circle-arrow-up",nN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],sN=Wt("circle-check-big",rN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],im=Wt("code",aN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],lN=Wt("database",oN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],cN=Wt("layout-grid",uN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],fN=Wt("palette",hN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],O0=Wt("server",dN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Nb=Wt("shield",mN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],gN=Wt("skull",pN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],_N=Wt("sparkles",yN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],EN=Wt("star",vN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],bN=Wt("swords",TN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],wN=Wt("user",AN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],RN=Wt("wind",SN);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ip=Wt("x",IN),CN=({userAvatar:r,onNavClick:e,activePage:n})=>{const s=[{id:"quests",label:"Quests",icon:k.jsx(cN,{})},{id:"guides",label:"Guides",icon:k.jsx(tN,{})},{id:"character",label:"Character",icon:k.jsx(wN,{})}];return k.jsxs("header",{className:"bg-parchment-dark/50 backdrop-blur-sm border-b-2 border-amber-800/30 p-4 rounded-lg flex justify-between items-center shadow-lg shadow-black/30 sticky top-4 z-40",children:[k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx(Nb,{className:"w-8 h-8 text-amber-400"}),k.jsx("h1",{className:"text-xl font-bold text-white font-cinzel hidden md:block",children:"DevQuest"})]}),k.jsx("nav",{className:"flex items-center gap-2 md:gap-4 bg-black/20 p-1 rounded-lg",children:s.map(o=>k.jsxs("button",{onClick:()=>e(o.id),className:`flex items-center gap-2 py-2 px-3 md:px-4 rounded-md text-sm font-bold transition-colors ${n===o.id?"bg-amber-600 text-white":"text-amber-100/70 hover:bg-black/30"}`,children:[o.icon,k.jsx("span",{className:"hidden md:block",children:o.label})]},o.id))}),k.jsx("div",{className:"w-12 h-12 rounded-full border-2 border-amber-500 p-0.5",children:k.jsx("img",{src:r,alt:"User Avatar",className:"w-full h-full rounded-full object-cover"})})]})},xN=({skill:r,onSelect:e,isSelected:n})=>{const s={locked:"bg-black/50 text-gray-500 cursor-not-allowed border-gray-700",available:`bg-black/30 text-white hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/20 border-2 ${r.color.replace("text-","border-")}/50 cursor-pointer animate-pulse-slow`,completed:`bg-gradient-to-br from-gray-800/80 to-black/50 text-white border-2 ${r.color.replace("text-","border-")} cursor-pointer shadow-lg ${r.color.replace("text-","shadow-")}/20`},o=n?"ring-4 ring-offset-2 ring-offset-[#0D1117] ring-amber-400":"",u=V0.cloneElement(r.icon,{className:`w-8 h-8 mb-2 ${r.status==="locked"?"text-gray-600":r.color}`});return k.jsxs("div",{style:{gridRow:r.position.row,gridColumn:r.position.col},className:`flex flex-col items-center justify-center text-center p-2 md:p-4 rounded-lg transition-all duration-300 shadow-md ${s[r.status]} ${o}`,onClick:()=>r.status!=="locked"&&e(r),children:[r.status==="completed"?k.jsx(sN,{className:`w-8 h-8 mb-2 ${r.color}`}):u,k.jsx("h3",{className:"font-bold text-xs md:text-sm font-cinzel",children:r.name})]})},DN=({skills:r,onSelectSkill:e,selectedSkillId:n})=>{const s=Ve.useMemo(()=>new Map(r.map(o=>[o.id,o])),[r]);return k.jsxs("div",{className:"relative bg-parchment-dark/30 p-4 md:p-6 rounded-lg shadow-lg shadow-black/30 border-2 border-amber-800/20",children:[k.jsx("div",{className:"grid grid-cols-5 grid-rows-5 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12",children:r.map(o=>k.jsx(xN,{skill:o,onSelect:e,isSelected:n===o.id},o.id))}),k.jsxs("svg",{className:"absolute top-0 left-0 w-full h-full",style:{pointerEvents:"none"},children:[k.jsx("defs",{children:k.jsx("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:k.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#F0A500",opacity:"0.6"})})}),r.map(o=>o.dependencies.map(u=>{const f=s.get(u);if(!f)return null;const m=(f.position.col-.5)*(100/5)+"%",g=(f.position.row-.5)*(100/5)+"%",y=(o.position.col-.5)*(100/5)+"%",T=(o.position.row-.5)*(100/5)+"%";return k.jsx("line",{x1:m,y1:g,x2:y,y2:T,stroke:s.get(o.id)?.status==="locked"?"#4A5568":"#F0A500",strokeWidth:"2",strokeDasharray:s.get(o.id)?.status==="locked"?"4 4":"none",markerEnd:"url(#arrow)",opacity:"0.6"},`${u}-${o.id}`)}))]})]})},NN=({quest:r,onStart:e,isLocked:n})=>k.jsxs("div",{className:`flex items-center justify-between p-3 rounded-md transition-all duration-300 ${r.completed?"bg-green-800/20 text-gray-500":"bg-black/20 hover:bg-black/40"} ${r.isBossFight?"border-l-4 border-red-500":""}`,children:[k.jsx("p",{className:`flex-grow ${r.completed?"line-through":""}`,children:r.title}),k.jsxs("div",{className:"flex items-center gap-3 ml-4",children:[k.jsxs("span",{className:"text-sm font-bold text-amber-400",children:[r.xp," XP"]}),k.jsx("button",{onClick:()=>e(r),disabled:r.completed||n,className:`font-bold py-1 px-3 rounded-md text-sm shadow-md transition-all duration-200 font-cinzel text-xs disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-600 ${r.isBossFight?"bg-red-700 text-white hover:bg-red-800 shadow-red-900/20":"bg-amber-700 text-white hover:bg-amber-800 shadow-amber-900/20"}`,children:r.completed?"Done":r.isBossFight?"Challenge":"Start"})]})]}),ON=({quests:r,onStartQuest:e,skillStatus:n})=>{const s=n!=="available";return k.jsx("div",{className:"space-y-3",children:r.length>0?r.map(o=>k.jsx(NN,{quest:o,onStart:e,isLocked:s},o.id)):k.jsx("p",{className:"text-amber-100/50 italic text-center p-4",children:"No quests found for this skill."})})},MN=({skill:r,quests:e,onStartQuest:n})=>k.jsx("aside",{className:"bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 p-4 md:p-6 rounded-lg shadow-lg shadow-black/30 h-full overflow-y-auto",children:r?k.jsxs("div",{children:[k.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[k.jsx("div",{className:`p-2 bg-gradient-to-br from-gray-700/50 to-transparent rounded-md ${r.color}`,children:V0.cloneElement(r.icon,{className:"w-8 h-8"})}),k.jsxs("div",{children:[k.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white font-cinzel",children:r.name}),k.jsx("p",{className:"text-amber-100/80 text-sm",children:r.description})]})]}),k.jsx("hr",{className:"my-6 border-amber-800/20"}),k.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[k.jsx(bN,{className:"w-6 h-6 text-amber-400"}),k.jsx("h3",{className:"text-lg md:text-xl font-semibold text-amber-400 font-cinzel",children:"Quests"})]}),k.jsx(ON,{quests:e,onStartQuest:n,skillStatus:r.status})]}):k.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center text-amber-100/70",children:[k.jsx(_N,{className:"w-16 h-16 mb-4 text-amber-400/50"}),k.jsx("h2",{className:"text-xl md:text-2xl font-bold font-cinzel",children:"Welcome to DevQuest!"}),k.jsx("p",{className:"text-sm",children:"Select a skill from the tree to view its details and associated quests."})]})}),kN=({stage:r,mascotGifs:e})=>k.jsxs("div",{className:"absolute bottom-4 right-4 hidden lg:block group animate-float",children:[k.jsx("img",{src:e[r],alt:"RPG Mascot",className:"w-44 h-44 object-contain drop-shadow-lg group-hover:animate-wing-flap",onError:n=>{n.target.onerror=null,n.target.src=`https://placehold.co/128x128/000000/FFFFFF?text=Mascot+${r}`}}),k.jsxs("div",{className:"absolute bottom-full right-0 mb-2 w-48 bg-[#16213E] p-3 rounded-lg border-2 border-[#E94560]/50 text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[k.jsx("p",{children:"Keep up the great work, adventurer! Your journey to mastery is impressive."}),k.jsx("div",{className:"absolute bottom-0 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#16213E] transform translate-y-full"})]})]}),VN=({skills:r,selectedSkill:e,onSelectSkill:n,quests:s,onStartQuest:o,mascotStage:u,mascotGifs:f})=>k.jsxs("div",{className:"flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 mt-8",children:[k.jsx("div",{className:"lg:col-span-2",children:k.jsx(DN,{skills:r,onSelectSkill:n,selectedSkillId:e?.id})}),k.jsx("div",{className:"lg:col-span-1",children:k.jsx(MN,{skill:e,quests:s,onStartQuest:o})}),k.jsx(kN,{stage:u,mascotGifs:f})]}),PN=({onOpenGuide:r,guides:e})=>k.jsxs("div",{className:"mt-8 p-6 md:p-10 bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 rounded-lg shadow-lg shadow-black/30 animate-fade-in",children:[k.jsx("h2",{className:"text-3xl font-cinzel font-bold text-amber-300 mb-6",children:"The Arcane Library"}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(n=>k.jsxs("button",{onClick:()=>r(n),className:"bg-black/20 p-6 rounded-lg border border-amber-800/20 text-left hover:bg-black/40 hover:border-amber-800/50 transition-all group",children:[k.jsx("h3",{className:"font-cinzel text-xl text-amber-400 group-hover:text-amber-300 transition-colors",children:n.title}),k.jsx("p",{className:"text-amber-100/80 mt-2 text-sm",children:n.description})]},n.id))})]}),UN=({user:r,userClass:e,avatars:n,selectedAvatar:s,onAvatarSelect:o,onLogout:u})=>k.jsxs("div",{className:"mt-8 p-6 md:p-10 bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 rounded-lg shadow-lg shadow-black/30 animate-fade-in",children:[k.jsx("h2",{className:"text-3xl font-cinzel font-bold text-amber-300 mb-6",children:"Hero's Quarters"}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[k.jsxs("div",{className:"md:col-span-1",children:[k.jsx("h3",{className:"font-cinzel text-xl text-amber-400 mb-4",children:"Choose Your Avatar"}),k.jsx("div",{className:"grid grid-cols-3 gap-4",children:n.map(f=>k.jsx("button",{onClick:()=>o(f.url),className:`rounded-full border-4 transition-all ${s===f.url?"border-amber-400":"border-transparent hover:border-amber-400/50"}`,children:k.jsx("img",{src:f.url,alt:`Avatar ${f.id}`,className:"w-full h-full rounded-full object-cover"})},f.id))})]}),k.jsxs("div",{className:"md:col-span-2",children:[k.jsx("h3",{className:"font-cinzel text-xl text-amber-400 mb-4",children:"Account Details"}),k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold text-amber-100/80 mb-1",children:"Username"}),k.jsx("input",{type:"text",disabled:!0,value:r.name,className:"w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold text-amber-100/80 mb-1",children:"Class"}),k.jsx("input",{type:"text",disabled:!0,value:e,className:"w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold text-amber-100/80 mb-1",children:"Password"}),k.jsx("input",{type:"password",disabled:!0,value:"********",className:"w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-gray-400 cursor-not-allowed"})]})]}),k.jsx("button",{onClick:u,className:"mt-8 bg-red-700 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-red-800 transition-all duration-200 font-cinzel",children:"Logout"})]})]})]}),LN=({onClose:r,onLogin:e,onSignUp:n})=>{const[s,o]=Ve.useState(!0),[u,f]=Ve.useState(""),[m,g]=Ve.useState(""),[y,T]=Ve.useState(""),w=I=>{I.preventDefault(),T(""),s?(console.log("Tentando logar com:",u,m),e(u,m)):(console.log("Tentando registrar com:",u,m),n(u,m))};return k.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in",children:k.jsxs("div",{className:"bg-parchment-dark border-2 border-amber-800/50 rounded-lg shadow-2xl w-full max-w-md text-white relative overflow-hidden",children:[k.jsx("button",{onClick:r,className:"absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10",children:k.jsx(Ip,{size:24})}),k.jsxs("div",{className:"p-8",children:[k.jsx("h2",{className:"text-3xl font-cinzel font-bold text-amber-300 mb-6 text-center",children:s?"Entrar no Reino":"Forjar uma Nova Conta"}),k.jsxs("form",{onSubmit:w,className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold text-amber-100/80 mb-1",htmlFor:"email",children:"Email do Aventureiro"}),k.jsx("input",{id:"email",type:"email",value:u,onChange:I=>f(I.target.value),className:"w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500",required:!0})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-bold text-amber-100/80 mb-1",htmlFor:"password",children:"Senha Secreta"}),k.jsx("input",{id:"password",type:"password",value:m,onChange:I=>g(I.target.value),className:"w-full bg-black/20 border border-amber-800/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500",required:!0})]}),y&&k.jsx("p",{className:"text-red-400 text-sm text-center",children:y}),k.jsx("button",{type:"submit",className:"w-full bg-amber-600 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-amber-700 transition-all duration-200 font-cinzel",children:s?"Entrar":"Registrar"})]}),k.jsx("div",{className:"mt-4 text-center",children:k.jsx("button",{onClick:()=>o(!s),className:"text-sm text-amber-100/70 hover:text-white underline",children:s?"Não tem uma conta? Forje uma aqui!":"Já é um aventureiro? Entre aqui!"})})]})]})})},jN=({quest:r,onClose:e,onComplete:n})=>{const[s,o]=Ve.useState(r.starterCode),[u,f]=Ve.useState(""),[m,g]=Ve.useState(!1),y=()=>{f("");try{r.solution(s)?(g(!0),setTimeout(()=>{n(r.id),e()},1500)):f("That's not quite right. Keep trying!")}catch{f("There's an error in your code. Check the syntax!")}},T=r.isBossFight,w=T?"border-red-500 bg-boss-lair":"border-amber-800/50 bg-parchment-dark",I=T?"bg-red-600 hover:bg-red-700 shadow-red-900/20":"bg-amber-600 hover:bg-amber-700 shadow-amber-800/20";return k.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in",children:k.jsxs("div",{className:`border-2 rounded-lg shadow-2xl w-full max-w-2xl text-white relative overflow-hidden transition-all duration-500 ${w} ${m?"border-green-400":""}`,children:[m&&k.jsx("div",{className:"absolute inset-0 bg-green-500/20 animate-pulse-fast"}),T&&k.jsx("div",{className:"absolute inset-0 bg-red-900/50 animate-pulse-slow"}),k.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10",children:k.jsx(Ip,{size:24})}),k.jsxs("div",{className:"p-6 md:p-8 relative",children:[k.jsxs("h2",{className:`text-2xl md:text-3xl font-cinzel font-bold mb-2 ${T?"text-red-400":"text-amber-300"}`,children:[T&&k.jsx(gN,{className:"inline-block w-8 h-8 mr-2"})," ",r.title]}),k.jsx("p",{className:`mb-4 ${T?"text-red-200/80":"text-amber-100/80"}`,children:r.challenge}),k.jsx("div",{className:"bg-black/30 rounded-md p-1",children:k.jsx("textarea",{value:s,onChange:q=>o(q.target.value),className:"w-full h-48 bg-transparent text-white font-mono text-sm p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#F0A500]",spellCheck:"false"})}),k.jsxs("div",{className:"mt-4 h-6",children:[u&&k.jsx("p",{className:"text-red-400 text-sm animate-shake",children:u}),m&&k.jsx("p",{className:"text-green-400 text-lg font-bold animate-bounce",children:"VICTORY!"})]}),k.jsx("div",{className:"mt-4 flex justify-end",children:k.jsx("button",{onClick:y,className:`text-white font-bold py-2 px-6 rounded-md shadow-md transition-all duration-200 font-cinzel ${I}`,children:T?"Vanquish":"Check Code"})})]})]})})},zN=({newLevel:r,onClose:e})=>k.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in",children:k.jsxs("div",{className:"bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-2 border-[#F0A500] rounded-lg shadow-2xl w-full max-w-md text-white text-center p-8 relative overflow-hidden",children:[k.jsx("div",{className:"absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-[#F0A500]/30 to-transparent animate-spin-slow"}),k.jsx(EN,{className:"w-24 h-24 text-[#F0A500] mx-auto mb-4 animate-pulse-fast"}),k.jsx("h2",{className:"text-4xl font-bold text-white mb-2 font-cinzel",children:"LEVEL UP!"}),k.jsx("p",{className:"text-6xl font-bold text-[#F0A500] mb-4 drop-shadow-lg",children:r}),k.jsx("p",{className:"text-gray-300 mb-6",children:"Your power grows, adventurer. New challenges await!"}),k.jsx("button",{onClick:e,className:"bg-[#F0A500] text-[#1A1A2E] font-bold py-2 px-8 rounded-md shadow-md shadow-[#F0A500]/20 hover:bg-[#F0A500]/80 transition-all duration-200 font-cinzel",children:"Continue"})]})}),BN=({newStage:r,onClose:e,mascotGifs:n})=>k.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in",children:k.jsxs("div",{className:"bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-2 border-purple-400 rounded-lg shadow-2xl w-full max-w-md text-white text-center p-8 relative overflow-hidden",children:[k.jsx("div",{className:"absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-spin-slow"}),k.jsx(iN,{className:"w-24 h-24 text-purple-400 mx-auto mb-4 animate-pulse-fast"}),k.jsx("h2",{className:"text-4xl font-bold text-white mb-2 font-cinzel",children:"EVOLUTION!"}),k.jsx("img",{src:n[r],alt:"Evolved Mascot",className:"w-40 h-40 mx-auto my-4 drop-shadow-xl"}),k.jsx("p",{className:"text-gray-300 mb-6",children:"Your companion has evolved into a new, more powerful form!"}),k.jsx("button",{onClick:e,className:"bg-purple-500 text-white font-bold py-2 px-8 rounded-md shadow-md shadow-purple-800/20 hover:bg-purple-600 transition-all duration-200 font-cinzel",children:"Awesome!"})]})}),qN=({guide:r,onClose:e})=>{const[n,s]=Ve.useState(!0);Ve.useEffect(()=>{const u=setTimeout(()=>s(!1),10);return()=>clearTimeout(u)},[]);const o=()=>{s(!0),setTimeout(e,500)};return k.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in",onClick:o,children:k.jsxs("div",{className:`bg-parchment-dark border-2 border-amber-800/50 rounded-lg shadow-2xl w-full max-w-3xl text-white relative overflow-hidden transition-transform duration-500 ease-in-out ${n?"transform scale-y-0":"transform scale-y-100"}`,style:{transformOrigin:"top"},onClick:u=>u.stopPropagation(),children:[k.jsx("button",{onClick:o,className:"absolute top-4 right-4 text-amber-100/70 hover:text-white transition-colors z-10",children:k.jsx(Ip,{size:24})}),k.jsxs("div",{className:"p-8 max-h-[80vh] overflow-y-auto",children:[k.jsx("h2",{className:"text-3xl font-cinzel font-bold text-amber-300 mb-6 text-center",children:r.title}),k.jsx("div",{className:"space-y-4 text-amber-100/90",children:r.content.map((u,f)=>u.type==="h3"?k.jsx("h3",{className:"font-cinzel text-xl text-amber-400 mt-6",children:u.text},f):u.type==="p"?k.jsx("p",{className:"text-base leading-relaxed",children:u.text},f):u.type==="code"?k.jsx("pre",{className:"bg-black/30 p-4 rounded-md text-sm font-mono overflow-x-auto",children:k.jsx("code",{children:u.text})},f):null)})]})]})})},HN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAARVBMVEUAAAAQEBBAQEBNOzJmTkJzRReMjIyZdWO/mYa/v7/4+Pj/pkz///8QEBBAQEBKMixlSDpzRReMjIyWaFi/v7/4+Pj/pky3+g/iAAAADXRSTlMAAAAAAAAAAAAAAAAA7Uh4SAAAAvxJREFUeNrtlgd26zgQBJmc3egRAfr+R91pDCRz80LUZtaTgB/sqgcOFYaTfxQnJycnJycnJ5fh1/m8cb/58nUZnsZBaHtgQGatX5enj2qO7fEBL8js/g/tjwqE2VdtJKs/YR7HRwbIGjDmTLp/w7wsShwPhD9rNcu5JtK24XWeU8IgpulggMwKuF6Qmdu2pqTMKP97C1wu9wWY5Tf5KzrDVtbN/ctC5xb4utwToMxNb5RdkeL+ArIWMY5jC5Ddfpc3PQnLLbA5UFsYNPFPvVIyetysS26wFCACZtQBIhwFT+g69gRcRGq5+bdVgUwzw7bJ3zAVqL/zs8cfMFZorDWQXM16gJTQCgTrjrE/YM2PFkhlVaHEjXo9ArPgsnT7o0BsEZB/TXUILdgKdUFvgJZj35A8sEZABchfdgHBsTPAEMQVWt1v+0D49wUsY2cgN2gQlneBsmI3pPD3Bmw3hoBpVQAG37C7y4yGl8ULXYGfIn2JALXs7p9MvjgK3F0Ai1hrQM8KcmB4EcsfDuDHdmv62wGS89OAGPoL8UIoe7+tAi1gdMwwz7MC3QXS9v7kXqyxW7h1/czw8vo6K9BXIErhLRB68ZMR6ASvvQEVUMTVj8q6WsDdCCKwKNABwn/Ty+p+FRiB/Qw6hxyk8n1x3qpQBQetIXzH0cCK6bmJWAuMs2B3tRbdRkMvSOHXx78ClAoSK9AKgv1DbkDoMLTE5gPbSYBrAbpGGvK9pAJ/DAhbIYvC0/t0S6hwIACooZ0K1Nq4LOP0PgLk8UA0tEoF/UWB+A4M+RlvdoehZEqF3/cWgP5+2E7mHP59gI8JyC5aYH65Bpido4GUUvZH5frevPercGQGaduSnop4oMriIzIxN3QXHfHrm0qNGICXaXqpR0gt6suRABB+LcD7tEzvb6P70+1kWg6+0Gokuf7tbZrePeB+9XxRQOsSgSORYRTyv/mu6qCK6sUD0/AYpsnt3+MB1MSWRgUeDaT//PShIH2q+ndxcnJycnJycnLyA7n6cT5MuIjNAAAAAElFTkSuQmCC",FN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAVFBMVEUAAAAICAgQEBBNFxdUQ0xzRReAJiaMjIyfnZizNja/v7/Mein4+Pj/AAD/pkz///8ICAgyJSxQEx5UQ0xyJTOWPk6WSxyfnZi/dUXMzMzxnVr6+voRuczhAAAAEHRSTlMAAAAAAAAAAAAAAAAAAAAAHik/2wAABMxJREFUeNrt1omW4jgMheGaVO8bF1lZbN7/PUe+ToR1Dt2QMPuUDnj2/0tEVZiXt3mbt3l0Ev7k/uUnwNf3P37Y246vj7amm/2fAVv//cPAVPB4nwD7wzEgofUDkHqs9Ydh+Do82F86IGWw3wMpXQLw1XY0fNkBlGVB/SM2gP0Mz8dt1f774dvw/j4wTR3ARaWcwf4WTWFZnNr/VoHh812gTNyQAWIMRCQCwdrm9evXYfj2+vrh8wPAMtXDgKkYMI6jTGCU1eT9sKLX14H5O8DU2hOB2q/ANC3ABrR8BPghM27zem8/a7u+CfBvoDQBod8N2+x/vAMUtv0GJjunBWMRCta/B3y5DxQC7C+l9g1oQo79IzNZrwO8b4DijwGsvPb5BgzQVXi2T4HA1gfSud6BVkD+IGCZCLB/TmnihtQAVTzX52CqwNrPZ97ALSCtsxsDpI310+WcAIw2Yi/dBFj48LZqmSOWySK1br0emOeL5/f3Sxk5JuSLKvs552RbcuFgnv027CrQrDlT4D2Auzn8WUtZpwnrgnIHXPt5Z5/Da7ehwCHASbGPQ/1rVTUAFKTvvzzV95FRcJlnAoj9PwhYfzAJeH9OKT2WnMKVYJQWXev2xwXz1k+kfB4ypoLegTLNg5AsBdn681z7OQA07vYJTHQojP3ApqClfEFx0r2+lScybeAX37aTL1iBZERIZ9S52y+oJwEOFjFkUQBLQdcLfcb5FSS3HwY8WC5dn0BBtjSv/QrMAWCcU2R0IjwrRfibRKEDKCDnNY0r0G1orbswRkFGy6qUKrQ/ldb3+Z588WFBNpWyvEagSL8c+8c2/jCrp4gDnHSJMycCTci/AGpd/Mqt7aMS7sCaa5rvlLmgDFQB9ZI6gIdNewys6/e6wkbjGq2fUqunmevPbTADFByg1RQVWa+chNdrEQhCfQK8SxVJ7+rBaweB1H48bwlayHD7RbXlvQkC3ZhwOiV7IyXU9AwQyKIqt4DaZTbkffhXUTidPp0MyNCatkEFLhfhAlzQkYDQUd++hGAYB+w4nQSqaul1+FscgA5S3gPn4S870TqSWM+ZQNfXHrD+JjC/ow9kDgW2efB0hzewvw9Y/7crEPocF7j9vX05n7lOF4Q1MF+K+mOt/zQeB86wPh8BDgAqBIStUhGJwMP9Wm/9ZdkApASIAyZYOt6C7AAA9tUGGwDY2wEOgb19AsxzHECeDZBalToe1319DsD12Gtxod1FFpviDzZ1QGYCO0YWS6n2AB/bwg/Yqkb4nuRA39Lt1QvzbAA/YA2/FGa/7AbUgTlfJ227VwdyZv8IQKMKs9/B3AFKADlzPzsHGoU2EWgC5sT+YSAKAfBvx+MA55YQf7+eBxTogfiAe16IRBDkjwEgPJuBvq8EnhQAJWAtcK590WcErHmoA23g1/8MQII/gwRCCZXgBchTQNhVLFW5AccFqfMSFhTmWUCWpb0g6kDg1d4VwMH1q6y7v9kvhd88onbuF/i9b2/lgm4A/o0p/H+NI317taMJsYHrl7HUA0f7PBRALCCl8xU4p7QbsDkD7Hs89E1g2k7r7wZo2DvWA3DGKKhpgQuHkNv9KgME6hD44waJMqVWxh8MoKN+ea/PzhX40wYvb/M2/5h5m98BvRUazFvqdvEAAAAASUVORK5CYII=",GN="/devquest/assets/wizardTyrantrum-H4NwFJxP.png",rm=[{id:"avatar1",url:"https://i.pinimg.com/736x/ce/5a/2e/ce5a2e6db10c43ba0f3b4381dbe9de23.jpg"},{id:"avatar2",url:"https://i.pinimg.com/736x/2f/25/07/2f25074d2a6db23d675596cb701f10c2.jpg"},{id:"avatar3",url:"https://i.pinimg.com/736x/dd/18/a2/dd18a2387bd7806d90f494b294844570.jpg"},{id:"avatar4",url:"https://i.pinimg.com/736x/f8/ac/38/f8ac38d8c48e9b23d0acf8f4fa48fef6.jpg"},{id:"avatar5",url:"https://i.pinimg.com/736x/fb/27/3f/fb273f6ef25d231d05870f6aac7c04f4.jpg"},{id:"avatar6",url:"https://i.pinimg.com/736x/75/c6/15/75c615115d305891d9cf541bea9ec1bd.jpg"}],QN=[{id:"html",name:"HTML5",description:"The foundational language for structuring web content.",dependencies:[],status:"available",position:{row:2,col:1},category:"structure",color:"text-orange-400",icon:k.jsx(im,{})},{id:"css",name:"CSS3",description:"The language for styling and designing web pages.",dependencies:["html"],status:"locked",position:{row:2,col:2},category:"styling",color:"text-blue-400",icon:k.jsx(fN,{})},{id:"js",name:"JavaScript ES6+",description:"The core programming language of the web.",dependencies:["html"],status:"locked",position:{row:2,col:3},category:"logic",color:"text-yellow-400",icon:k.jsx(im,{})},{id:"tailwind",name:"Tailwind CSS",description:"A utility-first CSS framework for rapid UI development.",dependencies:["css"],status:"locked",position:{row:3,col:2},category:"styling",color:"text-teal-400",icon:k.jsx(RN,{})},{id:"react",name:"React",description:"A JavaScript library for building user interfaces.",dependencies:["js"],status:"locked",position:{row:3,col:3},category:"logic",color:"text-cyan-400",icon:k.jsx(im,{})},{id:"nodejs",name:"Node.js",description:"A JavaScript runtime for building server-side applications.",dependencies:["js"],status:"locked",position:{row:1,col:4},category:"backend",color:"text-green-400",icon:k.jsx(O0,{})},{id:"express",name:"Express.js",description:"A minimal and flexible Node.js web application framework.",dependencies:["nodejs"],status:"locked",position:{row:2,col:4},category:"backend",color:"text-gray-400",icon:k.jsx(O0,{})},{id:"sql",name:"SQL Databases",description:"Mastering relational databases like PostgreSQL.",dependencies:["nodejs"],status:"locked",position:{row:3,col:4},category:"database",color:"text-indigo-400",icon:k.jsx(lN,{})},{id:"mastery-fullstack",name:"Full-Stack Mastery",description:"Combine frontend and backend skills to build a complete application.",dependencies:["react","express","sql"],status:"locked",position:{row:4,col:3},category:"mastery",color:"text-purple-400",icon:k.jsx(Nb,{})}],M0=[{id:"q1",skillId:"html",title:"Create a page title",xp:20,completed:!1,challenge:'The <h1> tag should contain the text "Welcome to DevQuest".',starterCode:"<h1></h1>",solution:r=>r.toLowerCase().includes("welcome to devquest")&&r.includes("h1")},{id:"q2",skillId:"html",title:"Create a Link",xp:25,completed:!1,challenge:'Create an anchor tag <a> that links to "https://www.google.com".',starterCode:"<a>Google</a>",solution:r=>r.includes("href")&&(r.includes('"https://www.google.com"')||r.includes("'https://www.google.com'"))},{id:"q3",skillId:"html",title:"Display an Image",xp:30,completed:!1,challenge:'Use an <img> tag with a `src` attribute. The `alt` text should be "A brave adventurer".',starterCode:'<img src="" alt="">',solution:r=>r.includes("src=")&&r.toLowerCase().includes('alt="a brave adventurer"')},{id:"boss-html",skillId:"html",title:"Boss: Build a Hero Section",isBossFight:!0,xp:80,completed:!1,challenge:"Create a <section> containing an <h1>, a <p>, and a <button>. All three must be present.",starterCode:`<section>
  
</section>`,solution:r=>r.includes("<section")&&r.includes("<h1")&&r.includes("<p")&&r.includes("<button")},{id:"q4",skillId:"css",title:"Change Text Color",xp:20,completed:!1,challenge:'Write a CSS rule to make all <p> tags have the color "blue".',starterCode:`p {
  
}`,solution:r=>r.replace(/\s/g,"").includes("color:blue")},{id:"q17",skillId:"css",title:"Keyframe Animation",xp:35,completed:!1,challenge:'Create a @keyframes animation named "fade-in" that goes from opacity 0 to 1.',starterCode:`@keyframes fade-in {
  
}`,solution:r=>r.includes("from { opacity: 0")&&r.includes("to { opacity: 1")},{id:"boss-css",skillId:"css",title:"Boss: Center with Flexbox",isBossFight:!0,xp:80,completed:!1,challenge:'Make the ".boss-lair" a flex container that centers its children both vertically and horizontally.',starterCode:`.boss-lair {
  height: 100vh;
}`,solution:r=>r.includes("display: flex")&&r.includes("justify-content: center")&&r.includes("align-items: center")},{id:"q7",skillId:"js",title:"Declare a variable",xp:20,completed:!1,challenge:'Declare a variable (const, let, or var) named "hero" and assign it any string value.',starterCode:"// Your code here",solution:r=>{try{return typeof new Function(`${r}; return hero;`)()=="string"}catch{return!1}}},{id:"q18",skillId:"js",title:"Filter an Array",xp:35,completed:!1,challenge:"Given `const arr = [1, 2, 3, 4, 5]`, create a new array containing only numbers greater than 2.",starterCode:`const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter(); // Complete the filter`,solution:r=>{try{const n=new Function(`${r}; return newArr;`)();return Array.isArray(n)&&n.length===3&&n.includes(3)&&n.includes(4)&&n.includes(5)}catch{return!1}}},{id:"boss-js",skillId:"js",title:"Boss: Async Fetch",isBossFight:!0,xp:90,completed:!1,challenge:'Write an async function "getQuestData" that uses fetch to get data from "https://api.devquest.com/quests". It should return the JSON response.',starterCode:`async function getQuestData() {
  
}`,solution:r=>r.includes("async function")&&r.includes("fetch")&&r.includes("https://api.devquest.com/quests")&&r.includes("await")&&r.includes(".json()")},{id:"q5",skillId:"tailwind",title:"Flexbox with Tailwind",xp:40,completed:!1,challenge:"Use Tailwind classes on the div to center the <p> tag inside it.",starterCode:`<div class="">
  <p>Center me</p>
</div>`,solution:r=>r.includes("flex")&&r.includes("justify-center")&&r.includes("items-center")},{id:"q10",skillId:"react",title:"Pass Props",xp:50,completed:!1,challenge:'Pass a "name" prop with the value "Enzo" to the Hero component.',starterCode:"<Hero />",solution:r=>r.includes('name="Enzo"')||r.includes("name={'Enzo'}")},{id:"q19",skillId:"express",title:"Handle POST Request",xp:60,completed:!1,challenge:'Add a POST route at "/users" that sends back the "name" from the request body.',starterCode:`app.use(express.json());

// Your code here`,solution:r=>r.includes("app.post('/users'")&&r.includes("req.body.name")},{id:"q20",skillId:"sql",title:"Join Two Tables",xp:70,completed:!1,challenge:`Select the user's name and post title by joining "users" and "posts" on "users.id = posts.user_id".`,starterCode:`SELECT u.name, p.title
FROM users u
...`,solution:r=>r.toLowerCase().includes("join posts p on u.id = p.user_id")},{id:"boss-fullstack",skillId:"mastery-fullstack",title:"Final Boss: The Monolith",isBossFight:!0,xp:500,completed:!1,challenge:"This is the ultimate test. Write a conceptual plan in comments for a full MERN stack application (MongoDB, Express, React, Node.js) that has user authentication.",starterCode:`// 1. Backend (Node/Express): User model, auth routes (register/login), JWT generation.
// 2. React Frontend: ...`,solution:r=>r.toLowerCase().includes("react")&&r.toLowerCase().includes("express")&&r.toLowerCase().includes("mongodb")&&r.toLowerCase().includes("jwt")&&r.toLowerCase().includes("route")}],k0={1:HN,2:FN,3:GN},KN=[{id:"async",title:"Grimoire of Asynchronicity",description:"Unravel the mysteries of Promises, async/await, and the event loop.",content:[{type:"h3",text:"The Event Loop"},{type:"p",text:"JavaScript has a single-threaded concurrency model, meaning it can only do one thing at a time. The Event Loop is what allows JavaScript to perform non-blocking operations. When an async operation (like a fetch request) is initiated, it's handed off to the browser. Once it completes, it places a message in a queue, and the Event Loop picks it up when the main thread is free."},{type:"h3",text:"Promises"},{type:"p",text:"A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected."},{type:"code",text:`const myPromise = new Promise((resolve, reject) => {
  // Async operation here
  if (/* success */) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise.then(result => ...).catch(error => ...);`},{type:"h3",text:"Async/Await"},{type:"p",text:"Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. This makes it much easier to read and write."},{type:"code",text:`async function getData() {
  try {
    const response = await fetch('...');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`}]},{id:"flexbox",title:"The Flexbox Codex",description:"Master the ancient art of aligning items in one dimension.",content:[{type:"h3",text:"The Container"},{type:"p",text:"To start using Flexbox, you need a container element. The magic begins when you set its display property to `flex` or `inline-flex`."},{type:"code",text:`.container {
  display: flex;
}`},{type:"h3",text:"Main Axis & Cross Axis"},{type:"p",text:"`justify-content` aligns items along the main axis (horizontally by default), while `align-items` aligns them along the cross axis (vertically by default)."},{type:"code",text:`.container {
  display: flex;
  justify-content: center; /* Main axis */
  align-items: center;    /* Cross axis */
}`}]},{id:"dom",title:"Scroll of the DOM",description:"Learn to manipulate the very structure of the web page itself.",content:[{type:"h3",text:"What is the DOM?"},{type:"p",text:"The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page."},{type:"h3",text:"Selecting Elements"},{type:"p",text:"You can select elements to manipulate using various methods:"},{type:"code",text:`// Select by ID
const title = document.getElementById('main-title');

// Select by class name (returns a collection)
const buttons = document.getElementsByClassName('cta-button');

// The modern way: CSS selectors
const firstButton = document.querySelector('.cta-button');
const allButtons = document.querySelectorAll('.cta-button');`}]},{id:"hooks",title:"React Hooks Runic Circle",description:"Channel the power of state and effects in functional components.",content:[{type:"h3",text:"useState"},{type:"p",text:"The `useState` hook is the most common hook. It lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it."},{type:"code",text:"const [count, setCount] = useState(0);"},{type:"h3",text:"useEffect"},{type:"p",text:"The `useEffect` hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. It runs after every render by default, but you can control when it runs by passing a dependency array."},{type:"code",text:"useEffect(() => {\n  // Runs after every render\n  document.title = `You clicked ${count} times`;\n}, [count]); // Only re-run if count changes"}]}];function YN(){const[r,e]=Ve.useState(QN),[n,s]=Ve.useState(M0),[o,u]=Ve.useState(null),[f,m]=Ve.useState("quests"),[g,y]=Ve.useState(null),[T,w]=Ve.useState(null),[I,q]=Ve.useState({}),[$,ie]=Ve.useState(null),[J,Te]=Ve.useState(rm[0].url),[me,fe]=Ve.useState(1),[De,be]=Ve.useState("Novice"),[Ce,O]=Ve.useState(!1),[A,C]=Ve.useState(null),[N,M]=Ve.useState(null);Ve.useEffect(()=>{let oe=()=>{};const R=eR(Mc,F=>{if(F){ie(F),O(!1);const ee=Tl(bl,"users",F.uid);oe=QD(ee,Z=>{if(Z.exists()){const se=Z.data();q(se),Te(se.avatarUrl),fe(se.mascotStage),s(le=>le.map(de=>({...de,completed:se.completedQuests.includes(de.id)})))}})}else ie(null),O(!0),oe&&oe()});return()=>{R(),oe()}},[]),Ve.useEffect(()=>{const oe=r.filter(le=>le.status==="completed"),R=new Set(oe.map(le=>le.category));let F="Novice";R.has("mastery")?F="Grandmaster":R.has("logic")&&R.has("backend")?F="Full-Stack Paladin":R.has("logic")?F="Code Sorcerer":R.has("styling")?F="UI Artisan":R.has("backend")&&(F="Data Engineer"),be(F);const ee=new Set(oe.map(le=>le.id));let Z=!1;const se=r.map(le=>{if(le.status==="completed")return le;const ct=le.dependencies.every(Ke=>ee.has(Ke))?"available":"locked";return le.status!==ct&&(Z=!0),{...le,status:ct}});Z&&e(se)},[r]),Ve.useEffect(()=>{const oe="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>",R=document.querySelector("link[rel*='icon']")||document.createElement("link");R.type="image/svg+xml",R.rel="shortcut icon",R.href=oe,document.getElementsByTagName("head")[0].appendChild(R)},[]);const P=async(oe,R)=>{try{const ee=(await $S(Mc,oe,R)).user;await GD(Tl(bl,"users",ee.uid),{level:1,currentXp:0,nextLevelXp:100,avatarUrl:rm[0].url,completedQuests:[],mascotStage:1})}catch(F){alert(F.message)}},x=async(oe,R)=>{try{await ZS(Mc,oe,R)}catch(F){alert(F.message)}},Tt=async()=>{try{await tR(Mc)}catch(oe){alert(oe.message)}},tt=Ve.useCallback(async oe=>{if(!$||!I.completedQuests||I.completedQuests.includes(oe))return;const R=Tl(bl,"users",$.uid),F=M0.find(de=>de.id===oe);if(!F)return;const ee=[...I.completedQuests,oe];let Z=I.currentXp+F.xp,se=I.level,le=I.nextLevelXp;if(Z>=le){const de=I.level;Z-=le,se+=1,le=Math.floor(le*1.5),setTimeout(()=>C({newLevel:se,oldLevel:de}),100)}await nm(R,{completedQuests:ee,currentXp:Z,level:se,nextLevelXp:le})},[$,I]),G=async()=>{if(!A||!$)return;const{oldLevel:oe,newLevel:R}=A;C(null);const F={2:5,3:10};for(const ee in F)if(oe<F[ee]&&R>=F[ee]){const Z=Number(ee);fe(Z),setTimeout(()=>M({newStage:Z}),100);const se=Tl(bl,"users",$.uid);await nm(se,{mascotStage:Z});break}},ne=async oe=>{if(!$)return;Te(oe);const R=Tl(bl,"users",$.uid);await nm(R,{avatarUrl:oe})},ue=o?n.filter(oe=>oe.skillId===o.id):[];return k.jsxs("div",{className:"bg-sky-night min-h-screen text-white/90 font-poppins p-2 sm:p-4 relative overflow-hidden",style:{width:"100vw"},children:[k.jsx("div",{id:"stars"}),k.jsx("div",{id:"stars2"}),k.jsx("div",{id:"stars3"}),k.jsx("div",{className:"absolute inset-0 bg-radial-vignette pointer-events-none"}),k.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"}),k.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        .font-cinzel { font-family: 'Cinzel Decorative', cursive; }
        .bg-sky-night { background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); }
        .bg-parchment-dark { background-color: #2a241c; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 20px 20px; }
        .bg-boss-lair { background-color: #2d1a1a; background-image: linear-gradient(rgba(255,100,100,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,100,100,0.05) 1px, transparent 1px); background-size: 25px 25px; }
        .bg-radial-vignette { background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%); }
        @keyframes move-twink-back { from {background-position:0 0;} to {background-position:-10000px 5000px;} }
        #stars, #stars2, #stars3 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; display: block; z-index: 0; }
        #stars { background: transparent url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center; animation: move-twink-back 200s linear infinite; }
        #stars2 { background: transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center; animation: move-twink-back 150s linear infinite; }
        #stars3 { background: transparent url(https://www.script-tutorials.com/demos/360/images/clouds.png) repeat top center; animation: move-twink-back 100s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; } .animate-shake { animation: shake 0.5s ease-in-out; } .animate-pulse-fast { animation: pulse 1s infinite; } .animate-spin-slow { animation: spin 10s linear infinite; } .animate-float { animation: float 6s ease-in-out infinite; } .animate-wing-flap { animation: wingFlap 1s ease-in-out infinite alternate; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); } 20%, 40%, 60%, 80% { transform: translateX(5px); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { translateY(0px); } }
        @keyframes wingFlap { from { transform: scale(1); } to { transform: scale(1.05); } }
      `}),Ce&&k.jsx(LN,{onClose:()=>O(!1),onSignUp:P,onLogin:x}),g&&k.jsx(jN,{quest:g,onClose:()=>y(null),onComplete:tt}),A&&k.jsx(zN,{newLevel:A.newLevel,onClose:G}),N&&k.jsx(BN,{newStage:N.newStage,onClose:()=>M(null),mascotGifs:k0}),T&&k.jsx(qN,{guide:T,onClose:()=>w(null)}),k.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[$&&k.jsx(CN,{userAvatar:J,onNavClick:m,activePage:f}),k.jsx("main",{children:$?k.jsxs(k.Fragment,{children:[f==="quests"&&k.jsx(VN,{skills:r,selectedSkill:o,onSelectSkill:u,quests:ue,onStartQuest:y,mascotStage:me,mascotGifs:k0}),f==="guides"&&k.jsx(PN,{onOpenGuide:w,guides:KN}),f==="character"&&k.jsx(UN,{user:I,userClass:De,avatars:rm,selectedAvatar:J,onAvatarSelect:ne,onLogout:Tt})]}):!Ce&&k.jsxs("div",{className:"text-center mt-20 p-4",children:[k.jsx("h2",{className:"text-3xl font-cinzel text-amber-300",children:"Aguardando um Herói..."}),k.jsx("p",{className:"text-amber-100/80 mt-2",children:"Carregando o reino ou aguardando autenticação..."})]})})]})]})}f1.createRoot(document.getElementById("root")).render(k.jsx(Ve.StrictMode,{children:k.jsx(YN,{})}));
