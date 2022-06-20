goog.provide('thi.ng.geom.rect');
thi.ng.geom.rect.rect = (function thi$ng$geom$rect$rect(var_args){
var G__16004 = arguments.length;
switch (G__16004) {
case 0:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(1.0),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$1 = (function (w){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(w),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
if(cljs.core.coll_QMARK_(p)){
if(cljs.core.coll_QMARK_(q)){
var p__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var vec__16005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.min(p__$1,q__$1),thi.ng.math.core.max(p__$1,q__$1)], null);
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(0),null);
var q__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16005,(1),null);
return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.math.core._(q__$2,p__$2),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),null,null,null));
}
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(p,q),null,null,null));
}
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$3 = (function (x,y,w){
if(typeof x === 'number'){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(w),null,null,null));
} else {
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(x),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(y,w),null,null,null));
}
}));

(thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return (new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h),null,null,null));
}));

(thi.ng.geom.rect.rect.cljs$lang$maxFixedArity = 4);

thi.ng.geom.rect.union = (function thi$ng$geom$rect$union(p__16016,p__16017){
var map__16021 = p__16016;
var map__16021__$1 = cljs.core.__destructure_map(map__16021);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16021__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__16022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16021__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16022,(1),null);
var map__16025 = p__16017;
var map__16025__$1 = cljs.core.__destructure_map(map__16025);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"p","p",151049309));
var vec__16026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16026,(1),null);
var vec__16030 = thi.ng.math.core.min(p,q);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16030,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16030,(1),null);
var p_SINGLEQUOTE_ = vec__16030;
var x2 = (function (){var x__5128__auto__ = ((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))) + w);
var y__5129__auto__ = ((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1((0)) : q.call(null,(0))) + qw);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var y2 = (function (){var x__5128__auto__ = ((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))) + h);
var y__5129__auto__ = ((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1((1)) : q.call(null,(1))) + qh);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var w__$1 = (x2 - x1);
var h__$1 = (y2 - y1);
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w__$1,h__$1),null,null,null));
});
thi.ng.geom.rect.left = (function thi$ng$geom$rect$left(r){
return thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.right = (function thi$ng$geom$rect$right(r){
return (thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.bottom = (function thi$ng$geom$rect$bottom(r){
return thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)));
});
thi.ng.geom.rect.bottom_left = (function thi$ng$geom$rect$bottom_left(r){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309));
});
thi.ng.geom.rect.top = (function thi$ng$geom$rect$top(r){
return (thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309))) + thi.ng.geom.vector.y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007))));
});
thi.ng.geom.rect.top_right = (function thi$ng$geom$rect$top_right(r){
return thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007)));
});
(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.core.as_polygon(___$1),m);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(thi.ng.geom.utils.closest_point_on_segments(p,thi.ng.geom.core.edges(___$1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__16070){
var map__16071 = p__16070;
var map__16071__$1 = cljs.core.__destructure_map(map__16071);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16071__$1,new cljs.core.Keyword(null,"num","num",1985240673),(2));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ___$1 = this;
var dx = (1.0 / (function (){var or__5043__auto__ = cols;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})());
var dy = (1.0 / (function (){var or__5043__auto__ = rows;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})());
var rx = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,1.0,dx);
var ry = cljs.core.range.cljs$core$IFn$_invoke$arity$3(0.0,1.0,dy);
var s = thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),dx,dy);
var iter__5520__auto__ = (function thi$ng$geom$rect$iter__16072(s__16073){
return (new cljs.core.LazySeq(null,(function (){
var s__16073__$1 = s__16073;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16073__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__16073__$1,y,xs__6360__auto__,temp__5804__auto__,dx,dy,rx,ry,s,___$1,map__16071,map__16071__$1,num,cols,rows){
return (function thi$ng$geom$rect$iter__16072_$_iter__16074(s__16075){
return (new cljs.core.LazySeq(null,((function (s__16073__$1,y,xs__6360__auto__,temp__5804__auto__,dx,dy,rx,ry,s,___$1,map__16071,map__16071__$1,num,cols,rows){
return (function (){
var s__16075__$1 = s__16075;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16075__$1);
if(temp__5804__auto____$1){
var s__16075__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16075__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__16075__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__16077 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__16076 = (0);
while(true){
if((i__16076 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__16076);
var vec__16081 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16081,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16081,(1),null);
var px__$1 = thi.ng.math.core.roundto(px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto(py,thi.ng.math.core._STAR_eps_STAR_);
cljs.core.chunk_append(b__16077,(new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s,null,null,null)));

var G__16328 = (i__16076 + (1));
i__16076 = G__16328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16077),thi$ng$geom$rect$iter__16072_$_iter__16074(cljs.core.chunk_rest(s__16075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16077),null);
}
} else {
var x = cljs.core.first(s__16075__$2);
var vec__16084 = thi.ng.geom.core.unmap_point(___$1,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16084,(1),null);
var px__$1 = thi.ng.math.core.roundto(px,thi.ng.math.core._STAR_eps_STAR_);
var py__$1 = thi.ng.math.core.roundto(py,thi.ng.math.core._STAR_eps_STAR_);
return cljs.core.cons((new thi.ng.geom.types.Rect2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(px__$1,py__$1),s,null,null,null)),thi$ng$geom$rect$iter__16072_$_iter__16074(cljs.core.rest(s__16075__$2)));
}
} else {
return null;
}
break;
}
});})(s__16073__$1,y,xs__6360__auto__,temp__5804__auto__,dx,dy,rx,ry,s,___$1,map__16071,map__16071__$1,num,cols,rows))
,null,null));
});})(s__16073__$1,y,xs__6360__auto__,temp__5804__auto__,dx,dy,rx,ry,s,___$1,map__16071,map__16071__$1,num,cols,rows))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(rx));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,thi$ng$geom$rect$iter__16072(cljs.core.rest(s__16073__$1)));
} else {
var G__16338 = cljs.core.rest(s__16073__$1);
s__16073__$1 = G__16338;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(ry);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(t,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at(___$1,thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__16090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__16090.cljs$core$IFn$_invoke$arity$1 ? fexpr__16090.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__16090.call(null,(0)));
})()),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__16093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__16093.cljs$core$IFn$_invoke$arity$1 ? fexpr__16093.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__16093.call(null,(1)));
})()));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vertices(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.rotate(thi.ng.geom.core.as_polygon(___$1),m);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (_,p__16104){
var map__16105 = p__16104;
var map__16105__$1 = cljs.core.__destructure_map(map__16105);
var opts = map__16105__$1;
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16105__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16105__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16105__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var ___$1 = this;
if((((scale === 1.0)) && ((offset == null)))){
return thi.ng.geom.core.as_mesh((new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),depth),null,null,null)),opts);
} else {
return thi.ng.geom.core.extrude(thi.ng.geom.core.as_polygon(___$1),opts);
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.extrude_shell(thi.ng.geom.core.as_polygon(___$1),opts);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd(s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid(___$1)),s_SINGLEQUOTE_,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__16125,q){
var map__16126 = p__16125;
var map__16126__$1 = cljs.core.__destructure_map(map__16126);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__16127 = this;
var map__16127__$1 = cljs.core.__destructure_map(map__16127);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(((thi.ng.geom.vector.x(q) - thi.ng.geom.vector.x(p__$1)) / thi.ng.geom.vector.x(size__$1)),((thi.ng.geom.vector.y(q) - thi.ng.geom.vector.y(p__$1)) / thi.ng.geom.vector.y(size__$1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd(q,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (p__16134,p__16135){
var map__16136 = p__16134;
var map__16136__$1 = cljs.core.__destructure_map(map__16136);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16136__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16136__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__16137 = p__16135;
var map__16137__$1 = cljs.core.__destructure_map(map__16137);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16137__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16137__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__16138 = this;
var map__16138__$1 = cljs.core.__destructure_map(map__16138);
var pa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var p = thi.ng.math.core.min(pa__$1,pb);
return (new thi.ng.geom.types.Rect2(p,thi.ng.math.core._(thi.ng.math.core.max(thi.ng.math.core._PLUS_(pa__$1,sa__$1),thi.ng.math.core._PLUS_(pb,sb)),p),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,r){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min(qa,qb);
var s = thi.ng.math.core._(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_((function (p1__16057_SHARP_){
return (p1__16057_SHARP_ >= (0));
}),s)){
return (new thi.ng.geom.types.Rect2(p_SINGLEQUOTE_,s,null,null,null));
} else {
return null;
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.add_face((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,thi.ng.geom.core.vertices(___$1)),(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uv","uv",-1197749379),thi.ng.geom.attribs.uv_default_rect], null),opts], 0))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,p__16171){
var map__16173 = p__16171;
var map__16173__$1 = cljs.core.__destructure_map(map__16173);
var vec__16174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16174,(1),null);
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5041__auto__ = thi.ng.geom.core.contains_point_QMARK_(___$1,p);
if(cljs.core.truth_(and__5041__auto__)){
return thi.ng.geom.core.contains_point_QMARK_(___$1,q);
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301)], null);
} else {
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_(p,q,thi.ng.geom.core.edges(___$1));
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__16186 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_(p,dir,thi.ng.geom.core.edges(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Line2)){
return thi.ng.geom.core.intersect_line(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Rect2)){
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Circle2)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1(["can't intersect w/ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));

}
}
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((0)) : c.call(null,(0))),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)))),c,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0))),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((1)) : c.call(null,(1))))], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var G__16212 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(v);
var fexpr__16211 = cljs.core.set(thi.ng.geom.core.vertices(___$1));
return (fexpr__16211.cljs$core$IFn$_invoke$arity$1 ? fexpr__16211.cljs$core$IFn$_invoke$arity$1(G__16212) : fexpr__16211.call(null,G__16212));
})())){
return (2);
} else {
return (0);
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,q){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16056_SHARP_){
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_coeff,q,p1__16056_SHARP_),thi.ng.math.core._STAR_eps_STAR_);
})),cljs.core.min,thi.ng.geom.core.edges(___$1));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__16227){
var map__16228 = p__16227;
var map__16228__$1 = cljs.core.__destructure_map(map__16228);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16228__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__16233 = this;
var map__16233__$1 = cljs.core.__destructure_map(map__16233);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core._STAR_(s__$1,-0.5),s__$1,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__16234,o){
var map__16236 = p__16234;
var map__16236__$1 = cljs.core.__destructure_map(map__16236);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16236__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__16238 = this;
var map__16238__$1 = cljs.core.__destructure_map(map__16238);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16238__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.Rect2(thi.ng.math.core.madd(s__$1,-0.5,o),s__$1,null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__16243,p__16244){
var map__16245 = p__16243;
var map__16245__$1 = cljs.core.__destructure_map(map__16245);
var vec__16246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16245__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16246,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16246,(1),null);
var vec__16249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16245__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16249,(1),null);
var vec__16252 = p__16244;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16252,(1),null);
var map__16255 = this;
var map__16255__$1 = cljs.core.__destructure_map(map__16255);
var vec__16256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16255__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16256,(1),null);
var vec__16259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16255__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16259,(1),null);
var and__5041__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,w__$1,(x - px__$1));
if(cljs.core.truth_(and__5041__auto__)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,h__$1,(y - py__$1));
} else {
return and__5041__auto__;
}
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var c = thi.ng.math.core._PLUS_(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var b = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((0)) : c.call(null,(0))),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))));
var d = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0))),(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1((1)) : c.call(null,(1))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(c,thi.ng.geom.core.dist(c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
var vec__16280 = thi.ng.geom.core.vertices(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),null,null,null)),(new thi.ng.geom.types.Triangle2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null),null,null,null))], null);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__16289){
var map__16293 = p__16289;
var map__16293__$1 = cljs.core.__destructure_map(map__16293);
var opts = map__16293__$1;
var tess_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16293__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__16058_SHARP_){
var G__16294 = thi.ng.geom.core.vertices(p1__16058_SHARP_);
return (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(G__16294) : tess_fn.call(null,G__16294));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16059_SHARP_){
return (new thi.ng.geom.types.Triangle2(p1__16059_SHARP_,null,null,null));
}))),thi.ng.geom.core.subdivide(___$1,opts));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
var fexpr__16296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__16296.cljs$core$IFn$_invoke$arity$1 ? fexpr__16296.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__16296.call(null,(0)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
var fexpr__16299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (fexpr__16299.cljs$core$IFn$_invoke$arity$1 ? fexpr__16299.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__16299.call(null,(1)));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices(___$1),null,null,null));
}));

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))));
}));

//# sourceMappingURL=thi.ng.geom.rect.js.map
