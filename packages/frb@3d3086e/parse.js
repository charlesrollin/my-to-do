function parse(e,t){if(Array.isArray(e))return{type:"tuple",args:e.map(function(e){return parse(e,t)})};if(!t&&Object.prototype.hasOwnProperty.call(memo,e))return memo[e];try{var n=grammar.parse(e,t||Object.empty);return t||(memo[e]=n),n}catch(r){throw r.message=r.message.replace(/[\s\.]+$/,"")+" "+" on line "+r.line+" column "+r.column,r}}require("collections/shim");var grammar=require("./grammar"),memo={};module.exports=parse;