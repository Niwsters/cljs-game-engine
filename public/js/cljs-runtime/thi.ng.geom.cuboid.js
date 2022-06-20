goog.provide('thi.ng.geom.cuboid');
thi.ng.geom.cuboid.cuboid = (function thi$ng$geom$cuboid$cuboid(var_args){
var G__15644 = arguments.length;
switch (G__15644) {
case 0:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0();

break;
case 8:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 1:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1(1.0);
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)),null,null,null));
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(typeof x === 'number'){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),x);
} else {
if(cljs.core.map_QMARK_(x)){
return thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"size","size",1098693007)));
} else {
if(cljs.core.sequential_QMARK_(x)){
if(((8) === cljs.core.count(x))){
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,x),null,null,null));
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2("Wrong number of points, expected 8 but got",cljs.core.count(x));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}));

(thi.ng.geom.cuboid.cuboid.cljs$core$IFn$_invoke$arity$2 = (function (o,size){
var vec__15648 = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648,(2),null);
var a = vec__15648;
var vec__15651 = thi.ng.math.core._PLUS_(a,size);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(2),null);
var g = vec__15651;
var b = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y1,z2);
var c = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z2);
var d = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y1,z1);
var e = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z1);
var f = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x1,y2,z2);
var h = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(x2,y2,z1);
return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null),null,null,null));
}));

(thi.ng.geom.cuboid.cuboid.cljs$lang$maxFixedArity = 8);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15666_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__15666_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15656_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__15656_SHARP_);
})),cljs.core._PLUS_,thi.ng.geom.core.tessellate(___$1));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,f){
var p_SINGLEQUOTE_ = thi.ng.geom.core.closest_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
var d = thi.ng.geom.core.dist_squared(p,p_SINGLEQUOTE_);
if((d < (acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1((1)) : acc.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_SINGLEQUOTE_,d], null);
} else {
return acc;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1.0E100], null),thi.ng.geom.core.faces(___$1)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.subdivide(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$2 = (function (p__15668,p__15669){
var map__15670 = p__15668;
var map__15670__$1 = cljs.core.__destructure_map(map__15670);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15670__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__15671 = p__15669;
var map__15671__$1 = cljs.core.__destructure_map(map__15671);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15671__$1,new cljs.core.Keyword(null,"num","num",1985240673),(1));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15671__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15671__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15671__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var map__15684 = this;
var map__15684__$1 = cljs.core.__destructure_map(map__15684);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15684__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var ru = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__5043__auto__ = cols;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})()));
var rv = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__5043__auto__ = rows;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})()));
var rw = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),thi.ng.math.core.norm_range((function (){var or__5043__auto__ = slices;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return num;
}
})()));
var map_p = (function (p){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15657_SHARP_){
return thi.ng.math.core.roundto(p1__15657_SHARP_,thi.ng.math.core._STAR_eps_STAR_);
}),thi.ng.geom.utils.map_trilinear(points__$1,p)));
});
var iter__5520__auto__ = (function thi$ng$geom$cuboid$iter__15690(s__15691){
return (new cljs.core.LazySeq(null,(function (){
var s__15691__$1 = s__15691;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15691__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__15700 = cljs.core.first(xs__6360__auto__);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700,(0),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15700,(1),null);
var iterys__5516__auto__ = ((function (s__15691__$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__15690_$_iter__15692(s__15693){
return (new cljs.core.LazySeq(null,((function (s__15691__$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices){
return (function (){
var s__15693__$1 = s__15693;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15693__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var vec__15706 = cljs.core.first(xs__6360__auto____$1);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(1),null);
var iterys__5516__auto__ = ((function (s__15693__$1,s__15691__$1,vec__15706,v1,v2,xs__6360__auto____$1,temp__5804__auto____$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices){
return (function thi$ng$geom$cuboid$iter__15690_$_iter__15692_$_iter__15694(s__15695){
return (new cljs.core.LazySeq(null,((function (s__15693__$1,s__15691__$1,vec__15706,v1,v2,xs__6360__auto____$1,temp__5804__auto____$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices){
return (function (){
var s__15695__$1 = s__15695;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__15695__$1);
if(temp__5804__auto____$2){
var s__15695__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__15695__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__15695__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__15697 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__15696 = (0);
while(true){
if((i__15696 < size__5519__auto__)){
var vec__15713 = cljs.core._nth(c__5518__auto__,i__15696);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(1),null);
cljs.core.chunk_append(b__15697,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)));

var G__15790 = (i__15696 + (1));
i__15696 = G__15790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15697),thi$ng$geom$cuboid$iter__15690_$_iter__15692_$_iter__15694(cljs.core.chunk_rest(s__15695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15697),null);
}
} else {
var vec__15719 = cljs.core.first(s__15695__$2);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15719,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15719,(1),null);
return cljs.core.cons((new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)),null,null,null)),thi$ng$geom$cuboid$iter__15690_$_iter__15692_$_iter__15694(cljs.core.rest(s__15695__$2)));
}
} else {
return null;
}
break;
}
});})(s__15693__$1,s__15691__$1,vec__15706,v1,v2,xs__6360__auto____$1,temp__5804__auto____$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices))
,null,null));
});})(s__15693__$1,s__15691__$1,vec__15706,v1,v2,xs__6360__auto____$1,temp__5804__auto____$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(ru));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,thi$ng$geom$cuboid$iter__15690_$_iter__15692(cljs.core.rest(s__15693__$1)));
} else {
var G__15791 = cljs.core.rest(s__15693__$1);
s__15693__$1 = G__15791;
continue;
}
} else {
return null;
}
break;
}
});})(s__15691__$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices))
,null,null));
});})(s__15691__$1,vec__15700,w1,w2,xs__6360__auto__,temp__5804__auto__,ru,rv,rw,map_p,map__15684,map__15684__$1,points__$1,map__15670,map__15670__$1,points,map__15671,map__15671__$1,num,cols,rows,slices))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(rv));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,thi$ng$geom$cuboid$iter__15690(cljs.core.rest(s__15691__$1)));
} else {
var G__15792 = cljs.core.rest(s__15691__$1);
s__15691__$1 = G__15792;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rw);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (p__15730){
var map__15731 = p__15730;
var map__15731__$1 = cljs.core.__destructure_map(map__15731);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15731__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15731__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15734 = this;
var map__15734__$1 = cljs.core.__destructure_map(map__15734);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15734__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15734__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__15738 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(2),null);
var vec__15741 = thi.ng.math.core._PLUS_(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15741,(2),null);
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(x1,x2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(y1,y2),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2(z1,z2));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__15751){
var map__15752 = p__15751;
var map__15752__$1 = cljs.core.__destructure_map(map__15752);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15752__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15752__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__15756 = this;
var map__15756__$1 = cljs.core.__destructure_map(map__15756);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15756__$1,new cljs.core.Keyword(null,"p","p",151049309));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15756__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var vec__15757 = p__$1;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15757,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15757,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15757,(2),null);
var vec__15760 = thi.ng.math.core._PLUS_(p__$1,size__$1);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760,(1),null);
var z2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15760,(2),null);
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

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15663_SHARP_){
return thi.ng.math.core._STAR_(p1__15663_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$map_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IPointMap$unmap_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.utils.map_trilinear(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),p);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,p__15763){
var map__15764 = p__15763;
var map__15764__$1 = cljs.core.__destructure_map(map__15764);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15764__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15764__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),"nsewfb");
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15764__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
var vec__15765 = thi.ng.geom.core.vertices(___$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765,(7),null);
var vec__15768 = thi.ng.dstruct.core.demunge_flags_seq(flags,"nsewfb");
var north = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(0),null);
var south = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(1),null);
var east = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(2),null);
var west = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(3),null);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(4),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768,(5),null);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(east)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),(0),attribs,null):null),(cljs.core.truth_(west)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),(1),attribs,null):null),(cljs.core.truth_(north)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),(2),attribs,null):null),(cljs.core.truth_(south)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),(3),attribs,null):null),(cljs.core.truth_(front)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),(4),attribs,null):null),(cljs.core.truth_(back)?thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null),(5),attribs,null):null)], null)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
var vec__15771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771,(7),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g,h,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a,e,h], null)], null);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15665_SHARP_){
return thi.ng.math.core._PLUS_(p1__15665_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return (- cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (c,f){
var c_SINGLEQUOTE_ = thi.ng.geom.core.classify_point(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(f),p);
if((c_SINGLEQUOTE_ > (0))){
return cljs.core.reduced(c_SINGLEQUOTE_);
} else {
var x__5128__auto__ = c;
var y__5129__auto__ = c_SINGLEQUOTE_;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
}
}),-1.0,thi.ng.geom.core.faces(___$1)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.classify_point(___$1,p) >= (0));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15658_SHARP_){
return thi.ng.geom.core.rotate_x(p1__15658_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15660_SHARP_){
return thi.ng.geom.core.rotate_y(p1__15660_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15661_SHARP_){
return thi.ng.geom.core.rotate_z(p1__15661_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15662_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__15662_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
var vec__15774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(7),null);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
var vec__15777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15777,(7),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15667_SHARP_){
var G__15780 = thi.ng.geom.core.volume(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(p1__15667_SHARP_));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15780) : thi.ng.math.core.abs_STAR_.call(null,G__15780));
})),cljs.core._PLUS_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,d,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,e,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,d,e,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f,g,e], null)], null));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,p__15781){
var map__15782 = p__15781;
var map__15782__$1 = cljs.core.__destructure_map(map__15782);
var opts = map__15782__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15782__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),thi.ng.geom.utils.tessellate_3);
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.faces),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(f)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"slices","slices",-94090930),null,new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null),cljs.core.keys(opts)))?thi.ng.geom.core.subdivide(___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

//# sourceMappingURL=thi.ng.geom.cuboid.js.map
