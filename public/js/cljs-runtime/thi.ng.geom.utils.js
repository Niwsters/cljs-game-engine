goog.provide('thi.ng.geom.utils');
thi.ng.geom.utils.closest_point_coeff = (function thi$ng$geom$utils$closest_point_coeff(p,a,b){
var d = thi.ng.math.core._(b,a);
return (thi.ng.math.core.dot(thi.ng.math.core._(p,a),d) / thi.ng.math.core.mag_squared(d));
});
thi.ng.geom.utils.closest_point_on_line = (function thi$ng$geom$utils$closest_point_on_line(p,a,b){
return thi.ng.math.core.mix(a,b,thi.ng.geom.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.utils.closest_point_on_segment = (function thi$ng$geom$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.math.core.mix(a,b,t);
}
}
});
thi.ng.geom.utils.closest_point_on_segments = (function thi$ng$geom$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14456_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_on_segment,p,p1__14456_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.utils.closest_line_between = (function thi$ng$geom$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.math.core._(b2,a2);
if(cljs.core.not(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.math.core._(b1,a1);
if(cljs.core.not(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.math.core._(a1,a2);
var d1343 = thi.ng.math.core.dot(p13,p43);
var d4321 = thi.ng.math.core.dot(p43,p21);
var d1321 = thi.ng.math.core.dot(p13,p21);
var d4343 = thi.ng.math.core.dot(p43,p43);
var d2121 = thi.ng.math.core.dot(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.math.core.madd(p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.math.core.madd(p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.dist_STAR_ = (function thi$ng$geom$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14457_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__14457_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.utils.min_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.utils.max_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.utils.arc_length_index = (function thi$ng$geom$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__14459_SHARP_){
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14459_SHARP_,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14459_SHARP_,(1)));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
thi.ng.geom.utils.arc_length = (function thi$ng$geom$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.utils.centroid = (function thi$ng$geom$utils$centroid(coll){
var G__14461 = cljs.core.count(coll);
switch (G__14461) {
case (0):
return null;

break;
case (1):
return cljs.core.first(coll);

break;
case (2):
return thi.ng.math.core.mix(cljs.core.first(coll),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(1)));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = (function (x,_){
return (x * s);
});
return thi.ng.geom.core.reduce_vector(cljs.core.first(coll),cljs.core._PLUS_,f,cljs.core.rest(coll));

}
});
thi.ng.geom.utils.center = (function thi$ng$geom$utils$center(var_args){
var G__14464 = arguments.length;
switch (G__14464) {
case 2:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),c_SINGLEQUOTE_,coll);
}));

(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.math.core._(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14462_SHARP_){
return thi.ng.math.core._PLUS_(p1__14462_SHARP_,d);
}),coll);
}));

(thi.ng.geom.utils.center.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.scale_size = (function thi$ng$geom$utils$scale_size(var_args){
var G__14468 = arguments.length;
switch (G__14468) {
case 2:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),s,coll);
}));

(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14466_SHARP_){
return thi.ng.math.core.madd(thi.ng.math.core._(p1__14466_SHARP_,c),s,c);
}),coll);
}));

(thi.ng.geom.utils.scale_size.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.bounds_STAR_ = (function thi$ng$geom$utils$bounds_STAR_(zero,coll){
var c = cljs.core.count(coll);
if((c > (1))){
var vec__14470 = coll;
var seq__14471 = cljs.core.seq(vec__14470);
var first__14472 = cljs.core.first(seq__14471);
var seq__14471__$1 = cljs.core.next(seq__14471);
var x = first__14472;
var xs = seq__14471__$1;
var p = thi.ng.geom.core.reduce_vector(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.math.core._(q,p)], null);
} else {
if((c === (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(coll),zero], null);
} else {
return null;

}
}
});
thi.ng.geom.utils.bounding_rect_raw = (function thi$ng$geom$utils$bounding_rect_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V2,points);
});
thi.ng.geom.utils.bounding_box_raw = (function thi$ng$geom$utils$bounding_box_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V3,points);
});
thi.ng.geom.utils.radial_bounds = (function thi$ng$geom$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(c) : ctor.call(null,c)),((cljs.core.coll_QMARK_(r_or_points))?thi.ng.geom.utils.max_dist(c,r_or_points):r_or_points)], null);
});
thi.ng.geom.utils.axis_bounds = (function thi$ng$geom$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14474_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14474_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.utils.axis_range = (function thi$ng$geom$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.utils.delta_contains = (function thi$ng$geom$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__14475_SHARP_){
return thi.ng.math.core.delta_EQ_(p,p1__14475_SHARP_,eps);
}),points);
});
thi.ng.geom.utils.from_barycentric = (function thi$ng$geom$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core._STAR_,points,weights));
});
/**
 * Takes a seq of points and normalized index (0.0 .. 1.0), returns
 *   interpolated point at position t.
 */
thi.ng.geom.utils.point_at_index = (function thi$ng$geom$utils$point_at_index(points,t){
var n = (cljs.core.count(points) - (1));
var t_SINGLEQUOTE_ = (t * n);
var ti = (t_SINGLEQUOTE_ | (0));
if((ti < n)){
return thi.ng.math.core.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,ti),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(ti + (1))),(t_SINGLEQUOTE_ - ti));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(((ti < (0)))?(0):n));
}
});
thi.ng.geom.utils.point_at_STAR_ = (function thi$ng$geom$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)))){
var G__14642 = (i__$1 + (1));
i__$1 = G__14642;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i1) : idx.call(null,i1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)) - pi))),i__$1], null);
});
thi.ng.geom.utils.point_at = (function thi$ng$geom$utils$point_at(var_args){
var G__14479 = arguments.length;
switch (G__14479) {
case 2:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
}));

(thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__5043__auto__ = idx;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
}));

(thi.ng.geom.utils.point_at.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.sample_uniform_STAR_ = (function thi$ng$geom$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__14484 = thi.ng.geom.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14484,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14484,(1),null);
var G__14653 = (t + delta);
var G__14654 = (i__$1 | (0));
var G__14655 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__14653;
i = G__14654;
acc = G__14655;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.utils.sample_uniform = (function thi$ng$geom$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.utils.sample_segment_with_res = (function thi$ng$geom$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__5520__auto__ = (function thi$ng$geom$utils$sample_segment_with_res_$_iter__14489(s__14490){
return (new cljs.core.LazySeq(null,(function (){
var s__14490__$1 = s__14490;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14490__$1);
if(temp__5804__auto__){
var s__14490__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14490__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__14490__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__14492 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__14491 = (0);
while(true){
if((i__14491 < size__5519__auto__)){
var t = cljs.core._nth(c__5518__auto__,i__14491);
cljs.core.chunk_append(b__14492,thi.ng.math.core.mix(a,b,t));

var G__14670 = (i__14491 + (1));
i__14491 = G__14670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14492),thi$ng$geom$utils$sample_segment_with_res_$_iter__14489(cljs.core.chunk_rest(s__14490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14492),null);
}
} else {
var t = cljs.core.first(s__14490__$2);
return cljs.core.cons(thi.ng.math.core.mix(a,b,t),thi$ng$geom$utils$sample_segment_with_res_$_iter__14489(cljs.core.rest(s__14490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(thi.ng.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.utils.map_bilinear = (function thi$ng$geom$utils$map_bilinear(p__14494,p__14495){
var vec__14496 = p__14494;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14496,(3),null);
var vec__14499 = p__14495;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(1),null);
return thi.ng.math.core.mix(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.utils.map_trilinear = (function thi$ng$geom$utils$map_trilinear(p__14503,p__14504){
var vec__14505 = p__14503;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14505,(7),null);
var vec__14508 = p__14504;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(2),null);
return thi.ng.math.core.mix(thi.ng.math.core.mix(a,d,e,h,u,v),thi.ng.math.core.mix(b,c,f,g,u,v),w);
});
thi.ng.geom.utils.tessellate_with_point = (function thi$ng$geom$utils$tessellate_with_point(var_args){
var G__14514 = arguments.length;
switch (G__14514) {
case 1:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14511_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,cljs.core.first(p1__14511_SHARP_),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14511_SHARP_,(1))],null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
}));

(thi.ng.geom.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.tessellate_with_first = (function thi$ng$geom$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var v0 = cljs.core.first(points);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__14515){
var vec__14516 = p__14515;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.rest(points)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$utils$tessellate_tri_with_midpoints(p__14520){
var vec__14521 = p__14520;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14521,(2),null);
var ab = thi.ng.math.core.mix(a,b);
var bc = thi.ng.math.core.mix(b,c);
var ca = thi.ng.math.core.mix(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.utils.tessellate_3 = (function thi$ng$geom$utils$tessellate_3(points){
var pred__14524 = cljs.core._EQ__EQ_;
var expr__14525 = cljs.core.count(points);
if(cljs.core.truth_((pred__14524.cljs$core$IFn$_invoke$arity$2 ? pred__14524.cljs$core$IFn$_invoke$arity$2((3),expr__14525) : pred__14524.call(null,(3),expr__14525)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((pred__14524.cljs$core$IFn$_invoke$arity$2 ? pred__14524.cljs$core$IFn$_invoke$arity$2((4),expr__14525) : pred__14524.call(null,(4),expr__14525)))){
var vec__14527 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.utils.tessellate_max4 = (function thi$ng$geom$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.utils.tessellate_face = (function thi$ng$geom$utils$tessellate_face(tess_fn){
return (function (p__14530){
var vec__14531 = p__14530;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14531,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14531,(1),null);
var verts__$1 = (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(verts) : tess_fn.call(null,verts));
var attribs__$1 = cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(v) : tess_fn.call(null,v)));
}),cljs.core.PersistentArrayMap.EMPTY,attribs);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,verts__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts__$2,cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
}),cljs.core.PersistentArrayMap.EMPTY,attribs__$1)], null);
}),verts__$1);
});
});
thi.ng.geom.utils.ortho_normal = (function thi$ng$geom$utils$ortho_normal(var_args){
var G__14536 = arguments.length;
switch (G__14536) {
case 1:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__14537){
var vec__14538 = p__14537;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538,(2),null);
return thi.ng.math.core.normalize(thi.ng.math.core.cross(thi.ng.math.core._(b,a),thi.ng.math.core._(c,a)));
}));

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.math.core.normalize(thi.ng.math.core.cross(a,b));
}));

(thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize(thi.ng.math.core.cross(thi.ng.math.core._(b,a),thi.ng.math.core._(c,a)));
}));

(thi.ng.geom.utils.ortho_normal.cljs$lang$maxFixedArity = 3);

thi.ng.geom.utils.norm_sign2 = (function thi$ng$geom$utils$norm_sign2(p__14542,p__14543,p__14544){
var vec__14545 = p__14542;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(1),null);
var vec__14548 = p__14543;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14548,(1),null);
var vec__14551 = p__14544;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.utils.norm_sign3 = (function thi$ng$geom$utils$norm_sign3(a,b,c){
return thi.ng.math.core.mag(thi.ng.math.core.cross(thi.ng.math.core._(b,a),thi.ng.math.core._(c,a)));
});
thi.ng.geom.utils.tri_area2 = (function thi$ng$geom$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign2(a,b,c));
});
thi.ng.geom.utils.tri_area3 = (function thi$ng$geom$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign3(a,b,c));
});
thi.ng.geom.utils.clockwise2_QMARK_ = (function thi$ng$geom$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.utils.clockwise3_QMARK_ = (function thi$ng$geom$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.math.core.dot(thi.ng.math.core.cross(thi.ng.math.core._(b,a),thi.ng.math.core._(c,a)),n) > (0));
});
thi.ng.geom.utils.triangle_barycentric_coords = (function thi$ng$geom$utils$triangle_barycentric_coords(var_args){
var G__14557 = arguments.length;
switch (G__14557) {
case 2:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__14559,p){
var vec__14560 = p__14559;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14560,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14560,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14560,(2),null);
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._(b,a),thi.ng.math.core._(c,a));
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._(b,a),thi.ng.math.core._(c,a));
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.math.core._(p,a);
var uu = thi.ng.math.core.mag_squared(u);
var vv = thi.ng.math.core.mag_squared(v);
var uv = thi.ng.math.core.dot(u,v);
var wu = thi.ng.math.core.dot(w,u);
var wv = thi.ng.math.core.dot(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
}));

(thi.ng.geom.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6);

thi.ng.geom.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(thi.ng.geom.utils.clockwise2_QMARK_(a,b,c)){
return (((thi.ng.geom.utils.norm_sign2(a,c,p) >= 0.0)) && ((((thi.ng.geom.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,b,p) >= 0.0)))));
} else {
return (((thi.ng.geom.utils.norm_sign2(b,c,p) >= 0.0)) && ((((thi.ng.geom.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,a,p) >= 0.0)))));
}
});
thi.ng.geom.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.math.core._(b,a);
var v = thi.ng.math.core._(c,a);
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.math.core.dot(n,p) - thi.ng.math.core.dot(n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,cl))){
var vec__14566 = thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(2),null);
var and__5041__auto__ = (u__$1 >= 0.0);
if(and__5041__auto__){
var and__5041__auto____$1 = (w >= 0.0);
if(and__5041__auto____$1){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
thi.ng.geom.utils.tessellating_transducer = (function thi$ng$geom$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.utils.area_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__14570_SHARP_){
var G__14571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__14570_SHARP_);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14571) : thi.ng.math.core.abs_STAR_.call(null,G__14571));
}));
thi.ng.geom.utils.volume_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__14572_SHARP_){
return thi.ng.math.core.dot((p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__14572_SHARP_.call(null,(0))),thi.ng.math.core.cross((p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__14572_SHARP_.call(null,(1))),(p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14572_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__14572_SHARP_.call(null,(2)))));
}));
thi.ng.geom.utils.total_area_3d = (function thi$ng$geom$utils$total_area_3d(var_args){
var G__14574 = arguments.length;
switch (G__14574) {
case 1:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.area_xf,cljs.core._PLUS_,faces);
}));

(thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.area_xf),cljs.core._PLUS_,faces);
}));

(thi.ng.geom.utils.total_area_3d.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.total_volume = (function thi$ng$geom$utils$total_volume(var_args){
var G__14577 = arguments.length;
switch (G__14577) {
case 1:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
}));

(thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.volume_xf),cljs.core._PLUS_,faces) / 6.0);
}));

(thi.ng.geom.utils.total_volume.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.bounding_rect = (function thi$ng$geom$utils$bounding_rect(points){
var vec__14578 = thi.ng.geom.utils.bounding_rect_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14578,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14578,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_box = (function thi$ng$geom$utils$bounding_box(points){
var vec__14582 = thi.ng.geom.utils.bounding_box_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14582,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_circle = (function thi$ng$geom$utils$bounding_circle(var_args){
var G__14586 = arguments.length;
switch (G__14586) {
case 1:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__14587 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14587,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14587,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r,null,null,null));
}));

(thi.ng.geom.utils.bounding_circle.cljs$lang$maxFixedArity = 2);

thi.ng.geom.utils.bounding_sphere = (function thi$ng$geom$utils$bounding_sphere(var_args){
var G__14592 = arguments.length;
switch (G__14592) {
case 1:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
}));

(thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__14593 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r,null,null,null));
}));

(thi.ng.geom.utils.bounding_sphere.cljs$lang$maxFixedArity = 2);

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.utils.coll_bounds = (function thi$ng$geom$utils$coll_bounds(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.union,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.utils.fit_all_into_bounds = (function thi$ng$geom$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.utils.coll_bounds(coll);
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,thi.ng.math.core.div(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007))));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center(thi.ng.geom.core.scale(b,s),thi.ng.geom.core.centroid(bounds));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14597_SHARP_){
return thi.ng.geom.core.scale_size(thi.ng.geom.core.center(p1__14597_SHARP_,thi.ng.geom.core.unmap_point(b_SINGLEQUOTE_,thi.ng.geom.core.map_point(b,thi.ng.geom.core.centroid(p1__14597_SHARP_)))),s);
}),coll);
});
/**
 * Takes a target mesh, its add-face fn and a source mesh or face
 *   sequence. Adds faces to target mesh and returns it.
 */
thi.ng.geom.utils.into_mesh = (function thi$ng$geom$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_face,mesh,(((((!((mesh_or_faces == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === mesh_or_faces.thi$ng$geom$core$IFaceAccess$))))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces(mesh_or_faces,true):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of raw faces (i.e. each face as
 *   2-elem vector of [verts attribs]. Returns new mesh.
 */
thi.ng.geom.utils.map_mesh = (function thi$ng$geom$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into(thi.ng.geom.core.clear_STAR_(mesh),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thi.ng.geom.core.faces(mesh,true)], 0)));
});
/**
 * Takes a mesh, its add-face fn and a vertex transformation fn.
 *   Transforms all mesh vertices and returns new mesh.
 */
thi.ng.geom.utils.transform_mesh = (function thi$ng$geom$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = (((((!((tx == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tx.thi$ng$geom$core$IVectorTransform$))))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector(tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,v,(tx__$1.cljs$core$IFn$_invoke$arity$1 ? tx__$1.cljs$core$IFn$_invoke$arity$1(v) : tx__$1.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices(mesh)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mesh__$1,p__14602){
var vec__14603 = p__14602;
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603,(1),null);
var G__14606 = mesh__$1;
var G__14607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(verts_SINGLEQUOTE_,fv),fa], null);
return (add_face.cljs$core$IFn$_invoke$arity$2 ? add_face.cljs$core$IFn$_invoke$arity$2(G__14606,G__14607) : add_face.call(null,G__14606,G__14607));
}),thi.ng.geom.core.clear_STAR_(mesh),thi.ng.geom.core.faces(mesh,true));
});

//# sourceMappingURL=thi.ng.geom.utils.js.map
