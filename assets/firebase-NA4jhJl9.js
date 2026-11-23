const Vo=()=>{};var sr={};/**
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
 */const Zr=function(i){const t=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},jo=function(i){const t=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)t[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];t[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],l=i[n++],p=i[n++],w=((a&7)<<18|(c&63)<<12|(l&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(w>>10)),t[s++]=String.fromCharCode(56320+(w&1023))}else{const c=i[n++],l=i[n++];t[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|l&63)}}return t.join("")},ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],l=a+1<i.length,p=l?i[a+1]:0,w=a+2<i.length,T=w?i[a+2]:0,E=c>>2,P=(c&3)<<4|p>>4;let b=(p&15)<<2|T>>6,U=T&63;w||(U=64,l||(b=64)),s.push(n[E],n[P],n[b],n[U])}return s.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Zr(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):jo(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],p=a<i.length?n[i.charAt(a)]:0;++a;const T=a<i.length?n[i.charAt(a)]:64;++a;const P=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||p==null||T==null||P==null)throw new Bo;const b=c<<2|p>>4;if(s.push(b),T!==64){const U=p<<4&240|T>>2;if(s.push(U),P!==64){const R=T<<6&192|P;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Bo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $o=function(i){const t=Zr(i);return ts.encodeByteArray(t,!0)},es=function(i){return $o(i).replace(/\./g,"")},ns=function(i){try{return ts.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ho(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Go=()=>Ho().__FIREBASE_DEFAULTS__,qo=()=>{if(typeof process>"u"||typeof sr>"u")return;const i=sr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Wo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&ns(i[1]);return t&&JSON.parse(t)},zo=()=>{try{return Vo()||Go()||qo()||Wo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ko=i=>{var t;return(t=zo())===null||t===void 0?void 0:t[`_${i}`]};/**
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
 */function is(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Xo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rs(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Yo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ss(){try{return typeof indexedDB=="object"}catch{return!1}}function os(){return new Promise((i,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;t(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){t(n)}})}function Qo(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Zo="FirebaseError";class pt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Zo,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bt.prototype.create)}}class Bt{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},a=`${this.service}/${t}`,c=this.errors[t],l=c?ta(c,s):"Error",p=`${this.serviceName}: ${l} (${a}).`;return new pt(a,p,s)}}function ta(i,t){return i.replace(ea,(n,s)=>{const a=t[s];return a!=null?String(a):`<${s}?>`})}const ea=/\{\$([^}]+)}/g;/**
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
 */function as(i){const t=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function na(i,t){const n=new ia(i,t);return n.subscribe.bind(n)}class ia{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let a;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ra(t,["next","error","complete"])?a=t:a={next:t,error:n,complete:s},a.next===void 0&&(a.next=On),a.error===void 0&&(a.error=On),a.complete===void 0&&(a.complete=On);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ra(i,t){if(typeof i!="object"||i===null)return!1;for(const n of t)if(n in i&&typeof i[n]=="function")return!0;return!1}function On(){}/**
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
 */const sa=1e3,oa=2,aa=4*60*60*1e3,ha=.5;function or(i,t=sa,n=oa){const s=t*Math.pow(n,i),a=Math.round(ha*s*(Math.random()-.5)*2);return Math.min(aa,s+a)}/**
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
 */function we(i){return i&&i._delegate?i._delegate:i}class ft{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var D;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(D||(D={}));const ca={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},la=D.INFO,ua={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},fa=(i,t,...n)=>{if(t<i.logLevel)return;const s=new Date().toISOString(),a=ua[t];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ze{constructor(t){this.name=t,this._logLevel=la,this._logHandler=fa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ca[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const da=(i,t)=>t.some(n=>i instanceof n);let ar,hr;function pa(){return ar||(ar=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ga(){return hr||(hr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hs=new WeakMap,Hn=new WeakMap,cs=new WeakMap,Dn=new WeakMap,Jn=new WeakMap;function ma(i){const t=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(bt(i.result)),a()},l=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&hs.set(n,i)}).catch(()=>{}),Jn.set(t,i),t}function ya(i){if(Hn.has(i))return;const t=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),a()},l=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});Hn.set(i,t)}let Gn={get(i,t,n){if(i instanceof IDBTransaction){if(t==="done")return Hn.get(i);if(t==="objectStoreNames")return i.objectStoreNames||cs.get(i);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(i[t])},set(i,t,n){return i[t]=n,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function _a(i){Gn=i(Gn)}function va(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=i.call(Ln(this),t,...n);return cs.set(s,t.sort?t.sort():[t]),bt(s)}:ga().includes(i)?function(...t){return i.apply(Ln(this),t),bt(hs.get(this))}:function(...t){return bt(i.apply(Ln(this),t))}}function wa(i){return typeof i=="function"?va(i):(i instanceof IDBTransaction&&ya(i),da(i,pa())?new Proxy(i,Gn):i)}function bt(i){if(i instanceof IDBRequest)return ma(i);if(Dn.has(i))return Dn.get(i);const t=wa(i);return t!==i&&(Dn.set(i,t),Jn.set(t,i)),t}const Ln=i=>Jn.get(i);function ls(i,t,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const l=indexedDB.open(i,t),p=bt(l);return s&&l.addEventListener("upgradeneeded",w=>{s(bt(l.result),w.oldVersion,w.newVersion,bt(l.transaction),w)}),n&&l.addEventListener("blocked",w=>n(w.oldVersion,w.newVersion,w)),p.then(w=>{c&&w.addEventListener("close",()=>c()),a&&w.addEventListener("versionchange",T=>a(T.oldVersion,T.newVersion,T))}).catch(()=>{}),p}const Ia=["get","getKey","getAll","getAllKeys","count"],Ta=["put","add","delete","clear"],Mn=new Map;function cr(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Mn.get(t))return Mn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,a=Ta.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ia.includes(n)))return;const c=async function(l,...p){const w=this.transaction(l,a?"readwrite":"readonly");let T=w.store;return s&&(T=T.index(p.shift())),(await Promise.all([T[n](...p),a&&w.done]))[0]};return Mn.set(t,c),c}_a(i=>({...i,get:(t,n,s)=>cr(t,n)||i.get(t,n,s),has:(t,n)=>!!cr(t,n)||i.has(t,n)}));/**
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
 */class Aa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ea(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ea(i){const t=i.getComponent();return t?.type==="VERSION"}const qn="@firebase/app",lr="0.13.2";/**
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
 */const wt=new Ze("@firebase/app"),Sa="@firebase/app-compat",ba="@firebase/analytics-compat",Ca="@firebase/analytics",Pa="@firebase/app-check-compat",Ra="@firebase/app-check",Na="@firebase/auth",ka="@firebase/auth-compat",Oa="@firebase/database",Da="@firebase/data-connect",La="@firebase/database-compat",Ma="@firebase/functions",Ua="@firebase/functions-compat",xa="@firebase/installations",Fa="@firebase/installations-compat",Va="@firebase/messaging",ja="@firebase/messaging-compat",Ba="@firebase/performance",$a="@firebase/performance-compat",Ha="@firebase/remote-config",Ga="@firebase/remote-config-compat",qa="@firebase/storage",Wa="@firebase/storage-compat",za="@firebase/firestore",Ka="@firebase/ai",Ja="@firebase/firestore-compat",Xa="firebase",Ya="11.10.0",Qa={[qn]:"fire-core",[Sa]:"fire-core-compat",[Ca]:"fire-analytics",[ba]:"fire-analytics-compat",[Ra]:"fire-app-check",[Pa]:"fire-app-check-compat",[Na]:"fire-auth",[ka]:"fire-auth-compat",[Oa]:"fire-rtdb",[Da]:"fire-data-connect",[La]:"fire-rtdb-compat",[Ma]:"fire-fn",[Ua]:"fire-fn-compat",[xa]:"fire-iid",[Fa]:"fire-iid-compat",[Va]:"fire-fcm",[ja]:"fire-fcm-compat",[Ba]:"fire-perf",[$a]:"fire-perf-compat",[Ha]:"fire-rc",[Ga]:"fire-rc-compat",[qa]:"fire-gcs",[Wa]:"fire-gcs-compat",[za]:"fire-fst",[Ja]:"fire-fst-compat",[Ka]:"fire-vertex","fire-js":"fire-js",[Xa]:"fire-js-all"};/**
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
 */const Za=new Map,th=new Map,ur=new Map;function fr(i,t){try{i.container.addComponent(t)}catch(n){wt.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,n)}}function dt(i){const t=i.name;if(ur.has(t))return wt.debug(`There were multiple attempts to register component ${t}.`),!1;ur.set(t,i);for(const n of Za.values())fr(n,i);for(const n of th.values())fr(n,i);return!0}function us(i,t){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(t)}function kt(i){return i==null?!1:i.settings!==void 0}/**
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
 */const eh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new Bt("app","Firebase",eh);/**
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
 */const tn=Ya;function tt(i,t,n){var s;let a=(s=Qa[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),l=t.match(/\s|\//);if(c||l){const p=[`Unable to register library "${a}" with version "${t}":`];c&&p.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&l&&p.push("and"),l&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wt.warn(p.join(" "));return}dt(new ft(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
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
 */const nh="firebase-heartbeat-database",ih=1,ve="firebase-heartbeat-store";let Un=null;function fs(){return Un||(Un=ls(nh,ih,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(ve)}catch(n){console.warn(n)}}}}).catch(i=>{throw Xn.create("idb-open",{originalErrorMessage:i.message})})),Un}async function rh(i){try{const n=(await fs()).transaction(ve),s=await n.objectStore(ve).get(ds(i));return await n.done,s}catch(t){if(t instanceof pt)wt.warn(t.message);else{const n=Xn.create("idb-get",{originalErrorMessage:t?.message});wt.warn(n.message)}}}async function dr(i,t){try{const s=(await fs()).transaction(ve,"readwrite");await s.objectStore(ve).put(t,ds(i)),await s.done}catch(n){if(n instanceof pt)wt.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n?.message});wt.warn(s.message)}}}function ds(i){return`${i.name}!${i.options.appId}`}/**
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
 */const sh=1024,oh=30;class ah{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ch(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=pr();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>oh){const l=lh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pr(),{heartbeatsToSend:s,unsentEntries:a}=hh(this._heartbeatsCache.heartbeats),c=es(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return wt.warn(n),""}}}function pr(){return new Date().toISOString().substring(0,10)}function hh(i,t=sh){const n=[];let s=i.slice();for(const a of i){const c=n.find(l=>l.agent===a.agent);if(c){if(c.dates.push(a.date),gr(n)>t){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),gr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ch{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ss()?os().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rh(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return dr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return dr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function gr(i){return es(JSON.stringify({version:2,heartbeats:i})).length}function lh(i){if(i.length===0)return-1;let t=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,t=s);return t}/**
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
 */function uh(i){dt(new ft("platform-logger",t=>new Aa(t),"PRIVATE")),dt(new ft("heartbeat",t=>new ah(t),"PRIVATE")),tt(qn,lr,i),tt(qn,lr,"esm2017"),tt("fire-js","")}uh("");var fh="firebase",dh="11.10.0";/**
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
 */tt(fh,dh,"app");function ps(i,t){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&t.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function gs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ph=gs,ms=new Bt("auth","Firebase",gs());/**
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
 */const qe=new Ze("@firebase/auth");function gh(i,...t){qe.logLevel<=D.WARN&&qe.warn(`Auth (${tn}): ${i}`,...t)}function $e(i,...t){qe.logLevel<=D.ERROR&&qe.error(`Auth (${tn}): ${i}`,...t)}/**
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
 */function mr(i,...t){throw Yn(i,...t)}function ys(i,...t){return Yn(i,...t)}function _s(i,t,n){const s=Object.assign(Object.assign({},ph()),{[t]:n});return new Bt("auth","Firebase",s).create(t,{appName:i.name})}function He(i){return _s(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yn(i,...t){if(typeof i!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ms.create(i,...t)}function N(i,t,...n){if(!i)throw Yn(t,...n)}function de(i){const t="INTERNAL ASSERTION FAILED: "+i;throw $e(t),new Error(t)}function We(i,t){i||de(t)}function mh(){return yr()==="http:"||yr()==="https:"}function yr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function yh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mh()||rs()||"connection"in navigator)?navigator.onLine:!0}function _h(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ie{constructor(t,n){this.shortDelay=t,this.longDelay=n,We(n>t,"Short delay should be less than long delay!"),this.isMobile=Jo()||Yo()}get(){return yh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vh(i,t){We(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class vs{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ih=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Th=new Ie(3e4,6e4);function ws(i,t){return i.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:i.tenantId}):t}async function en(i,t,n,s,a={}){return Is(i,a,async()=>{let c={},l={};s&&(t==="GET"?l=s:c={body:JSON.stringify(s)});const p=as(Object.assign({key:i.config.apiKey},l)).slice(1),w=await i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const T=Object.assign({method:t,headers:w},c);return Xo()||(T.referrerPolicy="no-referrer"),i.emulatorConfig&&is(i.emulatorConfig.host)&&(T.credentials="include"),vs.fetch()(await Ts(i,i.config.apiHost,n,p),T)})}async function Is(i,t,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},wh),t);try{const a=new Ah(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw Ve(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const p=c.ok?l.errorMessage:l.error.message,[w,T]=p.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ve(i,"credential-already-in-use",l);if(w==="EMAIL_EXISTS")throw Ve(i,"email-already-in-use",l);if(w==="USER_DISABLED")throw Ve(i,"user-disabled",l);const E=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw _s(i,E,T);mr(i,E)}}catch(a){if(a instanceof pt)throw a;mr(i,"network-request-failed",{message:String(a)})}}async function Ts(i,t,n,s){const a=`${t}${n}?${s}`,c=i,l=c.config.emulator?vh(i.config,a):`${i.config.apiScheme}://${a}`;return Ih.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class Ah{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ys(this.auth,"network-request-failed")),Th.get())})}}function Ve(i,t,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=ys(i,t,s);return a.customData._tokenResponse=n,a}/**
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
 */async function Eh(i,t){return en(i,"POST","/v1/accounts:delete",t)}async function ze(i,t){return en(i,"POST","/v1/accounts:lookup",t)}/**
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
 */function pe(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Sh(i,t=!1){const n=we(i),s=await n.getIdToken(t),a=As(s);N(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,l=c?.sign_in_provider;return{claims:a,token:s,authTime:pe(xn(a.auth_time)),issuedAtTime:pe(xn(a.iat)),expirationTime:pe(xn(a.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function xn(i){return Number(i)*1e3}function As(i){const[t,n,s]=i.split(".");if(t===void 0||n===void 0||s===void 0)return $e("JWT malformed, contained fewer than 3 sections"),null;try{const a=ns(n);return a?JSON.parse(a):($e("Failed to decode base64 JWT payload"),null)}catch(a){return $e("Caught error parsing JWT payload as JSON",a?.toString()),null}}function _r(i){const t=As(i);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Wn(i,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof pt&&bh(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function bh({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Ch{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zn{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pe(this.lastLoginAt),this.creationTime=pe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ke(i){var t;const n=i.auth,s=await i.getIdToken(),a=await Wn(i,ze(n,{idToken:s}));N(a?.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const l=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Es(c.providerUserInfo):[],p=Rh(i.providerData,l),w=i.isAnonymous,T=!(i.email&&c.passwordHash)&&!p?.length,E=w?T:!1,P={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new zn(c.createdAt,c.lastLoginAt),isAnonymous:E};Object.assign(i,P)}async function Ph(i){const t=we(i);await Ke(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rh(i,t){return[...i.filter(s=>!t.some(a=>a.providerId===s.providerId)),...t]}function Es(i){return i.map(t=>{var{providerId:n}=t,s=ps(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Nh(i,t){const n=await Is(i,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,l=await Ts(i,a,"/v1/token",`key=${c}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:p,body:s};return i.emulatorConfig&&is(i.emulatorConfig.host)&&(w.credentials="include"),vs.fetch()(l,w)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kh(i,t){return en(i,"POST","/v2/accounts:revokeToken",ws(i,t))}/**
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
 */class zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_r(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){N(t.length!==0,"internal-error");const n=_r(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await Nh(t,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,l=new zt;return s&&(N(typeof s=="string","internal-error",{appName:t}),l.refreshToken=s),a&&(N(typeof a=="string","internal-error",{appName:t}),l.accessToken=a),c&&(N(typeof c=="number","internal-error",{appName:t}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zt,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
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
 */function St(i,t){N(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class ct{constructor(t){var{uid:n,auth:s,stsTokenManager:a}=t,c=ps(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ch(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new zn(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Sh(this,t)}reload(){return Ph(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Ke(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(He(this.auth));const t=await this.getIdToken();return await Wn(this,Eh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,a,c,l,p,w,T,E;const P=(s=n.displayName)!==null&&s!==void 0?s:void 0,b=(a=n.email)!==null&&a!==void 0?a:void 0,U=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,j=(p=n.tenantId)!==null&&p!==void 0?p:void 0,x=(w=n._redirectEventId)!==null&&w!==void 0?w:void 0,gt=(T=n.createdAt)!==null&&T!==void 0?T:void 0,Y=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:$,emailVerified:nt,isAnonymous:Ct,providerData:J,stsTokenManager:y}=n;N($&&y,t,"internal-error");const u=zt.fromJSON(this.name,y);N(typeof $=="string",t,"internal-error"),St(P,t.name),St(b,t.name),N(typeof nt=="boolean",t,"internal-error"),N(typeof Ct=="boolean",t,"internal-error"),St(U,t.name),St(R,t.name),St(j,t.name),St(x,t.name),St(gt,t.name),St(Y,t.name);const d=new ct({uid:$,auth:t,email:b,emailVerified:nt,displayName:P,isAnonymous:Ct,photoURL:R,phoneNumber:U,tenantId:j,stsTokenManager:u,createdAt:gt,lastLoginAt:Y});return J&&Array.isArray(J)&&(d.providerData=J.map(g=>Object.assign({},g))),x&&(d._redirectEventId=x),d}static async _fromIdTokenResponse(t,n,s=!1){const a=new zt;a.updateFromServerResponse(n);const c=new ct({uid:n.localId,auth:t,stsTokenManager:a,isAnonymous:s});return await Ke(c),c}static async _fromGetAccountInfoResponse(t,n,s){const a=n.users[0];N(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Es(a.providerUserInfo):[],l=!(a.email&&a.passwordHash)&&!c?.length,p=new zt;p.updateFromIdToken(s);const w=new ct({uid:a.localId,auth:t,stsTokenManager:p,isAnonymous:l}),T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new zn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!c?.length};return Object.assign(w,T),w}}/**
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
 */const vr=new Map;function Dt(i){We(i instanceof Function,"Expected a class definition");let t=vr.get(i);return t?(We(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,vr.set(i,t),t)}/**
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
 */class Ss{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ss.type="NONE";const wr=Ss;/**
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
 */function Fn(i,t,n){return`firebase:${i}:${t}:${n}`}class Kt{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=Fn(this.userKey,a.apiKey,c),this.fullPersistenceKey=Fn("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ze(this.auth,{idToken:t}).catch(()=>{});return n?ct._fromGetAccountInfoResponse(this.auth,n,t):null}return ct._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Kt(Dt(wr),t,s);const a=(await Promise.all(n.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let c=a[0]||Dt(wr);const l=Fn(s,t.config.apiKey,t.name);let p=null;for(const T of n)try{const E=await T._get(l);if(E){let P;if(typeof E=="string"){const b=await ze(t,{idToken:E}).catch(()=>{});if(!b)break;P=await ct._fromGetAccountInfoResponse(t,b,E)}else P=ct._fromJSON(t,E);T!==c&&(p=P),c=T;break}}catch{}const w=a.filter(T=>T._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new Kt(c,t,s):(c=w[0],p&&await c._set(l,p.toJSON()),await Promise.all(n.map(async T=>{if(T!==c)try{await T._remove(l)}catch{}})),new Kt(c,t,s))}}/**
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
 */function Ir(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Oh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xh(t))return"Blackberry";if(Fh(t))return"Webos";if(Dh(t))return"Safari";if((t.includes("chrome/")||Lh(t))&&!t.includes("edge/"))return"Chrome";if(Uh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if(s?.length===2)return s[1]}return"Other"}function Oh(i=ut()){return/firefox\//i.test(i)}function Dh(i=ut()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lh(i=ut()){return/crios\//i.test(i)}function Mh(i=ut()){return/iemobile/i.test(i)}function Uh(i=ut()){return/android/i.test(i)}function xh(i=ut()){return/blackberry/i.test(i)}function Fh(i=ut()){return/webos/i.test(i)}/**
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
 */function bs(i,t=[]){let n;switch(i){case"Browser":n=Ir(ut());break;case"Worker":n=`${Ir(ut())}-${i}`;break;default:n=i}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tn}/${s}`}/**
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
 */class Vh{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((l,p)=>{try{const w=t(c);l(w)}catch(w){p(w)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function jh(i,t={}){return en(i,"GET","/v2/passwordPolicy",ws(i,t))}/**
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
 */const Bh=6;class $h{constructor(t){var n,s,a,c;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Bh,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,a,c,l,p;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,w),this.validatePasswordCharacterOptions(t,w),w.isValid&&(w.isValid=(n=w.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),w.isValid&&(w.isValid=(s=w.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),w.isValid&&(w.isValid=(a=w.containsLowercaseLetter)!==null&&a!==void 0?a:!0),w.isValid&&(w.isValid=(c=w.containsUppercaseLetter)!==null&&c!==void 0?c:!0),w.isValid&&(w.isValid=(l=w.containsNumericCharacter)!==null&&l!==void 0?l:!0),w.isValid&&(w.isValid=(p=w.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),w}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),a&&(n.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<t.length;a++)s=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
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
 */class Hh{constructor(t,n,s,a){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tr(this),this.idTokenSubscription=new Tr(this),this.beforeStateQueue=new Vh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ms,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var s,a,c;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ze(this,{idToken:t}),s=await ct._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=a?._redirectEventId,w=await this.tryRedirectSignIn(t);(!l||l===p)&&w?.user&&(a=w.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(l){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ke(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_h()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kt(this.app))return Promise.reject(He(this));const n=t?we(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kt(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await jh(this),n=new $h(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Bt("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await kh(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Dt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(p,this,"internal-error"),p.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const w=t.addObserver(n,s,a);return()=>{l=!0,w()}}else{const w=t.addObserver(n);return()=>{l=!0,w()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var t;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&gh(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Gh(i){return we(i)}class Tr{constructor(t){this.auth=t,this.observer=null,this.addObserver=na(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qh(i,t){const n=t?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Dt);t?.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(s,t?.popupRedirectResolver)}new Ie(3e4,6e4);/**
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
 */new Ie(2e3,1e4);/**
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
 */new Ie(3e4,6e4);/**
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
 */new Ie(5e3,15e3);var Ar="@firebase/auth",Er="1.10.8";/**
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
 */class Wh{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zh(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kh(i){dt(new ft("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=s.options;N(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:l,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bs(i)},T=new Hh(s,a,c,w);return qh(T,n),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),dt(new ft("auth-internal",t=>{const n=Gh(t.getProvider("auth").getImmediate());return(s=>new Wh(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Ar,Er,zh(i)),tt(Ar,Er,"esm2017")}/**
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
 */const Jh=5*60;Ko("authIdTokenMaxAge");Kh("Browser");const Cs="@firebase/installations",Qn="0.6.18";/**
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
 */const Ps=1e4,Rs=`w:${Qn}`,Ns="FIS_v2",Xh="https://firebaseinstallations.googleapis.com/v1",Yh=60*60*1e3,Qh="installations",Zh="Installations";/**
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
 */const tc={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new Bt(Qh,Zh,tc);function ks(i){return i instanceof pt&&i.code.includes("request-failed")}/**
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
 */function Os({projectId:i}){return`${Xh}/projects/${i}/installations`}function Ds(i){return{token:i.token,requestStatus:2,expiresIn:nc(i.expiresIn),creationTime:Date.now()}}async function Ls(i,t){const s=(await t.json()).error;return Ft.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ms({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function ec(i,{refreshToken:t}){const n=Ms(i);return n.append("Authorization",ic(t)),n}async function Us(i){const t=await i();return t.status>=500&&t.status<600?i():t}function nc(i){return Number(i.replace("s","000"))}function ic(i){return`${Ns} ${i}`}/**
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
 */async function rc({appConfig:i,heartbeatServiceProvider:t},{fid:n}){const s=Os(i),a=Ms(i),c=t.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&a.append("x-firebase-client",T)}const l={fid:n,authVersion:Ns,appId:i.appId,sdkVersion:Rs},p={method:"POST",headers:a,body:JSON.stringify(l)},w=await Us(()=>fetch(s,p));if(w.ok){const T=await w.json();return{fid:T.fid||n,registrationStatus:2,refreshToken:T.refreshToken,authToken:Ds(T.authToken)}}else throw await Ls("Create Installation",w)}/**
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
 */function xs(i){return new Promise(t=>{setTimeout(t,i)})}/**
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
 */function sc(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oc=/^[cdef][\w-]{21}$/,Kn="";function ac(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=hc(i);return oc.test(n)?n:Kn}catch{return Kn}}function hc(i){return sc(i).substr(0,22)}/**
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
 */function nn(i){return`${i.appName}!${i.appId}`}/**
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
 */const Fs=new Map;function Vs(i,t){const n=nn(i);js(n,t),cc(n,t)}function js(i,t){const n=Fs.get(i);if(n)for(const s of n)s(t)}function cc(i,t){const n=lc();n&&n.postMessage({key:i,fid:t}),uc()}let Lt=null;function lc(){return!Lt&&"BroadcastChannel"in self&&(Lt=new BroadcastChannel("[Firebase] FID Change"),Lt.onmessage=i=>{js(i.data.key,i.data.fid)}),Lt}function uc(){Fs.size===0&&Lt&&(Lt.close(),Lt=null)}/**
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
 */const fc="firebase-installations-database",dc=1,Vt="firebase-installations-store";let Vn=null;function Zn(){return Vn||(Vn=ls(fc,dc,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(Vt)}}})),Vn}async function Je(i,t){const n=nn(i),a=(await Zn()).transaction(Vt,"readwrite"),c=a.objectStore(Vt),l=await c.get(n);return await c.put(t,n),await a.done,(!l||l.fid!==t.fid)&&Vs(i,t.fid),t}async function Bs(i){const t=nn(i),s=(await Zn()).transaction(Vt,"readwrite");await s.objectStore(Vt).delete(t),await s.done}async function rn(i,t){const n=nn(i),a=(await Zn()).transaction(Vt,"readwrite"),c=a.objectStore(Vt),l=await c.get(n),p=t(l);return p===void 0?await c.delete(n):await c.put(p,n),await a.done,p&&(!l||l.fid!==p.fid)&&Vs(i,p.fid),p}/**
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
 */async function ti(i){let t;const n=await rn(i.appConfig,s=>{const a=pc(s),c=gc(i,a);return t=c.registrationPromise,c.installationEntry});return n.fid===Kn?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pc(i){const t=i||{fid:ac(),registrationStatus:0};return $s(t)}function gc(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Ft.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=mc(i,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yc(i)}:{installationEntry:t}}async function mc(i,t){try{const n=await rc(i,t);return Je(i.appConfig,n)}catch(n){throw ks(n)&&n.customData.serverCode===409?await Bs(i.appConfig):await Je(i.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yc(i){let t=await Sr(i.appConfig);for(;t.registrationStatus===1;)await xs(100),t=await Sr(i.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ti(i);return s||n}return t}function Sr(i){return rn(i,t=>{if(!t)throw Ft.create("installation-not-found");return $s(t)})}function $s(i){return _c(i)?{fid:i.fid,registrationStatus:0}:i}function _c(i){return i.registrationStatus===1&&i.registrationTime+Ps<Date.now()}/**
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
 */async function vc({appConfig:i,heartbeatServiceProvider:t},n){const s=wc(i,n),a=ec(i,n),c=t.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&a.append("x-firebase-client",T)}const l={installation:{sdkVersion:Rs,appId:i.appId}},p={method:"POST",headers:a,body:JSON.stringify(l)},w=await Us(()=>fetch(s,p));if(w.ok){const T=await w.json();return Ds(T)}else throw await Ls("Generate Auth Token",w)}function wc(i,{fid:t}){return`${Os(i)}/${t}/authTokens:generate`}/**
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
 */async function ei(i,t=!1){let n;const s=await rn(i.appConfig,c=>{if(!Hs(c))throw Ft.create("not-registered");const l=c.authToken;if(!t&&Ac(l))return c;if(l.requestStatus===1)return n=Ic(i,t),c;{if(!navigator.onLine)throw Ft.create("app-offline");const p=Sc(c);return n=Tc(i,p),p}});return n?await n:s.authToken}async function Ic(i,t){let n=await br(i.appConfig);for(;n.authToken.requestStatus===1;)await xs(100),n=await br(i.appConfig);const s=n.authToken;return s.requestStatus===0?ei(i,t):s}function br(i){return rn(i,t=>{if(!Hs(t))throw Ft.create("not-registered");const n=t.authToken;return bc(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tc(i,t){try{const n=await vc(i,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Je(i.appConfig,s),n}catch(n){if(ks(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Bs(i.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Je(i.appConfig,s)}throw n}}function Hs(i){return i!==void 0&&i.registrationStatus===2}function Ac(i){return i.requestStatus===2&&!Ec(i)}function Ec(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+Yh}function Sc(i){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:t})}function bc(i){return i.requestStatus===1&&i.requestTime+Ps<Date.now()}/**
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
 */async function Cc(i){const t=i,{installationEntry:n,registrationPromise:s}=await ti(t);return s?s.catch(console.error):ei(t).catch(console.error),n.fid}/**
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
 */async function Pc(i,t=!1){const n=i;return await Rc(n),(await ei(n,t)).token}async function Rc(i){const{registrationPromise:t}=await ti(i);t&&await t}/**
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
 */function Nc(i){if(!i||!i.options)throw jn("App Configuration");if(!i.name)throw jn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!i.options[n])throw jn(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function jn(i){return Ft.create("missing-app-config-values",{valueName:i})}/**
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
 */const Gs="installations",kc="installations-internal",Oc=i=>{const t=i.getProvider("app").getImmediate(),n=Nc(t),s=us(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Dc=i=>{const t=i.getProvider("app").getImmediate(),n=us(t,Gs).getImmediate();return{getId:()=>Cc(n),getToken:a=>Pc(n,a)}};function Lc(){dt(new ft(Gs,Oc,"PUBLIC")),dt(new ft(kc,Dc,"PRIVATE"))}Lc();tt(Cs,Qn);tt(Cs,Qn,"esm2017");/**
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
 */const Cr="analytics",Mc="firebase_id",Uc="origin",xc=60*1e3,Fc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ni="https://www.googletagmanager.com/gtag/js";/**
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
 */const X=new Ze("@firebase/analytics");/**
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
 */const Vc={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new Bt("analytics","Analytics",Vc);/**
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
 */function jc(i){if(!i.startsWith(ni)){const t=et.create("invalid-gtag-resource",{gtagURL:i});return X.warn(t.message),""}return i}function qs(i){return Promise.all(i.map(t=>t.catch(n=>n)))}function Bc(i,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,t)),n}function $c(i,t){const n=Bc("firebase-js-sdk-policy",{createScriptURL:jc}),s=document.createElement("script"),a=`${ni}?l=${i}&id=${t}`;s.src=n?n?.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function Hc(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function Gc(i,t,n,s,a,c){const l=s[a];try{if(l)await t[l];else{const w=(await qs(n)).find(T=>T.measurementId===a);w&&await t[w.appId]}}catch(p){X.error(p)}i("config",a,c)}async function qc(i,t,n,s,a){try{let c=[];if(a&&a.send_to){let l=a.send_to;Array.isArray(l)||(l=[l]);const p=await qs(n);for(const w of l){const T=p.find(P=>P.measurementId===w),E=T&&t[T.appId];if(E)c.push(E);else{c=[];break}}}c.length===0&&(c=Object.values(t)),await Promise.all(c),i("event",s,a||{})}catch(c){X.error(c)}}function Wc(i,t,n,s){async function a(c,...l){try{if(c==="event"){const[p,w]=l;await qc(i,t,n,p,w)}else if(c==="config"){const[p,w]=l;await Gc(i,t,n,s,p,w)}else if(c==="consent"){const[p,w]=l;i("consent",p,w)}else if(c==="get"){const[p,w,T]=l;i("get",p,w,T)}else if(c==="set"){const[p]=l;i("set",p)}else i(c,...l)}catch(p){X.error(p)}}return a}function zc(i,t,n,s,a){let c=function(...l){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(c=window[a]),window[a]=Wc(c,i,t,n),{gtagCore:c,wrappedGtag:window[a]}}function Kc(i){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ni)&&n.src.includes(i))return n;return null}/**
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
 */const Jc=30,Xc=1e3;class Yc{constructor(t={},n=Xc){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ws=new Yc;function Qc(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function Zc(i){var t;const{appId:n,apiKey:s}=i,a={method:"GET",headers:Qc(s)},c=Fc.replace("{app-id}",n),l=await fetch(c,a);if(l.status!==200&&l.status!==304){let p="";try{const w=await l.json();!((t=w.error)===null||t===void 0)&&t.message&&(p=w.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:l.status,responseMessage:p})}return l.json()}async function tl(i,t=Ws,n){const{appId:s,apiKey:a,measurementId:c}=i.options;if(!s)throw et.create("no-app-id");if(!a){if(c)return{measurementId:c,appId:s};throw et.create("no-api-key")}const l=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new il;return setTimeout(async()=>{p.abort()},xc),zs({appId:s,apiKey:a,measurementId:c},l,p,t)}async function zs(i,{throttleEndTimeMillis:t,backoffCount:n},s,a=Ws){var c;const{appId:l,measurementId:p}=i;try{await el(s,t)}catch(w){if(p)return X.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${w?.message}]`),{appId:l,measurementId:p};throw w}try{const w=await Zc(i);return a.deleteThrottleMetadata(l),w}catch(w){const T=w;if(!nl(T)){if(a.deleteThrottleMetadata(l),p)return X.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${T?.message}]`),{appId:l,measurementId:p};throw w}const E=Number((c=T?.customData)===null||c===void 0?void 0:c.httpStatus)===503?or(n,a.intervalMillis,Jc):or(n,a.intervalMillis),P={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return a.setThrottleMetadata(l,P),X.debug(`Calling attemptFetch again in ${E} millis`),zs(i,P,s,a)}}function el(i,t){return new Promise((n,s)=>{const a=Math.max(t-Date.now(),0),c=setTimeout(n,a);i.addEventListener(()=>{clearTimeout(c),s(et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nl(i){if(!(i instanceof pt)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class il{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rl(i,t,n,s,a){if(a&&a.global){i("event",n,s);return}else{const c=await t,l=Object.assign(Object.assign({},s),{send_to:c});i("event",n,l)}}/**
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
 */async function sl(){if(ss())try{await os()}catch(i){return X.warn(et.create("indexeddb-unavailable",{errorInfo:i?.toString()}).message),!1}else return X.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ol(i,t,n,s,a,c,l){var p;const w=tl(i);w.then(U=>{n[U.measurementId]=U.appId,i.options.measurementId&&U.measurementId!==i.options.measurementId&&X.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${U.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(U=>X.error(U)),t.push(w);const T=sl().then(U=>{if(U)return s.getId()}),[E,P]=await Promise.all([w,T]);Kc(c)||$c(c,E.measurementId),a("js",new Date);const b=(p=l?.config)!==null&&p!==void 0?p:{};return b[Uc]="firebase",b.update=!0,P!=null&&(b[Mc]=P),a("config",E.measurementId,b),E.measurementId}/**
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
 */class al{constructor(t){this.app=t}_delete(){return delete ge[this.app.options.appId],Promise.resolve()}}let ge={},Pr=[];const Rr={};let Bn="dataLayer",hl="gtag",Nr,Ks,kr=!1;function cl(){const i=[];if(rs()&&i.push("This is a browser extension environment."),Qo()||i.push("Cookies are not available."),i.length>0){const t=i.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:t});X.warn(n.message)}}function ll(i,t,n){cl();const s=i.options.appId;if(!s)throw et.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)X.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(ge[s]!=null)throw et.create("already-exists",{id:s});if(!kr){Hc(Bn);const{wrappedGtag:c,gtagCore:l}=zc(ge,Pr,Rr,Bn,hl);Ks=c,Nr=l,kr=!0}return ge[s]=ol(i,Pr,Rr,t,Nr,Bn,n),new al(i)}function ul(i,t,n,s){i=we(i),rl(Ks,ge[i.app.options.appId],t,n,s).catch(a=>X.error(a))}const Or="@firebase/analytics",Dr="0.10.17";function fl(){dt(new ft(Cr,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return ll(s,a,n)},"PUBLIC")),dt(new ft("analytics-internal",i,"PRIVATE")),tt(Or,Dr),tt(Or,Dr,"esm2017");function i(t){try{const n=t.getProvider(Cr).getImmediate();return{logEvent:(s,a,c)=>ul(n,s,a,c)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}fl();var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,u){function d(){}d.prototype=u.prototype,y.D=u.prototype,y.prototype=new d,y.prototype.constructor=y,y.C=function(g,m,v){for(var f=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)f[mt-2]=arguments[mt];return u.prototype[m].apply(g,f)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(y,u,d){d||(d=0);var g=Array(16);if(typeof u=="string")for(var m=0;16>m;++m)g[m]=u.charCodeAt(d++)|u.charCodeAt(d++)<<8|u.charCodeAt(d++)<<16|u.charCodeAt(d++)<<24;else for(m=0;16>m;++m)g[m]=u[d++]|u[d++]<<8|u[d++]<<16|u[d++]<<24;u=y.g[0],d=y.g[1],m=y.g[2];var v=y.g[3],f=u+(v^d&(m^v))+g[0]+3614090360&4294967295;u=d+(f<<7&4294967295|f>>>25),f=v+(m^u&(d^m))+g[1]+3905402710&4294967295,v=u+(f<<12&4294967295|f>>>20),f=m+(d^v&(u^d))+g[2]+606105819&4294967295,m=v+(f<<17&4294967295|f>>>15),f=d+(u^m&(v^u))+g[3]+3250441966&4294967295,d=m+(f<<22&4294967295|f>>>10),f=u+(v^d&(m^v))+g[4]+4118548399&4294967295,u=d+(f<<7&4294967295|f>>>25),f=v+(m^u&(d^m))+g[5]+1200080426&4294967295,v=u+(f<<12&4294967295|f>>>20),f=m+(d^v&(u^d))+g[6]+2821735955&4294967295,m=v+(f<<17&4294967295|f>>>15),f=d+(u^m&(v^u))+g[7]+4249261313&4294967295,d=m+(f<<22&4294967295|f>>>10),f=u+(v^d&(m^v))+g[8]+1770035416&4294967295,u=d+(f<<7&4294967295|f>>>25),f=v+(m^u&(d^m))+g[9]+2336552879&4294967295,v=u+(f<<12&4294967295|f>>>20),f=m+(d^v&(u^d))+g[10]+4294925233&4294967295,m=v+(f<<17&4294967295|f>>>15),f=d+(u^m&(v^u))+g[11]+2304563134&4294967295,d=m+(f<<22&4294967295|f>>>10),f=u+(v^d&(m^v))+g[12]+1804603682&4294967295,u=d+(f<<7&4294967295|f>>>25),f=v+(m^u&(d^m))+g[13]+4254626195&4294967295,v=u+(f<<12&4294967295|f>>>20),f=m+(d^v&(u^d))+g[14]+2792965006&4294967295,m=v+(f<<17&4294967295|f>>>15),f=d+(u^m&(v^u))+g[15]+1236535329&4294967295,d=m+(f<<22&4294967295|f>>>10),f=u+(m^v&(d^m))+g[1]+4129170786&4294967295,u=d+(f<<5&4294967295|f>>>27),f=v+(d^m&(u^d))+g[6]+3225465664&4294967295,v=u+(f<<9&4294967295|f>>>23),f=m+(u^d&(v^u))+g[11]+643717713&4294967295,m=v+(f<<14&4294967295|f>>>18),f=d+(v^u&(m^v))+g[0]+3921069994&4294967295,d=m+(f<<20&4294967295|f>>>12),f=u+(m^v&(d^m))+g[5]+3593408605&4294967295,u=d+(f<<5&4294967295|f>>>27),f=v+(d^m&(u^d))+g[10]+38016083&4294967295,v=u+(f<<9&4294967295|f>>>23),f=m+(u^d&(v^u))+g[15]+3634488961&4294967295,m=v+(f<<14&4294967295|f>>>18),f=d+(v^u&(m^v))+g[4]+3889429448&4294967295,d=m+(f<<20&4294967295|f>>>12),f=u+(m^v&(d^m))+g[9]+568446438&4294967295,u=d+(f<<5&4294967295|f>>>27),f=v+(d^m&(u^d))+g[14]+3275163606&4294967295,v=u+(f<<9&4294967295|f>>>23),f=m+(u^d&(v^u))+g[3]+4107603335&4294967295,m=v+(f<<14&4294967295|f>>>18),f=d+(v^u&(m^v))+g[8]+1163531501&4294967295,d=m+(f<<20&4294967295|f>>>12),f=u+(m^v&(d^m))+g[13]+2850285829&4294967295,u=d+(f<<5&4294967295|f>>>27),f=v+(d^m&(u^d))+g[2]+4243563512&4294967295,v=u+(f<<9&4294967295|f>>>23),f=m+(u^d&(v^u))+g[7]+1735328473&4294967295,m=v+(f<<14&4294967295|f>>>18),f=d+(v^u&(m^v))+g[12]+2368359562&4294967295,d=m+(f<<20&4294967295|f>>>12),f=u+(d^m^v)+g[5]+4294588738&4294967295,u=d+(f<<4&4294967295|f>>>28),f=v+(u^d^m)+g[8]+2272392833&4294967295,v=u+(f<<11&4294967295|f>>>21),f=m+(v^u^d)+g[11]+1839030562&4294967295,m=v+(f<<16&4294967295|f>>>16),f=d+(m^v^u)+g[14]+4259657740&4294967295,d=m+(f<<23&4294967295|f>>>9),f=u+(d^m^v)+g[1]+2763975236&4294967295,u=d+(f<<4&4294967295|f>>>28),f=v+(u^d^m)+g[4]+1272893353&4294967295,v=u+(f<<11&4294967295|f>>>21),f=m+(v^u^d)+g[7]+4139469664&4294967295,m=v+(f<<16&4294967295|f>>>16),f=d+(m^v^u)+g[10]+3200236656&4294967295,d=m+(f<<23&4294967295|f>>>9),f=u+(d^m^v)+g[13]+681279174&4294967295,u=d+(f<<4&4294967295|f>>>28),f=v+(u^d^m)+g[0]+3936430074&4294967295,v=u+(f<<11&4294967295|f>>>21),f=m+(v^u^d)+g[3]+3572445317&4294967295,m=v+(f<<16&4294967295|f>>>16),f=d+(m^v^u)+g[6]+76029189&4294967295,d=m+(f<<23&4294967295|f>>>9),f=u+(d^m^v)+g[9]+3654602809&4294967295,u=d+(f<<4&4294967295|f>>>28),f=v+(u^d^m)+g[12]+3873151461&4294967295,v=u+(f<<11&4294967295|f>>>21),f=m+(v^u^d)+g[15]+530742520&4294967295,m=v+(f<<16&4294967295|f>>>16),f=d+(m^v^u)+g[2]+3299628645&4294967295,d=m+(f<<23&4294967295|f>>>9),f=u+(m^(d|~v))+g[0]+4096336452&4294967295,u=d+(f<<6&4294967295|f>>>26),f=v+(d^(u|~m))+g[7]+1126891415&4294967295,v=u+(f<<10&4294967295|f>>>22),f=m+(u^(v|~d))+g[14]+2878612391&4294967295,m=v+(f<<15&4294967295|f>>>17),f=d+(v^(m|~u))+g[5]+4237533241&4294967295,d=m+(f<<21&4294967295|f>>>11),f=u+(m^(d|~v))+g[12]+1700485571&4294967295,u=d+(f<<6&4294967295|f>>>26),f=v+(d^(u|~m))+g[3]+2399980690&4294967295,v=u+(f<<10&4294967295|f>>>22),f=m+(u^(v|~d))+g[10]+4293915773&4294967295,m=v+(f<<15&4294967295|f>>>17),f=d+(v^(m|~u))+g[1]+2240044497&4294967295,d=m+(f<<21&4294967295|f>>>11),f=u+(m^(d|~v))+g[8]+1873313359&4294967295,u=d+(f<<6&4294967295|f>>>26),f=v+(d^(u|~m))+g[15]+4264355552&4294967295,v=u+(f<<10&4294967295|f>>>22),f=m+(u^(v|~d))+g[6]+2734768916&4294967295,m=v+(f<<15&4294967295|f>>>17),f=d+(v^(m|~u))+g[13]+1309151649&4294967295,d=m+(f<<21&4294967295|f>>>11),f=u+(m^(d|~v))+g[4]+4149444226&4294967295,u=d+(f<<6&4294967295|f>>>26),f=v+(d^(u|~m))+g[11]+3174756917&4294967295,v=u+(f<<10&4294967295|f>>>22),f=m+(u^(v|~d))+g[2]+718787259&4294967295,m=v+(f<<15&4294967295|f>>>17),f=d+(v^(m|~u))+g[9]+3951481745&4294967295,y.g[0]=y.g[0]+u&4294967295,y.g[1]=y.g[1]+(m+(f<<21&4294967295|f>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+v&4294967295}s.prototype.u=function(y,u){u===void 0&&(u=y.length);for(var d=u-this.blockSize,g=this.B,m=this.h,v=0;v<u;){if(m==0)for(;v<=d;)a(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<u;)if(g[m++]=y.charCodeAt(v++),m==this.blockSize){a(this,g),m=0;break}}else for(;v<u;)if(g[m++]=y[v++],m==this.blockSize){a(this,g),m=0;break}}this.h=m,this.o+=u},s.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var u=1;u<y.length-8;++u)y[u]=0;var d=8*this.o;for(u=y.length-8;u<y.length;++u)y[u]=d&255,d/=256;for(this.u(y),y=Array(16),u=d=0;4>u;++u)for(var g=0;32>g;g+=8)y[d++]=this.g[u]>>>g&255;return y};function c(y,u){var d=p;return Object.prototype.hasOwnProperty.call(d,y)?d[y]:d[y]=u(y)}function l(y,u){this.h=u;for(var d=[],g=!0,m=y.length-1;0<=m;m--){var v=y[m]|0;g&&v==u||(d[m]=v,g=!1)}this.g=d}var p={};function w(y){return-128<=y&&128>y?c(y,function(u){return new l([u|0],0>u?-1:0)}):new l([y|0],0>y?-1:0)}function T(y){if(isNaN(y)||!isFinite(y))return P;if(0>y)return x(T(-y));for(var u=[],d=1,g=0;y>=d;g++)u[g]=y/d|0,d*=4294967296;return new l(u,0)}function E(y,u){if(y.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(y.charAt(0)=="-")return x(E(y.substring(1),u));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=T(Math.pow(u,8)),g=P,m=0;m<y.length;m+=8){var v=Math.min(8,y.length-m),f=parseInt(y.substring(m,m+v),u);8>v?(v=T(Math.pow(u,v)),g=g.j(v).add(T(f))):(g=g.j(d),g=g.add(T(f)))}return g}var P=w(0),b=w(1),U=w(16777216);i=l.prototype,i.m=function(){if(j(this))return-x(this).m();for(var y=0,u=1,d=0;d<this.g.length;d++){var g=this.i(d);y+=(0<=g?g:4294967296+g)*u,u*=4294967296}return y},i.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(j(this))return"-"+x(this).toString(y);for(var u=T(Math.pow(y,6)),d=this,g="";;){var m=nt(d,u).g;d=gt(d,m.j(u));var v=((0<d.g.length?d.g[0]:d.h)>>>0).toString(y);if(d=m,R(d))return v+g;for(;6>v.length;)v="0"+v;g=v+g}},i.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(var u=0;u<y.g.length;u++)if(y.g[u]!=0)return!1;return!0}function j(y){return y.h==-1}i.l=function(y){return y=gt(this,y),j(y)?-1:R(y)?0:1};function x(y){for(var u=y.g.length,d=[],g=0;g<u;g++)d[g]=~y.g[g];return new l(d,~y.h).add(b)}i.abs=function(){return j(this)?x(this):this},i.add=function(y){for(var u=Math.max(this.g.length,y.g.length),d=[],g=0,m=0;m<=u;m++){var v=g+(this.i(m)&65535)+(y.i(m)&65535),f=(v>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);g=f>>>16,v&=65535,f&=65535,d[m]=f<<16|v}return new l(d,d[d.length-1]&-2147483648?-1:0)};function gt(y,u){return y.add(x(u))}i.j=function(y){if(R(this)||R(y))return P;if(j(this))return j(y)?x(this).j(x(y)):x(x(this).j(y));if(j(y))return x(this.j(x(y)));if(0>this.l(U)&&0>y.l(U))return T(this.m()*y.m());for(var u=this.g.length+y.g.length,d=[],g=0;g<2*u;g++)d[g]=0;for(g=0;g<this.g.length;g++)for(var m=0;m<y.g.length;m++){var v=this.i(g)>>>16,f=this.i(g)&65535,mt=y.i(m)>>>16,Xt=y.i(m)&65535;d[2*g+2*m]+=f*Xt,Y(d,2*g+2*m),d[2*g+2*m+1]+=v*Xt,Y(d,2*g+2*m+1),d[2*g+2*m+1]+=f*mt,Y(d,2*g+2*m+1),d[2*g+2*m+2]+=v*mt,Y(d,2*g+2*m+2)}for(g=0;g<u;g++)d[g]=d[2*g+1]<<16|d[2*g];for(g=u;g<2*u;g++)d[g]=0;return new l(d,0)};function Y(y,u){for(;(y[u]&65535)!=y[u];)y[u+1]+=y[u]>>>16,y[u]&=65535,u++}function $(y,u){this.g=y,this.h=u}function nt(y,u){if(R(u))throw Error("division by zero");if(R(y))return new $(P,P);if(j(y))return u=nt(x(y),u),new $(x(u.g),x(u.h));if(j(u))return u=nt(y,x(u)),new $(x(u.g),u.h);if(30<y.g.length){if(j(y)||j(u))throw Error("slowDivide_ only works with positive integers.");for(var d=b,g=u;0>=g.l(y);)d=Ct(d),g=Ct(g);var m=J(d,1),v=J(g,1);for(g=J(g,2),d=J(d,2);!R(g);){var f=v.add(g);0>=f.l(y)&&(m=m.add(d),v=f),g=J(g,1),d=J(d,1)}return u=gt(y,m.j(u)),new $(m,u)}for(m=P;0<=y.l(u);){for(d=Math.max(1,Math.floor(y.m()/u.m())),g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),v=T(d),f=v.j(u);j(f)||0<f.l(y);)d-=g,v=T(d),f=v.j(u);R(v)&&(v=b),m=m.add(v),y=gt(y,f)}return new $(m,y)}i.A=function(y){return nt(this,y).h},i.and=function(y){for(var u=Math.max(this.g.length,y.g.length),d=[],g=0;g<u;g++)d[g]=this.i(g)&y.i(g);return new l(d,this.h&y.h)},i.or=function(y){for(var u=Math.max(this.g.length,y.g.length),d=[],g=0;g<u;g++)d[g]=this.i(g)|y.i(g);return new l(d,this.h|y.h)},i.xor=function(y){for(var u=Math.max(this.g.length,y.g.length),d=[],g=0;g<u;g++)d[g]=this.i(g)^y.i(g);return new l(d,this.h^y.h)};function Ct(y){for(var u=y.g.length+1,d=[],g=0;g<u;g++)d[g]=y.i(g)<<1|y.i(g-1)>>>31;return new l(d,y.h)}function J(y,u){var d=u>>5;u%=32;for(var g=y.g.length-d,m=[],v=0;v<g;v++)m[v]=0<u?y.i(v+d)>>>u|y.i(v+d+1)<<32-u:y.i(v+d);return new l(m,y.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=T,l.fromString=E,ii=l}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});var je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(e,r,o){return e==Array.prototype||e==Object.prototype||(e[r]=o.value),e};function n(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof je=="object"&&je];for(var r=0;r<e.length;++r){var o=e[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(e,r){if(r)t:{var o=s;e=e.split(".");for(var h=0;h<e.length-1;h++){var _=e[h];if(!(_ in o))break t;o=o[_]}e=e[e.length-1],h=o[e],r=r(h),r!=h&&r!=null&&t(o,e,{configurable:!0,writable:!0,value:r})}}function c(e,r){e instanceof String&&(e+="");var o=0,h=!1,_={next:function(){if(!h&&o<e.length){var I=o++;return{value:r(I,e[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}a("Array.prototype.values",function(e){return e||function(){return c(this,function(r,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},p=this||self;function w(e){var r=typeof e;return r=r!="object"?r:e?Array.isArray(e)?"array":r:"null",r=="array"||r=="object"&&typeof e.length=="number"}function T(e){var r=typeof e;return r=="object"&&e!=null||r=="function"}function E(e,r,o){return e.call.apply(e.bind,arguments)}function P(e,r,o){if(!e)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,h),e.apply(r,_)}}return function(){return e.apply(r,arguments)}}function b(e,r,o){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:P,b.apply(null,arguments)}function U(e,r){var o=Array.prototype.slice.call(arguments,1);return function(){var h=o.slice();return h.push.apply(h,arguments),e.apply(this,h)}}function R(e,r){function o(){}o.prototype=r.prototype,e.aa=r.prototype,e.prototype=new o,e.prototype.constructor=e,e.Qb=function(h,_,I){for(var A=Array(arguments.length-2),L=2;L<arguments.length;L++)A[L-2]=arguments[L];return r.prototype[_].apply(h,A)}}function j(e){const r=e.length;if(0<r){const o=Array(r);for(let h=0;h<r;h++)o[h]=e[h];return o}return[]}function x(e,r){for(let o=1;o<arguments.length;o++){const h=arguments[o];if(w(h)){const _=e.length||0,I=h.length||0;e.length=_+I;for(let A=0;A<I;A++)e[_+A]=h[A]}else e.push(h)}}class gt{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function Y(e){return/^[\s\xa0]*$/.test(e)}function $(){var e=p.navigator;return e&&(e=e.userAgent)?e:""}function nt(e){return nt[" "](e),e}nt[" "]=function(){};var Ct=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function J(e,r,o){for(const h in e)r.call(o,e[h],h,e)}function y(e,r){for(const o in e)r.call(void 0,e[o],o,e)}function u(e){const r={};for(const o in e)r[o]=e[o];return r}const d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(e,r){let o,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(o in h)e[o]=h[o];for(let I=0;I<d.length;I++)o=d[I],Object.prototype.hasOwnProperty.call(h,o)&&(e[o]=h[o])}}function m(e){var r=1;e=e.split(":");const o=[];for(;0<r&&e.length;)o.push(e.shift()),r--;return e.length&&o.push(e.join(":")),o}function v(e){p.setTimeout(()=>{throw e},0)}function f(){var e=on;let r=null;return e.g&&(r=e.g,e.g=e.g.next,e.g||(e.h=null),r.next=null),r}class mt{constructor(){this.h=this.g=null}add(r,o){const h=Xt.get();h.set(r,o),this.h?this.h.next=h:this.g=h,this.h=h}}var Xt=new gt(()=>new eo,e=>e.reset());class eo{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let Yt,Qt=!1,on=new mt,ai=()=>{const e=p.Promise.resolve(void 0);Yt=()=>{e.then(no)}};var no=()=>{for(var e;e=f();){try{e.h.call(e.g)}catch(o){v(o)}var r=Xt;r.j(e),100>r.h&&(r.h++,e.next=r.g,r.g=e)}Qt=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(e,r){this.type=e,this.g=this.target=r,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var io=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var e=!1,r=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const o=()=>{};p.addEventListener("test",o,r),p.removeEventListener("test",o,r)}catch{}return e}();function Zt(e,r){if(H.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var o=this.type=e.type,h=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=r,r=e.relatedTarget){if(Ct){t:{try{nt(r.nodeName);var _=!0;break t}catch{}_=!1}_||(r=null)}}else o=="mouseover"?r=e.fromElement:o=="mouseout"&&(r=e.toElement);this.relatedTarget=r,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ro[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Zt.aa.h.call(this)}}R(Zt,H);var ro={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),so=0;function oo(e,r,o,h,_){this.listener=e,this.proxy=null,this.src=r,this.type=o,this.capture=!!h,this.ha=_,this.key=++so,this.da=this.fa=!1}function Ee(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Se(e){this.src=e,this.g={},this.h=0}Se.prototype.add=function(e,r,o,h,_){var I=e.toString();e=this.g[I],e||(e=this.g[I]=[],this.h++);var A=hn(e,r,h,_);return-1<A?(r=e[A],o||(r.fa=!1)):(r=new oo(r,this.src,I,!!h,_),r.fa=o,e.push(r)),r};function an(e,r){var o=r.type;if(o in e.g){var h=e.g[o],_=Array.prototype.indexOf.call(h,r,void 0),I;(I=0<=_)&&Array.prototype.splice.call(h,_,1),I&&(Ee(r),e.g[o].length==0&&(delete e.g[o],e.h--))}}function hn(e,r,o,h){for(var _=0;_<e.length;++_){var I=e[_];if(!I.da&&I.listener==r&&I.capture==!!o&&I.ha==h)return _}return-1}var cn="closure_lm_"+(1e6*Math.random()|0),ln={};function hi(e,r,o,h,_){if(Array.isArray(r)){for(var I=0;I<r.length;I++)hi(e,r[I],o,h,_);return null}return o=ui(o),e&&e[Ae]?e.K(r,o,T(h)?!!h.capture:!1,_):ao(e,r,o,!1,h,_)}function ao(e,r,o,h,_,I){if(!r)throw Error("Invalid event type");var A=T(_)?!!_.capture:!!_,L=fn(e);if(L||(e[cn]=L=new Se(e)),o=L.add(r,o,h,A,I),o.proxy)return o;if(h=ho(),o.proxy=h,h.src=e,h.listener=o,e.addEventListener)io||(_=A),_===void 0&&(_=!1),e.addEventListener(r.toString(),h,_);else if(e.attachEvent)e.attachEvent(li(r.toString()),h);else if(e.addListener&&e.removeListener)e.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return o}function ho(){function e(o){return r.call(e.src,e.listener,o)}const r=co;return e}function ci(e,r,o,h,_){if(Array.isArray(r))for(var I=0;I<r.length;I++)ci(e,r[I],o,h,_);else h=T(h)?!!h.capture:!!h,o=ui(o),e&&e[Ae]?(e=e.i,r=String(r).toString(),r in e.g&&(I=e.g[r],o=hn(I,o,h,_),-1<o&&(Ee(I[o]),Array.prototype.splice.call(I,o,1),I.length==0&&(delete e.g[r],e.h--)))):e&&(e=fn(e))&&(r=e.g[r.toString()],e=-1,r&&(e=hn(r,o,h,_)),(o=-1<e?r[e]:null)&&un(o))}function un(e){if(typeof e!="number"&&e&&!e.da){var r=e.src;if(r&&r[Ae])an(r.i,e);else{var o=e.type,h=e.proxy;r.removeEventListener?r.removeEventListener(o,h,e.capture):r.detachEvent?r.detachEvent(li(o),h):r.addListener&&r.removeListener&&r.removeListener(h),(o=fn(r))?(an(o,e),o.h==0&&(o.src=null,r[cn]=null)):Ee(e)}}}function li(e){return e in ln?ln[e]:ln[e]="on"+e}function co(e,r){if(e.da)e=!0;else{r=new Zt(r,this);var o=e.listener,h=e.ha||e.src;e.fa&&un(e),e=o.call(h,r)}return e}function fn(e){return e=e[cn],e instanceof Se?e:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(e){return typeof e=="function"?e:(e[dn]||(e[dn]=function(r){return e.handleEvent(r)}),e[dn])}function G(){It.call(this),this.i=new Se(this),this.M=this,this.F=null}R(G,It),G.prototype[Ae]=!0,G.prototype.removeEventListener=function(e,r,o,h){ci(this,e,r,o,h)};function z(e,r){var o,h=e.F;if(h)for(o=[];h;h=h.F)o.push(h);if(e=e.M,h=r.type||r,typeof r=="string")r=new H(r,e);else if(r instanceof H)r.target=r.target||e;else{var _=r;r=new H(h,e),g(r,_)}if(_=!0,o)for(var I=o.length-1;0<=I;I--){var A=r.g=o[I];_=be(A,h,!0,r)&&_}if(A=r.g=e,_=be(A,h,!0,r)&&_,_=be(A,h,!1,r)&&_,o)for(I=0;I<o.length;I++)A=r.g=o[I],_=be(A,h,!1,r)&&_}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var e=this.i,r;for(r in e.g){for(var o=e.g[r],h=0;h<o.length;h++)Ee(o[h]);delete e.g[r],e.h--}}this.F=null},G.prototype.K=function(e,r,o,h){return this.i.add(String(e),r,!1,o,h)},G.prototype.L=function(e,r,o,h){return this.i.add(String(e),r,!0,o,h)};function be(e,r,o,h){if(r=e.i.g[String(r)],!r)return!0;r=r.concat();for(var _=!0,I=0;I<r.length;++I){var A=r[I];if(A&&!A.da&&A.capture==o){var L=A.listener,B=A.ha||A.src;A.fa&&an(e.i,A),_=L.call(B,h)!==!1&&_}}return _&&!h.defaultPrevented}function fi(e,r,o){if(typeof e=="function")o&&(e=b(e,o));else if(e&&typeof e.handleEvent=="function")e=b(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:p.setTimeout(e,r||0)}function di(e){e.g=fi(()=>{e.g=null,e.i&&(e.i=!1,di(e))},e.l);const r=e.h;e.h=null,e.m.apply(null,r)}class lo extends It{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:di(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(e){It.call(this),this.h=e,this.g={}}R(te,It);var pi=[];function gi(e){J(e.g,function(r,o){this.g.hasOwnProperty(o)&&un(r)},e),e.g={}}te.prototype.N=function(){te.aa.N.call(this),gi(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pn=p.JSON.stringify,uo=p.JSON.parse,fo=class{stringify(e){return p.JSON.stringify(e,void 0)}parse(e){return p.JSON.parse(e,void 0)}};function gn(){}gn.prototype.h=null;function mi(e){return e.h||(e.h=e.i())}function po(){}var ee={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mn(){H.call(this,"d")}R(mn,H);function yn(){H.call(this,"c")}R(yn,H);var $t={},yi=null;function _n(){return yi=yi||new G}$t.La="serverreachability";function _i(e){H.call(this,$t.La,e)}R(_i,H);function ne(e){const r=_n();z(r,new _i(r))}$t.STAT_EVENT="statevent";function vi(e,r){H.call(this,$t.STAT_EVENT,e),this.stat=r}R(vi,H);function K(e){const r=_n();z(r,new vi(r,e))}$t.Ma="timingevent";function wi(e,r){H.call(this,$t.Ma,e),this.size=r}R(wi,H);function ie(e,r){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){e()},r)}function re(){this.g=!0}re.prototype.xa=function(){this.g=!1};function go(e,r,o,h,_,I){e.info(function(){if(e.g)if(I)for(var A="",L=I.split("&"),B=0;B<L.length;B++){var C=L[B].split("=");if(1<C.length){var q=C[0];C=C[1];var W=q.split("_");A=2<=W.length&&W[1]=="type"?A+(q+"="+C+"&"):A+(q+"=redacted&")}}else A=null;else A=I;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+r+`
`+o+`
`+A})}function mo(e,r,o,h,_,I,A){e.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+r+`
`+o+`
`+I+" "+A})}function Ht(e,r,o,h){e.info(function(){return"XMLHTTP TEXT ("+r+"): "+_o(e,o)+(h?" "+h:"")})}function yo(e,r){e.info(function(){return"TIMEOUT: "+r})}re.prototype.info=function(){};function _o(e,r){if(!e.g)return r;if(!r)return null;try{var o=JSON.parse(r);if(o){for(e=0;e<o.length;e++)if(Array.isArray(o[e])){var h=o[e];if(!(2>h.length)){var _=h[1];if(Array.isArray(_)&&!(1>_.length)){var I=_[0];if(I!="noop"&&I!="stop"&&I!="close")for(var A=1;A<_.length;A++)_[A]=""}}}}return pn(o)}catch{return r}}var vn={NO_ERROR:0,TIMEOUT:8},vo={},wn;function Ce(){}R(Ce,gn),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},wn=new Ce;function Tt(e,r,o,h){this.j=e,this.i=r,this.l=o,this.R=h||1,this.U=new te(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ii}function Ii(){this.i=null,this.g="",this.h=!1}var Ti={},In={};function Tn(e,r,o){e.L=1,e.v=ke(yt(r)),e.m=o,e.P=!0,Ai(e,null)}function Ai(e,r){e.F=Date.now(),Pe(e),e.A=yt(e.v);var o=e.A,h=e.R;Array.isArray(h)||(h=[String(h)]),xi(o.i,"t",h),e.C=0,o=e.j.J,e.h=new Ii,e.g=er(e.j,o?r:null,!e.m),0<e.O&&(e.M=new lo(b(e.Y,e,e.g),e.O)),r=e.U,o=e.g,h=e.ca;var _="readystatechange";Array.isArray(_)||(_&&(pi[0]=_.toString()),_=pi);for(var I=0;I<_.length;I++){var A=hi(o,_[I],h||r.handleEvent,!1,r.h||r);if(!A)break;r.g[A.key]=A}r=e.H?u(e.H):{},e.m?(e.u||(e.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,r)):(e.u="GET",e.g.ea(e.A,e.u,null,r)),ne(),go(e.i,e.u,e.A,e.l,e.R,e.m)}Tt.prototype.ca=function(e){e=e.target;const r=this.M;r&&_t(e)==3?r.j():this.Y(e)},Tt.prototype.Y=function(e){try{if(e==this.g)t:{const W=_t(this.g);var r=this.g.Ba();const Wt=this.g.Z();if(!(3>W)&&(W!=3||this.g&&(this.h.h||this.g.oa()||Gi(this.g)))){this.J||W!=4||r==7||(r==8||0>=Wt?ne(3):ne(2)),An(this);var o=this.g.Z();this.X=o;e:if(Ei(this)){var h=Gi(this.g);e="";var _=h.length,I=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),se(this);var A="";break e}this.h.i=new p.TextDecoder}for(r=0;r<_;r++)this.h.h=!0,e+=this.h.i.decode(h[r],{stream:!(I&&r==_-1)});h.length=0,this.h.g+=e,this.C=0,A=this.h.g}else A=this.g.oa();if(this.o=o==200,mo(this.i,this.u,this.A,this.l,this.R,W,o),this.o){if(this.T&&!this.K){e:{if(this.g){var L,B=this.g;if((L=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(L)){var C=L;break e}}C=null}if(o=C)Ht(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,En(this,o);else{this.o=!1,this.s=3,K(12),Pt(this),se(this);break t}}if(this.P){o=!0;let it;for(;!this.J&&this.C<A.length;)if(it=wo(this,A),it==In){W==4&&(this.s=4,K(14),o=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Ti){this.s=4,K(15),Ht(this.i,this.l,A,"[Invalid Chunk]"),o=!1;break}else Ht(this.i,this.l,it,null),En(this,it);if(Ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||A.length!=0||this.h.h||(this.s=1,K(16),o=!1),this.o=this.o&&o,!o)Ht(this.i,this.l,A,"[Invalid Chunked Response]"),Pt(this),se(this);else if(0<A.length&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.ba&&!q.M&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+A.length),Nn(q),q.M=!0,K(11))}}else Ht(this.i,this.l,A,null),En(this,A);W==4&&Pt(this),this.o&&!this.J&&(W==4?Yi(this.j,this):(this.o=!1,Pe(this)))}else xo(this.g),o==400&&0<A.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),Pt(this),se(this)}}}catch{}finally{}};function Ei(e){return e.g?e.u=="GET"&&e.L!=2&&e.j.Ca:!1}function wo(e,r){var o=e.C,h=r.indexOf(`
`,o);return h==-1?In:(o=Number(r.substring(o,h)),isNaN(o)?Ti:(h+=1,h+o>r.length?In:(r=r.slice(h,h+o),e.C=h+o,r)))}Tt.prototype.cancel=function(){this.J=!0,Pt(this)};function Pe(e){e.S=Date.now()+e.I,Si(e,e.I)}function Si(e,r){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ie(b(e.ba,e),r)}function An(e){e.B&&(p.clearTimeout(e.B),e.B=null)}Tt.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(yo(this.i,this.A),this.L!=2&&(ne(),K(17)),Pt(this),this.s=2,se(this)):Si(this,this.S-e)};function se(e){e.j.G==0||e.J||Yi(e.j,e)}function Pt(e){An(e);var r=e.M;r&&typeof r.ma=="function"&&r.ma(),e.M=null,gi(e.U),e.g&&(r=e.g,e.g=null,r.abort(),r.ma())}function En(e,r){try{var o=e.j;if(o.G!=0&&(o.g==e||Sn(o.h,e))){if(!e.K&&Sn(o.h,e)&&o.G==3){try{var h=o.Da.g.parse(r)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){t:if(!o.u){if(o.g)if(o.g.F+3e3<e.F)xe(o),Me(o);else break t;Rn(o),K(18)}}else o.za=_[1],0<o.za-o.T&&37500>_[2]&&o.F&&o.v==0&&!o.C&&(o.C=ie(b(o.Za,o),6e3));if(1>=Pi(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else Nt(o,11)}else if((e.K||o.g==e)&&xe(o),!Y(r))for(_=o.Da.g.parse(r),r=0;r<_.length;r++){let C=_[r];if(o.T=C[0],C=C[1],o.G==2)if(C[0]=="c"){o.K=C[1],o.ia=C[2];const q=C[3];q!=null&&(o.la=q,o.j.info("VER="+o.la));const W=C[4];W!=null&&(o.Aa=W,o.j.info("SVER="+o.Aa));const Wt=C[5];Wt!=null&&typeof Wt=="number"&&0<Wt&&(h=1.5*Wt,o.L=h,o.j.info("backChannelRequestTimeoutMs_="+h)),h=o;const it=e.g;if(it){const Fe=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fe){var I=h.h;I.g||Fe.indexOf("spdy")==-1&&Fe.indexOf("quic")==-1&&Fe.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(bn(I,I.h),I.h=null))}if(h.D){const kn=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;kn&&(h.ya=kn,M(h.I,h.D,kn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-e.F,o.j.info("Handshake RTT: "+o.R+"ms")),h=o;var A=e;if(h.qa=tr(h,h.J?h.ia:null,h.W),A.K){Ri(h.h,A);var L=A,B=h.L;B&&(L.I=B),L.B&&(An(L),Pe(L)),h.g=A}else Ji(h);0<o.i.length&&Ue(o)}else C[0]!="stop"&&C[0]!="close"||Nt(o,7);else o.G==3&&(C[0]=="stop"||C[0]=="close"?C[0]=="stop"?Nt(o,7):Pn(o):C[0]!="noop"&&o.l&&o.l.ta(C),o.v=0)}}ne(4)}catch{}}var Io=class{constructor(e,r){this.g=e,this.map=r}};function bi(e){this.l=e||10,p.PerformanceNavigationTiming?(e=p.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ci(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Pi(e){return e.h?1:e.g?e.g.size:0}function Sn(e,r){return e.h?e.h==r:e.g?e.g.has(r):!1}function bn(e,r){e.g?e.g.add(r):e.h=r}function Ri(e,r){e.h&&e.h==r?e.h=null:e.g&&e.g.has(r)&&e.g.delete(r)}bi.prototype.cancel=function(){if(this.i=Ni(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ni(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let r=e.i;for(const o of e.g.values())r=r.concat(o.D);return r}return j(e.i)}function To(e){if(e.V&&typeof e.V=="function")return e.V();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(w(e)){for(var r=[],o=e.length,h=0;h<o;h++)r.push(e[h]);return r}r=[],o=0;for(h in e)r[o++]=e[h];return r}function Ao(e){if(e.na&&typeof e.na=="function")return e.na();if(!e.V||typeof e.V!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(w(e)||typeof e=="string"){var r=[];e=e.length;for(var o=0;o<e;o++)r.push(o);return r}r=[],o=0;for(const h in e)r[o++]=h;return r}}}function ki(e,r){if(e.forEach&&typeof e.forEach=="function")e.forEach(r,void 0);else if(w(e)||typeof e=="string")Array.prototype.forEach.call(e,r,void 0);else for(var o=Ao(e),h=To(e),_=h.length,I=0;I<_;I++)r.call(void 0,h[I],o&&o[I],e)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eo(e,r){if(e){e=e.split("&");for(var o=0;o<e.length;o++){var h=e[o].indexOf("="),_=null;if(0<=h){var I=e[o].substring(0,h);_=e[o].substring(h+1)}else I=e[o];r(I,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function Rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Rt){this.h=e.h,Re(this,e.j),this.o=e.o,this.g=e.g,Ne(this,e.s),this.l=e.l;var r=e.i,o=new he;o.i=r.i,r.g&&(o.g=new Map(r.g),o.h=r.h),Di(this,o),this.m=e.m}else e&&(r=String(e).match(Oi))?(this.h=!1,Re(this,r[1]||"",!0),this.o=oe(r[2]||""),this.g=oe(r[3]||"",!0),Ne(this,r[4]),this.l=oe(r[5]||"",!0),Di(this,r[6]||"",!0),this.m=oe(r[7]||"")):(this.h=!1,this.i=new he(null,this.h))}Rt.prototype.toString=function(){var e=[],r=this.j;r&&e.push(ae(r,Li,!0),":");var o=this.g;return(o||r=="file")&&(e.push("//"),(r=this.o)&&e.push(ae(r,Li,!0),"@"),e.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&e.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&e.push("/"),e.push(ae(o,o.charAt(0)=="/"?Co:bo,!0))),(o=this.i.toString())&&e.push("?",o),(o=this.m)&&e.push("#",ae(o,Ro)),e.join("")};function yt(e){return new Rt(e)}function Re(e,r,o){e.j=o?oe(r,!0):r,e.j&&(e.j=e.j.replace(/:$/,""))}function Ne(e,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);e.s=r}else e.s=null}function Di(e,r,o){r instanceof he?(e.i=r,No(e.i,e.h)):(o||(r=ae(r,Po)),e.i=new he(r,e.h))}function M(e,r,o){e.i.set(r,o)}function ke(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function oe(e,r){return e?r?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ae(e,r,o){return typeof e=="string"?(e=encodeURI(e).replace(r,So),o&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function So(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Li=/[#\/\?@]/g,bo=/[#\?:]/g,Co=/[#\?]/g,Po=/[#\?@]/g,Ro=/#/g;function he(e,r){this.h=this.g=null,this.i=e||null,this.j=!!r}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&Eo(e.i,function(r,o){e.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=he.prototype,i.add=function(e,r){At(this),this.i=null,e=Gt(this,e);var o=this.g.get(e);return o||this.g.set(e,o=[]),o.push(r),this.h+=1,this};function Mi(e,r){At(e),r=Gt(e,r),e.g.has(r)&&(e.i=null,e.h-=e.g.get(r).length,e.g.delete(r))}function Ui(e,r){return At(e),r=Gt(e,r),e.g.has(r)}i.forEach=function(e,r){At(this),this.g.forEach(function(o,h){o.forEach(function(_){e.call(r,_,h,this)},this)},this)},i.na=function(){At(this);const e=Array.from(this.g.values()),r=Array.from(this.g.keys()),o=[];for(let h=0;h<r.length;h++){const _=e[h];for(let I=0;I<_.length;I++)o.push(r[h])}return o},i.V=function(e){At(this);let r=[];if(typeof e=="string")Ui(this,e)&&(r=r.concat(this.g.get(Gt(this,e))));else{e=Array.from(this.g.values());for(let o=0;o<e.length;o++)r=r.concat(e[o])}return r},i.set=function(e,r){return At(this),this.i=null,e=Gt(this,e),Ui(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[r]),this.h+=1,this},i.get=function(e,r){return e?(e=this.V(e),0<e.length?String(e[0]):r):r};function xi(e,r,o){Mi(e,r),0<o.length&&(e.i=null,e.g.set(Gt(e,r),j(o)),e.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],r=Array.from(this.g.keys());for(var o=0;o<r.length;o++){var h=r[o];const I=encodeURIComponent(String(h)),A=this.V(h);for(h=0;h<A.length;h++){var _=I;A[h]!==""&&(_+="="+encodeURIComponent(String(A[h]))),e.push(_)}}return this.i=e.join("&")};function Gt(e,r){return r=String(r),e.j&&(r=r.toLowerCase()),r}function No(e,r){r&&!e.j&&(At(e),e.i=null,e.g.forEach(function(o,h){var _=h.toLowerCase();h!=_&&(Mi(this,h),xi(this,_,o))},e)),e.j=r}function ko(e,r){const o=new re;if(p.Image){const h=new Image;h.onload=U(Et,o,"TestLoadImage: loaded",!0,r,h),h.onerror=U(Et,o,"TestLoadImage: error",!1,r,h),h.onabort=U(Et,o,"TestLoadImage: abort",!1,r,h),h.ontimeout=U(Et,o,"TestLoadImage: timeout",!1,r,h),p.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=e}else r(!1)}function Oo(e,r){const o=new re,h=new AbortController,_=setTimeout(()=>{h.abort(),Et(o,"TestPingServer: timeout",!1,r)},1e4);fetch(e,{signal:h.signal}).then(I=>{clearTimeout(_),I.ok?Et(o,"TestPingServer: ok",!0,r):Et(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(_),Et(o,"TestPingServer: error",!1,r)})}function Et(e,r,o,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(o)}catch{}}function Do(){this.g=new fo}function Lo(e,r,o){const h=o||"";try{ki(e,function(_,I){let A=_;T(_)&&(A=pn(_)),r.push(h+I+"="+encodeURIComponent(A))})}catch(_){throw r.push(h+"type="+encodeURIComponent("_badmap")),_}}function Oe(e){this.l=e.Ub||null,this.j=e.eb||!1}R(Oe,gn),Oe.prototype.g=function(){return new De(this.l,this.j)},Oe.prototype.i=function(e){return function(){return e}}({});function De(e,r){G.call(this),this.D=e,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(De,G),i=De.prototype,i.open=function(e,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=r,this.readyState=1,le(this)},i.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(r.body=e),(this.D||p).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ce(this)),this.readyState=0},i.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,le(this)),this.g&&(this.readyState=3,le(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fi(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fi(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}i.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var r=e.value?e.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!e.done}))&&(this.response=this.responseText+=r)}e.done?ce(this):le(this),this.readyState==3&&Fi(this)}},i.Ra=function(e){this.g&&(this.response=this.responseText=e,ce(this))},i.Qa=function(e){this.g&&(this.response=e,ce(this))},i.ga=function(){this.g&&ce(this)};function ce(e){e.readyState=4,e.l=null,e.j=null,e.v=null,le(e)}i.setRequestHeader=function(e,r){this.u.append(e,r)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,e.push(o[0]+": "+o[1]),o=r.next();return e.join(`\r
`)};function le(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(De.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});function Vi(e){let r="";return J(e,function(o,h){r+=h,r+=":",r+=o,r+=`\r
`}),r}function Cn(e,r,o){t:{for(h in o){var h=!1;break t}h=!0}h||(o=Vi(o),typeof e=="string"?o!=null&&encodeURIComponent(String(o)):M(e,r,o))}function F(e){G.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(F,G);var Mo=/^https?$/i,Uo=["POST","PUT"];i=F.prototype,i.Ha=function(e){this.J=e},i.ea=function(e,r,o,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?mi(this.o):mi(wn),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(I){ji(this,I);return}if(e=o||"",o=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)o.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())o.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(o.keys()).find(I=>I.toLowerCase()=="content-type"),_=p.FormData&&e instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Uo,r,void 0))||h||_||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,A]of o)this.g.setRequestHeader(I,A);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hi(this),this.u=!0,this.g.send(e),this.u=!1}catch(I){ji(this,I)}};function ji(e,r){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=r,e.m=5,Bi(e),Le(e)}function Bi(e){e.A||(e.A=!0,z(e,"complete"),z(e,"error"))}i.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Le(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Le(this,!0)),F.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?$i(this):this.bb())},i.bb=function(){$i(this)};function $i(e){if(e.h&&typeof l<"u"&&(!e.v[1]||_t(e)!=4||e.Z()!=2)){if(e.u&&_t(e)==4)fi(e.Ea,0,e);else if(z(e,"readystatechange"),_t(e)==4){e.h=!1;try{const A=e.Z();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var o;if(!(o=r)){var h;if(h=A===0){var _=String(e.D).match(Oi)[1]||null;!_&&p.self&&p.self.location&&(_=p.self.location.protocol.slice(0,-1)),h=!Mo.test(_?_.toLowerCase():"")}o=h}if(o)z(e,"complete"),z(e,"success");else{e.m=6;try{var I=2<_t(e)?e.g.statusText:""}catch{I=""}e.l=I+" ["+e.Z()+"]",Bi(e)}}finally{Le(e)}}}}function Le(e,r){if(e.g){Hi(e);const o=e.g,h=e.v[0]?()=>{}:null;e.g=null,e.v=null,r||z(e,"ready");try{o.onreadystatechange=h}catch{}}}function Hi(e){e.I&&(p.clearTimeout(e.I),e.I=null)}i.isActive=function(){return!!this.g};function _t(e){return e.g?e.g.readyState:0}i.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(e){if(this.g){var r=this.g.responseText;return e&&r.indexOf(e)==0&&(r=r.substring(e.length)),uo(r)}};function Gi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function xo(e){const r={};e=(e.g&&2<=_t(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<e.length;h++){if(Y(e[h]))continue;var o=m(e[h]);const _=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const I=r[_]||[];r[_]=I,I.push(o)}y(r,function(h){return h.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ue(e,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[e]||r}function qi(e){this.Aa=0,this.i=[],this.j=new re,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ue("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ue("baseRetryDelayMs",5e3,e),this.cb=ue("retryDelaySeedMs",1e4,e),this.Wa=ue("forwardChannelMaxRetries",2,e),this.wa=ue("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(e&&e.concurrentRequestLimit),this.Da=new Do,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=qi.prototype,i.la=8,i.G=1,i.connect=function(e,r,o,h){K(0),this.W=e,this.H=r||{},o&&h!==void 0&&(this.H.OSID=o,this.H.OAID=h),this.F=this.X,this.I=tr(this,null,this.W),Ue(this)};function Pn(e){if(Wi(e),e.G==3){var r=e.U++,o=yt(e.I);if(M(o,"SID",e.K),M(o,"RID",r),M(o,"TYPE","terminate"),fe(e,o),r=new Tt(e,e.j,r),r.L=2,r.v=ke(yt(o)),o=!1,p.navigator&&p.navigator.sendBeacon)try{o=p.navigator.sendBeacon(r.v.toString(),"")}catch{}!o&&p.Image&&(new Image().src=r.v,o=!0),o||(r.g=er(r.j,null),r.g.ea(r.v)),r.F=Date.now(),Pe(r)}Zi(e)}function Me(e){e.g&&(Nn(e),e.g.cancel(),e.g=null)}function Wi(e){Me(e),e.u&&(p.clearTimeout(e.u),e.u=null),xe(e),e.h.cancel(),e.s&&(typeof e.s=="number"&&p.clearTimeout(e.s),e.s=null)}function Ue(e){if(!Ci(e.h)&&!e.s){e.s=!0;var r=e.Ga;Yt||ai(),Qt||(Yt(),Qt=!0),on.add(r,e),e.B=0}}function Fo(e,r){return Pi(e.h)>=e.h.j-(e.s?1:0)?!1:e.s?(e.i=r.D.concat(e.i),!0):e.G==1||e.G==2||e.B>=(e.Va?0:e.Wa)?!1:(e.s=ie(b(e.Ga,e,r),Qi(e,e.B)),e.B++,!0)}i.Ga=function(e){if(this.s)if(this.s=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const _=new Tt(this,this.j,e);let I=this.o;if(this.S&&(I?(I=u(I),g(I,this.S)):I=this.S),this.m!==null||this.O||(_.H=I,I=null),this.P)t:{for(var r=0,o=0;o<this.i.length;o++){e:{var h=this.i[o];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(r+=h,4096<r){r=o;break t}if(r===4096||o===this.i.length-1){r=o+1;break t}}r=1e3}else r=1e3;r=Ki(this,_,r),o=yt(this.I),M(o,"RID",e),M(o,"CVER",22),this.D&&M(o,"X-HTTP-Session-Id",this.D),fe(this,o),I&&(this.O?r="headers="+encodeURIComponent(String(Vi(I)))+"&"+r:this.m&&Cn(o,this.m,I)),bn(this.h,_),this.Ua&&M(o,"TYPE","init"),this.P?(M(o,"$req",r),M(o,"SID","null"),_.T=!0,Tn(_,o,null)):Tn(_,o,r),this.G=2}}else this.G==3&&(e?zi(this,e):this.i.length==0||Ci(this.h)||zi(this))};function zi(e,r){var o;r?o=r.l:o=e.U++;const h=yt(e.I);M(h,"SID",e.K),M(h,"RID",o),M(h,"AID",e.T),fe(e,h),e.m&&e.o&&Cn(h,e.m,e.o),o=new Tt(e,e.j,o,e.B+1),e.m===null&&(o.H=e.o),r&&(e.i=r.D.concat(e.i)),r=Ki(e,o,1e3),o.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),bn(e.h,o),Tn(o,h,r)}function fe(e,r){e.H&&J(e.H,function(o,h){M(r,h,o)}),e.l&&ki({},function(o,h){M(r,h,o)})}function Ki(e,r,o){o=Math.min(e.i.length,o);var h=e.l?b(e.l.Na,e.l,e):null;t:{var _=e.i;let I=-1;for(;;){const A=["count="+o];I==-1?0<o?(I=_[0].g,A.push("ofs="+I)):I=0:A.push("ofs="+I);let L=!0;for(let B=0;B<o;B++){let C=_[B].g;const q=_[B].map;if(C-=I,0>C)I=Math.max(0,_[B].g-100),L=!1;else try{Lo(q,A,"req"+C+"_")}catch{h&&h(q)}}if(L){h=A.join("&");break t}}}return e=e.i.splice(0,o),r.D=e,h}function Ji(e){if(!e.g&&!e.u){e.Y=1;var r=e.Fa;Yt||ai(),Qt||(Yt(),Qt=!0),on.add(r,e),e.v=0}}function Rn(e){return e.g||e.u||3<=e.v?!1:(e.Y++,e.u=ie(b(e.Fa,e),Qi(e,e.v)),e.v++,!0)}i.Fa=function(){if(this.u=null,Xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ie(b(this.ab,this),e)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),Me(this),Xi(this))};function Nn(e){e.A!=null&&(p.clearTimeout(e.A),e.A=null)}function Xi(e){e.g=new Tt(e,e.j,"rpc",e.Y),e.m===null&&(e.g.H=e.o),e.g.O=0;var r=yt(e.qa);M(r,"RID","rpc"),M(r,"SID",e.K),M(r,"AID",e.T),M(r,"CI",e.F?"0":"1"),!e.F&&e.ja&&M(r,"TO",e.ja),M(r,"TYPE","xmlhttp"),fe(e,r),e.m&&e.o&&Cn(r,e.m,e.o),e.L&&(e.g.I=e.L);var o=e.g;e=e.ia,o.L=1,o.v=ke(yt(r)),o.m=null,o.P=!0,Ai(o,e)}i.Za=function(){this.C!=null&&(this.C=null,Me(this),Rn(this),K(19))};function xe(e){e.C!=null&&(p.clearTimeout(e.C),e.C=null)}function Yi(e,r){var o=null;if(e.g==r){xe(e),Nn(e),e.g=null;var h=2}else if(Sn(e.h,r))o=r.D,Ri(e.h,r),h=1;else return;if(e.G!=0){if(r.o)if(h==1){o=r.m?r.m.length:0,r=Date.now()-r.F;var _=e.B;h=_n(),z(h,new wi(h,o)),Ue(e)}else Ji(e);else if(_=r.s,_==3||_==0&&0<r.X||!(h==1&&Fo(e,r)||h==2&&Rn(e)))switch(o&&0<o.length&&(r=e.h,r.i=r.i.concat(o)),_){case 1:Nt(e,5);break;case 4:Nt(e,10);break;case 3:Nt(e,6);break;default:Nt(e,2)}}}function Qi(e,r){let o=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(o*=2),o*r}function Nt(e,r){if(e.j.info("Error code "+r),r==2){var o=b(e.fb,e),h=e.Xa;const _=!h;h=new Rt(h||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Re(h,"https"),ke(h),_?ko(h.toString(),o):Oo(h.toString(),o)}else K(2);e.G=0,e.l&&e.l.sa(r),Zi(e),Wi(e)}i.fb=function(e){e?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Zi(e){if(e.G=0,e.ka=[],e.l){const r=Ni(e.h);(r.length!=0||e.i.length!=0)&&(x(e.ka,r),x(e.ka,e.i),e.h.i.length=0,j(e.i),e.i.length=0),e.l.ra()}}function tr(e,r,o){var h=o instanceof Rt?yt(o):new Rt(o);if(h.g!="")r&&(h.g=r+"."+h.g),Ne(h,h.s);else{var _=p.location;h=_.protocol,r=r?r+"."+_.hostname:_.hostname,_=+_.port;var I=new Rt(null);h&&Re(I,h),r&&(I.g=r),_&&Ne(I,_),o&&(I.l=o),h=I}return o=e.D,r=e.ya,o&&r&&M(h,o,r),M(h,"VER",e.la),fe(e,h),h}function er(e,r,o){if(r&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=e.Ca&&!e.pa?new F(new Oe({eb:o})):new F(e.pa),r.Ha(e.J),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function nr(){}i=nr.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Z(e,r){G.call(this),this.g=new qi(r),this.l=e,this.h=r&&r.messageUrlParams||null,e=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(e?e["X-WebChannel-Content-Type"]=r.messageContentType:e={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(e?e["X-WebChannel-Client-Profile"]=r.va:e={"X-WebChannel-Client-Profile":r.va}),this.g.S=e,(e=r&&r.Sb)&&!Y(e)&&(this.g.m=e),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!Y(r)&&(this.g.D=r,e=this.h,e!==null&&r in e&&(e=this.h,r in e&&delete e[r])),this.j=new qt(this)}R(Z,G),Z.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){Pn(this.g)},Z.prototype.o=function(e){var r=this.g;if(typeof e=="string"){var o={};o.__data__=e,e=o}else this.u&&(o={},o.__data__=pn(e),e=o);r.i.push(new Io(r.Ya++,e)),r.G==3&&Ue(r)},Z.prototype.N=function(){this.g.l=null,delete this.j,Pn(this.g),delete this.g,Z.aa.N.call(this)};function ir(e){mn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var r=e.__sm__;if(r){t:{for(const o in r){e=o;break t}e=void 0}(this.i=e)&&(e=this.i,r=r!==null&&e in r?r[e]:void 0),this.data=r}else this.data=e}R(ir,mn);function rr(){yn.call(this),this.status=1}R(rr,yn);function qt(e){this.g=e}R(qt,nr),qt.prototype.ua=function(){z(this.g,"a")},qt.prototype.ta=function(e){z(this.g,new ir(e))},qt.prototype.sa=function(e){z(this.g,new rr)},qt.prototype.ra=function(){z(this.g,"b")},Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,vo.COMPLETE="complete",po.EventType=ee,ee.OPEN="a",ee.CLOSE="b",ee.ERROR="c",ee.MESSAGE="d",G.prototype.listen=G.prototype.K,F.prototype.listenOnce=F.prototype.L,F.prototype.getLastError=F.prototype.Ka,F.prototype.getLastErrorCode=F.prototype.Ba,F.prototype.getStatus=F.prototype.Z,F.prototype.getResponseJson=F.prototype.Oa,F.prototype.getResponseText=F.prototype.oa,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Ha}).apply(typeof je<"u"?je:typeof self<"u"?self:typeof window<"u"?window:{});const Mr="@firebase/firestore",Ur="4.8.0";/**
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
 */class Q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
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
 */let sn="11.10.0";/**
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
 */const Xe=new Ze("@firebase/firestore");function st(i,...t){if(Xe.logLevel<=D.DEBUG){const n=t.map(Xs);Xe.debug(`Firestore (${sn}): ${i}`,...n)}}function Js(i,...t){if(Xe.logLevel<=D.ERROR){const n=t.map(Xs);Xe.error(`Firestore (${sn}): ${i}`,...n)}}function Xs(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Ye(i,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,Ys(i,s,n)}function Ys(i,t,n){let s=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Js(s),new Error(s)}function me(i,t,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||Ys(t,a,s)}/**
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
 */const k={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends pt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ye{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class dl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Q.UNAUTHENTICATED))}shutdown(){}}class gl{constructor(t){this.t=t,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){me(this.o===void 0,42304);let s=this.i;const a=w=>this.i!==s?(s=this.i,n(w)):Promise.resolve();let c=new ye;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ye,t.enqueueRetryable(()=>a(this.currentUser))};const l=()=>{const w=c;t.enqueueRetryable(async()=>{await w.promise,await a(this.currentUser)})},p=w=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(w=>p(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?p(w):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ye)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string",31837,{l:s}),new dl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return me(t===null||typeof t=="string",2055,{h:t}),new Q(t)}}class ml{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yl{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new ml(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _l{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){me(this.o===void 0,3512);const s=c=>{c.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,st("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable(()=>s(c))};const a=c=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vl(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function wl(){return new TextEncoder}/**
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
 */class Il{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=vl(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=t.charAt(a[c]%62))}return s}}function ot(i,t){return i<t?-1:i>t?1:0}function Tl(i,t){let n=0;for(;n<i.length&&n<t.length;){const s=i.codePointAt(n),a=t.codePointAt(n);if(s!==a){if(s<128&&a<128)return ot(s,a);{const c=wl(),l=Al(c.encode(Fr(i,n)),c.encode(Fr(t,n)));return l!==0?l:ot(s,a)}}n+=s>65535?2:1}return ot(i.length,t.length)}function Fr(i,t){return i.codePointAt(t)>65535?i.substring(t,t+2):i.substring(t,t+1)}function Al(i,t){for(let n=0;n<i.length&&n<t.length;++n)if(i[n]!==t[n])return ot(i[n],t[n]);return ot(i.length,t.length)}/**
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
 */const Vr="__name__";class at{constructor(t,n,s){n===void 0?n=0:n>t.length&&Ye(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&Ye(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return at.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof at?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let a=0;a<s;a++){const c=at.compareSegments(t.get(a),n.get(a));if(c!==0)return c}return ot(t.length,n.length)}static compareSegments(t,n){const s=at.isNumericId(t),a=at.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?at.extractNumericId(t).compare(at.extractNumericId(n)):Tl(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ii.fromString(t.substring(4,t.length-2))}}class rt extends at{construct(t,n,s){return new rt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const El=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends at{construct(t,n,s){return new Ot(t,n,s)}static isValidIdentifier(t){return El.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vr}static keyField(){return new Ot([Vr])}static fromServerFormat(t){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let l=!1;for(;a<t.length;){const p=t[a];if(p==="\\"){if(a+1===t.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const w=t[a+1];if(w!=="\\"&&w!=="."&&w!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=w,a+=2}else p==="`"?(l=!l,a++):p!=="."||l?(s+=p,a++):(c(),a++)}if(c(),l)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
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
 */class Mt{constructor(t){this.path=t}static fromPath(t){return new Mt(rt.fromString(t))}static fromName(t){return new Mt(rt.fromString(t).popFirst(5))}static empty(){return new Mt(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Mt(new rt(t.slice()))}}function Sl(i,t,n,s){if(t===!0&&s===!0)throw new O(k.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function bl(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function V(i,t){const n={typeString:i};return t&&(n.value=t),n}function Te(i,t){if(!bl(i))throw new O(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const a=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const l=i[s];if(a&&typeof l!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new O(k.INVALID_ARGUMENT,n);return!0}/**
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
 */const jr=-62135596800,Br=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(t){return ht.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Br);return new ht(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<jr)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Br}_compareTo(t){return this.seconds===t.seconds?ot(this.nanoseconds,t.nanoseconds):ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Te(t,ht._jsonSchema))return new ht(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-jr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:V("string",ht._jsonSchemaVersion),seconds:V("number"),nanoseconds:V("number")};function Cl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Pl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Pl("Invalid base64 string: "+c):c}}(t);return new jt(n)}static fromUint8Array(t){const n=function(a){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);return c}(t);return new jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const $r="(default)";class Qe{constructor(t,n){this.projectId=t,this.database=n||$r}static empty(){return new Qe("","")}get isDefaultDatabase(){return this.database===$r}isEqual(t){return t instanceof Qe&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */class Rl{constructor(t,n=null,s=[],a=[],c=null,l="F",p=null,w=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=l,this.startAt=p,this.endAt=w,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Nl(i){return new Rl(i)}/**
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
 */var Hr,S;(S=Hr||(Hr={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ii([4294967295,4294967295],0);/**
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
 */const kl=41943040;/**
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
 */const Ol=1048576;function $n(){return typeof document<"u"?document:null}/**
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
 */class Dl{constructor(t,n,s=1e3,a=1.5,c=6e4){this.Fi=t,this.timerId=n,this.d_=s,this.E_=a,this.A_=c,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,n-s);a>0&&st("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class ri{constructor(t,n,s,a,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,a,c){const l=Date.now()+s,p=new ri(t,n,l,a,c);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Gr,qr;(qr=Gr||(Gr={})).Fa="default",qr.Cache="cache";/**
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
 */function Ll(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const Wr=new Map;/**
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
 */const Ml="firestore.googleapis.com",zr=!0;class Kr{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ml,this.ssl=zr}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:zr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=kl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ol)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ll((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ul{constructor(t,n,s,a){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new pl;switch(s.type){case"firstParty":return new yl(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Wr.get(n);s&&(st("ComponentProvider","Removing Datastore"),Wr.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class si{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class lt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(Te(n,lt._jsonSchema))return new lt(t,s||null,new Mt(rt.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:V("string",lt._jsonSchemaVersion),referencePath:V("string")};class oi extends si{constructor(t,n,s){super(t,n,Nl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new Mt(t))}withConverter(t){return new oi(this.firestore,t,this._path)}}/**
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
 */const Jr="AsyncQueue";class Xr{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Dl(this,"async_queue_retry"),this.oc=()=>{const s=$n();s&&st(Jr,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=t;const n=$n();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const n=$n();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ye;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Cl(t))throw t;st(Jr,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const n=this._c.then(()=>(this.nc=!0,t().catch(s=>{throw this.tc=s,this.nc=!1,Js("INTERNAL UNHANDLED ERROR: ",Yr(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(t,n,s){this.ac(),this.sc.indexOf(t)>-1&&(n=0);const a=ri.createAndSchedule(this,t,n,s,c=>this.lc(c));return this.ec.push(a),a}ac(){this.tc&&Ye(47125,{hc:Yr(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const n of this.ec)if(n.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const n=this.ec.indexOf(t);this.ec.splice(n,1)}}function Yr(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class xl extends Ul{constructor(t,n,s,a){super(t,n,s,a),this.type="firestore",this._queue=new Xr,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xr(t),this._firestoreClient=void 0,await t}}}/**
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
 */class vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vt(jt.fromBase64String(t))}catch(n){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new vt(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Te(t,vt._jsonSchema))return vt.fromBase64String(t.bytes)}}vt._jsonSchemaVersion="firestore/bytes/1.0",vt._jsonSchema={type:V("string",vt._jsonSchemaVersion),bytes:V("string")};/**
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
 */class Qs{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ut{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ot(this._lat,t._lat)||ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(Te(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:V("string",Ut._jsonSchemaVersion),latitude:V("number"),longitude:V("number")};/**
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
 */class xt{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Te(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new xt(t.vectorValues);throw new O(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:V("string",xt._jsonSchemaVersion),vectorValues:V("object")};const Fl=new RegExp("[~\\*/\\[\\]]");function Vl(i,t,n){if(t.search(Fl)>=0)throw Qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Qs(...t.split("."))._internalPath}catch{throw Qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Qr(i,t,n,s,a){let c=`Function ${t}() called with invalid data`;c+=". ";let l="";return new O(k.INVALID_ARGUMENT,c+i+l)}/**
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
 */class Zs{constructor(t,n,s,a,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(to("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jl extends Zs{data(){return super.data()}}function to(i,t){return typeof t=="string"?Vl(i,t):t instanceof Qs?t._internalPath:t._delegate._internalPath}class Be{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jt extends Zs{constructor(t,n,s,a,c,l){super(t,n,s,a,l),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ge(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(to("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Jt._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jt._jsonSchema={type:V("string",Jt._jsonSchemaVersion),bundleSource:V("string","DocumentSnapshot"),bundleName:V("string"),bundle:V("string")};class Ge extends Jt{data(t={}){return super.data(t)}}class _e{constructor(t,n,s,a){this._firestore=t,this._userDataWriter=n,this._snapshot=a,this.metadata=new Be(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ge(this._firestore,this._userDataWriter,s.key,s,new Be(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,c){if(a._snapshot.oldDocs.isEmpty()){let l=0;return a._snapshot.docChanges.map(p=>{const w=new Ge(a._firestore,a._userDataWriter,p.doc.key,p.doc,new Be(a._snapshot.mutatedKeys.has(p.doc.key),a._snapshot.fromCache),a.query.converter);return p.doc,{type:"added",doc:w,oldIndex:-1,newIndex:l++}})}{let l=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(p=>c||p.type!==3).map(p=>{const w=new Ge(a._firestore,a._userDataWriter,p.doc.key,p.doc,new Be(a._snapshot.mutatedKeys.has(p.doc.key),a._snapshot.fromCache),a.query.converter);let T=-1,E=-1;return p.type!==0&&(T=l.indexOf(p.doc.key),l=l.delete(p.doc.key)),p.type!==1&&(l=l.add(p.doc),E=l.indexOf(p.doc.key)),{type:Bl(p.type),doc:w,oldIndex:T,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=_e._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Il.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Bl(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ye(61501,{type:i})}}_e._jsonSchemaVersion="firestore/querySnapshot/1.0",_e._jsonSchema={type:V("string",_e._jsonSchemaVersion),bundleSource:V("string","QuerySnapshot"),bundleName:V("string"),bundle:V("string")};(function(t,n=!0){(function(a){sn=a})(tn),dt(new ft("firestore",(s,{instanceIdentifier:a,options:c})=>{const l=s.getProvider("app").getImmediate(),p=new xl(new gl(s.getProvider("auth-internal")),new _l(l,s.getProvider("app-check-internal")),function(T,E){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qe(T.options.projectId,E)}(l,a),l);return c=Object.assign({useFetchStreams:n},c),p._setSettings(c),p},"PUBLIC").setMultipleInstances(!0)),tt(Mr,Ur,t),tt(Mr,Ur,"esm2017")})();
