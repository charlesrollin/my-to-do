var Q=require("q"),Negotiate=require("./negotiate"),QS=require("qs"),URL=require("url2");exports.Content=function(e,t,n){return function(){return exports.content(e,t,n)}},exports.content=exports.ok=function(e,t,n){return n=n||200,e=e||"","string"==typeof e&&(e=[e]),t=t||"text/plain",{status:n,headers:{"content-type":t},body:e}},exports.ContentRequest=function(e){return function(t,n){return Q.when(t.body.read(),function(r){return e(r,t,n)})}},exports.Inspect=function(e){return Negotiate.Method({GET:function(t,n){return Q.when(e(t,n),function(e){return{status:200,headers:{"content-type":"text/plain"},body:[inspect(e)]}})}})},exports.ParseQuery=function(e){return function(t,n){return t.query=QS.parse(URL.parse(t.url).query||""),e(t,n)}};