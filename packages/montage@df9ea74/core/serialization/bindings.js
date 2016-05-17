var Bindings=require("frb"),stringify=require("frb/stringify"),expand=require("frb/expand"),Scope=require("frb/scope"),Serializer=require("core/serialization/serializer/montage-serializer").MontageSerializer,Deserializer=require("core/serialization/deserializer/montage-deserializer").MontageDeserializer;Serializer.defineSerializationUnit("bindings",function(e,t){var n,r=Bindings.getBindings(t),i={};for(var a in r){var o=r[a],s={};if(!("serializable"in o)||o.serializable){var l=o.sourcePath,u=o.sourceSyntax;if(o.source!==t){var c=e.getObjectLabel(o.source),d=new Scope({type:"component",label:c});d.components=e,u=expand(u,d)}var d=new Scope;d.components=e,l=stringify(u,d),o.twoWay?s["<->"]=l:s["<-"]=l,o.converter?s.converter=o.converter:(s.convert=o.convert,s.revert=o.revert),o.trace&&(s.trace=!0),i[a]=s,n=!0}}return n?i:void 0}),Deserializer.defineDeserializationUnit("bindings",function(e,t,n){for(var r in n){var i=n[r];if("object"!=typeof i)throw Error("Binding descriptor must be an object, not "+typeof i);"boundObject"in i?(i.source=e.getObjectByLabel(i.boundObject),i.oneway?i["<-"]=i.boundPropertyPath:i["<->"]=i.boundPropertyPath,delete i.boundObject,delete i.boundObjectPropertyPath,delete i.oneway):i["<<->"]&&(console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now."),i["<->"]=i["<<->"],delete i["<<->"])}Bindings.defineBindings(t,n,{components:e})});