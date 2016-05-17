montageDefine("df9ea74","core/core",{dependencies:["collections/shim","./shim/object","./shim/array","./shim/string","./extras/object","./extras/date","./extras/element","./extras/function","./extras/regexp","./extras/string","./deprecate","./uuid","collections/listen/property-changes","frb","collections/weak-map","collections/map","frb/parse","frb/evaluate","frb/assign","frb/bind","frb/compile-observer","frb/scope","frb/observers","./serialization/bindings","./promise"],factory:function(e,t){function n(e,t){var r=o+t+i;return e.hasOwnProperty(r)?e[r]:Object.defineProperty(e,r,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(n(Object.getPrototypeOf(e),t))})[r]}e("collections/shim"),e("./shim/object"),e("./shim/array"),e("./shim/string"),e("./extras/object"),e("./extras/date"),e("./extras/element"),e("./extras/function"),e("./extras/regexp"),e("./extras/string");var r=e("./deprecate"),i="AttributeProperties",o="_",a="__proto__",s="value",u="enumerable",l="distinct",h="serializable",c=Array.prototype,d=Object.prototype,p=!0,m=t.Montage=function m(){};m.deprecate=r.deprecateMethod(m,r.deprecateMethod,"Montage.deprecate","deprecate module's deprecateMethod"),m.callDeprecatedFunction=r.deprecateMethod(m,r.callDeprecatedFunction,"Montage.callDeprecatedFunction","deprecate module's callDeprecatedFunction");var v={}.__proto__===Object.prototype,f={_montage_metadata:1,__state__:1},g=Object.getOwnPropertyNames(Function);if(Object.defineProperty(m,"specialize",{value:function(e,t){var n,i,o,a,s,u,l,h=this,c=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?m.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},v)n.__proto__=h;else{o=Object.getOwnPropertyNames(h);for(var u=0;o.length>u;u++)a=o[u],f.hasOwnProperty(a)||(s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&m.defineProperty(n,a,Object.getOwnPropertyDescriptor(h,a)));n.__constructorProto__=h,m.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(i=Object.create(this.prototype),c){for(o=Object.getOwnPropertyNames(m),u=0;o.length>u;u++)a=o[u],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&m.defineProperty(n,a,Object.getOwnPropertyDescriptor(m,a));for(o=Object.getOwnPropertyNames(m.prototype),u=0;o.length>u;u++)a=o[u],s=Object.getOwnPropertyDescriptor(n,a),(!s||s.configurable)&&m.defineProperty(i,a,Object.getOwnPropertyDescriptor(m.prototype,a))}if(m.defineProperties(i,e),p){l=function(e,t,n){function i(){return this===t&&r.deprecationWarning(m.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties",null,3),e.apply(this,arguments)}return i.deprecatedFunction=e,i};for(a in e)g.has(a)?delete e[a]:(s=e[a],s.value&&"function"==typeof s.value&&!s.value.__isConstructor__?s.value=l(s.value,n,a):(s.get&&(s.get=l(s.get,n,a)),s.set&&(s.set=l(s.set,n,a))));m.defineProperties(n,e),m.defineProperty(n,"create",{value:function(){return new n},enumerable:!1})}return m.defineProperties(n,t),m.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),m.defineProperty(n,"_superCache",{value:{},enumerable:!1}),n.prototype=i,m.defineProperty(i,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!v){var _=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:_.apply(Object,arguments)}}Object.defineProperty(m,"create",{configurable:!0,value:function(e,t){if(r.deprecationWarning("Montage.create()","Montage.specialize() or new Component()"),void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&m.defineProperties(n,t),n}});var y=[h];y.forEach(function(e){Object.defineProperty(Object.prototype,o+e+i,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(m,"defineProperty",{value:function(e,t,r){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var i=s in r;if(l in r&&!i)throw new TypeError("Cannot use distinct attribute on non-value property '"+t+"'");if(a in r)r.__proto__=i?"function"==typeof r.value?w:M:P;else{var p;p=i?"function"==typeof r.value?w:M:P;for(var m in p)m in r||(r[m]=p[m])}if(r.hasOwnProperty(u)||t.charAt(0)!==o||(r.enumerable=!1),r.hasOwnProperty(h)||(r.enumerable?r.get&&!r.set?r.serializable=!1:r.writable===!1&&(r.serializable=!1):r.serializable=!1),h in r&&(n(e,h)[t]=r.serializable),r.distinct!==!0||"object"!=typeof r.value){var v,f,g;if(e._superDependencies){if("function"==typeof r.value&&(v=e._superDependencies[t+".value"]))for(f=0,g=v.length;g>f;f++)delete v[f]._superCache[t+".value"];if("function"==typeof r.get&&(v=e._superDependencies[t+".get"]))for(f=0,g=v.length;g>f;f++)delete v[f]._superCache[t+".get"];if("function"==typeof r.set&&(v=e._superDependencies[t+".set"]))for(f=0,g=v.length;g>f;f++)delete v[f]._superCache[t+".set"]}return Object.defineProperty(e,t,r)}(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===d?0!==Object.keys(n).length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===c?0!==n.length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,o;for(e=[],r=0;(o=n[r])!==void 0;r++)e[r]=o;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})})(t,o+t,r.value,e)}}),Object.defineProperty(m,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var P={enumerable:!0,configurable:!0,serializable:!0},M={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},w={writable:!0,enumerable:!1,configurable:!0,serializable:!1};m.defineProperty(m,"didCreate",{value:Function.noop});var b=function(e,t){var n,r,i,o,a,s,u,l,h;if(!t._superPropertyName||!t._superPropertyType)for(m.defineProperty(t,"_superPropertyType",{value:null}),m.defineProperty(t,"_superPropertyName",{value:null}),u=e;!l&&null!==u;){for(n=Object.getOwnPropertyNames(u),r=Object.getPrototypeOf(u),i=0,o=n.length,i;o>i;i++){if(a=n[i],h=Object.getOwnPropertyDescriptor(u,a),null!=(s=h.value)&&(s===t||s.deprecatedFunction===t)){t._superPropertyType="value",t._superPropertyName=a,l=!0;break}if(null!=(s=h.get)&&(s===t||s.deprecatedFunction===t)){t._superPropertyType="get",t._superPropertyName=a,l=!0;break}if(null!=(s=h.set)&&(s===t||s.deprecatedFunction===t)){t._superPropertyType="set",t._superPropertyName=a,l=!0;break}}u=r}return E(e,t._superPropertyType,t._superPropertyName,t)},T=function(){if("function"!=typeof T.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var e=b(this,T.caller);return"function"==typeof e?e.bind(this):Function.noop};m.defineProperty(m,"_superContext",{value:null});var E=function(e,t,n,r){var i,o,a,s,u,l=e,h=n+"."+t;if(e._superContext||(e._superContext={}),e._superContext[h])l=e._superContext[h];else for(l=e;null!==l&&(!l.hasOwnProperty(n)||(a=Object.getOwnPropertyDescriptor(l,n),"function"!=typeof a[t]));)l=Object.getPrototypeOf(l);if(s=l.constructor,s._superCache&&s._superCache[h])return u=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(h,e,s._superCache[h].owner,s._superCache[h].func);for(o=l;i===void 0&&(o=Object.getPrototypeOf(o));)if(o._superDependencies||m.defineProperty(o,"_superDependencies",{value:{}}),o._superDependencies[h]||(o._superDependencies[h]=[]),o._superDependencies[h].push(s),a=Object.getOwnPropertyDescriptor(o,n)){if("function"==typeof a[t]&&a[t]!==r){i=a[t];break}break}return"function"==typeof i?(u=function(e,t,n,r){return function(){t._superContext[e]=n;var i=r.apply(t,arguments);return delete t._superContext[e],i}}(h,e,o,i),s._superCache||m.defineProperty(s,"_superCache",{value:{}}),s._superCache[h]={func:i,owner:o},u):Function.noop},S=function(e){return E(this,"value",e,S.caller)},C=function(e){return E(this,"get",e,C.caller)},D=function(e){return E(this,"set",e,D.caller)};m.defineProperty(m,"super",{get:T,enumerable:!1}),m.defineProperty(m.prototype,"super",{get:T,enumerable:!1}),m.defineProperty(m,"superForValue",{value:S,enumerable:!1}),m.defineProperty(m.prototype,"superForValue",{value:S,enumerable:!1}),m.defineProperty(m,"superForGet",{value:C,enumerable:!1}),m.defineProperty(m.prototype,"superForGet",{value:C,enumerable:!1}),m.defineProperty(m,"superForSet",{value:D,enumerable:!1}),m.defineProperty(m.prototype,"superForSet",{value:D,enumerable:!1}),m.defineProperty(m,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),m.defineProperty(m,"getPropertyAttribute",{value:function(e,t,n){var r=o+n+i,a=e[r];return a?a[t]:void 0}}),m.defineProperty(m,"getPropertyAttributes",{value:function(e,t){var n={},r=o+t+i,a=e[r];if(a){for(var s in a)n[s]=a[s];return n}}});var O={isInstance:{value:!0}},L={objectName:{value:"Function"},isInstance:{value:!0}};m.defineProperty(m,"getInfoForObject",{value:function(e){var t,n;if(I.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?L:O,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}});var Y=e("./uuid");"undefined"!=typeof window&&(window.uuid=Y.generate());var I=Object.prototype.hasOwnProperty,N=function(){var e=Y.generate(),t=m.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:N.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&s in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&a in this||(this._uuid=e))}catch(n){}return this._uuid=e,e},x=function x(){return I.call(this,"_uuid")?this._uuid:N.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:x,set:function(){}}),m.defineProperty(m,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),m.defineProperty(m,"equals",{value:m.prototype.equals}),m.defineProperty(m.prototype,"callDelegateMethod",{value:function(e){var t,n,r=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),r&&"function"==typeof(n=r[t]))?(c.shift.call(arguments),n.apply(r,arguments)):r&&"function"==typeof(n=r[e])?(c.shift.call(arguments),n.apply(r,arguments)):void 0}});var A=e("collections/listen/property-changes");Object.addEach(m,A.prototype),Object.addEach(m.prototype,A.prototype);var X=t.Bindings=e("frb"),k={defineBinding:{value:function(e,t,n){return X.defineBinding(this,e,t,n)}},defineBindings:{value:function(e,t){return X.defineBindings(this,e,t)}},cancelBinding:{value:function(e){return X.cancelBinding(this,e)}},cancelBindings:{value:function(){return X.cancelBindings(this)}},getBinding:{value:function(e){return X.getBinding(this,e)}},getBindings:{value:function(){return X.getBindings(this)}}};m.defineProperties(m,k),m.defineProperties(m.prototype,k);var F=e("collections/weak-map"),z=e("collections/map"),R=e("frb/parse"),j=e("frb/evaluate"),U=e("frb/assign");e("frb/bind");var B=e("frb/compile-observer"),W=e("frb/scope"),H=e("frb/observers"),K=H.autoCancelPrevious,V=new F,q={getPath:{value:function(e,t,n,r){return j(e,this,t||this,n,r)}},setPath:{value:function(e,t,n,r,i){return U(this,e,t,n||this,r,i)}},observePath:{value:function(e,t){var n=R(e),r=B(n);return r(K(t),new W(this))}},addRangeAtPathChangeListener:{value:function(e,t,n,r,i,o){function a(e,r,i){if(t[n])t[n](e,r,i);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,r,i)}}n=n||"handleRangeChange";var s=[];return this.addPathChangeListener(e,function(e){return e&&e.toArray&&e.addRangeChangeListener?(a(e.toArray(),s.toArray(),0),s=e,e.addRangeChangeListener(a)):(e=[],a(e,s,0),s=e,void 0)},void 0,void 0,r,i,o)}},getPathChangeDescriptors:{value:function(){return V.has(this)||V.set(this,{}),V.get(this)}},getPathChangeDescriptor:{value:function(e,t,n){var r=m.getPathChangeDescriptors.call(this);return Object.owns(r,e)||(r[e]={willChangeListeners:new z,changeListeners:new z}),r=r[e],r=n?r.willChangeListeners:r.changeListeners,r.has(t)||r.set(t,{path:e,handler:t,beforeChange:n,cancel:Function.noop}),r.get(t)}},addPathChangeListener:{value:function(e,t,n,r,i,o,a){var s=this;t=t||Function.noop;var u=m.getPathChangeDescriptor.call(this,e,t,r);u.cancel();var l,h,c,d=R(e);if(t===Function.noop)c=function(t){if(h)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));h=!0,l=t};else if(n)c=function(r){return t[n].call(t,r,e,s)};else if(t.handlePathChange)c=function(n){return t.handlePathChange.call(t,n,e,s)};else{if("function"!=typeof t)throw Error("Can't recognize handler type: "+t+". Must be function or delegate implementing handlePathChange.");c=function(n){return t.call(s,n,e,s)}}var p=B(d),v=new W(this);v.beforeChange=r,v.parameters=i,v.document=o,v.components=a;var f=p(K(c),v);return u.cancel=f,h?l:f}},removePathChangeListener:{value:function(e,t,n){t=t||Function.noop;var r=m.getPathChangeDescriptors.call(this),i=n?"willChangeListeners":"changeListeners";if(!Object.owns(r,e))throw Error("Can't find "+i+" for "+JSON.stringify(e));var o=r[e],a=o[i];if(!a.has(t))throw Error("Can't find "+i+" for "+JSON.stringify(e));var s=a.get(t);s.cancel(),a["delete"](t),0===o.willChangeListeners.length&&0===o.changeListeners.length&&delete r[e];for(var u in r)return;V["delete"](this)}},addBeforePathChangeListener:{value:function(e,t,n,r,i,o){return m.addPathChangeListener.call(this,e,t,n,!0,r,i,o)}},removeBeforePathChangeListener:{value:function(e,t){return m.removePathChangeListener.call(this,e,t,!0)}}};m.defineProperties(m,q),m.defineProperties(m.prototype,q),e("./serialization/bindings"),t._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=m.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=m.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=-1===r?0:r+1,i=-1===i?n.length:i,i=r>i?n.length:i,m.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+".meta"})}return t._blueprintModuleId}},t._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var n=m.getInfoForObject(this),r=n&&!n.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(r,"_blueprint")||!r._blueprint){var i=r.blueprintModuleId;if(""===i)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(r)+"'");t._blueprintDescriptor.BlueprintModulePromise||(t._blueprintDescriptor.BlueprintModulePromise=e.async("core/meta/module-blueprint").get("ModuleBlueprint")),m.defineProperty(r,"_blueprint",{enumerable:!1,value:t._blueprintDescriptor.BlueprintModulePromise.then(function(e){var t=m.getInfoForObject(r);return e.getBlueprintWithModuleId(i,t.require).fail(function(t){if(-1!==t.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(r).then(function(e){return e});throw t})})})}return r._blueprint},set:function(t){var n,r=m.getInfoForObject(this),i=r&&!r.isInstance?this:this.constructor;if(null===t)n=null;else{if("function"==typeof t.then)throw new TypeError("Object blueprint should not be a promise");t.blueprintInstanceModule=i.blueprintModule,n=e("./promise").Promise.resolve(t)}m.defineProperty(i,"_blueprint",{enumerable:!1,value:n})}}}});