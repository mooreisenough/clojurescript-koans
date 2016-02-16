// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.meditations.datatypes');
goog.require('cljs.core');
koans.meditations.datatypes.koans = cljs.core.list("Holding records is meaningful only when the record is worthy of you",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",-2147369496),cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",-200523960,null),"peace"))),"Types are quite similar",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,".prize",".prize",297104100,null),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",-375847400,null),"literature"))),"Records may be treated like maps",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",-2147369496),cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",-200523960,null),"physics"))),"While types may not",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Keyword(null,"prize","prize",-2147369496),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",-375847400,null),"poetry"))),"Further study reveals why",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"Nobel.","Nobel.",-200523960,null),"chemistry"),cljs.core.list(new cljs.core.Symbol(null,"Pulitzer.","Pulitzer.",-375847400,null),"music")], null))),"Either sort of datatype can define methods in a protocol",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),cljs.core.list(new cljs.core.Symbol(null,"present","present",415886062,null),cljs.core.list(new cljs.core.Symbol(null,"Oscar.","Oscar.",-1905199048,null),"Best Picture"),"Evil Alien Conquerors"))));
koans.meditations.datatypes.fns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),new cljs.core.Symbol(null,"Nobel","Nobel",635957473,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prize","prize",-506837969,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"Pulitzer","Pulitzer",311982635,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"prize","prize",-506837969,null)], null)),"(defprotocol Award\n    (present [this recipient]))","(defrecord Oscar [category]\n    Award\n    (present [this recipient]\n      (print (str \"Congratulations on your \"\n                  (:category this) \" Oscar, \"\n                  recipient\n                  \"!\"))))","(deftype Razzie [category]\n    Award\n    (present [this recipient]\n      :__))"], null);

//# sourceMappingURL=datatypes.js.map