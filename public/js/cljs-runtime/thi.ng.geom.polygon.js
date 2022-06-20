goog.provide('thi.ng.geom.polygon');
thi.ng.geom.polygon.polygon2 = (function thi$ng$geom$polygon$polygon2(var_args){
var G__16617 = arguments.length;
switch (G__16617) {
case 1:
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___16926 = arguments.length;
var i__5767__auto___16927 = (0);
while(true){
if((i__5767__auto___16927 < len__5766__auto___16926)){
args_arr__5791__auto__.push((arguments[i__5767__auto___16927]));

var G__16928 = (i__5767__auto___16927 + (1));
i__5767__auto___16927 = G__16928;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2,points),null,null,null));
}));

(thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2,cljs.core.cons(p,cljs.core.cons(q,more))),null,null,null));
}));

/** @this {Function} */
(thi.ng.geom.polygon.polygon2.cljs$lang$applyTo = (function (seq16604){
var G__16605 = cljs.core.first(seq16604);
var seq16604__$1 = cljs.core.next(seq16604);
var G__16606 = cljs.core.first(seq16604__$1);
var seq16604__$2 = cljs.core.next(seq16604__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16605,G__16606,seq16604__$2);
}));

(thi.ng.geom.polygon.polygon2.cljs$lang$maxFixedArity = (2));

thi.ng.geom.polygon.cog = (function thi$ng$geom$polygon$cog(radius,teeth,profile){
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p,v){
return thi.ng.math.core._STAR_(v,p);
}),cljs.core.cycle(profile),thi.ng.geom.core.vertices((new thi.ng.geom.types.Circle2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),radius,null,null,null)),(teeth * cljs.core.count(profile)))),null,null,null));
});
thi.ng.geom.polygon.clip_convex_STAR_ = (function thi$ng$geom$polygon$clip_convex_STAR_(verts,bounds){
var verts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(verts,cljs.core.first(verts));
var bc = thi.ng.geom.core.centroid(bounds);
var ec_pos = (function (e,p,q){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.intersect_line(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,q], null)),new cljs.core.Keyword(null,"p","p",151049309));
});
var cedges = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.line.line2,thi.ng.geom.core.edges(bounds));
var points = verts__$1;
var clipped = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cedges)){
var ce = cljs.core.first(cedges);
var sign = thi.ng.geom.core.classify_point(ce,bc);
var clipped__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos){
return (function (clipped__$1,p__16634){
var vec__16635 = p__16634;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16635,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16635,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,thi.ng.geom.core.classify_point(ce,p))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,thi.ng.geom.core.classify_point(ce,q))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clipped__$1,q);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clipped__$1,ec_pos(ce,p,q));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,thi.ng.geom.core.classify_point(ce,q))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clipped__$1,ec_pos(ce,p,q),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0));
} else {
return clipped__$1;
}
}
});})(cedges,points,clipped,ce,sign,verts__$1,bc,ec_pos))
,cljs.core.PersistentVector.EMPTY,thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points));
var clipped__$2 = (((((cljs.core.count(clipped__$1) > (0))) && (cljs.core.not(thi.ng.math.core.delta_EQ_(cljs.core.first(clipped__$1),cljs.core.peek(clipped__$1))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clipped__$1,cljs.core.first(clipped__$1)):clipped__$1);
var G__16965 = cljs.core.next(cedges);
var G__16966 = clipped__$2;
var G__16967 = points;
cedges = G__16965;
points = G__16966;
clipped = G__16967;
continue;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.butlast(points));
}
break;
}
});
thi.ng.geom.polygon.h_segment = (function thi$ng$geom$polygon$h_segment(verts,p__16638,pred,theta,ps){
while(true){
var vec__16639 = p__16638;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16639,(1),null);
var p = vec__16639;
var vec__16642 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (verts,p__16638,pred,theta,ps,vec__16639,px,py,p){
return (function (state,p__16645){
var vec__16646 = p__16645;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16646,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16646,(1),null);
var q = vec__16646;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(qy,py) : pred.call(null,qy,py)))){
var d = thi.ng.math.core.abs_diff(theta,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((qx - px),(qy - py)).thi$ng$geom$core$IHeading$heading_xy$arity$1(null));
if((d < (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((1)) : state.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d], null);
} else {
return state;
}
} else {
return state;
}
});})(verts,p__16638,pred,theta,ps,vec__16639,px,py,p))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.HALF_PI], null),ps);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16642,(0),null);
if(cljs.core.truth_(q)){
var G__16976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(verts,q);
var G__16977 = q;
var G__16978 = pred;
var G__16979 = theta;
var G__16980 = thi.ng.dstruct.core.all_after(q,ps);
verts = G__16976;
p__16638 = G__16977;
pred = G__16978;
theta = G__16979;
ps = G__16980;
continue;
} else {
return verts;
}
break;
}
});
thi.ng.geom.polygon.convex_hull_STAR_ = (function thi$ng$geom$polygon$convex_hull_STAR_(points){
var vec__16651 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,points);
var seq__16652 = cljs.core.seq(vec__16651);
var first__16653 = cljs.core.first(seq__16652);
var seq__16652__$1 = cljs.core.next(seq__16652);
var p = first__16653;
var more = seq__16652__$1;
var ps = vec__16651;
var rps = cljs.core.reverse(ps);
return cljs.core.butlast(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,p__16654){
var vec__16655 = p__16654;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655,(1),null);
var ps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655,(2),null);
return thi.ng.geom.polygon.h_segment(v,cljs.core.peek(v),pred,t,thi.ng.dstruct.core.all_after(cljs.core.peek(v),ps__$1));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.THREE_HALVES_PI,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,0.0,more], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._GT__EQ_,thi.ng.math.core.HALF_PI,rps], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._LT__EQ_,thi.ng.math.core.PI,rps], null)], null)));
});
thi.ng.geom.polygon.snip = (function thi$ng$geom$polygon$snip(points,a,b,c,nv,verts){
var vec__16659 = a;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16659,(1),null);
var vec__16662 = b;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16662,(1),null);
var vec__16665 = c;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16665,(1),null);
var cp = (((bx - ax) * (cy - ay)) - ((by - ay) * (cx - ax)));
if((thi.ng.math.core._STAR_eps_STAR_ < cp)){
return cljs.core.not(cljs.core.some((function (p1__16658_SHARP_){
return thi.ng.geom.utils.point_in_triangle2_QMARK_(p1__16658_SHARP_,a,b,c);
}),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(points,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(verts,(0),nv))),a,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b,c], 0))));
} else {
return null;
}
});
thi.ng.geom.polygon.tessellate_STAR_ = (function thi$ng$geom$polygon$tessellate_STAR_(p){
var vec__16671 = (((p instanceof thi.ng.geom.types.Polygon2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"points","points",-1486596883)),thi.ng.geom.core.area(p)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(p),thi.ng.geom.core.area(thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1(p))], null));
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(0),null);
var area = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16671,(1),null);
var nv = cljs.core.count(points);
var verts = cljs.core.vec((((area > (0)))?cljs.core.range.cljs$core$IFn$_invoke$arity$1(nv):cljs.core.range.cljs$core$IFn$_invoke$arity$3((nv - (1)),(-1),(-1))));
var result = cljs.core.PersistentVector.EMPTY;
var verts__$1 = verts;
var v = (nv - (1));
var nv__$1 = nv;
var cnt = (((2) * nv__$1) - (1));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv__$1,(2))){
return result;
} else {
if((cnt > (0))){
var u = (((nv__$1 <= v))?(0):v);
var v__$1 = (u + (1));
var v__$2 = (((nv__$1 <= v__$1))?(0):v__$1);
var w = (v__$2 + (1));
var w__$1 = (((nv__$1 <= w))?(0):w);
var a = (function (){var G__16682 = (verts__$1.cljs$core$IFn$_invoke$arity$1 ? verts__$1.cljs$core$IFn$_invoke$arity$1(u) : verts__$1.call(null,u));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__16682) : points.call(null,G__16682));
})();
var b = (function (){var G__16683 = (verts__$1.cljs$core$IFn$_invoke$arity$1 ? verts__$1.cljs$core$IFn$_invoke$arity$1(v__$2) : verts__$1.call(null,v__$2));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__16683) : points.call(null,G__16683));
})();
var c = (function (){var G__16684 = (verts__$1.cljs$core$IFn$_invoke$arity$1 ? verts__$1.cljs$core$IFn$_invoke$arity$1(w__$1) : verts__$1.call(null,w__$1));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__16684) : points.call(null,G__16684));
})();
if(cljs.core.truth_(thi.ng.geom.polygon.snip(points,a,b,c,nv__$1,verts__$1))){
var result__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));
var verts__$2 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(verts__$1,(0),v__$2),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(verts__$1,(v__$2 + (1)))));
var nv__$2 = (nv__$1 - (1));
var G__16992 = result__$1;
var G__16993 = verts__$2;
var G__16994 = v__$2;
var G__16995 = nv__$2;
var G__16996 = ((2) * nv__$2);
result = G__16992;
verts__$1 = G__16993;
v = G__16994;
nv__$1 = G__16995;
cnt = G__16996;
continue;
} else {
var G__16997 = result;
var G__16998 = verts__$1;
var G__16999 = v__$2;
var G__17000 = nv__$1;
var G__17001 = (cnt - (1));
result = G__16997;
verts__$1 = G__16998;
v = G__16999;
nv__$1 = G__17000;
cnt = G__17001;
continue;
}
} else {
return null;
}
}
break;
}
});
thi.ng.geom.polygon.inset_corner = (function thi$ng$geom$polygon$inset_corner(prev,curr,next,d){
var vec__16691 = thi.ng.math.core._(curr,prev);
var dx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(0),null);
var dy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16691,(1),null);
var d1 = vec__16691;
var vec__16694 = thi.ng.math.core._(next,curr);
var dx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16694,(0),null);
var dy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16694,(1),null);
var d2 = vec__16694;
var d1__$1 = thi.ng.math.core.mag(d1);
var d2__$1 = thi.ng.math.core.mag(d2);
if(cljs.core.not((function (){var or__5043__auto__ = thi.ng.math.core.delta_EQ_(0.0,d1__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.math.core.delta_EQ_(0.0,d2__$1);
}
})())){
var i1 = thi.ng.math.core._STAR_(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(dy1,(- dx1)).thi$ng$math$core$IMathOps$_STAR_$arity$2(null,((1) / d1__$1)),d);
var i2 = thi.ng.math.core._STAR_(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(dy2,(- dx2)).thi$ng$math$core$IMathOps$_STAR_$arity$2(null,((1) / d2__$1)),d);
var c1 = thi.ng.math.core._PLUS_(curr,i1);
var c2 = thi.ng.math.core._PLUS_(curr,i2);
var prev__$1 = thi.ng.math.core._PLUS_(prev,i1);
var next__$1 = thi.ng.math.core._PLUS_(next,i2);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(c1,c2))){
return c1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_(prev__$1,c1,c2,next__$1),new cljs.core.Keyword(null,"p","p",151049309));
}
} else {
return curr;
}
});
/**
 * For CW polygons, use positive distance to inset or negative to outset.
 *   For CCW polygons, use opposite.
 */
thi.ng.geom.polygon.inset_polygon = (function thi$ng$geom$polygon$inset_polygon(points,d){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__16703){
var vec__16704 = p__16703;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704,(2),null);
return thi.ng.geom.polygon.inset_corner(p,c,n,d);
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((3),thi.ng.dstruct.core.wrap_seq(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
});
thi.ng.geom.polygon.smooth = (function thi$ng$geom$polygon$smooth(p__16707,amp,base_weight){
var map__16708 = p__16707;
var map__16708__$1 = cljs.core.__destructure_map(map__16708);
var _ = map__16708__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16708__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pc = thi.ng.geom.core.centroid(_);
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__16711){
var vec__16712 = p__16711;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16712,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16712,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16712,(2),null);
var d = thi.ng.math.core._PLUS_(thi.ng.math.core._(p,c),thi.ng.math.core._(n,c));
var d__$1 = thi.ng.math.core.madd(thi.ng.math.core._(c,pc),base_weight,d);
return thi.ng.math.core.madd(d__$1,amp,c);
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((3),thi.ng.dstruct.core.wrap_seq(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(points)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null)))),null,null,null));
});
(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16735_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__16735_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__16743){
var map__16744 = p__16743;
var map__16744__$1 = cljs.core.__destructure_map(map__16744);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16744__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16748 = this;
var map__16748__$1 = cljs.core.__destructure_map(map__16748);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16748__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (0.5 * cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16752,v){
var vec__16753 = p__16752;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16753,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a + thi.ng.math.core.cross(p,v)),v], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,cljs.core.first(points__$1)], null),thi.ng.dstruct.core.rotate_left((1),points__$1))));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.utils.closest_point_on_segments(p,thi.ng.geom.core.edges(___$1)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__16758,t){
var map__16759 = p__16758;
var map__16759__$1 = cljs.core.__destructure_map(map__16759);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16759__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16760 = this;
var map__16760__$1 = cljs.core.__destructure_map(map__16760);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16760__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points__$1,cljs.core.first(points__$1)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at(___$1,thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (p__16764,udist,include_last_QMARK_){
var map__16765 = p__16764;
var map__16765__$1 = cljs.core.__destructure_map(map__16765);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16765__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16766 = this;
var map__16766__$1 = cljs.core.__destructure_map(map__16766);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points__$1,cljs.core.first(points__$1)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16732_SHARP_){
return thi.ng.geom.core.rotate(p1__16732_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (p__16768,p__16769){
var map__16771 = p__16768;
var map__16771__$1 = cljs.core.__destructure_map(map__16771);
var _ = map__16771__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16771__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16772 = p__16769;
var map__16772__$1 = cljs.core.__destructure_map(map__16772);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16772__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16772__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16772__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16772__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16772__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),true);
var bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16772__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),true);
var map__16773 = this;
var map__16773__$1 = cljs.core.__destructure_map(map__16773);
var ___$1 = map__16773__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16773__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area(___$1) < (0)))?cljs.core.reverse(points__$1):points__$1);
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$2:cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale_size(thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1(points__$2),scale),new cljs.core.Keyword(null,"points","points",-1486596883)));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var points3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points__$2);
var tpoints3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16719_SHARP_){
return thi.ng.math.core._PLUS_(off,p1__16719_SHARP_);
}),tpoints);
var quad_QMARK_ = ((4) === cljs.core.count(points__$2));
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(bottom_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points__$2))], null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16774){
var vec__16775 = p__16774;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16775,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(b),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(points__$2))):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p__16778,p__16779){
var vec__16780 = p__16778;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780,(1),null);
var vec__16783 = p__16779;
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16783,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null)], null);
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points3,(points3.cljs$core$IFn$_invoke$arity$1 ? points3.cljs$core$IFn$_invoke$arity$1((0)) : points3.call(null,(0))))),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tpoints3,(tpoints3.cljs$core$IFn$_invoke$arity$1 ? tpoints3.cljs$core$IFn$_invoke$arity$1((0)) : tpoints3.call(null,(0)))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(top_QMARK_)?((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tpoints3], null)], null):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__16786){
var vec__16787 = p__16786;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16787,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(off,a),thi.ng.math.core._PLUS_(off,b),thi.ng.math.core._PLUS_(off,c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(tpoints))):null)], 0)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (p__16792,p__16793){
var map__16794 = p__16792;
var map__16794__$1 = cljs.core.__destructure_map(map__16794);
var _ = map__16794__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16794__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16795 = p__16793;
var map__16795__$1 = cljs.core.__destructure_map(map__16795);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16795__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16795__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16795__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var inset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16795__$1,new cljs.core.Keyword(null,"inset","inset",-396367740),0.0);
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16795__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796),false);
var bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16795__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628),false);
var wall = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16795__$1,new cljs.core.Keyword(null,"wall","wall",-787661558),1.0);
var nump = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16795__$1,new cljs.core.Keyword(null,"nump","nump",1779362414));
var map__16796 = this;
var map__16796__$1 = cljs.core.__destructure_map(map__16796);
var ___$1 = map__16796__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16796__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points__$2 = (((thi.ng.geom.core.area(___$1) < (0)))?cljs.core.reverse(points__$1):points__$1);
var tpoints = (((inset === (0)))?points__$2:thi.ng.geom.polygon.inset_polygon(points__$2,(- inset)));
var ipoints = thi.ng.geom.polygon.inset_polygon(points__$2,(- wall));
var itpoints = thi.ng.geom.polygon.inset_polygon(points__$2,((- inset) - wall));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var ioff = (cljs.core.truth_(bottom_QMARK_)?thi.ng.math.core.normalize(off,wall):thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
var itoff = (cljs.core.truth_(top_QMARK_)?thi.ng.math.core.normalize(off,(thi.ng.math.core.mag(off) - wall)):off);
var maxp = (cljs.core.count(points__$2) + (1));
var quad_QMARK_ = ((4) === cljs.core.count(points__$2));
var nump__$1 = (cljs.core.truth_(nump)?thi.ng.math.core.clamp(nump,(2),maxp):maxp);
var np1 = (nump__$1 - (1));
var complete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nump__$1,maxp);
var maybe_loop = (function (p1__16720_SHARP_){
if(complete_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16720_SHARP_,(p1__16720_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16720_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__16720_SHARP_.call(null,(0))));
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(nump__$1,p1__16720_SHARP_);
}
});
var drop_wrap = (function (p1__16721_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(np1,p1__16721_SHARP_)),cljs.core.first(p1__16721_SHARP_));
});
var quad_strip = (function (a,b,flip_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__16798,p__16799){
var vec__16801 = p__16798;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(1),null);
var vec__16804 = p__16799;
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16804,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(flip_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,b2,b1], null))], null);
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),a),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),b));
});
var points3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16722_SHARP_){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p1__16722_SHARP_);
}),points__$2);
var ipoints3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16723_SHARP_){
return thi.ng.math.core._PLUS_(ioff,p1__16723_SHARP_);
}),ipoints);
var tpoints3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16724_SHARP_){
return thi.ng.math.core._PLUS_(off,p1__16724_SHARP_);
}),tpoints);
var itpoints3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16725_SHARP_){
return thi.ng.math.core._PLUS_(itoff,p1__16725_SHARP_);
}),itpoints);
var outsides = quad_strip(maybe_loop(points3),maybe_loop(tpoints3),true);
var insides = quad_strip(maybe_loop(ipoints3),maybe_loop(itpoints3),false);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(bottom_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points__$2))], null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16807){
var vec__16811 = p__16807;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16811,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(b),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(points__$2))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16726_SHARP_){
return thi.ng.math.core._PLUS_(ioff,p1__16726_SHARP_);
}),ipoints)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16814){
var vec__16815 = p__16814;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(ioff,a),thi.ng.math.core._PLUS_(ioff,b),thi.ng.math.core._PLUS_(ioff,c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(ipoints))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((complete_QMARK_)?null:quad_strip(drop_wrap(points3),drop_wrap(ipoints3),true))], 0)):quad_strip(maybe_loop(points3),maybe_loop(ipoints3),false)),outsides,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([insides,((complete_QMARK_)?null:(function (){var a = (points3.cljs$core$IFn$_invoke$arity$1 ? points3.cljs$core$IFn$_invoke$arity$1((0)) : points3.call(null,(0)));
var b = (ipoints3.cljs$core$IFn$_invoke$arity$1 ? ipoints3.cljs$core$IFn$_invoke$arity$1((0)) : ipoints3.call(null,(0)));
var c = (itpoints3.cljs$core$IFn$_invoke$arity$1 ? itpoints3.cljs$core$IFn$_invoke$arity$1((0)) : itpoints3.call(null,(0)));
var d = (tpoints3.cljs$core$IFn$_invoke$arity$1 ? tpoints3.cljs$core$IFn$_invoke$arity$1((0)) : tpoints3.call(null,(0)));
var e = (points3.cljs$core$IFn$_invoke$arity$1 ? points3.cljs$core$IFn$_invoke$arity$1(np1) : points3.call(null,np1));
var f = (ipoints3.cljs$core$IFn$_invoke$arity$1 ? ipoints3.cljs$core$IFn$_invoke$arity$1(np1) : ipoints3.call(null,np1));
var g = (itpoints3.cljs$core$IFn$_invoke$arity$1 ? itpoints3.cljs$core$IFn$_invoke$arity$1(np1) : itpoints3.call(null,np1));
var h = (tpoints3.cljs$core$IFn$_invoke$arity$1 ? tpoints3.cljs$core$IFn$_invoke$arity$1(np1) : tpoints3.call(null,np1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b,a], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null)], null)], null);
})()),(cljs.core.truth_(top_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16727_SHARP_){
return thi.ng.math.core._PLUS_(off,p1__16727_SHARP_);
}),tpoints)], null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16825){
var vec__16826 = p__16825;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(off,a),thi.ng.math.core._PLUS_(off,b),thi.ng.math.core._PLUS_(off,c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(tpoints))),((quad_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rseq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16728_SHARP_){
return thi.ng.math.core._PLUS_(itoff,p1__16728_SHARP_);
}),itpoints))], null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16830){
var vec__16831 = p__16830;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(itoff,b),thi.ng.math.core._PLUS_(itoff,a),thi.ng.math.core._PLUS_(itoff,c)], null)], null);
}),thi.ng.geom.polygon.tessellate_STAR_(itpoints))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((complete_QMARK_)?null:quad_strip(drop_wrap(tpoints3),drop_wrap(itpoints3),false))], 0)):quad_strip(maybe_loop(tpoints3),maybe_loop(itpoints3),true))], 0)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16733_SHARP_){
return thi.ng.math.core._STAR_(p1__16733_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.vec(cljs.core.rseq(___$1.points)),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__16844){
var map__16845 = p__16844;
var map__16845__$1 = cljs.core.__destructure_map(map__16845);
var opts = map__16845__$1;
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16845__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var bounds = thi.ng.geom.utils.bounding_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return thi.ng.geom.core.into((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__16846){
var vec__16847 = p__16846;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(2),null);
return thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(b),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(c)], null),i,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.map_point(bounds,a),thi.ng.geom.core.map_point(bounds,b),thi.ng.geom.core.map_point(bounds,c)], null)], null));
}),thi.ng.geom.polygon.tessellate_STAR_(___$1)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors(v,thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var fexpr__16858 = cljs.core.set(thi.ng.geom.core.vertices(___$1));
return (fexpr__16858.cljs$core$IFn$_invoke$arity$1 ? fexpr__16858.cljs$core$IFn$_invoke$arity$1(v) : fexpr__16858.call(null,v));
})())){
return (2);
} else {
return (0);
}
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IClip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IClip$clip_with$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.polygon.clip_convex_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),s));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16734_SHARP_){
return thi.ng.math.core._PLUS_(p1__16734_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (p__16865){
var map__16866 = p__16865;
var map__16866__$1 = cljs.core.__destructure_map(map__16866);
var _ = map__16866__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16866__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16867 = this;
var map__16867__$1 = cljs.core.__destructure_map(map__16867);
var ___$1 = map__16867__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var c = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16868,v){
var vec__16869 = p__16868;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.madd(thi.ng.math.core._PLUS_(p,v),thi.ng.math.core.cross(p,v),c),v], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),cljs.core.first(points__$1)], null),thi.ng.dstruct.core.rotate_left((1),points__$1)));
return thi.ng.math.core._STAR_(c,(1.0 / (6.0 * thi.ng.geom.core.area(___$1))));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IConvexHull$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IConvexHull$convex_hull$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.polygon2.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.polygon.convex_hull_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__16874,p){
var map__16875 = p__16874;
var map__16875__$1 = cljs.core.__destructure_map(map__16875);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16875__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16878 = this;
var map__16878__$1 = cljs.core.__destructure_map(map__16878);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16878__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p]),points__$1))){
return true;
} else {
var vec__16881 = p;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(1),null);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16884,p__16885){
var vec__16886 = p__16884;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(0),null);
var vec__16889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(1),null);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16889,(1),null);
var vec__16892 = p__16885;
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16892,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16892,(1),null);
if((((((((vy < y)) && ((py >= y)))) || ((((py < y)) && ((vy >= y)))))) && (((vx + (((y - vy) / (py - vy)) * (px - vx))) < x)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not(in$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy], null)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.last(points__$1)], null),points__$1));
}
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__16897){
var map__16898 = p__16897;
var map__16898__$1 = cljs.core.__destructure_map(map__16898);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16901 = this;
var map__16901__$1 = cljs.core.__destructure_map(map__16901);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16901__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points__$1,cljs.core.first(points__$1)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.polygon.tessellate_STAR_(___$1);
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__16916){
var map__16917 = p__16916;
var map__16917__$1 = cljs.core.__destructure_map(map__16917);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16917__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16919 = this;
var map__16919__$1 = cljs.core.__destructure_map(map__16919);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16919__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.arc_length(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p__$1,cljs.core.first(p__$1)));
}));

//# sourceMappingURL=thi.ng.geom.polygon.js.map
