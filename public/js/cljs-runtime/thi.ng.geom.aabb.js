goog.provide('thi.ng.geom.aabb');
/**
 * Creates a new axis-aligned bounding box.
 */
thi.ng.geom.aabb.aabb = (function thi$ng$geom$aabb$aabb(var_args){
var G__15785 = arguments.length;
switch (G__15785) {
case 0:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(1.0),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$1 = (function (size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(size),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(size),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return (new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(0.0),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(sx,sy,sz),null,null,null));
}));

(thi.ng.geom.aabb.aabb.cljs$lang$maxFixedArity = 3);

thi.ng.geom.aabb.aabb_from_minmax = (function thi$ng$geom$aabb$aabb_from_minmax(p,q){
var p__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p);
var q__$1 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q);
var p__$2 = thi.ng.math.core.min(p__$1,q__$1);
return (new thi.ng.geom.types.AABB(p__$2,thi.ng.math.core._(thi.ng.math.core.max(p__$2,q__$1),p__$2),null,null,null));
});
(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.core.transform(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),m);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__15810){
var map__15811 = p__15810;
var map__15811__$1 = cljs.core.__destructure_map(map__15811);
var vec__15812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15811__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(2),null);
var map__15815 = this;
var map__15815__$1 = cljs.core.__destructure_map(map__15815);
var vec__15816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15815__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15816,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15816,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15816,(2),null);
return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__15823,q){
var map__15825 = p__15823;
var map__15825__$1 = cljs.core.__destructure_map(map__15825);
var vec__15826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15825__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15826,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15826,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15826,(2),null);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15825__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15830 = this;
var map__15830__$1 = cljs.core.__destructure_map(map__15830);
var vec__15831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15830__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831,(1),null);
var pz__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15831,(2),null);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15830__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)),px__$1,(px__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(0)))),thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)),py__$1,(py__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(1)))),thi.ng.math.core.clamp(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)),pz__$1,(pz__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(2)))));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (_,p__15834){
var map__15835 = p__15834;
var map__15835__$1 = cljs.core.__destructure_map(map__15835);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15835__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15835__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15835__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15835__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var ___$1 = this;
var sx = (function (){var or__5043__auto__ = cols;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})();
var sy = (function (){var or__5043__auto__ = rows;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})();
var sz = (function (){var or__5043__auto__ = slices;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})();
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007));
var s = thi.ng.math.core.div(size,sx,sy,sz);
var iter__5520__auto__ = (function thi$ng$geom$aabb$iter__15836(s__15837){
return (new cljs.core.LazySeq(null,(function (){
var s__15837__$1 = s__15837;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15837__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var z = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__15837__$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__15836_$_iter__15838(s__15839){
return (new cljs.core.LazySeq(null,((function (s__15837__$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices){
return (function (){
var s__15839__$1 = s__15839;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15839__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var y = cljs.core.first(xs__6360__auto____$1);
var iterys__5516__auto__ = ((function (s__15839__$1,s__15837__$1,y,xs__6360__auto____$1,temp__5804__auto____$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices){
return (function thi$ng$geom$aabb$iter__15836_$_iter__15838_$_iter__15840(s__15841){
return (new cljs.core.LazySeq(null,((function (s__15839__$1,s__15837__$1,y,xs__6360__auto____$1,temp__5804__auto____$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices){
return (function (){
var s__15841__$1 = s__15841;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__15841__$1);
if(temp__5804__auto____$2){
var s__15841__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__15841__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__15841__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__15843 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__15842 = (0);
while(true){
if((i__15842 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__15842);
cljs.core.chunk_append(b__15843,(new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z).thi$ng$math$core$IMathOps$madd$arity$3(null,size,p),s,null,null,null)));

var G__16008 = (i__15842 + (1));
i__15842 = G__16008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),thi$ng$geom$aabb$iter__15836_$_iter__15838_$_iter__15840(cljs.core.chunk_rest(s__15841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),null);
}
} else {
var x = cljs.core.first(s__15841__$2);
return cljs.core.cons((new thi.ng.geom.types.AABB(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x,y,z).thi$ng$math$core$IMathOps$madd$arity$3(null,size,p),s,null,null,null)),thi$ng$geom$aabb$iter__15836_$_iter__15838_$_iter__15840(cljs.core.rest(s__15841__$2)));
}
} else {
return null;
}
break;
}
});})(s__15839__$1,s__15837__$1,y,xs__6360__auto____$1,temp__5804__auto____$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices))
,null,null));
});})(s__15839__$1,s__15837__$1,y,xs__6360__auto____$1,temp__5804__auto____$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sx))));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,thi$ng$geom$aabb$iter__15836_$_iter__15838(cljs.core.rest(s__15839__$1)));
} else {
var G__16009 = cljs.core.rest(s__15839__$1);
s__15839__$1 = G__16009;
continue;
}
} else {
return null;
}
break;
}
});})(s__15837__$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices))
,null,null));
});})(s__15837__$1,z,xs__6360__auto__,temp__5804__auto__,sx,sy,sz,p,size,s,___$1,map__15835,map__15835__$1,num,cols,rows,slices))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sy))));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,thi$ng$geom$aabb$iter__15836(cljs.core.rest(s__15837__$1)));
} else {
var G__16010 = cljs.core.rest(s__15837__$1);
s__15837__$1 = G__16010;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.butlast(thi.ng.math.core.norm_range(sz)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
var vec__15848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15848,(2),null);
var p = vec__15848;
var vec__15851 = thi.ng.math.core._PLUS_(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15851,(2),null);
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
var vec__15854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15854,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15854,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15854,(2),null);
var p = vec__15854;
var vec__15857 = thi.ng.math.core._PLUS_(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15857,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15857,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15857,(2),null);
var id = (thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((6)) | (0));
if((id < (2))){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((((id === (0)))?x1:x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
if((id < (4))){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),id))?y1:y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),id))?z1:z2));

}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var s_SINGLEQUOTE_ = thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),s);
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd(thi.ng.math.core._(s_SINGLEQUOTE_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),-0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309))),s_SINGLEQUOTE_,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (p__15862,q){
var map__15863 = p__15862;
var map__15863__$1 = cljs.core.__destructure_map(map__15863);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15863__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15863__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15864 = this;
var map__15864__$1 = cljs.core.__destructure_map(map__15864);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15864__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15864__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(0))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(1))),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(2))) / cljs.core.nth.cljs$core$IFn$_invoke$arity$2(size__$1,(2))));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,q){
var ___$1 = this;
return thi.ng.math.core.madd(q,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$union$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"p","p",151049309));
var p = thi.ng.math.core.min(pa,pb);
return (new thi.ng.geom.types.AABB(p,thi.ng.math.core._(thi.ng.math.core.max(thi.ng.math.core._PLUS_(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),thi.ng.math.core._PLUS_(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007)))),p),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$math$core$ISetOps$intersection$arity$2 = (function (_,b){
var ___$1 = this;
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var qa = thi.ng.math.core._PLUS_(pa,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"p","p",151049309));
var qb = thi.ng.math.core._PLUS_(pb,cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"size","size",1098693007)));
var p_SINGLEQUOTE_ = thi.ng.math.core.max(pa,pb);
var q_SINGLEQUOTE_ = thi.ng.math.core.min(qa,qb);
var s_SINGLEQUOTE_ = thi.ng.math.core._(q_SINGLEQUOTE_,p_SINGLEQUOTE_);
if(cljs.core.every_QMARK_((function (p1__15803_SHARP_){
return (p1__15803_SHARP_ >= 0.0);
}),s_SINGLEQUOTE_)){
return (new thi.ng.geom.types.AABB(p_SINGLEQUOTE_,s_SINGLEQUOTE_,null,null,null));
} else {
return null;
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
var ext = thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5);
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),ext),thi.ng.math.core.mag(ext));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__15879){
var map__15880 = p__15879;
var map__15880__$1 = cljs.core.__destructure_map(map__15880);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15880__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15880__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15880__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__15884 = thi.ng.geom.core.vertices(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15884,(7),null);
var vec__15887 = thi.ng.dstruct.core.demunge_flags_seq(flags,"nsewfb");
var north = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(0),null);
var south = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(1),null);
var east = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(2),null);
var west = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(3),null);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(4),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15887,(5),null);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)], 0)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
return thi.ng.xerror.core.type_error_BANG_("AABB",s);

}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
var vec__15901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15901,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15901,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15901,(2),null);
var a = vec__15901;
var vec__15904 = thi.ng.math.core._PLUS_(a,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904,(2),null);
var g = vec__15904;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2),g,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__15918 = thi.ng.geom.core.vertices(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15918,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p__15921){
var vec__15922 = p__15921;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15922,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15922,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15922,(2),null);
var ___$1 = this;
var vec__15926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15926,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15926,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15926,(2),null);
var p = vec__15926;
var vec__15929 = thi.ng.math.core._PLUS_(p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)));
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15929,(2),null);
var on_plane_QMARK_ = (function (p__15936){
var vec__15938 = p__15936;
var minp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(0),null);
var maxp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(1),null);
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(2),null);
var min1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(3),null);
var max1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(4),null);
var min2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(5),null);
var max2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(6),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(7),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15938,(8),null);
var and__5041__auto__ = (function (){var or__5043__auto__ = thi.ng.math.core.delta_EQ_(minp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.math.core.delta_EQ_(maxp,p__$1,thi.ng.math.core._STAR_eps_STAR_);
}
})();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min1,max1,c1);
if(cljs.core.truth_(and__5041__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(min2,max2,c2);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
if(cljs.core.truth_(cljs.core.some(on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(x1,x2,x);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(y1,y2,y);
if(cljs.core.truth_(and__5041__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(z1,z2,z);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return (1);
} else {
return (-1);
}
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__15943){
var map__15944 = p__15943;
var map__15944__$1 = cljs.core.__destructure_map(map__15944);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15944__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15945 = this;
var map__15945__$1 = cljs.core.__destructure_map(map__15945);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15945__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core._STAR_(size__$1,-0.5),size__$1,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__15946,q){
var map__15947 = p__15946;
var map__15947__$1 = cljs.core.__destructure_map(map__15947);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15947__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15949 = this;
var map__15949__$1 = cljs.core.__destructure_map(map__15949);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15949__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return (new thi.ng.geom.types.AABB(thi.ng.math.core.madd(size__$1,-0.5,q),size__$1,null,null,null));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.madd(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),0.5,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__15957,q){
var map__15959 = p__15957;
var map__15959__$1 = cljs.core.__destructure_map(map__15959);
var vec__15960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15960,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15960,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15960,(2),null);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15964 = this;
var map__15964__$1 = cljs.core.__destructure_map(map__15964);
var vec__15965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15964__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(0),null);
var py__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(1),null);
var pz__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(2),null);
var s__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15964__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var and__5041__auto__ = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(px__$1,(px__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(0))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(0)));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(py__$1,(py__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(1))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(1)));
if(cljs.core.truth_(and__5041__auto____$1)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(pz__$1,(pz__$1 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1,(2))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(q,(2)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_x(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_y(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_around_axis(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007))),axis,theta);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__15980 = thi.ng.geom.core.vertices(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15980,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__15988){
var map__15989 = p__15988;
var map__15989__$1 = cljs.core.__destructure_map(map__15989);
var vec__15990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15989__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15990,(2),null);
var map__15994 = this;
var map__15994__$1 = cljs.core.__destructure_map(map__15994);
var vec__15995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15994__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15995,(0),null);
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15995,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15995,(2),null);
return ((w__$1 * h__$1) * d__$1);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__15999){
var map__16000 = p__15999;
var map__16000__$1 = cljs.core.__destructure_map(map__16000);
var opts = map__16000__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16000__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(0));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(1));
}));

(thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"size","size",1098693007)),(2));
}));

//# sourceMappingURL=thi.ng.geom.aabb.js.map
