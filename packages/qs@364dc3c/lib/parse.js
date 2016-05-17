var Utils=require("./utils"),internals={delimiter:"&",depth:5,arrayLimit:20,parametersLimit:1e3};internals.parseValues=function(e,t){t="string"==typeof t?t:internals.delimiter;for(var n={},r=e.split(t,internals.parametersLimit),i=0,a=r.length;a>i;++i){var s=r[i],o=-1===s.indexOf("]=")?s.indexOf("="):s.indexOf("]=")+1;if(-1===o)n[Utils.decode(s)]="";else{var l=Utils.decode(s.slice(0,o)),c=Utils.decode(s.slice(o+1));n[l]=n[l]?[].concat(n[l]).concat(c):c}}return n},internals.parseObject=function(e,t){if(!e.length)return t;var n=e.shift(),r={};if("[]"===n)r=[],r=r.concat(internals.parseObject(e,t));else{var i="["===n[0]&&"]"===n[n.length-1]?n.slice(1,n.length-1):n,a=parseInt(i,10);!isNaN(a)&&n!==i&&internals.arrayLimit>=a?(r=[],r[a]=internals.parseObject(e,t)):r[i]=internals.parseObject(e,t)}return r},internals.parseKeys=function(e,t,n){if(e){var r=/^([^\[\]]*)/,i=/(\[[^\[\]]*\])/g,a=r.exec(e);if(!Object.prototype.hasOwnProperty(a[1])){var s=[];a[1]&&s.push(a[1]);for(var o=0;null!==(a=i.exec(e))&&n>o;)++o,Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))||s.push(a[1]);return a&&s.push("["+e.slice(a.index)+"]"),internals.parseObject(s,t)}}},module.exports=function(e,t,n){if(""===e||null===e||e===void 0)return{};"number"!=typeof t&&(n=t,t=internals.depth);var r="string"==typeof e?internals.parseValues(e,n):Utils.clone(e),i={};for(var a in r)if(r.hasOwnProperty(a)){var s=internals.parseKeys(a,r[a],t);i=Utils.merge(i,s)}return Utils.compact(i)};