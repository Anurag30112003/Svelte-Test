import{S as a,i as c,s as u,e as f,a as d,b as m,n as i,d as p,c as g,m as y,t as _,f as h,g as v}from"./vendor.6893960d.js";const $=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};$();function x(s){let e;return{c(){e=f("div"),e.textContent="Hello World!",d(e,"class","Hello svelte-1rur62i")},m(o,r){m(o,e,r)},p:i,i,o:i,d(o){o&&p(e)}}}class L extends a{constructor(e){super();c(this,e,null,x,u,{})}}function b(s){let e,o;return e=new L({}),{c(){g(e.$$.fragment)},m(r,t){y(e,r,t),o=!0},p:i,i(r){o||(_(e.$$.fragment,r),o=!0)},o(r){h(e.$$.fragment,r),o=!1},d(r){v(e,r)}}}class H extends a{constructor(e){super();c(this,e,null,b,u,{})}}new H({target:document.getElementById("app")});