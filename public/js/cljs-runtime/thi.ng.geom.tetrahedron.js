goog.provide('thi.ng.geom.tetrahedron');
/**
 * Takes a seq of 4 3D points, returns them as vector in the order so
 *   that the last point is on the opposite side of the plane defined by
 *   the first three points.
 */
thi.ng.geom.tetrahedron.orient_tetra = (function thi$ng$geom$tetrahedron$orient_tetra(p__15491){
var vec__15492 = p__15491;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15492,(3),null);
var t = vec__15492;
var dp = thi.ng.math.core.dot(thi.ng.math.core.normalize(thi.ng.math.core._(d,a)),thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c));
if((dp < (0))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,b,d], null);
}
});
thi.ng.geom.tetrahedron.tetrahedron = (function thi$ng$geom$tetrahedron$tetrahedron(var_args){
var G__15498 = arguments.length;
switch (G__15498) {
case 1:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.tetrahedron.orient_tetra(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points)),null,null,null));
}));

(thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null));
}));

(thi.ng.geom.tetrahedron.tetrahedron.cljs$lang$maxFixedArity = 4);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15514_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__15514_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__15502_SHARP_){
var G__15525 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__15502_SHARP_);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15525) : thi.ng.math.core.abs_STAR_.call(null,G__15525));
})),cljs.core._PLUS_,thi.ng.geom.core.faces(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISubdivide$subdivide$arity$1 = (function (_){
var ___$1 = this;
var cp = thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15507_SHARP_){
return thi.ng.geom.tetrahedron.tetrahedron.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15507_SHARP_,cp));
}),thi.ng.geom.core.faces(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.point_at(___$1,thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.from_barycentric(thi.ng.geom.core.vertices(___$1),thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((4)));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15512_SHARP_){
return thi.ng.math.core._STAR_(p1__15512_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFlip$flip$arity$1 = (function (p__15531){
var map__15533 = p__15531;
var map__15533__$1 = cljs.core.__destructure_map(map__15533);
var vec__15534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(3),null);
var map__15537 = this;
var map__15537__$1 = cljs.core.__destructure_map(map__15537);
var vec__15538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15537__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538,(3),null);
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,c__$1,d__$1], null),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
var vec__15542 = thi.ng.geom.tetrahedron.orient_tetra(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(3),null);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"mesh","mesh",456320595));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.core.faces(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Tetrahedron)){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_(thi.ng.geom.tetrahedron.orient_tetra(thi.ng.geom.core.vertices(___$1)),thi.ng.geom.tetrahedron.orient_tetra(thi.ng.geom.core.vertices(s)));
} else {
if(((cljs.core.sequential_QMARK_(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(s))))){
return thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_(thi.ng.geom.core.vertices(___$1),thi.ng.geom.tetrahedron.orient_tetra(s));
} else {
return thi.ng.xerror.core.type_error_BANG_("Tetrahedron",s);

}
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,p__15546){
var map__15547 = p__15546;
var map__15547__$1 = cljs.core.__destructure_map(map__15547);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15547__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15547__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__15551,v){
var map__15552 = p__15551;
var map__15552__$1 = cljs.core.__destructure_map(map__15552);
var vec__15553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15552__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553,(3),null);
var map__15559 = this;
var map__15559__$1 = cljs.core.__destructure_map(map__15559);
var vec__15560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15559__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15560,(3),null);
var pred__15566 = cljs.core._EQ_;
var expr__15567 = v;
if(cljs.core.truth_((pred__15566.cljs$core$IFn$_invoke$arity$2 ? pred__15566.cljs$core$IFn$_invoke$arity$2(a__$1,expr__15567) : pred__15566.call(null,a__$1,expr__15567)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,b__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__15566.cljs$core$IFn$_invoke$arity$2 ? pred__15566.cljs$core$IFn$_invoke$arity$2(b__$1,expr__15567) : pred__15566.call(null,b__$1,expr__15567)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,c__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__15566.cljs$core$IFn$_invoke$arity$2 ? pred__15566.cljs$core$IFn$_invoke$arity$2(c__$1,expr__15567) : pred__15566.call(null,c__$1,expr__15567)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,a__$1,d__$1], null);
} else {
if(cljs.core.truth_((pred__15566.cljs$core$IFn$_invoke$arity$2 ? pred__15566.cljs$core$IFn$_invoke$arity$2(d__$1,expr__15567) : pred__15566.call(null,d__$1,expr__15567)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null);
} else {
return null;
}
}
}
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (_,v){
var ___$1 = this;
if(cljs.core.truth_((function (){var fexpr__15570 = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
return (fexpr__15570.cljs$core$IFn$_invoke$arity$1 ? fexpr__15570.cljs$core$IFn$_invoke$arity$1(v) : fexpr__15570.call(null,v));
})())){
return (3);
} else {
return (0);
}
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (t,_){
var t__$1 = this;
return thi.ng.geom.core.faces(t__$1);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (p__15574){
var map__15575 = p__15574;
var map__15575__$1 = cljs.core.__destructure_map(map__15575);
var vec__15576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15575__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(3),null);
var map__15580 = this;
var map__15580__$1 = cljs.core.__destructure_map(map__15580);
var vec__15581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15580__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15581,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1,b__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1,c__$1], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1,a__$1], null)], null)], null);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15513_SHARP_){
return thi.ng.math.core._PLUS_(p1__15513_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$2 = (function (_,e){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ISlice$slice_with$arity$3 = (function (_,e,classifier){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.V3,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(o,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,p){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15508_SHARP_){
return thi.ng.geom.core.rotate_x(p1__15508_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15509_SHARP_){
return thi.ng.geom.core.rotate_y(p1__15509_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15510_SHARP_){
return thi.ng.geom.core.rotate_z(p1__15510_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Tetrahedron(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__15511_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__15511_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (p__15597){
var map__15598 = p__15597;
var map__15598__$1 = cljs.core.__destructure_map(map__15598);
var vec__15599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15598__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15599,(3),null);
var map__15602 = this;
var map__15602__$1 = cljs.core.__destructure_map(map__15602);
var vec__15603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15602__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15603,(3),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,c__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,a__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,d__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,d__$1], null)], null);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__15606){
var map__15607 = p__15606;
var map__15607__$1 = cljs.core.__destructure_map(map__15607);
var vec__15608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15607__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15608,(3),null);
var map__15615 = this;
var map__15615__$1 = cljs.core.__destructure_map(map__15615);
var vec__15616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15615__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(2),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15616,(3),null);
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a__$1,b__$1,c__$1);
return Math.abs(((thi.ng.math.core.THIRD * thi.ng.geom.utils.tri_area3(a__$1,b__$1,c__$1)) * (thi.ng.math.core.dot(n,d__$1) - thi.ng.math.core.dot(n,a__$1))));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.faces(___$1);
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),thi.ng.geom.core.vertices(___$1));
}));

(thi.ng.geom.types.Tetrahedron.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),thi.ng.geom.core.vertices(___$1));
}));

//# sourceMappingURL=thi.ng.geom.tetrahedron.js.map
