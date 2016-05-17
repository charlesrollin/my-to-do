montageDefine("df9ea74","ui/flow.reel/flow",{dependencies:["../component","frb/observers","./flow-bezier-spline","../../core/range-controller","../../core/deprecate"],factory:function(e,t){var n=e("../component").Component,i=e("frb/observers").observeProperty,r=e("./flow-bezier-spline").FlowBezierSpline,a=e("../../core/range-controller").RangeController,s=e("../../core/deprecate").deprecationWarning;t.Flow=n.specialize({constructor:{value:function(){this.super(),this._paths=[],this._visibleIndexes=[],this._needsClearVisibleIndexes=!0,this._slideOffsets={},this.defineBinding("_numberOfIterations",{"<-":"contentController.content.length"}),this.addOwnPropertyChangeListener("_numberOfIterations",this),window.addEventListener("resize",this,!1)}},slotContent:{serializable:!0,value:null},__flowTranslateComposer:{value:null},_flowTranslateComposer:{get:function(){return this.__flowTranslateComposer},set:function(e){this.__flowTranslateComposer&&(this.__flowTranslateComposer.removeEventListener("translateStart",this,!1),this.__flowTranslateComposer.removeEventListener("translateEnd",this,!1)),this.__flowTranslateComposer=e,this.__flowTranslateComposer.addEventListener("translateStart",this,!1),this.__flowTranslateComposer.addEventListener("translateEnd",this,!1)}},__firstIteration:{value:null},_firstIteration:{get:function(){return this.__firstIteration},set:function(e){this.__firstIteration=e,this.needsDraw=!0}},handleTranslateStart:{value:function(){this.callDelegateMethod("didTranslateStart",this)}},handleTranslateEnd:{value:function(){this.callDelegateMethod("didTranslateEnd",this)}},_scrollingMode:{value:"linear"},_transform:{value:null},_transformCss:{value:null},_transformPerspective:{value:null},scrollingMode:{serializable:!0,get:function(){return this._scrollingMode},set:function(e){switch(e){case"linear":case"drag":this._scrollingMode=e}}},_linearScrollingVector:{value:[-300,0]},linearScrollingVector:{seriazable:!0,get:function(){return this._linearScrollingVector},set:function(e){this._linearScrollingVector=e}},_repetition:{value:null},momentumDuration:{serializable:!0,value:650},_splinePaths:{value:null},splinePaths:{enumerable:!1,get:function(){return this._splinePaths||(this._splinePaths=[]),this._splinePaths},set:function(e){this._splinePaths=e}},_appendPath:{value:function(e){var t,n,i=new r,a=e.knots,s=e.knots.length,o=[],l=[],u=[],c=[];i.parameters={};for(t in e.units)i.parameters[t]={data:[],units:e.units[t]};for(t=0;s>t;t++){o[t]=a[t].knotPosition,u[t]=a[t].previousHandlerPosition,l[t]=a[t].nextHandlerPosition,c[t]=a[t].previousDensity;for(n in e.units)i.parameters[n].data.push(a[t][n])}i.knots=o,i.previousHandlers=u,i.nextHandlers=l,i.densities=c,i._computeDensitySummation(),this.splinePaths.push(i),e.hasOwnProperty("headOffset")||(e.headOffset=0),e.hasOwnProperty("tailOffset")||(e.tailOffset=0),this._paths.push(e),this._updateLength()}},_paths:{value:null},paths:{get:function(){var e,t,n,i,r,a,s,o=this.splinePaths.length,l=[];for(r=0;o>r;r++){for(t=this.splinePaths[r].knots.length,e={knots:[],units:{}},a=0;t>a;a++)i={knotPosition:this.splinePaths[r].knots[a]},this.splinePaths[r].nextHandlers&&this.splinePaths[r].nextHandlers[a]&&(i.nextHandlerPosition=this.splinePaths[r].nextHandlers[a]),this.splinePaths[r].previousHandlers&&this.splinePaths[r].previousHandlers[a]&&(i.previousHandlerPosition=this.splinePaths[r].previousHandlers[a]),this.splinePaths[r].densities&&this.splinePaths[r].densities[a]&&(i.previousDensity=this.splinePaths[r].densities[a],i.nextDensity=this.splinePaths[r].densities[a]),e.knots.push(i);for(a in this.splinePaths[r].parameters)for(e.units[a]=this.splinePaths[r].parameters[a].units,n=this.splinePaths[r].parameters[a].data.length,s=0;n>s;s++)e.knots[s][a]=this.splinePaths[r].parameters[a].data[s];e.headOffset=this._paths[r].hasOwnProperty("headOffset")?this._paths[r].headOffset:0,e.tailOffset=this._paths[r].hasOwnProperty("tailOffset")?this._paths[r].tailOffset:0,l.push(e)}return l},set:function(e){var t,n=e.length;for(this._splinePaths=[],this._paths=[],t=0;n>t;t++)this._appendPath(e[t]);this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_isCameraEnabled:{value:!0},isCameraEnabled:{get:function(){return this._isCameraEnabled},set:function(e){var t=!!e;this._isCameraEnabled!==t&&(this._isCameraEnabled=t,this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0)}},_perspective:{value:500},perspective:{get:function(){return this._perspective},set:function(e){var t=parseFloat(e);isNaN(t)||this._perspective===t||(this._perspective=t,this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0)}},_cameraElement:{value:null},_cameraPosition:{value:[0,0,800]},cameraPosition:{get:function(){return this._cameraPosition},set:function(e){this._cameraPosition=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointPosition:{get:function(){return this._isCameraEnabled?this.cameraPosition:[.01*(50-this._sceneOffsetLeft)*this._width,.01*(50-this._sceneOffsetTop)*this._height,this._perspective]}},_cameraTargetPoint:{value:[0,0,0]},cameraTargetPoint:{get:function(){return this._cameraTargetPoint},set:function(e){this._cameraTargetPoint=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointTargetPoint:{get:function(){return this._isCameraEnabled?this.cameraTargetPoint:[.01*(50-this._sceneOffsetLeft)*this._width,.01*(50-this._sceneOffsetTop)*this._height,0]}},_cameraFov:{value:50},cameraFov:{get:function(){return this._cameraFov},set:function(e){this._cameraFov=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_viewpointFov:{get:function(){return this._isCameraEnabled?this.cameraFov:360*(Math.PI/2-Math.atan2(this._perspective,this._height/2))/Math.PI}},_cameraRoll:{value:0},cameraRoll:{get:function(){return this._cameraRoll},set:function(e){this._cameraRoll=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneOffsetTop:{value:50},sceneOffsetTop:{get:function(){return this._sceneOffsetTop},set:function(e){this._sceneOffsetTop=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneOffsetLeft:{value:50},sceneOffsetLeft:{get:function(){return this._sceneOffsetLeft},set:function(e){this._sceneOffsetLeft=e,this._isCameraUpdated=!0,this.needsDraw=!0,this._needsComputeVisibleRange=!0}},_sceneScaleX:{value:{numerator:1,denominator:1}},_sceneScaleY:{value:{numerator:1,denominator:1}},_sceneScaleZ:{value:{numerator:1,denominator:1}},_sceneScale:{value:{x:{numerator:1,denominator:1},y:{numerator:1,denominator:1},z:{numerator:1,denominator:1}}},_updateSceneScale:{value:function(){this._sceneScale={x:this._sceneScaleX,y:this._sceneScaleY,z:this._sceneScaleZ}}},sceneScaleX:{get:function(){return this._sceneScaleX},set:function(e){"object"!=typeof e||void 0===e.numerator||void 0===e.denominator||isNaN(e.numerator)||isNaN(e.denominator)||0==e.denominator||(this._sceneScaleX=e,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},sceneScaleY:{get:function(){return this._sceneScaleY},set:function(e){"object"!=typeof e||void 0===e.numerator||void 0===e.denominator||isNaN(e.numerator)||isNaN(e.denominator)||0==e.denominator||(this._sceneScaleY=e,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},sceneScaleZ:{get:function(){return this._sceneScaleZ},set:function(e){"object"!=typeof e||void 0===e.numerator||void 0===e.denominator||isNaN(e.numerator)||isNaN(e.denominator)||0==e.denominator||(this._sceneScaleZ=e,this._updateSceneScale(),this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},_stride:{value:0},stride:{get:function(){return this._stride},set:function(e){this._stride=e}},_scrollingTransitionDurationMiliseconds:{value:500},_scrollingTransitionDuration:{value:"500ms"},scrollingTransitionDuration:{get:function(){return this._scrollingTransitionDuration},set:function(e){var t,n,i=e+"";i.length,(n=/^(\d+)ms$/.exec(i))?t=+n[1]:(n=/^(\d+)s$/.exec(i))?t=1e3*+n[1]:(t=+i,i+="ms"),isNaN(t)||this._scrollingTransitionDurationMiliseconds===t||(this._scrollingTransitionDurationMiliseconds=t,this._scrollingTransitionDuration=i)}},hasSelectedIndexScrolling:{value:!1},selectedIndexScrollingOffset:{value:0},_handleSelectedIndexesChange:{value:function(e){this.hasSelectedIndexScrolling&&e[0]&&this.startScrollingIndexToOffset(Math.floor(this.contentController.content.indexOf(e[0].object)/this._paths.length),this.selectedIndexScrollingOffset)}},_timingFunctions:{value:{ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}},_scrollingTransitionTimingFunctionBezier:{value:[.25,.1,.25,1]},_scrollingTransitionTimingFunction:{value:"ease"},scrollingTransitionTimingFunction:{get:function(){return this._scrollingTransitionTimingFunction},set:function(e){var t,n,i=e+"";if(this._timingFunctions.hasOwnProperty(i))this._scrollingTransitionTimingFunction=i,this._scrollingTransitionTimingFunctionBezier=this._timingFunctions[i];else if("cubic-bezier("===i.substr(0,13)&&")"===i.substr(i.length-1,1)&&(t=i.substr(13,i.length-14).split(","),4===t.length)){for(n=0;4>n;n++)if(t[n]-=0,isNaN(t[n]))return;0>t[0]?t[0]=0:t[0]>1&&(t[0]=1),0>t[2]?t[2]=0:t[2]>1&&(t[2]=1),this._scrollingTransitionTimingFunction="cubic-bezier("+t+")",this._scrollingTransitionTimingFunctionBezier=t}}},_computeCssCubicBezierValue:{value:function(e,t){var n,i,r,a=.5,s=.25;for(r=0;20>r;r++)n=a*a,i=1-a,3*(i*i*a*t[0]+i*n*t[2])+n*a>e?a-=s:a+=s,s*=.5;return n=a*a,i=1-a,3*(i*i*a*t[1]+i*n*t[3])+n*a}},_isTransitioningScroll:{value:!1},stopScrolling:{value:function(){this._isTransitioningScroll=!1}},startScrollingIndexToOffset:{value:function(e,t){this._scrollingOrigin=this.scroll,this._scrollingDestination=e-t,this._scrollingDestination>this._length?this._scrollingDestination=this._length:0>this._scrollingDestination&&(this._scrollingDestination=0),this._isScrolling=!0,this._scrollingStartTime=Date.now(),this._isTransitioningScroll=!0,this.needsDraw=!0,this.callDelegateMethod("didTranslateStart",this)}},_isCameraUpdated:{value:!0},_width:{value:0},_height:{value:0},_boundingBoxSize:{value:null},boundingBoxSize:{serializable:!0,get:function(){return this._boundingBoxSize},set:function(e){this._boundingBoxSize=e,this.elementsBoundingSphereRadius=.5*Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),this._needsComputeVisibleRange=!0}},_elementsBoundingSphereRadius:{value:1},elementsBoundingSphereRadius:{get:function(){return this._elementsBoundingSphereRadius},set:function(e){this._elementsBoundingSphereRadius!==e&&(this._elementsBoundingSphereRadius=e,this.needsDraw=!0,this._needsComputeVisibleRange=!0)}},_halfPI:{value:.5*Math.PI},_doublePI:{value:2*Math.PI},_computeFrustumNormals:{value:function(){var e,t,n,i,r,a,s,o,l,u=.5*this._viewpointFov*this._doublePI/360,c=Math.sin(u),h=Math.cos(u),d=c*this._width/this._height,p=this._viewpointPosition,f=this._viewpointTargetPoint,m=f[0]-p[0],v=f[1]-p[1],g=f[2]-p[2],_=this._halfPI-Math.atan2(g,m),b=m*Math.sin(_)+g*Math.cos(_),y=this._halfPI-Math.atan2(b,v),w=[[h,0,d],[-h,0,d],[0,h,c],[0,-h,c]],E=[];for(l=0;4>l;l++)o=w[l],e=o[0],t=o[1]*Math.cos(-y)-o[2]*Math.sin(-y),n=o[1]*Math.sin(-y)+o[2]*Math.cos(-y),i=e*Math.cos(-_)-n*Math.sin(-_),r=t,a=e*Math.sin(-_)+n*Math.cos(-_),s=1/Math.sqrt(i*i+r*r+a*a),E.push([i*s,r*s,a*s]);return E}},_segmentsIntersection:{value:function(e,t){for(var n,i,r=0,a=0,s=[];e.length>r&&t.length>a;)e[r][0]>=t[a][1]?a++:e[r][1]<=t[a][0]?r++:(n=e[r][0]>=t[a][0]?e[r][0]:t[a][0],i=e[r][1]<=t[a][1]?e[r][1]:t[a][1],s.push([n,i]),e[r][1]<t[a][1]?r++:e[r][1]>t[a][1]?a++:(r++,a++));return s}},_computeVisibleRange:{value:function(e){var t,n,i,r,a=e._knots.length-1,s=this._viewpointPosition,o=s[0],l=s[1],u=s[2],c=this._computeFrustumNormals(),h=[],d=[],p=[],f=this._elementsBoundingSphereRadius,m=e.getScaledKnots(this._sceneScale),v=e.getScaledNextHandlers(this._sceneScale),g=e.getScaledPreviousHandlers(this._sceneScale),_=[];for(i=0;a>i;i++)if(t=c[0],h=e.directedPlaneBezierIntersection(o-t[0]*f,l-t[1]*f,u-t[2]*f,c[0],m[i],v[i],g[i+1],m[i+1]),h.length&&(t=c[1],d=e.directedPlaneBezierIntersection(o-t[0]*f,l-t[1]*f,u-t[2]*f,c[1],m[i],v[i],g[i+1],m[i+1]),d.length&&(n=this._segmentsIntersection(h,d),n.length&&(t=c[2],h=e.directedPlaneBezierIntersection(o-t[0]*f,l-t[1]*f,u-t[2]*f,c[2],m[i],v[i],g[i+1],m[i+1]),n=this._segmentsIntersection(h,n),n.length))))for(t=c[3],h=e.directedPlaneBezierIntersection(o-t[0]*f,l-t[1]*f,u-t[2]*f,c[3],m[i],v[i],g[i+1],m[i+1]),n=this._segmentsIntersection(h,n),r=0;n.length>r;r++)p.push([i,n[r][0],n[r][1]]);var b,y,w,E,P,S,T,C=e._densities;for(i=0;p.length>i;i++)b=C[p[i][0]],y=C[p[i][0]+1],w=p[i][0]?e._densitySummation[p[i][0]-1]:0,E=p[i][1],P=p[i][2],S=.5*(y-b)*E*E+E*b+w,T=.5*(y-b)*P*P+P*b+w,_.push([S,T]);return _}},_determineCssPrefixedProperties:{value:function(){"webkitTransform"in this.element.style?(this._transform="webkitTransform",this._transformCss="-webkit-transform",this._transformPerspective="webkitPerspective"):"MozTransform"in this.element.style?(this._transform="MozTransform",this._transformCss="-moz-transform",this._transformPerspective="MozPerspective"):"msTransform"in this.element.style?(this._transform="msTransform",this._transformCss="-ms-transform",this._transformPerspective="msPerspective"):(this._transform="transform",this._transformPerspective="perspective")}},_isListeningToResize:{value:!0},isListeningToResize:{get:function(){return this._isListeningToResize},set:function(e){var t=!!e;this._isListeningToResize!==t&&(this._isListeningToResize=t,this._isListeningToResize?window.addEventListener("resize",this,!1):window.removeEventListener("resize",this,!1))}},_needsClearVisibleIndexes:{value:!1},handleResize:{value:function(){this._isCameraUpdated=!0,this._needsComputeVisibleRange=!0,this.needsDraw=!0,this._needsClearVisibleIndexes=!0}},enterDocument:{value:function(e){e&&(this._determineCssPrefixedProperties(),this._repetition.addRangeAtPathChangeListener("selectedIterations",this,"_handleSelectedIndexesChange"))}},_updateVisibleIndexes:{value:function(e,t){var n,i,r=this._visibleIndexes,a=r&&!isNaN(r.length)?r.length:0,s=[];for(this._needsClearVisibleIndexes&&(this._visibleIndexes.splice(e.length,1/0),this._needsClearVisibleIndexes=!1),i=0;a>i;i++)"number"==typeof t[r[i]]?e[t[r[i]]]=null:s.push(i);for(i=n=0;s.length>n&&e.length>i;i++)null!==e[i]&&(r.set(s[n],e[i]),n++);for(n=a;e.length>i;i++)null!==e[i]&&(r.set(n,e[i]),n++)}},_needsComputeVisibleRange:{value:!0},_previousVisibleRanges:{value:null},viewportWidth:{get:function(){return this._width},set:function(e){this._width!==e&&(this._width=e,this._needsComputeVisibleRange=!0)}},viewportHeight:{get:function(){return this._height},set:function(e){this._height!==e&&(this._height=e,this._needsComputeVisibleRange=!0)}},_firstIterationWidth:{value:1},_firstIterationHeight:{value:1},firstIterationWidth:{get:function(){return this._firstIterationWidth},set:function(e){e!==this._firstIterationWidth&&(this._firstIterationWidth=e,this._needsComputeVisibleRange=!0,this._needsClearVisibleIndexes=!0)}},firstIterationHeight:{get:function(){return this._firstIterationHeight},set:function(e){e!==this._firstIterationHeight&&(this._firstIterationHeight=e,this._needsComputeVisibleRange=!0,this._needsClearVisibleIndexes=!0)}},_firstIterationOffsetLeft:{value:0},_firstIterationOffsetTop:{value:0},willDraw:{value:function(e){var t,n,i,r,a,s,o,l,u,c,h,d=[],p={},f=this._paths,m=f.length,v=this.splinePaths;if(this.viewportWidth=this._element.clientWidth,this.viewportHeight=this._element.clientHeight,this.__firstIteration){var g=this.__firstIteration.firstElement.children[0];if(0!==g.offsetWidth&&0!==g.offsetHeight&&(this.firstIterationWidth=g.offsetWidth,this.firstIterationHeight=g.offsetHeight,this._firstIterationOffsetLeft=g.offsetLeft,this._firstIterationOffsetTop=g.offsetTop,!this._boundingBoxSize)){var _=Math.max(Math.abs(this._firstIterationWidth+this._firstIterationOffsetLeft),Math.abs(this._firstIterationOffsetLeft)),b=Math.max(Math.abs(this._firstIterationHeight+this._firstIterationOffsetTop),Math.abs(this._firstIterationOffsetTop));this._elementsBoundingSphereRadius=Math.sqrt(_*_+b*b)}}this._isTransitioningScroll&&(c=(Date.now()-this._scrollingStartTime)/this._scrollingTransitionDurationMiliseconds,h=this._computeCssCubicBezierValue(c,this._scrollingTransitionTimingFunctionBezier),1>c?this.scroll=this._scrollingOrigin+(this._scrollingDestination-this._scrollingOrigin)*h:(this.scroll=this._scrollingDestination,this._isTransitioningScroll=!1,this._needsToCallDidTranslateEndDelegate=!0));var y,w,E,P,S,c=e,u=6,T=this.lastDrawTime?.018*(c-this.lastDrawTime)*this._elasticScrollingSpeed:0,C=1-T/u,M=this._minSlideOffsetIndex,D=this._maxSlideOffsetIndex;if(this.lastDrawTime=c,this._hasElasticScrolling)for(r=0;u>r;r++){for(i=this._draggedSlideIndex-1;i>=M;i--)y=this._getSlideOffset(i),w=this._getSlideOffset(i+1),E=(y-w)*C+w,E>0&&(E=0),this._updateSlideOffset(i,E);for(i=this._draggedSlideIndex+1;D>=i;i++)y=this._getSlideOffset(i),w=this._getSlideOffset(i-1),E=(y-w)*C+w,0>E&&(E=0),this._updateSlideOffset(i,E)}if(v.length){for(o=this._numberOfIterations%m,l=(this._numberOfIterations-o)/m,this._needsComputeVisibleRange&&(this._previousVisibleRanges=[]),a=0;m>a;a++)for(u=l+(o>a?1:0),this._needsComputeVisibleRange?(t=this._computeVisibleRange(v[a]),this._previousVisibleRanges[a]=t,v[a]._computeDensitySummation()):t=this._previousVisibleRanges[a],s=this._scroll-f[a].headOffset,i=0;t.length>i;i++){for(S=u/2,r=S;S>=1;)n=(0|r)*m+a,P=(0|r)+this._getSlideOffset(n)-s,S/=2,P>=t[i][0]?r-=S:r+=S;r=0|r-1,0>r&&(r=0);do n=r*m+a,P=r+this._getSlideOffset(n)-s,P>=t[i][0]&&t[i][1]>=P&&p[n]===void 0&&(p[n]=d.length,d.push(n)),r++;while(t[i][1]>=P&&u>r)}this._needsComputeVisibleRange=!1}this._updateVisibleIndexes(d,p)}},draw:{value:function(){var e,t,n,i,r,a,s,o,l,u,c=this._repetition._drawnIterations.length,h=(this._paths.length,this._visibleIndexes,this._viewpointPosition),d=this._viewpointTargetPoint;if(this._isTransitioningScroll&&(this.needsDraw=!0),this._isCameraUpdated){if(this._isCameraEnabled){var p,f,m=.5*Math.tan((90-.5*this._viewpointFov)*this._doublePI/360)*this._height,v=d[0]-h[0],g=d[1]-h[1],_=d[2]-h[2],b=Math.atan2(-v,-_);p=v*-Math.sin(-b)+_*Math.cos(-b),f=Math.atan2(-g,-p),this._element.style[this._transformPerspective]=m+"px",this._cameraElement.style[this._transform]="translate3d(0,0,"+m+"px)rotateX("+f+"rad)rotateY("+-b+"rad)"+"translate3d("+-h[0]+"px,"+-h[1]+"px,"+-h[2]+"px)",this._element.classList.remove("camera-disabled")}else this._element.style[this._transformPerspective]=this._perspective+"px",this._cameraElement.style[this._transform]="translate3d("+(.5*this._width-h[0])+"px, "+(.5*this._height-h[1])+"px,0)",this._element.classList.add("camera-disabled");this._isCameraUpdated=!1}if(this.splinePaths.length)for(e=0;c>e;e++)u=this.offset(this._visibleIndexes[e]),a=u.pathIndex,t=u.slideTime,o=this._splinePaths[a]._convertSplineTimeToBezierIndexTime(t),n=this._repetition._drawnIterations[e],i=n.cachedFirstElement||n.firstElement,null!==o?((r=i.children[0])&&(i.classList.contains("selected")?r.classList.add("selected"):r.classList.remove("selected"),i.classList.contains("active")?r.classList.add("active"):r.classList.remove("active")),s=this._splinePaths[a].getPositionAtIndexTime(o,this._sceneScale),l=this._splinePaths[a].getRotationAtIndexTime(o),i.setAttribute("style",this._transformCss+":translate3d("+1e-5*(1e5*s[0]>>0)+"px,"+1e-5*(1e5*s[1]>>0)+"px,"+1e-5*(1e5*s[2]>>0)+"px)"+(l[2]?"rotateZ("+1e-5*(1e5*l[2]>>0)+"rad)":"")+(l[1]?"rotateY("+1e-5*(1e5*l[1]>>0)+"rad)":"")+(l[0]?"rotateX("+1e-5*(1e5*l[0]>>0)+"rad)":"")+";"+this._splinePaths[a].getStyleAtIndexTime(o))):i.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");else for(e=0;c>e;e++)n=this._repetition._drawnIterations[e],i=n.cachedFirstElement||n.firstElement,i.setAttribute("style",this._transformCss+":scale3d(0,0,0);opacity:0");this._slideOffsetsLength&&(this.needsDraw=!0),this._needsToCallDidTranslateEndDelegate&&(this._needsToCallDidTranslateEndDelegate=!1,this.callDelegateMethod("didTranslateEnd",this))}},_updateLength:{value:function(){if(this._paths){var e,t,n,i,r,a,s=this._paths.length,o=0;if(s>0){for(r=this._numberOfIterations%s,i=(this._numberOfIterations-r)/s,a=0;s>a;a++)e=this._paths[a],t=i+(r>a?1:0),n=t-e.tailOffset+e.headOffset-1,n>o&&(o=n);this.length=o}this.needsDraw=!0}}},_numberOfIterations:{value:0},handle_numberOfIterationsChange:{value:function(){this._updateLength()}},content:{get:function(){return this.getPath("contentController.content")},set:function(e){this.contentController=(new a).initWithContent(e)}},contentController:{value:null},isSelectionEnabled:{value:null},selectedIndexes:{serializable:!1,value:null},activeIndexes:{serializable:!1,value:null},observeProperty:{value:function(e,t,n){return"currentIteration"!==e&&"objectAtCurrentIteration"!==e&&"contentAtCurrentIteration"!==e?i(this,e,t,n):(s(e,":iteration.object"),this._repetition?this._repetition.observeProperty(e,t,n):void 0)}},templateDidLoad:{value:function(){var e=this;this._repetition.willDraw=function(){e.needsDraw=!0}}},_length:{value:0},length:{get:function(){return this._length},set:function(e){this._length=0>e?0:e}},_scroll:{value:0},_elasticScrollingRange:{value:20},_hasElasticScrolling:{value:!1},hasElasticScrolling:{get:function(){return this._hasElasticScrolling},set:function(e){this._hasElasticScrolling=e?!0:!1}},_slideOffsets:{value:null},_slideOffsetsLength:{value:0},_maxSlideOffsetIndex:{value:-1},_minSlideOffsetIndex:{value:2e9},_updateSlideOffset:{value:function(e,t){var n=1e-4;e>=0&&(-n>t||t>n?(this._slideOffsets[e]===void 0&&(this._slideOffsetsLength++,this._minSlideOffsetIndex>e&&(this._minSlideOffsetIndex=e),e>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=e)),this._slideOffsets[e]=t):this._removeSlideOffset(e))}},_incrementSlideOffset:{value:function(e,t){this._updateSlideOffset(e,this._getSlideOffset(e)+t)}},_removeSlideOffset:{value:function(e){if(this._slideOffsets[e]!==void 0){var t,n,i;if(delete this._slideOffsets[e],this._slideOffsetsLength--,e===this._minSlideOffsetIndex)for(t=Object.keys(this._slideOffsets),this._minSlideOffsetIndex=2e9,n=0;t.length>n;n++)i=0|t[n],this._minSlideOffsetIndex>i&&(this._minSlideOffsetIndex=i);if(e===this._maxSlideOffsetIndex)for(t===void 0&&(t=Object.keys(this._slideOffsets)),this._maxSlideOffsetIndex=-1,n=0;t.length>n;n++)i=0|t[n],i>this._maxSlideOffsetIndex&&(this._maxSlideOffsetIndex=i)}}},_getSlideOffset:{value:function(e){return this._minSlideOffsetIndex>e?e=this._minSlideOffsetIndex>this._draggedSlideIndex?this._draggedSlideIndex:this._minSlideOffsetIndex:e>this._maxSlideOffsetIndex&&(e=this._maxSlideOffsetIndex<this._draggedSlideIndex?this._draggedSlideIndex:this._maxSlideOffsetIndex),this._slideOffsets[e]!==void 0?this._slideOffsets[e]:0}},scroll:{get:function(){return this._scroll},set:function(e){if(0>e&&(e=0),e>this.length&&(e=this.length),this._hasElasticScrolling&&null!==this._draggedSlideIndex){var t,n,i=this._draggedSlideIndex-this._elasticScrollingRange,r=this._draggedSlideIndex+this._elasticScrollingRange;for(i>this._minSlideOffsetIndex&&(i=this._minSlideOffsetIndex),this._maxSlideOffsetIndex>r&&(r=this._maxSlideOffsetIndex),n=e-this._scroll,0>i&&(i=0),t=i;r>=t;t++)t!==this._draggedSlideIndex?this._incrementSlideOffset(t,n):this._removeSlideOffset(t);this._scroll=e}else this._scroll=e;this.needsDraw=!0}},previousStride:{value:function(){var e=Math.round(this.scroll/this.stride),t=(e-1)*this.stride;this.startScrollingIndexToOffset(0,-t)}},nextStride:{value:function(){var e=Math.round(this.scroll/this.stride),t=(e+1)*this.stride;this.startScrollingIndexToOffset(0,-t)}},_isInputEnabled:{value:!0},isInputEnabled:{get:function(){return this._isInputEnabled},set:function(e){this._isInputEnabled=e?!0:!1}},_draggedSlideIndex:{value:0},draggedSlideIndex:{get:function(){return this._draggedSlideIndex},set:function(e){if(e!==this._draggedSlideIndex){if(null!==e){var t,n=this._getSlideOffset(e),i=this._minSlideOffsetIndex,r=this._maxSlideOffsetIndex;for(this._incrementSlideOffset(this._draggedSlideIndex,-n),t=i;r>=t;t++)t!==this._draggedSlideIndex&&this._incrementSlideOffset(t,-n);this._removeSlideOffset(e),this._scroll-=n,this._flowTranslateComposer._scroll=this._scroll}this._draggedSlideIndex=e,this.needsDraw=!0}}},_elasticScrollingSpeed:{value:1},elasticScrollingSpeed:{get:function(){return this._elasticScrollingSpeed},set:function(e){this._elasticScrollingSpeed=parseFloat(e)}},lastDrawTime:{value:null},offset:{enumerable:!1,value:function(e){var t=this._paths.length,n=e%t,i=Math.floor(e/t)-this._scroll+this._paths[n].headOffset;return{pathIndex:n,slideTime:i+this._getSlideOffset(e)}}},serializeSelf:{value:function(e){e.setAllProperties();for(var t,n=this.originalContent,i=0;t=n[i];i++)t.component&&e.addObject(t.component)}}})}});