(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Mm=()=>{};var Ou={};/**
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
 */const Oh=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let i=s.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lm=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const i=s[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const o=s[t++];e[n++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=s[t++],a=s[t++],u=s[t++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const o=s[t++],a=s[t++];e[n++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<s.length;i+=3){const o=s[i],a=i+1<s.length,u=a?s[i+1]:0,l=i+2<s.length,d=l?s[i+2]:0,p=o>>2,g=(o&3)<<4|u>>4;let I=(u&15)<<2|d>>6,P=d&63;l||(P=64,a||(I=64)),n.push(t[p],t[g],t[I],t[P])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Oh(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Lm(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<s.length;){const o=t[s.charAt(i++)],u=i<s.length?t[s.charAt(i)]:0;++i;const d=i<s.length?t[s.charAt(i)]:64;++i;const g=i<s.length?t[s.charAt(i)]:64;if(++i,o==null||u==null||d==null||g==null)throw new Fm;const I=o<<2|u>>4;if(n.push(I),d!==64){const P=u<<4&240|d>>2;if(n.push(P),g!==64){const k=d<<6&192|g;n.push(k)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Um=function(s){const e=Oh(s);return Mh.encodeByteArray(e,!0)},Lh=function(s){return Um(s).replace(/\./g,"")},Fh=function(s){try{return Mh.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bm=()=>Uh().__FIREBASE_DEFAULTS__,qm=()=>{if(typeof process>"u"||typeof Ou>"u")return;const s=Ou.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},jm=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Fh(s[1]);return e&&JSON.parse(e)},Bi=()=>{try{return Mm()||Bm()||qm()||jm()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},zm=s=>Bi()?.emulatorHosts?.[s],Bh=()=>Bi()?.config,qh=s=>Bi()?.[`_${s}`];/**
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
 */class $m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ar(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jh(s){return(await fetch(s,{credentials:"include"})).ok}const jr={};function Gm(){const s={prod:[],emulator:[]};for(const e of Object.keys(jr))jr[e]?s.emulator.push(e):s.prod.push(e);return s}function Km(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let Mu=!1;function Hm(s,e){if(typeof window>"u"||typeof document>"u"||!ar(window.location.host)||jr[s]===e||jr[s]||Mu)return;jr[s]=e;function t(I){return`__firebase__banner__${I}`}const n="__firebase__banner",o=Gm().prod.length>0;function a(){const I=document.getElementById(n);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function l(I,P){I.setAttribute("width","24"),I.setAttribute("id",P),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Mu=!0,a()},I}function p(I,P){I.setAttribute("id",P),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function g(){const I=Km(n),P=t("text"),k=document.getElementById(P)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),G=t("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const B=I.element;u(B),p(D,O);const re=d();l(j,G),B.append(j,k,D,re),document.body.appendChild(B)}o?(k.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function zh(){const s=Bi()?.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jm(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Xm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const s=ge();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function $h(){return!zh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gh(){return!zh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Zm(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const eg="FirebaseError";class dt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=eg,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?tg(o,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new dt(i,u,n)}}function tg(s,e){return s.replace(ng,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ng=/\{\$([^}]+)}/g;function rg(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function dn(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const o=s[i],a=e[i];if(Lu(o)&&Lu(a)){if(!dn(o,a))return!1}else if(o!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Lu(s){return s!==null&&typeof s=="object"}/**
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
 */function gs(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Or(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,o]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Mr(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function sg(s,e){const t=new ig(s,e);return t.subscribe.bind(t)}class ig{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");og(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Uo),i.error===void 0&&(i.error=Uo),i.complete===void 0&&(i.complete=Uo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function og(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Uo(){}/**
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
 */function _e(s){return s&&s._delegate?s._delegate:s}class fn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class ag{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new $m;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ug(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);n===u&&a.resolve(i)}return i}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(n)??new Set;i.add(e),this.onInitCallbacks.set(n,i);const o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:cg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cg(s){return s===Zt?void 0:s}function ug(s){return s.instantiationMode==="EAGER"}/**
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
 */class lg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ag(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(W||(W={}));const hg={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},dg=W.INFO,fg={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},pg=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),i=fg[e];if(i)console[i](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=dg,this._logHandler=pg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const mg=(s,e)=>e.some(t=>s instanceof t);let Fu,Uu;function gg(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _g(){return Uu||(Uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hh=new WeakMap,Zo=new WeakMap,Wh=new WeakMap,Bo=new WeakMap,Oa=new WeakMap;function yg(s){const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("success",o),s.removeEventListener("error",a)},o=()=>{t(Nt(s.result)),i()},a=()=>{n(s.error),i()};s.addEventListener("success",o),s.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hh.set(t,s)}).catch(()=>{}),Oa.set(e,s),e}function Ig(s){if(Zo.has(s))return;const e=new Promise((t,n)=>{const i=()=>{s.removeEventListener("complete",o),s.removeEventListener("error",a),s.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{n(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",o),s.addEventListener("error",a),s.addEventListener("abort",a)});Zo.set(s,e)}let ea={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Zo.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Wh.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Eg(s){ea=s(ea)}function Tg(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(qo(this),e,...t);return Wh.set(n,e.sort?e.sort():[e]),Nt(n)}:_g().includes(s)?function(...e){return s.apply(qo(this),e),Nt(Hh.get(this))}:function(...e){return Nt(s.apply(qo(this),e))}}function wg(s){return typeof s=="function"?Tg(s):(s instanceof IDBTransaction&&Ig(s),mg(s,gg())?new Proxy(s,ea):s)}function Nt(s){if(s instanceof IDBRequest)return yg(s);if(Bo.has(s))return Bo.get(s);const e=wg(s);return e!==s&&(Bo.set(s,e),Oa.set(e,s)),e}const qo=s=>Oa.get(s);function vg(s,e,{blocked:t,upgrade:n,blocking:i,terminated:o}={}){const a=indexedDB.open(s,e),u=Nt(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Nt(a.result),l.oldVersion,l.newVersion,Nt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Ag=["get","getKey","getAll","getAllKeys","count"],Rg=["put","add","delete","clear"],jo=new Map;function Bu(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(jo.get(e))return jo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Rg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ag.includes(t)))return;const o=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return jo.set(e,o),o}Eg(s=>({...s,get:(e,t,n)=>Bu(e,t)||s.get(e,t,n),has:(e,t)=>!!Bu(e,t)||s.has(e,t)}));/**
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
 */class Sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function bg(s){return s.getComponent()?.type==="VERSION"}const ta="@firebase/app",qu="0.14.4";/**
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
 */const ct=new xa("@firebase/app"),Pg="@firebase/app-compat",Cg="@firebase/analytics-compat",Vg="@firebase/analytics",Dg="@firebase/app-check-compat",kg="@firebase/app-check",Ng="@firebase/auth",xg="@firebase/auth-compat",Og="@firebase/database",Mg="@firebase/data-connect",Lg="@firebase/database-compat",Fg="@firebase/functions",Ug="@firebase/functions-compat",Bg="@firebase/installations",qg="@firebase/installations-compat",jg="@firebase/messaging",zg="@firebase/messaging-compat",$g="@firebase/performance",Gg="@firebase/performance-compat",Kg="@firebase/remote-config",Hg="@firebase/remote-config-compat",Wg="@firebase/storage",Qg="@firebase/storage-compat",Jg="@firebase/firestore",Xg="@firebase/ai",Yg="@firebase/firestore-compat",Zg="firebase",e_="12.4.0";/**
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
 */const na="[DEFAULT]",t_={[ta]:"fire-core",[Pg]:"fire-core-compat",[Vg]:"fire-analytics",[Cg]:"fire-analytics-compat",[kg]:"fire-app-check",[Dg]:"fire-app-check-compat",[Ng]:"fire-auth",[xg]:"fire-auth-compat",[Og]:"fire-rtdb",[Mg]:"fire-data-connect",[Lg]:"fire-rtdb-compat",[Fg]:"fire-fn",[Ug]:"fire-fn-compat",[Bg]:"fire-iid",[qg]:"fire-iid-compat",[jg]:"fire-fcm",[zg]:"fire-fcm-compat",[$g]:"fire-perf",[Gg]:"fire-perf-compat",[Kg]:"fire-rc",[Hg]:"fire-rc-compat",[Wg]:"fire-gcs",[Qg]:"fire-gcs-compat",[Jg]:"fire-fst",[Yg]:"fire-fst-compat",[Xg]:"fire-vertex","fire-js":"fire-js",[Zg]:"fire-js-all"};/**
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
 */const gi=new Map,n_=new Map,ra=new Map;function ju(s,e){try{s.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function Hn(s){const e=s.name;if(ra.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,s);for(const t of gi.values())ju(t,s);for(const t of n_.values())ju(t,s);return!0}function Ma(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Ue(s){return s==null?!1:s.settings!==void 0}/**
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
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new ms("app","Firebase",r_);/**
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
 */class s_{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=e_;function Qh(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:na,automaticDataCollectionEnabled:!0,...e},i=n.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(t||(t=Bh()),!t)throw xt.create("no-options");const o=gi.get(i);if(o){if(dn(t,o.options)&&dn(n,o.config))return o;throw xt.create("duplicate-app",{appName:i})}const a=new lg(i);for(const l of ra.values())a.addComponent(l);const u=new s_(t,n,a);return gi.set(i,u),u}function i_(s=na){const e=gi.get(s);if(!e&&s===na&&Bh())return Qh();if(!e)throw xt.create("no-app",{appName:s});return e}function Ot(s,e,t){let n=t_[s]??s;t&&(n+=`-${t}`);const i=n.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${n}" with version "${e}":`];i&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}Hn(new fn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const o_="firebase-heartbeat-database",a_=1,Yr="firebase-heartbeat-store";let zo=null;function Jh(){return zo||(zo=vg(o_,a_,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(s=>{throw xt.create("idb-open",{originalErrorMessage:s.message})})),zo}async function c_(s){try{const t=(await Jh()).transaction(Yr),n=await t.objectStore(Yr).get(Xh(s));return await t.done,n}catch(e){if(e instanceof dt)ct.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e?.message});ct.warn(t.message)}}}async function zu(s,e){try{const n=(await Jh()).transaction(Yr,"readwrite");await n.objectStore(Yr).put(e,Xh(s)),await n.done}catch(t){if(t instanceof dt)ct.warn(t.message);else{const n=xt.create("idb-set",{originalErrorMessage:t?.message});ct.warn(n.message)}}}function Xh(s){return`${s.name}!${s.options.appId}`}/**
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
 */const u_=1024,l_=30;class h_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=$u();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>l_){const i=p_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ct.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$u(),{heartbeatsToSend:t,unsentEntries:n}=d_(this._heartbeatsCache.heartbeats),i=Lh(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ct.warn(e),""}}}function $u(){return new Date().toISOString().substring(0,10)}function d_(s,e=u_){const t=[];let n=s.slice();for(const i of s){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Gu(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class f_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kh()?Zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await c_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return zu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return zu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Gu(s){return Lh(JSON.stringify({version:2,heartbeats:s})).length}function p_(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
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
 */function m_(s){Hn(new fn("platform-logger",e=>new Sg(e),"PRIVATE")),Hn(new fn("heartbeat",e=>new h_(e),"PRIVATE")),Ot(ta,qu,s),Ot(ta,qu,"esm2020"),Ot("fire-js","")}m_("");function Yh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g_=Yh,Zh=new ms("auth","Firebase",Yh());/**
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
 */const _i=new xa("@firebase/auth");function __(s,...e){_i.logLevel<=W.WARN&&_i.warn(`Auth (${cr}): ${s}`,...e)}function ei(s,...e){_i.logLevel<=W.ERROR&&_i.error(`Auth (${cr}): ${s}`,...e)}/**
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
 */function Ge(s,...e){throw La(s,...e)}function Xe(s,...e){return La(s,...e)}function ed(s,e,t){const n={...g_(),[e]:t};return new ms("auth","Firebase",n).create(e,{appName:s.name})}function at(s){return ed(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function La(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return Zh.create(s,...e)}function q(s,e,...t){if(!s)throw La(e,...t)}function st(s){const e="INTERNAL ASSERTION FAILED: "+s;throw ei(e),new Error(e)}function ut(s,e){s||st(e)}/**
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
 */function sa(){return typeof self<"u"&&self.location?.href||""}function y_(){return Ku()==="http:"||Ku()==="https:"}function Ku(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y_()||Jm()||"connection"in navigator)?navigator.onLine:!0}function E_(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class _s{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=Wm()||Xm()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fa(s,e){ut(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class td{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v_=new _s(3e4,6e4);function ft(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function pt(s,e,t,n,i={}){return nd(s,i,async()=>{let o={},a={};n&&(e==="GET"?a=n:o={body:JSON.stringify(n)});const u=gs({key:s.config.apiKey,...a}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const d={method:e,headers:l,...o};return Qm()||(d.referrerPolicy="no-referrer"),s.emulatorConfig&&ar(s.emulatorConfig.host)&&(d.credentials="include"),td.fetch()(await rd(s,s.config.apiHost,t,u),d)})}async function nd(s,e,t){s._canInitEmulator=!1;const n={...T_,...e};try{const i=new R_(s),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ks(s,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ks(s,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ks(s,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ks(s,"user-disabled",a);const p=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ed(s,p,d);Ge(s,p)}}catch(i){if(i instanceof dt)throw i;Ge(s,"network-request-failed",{message:String(i)})}}async function ys(s,e,t,n,i={}){const o=await pt(s,e,t,n,i);return"mfaPendingCredential"in o&&Ge(s,"multi-factor-auth-required",{_serverResponse:o}),o}async function rd(s,e,t,n){const i=`${e}${t}?${n}`,o=s,a=o.config.emulator?Fa(s.config,i):`${s.config.apiScheme}://${i}`;return w_.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function A_(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xe(this.auth,"network-request-failed")),v_.get())})}}function Ks(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Xe(s,e,n);return i.customData._tokenResponse=t,i}function Hu(s){return s!==void 0&&s.enterprise!==void 0}class S_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function b_(s,e){return pt(s,"GET","/v2/recaptchaConfig",ft(s,e))}/**
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
 */async function P_(s,e){return pt(s,"POST","/v1/accounts:delete",e)}async function yi(s,e){return pt(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function zr(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C_(s,e=!1){const t=_e(s),n=await t.getIdToken(e),i=Ua(n);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:n,authTime:zr($o(i.auth_time)),issuedAtTime:zr($o(i.iat)),expirationTime:zr($o(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function $o(s){return Number(s)*1e3}function Ua(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fh(t);return i?JSON.parse(i):(ei("Failed to decode base64 JWT payload"),null)}catch(i){return ei("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Wu(s){const e=Ua(s);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zr(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof dt&&V_(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function V_({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class D_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(s){const e=s.auth,t=await s.getIdToken(),n=await Zr(s,yi(e,{idToken:t}));q(n?.users.length,e,"internal-error");const i=n.users[0];s._notifyReloadListener(i);const o=i.providerUserInfo?.length?sd(i.providerUserInfo):[],a=N_(s.providerData,o),u=s.isAnonymous,l=!(s.email&&i.passwordHash)&&!a?.length,d=u?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(s,p)}async function k_(s){const e=_e(s);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N_(s,e){return[...s.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function sd(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function x_(s,e){const t=await nd(s,{},async()=>{const n=gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=s.config,a=await rd(s,i,"/v1/token",`key=${o}`),u=await s._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:n};return s.emulatorConfig&&ar(s.emulatorConfig.host)&&(l.credentials="include"),td.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function O_(s,e){return pt(s,"POST","/v2/accounts:revokeToken",ft(s,e))}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Wu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await x_(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:o}=t,a=new jn;return n&&(q(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function vt(s,e){q(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class $e{constructor({uid:e,auth:t,stsTokenManager:n,...i}){this.providerId="firebase",this.proactiveRefresh=new D_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ia(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return C_(this,e)}reload(){return k_(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $e({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await Zr(this,P_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,i=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:I,isAnonymous:P,providerData:k,stsTokenManager:O}=t;q(g&&O,e,"internal-error");const D=jn.fromJSON(this.name,O);q(typeof g=="string",e,"internal-error"),vt(n,e.name),vt(i,e.name),q(typeof I=="boolean",e,"internal-error"),q(typeof P=="boolean",e,"internal-error"),vt(o,e.name),vt(a,e.name),vt(u,e.name),vt(l,e.name),vt(d,e.name),vt(p,e.name);const G=new $e({uid:g,auth:e,email:i,emailVerified:I,displayName:n,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:D,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(G.providerData=k.map(j=>({...j}))),l&&(G._redirectEventId=l),G}static async _fromIdTokenResponse(e,t,n=!1){const i=new jn;i.updateFromServerResponse(t);const o=new $e({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ii(o),o}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?sd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,u=new jn;u.updateFromIdToken(n);const l=new $e({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(l,d),l}}/**
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
 */const Qu=new Map;function it(s){ut(s instanceof Function,"Expected a class definition");let e=Qu.get(s);return e?(ut(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Qu.set(s,e),e)}/**
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
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}id.type="NONE";const Ju=id;/**
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
 */function ti(s,e,t){return`firebase:${s}:${e}:${t}`}class zn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,o),this.fullPersistenceKey=ti("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yi(this.auth,{idToken:e}).catch(()=>{});return t?$e._fromGetAccountInfoResponse(this.auth,t,e):null}return $e._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zn(it(Ju),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||it(Ju);const a=ti(n,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const I=await yi(e,{idToken:p}).catch(()=>{});if(!I)break;g=await $e._fromGetAccountInfoResponse(e,I,p)}else g=$e._fromJSON(e,p);d!==o&&(u=g),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new zn(o,e,n):(o=l[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new zn(o,e,n))}}/**
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
 */function Xu(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hd(e))return"Blackberry";if(dd(e))return"Webos";if(ad(e))return"Safari";if((e.includes("chrome/")||cd(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if(n?.length===2)return n[1]}return"Other"}function od(s=ge()){return/firefox\//i.test(s)}function ad(s=ge()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cd(s=ge()){return/crios\//i.test(s)}function ud(s=ge()){return/iemobile/i.test(s)}function ld(s=ge()){return/android/i.test(s)}function hd(s=ge()){return/blackberry/i.test(s)}function dd(s=ge()){return/webos/i.test(s)}function Ba(s=ge()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function M_(s=ge()){return Ba(s)&&!!window.navigator?.standalone}function L_(){return Ym()&&document.documentMode===10}function fd(s=ge()){return Ba(s)||ld(s)||dd(s)||hd(s)||/windows phone/i.test(s)||ud(s)}/**
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
 */function pd(s,e=[]){let t;switch(s){case"Browser":t=Xu(ge());break;case"Worker":t=`${Xu(ge())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cr}/${n}`}/**
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
 */class F_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=o=>new Promise((a,u)=>{try{const l=e(o);a(l)}catch(l){u(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function U_(s,e={}){return pt(s,"GET","/v2/passwordPolicy",ft(s,e))}/**
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
 */const B_=6;class q_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??B_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class j_{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yu(this),this.idTokenSubscription=new Yu(this),this.beforeStateQueue=new F_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=it(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yi(this,{idToken:e}),n=await $e._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=n?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&u?.user&&(n=u.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(at(this));const t=e?_e(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),t=new q_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await O_(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&it(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[it(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&__(`Error while retrieving App Check token: ${e.error}`),e?.token}}function vn(s){return _e(s)}class Yu{constructor(e){this.auth=e,this.observer=null,this.addObserver=sg(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function z_(s){qi=s}function md(s){return qi.loadJS(s)}function $_(){return qi.recaptchaEnterpriseScript}function G_(){return qi.gapiScript}function K_(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class H_{constructor(){this.enterprise=new W_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class W_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Q_="recaptcha-enterprise",gd="NO_RECAPTCHA";class J_{constructor(e){this.type=Q_,this.auth=vn(e)}async verify(e="verify",t=!1){async function n(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{b_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new S_(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(o,a,u){const l=window.grecaptcha;Hu(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(gd)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new H_().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{n(this.auth).then(u=>{if(!t&&Hu(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$_();l.length!==0&&(l+=u),md(l).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Zu(s,e,t,n=!1,i=!1){const o=new J_(s);let a;if(i)a=gd;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return n?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function oa(s,e,t,n,i){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zu(s,e,t,t==="getOobCode");return n(s,o)}else return n(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zu(s,e,t,t==="getOobCode");return n(s,a)}else return Promise.reject(o)})}/**
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
 */function X_(s,e){const t=Ma(s,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(dn(o,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function Y_(s,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(it);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function Z_(s,e,t){const n=vn(s);q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,o=_d(e),{host:a,port:u}=ey(e),l=u===null?"":`:${u}`,d={url:`${o}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){q(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),q(dn(d,n.config.emulator)&&dn(p,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=p,n.settings.appVerificationDisabledForTesting=!0,ar(a)?(jh(`${o}//${a}${l}`),Hm("Auth",!0)):ty()}function _d(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function ey(s){const e=_d(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const o=i[1];return{host:o,port:el(n.substr(o.length+1))}}else{const[o,a]=n.split(":");return{host:o,port:el(a)}}}function el(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function ty(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class qa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}async function ny(s,e){return pt(s,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ry(s,e){return ys(s,"POST","/v1/accounts:signInWithPassword",ft(s,e))}async function sy(s,e){return pt(s,"POST","/v1/accounts:sendOobCode",ft(s,e))}async function iy(s,e){return sy(s,e)}/**
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
 */async function oy(s,e){return ys(s,"POST","/v1/accounts:signInWithEmailLink",ft(s,e))}async function ay(s,e){return ys(s,"POST","/v1/accounts:signInWithEmailLink",ft(s,e))}/**
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
 */class es extends qa{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new es(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new es(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oa(e,t,"signInWithPassword",ry);case"emailLink":return oy(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oa(e,n,"signUpPassword",ny);case"emailLink":return ay(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $n(s,e){return ys(s,"POST","/v1/accounts:signInWithIdp",ft(s,e))}/**
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
 */const cy="http://localhost";class pn extends qa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,...o}=t;if(!n||!i)return null;const a=new pn(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $n(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$n(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$n(e,t)}buildRequest(){const e={requestUri:cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gs(t)}return e}}/**
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
 */function uy(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ly(s){const e=Or(Mr(s)).link,t=e?Or(Mr(e)).deep_link_id:null,n=Or(Mr(s)).deep_link_id;return(n?Or(Mr(n)).link:null)||n||t||e||s}class ja{constructor(e){const t=Or(Mr(e)),n=t.apiKey??null,i=t.oobCode??null,o=uy(t.mode??null);q(n&&i&&o,"argument-error"),this.apiKey=n,this.operation=o,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ly(e);try{return new ja(t)}catch{return null}}}/**
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
 */class ur{constructor(){this.providerId=ur.PROVIDER_ID}static credential(e,t){return es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ja.parseLink(t);return q(n,"argument-error"),es._fromEmailAndCode(e,n.code,n.tenantId)}}ur.PROVIDER_ID="password";ur.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ur.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends Is{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Ct extends Is{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class Vt extends Is{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vt.credential(t,n)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */async function hy(s,e){return ys(s,"POST","/v1/accounts:signUp",ft(s,e))}/**
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
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const o=await $e._fromIdTokenResponse(e,n,i),a=tl(n);return new mn({user:o,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=tl(n);return new mn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function tl(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Ei extends dt{constructor(e,t,n,i){super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ei(e,t,n,i)}}function Id(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ei._fromErrorAndOperation(s,o,e,n):o})}async function dy(s,e,t=!1){const n=await Zr(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return mn._forOperation(s,"link",n)}/**
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
 */async function fy(s,e,t=!1){const{auth:n}=s;if(Ue(n.app))return Promise.reject(at(n));const i="reauthenticate";try{const o=await Zr(s,Id(n,i,e,s),t);q(o.idToken,n,"internal-error");const a=Ua(o.idToken);q(a,n,"internal-error");const{sub:u}=a;return q(s.uid===u,n,"user-mismatch"),mn._forOperation(s,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ge(n,"user-mismatch"),o}}/**
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
 */async function Ed(s,e,t=!1){if(Ue(s.app))return Promise.reject(at(s));const n="signIn",i=await Id(s,n,e),o=await mn._fromIdTokenResponse(s,n,i);return t||await s._updateCurrentUser(o.user),o}async function py(s,e){return Ed(vn(s),e)}/**
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
 */async function Td(s){const e=vn(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bv(s,e,t){if(Ue(s.app))return Promise.reject(at(s));const n=vn(s),a=await oa(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Td(s),l}),u=await mn._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(u.user),u}function Pv(s,e,t){return Ue(s.app)?Promise.reject(at(s)):py(_e(s),ur.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Td(s),n})}async function Cv(s,e){const t=_e(s),i={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()},{email:o}=await iy(t.auth,i);o!==s.email&&await s.reload()}function my(s,e,t,n){return _e(s).onIdTokenChanged(e,t,n)}function gy(s,e,t){return _e(s).beforeAuthStateChanged(e,t)}function _y(s,e,t,n){return _e(s).onAuthStateChanged(e,t,n)}function Vv(s){return _e(s).signOut()}const Ti="__sak";/**
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
 */class wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yy=1e3,Iy=10;class vd extends wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},o=this.storage.getItem(n);L_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Iy):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const Ey=vd;/**
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
 */class Ad extends wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ad.type="SESSION";const Rd=Ad;/**
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
 */function Ty(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ji{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ji(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),l=await Ty(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
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
 */function za(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
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
 */class wy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,l)=>{const d=za("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(g){const I=g;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(I.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function vy(s){Ye().location.href=s}/**
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
 */function Sd(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Ay(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ry(){return navigator?.serviceWorker?.controller||null}function Sy(){return Sd()?self:null}/**
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
 */const bd="firebaseLocalStorageDb",by=1,wi="firebaseLocalStorage",Pd="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zi(s,e){return s.transaction([wi],e?"readwrite":"readonly").objectStore(wi)}function Py(){const s=indexedDB.deleteDatabase(bd);return new Es(s).toPromise()}function aa(){const s=indexedDB.open(bd,by);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(wi,{keyPath:Pd})}catch(i){t(i)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(wi)?e(n):(n.close(),await Py(),e(await aa()))})})}async function nl(s,e,t){const n=zi(s,!0).put({[Pd]:e,value:t});return new Es(n).toPromise()}async function Cy(s,e){const t=zi(s,!1).get(e),n=await new Es(t).toPromise();return n===void 0?null:n.value}function rl(s,e){const t=zi(s,!0).delete(e);return new Es(t).toPromise()}const Vy=800,Dy=3;class Cd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await aa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Dy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(Sy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ay(),!this.activeServiceWorker)return;this.sender=new wy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ry()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await aa();return await nl(e,Ti,"1"),await rl(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nl(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Cy(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=zi(i,!1).getAll();return new Es(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cd.type="LOCAL";const ky=Cd;new _s(3e4,6e4);/**
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
 */function Ny(s,e){return e?it(e):(q(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class $a extends qa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xy(s){return Ed(s.auth,new $a(s),s.bypassAuthState)}function Oy(s){const{auth:e,user:t}=s;return q(t,e,"internal-error"),fy(t,new $a(s),s.bypassAuthState)}async function My(s){const{auth:e,user:t}=s;return q(t,e,"internal-error"),dy(t,new $a(s),s.bypassAuthState)}/**
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
 */class Vd{constructor(e,t,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xy;case"linkViaPopup":case"linkViaRedirect":return My;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:Ge(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ly=new _s(2e3,1e4);class qn extends Vd{constructor(e,t,n,i,o){super(e,t,i,o),this.provider=n,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ly.get())};e()}}qn.currentPopupAction=null;/**
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
 */const Fy="pendingRedirect",ni=new Map;class Uy extends Vd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const n=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function By(s,e){const t=zy(e),n=jy(s);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function qy(s,e){ni.set(s._key(),e)}function jy(s){return it(s._redirectPersistence)}function zy(s){return ti(Fy,s.config.apiKey,s.name)}async function $y(s,e,t=!1){if(Ue(s.app))return Promise.reject(at(s));const n=vn(s),i=Ny(n,e),a=await new Uy(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Gy=600*1e3;class Ky{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Dd(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Xe(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gy&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(e))}saveEventToCache(e){this.cachedEventUids.add(sl(e)),this.lastProcessedEventTime=Date.now()}}function sl(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Dd({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function Hy(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dd(s);default:return!1}}/**
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
 */async function Wy(s,e={}){return pt(s,"GET","/v1/projects",e)}/**
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
 */const Qy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jy=/^https?/;async function Xy(s){if(s.config.emulator)return;const{authorizedDomains:e}=await Wy(s);for(const t of e)try{if(Yy(t))return}catch{}Ge(s,"unauthorized-domain")}function Yy(s){const e=sa(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const a=new URL(s);return a.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Jy.test(t))return!1;if(Qy.test(s))return n===s;const i=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const Zy=new _s(3e4,6e4);function il(){const s=Ye().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function eI(s){return new Promise((e,t)=>{function n(){il(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{il(),t(Xe(s,"network-request-failed"))},timeout:Zy.get()})}if(Ye().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ye().gapi?.load)n();else{const i=K_("iframefcb");return Ye()[i]=()=>{gapi.load?n():t(Xe(s,"network-request-failed"))},md(`${G_()}?onload=${i}`).catch(o=>t(o))}}).catch(e=>{throw ri=null,e})}let ri=null;function tI(s){return ri=ri||eI(s),ri}/**
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
 */const nI=new _s(5e3,15e3),rI="__/auth/iframe",sI="emulator/auth/iframe",iI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aI(s){const e=s.config;q(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Fa(e,sI):`https://${s.config.authDomain}/${rI}`,n={apiKey:e.apiKey,appName:s.name,v:cr},i=oI.get(s.config.apiHost);i&&(n.eid=i);const o=s._getFrameworks();return o.length&&(n.fw=o.join(",")),`${t}?${gs(n).slice(1)}`}async function cI(s){const e=await tI(s),t=Ye().gapi;return q(t,s,"internal-error"),e.open({where:document.body,url:aI(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iI,dontclear:!0},n=>new Promise(async(i,o)=>{await n.restyle({setHideOnLeave:!1});const a=Xe(s,"network-request-failed"),u=Ye().setTimeout(()=>{o(a)},nI.get());function l(){Ye().clearTimeout(u),i(n)}n.ping(l).then(l,()=>{o(a)})}))}/**
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
 */const uI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lI=500,hI=600,dI="_blank",fI="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pI(s,e,t,n=lI,i=hI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const l={...uI,width:n.toString(),height:i.toString(),top:o,left:a},d=ge().toLowerCase();t&&(u=cd(d)?dI:t),od(d)&&(e=e||fI,l.scrollbars="yes");const p=Object.entries(l).reduce((I,[P,k])=>`${I}${P}=${k},`,"");if(M_(d)&&u!=="_self")return mI(e||"",u),new ol(null);const g=window.open(e||"",u,p);q(g,s,"popup-blocked");try{g.focus()}catch{}return new ol(g)}function mI(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gI="__/auth/handler",_I="emulator/auth/handler",yI=encodeURIComponent("fac");async function al(s,e,t,n,i,o){q(s.config.authDomain,s,"auth-domain-config-required"),q(s.config.apiKey,s,"invalid-api-key");const a={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:cr,eventId:i};if(e instanceof yd){e.setDefaultLanguage(s.languageCode),a.providerId=e.providerId||"",rg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Is){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}s.tenantId&&(a.tid=s.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await s._getAppCheckToken(),d=l?`#${yI}=${encodeURIComponent(l)}`:"";return`${II(s)}?${gs(u).slice(1)}${d}`}function II({config:s}){return s.emulator?Fa(s,_I):`https://${s.authDomain}/${gI}`}/**
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
 */const Go="webStorageSupport";class EI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rd,this._completeRedirectFn=$y,this._overrideRedirectResult=qy}async _openPopup(e,t,n,i){ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await al(e,t,n,sa(),i);return pI(e,o,za())}async _openRedirect(e,t,n,i){await this._originValidation(e);const o=await al(e,t,n,sa(),i);return vy(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(ut(o,"If manager is not set, promise should be"),o)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cI(e),n=new Ky(e);return t.register("authEvent",i=>(q(i?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Go,{type:Go},i=>{const o=i?.[0]?.[Go];o!==void 0&&t(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fd()||ad()||Ba()}}const TI=EI;var cl="@firebase/auth",ul="1.11.0";/**
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
 */class wI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AI(s){Hn(new fn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:u,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pd(s)},d=new j_(n,i,o,l);return Y_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Hn(new fn("auth-internal",e=>{const t=vn(e.getProvider("auth").getImmediate());return(n=>new wI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(cl,ul,vI(s)),Ot(cl,ul,"esm2020")}/**
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
 */const RI=300,SI=qh("authIdTokenMaxAge")||RI;let ll=null;const bI=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>SI)return;const i=t?.token;ll!==i&&(ll=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function PI(s=i_()){const e=Ma(s,"auth");if(e.isInitialized())return e.getImmediate();const t=X_(s,{popupRedirectResolver:TI,persistence:[ky,Ey,Rd]}),n=qh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(n,location.origin);if(location.origin===o.origin){const a=bI(o.toString());gy(t,a,()=>a(t.currentUser)),my(t,u=>a(u))}}const i=zm("auth");return i&&Z_(t,`http://${i}`),t}function CI(){return document.getElementsByTagName("head")?.[0]??document}z_({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=i=>{const o=Xe("internal-error");o.customData=i,t(o)},n.type="text/javascript",n.charset="UTF-8",CI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AI("Browser");var VI="firebase",DI="12.4.0";/**
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
 */Ot(VI,DI,"app");var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,kd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.F=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.D=function(v,w,S){for(var y=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)y[Ne-2]=arguments[Ne];return _.prototype[w].apply(v,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)v[w]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(w=0;w<16;++w)v[w]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],w=T.g[2];let S=T.g[3],y;y=_+(S^E&(w^S))+v[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(w^_&(E^w))+v[1]+3905402710&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(E^S&(_^E))+v[2]+606105819&4294967295,w=S+(y<<17&4294967295|y>>>15),y=E+(_^w&(S^_))+v[3]+3250441966&4294967295,E=w+(y<<22&4294967295|y>>>10),y=_+(S^E&(w^S))+v[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(w^_&(E^w))+v[5]+1200080426&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(E^S&(_^E))+v[6]+2821735955&4294967295,w=S+(y<<17&4294967295|y>>>15),y=E+(_^w&(S^_))+v[7]+4249261313&4294967295,E=w+(y<<22&4294967295|y>>>10),y=_+(S^E&(w^S))+v[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(w^_&(E^w))+v[9]+2336552879&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(E^S&(_^E))+v[10]+4294925233&4294967295,w=S+(y<<17&4294967295|y>>>15),y=E+(_^w&(S^_))+v[11]+2304563134&4294967295,E=w+(y<<22&4294967295|y>>>10),y=_+(S^E&(w^S))+v[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=S+(w^_&(E^w))+v[13]+4254626195&4294967295,S=_+(y<<12&4294967295|y>>>20),y=w+(E^S&(_^E))+v[14]+2792965006&4294967295,w=S+(y<<17&4294967295|y>>>15),y=E+(_^w&(S^_))+v[15]+1236535329&4294967295,E=w+(y<<22&4294967295|y>>>10),y=_+(w^S&(E^w))+v[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^w&(_^E))+v[6]+3225465664&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^E&(S^_))+v[11]+643717713&4294967295,w=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(w^S))+v[0]+3921069994&4294967295,E=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(E^w))+v[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^w&(_^E))+v[10]+38016083&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^E&(S^_))+v[15]+3634488961&4294967295,w=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(w^S))+v[4]+3889429448&4294967295,E=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(E^w))+v[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^w&(_^E))+v[14]+3275163606&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^E&(S^_))+v[3]+4107603335&4294967295,w=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(w^S))+v[8]+1163531501&4294967295,E=w+(y<<20&4294967295|y>>>12),y=_+(w^S&(E^w))+v[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=S+(E^w&(_^E))+v[2]+4243563512&4294967295,S=_+(y<<9&4294967295|y>>>23),y=w+(_^E&(S^_))+v[7]+1735328473&4294967295,w=S+(y<<14&4294967295|y>>>18),y=E+(S^_&(w^S))+v[12]+2368359562&4294967295,E=w+(y<<20&4294967295|y>>>12),y=_+(E^w^S)+v[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^w)+v[8]+2272392833&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^E)+v[11]+1839030562&4294967295,w=S+(y<<16&4294967295|y>>>16),y=E+(w^S^_)+v[14]+4259657740&4294967295,E=w+(y<<23&4294967295|y>>>9),y=_+(E^w^S)+v[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^w)+v[4]+1272893353&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^E)+v[7]+4139469664&4294967295,w=S+(y<<16&4294967295|y>>>16),y=E+(w^S^_)+v[10]+3200236656&4294967295,E=w+(y<<23&4294967295|y>>>9),y=_+(E^w^S)+v[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^w)+v[0]+3936430074&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^E)+v[3]+3572445317&4294967295,w=S+(y<<16&4294967295|y>>>16),y=E+(w^S^_)+v[6]+76029189&4294967295,E=w+(y<<23&4294967295|y>>>9),y=_+(E^w^S)+v[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=S+(_^E^w)+v[12]+3873151461&4294967295,S=_+(y<<11&4294967295|y>>>21),y=w+(S^_^E)+v[15]+530742520&4294967295,w=S+(y<<16&4294967295|y>>>16),y=E+(w^S^_)+v[2]+3299628645&4294967295,E=w+(y<<23&4294967295|y>>>9),y=_+(w^(E|~S))+v[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~w))+v[7]+1126891415&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~E))+v[14]+2878612391&4294967295,w=S+(y<<15&4294967295|y>>>17),y=E+(S^(w|~_))+v[5]+4237533241&4294967295,E=w+(y<<21&4294967295|y>>>11),y=_+(w^(E|~S))+v[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~w))+v[3]+2399980690&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~E))+v[10]+4293915773&4294967295,w=S+(y<<15&4294967295|y>>>17),y=E+(S^(w|~_))+v[1]+2240044497&4294967295,E=w+(y<<21&4294967295|y>>>11),y=_+(w^(E|~S))+v[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~w))+v[15]+4264355552&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~E))+v[6]+2734768916&4294967295,w=S+(y<<15&4294967295|y>>>17),y=E+(S^(w|~_))+v[13]+1309151649&4294967295,E=w+(y<<21&4294967295|y>>>11),y=_+(w^(E|~S))+v[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=S+(E^(_|~w))+v[11]+3174756917&4294967295,S=_+(y<<10&4294967295|y>>>22),y=w+(_^(S|~E))+v[2]+718787259&4294967295,w=S+(y<<15&4294967295|y>>>17),y=E+(S^(w|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+S&4294967295}n.prototype.v=function(T,_){_===void 0&&(_=T.length);const E=_-this.blockSize,v=this.C;let w=this.h,S=0;for(;S<_;){if(w==0)for(;S<=E;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(v[w++]=T.charCodeAt(S++),w==this.blockSize){i(this,v),w=0;break}}else for(;S<_;)if(v[w++]=T[S++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=_},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var E=T.length-8;E<T.length;++E)T[E]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)T[_++]=this.g[E]>>>v&255;return T};function o(T,_){var E=u;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function a(T,_){this.h=_;const E=[];let v=!0;for(let w=T.length-1;w>=0;w--){const S=T[w]|0;v&&S==_||(E[w]=S,v=!1)}this.g=E}var u={};function l(T){return-128<=T&&T<128?o(T,function(_){return new a([_|0],_<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return D(d(-T));const _=[];let E=1;for(let v=0;T>=E;v++)_[v]=T/E|0,E*=4294967296;return new a(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(p(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=d(Math.pow(_,8));let v=g;for(let S=0;S<T.length;S+=8){var w=Math.min(8,T.length-S);const y=parseInt(T.substring(S,S+w),_);w<8?(w=d(Math.pow(_,w)),v=v.j(w).add(d(y))):(v=v.j(E),v=v.add(d(y)))}return v}var g=l(0),I=l(1),P=l(16777216);s=a.prototype,s.m=function(){if(O(this))return-D(this).m();let T=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);T+=(v>=0?v:4294967296+v)*_,_*=4294967296}return T},s.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(O(this))return"-"+D(this).toString(T);const _=d(Math.pow(T,6));var E=this;let v="";for(;;){const w=re(E,_).g;E=G(E,w.j(_));let S=((E.g.length>0?E.g[0]:E.h)>>>0).toString(T);if(E=w,k(E))return S+v;for(;S.length<6;)S="0"+S;v=S+v}},s.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function O(T){return T.h==-1}s.l=function(T){return T=G(this,T),O(T)?-1:k(T)?0:1};function D(T){const _=T.g.length,E=[];for(let v=0;v<_;v++)E[v]=~T.g[v];return new a(E,~T.h).add(I)}s.abs=function(){return O(this)?D(this):this},s.add=function(T){const _=Math.max(this.g.length,T.g.length),E=[];let v=0;for(let w=0;w<=_;w++){let S=v+(this.i(w)&65535)+(T.i(w)&65535),y=(S>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=y>>>16,S&=65535,y&=65535,E[w]=y<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function G(T,_){return T.add(D(_))}s.j=function(T){if(k(this)||k(T))return g;if(O(this))return O(T)?D(this).j(D(T)):D(D(this).j(T));if(O(T))return D(this.j(D(T)));if(this.l(P)<0&&T.l(P)<0)return d(this.m()*T.m());const _=this.g.length+T.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const S=this.i(v)>>>16,y=this.i(v)&65535,Ne=T.i(w)>>>16,Gt=T.i(w)&65535;E[2*v+2*w]+=y*Gt,j(E,2*v+2*w),E[2*v+2*w+1]+=S*Gt,j(E,2*v+2*w+1),E[2*v+2*w+1]+=y*Ne,j(E,2*v+2*w+1),E[2*v+2*w+2]+=S*Ne,j(E,2*v+2*w+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new a(E,0)};function j(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function B(T,_){this.g=T,this.h=_}function re(T,_){if(k(_))throw Error("division by zero");if(k(T))return new B(g,g);if(O(T))return _=re(D(T),_),new B(D(_.g),D(_.h));if(O(_))return _=re(T,D(_)),new B(D(_.g),_.h);if(T.g.length>30){if(O(T)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var E=I,v=_;v.l(T)<=0;)E=Y(E),v=Y(v);var w=J(E,1),S=J(v,1);for(v=J(v,2),E=J(E,2);!k(v);){var y=S.add(v);y.l(T)<=0&&(w=w.add(E),S=y),v=J(v,1),E=J(E,1)}return _=G(T,w.j(_)),new B(w,_)}for(w=g;T.l(_)>=0;){for(E=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),S=d(E),y=S.j(_);O(y)||y.l(T)>0;)E-=v,S=d(E),y=S.j(_);k(S)&&(S=I),w=w.add(S),T=G(T,y)}return new B(w,T)}s.B=function(T){return re(this,T).h},s.and=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&T.i(v);return new a(E,this.h&T.h)},s.or=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|T.i(v);return new a(E,this.h|T.h)},s.xor=function(T){const _=Math.max(this.g.length,T.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^T.i(v);return new a(E,this.h^T.h)};function Y(T){const _=T.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(E,T.h)}function J(T,_){const E=_>>5;_%=32;const v=T.g.length-E,w=[];for(let S=0;S<v;S++)w[S]=_>0?T.i(S+E)>>>_|T.i(S+E+1)<<32-_:T.i(S+E);return new a(w,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,kd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Mt=a}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nd,Lr,xd,si,ca,Od,Md,Ld;(function(){var s,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var h=0;h<c.length;++h){var f=c[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function i(c,h){if(h)e:{var f=n;c=c.split(".");for(var m=0;m<c.length-1;m++){var R=c[m];if(!(R in f))break e;f=f[R]}c=c[c.length-1],m=f[c],h=h(m),h!=m&&h!=null&&e(f,c,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(h){var f=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&f.push([m,h[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function l(c,h,f){return c.call.apply(c.bind,arguments)}function d(c,h,f){return d=l,d.apply(null,arguments)}function p(c,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),c.apply(this,m)}}function g(c,h){function f(){}f.prototype=h.prototype,c.Z=h.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(m,R,b){for(var x=Array(arguments.length-2),K=2;K<arguments.length;K++)x[K-2]=arguments[K];return h.prototype[R].apply(m,x)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function P(c){const h=c.length;if(h>0){const f=Array(h);for(let m=0;m<h;m++)f[m]=c[m];return f}return[]}function k(c,h){for(let m=1;m<arguments.length;m++){const R=arguments[m];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=c.length||0;const b=R.length||0;c.length=f+b;for(let x=0;x<b;x++)c[f+x]=R[x]}else c.push(R)}}class O{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(c){a.setTimeout(()=>{throw c},0)}function G(){var c=T;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class j{constructor(){this.h=this.g=null}add(h,f){const m=B.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var B=new O(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,J=!1,T=new j,_=()=>{const c=Promise.resolve(void 0);Y=()=>{c.then(E)}};function E(){for(var c;c=G();){try{c.h.call(c.g)}catch(f){D(f)}var h=B;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}J=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return c})();function y(c){return/^[\s\xa0]*$/.test(c)}function Ne(c,h){w.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}g(Ne,w),Ne.prototype.init=function(c,h){const f=this.type=c.type,m=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(f=="mouseover"?h=c.fromElement:f=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ne.Z.h.call(this)},Ne.prototype.h=function(){Ne.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Gt="closure_listenable_"+(Math.random()*1e6|0),sm=0;function im(c,h,f,m,R){this.listener=c,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=R,this.key=++sm,this.da=this.fa=!1}function Ds(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ks(c,h,f){for(const m in c)h.call(f,c[m],m,c)}function om(c,h){for(const f in c)h.call(void 0,c[f],f,c)}function xc(c){const h={};for(const f in c)h[f]=c[f];return h}const Oc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mc(c,h){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)c[f]=m[f];for(let b=0;b<Oc.length;b++)f=Oc[b],Object.prototype.hasOwnProperty.call(m,f)&&(c[f]=m[f])}}function Ns(c){this.src=c,this.g={},this.h=0}Ns.prototype.add=function(c,h,f,m,R){const b=c.toString();c=this.g[b],c||(c=this.g[b]=[],this.h++);const x=go(c,h,m,R);return x>-1?(h=c[x],f||(h.fa=!1)):(h=new im(h,this.src,b,!!m,R),h.fa=f,c.push(h)),h};function mo(c,h){const f=h.type;if(f in c.g){var m=c.g[f],R=Array.prototype.indexOf.call(m,h,void 0),b;(b=R>=0)&&Array.prototype.splice.call(m,R,1),b&&(Ds(h),c.g[f].length==0&&(delete c.g[f],c.h--))}}function go(c,h,f,m){for(let R=0;R<c.length;++R){const b=c[R];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==m)return R}return-1}var _o="closure_lm_"+(Math.random()*1e6|0),yo={};function Lc(c,h,f,m,R){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Lc(c,h[b],f,m,R);return null}return f=Bc(f),c&&c[Gt]?c.J(h,f,u(m)?!!m.capture:!1,R):am(c,h,f,!1,m,R)}function am(c,h,f,m,R,b){if(!h)throw Error("Invalid event type");const x=u(R)?!!R.capture:!!R;let K=Eo(c);if(K||(c[_o]=K=new Ns(c)),f=K.add(h,f,m,x,b),f.proxy)return f;if(m=cm(),f.proxy=m,m.src=c,m.listener=f,c.addEventListener)S||(R=x),R===void 0&&(R=!1),c.addEventListener(h.toString(),m,R);else if(c.attachEvent)c.attachEvent(Uc(h.toString()),m);else if(c.addListener&&c.removeListener)c.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function cm(){function c(f){return h.call(c.src,c.listener,f)}const h=um;return c}function Fc(c,h,f,m,R){if(Array.isArray(h))for(var b=0;b<h.length;b++)Fc(c,h[b],f,m,R);else m=u(m)?!!m.capture:!!m,f=Bc(f),c&&c[Gt]?(c=c.i,b=String(h).toString(),b in c.g&&(h=c.g[b],f=go(h,f,m,R),f>-1&&(Ds(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete c.g[b],c.h--)))):c&&(c=Eo(c))&&(h=c.g[h.toString()],c=-1,h&&(c=go(h,f,m,R)),(f=c>-1?h[c]:null)&&Io(f))}function Io(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Gt])mo(h.i,c);else{var f=c.type,m=c.proxy;h.removeEventListener?h.removeEventListener(f,m,c.capture):h.detachEvent?h.detachEvent(Uc(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Eo(h))?(mo(f,c),f.h==0&&(f.src=null,h[_o]=null)):Ds(c)}}}function Uc(c){return c in yo?yo[c]:yo[c]="on"+c}function um(c,h){if(c.da)c=!0;else{h=new Ne(h,this);const f=c.listener,m=c.ha||c.src;c.fa&&Io(c),c=f.call(m,h)}return c}function Eo(c){return c=c[_o],c instanceof Ns?c:null}var To="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bc(c){return typeof c=="function"?c:(c[To]||(c[To]=function(h){return c.handleEvent(h)}),c[To])}function we(){v.call(this),this.i=new Ns(this),this.M=this,this.G=null}g(we,v),we.prototype[Gt]=!0,we.prototype.removeEventListener=function(c,h,f,m){Fc(this,c,h,f,m)};function Pe(c,h){var f,m=c.G;if(m)for(f=[];m;m=m.G)f.push(m);if(c=c.M,m=h.type||h,typeof h=="string")h=new w(h,c);else if(h instanceof w)h.target=h.target||c;else{var R=h;h=new w(m,c),Mc(h,R)}R=!0;let b,x;if(f)for(x=f.length-1;x>=0;x--)b=h.g=f[x],R=xs(b,m,!0,h)&&R;if(b=h.g=c,R=xs(b,m,!0,h)&&R,R=xs(b,m,!1,h)&&R,f)for(x=0;x<f.length;x++)b=h.g=f[x],R=xs(b,m,!1,h)&&R}we.prototype.N=function(){if(we.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const f=c.g[h];for(let m=0;m<f.length;m++)Ds(f[m]);delete c.g[h],c.h--}}this.G=null},we.prototype.J=function(c,h,f,m){return this.i.add(String(c),h,!1,f,m)},we.prototype.K=function(c,h,f,m){return this.i.add(String(c),h,!0,f,m)};function xs(c,h,f,m){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let b=0;b<h.length;++b){const x=h[b];if(x&&!x.da&&x.capture==f){const K=x.listener,me=x.ha||x.src;x.fa&&mo(c.i,x),R=K.call(me,m)!==!1&&R}}return R&&!m.defaultPrevented}function lm(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(c,h||0)}function qc(c){c.g=lm(()=>{c.g=null,c.i&&(c.i=!1,qc(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class hm extends v{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:qc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(c){v.call(this),this.h=c,this.g={}}g(pr,v);var jc=[];function zc(c){ks(c.g,function(h,f){this.g.hasOwnProperty(f)&&Io(h)},c),c.g={}}pr.prototype.N=function(){pr.Z.N.call(this),zc(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=a.JSON.stringify,dm=a.JSON.parse,fm=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function $c(){}function Gc(){}var mr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vo(){w.call(this,"d")}g(vo,w);function Ao(){w.call(this,"c")}g(Ao,w);var Kt={},Kc=null;function Os(){return Kc=Kc||new we}Kt.Ia="serverreachability";function Hc(c){w.call(this,Kt.Ia,c)}g(Hc,w);function gr(c){const h=Os();Pe(h,new Hc(h))}Kt.STAT_EVENT="statevent";function Wc(c,h){w.call(this,Kt.STAT_EVENT,c),this.stat=h}g(Wc,w);function Ce(c){const h=Os();Pe(h,new Wc(h,c))}Kt.Ja="timingevent";function Qc(c,h){w.call(this,Kt.Ja,c),this.size=h}g(Qc,w);function _r(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},h)}function yr(){this.g=!0}yr.prototype.ua=function(){this.g=!1};function pm(c,h,f,m,R,b){c.info(function(){if(c.g)if(b){var x="",K=b.split("&");for(let se=0;se<K.length;se++){var me=K[se].split("=");if(me.length>1){const Ie=me[0];me=me[1];const He=Ie.split("_");x=He.length>=2&&He[1]=="type"?x+(Ie+"="+me+"&"):x+(Ie+"=redacted&")}}}else x=null;else x=b;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+f+`
`+x})}function mm(c,h,f,m,R,b,x){c.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+f+`
`+b+" "+x})}function bn(c,h,f,m){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+_m(c,f)+(m?" "+m:"")})}function gm(c,h){c.info(function(){return"TIMEOUT: "+h})}yr.prototype.info=function(){};function _m(c,h){if(!c.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(c=0;c<b.length;c++)if(Array.isArray(b[c])){var f=b[c];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let x=1;x<m.length;x++)m[x]=""}}}}return wo(b)}catch{return h}}var Ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xc;function Ro(){}g(Ro,$c),Ro.prototype.g=function(){return new XMLHttpRequest},Xc=new Ro;function Ir(c){return encodeURIComponent(String(c))}function ym(c){var h=1;c=c.split(":");const f=[];for(;h>0&&c.length;)f.push(c.shift()),h--;return c.length&&f.push(c.join(":")),f}function _t(c,h,f,m){this.j=c,this.i=h,this.l=f,this.S=m||1,this.V=new pr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yc}function Yc(){this.i=null,this.g="",this.h=!1}var Zc={},So={};function bo(c,h,f){c.M=1,c.A=Fs(Ke(h)),c.u=f,c.R=!0,eu(c,null)}function eu(c,h){c.F=Date.now(),Ls(c),c.B=Ke(c.A);var f=c.B,m=c.S;Array.isArray(m)||(m=[String(m)]),fu(f.i,"t",m),c.C=0,f=c.j.L,c.h=new Yc,c.g=Du(c.j,f?h:null,!c.u),c.P>0&&(c.O=new hm(d(c.Y,c,c.g),c.P)),h=c.V,f=c.g,m=c.ba;var R="readystatechange";Array.isArray(R)||(R&&(jc[0]=R.toString()),R=jc);for(let b=0;b<R.length;b++){const x=Lc(f,R[b],m||h.handleEvent,!1,h.h||h);if(!x)break;h.g[x.key]=x}h=c.J?xc(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),gr(),pm(c.i,c.v,c.B,c.l,c.S,c.u)}_t.prototype.ba=function(c){c=c.target;const h=this.O;h&&Et(c)==3?h.j():this.Y(c)},_t.prototype.Y=function(c){try{if(c==this.g)e:{const K=Et(this.g),me=this.g.ya(),se=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||Eu(this.g)))){this.K||K!=4||me==7||(me==8||se<=0?gr(3):gr(2)),Po(this);var h=this.g.ca();this.X=h;var f=Im(this);if(this.o=h==200,mm(this.i,this.v,this.B,this.l,this.S,K,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var b=m;break t}}b=null}if(c=b)bn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Co(this,c);else{this.o=!1,this.m=3,Ce(12),Ht(this),Er(this);break e}}if(this.R){c=!0;let Ie;for(;!this.K&&this.C<f.length;)if(Ie=Em(this,f),Ie==So){K==4&&(this.m=4,Ce(14),c=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Zc){this.m=4,Ce(15),bn(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else bn(this.i,this.l,Ie,null),Co(this,Ie);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||f.length!=0||this.h.h||(this.m=1,Ce(16),c=!1),this.o=this.o&&c,!c)bn(this.i,this.l,f,"[Invalid Chunked Response]"),Ht(this),Er(this);else if(f.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Lo(x),x.P=!0,Ce(11))}}else bn(this.i,this.l,f,null),Co(this,f);K==4&&Ht(this),this.o&&!this.K&&(K==4?bu(this.j,this):(this.o=!1,Ls(this)))}else xm(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ce(12)):(this.m=0,Ce(13)),Ht(this),Er(this)}}}catch{}finally{}};function Im(c){if(!tu(c))return c.g.la();const h=Eu(c.g);if(h==="")return"";let f="";const m=h.length,R=Et(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ht(c),Er(c),"";c.h.i=new a.TextDecoder}for(let b=0;b<m;b++)c.h.h=!0,f+=c.h.i.decode(h[b],{stream:!(R&&b==m-1)});return h.length=0,c.h.g+=f,c.C=0,c.h.g}function tu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Em(c,h){var f=c.C,m=h.indexOf(`
`,f);return m==-1?So:(f=Number(h.substring(f,m)),isNaN(f)?Zc:(m+=1,m+f>h.length?So:(h=h.slice(m,m+f),c.C=m+f,h)))}_t.prototype.cancel=function(){this.K=!0,Ht(this)};function Ls(c){c.T=Date.now()+c.H,nu(c,c.H)}function nu(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=_r(d(c.aa,c),h)}function Po(c){c.D&&(a.clearTimeout(c.D),c.D=null)}_t.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(gm(this.i,this.B),this.M!=2&&(gr(),Ce(17)),Ht(this),this.m=2,Er(this)):nu(this,this.T-c)};function Er(c){c.j.I==0||c.K||bu(c.j,c)}function Ht(c){Po(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,zc(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function Co(c,h){try{var f=c.j;if(f.I!=0&&(f.g==c||Vo(f.h,c))){if(!c.L&&Vo(f.h,c)&&f.I==3){try{var m=f.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)zs(f),qs(f);else break e;Mo(f),Ce(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=_r(d(f.Va,f),6e3));iu(f.h)<=1&&f.ta&&(f.ta=void 0)}else Qt(f,11)}else if((c.L||f.g==c)&&zs(f),!y(h))for(R=f.Ba.g.parse(h),h=0;h<R.length;h++){let se=R[h];const Ie=se[0];if(!(Ie<=f.K))if(f.K=Ie,se=se[1],f.I==2)if(se[0]=="c"){f.M=se[1],f.ba=se[2];const He=se[3];He!=null&&(f.ka=He,f.j.info("VER="+f.ka));const Jt=se[4];Jt!=null&&(f.za=Jt,f.j.info("SVER="+f.za));const Tt=se[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(m=1.5*Tt,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const wt=c.g;if(wt){const Gs=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var b=m.h;b.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Do(b,b.h),b.h=null))}if(m.G){const Fo=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(m.wa=Fo,ie(m.J,m.G,Fo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var x=c;if(m.na=Vu(m,m.L?m.ba:null,m.W),x.L){ou(m.h,x);var K=x,me=m.O;me&&(K.H=me),K.D&&(Po(K),Ls(K)),m.g=x}else Ru(m);f.i.length>0&&js(f)}else se[0]!="stop"&&se[0]!="close"||Qt(f,7);else f.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Qt(f,7):Oo(f):se[0]!="noop"&&f.l&&f.l.qa(se),f.A=0)}}gr(4)}catch{}}var Tm=class{constructor(c,h){this.g=c,this.map=h}};function ru(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function su(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function iu(c){return c.h?1:c.g?c.g.size:0}function Vo(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function Do(c,h){c.g?c.g.add(h):c.h=h}function ou(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}ru.prototype.cancel=function(){if(this.i=au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function au(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const f of c.g.values())h=h.concat(f.G);return h}return P(c.i)}var cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wm(c,h){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const m=c[f].indexOf("=");let R,b=null;m>=0?(R=c[f].substring(0,m),b=c[f].substring(m+1)):R=c[f],h(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function yt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof yt?(this.l=c.l,Tr(this,c.j),this.o=c.o,this.g=c.g,wr(this,c.u),this.h=c.h,ko(this,pu(c.i)),this.m=c.m):c&&(h=String(c).match(cu))?(this.l=!1,Tr(this,h[1]||"",!0),this.o=vr(h[2]||""),this.g=vr(h[3]||"",!0),wr(this,h[4]),this.h=vr(h[5]||"",!0),ko(this,h[6]||"",!0),this.m=vr(h[7]||"")):(this.l=!1,this.i=new Rr(null,this.l))}yt.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(Ar(h,uu,!0),":");var f=this.g;return(f||h=="file")&&(c.push("//"),(h=this.o)&&c.push(Ar(h,uu,!0),"@"),c.push(Ir(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(Ar(f,f.charAt(0)=="/"?Rm:Am,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",Ar(f,bm)),c.join("")},yt.prototype.resolve=function(c){const h=Ke(this);let f=!!c.j;f?Tr(h,c.j):f=!!c.o,f?h.o=c.o:f=!!c.g,f?h.g=c.g:f=c.u!=null;var m=c.h;if(f)wr(h,c.u);else if(f=!!c.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=h.h.lastIndexOf("/");R!=-1&&(m=h.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const b=[];for(let x=0;x<R.length;){const K=R[x++];K=="."?m&&x==R.length&&b.push(""):K==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&x==R.length&&b.push("")):(b.push(K),m=!0)}m=b.join("/")}else m=R}return f?h.h=m:f=c.i.toString()!=="",f?ko(h,pu(c.i)):f=!!c.m,f&&(h.m=c.m),h};function Ke(c){return new yt(c)}function Tr(c,h,f){c.j=f?vr(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function wr(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function ko(c,h,f){h instanceof Rr?(c.i=h,Pm(c.i,c.l)):(f||(h=Ar(h,Sm)),c.i=new Rr(h,c.l))}function ie(c,h,f){c.i.set(h,f)}function Fs(c){return ie(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function vr(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ar(c,h,f){return typeof c=="string"?(c=encodeURI(c).replace(h,vm),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function vm(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var uu=/[#\/\?@]/g,Am=/[#\?:]/g,Rm=/[#\?]/g,Sm=/[#\?@]/g,bm=/#/g;function Rr(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function Wt(c){c.g||(c.g=new Map,c.h=0,c.i&&wm(c.i,function(h,f){c.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}s=Rr.prototype,s.add=function(c,h){Wt(this),this.i=null,c=Pn(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(h),this.h+=1,this};function lu(c,h){Wt(c),h=Pn(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function hu(c,h){return Wt(c),h=Pn(c,h),c.g.has(h)}s.forEach=function(c,h){Wt(this),this.g.forEach(function(f,m){f.forEach(function(R){c.call(h,R,m,this)},this)},this)};function du(c,h){Wt(c);let f=[];if(typeof h=="string")hu(c,h)&&(f=f.concat(c.g.get(Pn(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)f=f.concat(c[h]);return f}s.set=function(c,h){return Wt(this),this.i=null,c=Pn(this,c),hu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},s.get=function(c,h){return c?(c=du(this,c),c.length>0?String(c[0]):h):h};function fu(c,h,f){lu(c,h),f.length>0&&(c.i=null,c.g.set(Pn(c,h),P(f)),c.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var f=h[m];const R=Ir(f);f=du(this,f);for(let b=0;b<f.length;b++){let x=R;f[b]!==""&&(x+="="+Ir(f[b])),c.push(x)}}return this.i=c.join("&")};function pu(c){const h=new Rr;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function Pn(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function Pm(c,h){h&&!c.j&&(Wt(c),c.i=null,c.g.forEach(function(f,m){const R=m.toLowerCase();m!=R&&(lu(this,m),fu(this,R,f))},c)),c.j=h}function Cm(c,h){const f=new yr;if(a.Image){const m=new Image;m.onload=p(It,f,"TestLoadImage: loaded",!0,h,m),m.onerror=p(It,f,"TestLoadImage: error",!1,h,m),m.onabort=p(It,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=p(It,f,"TestLoadImage: timeout",!1,h,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=c}else h(!1)}function Vm(c,h){const f=new yr,m=new AbortController,R=setTimeout(()=>{m.abort(),It(f,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:m.signal}).then(b=>{clearTimeout(R),b.ok?It(f,"TestPingServer: ok",!0,h):It(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),It(f,"TestPingServer: error",!1,h)})}function It(c,h,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function Dm(){this.g=new fm}function No(c){this.i=c.Sb||null,this.h=c.ab||!1}g(No,$c),No.prototype.g=function(){return new Us(this.i,this.h)};function Us(c,h){we.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Us,we),s=Us.prototype,s.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,br(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;mu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function mu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Sr(this):br(this),this.readyState==3&&mu(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,Sr(this))},s.Na=function(c){this.g&&(this.response=c,Sr(this))},s.ga=function(){this.g&&Sr(this)};function Sr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,br(c)}s.setRequestHeader=function(c,h){this.A.append(c,h)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=h.next();return c.join(`\r
`)};function br(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function gu(c){let h="";return ks(c,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function xo(c,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=gu(f),typeof c=="string"?f!=null&&Ir(f):ie(c,h,f))}function ue(c){we.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ue,we);var km=/^https?$/i,Nm=["POST","PUT"];s=ue.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xc.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(b){_u(this,b);return}if(c=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())f.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),R=a.FormData&&c instanceof a.FormData,!(Array.prototype.indexOf.call(Nm,h,void 0)>=0)||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of f)this.g.setRequestHeader(b,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(b){_u(this,b)}};function _u(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,yu(c),Bs(c)}function yu(c){c.A||(c.A=!0,Pe(c,"complete"),Pe(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Pe(this,"complete"),Pe(this,"abort"),Bs(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bs(this,!0)),ue.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},s.Xa=function(){Iu(this)};function Iu(c){if(c.h&&typeof o<"u"){if(c.v&&Et(c)==4)setTimeout(c.Ca.bind(c),0);else if(Pe(c,"readystatechange"),Et(c)==4){c.h=!1;try{const b=c.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=b===0){let x=String(c.D).match(cu)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),m=!km.test(x?x.toLowerCase():"")}f=m}if(f)Pe(c,"complete"),Pe(c,"success");else{c.o=6;try{var R=Et(c)>2?c.g.statusText:""}catch{R=""}c.l=R+" ["+c.ca()+"]",yu(c)}}finally{Bs(c)}}}}function Bs(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,h||Pe(c,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Et(c){return c.g?c.g.readyState:0}s.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),dm(h)}};function Eu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function xm(c){const h={};c=(c.g&&Et(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<c.length;m++){if(y(c[m]))continue;var f=ym(c[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[R]||[];h[R]=b,b.push(f)}om(h,function(m){return m.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(c,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||h}function Tu(c){this.za=0,this.i=[],this.j=new yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Pr("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Pr("baseRetryDelayMs",5e3,c),this.Za=Pr("retryDelaySeedMs",1e4,c),this.Ta=Pr("forwardChannelMaxRetries",2,c),this.va=Pr("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ru(c&&c.concurrentRequestLimit),this.Ba=new Dm,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Tu.prototype,s.ka=8,s.I=1,s.connect=function(c,h,f,m){Ce(0),this.W=c,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Vu(this,null,this.W),js(this)};function Oo(c){if(wu(c),c.I==3){var h=c.V++,f=Ke(c.J);if(ie(f,"SID",c.M),ie(f,"RID",h),ie(f,"TYPE","terminate"),Cr(c,f),h=new _t(c,c.j,h),h.M=2,h.A=Fs(Ke(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=Du(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ls(h)}Cu(c)}function qs(c){c.g&&(Lo(c),c.g.cancel(),c.g=null)}function wu(c){qs(c),c.v&&(a.clearTimeout(c.v),c.v=null),zs(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&a.clearTimeout(c.m),c.m=null)}function js(c){if(!su(c.h)&&!c.m){c.m=!0;var h=c.Ea;Y||_(),J||(Y(),J=!0),T.add(h,c),c.D=0}}function Om(c,h){return iu(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=_r(d(c.Ea,c,h),Pu(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const R=new _t(this,this.j,c);let b=this.o;if(this.U&&(b?(b=xc(b),Mc(b,this.U)):b=this.U),this.u!==null||this.R||(R.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Au(this,R,h),f=Ke(this.J),ie(f,"RID",c),ie(f,"CVER",22),this.G&&ie(f,"X-HTTP-Session-Id",this.G),Cr(this,f),b&&(this.R?h="headers="+Ir(gu(b))+"&"+h:this.u&&xo(f,this.u,b)),Do(this.h,R),this.Ra&&ie(f,"TYPE","init"),this.S?(ie(f,"$req",h),ie(f,"SID","null"),R.U=!0,bo(R,f,null)):bo(R,f,h),this.I=2}}else this.I==3&&(c?vu(this,c):this.i.length==0||su(this.h)||vu(this))};function vu(c,h){var f;h?f=h.l:f=c.V++;const m=Ke(c.J);ie(m,"SID",c.M),ie(m,"RID",f),ie(m,"AID",c.K),Cr(c,m),c.u&&c.o&&xo(m,c.u,c.o),f=new _t(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Au(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Do(c.h,f),bo(f,m,h)}function Cr(c,h){c.H&&ks(c.H,function(f,m){ie(h,m,f)}),c.l&&ks({},function(f,m){ie(h,m,f)})}function Au(c,h,f){f=Math.min(c.i.length,f);const m=c.l?d(c.l.Ka,c.l,c):null;e:{var R=c.i;let K=-1;for(;;){const me=["count="+f];K==-1?f>0?(K=R[0].g,me.push("ofs="+K)):K=0:me.push("ofs="+K);let se=!0;for(let Ie=0;Ie<f;Ie++){var b=R[Ie].g;const He=R[Ie].map;if(b-=K,b<0)K=Math.max(0,R[Ie].g-100),se=!1;else try{b="req"+b+"_"||"";try{var x=He instanceof Map?He:Object.entries(He);for(const[Jt,Tt]of x){let wt=Tt;u(Tt)&&(wt=wo(Tt)),me.push(b+Jt+"="+encodeURIComponent(wt))}}catch(Jt){throw me.push(b+"type="+encodeURIComponent("_badmap")),Jt}}catch{m&&m(He)}}if(se){x=me.join("&");break e}}x=void 0}return c=c.i.splice(0,f),h.G=c,x}function Ru(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;Y||_(),J||(Y(),J=!0),T.add(h,c),c.A=0}}function Mo(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=_r(d(c.Da,c),Pu(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,Su(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=_r(d(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ce(10),qs(this),Su(this))};function Lo(c){c.B!=null&&(a.clearTimeout(c.B),c.B=null)}function Su(c){c.g=new _t(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=Ke(c.na);ie(h,"RID","rpc"),ie(h,"SID",c.M),ie(h,"AID",c.K),ie(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&ie(h,"TO",c.ia),ie(h,"TYPE","xmlhttp"),Cr(c,h),c.u&&c.o&&xo(h,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=Fs(Ke(h)),f.u=null,f.R=!0,eu(f,c)}s.Va=function(){this.C!=null&&(this.C=null,qs(this),Mo(this),Ce(19))};function zs(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function bu(c,h){var f=null;if(c.g==h){zs(c),Lo(c),c.g=null;var m=2}else if(Vo(c.h,h))f=h.G,ou(c.h,h),m=1;else return;if(c.I!=0){if(h.o)if(m==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var R=c.D;m=Os(),Pe(m,new Qc(m,f)),js(c)}else Ru(c);else if(R=h.m,R==3||R==0&&h.X>0||!(m==1&&Om(c,h)||m==2&&Mo(c)))switch(f&&f.length>0&&(h=c.h,h.i=h.i.concat(f)),R){case 1:Qt(c,5);break;case 4:Qt(c,10);break;case 3:Qt(c,6);break;default:Qt(c,2)}}}function Pu(c,h){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*h}function Qt(c,h){if(c.j.info("Error code "+h),h==2){var f=d(c.bb,c),m=c.Ua;const R=!m;m=new yt(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tr(m,"https"),Fs(m),R?Cm(m.toString(),f):Vm(m.toString(),f)}else Ce(2);c.I=0,c.l&&c.l.pa(h),Cu(c),wu(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Cu(c){if(c.I=0,c.ja=[],c.l){const h=au(c.h);(h.length!=0||c.i.length!=0)&&(k(c.ja,h),k(c.ja,c.i),c.h.i.length=0,P(c.i),c.i.length=0),c.l.oa()}}function Vu(c,h,f){var m=f instanceof yt?Ke(f):new yt(f);if(m.g!="")h&&(m.g=h+"."+m.g),wr(m,m.u);else{var R=a.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const b=new yt(null);m&&Tr(b,m),h&&(b.g=h),R&&wr(b,R),f&&(b.h=f),m=b}return f=c.G,h=c.wa,f&&h&&ie(m,f,h),ie(m,"VER",c.ka),Cr(c,m),m}function Du(c,h,f){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new ue(new No({ab:f})):new ue(c.ma),h.Fa(c.L),h}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function ku(){}s=ku.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function $s(){}$s.prototype.g=function(c,h){return new Oe(c,h)};function Oe(c,h){we.call(this),this.g=new Tu(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!y(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new Cn(this)}g(Oe,we),Oe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Oo(this.g)},Oe.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=wo(c),c=f);h.i.push(new Tm(h.Ya++,c)),h.I==3&&js(h)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,Oe.Z.N.call(this)};function Nu(c){vo.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const f in h){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}g(Nu,vo);function xu(){Ao.call(this),this.status=1}g(xu,Ao);function Cn(c){this.g=c}g(Cn,ku),Cn.prototype.ra=function(){Pe(this.g,"a")},Cn.prototype.qa=function(c){Pe(this.g,new Nu(c))},Cn.prototype.pa=function(c){Pe(this.g,new xu)},Cn.prototype.oa=function(){Pe(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Ld=function(){return new $s},Md=function(){return Os()},Od=Kt,ca={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,si=Ms,Jc.COMPLETE="complete",xd=Jc,Gc.EventType=mr,mr.OPEN="a",mr.CLOSE="b",mr.ERROR="c",mr.MESSAGE="d",we.prototype.listen=we.prototype.J,Lr=Gc,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,Nd=ue}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});const dl="@firebase/firestore",fl="4.9.2";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let lr="12.3.0";/**
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
 */const gn=new xa("@firebase/firestore");function Mn(){return gn.logLevel}function V(s,...e){if(gn.logLevel<=W.DEBUG){const t=e.map(Ga);gn.debug(`Firestore (${lr}): ${s}`,...t)}}function De(s,...e){if(gn.logLevel<=W.ERROR){const t=e.map(Ga);gn.error(`Firestore (${lr}): ${s}`,...t)}}function ts(s,...e){if(gn.logLevel<=W.WARN){const t=e.map(Ga);gn.warn(`Firestore (${lr}): ${s}`,...t)}}function Ga(s){if(typeof s=="string")return s;try{/**
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
*/return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
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
 */function L(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Fd(s,n,t)}function Fd(s,e,t){let n=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw De(n),new Error(n)}function F(s,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,s||Fd(e,i,n)}function $(s,e){return s}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class kI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ve.UNAUTHENTICATED)))}shutdown(){}}class xI{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.o===void 0,42304);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let o=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ze,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},u=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ze)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string",31837,{l:n}),new kI(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class OI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class MI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new OI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){F(this.o===void 0,3512);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>n(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(F(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function FI(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ka{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=FI(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<t&&(n+=e.charAt(i[o]%62))}return n}}function z(s,e){return s<e?-1:s>e?1:0}function ua(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const i=s.charAt(n),o=e.charAt(n);if(i!==o)return Ko(i)===Ko(o)?z(i,o):Ko(i)?1:-1}return z(s.length,e.length)}const UI=55296,BI=57343;function Ko(s){const e=s.charCodeAt(0);return e>=UI&&e<=BI}function Wn(s,e,t){return s.length===e.length&&s.every(((n,i)=>t(n,e[i])))}function Ud(s){return s+"\0"}/**
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
 */const ml="__name__";class We{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&L(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return We.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof We?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const o=We.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return z(e.length,t.length)}static compareSegments(e,t){const n=We.isNumericId(e),i=We.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?We.extractNumericId(e).compare(We.extractNumericId(t)):ua(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class Z extends We{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends We{construct(e,t,n){return new ce(e,t,n)}static isValidIdentifier(e){return qI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ml}static keyField(){return new ce([ml])}static fromServerFormat(e){const t=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new N(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(o(),i++)}if(o(),a)throw new N(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}/**
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
 */function Bd(s,e,t){if(!t)throw new N(C.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function jI(s,e,t,n){if(e===!0&&n===!0)throw new N(C.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function gl(s){if(!M.isDocumentKey(s))throw new N(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function _l(s){if(M.isDocumentKey(s))throw new N(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function qd(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function $i(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":L(12329,{type:typeof s})}function nt(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new N(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$i(s);throw new N(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
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
 */function fe(s,e){const t={typeString:s};return e&&(t.value=e),t}function Ts(s,e){if(!qd(s))throw new N(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const a=s[n];if(i&&typeof a!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new N(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const yl=-62135596800,Il=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Il);return new ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yl)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Il}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ts(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:fe("string",ee._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ee(0,0))}static max(){return new U(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ns=-1;class vi{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function la(s){return s.fields.find((e=>e.kind===2))}function en(s){return s.fields.filter((e=>e.kind!==2))}vi.UNKNOWN_ID=-1;class ii{constructor(e,t){this.fieldPath=e,this.kind=t}}class rs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new rs(0,Fe.min())}}function zI(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new ee(t+1,0):new ee(t,n));return new Fe(i,M.empty(),e)}function jd(s){return new Fe(s.readTime,s.key,ns)}class Fe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Fe(U.min(),M.empty(),ns)}static max(){return new Fe(U.max(),M.empty(),ns)}}function Ha(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(s.documentKey,e.documentKey),t!==0?t:z(s.largestBatchId,e.largestBatchId))}/**
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
 */const zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $d{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function An(s){if(s.code!==C.FAILED_PRECONDITION||s.message!==zd)throw s;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,n)=>{t(e)}))}static reject(e){return new A(((t,n)=>{n(e)}))}static waitFor(e){return new A(((t,n)=>{let i=0,o=0,a=!1;e.forEach((u=>{++i,u.next((()=>{++o,a&&o===i&&t()}),(l=>n(l)))})),a=!0,o===i&&t()}))}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next((i=>i?A.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,o)=>{n.push(t.call(this,i,o))})),this.waitFor(n)}static mapArray(e,t){return new A(((n,i)=>{const o=e.length,a=new Array(o);let u=0;for(let l=0;l<o;l++){const d=l;t(e[d]).next((p=>{a[d]=p,++u,u===o&&n(a)}),(p=>i(p)))}}))}static doWhile(e,t){return new A(((n,i)=>{const o=()=>{e()===!0?t().next((()=>{o()}),i):n()};o()}))}}/**
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
 */const Me="SimpleDb";class Gi{static open(e,t,n,i){try{return new Gi(t,e.transaction(i,n))}catch(o){throw new $r(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ze,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new $r(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Wa(n.target.error);this.S.reject(new $r(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Me,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new GI(t)}}class Lt{static delete(e){return V(Me,"Removing database:",e),nn(Uh().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Kh())return!1;if(Lt.F())return!0;const e=ge(),t=Lt.M(e),n=0<t&&t<10,i=Gd(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||o)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,Lt.M(ge())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(V(Me,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;t(a)},i.onblocked=()=>{n(new $r(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?n(new N(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new N(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new $r(e,a))},i.onupgradeneeded=o=>{V(Me,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;this.N.k(a,i.transaction,o.oldVersion,this.version).next((()=>{V(Me,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const o=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(e);const u=Gi.open(this.db,e,o?"readonly":"readwrite",n),l=i(u).next((d=>(u.C(),d))).catch((d=>(u.abort(d),A.reject(d)))).toPromise();return l.catch((()=>{})),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(V(Me,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Gd(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class $I{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return nn(this.U.delete())}}class $r extends N{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zt(s){return s.name==="IndexedDbTransactionError"}class GI{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Me,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Me,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return V(Me,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next((t=>(t===void 0&&(t=null),V(Me,"GET",this.store.name,e,t),t)))}delete(e){return V(Me,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return V(Me,"COUNT",this.store.name),nn(this.store.count())}J(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(n.range);return new A(((a,u)=>{o.onerror=l=>{u(l.target.error)},o.onsuccess=l=>{a(l.target.result)}}))}{const o=this.cursor(n),a=[];return this.H(o,((u,l)=>{a.push(l)})).next((()=>a))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A(((i,o)=>{n.onerror=a=>{o(a.target.error)},n.onsuccess=a=>{i(a.target.result)}}))}Z(e,t){V(Me,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const i=this.cursor(n);return this.H(i,((o,a,u)=>u.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.H(i,t)}te(e){const t=this.cursor({});return new A(((n,i)=>{t.onerror=o=>{const a=Wa(o.target.error);i(a)},t.onsuccess=o=>{const a=o.target.result;a?e(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}H(e,t){const n=[];return new A(((i,o)=>{e.onerror=a=>{o(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const l=new $I(u),d=t(u.primaryKey,u.value,l);if(d instanceof A){const p=d.catch((g=>(l.done(),A.reject(g))));n.push(p)}l.isDone?i():l.G===null?u.continue():u.continue(l.G)}})).next((()=>A.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(s){return new A(((e,t)=>{s.onsuccess=n=>{const i=n.target.result;e(i)},s.onerror=n=>{const i=Wa(n.target.error);t(i)}}))}let El=!1;function Wa(s){const e=Lt.M(ge());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(s.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return El||(El=!0,setTimeout((()=>{throw n}),0)),n}}return s}const Gr="IndexBackfiller";class KI{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){V(Gr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();V(Gr,`Documents written: ${t}`)}catch(t){zt(t)?V(Gr,"Ignoring IndexedDB error during index backfill: ",t):await An(t)}await this.re(6e4)}))}}class HI{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let i=t,o=!0;return A.doWhile((()=>o===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((a=>{if(a!==null&&!n.has(a))return V(Gr,`Processing collection: ${a}`),this.oe(e,a,i).next((u=>{i-=u,n.add(a)}));o=!1})))).next((()=>t-i))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((o=>{const a=o.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next((()=>this._e(i,o))).next((u=>(V(Gr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u)))).next((()=>a.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((i,o)=>{const a=jd(o);Ha(a,n)>0&&(n=a)})),new Fe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qe.ce=-1;/**
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
 */const cn=-1;function Ki(s){return s==null}function ss(s){return s===0&&1/s==-1/0}function WI(s){return typeof s=="number"&&Number.isInteger(s)&&!ss(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ai="";function be(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Tl(e)),e=QI(s.get(t),e);return Tl(e)}function QI(s,e){let t=e;const n=s.length;for(let i=0;i<n;i++){const o=s.charAt(i);switch(o){case"\0":t+="";break;case Ai:t+="";break;default:t+=o}}return t}function Tl(s){return s+Ai+""}function Qe(s){const e=s.length;if(F(e>=2,64408,{path:s}),e===2)return F(s.charAt(0)===Ai&&s.charAt(1)==="",56145,{path:s}),Z.emptyPath();const t=e-2,n=[];let i="";for(let o=0;o<e;){const a=s.indexOf(Ai,o);switch((a<0||a>t)&&L(50515,{path:s}),s.charAt(a+1)){case"":const u=s.substring(o,a);let l;i.length===0?l=u:(i+=u,l=i,i=""),n.push(l);break;case"":i+=s.substring(o,a),i+="\0";break;case"":i+=s.substring(o,a+1);break;default:L(61167,{path:s})}o=a+2}return new Z(n)}/**
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
 */const tn="remoteDocuments",ws="owner",Vn="owner",is="mutationQueues",JI="userId",ze="mutations",wl="batchId",an="userMutationsIndex",vl=["userId","batchId"];/**
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
 */function oi(s,e){return[s,be(e)]}function Kd(s,e,t){return[s,be(e),t]}const XI={},Qn="documentMutations",Ri="remoteDocumentsV14",YI=["prefixPath","collectionGroup","readTime","documentId"],ai="documentKeyIndex",ZI=["prefixPath","collectionGroup","documentId"],Hd="collectionGroupIndex",eE=["collectionGroup","readTime","prefixPath","documentId"],os="remoteDocumentGlobal",ha="remoteDocumentGlobalKey",Jn="targets",Wd="queryTargetsIndex",tE=["canonicalId","targetId"],Xn="targetDocuments",nE=["targetId","path"],Qa="documentTargetsIndex",rE=["path","targetId"],Si="targetGlobalKey",un="targetGlobal",as="collectionParents",sE=["collectionId","parent"],Yn="clientMetadata",iE="clientId",Hi="bundles",oE="bundleId",Wi="namedQueries",aE="name",Ja="indexConfiguration",cE="indexId",da="collectionGroupIndex",uE="collectionGroup",Kr="indexState",lE=["indexId","uid"],Qd="sequenceNumberIndex",hE=["uid","sequenceNumber"],Hr="indexEntries",dE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Jd="documentKeyIndex",fE=["indexId","uid","orderedDocumentKey"],Qi="documentOverlays",pE=["userId","collectionPath","documentId"],fa="collectionPathOverlayIndex",mE=["userId","collectionPath","largestBatchId"],Xd="collectionGroupOverlayIndex",gE=["userId","collectionGroup","largestBatchId"],Xa="globals",_E="name",Yd=[is,ze,Qn,tn,Jn,ws,un,Xn,Yn,os,as,Hi,Wi],yE=[...Yd,Qi],Zd=[is,ze,Qn,Ri,Jn,ws,un,Xn,Yn,os,as,Hi,Wi,Qi],ef=Zd,Ya=[...ef,Ja,Kr,Hr],IE=Ya,tf=[...Ya,Xa],EE=tf;/**
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
 */class pa extends $d{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function ye(s,e){const t=$(s);return Lt.O(t.le,e)}/**
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
 */function Al(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function $t(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function nf(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}}class Ws{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,n,i,o){this.key=e,this.value=t,this.color=n??Te.RED,this.left=i??Te.EMPTY,this.right=o??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,o){return new Te(e??this.key,t??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,n,i,o){return this}insert(e,t,n){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ne{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(e){return new Rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ne(this.comparator);return t.data=e,t}}class Rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Dn(s){return s.hasNext()?s.getNext():void 0}/**
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
 */class xe{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new xe([])}unionWith(e){let t=new ne(ce.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rf("Invalid base64 string: "+o):o}})(e);return new pe(t)}static fromUint8Array(e){const t=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const TE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lt(s){if(F(!!s,39018),typeof s=="string"){let e=0;const t=TE.exec(s);if(F(!!t,46558,{timestamp:s}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:oe(s.seconds),nanos:oe(s.nanos)}}function oe(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function ht(s){return typeof s=="string"?pe.fromBase64String(s):pe.fromUint8Array(s)}/**
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
 */const sf="server_timestamp",of="__type__",af="__previous_value__",cf="__local_write_time__";function Za(s){return(s?.mapValue?.fields||{})[of]?.stringValue===sf}function Ji(s){const e=s.mapValue.fields[af];return Za(e)?Ji(e):e}function cs(s){const e=lt(s.mapValue.fields[cf].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class wE{constructor(e,t,n,i,o,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const bi="(default)";class _n{constructor(e,t){this.projectId=e,this.database=t||bi}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database===bi}isEqual(e){return e instanceof _n&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ec="__type__",uf="__max__",kt={mapValue:{fields:{__type__:{stringValue:uf}}}},tc="__vector__",Zn="value",ci={nullValue:"NULL_VALUE"};function Ut(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Za(s)?4:lf(s)?9007199254740991:Xi(s)?10:11:L(28295,{value:s})}function rt(s,e){if(s===e)return!0;const t=Ut(s);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return cs(s).isEqual(cs(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=lt(i.timestampValue),u=lt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,o){return ht(i.bytesValue).isEqual(ht(o.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,o){return oe(i.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(i.geoPointValue.longitude)===oe(o.geoPointValue.longitude)})(s,e);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return oe(i.integerValue)===oe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=oe(i.doubleValue),u=oe(o.doubleValue);return a===u?ss(a)===ss(u):isNaN(a)&&isNaN(u)}return!1})(s,e);case 9:return Wn(s.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Al(a)!==Al(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!rt(a[l],u[l])))return!1;return!0})(s,e);default:return L(52216,{left:s})}}function us(s,e){return(s.values||[]).find((t=>rt(t,e)))!==void 0}function Bt(s,e){if(s===e)return 0;const t=Ut(s),n=Ut(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(s.booleanValue,e.booleanValue);case 2:return(function(o,a){const u=oe(o.integerValue||o.doubleValue),l=oe(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(s,e);case 3:return Sl(s.timestampValue,e.timestampValue);case 4:return Sl(cs(s),cs(e));case 5:return ua(s.stringValue,e.stringValue);case 6:return(function(o,a){const u=ht(o),l=ht(a);return u.compareTo(l)})(s.bytesValue,e.bytesValue);case 7:return(function(o,a){const u=o.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=z(u[d],l[d]);if(p!==0)return p}return z(u.length,l.length)})(s.referenceValue,e.referenceValue);case 8:return(function(o,a){const u=z(oe(o.latitude),oe(a.latitude));return u!==0?u:z(oe(o.longitude),oe(a.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return bl(s.arrayValue,e.arrayValue);case 10:return(function(o,a){const u=o.fields||{},l=a.fields||{},d=u[Zn]?.arrayValue,p=l[Zn]?.arrayValue,g=z(d?.values?.length||0,p?.values?.length||0);return g!==0?g:bl(d,p)})(s.mapValue,e.mapValue);case 11:return(function(o,a){if(o===kt.mapValue&&a===kt.mapValue)return 0;if(o===kt.mapValue)return 1;if(a===kt.mapValue)return-1;const u=o.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const I=ua(l[g],p[g]);if(I!==0)return I;const P=Bt(u[l[g]],d[p[g]]);if(P!==0)return P}return z(l.length,p.length)})(s.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function Sl(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return z(s,e);const t=lt(s),n=lt(e),i=z(t.seconds,n.seconds);return i!==0?i:z(t.nanos,n.nanos)}function bl(s,e){const t=s.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const o=Bt(t[i],n[i]);if(o)return o}return z(t.length,n.length)}function er(s){return ma(s)}function ma(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=lt(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return ht(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return M.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",i=!0;for(const o of t.values||[])i?i=!1:n+=",",n+=ma(o);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ma(t.fields[a])}`;return i+"}"})(s.mapValue):L(61005,{value:s})}function ui(s){switch(Ut(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ji(s);return e?16+ui(e):16;case 5:return 2*s.stringValue.length;case 6:return ht(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+ui(o)),0)})(s.arrayValue);case 10:case 11:return(function(n){let i=0;return $t(n.fields,((o,a)=>{i+=o.length+ui(a)})),i})(s.mapValue);default:throw L(13486,{value:s})}}function ls(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function ga(s){return!!s&&"integerValue"in s}function hs(s){return!!s&&"arrayValue"in s}function Pl(s){return!!s&&"nullValue"in s}function Cl(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function li(s){return!!s&&"mapValue"in s}function Xi(s){return(s?.mapValue?.fields||{})[ec]?.stringValue===tc}function Wr(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return $t(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Wr(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wr(s.arrayValue.values[t]);return e}return{...s}}function lf(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===uf}const hf={mapValue:{fields:{[ec]:{stringValue:tc},[Zn]:{arrayValue:{}}}}};function vE(s){return"nullValue"in s?ci:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?ls(_n.empty(),M.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?Xi(s)?hf:{mapValue:{}}:L(35942,{value:s})}function AE(s){return"nullValue"in s?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?ls(_n.empty(),M.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?hf:"mapValue"in s?Xi(s)?{mapValue:{}}:kt:L(61959,{value:s})}function Vl(s,e){const t=Bt(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?-1:!s.inclusive&&e.inclusive?1:0}function Dl(s,e){const t=Bt(s.value,e.value);return t!==0?t:s.inclusive&&!e.inclusive?1:!s.inclusive&&e.inclusive?-1:0}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!li(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(t)}setAll(e){let t=ce.emptyPath(),n={},i=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=Wr(a):i.push(u.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,i)}delete(e){const t=this.field(e.popLast());li(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];li(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){$t(t,((i,o)=>e[i]=o));for(const i of n)delete e[i]}clone(){return new Re(Wr(this.value))}}function df(s){const e=[];return $t(s.fields,((t,n)=>{const i=new ce([t]);if(li(n)){const o=df(n.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)})),new xe(e)}/**
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
 */class le{constructor(e,t,n,i,o,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new le(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,n,i){return new le(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new le(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tr{constructor(e,t){this.position=e,this.inclusive=t}}function kl(s,e,t){let n=0;for(let i=0;i<s.position.length;i++){const o=e[i],a=s.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),t.key):n=Bt(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Nl(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!rt(s.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pi{constructor(e,t="asc"){this.field=e,this.dir=t}}function RE(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class ff{}class Q extends ff{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new SE(e,t,n):t==="array-contains"?new CE(e,n):t==="in"?new If(e,n):t==="not-in"?new VE(e,n):t==="array-contains-any"?new DE(e,n):new Q(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bE(e,n):new PE(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bt(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends ff{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new te(e,t)}matches(e){return nr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nr(s){return s.op==="and"}function _a(s){return s.op==="or"}function nc(s){return pf(s)&&nr(s)}function pf(s){for(const e of s.filters)if(e instanceof te)return!1;return!0}function ya(s){if(s instanceof Q)return s.field.canonicalString()+s.op.toString()+er(s.value);if(nc(s))return s.filters.map((e=>ya(e))).join(",");{const e=s.filters.map((t=>ya(t))).join(",");return`${s.op}(${e})`}}function mf(s,e){return s instanceof Q?(function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&rt(n.value,i.value)})(s,e):s instanceof te?(function(n,i){return i instanceof te&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,a,u)=>o&&mf(a,i.filters[u])),!0):!1})(s,e):void L(19439)}function gf(s,e){const t=s.filters.concat(e);return te.create(t,s.op)}function _f(s){return s instanceof Q?(function(t){return`${t.field.canonicalString()} ${t.op} ${er(t.value)}`})(s):s instanceof te?(function(t){return t.op.toString()+" {"+t.getFilters().map(_f).join(" ,")+"}"})(s):"Filter"}class SE extends Q{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class bE extends Q{constructor(e,t){super(e,"in",t),this.keys=yf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class PE extends Q{constructor(e,t){super(e,"not-in",t),this.keys=yf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yf(s,e){return(e.arrayValue?.values||[]).map((t=>M.fromName(t.referenceValue)))}class CE extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hs(t)&&us(t.arrayValue,this.value)}}class If extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class VE extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!us(this.value.arrayValue,t)}}class DE extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>us(this.value.arrayValue,n)))}}/**
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
 */class kE{constructor(e,t=null,n=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function Ia(s,e=null,t=[],n=[],i=null,o=null,a=null){return new kE(s,e,t,n,i,o,a)}function yn(s){const e=$(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ya(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),Ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>er(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>er(n))).join(",")),e.Te=t}return e.Te}function vs(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!RE(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!mf(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Nl(s.startAt,e.startAt)&&Nl(s.endAt,e.endAt)}function Ci(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function Vi(s,e){return s.filters.filter((t=>t instanceof Q&&t.field.isEqual(e)))}function xl(s,e,t){let n=ci,i=!0;for(const o of Vi(s,e)){let a=ci,u=!0;switch(o.op){case"<":case"<=":a=vE(o.value);break;case"==":case"in":case">=":a=o.value;break;case">":a=o.value,u=!1;break;case"!=":case"not-in":a=ci}Vl({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(t!==null){for(let o=0;o<s.orderBy.length;++o)if(s.orderBy[o].field.isEqual(e)){const a=t.position[o];Vl({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function Ol(s,e,t){let n=kt,i=!0;for(const o of Vi(s,e)){let a=kt,u=!0;switch(o.op){case">=":case">":a=AE(o.value),u=!1;break;case"==":case"in":case"<=":a=o.value;break;case"<":a=o.value,u=!1;break;case"!=":case"not-in":a=kt}Dl({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(t!==null){for(let o=0;o<s.orderBy.length;++o)if(s.orderBy[o].field.isEqual(e)){const a=t.position[o];Dl({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class As{constructor(e,t=null,n=[],i=[],o=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NE(s,e,t,n,i,o,a,u){return new As(s,e,t,n,i,o,a,u)}function Yi(s){return new As(s)}function Ml(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Ef(s){return s.collectionGroup!==null}function Qr(s){const e=$(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ne(ce.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Pi(o,n))})),t.has(ce.keyField().canonicalString())||e.Ie.push(new Pi(ce.keyField(),n))}return e.Ie}function je(s){const e=$(s);return e.Ee||(e.Ee=xE(e,Qr(s))),e.Ee}function xE(s,e){if(s.limitType==="F")return Ia(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Pi(i.field,o)}));const t=s.endAt?new tr(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new tr(s.startAt.position,s.startAt.inclusive):null;return Ia(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Ea(s,e){const t=s.filters.concat([e]);return new As(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Ta(s,e,t){return new As(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function Zi(s,e){return vs(je(s),je(e))&&s.limitType===e.limitType}function Tf(s){return`${yn(je(s))}|lt:${s.limitType}`}function Ln(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>_f(i))).join(", ")}]`),Ki(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>er(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>er(i))).join(",")),`Target(${n})`})(je(s))}; limitType=${s.limitType})`}function Rs(s,e){return e.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(s,e)&&(function(n,i){for(const o of Qr(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(s,e)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(s,e)&&(function(n,i){return!(n.startAt&&!(function(a,u,l){const d=kl(a,u,l);return a.inclusive?d<=0:d<0})(n.startAt,Qr(n),i)||n.endAt&&!(function(a,u,l){const d=kl(a,u,l);return a.inclusive?d>=0:d>0})(n.endAt,Qr(n),i))})(s,e)}function OE(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function wf(s){return(e,t)=>{let n=!1;for(const i of Qr(s)){const o=ME(i,e,t);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function ME(s,e,t){const n=s.field.isKeyField()?M.comparator(e.key,t.key):(function(o,a,u){const l=a.data.field(o),d=u.data.field(o);return l!==null&&d!==null?Bt(l,d):L(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:s.dir})}}/**
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
 */class mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,((t,n)=>{for(const[i,o]of n)e(i,o)}))}isEmpty(){return nf(this.inner)}size(){return this.innerSize}}/**
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
 */const LE=new ae(M.comparator);function Le(){return LE}const vf=new ae(M.comparator);function Fr(...s){let e=vf;for(const t of s)e=e.insert(t.key,t);return e}function Af(s){let e=vf;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Je(){return Jr()}function Rf(){return Jr()}function Jr(){return new mt((s=>s.toString()),((s,e)=>s.isEqual(e)))}const FE=new ae(M.comparator),UE=new ne(M.comparator);function H(...s){let e=UE;for(const t of s)e=e.add(t);return e}const BE=new ne(z);function qE(){return BE}/**
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
 */function rc(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ss(e)?"-0":e}}function Sf(s){return{integerValue:""+s}}function jE(s,e){return WI(e)?Sf(e):rc(s,e)}/**
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
 */class eo{constructor(){this._=void 0}}function zE(s,e,t){return s instanceof ds?(function(i,o){const a={fields:{[of]:{stringValue:sf},[cf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Za(o)&&(o=Ji(o)),o&&(a.fields[af]=o),{mapValue:a}})(t,e):s instanceof rr?Pf(s,e):s instanceof sr?Cf(s,e):(function(i,o){const a=bf(i,o),u=Ll(a)+Ll(i.Ae);return ga(a)&&ga(i.Ae)?Sf(u):rc(i.serializer,u)})(s,e)}function $E(s,e,t){return s instanceof rr?Pf(s,e):s instanceof sr?Cf(s,e):t}function bf(s,e){return s instanceof fs?(function(n){return ga(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(e)?e:{integerValue:0}:null}class ds extends eo{}class rr extends eo{constructor(e){super(),this.elements=e}}function Pf(s,e){const t=Vf(e);for(const n of s.elements)t.some((i=>rt(i,n)))||t.push(n);return{arrayValue:{values:t}}}class sr extends eo{constructor(e){super(),this.elements=e}}function Cf(s,e){let t=Vf(e);for(const n of s.elements)t=t.filter((i=>!rt(i,n)));return{arrayValue:{values:t}}}class fs extends eo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ll(s){return oe(s.integerValue||s.doubleValue)}function Vf(s){return hs(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
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
 */class GE{constructor(e,t){this.field=e,this.transform=t}}function KE(s,e){return s.field.isEqual(e.field)&&(function(n,i){return n instanceof rr&&i instanceof rr||n instanceof sr&&i instanceof sr?Wn(n.elements,i.elements,rt):n instanceof fs&&i instanceof fs?rt(n.Ae,i.Ae):n instanceof ds&&i instanceof ds})(s.transform,e.transform)}class HE{constructor(e,t){this.version=e,this.transformResults=t}}class Se{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Se}static exists(e){return new Se(void 0,e)}static updateTime(e){return new Se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class to{}function Df(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new no(s.key,Se.none()):new hr(s.key,s.data,Se.none());{const t=s.data,n=Re.empty();let i=new ne(ce.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new gt(s.key,n,new xe(i.toArray()),Se.none())}}function WE(s,e,t){s instanceof hr?(function(i,o,a){const u=i.value.clone(),l=Ul(i.fieldTransforms,o,a.transformResults);u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(s,e,t):s instanceof gt?(function(i,o,a){if(!hi(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ul(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(kf(i)),l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(s,e,t):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Xr(s,e,t,n){return s instanceof hr?(function(o,a,u,l){if(!hi(o.precondition,a))return u;const d=o.value.clone(),p=Bl(o.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(s,e,t,n):s instanceof gt?(function(o,a,u,l){if(!hi(o.precondition,a))return u;const d=Bl(o.fieldTransforms,l,a),p=a.data;return p.setAll(kf(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(s,e,t,n):(function(o,a,u){return hi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(s,e,t)}function QE(s,e){let t=null;for(const n of s.fieldTransforms){const i=e.data.field(n.field),o=bf(n.transform,i||null);o!=null&&(t===null&&(t=Re.empty()),t.set(n.field,o))}return t||null}function Fl(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Wn(n,i,((o,a)=>KE(o,a)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class hr extends to{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gt extends to{constructor(e,t,n,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function kf(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function Ul(s,e,t){const n=new Map;F(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let i=0;i<t.length;i++){const o=s[i],a=o.transform,u=e.data.field(o.field);n.set(o.field,$E(a,u,t[i]))}return n}function Bl(s,e,t){const n=new Map;for(const i of s){const o=i.transform,a=t.data.field(i.field);n.set(i.field,zE(o,a,e))}return n}class no extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nf extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sc{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&WE(o,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Rf();return this.mutations.forEach((i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const l=Df(a,u);l!==null&&n.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),H())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,((t,n)=>Fl(t,n)))&&Wn(this.baseMutations,e.baseMutations,((t,n)=>Fl(t,n)))}}class ic{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){F(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let i=(function(){return FE})();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new ic(e,t,n,i)}}/**
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
 */class oc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,X;function XE(s){switch(s){case C.OK:return L(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L(15467,{code:s})}}function xf(s){if(s===void 0)return De("GRPC error has no .code"),C.UNKNOWN;switch(s){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return L(39323,{code:s})}}(X=de||(de={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YE(){return new TextEncoder}/**
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
 */const ZE=new Mt([4294967295,4294967295],0);function ql(s){const e=YE().encode(s),t=new kd;return t.update(e),new Uint8Array(t.digest())}function jl(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Mt([t,n],0),new Mt([i,o],0)]}class ac{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ur(`Invalid padding: ${t}`);if(n<0)throw new Ur(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mt.fromNumber(this.ge)}ye(e,t,n){let i=e.add(t.multiply(Mt.fromNumber(n)));return i.compare(ZE)===1&&(i=new Mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ql(e),[n,i]=jl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);if(!this.we(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new ac(o,i,t);return n.forEach((u=>a.insert(u))),a}insert(e){if(this.ge===0)return;const t=ql(e),[n,i]=jl(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ro{constructor(e,t,n,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ss.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ro(U.min(),i,new ae(z),Le(),H())}}class Ss{constructor(e,t,n,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ss(n,t,H(),H(),H())}}/**
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
 */class di{constructor(e,t,n,i){this.be=e,this.removedTargetIds=t,this.key=n,this.De=i}}class Of{constructor(e,t){this.targetId=e,this.Ce=t}}class Mf{constructor(e,t,n=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class zl{constructor(){this.ve=0,this.Fe=$l(),this.Me=pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=H(),t=H(),n=H();return this.Fe.forEach(((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:L(38017,{changeType:o})}})),new Ss(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=$l()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,F(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Le(),this.Je=Qs(),this.He=Qs(),this.Ye=new ae(z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:L(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,n=e.Ce.count,i=this.ot(t);if(i){const o=i.target;if(Ci(o))if(n===0){const a=new M(o.path);this.et(t,a,le.newNoDocument(a,U.min()))}else F(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const u=this.ut(e),l=u?this.ct(u,e,a):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=ht(n).toUint8Array()}catch(l){if(l instanceof rf)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ac(a,i,o)}catch(l){return ts(l instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let i=0;return n.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&Ci(u.target)){const l=new M(u.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,le.newNoDocument(l,e))}o.Be&&(t.set(a,o.ke()),o.qe())}}));let n=H();this.He.forEach(((o,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const i=new ro(e,t,this.Ye,this.je,n);return this.je=Le(),this.Je=Qs(),this.He=Qs(),this.Ye=new ae(z),i}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new zl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ne(z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ne(z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new zl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qs(){return new ae(M.comparator)}function $l(){return new ae(M.comparator)}const tT={asc:"ASCENDING",desc:"DESCENDING"},nT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rT={and:"AND",or:"OR"};class sT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(s,e){return s.useProto3Json||Ki(e)?e:{value:e}}function ir(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lf(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function iT(s,e){return ir(s,e.toTimestamp())}function ke(s){return F(!!s,49232),U.fromTimestamp((function(t){const n=lt(t);return new ee(n.seconds,n.nanos)})(s))}function cc(s,e){return va(s,e).canonicalString()}function va(s,e){const t=(function(i){return new Z(["projects",i.projectId,"databases",i.database])})(s).child("documents");return e===void 0?t:t.child(e)}function Ff(s){const e=Z.fromString(s);return F(Hf(e),10190,{key:e.toString()}),e}function Di(s,e){return cc(s.databaseId,e.path)}function ln(s,e){const t=Ff(e);if(t.get(1)!==s.databaseId.projectId)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new N(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new M(qf(t))}function Uf(s,e){return cc(s.databaseId,e)}function Bf(s){const e=Ff(s);return e.length===4?Z.emptyPath():qf(e)}function Aa(s){return new Z(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function qf(s){return F(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Gl(s,e,t){return{name:Di(s,e),fields:t.value.mapValue.fields}}function oT(s,e,t){const n=ln(s,e.name),i=ke(e.updateTime),o=e.createTime?ke(e.createTime):U.min(),a=new Re({mapValue:{fields:e.fields}}),u=le.newFoundDocument(n,i,o,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function aT(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(F(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(F(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))})(s,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?C.UNKNOWN:xf(d.code);return new N(p,d.message||"")})(a);t=new Mf(n,i,o,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=ln(s,n.document.name),o=ke(n.document.updateTime),a=n.document.createTime?ke(n.document.createTime):U.min(),u=new Re({mapValue:{fields:n.document.fields}}),l=le.newFoundDocument(i,o,a,u),d=n.targetIds||[],p=n.removedTargetIds||[];t=new di(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=ln(s,n.document),o=n.readTime?ke(n.readTime):U.min(),a=le.newNoDocument(i,o),u=n.removedTargetIds||[];t=new di([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=ln(s,n.document),o=n.removedTargetIds||[];t=new di([],o,i,null)}else{if(!("filter"in e))return L(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new JE(i,o),u=n.targetId;t=new Of(u,a)}}return t}function ki(s,e){let t;if(e instanceof hr)t={update:Gl(s,e.key,e.value)};else if(e instanceof no)t={delete:Di(s,e.key)};else if(e instanceof gt)t={update:Gl(s,e.key,e.data),updateMask:fT(e.fieldMask)};else{if(!(e instanceof Nf))return L(16599,{Vt:e.type});t={verify:Di(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(o,a){const u=a.transform;if(u instanceof ds)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof fs)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:iT(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(s,e.precondition)),t}function Ra(s,e){const t=e.currentDocument?(function(o){return o.updateTime!==void 0?Se.updateTime(ke(o.updateTime)):o.exists!==void 0?Se.exists(o.exists):Se.none()})(e.currentDocument):Se.none(),n=e.updateTransforms?e.updateTransforms.map((i=>(function(a,u){let l=null;if("setToServerValue"in u)F(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new ds;else if("appendMissingElements"in u){const p=u.appendMissingElements.values||[];l=new rr(p)}else if("removeAllFromArray"in u){const p=u.removeAllFromArray.values||[];l=new sr(p)}else"increment"in u?l=new fs(a,u.increment):L(16584,{proto:u});const d=ce.fromServerFormat(u.fieldPath);return new GE(d,l)})(s,i))):[];if(e.update){e.update.name;const i=ln(s,e.update.name),o=new Re({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=(function(l){const d=l.fieldPaths||[];return new xe(d.map((p=>ce.fromServerFormat(p))))})(e.updateMask);return new gt(i,o,a,t,n)}return new hr(i,o,t,n)}if(e.delete){const i=ln(s,e.delete);return new no(i,t)}if(e.verify){const i=ln(s,e.verify);return new Nf(i,t)}return L(1463,{proto:e})}function cT(s,e){return s&&s.length>0?(F(e!==void 0,14353),s.map((t=>(function(i,o){let a=i.updateTime?ke(i.updateTime):ke(o);return a.isEqual(U.min())&&(a=ke(o)),new HE(a,i.transformResults||[])})(t,e)))):[]}function jf(s,e){return{documents:[Uf(s,e.path)]}}function zf(s,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Uf(s,i);const o=(function(d){if(d.length!==0)return Kf(te.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(I){return{field:Fn(I.field),direction:lT(I.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=wa(s,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function $f(s){let e=Bf(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){F(n===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(g){const I=Gf(g);return I instanceof te&&nc(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((I=>(function(k){return new Pi(Un(k.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(I)))})(t.orderBy));let u=null;t.limit&&(u=(function(g){let I;return I=typeof g=="object"?g.value:g,Ki(I)?null:I})(t.limit));let l=null;t.startAt&&(l=(function(g){const I=!!g.before,P=g.values||[];return new tr(P,I)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const I=!g.before,P=g.values||[];return new tr(P,I)})(t.endAt)),NE(e,i,a,o,u,"F",l,d)}function uT(s,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Gf(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Un(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Un(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Un(t.unaryFilter.field);return Q.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(t.unaryFilter.field);return Q.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(s):s.fieldFilter!==void 0?(function(t){return Q.create(Un(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return te.create(t.compositeFilter.filters.map((n=>Gf(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(t.compositeFilter.op))})(s):L(30097,{filter:s})}function lT(s){return tT[s]}function hT(s){return nT[s]}function dT(s){return rT[s]}function Fn(s){return{fieldPath:s.canonicalString()}}function Un(s){return ce.fromServerFormat(s.fieldPath)}function Kf(s){return s instanceof Q?(function(t){if(t.op==="=="){if(Cl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(Pl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(Pl(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:hT(t.op),value:t.value}}})(s):s instanceof te?(function(t){const n=t.getFilters().map((i=>Kf(i)));return n.length===1?n[0]:{compositeFilter:{op:dT(t.op),filters:n}}})(s):L(54877,{filter:s})}function fT(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Hf(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class ot{constructor(e,t,n,i,o=U.min(),a=U.min(),u=pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Wf{constructor(e){this.yt=e}}function pT(s,e){let t;if(e.document)t=oT(s.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=M.fromSegments(e.noDocument.path),i=En(e.noDocument.readTime);t=le.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L(56709);{const n=M.fromSegments(e.unknownDocument.path),i=En(e.unknownDocument.version);t=le.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime((function(i){const o=new ee(i[0],i[1]);return U.fromTimestamp(o)})(e.readTime)),t}function Kl(s,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ni(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(o,a){return{name:Di(o,a.key),fields:a.data.value.mapValue.fields,updateTime:ir(o,a.version.toTimestamp()),createTime:ir(o,a.createTime.toTimestamp())}})(s.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:In(e.version)};else{if(!e.isUnknownDocument())return L(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:In(e.version)}}return n}function Ni(s){const e=s.toTimestamp();return[e.seconds,e.nanoseconds]}function In(s){const e=s.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function En(s){const e=new ee(s.seconds,s.nanoseconds);return U.fromTimestamp(e)}function rn(s,e){const t=(e.baseMutations||[]).map((o=>Ra(s.yt,o)));for(let o=0;o<e.mutations.length-1;++o){const a=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const u=e.mutations[o+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const n=e.mutations.map((o=>Ra(s.yt,o))),i=ee.fromMillis(e.localWriteTimeMs);return new sc(e.batchId,i,t,n)}function Br(s){const e=En(s.readTime),t=s.lastLimboFreeSnapshotVersion!==void 0?En(s.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(o){return o.documents!==void 0})(s.query)?(function(o){const a=o.documents.length;return F(a===1,1966,{count:a}),je(Yi(Bf(o.documents[0])))})(s.query):(function(o){return je($f(o))})(s.query),new ot(n,s.targetId,"TargetPurposeListen",s.lastListenSequenceNumber,e,t,pe.fromBase64String(s.resumeToken))}function Qf(s,e){const t=In(e.snapshotVersion),n=In(e.lastLimboFreeSnapshotVersion);let i;i=Ci(e.target)?jf(s.yt,e.target):zf(s.yt,e.target).ft;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:yn(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Jf(s){const e=$f({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Ta(e,e.limit,"L"):e}function Ho(s,e){return new oc(e.largestBatchId,Ra(s.yt,e.overlayMutation))}function Hl(s,e){const t=e.path.lastSegment();return[s,be(e.path.popLast()),t]}function Wl(s,e,t,n){return{indexId:s,uid:e,sequenceNumber:t,readTime:In(n.readTime),documentKey:be(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class mT{getBundleMetadata(e,t){return Ql(e).get(t).next((n=>{if(n)return(function(o){return{id:o.bundleId,createTime:En(o.createTime),version:o.version}})(n)}))}saveBundleMetadata(e,t){return Ql(e).put((function(i){return{bundleId:i.id,createTime:In(ke(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return Jl(e).get(t).next((n=>{if(n)return(function(o){return{name:o.name,query:Jf(o.bundledQuery),readTime:En(o.readTime)}})(n)}))}saveNamedQuery(e,t){return Jl(e).put((function(i){return{name:i.name,readTime:In(ke(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function Ql(s){return ye(s,Hi)}function Jl(s){return ye(s,Wi)}/**
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
 */class so{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new so(e,n)}getOverlay(e,t){return Vr(e).get(Hl(this.userId,t)).next((n=>n?Ho(this.serializer,n):null))}getOverlays(e,t){const n=Je();return A.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((o,a)=>{const u=new oc(t,a);i.push(this.St(e,u))})),A.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((a=>i.add(be(a.getCollectionPath()))));const o=[];return i.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);o.push(Vr(e).Z(fa,u))})),A.waitFor(o)}getOverlaysForCollection(e,t,n){const i=Je(),o=be(t),a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,Number.POSITIVE_INFINITY],!0);return Vr(e).J(fa,a).next((u=>{for(const l of u){const d=Ho(this.serializer,l);i.set(d.getKey(),d)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const o=Je();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Vr(e).ee({index:Xd,range:u},((l,d,p)=>{const g=Ho(this.serializer,d);o.size()<i||g.largestBatchId===a?(o.set(g.getKey(),g),a=g.largestBatchId):p.done()})).next((()=>o))}St(e,t){return Vr(e).put((function(i,o,a){const[u,l,d]=Hl(o,a.mutation.key);return{userId:o,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ki(i.yt,a.mutation)}})(this.serializer,this.userId,t))}}function Vr(s){return ye(s,Qi)}/**
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
 */class gT{bt(e){return ye(e,Xa)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t?.value;return n?pe.fromUint8Array(n):pe.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class sn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(oe(e.integerValue));else if("doubleValue"in e){const n=oe(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),ss(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=lt(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(ht(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?lf(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Xi(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):L(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const i of Object.keys(n))this.Ot(i,t),this.Ct(n[i],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const i=Zn,o=n[i].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(oe(o)),this.Ot(i,t),this.Ct(n[i],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const i of n)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),M.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}sn.Kt=new sn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=255;function _T(s){if(s===0)return 8;let e=0;return s>>4||(e+=4,s<<=4),s>>6||(e+=2,s<<=2),s>>7||(e+=1),e}function Xl(s){const e=64-(function(n){let i=0;for(let o=0;o<8;++o){const a=_T(255&n[o]);if(i+=a,a!==8)break}return i})(s);return Math.ceil(e/8)}class yT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const t=this.en(e),n=Xl(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),n=Xl(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(kn),this.sn(255)}_n(){this.an(kn),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(o){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,o,!1),new Uint8Array(a.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===kn?(this.sn(kn),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===kn?(this.an(kn),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class IT{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class ET{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Dr{constructor(){this.cn=new yT,this.ln=new IT(this.cn),this.hn=new ET(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class on{constructor(e,t,n,i){this.Tn=e,this.In=t,this.En=n,this.dn=i}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new on(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:fi(this.En),directionalValue:fi(this.dn),orderedDocumentKey:fi(t),documentKey:n.path.toArray()}}Vn(e,t,n){const i=this.Rn(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function At(s,e){let t=s.Tn-e.Tn;return t!==0?t:(t=Yl(s.En,e.En),t!==0?t:(t=Yl(s.dn,e.dn),t!==0?t:M.comparator(s.In,e.In)))}function Yl(s,e){for(let t=0;t<s.length&&t<e.length;++t){const n=s[t]-e[t];if(n!==0)return n}return s.length-e.length}function fi(s){return Gh()?(function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n})(s):s}function Zl(s){return typeof s!="string"?s:(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(s)}class eh{constructor(e){this.mn=new ne(((t,n)=>ce.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(F(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=la(e);if(t!==void 0&&!this.wn(t))return!1;const n=en(e);let i=new Set,o=0,a=0;for(;o<n.length&&this.wn(n[o]);++o)i=i.add(n[o].fieldPath.canonicalString());if(o===n.length)return!0;if(this.mn.size>0){const u=this.mn.getIterator().getNext();if(!i.has(u.field.canonicalString())){const l=n[o];if(!this.Sn(u,l)||!this.bn(this.fn[a++],l))return!1}++o}for(;o<n.length;++o){const u=n[o];if(a>=this.fn.length||!this.bn(this.fn[a++],u))return!1}return!0}Dn(){if(this.pn)return null;let e=new ne(ce.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ii(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ii(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ii(n.field,n.dir==="asc"?0:1)));return new vi(vi.UNKNOWN_ID,this.collectionId,t,rs.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Xf(s){if(F(s instanceof Q||s instanceof te,20012),s instanceof Q){if(s instanceof If){const t=s.value.arrayValue?.values?.map((n=>Q.create(s.field,"==",n)))||[];return te.create(t,"or")}return s}const e=s.filters.map((t=>Xf(t)));return te.create(e,s.op)}function TT(s){if(s.getFilters().length===0)return[];const e=Pa(Xf(s));return F(Yf(e),7391),Sa(e)||ba(e)?[e]:e.getFilters()}function Sa(s){return s instanceof Q}function ba(s){return s instanceof te&&nc(s)}function Yf(s){return Sa(s)||ba(s)||(function(t){if(t instanceof te&&_a(t)){for(const n of t.getFilters())if(!Sa(n)&&!ba(n))return!1;return!0}return!1})(s)}function Pa(s){if(F(s instanceof Q||s instanceof te,34018),s instanceof Q)return s;if(s.filters.length===1)return Pa(s.filters[0]);const e=s.filters.map((n=>Pa(n)));let t=te.create(e,s.op);return t=xi(t),Yf(t)?t:(F(t instanceof te,64498),F(nr(t),40251),F(t.filters.length>1,57927),t.filters.reduce(((n,i)=>uc(n,i))))}function uc(s,e){let t;return F(s instanceof Q||s instanceof te,38388),F(e instanceof Q||e instanceof te,25473),t=s instanceof Q?e instanceof Q?(function(i,o){return te.create([i,o],"and")})(s,e):th(s,e):e instanceof Q?th(e,s):(function(i,o){if(F(i.filters.length>0&&o.filters.length>0,48005),nr(i)&&nr(o))return gf(i,o.getFilters());const a=_a(i)?i:o,u=_a(i)?o:i,l=a.filters.map((d=>uc(d,u)));return te.create(l,"or")})(s,e),xi(t)}function th(s,e){if(nr(e))return gf(e,s.getFilters());{const t=e.filters.map((n=>uc(s,n)));return te.create(t,"or")}}function xi(s){if(F(s instanceof Q||s instanceof te,11850),s instanceof Q)return s;const e=s.getFilters();if(e.length===1)return xi(e[0]);if(pf(s))return s;const t=e.map((i=>xi(i))),n=[];return t.forEach((i=>{i instanceof Q?n.push(i):i instanceof te&&(i.op===s.op?n.push(...i.filters):n.push(i))})),n.length===1?n[0]:te.create(n,s.op)}/**
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
 */class wT{constructor(){this.Cn=new lc}addToCollectionParentIndex(e,t){return this.Cn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Fe.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Fe.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class lc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ne(Z.comparator),o=!i.has(n);return this.index[t]=i.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ne(Z.comparator)).toArray()}}/**
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
 */const nh="IndexedDbIndexManager",Js=new Uint8Array(0);class vT{constructor(e,t){this.databaseId=t,this.vn=new lc,this.Fn=new mt((n=>yn(n)),((n,i)=>vs(n,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const o={collectionId:n,parent:be(i)};return rh(e).put(o)}return A.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Ud(t),""],!1,!0);return rh(e).J(i).next((o=>{for(const a of o){if(a.collectionId!==t)break;n.push(Qe(a.parent))}return n}))}addFieldIndex(e,t){const n=kr(e),i=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete i.indexId;const o=n.add(i);if(t.indexState){const a=xn(e);return o.next((u=>{a.put(Wl(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return o.next()}deleteFieldIndex(e,t){const n=kr(e),i=xn(e),o=Nn(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=kr(e),n=Nn(e),i=xn(e);return t.Z().next((()=>n.Z())).next((()=>i.Z()))}createTargetIndexes(e,t){return A.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((i=>{if(i===0||i===1){const o=new eh(n).Dn();if(o!=null)return this.addFieldIndex(e,o)}}))))}getDocumentsMatchingTarget(e,t){const n=Nn(e);let i=!0;const o=new Map;return A.forEach(this.Mn(t),(a=>this.xn(e,a).next((u=>{i&&(i=!!u),o.set(a,u)})))).next((()=>{if(i){let a=H();const u=[];return A.forEach(o,((l,d)=>{V(nh,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((re=>`${re.fieldPath}:${re.kind}`)).join(",")}`})(l)} to execute ${yn(t)}`);const p=(function(B,re){const Y=la(re);if(Y===void 0)return null;for(const J of Vi(B,Y.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null})(d,l),g=(function(B,re){const Y=new Map;for(const J of en(re))for(const T of Vi(B,J.fieldPath))switch(T.op){case"==":case"in":Y.set(J.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Y.set(J.fieldPath.canonicalString(),T.value),Array.from(Y.values())}return null})(d,l),I=(function(B,re){const Y=[];let J=!0;for(const T of en(re)){const _=T.kind===0?xl(B,T.fieldPath,B.startAt):Ol(B,T.fieldPath,B.startAt);Y.push(_.value),J&&(J=_.inclusive)}return new tr(Y,J)})(d,l),P=(function(B,re){const Y=[];let J=!0;for(const T of en(re)){const _=T.kind===0?Ol(B,T.fieldPath,B.endAt):xl(B,T.fieldPath,B.endAt);Y.push(_.value),J&&(J=_.inclusive)}return new tr(Y,J)})(d,l),k=this.On(l,d,I),O=this.On(l,d,P),D=this.Nn(l,d,g),G=this.Bn(l.indexId,p,k,I.inclusive,O,P.inclusive,D);return A.forEach(G,(j=>n.Y(j,t.limit).next((B=>{B.forEach((re=>{const Y=M.fromSegments(re.documentKey);a.has(Y)||(a=a.add(Y),u.push(Y))}))}))))})).next((()=>u))}return A.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=TT(te.create(e.filters,"and")).map((n=>Ia(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,i,o,a,u){const l=(t!=null?t.length:1)*Math.max(n.length,o.length),d=l/(t!=null?t.length:1),p=[];for(let g=0;g<l;++g){const I=t?this.Ln(t[g/d]):Js,P=this.kn(e,I,n[g%d],i),k=this.qn(e,I,o[g%d],a),O=u.map((D=>this.kn(e,I,D,!0)));p.push(...this.createRange(P,k,O))}return p}kn(e,t,n,i){const o=new on(e,M.empty(),t,n);return i?o:o.An()}qn(e,t,n,i){const o=new on(e,M.empty(),t,n);return i?o.An():o}xn(e,t){const n=new eh(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((o=>{let a=null;for(const u of o)n.yn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(e,t){let n=2;const i=this.Mn(t);return A.forEach(i,(o=>this.xn(e,o).next((a=>{a?n!==0&&a.fields.length<(function(l){let d=new ne(ce.comparator),p=!1;for(const g of l.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?p=!0:d=d.add(I.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(p?1:0)})(o)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(t)&&i.length>1&&n===2?1:n))}Qn(e,t){const n=new Dr;for(const i of en(e)){const o=t.data.field(i.fieldPath);if(o==null)return null;const a=n.Pn(i.kind);sn.Kt.Dt(o,a)}return n.un()}Ln(e){const t=new Dr;return sn.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Dr;return sn.Kt.Dt(ls(this.databaseId,t),n.Pn((function(o){const a=en(o);return a.length===0?0:a[a.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let i=[];i.push(new Dr);let o=0;for(const a of en(e)){const u=n[o++];for(const l of i)if(this.Un(t,a.fieldPath)&&hs(u))i=this.Kn(i,a,u);else{const d=l.Pn(a.kind);sn.Kt.Dt(u,d)}}return this.Wn(i)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const i=[...e],o=[];for(const a of n.arrayValue.values||[])for(const u of i){const l=new Dr;l.seed(u.un()),sn.Kt.Dt(a,l.Pn(t.kind)),o.push(l)}return o}Un(e,t){return!!e.filters.find((n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=kr(e),i=xn(e);return(t?n.J(da,IDBKeyRange.bound(t,t)):n.J()).next((o=>{const a=[];return A.forEach(o,(u=>i.get([u.indexId,this.uid]).next((l=>{a.push((function(p,g){const I=g?new rs(g.sequenceNumber,new Fe(En(g.readTime),new M(Qe(g.documentKey)),g.largestBatchId)):rs.empty(),P=p.fields.map((([k,O])=>new ii(ce.fromServerFormat(k),O)));return new vi(p.indexId,p.collectionGroup,P,I)})(u,l))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,i)=>{const o=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return o!==0?o:z(n.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=kr(e),o=xn(e);return this.Gn(e).next((a=>i.J(da,IDBKeyRange.bound(t,t)).next((u=>A.forEach(u,(l=>o.put(Wl(l.indexId,this.uid,a,n))))))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,((i,o)=>{const a=n.get(i.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next((u=>(n.set(i.collectionGroup,u),A.forEach(u,(l=>this.zn(e,i,l).next((d=>{const p=this.jn(o,l);return d.isEqual(p)?A.resolve():this.Jn(e,o,l,d,p)})))))))}))}Hn(e,t,n,i){return Nn(e).put(i.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,i){return Nn(e).delete(i.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const i=Nn(e);let o=new ne(At);return i.ee({index:Jd,range:IDBKeyRange.only([n.indexId,this.uid,fi(this.$n(n,t))])},((a,u)=>{o=o.add(new on(n.indexId,t,Zl(u.arrayValue),Zl(u.directionalValue)))})).next((()=>o))}jn(e,t){let n=new ne(At);const i=this.Qn(t,e);if(i==null)return n;const o=la(t);if(o!=null){const a=e.data.field(o.fieldPath);if(hs(a))for(const u of a.arrayValue.values||[])n=n.add(new on(t.indexId,e.key,this.Ln(u),i))}else n=n.add(new on(t.indexId,e.key,Js,i));return n}Jn(e,t,n,i,o){V(nh,"Updating index entries for document '%s'",t.key);const a=[];return(function(l,d,p,g,I){const P=l.getIterator(),k=d.getIterator();let O=Dn(P),D=Dn(k);for(;O||D;){let G=!1,j=!1;if(O&&D){const B=p(O,D);B<0?j=!0:B>0&&(G=!0)}else O!=null?j=!0:G=!0;G?(g(D),D=Dn(k)):j?(I(O),O=Dn(P)):(O=Dn(P),D=Dn(k))}})(i,o,At,(u=>{a.push(this.Hn(e,t,n,u))}),(u=>{a.push(this.Yn(e,t,n,u))})),A.waitFor(a)}Gn(e){let t=1;return xn(e).ee({index:Qd,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,i,o)=>{o.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((a,u)=>At(a,u))).filter(((a,u,l)=>!u||At(a,l[u-1])!==0));const i=[];i.push(e);for(const a of n){const u=At(a,e),l=At(a,t);if(u===0)i[0]=e.An();else if(u>0&&l<0)i.push(a),i.push(a.An());else if(l>0)break}i.push(t);const o=[];for(let a=0;a<i.length;a+=2){if(this.Zn(i[a],i[a+1]))return[];const u=i[a].Vn(this.uid,Js,M.empty()),l=i[a+1].Vn(this.uid,Js,M.empty());o.push(IDBKeyRange.bound(u,l))}return o}Zn(e,t){return At(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sh)}getMinOffset(e,t){return A.mapArray(this.Mn(t),(n=>this.xn(e,n).next((i=>i||L(44426))))).next(sh)}}function rh(s){return ye(s,as)}function Nn(s){return ye(s,Hr)}function kr(s){return ye(s,Ja)}function xn(s){return ye(s,Kr)}function sh(s){F(s.length!==0,28825);let e=s[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<s.length;n++){const i=s[n].indexState.offset;Ha(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Fe(e.readTime,e.documentKey,t)}/**
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
 */const ih={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zf=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function ep(s,e,t){const n=s.store(ze),i=s.store(Qn),o=[],a=IDBKeyRange.only(t.batchId);let u=0;const l=n.ee({range:a},((p,g,I)=>(u++,I.delete())));o.push(l.next((()=>{F(u===1,47070,{batchId:t.batchId})})));const d=[];for(const p of t.mutations){const g=Kd(e,p.key.path,t.batchId);o.push(i.delete(g)),d.push(p.key)}return A.waitFor(o).next((()=>d))}function Oi(s){if(!s)return 0;let e;if(s.document)e=s.document;else if(s.unknownDocument)e=s.unknownDocument;else{if(!s.noDocument)throw L(14731);e=s.noDocument}return JSON.stringify(e).length}/**
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
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(Zf,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);class io{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Xn={}}static wt(e,t,n,i){F(e.uid!=="",64387);const o=e.isAuthenticated()?e.uid:"";return new io(o,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).ee({index:an,range:n},((i,o,a)=>{t=!1,a.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const o=Bn(e),a=Rt(e);return a.add({}).next((u=>{F(typeof u=="number",49019);const l=new sc(u,t,n,i),d=(function(P,k,O){const D=O.baseMutations.map((j=>ki(P.yt,j))),G=O.mutations.map((j=>ki(P.yt,j)));return{userId:k,batchId:O.batchId,localWriteTimeMs:O.localWriteTime.toMillis(),baseMutations:D,mutations:G}})(this.serializer,this.userId,l),p=[];let g=new ne(((I,P)=>z(I.canonicalString(),P.canonicalString())));for(const I of i){const P=Kd(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),p.push(a.put(d)),p.push(o.put(P,XI))}return g.forEach((I=>{p.push(this.indexManager.addToCollectionParentIndex(e,I))})),e.addOnCommittedListener((()=>{this.Xn[u]=l.keys()})),A.waitFor(p).next((()=>l))}))}lookupMutationBatch(e,t){return Rt(e).get(t).next((n=>n?(F(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),rn(this.serializer,n)):null))}er(e,t){return this.Xn[t]?A.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const i=n.keys();return this.Xn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let o=null;return Rt(e).ee({index:an,range:i},((a,u,l)=>{u.userId===this.userId&&(F(u.batchId>=n,47524,{tr:n}),o=rn(this.serializer,u)),l.done()})).next((()=>o))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=cn;return Rt(e).ee({index:an,range:t,reverse:!0},((i,o,a)=>{n=o.batchId,a.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,cn],[this.userId,Number.POSITIVE_INFINITY]);return Rt(e).J(an,t).next((n=>n.map((i=>rn(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=oi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),o=[];return Bn(e).ee({range:i},((a,u,l)=>{const[d,p,g]=a,I=Qe(p);if(d===this.userId&&t.path.isEqual(I))return Rt(e).get(g).next((P=>{if(!P)throw L(61480,{nr:a,batchId:g});F(P.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:P.userId,batchId:g}),o.push(rn(this.serializer,P))}));l.done()})).next((()=>o))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(z);const i=[];return t.forEach((o=>{const a=oi(this.userId,o.path),u=IDBKeyRange.lowerBound(a),l=Bn(e).ee({range:u},((d,p,g)=>{const[I,P,k]=d,O=Qe(P);I===this.userId&&o.path.isEqual(O)?n=n.add(k):g.done()}));i.push(l)})),A.waitFor(i).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,o=oi(this.userId,n),a=IDBKeyRange.lowerBound(o);let u=new ne(z);return Bn(e).ee({range:a},((l,d,p)=>{const[g,I,P]=l,k=Qe(I);g===this.userId&&n.isPrefixOf(k)?k.length===i&&(u=u.add(P)):p.done()})).next((()=>this.rr(e,u)))}rr(e,t){const n=[],i=[];return t.forEach((o=>{i.push(Rt(e).get(o).next((a=>{if(a===null)throw L(35274,{batchId:o});F(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:o}),n.push(rn(this.serializer,a))})))})),A.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return ep(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),A.forEach(n,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),i=[];return Bn(e).ee({range:n},((o,a,u)=>{if(o[0]===this.userId){const l=Qe(o[1]);i.push(l)}else u.done()})).next((()=>{F(i.length===0,56720,{sr:i.map((o=>o.canonicalString()))})}))}))}containsKey(e,t){return tp(e,this.userId,t)}_r(e){return np(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:cn,lastStreamToken:""}))}}function tp(s,e,t){const n=oi(e,t.path),i=n[1],o=IDBKeyRange.lowerBound(n);let a=!1;return Bn(s).ee({range:o,X:!0},((u,l,d)=>{const[p,g,I]=u;p===e&&g===i&&(a=!0),d.done()})).next((()=>a))}function Rt(s){return ye(s,ze)}function Bn(s){return ye(s,Qn)}function np(s){return ye(s,is)}/**
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
 */class Tn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Tn(0)}static cr(){return new Tn(-1)}}/**
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
 */class AT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new Tn(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>U.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.hr(e,i))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>On(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(F(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let i=0;const o=[];return On(e).ee(((a,u)=>{const l=Br(u);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(i++,o.push(this.removeTargetData(e,l)))})).next((()=>A.waitFor(o))).next((()=>i))}forEachTarget(e,t){return On(e).ee(((n,i)=>{const o=Br(i);t(o)}))}lr(e){return oh(e).get(Si).next((t=>(F(t!==null,2888),t)))}hr(e,t){return oh(e).put(Si,t)}Pr(e,t){return On(e).put(Qf(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=yn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let o=null;return On(e).ee({range:i,index:Wd},((a,u,l)=>{const d=Br(u);vs(t,d.target)&&(o=d,l.done())})).next((()=>o))}addMatchingKeys(e,t,n){const i=[],o=Dt(e);return t.forEach((a=>{const u=be(a.path);i.push(o.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(e,n,a))})),A.waitFor(i)}removeMatchingKeys(e,t,n){const i=Dt(e);return A.forEach(t,(o=>{const a=be(o.path);return A.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,o)])}))}removeMatchingKeysForTargetId(e,t){const n=Dt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Dt(e);let o=H();return i.ee({range:n,X:!0},((a,u,l)=>{const d=Qe(a[1]),p=new M(d);o=o.add(p)})).next((()=>o))}containsKey(e,t){const n=be(t.path),i=IDBKeyRange.bound([n],[Ud(n)],!1,!0);let o=0;return Dt(e).ee({index:Qa,X:!0,range:i},(([a,u],l,d)=>{a!==0&&(o++,d.done())})).next((()=>o>0))}At(e,t){return On(e).get(t).next((n=>n?Br(n):null))}}function On(s){return ye(s,Jn)}function oh(s){return ye(s,un)}function Dt(s){return ye(s,Xn)}/**
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
 */const ah="LruGarbageCollector",rp=1048576;function ch([s,e],[t,n]){const i=z(s,t);return i===0?z(e,n):i}class RT{constructor(e){this.Ir=e,this.buffer=new ne(ch),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ch(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sp{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){V(ah,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zt(t)?V(ah,"Ignoring IndexedDB error during garbage collection: ",t):await An(t)}await this.Vr(3e5)}))}}class ST{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return A.resolve(qe.ce);const n=new RT(t);return this.mr.forEachTarget(e,(i=>n.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>n.Ar(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(ih)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ih):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,i,o,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i)))).next((g=>(n=g,u=Date.now(),this.removeTargets(e,n,t)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((g=>(d=Date.now(),Mn()<=W.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:g}))))}}function ip(s,e){return new ST(s,e)}/**
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
 */class bT{constructor(e,t){this.db=e,this.garbageCollector=ip(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,i)=>t(i)))}addReference(e,t,n){return Xs(e,n)}removeReference(e,t,n){return Xs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Xs(e,t)}br(e,t){return(function(i,o){let a=!1;return np(i).te((u=>tp(i,u,o).next((l=>(l&&(a=!0),A.resolve(!l)))))).next((()=>a))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let o=0;return this.Sr(e,((a,u)=>{if(u<=t){const l=this.br(e,a).next((d=>{if(!d)return o++,n.getEntry(e,a).next((()=>(n.removeEntry(a,U.min()),Dt(e).delete((function(g){return[0,be(g.path)]})(a)))))}));i.push(l)}})).next((()=>A.waitFor(i))).next((()=>n.apply(e))).next((()=>o))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Xs(e,t)}Sr(e,t){const n=Dt(e);let i,o=qe.ce;return n.ee({index:Qa},(([a,u],{path:l,sequenceNumber:d})=>{a===0?(o!==qe.ce&&t(new M(Qe(i)),o),o=d,i=l):o=qe.ce})).next((()=>{o!==qe.ce&&t(new M(Qe(i)),o)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xs(s,e){return Dt(s).put((function(n,i){return{targetId:0,path:be(n.path),sequenceNumber:i}})(e,s.currentSequenceNumber))}/**
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
 */class op{constructor(){this.changes=new mt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Xt(e).put(n)}removeEntry(e,t,n){return Xt(e).delete((function(o,a){const u=o.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Ni(a),u[u.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=le.newInvalidDocument(t);return Xt(e).ee({index:ai,range:IDBKeyRange.only(Nr(t))},((i,o)=>{n=this.Cr(t,o)})).next((()=>n))}vr(e,t){let n={size:0,document:le.newInvalidDocument(t)};return Xt(e).ee({index:ai,range:IDBKeyRange.only(Nr(t))},((i,o)=>{n={document:this.Cr(t,o),size:Oi(o)}})).next((()=>n))}getEntries(e,t){let n=Le();return this.Fr(e,t,((i,o)=>{const a=this.Cr(i,o);n=n.insert(i,a)})).next((()=>n))}Mr(e,t){let n=Le(),i=new ae(M.comparator);return this.Fr(e,t,((o,a)=>{const u=this.Cr(o,a);n=n.insert(o,u),i=i.insert(o,Oi(a))})).next((()=>({documents:n,Or:i})))}Fr(e,t,n){if(t.isEmpty())return A.resolve();let i=new ne(hh);t.forEach((l=>i=i.add(l)));const o=IDBKeyRange.bound(Nr(i.first()),Nr(i.last())),a=i.getIterator();let u=a.getNext();return Xt(e).ee({index:ai,range:o},((l,d,p)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&hh(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?p.j(Nr(u)):p.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i,o){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Ni(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xt(e).J(IDBKeyRange.bound(u,l,!0)).next((d=>{o?.incrementDocumentReadCount(d.length);let p=Le();for(const g of d){const I=this.Cr(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(Rs(t,I)||i.has(I.key))&&(p=p.insert(I.key,I))}return p}))}getAllFromCollectionGroup(e,t,n,i){let o=Le();const a=lh(t,n),u=lh(t,Fe.max());return Xt(e).ee({index:Hd,range:IDBKeyRange.bound(a,u,!0)},((l,d,p)=>{const g=this.Cr(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);o=o.insert(g.key,g),o.size===i&&p.done()})).next((()=>o))}newChangeBuffer(e){return new CT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return uh(e).get(ha).next((t=>(F(!!t,20021),t)))}Dr(e,t){return uh(e).put(ha,t)}Cr(e,t){if(t){const n=pT(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return le.newInvalidDocument(e)}}function ap(s){return new PT(s)}class CT extends op{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new mt((n=>n.toString()),((n,i)=>n.isEqual(i)))}applyChanges(e){const t=[];let n=0,i=new ne(((o,a)=>z(o.canonicalString(),a.canonicalString())));return this.changes.forEach(((o,a)=>{const u=this.Br.get(o);if(t.push(this.Nr.removeEntry(e,o,u.readTime)),a.isValidDocument()){const l=Kl(this.Nr.serializer,a);i=i.add(o.path.popLast());const d=Oi(l);n+=d-u.size,t.push(this.Nr.addEntry(e,o,l))}else if(n-=u.size,this.trackRemovals){const l=Kl(this.Nr.serializer,a.convertToNoDocument(U.min()));t.push(this.Nr.addEntry(e,o,l))}})),i.forEach((o=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,o))})),t.push(this.Nr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:i})=>(i.forEach(((o,a)=>{this.Br.set(o,{size:a,readTime:n.get(o).readTime})})),n)))}}function uh(s){return ye(s,os)}function Xt(s){return ye(s,Ri)}function Nr(s){const e=s.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function lh(s,e){const t=e.documentKey.path.toArray();return[s,Ni(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function hh(s,e){const t=s.path.toArray(),n=e.path.toArray();let i=0;for(let o=0;o<t.length-2&&o<n.length-2;++o)if(i=z(t[o],n[o]),i)return i;return i=z(t.length,n.length),i||(i=z(t[t.length-2],n[n.length-2]),i||z(t[t.length-1],n[n.length-1]))}/**
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
 */class VT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cp{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Xr(n.mutation,i,xe.empty(),ee.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,H()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=H()){const i=Je();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((o=>{let a=Fr();return o.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=Je();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,H())))}populateOverlays(e,t,n){const i=[];return n.forEach((o=>{t.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(e,i).next((o=>{o.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,n,i){let o=Le();const a=Jr(),u=(function(){return Jr()})();return t.forEach(((l,d)=>{const p=n.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof gt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Xr(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,xe.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>u.set(d,new VT(p,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(e,t){const n=Jr();let i=new ae(((a,u)=>a-u)),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let p=n.get(l)||xe.empty();p=u.applyToLocalView(d,p),n.set(l,p);const g=(i.get(u.batchId)||H()).add(l);i=i.insert(u.batchId,g)}))})).next((()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,g=Rf();p.forEach((I=>{if(!o.has(I)){const P=Df(t.get(I),n.get(I));P!==null&&g.set(I,P),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return A.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ef(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-o.size):A.resolve(Je());let u=ns,l=o;return a.next((d=>A.forEach(d,((p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),o.get(p)?A.resolve():this.remoteDocumentCache.getEntry(e,p).next((I=>{l=l.insert(p,I)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,l,d,H()))).next((p=>({batchId:u,changes:Af(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((n=>{let i=Fr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const o=t.collectionGroup;let a=Fr();return this.indexManager.getCollectionParents(e,o).next((u=>A.forEach(u,(l=>{const d=(function(g,I){return new As(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next((p=>{p.forEach(((g,I)=>{a=a.insert(g,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,i)))).next((a=>{o.forEach(((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,le.newInvalidDocument(p)))}));let u=Fr();return a.forEach(((l,d)=>{const p=o.get(l);p!==void 0&&Xr(p.mutation,d,xe.empty(),ee.now()),Rs(t,d)&&(u=u.insert(l,d))})),u}))}}/**
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
 */class DT{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return A.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ke(i.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Jf(i.bundledQuery),readTime:ke(i.readTime)}})(t)),A.resolve()}}/**
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
 */class kT{constructor(){this.overlays=new ae(M.comparator),this.qr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Je();return A.forEach(t,(i=>this.getOverlay(e,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,o)=>{this.St(e,t,o)})),A.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.qr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const i=Je(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>n&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let o=new ae(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Je(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Je(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=i)););return A.resolve(u)}St(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new oc(t,n));let o=this.qr.get(t);o===void 0&&(o=H(),this.qr.set(t,o)),this.qr.set(t,o.add(n.key))}}/**
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
 */class NT{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class hc{constructor(){this.Qr=new ne(Ee.$r),this.Ur=new ne(Ee.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Ee(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new Ee(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new M(new Z([])),n=new Ee(t,e),i=new Ee(t,e+1),o=[];return this.Ur.forEachInRange([n,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new M(new Z([])),n=new Ee(t,e),i=new Ee(t,e+1);let o=H();return this.Ur.forEachInRange([n,i],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new Ee(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ee{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return M.comparator(e.key,t.key)||z(e.Yr,t.Yr)}static Kr(e,t){return z(e.Yr,t.Yr)||M.comparator(e.key,t.key)}}/**
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
 */class xT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ne(Ee.$r)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new sc(o,t,n,i);this.mutationQueue.push(a);for(const u of i)this.Zr=this.Zr.add(new Ee(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(e,t){return A.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ei(n),o=i<0?0:i;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?cn:this.tr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([n,i],(a=>{const u=this.Xr(a.Yr);o.push(u)})),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(z);return t.forEach((i=>{const o=new Ee(i,0),a=new Ee(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(u=>{n=n.add(u.Yr)}))})),A.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const a=new Ee(new M(o),0);let u=new ne(z);return this.Zr.forEachWhile((l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Yr)),!0)}),a),A.resolve(this.ti(u))}ti(e){const t=[];return e.forEach((n=>{const i=this.Xr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){F(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return A.forEach(t.mutations,(i=>{const o=new Ee(i.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new Ee(t,0),i=this.Zr.firstAfterOrEqual(n);return A.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class OT{constructor(e){this.ri=e,this.docs=(function(){return new ae(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),o=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let n=Le();return t.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():le.newInvalidDocument(i))})),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let o=Le();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ha(jd(p),n)<=0||(i.has(p.key)||Rs(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(e,t,n,i){L(9500)}ii(e,t){return A.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new MT(this)}getSize(e){return A.resolve(this.size)}}class MT extends op{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(n)})),A.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class LT{constructor(e){this.persistence=e,this.si=new mt((t=>yn(t)),vs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.oi=0,this._i=new hc,this.targetCount=0,this.ai=Tn.ur()}forEachTarget(e,t){return this.si.forEach(((n,i)=>t(i))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),A.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Tn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Pr(t),A.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let i=0;const o=[];return this.si.forEach(((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)})),A.waitFor(o).next((()=>i))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach((a=>{o.push(i.markPotentiallyOrphaned(e,a))})),A.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this._i.containsKey(t))}}/**
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
 */class dc{constructor(e,t){this.ui={},this.overlays={},this.ci=new qe(0),this.li=!1,this.li=!0,this.hi=new NT,this.referenceDelegate=e(this),this.Pi=new LT(this),this.indexManager=new wT,this.remoteDocumentCache=(function(i){return new OT(i)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new Wf(t),this.Ii=new DT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new xT(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new FT(this.ci.next());return this.referenceDelegate.Ei(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(e,t){return A.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class FT extends $d{constructor(e){super(),this.currentSequenceNumber=e}}class oo{constructor(e){this.persistence=e,this.Ri=new hc,this.Vi=null}static mi(e){return new oo(e)}get fi(){if(this.Vi)return this.Vi;throw L(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.fi,(n=>{const i=M.fromPath(n);return this.gi(e,i).next((o=>{o||t.removeEntry(i,U.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Mi{constructor(e,t){this.persistence=e,this.pi=new mt((n=>be(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=ip(this,t)}static mi(e,t){return new Mi(e,t)}Ei(){}di(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return A.forEach(this.pi,((n,i)=>this.br(e,n,i).next((o=>o?A.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,(a=>this.br(e,a,t).next((u=>{u||(n++,o.removeEntry(a,U.min()))})))).next((()=>o.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),A.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ui(e.data.value)),t}br(e,t,n){return A.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return A.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class UT{constructor(e){this.serializer=e}k(e,t,n,i){const o=new Gi("createOrUpgrade",t);n<1&&i>=1&&((function(l){l.createObjectStore(ws)})(e),(function(l){l.createObjectStore(is,{keyPath:JI}),l.createObjectStore(ze,{keyPath:wl,autoIncrement:!0}).createIndex(an,vl,{unique:!0}),l.createObjectStore(Qn)})(e),dh(e),(function(l){l.createObjectStore(tn)})(e));let a=A.resolve();return n<3&&i>=3&&(n!==0&&((function(l){l.deleteObjectStore(Xn),l.deleteObjectStore(Jn),l.deleteObjectStore(un)})(e),dh(e)),a=a.next((()=>(function(l){const d=l.store(un),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put(Si,p)})(o)))),n<4&&i>=4&&(n!==0&&(a=a.next((()=>(function(l,d){return d.store(ze).J().next((g=>{l.deleteObjectStore(ze),l.createObjectStore(ze,{keyPath:wl,autoIncrement:!0}).createIndex(an,vl,{unique:!0});const I=d.store(ze),P=g.map((k=>I.put(k)));return A.waitFor(P)}))})(e,o)))),a=a.next((()=>{(function(l){l.createObjectStore(Yn,{keyPath:iE})})(e)}))),n<5&&i>=5&&(a=a.next((()=>this.yi(o)))),n<6&&i>=6&&(a=a.next((()=>((function(l){l.createObjectStore(os)})(e),this.wi(o))))),n<7&&i>=7&&(a=a.next((()=>this.Si(o)))),n<8&&i>=8&&(a=a.next((()=>this.bi(e,o)))),n<9&&i>=9&&(a=a.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&i>=10&&(a=a.next((()=>this.Di(o)))),n<11&&i>=11&&(a=a.next((()=>{(function(l){l.createObjectStore(Hi,{keyPath:oE})})(e),(function(l){l.createObjectStore(Wi,{keyPath:aE})})(e)}))),n<12&&i>=12&&(a=a.next((()=>{(function(l){const d=l.createObjectStore(Qi,{keyPath:pE});d.createIndex(fa,mE,{unique:!1}),d.createIndex(Xd,gE,{unique:!1})})(e)}))),n<13&&i>=13&&(a=a.next((()=>(function(l){const d=l.createObjectStore(Ri,{keyPath:YI});d.createIndex(ai,ZI),d.createIndex(Hd,eE)})(e))).next((()=>this.Ci(e,o))).next((()=>e.deleteObjectStore(tn)))),n<14&&i>=14&&(a=a.next((()=>this.Fi(e,o)))),n<15&&i>=15&&(a=a.next((()=>(function(l){l.createObjectStore(Ja,{keyPath:cE,autoIncrement:!0}).createIndex(da,uE,{unique:!1}),l.createObjectStore(Kr,{keyPath:lE}).createIndex(Qd,hE,{unique:!1}),l.createObjectStore(Hr,{keyPath:dE}).createIndex(Jd,fE,{unique:!1})})(e)))),n<16&&i>=16&&(a=a.next((()=>{t.objectStore(Kr).clear()})).next((()=>{t.objectStore(Hr).clear()}))),n<17&&i>=17&&(a=a.next((()=>{(function(l){l.createObjectStore(Xa,{keyPath:_E})})(e)}))),n<18&&i>=18&&Gh()&&(a=a.next((()=>{t.objectStore(Kr).clear()})).next((()=>{t.objectStore(Hr).clear()}))),a}wi(e){let t=0;return e.store(tn).ee(((n,i)=>{t+=Oi(i)})).next((()=>{const n={byteSize:t};return e.store(os).put(ha,n)}))}yi(e){const t=e.store(is),n=e.store(ze);return t.J().next((i=>A.forEach(i,(o=>{const a=IDBKeyRange.bound([o.userId,cn],[o.userId,o.lastAcknowledgedBatchId]);return n.J(an,a).next((u=>A.forEach(u,(l=>{F(l.userId===o.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=rn(this.serializer,l);return ep(e,o.userId,d).next((()=>{}))}))))}))))}Si(e){const t=e.store(Xn),n=e.store(tn);return e.store(un).get(Si).next((i=>{const o=[];return n.ee(((a,u)=>{const l=new Z(a),d=(function(g){return[0,be(g)]})(l);o.push(t.get(d).next((p=>p?A.resolve():(g=>t.put({targetId:0,path:be(g),sequenceNumber:i.highestListenSequenceNumber}))(l))))})).next((()=>A.waitFor(o)))}))}bi(e,t){e.createObjectStore(as,{keyPath:sE});const n=t.store(as),i=new lc,o=a=>{if(i.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:be(l)})}};return t.store(tn).ee({X:!0},((a,u)=>{const l=new Z(a);return o(l.popLast())})).next((()=>t.store(Qn).ee({X:!0},(([a,u,l],d)=>{const p=Qe(u);return o(p.popLast())}))))}Di(e){const t=e.store(Jn);return t.ee(((n,i)=>{const o=Br(i),a=Qf(this.serializer,o);return t.put(a)}))}Ci(e,t){const n=t.store(tn),i=[];return n.ee(((o,a)=>{const u=t.store(Ri),l=(function(g){return g.document?new M(Z.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):L(36783)})(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(d))})).next((()=>A.waitFor(i)))}Fi(e,t){const n=t.store(ze),i=ap(this.serializer),o=new dc(oo.mi,this.serializer.yt);return n.J().next((a=>{const u=new Map;return a.forEach((l=>{let d=u.get(l.userId)??H();rn(this.serializer,l).keys().forEach((p=>d=d.add(p))),u.set(l.userId,d)})),A.forEach(u,((l,d)=>{const p=new Ve(d),g=so.wt(this.serializer,p),I=o.getIndexManager(p),P=io.wt(p,this.serializer,I,o.referenceDelegate);return new cp(i,P,g,I).recalculateAndSaveOverlaysForDocumentKeys(new pa(t,qe.ce),l).next()}))}))}}function dh(s){s.createObjectStore(Xn,{keyPath:nE}).createIndex(Qa,rE,{unique:!0}),s.createObjectStore(Jn,{keyPath:"targetId"}).createIndex(Wd,tE,{unique:!0}),s.createObjectStore(un)}const St="IndexedDbPersistence",Wo=18e5,Qo=5e3,Jo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",BT="main";class fc{constructor(e,t,n,i,o,a,u,l,d,p,g=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=o,this.window=a,this.document=u,this.xi=d,this.Oi=p,this.Ni=g,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!fc.v())throw new N(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bT(this,i),this.$i=t+BT,this.serializer=new Wf(l),this.Ui=new Lt(this.$i,this.Ni,new UT(this.serializer)),this.hi=new gT,this.Pi=new AT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ap(this.serializer),this.Ii=new mT,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,p===!1&&De(St,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(C.FAILED_PRECONDITION,Jo);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new qe(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Ys(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(zt(e))return V(St,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(St,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return xr(e).get(Vn).next((t=>A.resolve(this.es(t))))}ts(e){return Ys(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Wo)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=ye(t,Yn);return n.J().next((i=>{const o=this.ss(i,Wo),a=i.filter((u=>o.indexOf(u)===-1));return A.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?A.resolve(!0):xr(e).get(Vn).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Qo)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new N(C.FAILED_PRECONDITION,Jo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ys(e).J().next((n=>this.ss(n,Qo).find((i=>{if(this.clientId!==i.clientId){const o=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(o||a&&u)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&V(St,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[ws,Yn],(e=>{const t=new pa(e,qe.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Ys(e).J().next((t=>this.ss(t,Wo).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return io.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new vT(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return so.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){V(St,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",o=(function(l){return l===18?EE:l===17?tf:l===16?IE:l===15?Ya:l===14?ef:l===13?Zd:l===12?yE:l===11?Yd:void L(60245)})(this.Ni);let a;return this.Ui.runTransaction(e,i,o,(u=>(a=new pa(u,this.ci?this.ci.next():qe.ce),t==="readwrite-primary"?this.Hi(a).next((l=>!!l||this.Yi(a))).next((l=>{if(!l)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new N(C.FAILED_PRECONDITION,zd);return n(a)})).next((l=>this.Xi(a).next((()=>l)))):this.Is(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Is(e){return xr(e).get(Vn).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Qo)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(C.FAILED_PRECONDITION,Jo)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xr(e).put(Vn,t)}static v(){return Lt.v()}Zi(e){const t=xr(e);return t.get(Vn).next((n=>this.es(n)?(V(St,"Releasing primary lease."),t.delete(Vn)):A.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(De(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;$h()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return V(St,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return De(St,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xr(s){return ye(s,ws)}function Ys(s){return ye(s,Yn)}function qT(s,e){let t=s.projectId;return s.isDefaultDatabase||(t+="."+s.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class pc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=i}static As(e,t){let n=H(),i=H();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new pc(e,t.fromCache,n,i)}}/**
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
 */class jT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class up{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return $h()?8:Gd(ge())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,i){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,i,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new jT;return this.Ss(e,t,a).next((u=>{if(o.result=u,this.Vs)return this.bs(e,t,a,u.size)}))})).next((()=>o.result))}bs(e,t,n,i){return n.documentReadCount<this.fs?(Mn()<=W.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),A.resolve()):(Mn()<=W.DEBUG&&V("QueryEngine","Query:",Ln(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(Mn()<=W.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):A.resolve())}ys(e,t){if(Ml(t))return A.resolve(null);let n=je(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ta(t,null,"F"),n=je(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((o=>{const a=H(...o);return this.ps.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,n).next((l=>{const d=this.Ds(t,u);return this.Cs(t,d,a,l.readTime)?this.ys(e,Ta(t,null,"F")):this.vs(e,d,t,l)}))))})))))}ws(e,t,n,i){return Ml(t)||i.isEqual(U.min())?A.resolve(null):this.ps.getDocuments(e,n).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,n,i)?A.resolve(null):(Mn()<=W.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ln(t)),this.vs(e,a,t,zI(i,ns)).next((u=>u)))}))}Ds(e,t){let n=new ne(wf(e));return t.forEach(((i,o)=>{Rs(e,o)&&(n=n.add(o))})),n}Cs(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,n){return Mn()<=W.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.ps.getDocumentsMatchingQuery(e,t,Fe.min(),n)}vs(e,t,n,i){return this.ps.getDocumentsMatchingQuery(e,n,i).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const mc="LocalStore",zT=3e8;class $T{constructor(e,t,n,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new ae(z),this.xs=new mt((o=>yn(o)),vs),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cp(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function lp(s,e,t,n){return new $T(s,e,t,n)}async function hp(s,e){const t=$(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],u=[];let l=H();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(n,l).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function GT(s,e){const t=$(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,p){const g=d.batch,I=g.keys();let P=A.resolve();return I.forEach((k=>{P=P.next((()=>p.getEntry(l,k))).next((O=>{const D=d.docVersions.get(k);F(D!==null,48541),O.version.compareTo(D)<0&&(g.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(l,g)))})(t,n,e,o).next((()=>o.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let l=H();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function dp(s){const e=$(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function KT(s,e){const t=$(s),n=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const u=[];e.targetChanges.forEach(((p,g)=>{const I=i.get(g);if(!I)return;u.push(t.Pi.removeMatchingKeys(o,p.removedDocuments,g).next((()=>t.Pi.addMatchingKeys(o,p.addedDocuments,g))));let P=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?P=P.withResumeToken(pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,n)),i=i.insert(g,P),(function(O,D,G){return O.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=zT?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(I,P,p)&&u.push(t.Pi.updateTargetData(o,P))}));let l=Le(),d=H();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),u.push(HT(o,a,e.documentUpdates).next((p=>{l=p.ks,d=p.qs}))),!n.isEqual(U.min())){const p=t.Pi.getLastRemoteSnapshotVersion(o).next((g=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,n)));u.push(p)}return A.waitFor(u).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,l,d))).next((()=>l))})).then((o=>(t.Ms=i,o)))}function HT(s,e,t){let n=H(),i=H();return t.forEach((o=>n=n.add(o))),e.getEntries(s,n).next((o=>{let a=Le();return t.forEach(((u,l)=>{const d=o.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):V(mc,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{ks:a,qs:i}}))}function WT(s,e){const t=$(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=cn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function QT(s,e){const t=$(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.Pi.getTargetData(n,e).next((o=>o?(i=o,A.resolve(i)):t.Pi.allocateTargetId(n).next((a=>(i=new ot(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Ms.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function Ca(s,e,t){const n=$(s),i=n.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!zt(a))throw a;V(mc,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ms=n.Ms.remove(e),n.xs.delete(i.target)}function fh(s,e,t){const n=$(s);let i=U.min(),o=H();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,p){const g=$(l),I=g.xs.get(p);return I!==void 0?A.resolve(g.Ms.get(I)):g.Pi.getTargetData(d,p)})(n,a,je(e)).next((u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{o=l}))})).next((()=>n.Fs.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:H()))).next((u=>(JT(n,OE(e),u),{documents:u,Qs:o})))))}function JT(s,e,t){let n=s.Os.get(e)||U.min();t.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),s.Os.set(e,n)}class ph{constructor(){this.activeTargetIds=qE()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fp{constructor(){this.Mo=new ph,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ph,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XT{Oo(e){}shutdown(){}}/**
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
 */const mh="ConnectivityMonitor";class gh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(mh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){V(mh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zs=null;function Va(){return Zs===null?Zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zs++,"0x"+Zs.toString(16)}/**
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
 */const Xo="RestConnection",YT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZT{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===bi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(e,t,n,i,o){const a=Va(),u=this.zo(e,t.toUriEncodedString());V(Xo,`Sending RPC '${e}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,i,o);const{host:d}=new URL(u),p=ar(d);return this.Jo(e,u,l,n,p).then((g=>(V(Xo,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw ts(Xo,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",n),g}))}Ho(e,t,n,i,o,a){return this.Go(e,t,n,i,o)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+lr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,o)=>e[o]=i)),n&&n.headers.forEach(((i,o)=>e[o]=i))}zo(e,t){const n=YT[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class ew{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ve="WebChannelConnection";class tw extends ZT{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,i,o){const a=Va();return new Promise(((u,l)=>{const d=new Nd;d.setWithCredentials(!0),d.listenOnce(xd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case si.NO_ERROR:const g=d.getResponseJson();V(ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case si.TIMEOUT:V(ve,`RPC '${e}' ${a} timed out`),l(new N(C.DEADLINE_EXCEEDED,"Request time out"));break;case si.HTTP_ERROR:const I=d.getStatus();if(V(ve,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P?.error;if(k&&k.status&&k.message){const O=(function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN})(k.status);l(new N(O,k.message))}else l(new N(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new N(C.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(ve,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(i);V(ve,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,n,15)}))}T_(e,t,n){const i=Va(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ld(),u=Md(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const p=o.join("");V(ve,`Creating RPC '${e}' stream ${i}: ${p}`,l);const g=a.createWebChannel(p,l);this.I_(g);let I=!1,P=!1;const k=new ew({Yo:D=>{P?V(ve,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(I||(V(ve,`Opening RPC '${e}' stream ${i} transport.`),g.open(),I=!0),V(ve,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},Zo:()=>g.close()}),O=(D,G,j)=>{D.listen(G,(B=>{try{j(B)}catch(re){setTimeout((()=>{throw re}),0)}}))};return O(g,Lr.EventType.OPEN,(()=>{P||(V(ve,`RPC '${e}' stream ${i} transport opened.`),k.o_())})),O(g,Lr.EventType.CLOSE,(()=>{P||(P=!0,V(ve,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(g))})),O(g,Lr.EventType.ERROR,(D=>{P||(P=!0,ts(ve,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new N(C.UNAVAILABLE,"The operation could not be completed")))})),O(g,Lr.EventType.MESSAGE,(D=>{if(!P){const G=D.data[0];F(!!G,16349);const j=G,B=j?.error||j[0]?.error;if(B){V(ve,`RPC '${e}' stream ${i} received error:`,B);const re=B.status;let Y=(function(_){const E=de[_];if(E!==void 0)return xf(E)})(re),J=B.message;Y===void 0&&(Y=C.INTERNAL,J="Unknown error status: "+re+" with message "+B.message),P=!0,k.a_(new N(Y,J)),g.close()}else V(ve,`RPC '${e}' stream ${i} received:`,G),k.u_(G)}})),O(u,Od.STAT_EVENT,(D=>{D.stat===ca.PROXY?V(ve,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ca.NOPROXY&&V(ve,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 */function nw(){return typeof window<"u"?window:null}function pi(){return typeof document<"u"?document:null}/**
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
 */function ao(s){return new sT(s,!0)}/**
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
 */class pp{constructor(e,t,n=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const _h="PersistentStream";class mp{constructor(e,t,n,i,o,a,u,l){this.Mi=e,this.S_=n,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(De(t.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.D_===t&&this.G_(n,i)}),(n=>{e((()=>{const i=new N(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(i)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{n((()=>this.z_(i)))})),this.stream.onMessage((i=>{n((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(_h,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(V(_h,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rw extends mp{constructor(e,t,n,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=aT(this.serializer,e),n=(function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?ke(a.readTime):U.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Aa(this.serializer),t.addTarget=(function(o,a){let u;const l=a.target;if(u=Ci(l)?{documents:jf(o,l)}:{query:zf(o,l).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Lf(o,a.resumeToken);const d=wa(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=ir(o,a.snapshotVersion.toTimestamp());const d=wa(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const n=uT(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Aa(this.serializer),t.removeTarget=e,this.q_(t)}}class sw extends mp{constructor(e,t,n,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return F(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){F(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cT(e.writeResults,e.commitTime),n=ke(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Aa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ki(this.serializer,n)))};this.q_(t)}}/**
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
 */class iw{}class ow extends iw{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,va(t,n),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(C.UNKNOWN,o.toString())}))}Ho(e,t,n,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Ho(e,va(t,n),i,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class aw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(De(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wn="RemoteStore";class cw{constructor(e,t,n,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{n.enqueueAndForget((async()=>{Rn(this)&&(V(wn,"Restarting streams for network reachability change."),await(async function(l){const d=$(l);d.Ea.add(4),await bs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await co(d)})(this))}))})),this.Ra=new aw(n,i)}}async function co(s){if(Rn(s))for(const e of s.da)await e(!0)}async function bs(s){for(const e of s.da)await e(!1)}function gp(s,e){const t=$(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ic(t)?yc(t):dr(t).O_()&&_c(t,e))}function gc(s,e){const t=$(s),n=dr(t);t.Ia.delete(e),n.O_()&&_p(t,e),t.Ia.size===0&&(n.O_()?n.L_():Rn(t)&&t.Ra.set("Unknown"))}function _c(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dr(s).Y_(e)}function _p(s,e){s.Va.Ue(e),dr(s).Z_(e)}function yc(s){s.Va=new eT({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),dr(s).start(),s.Ra.ua()}function Ic(s){return Rn(s)&&!dr(s).x_()&&s.Ia.size>0}function Rn(s){return $(s).Ea.size===0}function yp(s){s.Va=void 0}async function uw(s){s.Ra.set("Online")}async function lw(s){s.Ia.forEach(((e,t)=>{_c(s,e)}))}async function hw(s,e){yp(s),Ic(s)?(s.Ra.ha(e),yc(s)):s.Ra.set("Unknown")}async function dw(s,e,t){if(s.Ra.set("Online"),e instanceof Mf&&e.state===2&&e.cause)try{await(async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Ia.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ia.delete(u),i.Va.removeTarget(u))})(s,e)}catch(n){V(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Li(s,n)}else if(e instanceof di?s.Va.Ze(e):e instanceof Of?s.Va.st(e):s.Va.tt(e),!t.isEqual(U.min()))try{const n=await dp(s.localStore);t.compareTo(n)>=0&&await(function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const p=o.Ia.get(l);if(!p)return;o.Ia.set(l,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),_p(o,l);const g=new ot(p.target,l,d,p.sequenceNumber);_c(o,g)})),o.remoteSyncer.applyRemoteEvent(u)})(s,t)}catch(n){V(wn,"Failed to raise snapshot:",n),await Li(s,n)}}async function Li(s,e,t){if(!zt(e))throw e;s.Ea.add(1),await bs(s),s.Ra.set("Offline"),t||(t=()=>dp(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{V(wn,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await co(s)}))}function Ip(s,e){return e().catch((t=>Li(s,t,e)))}async function Ps(s){const e=$(s),t=qt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cn;for(;fw(e);)try{const i=await WT(e.localStore,n);if(i===null){e.Ta.length===0&&t.L_();break}n=i.batchId,pw(e,i)}catch(i){await Li(e,i)}Ep(e)&&Tp(e)}function fw(s){return Rn(s)&&s.Ta.length<10}function pw(s,e){s.Ta.push(e);const t=qt(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Ep(s){return Rn(s)&&!qt(s).x_()&&s.Ta.length>0}function Tp(s){qt(s).start()}async function mw(s){qt(s).ra()}async function gw(s){const e=qt(s);for(const t of s.Ta)e.ea(t.mutations)}async function _w(s,e,t){const n=s.Ta.shift(),i=ic.from(n,e,t);await Ip(s,(()=>s.remoteSyncer.applySuccessfulWrite(i))),await Ps(s)}async function yw(s,e){e&&qt(s).X_&&await(async function(n,i){if((function(a){return XE(a)&&a!==C.ABORTED})(i.code)){const o=n.Ta.shift();qt(n).B_(),await Ip(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Ps(n)}})(s,e),Ep(s)&&Tp(s)}async function yh(s,e){const t=$(s);t.asyncQueue.verifyOperationInProgress(),V(wn,"RemoteStore received new credentials");const n=Rn(t);t.Ea.add(3),await bs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await co(t)}async function Iw(s,e){const t=$(s);e?(t.Ea.delete(2),await co(t)):e||(t.Ea.add(2),await bs(t),t.Ra.set("Unknown"))}function dr(s){return s.ma||(s.ma=(function(t,n,i){const o=$(t);return o.sa(),new rw(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(s.datastore,s.asyncQueue,{Xo:uw.bind(null,s),t_:lw.bind(null,s),r_:hw.bind(null,s),H_:dw.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Ic(s)?yc(s):s.Ra.set("Unknown")):(await s.ma.stop(),yp(s))}))),s.ma}function qt(s){return s.fa||(s.fa=(function(t,n,i){const o=$(t);return o.sa(),new sw(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:mw.bind(null,s),r_:yw.bind(null,s),ta:gw.bind(null,s),na:_w.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await Ps(s)):(await s.fa.stop(),s.Ta.length>0&&(V(wn,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
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
 */class Ec{constructor(e,t,n,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,o){const a=Date.now()+n,u=new Ec(e,t,a,i,o);return u.start(n),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tc(s,e){if(De("AsyncQueue",`${e}: ${s}`),zt(s))return new N(C.UNAVAILABLE,`${e}: ${s}`);throw s}/**
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
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=Fr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Gn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Ih{constructor(){this.ga=new ae(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class or{constructor(e,t,n,i,o,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,o){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new or(e,t,Gn.emptySet(t),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Ew{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Tw{constructor(){this.queries=Eh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const i=$(t),o=i.queries;i.queries=Eh(),o.forEach(((a,u)=>{for(const l of u.Sa)l.onError(n)}))})(this,new N(C.ABORTED,"Firestore shutting down"))}}function Eh(){return new mt((s=>Tf(s)),Zi)}async function wp(s,e){const t=$(s);let n=3;const i=e.query;let o=t.queries.get(i);o?!o.ba()&&e.Da()&&(n=2):(o=new Ew,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(i,!0);break;case 1:o.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Tc(a,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&wc(t)}async function vp(s,e){const t=$(s),n=e.query;let i=3;const o=t.queries.get(n);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=e.Da()?0:1:!o.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function ww(s,e){const t=$(s);let n=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(i)&&(n=!0);a.wa=i}}n&&wc(t)}function vw(s,e,t){const n=$(s),i=n.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);n.queries.delete(e)}function wc(s){s.Ca.forEach((e=>{e.next()}))}var Da,Th;(Th=Da||(Da={})).Ma="default",Th.Cache="cache";class Ap{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new or(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Da.Cache}}/**
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
 */class Rp{constructor(e){this.key=e}}class Sp{constructor(e){this.key=e}}class Aw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=H(),this.mutatedKeys=H(),this.eu=wf(e),this.tu=new Gn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Ih,i=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((p,g)=>{const I=i.get(p),P=Rs(this.query,g)?g:null,k=!!I&&this.mutatedKeys.has(I.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;I&&P?I.data.isEqual(P.data)?k!==O&&(n.track({type:3,doc:P}),D=!0):this.su(I,P)||(n.track({type:2,doc:P}),D=!0,(l&&this.eu(P,l)>0||d&&this.eu(P,d)<0)&&(u=!0)):!I&&P?(n.track({type:0,doc:P}),D=!0):I&&!P&&(n.track({type:1,doc:I}),D=!0,(l||d)&&(u=!0)),D&&(P?(a=a.add(P),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((p,g)=>(function(P,k){const O=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Rt:D})}};return O(P)-O(k)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(n),i=i??!1;const u=t&&!i?this._u():[],l=this.Xa.size===0&&this.current&&!i?1:0,d=l!==this.Za;return this.Za=l,a.length!==0||d?{snapshot:new or(this.query,e.tu,o,a,e.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ih,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=H(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Sp(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new Rp(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=H();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return or.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const vc="SyncEngine";class Rw{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Sw{constructor(e){this.key=e,this.hu=!1}}class bw{constructor(e,t,n,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new mt((u=>Tf(u)),Zi),this.Iu=new Map,this.Eu=new Set,this.du=new ae(M.comparator),this.Au=new Map,this.Ru=new hc,this.Vu={},this.mu=new Map,this.fu=Tn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pw(s,e,t=!0){const n=kp(s);let i;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await bp(n,e,t,!0),i}async function Cw(s,e){const t=kp(s);await bp(t,e,!0,!1)}async function bp(s,e,t,n){const i=await QT(s.localStore,je(e)),o=i.targetId,a=s.sharedClientState.addLocalQueryTarget(o,t);let u;return n&&(u=await Vw(s,e,o,a==="current",i.resumeToken)),s.isPrimaryClient&&t&&gp(s.remoteStore,i),u}async function Vw(s,e,t,n,i){s.pu=(g,I,P)=>(async function(O,D,G,j){let B=D.view.ru(G);B.Cs&&(B=await fh(O.localStore,D.query,!1).then((({documents:T})=>D.view.ru(T,B))));const re=j&&j.targetChanges.get(D.targetId),Y=j&&j.targetMismatches.get(D.targetId)!=null,J=D.view.applyChanges(B,O.isPrimaryClient,re,Y);return vh(O,D.targetId,J.au),J.snapshot})(s,g,I,P);const o=await fh(s.localStore,e,!0),a=new Aw(e,o.Qs),u=a.ru(o.documents),l=Ss.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",i),d=a.applyChanges(u,s.isPrimaryClient,l);vh(s,t,d.au);const p=new Rw(e,t,a);return s.Tu.set(e,p),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),d.snapshot}async function Dw(s,e,t){const n=$(s),i=n.Tu.get(e),o=n.Iu.get(i.targetId);if(o.length>1)return n.Iu.set(i.targetId,o.filter((a=>!Zi(a,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ca(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&gc(n.remoteStore,i.targetId),ka(n,i.targetId)})).catch(An)):(ka(n,i.targetId),await Ca(n.localStore,i.targetId,!0))}async function kw(s,e){const t=$(s),n=t.Tu.get(e),i=t.Iu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),gc(t.remoteStore,n.targetId))}async function Nw(s,e,t){const n=Np(s);try{const i=await(function(a,u){const l=$(a),d=ee.now(),p=u.reduce(((P,k)=>P.add(k.key)),H());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let k=Le(),O=H();return l.Ns.getEntries(P,p).next((D=>{k=D,k.forEach(((G,j)=>{j.isValidDocument()||(O=O.add(G))}))})).next((()=>l.localDocuments.getOverlayedDocuments(P,k))).next((D=>{g=D;const G=[];for(const j of u){const B=QE(j,g.get(j.key).overlayedDocument);B!=null&&G.push(new gt(j.key,B,df(B.value.mapValue),Se.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,G,u)})).next((D=>{I=D;const G=D.applyToLocalDocumentSet(g,O);return l.documentOverlayCache.saveOverlays(P,D.batchId,G)}))})).then((()=>({batchId:I.batchId,changes:Af(g)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(a,u,l){let d=a.Vu[a.currentUser.toKey()];d||(d=new ae(z)),d=d.insert(u,l),a.Vu[a.currentUser.toKey()]=d})(n,i.batchId,t),await Cs(n,i.changes),await Ps(n.remoteStore)}catch(i){const o=Tc(i,"Failed to persist write");t.reject(o)}}async function Pp(s,e){const t=$(s);try{const n=await KT(t.localStore,e);e.targetChanges.forEach(((i,o)=>{const a=t.Au.get(o);a&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?F(a.hu,14607):i.removedDocuments.size>0&&(F(a.hu,42227),a.hu=!1))})),await Cs(t,n,e)}catch(n){await An(n)}}function wh(s,e,t){const n=$(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Tu.forEach(((o,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)})),(function(a,u){const l=$(a);l.onlineState=u;let d=!1;l.queries.forEach(((p,g)=>{for(const I of g.Sa)I.va(u)&&(d=!0)})),d&&wc(l)})(n.eventManager,e),i.length&&n.Pu.H_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function xw(s,e,t){const n=$(s);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Au.get(e),o=i&&i.key;if(o){let a=new ae(M.comparator);a=a.insert(o,le.newNoDocument(o,U.min()));const u=H().add(o),l=new ro(U.min(),new Map,new ae(z),a,u);await Pp(n,l),n.du=n.du.remove(o),n.Au.delete(e),Ac(n)}else await Ca(n.localStore,e,!1).then((()=>ka(n,e,t))).catch(An)}async function Ow(s,e){const t=$(s),n=e.batch.batchId;try{const i=await GT(t.localStore,e);Vp(t,n,null),Cp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Cs(t,i)}catch(i){await An(i)}}async function Mw(s,e,t){const n=$(s);try{const i=await(function(a,u){const l=$(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next((g=>(F(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>l.localDocuments.getDocuments(d,p)))}))})(n.localStore,e);Vp(n,e,t),Cp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Cs(n,i)}catch(i){await An(i)}}function Cp(s,e){(s.mu.get(e)||[]).forEach((t=>{t.resolve()})),s.mu.delete(e)}function Vp(s,e,t){const n=$(s);let i=n.Vu[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),n.Vu[n.currentUser.toKey()]=i}}function ka(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((n=>{s.Ru.containsKey(n)||Dp(s,n)}))}function Dp(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(gc(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),Ac(s))}function vh(s,e,t){for(const n of t)n instanceof Rp?(s.Ru.addReference(n.key,e),Lw(s,n)):n instanceof Sp?(V(vc,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||Dp(s,n.key)):L(19791,{wu:n})}function Lw(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(V(vc,"New document in limbo: "+t),s.Eu.add(n),Ac(s))}function Ac(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new M(Z.fromString(e)),n=s.fu.next();s.Au.set(n,new Sw(t)),s.du=s.du.insert(t,n),gp(s.remoteStore,new ot(je(Yi(t.path)),n,"TargetPurposeLimboResolution",qe.ce))}}async function Cs(s,e,t){const n=$(s),i=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((u,l)=>{a.push(n.pu(l,e,t).then((d=>{if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:t?.targetChanges.get(l.targetId)?.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){i.push(d);const p=pc.As(l.targetId,d);o.push(p)}})))})),await Promise.all(a),n.Pu.H_(i),await(async function(l,d){const p=$(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>A.forEach(d,(I=>A.forEach(I.Es,(P=>p.persistence.referenceDelegate.addReference(g,I.targetId,P))).next((()=>A.forEach(I.ds,(P=>p.persistence.referenceDelegate.removeReference(g,I.targetId,P)))))))))}catch(g){if(!zt(g))throw g;V(mc,"Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const P=p.Ms.get(I),k=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(k);p.Ms=p.Ms.insert(I,O)}}})(n.localStore,o))}async function Fw(s,e){const t=$(s);if(!t.currentUser.isEqual(e)){V(vc,"User change. New user:",e.toKey());const n=await hp(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((u=>{u.forEach((l=>{l.reject(new N(C.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Cs(t,n.Ls)}}function Uw(s,e){const t=$(s),n=t.Au.get(e);if(n&&n.hu)return H().add(n.key);{let i=H();const o=t.Iu.get(e);if(!o)return i;for(const a of o){const u=t.Tu.get(a);i=i.unionWith(u.view.nu)}return i}}function kp(s){const e=$(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xw.bind(null,e),e.Pu.H_=ww.bind(null,e.eventManager),e.Pu.yu=vw.bind(null,e.eventManager),e}function Np(s){const e=$(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ow.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mw.bind(null,e),e}class ps{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ao(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return lp(this.persistence,new up,e.initialUser,this.serializer)}Cu(e){return new dc(oo.mi,this.serializer)}Du(e){return new fp}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ps.provider={build:()=>new ps};class Bw extends ps{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){F(this.persistence.referenceDelegate instanceof Mi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new sp(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new dc((n=>Mi.mi(n,t)),this.serializer)}}class qw extends ps{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await Np(this.xu.syncEngine),await Ps(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return lp(this.persistence,new up,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new sp(n,e.asyncQueue,t)}Mu(e,t){const n=new HI(t,this.persistence);return new KI(e.asyncQueue,n)}Cu(e){const t=qT(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new fc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,nw(),pi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new fp}}class Fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>wh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fw.bind(null,this.syncEngine),await Iw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Tw})()}createDatastore(e){const t=ao(e.databaseInfo.databaseId),n=(function(o){return new tw(o)})(e.databaseInfo);return(function(o,a,u,l){return new ow(o,a,u,l)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,o,a,u){return new cw(n,i,o,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>wh(this.syncEngine,t,0)),(function(){return gh.v()?new gh:new XT})())}createSyncEngine(e,t){return(function(i,o,a,u,l,d,p){const g=new bw(i,o,a,u,l,d);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=$(t);V(wn,"RemoteStore shutting down."),n.Ea.add(5),await bs(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Fi.provider={build:()=>new Fi};/**
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
 */class xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):De("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const jt="FirestoreClient";class jw{constructor(e,t,n,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=Ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{V(jt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(V(jt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Yo(s,e){s.asyncQueue.verifyOperationInProgress(),V(jt,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async i=>{n.isEqual(i)||(await hp(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function Ah(s,e){s.asyncQueue.verifyOperationInProgress();const t=await zw(s);V(jt,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>yh(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,i)=>yh(e.remoteStore,i))),s._onlineComponents=e}async function zw(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){V(jt,"Using user provided OfflineComponentProvider");try{await Yo(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ts("Error using user provided cache. Falling back to memory cache: "+t),await Yo(s,new ps)}}else V(jt,"Using default OfflineComponentProvider"),await Yo(s,new Bw(void 0));return s._offlineComponents}async function Op(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(V(jt,"Using user provided OnlineComponentProvider"),await Ah(s,s._uninitializedComponentsProvider._online)):(V(jt,"Using default OnlineComponentProvider"),await Ah(s,new Fi))),s._onlineComponents}function $w(s){return Op(s).then((e=>e.syncEngine))}async function Mp(s){const e=await Op(s),t=e.eventManager;return t.onListen=Pw.bind(null,e.syncEngine),t.onUnlisten=Dw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Cw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kw.bind(null,e.syncEngine),t}function Gw(s,e,t={}){const n=new Ze;return s.asyncQueue.enqueueAndForget((async()=>(function(o,a,u,l,d){const p=new xp({next:I=>{p.Nu(),a.enqueueAndForget((()=>vp(o,g)));const P=I.docs.has(u);!P&&I.fromCache?d.reject(new N(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&l&&l.source==="server"?d.reject(new N(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Ap(Yi(u.path),p,{includeMetadataChanges:!0,qa:!0});return wp(o,g)})(await Mp(s),s.asyncQueue,e,t,n))),n.promise}function Kw(s,e,t={}){const n=new Ze;return s.asyncQueue.enqueueAndForget((async()=>(function(o,a,u,l,d){const p=new xp({next:I=>{p.Nu(),a.enqueueAndForget((()=>vp(o,g))),I.fromCache&&l.source==="server"?d.reject(new N(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Ap(u,p,{includeMetadataChanges:!0,qa:!0});return wp(o,g)})(await Mp(s),s.asyncQueue,e,t,n))),n.promise}/**
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
 */function Lp(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Rh=new Map;/**
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
 */const Hw="firestore.googleapis.com",Sh=!0;class bh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new N(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hw,this.ssl=Sh}else this.host=e.host,this.ssl=e.ssl??Sh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rp)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lp(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new N(C.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new NI;switch(n.type){case"firstParty":return new MI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Rh.get(t);n&&(V("ComponentProvider","Removing Datastore"),Rh.delete(t),n.terminate())})(this),Promise.resolve()}}/**
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
 */class fr{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fr(this.firestore,e,this._query)}}class he{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ts(t,he._jsonSchema))return new he(e,n||null,new M(Z.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:fe("string",he._jsonSchemaVersion),referencePath:fe("string")};class Ft extends fr{constructor(e,t,n){super(e,t,Yi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new M(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function Ww(s,e,...t){if(s=_e(s),Bd("collection","path",e),s instanceof Rc){const n=Z.fromString(e,...t);return _l(n),new Ft(s,null,n)}{if(!(s instanceof he||s instanceof Ft))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return _l(n),new Ft(s.firestore,null,n)}}function Fp(s,e,...t){if(s=_e(s),arguments.length===1&&(e=Ka.newId()),Bd("doc","path",e),s instanceof Rc){const n=Z.fromString(e,...t);return gl(n),new he(s,null,new M(n))}{if(!(s instanceof he||s instanceof Ft))throw new N(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(Z.fromString(e,...t));return gl(n),new he(s.firestore,s instanceof Ft?s.converter:null,new M(n))}}/**
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
 */const Ph="AsyncQueue";class Ch{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pp(this,"async_queue_retry"),this._c=()=>{const n=pi();n&&V(Ph,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=pi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ze;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!zt(e))throw e;V(Ph,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,De("INTERNAL UNHANDLED ERROR: ",Vh(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ec.createAndSchedule(this,e,t,n,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&L(47125,{Pc:Vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vh(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}let Sn=class extends Rc{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Ch,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ch(e),this._firestoreClient=void 0,await e}}};function Qw(s,e,t){t||(t=bi);const n=Ma(s,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),o=n.getOptions(t);if(dn(o,e))return i;throw new N(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new N(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rp)throw new N(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ar(e.host)&&jh(e.host),n.initialize({options:e,instanceIdentifier:t})}function Sc(s){if(s._terminated)throw new N(C.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Jw(s),s._firestoreClient}function Jw(s){const e=s._freezeSettings(),t=(function(i,o,a,u){return new wE(i,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Lp(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)})(s._databaseId,s._app?.options.appId||"",s._persistenceKey,e);s._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new jw(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(s._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(pe.fromBase64String(e))}catch(t){throw new N(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ts(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:fe("string",Be._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class uo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bc{constructor(e){this._methodName=e}}/**
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
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(Ts(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:fe("string",et._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ts(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new N(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:fe("string",tt._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const Xw=/^__.*__$/;class Yw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}class Up{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Bp(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ac:s})}}class Pc{constructor(e,t,n,i,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Pc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ui(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Bp(this.Ac)&&Xw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Zw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ao(e)}Cc(e,t,n,i=!1){return new Pc({Ac:e,methodName:t,Dc:n,path:ce.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lo(s){const e=s._freezeSettings(),t=ao(s._databaseId);return new Zw(s._databaseId,!!e.ignoreUndefinedProperties,t)}function qp(s,e,t,n,i,o={}){const a=s.Cc(o.merge||o.mergeFields?2:0,e,t,i);Cc("Data must be an object, but it was:",a,n);const u=jp(n,a);let l,d;if(o.merge)l=new xe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const g of o.mergeFields){const I=Na(e,g,t);if(!a.contains(I))throw new N(C.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);$p(p,I)||p.push(I)}l=new xe(p),d=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,d=a.fieldTransforms;return new Yw(new Re(u),l,d)}class ho extends bc{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ho}}function ev(s,e,t,n){const i=s.Cc(1,e,t);Cc("Data must be an object, but it was:",i,n);const o=[],a=Re.empty();$t(n,((l,d)=>{const p=Vc(e,l,t);d=_e(d);const g=i.yc(p);if(d instanceof ho)o.push(p);else{const I=Vs(d,g);I!=null&&(o.push(p),a.set(p,I))}}));const u=new xe(o);return new Up(a,u,i.fieldTransforms)}function tv(s,e,t,n,i,o){const a=s.Cc(1,e,t),u=[Na(e,n,t)],l=[i];if(o.length%2!=0)throw new N(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)u.push(Na(e,o[I])),l.push(o[I+1]);const d=[],p=Re.empty();for(let I=u.length-1;I>=0;--I)if(!$p(d,u[I])){const P=u[I];let k=l[I];k=_e(k);const O=a.yc(P);if(k instanceof ho)d.push(P);else{const D=Vs(k,O);D!=null&&(d.push(P),p.set(P,D))}}const g=new xe(d);return new Up(p,g,a.fieldTransforms)}function nv(s,e,t,n=!1){return Vs(t,s.Cc(n?4:3,e))}function Vs(s,e){if(zp(s=_e(s)))return Cc("Unsupported field value:",e,s),jp(s,e);if(s instanceof bc)return(function(n,i){if(!Bp(i.Ac))throw i.Sc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,i){const o=[];let a=0;for(const u of n){let l=Vs(u,i.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}})(s,e)}return(function(n,i){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jE(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=ee.fromDate(n);return{timestampValue:ir(i.serializer,o)}}if(n instanceof ee){const o=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(i.serializer,o)}}if(n instanceof et)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Be)return{bytesValue:Lf(i.serializer,n._byteString)};if(n instanceof he){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:cc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof tt)return(function(a,u){return{mapValue:{fields:{[ec]:{stringValue:tc},[Zn]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return rc(u.serializer,d)}))}}}}}})(n,i);throw i.Sc(`Unsupported field value: ${$i(n)}`)})(s,e)}function jp(s,e){const t={};return nf(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(s,((n,i)=>{const o=Vs(i,e.mc(n));o!=null&&(t[n]=o)})),{mapValue:{fields:t}}}function zp(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ee||s instanceof et||s instanceof Be||s instanceof he||s instanceof bc||s instanceof tt)}function Cc(s,e,t){if(!zp(t)||!qd(t)){const n=$i(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Na(s,e,t){if((e=_e(e))instanceof uo)return e._internalPath;if(typeof e=="string")return Vc(s,e);throw Ui("Field path arguments must be of type string or ",s,!1,void 0,t)}const rv=new RegExp("[~\\*/\\[\\]]");function Vc(s,e,t){if(e.search(rv)>=0)throw Ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new uo(...e.split("."))._internalPath}catch{throw Ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ui(s,e,t,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new N(C.INVALID_ARGUMENT,u+s+l)}function $p(s,e){return s.some((t=>t.isEqual(e)))}/**
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
 */class Gp{constructor(e,t,n,i,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sv extends Gp{data(){return super.data()}}function Dc(s,e){return typeof e=="string"?Vc(s,e):e instanceof uo?e._internalPath:e._delegate._internalPath}/**
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
 */function iv(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new N(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kc{}class ov extends kc{}function Kp(s,e,...t){let n=[];e instanceof kc&&n.push(e),n=n.concat(t),(function(o){const a=o.filter((l=>l instanceof Nc)).length,u=o.filter((l=>l instanceof fo)).length;if(a>1||a>0&&u>0)throw new N(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)s=i._apply(s);return s}class fo extends ov{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new fo(e,t,n)}_apply(e){const t=this._parse(e);return Wp(e._query,t),new fr(e.firestore,e.converter,Ea(e._query,t))}_parse(e){const t=lo(e.firestore);return(function(o,a,u,l,d,p,g){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){kh(g,p);const k=[];for(const O of g)k.push(Dh(l,o,O));I={arrayValue:{values:k}}}else I=Dh(l,o,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||kh(g,p),I=nv(u,a,g,p==="in"||p==="not-in");return Q.create(d,p,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Hp(s,e,t){const n=e,i=Dc("where",s);return fo._create(i,n,t)}class Nc extends kc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nc(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,o){let a=i;const u=o.getFlattenedFilters();for(const l of u)Wp(a,l),a=Ea(a,l)})(e._query,t),new fr(e.firestore,e.converter,Ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dh(s,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new N(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ef(e)&&t.indexOf("/")!==-1)throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!M.isDocumentKey(n))throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ls(s,new M(n))}if(t instanceof he)return ls(s,t._key);throw new N(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$i(t)}.`)}function kh(s,e){if(!Array.isArray(s)||s.length===0)throw new N(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wp(s,e){const t=(function(i,o){for(const a of i)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null})(s.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new N(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class av{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $t(e,((i,o)=>{n[i]=this.convertValue(o,t)})),n}convertVectorValue(e){const t=e.fields?.[Zn].arrayValue?.values?.map((n=>oe(n.doubleValue)));return new tt(t)}convertGeoPoint(e){return new et(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ji(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=lt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);F(Hf(n),9688,{name:e});const i=new _n(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(t)||De(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Qp(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}class qr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends Gp{constructor(e,t,n,i,o,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Dc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:fe("string",hn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class mi extends hn{data(e={}){return super.data(e)}}class Kn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new mi(this._firestore,this._userDataWriter,n.key,n,new qr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((u=>{const l=new mi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new qr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const l=new mi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new qr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:cv(u.type),doc:l,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ka.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cv(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:s})}}/**
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
 */function uv(s){s=nt(s,he);const e=nt(s.firestore,Sn);return Gw(Sc(e),s._key).then((t=>fv(e,s,t)))}Kn._jsonSchemaVersion="firestore/querySnapshot/1.0",Kn._jsonSchema={type:fe("string",Kn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class Jp extends av{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}function Xp(s){s=nt(s,fr);const e=nt(s.firestore,Sn),t=Sc(e),n=new Jp(e);return iv(s._query),Kw(t,s._query).then((i=>new Kn(e,n,s,i)))}function Nh(s,e,t){s=nt(s,he);const n=nt(s.firestore,Sn),i=Qp(s.converter,e,t);return po(n,[qp(lo(n),"setDoc",s._key,i,s.converter!==null,t).toMutation(s._key,Se.none())])}function lv(s,e,t,...n){s=nt(s,he);const i=nt(s.firestore,Sn),o=lo(i);let a;return a=typeof(e=_e(e))=="string"||e instanceof uo?tv(o,"updateDoc",s._key,e,t,n):ev(o,"updateDoc",s._key,e),po(i,[a.toMutation(s._key,Se.exists(!0))])}function hv(s){return po(nt(s.firestore,Sn),[new no(s._key,Se.none())])}function dv(s,e){const t=nt(s.firestore,Sn),n=Fp(s),i=Qp(s.converter,e);return po(t,[qp(lo(s.firestore),"addDoc",n._key,i,s.converter!==null,{}).toMutation(n._key,Se.exists(!1))]).then((()=>n))}function po(s,e){return(function(n,i){const o=new Ze;return n.asyncQueue.enqueueAndForget((async()=>Nw(await $w(n),i,o))),o.promise})(Sc(s),e)}function fv(s,e,t){const n=t.docs.get(e._key),i=new Jp(s);return new hn(s,i,e._key,n,new qr(t.hasPendingWrites,t.fromCache),e.converter)}class pv{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Yp(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function mv(s){return new pv(s)}class gv{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Fi.provider,this._offlineComponentProvider={build:t=>new qw(t,e?.cacheSizeBytes,this.forceOwnership)}}}function Yp(s){return new gv(s?.forceOwnership)}(function(e,t=!0){(function(i){lr=i})(cr),Hn(new fn("firestore",((n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new Sn(new xI(n.getProvider("auth-internal")),new LI(a,n.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(d.options.projectId,p)})(a,i),a);return o={useFetchStreams:t,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),Ot(dl,fl,e),Ot(dl,fl,"esm2020")})();const _v={apiKey:"AIzaSyCu3JChcmMTcG90s5FHhkCc_FdjK9DxM34",authDomain:"parafazer-office.firebaseapp.com",projectId:"parafazer-office",storageBucket:"parafazer-office.firebasestorage.app",messagingSenderId:"918055471970",appId:"1:918055471970:web:c3da7a6d5d56e73687ba3b"},Zp=Qh(_v),em=Qw(Zp,{localCache:mv({tabManager:Yp()})}),yv=PI(Zp),xh=JSON.parse(localStorage.getItem("userCached"));(!xh||xh==="null")&&_y(yv,s=>{localStorage.setItem("userCached",JSON.stringify(s))});class Iv{constructor(e){this.env=e}get(e){return this.env[e]}}const Yt="/to-do-app/";let Ev={mainGroups:["Tarefas","Importante","Meu Dia"],base:"to-do-app/",routers:{home:`${Yt}index.html`,list:`${Yt}list.html`,detail:`${Yt}detail.html`,account:`${Yt}account.html`,configurations:`${Yt}configurations.html`,login:`${Yt}login.html`,register:`${Yt}register.html`}};class Tv{constructor(e=[],t=[],n=[]){this.validatorsEdit=e,this.validatorsRemove=t,this.validatorsSave=n}validate(e,t){if(!Array.isArray(t))throw new Error("Estratégia de validação inválida.");t.forEach(n=>n.validate(e))}save(e){return this.validate(e,this.validatorsSave),e}remove(e){return this.validate(e,this.validatorsRemove),e}edit(e,t={}){return this.validate(e,this.validatorsEdit),{...e,...t}}}class wv extends Tv{constructor(e=[],t=[],n=[]){super(e,t,n)}edit(e,t={}){return this.validate(e,this.validatorsEdit),{...e,...t}}}class vv{constructor(){this.subscribers=[]}subscribe(e){this.subscribers.push(e)}unsubscribe(e){this.subscribers=this.subscribers.filter(t=>t!==e)}unsubscribeAll(){this.subscribers=[]}notify(e){this.subscribers.forEach(t=>t(e))}}class Av extends vv{constructor(e,t){super(),this.service=e,this.repository=t}async load(){return await this.repository.load()}async save(e){return this.service.save(e),await this.repository.save(e)}async remove(e){const t=this.service.remove(e);return await this.repository.remove(t)}async edit(e){return await this.repository.edit(e)}async find(e){return await this.repository.find(e)}async clear(e){return await this.repository.clear(e)}}class tm extends Av{constructor(e,t){super(e,t)}async completed(e){return e.completed?e.completed=!1:e.completed=!0,await this.repository.edit(e)}async load(e){return await this.repository.load(e)}}class Rv{getQueryParams(e){return new URLSearchParams(window.location.search).get(e)}}class nm{constructor(e,t){this.db=e,this.collectionName=t,this.userCached=JSON.parse(localStorage.getItem("userCached"))}colRef(){return Ww(this.db,this.collectionName)}docRef(e){return Fp(this.db,this.collectionName,String(e))}async load(){const e=Kp(this.colRef(),Hp("user_id","==",this.userCached.uid));return(await Xp(e)).docs.map(n=>({id:n.id,...n.data()}))}async save(e){try{const t=e;if(t.id){const n=this.docRef(t.id);return await Nh(n,t,{merge:!1}),r,{id:t.id,...t}}else{const n=await dv(this.colRef(),t),i={id:n.id,...t};return await Nh(n,i,{merge:!0}),i}}catch(t){console.log(t)}}async edit(e){if(!e.id)throw new Error("edit: missing id");const t=e,n=this.docRef(t.id);return await lv(n,t),{id:t.id,...t}}async remove(e){const t=typeof e=="object"?e.id:e;if(!t)throw new Error("remove: missing id");const n=this.docRef(t);return await hv(n),t}async find(e){const t=this.docRef(e),n=await uv(t);return n.exists()?{id:n.id,...n.data()}:null}}class Sv extends nm{constructor(e,t){super(e,t)}async load(e){const t=Kp(this.colRef(),Hp("group_id","==",e));return(await Xp(t)).docs.map(i=>({id:i.id,...i.data()}))}}const rm=new wv([],[],[]),Nv=new Rv,xv=new Iv(Ev);function Ov(s){return new tm(rm,new nm(em,s))}function Mv(s){return new tm(rm,new Sv(em,s))}export{vv as O,yv as a,Mv as b,xv as c,Pv as d,bv as e,Cv as f,Vv as g,_y as o,Ov as p,Nv as q,rm as s};
