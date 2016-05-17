montageDefine("df9ea74","composer/key-composer",{dependencies:["../core/core","./composer"],factory:function(e,t){var n=e("../core/core").Montage,o=e("./composer").Composer,i="keyPress",a="longKeyPress",s="keyRelease",r=t.KeyComposer=o.specialize({_isLoaded:{value:!1},_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(e){this._keyRegistered?(u.defaultKeyManager.unregisterKey(this),this._keys=e,u.defaultKeyManager.registerKey(this)):this._keys=e}},load:{value:function(){this._shouldDispatchEvent&&!this._keyRegistered&&(u.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){u.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(e,t,n){var r=this.component;o.addEventListener.call(this,e,t,n),(e==i||e==a||e==s)&&(this._shouldDispatchEvent=!0,e==a&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(u.defaultKeyManager.registerKey(this),this._keyRegistered=!0):r&&"function"!=typeof r.addComposer&&(this.element||(this.element=window),this.component.loadComposer(this)))}},constructor:{value:function(){o.constructor.call(this)}},deserializedFromTemplate:{value:function(){var e=this.component;null===this.identifier&&(this.identifier=n.getInfoForObject(this).label),e&&("function"==typeof e.addComposer?e.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.component.loadComposer(this)))}}},{createKey:{value:function(e,t,n){var o=this;return this===r&&(o=new r),n||(n=e.identifier?e.identifier+t.toLowerCase().replace(/[ +]/g).toCapitalized():t.toLowerCase().replace(/[ +]/g)),o.keys=t,o.identifier=n,e.addComposer(o),o}},createGlobalKey:{value:function(e,t,n){var o=this;return this===r&&(o=new r),o.keys=t,o.identifier=n,e.addComposerForElement(o,window),o}}}),l=null,u=n.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},constructor:{value:function(){}},registerKey:{value:function(t){var n=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(t):(this._keysToRegister.push(t),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,e.async("core/event/key-manager").then(function(e){var t=n._defaultKeyManager=e.defaultKeyManager;n._keysToRegister.forEach(function(e){t.registerKey(e)}),n._keysToRegister.length=0}).done()))}},unregisterKey:{value:function(e){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(e)}}},{defaultKeyManager:{get:function(){return l||(l=new u),this._defaultKeyManager?this._defaultKeyManager:l}}})}});