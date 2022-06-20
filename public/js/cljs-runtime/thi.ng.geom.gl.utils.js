goog.provide('thi.ng.geom.gl.utils');
thi.ng.geom.gl.utils.get_script_text = (function thi$ng$geom$gl$utils$get_script_text(id){
var temp__5802__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5802__auto__)){
var e = temp__5802__auto__;
return e.text;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(["Unknown DOM element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}
});
/**
 * A combination of map & doseq specialized for maps. Takes a function `f` and
 *  a map, calls `f` with each key & value, discards results.
 */
thi.ng.geom.gl.utils.loop_kv = (function thi$ng$geom$gl$utils$loop_kv(f,xs){
var xs__$1 = xs;
while(true){
if(cljs.core.truth_(xs__$1)){
var x = cljs.core.first(xs__$1);
var G__15744_15753 = cljs.core.first(x);
var G__15745_15754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(1));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15744_15753,G__15745_15754) : f.call(null,G__15744_15753,G__15745_15754));

var G__15755 = cljs.core.next(xs__$1);
xs__$1 = G__15755;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=thi.ng.geom.gl.utils.js.map
