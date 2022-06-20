goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16125,res){
var map__16126 = p__16125;
var map__16126__$1 = cljs.core.__destructure_map(map__16126);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16131 = res;
var G__16131__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16131,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16131);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16131__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16131__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16137 = arguments.length;
switch (G__16137) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16143,msg,handlers,timeout_after_ms){
var map__16144 = p__16143;
var map__16144__$1 = cljs.core.__destructure_map(map__16144);
var runtime = map__16144__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16144__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___16425 = arguments.length;
var i__5767__auto___16426 = (0);
while(true){
if((i__5767__auto___16426 < len__5766__auto___16425)){
args__5772__auto__.push((arguments[i__5767__auto___16426]));

var G__16428 = (i__5767__auto___16426 + (1));
i__5767__auto___16426 = G__16428;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16154,ev,args){
var map__16155 = p__16154;
var map__16155__$1 = cljs.core.__destructure_map(map__16155);
var runtime = map__16155__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16155__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16156 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16162 = null;
var count__16163 = (0);
var i__16164 = (0);
while(true){
if((i__16164 < count__16163)){
var ext = chunk__16162.cljs$core$IIndexed$_nth$arity$2(null,i__16164);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16433 = seq__16156;
var G__16434 = chunk__16162;
var G__16435 = count__16163;
var G__16436 = (i__16164 + (1));
seq__16156 = G__16433;
chunk__16162 = G__16434;
count__16163 = G__16435;
i__16164 = G__16436;
continue;
} else {
var G__16437 = seq__16156;
var G__16438 = chunk__16162;
var G__16439 = count__16163;
var G__16440 = (i__16164 + (1));
seq__16156 = G__16437;
chunk__16162 = G__16438;
count__16163 = G__16439;
i__16164 = G__16440;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16156);
if(temp__5804__auto__){
var seq__16156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16156__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16156__$1);
var G__16441 = cljs.core.chunk_rest(seq__16156__$1);
var G__16442 = c__5565__auto__;
var G__16443 = cljs.core.count(c__5565__auto__);
var G__16444 = (0);
seq__16156 = G__16441;
chunk__16162 = G__16442;
count__16163 = G__16443;
i__16164 = G__16444;
continue;
} else {
var ext = cljs.core.first(seq__16156__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16446 = cljs.core.next(seq__16156__$1);
var G__16447 = null;
var G__16448 = (0);
var G__16449 = (0);
seq__16156 = G__16446;
chunk__16162 = G__16447;
count__16163 = G__16448;
i__16164 = G__16449;
continue;
} else {
var G__16450 = cljs.core.next(seq__16156__$1);
var G__16451 = null;
var G__16452 = (0);
var G__16453 = (0);
seq__16156 = G__16450;
chunk__16162 = G__16451;
count__16163 = G__16452;
i__16164 = G__16453;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16148){
var G__16149 = cljs.core.first(seq16148);
var seq16148__$1 = cljs.core.next(seq16148);
var G__16150 = cljs.core.first(seq16148__$1);
var seq16148__$2 = cljs.core.next(seq16148__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16149,G__16150,seq16148__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16184,p__16185){
var map__16186 = p__16184;
var map__16186__$1 = cljs.core.__destructure_map(map__16186);
var runtime = map__16186__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16187 = p__16185;
var map__16187__$1 = cljs.core.__destructure_map(map__16187);
var msg = map__16187__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16187__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16190 = cljs.core.deref(state_ref);
var map__16190__$1 = cljs.core.__destructure_map(map__16190);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16190__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16190__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16226){
var map__16227 = p__16226;
var map__16227__$1 = cljs.core.__destructure_map(map__16227);
var runtime = map__16227__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16227__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16234,msg){
var map__16237 = p__16234;
var map__16237__$1 = cljs.core.__destructure_map(map__16237);
var runtime = map__16237__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16287,key,p__16288){
var map__16289 = p__16287;
var map__16289__$1 = cljs.core.__destructure_map(map__16289);
var state = map__16289__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16289__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16290 = p__16288;
var map__16290__$1 = cljs.core.__destructure_map(map__16290);
var spec = map__16290__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16290__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16295,key,spec){
var map__16297 = p__16295;
var map__16297__$1 = cljs.core.__destructure_map(map__16297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16299_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16299_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16300_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16300_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16301_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16301_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16303_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16303_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16304_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16304_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16327,key){
var map__16329 = p__16327;
var map__16329__$1 = cljs.core.__destructure_map(map__16329);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16329__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16331,msg){
var map__16332 = p__16331;
var map__16332__$1 = cljs.core.__destructure_map(map__16332);
var runtime = map__16332__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16346,p__16347){
var map__16349 = p__16346;
var map__16349__$1 = cljs.core.__destructure_map(map__16349);
var runtime = map__16349__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16349__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16350 = p__16347;
var map__16350__$1 = cljs.core.__destructure_map(map__16350);
var msg = map__16350__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16350__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16350__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16357 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16359 = null;
var count__16360 = (0);
var i__16361 = (0);
while(true){
if((i__16361 < count__16360)){
var map__16378 = chunk__16359.cljs$core$IIndexed$_nth$arity$2(null,i__16361);
var map__16378__$1 = cljs.core.__destructure_map(map__16378);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16378__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16497 = seq__16357;
var G__16498 = chunk__16359;
var G__16499 = count__16360;
var G__16500 = (i__16361 + (1));
seq__16357 = G__16497;
chunk__16359 = G__16498;
count__16360 = G__16499;
i__16361 = G__16500;
continue;
} else {
var G__16501 = seq__16357;
var G__16502 = chunk__16359;
var G__16503 = count__16360;
var G__16504 = (i__16361 + (1));
seq__16357 = G__16501;
chunk__16359 = G__16502;
count__16360 = G__16503;
i__16361 = G__16504;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16357);
if(temp__5804__auto__){
var seq__16357__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16357__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__16357__$1);
var G__16512 = cljs.core.chunk_rest(seq__16357__$1);
var G__16513 = c__5565__auto__;
var G__16514 = cljs.core.count(c__5565__auto__);
var G__16515 = (0);
seq__16357 = G__16512;
chunk__16359 = G__16513;
count__16360 = G__16514;
i__16361 = G__16515;
continue;
} else {
var map__16384 = cljs.core.first(seq__16357__$1);
var map__16384__$1 = cljs.core.__destructure_map(map__16384);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16384__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16517 = cljs.core.next(seq__16357__$1);
var G__16518 = null;
var G__16519 = (0);
var G__16520 = (0);
seq__16357 = G__16517;
chunk__16359 = G__16518;
count__16360 = G__16519;
i__16361 = G__16520;
continue;
} else {
var G__16521 = cljs.core.next(seq__16357__$1);
var G__16522 = null;
var G__16523 = (0);
var G__16524 = (0);
seq__16357 = G__16521;
chunk__16359 = G__16522;
count__16360 = G__16523;
i__16361 = G__16524;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
