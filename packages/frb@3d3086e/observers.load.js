montageDefine("3d3086e","observers",{dependencies:["collections/shim","collections/listen/property-changes","collections/listen/array-changes","collections/sorted-array","collections/sorted-set","collections/map","collections/set","collections/heap","./scope","./operators","./parse","./compile-observer","./merge"],factory:function(e,t){function n(e){return function(t){return t(e)}}function r(e,t){return e(t.value)}function i(e,t){return e(t.parameters)}function a(e){return function(t,n){return t(n.document.getElementById(e))}}function s(e){return function(t,n){var r=n.components,i=r.getObjectByLabel||r.getComponentByLabel,a=i.call(r,e);return t(a)}}function o(e,t,n,r){function i(e,t,r){a&&a(),a=n(e,t,r)}if(null==e)return n();var a;return Mt.addOwnPropertyChangeListener(e,t,i,r.beforeChange),i(e[t],t,e),function(){a&&a(),Mt.removeOwnPropertyChangeListener(e,t,i,r.beforeChange)}}function l(e,t){return function(n,r){return t(function(t){return"string"!=typeof t&&"number"!=typeof t?n():e(function(e){return null==e?n():e.observeProperty?e.observeProperty(t,n,r):Pt(e,t,n,r)},r)},r)}}function c(e,t,n,r){function i(e,r,i){s(t,r)&&(a&&a(),a=n(e,t,i))}var a,s=e.contentEquals||Object.equals;return i(e.get(t),t,e),e.addMapChangeListener(i,r.beforeChange),function(){a&&a(),e.removeMapChangeListener(i)}}function u(e,t){return function(n,r){return e(function(e){return e?t(function(t){return null==t?n():e.observeGet?e.observeGet(t,n,r):Tt(e,t,n,r)},r):n()},r)}}function h(e,t){return function(n,r){return n=bt(n),t(function(t){return e(function(e){return e?e.addRangeChangeListener?J(e,function(){return n((e.has||e.contains).call(e,t))},r):e.addMapChangeListener?st(e,function(){return n(e.has(t))},r):n():n()},r)},r)}}function p(e){return function(t,n){for(var r=[],i=[],a=0;e.length>a;a++)r[a]=void 0,i[a]=function(e,t){return e(function(e){r.set(t,e)},n)}(e[a],a);var s=t(r);return function(){s&&s();for(var e=0;i.length>e;e++)s=i[e],s&&s()}}}function d(e){return function(t,n){var r={},i={};for(var a in e)(function(e,t){i[e]=void 0,r[e]=t(function(t){i[e]=t},n)})(a,e[a]);var s=t(i);return function(){s&&s();for(var e in r)s=r[e],s&&s()}}}function g(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return p(e)}function f(e){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=p(t),i=it(r);return function(t,n){return i(function(n){return n.every(Ot.defined)?t(e.apply(void 0,n)):t()},n)}}}function m(e){var t=e.slice(0,1).toUpperCase()+e.slice(1),n="make"+t+"Observer",r="observe"+t;return function(){var t=arguments[0],i=Array.prototype.slice.call(arguments,1),a=p(i),s=it(a);return function(a,o){return t(function(t){return t?t[n]?t[n].apply(t,i)(a,o):t[r]?t[r](a,o):s(function(n){return n.every(Ot.defined)?"function"==typeof t[e]?a(t[e].apply(t,n)):a():a()},o):a()},o)}}}function v(e){return function(t,n){return e(function(e){return t(!e)},n)}}function y(e,t){return function(n,r){return e(function(e){return e?t(n,r):n(e)},r)}}function _(e,t){return function(n,r){return e(function(e){return e?n(e):t(n,r)},r)}}function b(e,t,n){return function(r,i){return e(function(e){return null==e?r():e?t(r,i):n(r,i)},i)}}function C(e){return function(t,n){return e(function(e){return t(null!=e)},n)}}function L(e,t){return function(n,r){return e(function(e){return null==e?t(n,r):n(e)},r)}}function w(e,t){return function(n,r){return e(function(e){function i(t){for(;e.length>t;t++)o[t].index=t}function a(e,n,a){wt(o,a,n.length,e.map(function(e,t){return{index:a+t}})),i(a+e.length);var c,u,h=[],p=a,d=a+n.length;for(p=a,d=a+n.length;d>p;p++)u=l[p],u&&u();wt(l,a,n.length,e.map(function(e,n){var i=o[a+n];return t(function(e){c?s.set(i.index,e):h[n]=e},r.nest(e))})),c=!0,s.swap(a,n.length,h)}if(!e)return n();var s=[],o=[],l=[],c=J(e,a,r),u=n(s,e);return function(){u&&u();for(var e=0,t=l.length;t>e;e++)u=l[e],u&&u();c()}},r)}}function M(e,t){var n=w(e,t);return function(e,t){return n(function(n,r){function i(e){for(;n.length>e;e++)l[e+1]=l[e]+!!n[e]}function a(e,t,n){var a=r.slice(n,n+e.length),o=t.map(Boolean).sum(),c=a.filter(function(t,n){return e[n]}),u=l[n],h=s.slice(u,u+o);(h.length!==c.length||h.some(function(e,t){return e!==c[t]}))&&s.swap(u,o,c),i(u)}if(!r)return e();var s=[],o=[],l=[0],c=J(n,a,t),u=e(s);return function(){u&&u();for(var e=0,t=o.length;t>e;e++)u=o[e],u&&u();c()}},t)}}function x(e,t){var n=S(t),r=w(e,n),i=function(e,t){return r(function(n){function r(e,t){a.deleteEach(t),a.addEach(e)}if(!n)return e();var i=[],a=xt(i,E,z),s=J(n,r,t),o=e(i);return function(){o&&o(),s()}},t)};return Dt(i,ut)}function E(e,t){return Object.equals(e[1],t[1])}function z(e,t){return Object.compare(e[1],t[1])}function S(e){return function(t,n){return e(function(e){return t([n.value,e])},n)}}function O(e,t){var n=S(t),r=w(e,n),i=B(r,pt),a=w(i,$(pt));return function(e,t){function n(e,t){return e=o.get(e),t=o.get(t),Object.compare(e,t)}function r(e,t){return e=o.get(e),t=o.get(t),Object.equals(e,t)}function i(e,t){t.forEach(function(e){l["delete"](e[0]),o["delete"](e[0])}),e.forEach(function(e){o.set(e[0],e[1]),l.add(e[0])})}function s(e){return l.clear(),J(e,i,t)}var o=new zt,l=new Et(null,r,n),c=e(l),u=a(s,t);return function(){c&&c(),u()}}}function P(e){return function(t,n){return e(function(e){function r(e,t,n){var r=i.length-n-t.length;i.swap(r,t.length,e.reversed())}if(!e)return t();var i=[],a=J(e,r,n),s=t(i);return function(){s&&s(),a()}},n)}}function T(e){return function(t,n){return e(function(e){function r(t){for(var n=t;e.length>n;n++)l[n].index=n,o[n+1]=e[n]?o[n]+e[n].length:o[n]}function i(e,t,i){var c=o[i],u=o[i+t.length],h=u-c;a.swap(c,h,[]),wt(l,i,t.length,e.map(function(){return{index:null}})),r(i);for(var p,d=i,u=i+t.length;u>d;d++)p=s[d],p&&p();wt(s,i,t.length,e.map(function(e,t){function s(e,t,n){r(c.index);var i=o[c.index]+n,s=o[c.index]+n+t.length,l=s-i;a.swap(i,l,e)}var c=l[i+t];return J(e,s,n)}))}if(!e)return t();var a=[],s=[],o=[0],l=[],c=J(e,i,n),u=t(a);return function(){u&&u();for(var e=0,t=s.length;t>e;e++)u=s[e],u&&u();c()}},n)}}function D(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return At(p(e))}function k(e,t){var n=kt(e,t),r=l(n,Bt);return ft(r,Boolean)}function A(e,t){var n=ft(t,Ot.not),r=kt(e,n),i=l(r,Bt);return ft(i,Ot.not)}function B(e,t){var n=j(e,t);return Nt(n)}function j(e,t){var n=S(t),r=w(e,n);return function(e,t){return r(function(n,r){function i(e,t){t.forEach(function(e){var t=a.get(e[1]);1===t.length?a["delete"](e[1]):t["delete"](e[0])}),e.forEach(function(e){var t,n=!a.has(e[1]);t=n?r.constructClone():a.get(e[1]),t.add(e[0]),n&&a.set(e[1],t)})}if(!n)return e();var a=zt(),s=J(n,i,t),o=e(a);return function(){s(),o&&o()}},t)}}function I(e,t,n){function r(e,t){return Object.compare(e[1],t[1])*n}var i=S(t),a=w(e,i);return function(e,t){return a(function(n){function i(e,t){s.addEach(e),s.deleteEach(t)}function a(t,n){return 0===n?t?e(t[0]):e():void 0}if(!n)return e();var s=new St(null,E,r),o=J(n,i,t),l=st(s,a,t);return function(){o(),l()}},t)}}function R(e,t){return I(e,t,1)}function N(e,t){return I(e,t,-1)}function F(e){return I(e,r,1)}function q(e){return I(e,r,-1)}function W(e){return function(t){return function(n,r){return n=bt(n),t(function(t){if(!t)return n();var i=e(t,n);return J(t,function(e,t,r){return n(i(e,t,r))},r)},r)}}}function U(e){return"number"==typeof e&&!isNaN(e)}function V(e,t,n){return n||(n=t,t=jt),function(r,i){return e(function(e){function a(t,n,r){if(h){var i=t.length-n.length;o>=r?i>0?(u.swap(0,0,e.slice(o,o+i)),u.splice(s,u.length-s)):(u.splice(0,-i),u.swap(u.length,0,e.slice(o+u.length,o+s))):o+s>r&&(u.swap(r-o,n.length,t),i>0?u.splice(s,u.length-s):u.swap(u.length,0,e.slice(o+u.length,o+s)))}}if(!e)return r();var s,o,l,c,u=[],h=!1,p=J(e,a,i),d=n(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof t&&"number"==typeof o,r=Math.max(0,t);"number"==typeof c&&(r=Math.min(r,e.length-c)),h!==n?(n?u.swap(0,0,e.slice(c,c+r)):u.clear(),h=n):h&&l!==r&&(l>r?u.splice(t,l-r):u.swap(l,0,e.slice(c+l,c+r))),s=t,l=r},i),g=t(function(t){t=+t,isNaN(t)&&(t=void 0);var n="number"==typeof s&&"number"==typeof t,r=Math.max(0,t);"number"==typeof s&&(r=Math.min(r,e.length));var i=Math.max(0,s);if("number"==typeof r&&(i=Math.min(i,e.length-r)),h!==n)n?u.swap(0,u.length,e.slice(r,r+i)):u.clear(),h=n;else if(h&&c!==r){var a=Math.abs(r-c);l>a&&c>r?(u.swap(0,0,e.slice(r,c)),u.splice(i,u.length-i)):l>a&&r>c?(u.swap(u.length,0,e.slice(c+l,r+i)),u.splice(0,u.length-i)):u.swap(0,u.length,e.slice(r,r+i))}o=t,c=r,l=i},i),f=r(u);return function(){f&&f(),d(),g(),p()}},i)}}function H(e){return function(t,n){return e(function(e){function r(e){for(;a.length>e;e++)a[e].set(0,e)}function i(e,t,n){a.swap(n,t.length,e.map(function(e,t){return[n+t,e]})),r(n+e.length)}if(!e)return t();var a=[],s=J(e,i,n),o=t(a);return function(){o&&o(),s()}},n)}}function Y(e){return function(t,n){var r=[],i=t(r),a=e(function(e){if(e>>>=0,null==e)r.clear();else if(e>r.length){for(var t=[],n=r.length;e>n;n++)t.push(n);r.swap(r.length,0,t)}else r.length>e&&r.splice(e,r.length)},n);return function(){i&&i(),a&&a()}}}function G(e,t){return function(n,r){return t(function(t){if("string"!=typeof t)return n();var i=RegExp("^"+RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(i.test(e))},r)},r)}}function K(e,t){return function(n,r){return t(function(t){if("string"!=typeof t)return n();var i=RegExp(RegExp.escape(t)+"$");return e(function(e){return"string"!=typeof e?n():n(i.test(e))},r)},r)}}function X(e,t){return function(n,r){return t(function(t){if("string"!=typeof t)return n();var i=RegExp(RegExp.escape(t));return e(function(e){return"string"!=typeof e?n():n(i.test(e))},r)},r)}}function Z(e,t){return t=t||It,function(n,r){return e(function(e){return e?t(function(t){function i(){a&&a(),a=n(e.join(t))}if("string"!=typeof t)return n();var a,s=J(e,i,r);return function(){s(),a&&a()}},r):n()},r)}}function J(e,t,n){function r(e,n,r){i&&i(),i=t(e,n,r)}if(!e)return Function.noop;var i;if(!e.toArray)return Function.noop;if(!e.addRangeChangeListener)return Function.noop;r(e.toArray(),[],0);var a=e.addRangeChangeListener(r,null,n.beforeChange);return function(){i&&i(),a()}}function $(e){return function(t,n){return e(function(e){return Rt(e,t,n)},n)}}function Q(e,t,n){function r(n,r,o){if(a+=n.length-r.length,!(a>o+r.length&&a>o+n.length)){var l=0>a?null:e.get(a);i&&i(),i=t(l),s=l}}var i,a=-1,s=null,o=J(e,r,n);return function(){i&&i(),o&&o()}}function et(e){return function(t,n){return e(bt(function(e){return tt(e,t,n)}),n)}}function tt(e,t,n){function r(n,r){return i+=n.length-r.length,1!==i?t():t(e.only())}var i=0;return J(e,r,n)}function nt(e){return function(t,n){return e(bt(function(e){return rt(e,t,n)}),n)}}function rt(e,t,n){function r(n,r){return i+=n.length-r.length,0===i?t():t(e.one())}var i=0;return J(e,r,n)}function it(e){return function(t,n){return e(function(e){return e&&e.addRangeChangeListener?J(e,function(){return t(e)},n):t(e)},n)}}function at(e){return function(t,n){return e(function(e){return e&&e.addMapChangeListener?st(e,function(){return t(e)},n):t(e)},n)}}function st(e,t,n){function r(e,n,r){var a=i.get(n);i["delete"](n),a&&a(),a=t(e,n,r),void 0===e?a&&a():i.set(n,a)}if(e.addMapChangeListener){var i=new zt;e.forEach(r);var a=e.addMapChangeListener(r,n.beforeChange);return function(){i.forEach(function(e){e&&e()}),a()}}}function ot(e){return function(t,n){return e(function(e){return e?lt(e,t,n):t()},n)}}function lt(e,t,n){function r(e,t){var n,r;a.has(t)?null==e?(n=a.get(t),a["delete"](t),r=i.indexOf(n),i.splice(r,1)):(n=a.get(t),n.set(1,e)):(n=[t,e],a.set(t,n),i.push(n))}var i=[],a=zt(),s=t(i),o=st(e,r,n);return function(){s&&s(),o&&o()}}function ct(e){var t=Nt(e);return Dt(t,ut)}function ut(e,t){return t.value?e(t.value[0]):e()}function ht(e){var t=Nt(e);return Dt(t,pt)}function pt(e,t){return t.value?e(t.value[1]):e()}function dt(e){return function(t,n){var r=new zt,i=t(r),a=e(function(e){if(r.clear(),e&&"object"==typeof e){if(e.addRangeChangeListener)return Ft(function(e){function t(e,t){t.forEach(function(e){r["delete"](e[0])}),e.forEach(function(e){r.set(e[0],e[1])})}return J(e,t,n)},n.nest(e));if(e.addMapChangeListener)return st(e,function(e,t){void 0===e?r["delete"](t):r.set(t,e)},n);var t=[],i=0;for(var a in e)t[i++]=Pt(e,a,function(e){void 0===e?r["delete"](a):r.set(a,e)},n);return function(){for(var e=0,n=t.length;n>e;e++)t[e]()}}},n)||Function.noop;return function(){i&&i(),a()}}}function gt(e){return function(t,n){return n.parent?e(t,n.parent):t()}}function ft(e,t,n){return function(r,i){return r=bt(r),e(function(e){return r(t.call(n,e))},i)}}function mt(e,t,n){return function(r,i){return r=bt(r),e(function(e){return e&&e.every(Ot.defined)?r(t.apply(n,e)):void 0},i)}}function vt(t,n){var r=e("./parse"),i=e("./compile-observer");return function(e,a){return e=bt(e),n(function(n){if(null==n)return e();var s,o;try{s=r(n),o=i(s)}catch(l){return e()}return t(function(t){return o(e,a.nest(t))},a)},a)}}function yt(e,t){return function(n,r){return e(function(e){return null==e?n():t(function(e){return null==e?n():n(e)},r.nest(e))},r)}}function _t(e){return function(){var t=e.apply(this,arguments);return function(e,n){var r=[],i=t(function(e){function t(e,t,n){r.swap(n,t.length,e)}return e&&e.addRangeChangeListener?(qt(r,e),e.addRangeChangeListener(t,null,n.beforeChange),function(){e.removeRangeChangeListener(t,null,n.beforeChange)}):(r.clear(),void 0)},n),a=e(r);return function(){i&&i(),a&&a()}}}}function bt(e){var t;return function(n){if(n!==t){var r=e.apply(this,arguments);return t=n,r}}}function Ct(e){e.forEach(function(e){e&&e()})}function Lt(e){var t;return function(){return t&&t(),t=e.apply(this,arguments),function(){t&&t(),t=void 0}}}function wt(e,t,n,r){0>t?t=e.length+t:t>e.length&&(e.length=t),t+n>e.length?n=e.length-t:0>n&&(n=0);var i=r.length-n,a=e.length,s=e.length+i;if(i>0)for(var o=a-1;o>=t+n;o--){var l=o+i;o in e?e[l]=e[o]:(e[l]=void 0,delete e[l])}for(var o=0;r.length>o;o++)o in r?e[t+o]=r[o]:(e[t+o]=void 0,delete e[t+o]);if(0>i)for(var o=t+r.length;a-i>o;o++){var l=o-i;l in e?e[o]=e[l]:(e[o]=void 0,delete e[o])}e.length=s}e("collections/shim");var Mt=e("collections/listen/property-changes");e("collections/listen/array-changes");var xt=e("collections/sorted-array"),Et=e("collections/sorted-set"),zt=e("collections/map");e("collections/set");var St=e("collections/heap");e("./scope");var Ot=e("./operators");t.makeLiteralObserver=n,t.observeValue=r,t.observeParameters=i,t.makeElementObserver=a,t.makeComponentObserver=s,t.observeProperty=o;var Pt=o;t.makePropertyObserver=l,t.observeKey=c,t.observeGet=c;var Tt=c;t.makeGetObserver=u,t.makeHasObserver=h,t.makeObserversObserver=p,t.makeRecordObserver=d,t.makeObjectObserver=d,t.makeTupleObserver=g,t.makeArrayObserver=g,t.makeOperatorObserverMaker=f,t.makeMethodObserverMaker=m,t.makeNotObserver=v,t.makeAndObserver=y,t.makeOrObserver=_,t.makeConditionalObserver=b,t.makeDefinedObserver=C,t.makeDefaultObserver=L;var Dt=t.makeMapBlockObserver=_t(w),kt=t.makeFilterBlockObserver=_t(M);t.makeSortedBlockObserver=x,t.makeSortedSetBlockObserver=O,t.makeReversedObserver=_t(P);var At=t.makeFlattenObserver=_t(T);t.makeConcatObserver=D,t.makeSomeBlockObserver=k,t.makeEveryBlockObserver=A,t.makeGroupBlockObserver=B,t.makeGroupMapBlockObserver=j,t.makeMaxBlockObserver=R,t.makeMinBlockObserver=N,t.makeMaxObserver=F,t.makeMinObserver=q;var Bt=n("length");t.makeSumObserver=W(function(){var e=0;return function(t,n){return t=t.filter(U),n=n.filter(U),e+=t.sum()-n.sum()}}),t.makeAverageObserver=W(function(){var e=0,t=0;return function(n,r){return n=n.filter(U),r=r.filter(U),e+=n.sum()-r.sum(),t+=n.length-r.length,e/t}}),t.makeViewObserver=_t(V);var jt=n(0);t.makeEnumerateObserver=_t(H),t.makeEnumerationObserver=t.makeEnumerateObserver,t.makeRangeObserver=Y,t.makeStartsWithObserver=G,t.makeEndsWithObserver=K,t.makeContainsObserver=X,t.makeJoinObserver=Z;var It=n("");t.observeRangeChange=J,t.makeLastObserver=$,t.observeLast=Q;var Rt=Q;t.makeOnlyObserver=et,t.observeOnly=tt,t.makeOneObserver=nt,t.observeOne=rt,t.makeRangeContentObserver=it,t.makeMapContentObserver=at,t.observeMapChange=st;var Nt=t.makeEntriesObserver=_t(ot);t.observeEntries=lt,t.makeKeysObserver=ct,t.observeEntryKey=ut,t.makeValuesObserver=ht,t.observeEntryValue=pt,t.makeToMapObserver=dt;var Ft=Dt(B(r,ut),$(pt));t.makeParentObserver=gt,t.makeConverterObserver=ft,t.makeComputerObserver=mt,t.makePathObserver=vt,t.makeExpressionObserver=vt,t.makeWithObserver=yt,t.makeToArrayObserver=_t(Function.identity),t.makeAsArrayObserver=t.makeToArrayObserver;var qt=e("./merge").merge;t.makeUniq=bt,t.cancelEach=Ct,t.autoCancelPrevious=Lt}});