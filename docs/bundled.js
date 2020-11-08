/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,s,e=null)=>{for(;s!==e;){const e=s.nextSibling;t.removeChild(s),s=e}},e=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${e}--\x3e`,n=new RegExp(`${e}|${i}`);class o{constructor(t,s){this.parts=[],this.element=s;const i=[],o=[],h=document.createTreeWalker(s.content,133,null,!1);let a=0,u=-1,d=0;const{strings:f,values:{length:p}}=t;for(;d<p;){const t=h.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:e}=s;let i=0;for(let t=0;t<e;t++)r(s[t].name,"$lit$")&&i++;for(;i-- >0;){const s=f[d],e=l.exec(s)[2],i=e.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const r=o.split(n);this.parts.push({type:"attribute",index:u,name:e,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(e)>=0){const e=t.parentNode,o=s.split(n),h=o.length-1;for(let s=0;s<h;s++){let i,n=o[s];if(""===n)i=c();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}e.insertBefore(i,t),this.parts.push({type:"node",index:++u})}""===o[h]?(e.insertBefore(c(),t),i.push(t)):t.data=o[h],d+=h}}else if(8===t.nodeType)if(t.data===e){const s=t.parentNode;null!==t.previousSibling&&u!==a||(u++,s.insertBefore(c(),t)),a=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(i.push(t),u--),d++}else{let s=-1;for(;-1!==(s=t.data.indexOf(e,s+1));)this.parts.push({type:"node",index:-1}),d++}}else h.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,s)=>{const e=t.length-s.length;return e>=0&&t.slice(e)===s},h=t=>-1!==t.index,c=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function a(t,s){const{element:{content:e},parts:i}=t,n=document.createTreeWalker(e,133,null,!1);let o=d(i),r=i[o],h=-1,c=0;const l=[];let a=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===a&&(a=null),s.has(t)&&(l.push(t),null===a&&(a=t)),null!==a&&c++;void 0!==r&&r.index===h;)r.index=null!==a?-1:r.index-c,o=d(i,o),r=i[o]}l.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let s=11===t.nodeType?0:1;const e=document.createTreeWalker(t,133,null,!1);for(;e.nextNode();)s++;return s},d=(t,s=-1)=>{for(let e=s+1;e<t.length;e++){const s=t[e];if(h(s))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=new WeakMap,p=t=>"function"==typeof t&&f.has(t),w={},m={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,s,e){this.t=[],this.template=t,this.processor=s,this.options=e}update(t){let s=0;for(const e of this.t)void 0!==e&&e.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const s=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let o,r=0,c=0,l=n.nextNode();for(;r<i.length;)if(o=i[r],h(o)){for(;c<o.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(s),customElements.upgrade(s)),s}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${e} `;class g{constructor(t,s,e,i){this.strings=t,this.values=s,this.type=e,this.processor=i}getHTML(){const t=this.strings.length-1;let s="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const h=l.exec(t);s+=null===h?t+(n?v:i):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");let s=this.getHTML();return void 0!==b&&(s=b.createHTML(s)),t.innerHTML=s,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,s,e){this.dirty=!0,this.element=t,this.name=s,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,s=t.length-1,e=this.parts;if(1===s&&""===t[0]&&""===t[1]){const t=e[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let i="";for(let n=0;n<s;n++){i+=t[n];const s=e[n];if(void 0!==s){const t=s.value;if(x(t)||!S(t))i+="string"==typeof t?t:String(t);else for(const s of t)i+="string"==typeof s?s:String(s)}}return i+=t[s],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||x(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.o(this.startNode=c()),t.o(this.endNode=c())}insertAfterPart(t){t.o(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.i);){const t=this.i;this.i=w,t(this)}const t=this.i;t!==w&&(x(t)?t!==this.value&&this.h(t):t instanceof g?this.l(t):t instanceof Node?this.u(t):S(t)?this.p(t):t===m?(this.value=m,this.clear()):this.h(t))}o(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.o(t),this.value=t)}h(t){const s=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=e:this.u(document.createTextNode(e)),this.value=t}l(t){const s=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===s)this.value.update(t.values);else{const e=new y(s,t.processor,this.options),i=e._clone();e.update(t.values),this.u(i),this.value=e}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let e,i=0;for(const n of t)e=s[i],void 0===e&&(e=new k(this.options),s.push(e),0===i?e.appendIntoPart(this):e.insertAfterPart(s[i-1])),e.setValue(n),e.commit(),i++;i<s.length&&(s.length=i,this.clear(e&&e.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ${constructor(t,s,e){if(this.value=void 0,this.i=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=e}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=w}}class A extends _{constructor(t,s,e){super(t,s,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends C{}let j=!1;(()=>{try{const t={get capture(){return j=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,s,e){this.value=void 0,this.i=void 0,this.element=t,this.eventName=s,this.eventContext=e,this.m=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=this.i,s=this.value,e=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),i=null!=t&&(null==s||e);e&&this.element.removeEventListener(this.eventName,this.m,this.v),i&&(this.v=O(t),this.element.addEventListener(this.eventName,this.m,this.v)),this.value=t,this.i=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(j?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let s=E.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(e);return i=s.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),s.keyString.set(n,i)),s.stringsArray.set(t.strings,i),i}const E=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,s,e,i){const n=s[0];if("."===n){return new A(t,s.slice(1),e).parts}if("@"===n)return[new M(t,s.slice(1),i.eventContext)];if("?"===n)return[new $(t,s.slice(1),e)];return new _(t,s,e).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const V=(t,...s)=>new g(t,s,"html",N)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,F=(t,s)=>`${t}--${s}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const q=t=>s=>{const i=F(s.type,t);let n=E.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(i,n));let r=n.stringsArray.get(s.strings);if(void 0!==r)return r;const h=s.strings.join(e);if(r=n.keyString.get(h),void 0===r){const e=s.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(e,t),r=new o(s,e),n.keyString.set(h,r)}return n.stringsArray.set(s.strings,r),r},z=["html","svg"],R=new Set,H=(t,s,e)=>{R.add(t);const i=e?e.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{z.forEach((s=>{const e=E.get(F(s,t));void 0!==e&&e.keyString.forEach((t=>{const{element:{content:s}}=t,e=new Set;Array.from(s.querySelectorAll("style")).forEach((t=>{e.add(t)})),a(t,e)}))}))})(t);const h=i.content;e?function(t,s,e=null){const{element:{content:i},parts:n}=t;if(null==e)return void i.appendChild(s);const o=document.createTreeWalker(i,133,null,!1);let r=d(n),h=0,c=-1;for(;o.nextNode();)for(c++,o.currentNode===e&&(h=u(s),e.parentNode.insertBefore(s,e));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=d(n,r);return}r=d(n,r)}}(e,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)s.insertBefore(c.cloneNode(!0),s.firstChild);else if(e){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),a(e,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const J={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,s)=>s!==t&&(s==s||t==t),W={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:L};class B extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((s,e)=>{const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,s)=>this._classProperties.set(s,t)))}}static createProperty(t,s=W){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,e,s);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,s,e){return{get(){return this[s]},set(i){const n=this[t];this[s]=i,this.requestUpdateInternal(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of s)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,s){const e=s.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,e=L){return e(t,s)}static _propertyValueFromAttribute(t,s){const e=s.type,i=s.converter||J,n="function"==typeof i?i:i.fromAttribute;return n?n(t,e):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const e=s.type,i=s.converter;return(i&&i.toAttribute||J.toAttribute)(t,e)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,s)=>this[s]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,e){s!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,s,e=W){const i=this.constructor,n=i._attributeNameForProperty(t,e);if(void 0!==n){const t=i._propertyValueToAttribute(s,e);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,s){if(8&this._updateState)return;const e=this.constructor,i=e._attributeToPropertyMap.get(t);if(void 0!==i){const t=e.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=e._propertyValueFromAttribute(s,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,s,e){let i=!0;if(void 0!==t){const n=this.constructor;e=e||n.getPropertyOptions(t),n._valueHasChanged(this[t],s,e.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==e.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,e))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,s){return this.requestUpdateInternal(t,s),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t?this.update(s):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,s)=>this._propertyToAttribute(s,this[s],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const D=t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:e,elements:i}=s;return{kind:e,elements:i,finisher(s){window.customElements.define(t,s)}}})(t,s),Y=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?Object.assign(Object.assign({},s),{finisher(e){e.createProperty(s.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(e){e.createProperty(s.key,t)}};function G(t){return(s,e)=>void 0!==e?((t,s,e)=>{s.constructor.createProperty(e,t)})(t,s,e):Y(t,s)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,s){if(s!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Z=(t,...s)=>{const e=s.reduce(((s,e,i)=>s+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[i+1]),t[0]);return new X(e,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const tt={};class st extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const s=(t,e)=>t.reduceRight(((t,e)=>Array.isArray(e)?s(e,t):(t.add(e),t)),e),e=s(t,new Set),i=[];e.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!K){const s=Array.prototype.slice.call(t.cssRules).reduce(((t,s)=>t+s.cssText),"");return new X(String(s),Q)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const s=this.render();super.update(t),s!==tt&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)})))}render(){return tt}}st.finalized=!0,st.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=U.has(e),r=I&&11===e.nodeType&&!!e.host,h=r&&!R.has(n),c=h?document.createDocumentFragment():e;if(((t,e,i)=>{let n=U.get(e);void 0===n&&(s(e,e.firstChild),U.set(e,n=new k(Object.assign({templateFactory:T},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:q(n)},i)),h){const t=U.get(c);U.delete(c);const i=t.value instanceof y?t.value.template:void 0;H(n,c,i),s(e,e.firstChild),e.appendChild(c),U.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var et=function(t,s,e,i){for(var n,o=arguments.length,r=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,e,r):n(s,e))||r);return o>3&&r&&Object.defineProperty(s,e,r),r};let it=class extends st{constructor(){super(...arguments),this.name="World",this.count=0}render(){return V`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};it.styles=Z`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,et([G()],it.prototype,"name",void 0),et([G({type:Number})],it.prototype,"count",void 0),it=et([D("my-element")],it);var nt=function(t,s,e,i){for(var n,o=arguments.length,r=o<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,e,r):n(s,e))||r);return o>3&&r&&Object.defineProperty(s,e,r),r};let ot=class extends st{constructor(){super(...arguments),this.label="Click me!"}render(){return V`${this.label}`}};ot.styles=Z`
    :host {
      background: linear-gradient(
        to bottom,
        #1e5799 0%,
        #2989d8 50%,
        #207cca 51%,
        #7db9e8 100%
      );
      border: 3px solid #70a5e0;
      border-radius: 64px;
      box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.75);
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: sans-serif;
      font-size: 32px;
      font-weight: bold;
      padding: 16px 32px;
      user-select: none;
    }

    :host(:focus) {
      outline: none;
      border-color: #1e5799;
    }

    :host(:hover) {
      background: linear-gradient(
        to bottom,
        #ebf1f6 0%,
        #abd3ee 50%,
        #89c3eb 51%,
        #d5ebfb 100%
      );
      color: #1e5799;
      text-shadow: none;
    }

    :host(:active) {
      box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
      transform: translateY(2px);
    }
  `,nt([G()],ot.prototype,"label",void 0),ot=nt([D("my-button")],ot);export{ot as MyButton,it as MyElement};
