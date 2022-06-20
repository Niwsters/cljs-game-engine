goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___21080 = arguments.length;
var i__5767__auto___21081 = (0);
while(true){
if((i__5767__auto___21081 < len__5766__auto___21080)){
args__5772__auto__.push((arguments[i__5767__auto___21081]));

var G__21082 = (i__5767__auto___21081 + (1));
i__5767__auto___21081 = G__21082;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20798){
var G__20799 = cljs.core.first(seq20798);
var seq20798__$1 = cljs.core.next(seq20798);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20799,seq20798__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20802 = cljs.core.seq(sources);
var chunk__20803 = null;
var count__20804 = (0);
var i__20805 = (0);
while(true){
if((i__20805 < count__20804)){
var map__20810 = chunk__20803.cljs$core$IIndexed$_nth$arity$2(null,i__20805);
var map__20810__$1 = cljs.core.__destructure_map(map__20810);
var src = map__20810__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20810__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20810__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20810__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20810__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20811){var e_21083 = e20811;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21083);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21083.message)].join('')));
}

var G__21084 = seq__20802;
var G__21085 = chunk__20803;
var G__21086 = count__20804;
var G__21087 = (i__20805 + (1));
seq__20802 = G__21084;
chunk__20803 = G__21085;
count__20804 = G__21086;
i__20805 = G__21087;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20802);
if(temp__5804__auto__){
var seq__20802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20802__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20802__$1);
var G__21088 = cljs.core.chunk_rest(seq__20802__$1);
var G__21089 = c__5565__auto__;
var G__21090 = cljs.core.count(c__5565__auto__);
var G__21091 = (0);
seq__20802 = G__21088;
chunk__20803 = G__21089;
count__20804 = G__21090;
i__20805 = G__21091;
continue;
} else {
var map__20812 = cljs.core.first(seq__20802__$1);
var map__20812__$1 = cljs.core.__destructure_map(map__20812);
var src = map__20812__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20813){var e_21092 = e20813;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21092);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21092.message)].join('')));
}

var G__21093 = cljs.core.next(seq__20802__$1);
var G__21094 = null;
var G__21095 = (0);
var G__21096 = (0);
seq__20802 = G__21093;
chunk__20803 = G__21094;
count__20804 = G__21095;
i__20805 = G__21096;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20814 = cljs.core.seq(js_requires);
var chunk__20815 = null;
var count__20816 = (0);
var i__20817 = (0);
while(true){
if((i__20817 < count__20816)){
var js_ns = chunk__20815.cljs$core$IIndexed$_nth$arity$2(null,i__20817);
var require_str_21097 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21097);


var G__21098 = seq__20814;
var G__21099 = chunk__20815;
var G__21100 = count__20816;
var G__21101 = (i__20817 + (1));
seq__20814 = G__21098;
chunk__20815 = G__21099;
count__20816 = G__21100;
i__20817 = G__21101;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20814);
if(temp__5804__auto__){
var seq__20814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20814__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20814__$1);
var G__21102 = cljs.core.chunk_rest(seq__20814__$1);
var G__21103 = c__5565__auto__;
var G__21104 = cljs.core.count(c__5565__auto__);
var G__21105 = (0);
seq__20814 = G__21102;
chunk__20815 = G__21103;
count__20816 = G__21104;
i__20817 = G__21105;
continue;
} else {
var js_ns = cljs.core.first(seq__20814__$1);
var require_str_21106 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21106);


var G__21107 = cljs.core.next(seq__20814__$1);
var G__21108 = null;
var G__21109 = (0);
var G__21110 = (0);
seq__20814 = G__21107;
chunk__20815 = G__21108;
count__20816 = G__21109;
i__20817 = G__21110;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20819){
var map__20820 = p__20819;
var map__20820__$1 = cljs.core.__destructure_map(map__20820);
var msg = map__20820__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20820__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20820__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20821(s__20822){
return (new cljs.core.LazySeq(null,(function (){
var s__20822__$1 = s__20822;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20822__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20827 = cljs.core.first(xs__6360__auto__);
var map__20827__$1 = cljs.core.__destructure_map(map__20827);
var src = map__20827__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__20822__$1,map__20827,map__20827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20820,map__20820__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20821_$_iter__20823(s__20824){
return (new cljs.core.LazySeq(null,((function (s__20822__$1,map__20827,map__20827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20820,map__20820__$1,msg,info,reload_info){
return (function (){
var s__20824__$1 = s__20824;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20824__$1);
if(temp__5804__auto____$1){
var s__20824__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20824__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__20824__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__20826 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__20825 = (0);
while(true){
if((i__20825 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__20825);
cljs.core.chunk_append(b__20826,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21111 = (i__20825 + (1));
i__20825 = G__21111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20826),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20821_$_iter__20823(cljs.core.chunk_rest(s__20824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20826),null);
}
} else {
var warning = cljs.core.first(s__20824__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20821_$_iter__20823(cljs.core.rest(s__20824__$2)));
}
} else {
return null;
}
break;
}
});})(s__20822__$1,map__20827,map__20827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20820,map__20820__$1,msg,info,reload_info))
,null,null));
});})(s__20822__$1,map__20827,map__20827__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20820,map__20820__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20821(cljs.core.rest(s__20822__$1)));
} else {
var G__21112 = cljs.core.rest(s__20822__$1);
s__20822__$1 = G__21112;
continue;
}
} else {
var G__21113 = cljs.core.rest(s__20822__$1);
s__20822__$1 = G__21113;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20828_21114 = cljs.core.seq(warnings);
var chunk__20829_21115 = null;
var count__20830_21116 = (0);
var i__20831_21117 = (0);
while(true){
if((i__20831_21117 < count__20830_21116)){
var map__20834_21118 = chunk__20829_21115.cljs$core$IIndexed$_nth$arity$2(null,i__20831_21117);
var map__20834_21119__$1 = cljs.core.__destructure_map(map__20834_21118);
var w_21120 = map__20834_21119__$1;
var msg_21121__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834_21119__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834_21119__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834_21119__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834_21119__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21124)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21122),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21123),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21121__$1)].join(''));


var G__21125 = seq__20828_21114;
var G__21126 = chunk__20829_21115;
var G__21127 = count__20830_21116;
var G__21128 = (i__20831_21117 + (1));
seq__20828_21114 = G__21125;
chunk__20829_21115 = G__21126;
count__20830_21116 = G__21127;
i__20831_21117 = G__21128;
continue;
} else {
var temp__5804__auto___21129 = cljs.core.seq(seq__20828_21114);
if(temp__5804__auto___21129){
var seq__20828_21130__$1 = temp__5804__auto___21129;
if(cljs.core.chunked_seq_QMARK_(seq__20828_21130__$1)){
var c__5565__auto___21131 = cljs.core.chunk_first(seq__20828_21130__$1);
var G__21132 = cljs.core.chunk_rest(seq__20828_21130__$1);
var G__21133 = c__5565__auto___21131;
var G__21134 = cljs.core.count(c__5565__auto___21131);
var G__21135 = (0);
seq__20828_21114 = G__21132;
chunk__20829_21115 = G__21133;
count__20830_21116 = G__21134;
i__20831_21117 = G__21135;
continue;
} else {
var map__20835_21136 = cljs.core.first(seq__20828_21130__$1);
var map__20835_21137__$1 = cljs.core.__destructure_map(map__20835_21136);
var w_21138 = map__20835_21137__$1;
var msg_21139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21137__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21142)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21140),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21141),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21139__$1)].join(''));


var G__21143 = cljs.core.next(seq__20828_21130__$1);
var G__21144 = null;
var G__21145 = (0);
var G__21146 = (0);
seq__20828_21114 = G__21143;
chunk__20829_21115 = G__21144;
count__20830_21116 = G__21145;
i__20831_21117 = G__21146;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20818_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20818_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20836){
var map__20837 = p__20836;
var map__20837__$1 = cljs.core.__destructure_map(map__20837);
var msg = map__20837__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20838 = cljs.core.seq(updates);
var chunk__20840 = null;
var count__20841 = (0);
var i__20842 = (0);
while(true){
if((i__20842 < count__20841)){
var path = chunk__20840.cljs$core$IIndexed$_nth$arity$2(null,i__20842);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20952_21147 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20956_21148 = null;
var count__20957_21149 = (0);
var i__20958_21150 = (0);
while(true){
if((i__20958_21150 < count__20957_21149)){
var node_21151 = chunk__20956_21148.cljs$core$IIndexed$_nth$arity$2(null,i__20958_21150);
if(cljs.core.not(node_21151.shadow$old)){
var path_match_21152 = shadow.cljs.devtools.client.browser.match_paths(node_21151.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21152)){
var new_link_21153 = (function (){var G__20984 = node_21151.cloneNode(true);
G__20984.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21152),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20984;
})();
(node_21151.shadow$old = true);

(new_link_21153.onload = ((function (seq__20952_21147,chunk__20956_21148,count__20957_21149,i__20958_21150,seq__20838,chunk__20840,count__20841,i__20842,new_link_21153,path_match_21152,node_21151,path,map__20837,map__20837__$1,msg,updates,reload_info){
return (function (e){
var seq__20985_21154 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20987_21155 = null;
var count__20988_21156 = (0);
var i__20989_21157 = (0);
while(true){
if((i__20989_21157 < count__20988_21156)){
var map__20993_21158 = chunk__20987_21155.cljs$core$IIndexed$_nth$arity$2(null,i__20989_21157);
var map__20993_21159__$1 = cljs.core.__destructure_map(map__20993_21158);
var task_21160 = map__20993_21159__$1;
var fn_str_21161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993_21159__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993_21159__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21163 = goog.getObjectByName(fn_str_21161,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21162)].join(''));

(fn_obj_21163.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21163.cljs$core$IFn$_invoke$arity$2(path,new_link_21153) : fn_obj_21163.call(null,path,new_link_21153));


var G__21164 = seq__20985_21154;
var G__21165 = chunk__20987_21155;
var G__21166 = count__20988_21156;
var G__21167 = (i__20989_21157 + (1));
seq__20985_21154 = G__21164;
chunk__20987_21155 = G__21165;
count__20988_21156 = G__21166;
i__20989_21157 = G__21167;
continue;
} else {
var temp__5804__auto___21168 = cljs.core.seq(seq__20985_21154);
if(temp__5804__auto___21168){
var seq__20985_21169__$1 = temp__5804__auto___21168;
if(cljs.core.chunked_seq_QMARK_(seq__20985_21169__$1)){
var c__5565__auto___21170 = cljs.core.chunk_first(seq__20985_21169__$1);
var G__21171 = cljs.core.chunk_rest(seq__20985_21169__$1);
var G__21172 = c__5565__auto___21170;
var G__21173 = cljs.core.count(c__5565__auto___21170);
var G__21174 = (0);
seq__20985_21154 = G__21171;
chunk__20987_21155 = G__21172;
count__20988_21156 = G__21173;
i__20989_21157 = G__21174;
continue;
} else {
var map__20994_21175 = cljs.core.first(seq__20985_21169__$1);
var map__20994_21176__$1 = cljs.core.__destructure_map(map__20994_21175);
var task_21177 = map__20994_21176__$1;
var fn_str_21178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21176__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21176__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21180 = goog.getObjectByName(fn_str_21178,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21179)].join(''));

(fn_obj_21180.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21180.cljs$core$IFn$_invoke$arity$2(path,new_link_21153) : fn_obj_21180.call(null,path,new_link_21153));


var G__21181 = cljs.core.next(seq__20985_21169__$1);
var G__21182 = null;
var G__21183 = (0);
var G__21184 = (0);
seq__20985_21154 = G__21181;
chunk__20987_21155 = G__21182;
count__20988_21156 = G__21183;
i__20989_21157 = G__21184;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21151);
});})(seq__20952_21147,chunk__20956_21148,count__20957_21149,i__20958_21150,seq__20838,chunk__20840,count__20841,i__20842,new_link_21153,path_match_21152,node_21151,path,map__20837,map__20837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21152], 0));

goog.dom.insertSiblingAfter(new_link_21153,node_21151);


var G__21185 = seq__20952_21147;
var G__21186 = chunk__20956_21148;
var G__21187 = count__20957_21149;
var G__21188 = (i__20958_21150 + (1));
seq__20952_21147 = G__21185;
chunk__20956_21148 = G__21186;
count__20957_21149 = G__21187;
i__20958_21150 = G__21188;
continue;
} else {
var G__21189 = seq__20952_21147;
var G__21190 = chunk__20956_21148;
var G__21191 = count__20957_21149;
var G__21192 = (i__20958_21150 + (1));
seq__20952_21147 = G__21189;
chunk__20956_21148 = G__21190;
count__20957_21149 = G__21191;
i__20958_21150 = G__21192;
continue;
}
} else {
var G__21193 = seq__20952_21147;
var G__21194 = chunk__20956_21148;
var G__21195 = count__20957_21149;
var G__21196 = (i__20958_21150 + (1));
seq__20952_21147 = G__21193;
chunk__20956_21148 = G__21194;
count__20957_21149 = G__21195;
i__20958_21150 = G__21196;
continue;
}
} else {
var temp__5804__auto___21197 = cljs.core.seq(seq__20952_21147);
if(temp__5804__auto___21197){
var seq__20952_21198__$1 = temp__5804__auto___21197;
if(cljs.core.chunked_seq_QMARK_(seq__20952_21198__$1)){
var c__5565__auto___21199 = cljs.core.chunk_first(seq__20952_21198__$1);
var G__21200 = cljs.core.chunk_rest(seq__20952_21198__$1);
var G__21201 = c__5565__auto___21199;
var G__21202 = cljs.core.count(c__5565__auto___21199);
var G__21203 = (0);
seq__20952_21147 = G__21200;
chunk__20956_21148 = G__21201;
count__20957_21149 = G__21202;
i__20958_21150 = G__21203;
continue;
} else {
var node_21204 = cljs.core.first(seq__20952_21198__$1);
if(cljs.core.not(node_21204.shadow$old)){
var path_match_21205 = shadow.cljs.devtools.client.browser.match_paths(node_21204.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21205)){
var new_link_21206 = (function (){var G__20995 = node_21204.cloneNode(true);
G__20995.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21205),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20995;
})();
(node_21204.shadow$old = true);

(new_link_21206.onload = ((function (seq__20952_21147,chunk__20956_21148,count__20957_21149,i__20958_21150,seq__20838,chunk__20840,count__20841,i__20842,new_link_21206,path_match_21205,node_21204,seq__20952_21198__$1,temp__5804__auto___21197,path,map__20837,map__20837__$1,msg,updates,reload_info){
return (function (e){
var seq__20996_21207 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20998_21208 = null;
var count__20999_21209 = (0);
var i__21000_21210 = (0);
while(true){
if((i__21000_21210 < count__20999_21209)){
var map__21004_21211 = chunk__20998_21208.cljs$core$IIndexed$_nth$arity$2(null,i__21000_21210);
var map__21004_21212__$1 = cljs.core.__destructure_map(map__21004_21211);
var task_21213 = map__21004_21212__$1;
var fn_str_21214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004_21212__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21004_21212__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21216 = goog.getObjectByName(fn_str_21214,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21215)].join(''));

(fn_obj_21216.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21216.cljs$core$IFn$_invoke$arity$2(path,new_link_21206) : fn_obj_21216.call(null,path,new_link_21206));


var G__21217 = seq__20996_21207;
var G__21218 = chunk__20998_21208;
var G__21219 = count__20999_21209;
var G__21220 = (i__21000_21210 + (1));
seq__20996_21207 = G__21217;
chunk__20998_21208 = G__21218;
count__20999_21209 = G__21219;
i__21000_21210 = G__21220;
continue;
} else {
var temp__5804__auto___21221__$1 = cljs.core.seq(seq__20996_21207);
if(temp__5804__auto___21221__$1){
var seq__20996_21222__$1 = temp__5804__auto___21221__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20996_21222__$1)){
var c__5565__auto___21223 = cljs.core.chunk_first(seq__20996_21222__$1);
var G__21224 = cljs.core.chunk_rest(seq__20996_21222__$1);
var G__21225 = c__5565__auto___21223;
var G__21226 = cljs.core.count(c__5565__auto___21223);
var G__21227 = (0);
seq__20996_21207 = G__21224;
chunk__20998_21208 = G__21225;
count__20999_21209 = G__21226;
i__21000_21210 = G__21227;
continue;
} else {
var map__21005_21228 = cljs.core.first(seq__20996_21222__$1);
var map__21005_21229__$1 = cljs.core.__destructure_map(map__21005_21228);
var task_21230 = map__21005_21229__$1;
var fn_str_21231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005_21229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005_21229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21233 = goog.getObjectByName(fn_str_21231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21232)].join(''));

(fn_obj_21233.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21233.cljs$core$IFn$_invoke$arity$2(path,new_link_21206) : fn_obj_21233.call(null,path,new_link_21206));


var G__21234 = cljs.core.next(seq__20996_21222__$1);
var G__21235 = null;
var G__21236 = (0);
var G__21237 = (0);
seq__20996_21207 = G__21234;
chunk__20998_21208 = G__21235;
count__20999_21209 = G__21236;
i__21000_21210 = G__21237;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21204);
});})(seq__20952_21147,chunk__20956_21148,count__20957_21149,i__20958_21150,seq__20838,chunk__20840,count__20841,i__20842,new_link_21206,path_match_21205,node_21204,seq__20952_21198__$1,temp__5804__auto___21197,path,map__20837,map__20837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21205], 0));

goog.dom.insertSiblingAfter(new_link_21206,node_21204);


var G__21238 = cljs.core.next(seq__20952_21198__$1);
var G__21239 = null;
var G__21240 = (0);
var G__21241 = (0);
seq__20952_21147 = G__21238;
chunk__20956_21148 = G__21239;
count__20957_21149 = G__21240;
i__20958_21150 = G__21241;
continue;
} else {
var G__21242 = cljs.core.next(seq__20952_21198__$1);
var G__21243 = null;
var G__21244 = (0);
var G__21245 = (0);
seq__20952_21147 = G__21242;
chunk__20956_21148 = G__21243;
count__20957_21149 = G__21244;
i__20958_21150 = G__21245;
continue;
}
} else {
var G__21246 = cljs.core.next(seq__20952_21198__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__20952_21147 = G__21246;
chunk__20956_21148 = G__21247;
count__20957_21149 = G__21248;
i__20958_21150 = G__21249;
continue;
}
}
} else {
}
}
break;
}


var G__21250 = seq__20838;
var G__21251 = chunk__20840;
var G__21252 = count__20841;
var G__21253 = (i__20842 + (1));
seq__20838 = G__21250;
chunk__20840 = G__21251;
count__20841 = G__21252;
i__20842 = G__21253;
continue;
} else {
var G__21254 = seq__20838;
var G__21255 = chunk__20840;
var G__21256 = count__20841;
var G__21257 = (i__20842 + (1));
seq__20838 = G__21254;
chunk__20840 = G__21255;
count__20841 = G__21256;
i__20842 = G__21257;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20838);
if(temp__5804__auto__){
var seq__20838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20838__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20838__$1);
var G__21258 = cljs.core.chunk_rest(seq__20838__$1);
var G__21259 = c__5565__auto__;
var G__21260 = cljs.core.count(c__5565__auto__);
var G__21261 = (0);
seq__20838 = G__21258;
chunk__20840 = G__21259;
count__20841 = G__21260;
i__20842 = G__21261;
continue;
} else {
var path = cljs.core.first(seq__20838__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21006_21262 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21010_21263 = null;
var count__21011_21264 = (0);
var i__21012_21265 = (0);
while(true){
if((i__21012_21265 < count__21011_21264)){
var node_21266 = chunk__21010_21263.cljs$core$IIndexed$_nth$arity$2(null,i__21012_21265);
if(cljs.core.not(node_21266.shadow$old)){
var path_match_21267 = shadow.cljs.devtools.client.browser.match_paths(node_21266.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21267)){
var new_link_21268 = (function (){var G__21038 = node_21266.cloneNode(true);
G__21038.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21267),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21038;
})();
(node_21266.shadow$old = true);

(new_link_21268.onload = ((function (seq__21006_21262,chunk__21010_21263,count__21011_21264,i__21012_21265,seq__20838,chunk__20840,count__20841,i__20842,new_link_21268,path_match_21267,node_21266,path,seq__20838__$1,temp__5804__auto__,map__20837,map__20837__$1,msg,updates,reload_info){
return (function (e){
var seq__21039_21269 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21041_21270 = null;
var count__21042_21271 = (0);
var i__21043_21272 = (0);
while(true){
if((i__21043_21272 < count__21042_21271)){
var map__21047_21273 = chunk__21041_21270.cljs$core$IIndexed$_nth$arity$2(null,i__21043_21272);
var map__21047_21274__$1 = cljs.core.__destructure_map(map__21047_21273);
var task_21275 = map__21047_21274__$1;
var fn_str_21276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21274__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21274__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21278 = goog.getObjectByName(fn_str_21276,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21277)].join(''));

(fn_obj_21278.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21278.cljs$core$IFn$_invoke$arity$2(path,new_link_21268) : fn_obj_21278.call(null,path,new_link_21268));


var G__21279 = seq__21039_21269;
var G__21280 = chunk__21041_21270;
var G__21281 = count__21042_21271;
var G__21282 = (i__21043_21272 + (1));
seq__21039_21269 = G__21279;
chunk__21041_21270 = G__21280;
count__21042_21271 = G__21281;
i__21043_21272 = G__21282;
continue;
} else {
var temp__5804__auto___21283__$1 = cljs.core.seq(seq__21039_21269);
if(temp__5804__auto___21283__$1){
var seq__21039_21284__$1 = temp__5804__auto___21283__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21039_21284__$1)){
var c__5565__auto___21285 = cljs.core.chunk_first(seq__21039_21284__$1);
var G__21286 = cljs.core.chunk_rest(seq__21039_21284__$1);
var G__21287 = c__5565__auto___21285;
var G__21288 = cljs.core.count(c__5565__auto___21285);
var G__21289 = (0);
seq__21039_21269 = G__21286;
chunk__21041_21270 = G__21287;
count__21042_21271 = G__21288;
i__21043_21272 = G__21289;
continue;
} else {
var map__21048_21290 = cljs.core.first(seq__21039_21284__$1);
var map__21048_21291__$1 = cljs.core.__destructure_map(map__21048_21290);
var task_21292 = map__21048_21291__$1;
var fn_str_21293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21291__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21048_21291__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21295 = goog.getObjectByName(fn_str_21293,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21294)].join(''));

(fn_obj_21295.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21295.cljs$core$IFn$_invoke$arity$2(path,new_link_21268) : fn_obj_21295.call(null,path,new_link_21268));


var G__21296 = cljs.core.next(seq__21039_21284__$1);
var G__21297 = null;
var G__21298 = (0);
var G__21299 = (0);
seq__21039_21269 = G__21296;
chunk__21041_21270 = G__21297;
count__21042_21271 = G__21298;
i__21043_21272 = G__21299;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21266);
});})(seq__21006_21262,chunk__21010_21263,count__21011_21264,i__21012_21265,seq__20838,chunk__20840,count__20841,i__20842,new_link_21268,path_match_21267,node_21266,path,seq__20838__$1,temp__5804__auto__,map__20837,map__20837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21267], 0));

goog.dom.insertSiblingAfter(new_link_21268,node_21266);


var G__21300 = seq__21006_21262;
var G__21301 = chunk__21010_21263;
var G__21302 = count__21011_21264;
var G__21303 = (i__21012_21265 + (1));
seq__21006_21262 = G__21300;
chunk__21010_21263 = G__21301;
count__21011_21264 = G__21302;
i__21012_21265 = G__21303;
continue;
} else {
var G__21304 = seq__21006_21262;
var G__21305 = chunk__21010_21263;
var G__21306 = count__21011_21264;
var G__21307 = (i__21012_21265 + (1));
seq__21006_21262 = G__21304;
chunk__21010_21263 = G__21305;
count__21011_21264 = G__21306;
i__21012_21265 = G__21307;
continue;
}
} else {
var G__21308 = seq__21006_21262;
var G__21309 = chunk__21010_21263;
var G__21310 = count__21011_21264;
var G__21311 = (i__21012_21265 + (1));
seq__21006_21262 = G__21308;
chunk__21010_21263 = G__21309;
count__21011_21264 = G__21310;
i__21012_21265 = G__21311;
continue;
}
} else {
var temp__5804__auto___21312__$1 = cljs.core.seq(seq__21006_21262);
if(temp__5804__auto___21312__$1){
var seq__21006_21313__$1 = temp__5804__auto___21312__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21006_21313__$1)){
var c__5565__auto___21314 = cljs.core.chunk_first(seq__21006_21313__$1);
var G__21315 = cljs.core.chunk_rest(seq__21006_21313__$1);
var G__21316 = c__5565__auto___21314;
var G__21317 = cljs.core.count(c__5565__auto___21314);
var G__21318 = (0);
seq__21006_21262 = G__21315;
chunk__21010_21263 = G__21316;
count__21011_21264 = G__21317;
i__21012_21265 = G__21318;
continue;
} else {
var node_21319 = cljs.core.first(seq__21006_21313__$1);
if(cljs.core.not(node_21319.shadow$old)){
var path_match_21320 = shadow.cljs.devtools.client.browser.match_paths(node_21319.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21320)){
var new_link_21321 = (function (){var G__21049 = node_21319.cloneNode(true);
G__21049.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21320),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21049;
})();
(node_21319.shadow$old = true);

(new_link_21321.onload = ((function (seq__21006_21262,chunk__21010_21263,count__21011_21264,i__21012_21265,seq__20838,chunk__20840,count__20841,i__20842,new_link_21321,path_match_21320,node_21319,seq__21006_21313__$1,temp__5804__auto___21312__$1,path,seq__20838__$1,temp__5804__auto__,map__20837,map__20837__$1,msg,updates,reload_info){
return (function (e){
var seq__21050_21322 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21052_21323 = null;
var count__21053_21324 = (0);
var i__21054_21325 = (0);
while(true){
if((i__21054_21325 < count__21053_21324)){
var map__21058_21326 = chunk__21052_21323.cljs$core$IIndexed$_nth$arity$2(null,i__21054_21325);
var map__21058_21327__$1 = cljs.core.__destructure_map(map__21058_21326);
var task_21328 = map__21058_21327__$1;
var fn_str_21329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21058_21327__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21058_21327__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21331 = goog.getObjectByName(fn_str_21329,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21330)].join(''));

(fn_obj_21331.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21331.cljs$core$IFn$_invoke$arity$2(path,new_link_21321) : fn_obj_21331.call(null,path,new_link_21321));


var G__21332 = seq__21050_21322;
var G__21333 = chunk__21052_21323;
var G__21334 = count__21053_21324;
var G__21335 = (i__21054_21325 + (1));
seq__21050_21322 = G__21332;
chunk__21052_21323 = G__21333;
count__21053_21324 = G__21334;
i__21054_21325 = G__21335;
continue;
} else {
var temp__5804__auto___21336__$2 = cljs.core.seq(seq__21050_21322);
if(temp__5804__auto___21336__$2){
var seq__21050_21337__$1 = temp__5804__auto___21336__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21050_21337__$1)){
var c__5565__auto___21338 = cljs.core.chunk_first(seq__21050_21337__$1);
var G__21339 = cljs.core.chunk_rest(seq__21050_21337__$1);
var G__21340 = c__5565__auto___21338;
var G__21341 = cljs.core.count(c__5565__auto___21338);
var G__21342 = (0);
seq__21050_21322 = G__21339;
chunk__21052_21323 = G__21340;
count__21053_21324 = G__21341;
i__21054_21325 = G__21342;
continue;
} else {
var map__21059_21343 = cljs.core.first(seq__21050_21337__$1);
var map__21059_21344__$1 = cljs.core.__destructure_map(map__21059_21343);
var task_21345 = map__21059_21344__$1;
var fn_str_21346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21344__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21344__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21348 = goog.getObjectByName(fn_str_21346,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21347)].join(''));

(fn_obj_21348.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21348.cljs$core$IFn$_invoke$arity$2(path,new_link_21321) : fn_obj_21348.call(null,path,new_link_21321));


var G__21349 = cljs.core.next(seq__21050_21337__$1);
var G__21350 = null;
var G__21351 = (0);
var G__21352 = (0);
seq__21050_21322 = G__21349;
chunk__21052_21323 = G__21350;
count__21053_21324 = G__21351;
i__21054_21325 = G__21352;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21319);
});})(seq__21006_21262,chunk__21010_21263,count__21011_21264,i__21012_21265,seq__20838,chunk__20840,count__20841,i__20842,new_link_21321,path_match_21320,node_21319,seq__21006_21313__$1,temp__5804__auto___21312__$1,path,seq__20838__$1,temp__5804__auto__,map__20837,map__20837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21320], 0));

goog.dom.insertSiblingAfter(new_link_21321,node_21319);


var G__21353 = cljs.core.next(seq__21006_21313__$1);
var G__21354 = null;
var G__21355 = (0);
var G__21356 = (0);
seq__21006_21262 = G__21353;
chunk__21010_21263 = G__21354;
count__21011_21264 = G__21355;
i__21012_21265 = G__21356;
continue;
} else {
var G__21357 = cljs.core.next(seq__21006_21313__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__21006_21262 = G__21357;
chunk__21010_21263 = G__21358;
count__21011_21264 = G__21359;
i__21012_21265 = G__21360;
continue;
}
} else {
var G__21361 = cljs.core.next(seq__21006_21313__$1);
var G__21362 = null;
var G__21363 = (0);
var G__21364 = (0);
seq__21006_21262 = G__21361;
chunk__21010_21263 = G__21362;
count__21011_21264 = G__21363;
i__21012_21265 = G__21364;
continue;
}
}
} else {
}
}
break;
}


var G__21365 = cljs.core.next(seq__20838__$1);
var G__21366 = null;
var G__21367 = (0);
var G__21368 = (0);
seq__20838 = G__21365;
chunk__20840 = G__21366;
count__20841 = G__21367;
i__20842 = G__21368;
continue;
} else {
var G__21369 = cljs.core.next(seq__20838__$1);
var G__21370 = null;
var G__21371 = (0);
var G__21372 = (0);
seq__20838 = G__21369;
chunk__20840 = G__21370;
count__20841 = G__21371;
i__20842 = G__21372;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21060){
var map__21061 = p__21060;
var map__21061__$1 = cljs.core.__destructure_map(map__21061);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21062){
var map__21063 = p__21062;
var map__21063__$1 = cljs.core.__destructure_map(map__21063);
var _ = map__21063__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21064,done,error){
var map__21065 = p__21064;
var map__21065__$1 = cljs.core.__destructure_map(map__21065);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21066,done,error){
var map__21067 = p__21066;
var map__21067__$1 = cljs.core.__destructure_map(map__21067);
var msg = map__21067__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21068){
var map__21069 = p__21068;
var map__21069__$1 = cljs.core.__destructure_map(map__21069);
var src = map__21069__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21069__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21070 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21070) : done.call(null,G__21070));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21071){
var map__21072 = p__21071;
var map__21072__$1 = cljs.core.__destructure_map(map__21072);
var msg__$1 = map__21072__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21072__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21073){var ex = e21073;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21074){
var map__21075 = p__21074;
var map__21075__$1 = cljs.core.__destructure_map(map__21075);
var env = map__21075__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21075__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21076){
var map__21077 = p__21076;
var map__21077__$1 = cljs.core.__destructure_map(map__21077);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21077__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21077__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21078){
var map__21079 = p__21078;
var map__21079__$1 = cljs.core.__destructure_map(map__21079);
var svc = map__21079__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21079__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
