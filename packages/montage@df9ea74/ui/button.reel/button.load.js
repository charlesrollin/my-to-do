montageDefine("df9ea74","ui/button.reel/button",{dependencies:["ui/control","composer/press-composer","collections/dict"],factory:function(e,t){var n=e("ui/control").Control,i=e("composer/press-composer").PressComposer,r=e("collections/dict"),a=t.Button=n.specialize({_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(e){this._preventFocus=!!e,this.needsDraw=!0}},converter:{value:null},_labelNode:{value:void 0,enumerable:!1},_label:{value:void 0,enumerable:!1},label:{get:function(){return this._label},set:function(e){if(e!==void 0&&this.converter)try{e=this.converter.convert(e),this.error&&(this.error=null)}catch(t){this.error=t}this._label=""+e,this.hasStandardElement&&(this._value=e),this.needsDraw=!0}},holdThreshold:{get:function(){return this._pressComposer.longPressThreshold},set:function(e){this._pressComposer.longPressThreshold=e}},__pressComposer:{enumberable:!1,value:null},_pressComposer:{enumberable:!1,get:function(){return this.__pressComposer||(this.__pressComposer=new i,this.__pressComposer.defineBinding("longPressThreshold ",{"<-":"holdThreshold",source:this}),this.addComposer(this.__pressComposer)),this.__pressComposer}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},constructor:{value:function a(){this.super()}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(e,t,n){this.super(e,t,n),"longAction"===e&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(){this.active=!1,this._dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(e){32===e.keyCode&&(this.active=!1,this._dispatchActionEvent())}},handleLongPress:{value:function(){this._pressComposer.cancelPress();var e=document.createEvent("CustomEvent");e.initCustomEvent("longAction",!0,!0,null),this.dispatchEvent(e)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},enterDocument:{value:function(e){n.prototype.enterDocument&&n.enterDocument.prototype.apply(this,arguments),e&&(this.hasStandardElement?(Object.defineProperty(this,"value",{get:function(){return this._label},set:function(e){this.label=e}}),void 0===this._label&&(this.label=this.originalElement.value)):(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild,void 0===this._label&&(this._label=this._labelNode.data)),this.element.setAttribute("role","button"),this.element.addEventListener("keyup",this,!1))}},_drawLabel:{enumerable:!1,value:function(e){this.hasStandardElement?this._element.value=e:this._labelNode&&(this._labelNode.data=e)}},_elementNeedsTabIndexRegex:{value:/INPUT|TEXTAREA|A|SELECT|BUTTON|LABEL/},_elementNeedsTabIndex:{value:function(){return null===this.element.tagName.match(this._elementNeedsTabIndexRegex)}},draw:{value:function(){this.super(),this._elementNeedsTabIndex()&&(this._preventFocus?this.element.removeAttribute("tabindex"):this.element.setAttribute("tabindex","-1")),this._drawLabel(this.label)}},_detail:{value:null},detail:{get:function(){return null===this._detail&&(this._detail=new r),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}}});a.addAttributes({formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,type:{value:"button"},name:null,value:null})}});