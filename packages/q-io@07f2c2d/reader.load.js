montageDefine("07f2c2d","reader",{dependencies:["q"],factory:function(e,t,n){function r(e,t){function n(){var e;return e=t?c.join(""):i.constructor.join(c),c.splice(0,c.length),e}var i=Object.create(r.prototype);t&&e.setEncoding&&e.setEncoding(t);var a=o.defer(),s=o.defer();e.on("error",function(e){a.reject(e)});var l,c=[];return e.on("end",function(){a.resolve(i),s.resolve()}),e.on("data",function(e){a.resolve(i),l?l(e):c.push(e)}),i.read=function(){l=void 0;var e=o.defer();return o.done(s.promise,function(){e.resolve(n())}),e.promise},i.forEach=function(e){return c&&c.length&&e(n()),l=e,o.when(s.promise,function(){l=void 0})},i.close=function(){e.destroy()},i.node=e,a.promise}function i(e,t){var n=[];return e.forEach(function(e){n.push(e)}),t?n.join(""):a(n)}function a(e){var t,n,r,i,a=0,o=e.length;for(n=0;o>n;n++)r=e[n],a+=r.length;for(i=new Buffer(a),t=0,n=0;o>n;n++)r=e[n],r.copy(i,t,0),t+=r.length;return e.splice(0,o,i),i}var o=e("q");n.exports=r,r.read=i,r.join=a}});