goog.provide('thi.ng.geom.core');
thi.ng.geom.core._STAR_resolution_STAR_ = (20);

/**
 * @interface
 */
thi.ng.geom.core.IDistance = function(){};

var thi$ng$geom$core$IDistance$dist$dyn_11735 = (function (_,a){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.dist[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5391__auto__.call(null,_,a));
} else {
var m__5389__auto__ = (thi.ng.geom.core.dist["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5389__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDistance.dist",_);
}
}
});
thi.ng.geom.core.dist = (function thi$ng$geom$core$dist(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IDistance$dist$arity$2 == null)))))){
return _.thi$ng$geom$core$IDistance$dist$arity$2(_,a);
} else {
return thi$ng$geom$core$IDistance$dist$dyn_11735(_,a);
}
});

var thi$ng$geom$core$IDistance$dist_squared$dyn_11736 = (function (_,a){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.dist_squared[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5391__auto__.call(null,_,a));
} else {
var m__5389__auto__ = (thi.ng.geom.core.dist_squared["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5389__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDistance.dist-squared",_);
}
}
});
thi.ng.geom.core.dist_squared = (function thi$ng$geom$core$dist_squared(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IDistance$dist_squared$arity$2 == null)))))){
return _.thi$ng$geom$core$IDistance$dist_squared$arity$2(_,a);
} else {
return thi$ng$geom$core$IDistance$dist_squared$dyn_11736(_,a);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IHeading = function(){};

var thi$ng$geom$core$IHeading$heading$dyn_11737 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.heading[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.heading["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading",_);
}
}
});
thi.ng.geom.core.heading = (function thi$ng$geom$core$heading(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$heading$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$heading$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$heading$dyn_11737(_);
}
});

var thi$ng$geom$core$IHeading$heading_xy$dyn_11738 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.heading_xy[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.heading_xy["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-xy",_);
}
}
});
thi.ng.geom.core.heading_xy = (function thi$ng$geom$core$heading_xy(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$heading_xy$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$heading_xy$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$heading_xy$dyn_11738(_);
}
});

var thi$ng$geom$core$IHeading$heading_xz$dyn_11747 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.heading_xz[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.heading_xz["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-xz",_);
}
}
});
thi.ng.geom.core.heading_xz = (function thi$ng$geom$core$heading_xz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$heading_xz$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$heading_xz$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$heading_xz$dyn_11747(_);
}
});

var thi$ng$geom$core$IHeading$heading_yz$dyn_11748 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.heading_yz[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.heading_yz["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-yz",_);
}
}
});
thi.ng.geom.core.heading_yz = (function thi$ng$geom$core$heading_yz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$heading_yz$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$heading_yz$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$heading_yz$dyn_11748(_);
}
});

var thi$ng$geom$core$IHeading$angle_between$dyn_11749 = (function (_,a){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.angle_between[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5391__auto__.call(null,_,a));
} else {
var m__5389__auto__ = (thi.ng.geom.core.angle_between["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5389__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IHeading.angle-between",_);
}
}
});
thi.ng.geom.core.angle_between = (function thi$ng$geom$core$angle_between(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$angle_between$arity$2 == null)))))){
return _.thi$ng$geom$core$IHeading$angle_between$arity$2(_,a);
} else {
return thi$ng$geom$core$IHeading$angle_between$dyn_11749(_,a);
}
});

var thi$ng$geom$core$IHeading$slope_xy$dyn_11750 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slope_xy[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slope_xy["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-xy",_);
}
}
});
thi.ng.geom.core.slope_xy = (function thi$ng$geom$core$slope_xy(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$slope_xy$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$slope_xy$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$slope_xy$dyn_11750(_);
}
});

var thi$ng$geom$core$IHeading$slope_xz$dyn_11751 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slope_xz[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slope_xz["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-xz",_);
}
}
});
thi.ng.geom.core.slope_xz = (function thi$ng$geom$core$slope_xz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$slope_xz$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$slope_xz$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$slope_xz$dyn_11751(_);
}
});

var thi$ng$geom$core$IHeading$slope_yz$dyn_11752 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slope_yz[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slope_yz["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-yz",_);
}
}
});
thi.ng.geom.core.slope_yz = (function thi$ng$geom$core$slope_yz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IHeading$slope_yz$arity$1 == null)))))){
return _.thi$ng$geom$core$IHeading$slope_yz$arity$1(_);
} else {
return thi$ng$geom$core$IHeading$slope_yz$dyn_11752(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormal = function(){};

var thi$ng$geom$core$INormal$normal$dyn_11753 = (function() {
var G__11754 = null;
var G__11754__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.normal["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INormal.normal",_);
}
}
});
var G__11754__2 = (function (_,a){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5391__auto__.call(null,_,a));
} else {
var m__5389__auto__ = (thi.ng.geom.core.normal["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__5389__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("INormal.normal",_);
}
}
});
G__11754 = function(_,a){
switch(arguments.length){
case 1:
return G__11754__1.call(this,_);
case 2:
return G__11754__2.call(this,_,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11754.cljs$core$IFn$_invoke$arity$1 = G__11754__1;
G__11754.cljs$core$IFn$_invoke$arity$2 = G__11754__2;
return G__11754;
})()
;
thi.ng.geom.core.normal = (function thi$ng$geom$core$normal(var_args){
var G__11406 = arguments.length;
switch (G__11406) {
case 1:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormal$normal$arity$1 == null)))))){
return _.thi$ng$geom$core$INormal$normal$arity$1(_);
} else {
return thi$ng$geom$core$INormal$normal$dyn_11753(_);
}
}));

(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormal$normal$arity$2 == null)))))){
return _.thi$ng$geom$core$INormal$normal$arity$2(_,a);
} else {
return thi$ng$geom$core$INormal$normal$dyn_11753(_,a);
}
}));

(thi.ng.geom.core.normal.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IPolar = function(){};

var thi$ng$geom$core$IPolar$as_polar$dyn_11756 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_polar[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_polar["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolar.as-polar",_);
}
}
});
thi.ng.geom.core.as_polar = (function thi$ng$geom$core$as_polar(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPolar$as_polar$arity$1 == null)))))){
return _.thi$ng$geom$core$IPolar$as_polar$arity$1(_);
} else {
return thi$ng$geom$core$IPolar$as_polar$dyn_11756(_);
}
});

var thi$ng$geom$core$IPolar$as_cartesian$dyn_11757 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_cartesian[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_cartesian["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolar.as-cartesian",_);
}
}
});
thi.ng.geom.core.as_cartesian = (function thi$ng$geom$core$as_cartesian(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPolar$as_cartesian$arity$1 == null)))))){
return _.thi$ng$geom$core$IPolar$as_cartesian$arity$1(_);
} else {
return thi$ng$geom$core$IPolar$as_cartesian$dyn_11757(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorReduce = function(){};

var thi$ng$geom$core$IVectorReduce$reduce_vector$dyn_11758 = (function() {
var G__11759 = null;
var G__11759__3 = (function (_,f,xs){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__5391__auto__.call(null,_,f,xs));
} else {
var m__5389__auto__ = (thi.ng.geom.core.reduce_vector["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__5389__auto__.call(null,_,f,xs));
} else {
throw cljs.core.missing_protocol("IVectorReduce.reduce-vector",_);
}
}
});
var G__11759__4 = (function (_,f,f2,xs){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__5391__auto__.call(null,_,f,f2,xs));
} else {
var m__5389__auto__ = (thi.ng.geom.core.reduce_vector["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__5389__auto__.call(null,_,f,f2,xs));
} else {
throw cljs.core.missing_protocol("IVectorReduce.reduce-vector",_);
}
}
});
G__11759 = function(_,f,f2,xs){
switch(arguments.length){
case 3:
return G__11759__3.call(this,_,f,f2);
case 4:
return G__11759__4.call(this,_,f,f2,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11759.cljs$core$IFn$_invoke$arity$3 = G__11759__3;
G__11759.cljs$core$IFn$_invoke$arity$4 = G__11759__4;
return G__11759;
})()
;
thi.ng.geom.core.reduce_vector = (function thi$ng$geom$core$reduce_vector(var_args){
var G__11431 = arguments.length;
switch (G__11431) {
case 3:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3 = (function (_,f,xs){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 == null)))))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3(_,f,xs);
} else {
return thi$ng$geom$core$IVectorReduce$reduce_vector$dyn_11758(_,f,xs);
}
}));

(thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4 = (function (_,f,f2,xs){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 == null)))))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4(_,f,f2,xs);
} else {
return thi$ng$geom$core$IVectorReduce$reduce_vector$dyn_11758(_,f,f2,xs);
}
}));

(thi.ng.geom.core.reduce_vector.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.IRotate = function(){};

var thi$ng$geom$core$IRotate$rotate$dyn_11761 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.rotate[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.rotate["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate.rotate",_);
}
}
});
thi.ng.geom.core.rotate = (function thi$ng$geom$core$rotate(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRotate$rotate$arity$2 == null)))))){
return _.thi$ng$geom$core$IRotate$rotate$arity$2(_,t);
} else {
return thi$ng$geom$core$IRotate$rotate$dyn_11761(_,t);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IRotate3D = function(){};

var thi$ng$geom$core$IRotate3D$rotate_x$dyn_11762 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.rotate_x[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.rotate_x["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-x",_);
}
}
});
thi.ng.geom.core.rotate_x = (function thi$ng$geom$core$rotate_x(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 == null)))))){
return _.thi$ng$geom$core$IRotate3D$rotate_x$arity$2(_,t);
} else {
return thi$ng$geom$core$IRotate3D$rotate_x$dyn_11762(_,t);
}
});

var thi$ng$geom$core$IRotate3D$rotate_y$dyn_11763 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.rotate_y[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.rotate_y["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-y",_);
}
}
});
thi.ng.geom.core.rotate_y = (function thi$ng$geom$core$rotate_y(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 == null)))))){
return _.thi$ng$geom$core$IRotate3D$rotate_y$arity$2(_,t);
} else {
return thi$ng$geom$core$IRotate3D$rotate_y$dyn_11763(_,t);
}
});

var thi$ng$geom$core$IRotate3D$rotate_z$dyn_11764 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.rotate_z[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.rotate_z["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-z",_);
}
}
});
thi.ng.geom.core.rotate_z = (function thi$ng$geom$core$rotate_z(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 == null)))))){
return _.thi$ng$geom$core$IRotate3D$rotate_z$arity$2(_,t);
} else {
return thi$ng$geom$core$IRotate3D$rotate_z$dyn_11764(_,t);
}
});

var thi$ng$geom$core$IRotate3D$rotate_around_axis$dyn_11767 = (function (_,a,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.rotate_around_axis[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__5391__auto__.call(null,_,a,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.rotate_around_axis["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__5389__auto__.call(null,_,a,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-around-axis",_);
}
}
});
thi.ng.geom.core.rotate_around_axis = (function thi$ng$geom$core$rotate_around_axis(_,a,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 == null)))))){
return _.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3(_,a,t);
} else {
return thi$ng$geom$core$IRotate3D$rotate_around_axis$dyn_11767(_,a,t);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IReflect = function(){};

var thi$ng$geom$core$IReflect$reflect$dyn_11768 = (function (_,r){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.reflect[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__5391__auto__.call(null,_,r));
} else {
var m__5389__auto__ = (thi.ng.geom.core.reflect["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__5389__auto__.call(null,_,r));
} else {
throw cljs.core.missing_protocol("IReflect.reflect",_);
}
}
});
thi.ng.geom.core.reflect = (function thi$ng$geom$core$reflect(_,r){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IReflect$reflect$arity$2 == null)))))){
return _.thi$ng$geom$core$IReflect$reflect$arity$2(_,r);
} else {
return thi$ng$geom$core$IReflect$reflect$dyn_11768(_,r);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IScale = function(){};

var thi$ng$geom$core$IScale$scale$dyn_11771 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.scale["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IScale.scale",_);
}
}
});
thi.ng.geom.core.scale = (function thi$ng$geom$core$scale(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IScale$scale$arity$2 == null)))))){
return _.thi$ng$geom$core$IScale$scale$arity$2(_,s);
} else {
return thi$ng$geom$core$IScale$scale$dyn_11771(_,s);
}
});

var thi$ng$geom$core$IScale$scale_size$dyn_11772 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.scale_size[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.scale_size["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IScale.scale-size",_);
}
}
});
thi.ng.geom.core.scale_size = (function thi$ng$geom$core$scale_size(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IScale$scale_size$arity$2 == null)))))){
return _.thi$ng$geom$core$IScale$scale_size$arity$2(_,s);
} else {
return thi$ng$geom$core$IScale$scale_size$dyn_11772(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IShear = function(){};

var thi$ng$geom$core$IShear$shear$dyn_11776 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.shear["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IShear.shear",_);
}
}
});
thi.ng.geom.core.shear = (function thi$ng$geom$core$shear(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IShear$shear$arity$2 == null)))))){
return _.thi$ng$geom$core$IShear$shear$arity$2(_,s);
} else {
return thi$ng$geom$core$IShear$shear$dyn_11776(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITransform = function(){};

var thi$ng$geom$core$ITransform$transform$dyn_11777 = (function (_,tx){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.transform[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,tx) : m__5391__auto__.call(null,_,tx));
} else {
var m__5389__auto__ = (thi.ng.geom.core.transform["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,tx) : m__5389__auto__.call(null,_,tx));
} else {
throw cljs.core.missing_protocol("ITransform.transform",_);
}
}
});
thi.ng.geom.core.transform = (function thi$ng$geom$core$transform(_,tx){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ITransform$transform$arity$2 == null)))))){
return _.thi$ng$geom$core$ITransform$transform$arity$2(_,tx);
} else {
return thi$ng$geom$core$ITransform$transform$dyn_11777(_,tx);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITranslate = function(){};

var thi$ng$geom$core$ITranslate$translate$dyn_11778 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.translate["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("ITranslate.translate",_);
}
}
});
thi.ng.geom.core.translate = (function thi$ng$geom$core$translate(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ITranslate$translate$arity$2 == null)))))){
return _.thi$ng$geom$core$ITranslate$translate$arity$2(_,t);
} else {
return thi$ng$geom$core$ITranslate$translate$dyn_11778(_,t);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorTransform = function(){};

var thi$ng$geom$core$IVectorTransform$transform_vector$dyn_11779 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.transform_vector[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.transform_vector["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IVectorTransform.transform-vector",_);
}
}
});
thi.ng.geom.core.transform_vector = (function thi$ng$geom$core$transform_vector(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 == null)))))){
return _.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2(_,v);
} else {
return thi$ng$geom$core$IVectorTransform$transform_vector$dyn_11779(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMatrixConvert = function(){};

var thi$ng$geom$core$IMatrixConvert$as_matrix$dyn_11782 = (function() {
var G__11783 = null;
var G__11783__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_matrix["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMatrixConvert.as-matrix",_);
}
}
});
var G__11783__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_matrix["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IMatrixConvert.as-matrix",_);
}
}
});
G__11783 = function(_,opts){
switch(arguments.length){
case 1:
return G__11783__1.call(this,_);
case 2:
return G__11783__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11783.cljs$core$IFn$_invoke$arity$1 = G__11783__1;
G__11783.cljs$core$IFn$_invoke$arity$2 = G__11783__2;
return G__11783;
})()
;
thi.ng.geom.core.as_matrix = (function thi$ng$geom$core$as_matrix(var_args){
var G__11499 = arguments.length;
switch (G__11499) {
case 1:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1 == null)))))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1(_);
} else {
return thi$ng$geom$core$IMatrixConvert$as_matrix$dyn_11782(_);
}
}));

(thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2 == null)))))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2(_,opts);
} else {
return thi$ng$geom$core$IMatrixConvert$as_matrix$dyn_11782(_,opts);
}
}));

(thi.ng.geom.core.as_matrix.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IGraph = function(){};

var thi$ng$geom$core$IGraph$connected_components$dyn_11791 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.connected_components[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.connected_components["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraph.connected-components",_);
}
}
});
thi.ng.geom.core.connected_components = (function thi$ng$geom$core$connected_components(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$connected_components$arity$1 == null)))))){
return _.thi$ng$geom$core$IGraph$connected_components$arity$1(_);
} else {
return thi$ng$geom$core$IGraph$connected_components$dyn_11791(_);
}
});

var thi$ng$geom$core$IGraph$cyclic_QMARK_$dyn_11795 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.cyclic_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.cyclic_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraph.cyclic?",_);
}
}
});
thi.ng.geom.core.cyclic_QMARK_ = (function thi$ng$geom$core$cyclic_QMARK_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1 == null)))))){
return _.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1(_);
} else {
return thi$ng$geom$core$IGraph$cyclic_QMARK_$dyn_11795(_);
}
});

var thi$ng$geom$core$IGraph$vertex_valence$dyn_11796 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertex_valence[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertex_valence["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.vertex-valence",_);
}
}
});
thi.ng.geom.core.vertex_valence = (function thi$ng$geom$core$vertex_valence(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$vertex_valence$arity$2 == null)))))){
return _.thi$ng$geom$core$IGraph$vertex_valence$arity$2(_,v);
} else {
return thi$ng$geom$core$IGraph$vertex_valence$dyn_11796(_,v);
}
});

var thi$ng$geom$core$IGraph$vertex_neighbors$dyn_11797 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertex_neighbors[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertex_neighbors["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.vertex-neighbors",_);
}
}
});
thi.ng.geom.core.vertex_neighbors = (function thi$ng$geom$core$vertex_neighbors(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 == null)))))){
return _.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2(_,v);
} else {
return thi$ng$geom$core$IGraph$vertex_neighbors$dyn_11797(_,v);
}
});

var thi$ng$geom$core$IGraph$remove_vertex$dyn_11800 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.remove_vertex[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.remove_vertex["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.remove-vertex",_);
}
}
});
thi.ng.geom.core.remove_vertex = (function thi$ng$geom$core$remove_vertex(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$remove_vertex$arity$2 == null)))))){
return _.thi$ng$geom$core$IGraph$remove_vertex$arity$2(_,v);
} else {
return thi$ng$geom$core$IGraph$remove_vertex$dyn_11800(_,v);
}
});

var thi$ng$geom$core$IGraph$replace_vertex$dyn_11807 = (function (_,a,b){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.replace_vertex[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__5391__auto__.call(null,_,a,b));
} else {
var m__5389__auto__ = (thi.ng.geom.core.replace_vertex["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__5389__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IGraph.replace-vertex",_);
}
}
});
thi.ng.geom.core.replace_vertex = (function thi$ng$geom$core$replace_vertex(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$replace_vertex$arity$3 == null)))))){
return _.thi$ng$geom$core$IGraph$replace_vertex$arity$3(_,a,b);
} else {
return thi$ng$geom$core$IGraph$replace_vertex$dyn_11807(_,a,b);
}
});

var thi$ng$geom$core$IGraph$merge_vertices$dyn_11811 = (function (_,a,b){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.merge_vertices[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__5391__auto__.call(null,_,a,b));
} else {
var m__5389__auto__ = (thi.ng.geom.core.merge_vertices["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__5389__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IGraph.merge-vertices",_);
}
}
});
thi.ng.geom.core.merge_vertices = (function thi$ng$geom$core$merge_vertices(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraph$merge_vertices$arity$3 == null)))))){
return _.thi$ng$geom$core$IGraph$merge_vertices$arity$3(_,a,b);
} else {
return thi$ng$geom$core$IGraph$merge_vertices$dyn_11811(_,a,b);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IDirectedGraph = function(){};

var thi$ng$geom$core$IDirectedGraph$in_vertices$dyn_11812 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.in_vertices[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.in_vertices["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IDirectedGraph.in-vertices",_);
}
}
});
thi.ng.geom.core.in_vertices = (function thi$ng$geom$core$in_vertices(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2(_,v);
} else {
return thi$ng$geom$core$IDirectedGraph$in_vertices$dyn_11812(_,v);
}
});

var thi$ng$geom$core$IDirectedGraph$out_vertices$dyn_11815 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.out_vertices[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.out_vertices["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IDirectedGraph.out-vertices",_);
}
}
});
thi.ng.geom.core.out_vertices = (function thi$ng$geom$core$out_vertices(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2(_,v);
} else {
return thi$ng$geom$core$IDirectedGraph$out_vertices$dyn_11815(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGraphConvert = function(){};

var thi$ng$geom$core$IGraphConvert$as_graph$dyn_11821 = (function() {
var G__11822 = null;
var G__11822__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraphConvert.as-graph",_);
}
}
});
var G__11822__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IGraphConvert.as-graph",_);
}
}
});
G__11822 = function(_,opts){
switch(arguments.length){
case 1:
return G__11822__1.call(this,_);
case 2:
return G__11822__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11822.cljs$core$IFn$_invoke$arity$1 = G__11822__1;
G__11822.cljs$core$IFn$_invoke$arity$2 = G__11822__2;
return G__11822;
})()
;
thi.ng.geom.core.as_graph = (function thi$ng$geom$core$as_graph(var_args){
var G__11529 = arguments.length;
switch (G__11529) {
case 1:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$1 == null)))))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$1(_);
} else {
return thi$ng$geom$core$IGraphConvert$as_graph$dyn_11821(_);
}
}));

(thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$2 == null)))))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$2(_,opts);
} else {
return thi$ng$geom$core$IGraphConvert$as_graph$dyn_11821(_,opts);
}
}));

(thi.ng.geom.core.as_graph.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IVertexAccess = function(){};

var thi$ng$geom$core$IVertexAccess$vertices$dyn_11832 = (function() {
var G__11834 = null;
var G__11834__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertices["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IVertexAccess.vertices",_);
}
}
});
var G__11834__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertices["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IVertexAccess.vertices",_);
}
}
});
G__11834 = function(_,opts){
switch(arguments.length){
case 1:
return G__11834__1.call(this,_);
case 2:
return G__11834__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11834.cljs$core$IFn$_invoke$arity$1 = G__11834__1;
G__11834.cljs$core$IFn$_invoke$arity$2 = G__11834__2;
return G__11834;
})()
;
thi.ng.geom.core.vertices = (function thi$ng$geom$core$vertices(var_args){
var G__11541 = arguments.length;
switch (G__11541) {
case 1:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$1 == null)))))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$1(_);
} else {
return thi$ng$geom$core$IVertexAccess$vertices$dyn_11832(_);
}
}));

(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$2(_,opts);
} else {
return thi$ng$geom$core$IVertexAccess$vertices$dyn_11832(_,opts);
}
}));

(thi.ng.geom.core.vertices.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IEdgeAccess = function(){};

var thi$ng$geom$core$IEdgeAccess$edges$dyn_11846 = (function() {
var G__11847 = null;
var G__11847__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.edges["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IEdgeAccess.edges",_);
}
}
});
var G__11847__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.edges["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IEdgeAccess.edges",_);
}
}
});
G__11847 = function(_,opts){
switch(arguments.length){
case 1:
return G__11847__1.call(this,_);
case 2:
return G__11847__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11847.cljs$core$IFn$_invoke$arity$1 = G__11847__1;
G__11847.cljs$core$IFn$_invoke$arity$2 = G__11847__2;
return G__11847;
})()
;
thi.ng.geom.core.edges = (function thi$ng$geom$core$edges(var_args){
var G__11543 = arguments.length;
switch (G__11543) {
case 1:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$1 == null)))))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$1(_);
} else {
return thi$ng$geom$core$IEdgeAccess$edges$dyn_11846(_);
}
}));

(thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$2 == null)))))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$2(_,opts);
} else {
return thi$ng$geom$core$IEdgeAccess$edges$dyn_11846(_,opts);
}
}));

(thi.ng.geom.core.edges.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IFaceAccess = function(){};

var thi$ng$geom$core$IFaceAccess$add_face$dyn_11858 = (function (_,face){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.add_face[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,face) : m__5391__auto__.call(null,_,face));
} else {
var m__5389__auto__ = (thi.ng.geom.core.add_face["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,face) : m__5389__auto__.call(null,_,face));
} else {
throw cljs.core.missing_protocol("IFaceAccess.add-face",_);
}
}
});
/**
 * Adds a new face to a mesh. The face arg is a 2-element vector
 *  of [vertices attributes], where attributes is a map of arbitrary
 *  vertex attributes. E.g. (g/add-face m [verts {:uv [[0 0] [1 0] [1 1]]}])
 */
thi.ng.geom.core.add_face = (function thi$ng$geom$core$add_face(_,face){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFaceAccess$add_face$arity$2 == null)))))){
return _.thi$ng$geom$core$IFaceAccess$add_face$arity$2(_,face);
} else {
return thi$ng$geom$core$IFaceAccess$add_face$dyn_11858(_,face);
}
});

var thi$ng$geom$core$IFaceAccess$faces$dyn_11864 = (function() {
var G__11866 = null;
var G__11866__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.faces["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFaceAccess.faces",_);
}
}
});
var G__11866__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.faces["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IFaceAccess.faces",_);
}
}
});
G__11866 = function(_,opts){
switch(arguments.length){
case 1:
return G__11866__1.call(this,_);
case 2:
return G__11866__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11866.cljs$core$IFn$_invoke$arity$1 = G__11866__1;
G__11866.cljs$core$IFn$_invoke$arity$2 = G__11866__2;
return G__11866;
})()
;
/**
 * Returns a mesh's face collection. If called without opts arg,
 *  returns faces directly as used internally by the mesh. If opts is
 *  truthy, returns each face as vector with a vector of face vertices
 *  as its first element. If the mesh supports vertex attributes,
 *  they're returned as the 2nd element in each face vector.
 */
thi.ng.geom.core.faces = (function thi$ng$geom$core$faces(var_args){
var G__11551 = arguments.length;
switch (G__11551) {
case 1:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFaceAccess$faces$arity$1 == null)))))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$1(_);
} else {
return thi$ng$geom$core$IFaceAccess$faces$dyn_11864(_);
}
}));

(thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFaceAccess$faces$arity$2 == null)))))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$2(_,opts);
} else {
return thi$ng$geom$core$IFaceAccess$faces$dyn_11864(_,opts);
}
}));

(thi.ng.geom.core.faces.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$IFaceAccess$remove_face$dyn_11876 = (function (_,fverts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.remove_face[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,fverts) : m__5391__auto__.call(null,_,fverts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.remove_face["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,fverts) : m__5389__auto__.call(null,_,fverts));
} else {
throw cljs.core.missing_protocol("IFaceAccess.remove-face",_);
}
}
});
/**
 * Takes a vector of vertices defining a face in the mesh and
 *  returns updated mesh without that face.
 */
thi.ng.geom.core.remove_face = (function thi$ng$geom$core$remove_face(_,fverts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 == null)))))){
return _.thi$ng$geom$core$IFaceAccess$remove_face$arity$2(_,fverts);
} else {
return thi$ng$geom$core$IFaceAccess$remove_face$dyn_11876(_,fverts);
}
});

var thi$ng$geom$core$IFaceAccess$vertex_faces$dyn_11878 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertex_faces[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertex_faces["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IFaceAccess.vertex-faces",_);
}
}
});
/**
 * Returns seq of faces the given vertex is part of.
 */
thi.ng.geom.core.vertex_faces = (function thi$ng$geom$core$vertex_faces(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 == null)))))){
return _.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2(_,v);
} else {
return thi$ng$geom$core$IFaceAccess$vertex_faces$dyn_11878(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormalAccess = function(){};

var thi$ng$geom$core$INormalAccess$compute_face_normals$dyn_11885 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.compute_face_normals[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.compute_face_normals["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalAccess.compute-face-normals",_);
}
}
});
thi.ng.geom.core.compute_face_normals = (function thi$ng$geom$core$compute_face_normals(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 == null)))))){
return _.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1(_);
} else {
return thi$ng$geom$core$INormalAccess$compute_face_normals$dyn_11885(_);
}
});

var thi$ng$geom$core$INormalAccess$compute_vertex_normals$dyn_11887 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.compute_vertex_normals[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.compute_vertex_normals["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalAccess.compute-vertex-normals",_);
}
}
});
thi.ng.geom.core.compute_vertex_normals = (function thi$ng$geom$core$compute_vertex_normals(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 == null)))))){
return _.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1(_);
} else {
return thi$ng$geom$core$INormalAccess$compute_vertex_normals$dyn_11887(_);
}
});

var thi$ng$geom$core$INormalAccess$face_normals$dyn_11898 = (function (_,force_QMARK_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.face_normals[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__5391__auto__.call(null,_,force_QMARK_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.face_normals["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__5389__auto__.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("INormalAccess.face-normals",_);
}
}
});
thi.ng.geom.core.face_normals = (function thi$ng$geom$core$face_normals(_,force_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$face_normals$arity$2 == null)))))){
return _.thi$ng$geom$core$INormalAccess$face_normals$arity$2(_,force_QMARK_);
} else {
return thi$ng$geom$core$INormalAccess$face_normals$dyn_11898(_,force_QMARK_);
}
});

var thi$ng$geom$core$INormalAccess$face_normal$dyn_11907 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.face_normal[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (thi.ng.geom.core.face_normal["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("INormalAccess.face-normal",_);
}
}
});
thi.ng.geom.core.face_normal = (function thi$ng$geom$core$face_normal(_,f){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$face_normal$arity$2 == null)))))){
return _.thi$ng$geom$core$INormalAccess$face_normal$arity$2(_,f);
} else {
return thi$ng$geom$core$INormalAccess$face_normal$dyn_11907(_,f);
}
});

var thi$ng$geom$core$INormalAccess$vertex_normals$dyn_11911 = (function (_,force_QMARK_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertex_normals[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__5391__auto__.call(null,_,force_QMARK_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertex_normals["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__5389__auto__.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("INormalAccess.vertex-normals",_);
}
}
});
thi.ng.geom.core.vertex_normals = (function thi$ng$geom$core$vertex_normals(_,force_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 == null)))))){
return _.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2(_,force_QMARK_);
} else {
return thi$ng$geom$core$INormalAccess$vertex_normals$dyn_11911(_,force_QMARK_);
}
});

var thi$ng$geom$core$INormalAccess$vertex_normal$dyn_11922 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.vertex_normal[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.vertex_normal["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("INormalAccess.vertex-normal",_);
}
}
});
thi.ng.geom.core.vertex_normal = (function thi$ng$geom$core$vertex_normal(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 == null)))))){
return _.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2(_,v);
} else {
return thi$ng$geom$core$INormalAccess$vertex_normal$dyn_11922(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAttributeAccess = function(){};

var thi$ng$geom$core$IAttributeAccess$attribs$dyn_11928 = (function() {
var G__11929 = null;
var G__11929__2 = (function (_,ctx){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__5391__auto__.call(null,_,ctx));
} else {
var m__5389__auto__ = (thi.ng.geom.core.attribs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__5389__auto__.call(null,_,ctx));
} else {
throw cljs.core.missing_protocol("IAttributeAccess.attribs",_);
}
}
});
var G__11929__3 = (function (_,ctx,attr){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,ctx,attr) : m__5391__auto__.call(null,_,ctx,attr));
} else {
var m__5389__auto__ = (thi.ng.geom.core.attribs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,ctx,attr) : m__5389__auto__.call(null,_,ctx,attr));
} else {
throw cljs.core.missing_protocol("IAttributeAccess.attribs",_);
}
}
});
G__11929 = function(_,ctx,attr){
switch(arguments.length){
case 2:
return G__11929__2.call(this,_,ctx);
case 3:
return G__11929__3.call(this,_,ctx,attr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11929.cljs$core$IFn$_invoke$arity$2 = G__11929__2;
G__11929.cljs$core$IFn$_invoke$arity$3 = G__11929__3;
return G__11929;
})()
;
thi.ng.geom.core.attribs = (function thi$ng$geom$core$attribs(var_args){
var G__11564 = arguments.length;
switch (G__11564) {
case 2:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2 = (function (_,ctx){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 == null)))))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$2(_,ctx);
} else {
return thi$ng$geom$core$IAttributeAccess$attribs$dyn_11928(_,ctx);
}
}));

(thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3 = (function (_,ctx,attr){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$3 == null)))))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$3(_,ctx,attr);
} else {
return thi$ng$geom$core$IAttributeAccess$attribs$dyn_11928(_,ctx,attr);
}
}));

(thi.ng.geom.core.attribs.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.geom.core.IRawAccess = function(){};

var thi$ng$geom$core$IRawAccess$raw$dyn_11943 = (function (_,ctx){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.raw[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__5391__auto__.call(null,_,ctx));
} else {
var m__5389__auto__ = (thi.ng.geom.core.raw["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__5389__auto__.call(null,_,ctx));
} else {
throw cljs.core.missing_protocol("IRawAccess.raw",_);
}
}
});
thi.ng.geom.core.raw = (function thi$ng$geom$core$raw(_,ctx){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IRawAccess$raw$arity$2 == null)))))){
return _.thi$ng$geom$core$IRawAccess$raw$arity$2(_,ctx);
} else {
return thi$ng$geom$core$IRawAccess$raw$dyn_11943(_,ctx);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAlign = function(){};

var thi$ng$geom$core$IAlign$align_with$dyn_11945 = (function (_,x,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.align_with[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__5391__auto__.call(null,_,x,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.align_with["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__5389__auto__.call(null,_,x,opts));
} else {
throw cljs.core.missing_protocol("IAlign.align-with",_);
}
}
});
/**
 * Returns updated entity aligned with `x` in the specified manner
 */
thi.ng.geom.core.align_with = (function thi$ng$geom$core$align_with(_,x,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IAlign$align_with$arity$3 == null)))))){
return _.thi$ng$geom$core$IAlign$align_with$arity$3(_,x,opts);
} else {
return thi$ng$geom$core$IAlign$align_with$dyn_11945(_,x,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IArea = function(){};

var thi$ng$geom$core$IArea$area$dyn_11951 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.area[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.area["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IArea.area",_);
}
}
});
/**
 * Returns an entity's total surface area
 */
thi.ng.geom.core.area = (function thi$ng$geom$core$area(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IArea$area$arity$1 == null)))))){
return _.thi$ng$geom$core$IArea$area$arity$1(_);
} else {
return thi$ng$geom$core$IArea$area$dyn_11951(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundary = function(){};

var thi$ng$geom$core$IBoundary$contains_entity_QMARK_$dyn_11957 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.contains_entity_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.contains_entity_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IBoundary.contains-entity?",_);
}
}
});
thi.ng.geom.core.contains_entity_QMARK_ = (function thi$ng$geom$core$contains_entity_QMARK_(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2 == null)))))){
return _.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2(_,s);
} else {
return thi$ng$geom$core$IBoundary$contains_entity_QMARK_$dyn_11957(_,s);
}
});

var thi$ng$geom$core$IBoundary$contains_point_QMARK_$dyn_11960 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.contains_point_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.contains_point_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IBoundary.contains-point?",_);
}
}
});
thi.ng.geom.core.contains_point_QMARK_ = (function thi$ng$geom$core$contains_point_QMARK_(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 == null)))))){
return _.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2(_,p);
} else {
return thi$ng$geom$core$IBoundary$contains_point_QMARK_$dyn_11960(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingCircle = function(){};

var thi$ng$geom$core$IBoundingCircle$bounding_circle$dyn_11964 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.bounding_circle[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.bounding_circle["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBoundingCircle.bounding-circle",_);
}
}
});
thi.ng.geom.core.bounding_circle = (function thi$ng$geom$core$bounding_circle(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 == null)))))){
return _.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1(_);
} else {
return thi$ng$geom$core$IBoundingCircle$bounding_circle$dyn_11964(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingSphere = function(){};

var thi$ng$geom$core$IBoundingSphere$bounding_sphere$dyn_11966 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.bounding_sphere[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.bounding_sphere["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBoundingSphere.bounding-sphere",_);
}
}
});
thi.ng.geom.core.bounding_sphere = (function thi$ng$geom$core$bounding_sphere(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 == null)))))){
return _.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1(_);
} else {
return thi$ng$geom$core$IBoundingSphere$bounding_sphere$dyn_11966(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBounds = function(){};

var thi$ng$geom$core$IBounds$bounds$dyn_11974 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.bounds[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.bounds["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.bounds",_);
}
}
});
/**
 * Returns bounding rect for 2d entities or box for 3d
 */
thi.ng.geom.core.bounds = (function thi$ng$geom$core$bounds(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBounds$bounds$arity$1 == null)))))){
return _.thi$ng$geom$core$IBounds$bounds$arity$1(_);
} else {
return thi$ng$geom$core$IBounds$bounds$dyn_11974(_);
}
});

var thi$ng$geom$core$IBounds$depth$dyn_11978 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.depth[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.depth["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.depth",_);
}
}
});
/**
 * Returns entity's extent along Z (zero for 2d)
 */
thi.ng.geom.core.depth = (function thi$ng$geom$core$depth(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBounds$depth$arity$1 == null)))))){
return _.thi$ng$geom$core$IBounds$depth$arity$1(_);
} else {
return thi$ng$geom$core$IBounds$depth$dyn_11978(_);
}
});

var thi$ng$geom$core$IBounds$height$dyn_11980 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.height[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.height["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.height",_);
}
}
});
/**
 * Returns entity's extent along Y axis
 */
thi.ng.geom.core.height = (function thi$ng$geom$core$height(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBounds$height$arity$1 == null)))))){
return _.thi$ng$geom$core$IBounds$height$arity$1(_);
} else {
return thi$ng$geom$core$IBounds$height$dyn_11980(_);
}
});

var thi$ng$geom$core$IBounds$width$dyn_11982 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.width[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.width["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.width",_);
}
}
});
/**
 * Returns entity's extent along X axis
 */
thi.ng.geom.core.width = (function thi$ng$geom$core$width(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IBounds$width$arity$1 == null)))))){
return _.thi$ng$geom$core$IBounds$width$arity$1(_);
} else {
return thi$ng$geom$core$IBounds$width$dyn_11982(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICenter = function(){};

var thi$ng$geom$core$ICenter$center$dyn_11984 = (function() {
var G__11985 = null;
var G__11985__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.center["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICenter.center",_);
}
}
});
var G__11985__2 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.center["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("ICenter.center",_);
}
}
});
G__11985 = function(_,p){
switch(arguments.length){
case 1:
return G__11985__1.call(this,_);
case 2:
return G__11985__2.call(this,_,p);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11985.cljs$core$IFn$_invoke$arity$1 = G__11985__1;
G__11985.cljs$core$IFn$_invoke$arity$2 = G__11985__2;
return G__11985;
})()
;
/**
 * Returns updated entity centered around world origin or given point
 */
thi.ng.geom.core.center = (function thi$ng$geom$core$center(var_args){
var G__11590 = arguments.length;
switch (G__11590) {
case 1:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ICenter$center$arity$1 == null)))))){
return _.thi$ng$geom$core$ICenter$center$arity$1(_);
} else {
return thi$ng$geom$core$ICenter$center$dyn_11984(_);
}
}));

(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2 = (function (_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ICenter$center$arity$2 == null)))))){
return _.thi$ng$geom$core$ICenter$center$arity$2(_,p);
} else {
return thi$ng$geom$core$ICenter$center$dyn_11984(_,p);
}
}));

(thi.ng.geom.core.center.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$ICenter$centroid$dyn_11994 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.centroid[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.centroid["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICenter.centroid",_);
}
}
});
/**
 * Returns centroid of entity
 */
thi.ng.geom.core.centroid = (function thi$ng$geom$core$centroid(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ICenter$centroid$arity$1 == null)))))){
return _.thi$ng$geom$core$ICenter$centroid$arity$1(_);
} else {
return thi$ng$geom$core$ICenter$centroid$dyn_11994(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICircumference = function(){};

var thi$ng$geom$core$ICircumference$circumference$dyn_11997 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.circumference[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.circumference["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICircumference.circumference",_);
}
}
});
/**
 * Returns an entity's circumference
 */
thi.ng.geom.core.circumference = (function thi$ng$geom$core$circumference(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ICircumference$circumference$arity$1 == null)))))){
return _.thi$ng$geom$core$ICircumference$circumference$arity$1(_);
} else {
return thi$ng$geom$core$ICircumference$circumference$dyn_11997(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClassify = function(){};

var thi$ng$geom$core$IClassify$classify_point$dyn_12004 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.classify_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.classify_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IClassify.classify-point",_);
}
}
});
thi.ng.geom.core.classify_point = (function thi$ng$geom$core$classify_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IClassify$classify_point$arity$2 == null)))))){
return _.thi$ng$geom$core$IClassify$classify_point$arity$2(_,p);
} else {
return thi$ng$geom$core$IClassify$classify_point$dyn_12004(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClear = function(){};

var thi$ng$geom$core$IClear$clear_STAR_$dyn_12008 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.clear_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.clear_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClear.clear*",_);
}
}
});
thi.ng.geom.core.clear_STAR_ = (function thi$ng$geom$core$clear_STAR_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IClear$clear_STAR_$arity$1 == null)))))){
return _.thi$ng$geom$core$IClear$clear_STAR_$arity$1(_);
} else {
return thi$ng$geom$core$IClear$clear_STAR_$dyn_12008(_);
}
});

var thi$ng$geom$core$IClear$clear_BANG_$dyn_12011 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.clear_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.clear_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClear.clear!",_);
}
}
});
thi.ng.geom.core.clear_BANG_ = (function thi$ng$geom$core$clear_BANG_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IClear$clear_BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$IClear$clear_BANG_$arity$1(_);
} else {
return thi$ng$geom$core$IClear$clear_BANG_$dyn_12011(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClip = function(){};

var thi$ng$geom$core$IClip$clip_with$dyn_12014 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.clip_with[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.clip_with["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IClip.clip-with",_);
}
}
});
thi.ng.geom.core.clip_with = (function thi$ng$geom$core$clip_with(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IClip$clip_with$arity$2 == null)))))){
return _.thi$ng$geom$core$IClip$clip_with$arity$2(_,s);
} else {
return thi$ng$geom$core$IClip$clip_with$dyn_12014(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IConvexHull = function(){};

var thi$ng$geom$core$IConvexHull$convex_hull$dyn_12018 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.convex_hull[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.convex_hull["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConvexHull.convex-hull",_);
}
}
});
thi.ng.geom.core.convex_hull = (function thi$ng$geom$core$convex_hull(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IConvexHull$convex_hull$arity$1 == null)))))){
return _.thi$ng$geom$core$IConvexHull$convex_hull$arity$1(_);
} else {
return thi$ng$geom$core$IConvexHull$convex_hull$dyn_12018(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IExtrude = function(){};

var thi$ng$geom$core$IExtrude$extrude$dyn_12024 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.extrude[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.extrude["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IExtrude.extrude",_);
}
}
});
thi.ng.geom.core.extrude = (function thi$ng$geom$core$extrude(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IExtrude$extrude$arity$2 == null)))))){
return _.thi$ng$geom$core$IExtrude$extrude$arity$2(_,opts);
} else {
return thi$ng$geom$core$IExtrude$extrude$dyn_12024(_,opts);
}
});

var thi$ng$geom$core$IExtrude$extrude_shell$dyn_12031 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.extrude_shell[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.extrude_shell["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IExtrude.extrude-shell",_);
}
}
});
thi.ng.geom.core.extrude_shell = (function thi$ng$geom$core$extrude_shell(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 == null)))))){
return _.thi$ng$geom$core$IExtrude$extrude_shell$arity$2(_,opts);
} else {
return thi$ng$geom$core$IExtrude$extrude_shell$dyn_12031(_,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IFlip = function(){};

var thi$ng$geom$core$IFlip$flip$dyn_12039 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.flip[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.flip["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IFlip.flip",_);
}
}
});
thi.ng.geom.core.flip = (function thi$ng$geom$core$flip(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IFlip$flip$arity$1 == null)))))){
return _.thi$ng$geom$core$IFlip$flip$arity$1(_);
} else {
return thi$ng$geom$core$IFlip$flip$dyn_12039(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGeomContainer = function(){};

var thi$ng$geom$core$IGeomContainer$into$dyn_12044 = (function (_,m){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.into[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5391__auto__.call(null,_,m));
} else {
var m__5389__auto__ = (thi.ng.geom.core.into["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5389__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("IGeomContainer.into",_);
}
}
});
thi.ng.geom.core.into = (function thi$ng$geom$core$into(_,m){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IGeomContainer$into$arity$2 == null)))))){
return _.thi$ng$geom$core$IGeomContainer$into$arity$2(_,m);
} else {
return thi$ng$geom$core$IGeomContainer$into$dyn_12044(_,m);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IInset = function(){};

var thi$ng$geom$core$IInset$inset$dyn_12048 = (function (_,inset){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.inset[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,inset) : m__5391__auto__.call(null,_,inset));
} else {
var m__5389__auto__ = (thi.ng.geom.core.inset["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,inset) : m__5389__auto__.call(null,_,inset));
} else {
throw cljs.core.missing_protocol("IInset.inset",_);
}
}
});
thi.ng.geom.core.inset = (function thi$ng$geom$core$inset(_,inset){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IInset$inset$arity$2 == null)))))){
return _.thi$ng$geom$core$IInset$inset$arity$2(_,inset);
} else {
return thi$ng$geom$core$IInset$inset$dyn_12048(_,inset);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IIntersect = function(){};

var thi$ng$geom$core$IIntersect$intersect_line$dyn_12052 = (function() {
var G__12053 = null;
var G__12053__2 = (function (_,l){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,l) : m__5391__auto__.call(null,_,l));
} else {
var m__5389__auto__ = (thi.ng.geom.core.intersect_line["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,l) : m__5389__auto__.call(null,_,l));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-line",_);
}
}
});
var G__12053__3 = (function (_,p,q){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__5391__auto__.call(null,_,p,q));
} else {
var m__5389__auto__ = (thi.ng.geom.core.intersect_line["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__5389__auto__.call(null,_,p,q));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-line",_);
}
}
});
G__12053 = function(_,p,q){
switch(arguments.length){
case 2:
return G__12053__2.call(this,_,p);
case 3:
return G__12053__3.call(this,_,p,q);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12053.cljs$core$IFn$_invoke$arity$2 = G__12053__2;
G__12053.cljs$core$IFn$_invoke$arity$3 = G__12053__3;
return G__12053;
})()
;
thi.ng.geom.core.intersect_line = (function thi$ng$geom$core$intersect_line(var_args){
var G__11618 = arguments.length;
switch (G__11618) {
case 2:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2 = (function (_,l){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$2 == null)))))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$2(_,l);
} else {
return thi$ng$geom$core$IIntersect$intersect_line$dyn_12052(_,l);
}
}));

(thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3 = (function (_,p,q){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$3 == null)))))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$3(_,p,q);
} else {
return thi$ng$geom$core$IIntersect$intersect_line$dyn_12052(_,p,q);
}
}));

(thi.ng.geom.core.intersect_line.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$IIntersect$intersect_ray$dyn_12070 = (function() {
var G__12071 = null;
var G__12071__2 = (function (_,r){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__5391__auto__.call(null,_,r));
} else {
var m__5389__auto__ = (thi.ng.geom.core.intersect_ray["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__5389__auto__.call(null,_,r));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-ray",_);
}
}
});
var G__12071__3 = (function (_,p,dir){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__5391__auto__.call(null,_,p,dir));
} else {
var m__5389__auto__ = (thi.ng.geom.core.intersect_ray["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__5389__auto__.call(null,_,p,dir));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-ray",_);
}
}
});
G__12071 = function(_,p,dir){
switch(arguments.length){
case 2:
return G__12071__2.call(this,_,p);
case 3:
return G__12071__3.call(this,_,p,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12071.cljs$core$IFn$_invoke$arity$2 = G__12071__2;
G__12071.cljs$core$IFn$_invoke$arity$3 = G__12071__3;
return G__12071;
})()
;
thi.ng.geom.core.intersect_ray = (function thi$ng$geom$core$intersect_ray(var_args){
var G__11627 = arguments.length;
switch (G__11627) {
case 2:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2 = (function (_,r){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 == null)))))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$2(_,r);
} else {
return thi$ng$geom$core$IIntersect$intersect_ray$dyn_12070(_,r);
}
}));

(thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3 = (function (_,p,dir){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 == null)))))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$3(_,p,dir);
} else {
return thi$ng$geom$core$IIntersect$intersect_ray$dyn_12070(_,p,dir);
}
}));

(thi.ng.geom.core.intersect_ray.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$IIntersect$intersect_shape$dyn_12081 = (function (_,s){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.intersect_shape[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5391__auto__.call(null,_,s));
} else {
var m__5389__auto__ = (thi.ng.geom.core.intersect_shape["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__5389__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-shape",_);
}
}
});
thi.ng.geom.core.intersect_shape = (function thi$ng$geom$core$intersect_shape(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 == null)))))){
return _.thi$ng$geom$core$IIntersect$intersect_shape$arity$2(_,s);
} else {
return thi$ng$geom$core$IIntersect$intersect_shape$dyn_12081(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMeshConvert = function(){};

var thi$ng$geom$core$IMeshConvert$as_mesh$dyn_12084 = (function() {
var G__12085 = null;
var G__12085__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_mesh["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMeshConvert.as-mesh",_);
}
}
});
var G__12085__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_mesh["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IMeshConvert.as-mesh",_);
}
}
});
G__12085 = function(_,opts){
switch(arguments.length){
case 1:
return G__12085__1.call(this,_);
case 2:
return G__12085__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12085.cljs$core$IFn$_invoke$arity$1 = G__12085__1;
G__12085.cljs$core$IFn$_invoke$arity$2 = G__12085__2;
return G__12085;
})()
;
/**
 * Transforms the current enitity into a mesh instance
 */
thi.ng.geom.core.as_mesh = (function thi$ng$geom$core$as_mesh(var_args){
var G__11639 = arguments.length;
switch (G__11639) {
case 1:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 == null)))))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1(_);
} else {
return thi$ng$geom$core$IMeshConvert$as_mesh$dyn_12084(_);
}
}));

(thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 == null)))))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2(_,opts);
} else {
return thi$ng$geom$core$IMeshConvert$as_mesh$dyn_12084(_,opts);
}
}));

(thi.ng.geom.core.as_mesh.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IPointMap = function(){};

var thi$ng$geom$core$IPointMap$map_point$dyn_12097 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.map_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.map_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IPointMap.map-point",_);
}
}
});
thi.ng.geom.core.map_point = (function thi$ng$geom$core$map_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPointMap$map_point$arity$2 == null)))))){
return _.thi$ng$geom$core$IPointMap$map_point$arity$2(_,p);
} else {
return thi$ng$geom$core$IPointMap$map_point$dyn_12097(_,p);
}
});

var thi$ng$geom$core$IPointMap$unmap_point$dyn_12105 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.unmap_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.unmap_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IPointMap.unmap-point",_);
}
}
});
thi.ng.geom.core.unmap_point = (function thi$ng$geom$core$unmap_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPointMap$unmap_point$arity$2 == null)))))){
return _.thi$ng$geom$core$IPointMap$unmap_point$arity$2(_,p);
} else {
return thi$ng$geom$core$IPointMap$unmap_point$dyn_12105(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IPolygonConvert = function(){};

var thi$ng$geom$core$IPolygonConvert$as_polygon$dyn_12111 = (function() {
var G__12113 = null;
var G__12113__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_polygon["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolygonConvert.as-polygon",_);
}
}
});
var G__12113__2 = (function (_,res){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__5391__auto__.call(null,_,res));
} else {
var m__5389__auto__ = (thi.ng.geom.core.as_polygon["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__5389__auto__.call(null,_,res));
} else {
throw cljs.core.missing_protocol("IPolygonConvert.as-polygon",_);
}
}
});
G__12113 = function(_,res){
switch(arguments.length){
case 1:
return G__12113__1.call(this,_);
case 2:
return G__12113__2.call(this,_,res);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12113.cljs$core$IFn$_invoke$arity$1 = G__12113__1;
G__12113.cljs$core$IFn$_invoke$arity$2 = G__12113__2;
return G__12113;
})()
;
/**
 * Transforms current entity into a Polygon2 instance
 */
thi.ng.geom.core.as_polygon = (function thi$ng$geom$core$as_polygon(var_args){
var G__11653 = arguments.length;
switch (G__11653) {
case 1:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 == null)))))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1(_);
} else {
return thi$ng$geom$core$IPolygonConvert$as_polygon$dyn_12111(_);
}
}));

(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2 = (function (_,res){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2 == null)))))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2(_,res);
} else {
return thi$ng$geom$core$IPolygonConvert$as_polygon$dyn_12111(_,res);
}
}));

(thi.ng.geom.core.as_polygon.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IProximity = function(){};

var thi$ng$geom$core$IProximity$closest_point$dyn_12128 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.closest_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.closest_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IProximity.closest-point",_);
}
}
});
thi.ng.geom.core.closest_point = (function thi$ng$geom$core$closest_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IProximity$closest_point$arity$2 == null)))))){
return _.thi$ng$geom$core$IProximity$closest_point$arity$2(_,p);
} else {
return thi$ng$geom$core$IProximity$closest_point$dyn_12128(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISample = function(){};

var thi$ng$geom$core$ISample$point_at$dyn_12134 = (function() {
var G__12135 = null;
var G__12135__2 = (function (_,t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5391__auto__.call(null,_,t));
} else {
var m__5389__auto__ = (thi.ng.geom.core.point_at["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__5389__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("ISample.point-at",_);
}
}
});
var G__12135__3 = (function (_,u,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__5391__auto__.call(null,_,u,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.point_at["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__5389__auto__.call(null,_,u,v));
} else {
throw cljs.core.missing_protocol("ISample.point-at",_);
}
}
});
G__12135 = function(_,u,v){
switch(arguments.length){
case 2:
return G__12135__2.call(this,_,u);
case 3:
return G__12135__3.call(this,_,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12135.cljs$core$IFn$_invoke$arity$2 = G__12135__2;
G__12135.cljs$core$IFn$_invoke$arity$3 = G__12135__3;
return G__12135;
})()
;
thi.ng.geom.core.point_at = (function thi$ng$geom$core$point_at(var_args){
var G__11662 = arguments.length;
switch (G__11662) {
case 2:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$point_at$arity$2 == null)))))){
return _.thi$ng$geom$core$ISample$point_at$arity$2(_,t);
} else {
return thi$ng$geom$core$ISample$point_at$dyn_12134(_,t);
}
}));

(thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3 = (function (_,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$point_at$arity$3 == null)))))){
return _.thi$ng$geom$core$ISample$point_at$arity$3(_,u,v);
} else {
return thi$ng$geom$core$ISample$point_at$dyn_12134(_,u,v);
}
}));

(thi.ng.geom.core.point_at.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$ISample$random_point$dyn_12148 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.random_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.random_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISample.random-point",_);
}
}
});
thi.ng.geom.core.random_point = (function thi$ng$geom$core$random_point(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$random_point$arity$1 == null)))))){
return _.thi$ng$geom$core$ISample$random_point$arity$1(_);
} else {
return thi$ng$geom$core$ISample$random_point$dyn_12148(_);
}
});

var thi$ng$geom$core$ISample$random_point_inside$dyn_12155 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.random_point_inside[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.random_point_inside["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISample.random-point-inside",_);
}
}
});
thi.ng.geom.core.random_point_inside = (function thi$ng$geom$core$random_point_inside(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$random_point_inside$arity$1 == null)))))){
return _.thi$ng$geom$core$ISample$random_point_inside$arity$1(_);
} else {
return thi$ng$geom$core$ISample$random_point_inside$dyn_12155(_);
}
});

var thi$ng$geom$core$ISample$sample_uniform$dyn_12158 = (function (_,dist,include_last_QMARK_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.sample_uniform[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__5391__auto__.call(null,_,dist,include_last_QMARK_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.sample_uniform["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__5389__auto__.call(null,_,dist,include_last_QMARK_));
} else {
throw cljs.core.missing_protocol("ISample.sample-uniform",_);
}
}
});
thi.ng.geom.core.sample_uniform = (function thi$ng$geom$core$sample_uniform(_,dist,include_last_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$sample_uniform$arity$3 == null)))))){
return _.thi$ng$geom$core$ISample$sample_uniform$arity$3(_,dist,include_last_QMARK_);
} else {
return thi$ng$geom$core$ISample$sample_uniform$dyn_12158(_,dist,include_last_QMARK_);
}
});

var thi$ng$geom$core$ISample$sample_with_resolution$dyn_12162 = (function (_,res){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.sample_with_resolution[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__5391__auto__.call(null,_,res));
} else {
var m__5389__auto__ = (thi.ng.geom.core.sample_with_resolution["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__5389__auto__.call(null,_,res));
} else {
throw cljs.core.missing_protocol("ISample.sample-with-resolution",_);
}
}
});
thi.ng.geom.core.sample_with_resolution = (function thi$ng$geom$core$sample_with_resolution(_,res){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISample$sample_with_resolution$arity$2 == null)))))){
return _.thi$ng$geom$core$ISample$sample_with_resolution$arity$2(_,res);
} else {
return thi$ng$geom$core$ISample$sample_with_resolution$dyn_12162(_,res);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISlice = function(){};

var thi$ng$geom$core$ISlice$slice_with$dyn_12166 = (function() {
var G__12167 = null;
var G__12167__2 = (function (_,e){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5391__auto__.call(null,_,e));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5389__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
});
var G__12167__3 = (function (_,e,classifier){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__5391__auto__.call(null,_,e,classifier));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__5389__auto__.call(null,_,e,classifier));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
});
var G__12167__4 = (function (_,e,classifier,parts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__5391__auto__.call(null,_,e,classifier,parts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__5389__auto__.call(null,_,e,classifier,parts));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
});
G__12167 = function(_,e,classifier,parts){
switch(arguments.length){
case 2:
return G__12167__2.call(this,_,e);
case 3:
return G__12167__3.call(this,_,e,classifier);
case 4:
return G__12167__4.call(this,_,e,classifier,parts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12167.cljs$core$IFn$_invoke$arity$2 = G__12167__2;
G__12167.cljs$core$IFn$_invoke$arity$3 = G__12167__3;
G__12167.cljs$core$IFn$_invoke$arity$4 = G__12167__4;
return G__12167;
})()
;
thi.ng.geom.core.slice_with = (function thi$ng$geom$core$slice_with(var_args){
var G__11674 = arguments.length;
switch (G__11674) {
case 2:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2 = (function (_,e){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISlice$slice_with$arity$2 == null)))))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$2(_,e);
} else {
return thi$ng$geom$core$ISlice$slice_with$dyn_12166(_,e);
}
}));

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3 = (function (_,e,classifier){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISlice$slice_with$arity$3 == null)))))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$3(_,e,classifier);
} else {
return thi$ng$geom$core$ISlice$slice_with$dyn_12166(_,e,classifier);
}
}));

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4 = (function (_,e,classifier,parts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISlice$slice_with$arity$4 == null)))))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$4(_,e,classifier,parts);
} else {
return thi$ng$geom$core$ISlice$slice_with$dyn_12166(_,e,classifier,parts);
}
}));

(thi.ng.geom.core.slice_with.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.ISubdivide = function(){};

var thi$ng$geom$core$ISubdivide$subdivide$dyn_12183 = (function() {
var G__12184 = null;
var G__12184__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.subdivide["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide",_);
}
}
});
var G__12184__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.subdivide["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide",_);
}
}
});
G__12184 = function(_,opts){
switch(arguments.length){
case 1:
return G__12184__1.call(this,_);
case 2:
return G__12184__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12184.cljs$core$IFn$_invoke$arity$1 = G__12184__1;
G__12184.cljs$core$IFn$_invoke$arity$2 = G__12184__2;
return G__12184;
})()
;
thi.ng.geom.core.subdivide = (function thi$ng$geom$core$subdivide(var_args){
var G__11687 = arguments.length;
switch (G__11687) {
case 1:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$1 == null)))))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$1(_);
} else {
return thi$ng$geom$core$ISubdivide$subdivide$dyn_12183(_);
}
}));

(thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$2 == null)))))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$2(_,opts);
} else {
return thi$ng$geom$core$ISubdivide$subdivide$dyn_12183(_,opts);
}
}));

(thi.ng.geom.core.subdivide.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$ISubdivide$subdivide_edge$dyn_12193 = (function (_,a,b,splits){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.subdivide_edge[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__5391__auto__.call(null,_,a,b,splits));
} else {
var m__5389__auto__ = (thi.ng.geom.core.subdivide_edge["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__5389__auto__.call(null,_,a,b,splits));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide-edge",_);
}
}
});
thi.ng.geom.core.subdivide_edge = (function thi$ng$geom$core$subdivide_edge(_,a,b,splits){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4 == null)))))){
return _.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4(_,a,b,splits);
} else {
return thi$ng$geom$core$ISubdivide$subdivide_edge$dyn_12193(_,a,b,splits);
}
});

var thi$ng$geom$core$ISubdivide$subdivide_face$dyn_12198 = (function (_,f,p,displace,splits){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.subdivide_face[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__5391__auto__.call(null,_,f,p,displace,splits));
} else {
var m__5389__auto__ = (thi.ng.geom.core.subdivide_face["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__5389__auto__.call(null,_,f,p,displace,splits));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide-face",_);
}
}
});
thi.ng.geom.core.subdivide_face = (function thi$ng$geom$core$subdivide_face(_,f,p,displace,splits){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5 == null)))))){
return _.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5(_,f,p,displace,splits);
} else {
return thi$ng$geom$core$ISubdivide$subdivide_face$dyn_12198(_,f,p,displace,splits);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITessellate = function(){};

var thi$ng$geom$core$ITessellate$tessellate$dyn_12201 = (function() {
var G__12202 = null;
var G__12202__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.tessellate["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITessellate.tessellate",_);
}
}
});
var G__12202__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.core.tessellate["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("ITessellate.tessellate",_);
}
}
});
G__12202 = function(_,opts){
switch(arguments.length){
case 1:
return G__12202__1.call(this,_);
case 2:
return G__12202__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12202.cljs$core$IFn$_invoke$arity$1 = G__12202__1;
G__12202.cljs$core$IFn$_invoke$arity$2 = G__12202__2;
return G__12202;
})()
;
thi.ng.geom.core.tessellate = (function thi$ng$geom$core$tessellate(var_args){
var G__11693 = arguments.length;
switch (G__11693) {
case 1:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ITessellate$tessellate$arity$1 == null)))))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$1(_);
} else {
return thi$ng$geom$core$ITessellate$tessellate$dyn_12201(_);
}
}));

(thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ITessellate$tessellate$arity$2 == null)))))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$2(_,opts);
} else {
return thi$ng$geom$core$ITessellate$tessellate$dyn_12201(_,opts);
}
}));

(thi.ng.geom.core.tessellate.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.IVolume = function(){};

var thi$ng$geom$core$IVolume$volume$dyn_12210 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.volume[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.volume["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IVolume.volume",_);
}
}
});
/**
 * Returns an entity's inner volume.
 */
thi.ng.geom.core.volume = (function thi$ng$geom$core$volume(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVolume$volume$arity$1 == null)))))){
return _.thi$ng$geom$core$IVolume$volume$arity$1(_);
} else {
return thi$ng$geom$core$IVolume$volume$dyn_12210(_);
}
});

var thi$ng$geom$core$IVolume$signed_volume$dyn_12213 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.signed_volume[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.signed_volume["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IVolume.signed-volume",_);
}
}
});
thi.ng.geom.core.signed_volume = (function thi$ng$geom$core$signed_volume(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IVolume$signed_volume$arity$1 == null)))))){
return _.thi$ng$geom$core$IVolume$signed_volume$arity$1(_);
} else {
return thi$ng$geom$core$IVolume$signed_volume$dyn_12213(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISpatialTree = function(){};

var thi$ng$geom$core$ISpatialTree$add_point$dyn_12219 = (function (_,p,d){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.add_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__5391__auto__.call(null,_,p,d));
} else {
var m__5389__auto__ = (thi.ng.geom.core.add_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__5389__auto__.call(null,_,p,d));
} else {
throw cljs.core.missing_protocol("ISpatialTree.add-point",_);
}
}
});
thi.ng.geom.core.add_point = (function thi$ng$geom$core$add_point(_,p,d){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISpatialTree$add_point$arity$3 == null)))))){
return _.thi$ng$geom$core$ISpatialTree$add_point$arity$3(_,p,d);
} else {
return thi$ng$geom$core$ISpatialTree$add_point$dyn_12219(_,p,d);
}
});

var thi$ng$geom$core$ISpatialTree$delete_point$dyn_12225 = (function (_,p){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.delete_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5391__auto__.call(null,_,p));
} else {
var m__5389__auto__ = (thi.ng.geom.core.delete_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__5389__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("ISpatialTree.delete-point",_);
}
}
});
thi.ng.geom.core.delete_point = (function thi$ng$geom$core$delete_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISpatialTree$delete_point$arity$2 == null)))))){
return _.thi$ng$geom$core$ISpatialTree$delete_point$arity$2(_,p);
} else {
return thi$ng$geom$core$ISpatialTree$delete_point$dyn_12225(_,p);
}
});

var thi$ng$geom$core$ISpatialTree$get_point$dyn_12229 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.get_point[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.get_point["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISpatialTree.get-point",_);
}
}
});
thi.ng.geom.core.get_point = (function thi$ng$geom$core$get_point(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISpatialTree$get_point$arity$1 == null)))))){
return _.thi$ng$geom$core$ISpatialTree$get_point$arity$1(_);
} else {
return thi$ng$geom$core$ISpatialTree$get_point$dyn_12229(_);
}
});

var thi$ng$geom$core$ISpatialTree$get_point_data$dyn_12230 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.get_point_data[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.core.get_point_data["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ISpatialTree.get-point-data",_);
}
}
});
thi.ng.geom.core.get_point_data = (function thi$ng$geom$core$get_point_data(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1 == null)))))){
return _.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1(_);
} else {
return thi$ng$geom$core$ISpatialTree$get_point_data$dyn_12230(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMutableProps = function(){};

var thi$ng$geom$core$IMutableProps$get_prop$dyn_12233 = (function (_,k){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.get_prop[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,k) : m__5391__auto__.call(null,_,k));
} else {
var m__5389__auto__ = (thi.ng.geom.core.get_prop["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,k) : m__5389__auto__.call(null,_,k));
} else {
throw cljs.core.missing_protocol("IMutableProps.get-prop",_);
}
}
});
thi.ng.geom.core.get_prop = (function thi$ng$geom$core$get_prop(_,k){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMutableProps$get_prop$arity$2 == null)))))){
return _.thi$ng$geom$core$IMutableProps$get_prop$arity$2(_,k);
} else {
return thi$ng$geom$core$IMutableProps$get_prop$dyn_12233(_,k);
}
});

var thi$ng$geom$core$IMutableProps$set_prop_BANG_$dyn_12237 = (function (_,k,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.set_prop_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__5391__auto__.call(null,_,k,v));
} else {
var m__5389__auto__ = (thi.ng.geom.core.set_prop_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__5389__auto__.call(null,_,k,v));
} else {
throw cljs.core.missing_protocol("IMutableProps.set-prop!",_);
}
}
});
thi.ng.geom.core.set_prop_BANG_ = (function thi$ng$geom$core$set_prop_BANG_(_,k,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3(_,k,v);
} else {
return thi$ng$geom$core$IMutableProps$set_prop_BANG_$dyn_12237(_,k,v);
}
});

var thi$ng$geom$core$IMutableProps$update_prop_BANG_$dyn_12240 = (function (_,k,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.core.update_prop_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,k,f) : m__5391__auto__.call(null,_,k,f));
} else {
var m__5389__auto__ = (thi.ng.geom.core.update_prop_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,k,f) : m__5389__auto__.call(null,_,k,f));
} else {
throw cljs.core.missing_protocol("IMutableProps.update-prop!",_);
}
}
});
thi.ng.geom.core.update_prop_BANG_ = (function thi$ng$geom$core$update_prop_BANG_(_,k,f){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3(_,k,f);
} else {
return thi$ng$geom$core$IMutableProps$update_prop_BANG_$dyn_12240(_,k,f);
}
});


//# sourceMappingURL=thi.ng.geom.core.js.map
