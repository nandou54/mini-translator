(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const be="1dc68f5c9amsh2763ce2f63be3e9p1e5047jsne0923875491b";console.log("\u{1F680} | RAPID_API_KEY:",be);const Ve="https://google-translate1.p.rapidapi.com/language/translate/v2",Se={headers:{"content-type":"application/x-www-form-urlencoded","X-RapidAPI-Host":"google-translate1.p.rapidapi.com","X-RapidAPI-Key":be}},v=new Intl.DisplayNames(["es"],{type:"language"});function Re(e,t){return function(){return e.apply(t,arguments)}}const{toString:Oe}=Object.prototype,{getPrototypeOf:ne}=Object,re=(e=>t=>{const n=Oe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>re(t)===e),J=e=>t=>typeof t===e,{isArray:M}=Array,Q=J("undefined");function We(e){return e!==null&&!Q(e)&&e.constructor!==null&&!Q(e.constructor)&&B(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=x("ArrayBuffer");function Ke(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Ge=J("string"),B=J("function"),Le=J("number"),Te=e=>e!==null&&typeof e=="object",Xe=e=>e===!0||e===!1,$=e=>{if(re(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ye=x("Date"),Qe=x("File"),Ze=x("Blob"),et=x("FileList"),tt=e=>Te(e)&&B(e.pipe),nt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Oe.call(e)===t||B(e.toString)&&e.toString()===t)},rt=x("URLSearchParams"),st=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function V(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let c;for(r=0;r<o;r++)c=i[r],t.call(null,e[c],c,e)}}function Z(){const e={},t=(n,r)=>{$(e[r])&&$(n)?e[r]=Z(e[r],n):$(n)?e[r]=Z({},n):M(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&V(arguments[n],t);return e}const ot=(e,t,n,{allOwnKeys:r}={})=>(V(t,(s,i)=>{n&&B(s)?e[i]=Re(s,n):e[i]=s},{allOwnKeys:r}),e),it=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),at=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ut=(e,t,n,r)=>{let s,i,o;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!c[o]&&(t[o]=e[o],c[o]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},lt=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ft=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ht=x("HTMLFormElement"),mt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Et=x("RegExp"),xe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};V(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},yt=e=>{xe(e,(t,n)=>{const r=e[n];if(!!B(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},wt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return M(e)?r(e):r(String(e).split(t)),n},gt=()=>{},bt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),a={isArray:M,isArrayBuffer:Ae,isBuffer:We,isFormData:nt,isArrayBufferView:Ke,isString:Ge,isNumber:Le,isBoolean:Xe,isObject:Te,isPlainObject:$,isUndefined:Q,isDate:Ye,isFile:Qe,isBlob:Ze,isRegExp:Et,isFunction:B,isStream:tt,isURLSearchParams:rt,isTypedArray:ft,isFileList:et,forEach:V,merge:Z,extend:ot,trim:st,stripBOM:it,inherits:at,toFlatObject:ut,kindOf:re,kindOfTest:x,endsWith:ct,toArray:lt,forEachEntry:dt,matchAll:pt,isHTMLForm:ht,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:xe,freezeMethods:yt,toObjectSet:wt,toCamelCase:mt,noop:gt,toFiniteNumber:bt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=h.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(h,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,i)=>{const o=Object.create(Ne);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var St=typeof self=="object"?self.FormData:window.FormData;function ee(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ce(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(ee)}const Ot=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function At(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(St||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,P){return!a.isUndefined(P[m])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&At(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function d(l,m,P){let b=l;if(l&&!P&&typeof l=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Rt(l)||a.isFileList(l)||a.endsWith(m,"[]")&&(b=a.toArray(l)))return m=Ce(m),b.forEach(function(q,Je){!(a.isUndefined(q)||q===null)&&t.append(o===!0?ce([m],Je,i):o===null?m:m+"[]",u(q))}),!1}return ee(l)?!0:(t.append(ce(P,m,i),u(l)),!1)}const E=[],y=Object.assign(Ot,{defaultVisitor:d,convertValue:u,isVisitable:ee});function p(l,m){if(!a.isUndefined(l)){if(E.indexOf(l)!==-1)throw Error("Circular reference detected in "+m.join("."));E.push(l),a.forEach(l,function(b,_){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(_)?_.trim():_,m,y))===!0&&p(b,m?m.concat(_):[_])}),E.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return p(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&W(e,this,t)}const _e=se.prototype;_e.append=function(t,n){this._pairs.push([t,n])};_e.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Lt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Lt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class fe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tt=typeof URLSearchParams<"u"?URLSearchParams:se,xt=FormData,Nt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),O={isBrowser:!0,classes:{URLSearchParams:Tt,FormData:xt,Blob},isStandardBrowserEnv:Nt,protocols:["http","https","file","blob","url","data"]};function Pt(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ct(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Be(e){function t(n,r,s,i){let o=n[i++];const c=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=_t(s[o])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ct(r),s,n,0)}),n}return null}function Dt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ft=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(i)&&f.push("path="+i),a.isString(o)&&f.push("domain="+o),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Bt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ut(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Bt(t)?Ut(e,t):t}const jt=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const c=a.isString(o)?s(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function H(e,t,n){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,h,{__CANCEL__:!0});function It(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals"),je=Symbol("defaults");function I(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function pe(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ht(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}function g(e,t){e&&this.set(e),this[je]=t||null}Object.assign(g.prototype,{set:function(e,t,n){const r=this;function s(i,o,c){const f=I(o);if(!f)throw new Error("header name must be a non-empty string");const u=j(r,f);u&&c!==!0&&(r[u]===!1||c===!1)||(r[u||o]=z(i))}return a.isPlainObject(e)?a.forEach(e,(i,o)=>{s(i,o,t)}):s(t,e,n),this},get:function(e,t){if(e=I(e),!e)return;const n=j(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return Mt(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=I(e),e){const n=j(this,e);return!!(n&&(!t||pe(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function s(i){if(i=I(i),i){const o=j(n,i);o&&(!t||pe(n,n[o],o,t))&&(delete n[o],r=!0)}}return a.isArray(e)?e.forEach(s):s(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,s)=>{const i=j(n,s);if(i){t[i]=z(r),delete t[s];return}const o=e?Ht(s):String(s).trim();o!==s&&delete t[s],t[o]=z(r),n[o]=!0}),this},toJSON:function(e){const t=Object.create(null);return a.forEach(Object.assign({},this[je]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&a.isArray(n)?n.join(", "):n)}),t}});Object.assign(g,{from:function(e){return a.isString(e)?new this(kt(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[de]=this[de]={accessors:{}}).accessors,r=this.prototype;function s(i){const o=I(i);n[o]||(qt(r,i),n[o]=!0)}return a.isArray(e)?e.forEach(s):s(e),this}});g.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(g.prototype);a.freezeMethods(g);function $t(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),d=r[i];o||(o=u),n[s]=f,r[s]=u;let E=i,y=0;for(;E!==s;)y+=n[E++],E=E%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const p=d&&u-d;return p?Math.round(y*1e3/p):void 0}}function he(e,t){let n=0;const r=$t(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,c=i-n,f=r(c),u=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:c,rate:f||void 0,estimated:f&&o&&u?(o-i)/f:void 0};d[t?"download":"upload"]=!0,e(d)}}function me(e){return new Promise(function(n,r){let s=e.data;const i=g.from(e.headers).normalize(),o=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&O.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const p=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(p+":"+l))}const d=Ue(e.baseURL,e.url);u.open(e.method.toUpperCase(),De(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function E(){if(!u)return;const p=g.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:e,request:u};Dt(function(b){n(b),f()},function(b){r(b),f()},m),u=null}if("onloadend"in u?u.onloadend=E:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(E)},u.onabort=function(){!u||(r(new h("Request aborted",h.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Fe;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new h(l,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,u)),u=null},O.isStandardBrowserEnv){const p=(e.withCredentials||jt(d))&&e.xsrfCookieName&&Ft.read(e.xsrfCookieName);p&&i.set(e.xsrfHeaderName,p)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(l,m){u.setRequestHeader(m,l)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=p=>{!u||(r(!p||p.type?new H(null,e,u):p),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const y=It(d);if(y&&O.protocols.indexOf(y)===-1){r(new h("Unsupported protocol "+y+":",h.ERR_BAD_REQUEST,e));return}u.send(s||null)})}const Ee={http:me,xhr:me},ye={getAdapter:e=>{if(a.isString(e)){const t=Ee[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Ee},zt={"Content-Type":"application/x-www-form-urlencoded"};function Jt(){let e;return typeof XMLHttpRequest<"u"?e=ye.getAdapter("xhr"):typeof process<"u"&&a.kindOf(process)==="process"&&(e=ye.getAdapter("http")),e}function Vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const U={transitional:Fe,adapter:Jt(),transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Vt(t)):t}],transformResponse:[function(t){const n=this.transitional||U.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(o)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){U.headers[t]={}});a.forEach(["post","put","patch"],function(t){U.headers[t]=a.merge(zt)});function X(e,t){const n=this||U,r=t||n,s=g.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ie(e){return!!(e&&e.__CANCEL__)}function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H}function we(e){return Y(e),e.headers=g.from(e.headers),e.data=X.call(e,e.transformRequest),(e.adapter||U.adapter)(e).then(function(r){return Y(e),r.data=X.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return Ie(r)||(Y(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}function k(e,t){t=t||{};const n={};function r(u,d){return a.isPlainObject(u)&&a.isPlainObject(d)?a.merge(u,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function i(u){if(!a.isUndefined(t[u]))return r(void 0,t[u])}function o(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function c(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const E=f[d]||s,y=E(d);a.isUndefined(y)&&E!==c||(n[d]=y)}),n}const ve="1.1.3",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};oe.transitional=function(t,n,r){function s(i,o){return"[Axios v"+ve+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(t===!1)throw new h(s(o," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!ge[o]&&(ge[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,c):!0}};function Wt(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const c=e[i],f=c===void 0||o(c,i,e);if(f!==!0)throw new h("option "+i+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const te={assertOptions:Wt,validators:oe},N=te.validators;class C{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!==void 0&&te.assertOptions(s,{encode:N.function,serialize:N.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&a.merge(n.headers.common,n.headers[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],function(l){delete n.headers[l]}),n.headers=new g(n.headers,i);const o=[];let c=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(n)===!1||(c=c&&l.synchronous,o.unshift(l.fulfilled,l.rejected))});const f=[];this.interceptors.response.forEach(function(l){f.push(l.fulfilled,l.rejected)});let u,d=0,E;if(!c){const p=[we.bind(this),void 0];for(p.unshift.apply(p,o),p.push.apply(p,f),E=p.length,u=Promise.resolve(n);d<E;)u=u.then(p[d++],p[d++]);return u}E=o.length;let y=n;for(d=0;d<E;){const p=o[d++],l=o[d++];try{y=p(y)}catch(m){l.call(this,m);break}}try{u=we.call(this,y)}catch(p){return Promise.reject(p)}for(d=0,E=f.length;d<E;)u=u.then(f[d++],f[d++]);return u}getUri(t){t=k(this.defaults,t);const n=Ue(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){C.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,c){return this.request(k(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}C.prototype[t]=n(),C.prototype[t+"Form"]=n(!0)});class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,c){r.reason||(r.reason=new H(i,o,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}function Kt(e){return function(n){return e.apply(null,n)}}function Gt(e){return a.isObject(e)&&e.isAxiosError===!0}function ke(e){const t=new C(e),n=Re(C.prototype.request,t);return a.extend(n,C.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ke(k(e,s))},n}const w=ke(U);w.Axios=C;w.CanceledError=H;w.CancelToken=ie;w.isCancel=Ie;w.VERSION=ve;w.toFormData=W;w.AxiosError=h;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=Kt;w.isAxiosError=Gt;w.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);const Me=w.create({baseURL:Ve,headers:{"Content-Type":"application/json"}});function Xt(){return Me.get("/languages",Se)}function Yt(e){return Me.post("/",e,Se)}const He=(e,t)=>{const n=new SpeechSynthesisUtterance(e),r=speechSynthesis.getVoices().find(s=>s.lang===t);n.voice=r,speechSynthesis.speak(n)};function Qt(e,t=800){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)}}const R=e=>document.querySelector(e),A=R("#input textarea"),S=R("#output textarea"),L=R("#input-lang"),T=R("#output-lang"),Zt=R("#swap-languages"),qe=R("#spell-input"),$e=R("#spell-output"),D=R("#spell-input-lang"),F=R("#spell-output-lang"),en=R("#copy-output"),tn=()=>{Xt().then(e=>{e.data.data.languages.sort((t,n)=>v.of(t.language)>v.of(n.language)?1:-1),e.data.data.languages.forEach(({language:t})=>{const n=document.createElement("option");n.value=t,n.innerText=v.of(t),L.appendChild(n),T.appendChild(n.cloneNode(!0)),A.value=localStorage.getItem("input")||"",L.value=localStorage.getItem("inputLanguage")||"es",T.value=localStorage.getItem("outputLanguage")||"en"}),K(),G(),ae()}).catch(console.log)},ze=()=>{localStorage.setItem("inputLanguage",L.value),localStorage.setItem("outputLanguage",T.value),K(),G(),ae()},nn=()=>{let e=T.value;T.value=L.value,L.value=e,e=S.value,S.value=A.value,A.value=e,localStorage.setItem("inputLanguage",L.value),localStorage.setItem("outputLanguage",T.value),K(),G()},ae=Qt(()=>{if(localStorage.setItem("input",A.value),A.value===""){S.value="";return}const e=new URLSearchParams({q:A.value,source:L.value,target:T.value});S.classList.add("translating"),Yt(e).then(t=>{S.value=t.data.data.translations[0].translatedText}).catch(console.log).finally(()=>{S.classList.remove("translating")})}),K=()=>{D.innerHTML="",D.disabled=!0;const t=speechSynthesis.getVoices().map(n=>n.lang).filter(n=>n.startsWith(L.value));if(!t.length){const n=document.createElement("option");n.value="",n.innerText="Lenguaje no disponible",D.appendChild(n);return}D.disabled=!1,t.forEach(n=>{const r=document.createElement("option");r.value=n,r.innerText=v.of(n),D.appendChild(r)})},G=()=>{F.innerHTML="",F.disabled=!0;const t=speechSynthesis.getVoices().map(n=>n.lang).filter(n=>n.startsWith(T.value));if(!t.length){const n=document.createElement("option");n.value="",n.innerText="Lenguaje no disponible",F.appendChild(n);return}F.disabled=!1,t.forEach(n=>{const r=document.createElement("option");r.value=n,r.innerText=v.of(n),F.appendChild(r)})},rn=()=>{const e=D.value;!A.value||!e||(qe.classList.add("active"),He(A.value,e))},sn=()=>{const e=F.value;!S.value||!e||($e.classList.add("active"),He(S.value,e))},on=()=>{S.select(),S.setSelectionRange(0,99999),navigator.clipboard.writeText(S.value)};window.addEventListener("load",tn);L.addEventListener("change",ze);T.addEventListener("change",ze);Zt.addEventListener("click",nn);A.addEventListener("keypress",ae);qe.addEventListener("click",rn);$e.addEventListener("click",sn);en.addEventListener("click",on);speechSynthesis.onvoiceschanged=()=>{K(),G()};
