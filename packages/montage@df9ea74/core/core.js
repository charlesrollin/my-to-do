function getAttributeProperties(e,t){var n=UNDERSCORE+t+ATTRIBUTE_PROPERTIES;return e.hasOwnProperty(n)?e[n]:Object.defineProperty(e,n,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(getAttributeProperties(Object.getPrototypeOf(e),t))})[n]}require("collections/shim"),require("./shim/object"),require("./shim/array"),require("./shim/string"),require("./extras/object"),require("./extras/date"),require("./extras/element"),require("./extras/function"),require("./extras/regexp"),require("./extras/string");var deprecate=require("./deprecate"),ATTRIBUTE_PROPERTIES="AttributeProperties",UNDERSCORE="_",PROTO="__proto__",VALUE="value",ENUMERABLE="enumerable",DISTINCT="distinct",SERIALIZABLE="serializable",MODIFY="modify",ARRAY_PROTOTYPE=Array.prototype,OBJECT_PROTOTYPE=Object.prototype,CONSTRUCTOR_COMPATIBILITY=!0,Montage=exports.Montage=function Montage(){};Montage.deprecate=deprecate.deprecateMethod(Montage,deprecate.deprecateMethod,"Montage.deprecate","deprecate module's deprecateMethod"),Montage.callDeprecatedFunction=deprecate.deprecateMethod(Montage,deprecate.callDeprecatedFunction,"Montage.callDeprecatedFunction","deprecate module's callDeprecatedFunction");var PROTO_IS_SUPPORTED={}.__proto__===Object.prototype,PROTO_PROPERTIES_BLACKLIST={_montage_metadata:1,__state__:1},FUNCTION_PROPERTIES=Object.getOwnPropertyNames(Function);if(Object.defineProperty(Montage,"specialize",{value:function(e,t){var n,i,r,s,o,a,u,l=this,h=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?Montage.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},PROTO_IS_SUPPORTED)n.__proto__=l;else{r=Object.getOwnPropertyNames(l);for(var a=0;r.length>a;a++)s=r[a],PROTO_PROPERTIES_BLACKLIST.hasOwnProperty(s)||(o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&Montage.defineProperty(n,s,Object.getOwnPropertyDescriptor(l,s)));n.__constructorProto__=l,Montage.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(i=Object.create(this.prototype),h){for(r=Object.getOwnPropertyNames(Montage),a=0;r.length>a;a++)s=r[a],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&Montage.defineProperty(n,s,Object.getOwnPropertyDescriptor(Montage,s));for(r=Object.getOwnPropertyNames(Montage.prototype),a=0;r.length>a;a++)s=r[a],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&Montage.defineProperty(i,s,Object.getOwnPropertyDescriptor(Montage.prototype,s))}if(Montage.defineProperties(i,e),CONSTRUCTOR_COMPATIBILITY){u=function(e,t,n){function i(){return this===t&&deprecate.deprecationWarning(Montage.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties",null,3),e.apply(this,arguments)}return i.deprecatedFunction=e,i};for(s in e)FUNCTION_PROPERTIES.has(s)?delete e[s]:(o=e[s],o.value&&"function"==typeof o.value&&!o.value.__isConstructor__?o.value=u(o.value,n,s):(o.get&&(o.get=u(o.get,n,s)),o.set&&(o.set=u(o.set,n,s))));Montage.defineProperties(n,e),Montage.defineProperty(n,"create",{value:function(){return new n},enumerable:!1})}return Montage.defineProperties(n,t),Montage.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),Montage.defineProperty(n,"_superCache",{value:{},enumerable:!1}),n.prototype=i,Montage.defineProperty(i,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!PROTO_IS_SUPPORTED){var originalGetPrototypeOf=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:originalGetPrototypeOf.apply(Object,arguments)}}Object.defineProperty(Montage,"create",{configurable:!0,value:function(e,t){if(deprecate.deprecationWarning("Montage.create()","Montage.specialize() or new Component()"),void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&Montage.defineProperties(n,t),n}});var extendedPropertyAttributes=[SERIALIZABLE];extendedPropertyAttributes.forEach(function(e){Object.defineProperty(Object.prototype,UNDERSCORE+e+ATTRIBUTE_PROPERTIES,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(Montage,"defineProperty",{value:function(e,t,n){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var i=VALUE in n;if(DISTINCT in n&&!i)throw new TypeError("Cannot use distinct attribute on non-value property '"+t+"'");if(PROTO in n)n.__proto__=i?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;else{var r;r=i?"function"==typeof n.value?_defaultFunctionValueProperty:_defaultObjectValueProperty:_defaultAccessorProperty;for(var s in r)s in n||(n[s]=r[s])}if(n.hasOwnProperty(ENUMERABLE)||t.charAt(0)!==UNDERSCORE||(n.enumerable=!1),n.hasOwnProperty(SERIALIZABLE)||(n.enumerable?n.get&&!n.set?n.serializable=!1:n.writable===!1&&(n.serializable=!1):n.serializable=!1),SERIALIZABLE in n&&(getAttributeProperties(e,SERIALIZABLE)[t]=n.serializable),n.distinct!==!0||"object"!=typeof n.value){var o,a,u;if(e._superDependencies){if("function"==typeof n.value&&(o=e._superDependencies[t+".value"]))for(a=0,u=o.length;u>a;a++)delete o[a]._superCache[t+".value"];if("function"==typeof n.get&&(o=e._superDependencies[t+".get"]))for(a=0,u=o.length;u>a;a++)delete o[a]._superCache[t+".get"];if("function"==typeof n.set&&(o=e._superDependencies[t+".set"]))for(a=0,u=o.length;u>a;a++)delete o[a]._superCache[t+".set"]}return Object.defineProperty(e,t,n)}(function(e,t,n,i){var r=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===OBJECT_PROTOTYPE?0!==Object.keys(n).length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e={};for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===ARRAY_PROTOTYPE?0!==n.length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i,s;for(e=[],i=0;(s=n[i])!==void 0;i++)e[i]=s;this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e=new n.constructor;for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}})})(t,UNDERSCORE+t,n.value,e)}}),Object.defineProperty(Montage,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var _defaultAccessorProperty={enumerable:!0,configurable:!0,serializable:!0},_defaultObjectValueProperty={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},_defaultFunctionValueProperty={writable:!0,enumerable:!1,configurable:!0,serializable:!1};Montage.defineProperty(Montage,"didCreate",{value:Function.noop});var getSuper=function(e,t){var n,i,r,s,o,a,u,l,h;if(!t._superPropertyName||!t._superPropertyType)for(Montage.defineProperty(t,"_superPropertyType",{value:null}),Montage.defineProperty(t,"_superPropertyName",{value:null}),u=e;!l&&null!==u;){for(n=Object.getOwnPropertyNames(u),i=Object.getPrototypeOf(u),r=0,s=n.length,r;s>r;r++){if(o=n[r],h=Object.getOwnPropertyDescriptor(u,o),null!=(a=h.value)&&(a===t||a.deprecatedFunction===t)){t._superPropertyType="value",t._superPropertyName=o,l=!0;break}if(null!=(a=h.get)&&(a===t||a.deprecatedFunction===t)){t._superPropertyType="get",t._superPropertyName=o,l=!0;break}if(null!=(a=h.set)&&(a===t||a.deprecatedFunction===t)){t._superPropertyType="set",t._superPropertyName=o,l=!0;break}}u=i}return superForImplementation(e,t._superPropertyType,t._superPropertyName,t)},superImplementation=function(){if("function"!=typeof superImplementation.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var e=getSuper(this,superImplementation.caller);return"function"==typeof e?e.bind(this):Function.noop};Montage.defineProperty(Montage,"_superContext",{value:null});var superForImplementation=function(e,t,n,i){var r,s,o,a,u,l=e,h=n+"."+t;if(e._superContext||(e._superContext={}),e._superContext[h])l=e._superContext[h];else for(l=e;null!==l&&(!l.hasOwnProperty(n)||(o=Object.getOwnPropertyDescriptor(l,n),"function"!=typeof o[t]));)l=Object.getPrototypeOf(l);if(a=l.constructor,a._superCache&&a._superCache[h])return u=function(e,t,n,i){return function(){t._superContext[e]=n;var r=i.apply(t,arguments);return delete t._superContext[e],r}}(h,e,a._superCache[h].owner,a._superCache[h].func);for(s=l;r===void 0&&(s=Object.getPrototypeOf(s));)if(s._superDependencies||Montage.defineProperty(s,"_superDependencies",{value:{}}),s._superDependencies[h]||(s._superDependencies[h]=[]),s._superDependencies[h].push(a),o=Object.getOwnPropertyDescriptor(s,n)){if("function"==typeof o[t]&&o[t]!==i){r=o[t];break}break}return"function"==typeof r?(u=function(e,t,n,i){return function(){t._superContext[e]=n;var r=i.apply(t,arguments);return delete t._superContext[e],r}}(h,e,s,r),a._superCache||Montage.defineProperty(a,"_superCache",{value:{}}),a._superCache[h]={func:r,owner:s},u):Function.noop},superForValueImplementation=function(e){return superForImplementation(this,"value",e,superForValueImplementation.caller)},superForGetImplementation=function(e){return superForImplementation(this,"get",e,superForGetImplementation.caller)},superForSetImplementation=function(e){return superForImplementation(this,"set",e,superForSetImplementation.caller)};Montage.defineProperty(Montage,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"super",{get:superImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForValue",{value:superForValueImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForGet",{value:superForGetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage.prototype,"superForSet",{value:superForSetImplementation,enumerable:!1}),Montage.defineProperty(Montage,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var i in n)n[i]&&t.push(i);return t}}),Montage.defineProperty(Montage,"getPropertyAttribute",{value:function(e,t,n){var i=UNDERSCORE+n+ATTRIBUTE_PROPERTIES,r=e[i];return r?r[t]:void 0}}),Montage.defineProperty(Montage,"getPropertyAttributes",{value:function(e,t){var n={},i=UNDERSCORE+t+ATTRIBUTE_PROPERTIES,r=e[i];if(r){for(var s in r)n[s]=r[s];return n}}});var _instanceMetadataDescriptor={isInstance:{value:!0}},_functionInstanceMetadataDescriptor={objectName:{value:"Function"},isInstance:{value:!0}};Montage.defineProperty(Montage,"getInfoForObject",{value:function(e){var t,n;if(hasOwnProperty.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?_functionInstanceMetadataDescriptor:_instanceMetadataDescriptor,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(i){return e._montage_metadata=Object.create(t,n)}}});var UUID=require("./uuid");"undefined"!=typeof window&&(window.uuid=UUID.generate());var hasOwnProperty=Object.prototype.hasOwnProperty,uuidGetGenerator=function(){var e=UUID.generate(),t=Montage.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:uuidGetGenerator.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&VALUE in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&PROTO in this||(this._uuid=e))}catch(n){}return this._uuid=e,e},defaultUuidGet=function defaultUuidGet(){return hasOwnProperty.call(this,"_uuid")?this._uuid:uuidGetGenerator.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:defaultUuidGet,set:function(){}}),Montage.defineProperty(Montage,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"identifier",{value:null,serializable:!0}),Montage.defineProperty(Montage.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),Montage.defineProperty(Montage,"equals",{value:Montage.prototype.equals}),Montage.defineProperty(Montage.prototype,"callDelegateMethod",{value:function(e){var t,n,i=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),i&&"function"==typeof(n=i[t]))?(ARRAY_PROTOTYPE.shift.call(arguments),n.apply(i,arguments)):i&&"function"==typeof(n=i[e])?(ARRAY_PROTOTYPE.shift.call(arguments),n.apply(i,arguments)):void 0}});var PropertyChanges=require("collections/listen/property-changes");Object.addEach(Montage,PropertyChanges.prototype),Object.addEach(Montage.prototype,PropertyChanges.prototype);var Bindings=exports.Bindings=require("frb"),bindingPropertyDescriptors={defineBinding:{value:function(e,t,n){return Bindings.defineBinding(this,e,t,n)}},defineBindings:{value:function(e,t){return Bindings.defineBindings(this,e,t)}},cancelBinding:{value:function(e){return Bindings.cancelBinding(this,e)}},cancelBindings:{value:function(){return Bindings.cancelBindings(this)}},getBinding:{value:function(e){return Bindings.getBinding(this,e)}},getBindings:{value:function(){return Bindings.getBindings(this)}}};Montage.defineProperties(Montage,bindingPropertyDescriptors),Montage.defineProperties(Montage.prototype,bindingPropertyDescriptors);var WeakMap=require("collections/weak-map"),Map=require("collections/map"),parse=require("frb/parse"),evaluate=require("frb/evaluate"),assign=require("frb/assign"),bind=require("frb/bind"),compileObserver=require("frb/compile-observer"),Scope=require("frb/scope"),Observers=require("frb/observers"),autoCancelPrevious=Observers.autoCancelPrevious,pathChangeDescriptors=new WeakMap,pathPropertyDescriptors={getPath:{value:function(e,t,n,i){return evaluate(e,this,t||this,n,i)}},setPath:{value:function(e,t,n,i,r){return assign(this,e,t,n||this,i,r)}},observePath:{value:function(e,t){var n=parse(e),i=compileObserver(n);return i(autoCancelPrevious(t),new Scope(this))}},addRangeAtPathChangeListener:{value:function(e,t,n,i,r,s){function o(e,i,r){if(t[n])t[n](e,i,r);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,i,r)}}n=n||"handleRangeChange";var a=[];return this.addPathChangeListener(e,function(e){return e&&e.toArray&&e.addRangeChangeListener?(o(e.toArray(),a.toArray(),0),a=e,e.addRangeChangeListener(o)):(e=[],o(e,a,0),a=e,void 0)},void 0,void 0,i,r,s)}},getPathChangeDescriptors:{value:function(){return pathChangeDescriptors.has(this)||pathChangeDescriptors.set(this,{}),pathChangeDescriptors.get(this)}},getPathChangeDescriptor:{value:function(e,t,n){var i=Montage.getPathChangeDescriptors.call(this);return Object.owns(i,e)||(i[e]={willChangeListeners:new Map,changeListeners:new Map}),i=i[e],i=n?i.willChangeListeners:i.changeListeners,i.has(t)||i.set(t,{path:e,handler:t,beforeChange:n,cancel:Function.noop}),i.get(t)}},addPathChangeListener:{value:function(e,t,n,i,r,s,o){var a=this;t=t||Function.noop;var u=Montage.getPathChangeDescriptor.call(this,e,t,i);u.cancel();var l,h,c,d=parse(e);if(t===Function.noop)c=function(t){if(h)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));h=!0,l=t};else if(n)c=function(i){return t[n].call(t,i,e,a)};else if(t.handlePathChange)c=function(n){return t.handlePathChange.call(t,n,e,a)};else{if("function"!=typeof t)throw Error("Can't recognize handler type: "+t+". Must be function or delegate implementing handlePathChange.");c=function(n){return t.call(a,n,e,a)}}var m=compileObserver(d),p=new Scope(this);p.beforeChange=i,p.parameters=r,p.document=s,p.components=o;var v=m(autoCancelPrevious(c),p);return u.cancel=v,h?l:v}},removePathChangeListener:{value:function(e,t,n){t=t||Function.noop;var i=Montage.getPathChangeDescriptors.call(this),r=n?"willChangeListeners":"changeListeners";if(!Object.owns(i,e))throw Error("Can't find "+r+" for "+JSON.stringify(e));var s=i[e],o=s[r];if(!o.has(t))throw Error("Can't find "+r+" for "+JSON.stringify(e));var a=o.get(t);a.cancel(),o["delete"](t),0===s.willChangeListeners.length&&0===s.changeListeners.length&&delete i[e];for(var u in i)return;pathChangeDescriptors["delete"](this)}},addBeforePathChangeListener:{value:function(e,t,n,i,r,s){return Montage.addPathChangeListener.call(this,e,t,n,!0,i,r,s)}},removeBeforePathChangeListener:{value:function(e,t){return Montage.removePathChangeListener.call(this,e,t,!0)}}};Montage.defineProperties(Montage,pathPropertyDescriptors),Montage.defineProperties(Montage.prototype,pathPropertyDescriptors),require("./serialization/bindings"),exports._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,i=n.lastIndexOf("/"),r=n.lastIndexOf(".");i=-1===i?0:i+1,r=-1===r?n.length:r,r=i>r?n.length:r,Montage.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,r)+".meta"})}return t._blueprintModuleId}},exports._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprint")||!t._blueprint){var n=t.blueprintModuleId;if(""===n)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(t)+"'");exports._blueprintDescriptor.BlueprintModulePromise||(exports._blueprintDescriptor.BlueprintModulePromise=require.async("core/meta/module-blueprint").get("ModuleBlueprint")),Montage.defineProperty(t,"_blueprint",{enumerable:!1,value:exports._blueprintDescriptor.BlueprintModulePromise.then(function(e){var i=Montage.getInfoForObject(t);return e.getBlueprintWithModuleId(n,i.require).fail(function(n){if(-1!==n.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(t).then(function(e){return e});throw n})})})}return t._blueprint},set:function(e){var t,n=Montage.getInfoForObject(this),i=n&&!n.isInstance?this:this.constructor;if(null===e)t=null;else{if("function"==typeof e.then)throw new TypeError("Object blueprint should not be a promise");e.blueprintInstanceModule=i.blueprintModule,t=require("./promise").Promise.resolve(e)}Montage.defineProperty(i,"_blueprint",{enumerable:!1,value:t})}};