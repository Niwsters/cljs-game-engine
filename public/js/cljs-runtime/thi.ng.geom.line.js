goog.provide('thi.ng.geom.line');
thi.ng.geom.line.line2 = (function thi$ng$geom$line$line2(var_args){
var G__16035 = arguments.length;
switch (G__16035) {
case 1:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$1 = (function (p__16041){
var vec__16042 = p__16041;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(1),null);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q)], null),null,null,null));
}));

(thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q)], null),null,null,null));
}));

(thi.ng.geom.line.line2.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(px,py),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(qx,qy)], null),null,null,null));
}));

(thi.ng.geom.line.line2.cljs$lang$maxFixedArity = 4);

thi.ng.geom.line.line3 = (function thi$ng$geom$line$line3(var_args){
var G__16046 = arguments.length;
switch (G__16046) {
case 1:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$1 = (function (p__16052){
var vec__16053 = p__16052;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16053,(1),null);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q)], null),null,null,null));
}));

(thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$2 = (function (p,q){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(p),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q)], null),null,null,null));
}));

(thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$4 = (function (px,py,qx,qy){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2(px,py),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2(qx,qy)], null),null,null,null));
}));

(thi.ng.geom.line.line3.cljs$core$IFn$_invoke$arity$6 = (function (px,py,pz,qx,qy,qz){
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(px,py,pz),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(qx,qy,qz)], null),null,null,null));
}));

(thi.ng.geom.line.line3.cljs$lang$maxFixedArity = 6);

thi.ng.geom.line.linestrip2 = (function thi$ng$geom$line$linestrip2(var_args){
var G__16064 = arguments.length;
switch (G__16064) {
case 1:
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___16610 = arguments.length;
var i__5767__auto___16611 = (0);
while(true){
if((i__5767__auto___16611 < len__5766__auto___16610)){
args_arr__5791__auto__.push((arguments[i__5767__auto___16611]));

var G__16612 = (i__5767__auto___16611 + (1));
i__5767__auto___16611 = G__16612;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2,points),null,null,null));
}));

(thi.ng.geom.line.linestrip2.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2,cljs.core.cons(p,cljs.core.cons(q,more))),null,null,null));
}));

/** @this {Function} */
(thi.ng.geom.line.linestrip2.cljs$lang$applyTo = (function (seq16061){
var G__16062 = cljs.core.first(seq16061);
var seq16061__$1 = cljs.core.next(seq16061);
var G__16063 = cljs.core.first(seq16061__$1);
var seq16061__$2 = cljs.core.next(seq16061__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16062,G__16063,seq16061__$2);
}));

(thi.ng.geom.line.linestrip2.cljs$lang$maxFixedArity = (2));

thi.ng.geom.line.linestrip3 = (function thi$ng$geom$line$linestrip3(var_args){
var G__16069 = arguments.length;
switch (G__16069) {
case 1:
return thi.ng.geom.line.linestrip3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___16614 = arguments.length;
var i__5767__auto___16615 = (0);
while(true){
if((i__5767__auto___16615 < len__5766__auto___16614)){
args_arr__5791__auto__.push((arguments[i__5767__auto___16615]));

var G__16616 = (i__5767__auto___16615 + (1));
i__5767__auto___16615 = G__16616;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return thi.ng.geom.line.linestrip3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(thi.ng.geom.line.linestrip3.cljs$core$IFn$_invoke$arity$1 = (function (points){
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points),null,null,null));
}));

(thi.ng.geom.line.linestrip3.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,more){
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,cljs.core.cons(p,cljs.core.cons(q,more))),null,null,null));
}));

/** @this {Function} */
(thi.ng.geom.line.linestrip3.cljs$lang$applyTo = (function (seq16066){
var G__16067 = cljs.core.first(seq16066);
var seq16066__$1 = cljs.core.next(seq16066);
var G__16068 = cljs.core.first(seq16066__$1);
var seq16066__$2 = cljs.core.next(seq16066__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16067,G__16068,seq16066__$2);
}));

(thi.ng.geom.line.linestrip3.cljs$lang$maxFixedArity = (2));

thi.ng.geom.line.reflect_on_ray = (function thi$ng$geom$line$reflect_on_ray(ctor,p,q,rc,dir){
var G__16079 = thi.ng.math.core._PLUS_(rc,thi.ng.geom.core.reflect(thi.ng.math.core._(p,rc),dir));
var G__16080 = thi.ng.math.core._PLUS_(rc,thi.ng.geom.core.reflect(thi.ng.math.core._(q,rc),dir));
return (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(G__16079,G__16080) : ctor.call(null,G__16079,G__16080));
});
thi.ng.geom.line.reflect_on_line = (function thi$ng$geom$line$reflect_on_line(ctor,p,q,rp,rq){
return thi.ng.geom.line.reflect_on_ray(ctor,p,q,thi.ng.math.core.mix(rp,rq),thi.ng.math.core.normalize(thi.ng.math.core._(rq,rp)));
});
(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (p__16087,m){
var map__16088 = p__16087;
var map__16088__$1 = cljs.core.__destructure_map(map__16088);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16088__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16089 = this;
var map__16089__$1 = cljs.core.__destructure_map(map__16089);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16089__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0)))),thi.ng.geom.core.transform_vector(m,(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))))], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__16091,q){
var map__16092 = p__16091;
var map__16092__$1 = cljs.core.__destructure_map(map__16092);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16092__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16094 = this;
var map__16094__$1 = cljs.core.__destructure_map(map__16094);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16094__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.closest_point_on_segment(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (p__16095,r){
var map__16096 = p__16095;
var map__16096__$1 = cljs.core.__destructure_map(map__16096);
var vec__16097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,(1),null);
var map__16100 = this;
var map__16100__$1 = cljs.core.__destructure_map(map__16100);
var vec__16101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16100__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(1),null);
if((r instanceof thi.ng.geom.types.Line2)){
var vec__16107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"points","points",-1486596883));
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16107,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16107,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line2,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null),null,null,null));
}
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__16113,t){
var map__16114 = p__16113;
var map__16114__$1 = cljs.core.__destructure_map(map__16114);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16114__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16115 = this;
var map__16115__$1 = cljs.core.__destructure_map(map__16115);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16115__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),t);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__16116){
var map__16117 = p__16116;
var map__16117__$1 = cljs.core.__destructure_map(map__16117);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16117__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16118 = this;
var map__16118__$1 = cljs.core.__destructure_map(map__16118);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16118__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (p__16119){
var map__16120 = p__16119;
var map__16120__$1 = cljs.core.__destructure_map(map__16120);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16121 = this;
var map__16121__$1 = cljs.core.__destructure_map(map__16121);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16121__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (p__16122,theta){
var map__16123 = p__16122;
var map__16123__$1 = cljs.core.__destructure_map(map__16123);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16123__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16124 = this;
var map__16124__$1 = cljs.core.__destructure_map(map__16124);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16124__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),theta),thi.ng.geom.core.rotate(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (p__16128,p__16129){
var map__16130 = p__16128;
var map__16130__$1 = cljs.core.__destructure_map(map__16130);
var _ = map__16130__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16130__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16131 = p__16129;
var map__16131__$1 = cljs.core.__destructure_map(map__16131);
var opts = map__16131__$1;
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16131__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16131__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__16133 = this;
var map__16133__$1 = cljs.core.__destructure_map(map__16133);
var ___$1 = map__16133__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16133__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale_size(___$1,scale),new cljs.core.Keyword(null,"points","points",-1486596883)));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,(0)));
var b = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,(1)));
var ta = thi.ng.math.core._PLUS_(off,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tpoints,(0)));
var tb = thi.ng.math.core._PLUS_(off,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tpoints,(1)));
return thi.ng.geom.core.add_face((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null),(0),attribs,opts));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (p__16139,s){
var map__16140 = p__16139;
var map__16140__$1 = cljs.core.__destructure_map(map__16140);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16140__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16141 = this;
var map__16141__$1 = cljs.core.__destructure_map(map__16141);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16141__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),s),thi.ng.math.core._STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),s)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (p__16146,s){
var map__16147 = p__16146;
var map__16147__$1 = cljs.core.__destructure_map(map__16147);
var vec__16148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16147__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16148,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16148,(1),null);
var map__16152 = this;
var map__16152__$1 = cljs.core.__destructure_map(map__16152);
var vec__16153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16152__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16153,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16153,(1),null);
var c = thi.ng.math.core.mix(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.madd(thi.ng.math.core._(p__$1,c),s,c),thi.ng.math.core.madd(thi.ng.math.core._(q__$1,c),s,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (p__16156,l){
var map__16157 = p__16156;
var map__16157__$1 = cljs.core.__destructure_map(map__16157);
var vec__16158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16157__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16158,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16158,(1),null);
var map__16161 = this;
var map__16161__$1 = cljs.core.__destructure_map(map__16161);
var vec__16162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16161__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(1),null);
var vec__16165 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(l,new cljs.core.Keyword(null,"points","points",-1486596883),l);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165,(1),null);
return thi.ng.geom.utils.intersect.intersect_line2_line2_QMARK_(a__$1,b__$1,c,d);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (p__16169,res){
var map__16170 = p__16169;
var map__16170__$1 = cljs.core.__destructure_map(map__16170);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16170__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16172 = this;
var map__16172__$1 = cljs.core.__destructure_map(map__16172);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16172__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_segment_with_res(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),res,true);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__16181,v){
var map__16182 = p__16181;
var map__16182__$1 = cljs.core.__destructure_map(map__16182);
var vec__16183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16183,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16183,(1),null);
var map__16189 = this;
var map__16189__$1 = cljs.core.__destructure_map(map__16189);
var vec__16190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16189__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(1),null);
var pred__16193 = cljs.core._EQ_;
var expr__16194 = v;
if(cljs.core.truth_((pred__16193.cljs$core$IFn$_invoke$arity$2 ? pred__16193.cljs$core$IFn$_invoke$arity$2(p__$1,expr__16194) : pred__16193.call(null,p__$1,expr__16194)))){
return q__$1;
} else {
if(cljs.core.truth_((pred__16193.cljs$core$IFn$_invoke$arity$2 ? pred__16193.cljs$core$IFn$_invoke$arity$2(q__$1,expr__16194) : pred__16193.call(null,q__$1,expr__16194)))){
return p__$1;
} else {
return null;
}
}
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (p__16196,v){
var map__16197 = p__16196;
var map__16197__$1 = cljs.core.__destructure_map(map__16197);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16197__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16198 = this;
var map__16198__$1 = cljs.core.__destructure_map(map__16198);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)))))){
return (1);
} else {
return (0);
}
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (p__16199,t){
var map__16200 = p__16199;
var map__16200__$1 = cljs.core.__destructure_map(map__16200);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16200__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16201 = this;
var map__16201__$1 = cljs.core.__destructure_map(map__16201);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16201__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),t),thi.ng.math.core._PLUS_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),t)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (p__16202,v){
var map__16203 = p__16202;
var map__16203__$1 = cljs.core.__destructure_map(map__16203);
var vec__16204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16203__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16204,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16204,(1),null);
var map__16207 = this;
var map__16207__$1 = cljs.core.__destructure_map(map__16207);
var vec__16208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16207__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16208,(1),null);
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.dot(thi.ng.math.core._(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(v),p__$1),thi.ng.geom.core.normal(thi.ng.math.core._(q__$1,p__$1))),thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__16213){
var map__16214 = p__16213;
var map__16214__$1 = cljs.core.__destructure_map(map__16214);
var vec__16215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16215,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16215,(1),null);
var map__16218 = this;
var map__16218__$1 = cljs.core.__destructure_map(map__16218);
var vec__16219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16218__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16219,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16219,(1),null);
var c = thi.ng.math.core.mix(p__$1,q__$1);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._(p__$1,c),thi.ng.math.core._(q__$1,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__16222,o){
var map__16223 = p__16222;
var map__16223__$1 = cljs.core.__destructure_map(map__16223);
var vec__16224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16223__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16224,(1),null);
var map__16229 = this;
var map__16229__$1 = cljs.core.__destructure_map(map__16229);
var vec__16230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16229__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16230,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16230,(1),null);
var c = thi.ng.math.core._(o,thi.ng.math.core.mix(p__$1,q__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(p__$1,c),thi.ng.math.core._PLUS_(q__$1,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (p__16235){
var map__16237 = p__16235;
var map__16237__$1 = cljs.core.__destructure_map(map__16237);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16237__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16239 = this;
var map__16239__$1 = cljs.core.__destructure_map(map__16239);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16239__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__16240,q){
var map__16241 = p__16240;
var map__16241__$1 = cljs.core.__destructure_map(map__16241);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16241__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16242 = this;
var map__16242__$1 = cljs.core.__destructure_map(map__16242);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16242__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.utils.closest_point_coeff(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1))));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))], null);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices(___$1,res));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (p__16262){
var map__16263 = p__16262;
var map__16263__$1 = cljs.core.__destructure_map(map__16263);
var vec__16264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16263__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16264,(1),null);
var map__16267 = this;
var map__16267__$1 = cljs.core.__destructure_map(map__16267);
var vec__16268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16267__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16268,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16268,(1),null);
return (new thi.ng.geom.types.Circle2(thi.ng.math.core.mix(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1)),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (p__16271){
var map__16272 = p__16271;
var map__16272__$1 = cljs.core.__destructure_map(map__16272);
var vec__16273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16273,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16273,(1),null);
var map__16276 = this;
var map__16276__$1 = cljs.core.__destructure_map(map__16276);
var vec__16277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16276__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16277,(1),null);
var d = thi.ng.math.core.normalize(thi.ng.math.core._(q__$1,p__$1));
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.math.core._PLUS_(p__$1,d)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (p__16283,n){
var map__16284 = p__16283;
var map__16284__$1 = cljs.core.__destructure_map(map__16284);
var vec__16285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16285,(1),null);
var map__16288 = this;
var map__16288__$1 = cljs.core.__destructure_map(map__16288);
var vec__16290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16288__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16290,(1),null);
var d = thi.ng.math.core.normalize(thi.ng.math.core._(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.math.core._PLUS_(p__$1,d)], null),null,null,null));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,thi.ng.math.core.mag_squared(___$1));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (p__16297){
var map__16298 = p__16297;
var map__16298__$1 = cljs.core.__destructure_map(map__16298);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16298__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16300 = this;
var map__16300__$1 = cljs.core.__destructure_map(map__16300);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16300__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (p__16301){
var map__16302 = p__16301;
var map__16302__$1 = cljs.core.__destructure_map(map__16302);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16302__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16303 = this;
var map__16303__$1 = cljs.core.__destructure_map(map__16303);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16303__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (p__16304){
var map__16305 = p__16304;
var map__16305__$1 = cljs.core.__destructure_map(map__16305);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16305__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16306 = this;
var map__16306__$1 = cljs.core.__destructure_map(map__16306);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16306__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var G__16307 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),(0)));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16307) : thi.ng.math.core.abs_STAR_.call(null,G__16307));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (p__16309){
var map__16310 = p__16309;
var map__16310__$1 = cljs.core.__destructure_map(map__16310);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16310__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16312 = this;
var map__16312__$1 = cljs.core.__destructure_map(map__16312);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16312__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var G__16313 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),(1)));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16313) : thi.ng.math.core.abs_STAR_.call(null,G__16313));
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__16317){
var map__16318 = p__16317;
var map__16318__$1 = cljs.core.__destructure_map(map__16318);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16318__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16319 = this;
var map__16319__$1 = cljs.core.__destructure_map(map__16319);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16319__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));
(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (p__16321,m){
var map__16322 = p__16321;
var map__16322__$1 = cljs.core.__destructure_map(map__16322);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16322__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16323 = this;
var map__16323__$1 = cljs.core.__destructure_map(map__16323);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16323__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.transform_vector(m,(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0)))),thi.ng.geom.core.transform_vector(m,(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))))], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IProximity$closest_point$arity$2 = (function (p__16324,q){
var map__16325 = p__16324;
var map__16325__$1 = cljs.core.__destructure_map(map__16325);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16325__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16327 = this;
var map__16327__$1 = cljs.core.__destructure_map(map__16327);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16327__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.closest_point_on_segment(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (p__16329,r){
var map__16330 = p__16329;
var map__16330__$1 = cljs.core.__destructure_map(map__16330);
var vec__16331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16330__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16331,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16331,(1),null);
var map__16334 = this;
var map__16334__$1 = cljs.core.__destructure_map(map__16334);
var vec__16335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16334__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(1),null);
if((r instanceof thi.ng.geom.types.Line3)){
var vec__16339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"points","points",-1486596883));
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339,(0),null);
var qr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16339,(1),null);
return thi.ng.geom.line.reflect_on_line(thi.ng.geom.line.line3,p__$1,q__$1,pr,qr);
} else {
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.reflect(p__$1,r),thi.ng.geom.core.reflect(q__$1,r)], null),null,null,null));
}
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (p__16346,t){
var map__16347 = p__16346;
var map__16347__$1 = cljs.core.__destructure_map(map__16347);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16347__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16348 = this;
var map__16348__$1 = cljs.core.__destructure_map(map__16348);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16348__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),t);
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (p__16350){
var map__16351 = p__16350;
var map__16351__$1 = cljs.core.__destructure_map(map__16351);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16351__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16352 = this;
var map__16352__$1 = cljs.core.__destructure_map(map__16352);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16352__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (p__16353){
var map__16354 = p__16353;
var map__16354__$1 = cljs.core.__destructure_map(map__16354);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16354__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16355 = this;
var map__16355__$1 = cljs.core.__destructure_map(map__16355);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix((p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((0)) : p__$1.call(null,(0))),(p__$1.cljs$core$IFn$_invoke$arity$1 ? p__$1.cljs$core$IFn$_invoke$arity$1((1)) : p__$1.call(null,(1))),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,dist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(dist,include_last_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (p__16357,theta){
var map__16358 = p__16357;
var map__16358__$1 = cljs.core.__destructure_map(map__16358);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16358__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16359 = this;
var map__16359__$1 = cljs.core.__destructure_map(map__16359);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16359__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),theta),thi.ng.geom.core.rotate(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (p__16364,p__16365){
var map__16366 = p__16364;
var map__16366__$1 = cljs.core.__destructure_map(map__16366);
var _ = map__16366__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16366__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16367 = p__16365;
var map__16367__$1 = cljs.core.__destructure_map(map__16367);
var opts = map__16367__$1;
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16367__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16367__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16367__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16367__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16367__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__16368 = this;
var map__16368__$1 = cljs.core.__destructure_map(map__16368);
var ___$1 = map__16368__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16368__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale_size(___$1,scale),new cljs.core.Keyword(null,"points","points",-1486596883)));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var a = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,(0)));
var b = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,(1)));
var ta = thi.ng.math.core._PLUS_(off,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tpoints,(0)));
var tb = thi.ng.math.core._PLUS_(off,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tpoints,(1)));
return thi.ng.geom.core.add_face((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,tb,ta], null),(0),attribs,opts));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (p__16369,s){
var map__16370 = p__16369;
var map__16370__$1 = cljs.core.__destructure_map(map__16370);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16370__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16371 = this;
var map__16371__$1 = cljs.core.__destructure_map(map__16371);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16371__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),s),thi.ng.math.core._STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),s)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (p__16372,s){
var map__16373 = p__16372;
var map__16373__$1 = cljs.core.__destructure_map(map__16373);
var vec__16374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16373__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16374,(1),null);
var map__16377 = this;
var map__16377__$1 = cljs.core.__destructure_map(map__16377);
var vec__16378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16377__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16378,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16378,(1),null);
var c = thi.ng.math.core.mix(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.madd(thi.ng.math.core._(p__$1,c),s,c),thi.ng.math.core.madd(thi.ng.math.core._(q__$1,c),s,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (p__16381){
var map__16382 = p__16381;
var map__16382__$1 = cljs.core.__destructure_map(map__16382);
var vec__16383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16382__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(1),null);
var map__16386 = this;
var map__16386__$1 = cljs.core.__destructure_map(map__16386);
var vec__16387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16386__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16387,(1),null);
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.mix(p__$1,q__$1),(0.5 * thi.ng.geom.core.dist(p__$1,q__$1)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (p__16390,l){
var map__16391 = p__16390;
var map__16391__$1 = cljs.core.__destructure_map(map__16391);
var vec__16392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16391__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16392,(1),null);
var map__16395 = this;
var map__16395__$1 = cljs.core.__destructure_map(map__16395);
var vec__16396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16395__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16396,(1),null);
var vec__16399 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(l,new cljs.core.Keyword(null,"points","points",-1486596883),l);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(1),null);
return thi.ng.geom.utils.closest_line_between(a__$1,b__$1,c,d);
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 = (function (_,r){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (p__16403,res){
var map__16404 = p__16403;
var map__16404__$1 = cljs.core.__destructure_map(map__16404);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16404__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16405 = this;
var map__16405__$1 = cljs.core.__destructure_map(map__16405);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16405__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.utils.sample_segment_with_res(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),res,true);
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (p__16406,v){
var map__16407 = p__16406;
var map__16407__$1 = cljs.core.__destructure_map(map__16407);
var vec__16408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16407__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16408,(1),null);
var map__16411 = this;
var map__16411__$1 = cljs.core.__destructure_map(map__16411);
var vec__16412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16411__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16412,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16412,(1),null);
var pred__16415 = cljs.core._EQ_;
var expr__16416 = v;
if(cljs.core.truth_((pred__16415.cljs$core$IFn$_invoke$arity$2 ? pred__16415.cljs$core$IFn$_invoke$arity$2(p__$1,expr__16416) : pred__16415.call(null,p__$1,expr__16416)))){
return q__$1;
} else {
if(cljs.core.truth_((pred__16415.cljs$core$IFn$_invoke$arity$2 ? pred__16415.cljs$core$IFn$_invoke$arity$2(q__$1,expr__16416) : pred__16415.call(null,q__$1,expr__16416)))){
return p__$1;
} else {
return null;
}
}
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (p__16418,v){
var map__16419 = p__16418;
var map__16419__$1 = cljs.core.__destructure_map(map__16419);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16419__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16420 = this;
var map__16420__$1 = cljs.core.__destructure_map(map__16420);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)))))){
return (1);
} else {
return (0);
}
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (p__16421,t){
var map__16422 = p__16421;
var map__16422__$1 = cljs.core.__destructure_map(map__16422);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16422__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16423 = this;
var map__16423__$1 = cljs.core.__destructure_map(map__16423);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16423__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),t),thi.ng.math.core._PLUS_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),t)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (p__16424,p){
var map__16425 = p__16424;
var map__16425__$1 = cljs.core.__destructure_map(map__16425);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16425__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16426 = this;
var map__16426__$1 = cljs.core.__destructure_map(map__16426);
var p__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16426__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return null;
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (p__16427){
var map__16428 = p__16427;
var map__16428__$1 = cljs.core.__destructure_map(map__16428);
var vec__16429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16429,(1),null);
var map__16432 = this;
var map__16432__$1 = cljs.core.__destructure_map(map__16432);
var vec__16433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16433,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16433,(1),null);
var c = thi.ng.math.core.mix(p__$1,q__$1);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._(p__$1,c),thi.ng.math.core._(q__$1,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (p__16442,o){
var map__16443 = p__16442;
var map__16443__$1 = cljs.core.__destructure_map(map__16443);
var vec__16444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16443__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16444,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16444,(1),null);
var map__16447 = this;
var map__16447__$1 = cljs.core.__destructure_map(map__16447);
var vec__16448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16447__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16448,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16448,(1),null);
var c = thi.ng.math.core._(o,thi.ng.math.core.mix(p__$1,q__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._PLUS_(p__$1,c),thi.ng.math.core._PLUS_(q__$1,c)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (p__16451){
var map__16452 = p__16451;
var map__16452__$1 = cljs.core.__destructure_map(map__16452);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16452__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16453 = this;
var map__16453__$1 = cljs.core.__destructure_map(map__16453);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16453__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (p__16454,q){
var map__16455 = p__16454;
var map__16455__$1 = cljs.core.__destructure_map(map__16455);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16455__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16456 = this;
var map__16456__$1 = cljs.core.__destructure_map(map__16456);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16456__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,thi.ng.geom.utils.closest_point_coeff(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(q),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1))));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (p__16458,theta){
var map__16459 = p__16458;
var map__16459__$1 = cljs.core.__destructure_map(map__16459);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16459__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16460 = this;
var map__16460__$1 = cljs.core.__destructure_map(map__16460);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16460__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_x(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),theta),thi.ng.geom.core.rotate_x(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (p__16464,theta){
var map__16465 = p__16464;
var map__16465__$1 = cljs.core.__destructure_map(map__16465);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16465__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16466 = this;
var map__16466__$1 = cljs.core.__destructure_map(map__16466);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16466__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_y(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),theta),thi.ng.geom.core.rotate_y(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (p__16467,theta){
var map__16468 = p__16467;
var map__16468__$1 = cljs.core.__destructure_map(map__16468);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16468__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16469 = this;
var map__16469__$1 = cljs.core.__destructure_map(map__16469);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16469__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_z(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),theta),thi.ng.geom.core.rotate_z(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (p__16471,axis,theta){
var map__16472 = p__16471;
var map__16472__$1 = cljs.core.__destructure_map(map__16472);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16472__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16473 = this;
var map__16473__$1 = cljs.core.__destructure_map(map__16473);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16473__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.rotate_around_axis(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),axis,theta),thi.ng.geom.core.rotate_around_axis(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),axis,theta)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))], null);
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices(___$1,res));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (p__16474){
var map__16475 = p__16474;
var map__16475__$1 = cljs.core.__destructure_map(map__16475);
var vec__16476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16475__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16476,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16476,(1),null);
var map__16479 = this;
var map__16479__$1 = cljs.core.__destructure_map(map__16479);
var vec__16480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16479__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(1),null);
var d = thi.ng.math.core.normalize(thi.ng.math.core._(q__$1,p__$1));
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.math.core._PLUS_(p__$1,d)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (p__16484,n){
var map__16485 = p__16484;
var map__16485__$1 = cljs.core.__destructure_map(map__16485);
var vec__16486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16485__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16486,(1),null);
var map__16489 = this;
var map__16489__$1 = cljs.core.__destructure_map(map__16489);
var vec__16490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16489__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var p__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16490,(0),null);
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16490,(1),null);
var d = thi.ng.math.core.normalize(thi.ng.math.core._(q__$1,p__$1),n);
return (new thi.ng.geom.types.Line3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p__$1,thi.ng.math.core._PLUS_(p__$1,d)], null),null,null,null));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,thi.ng.math.core.mag_squared(___$1));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (p__16497){
var map__16498 = p__16497;
var map__16498__$1 = cljs.core.__destructure_map(map__16498);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16498__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16499 = this;
var map__16499__$1 = cljs.core.__destructure_map(map__16499);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16499__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (p__16501){
var map__16502 = p__16501;
var map__16502__$1 = cljs.core.__destructure_map(map__16502);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16502__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16503 = this;
var map__16503__$1 = cljs.core.__destructure_map(map__16503);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16503__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist_squared(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (p__16504){
var map__16505 = p__16504;
var map__16505__$1 = cljs.core.__destructure_map(map__16505);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16506 = this;
var map__16506__$1 = cljs.core.__destructure_map(map__16506);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16506__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var G__16507 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),(0)));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16507) : thi.ng.math.core.abs_STAR_.call(null,G__16507));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (p__16509){
var map__16510 = p__16509;
var map__16510__$1 = cljs.core.__destructure_map(map__16510);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16510__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16511 = this;
var map__16511__$1 = cljs.core.__destructure_map(map__16511);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16511__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var G__16512 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),(1)));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16512) : thi.ng.math.core.abs_STAR_.call(null,G__16512));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (p__16517){
var map__16518 = p__16517;
var map__16518__$1 = cljs.core.__destructure_map(map__16518);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16518__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16519 = this;
var map__16519__$1 = cljs.core.__destructure_map(map__16519);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16519__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var G__16520 = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),(2)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)),(2)));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16520) : thi.ng.math.core.abs_STAR_.call(null,G__16520));
}));

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Line3.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (p__16521){
var map__16522 = p__16521;
var map__16522__$1 = cljs.core.__destructure_map(map__16522);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16522__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16523 = this;
var map__16523__$1 = cljs.core.__destructure_map(map__16523);
var p__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16523__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p__$1,(1)));
}));
(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16530_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__16530_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16526_SHARP_){
return thi.ng.geom.core.reflect(p1__16526_SHARP_,r);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null);
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null);
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point(___$1);
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16527_SHARP_){
return thi.ng.geom.core.rotate(p1__16527_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (p__16531,p__16532){
var map__16533 = p__16531;
var map__16533__$1 = cljs.core.__destructure_map(map__16533);
var _ = map__16533__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16533__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16534 = p__16532;
var map__16534__$1 = cljs.core.__destructure_map(map__16534);
var opts = map__16534__$1;
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16534__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16534__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16534__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16534__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16534__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__16535 = this;
var map__16535__$1 = cljs.core.__destructure_map(map__16535);
var ___$1 = map__16535__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16535__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale_size(___$1,scale),new cljs.core.Keyword(null,"points","points",-1486596883)));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var bottom = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3,points__$1);
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16524_SHARP_){
return thi.ng.math.core._PLUS_(off,p1__16524_SHARP_);
}),tpoints);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__16536){
var vec__16537 = p__16536;
var vec__16540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16537,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16540,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16540,(1),null);
var vec__16543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16537,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(1),null);
return thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null),i,attribs,opts);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),bottom),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),top)))));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16528_SHARP_){
return thi.ng.math.core._STAR_(p1__16528_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (p__16546,res){
var map__16547 = p__16546;
var map__16547__$1 = cljs.core.__destructure_map(map__16547);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16547__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16548 = this;
var map__16548__$1 = cljs.core.__destructure_map(map__16548);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16548__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16525_SHARP_){
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__16525_SHARP_,points__$1);
}),thi.ng.math.core.norm_range(res));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (p__16549,v){
var map__16550 = p__16549;
var map__16550__$1 = cljs.core.__destructure_map(map__16550);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16550__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16551 = this;
var map__16551__$1 = cljs.core.__destructure_map(map__16551);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__5802__auto__ = thi.ng.dstruct.core.neighbors(v,points__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var p = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(points__$1),cljs.core.peek(points__$1))){
return (2);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(points__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.peek(points__$1))))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16529_SHARP_){
return thi.ng.math.core._PLUS_(p1__16529_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip2(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices(___$1,res));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBoundingCircle$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist_squared,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return (0);
}));

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.mag(___$1);
}));
(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16566_SHARP_){
return thi.ng.geom.core.transform_vector(m,p1__16566_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IArea$area$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,r){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16558_SHARP_){
return thi.ng.geom.core.reflect(p1__16558_SHARP_,r);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ISample$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ISample$point_at$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null);
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ISample$random_point$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)),null);
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ISample$random_point_inside$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.random_point(___$1);
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ISample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){
var ___$1 = this;
return thi.ng.geom.utils.sample_uniform(udist,include_last_QMARK_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16559_SHARP_){
return thi.ng.geom.core.rotate(p1__16559_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IExtrude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IExtrude$extrude$arity$2 = (function (p__16573,p__16574){
var map__16575 = p__16573;
var map__16575__$1 = cljs.core.__destructure_map(map__16575);
var _ = map__16575__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16575__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16576 = p__16574;
var map__16576__$1 = cljs.core.__destructure_map(map__16576);
var opts = map__16576__$1;
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16576__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),1.0);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16576__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1.0);
var attribs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var map__16577 = this;
var map__16577__$1 = cljs.core.__destructure_map(map__16577);
var ___$1 = map__16577__$1;
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16577__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var tpoints = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1.0,scale))?points__$1:cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale_size(___$1,scale),new cljs.core.Keyword(null,"points","points",-1486596883)));
var off = (function (){var or__5043__auto__ = offset;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),depth);
}
})();
var top = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16556_SHARP_){
return thi.ng.math.core._PLUS_(off,p1__16556_SHARP_);
}),tpoints);
return thi.ng.geom.core.into((function (){var or__5043__auto__ = mesh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__16578){
var vec__16579 = p__16578;
var vec__16582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(0),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(1),null);
var vec__16585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
return thi.ng.geom.attribs.generate_face_attribs(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,b1,b2,a2], null),i,attribs,opts);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points__$1),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),top)))));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16564_SHARP_){
return thi.ng.math.core._STAR_(p1__16564_SHARP_,s);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2(s,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$2 = (function (p__16593,res){
var map__16594 = p__16593;
var map__16594__$1 = cljs.core.__destructure_map(map__16594);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16594__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16595 = this;
var map__16595__$1 = cljs.core.__destructure_map(map__16595);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16557_SHARP_){
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2(p1__16557_SHARP_,points__$1);
}),thi.ng.math.core.norm_range(res));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IGraph$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.dstruct.core.neighbors(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IGraph$vertex_valence$arity$2 = (function (p__16596,v){
var map__16597 = p__16596;
var map__16597__$1 = cljs.core.__destructure_map(map__16597);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16597__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__16598 = this;
var map__16598__$1 = cljs.core.__destructure_map(map__16598);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16598__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var temp__5802__auto__ = thi.ng.dstruct.core.neighbors(v,points__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var p = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(points__$1),cljs.core.peek(points__$1))){
return (2);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(points__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.peek(points__$1))))){
return (1);
} else {
return (2);
}
}
} else {
return (0);
}
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16565_SHARP_){
return thi.ng.math.core._PLUS_(p1__16565_SHARP_,t);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IClassify$classify_point$arity$2 = (function (_,v){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.centroid(___$1),thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(o),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.centroid(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBoundary$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 = (function (_,a){
var ___$1 = this;
return null;
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16560_SHARP_){
return thi.ng.geom.core.rotate_x(p1__16560_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16561_SHARP_){
return thi.ng.geom.core.rotate_y(p1__16561_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16562_SHARP_){
return thi.ng.geom.core.rotate_z(p1__16562_SHARP_,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){
var ___$1 = this;
return (new thi.ng.geom.types.LineStrip3(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16563_SHARP_){
return thi.ng.geom.core.rotate_around_axis(p1__16563_SHARP_,axis,theta);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883))),null,null,null));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IEdgeAccess$edges$arity$2 = (function (_,res){
var ___$1 = this;
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),thi.ng.geom.core.vertices(___$1,res));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist_squared,cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.get.cljs$core$IFn$_invoke$arity$2(___$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICircumference$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$core$ICircumference$circumference$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.mag(___$1);
}));

//# sourceMappingURL=thi.ng.geom.line.js.map
