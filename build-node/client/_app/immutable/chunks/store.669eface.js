import{X as _,a6 as $,a7 as E,a8 as S,a9 as h}from"./index.1a09564c.js";import{w as x}from"./index.36402250.js";function I(t){return Object.entries(t).filter(([e,n])=>e!==""&&n).map(([e])=>e).join(" ")}const w=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,A=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function U(t){let e,n=[];t.$on=(o,s)=>{let u=o,i=()=>{};return e?i=e(u,s):n.push([u,s]),u.match(w)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',u),()=>{i()}};function r(o){$(t,o)}return o=>{const s=[],u={};e=(i,b)=>{let f=i,d=b,a=!1;const m=f.match(w),M=f.match(A),j=m||M;if(f.match(/^SMUI:\w+:/)){const c=f.split(":");let l="";for(let p=0;p<c.length;p++)l+=p===c.length-1?":"+c[p]:c[p].split("-").map(g=>g.slice(0,1).toUpperCase()+g.slice(1)).join("");console.warn(`The event ${f.split("$")[0]} has been renamed to ${l.split("$")[0]}.`),f=l}if(j){const c=f.split(m?":":"$");f=c[0];const l=c.slice(1).reduce((p,g)=>(p[g]=!0,p),{});l.passive&&(a=a||{},a.passive=!0),l.nonpassive&&(a=a||{},a.passive=!1),l.capture&&(a=a||{},a.capture=!0),l.once&&(a=a||{},a.once=!0),l.preventDefault&&(d=E(d)),l.stopPropagation&&(d=S(d))}const P=_(o,f,d,a),y=()=>{P();const c=s.indexOf(y);c>-1&&s.splice(c,1)};return s.push(y),f in u||(u[f]=_(o,f,r)),y};for(let i=0;i<n.length;i++)e(n[i][0],n[i][1]);return{destroy:()=>{for(let i=0;i<s.length;i++)s[i]();for(let i of Object.entries(u))i[1]()}}}}function R(t,e){let n=[];if(e)for(let r=0;r<e.length;r++){const o=e[r],s=Array.isArray(o)?o[0]:o;Array.isArray(o)&&o.length>1?n.push(s(t,o[1])):n.push(s(t))}return{update(r){if((r&&r.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(r)for(let o=0;o<r.length;o++){const s=n[o];if(s&&s.update){const u=r[o];Array.isArray(u)&&u.length>1?s.update(u[1]):s.update()}}},destroy(){for(let r=0;r<n.length;r++){const o=n[r];o&&o.destroy&&o.destroy()}}}}var v=function(t,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},v(t,e)};function k(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");v(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var O=function(){return O=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},O.apply(this,arguments)};function F(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var J=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();function T(){let t={};t=JSON.parse(localStorage.getItem("auth")||"{}")||t;const e=x(t);return e.subscribe(n=>localStorage.setItem("auth",JSON.stringify(n))),{subscribe:e.subscribe,set:e.set,update:e.update,get:()=>h(e),getUser:()=>h(e).user_data||{},getToken:()=>h(e).token||{},isLoggedIn:()=>!!h(e).token}}const N=T();export{J as M,k as _,O as a,F as b,I as c,N as d,U as f,R as u};