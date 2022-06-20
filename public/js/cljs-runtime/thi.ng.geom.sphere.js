goog.provide('thi.ng.geom.sphere');
thi.ng.geom.sphere.sphere = (function thi$ng$geom$sphere$sphere(var_args){
var G__17656 = arguments.length;
switch (G__17656) {
case 0:
return thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new thi.ng.geom.types.Sphere(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),1.0,null,null,null));
}));

(thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$1 = (function (r){
return (new thi.ng.geom.types.Sphere(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),r,null,null,null));
}));

(thi.ng.geom.sphere.sphere.cljs$core$IFn$_invoke$arity$2 = (function (p,r){
return (new thi.ng.geom.types.Sphere(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),r,null,null,null));
}));

(thi.ng.geom.sphere.sphere.cljs$lang$maxFixedArity = 2);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (p__17675){
var map__17676 = p__17675;
var map__17676__$1 = cljs.core.__destructure_map(map__17676);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17676__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17677 = this;
var map__17677__$1 = cljs.core.__destructure_map(map__17677);
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17677__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (((4.0 * thi.ng.math.core.PI) * r__$1) * r__$1);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__17682,q){
var map__17683 = p__17682;
var map__17683__$1 = cljs.core.__destructure_map(map__17683);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17683__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17683__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17687 = this;
var map__17687__$1 = cljs.core.__destructure_map(map__17687);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17687__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17687__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.math.core._PLUS__BANG_(thi.ng.math.core.normalize(thi.ng.math.core._(q,p__$1),r__$1),p__$1);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)))));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190))));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_z(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),theta),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.math.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),s),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)) * s),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)) * s),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 = (function (p__17692,p__17693){
var map__17694 = p__17692;
var map__17694__$1 = cljs.core.__destructure_map(map__17694);
var vec__17695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17694__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17695,(2),null);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17694__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17698 = p__17693;
var map__17698__$1 = cljs.core.__destructure_map(map__17698);
var opts = map__17698__$1;
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17698__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var res = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17698__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var slices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17698__$1,new cljs.core.Keyword(null,"slices","slices",-94090930));
var stacks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17698__$1,new cljs.core.Keyword(null,"stacks","stacks",-456633410));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17698__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__17702 = this;
var map__17702__$1 = cljs.core.__destructure_map(map__17702);
var vec__17703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(1),null);
var z__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(2),null);
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17702__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var res__$1 = (function (){var or__5043__auto__ = res;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.core._STAR_resolution_STAR_;
}
})();
var slices__$1 = (function (){var or__5043__auto__ = slices;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return res__$1;
}
})();
var stacks__$1 = (function (){var or__5043__auto__ = stacks;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return res__$1;
}
})();
var rsl = thi.ng.math.core.norm_range(slices__$1);
var rst = thi.ng.math.core.norm_range(stacks__$1);
var st = thi.ng.typedarrays.core.float32(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17667_SHARP_){
return Math.sin((thi.ng.math.core.TWO_PI * p1__17667_SHARP_));
}),rsl));
var ct = thi.ng.typedarrays.core.float32(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17668_SHARP_){
return Math.cos((thi.ng.math.core.TWO_PI * p1__17668_SHARP_));
}),rsl));
var sp = thi.ng.typedarrays.core.float32(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17669_SHARP_){
return Math.sin((thi.ng.math.core.PI * p1__17669_SHARP_));
}),rst));
var cp = thi.ng.typedarrays.core.float32(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17670_SHARP_){
return Math.cos((thi.ng.math.core.PI * p1__17670_SHARP_));
}),rst));
var iu = (1.0 / slices__$1);
var iv = (1.0 / stacks__$1);
var stacks_SINGLEQUOTE_ = (stacks__$1 - (1));
var fgen = (cljs.core.truth_(attribs)?(function (fverts,verts,fid){
return thi.ng.geom.attribs.generate_face_attribs(fverts,fid,attribs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uv","uv",-1197749379),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17671_SHARP_){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((iu * cljs.core.first(p1__17671_SHARP_)),(iv * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17671_SHARP_,(1))));
}),verts)], null),opts], 0)));
}):(function (fverts,_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fverts], null);
}));
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var fid = (0);
var i = (0);
var j = (0);
while(true){
if((i < slices__$1)){
var ii = (i + (1));
var jj = (j + (1));
var verts = (((j > (0)))?(((j < stacks_SINGLEQUOTE_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ii,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ii,jj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,jj], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ii,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,jj], null)], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ii,jj], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,jj], null)], null));
var fverts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (acc,fid,i,j,ii,jj,verts,res__$1,slices__$1,stacks__$1,rsl,rst,st,ct,sp,cp,iu,iv,stacks_SINGLEQUOTE_,fgen,map__17702,map__17702__$1,vec__17703,x__$1,y__$1,z__$1,r__$1,map__17694,map__17694__$1,vec__17695,x,y,z,r,map__17698,map__17698__$1,opts,mesh,res,slices,stacks,attribs){
return (function (p__17724){
var vec__17728 = p__17724;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(1),null);
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(((((ct[u]) * (sp[v])) * r__$1) + x__$1),(((cp[v]) * r__$1) + y__$1),((((st[u]) * (sp[v])) * r__$1) + z__$1));
});})(acc,fid,i,j,ii,jj,verts,res__$1,slices__$1,stacks__$1,rsl,rst,st,ct,sp,cp,iu,iv,stacks_SINGLEQUOTE_,fgen,map__17702,map__17702__$1,vec__17703,x__$1,y__$1,z__$1,r__$1,map__17694,map__17694__$1,vec__17695,x,y,z,r,map__17698,map__17698__$1,opts,mesh,res,slices,stacks,attribs))
,verts);
var G__17789 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,fgen(fverts,verts,fid));
var G__17790 = (fid + (1));
var G__17791 = ii;
var G__17792 = j;
acc = G__17789;
fid = G__17790;
i = G__17791;
j = G__17792;
continue;
} else {
if((j < stacks_SINGLEQUOTE_)){
var G__17793 = acc;
var G__17794 = fid;
var G__17795 = (0);
var G__17796 = (j + (1));
acc = G__17793;
fid = G__17794;
i = G__17795;
j = G__17796;
continue;
} else {
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.persistent_BANG_(acc));
}
}
break;
}
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (p__17731,ray){
var map__17732 = p__17731;
var map__17732__$1 = cljs.core.__destructure_map(map__17732);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17732__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17733 = this;
var map__17733__$1 = cljs.core.__destructure_map(map__17733);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__17736 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ray,new cljs.core.Keyword(null,"dir","dir",1734754661))], null):ray);
var rp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17736,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17736,(1),null);
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(rp,dir,p__$1,r__$1);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.AABB)){
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(s,___$1);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2(___$1,s);
} else {
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"n","n",562130025)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"w","w",354169001)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Sphere",s);

}
}
}
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.math.core._PLUS_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),t),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (p__17745,q){
var map__17746 = p__17745;
var map__17746__$1 = cljs.core.__destructure_map(map__17746);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17746__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17746__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17747 = this;
var map__17747__$1 = cljs.core.__destructure_map(map__17747);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17747__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2(((r__$1 * r__$1) - thi.ng.geom.core.dist_squared(p__$1,q)),thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,p){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__17756,q){
var map__17757 = p__17756;
var map__17757__$1 = cljs.core.__destructure_map(map__17757);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17757__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17757__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17758 = this;
var map__17758__$1 = cljs.core.__destructure_map(map__17758);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17758__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17758__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (thi.ng.geom.core.dist_squared(p__$1,q) <= (r__$1 * r__$1));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_x(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),theta),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_y(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),theta),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_z(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),theta),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_around_axis(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),axis,theta),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (p__17763){
var map__17764 = p__17763;
var map__17764__$1 = cljs.core.__destructure_map(map__17764);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17764__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__17765 = this;
var map__17765__$1 = cljs.core.__destructure_map(map__17765);
var r__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17765__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (((((4.0 / 3.0) * thi.ng.math.core.PI) * r__$1) * r__$1) * r__$1);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ITessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$ITessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.tessellate(thi.ng.geom.core.as_mesh(___$1,opts));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.AABB(thi.ng.math.core._(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"p","p",151049309)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190))),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(((2) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)))),null,null,null));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)));
}));

(thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (2.0 * cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"r","r",-471384190)));
}));

//# sourceMappingURL=thi.ng.geom.sphere.js.map
