goog.provide('thi.ng.dstruct.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__5802__auto__)){
var tt = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__5802__auto__)){
var tt = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__5802__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var e = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.key(e),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.val(e),v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.createAsIfByAssoc([v]));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var vv = temp__5802__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.createAsIfByAssoc([v]));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var G__11490 = arguments.length;
switch (G__11490) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
}));

(thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
}));

(thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3);

thi.ng.dstruct.core.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__11493_SHARP_,p2__11494_SHARP_){
if((p1__11493_SHARP_ == null)){
return p2__11494_SHARP_;
} else {
if(cljs.core.set_QMARK_(p1__11493_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11493_SHARP_,p2__11494_SHARP_);
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([p2__11494_SHARP_,p1__11493_SHARP_]);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__11495_SHARP_,p2__11496_SHARP_){
if((p1__11495_SHARP_ == null)){
return p2__11496_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__11495_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11495_SHARP_,p2__11496_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11495_SHARP_,p2__11496_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),coll);
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set(f,coll);
return cljs.core.zipmap(keys,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.identity))?keys:cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,keys)));
});
/**
 * Merge fn to be used with `merge-with`. Recursively merges map
 *   values which are maps or seqs (for the latter `into` is used, only
 *   if RHS is seq or set as well). If the RHS value has the metadata key
 *   `:replace` set, it is used as new value without merging.
 */
thi.ng.dstruct.core.deep_merge = (function thi$ng$dstruct$core$deep_merge(l,r){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(r),new cljs.core.Keyword(null,"replace","replace",-786587770)))){
return r;
} else {
if(((cljs.core.sequential_QMARK_(l)) || (cljs.core.set_QMARK_(l)))){
if(((cljs.core.sequential_QMARK_(r)) || (cljs.core.set_QMARK_(r)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
return r;
}
} else {
if(cljs.core.map_QMARK_(l)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(thi.ng.dstruct.core.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,r], 0));
} else {
return r;

}
}
}
});
/**
 * Calls `merge-with` using `deep-merge` as merge fn.
 */
thi.ng.dstruct.core.merge_deep = (function thi$ng$dstruct$core$merge_deep(var_args){
var G__11505 = arguments.length;
switch (G__11505) {
case 2:
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___11569 = arguments.length;
var i__5767__auto___11570 = (0);
while(true){
if((i__5767__auto___11570 < len__5766__auto___11569)){
args_arr__5791__auto__.push((arguments[i__5767__auto___11570]));

var G__11571 = (i__5767__auto___11570 + (1));
i__5767__auto___11570 = G__11571;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(thi.ng.dstruct.core.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));

(thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.merge_with,thi.ng.dstruct.core.deep_merge,a,b,maps);
}));

/** @this {Function} */
(thi.ng.dstruct.core.merge_deep.cljs$lang$applyTo = (function (seq11500){
var G__11503 = cljs.core.first(seq11500);
var seq11500__$1 = cljs.core.next(seq11500);
var G__11504 = cljs.core.first(seq11500__$1);
var seq11500__$2 = cljs.core.next(seq11500__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11503,G__11504,seq11500__$2);
}));

(thi.ng.dstruct.core.merge_deep.cljs$lang$maxFixedArity = (2));

thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11574 = arguments.length;
var i__5767__auto___11575 = (0);
while(true){
if((i__5767__auto___11575 < len__5766__auto___11574)){
args__5772__auto__.push((arguments[i__5767__auto___11575]));

var G__11576 = (i__5767__auto___11575 + (1));
i__5767__auto___11575 = G__11576;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.sorted_set(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.first(v),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
})),ivals);
}));

(thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq11506){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11506));
}));

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11577 = arguments.length;
var i__5767__auto___11578 = (0);
while(true){
if((i__5767__auto___11578 < len__5766__auto___11577)){
args__5772__auto__.push((arguments[i__5767__auto___11578]));

var G__11579 = (i__5767__auto___11578 + (1));
i__5767__auto___11578 = G__11579;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__11511 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11514,v){
var vec__11515 = p__11514;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11515,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11511,(0),null);
var const$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11511,(1),null);
return (function (x){
if(cljs.core.truth_((const$.cljs$core$IFn$_invoke$arity$1 ? const$.cljs$core$IFn$_invoke$arity$1(x) : const$.call(null,x)))){
return x;
} else {
return cljs.core.some((function (p1__11509_SHARP_){
if((cljs.core.first(p1__11509_SHARP_) <= x)){
return (x <= cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__11509_SHARP_,(1)));
} else {
return null;
}
}),ivals__$1);
}
});
}));

(thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq11510){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11510));
}));

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11580 = arguments.length;
var i__5767__auto___11581 = (0);
while(true){
if((i__5767__auto___11581 < len__5766__auto___11580)){
args__5772__auto__.push((arguments[i__5767__auto___11581]));

var G__11582 = (i__5767__auto___11581 + (1));
i__5767__auto___11581 = G__11582;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function thi$ng$dstruct$core$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__11583 = (i - (1));
var G__11584 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__11583;
v_seqs__$2 = G__11584;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return thi$ng$dstruct$core$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq11518){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11518));
}));

thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var G__11520 = arguments.length;
switch (G__11520) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__11521 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__11524,v){
var vec__11525 = p__11524;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,(1),null);
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11521,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(m),cljs.core.persistent_BANG_(n)], null);
}));

(thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f2,thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2(f,coll));
}));

(thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3);

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count(coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(((i > (0)))?(i - (1)):n)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__11586 = (i - (1));
i = G__11586;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 *   a successive elements of the original collection.
 * 
 *    (successive-nth 3 [1 2 3 4])
 *    => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.dstruct.core.successive_nth = (function thi$ng$dstruct$core$successive_nth(var_args){
var G__11531 = arguments.length;
switch (G__11531) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
}));

(thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,coll)));
} else {
return null;
}
}),null,null));
}));

(thi.ng.dstruct.core.successive_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 *   a vector of `n` successive elements of the original collection and
 *   an sequence index.
 * 
 *    (successive-nth-indexed 2 [10 20 30 40])
 *    => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.dstruct.core.successive_nth_indexed = (function thi$ng$dstruct$core$successive_nth_indexed(var_args){
var G__11535 = arguments.length;
switch (G__11535) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(0),coll);
}));

(thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(idx + (1)),cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
}));

(thi.ng.dstruct.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3);

/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.dstruct.core.apply_to_keys = (function thi$ng$dstruct$core$apply_to_keys(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11593 = arguments.length;
var i__5767__auto___11594 = (0);
while(true){
if((i__5767__auto___11594 < len__5766__auto___11593)){
args__5772__auto__.push((arguments[i__5767__auto___11594]));

var G__11595 = (i__5767__auto___11594 + (1));
i__5767__auto___11594 = G__11595;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(type,k),args));
}),type,keys);
}));

(thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq11536){
var G__11538 = cljs.core.first(seq11536);
var seq11536__$1 = cljs.core.next(seq11536);
var G__11539 = cljs.core.first(seq11536__$1);
var seq11536__$2 = cljs.core.next(seq11536__$1);
var G__11540 = cljs.core.first(seq11536__$2);
var seq11536__$3 = cljs.core.next(seq11536__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11538,G__11539,G__11540,seq11536__$3);
}));

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var G__11545 = arguments.length;
switch (G__11545) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4(f1,f2,null,coll);
}));

(thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count(coll) > (1))){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11546){
var vec__11547 = p__11546;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(1),null);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(a,b) : f2.call(null,a,b));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f1,acc,pairs);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f1,pairs);
}
} else {
return null;
}
}));

(thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4);

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.sequential_QMARK_(head))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,s):cljs.core.cons(head,s)),((cljs.core.sequential_QMARK_(tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,(0),n));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,xs),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(coll__$1))){
return i;
} else {
var G__11599 = (i + (1));
var G__11600 = cljs.core.next(coll__$1);
i = G__11599;
coll__$1 = G__11600;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 *   If `coll` is a vector, the new collection is created with `subvec`.
 *   Returns original coll if item isn't found.
 */
thi.ng.dstruct.core.all_after = (function thi$ng$dstruct$core$all_after(item,coll){
var idx = (thi.ng.dstruct.core.index_of(coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,idx);
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.cons(x,(function (){var G__11552 = pred;
var G__11553 = f;
var G__11554 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3 ? thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3(G__11552,G__11553,G__11554) : thi.ng.dstruct.core.iterate_while.call(null,G__11552,G__11553,G__11554));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Iteratively applies f to x, n times, then returns result.
 */
thi.ng.dstruct.core.iterate_n = (function thi$ng$dstruct$core$iterate_n(n,f,x){
var x__$1 = x;
var i = (0);
while(true){
if((i < n)){
var G__11601 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x__$1) : f.call(null,x__$1));
var G__11602 = (i + (1));
x__$1 = G__11601;
i = G__11602;
continue;
} else {
return x__$1;
}
break;
}
});
thi.ng.dstruct.core.walk = (function thi$ng$dstruct$core$walk(inner,outer,form){
if(cljs.core.seq_QMARK_(form)){
var G__11557 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__11557) : outer.call(null,G__11557));
} else {
if(cljs.core.vector_QMARK_(form)){
var G__11558 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inner,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__11558) : outer.call(null,G__11558));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
});
thi.ng.dstruct.core.postwalk = (function thi$ng$dstruct$core$postwalk(f,form){
return thi.ng.dstruct.core.walk((function (p1__11559_SHARP_){
return (thi.ng.dstruct.core.postwalk.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.core.postwalk.cljs$core$IFn$_invoke$arity$2(f,p1__11559_SHARP_) : thi.ng.dstruct.core.postwalk.call(null,f,p1__11559_SHARP_));
}),f,form);
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,node);
} else {
if(cljs.core.coll_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(walk,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),root));
});
thi.ng.dstruct.core.unwrap_str = (function thi$ng$dstruct$core$unwrap_str(s,n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,n,(cljs.core.count(s) - n));
});
thi.ng.dstruct.core.wrap_str = (function thi$ng$dstruct$core$wrap_str(s,pre,post){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key(e)),cljs.core.val(e)], null);
})),m);
});
/**
 * Takes a keyword or string of flags and string/seq of items, returns
 *   map with items as keys and boolean values indicating if an item has
 *   been found in the string representation of the kw. If `kw` is nil,
 *   returns nil.
 * 
 *    (demunge-flags :cad "abcd")
 *    #_=> {:a true :b false :c true :d true}
 */
thi.ng.dstruct.core.demunge_flags = (function thi$ng$dstruct$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
var x__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x__$1),((0) <= flags.indexOf(x__$1)));
}),cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 *    (demunge-flags-seq :cad "abcd") => [true false true true]
 */
thi.ng.dstruct.core.demunge_flags_seq = (function thi$ng$dstruct$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11562_SHARP_){
return ((0) <= flags.indexOf(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11562_SHARP_)));
}),xs);
} else {
return null;
}
});

//# sourceMappingURL=thi.ng.dstruct.core.js.map
