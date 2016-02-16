// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.meditations.creating_functions');
goog.require('cljs.core');
koans.meditations.creating_functions.koans = cljs.core.list("One may know what they seek by knowing what they do not seek",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__","__",-223697812)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-a-symbol?","not-a-symbol?",1231950944,null),cljs.core.list(new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null))], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"not-a-symbol?","not-a-symbol?",1231950944,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),"c"], null)))),"Praise and 'complement' may help you separate the wheat from the chaff",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wheat","wheat",783520466),"wheat",cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"wheat","wheat",-1870915303,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.Keyword(null,"__","__",-223697812)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"not-nil?","not-nil?",-91649533,null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"wheat","wheat",783520466),null,"wheat",null,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"wheat","wheat",-1870915303,null)),null], null)))),"Partial functions allow procrastination",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(20),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multiply-by-5","multiply-by-5",-1974252065,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"*","*",345799209,null),(5))], null),cljs.core.list(new cljs.core.Keyword(null,"__","__",-223697812)))),"Don't forget: first things first",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__","__",-223697812)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ab-adder","ab-adder",1097575179,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"ab-adder","ab-adder",1097575179,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__","__",-223697812)], null)))),"Functions can join forces as one 'composed' function",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(25),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inc-and-square","inc-and-square",1353379932,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null),cljs.core.list(new cljs.core.Symbol(null,"inc-and-square","inc-and-square",1353379932,null),new cljs.core.Keyword(null,"__","__",-223697812)))),"Have a go on a double dec-er",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"double-dec","double-dec",1189759338,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null))], null),cljs.core.list(new cljs.core.Symbol(null,"double-dec","double-dec",1189759338,null),(10)))),"Be careful about the order in which you mix your functions",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(99),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"square-and-dec","square-and-dec",-1383884875,null),new cljs.core.Keyword(null,"__","__",-223697812)], null),cljs.core.list(new cljs.core.Symbol(null,"square-and-dec","square-and-dec",-1383884875,null),(10)))));
koans.meditations.creating_functions.fns = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], null);

//# sourceMappingURL=creating_functions.js.map