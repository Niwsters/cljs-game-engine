goog.provide('thi.ng.geom.utils.intersect');
thi.ng.geom.utils.intersect.sq = (function thi$ng$geom$utils$intersect$sq(x){
return (x * x);
});
thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_circle_circle_QMARK_(var_args){
var G__14613 = arguments.length;
switch (G__14613) {
case 2:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14617,p__14618){
var map__14619 = p__14617;
var map__14619__$1 = cljs.core.__destructure_map(map__14619);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14619__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14619__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__14622 = p__14618;
var map__14622__$1 = cljs.core.__destructure_map(map__14622);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,r1,q,r2);
}));

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.math.core._(q,p);
var d = thi.ng.math.core.mag(delta);
if((((d <= (r1 + r2))) && ((d >= (function (){var G__14629 = (r1 - r2);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14629) : thi.ng.math.core.abs_STAR_.call(null,G__14629));
})())))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.math.core.madd(delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.math.core._STAR_(thi.ng.geom.core.normal(delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(p__$1,perp),thi.ng.math.core._(p__$1,perp)], null);
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_rect_QMARK_(var_args){
var G__14649 = arguments.length;
switch (G__14649) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14651,p__14652){
var map__14656 = p__14651;
var map__14656__$1 = cljs.core.__destructure_map(map__14656);
var vec__14657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14656__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14657,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14657,(1),null);
var vec__14660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14656__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(1),null);
var map__14663 = p__14652;
var map__14663__$1 = cljs.core.__destructure_map(map__14663);
var vec__14664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(1),null);
var vec__14667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14663__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14667,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14667,(1),null);
return (!((((px > (qx + qw))) || ((((qx > (px + w))) || ((((py > (qy + qh))) || ((qy > (py + h))))))))));
}));

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__14675,p__14676,p__14677,p__14678){
var vec__14679 = p__14675;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14679,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14679,(1),null);
var vec__14682 = p__14676;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(1),null);
var vec__14685 = p__14677;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14685,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14685,(1),null);
var vec__14688 = p__14678;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14688,(1),null);
return (!((((px1 > qx2)) || ((((px2 > qx1)) || ((((py1 > qy2)) || ((py2 > qy1)))))))));
}));

(thi.ng.geom.utils.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_rect_circle_QMARK_(var_args){
var G__14694 = arguments.length;
switch (G__14694) {
case 2:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14696,p__14697){
var map__14698 = p__14696;
var map__14698__$1 = cljs.core.__destructure_map(map__14698);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__14699 = p__14697;
var map__14699__$1 = cljs.core.__destructure_map(map__14699);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14699__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14699__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.math.core._PLUS_(p,sz),s,r);
}));

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__14701,p__14702,p__14703,r){
var vec__14704 = p__14701;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(1),null);
var vec__14707 = p__14702;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(1),null);
var vec__14710 = p__14703;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(1),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq((cy - qy)):0.0)));
return (ds__$1 <= (r * r));
}));

(thi.ng.geom.utils.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_aabb_QMARK_(var_args){
var G__14719 = arguments.length;
switch (G__14719) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14721,p__14722){
var map__14723 = p__14721;
var map__14723__$1 = cljs.core.__destructure_map(map__14723);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14723__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14723__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__14725 = p__14722;
var map__14725__$1 = cljs.core.__destructure_map(map__14725);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14725__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14725__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4(pa,pb,thi.ng.math.core._PLUS_(pa,sa),thi.ng.math.core._PLUS_(pb,sb));
}));

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((0)) : pa.call(null,(0))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((0)) : qb.call(null,(0))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((0)) : pb.call(null,(0))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((0)) : qa.call(null,(0))))))){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((1)) : pa.call(null,(1))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((1)) : qb.call(null,(1))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((1)) : pb.call(null,(1))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((1)) : qa.call(null,(1))))))){
return ((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((2)) : pa.call(null,(2))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((2)) : qb.call(null,(2))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((2)) : pb.call(null,(2))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((2)) : qa.call(null,(2))))));
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_sphere_QMARK_(var_args){
var G__14730 = arguments.length;
switch (G__14730) {
case 2:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14732,p__14733){
var map__14734 = p__14732;
var map__14734__$1 = cljs.core.__destructure_map(map__14734);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14734__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14734__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__14735 = p__14733;
var map__14735__$1 = cljs.core.__destructure_map(map__14735);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.math.core._PLUS_(p,sz),s,r);
}));

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__14738,p__14739,p__14740,r){
var vec__14742 = p__14738;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14742,(2),null);
var vec__14745 = p__14739;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14745,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14745,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14745,(2),null);
var vec__14748 = p__14740;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14748,(2),null);
var ds = (((cx < px))?thi.ng.geom.utils.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.utils.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.utils.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.utils.intersect.sq((cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.utils.intersect.sq((cz - pz)):(((cz > qz))?thi.ng.geom.utils.intersect.sq((cz - qz)):0.0)));
return (ds__$2 <= (r * r));
}));

(thi.ng.geom.utils.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.utils.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_aabb_frustum_QMARK_(p__14752,size,planes){
var vec__14754 = p__14752;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14754,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14754,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14754,(2),null);
var p = vec__14754;
var vec__14757 = thi.ng.math.core._PLUS_(p,size);
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,p__14760){
var vec__14761 = p__14760;
var vec__14764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(0),null);
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced(new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
}),new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_sphere_sphere_QMARK_(var_args){
var G__14769 = arguments.length;
switch (G__14769) {
case 2:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14771,p__14772){
var map__14773 = p__14771;
var map__14773__$1 = cljs.core.__destructure_map(map__14773);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14773__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14773__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__14774 = p__14772;
var map__14774__$1 = cljs.core.__destructure_map(map__14774);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14774__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p1,r1,p2,r2);
}));

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared(p1,p2) <= ((r1 + r2) * (r1 + r2)));
}));

(thi.ng.geom.utils.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_sphere_QMARK_(var_args){
var G__14778 = arguments.length;
switch (G__14778) {
case 2:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14779,p__14780){
var map__14781 = p__14779;
var map__14781__$1 = cljs.core.__destructure_map(map__14781);
var rp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14781__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__14782 = p__14780;
var map__14782__$1 = cljs.core.__destructure_map(map__14782);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14782__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14782__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(rp,dir,p,r);
}));

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.math.core._(p,rp);
var ds = thi.ng.math.core.mag_squared(q);
var v = (- thi.ng.math.core.dot(q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if((!((((a < (0))) && ((b < (0))))))){
if((((a > (0))) && ((b > (0))))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.math.core._(b,a);
var v = thi.ng.math.core._(c,a);
var n = thi.ng.math.core.cross(u,v);
if(cljs.core.truth_(thi.ng.geom.vector.V3.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(null,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.math.core._(p,a);
var a_SINGLEQUOTE_ = (- thi.ng.math.core.dot(n,w0));
var b_SINGLEQUOTE_ = thi.ng.math.core.dot(n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.math.core.madd(d,r,p);
var vec__14788 = thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,i,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788,(2),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = (u__$1 >= 0.0);
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
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.utils.intersect.triaabb_axis_test = (function thi$ng$geom$utils$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__14792 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14792,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e0(p__14803,p__14804,p__14805,p__14806,p__14807){
var vec__14808 = p__14803;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14808,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14808,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14808,(2),null);
var a = vec__14808;
var vec__14811 = p__14804;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(2),null);
var b = vec__14811;
var vec__14814 = p__14805;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(2),null);
var vec__14817 = p__14806;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(2),null);
var e = vec__14817;
var vec__14820 = p__14807;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(2),null);
var vec__14823 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e1(p__14827,p__14828,p__14829,p__14830,p__14831){
var vec__14832 = p__14827;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14832,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14832,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14832,(2),null);
var vec__14835 = p__14828;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14835,(2),null);
var b = vec__14835;
var vec__14838 = p__14829;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14838,(2),null);
var c = vec__14838;
var vec__14841 = p__14830;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14841,(2),null);
var e = vec__14841;
var vec__14844 = p__14831;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,(2),null);
var vec__14847 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14847,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14847,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14847,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$utils$intersect$triaabb_edge_test_e2(p__14854,p__14855,p__14856,p__14857,p__14858){
var vec__14859 = p__14854;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14859,(2),null);
var a = vec__14859;
var vec__14862 = p__14855;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14862,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14862,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14862,(2),null);
var vec__14865 = p__14856;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14865,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14865,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14865,(2),null);
var c = vec__14865;
var vec__14868 = p__14857;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(2),null);
var e = vec__14868;
var vec__14871 = p__14858;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14871,(2),null);
var vec__14874 = thi.ng.math.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(2),null);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_axis_test(ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.utils.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.triaabb_edge_minmax = (function thi$ng$geom$utils$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__5131__auto__ = (function (){var x__5131__auto__ = a;
var y__5132__auto__ = b;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var y__5132__auto__ = c;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})() < s)){
return ((function (){var x__5128__auto__ = (function (){var x__5128__auto__ = a;
var y__5129__auto__ = b;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var y__5129__auto__ = c;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__14877 = thi.ng.math.core._STAR_(s,0.5);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14877,(2),null);
var s__$1 = vec__14877;
var p__$1 = thi.ng.math.core._PLUS_(p,s__$1);
var vec__14880 = thi.ng.math.core._(a,p__$1);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(2),null);
var a__$1 = vec__14880;
var vec__14883 = thi.ng.math.core._(b,p__$1);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(2),null);
var b__$1 = vec__14883;
var vec__14886 = thi.ng.math.core._(c,p__$1);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14886,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14886,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14886,(2),null);
var c__$1 = vec__14886;
var e0 = thi.ng.math.core._(b__$1,a__$1);
var e1 = thi.ng.math.core._(c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e0(a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e1(a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_test_e2(a__$1,b__$1,c__$1,thi.ng.math.core._(a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.utils.intersect.triaabb_edge_minmax(az,bz,cz,sz))){
var G__14889 = a__$1;
var G__14890 = thi.ng.math.core.cross(e0,e1);
var G__14891 = s__$1;
return (thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(G__14889,G__14890,G__14891) : thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.call(null,G__14889,G__14890,G__14891));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_line2_QMARK_(p__14892,p__14893,p__14894,p__14895){
var vec__14896 = p__14892;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896,(1),null);
var p = vec__14896;
var vec__14899 = p__14893;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14899,(1),null);
var q = vec__14899;
var vec__14902 = p__14894;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(1),null);
var lp = vec__14902;
var vec__14905 = p__14895;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(1),null);
var lq = vec__14905;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if((((na === (0))) && ((nb === (0))))){
var ip = thi.ng.geom.utils.closest_point_on_segment(lp,p,q);
var iq = thi.ng.geom.utils.closest_point_on_segment(lq,p,q);
if(cljs.core.truth_((function (){var or__5043__auto__ = thi.ng.math.core.delta_EQ_(ip,lp);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.math.core.delta_EQ_(iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.math.core.mix(p,q,ua);
if((((ua >= 0.0)) && ((((ua <= 1.0)) && ((((ub >= 0.0)) && ((ub <= 1.0)))))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__14909){
var vec__14910 = p__14909;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14910,(1),null);
return thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_(rp,rq,p,q);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__14908_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__14908_SHARP_,new cljs.core.Keyword(null,"p","p",151049309)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__14908_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348)));
} else {
return null;
}
}))),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (closest,isec){
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(isec,new cljs.core.Keyword(null,"p","p",151049309));
var d = thi.ng.geom.core.dist_squared(rp,p);
if((d < (closest.cljs$core$IFn$_invoke$arity$1 ? closest.cljs$core$IFn$_invoke$arity$1((1)) : closest.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.utils.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.utils.intersect.intersect_line2_edges_QMARK_(rp,thi.ng.math.core.madd(rd,1.0E29,rp),edges);
});
thi.ng.geom.utils.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__5043__auto__ = thi.ng.math.core.delta_EQ_(aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.math.core.delta_EQ_(an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.math.core.dot(an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.math.core.madd(an,u,thi.ng.math.core._STAR_(bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(an,bn)], null);
}
});
thi.ng.geom.utils.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.math.core.dot(n,dir);
var dn = (thi.ng.math.core.dot(n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.math.core.madd(dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_aabb_QMARK_(var_args){
var G__14920 = arguments.length;
switch (G__14920) {
case 4:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.math.core._STAR_(s,0.5);
return thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core._(p,thi.ng.math.core._PLUS_(q,s2)),n,s2);
}));

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__14922,p__14923,p__14924){
var vec__14926 = p__14922;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14926,(2),null);
var vec__14929 = p__14923;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(2),null);
var n = vec__14929;
var vec__14932 = p__14924;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(2),null);
var vec__14935 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(0),null);
var vx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14935,(1),null);
var vec__14938 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(0),null);
var vy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(1),null);
var vec__14941 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,(0),null);
var vz2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
}));

(thi.ng.geom.utils.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.utils.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return ((function (){var G__14948 = (thi.ng.math.core.dot(n,p) + w);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14948) : thi.ng.math.core.abs_STAR_.call(null,G__14948));
})() <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.utils.intersect.subdot = (function thi$ng$geom$utils$intersect$subdot(a,b,c){
var d = thi.ng.math.core.subm(a,b,c);
return (((d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((0)) : d.call(null,(0))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((1)) : d.call(null,(1)))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((2)) : d.call(null,(2))));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.utils.intersect.face_a = (function thi$ng$geom$utils$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((0)) : aff.call(null,(0))) > (0)))?(1):(0)) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((1)) : aff.call(null,(1))) > (0)))?(2):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((2)) : aff.call(null,(2))) > (0)))?(4):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((3)) : aff.call(null,(3))) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.utils.intersect.face_b1_QMARK_ = (function thi$ng$geom$utils$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_((function (p1__14949_SHARP_){
return (thi.ng.math.core.dot(p1__14949_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.utils.intersect.face_b2_QMARK_ = (function thi$ng$geom$utils$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_((function (p1__14950_SHARP_){
return (thi.ng.geom.utils.intersect.subdot(p1__14950_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.utils.intersect.edge_a = (function thi$ng$geom$utils$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = (function (a,b,i,j){
var cp = (((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(i) : ea.call(null,i)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(j) : eb.call(null,j))) - ((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(j) : ea.call(null,j)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(i) : eb.call(null,i))));
return (((((cp > (0))) && (((((xa | a) > (0))) && (((xb | b) > (0))))))) || ((((cp < (0))) && (((((xa | b) > (0))) && (((xb | a) > (0))))))));
});
return (!(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),(ma | mb))) || (((edge((1),(2),(1),(0))) || (((edge((1),(4),(2),(0))) || (((edge((1),(8),(3),(0))) || (((edge((2),(4),(2),(1))) || (((edge((2),(8),(3),(1))) || (edge((4),(8),(3),(2))))))))))))))));
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.utils.intersect.get_edge = (function thi$ng$geom$utils$intersect$get_edge(edges,epoints,id){
var e = (edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(id) : edges.call(null,id));
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = (epoints.cljs$core$IFn$_invoke$arity$1 ? epoints.cljs$core$IFn$_invoke$arity$1(id) : epoints.call(null,id));
var e__$1 = thi.ng.math.core._((ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((0)) : ep.call(null,(0))),(ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((1)) : ep.call(null,(1))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.utils.intersect.check_faces_a = (function thi$ng$geom$utils$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__14973 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14973,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f*","f*",-689873734),f)))){
var vec__14976 = thi.ng.geom.utils.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14976,(1),null);
var vec__14979 = thi.ng.geom.utils.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14979,(1),null);
var n = thi.ng.math.core.cross(ea,eb);
var vec__14982 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_a(((function (masks,affine,edges,s,vec__14976,edges__$1,ea,vec__14979,edges__$2,eb,n,vec__14973,f,a,b){
return (function (p1__14959_SHARP_){
return thi.ng.math.core.dot(p1__14959_SHARP_,n);
});})(masks,affine,edges,s,vec__14976,edges__$1,ea,vec__14979,edges__$2,eb,n,vec__14973,f,a,b))
,deltas):thi.ng.geom.utils.intersect.face_a(((function (masks,affine,edges,s,vec__14976,edges__$1,ea,vec__14979,edges__$2,eb,n,vec__14973,f,a,b){
return (function (p1__14960_SHARP_){
return thi.ng.geom.utils.intersect.subdot(p1__14960_SHARP_,p,n);
});})(masks,affine,edges,s,vec__14976,edges__$1,ea,vec__14979,edges__$2,eb,n,vec__14973,f,a,b))
,verts));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(1),null);
if((m < (15))){
var G__15095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(masks,m);
var G__15096 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(affine,a__$1);
var G__15097 = edges__$2;
var G__15098 = cljs.core.next(s);
masks = G__15095;
affine = G__15096;
edges = G__15097;
s = G__15098;
continue;
} else {
return null;
}
} else {
if((!(thi.ng.geom.utils.intersect.edge_a((masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(a) : masks.call(null,a)),(masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(b) : masks.call(null,b)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(a) : affine.call(null,a)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(b) : affine.call(null,b)))))){
var G__15100 = masks;
var G__15101 = affine;
var G__15102 = edges;
var G__15103 = cljs.core.next(s);
masks = G__15100;
affine = G__15101;
edges = G__15102;
s = G__15103;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.utils.intersect.check_faces_b = (function thi$ng$geom$utils$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__14995 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(2),null);
var vec__14998 = thi.ng.geom.utils.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14998,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14998,(1),null);
var vec__15001 = thi.ng.geom.utils.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.utils.intersect.face_b1_QMARK_(deltas,thi.ng.math.core.cross(ea,eb)):thi.ng.geom.utils.intersect.face_b2_QMARK_(verts,p,thi.ng.math.core.cross(ea,eb)))))){
var G__15108 = edges__$2;
var G__15109 = cljs.core.next(s);
edges = G__15108;
s = G__15109;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.utils.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$utils$intersect$intersect_tetrahedra_QMARK_(p__15007,p__15008){
var vec__15009 = p__15007;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(3),null);
var p = vec__15009;
var vec__15012 = p__15008;
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(0),null);
var qb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(1),null);
var qc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(2),null);
var qd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15012,(3),null);
var q = vec__15012;
var masks = thi.ng.geom.utils.intersect.check_faces_a(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15005_SHARP_){
return thi.ng.math.core._(p1__15005_SHARP_,pa);
}),q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,masks));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return thi.ng.geom.utils.intersect.check_faces_b(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15006_SHARP_){
return thi.ng.math.core._(p1__15006_SHARP_,qa);
}),p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=thi.ng.geom.utils.intersect.js.map
