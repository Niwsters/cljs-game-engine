goog.provide('thi.ng.geom.vector');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12401_13410 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12402_13411 = v.buf;
(self__.buf[(0)] = ((G__12401_13410[(0)]) - (G__12402_13411[(0)])));

(self__.buf[(1)] = ((G__12401_13410[(1)]) - (G__12402_13411[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12401_13410[(0)]) - v));

(self__.buf[(1)] = ((G__12401_13410[(1)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12401_13410[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12401_13410[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12410_13412 = typeof v1 === 'number';
var G__12411_13413 = typeof v2 === 'number';
if(((G__12410_13412)?G__12411_13413:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__12412_13414 = (((!(G__12410_13412)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12413_13415 = (((!(G__12411_13413)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12404_13416 = (cljs.core.truth_(G__12412_13414)?v1.buf:null);
var G__12405_13417 = (cljs.core.truth_(G__12413_13415)?v2.buf:null);
var G__12406_13418 = (cljs.core.truth_(G__12412_13414)?(G__12404_13416[(0)]):((G__12410_13412)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12407_13419 = (cljs.core.truth_(G__12412_13414)?(G__12404_13416[(1)]):((G__12410_13412)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12408_13420 = (cljs.core.truth_(G__12413_13415)?(G__12405_13417[(0)]):((G__12411_13413)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12409_13421 = (cljs.core.truth_(G__12413_13415)?(G__12405_13417[(1)]):((G__12411_13413)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__12406_13418) - G__12408_13420));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__12407_13419) - G__12409_13421));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12414_13422 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12415_13423 = v.buf;
(self__.buf[(0)] = ((G__12414_13422[(0)]) * (G__12415_13423[(0)])));

(self__.buf[(1)] = ((G__12414_13422[(1)]) * (G__12415_13423[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12414_13422[(0)]) * v));

(self__.buf[(1)] = ((G__12414_13422[(1)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12414_13422[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12414_13422[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12423_13425 = typeof v1 === 'number';
var G__12424_13426 = typeof v2 === 'number';
if(((G__12423_13425)?G__12424_13426:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__12425_13427 = (((!(G__12423_13425)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12426_13428 = (((!(G__12424_13426)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12417_13429 = (cljs.core.truth_(G__12425_13427)?v1.buf:null);
var G__12418_13430 = (cljs.core.truth_(G__12426_13428)?v2.buf:null);
var G__12419_13431 = (cljs.core.truth_(G__12425_13427)?(G__12417_13429[(0)]):((G__12423_13425)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12420_13432 = (cljs.core.truth_(G__12425_13427)?(G__12417_13429[(1)]):((G__12423_13425)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12421_13433 = (cljs.core.truth_(G__12426_13428)?(G__12418_13430[(0)]):((G__12424_13426)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12422_13434 = (cljs.core.truth_(G__12426_13428)?(G__12418_13430[(1)]):((G__12424_13426)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__12419_13431) * G__12421_13433));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__12420_13432) * G__12422_13434));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12436_13438 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12437_13439 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12438_13440 = (((!(G__12436_13438)))?typeof a === 'number':null);
var G__12439_13441 = (((!(G__12437_13439)))?typeof b === 'number':null);
var G__12427_13442 = self__.buf;
var G__12428_13443 = ((G__12436_13438)?a.buf:null);
var G__12429_13444 = ((G__12437_13439)?b.buf:null);
var G__12430_13445 = (G__12427_13442[(0)]);
var G__12431_13446 = (G__12427_13442[(1)]);
var G__12432_13447 = ((G__12436_13438)?(G__12428_13443[(0)]):(cljs.core.truth_(G__12438_13440)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12433_13448 = ((G__12436_13438)?(G__12428_13443[(1)]):(cljs.core.truth_(G__12438_13440)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12434_13449 = ((G__12437_13439)?(G__12429_13444[(0)]):(cljs.core.truth_(G__12439_13441)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12435_13450 = ((G__12437_13439)?(G__12429_13444[(1)]):(cljs.core.truth_(G__12439_13441)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__12430_13445 - G__12432_13447) * G__12434_13449));

(self__.buf[(1)] = ((G__12431_13446 - G__12433_13448) * G__12435_13450));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12449_13451 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12450_13452 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12451_13453 = (((!(G__12449_13451)))?typeof a === 'number':null);
var G__12452_13454 = (((!(G__12450_13452)))?typeof b === 'number':null);
var G__12440_13455 = self__.buf;
var G__12441_13456 = ((G__12449_13451)?a.buf:null);
var G__12442_13457 = ((G__12450_13452)?b.buf:null);
var G__12443_13458 = (G__12440_13455[(0)]);
var G__12444_13459 = (G__12440_13455[(1)]);
var G__12445_13460 = ((G__12449_13451)?(G__12441_13456[(0)]):(cljs.core.truth_(G__12451_13453)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12446_13461 = ((G__12449_13451)?(G__12441_13456[(1)]):(cljs.core.truth_(G__12451_13453)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12447_13462 = ((G__12450_13452)?(G__12442_13457[(0)]):(cljs.core.truth_(G__12452_13454)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12448_13463 = ((G__12450_13452)?(G__12442_13457[(1)]):(cljs.core.truth_(G__12452_13454)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__12443_13458 * G__12445_13460) - G__12447_13462));

(self__.buf[(1)] = ((G__12444_13459 * G__12446_13461) - G__12448_13463));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__12453 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12453) : thi.ng.math.core.abs_STAR_.call(null,G__12453));
})());

(self__.buf[(1)] = (function (){var G__12454 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12454) : thi.ng.math.core.abs_STAR_.call(null,G__12454));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12464_13465 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12465_13466 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12466_13467 = (((!(G__12464_13465)))?typeof a === 'number':null);
var G__12467_13468 = (((!(G__12465_13466)))?typeof b === 'number':null);
var G__12455_13469 = self__.buf;
var G__12456_13470 = ((G__12464_13465)?a.buf:null);
var G__12457_13471 = ((G__12465_13466)?b.buf:null);
var G__12458_13472 = (G__12455_13469[(0)]);
var G__12459_13473 = (G__12455_13469[(1)]);
var G__12460_13474 = ((G__12464_13465)?(G__12456_13470[(0)]):(cljs.core.truth_(G__12466_13467)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12461_13475 = ((G__12464_13465)?(G__12456_13470[(1)]):(cljs.core.truth_(G__12466_13467)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12462_13476 = ((G__12465_13466)?(G__12457_13471[(0)]):(cljs.core.truth_(G__12467_13468)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12463_13477 = ((G__12465_13466)?(G__12457_13471[(1)]):(cljs.core.truth_(G__12467_13468)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__12458_13472 * G__12460_13474) + G__12462_13476));

(self__.buf[(1)] = ((G__12459_13473 * G__12461_13475) + G__12463_13477));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12468_13483 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12469_13484 = v.buf;
(self__.buf[(0)] = ((G__12468_13483[(0)]) / (G__12469_13484[(0)])));

(self__.buf[(1)] = ((G__12468_13483[(1)]) / (G__12469_13484[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12468_13483[(0)]) / v));

(self__.buf[(1)] = ((G__12468_13483[(1)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12468_13483[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12468_13483[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12477_13485 = typeof v1 === 'number';
var G__12478_13486 = typeof v2 === 'number';
if(((G__12477_13485)?G__12478_13486:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__12479_13487 = (((!(G__12477_13485)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12480_13488 = (((!(G__12478_13486)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12471_13489 = (cljs.core.truth_(G__12479_13487)?v1.buf:null);
var G__12472_13490 = (cljs.core.truth_(G__12480_13488)?v2.buf:null);
var G__12473_13491 = (cljs.core.truth_(G__12479_13487)?(G__12471_13489[(0)]):((G__12477_13485)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12474_13492 = (cljs.core.truth_(G__12479_13487)?(G__12471_13489[(1)]):((G__12477_13485)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12475_13493 = (cljs.core.truth_(G__12480_13488)?(G__12472_13490[(0)]):((G__12478_13486)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12476_13494 = (cljs.core.truth_(G__12480_13488)?(G__12472_13490[(1)]):((G__12478_13486)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__12473_13491) / G__12475_13493));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__12474_13492) / G__12476_13494));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12481_13496 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12482_13497 = v.buf;
(self__.buf[(0)] = ((G__12481_13496[(0)]) + (G__12482_13497[(0)])));

(self__.buf[(1)] = ((G__12481_13496[(1)]) + (G__12482_13497[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12481_13496[(0)]) + v));

(self__.buf[(1)] = ((G__12481_13496[(1)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12481_13496[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12481_13496[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12490_13502 = typeof v1 === 'number';
var G__12491_13503 = typeof v2 === 'number';
if(((G__12490_13502)?G__12491_13503:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__12492_13504 = (((!(G__12490_13502)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12493_13505 = (((!(G__12491_13503)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12484_13506 = (cljs.core.truth_(G__12492_13504)?v1.buf:null);
var G__12485_13507 = (cljs.core.truth_(G__12493_13505)?v2.buf:null);
var G__12486_13508 = (cljs.core.truth_(G__12492_13504)?(G__12484_13506[(0)]):((G__12490_13502)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12487_13509 = (cljs.core.truth_(G__12492_13504)?(G__12484_13506[(1)]):((G__12490_13502)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12488_13510 = (cljs.core.truth_(G__12493_13505)?(G__12485_13507[(0)]):((G__12491_13503)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12489_13511 = (cljs.core.truth_(G__12493_13505)?(G__12485_13507[(1)]):((G__12491_13503)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__12486_13508) + G__12488_13510));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__12487_13509) + G__12489_13511));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12503_13512 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12504_13513 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12505_13514 = (((!(G__12503_13512)))?typeof a === 'number':null);
var G__12506_13515 = (((!(G__12504_13513)))?typeof b === 'number':null);
var G__12494_13516 = self__.buf;
var G__12495_13517 = ((G__12503_13512)?a.buf:null);
var G__12496_13518 = ((G__12504_13513)?b.buf:null);
var G__12497_13519 = (G__12494_13516[(0)]);
var G__12498_13520 = (G__12494_13516[(1)]);
var G__12499_13521 = ((G__12503_13512)?(G__12495_13517[(0)]):(cljs.core.truth_(G__12505_13514)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12500_13522 = ((G__12503_13512)?(G__12495_13517[(1)]):(cljs.core.truth_(G__12505_13514)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12501_13523 = ((G__12504_13513)?(G__12496_13518[(0)]):(cljs.core.truth_(G__12506_13515)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12502_13524 = ((G__12504_13513)?(G__12496_13518[(1)]):(cljs.core.truth_(G__12506_13515)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__12497_13519 + G__12499_13521) * G__12501_13523));

(self__.buf[(1)] = ((G__12498_13520 + G__12500_13522) * G__12502_13524));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)])),"]"].join('');
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12507 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12508 = v.buf;
return (((G__12507[(0)]) * (G__12508[(1)])) - ((G__12507[(1)]) * (G__12508[(0)])));
} else {
return (((G__12507[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__12507[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq(___$1));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12509 = self__.buf;
var G__12511 = (G__12509[(0)]);
var G__12512 = (G__12509[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12510 = v.buf;
var G__12513 = (G__12510[(0)]);
var G__12514 = (G__12510[(1)]);
var d = (((G__12511 * G__12513) + (G__12512 * G__12514)) * 2.0);
(b[(0)] = ((G__12513 * d) - G__12511));

(b[(1)] = ((G__12514 * d) - G__12512));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__12513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__12514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__12511 * G__12513) + (G__12512 * G__12514)) * 2.0);
(b[(0)] = ((G__12513 * d) - G__12511));

(b[(1)] = ((G__12514 * d) - G__12512));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(___$1.thi$ng$geom$core$IDistance$dist_squared$arity$2(null,v));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12515 = self__.buf;
var G__12517 = (G__12515[(0)]);
var G__12518 = (G__12515[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12516 = v.buf;
var G__12519 = (G__12516[(0)]);
var G__12520 = (G__12516[(1)]);
var dx = (G__12517 - G__12519);
var dy = (G__12518 - G__12520);
return ((dx * dx) + (dy * dy));
} else {
var G__12519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__12520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__12517 - G__12519);
var dy = (G__12518 - G__12520);
return ((dx * dx) + (dy * dy));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__12521 = self__.buf;
var G__12522 = (G__12521[(0)]);
var G__12523 = (G__12521[(1)]);
(b[(0)] = ((G__12522 * c) - (G__12523 * s)));

(b[(1)] = ((G__12522 * s) + (G__12523 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IMathOps$_$arity$1(null);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__12524 = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yx","yx",1696579752)) : thi.ng.geom.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)));
return (fexpr__12524.cljs$core$IFn$_invoke$arity$1 ? fexpr__12524.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__12524.call(null,___$1));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$math$core$INormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12525_13534 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12526_13536 = v.buf;
(dest__12263__auto__[(0)] = ((G__12525_13534[(0)]) * (G__12526_13536[(0)])));

(dest__12263__auto__[(1)] = ((G__12525_13534[(1)]) * (G__12526_13536[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12525_13534[(0)]) * v));

(dest__12263__auto__[(1)] = ((G__12525_13534[(1)]) * v));
} else {
(dest__12263__auto__[(0)] = ((G__12525_13534[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12525_13534[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = self__._hash;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__12527 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12528 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12527[(0)]),(G__12528[(0)]),eps))){
return thi.ng.math.core.delta_EQ_((G__12527[(1)]),(G__12528[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12527[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_((G__12527[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((((2) === cljs.core.count(o))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))))))));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2((thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__12529 = (buf_SINGLEQUOTE_[(0)]);
var G__12530 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__12529,G__12530) : f2.call(null,G__12529,G__12530));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__12531 = (buf_SINGLEQUOTE_[(1)]);
var G__12532 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__12531,G__12532) : f2.call(null,G__12531,G__12532));
})());

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12533 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12534 = v.buf;
return (((G__12533[(0)]) * (G__12534[(0)])) + ((G__12533[(1)]) * (G__12534[(1)])));
} else {
return (((G__12533[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__12533[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__12535 = (self__.buf[(0)]);
var G__12536 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12535,G__12536) : f.call(null,G__12535,G__12536));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
return acc;
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__12537 = start;
var G__12538 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12537,G__12538) : f.call(null,G__12537,G__12538));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__12539 = acc;
var G__12540 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12539,G__12540) : f.call(null,G__12539,G__12540));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12541_13542 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12542_13543 = v.buf;
(dest__12263__auto__[(0)] = ((G__12541_13542[(0)]) + (G__12542_13543[(0)])));

(dest__12263__auto__[(1)] = ((G__12541_13542[(1)]) + (G__12542_13543[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12541_13542[(0)]) + v));

(dest__12263__auto__[(1)] = ((G__12541_13542[(1)]) + v));
} else {
(dest__12263__auto__[(0)] = ((G__12541_13542[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12541_13542[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null);
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12543_13544 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12544_13545 = v.buf;
(b[(0)] = (((G__12543_13544[(0)]) + (G__12544_13545[(0)])) * 0.5));

(b[(1)] = (((G__12543_13544[(1)]) + (G__12544_13545[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__12543_13544[(0)]) + v) * 0.5));

(b[(1)] = (((G__12543_13544[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__12543_13544[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__12543_13544[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12554_13550 = (v instanceof thi.ng.geom.vector.Vec2);
var G__12555_13551 = (t instanceof thi.ng.geom.vector.Vec2);
var G__12556_13552 = (((!(G__12554_13550)))?typeof v === 'number':null);
var G__12557_13553 = (((!(G__12555_13551)))?typeof t === 'number':null);
var G__12545_13554 = self__.buf;
var G__12546_13555 = ((G__12554_13550)?v.buf:null);
var G__12547_13556 = ((G__12555_13551)?t.buf:null);
var G__12548_13557 = (G__12545_13554[(0)]);
var G__12549_13558 = (G__12545_13554[(1)]);
var G__12550_13559 = ((G__12554_13550)?(G__12546_13555[(0)]):(cljs.core.truth_(G__12556_13552)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__12551_13560 = ((G__12554_13550)?(G__12546_13555[(1)]):(cljs.core.truth_(G__12556_13552)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__12552_13561 = ((G__12555_13551)?(G__12547_13556[(0)]):(cljs.core.truth_(G__12557_13553)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__12553_13562 = ((G__12555_13551)?(G__12547_13556[(1)]):(cljs.core.truth_(G__12557_13553)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (((G__12550_13559 - G__12548_13557) * G__12552_13561) + G__12548_13557));

(b[(1)] = (((G__12551_13560 - G__12549_13558) * G__12553_13562) + G__12549_13558));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__12567_13563 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12568_13564 = (c instanceof thi.ng.geom.vector.Vec2);
var G__12569_13565 = (((!(G__12567_13563)))?typeof b === 'number':null);
var G__12570_13566 = (((!(G__12568_13564)))?typeof c === 'number':null);
var G__12558_13567 = self__.buf;
var G__12559_13568 = ((G__12567_13563)?b.buf:null);
var G__12560_13569 = ((G__12568_13564)?c.buf:null);
var G__12561_13570 = (G__12558_13567[(0)]);
var G__12562_13571 = (G__12558_13567[(1)]);
var G__12563_13572 = ((G__12567_13563)?(G__12559_13568[(0)]):(cljs.core.truth_(G__12569_13565)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12564_13573 = ((G__12567_13563)?(G__12559_13568[(1)]):(cljs.core.truth_(G__12569_13565)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__12565_13574 = ((G__12568_13564)?(G__12560_13569[(0)]):(cljs.core.truth_(G__12570_13566)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__12566_13575 = ((G__12568_13564)?(G__12560_13569[(1)]):(cljs.core.truth_(G__12570_13566)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_13576 = (((G__12563_13572 - G__12561_13570) * u) + G__12561_13570);
var y1_13577 = (((G__12564_13573 - G__12562_13571) * u) + G__12562_13571);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__12565_13574) * u) + G__12565_13574) - x1_13576) * v) + x1_13576));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__12566_13575) * u) + G__12566_13575) - y1_13577) * v) + y1_13577));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12580_13579 = (v instanceof thi.ng.geom.vector.Vec2);
var G__12581_13580 = (t instanceof thi.ng.geom.vector.Vec2);
var G__12582_13581 = (((!(G__12580_13579)))?typeof v === 'number':null);
var G__12583_13582 = (((!(G__12581_13580)))?typeof t === 'number':null);
var G__12571_13583 = self__.buf;
var G__12572_13584 = ((G__12580_13579)?v.buf:null);
var G__12573_13585 = ((G__12581_13580)?t.buf:null);
var G__12574_13586 = (G__12571_13583[(0)]);
var G__12575_13587 = (G__12571_13583[(1)]);
var G__12576_13588 = ((G__12580_13579)?(G__12572_13584[(0)]):(cljs.core.truth_(G__12582_13581)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__12577_13589 = ((G__12580_13579)?(G__12572_13584[(1)]):(cljs.core.truth_(G__12582_13581)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__12578_13590 = ((G__12581_13580)?(G__12573_13585[(0)]):(cljs.core.truth_(G__12583_13582)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__12579_13591 = ((G__12581_13580)?(G__12573_13585[(1)]):(cljs.core.truth_(G__12583_13582)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12574_13586,G__12576_13588,G__12578_13590) : f.call(null,G__12574_13586,G__12576_13588,G__12578_13590)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12575_13587,G__12577_13589,G__12579_13591) : f.call(null,G__12575_13587,G__12577_13589,G__12579_13591)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12584_13597 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__12585_13598 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__12585_13598[(0)]),(G__12584_13597[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__12585_13598[(1)]),(G__12584_13597[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__12584_13597[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__12584_13597[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__12584_13597[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__12584_13597[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__12595_13600 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__12596_13601 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__12597_13602 = (((!(G__12595_13600)))?typeof e1 === 'number':null);
var G__12598_13603 = (((!(G__12596_13601)))?typeof e2 === 'number':null);
var G__12586_13604 = self__.buf;
var G__12587_13605 = ((G__12595_13600)?e1.buf:null);
var G__12588_13606 = ((G__12596_13601)?e2.buf:null);
var G__12589_13607 = (G__12586_13604[(0)]);
var G__12590_13608 = (G__12586_13604[(1)]);
var G__12591_13609 = ((G__12595_13600)?(G__12587_13605[(0)]):(cljs.core.truth_(G__12597_13602)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__12592_13610 = ((G__12595_13600)?(G__12587_13605[(1)]):(cljs.core.truth_(G__12597_13602)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__12593_13611 = ((G__12596_13601)?(G__12588_13606[(0)]):(cljs.core.truth_(G__12598_13603)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__12594_13612 = ((G__12596_13601)?(G__12588_13606[(1)]):(cljs.core.truth_(G__12598_13603)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__12591_13609,G__12593_13611,G__12589_13607));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__12591_13609,G__12594_13612,G__12590_13608));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k < (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k === (0))) || ((k === (1))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2((function (){var G__12599 = self__.buf;
var G__12600 = (new Float32Array(self__.buf));
var G__12601 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__12602 = k;
var G__12603 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__12599,G__12600,G__12601,G__12602,G__12603) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__12599,G__12600,G__12601,G__12602,G__12603));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12604_13617 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12605_13618 = v.buf;
(dest__12263__auto__[(0)] = (function (){var a__11475__auto__ = (G__12604_13617[(0)]);
var b__11476__auto__ = (G__12605_13618[(0)]);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11475__auto__ = (G__12604_13617[(1)]);
var b__11476__auto__ = (G__12605_13618[(1)]);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = (function (){var a__11475__auto__ = (G__12604_13617[(0)]);
var b__11476__auto__ = v;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11475__auto__ = (G__12604_13617[(1)]);
var b__11476__auto__ = v;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
} else {
(dest__12263__auto__[(0)] = (function (){var a__11475__auto__ = (G__12604_13617[(0)]);
var b__11476__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11475__auto__ = (G__12604_13617[(1)]);
var b__11476__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12615_13619 = (v instanceof thi.ng.geom.vector.Vec2);
var G__12616_13620 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__12617_13621 = (((!(G__12615_13619)))?typeof v === 'number':null);
var G__12618_13622 = (((!(G__12616_13620)))?typeof v2 === 'number':null);
var G__12606_13623 = self__.buf;
var G__12607_13624 = ((G__12615_13619)?v.buf:null);
var G__12608_13625 = ((G__12616_13620)?v2.buf:null);
var G__12609_13626 = (G__12606_13623[(0)]);
var G__12610_13627 = (G__12606_13623[(1)]);
var G__12611_13628 = ((G__12615_13619)?(G__12607_13624[(0)]):(cljs.core.truth_(G__12617_13621)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__12612_13629 = ((G__12615_13619)?(G__12607_13624[(1)]):(cljs.core.truth_(G__12617_13621)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__12613_13630 = ((G__12616_13620)?(G__12608_13625[(0)]):(cljs.core.truth_(G__12618_13622)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12614_13631 = ((G__12616_13620)?(G__12608_13625[(1)]):(cljs.core.truth_(G__12618_13622)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__12274__auto__[(0)] = (function (){var a__11475__auto__ = (function (){var a__11475__auto__ = G__12609_13626;
var b__11476__auto__ = G__12611_13628;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})();
var b__11476__auto__ = G__12613_13630;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12274__auto__[(1)] = (function (){var a__11475__auto__ = (function (){var a__11475__auto__ = G__12610_13627;
var b__11476__auto__ = G__12612_13629;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})();
var b__11476__auto__ = G__12614_13631;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12619_13632 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12620_13633 = v.buf;
(dest__12263__auto__[(0)] = (function (){var a__11482__auto__ = (G__12619_13632[(0)]);
var b__11483__auto__ = (G__12620_13633[(0)]);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11482__auto__ = (G__12619_13632[(1)]);
var b__11483__auto__ = (G__12620_13633[(1)]);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = (function (){var a__11482__auto__ = (G__12619_13632[(0)]);
var b__11483__auto__ = v;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11482__auto__ = (G__12619_13632[(1)]);
var b__11483__auto__ = v;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
} else {
(dest__12263__auto__[(0)] = (function (){var a__11482__auto__ = (G__12619_13632[(0)]);
var b__11483__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12263__auto__[(1)] = (function (){var a__11482__auto__ = (G__12619_13632[(1)]);
var b__11483__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12630_13635 = (v instanceof thi.ng.geom.vector.Vec2);
var G__12631_13636 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__12632_13637 = (((!(G__12630_13635)))?typeof v === 'number':null);
var G__12633_13638 = (((!(G__12631_13636)))?typeof v2 === 'number':null);
var G__12621_13639 = self__.buf;
var G__12622_13640 = ((G__12630_13635)?v.buf:null);
var G__12623_13641 = ((G__12631_13636)?v2.buf:null);
var G__12624_13642 = (G__12621_13639[(0)]);
var G__12625_13643 = (G__12621_13639[(1)]);
var G__12626_13644 = ((G__12630_13635)?(G__12622_13640[(0)]):(cljs.core.truth_(G__12632_13637)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__12627_13645 = ((G__12630_13635)?(G__12622_13640[(1)]):(cljs.core.truth_(G__12632_13637)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__12628_13646 = ((G__12631_13636)?(G__12623_13641[(0)]):(cljs.core.truth_(G__12633_13638)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12629_13647 = ((G__12631_13636)?(G__12623_13641[(1)]):(cljs.core.truth_(G__12633_13638)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__12274__auto__[(0)] = (function (){var a__11482__auto__ = (function (){var a__11482__auto__ = G__12624_13642;
var b__11483__auto__ = G__12626_13644;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})();
var b__11483__auto__ = G__12628_13646;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12274__auto__[(1)] = (function (){var a__11482__auto__ = (function (){var a__11482__auto__ = G__12625_13643;
var b__11483__auto__ = G__12627_13645;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})();
var b__11483__auto__ = G__12629_13647;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__12634 = (self__.buf[(0)]);
var G__12635 = (self__.buf[(1)]);
var G__12636 = x;
return (thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__12634,G__12635,G__12636) : thi.ng.geom.vector.vec3.call(null,G__12634,G__12635,G__12636));
})(),self__._meta);
}));

(thi.ng.geom.vector.Vec2.prototype.call = (function (unused__10311__auto__){
var self__ = this;
var self__ = this;
var G__12637 = (arguments.length - (1));
switch (G__12637) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args12400){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12400)));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = ___$1.thi$ng$math$core$IMagnitude$mag$arity$1(null));

(b[(1)] = ___$1.thi$ng$geom$core$IHeading$heading$arity$1(null));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__12638 = self__.buf;
var G__12639 = (G__12638[(0)]);
var G__12640 = (G__12638[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__12639 * Math.cos(G__12640)));

(b[(1)] = (G__12639 * Math.sin(G__12640)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__12641 = self__.buf;
var G__12642 = (G__12641[(0)]);
var G__12643 = (G__12641[(1)]);
var l = Math.sqrt(((G__12642 * G__12642) + (G__12643 * G__12643)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__12642 / l));

(b[(1)] = (G__12643 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__12644 = self__.buf;
var G__12645 = (G__12644[(0)]);
var G__12646 = (G__12644[(1)]);
var l = Math.sqrt(((G__12645 * G__12645) + (G__12646 * G__12646)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__12645 * l__$1));

(b[(1)] = (G__12646 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__12647 = self__.buf;
var G__12648 = (G__12647[(0)]);
var G__12649 = (G__12647[(1)]);
return Math.sqrt(((G__12648 * G__12648) + (G__12649 * G__12649)));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__12650 = self__.buf;
var G__12651 = (G__12650[(0)]);
var G__12652 = (G__12650[(1)]);
return ((G__12651 * G__12651) + (G__12652 * G__12652));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12662_13659 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12663_13660 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12664_13661 = (((!(G__12662_13659)))?typeof a === 'number':null);
var G__12665_13662 = (((!(G__12663_13660)))?typeof b === 'number':null);
var G__12653_13663 = self__.buf;
var G__12654_13664 = ((G__12662_13659)?a.buf:null);
var G__12655_13665 = ((G__12663_13660)?b.buf:null);
var G__12656_13666 = (G__12653_13663[(0)]);
var G__12657_13667 = (G__12653_13663[(1)]);
var G__12658_13668 = ((G__12662_13659)?(G__12654_13664[(0)]):(cljs.core.truth_(G__12664_13661)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12659_13669 = ((G__12662_13659)?(G__12654_13664[(1)]):(cljs.core.truth_(G__12664_13661)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12660_13670 = ((G__12663_13660)?(G__12655_13665[(0)]):(cljs.core.truth_(G__12665_13662)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12661_13671 = ((G__12663_13660)?(G__12655_13665[(1)]):(cljs.core.truth_(G__12665_13662)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__12274__auto__[(0)] = ((G__12656_13666 * G__12658_13668) - G__12660_13670));

(dest__12274__auto__[(1)] = ((G__12657_13667 * G__12659_13669) - G__12661_13671));

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12666_13676 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12667_13677 = v.buf;
(dest__12263__auto__[(0)] = ((G__12666_13676[(0)]) * (G__12667_13677[(0)])));

(dest__12263__auto__[(1)] = ((G__12666_13676[(1)]) * (G__12667_13677[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12666_13676[(0)]) * v));

(dest__12263__auto__[(1)] = ((G__12666_13676[(1)]) * v));
} else {
(dest__12263__auto__[(0)] = ((G__12666_13676[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12666_13676[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12668 = self__.buf;
var G__12671 = (new Float32Array((2)));
var G__12672 = (G__12668[(0)]);
var G__12673 = (G__12668[(1)]);
var G__12678 = typeof v1 === 'number';
var G__12679 = typeof v2 === 'number';
if(((G__12678)?G__12679:false)){
(G__12671[(0)] = (G__12672 * v1));

(G__12671[(1)] = (G__12673 * v2));
} else {
var G__12680_13678 = (((!(G__12678)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12681_13679 = (((!(G__12679)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12669_13680 = (cljs.core.truth_(G__12680_13678)?v1.buf:null);
var G__12670_13681 = (cljs.core.truth_(G__12681_13679)?v2.buf:null);
var G__12674_13682 = (cljs.core.truth_(G__12680_13678)?(G__12669_13680[(0)]):((G__12678)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__12675_13683 = (cljs.core.truth_(G__12680_13678)?(G__12669_13680[(1)]):((G__12678)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__12676_13684 = (cljs.core.truth_(G__12681_13679)?(G__12670_13681[(0)]):((G__12679)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__12677_13685 = (cljs.core.truth_(G__12681_13679)?(G__12670_13681[(1)]):((G__12679)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__12671[(0)] = ((G__12672 * G__12674_13682) * G__12676_13684));

(G__12671[(1)] = ((G__12673 * G__12675_13683) * G__12677_13685));
}

return (new thi.ng.geom.vector.Vec2(G__12671,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12209__auto__ = (new Float32Array((2)));
var G__12682_13686 = self__.buf;
(dest__12209__auto__[(0)] = (- (G__12682_13686[(0)])));

(dest__12209__auto__[(1)] = (- (G__12682_13686[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__12209__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12683_13687 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12684_13688 = v.buf;
(dest__12263__auto__[(0)] = ((G__12683_13687[(0)]) - (G__12684_13688[(0)])));

(dest__12263__auto__[(1)] = ((G__12683_13687[(1)]) - (G__12684_13688[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12683_13687[(0)]) - v));

(dest__12263__auto__[(1)] = ((G__12683_13687[(1)]) - v));
} else {
(dest__12263__auto__[(0)] = ((G__12683_13687[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12683_13687[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12685 = self__.buf;
var G__12688 = (new Float32Array((2)));
var G__12689 = (G__12685[(0)]);
var G__12690 = (G__12685[(1)]);
var G__12695 = typeof v1 === 'number';
var G__12696 = typeof v2 === 'number';
if(((G__12695)?G__12696:false)){
(G__12688[(0)] = (G__12689 - v1));

(G__12688[(1)] = (G__12690 - v2));
} else {
var G__12697_13689 = (((!(G__12695)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12698_13690 = (((!(G__12696)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12686_13691 = (cljs.core.truth_(G__12697_13689)?v1.buf:null);
var G__12687_13692 = (cljs.core.truth_(G__12698_13690)?v2.buf:null);
var G__12691_13693 = (cljs.core.truth_(G__12697_13689)?(G__12686_13691[(0)]):((G__12695)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12692_13694 = (cljs.core.truth_(G__12697_13689)?(G__12686_13691[(1)]):((G__12695)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12693_13695 = (cljs.core.truth_(G__12698_13690)?(G__12687_13692[(0)]):((G__12696)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12694_13696 = (cljs.core.truth_(G__12698_13690)?(G__12687_13692[(1)]):((G__12696)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__12688[(0)] = ((G__12689 - G__12691_13693) - G__12693_13695));

(G__12688[(1)] = ((G__12690 - G__12692_13694) - G__12694_13696));
}

return (new thi.ng.geom.vector.Vec2(G__12688,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12708_13698 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12709_13699 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12710_13700 = (((!(G__12708_13698)))?typeof a === 'number':null);
var G__12711_13701 = (((!(G__12709_13699)))?typeof b === 'number':null);
var G__12699_13702 = self__.buf;
var G__12700_13703 = ((G__12708_13698)?a.buf:null);
var G__12701_13704 = ((G__12709_13699)?b.buf:null);
var G__12702_13705 = (G__12699_13702[(0)]);
var G__12703_13706 = (G__12699_13702[(1)]);
var G__12704_13707 = ((G__12708_13698)?(G__12700_13703[(0)]):(cljs.core.truth_(G__12710_13700)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12705_13708 = ((G__12708_13698)?(G__12700_13703[(1)]):(cljs.core.truth_(G__12710_13700)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12706_13709 = ((G__12709_13699)?(G__12701_13704[(0)]):(cljs.core.truth_(G__12711_13701)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12707_13710 = ((G__12709_13699)?(G__12701_13704[(1)]):(cljs.core.truth_(G__12711_13701)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__12274__auto__[(0)] = ((G__12702_13705 * G__12704_13707) + G__12706_13709));

(dest__12274__auto__[(1)] = ((G__12703_13706 * G__12705_13708) + G__12707_13710));

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12721_13714 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12722_13715 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12723_13716 = (((!(G__12721_13714)))?typeof a === 'number':null);
var G__12724_13717 = (((!(G__12722_13715)))?typeof b === 'number':null);
var G__12712_13718 = self__.buf;
var G__12713_13719 = ((G__12721_13714)?a.buf:null);
var G__12714_13720 = ((G__12722_13715)?b.buf:null);
var G__12715_13721 = (G__12712_13718[(0)]);
var G__12716_13722 = (G__12712_13718[(1)]);
var G__12717_13723 = ((G__12721_13714)?(G__12713_13719[(0)]):(cljs.core.truth_(G__12723_13716)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12718_13724 = ((G__12721_13714)?(G__12713_13719[(1)]):(cljs.core.truth_(G__12723_13716)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12719_13725 = ((G__12722_13715)?(G__12714_13720[(0)]):(cljs.core.truth_(G__12724_13717)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12720_13726 = ((G__12722_13715)?(G__12714_13720[(1)]):(cljs.core.truth_(G__12724_13717)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__12274__auto__[(0)] = ((G__12715_13721 + G__12717_13723) * G__12719_13725));

(dest__12274__auto__[(1)] = ((G__12716_13722 + G__12718_13724) * G__12720_13726));

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12209__auto__ = (new Float32Array((2)));
var G__12725_13727 = self__.buf;
(dest__12209__auto__[(0)] = ((1) / (G__12725_13727[(0)])));

(dest__12209__auto__[(1)] = ((1) / (G__12725_13727[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__12209__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12726_13728 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12727_13729 = v.buf;
(dest__12263__auto__[(0)] = ((G__12726_13728[(0)]) / (G__12727_13729[(0)])));

(dest__12263__auto__[(1)] = ((G__12726_13728[(1)]) / (G__12727_13729[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12726_13728[(0)]) / v));

(dest__12263__auto__[(1)] = ((G__12726_13728[(1)]) / v));
} else {
(dest__12263__auto__[(0)] = ((G__12726_13728[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12726_13728[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12728 = self__.buf;
var G__12731 = (new Float32Array((2)));
var G__12732 = (G__12728[(0)]);
var G__12733 = (G__12728[(1)]);
var G__12738 = typeof v1 === 'number';
var G__12739 = typeof v2 === 'number';
if(((G__12738)?G__12739:false)){
(G__12731[(0)] = (G__12732 / v1));

(G__12731[(1)] = (G__12733 / v2));
} else {
var G__12740_13731 = (((!(G__12738)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12741_13732 = (((!(G__12739)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12729_13733 = (cljs.core.truth_(G__12740_13731)?v1.buf:null);
var G__12730_13734 = (cljs.core.truth_(G__12741_13732)?v2.buf:null);
var G__12734_13735 = (cljs.core.truth_(G__12740_13731)?(G__12729_13733[(0)]):((G__12738)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12735_13736 = (cljs.core.truth_(G__12740_13731)?(G__12729_13733[(1)]):((G__12738)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12736_13737 = (cljs.core.truth_(G__12741_13732)?(G__12730_13734[(0)]):((G__12739)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12737_13738 = (cljs.core.truth_(G__12741_13732)?(G__12730_13734[(1)]):((G__12739)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__12731[(0)] = ((G__12732 / G__12734_13735) / G__12736_13737));

(G__12731[(1)] = ((G__12733 / G__12735_13736) / G__12737_13738));
}

return (new thi.ng.geom.vector.Vec2(G__12731,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12263__auto__ = (new Float32Array((2)));
var G__12742_13744 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__12743_13745 = v.buf;
(dest__12263__auto__[(0)] = ((G__12742_13744[(0)]) + (G__12743_13745[(0)])));

(dest__12263__auto__[(1)] = ((G__12742_13744[(1)]) + (G__12743_13745[(1)])));
} else {
if(typeof v === 'number'){
(dest__12263__auto__[(0)] = ((G__12742_13744[(0)]) + v));

(dest__12263__auto__[(1)] = ((G__12742_13744[(1)]) + v));
} else {
(dest__12263__auto__[(0)] = ((G__12742_13744[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12263__auto__[(1)] = ((G__12742_13744[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__12263__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12744 = self__.buf;
var G__12747 = (new Float32Array((2)));
var G__12748 = (G__12744[(0)]);
var G__12749 = (G__12744[(1)]);
var G__12754 = typeof v1 === 'number';
var G__12755 = typeof v2 === 'number';
if(((G__12754)?G__12755:false)){
(G__12747[(0)] = (G__12748 + v1));

(G__12747[(1)] = (G__12749 + v2));
} else {
var G__12756_13747 = (((!(G__12754)))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__12757_13748 = (((!(G__12755)))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__12745_13749 = (cljs.core.truth_(G__12756_13747)?v1.buf:null);
var G__12746_13750 = (cljs.core.truth_(G__12757_13748)?v2.buf:null);
var G__12750_13751 = (cljs.core.truth_(G__12756_13747)?(G__12745_13749[(0)]):((G__12754)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12751_13752 = (cljs.core.truth_(G__12756_13747)?(G__12745_13749[(1)]):((G__12754)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12752_13753 = (cljs.core.truth_(G__12757_13748)?(G__12746_13750[(0)]):((G__12755)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12753_13754 = (cljs.core.truth_(G__12757_13748)?(G__12746_13750[(1)]):((G__12755)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__12747[(0)] = ((G__12748 + G__12750_13751) + G__12752_13753));

(G__12747[(1)] = ((G__12749 + G__12751_13752) + G__12753_13754));
}

return (new thi.ng.geom.vector.Vec2(G__12747,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12209__auto__ = (new Float32Array((2)));
var G__12758_13759 = self__.buf;
(dest__12209__auto__[(0)] = (function (){var G__12759 = (G__12758_13759[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12759) : thi.ng.math.core.abs_STAR_.call(null,G__12759));
})());

(dest__12209__auto__[(1)] = (function (){var G__12760 = (G__12758_13759[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12760) : thi.ng.math.core.abs_STAR_.call(null,G__12760));
})());

return (new thi.ng.geom.vector.Vec2(dest__12209__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12274__auto__ = (new Float32Array((2)));
var G__12770_13760 = (a instanceof thi.ng.geom.vector.Vec2);
var G__12771_13761 = (b instanceof thi.ng.geom.vector.Vec2);
var G__12772_13762 = (((!(G__12770_13760)))?typeof a === 'number':null);
var G__12773_13763 = (((!(G__12771_13761)))?typeof b === 'number':null);
var G__12761_13764 = self__.buf;
var G__12762_13765 = ((G__12770_13760)?a.buf:null);
var G__12763_13766 = ((G__12771_13761)?b.buf:null);
var G__12764_13767 = (G__12761_13764[(0)]);
var G__12765_13768 = (G__12761_13764[(1)]);
var G__12766_13769 = ((G__12770_13760)?(G__12762_13765[(0)]):(cljs.core.truth_(G__12772_13762)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12767_13770 = ((G__12770_13760)?(G__12762_13765[(1)]):(cljs.core.truth_(G__12772_13762)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12768_13771 = ((G__12771_13761)?(G__12763_13766[(0)]):(cljs.core.truth_(G__12773_13763)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12769_13772 = ((G__12771_13761)?(G__12763_13766[(1)]):(cljs.core.truth_(G__12773_13763)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__12274__auto__[(0)] = ((G__12764_13767 - G__12766_13769) * G__12768_13771));

(dest__12274__auto__[(1)] = ((G__12765_13768 - G__12767_13770) * G__12769_13772));

return (new thi.ng.geom.vector.Vec2(dest__12274__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.vector.Vec2.cljs$lang$type = true);

(thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2");

(thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"thi.ng.geom.vector/Vec2");
}));

/**
 * Positional factory function for thi.ng.geom.vector/Vec2.
 */
thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12775_13773 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12776_13774 = v.buf;
(self__.buf[(0)] = ((G__12775_13773[(0)]) - (G__12776_13774[(0)])));

(self__.buf[(1)] = ((G__12775_13773[(1)]) - (G__12776_13774[(1)])));

(self__.buf[(2)] = ((G__12775_13773[(2)]) - (G__12776_13774[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12775_13773[(0)]) - v));

(self__.buf[(1)] = ((G__12775_13773[(1)]) - v));

(self__.buf[(2)] = ((G__12775_13773[(2)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12775_13773[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12775_13773[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__12775_13773[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12789_13775 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__12790_13776 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__12791_13777 = (((!(G__12789_13775)))?typeof v1 === 'number':null);
var G__12792_13778 = (((!(G__12790_13776)))?typeof v2 === 'number':null);
var G__12777_13779 = self__.buf;
var G__12778_13780 = ((G__12789_13775)?v1.buf:null);
var G__12779_13781 = ((G__12790_13776)?v2.buf:null);
var G__12780_13782 = (G__12777_13779[(0)]);
var G__12781_13783 = (G__12777_13779[(1)]);
var G__12782_13784 = (G__12777_13779[(2)]);
var G__12783_13785 = ((G__12789_13775)?(G__12778_13780[(0)]):(cljs.core.truth_(G__12791_13777)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12784_13786 = ((G__12789_13775)?(G__12778_13780[(1)]):(cljs.core.truth_(G__12791_13777)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12785_13787 = ((G__12789_13775)?(G__12778_13780[(2)]):(cljs.core.truth_(G__12791_13777)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__12786_13788 = ((G__12790_13776)?(G__12779_13781[(0)]):(cljs.core.truth_(G__12792_13778)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12787_13789 = ((G__12790_13776)?(G__12779_13781[(1)]):(cljs.core.truth_(G__12792_13778)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__12788_13790 = ((G__12790_13776)?(G__12779_13781[(2)]):(cljs.core.truth_(G__12792_13778)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__12780_13782 - G__12783_13785) - G__12786_13788));

(self__.buf[(1)] = ((G__12781_13783 - G__12784_13786) - G__12787_13789));

(self__.buf[(2)] = ((G__12782_13784 - G__12785_13787) - G__12788_13790));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12793_13795 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12794_13796 = v.buf;
(self__.buf[(0)] = ((G__12793_13795[(0)]) * (G__12794_13796[(0)])));

(self__.buf[(1)] = ((G__12793_13795[(1)]) * (G__12794_13796[(1)])));

(self__.buf[(2)] = ((G__12793_13795[(2)]) * (G__12794_13796[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12793_13795[(0)]) * v));

(self__.buf[(1)] = ((G__12793_13795[(1)]) * v));

(self__.buf[(2)] = ((G__12793_13795[(2)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12793_13795[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12793_13795[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__12793_13795[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12807_13797 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__12808_13798 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__12809_13799 = (((!(G__12807_13797)))?typeof v1 === 'number':null);
var G__12810_13800 = (((!(G__12808_13798)))?typeof v2 === 'number':null);
var G__12795_13801 = self__.buf;
var G__12796_13802 = ((G__12807_13797)?v1.buf:null);
var G__12797_13803 = ((G__12808_13798)?v2.buf:null);
var G__12798_13804 = (G__12795_13801[(0)]);
var G__12799_13805 = (G__12795_13801[(1)]);
var G__12800_13806 = (G__12795_13801[(2)]);
var G__12801_13807 = ((G__12807_13797)?(G__12796_13802[(0)]):(cljs.core.truth_(G__12809_13799)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12802_13808 = ((G__12807_13797)?(G__12796_13802[(1)]):(cljs.core.truth_(G__12809_13799)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12803_13809 = ((G__12807_13797)?(G__12796_13802[(2)]):(cljs.core.truth_(G__12809_13799)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__12804_13810 = ((G__12808_13798)?(G__12797_13803[(0)]):(cljs.core.truth_(G__12810_13800)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12805_13811 = ((G__12808_13798)?(G__12797_13803[(1)]):(cljs.core.truth_(G__12810_13800)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__12806_13812 = ((G__12808_13798)?(G__12797_13803[(2)]):(cljs.core.truth_(G__12810_13800)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__12798_13804 * G__12801_13807) * G__12804_13810));

(self__.buf[(1)] = ((G__12799_13805 * G__12802_13808) * G__12805_13811));

(self__.buf[(2)] = ((G__12800_13806 * G__12803_13809) * G__12806_13812));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12823_13813 = (a instanceof thi.ng.geom.vector.Vec3);
var G__12824_13814 = (b instanceof thi.ng.geom.vector.Vec3);
var G__12825_13815 = (((!(G__12823_13813)))?typeof a === 'number':null);
var G__12826_13816 = (((!(G__12824_13814)))?typeof b === 'number':null);
var G__12811_13817 = self__.buf;
var G__12812_13818 = ((G__12823_13813)?a.buf:null);
var G__12813_13819 = ((G__12824_13814)?b.buf:null);
var G__12814_13820 = (G__12811_13817[(0)]);
var G__12815_13821 = (G__12811_13817[(1)]);
var G__12816_13822 = (G__12811_13817[(2)]);
var G__12817_13823 = ((G__12823_13813)?(G__12812_13818[(0)]):(cljs.core.truth_(G__12825_13815)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12818_13824 = ((G__12823_13813)?(G__12812_13818[(1)]):(cljs.core.truth_(G__12825_13815)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12819_13825 = ((G__12823_13813)?(G__12812_13818[(2)]):(cljs.core.truth_(G__12825_13815)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__12820_13826 = ((G__12824_13814)?(G__12813_13819[(0)]):(cljs.core.truth_(G__12826_13816)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12821_13827 = ((G__12824_13814)?(G__12813_13819[(1)]):(cljs.core.truth_(G__12826_13816)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__12822_13828 = ((G__12824_13814)?(G__12813_13819[(2)]):(cljs.core.truth_(G__12826_13816)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__12814_13820 - G__12817_13823) * G__12820_13826));

(self__.buf[(1)] = ((G__12815_13821 - G__12818_13824) * G__12821_13827));

(self__.buf[(2)] = ((G__12816_13822 - G__12819_13825) * G__12822_13828));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12839_13835 = (a instanceof thi.ng.geom.vector.Vec3);
var G__12840_13836 = (b instanceof thi.ng.geom.vector.Vec3);
var G__12841_13837 = (((!(G__12839_13835)))?typeof a === 'number':null);
var G__12842_13838 = (((!(G__12840_13836)))?typeof b === 'number':null);
var G__12827_13839 = self__.buf;
var G__12828_13840 = ((G__12839_13835)?a.buf:null);
var G__12829_13841 = ((G__12840_13836)?b.buf:null);
var G__12830_13842 = (G__12827_13839[(0)]);
var G__12831_13843 = (G__12827_13839[(1)]);
var G__12832_13844 = (G__12827_13839[(2)]);
var G__12833_13845 = ((G__12839_13835)?(G__12828_13840[(0)]):(cljs.core.truth_(G__12841_13837)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12834_13846 = ((G__12839_13835)?(G__12828_13840[(1)]):(cljs.core.truth_(G__12841_13837)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12835_13847 = ((G__12839_13835)?(G__12828_13840[(2)]):(cljs.core.truth_(G__12841_13837)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__12836_13848 = ((G__12840_13836)?(G__12829_13841[(0)]):(cljs.core.truth_(G__12842_13838)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12837_13849 = ((G__12840_13836)?(G__12829_13841[(1)]):(cljs.core.truth_(G__12842_13838)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__12838_13850 = ((G__12840_13836)?(G__12829_13841[(2)]):(cljs.core.truth_(G__12842_13838)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__12830_13842 * G__12833_13845) - G__12836_13848));

(self__.buf[(1)] = ((G__12831_13843 * G__12834_13846) - G__12837_13849));

(self__.buf[(2)] = ((G__12832_13844 * G__12835_13847) - G__12838_13850));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__12843 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12843) : thi.ng.math.core.abs_STAR_.call(null,G__12843));
})());

(self__.buf[(1)] = (function (){var G__12844 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12844) : thi.ng.math.core.abs_STAR_.call(null,G__12844));
})());

(self__.buf[(2)] = (function (){var G__12845 = (self__.buf[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__12845) : thi.ng.math.core.abs_STAR_.call(null,G__12845));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12858_13852 = (a instanceof thi.ng.geom.vector.Vec3);
var G__12859_13853 = (b instanceof thi.ng.geom.vector.Vec3);
var G__12860_13854 = (((!(G__12858_13852)))?typeof a === 'number':null);
var G__12861_13855 = (((!(G__12859_13853)))?typeof b === 'number':null);
var G__12846_13856 = self__.buf;
var G__12847_13857 = ((G__12858_13852)?a.buf:null);
var G__12848_13858 = ((G__12859_13853)?b.buf:null);
var G__12849_13859 = (G__12846_13856[(0)]);
var G__12850_13860 = (G__12846_13856[(1)]);
var G__12851_13861 = (G__12846_13856[(2)]);
var G__12852_13862 = ((G__12858_13852)?(G__12847_13857[(0)]):(cljs.core.truth_(G__12860_13854)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__12853_13863 = ((G__12858_13852)?(G__12847_13857[(1)]):(cljs.core.truth_(G__12860_13854)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__12854_13864 = ((G__12858_13852)?(G__12847_13857[(2)]):(cljs.core.truth_(G__12860_13854)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__12855_13865 = ((G__12859_13853)?(G__12848_13858[(0)]):(cljs.core.truth_(G__12861_13855)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12856_13866 = ((G__12859_13853)?(G__12848_13858[(1)]):(cljs.core.truth_(G__12861_13855)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__12857_13867 = ((G__12859_13853)?(G__12848_13858[(2)]):(cljs.core.truth_(G__12861_13855)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__12849_13859 * G__12852_13862) + G__12855_13865));

(self__.buf[(1)] = ((G__12850_13860 * G__12853_13863) + G__12856_13866));

(self__.buf[(2)] = ((G__12851_13861 * G__12854_13864) + G__12857_13867));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12862_13872 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12863_13873 = v.buf;
(self__.buf[(0)] = ((G__12862_13872[(0)]) / (G__12863_13873[(0)])));

(self__.buf[(1)] = ((G__12862_13872[(1)]) / (G__12863_13873[(1)])));

(self__.buf[(2)] = ((G__12862_13872[(2)]) / (G__12863_13873[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12862_13872[(0)]) / v));

(self__.buf[(1)] = ((G__12862_13872[(1)]) / v));

(self__.buf[(2)] = ((G__12862_13872[(2)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12862_13872[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12862_13872[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__12862_13872[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12876_13874 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__12877_13875 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__12878_13876 = (((!(G__12876_13874)))?typeof v1 === 'number':null);
var G__12879_13877 = (((!(G__12877_13875)))?typeof v2 === 'number':null);
var G__12864_13878 = self__.buf;
var G__12865_13879 = ((G__12876_13874)?v1.buf:null);
var G__12866_13880 = ((G__12877_13875)?v2.buf:null);
var G__12867_13881 = (G__12864_13878[(0)]);
var G__12868_13882 = (G__12864_13878[(1)]);
var G__12869_13883 = (G__12864_13878[(2)]);
var G__12870_13884 = ((G__12876_13874)?(G__12865_13879[(0)]):(cljs.core.truth_(G__12878_13876)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12871_13885 = ((G__12876_13874)?(G__12865_13879[(1)]):(cljs.core.truth_(G__12878_13876)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12872_13886 = ((G__12876_13874)?(G__12865_13879[(2)]):(cljs.core.truth_(G__12878_13876)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__12873_13887 = ((G__12877_13875)?(G__12866_13880[(0)]):(cljs.core.truth_(G__12879_13877)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12874_13888 = ((G__12877_13875)?(G__12866_13880[(1)]):(cljs.core.truth_(G__12879_13877)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__12875_13889 = ((G__12877_13875)?(G__12866_13880[(2)]):(cljs.core.truth_(G__12879_13877)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__12867_13881 / G__12870_13884) / G__12873_13887));

(self__.buf[(1)] = ((G__12868_13882 / G__12871_13885) / G__12874_13888));

(self__.buf[(2)] = ((G__12869_13883 / G__12872_13886) / G__12875_13889));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12880_13890 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12881_13891 = v.buf;
(self__.buf[(0)] = ((G__12880_13890[(0)]) + (G__12881_13891[(0)])));

(self__.buf[(1)] = ((G__12880_13890[(1)]) + (G__12881_13891[(1)])));

(self__.buf[(2)] = ((G__12880_13890[(2)]) + (G__12881_13891[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__12880_13890[(0)]) + v));

(self__.buf[(1)] = ((G__12880_13890[(1)]) + v));

(self__.buf[(2)] = ((G__12880_13890[(2)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__12880_13890[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__12880_13890[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__12880_13890[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__12894_13892 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__12895_13893 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__12896_13894 = (((!(G__12894_13892)))?typeof v1 === 'number':null);
var G__12897_13895 = (((!(G__12895_13893)))?typeof v2 === 'number':null);
var G__12882_13896 = self__.buf;
var G__12883_13897 = ((G__12894_13892)?v1.buf:null);
var G__12884_13898 = ((G__12895_13893)?v2.buf:null);
var G__12885_13899 = (G__12882_13896[(0)]);
var G__12886_13900 = (G__12882_13896[(1)]);
var G__12887_13901 = (G__12882_13896[(2)]);
var G__12888_13902 = ((G__12894_13892)?(G__12883_13897[(0)]):(cljs.core.truth_(G__12896_13894)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__12889_13903 = ((G__12894_13892)?(G__12883_13897[(1)]):(cljs.core.truth_(G__12896_13894)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__12890_13904 = ((G__12894_13892)?(G__12883_13897[(2)]):(cljs.core.truth_(G__12896_13894)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__12891_13905 = ((G__12895_13893)?(G__12884_13898[(0)]):(cljs.core.truth_(G__12897_13895)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__12892_13906 = ((G__12895_13893)?(G__12884_13898[(1)]):(cljs.core.truth_(G__12897_13895)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__12893_13907 = ((G__12895_13893)?(G__12884_13898[(2)]):(cljs.core.truth_(G__12897_13895)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__12885_13899 + G__12888_13902) + G__12891_13905));

(self__.buf[(1)] = ((G__12886_13900 + G__12889_13903) + G__12892_13906));

(self__.buf[(2)] = ((G__12887_13901 + G__12890_13904) + G__12893_13907));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__12910_13908 = (a instanceof thi.ng.geom.vector.Vec3);
var G__12911_13909 = (b instanceof thi.ng.geom.vector.Vec3);
var G__12912_13910 = (((!(G__12910_13908)))?typeof a === 'number':null);
var G__12913_13911 = (((!(G__12911_13909)))?typeof b === 'number':null);
var G__12898_13912 = self__.buf;
var G__12899_13913 = ((G__12910_13908)?a.buf:null);
var G__12900_13914 = ((G__12911_13909)?b.buf:null);
var G__12901_13915 = (G__12898_13912[(0)]);
var G__12902_13916 = (G__12898_13912[(1)]);
var G__12903_13917 = (G__12898_13912[(2)]);
var G__12904_13918 = ((G__12910_13908)?(G__12899_13913[(0)]):(cljs.core.truth_(G__12912_13910)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__12905_13919 = ((G__12910_13908)?(G__12899_13913[(1)]):(cljs.core.truth_(G__12912_13910)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__12906_13920 = ((G__12910_13908)?(G__12899_13913[(2)]):(cljs.core.truth_(G__12912_13910)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__12907_13921 = ((G__12911_13909)?(G__12900_13914[(0)]):(cljs.core.truth_(G__12913_13911)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__12908_13922 = ((G__12911_13909)?(G__12900_13914[(1)]):(cljs.core.truth_(G__12913_13911)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__12909_13923 = ((G__12911_13909)?(G__12900_13914[(2)]):(cljs.core.truth_(G__12913_13911)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__12901_13915 + G__12904_13918) * G__12907_13921));

(self__.buf[(1)] = ((G__12902_13916 + G__12905_13919) * G__12908_13922));

(self__.buf[(2)] = ((G__12903_13917 + G__12906_13920) * G__12909_13923));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(2)])),"]"].join('');
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__12914_13928 = self__.buf;
var G__12916_13929 = (G__12914_13928[(0)]);
var G__12917_13930 = (G__12914_13928[(1)]);
var G__12918_13931 = (G__12914_13928[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12915_13932 = v.buf;
var G__12919_13933 = (G__12915_13932[(0)]);
var G__12920_13934 = (G__12915_13932[(1)]);
var G__12921_13935 = (G__12915_13932[(2)]);
(b[(0)] = ((G__12917_13930 * G__12921_13935) - (G__12920_13934 * G__12918_13931)));

(b[(1)] = ((G__12918_13931 * G__12919_13933) - (G__12921_13935 * G__12916_13929)));

(b[(2)] = ((G__12916_13929 * G__12920_13934) - (G__12919_13933 * G__12917_13930)));
} else {
var G__12919_13936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__12920_13937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__12921_13938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__12917_13930 * G__12921_13938) - (G__12920_13937 * G__12918_13931)));

(b[(1)] = ((G__12918_13931 * G__12919_13936) - (G__12921_13938 * G__12916_13929)));

(b[(2)] = ((G__12916_13929 * G__12920_13937) - (G__12919_13936 * G__12917_13930)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq(___$1));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__12922 = self__.buf;
var G__12924 = (G__12922[(0)]);
var G__12925 = (G__12922[(1)]);
var G__12926 = (G__12922[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12923 = v.buf;
var G__12927 = (G__12923[(0)]);
var G__12928 = (G__12923[(1)]);
var G__12929 = (G__12923[(2)]);
var d = ((((G__12924 * G__12927) + (G__12925 * G__12928)) + (G__12926 * G__12929)) * 2.0);
(b[(0)] = ((G__12927 * d) - G__12924));

(b[(1)] = ((G__12928 * d) - G__12925));

(b[(2)] = ((G__12929 * d) - G__12926));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__12927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__12928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__12929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__12924 * G__12927) + (G__12925 * G__12928)) + (G__12926 * G__12929)) * 2.0);
(b[(0)] = ((G__12927 * d) - G__12924));

(b[(1)] = ((G__12928 * d) - G__12925));

(b[(2)] = ((G__12929 * d) - G__12926));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(___$1.thi$ng$geom$core$IDistance$dist_squared$arity$2(null,v));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12930 = self__.buf;
var G__12932 = (G__12930[(0)]);
var G__12933 = (G__12930[(1)]);
var G__12934 = (G__12930[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12931 = v.buf;
var G__12935 = (G__12931[(0)]);
var G__12936 = (G__12931[(1)]);
var G__12937 = (G__12931[(2)]);
var dx = (G__12932 - G__12935);
var dy = (G__12933 - G__12936);
var dz = (G__12934 - G__12937);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__12935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__12936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__12937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__12932 - G__12935);
var dy = (G__12933 - G__12936);
var dz = (G__12934 - G__12937);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IRotate3D$rotate_z$arity$2(null,theta);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IMathOps$_$arity$1(null);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__12938 = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"zyx","zyx",1752527951)) : thi.ng.geom.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)));
return (fexpr__12938.cljs$core$IFn$_invoke$arity$1 ? fexpr__12938.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__12938.call(null,___$1));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$math$core$INormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__12939_13950 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12940_13951 = v.buf;
(dest__12372__auto__[(0)] = ((G__12939_13950[(0)]) * (G__12940_13951[(0)])));

(dest__12372__auto__[(1)] = ((G__12939_13950[(1)]) * (G__12940_13951[(1)])));

(dest__12372__auto__[(2)] = ((G__12939_13950[(2)]) * (G__12940_13951[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__12939_13950[(0)]) * v));

(dest__12372__auto__[(1)] = ((G__12939_13950[(1)]) * v));

(dest__12372__auto__[(2)] = ((G__12939_13950[(2)]) * v));
} else {
(dest__12372__auto__[(0)] = ((G__12939_13950[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__12939_13950[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__12939_13950[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = self__._hash;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3)));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((3) === cljs.core.count(v))){
var G__12941 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12942 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12941[(0)]),(G__12942[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12941[(1)]),(G__12942[(1)]),eps))){
return thi.ng.math.core.delta_EQ_((G__12941[(2)]),(G__12942[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12941[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__12941[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_((G__12941[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)]))))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((((3) === cljs.core.count(o))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))))))))));
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3((thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__12943 = (buf_SINGLEQUOTE_[(0)]);
var G__12944 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__12943,G__12944) : f2.call(null,G__12943,G__12944));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__12945 = (buf_SINGLEQUOTE_[(1)]);
var G__12946 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__12945,G__12946) : f2.call(null,G__12945,G__12946));
})());

(buf_SINGLEQUOTE_[(2)] = (function (){var G__12947 = (buf_SINGLEQUOTE_[(2)]);
var G__12948 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__12947,G__12948) : f2.call(null,G__12947,G__12948));
})());

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__12949 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12950 = v.buf;
return ((((G__12949[(0)]) * (G__12950[(0)])) + ((G__12949[(1)]) * (G__12950[(1)]))) + ((G__12949[(2)]) * (G__12950[(2)])));
} else {
return ((((G__12949[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__12949[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__12949[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__12951 = (self__.buf[(0)]);
var G__12952 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12951,G__12952) : f.call(null,G__12951,G__12952));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__12953 = acc;
var G__12954 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12953,G__12954) : f.call(null,G__12953,G__12954));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__12955 = start;
var G__12956 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12955,G__12956) : f.call(null,G__12955,G__12956));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__12957 = acc;
var G__12958 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12957,G__12958) : f.call(null,G__12957,G__12958));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
var acc__$2 = (function (){var G__12959 = acc__$1;
var G__12960 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12959,G__12960) : f.call(null,G__12959,G__12960));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
return cljs.core.deref(acc__$2);
} else {
return acc__$2;
}
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__12961_13956 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12962_13957 = v.buf;
(dest__12372__auto__[(0)] = ((G__12961_13956[(0)]) + (G__12962_13957[(0)])));

(dest__12372__auto__[(1)] = ((G__12961_13956[(1)]) + (G__12962_13957[(1)])));

(dest__12372__auto__[(2)] = ((G__12961_13956[(2)]) + (G__12962_13957[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__12961_13956[(0)]) + v));

(dest__12372__auto__[(1)] = ((G__12961_13956[(1)]) + v));

(dest__12372__auto__[(2)] = ((G__12961_13956[(2)]) + v));
} else {
(dest__12372__auto__[(0)] = ((G__12961_13956[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__12961_13956[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__12961_13956[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$IHeading$heading_xy$arity$1(null);
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(v) : thi.ng.geom.vector.vec3.call(null,v)));
return Math.acos(thi.ng.math.core.dot(___$1.thi$ng$math$core$INormalize$normalize$arity$1(null),thi.ng.math.core.normalize(v__$1)));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__12963_13964 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__12964_13965 = v.buf;
(b[(0)] = (((G__12963_13964[(0)]) + (G__12964_13965[(0)])) * 0.5));

(b[(1)] = (((G__12963_13964[(1)]) + (G__12964_13965[(1)])) * 0.5));

(b[(2)] = (((G__12963_13964[(2)]) + (G__12964_13965[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__12963_13964[(0)]) + v) * 0.5));

(b[(1)] = (((G__12963_13964[(1)]) + v) * 0.5));

(b[(2)] = (((G__12963_13964[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__12963_13964[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__12963_13964[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__12963_13964[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__12977_13967 = (v instanceof thi.ng.geom.vector.Vec3);
var G__12978_13968 = (t instanceof thi.ng.geom.vector.Vec3);
var G__12979_13969 = (((!(G__12977_13967)))?typeof v === 'number':null);
var G__12980_13970 = (((!(G__12978_13968)))?typeof t === 'number':null);
var G__12965_13971 = self__.buf;
var G__12966_13972 = ((G__12977_13967)?v.buf:null);
var G__12967_13973 = ((G__12978_13968)?t.buf:null);
var G__12968_13974 = (G__12965_13971[(0)]);
var G__12969_13975 = (G__12965_13971[(1)]);
var G__12970_13976 = (G__12965_13971[(2)]);
var G__12971_13977 = ((G__12977_13967)?(G__12966_13972[(0)]):(cljs.core.truth_(G__12979_13969)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__12972_13978 = ((G__12977_13967)?(G__12966_13972[(1)]):(cljs.core.truth_(G__12979_13969)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__12973_13979 = ((G__12977_13967)?(G__12966_13972[(2)]):(cljs.core.truth_(G__12979_13969)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__12974_13980 = ((G__12978_13968)?(G__12967_13973[(0)]):(cljs.core.truth_(G__12980_13970)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__12975_13981 = ((G__12978_13968)?(G__12967_13973[(1)]):(cljs.core.truth_(G__12980_13970)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__12976_13982 = ((G__12978_13968)?(G__12967_13973[(2)]):(cljs.core.truth_(G__12980_13970)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (((G__12971_13977 - G__12968_13974) * G__12974_13980) + G__12968_13974));

(b[(1)] = (((G__12972_13978 - G__12969_13975) * G__12975_13981) + G__12969_13975));

(b[(2)] = (((G__12973_13979 - G__12970_13976) * G__12976_13982) + G__12970_13976));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__12993_13987 = (b instanceof thi.ng.geom.vector.Vec3);
var G__12994_13988 = (c instanceof thi.ng.geom.vector.Vec3);
var G__12995_13989 = (((!(G__12993_13987)))?typeof b === 'number':null);
var G__12996_13990 = (((!(G__12994_13988)))?typeof c === 'number':null);
var G__12981_13991 = self__.buf;
var G__12982_13992 = ((G__12993_13987)?b.buf:null);
var G__12983_13993 = ((G__12994_13988)?c.buf:null);
var G__12984_13994 = (G__12981_13991[(0)]);
var G__12985_13995 = (G__12981_13991[(1)]);
var G__12986_13996 = (G__12981_13991[(2)]);
var G__12987_13997 = ((G__12993_13987)?(G__12982_13992[(0)]):(cljs.core.truth_(G__12995_13989)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__12988_13998 = ((G__12993_13987)?(G__12982_13992[(1)]):(cljs.core.truth_(G__12995_13989)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__12989_13999 = ((G__12993_13987)?(G__12982_13992[(2)]):(cljs.core.truth_(G__12995_13989)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__12990_14000 = ((G__12994_13988)?(G__12983_13993[(0)]):(cljs.core.truth_(G__12996_13990)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__12991_14001 = ((G__12994_13988)?(G__12983_13993[(1)]):(cljs.core.truth_(G__12996_13990)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__12992_14002 = ((G__12994_13988)?(G__12983_13993[(2)]):(cljs.core.truth_(G__12996_13990)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_14003 = (((G__12987_13997 - G__12984_13994) * u) + G__12984_13994);
var y1_14004 = (((G__12988_13998 - G__12985_13995) * u) + G__12985_13995);
var z1_14005 = (((G__12989_13999 - G__12986_13996) * u) + G__12986_13996);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__12990_14000) * u) + G__12990_14000) - x1_14003) * v) + x1_14003));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__12991_14001) * u) + G__12991_14001) - y1_14004) * v) + y1_14004));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__12992_14002) * u) + G__12992_14002) - z1_14005) * v) + z1_14005));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__13009_14006 = (v instanceof thi.ng.geom.vector.Vec3);
var G__13010_14007 = (t instanceof thi.ng.geom.vector.Vec3);
var G__13011_14008 = (((!(G__13009_14006)))?typeof v === 'number':null);
var G__13012_14009 = (((!(G__13010_14007)))?typeof t === 'number':null);
var G__12997_14010 = self__.buf;
var G__12998_14011 = ((G__13009_14006)?v.buf:null);
var G__12999_14012 = ((G__13010_14007)?t.buf:null);
var G__13000_14013 = (G__12997_14010[(0)]);
var G__13001_14014 = (G__12997_14010[(1)]);
var G__13002_14015 = (G__12997_14010[(2)]);
var G__13003_14016 = ((G__13009_14006)?(G__12998_14011[(0)]):(cljs.core.truth_(G__13011_14008)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__13004_14017 = ((G__13009_14006)?(G__12998_14011[(1)]):(cljs.core.truth_(G__13011_14008)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__13005_14018 = ((G__13009_14006)?(G__12998_14011[(2)]):(cljs.core.truth_(G__13011_14008)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__13006_14019 = ((G__13010_14007)?(G__12999_14012[(0)]):(cljs.core.truth_(G__13012_14009)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__13007_14020 = ((G__13010_14007)?(G__12999_14012[(1)]):(cljs.core.truth_(G__13012_14009)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__13008_14021 = ((G__13010_14007)?(G__12999_14012[(2)]):(cljs.core.truth_(G__13012_14009)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13000_14013,G__13003_14016,G__13006_14019) : f.call(null,G__13000_14013,G__13003_14016,G__13006_14019)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13001_14014,G__13004_14017,G__13007_14020) : f.call(null,G__13001_14014,G__13004_14017,G__13007_14020)));

(b[(2)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13002_14015,G__13005_14018,G__13008_14021) : f.call(null,G__13002_14015,G__13005_14018,G__13008_14021)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__13013_14022 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__13014_14023 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__13014_14023[(0)]),(G__13013_14022[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__13014_14023[(1)]),(G__13013_14022[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_((G__13014_14023[(2)]),(G__13013_14022[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__13013_14022[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__13013_14022[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(e,(G__13013_14022[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__13013_14022[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__13013_14022[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(2),0.0),(G__13013_14022[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__13027_14028 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__13028_14029 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__13029_14030 = (((!(G__13027_14028)))?typeof e1 === 'number':null);
var G__13030_14031 = (((!(G__13028_14029)))?typeof e2 === 'number':null);
var G__13015_14032 = self__.buf;
var G__13016_14033 = ((G__13027_14028)?e1.buf:null);
var G__13017_14034 = ((G__13028_14029)?e2.buf:null);
var G__13018_14035 = (G__13015_14032[(0)]);
var G__13019_14036 = (G__13015_14032[(1)]);
var G__13020_14037 = (G__13015_14032[(2)]);
var G__13021_14038 = ((G__13027_14028)?(G__13016_14033[(0)]):(cljs.core.truth_(G__13029_14030)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__13022_14039 = ((G__13027_14028)?(G__13016_14033[(1)]):(cljs.core.truth_(G__13029_14030)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__13023_14040 = ((G__13027_14028)?(G__13016_14033[(2)]):(cljs.core.truth_(G__13029_14030)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(2),0.0)));
var G__13024_14041 = ((G__13028_14029)?(G__13017_14034[(0)]):(cljs.core.truth_(G__13030_14031)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__13025_14042 = ((G__13028_14029)?(G__13017_14034[(1)]):(cljs.core.truth_(G__13030_14031)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
var G__13026_14043 = ((G__13028_14029)?(G__13017_14034[(2)]):(cljs.core.truth_(G__13030_14031)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__13021_14038,G__13024_14041,G__13018_14035));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__13022_14039,G__13025_14042,G__13019_14036));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_(G__13023_14040,G__13026_14043,G__13020_14037));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k <= (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k >= (0))) && ((k <= (2))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3((function (){var G__13031 = self__.buf;
var G__13032 = (new Float32Array(self__.buf));
var G__13033 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__13034 = k;
var G__13035 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__13031,G__13032,G__13033,G__13034,G__13035) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__13031,G__13032,G__13033,G__13034,G__13035));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13036_14044 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13037_14045 = v.buf;
(dest__12372__auto__[(0)] = (function (){var a__11475__auto__ = (G__13036_14044[(0)]);
var b__11476__auto__ = (G__13037_14045[(0)]);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11475__auto__ = (G__13036_14044[(1)]);
var b__11476__auto__ = (G__13037_14045[(1)]);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11475__auto__ = (G__13036_14044[(2)]);
var b__11476__auto__ = (G__13037_14045[(2)]);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = (function (){var a__11475__auto__ = (G__13036_14044[(0)]);
var b__11476__auto__ = v;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11475__auto__ = (G__13036_14044[(1)]);
var b__11476__auto__ = v;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11475__auto__ = (G__13036_14044[(2)]);
var b__11476__auto__ = v;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
} else {
(dest__12372__auto__[(0)] = (function (){var a__11475__auto__ = (G__13036_14044[(0)]);
var b__11476__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11475__auto__ = (G__13036_14044[(1)]);
var b__11476__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11475__auto__ = (G__13036_14044[(2)]);
var b__11476__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13050_14052 = (v instanceof thi.ng.geom.vector.Vec3);
var G__13051_14053 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13052_14054 = (((!(G__13050_14052)))?typeof v === 'number':null);
var G__13053_14055 = (((!(G__13051_14053)))?typeof v2 === 'number':null);
var G__13038_14056 = self__.buf;
var G__13039_14057 = ((G__13050_14052)?v.buf:null);
var G__13040_14058 = ((G__13051_14053)?v2.buf:null);
var G__13041_14059 = (G__13038_14056[(0)]);
var G__13042_14060 = (G__13038_14056[(1)]);
var G__13043_14061 = (G__13038_14056[(2)]);
var G__13044_14062 = ((G__13050_14052)?(G__13039_14057[(0)]):(cljs.core.truth_(G__13052_14054)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__13045_14063 = ((G__13050_14052)?(G__13039_14057[(1)]):(cljs.core.truth_(G__13052_14054)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__13046_14064 = ((G__13050_14052)?(G__13039_14057[(2)]):(cljs.core.truth_(G__13052_14054)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__13047_14065 = ((G__13051_14053)?(G__13040_14058[(0)]):(cljs.core.truth_(G__13053_14055)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13048_14066 = ((G__13051_14053)?(G__13040_14058[(1)]):(cljs.core.truth_(G__13053_14055)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13049_14067 = ((G__13051_14053)?(G__13040_14058[(2)]):(cljs.core.truth_(G__13053_14055)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = (function (){var a__11475__auto__ = (function (){var a__11475__auto__ = G__13041_14059;
var b__11476__auto__ = G__13044_14062;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})();
var b__11476__auto__ = G__13047_14065;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12383__auto__[(1)] = (function (){var a__11475__auto__ = (function (){var a__11475__auto__ = G__13042_14060;
var b__11476__auto__ = G__13045_14063;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})();
var b__11476__auto__ = G__13048_14066;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

(dest__12383__auto__[(2)] = (function (){var a__11475__auto__ = (function (){var a__11475__auto__ = G__13043_14061;
var b__11476__auto__ = G__13046_14064;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})();
var b__11476__auto__ = G__13049_14067;
if((a__11475__auto__ <= b__11476__auto__)){
return a__11475__auto__;
} else {
return b__11476__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13054_14073 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13055_14074 = v.buf;
(dest__12372__auto__[(0)] = (function (){var a__11482__auto__ = (G__13054_14073[(0)]);
var b__11483__auto__ = (G__13055_14074[(0)]);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11482__auto__ = (G__13054_14073[(1)]);
var b__11483__auto__ = (G__13055_14074[(1)]);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11482__auto__ = (G__13054_14073[(2)]);
var b__11483__auto__ = (G__13055_14074[(2)]);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = (function (){var a__11482__auto__ = (G__13054_14073[(0)]);
var b__11483__auto__ = v;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11482__auto__ = (G__13054_14073[(1)]);
var b__11483__auto__ = v;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11482__auto__ = (G__13054_14073[(2)]);
var b__11483__auto__ = v;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
} else {
(dest__12372__auto__[(0)] = (function (){var a__11482__auto__ = (G__13054_14073[(0)]);
var b__11483__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(1)] = (function (){var a__11482__auto__ = (G__13054_14073[(1)]);
var b__11483__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12372__auto__[(2)] = (function (){var a__11482__auto__ = (G__13054_14073[(2)]);
var b__11483__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13068_14075 = (v instanceof thi.ng.geom.vector.Vec3);
var G__13069_14076 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13070_14077 = (((!(G__13068_14075)))?typeof v === 'number':null);
var G__13071_14078 = (((!(G__13069_14076)))?typeof v2 === 'number':null);
var G__13056_14079 = self__.buf;
var G__13057_14080 = ((G__13068_14075)?v.buf:null);
var G__13058_14081 = ((G__13069_14076)?v2.buf:null);
var G__13059_14082 = (G__13056_14079[(0)]);
var G__13060_14083 = (G__13056_14079[(1)]);
var G__13061_14084 = (G__13056_14079[(2)]);
var G__13062_14085 = ((G__13068_14075)?(G__13057_14080[(0)]):(cljs.core.truth_(G__13070_14077)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__13063_14086 = ((G__13068_14075)?(G__13057_14080[(1)]):(cljs.core.truth_(G__13070_14077)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__13064_14087 = ((G__13068_14075)?(G__13057_14080[(2)]):(cljs.core.truth_(G__13070_14077)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__13065_14088 = ((G__13069_14076)?(G__13058_14081[(0)]):(cljs.core.truth_(G__13071_14078)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13066_14089 = ((G__13069_14076)?(G__13058_14081[(1)]):(cljs.core.truth_(G__13071_14078)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13067_14090 = ((G__13069_14076)?(G__13058_14081[(2)]):(cljs.core.truth_(G__13071_14078)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = (function (){var a__11482__auto__ = (function (){var a__11482__auto__ = G__13059_14082;
var b__11483__auto__ = G__13062_14085;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})();
var b__11483__auto__ = G__13065_14088;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12383__auto__[(1)] = (function (){var a__11482__auto__ = (function (){var a__11482__auto__ = G__13060_14083;
var b__11483__auto__ = G__13063_14086;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})();
var b__11483__auto__ = G__13066_14089;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

(dest__12383__auto__[(2)] = (function (){var a__11482__auto__ = (function (){var a__11482__auto__ = G__13061_14084;
var b__11483__auto__ = G__13064_14087;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})();
var b__11483__auto__ = G__13067_14090;
if((a__11482__auto__ >= b__11483__auto__)){
return a__11482__auto__;
} else {
return b__11483__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__13072 = self__.buf;
var G__13073 = (G__13072[(0)]);
var G__13074 = (G__13072[(1)]);
var G__13075 = (G__13072[(2)]);
(b[(0)] = G__13073);

(b[(1)] = ((G__13074 * c) - (G__13075 * s)));

(b[(2)] = ((G__13074 * s) + (G__13075 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__13076 = self__.buf;
var G__13077 = (G__13076[(0)]);
var G__13078 = (G__13076[(1)]);
var G__13079 = (G__13076[(2)]);
(b[(0)] = ((G__13077 * c) + (G__13079 * s)));

(b[(1)] = G__13078);

(b[(2)] = ((G__13079 * c) - (G__13077 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__13080 = self__.buf;
var G__13081 = (G__13080[(0)]);
var G__13082 = (G__13080[(1)]);
var G__13083 = (G__13080[(2)]);
(b[(0)] = ((G__13081 * c) - (G__13082 * s)));

(b[(1)] = ((G__13081 * s) + (G__13082 * c)));

(b[(2)] = G__13083);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__13084 = self__.buf;
var G__13086 = (G__13084[(0)]);
var G__13087 = (G__13084[(1)]);
var G__13088 = (G__13084[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13085 = v.buf;
var G__13089 = (G__13085[(0)]);
var G__13090 = (G__13085[(1)]);
var G__13091 = (G__13085[(2)]);
var ux_SINGLEQUOTE_ = (G__13089 * G__13086);
var uy_SINGLEQUOTE_ = (G__13089 * G__13087);
var uz_SINGLEQUOTE_ = (G__13089 * G__13088);
var vx_SINGLEQUOTE_ = (G__13090 * G__13086);
var vy_SINGLEQUOTE_ = (G__13090 * G__13087);
var vz_SINGLEQUOTE_ = (G__13090 * G__13088);
var wx_SINGLEQUOTE_ = (G__13091 * G__13086);
var wy_SINGLEQUOTE_ = (G__13091 * G__13087);
var wz_SINGLEQUOTE_ = (G__13091 * G__13088);
var vx2 = (G__13089 * G__13089);
var vy2 = (G__13090 * G__13090);
var vz2 = (G__13091 * G__13091);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__13089) + ((((vy2 + vz2) * G__13086) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__13089)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__13090) + ((((vx2 + vz2) * G__13087) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__13090)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__13091) + ((((vx2 + vy2) * G__13088) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__13091)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__13089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__13090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__13091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__13089 * G__13086);
var uy_SINGLEQUOTE_ = (G__13089 * G__13087);
var uz_SINGLEQUOTE_ = (G__13089 * G__13088);
var vx_SINGLEQUOTE_ = (G__13090 * G__13086);
var vy_SINGLEQUOTE_ = (G__13090 * G__13087);
var vz_SINGLEQUOTE_ = (G__13090 * G__13088);
var wx_SINGLEQUOTE_ = (G__13091 * G__13086);
var wy_SINGLEQUOTE_ = (G__13091 * G__13087);
var wz_SINGLEQUOTE_ = (G__13091 * G__13088);
var vx2 = (G__13089 * G__13089);
var vy2 = (G__13090 * G__13090);
var vz2 = (G__13091 * G__13091);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__13089) + ((((vy2 + vz2) * G__13086) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__13089)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__13090) + ((((vx2 + vz2) * G__13087) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__13090)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__13091) + ((((vx2 + vy2) * G__13088) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__13091)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
}));

(thi.ng.geom.vector.Vec3.prototype.call = (function (unused__10311__auto__){
var self__ = this;
var self__ = this;
var G__13092 = (arguments.length - (1));
switch (G__13092) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args12774){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12774)));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5802__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = ___$1.thi$ng$math$core$IMagnitude$mag$arity$1(null);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13093 = self__.buf;
var G__13094 = (G__13093[(0)]);
var G__13095 = (G__13093[(1)]);
var G__13096 = (G__13093[(2)]);
var l = Math.sqrt((((G__13094 * G__13094) + (G__13095 * G__13095)) + (G__13096 * G__13096)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__13094 / l));

(b[(1)] = (G__13095 / l));

(b[(2)] = (G__13096 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__13097 = self__.buf;
var G__13098 = (G__13097[(0)]);
var G__13099 = (G__13097[(1)]);
var G__13100 = (G__13097[(2)]);
var l = Math.sqrt((((G__13098 * G__13098) + (G__13099 * G__13099)) + (G__13100 * G__13100)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__13098 * l__$1));

(b[(1)] = (G__13099 * l__$1));

(b[(2)] = (G__13100 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,___$1.thi$ng$math$core$IMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13101 = self__.buf;
var G__13102 = (G__13101[(0)]);
var G__13103 = (G__13101[(1)]);
var G__13104 = (G__13101[(2)]);
return Math.sqrt((((G__13102 * G__13102) + (G__13103 * G__13103)) + (G__13104 * G__13104)));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__13105 = self__.buf;
var G__13106 = (G__13105[(0)]);
var G__13107 = (G__13105[(1)]);
var G__13108 = (G__13105[(2)]);
return (((G__13106 * G__13106) + (G__13107 * G__13107)) + (G__13108 * G__13108));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13121_14107 = (a instanceof thi.ng.geom.vector.Vec3);
var G__13122_14108 = (b instanceof thi.ng.geom.vector.Vec3);
var G__13123_14109 = (((!(G__13121_14107)))?typeof a === 'number':null);
var G__13124_14110 = (((!(G__13122_14108)))?typeof b === 'number':null);
var G__13109_14111 = self__.buf;
var G__13110_14112 = ((G__13121_14107)?a.buf:null);
var G__13111_14113 = ((G__13122_14108)?b.buf:null);
var G__13112_14114 = (G__13109_14111[(0)]);
var G__13113_14115 = (G__13109_14111[(1)]);
var G__13114_14116 = (G__13109_14111[(2)]);
var G__13115_14117 = ((G__13121_14107)?(G__13110_14112[(0)]):(cljs.core.truth_(G__13123_14109)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__13116_14118 = ((G__13121_14107)?(G__13110_14112[(1)]):(cljs.core.truth_(G__13123_14109)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__13117_14119 = ((G__13121_14107)?(G__13110_14112[(2)]):(cljs.core.truth_(G__13123_14109)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__13118_14120 = ((G__13122_14108)?(G__13111_14113[(0)]):(cljs.core.truth_(G__13124_14110)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__13119_14121 = ((G__13122_14108)?(G__13111_14113[(1)]):(cljs.core.truth_(G__13124_14110)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__13120_14122 = ((G__13122_14108)?(G__13111_14113[(2)]):(cljs.core.truth_(G__13124_14110)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13112_14114 * G__13115_14117) - G__13118_14120));

(dest__12383__auto__[(1)] = ((G__13113_14115 * G__13116_14118) - G__13119_14121));

(dest__12383__auto__[(2)] = ((G__13114_14116 * G__13117_14119) - G__13120_14122));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13125_14124 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13126_14125 = v.buf;
(dest__12372__auto__[(0)] = ((G__13125_14124[(0)]) * (G__13126_14125[(0)])));

(dest__12372__auto__[(1)] = ((G__13125_14124[(1)]) * (G__13126_14125[(1)])));

(dest__12372__auto__[(2)] = ((G__13125_14124[(2)]) * (G__13126_14125[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__13125_14124[(0)]) * v));

(dest__12372__auto__[(1)] = ((G__13125_14124[(1)]) * v));

(dest__12372__auto__[(2)] = ((G__13125_14124[(2)]) * v));
} else {
(dest__12372__auto__[(0)] = ((G__13125_14124[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__13125_14124[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__13125_14124[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13139_14129 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__13140_14130 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13141_14131 = (((!(G__13139_14129)))?typeof v1 === 'number':null);
var G__13142_14132 = (((!(G__13140_14130)))?typeof v2 === 'number':null);
var G__13127_14133 = self__.buf;
var G__13128_14134 = ((G__13139_14129)?v1.buf:null);
var G__13129_14135 = ((G__13140_14130)?v2.buf:null);
var G__13130_14136 = (G__13127_14133[(0)]);
var G__13131_14137 = (G__13127_14133[(1)]);
var G__13132_14138 = (G__13127_14133[(2)]);
var G__13133_14139 = ((G__13139_14129)?(G__13128_14134[(0)]):(cljs.core.truth_(G__13141_14131)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__13134_14140 = ((G__13139_14129)?(G__13128_14134[(1)]):(cljs.core.truth_(G__13141_14131)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__13135_14141 = ((G__13139_14129)?(G__13128_14134[(2)]):(cljs.core.truth_(G__13141_14131)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__13136_14142 = ((G__13140_14130)?(G__13129_14135[(0)]):(cljs.core.truth_(G__13142_14132)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13137_14143 = ((G__13140_14130)?(G__13129_14135[(1)]):(cljs.core.truth_(G__13142_14132)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13138_14144 = ((G__13140_14130)?(G__13129_14135[(2)]):(cljs.core.truth_(G__13142_14132)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13130_14136 * G__13133_14139) * G__13136_14142));

(dest__12383__auto__[(1)] = ((G__13131_14137 * G__13134_14140) * G__13137_14143));

(dest__12383__auto__[(2)] = ((G__13132_14138 * G__13135_14141) * G__13138_14144));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__13143 = self__.buf;
var dest__12361__auto__ = (new Float32Array((3)));
(dest__12361__auto__[(0)] = ((G__13143[(0)]) * x));

(dest__12361__auto__[(1)] = ((G__13143[(1)]) * y));

(dest__12361__auto__[(2)] = ((G__13143[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__12361__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12355__auto__ = (new Float32Array((3)));
var G__13144_14151 = self__.buf;
(dest__12355__auto__[(0)] = (- (G__13144_14151[(0)])));

(dest__12355__auto__[(1)] = (- (G__13144_14151[(1)])));

(dest__12355__auto__[(2)] = (- (G__13144_14151[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__12355__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13145_14153 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13146_14154 = v.buf;
(dest__12372__auto__[(0)] = ((G__13145_14153[(0)]) - (G__13146_14154[(0)])));

(dest__12372__auto__[(1)] = ((G__13145_14153[(1)]) - (G__13146_14154[(1)])));

(dest__12372__auto__[(2)] = ((G__13145_14153[(2)]) - (G__13146_14154[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__13145_14153[(0)]) - v));

(dest__12372__auto__[(1)] = ((G__13145_14153[(1)]) - v));

(dest__12372__auto__[(2)] = ((G__13145_14153[(2)]) - v));
} else {
(dest__12372__auto__[(0)] = ((G__13145_14153[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__13145_14153[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__13145_14153[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13159_14159 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__13160_14160 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13161_14161 = (((!(G__13159_14159)))?typeof v1 === 'number':null);
var G__13162_14162 = (((!(G__13160_14160)))?typeof v2 === 'number':null);
var G__13147_14163 = self__.buf;
var G__13148_14164 = ((G__13159_14159)?v1.buf:null);
var G__13149_14165 = ((G__13160_14160)?v2.buf:null);
var G__13150_14166 = (G__13147_14163[(0)]);
var G__13151_14167 = (G__13147_14163[(1)]);
var G__13152_14168 = (G__13147_14163[(2)]);
var G__13153_14169 = ((G__13159_14159)?(G__13148_14164[(0)]):(cljs.core.truth_(G__13161_14161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__13154_14170 = ((G__13159_14159)?(G__13148_14164[(1)]):(cljs.core.truth_(G__13161_14161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__13155_14171 = ((G__13159_14159)?(G__13148_14164[(2)]):(cljs.core.truth_(G__13161_14161)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__13156_14172 = ((G__13160_14160)?(G__13149_14165[(0)]):(cljs.core.truth_(G__13162_14162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13157_14173 = ((G__13160_14160)?(G__13149_14165[(1)]):(cljs.core.truth_(G__13162_14162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13158_14174 = ((G__13160_14160)?(G__13149_14165[(2)]):(cljs.core.truth_(G__13162_14162)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13150_14166 - G__13153_14169) - G__13156_14172));

(dest__12383__auto__[(1)] = ((G__13151_14167 - G__13154_14170) - G__13157_14173));

(dest__12383__auto__[(2)] = ((G__13152_14168 - G__13155_14171) - G__13158_14174));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__13163 = self__.buf;
var dest__12361__auto__ = (new Float32Array((3)));
(dest__12361__auto__[(0)] = ((G__13163[(0)]) - x));

(dest__12361__auto__[(1)] = ((G__13163[(1)]) - y));

(dest__12361__auto__[(2)] = ((G__13163[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__12361__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13176_14175 = (a instanceof thi.ng.geom.vector.Vec3);
var G__13177_14176 = (b instanceof thi.ng.geom.vector.Vec3);
var G__13178_14177 = (((!(G__13176_14175)))?typeof a === 'number':null);
var G__13179_14178 = (((!(G__13177_14176)))?typeof b === 'number':null);
var G__13164_14179 = self__.buf;
var G__13165_14180 = ((G__13176_14175)?a.buf:null);
var G__13166_14181 = ((G__13177_14176)?b.buf:null);
var G__13167_14182 = (G__13164_14179[(0)]);
var G__13168_14183 = (G__13164_14179[(1)]);
var G__13169_14184 = (G__13164_14179[(2)]);
var G__13170_14185 = ((G__13176_14175)?(G__13165_14180[(0)]):(cljs.core.truth_(G__13178_14177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__13171_14186 = ((G__13176_14175)?(G__13165_14180[(1)]):(cljs.core.truth_(G__13178_14177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__13172_14187 = ((G__13176_14175)?(G__13165_14180[(2)]):(cljs.core.truth_(G__13178_14177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__13173_14188 = ((G__13177_14176)?(G__13166_14181[(0)]):(cljs.core.truth_(G__13179_14178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__13174_14189 = ((G__13177_14176)?(G__13166_14181[(1)]):(cljs.core.truth_(G__13179_14178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__13175_14190 = ((G__13177_14176)?(G__13166_14181[(2)]):(cljs.core.truth_(G__13179_14178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13167_14182 * G__13170_14185) + G__13173_14188));

(dest__12383__auto__[(1)] = ((G__13168_14183 * G__13171_14186) + G__13174_14189));

(dest__12383__auto__[(2)] = ((G__13169_14184 * G__13172_14187) + G__13175_14190));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13192_14195 = (a instanceof thi.ng.geom.vector.Vec3);
var G__13193_14196 = (b instanceof thi.ng.geom.vector.Vec3);
var G__13194_14197 = (((!(G__13192_14195)))?typeof a === 'number':null);
var G__13195_14198 = (((!(G__13193_14196)))?typeof b === 'number':null);
var G__13180_14199 = self__.buf;
var G__13181_14200 = ((G__13192_14195)?a.buf:null);
var G__13182_14201 = ((G__13193_14196)?b.buf:null);
var G__13183_14202 = (G__13180_14199[(0)]);
var G__13184_14203 = (G__13180_14199[(1)]);
var G__13185_14204 = (G__13180_14199[(2)]);
var G__13186_14205 = ((G__13192_14195)?(G__13181_14200[(0)]):(cljs.core.truth_(G__13194_14197)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__13187_14206 = ((G__13192_14195)?(G__13181_14200[(1)]):(cljs.core.truth_(G__13194_14197)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__13188_14207 = ((G__13192_14195)?(G__13181_14200[(2)]):(cljs.core.truth_(G__13194_14197)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__13189_14208 = ((G__13193_14196)?(G__13182_14201[(0)]):(cljs.core.truth_(G__13195_14198)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__13190_14209 = ((G__13193_14196)?(G__13182_14201[(1)]):(cljs.core.truth_(G__13195_14198)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__13191_14210 = ((G__13193_14196)?(G__13182_14201[(2)]):(cljs.core.truth_(G__13195_14198)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__12383__auto__[(0)] = ((G__13183_14202 + G__13186_14205) * G__13189_14208));

(dest__12383__auto__[(1)] = ((G__13184_14203 + G__13187_14206) * G__13190_14209));

(dest__12383__auto__[(2)] = ((G__13185_14204 + G__13188_14207) * G__13191_14210));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12355__auto__ = (new Float32Array((3)));
var G__13196_14211 = self__.buf;
(dest__12355__auto__[(0)] = ((1) / (G__13196_14211[(0)])));

(dest__12355__auto__[(1)] = ((1) / (G__13196_14211[(1)])));

(dest__12355__auto__[(2)] = ((1) / (G__13196_14211[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__12355__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13197_14212 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13198_14213 = v.buf;
(dest__12372__auto__[(0)] = ((G__13197_14212[(0)]) / (G__13198_14213[(0)])));

(dest__12372__auto__[(1)] = ((G__13197_14212[(1)]) / (G__13198_14213[(1)])));

(dest__12372__auto__[(2)] = ((G__13197_14212[(2)]) / (G__13198_14213[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__13197_14212[(0)]) / v));

(dest__12372__auto__[(1)] = ((G__13197_14212[(1)]) / v));

(dest__12372__auto__[(2)] = ((G__13197_14212[(2)]) / v));
} else {
(dest__12372__auto__[(0)] = ((G__13197_14212[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__13197_14212[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__13197_14212[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13211_14220 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__13212_14221 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13213_14222 = (((!(G__13211_14220)))?typeof v1 === 'number':null);
var G__13214_14223 = (((!(G__13212_14221)))?typeof v2 === 'number':null);
var G__13199_14224 = self__.buf;
var G__13200_14225 = ((G__13211_14220)?v1.buf:null);
var G__13201_14226 = ((G__13212_14221)?v2.buf:null);
var G__13202_14227 = (G__13199_14224[(0)]);
var G__13203_14228 = (G__13199_14224[(1)]);
var G__13204_14229 = (G__13199_14224[(2)]);
var G__13205_14230 = ((G__13211_14220)?(G__13200_14225[(0)]):(cljs.core.truth_(G__13213_14222)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__13206_14231 = ((G__13211_14220)?(G__13200_14225[(1)]):(cljs.core.truth_(G__13213_14222)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__13207_14232 = ((G__13211_14220)?(G__13200_14225[(2)]):(cljs.core.truth_(G__13213_14222)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__13208_14233 = ((G__13212_14221)?(G__13201_14226[(0)]):(cljs.core.truth_(G__13214_14223)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13209_14234 = ((G__13212_14221)?(G__13201_14226[(1)]):(cljs.core.truth_(G__13214_14223)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13210_14235 = ((G__13212_14221)?(G__13201_14226[(2)]):(cljs.core.truth_(G__13214_14223)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13202_14227 / G__13205_14230) / G__13208_14233));

(dest__12383__auto__[(1)] = ((G__13203_14228 / G__13206_14231) / G__13209_14234));

(dest__12383__auto__[(2)] = ((G__13204_14229 / G__13207_14232) / G__13210_14235));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__13215 = self__.buf;
var dest__12361__auto__ = (new Float32Array((3)));
(dest__12361__auto__[(0)] = ((G__13215[(0)]) / x));

(dest__12361__auto__[(1)] = ((G__13215[(1)]) / y));

(dest__12361__auto__[(2)] = ((G__13215[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__12361__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__12372__auto__ = (new Float32Array((3)));
var G__13216_14237 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__13217_14238 = v.buf;
(dest__12372__auto__[(0)] = ((G__13216_14237[(0)]) + (G__13217_14238[(0)])));

(dest__12372__auto__[(1)] = ((G__13216_14237[(1)]) + (G__13217_14238[(1)])));

(dest__12372__auto__[(2)] = ((G__13216_14237[(2)]) + (G__13217_14238[(2)])));
} else {
if(typeof v === 'number'){
(dest__12372__auto__[(0)] = ((G__13216_14237[(0)]) + v));

(dest__12372__auto__[(1)] = ((G__13216_14237[(1)]) + v));

(dest__12372__auto__[(2)] = ((G__13216_14237[(2)]) + v));
} else {
(dest__12372__auto__[(0)] = ((G__13216_14237[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__12372__auto__[(1)] = ((G__13216_14237[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__12372__auto__[(2)] = ((G__13216_14237[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__12372__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13230_14243 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__13231_14244 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__13232_14245 = (((!(G__13230_14243)))?typeof v1 === 'number':null);
var G__13233_14246 = (((!(G__13231_14244)))?typeof v2 === 'number':null);
var G__13218_14247 = self__.buf;
var G__13219_14248 = ((G__13230_14243)?v1.buf:null);
var G__13220_14249 = ((G__13231_14244)?v2.buf:null);
var G__13221_14250 = (G__13218_14247[(0)]);
var G__13222_14251 = (G__13218_14247[(1)]);
var G__13223_14252 = (G__13218_14247[(2)]);
var G__13224_14253 = ((G__13230_14243)?(G__13219_14248[(0)]):(cljs.core.truth_(G__13232_14245)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__13225_14254 = ((G__13230_14243)?(G__13219_14248[(1)]):(cljs.core.truth_(G__13232_14245)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__13226_14255 = ((G__13230_14243)?(G__13219_14248[(2)]):(cljs.core.truth_(G__13232_14245)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__13227_14256 = ((G__13231_14244)?(G__13220_14249[(0)]):(cljs.core.truth_(G__13233_14246)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__13228_14257 = ((G__13231_14244)?(G__13220_14249[(1)]):(cljs.core.truth_(G__13233_14246)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__13229_14258 = ((G__13231_14244)?(G__13220_14249[(2)]):(cljs.core.truth_(G__13233_14246)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__12383__auto__[(0)] = ((G__13221_14250 + G__13224_14253) + G__13227_14256));

(dest__12383__auto__[(1)] = ((G__13222_14251 + G__13225_14254) + G__13228_14257));

(dest__12383__auto__[(2)] = ((G__13223_14252 + G__13226_14255) + G__13229_14258));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__13234 = self__.buf;
var dest__12361__auto__ = (new Float32Array((3)));
(dest__12361__auto__[(0)] = ((G__13234[(0)]) + x));

(dest__12361__auto__[(1)] = ((G__13234[(1)]) + y));

(dest__12361__auto__[(2)] = ((G__13234[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__12361__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__12355__auto__ = (new Float32Array((3)));
var G__13235_14259 = self__.buf;
(dest__12355__auto__[(0)] = (function (){var G__13236 = (G__13235_14259[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__13236) : thi.ng.math.core.abs_STAR_.call(null,G__13236));
})());

(dest__12355__auto__[(1)] = (function (){var G__13237 = (G__13235_14259[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__13237) : thi.ng.math.core.abs_STAR_.call(null,G__13237));
})());

(dest__12355__auto__[(2)] = (function (){var G__13238 = (G__13235_14259[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__13238) : thi.ng.math.core.abs_STAR_.call(null,G__13238));
})());

return (new thi.ng.geom.vector.Vec3(dest__12355__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__12383__auto__ = (new Float32Array((3)));
var G__13251_14260 = (a instanceof thi.ng.geom.vector.Vec3);
var G__13252_14261 = (b instanceof thi.ng.geom.vector.Vec3);
var G__13253_14262 = (((!(G__13251_14260)))?typeof a === 'number':null);
var G__13254_14263 = (((!(G__13252_14261)))?typeof b === 'number':null);
var G__13239_14264 = self__.buf;
var G__13240_14265 = ((G__13251_14260)?a.buf:null);
var G__13241_14266 = ((G__13252_14261)?b.buf:null);
var G__13242_14267 = (G__13239_14264[(0)]);
var G__13243_14268 = (G__13239_14264[(1)]);
var G__13244_14269 = (G__13239_14264[(2)]);
var G__13245_14270 = ((G__13251_14260)?(G__13240_14265[(0)]):(cljs.core.truth_(G__13253_14262)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__13246_14271 = ((G__13251_14260)?(G__13240_14265[(1)]):(cljs.core.truth_(G__13253_14262)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__13247_14272 = ((G__13251_14260)?(G__13240_14265[(2)]):(cljs.core.truth_(G__13253_14262)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__13248_14273 = ((G__13252_14261)?(G__13241_14266[(0)]):(cljs.core.truth_(G__13254_14263)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__13249_14274 = ((G__13252_14261)?(G__13241_14266[(1)]):(cljs.core.truth_(G__13254_14263)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__13250_14275 = ((G__13252_14261)?(G__13241_14266[(2)]):(cljs.core.truth_(G__13254_14263)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__12383__auto__[(0)] = ((G__13242_14267 - G__13245_14270) * G__13248_14273));

(dest__12383__auto__[(1)] = ((G__13243_14268 - G__13246_14271) * G__13249_14274));

(dest__12383__auto__[(2)] = ((G__13244_14269 - G__13247_14272) * G__13250_14275));

return (new thi.ng.geom.vector.Vec3(dest__12383__auto__,null,self__._meta));
}));

(thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.vector.Vec3.cljs$lang$type = true);

(thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3");

(thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"thi.ng.geom.vector/Vec3");
}));

/**
 * Positional factory function for thi.ng.geom.vector/Vec3.
 */
thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__13257){
var G__13255 = (((G__13257 instanceof thi.ng.geom.vector.Vec2))?G__13257.buf:G__13257.buf);
return (G__13255[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__13260){
var G__13258 = (((G__13260 instanceof thi.ng.geom.vector.Vec2))?G__13260.buf:G__13260.buf);
var G__13259 = (new Float32Array(2));
(G__13259[(0)] = (G__13258[(0)]));

(G__13259[(1)] = (G__13258[(0)]));

return (new thi.ng.geom.vector.Vec2(G__13259,null,cljs.core.meta(G__13260)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__13263){
var G__13261 = (((G__13263 instanceof thi.ng.geom.vector.Vec2))?G__13263.buf:G__13263.buf);
var G__13262 = (new Float32Array(3));
(G__13262[(0)] = (G__13261[(0)]));

(G__13262[(1)] = (G__13261[(0)]));

(G__13262[(2)] = (G__13261[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13262,null,cljs.core.meta(G__13263)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__13266){
var G__13264 = (((G__13266 instanceof thi.ng.geom.vector.Vec2))?G__13266.buf:G__13266.buf);
var G__13265 = (new Float32Array(3));
(G__13265[(0)] = (G__13264[(0)]));

(G__13265[(1)] = (G__13264[(0)]));

(G__13265[(2)] = (G__13264[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13265,null,cljs.core.meta(G__13266)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__13269){
var G__13267 = (((G__13269 instanceof thi.ng.geom.vector.Vec2))?G__13269.buf:G__13269.buf);
var G__13268 = (new Float32Array(3));
(G__13268[(0)] = (G__13267[(0)]));

(G__13268[(1)] = (G__13267[(0)]));

(G__13268[(2)] = (G__13267[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13268,null,cljs.core.meta(G__13269)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__13272){
var G__13270 = (((G__13272 instanceof thi.ng.geom.vector.Vec2))?G__13272.buf:G__13272.buf);
var G__13271 = (new Float32Array(2));
(G__13271[(0)] = (G__13270[(0)]));

(G__13271[(1)] = (G__13270[(1)]));

return (new thi.ng.geom.vector.Vec2(G__13271,null,cljs.core.meta(G__13272)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__13275){
var G__13273 = (((G__13275 instanceof thi.ng.geom.vector.Vec2))?G__13275.buf:G__13275.buf);
var G__13274 = (new Float32Array(3));
(G__13274[(0)] = (G__13273[(0)]));

(G__13274[(1)] = (G__13273[(1)]));

(G__13274[(2)] = (G__13273[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13274,null,cljs.core.meta(G__13275)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__13278){
var G__13276 = (((G__13278 instanceof thi.ng.geom.vector.Vec2))?G__13278.buf:G__13278.buf);
var G__13277 = (new Float32Array(3));
(G__13277[(0)] = (G__13276[(0)]));

(G__13277[(1)] = (G__13276[(1)]));

(G__13277[(2)] = (G__13276[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13277,null,cljs.core.meta(G__13278)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__13281){
var G__13279 = (((G__13281 instanceof thi.ng.geom.vector.Vec2))?G__13281.buf:G__13281.buf);
var G__13280 = (new Float32Array(3));
(G__13280[(0)] = (G__13279[(0)]));

(G__13280[(1)] = (G__13279[(1)]));

(G__13280[(2)] = (G__13279[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13280,null,cljs.core.meta(G__13281)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__13284){
var G__13282 = (((G__13284 instanceof thi.ng.geom.vector.Vec2))?G__13284.buf:G__13284.buf);
var G__13283 = (new Float32Array(2));
(G__13283[(0)] = (G__13282[(0)]));

(G__13283[(1)] = (G__13282[(2)]));

return (new thi.ng.geom.vector.Vec2(G__13283,null,cljs.core.meta(G__13284)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__13287){
var G__13285 = (((G__13287 instanceof thi.ng.geom.vector.Vec2))?G__13287.buf:G__13287.buf);
var G__13286 = (new Float32Array(3));
(G__13286[(0)] = (G__13285[(0)]));

(G__13286[(1)] = (G__13285[(2)]));

(G__13286[(2)] = (G__13285[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13286,null,cljs.core.meta(G__13287)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__13290){
var G__13288 = (((G__13290 instanceof thi.ng.geom.vector.Vec2))?G__13290.buf:G__13290.buf);
var G__13289 = (new Float32Array(3));
(G__13289[(0)] = (G__13288[(0)]));

(G__13289[(1)] = (G__13288[(2)]));

(G__13289[(2)] = (G__13288[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13289,null,cljs.core.meta(G__13290)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__13293){
var G__13291 = (((G__13293 instanceof thi.ng.geom.vector.Vec2))?G__13293.buf:G__13293.buf);
var G__13292 = (new Float32Array(3));
(G__13292[(0)] = (G__13291[(0)]));

(G__13292[(1)] = (G__13291[(2)]));

(G__13292[(2)] = (G__13291[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13292,null,cljs.core.meta(G__13293)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__13296){
var G__13294 = (((G__13296 instanceof thi.ng.geom.vector.Vec2))?G__13296.buf:G__13296.buf);
return (G__13294[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__13299){
var G__13297 = (((G__13299 instanceof thi.ng.geom.vector.Vec2))?G__13299.buf:G__13299.buf);
var G__13298 = (new Float32Array(2));
(G__13298[(0)] = (G__13297[(1)]));

(G__13298[(1)] = (G__13297[(0)]));

return (new thi.ng.geom.vector.Vec2(G__13298,null,cljs.core.meta(G__13299)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__13302){
var G__13300 = (((G__13302 instanceof thi.ng.geom.vector.Vec2))?G__13302.buf:G__13302.buf);
var G__13301 = (new Float32Array(3));
(G__13301[(0)] = (G__13300[(1)]));

(G__13301[(1)] = (G__13300[(0)]));

(G__13301[(2)] = (G__13300[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13301,null,cljs.core.meta(G__13302)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__13305){
var G__13303 = (((G__13305 instanceof thi.ng.geom.vector.Vec2))?G__13305.buf:G__13305.buf);
var G__13304 = (new Float32Array(3));
(G__13304[(0)] = (G__13303[(1)]));

(G__13304[(1)] = (G__13303[(0)]));

(G__13304[(2)] = (G__13303[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13304,null,cljs.core.meta(G__13305)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__13308){
var G__13306 = (((G__13308 instanceof thi.ng.geom.vector.Vec2))?G__13308.buf:G__13308.buf);
var G__13307 = (new Float32Array(3));
(G__13307[(0)] = (G__13306[(1)]));

(G__13307[(1)] = (G__13306[(0)]));

(G__13307[(2)] = (G__13306[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13307,null,cljs.core.meta(G__13308)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__13311){
var G__13309 = (((G__13311 instanceof thi.ng.geom.vector.Vec2))?G__13311.buf:G__13311.buf);
var G__13310 = (new Float32Array(2));
(G__13310[(0)] = (G__13309[(1)]));

(G__13310[(1)] = (G__13309[(1)]));

return (new thi.ng.geom.vector.Vec2(G__13310,null,cljs.core.meta(G__13311)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__13314){
var G__13312 = (((G__13314 instanceof thi.ng.geom.vector.Vec2))?G__13314.buf:G__13314.buf);
var G__13313 = (new Float32Array(3));
(G__13313[(0)] = (G__13312[(1)]));

(G__13313[(1)] = (G__13312[(1)]));

(G__13313[(2)] = (G__13312[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13313,null,cljs.core.meta(G__13314)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__13317){
var G__13315 = (((G__13317 instanceof thi.ng.geom.vector.Vec2))?G__13317.buf:G__13317.buf);
var G__13316 = (new Float32Array(3));
(G__13316[(0)] = (G__13315[(1)]));

(G__13316[(1)] = (G__13315[(1)]));

(G__13316[(2)] = (G__13315[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13316,null,cljs.core.meta(G__13317)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__13320){
var G__13318 = (((G__13320 instanceof thi.ng.geom.vector.Vec2))?G__13320.buf:G__13320.buf);
var G__13319 = (new Float32Array(3));
(G__13319[(0)] = (G__13318[(1)]));

(G__13319[(1)] = (G__13318[(1)]));

(G__13319[(2)] = (G__13318[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13319,null,cljs.core.meta(G__13320)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__13323){
var G__13321 = (((G__13323 instanceof thi.ng.geom.vector.Vec2))?G__13323.buf:G__13323.buf);
var G__13322 = (new Float32Array(2));
(G__13322[(0)] = (G__13321[(1)]));

(G__13322[(1)] = (G__13321[(2)]));

return (new thi.ng.geom.vector.Vec2(G__13322,null,cljs.core.meta(G__13323)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__13326){
var G__13324 = (((G__13326 instanceof thi.ng.geom.vector.Vec2))?G__13326.buf:G__13326.buf);
var G__13325 = (new Float32Array(3));
(G__13325[(0)] = (G__13324[(1)]));

(G__13325[(1)] = (G__13324[(2)]));

(G__13325[(2)] = (G__13324[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13325,null,cljs.core.meta(G__13326)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__13329){
var G__13327 = (((G__13329 instanceof thi.ng.geom.vector.Vec2))?G__13329.buf:G__13329.buf);
var G__13328 = (new Float32Array(3));
(G__13328[(0)] = (G__13327[(1)]));

(G__13328[(1)] = (G__13327[(2)]));

(G__13328[(2)] = (G__13327[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13328,null,cljs.core.meta(G__13329)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__13332){
var G__13330 = (((G__13332 instanceof thi.ng.geom.vector.Vec2))?G__13332.buf:G__13332.buf);
var G__13331 = (new Float32Array(3));
(G__13331[(0)] = (G__13330[(1)]));

(G__13331[(1)] = (G__13330[(2)]));

(G__13331[(2)] = (G__13330[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13331,null,cljs.core.meta(G__13332)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__13335){
var G__13333 = (((G__13335 instanceof thi.ng.geom.vector.Vec2))?G__13335.buf:G__13335.buf);
return (G__13333[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__13338){
var G__13336 = (((G__13338 instanceof thi.ng.geom.vector.Vec2))?G__13338.buf:G__13338.buf);
var G__13337 = (new Float32Array(2));
(G__13337[(0)] = (G__13336[(2)]));

(G__13337[(1)] = (G__13336[(0)]));

return (new thi.ng.geom.vector.Vec2(G__13337,null,cljs.core.meta(G__13338)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__13341){
var G__13339 = (((G__13341 instanceof thi.ng.geom.vector.Vec2))?G__13341.buf:G__13341.buf);
var G__13340 = (new Float32Array(3));
(G__13340[(0)] = (G__13339[(2)]));

(G__13340[(1)] = (G__13339[(0)]));

(G__13340[(2)] = (G__13339[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13340,null,cljs.core.meta(G__13341)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__13344){
var G__13342 = (((G__13344 instanceof thi.ng.geom.vector.Vec2))?G__13344.buf:G__13344.buf);
var G__13343 = (new Float32Array(3));
(G__13343[(0)] = (G__13342[(2)]));

(G__13343[(1)] = (G__13342[(0)]));

(G__13343[(2)] = (G__13342[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13343,null,cljs.core.meta(G__13344)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__13347){
var G__13345 = (((G__13347 instanceof thi.ng.geom.vector.Vec2))?G__13347.buf:G__13347.buf);
var G__13346 = (new Float32Array(3));
(G__13346[(0)] = (G__13345[(2)]));

(G__13346[(1)] = (G__13345[(0)]));

(G__13346[(2)] = (G__13345[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13346,null,cljs.core.meta(G__13347)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__13350){
var G__13348 = (((G__13350 instanceof thi.ng.geom.vector.Vec2))?G__13350.buf:G__13350.buf);
var G__13349 = (new Float32Array(2));
(G__13349[(0)] = (G__13348[(2)]));

(G__13349[(1)] = (G__13348[(1)]));

return (new thi.ng.geom.vector.Vec2(G__13349,null,cljs.core.meta(G__13350)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__13353){
var G__13351 = (((G__13353 instanceof thi.ng.geom.vector.Vec2))?G__13353.buf:G__13353.buf);
var G__13352 = (new Float32Array(3));
(G__13352[(0)] = (G__13351[(2)]));

(G__13352[(1)] = (G__13351[(1)]));

(G__13352[(2)] = (G__13351[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13352,null,cljs.core.meta(G__13353)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__13356){
var G__13354 = (((G__13356 instanceof thi.ng.geom.vector.Vec2))?G__13356.buf:G__13356.buf);
var G__13355 = (new Float32Array(3));
(G__13355[(0)] = (G__13354[(2)]));

(G__13355[(1)] = (G__13354[(1)]));

(G__13355[(2)] = (G__13354[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13355,null,cljs.core.meta(G__13356)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__13359){
var G__13357 = (((G__13359 instanceof thi.ng.geom.vector.Vec2))?G__13359.buf:G__13359.buf);
var G__13358 = (new Float32Array(3));
(G__13358[(0)] = (G__13357[(2)]));

(G__13358[(1)] = (G__13357[(1)]));

(G__13358[(2)] = (G__13357[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13358,null,cljs.core.meta(G__13359)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__13362){
var G__13360 = (((G__13362 instanceof thi.ng.geom.vector.Vec2))?G__13362.buf:G__13362.buf);
var G__13361 = (new Float32Array(2));
(G__13361[(0)] = (G__13360[(2)]));

(G__13361[(1)] = (G__13360[(2)]));

return (new thi.ng.geom.vector.Vec2(G__13361,null,cljs.core.meta(G__13362)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__13365){
var G__13363 = (((G__13365 instanceof thi.ng.geom.vector.Vec2))?G__13365.buf:G__13365.buf);
var G__13364 = (new Float32Array(3));
(G__13364[(0)] = (G__13363[(2)]));

(G__13364[(1)] = (G__13363[(2)]));

(G__13364[(2)] = (G__13363[(0)]));

return (new thi.ng.geom.vector.Vec3(G__13364,null,cljs.core.meta(G__13365)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__13368){
var G__13366 = (((G__13368 instanceof thi.ng.geom.vector.Vec2))?G__13368.buf:G__13368.buf);
var G__13367 = (new Float32Array(3));
(G__13367[(0)] = (G__13366[(2)]));

(G__13367[(1)] = (G__13366[(2)]));

(G__13367[(2)] = (G__13366[(1)]));

return (new thi.ng.geom.vector.Vec3(G__13367,null,cljs.core.meta(G__13368)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__13371){
var G__13369 = (((G__13371 instanceof thi.ng.geom.vector.Vec2))?G__13371.buf:G__13371.buf);
var G__13370 = (new Float32Array(3));
(G__13370[(0)] = (G__13369[(2)]));

(G__13370[(1)] = (G__13369[(2)]));

(G__13370[(2)] = (G__13369[(2)]));

return (new thi.ng.geom.vector.Vec3(G__13370,null,cljs.core.meta(G__13371)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = ((n).length);
var temp__5802__auto__ = (function (){var and__5041__auto__ = ((1) === c);
if(and__5041__auto__){
var G__13372 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__13372) : keymap.call(null,G__13372));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var idx = temp__5802__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if((((c <= cljs.core.count(keymap))) && ((((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5802__auto____$1 = (function (){var G__13374 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__13374) : keymap.call(null,G__13374));
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
(dest[(idx | (0))] = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));

var G__14302 = (i + (1));
var G__14303 = cljs.core.next(n__$1);
i = G__14302;
n__$1 = G__14303;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__14304 = null;
var G__14304__1 = (function (a){
return a;
});
var G__14304__2 = (function (a,b){
(a[(0)] = (function (){var G__13375 = (a[(0)]);
var G__13376 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13375,G__13376) : op.call(null,G__13375,G__13376));
})());

(a[(1)] = (function (){var G__13377 = (a[(1)]);
var G__13378 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13377,G__13378) : op.call(null,G__13377,G__13378));
})());

return a;
});
G__14304 = function(a,b){
switch(arguments.length){
case 1:
return G__14304__1.call(this,a);
case 2:
return G__14304__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14304.cljs$core$IFn$_invoke$arity$1 = G__14304__1;
G__14304.cljs$core$IFn$_invoke$arity$2 = G__14304__2;
return G__14304;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__14309 = null;
var G__14309__1 = (function (a){
return a;
});
var G__14309__2 = (function (a,b){
(a[(0)] = (function (){var G__13379 = (a[(0)]);
var G__13380 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13379,G__13380) : op.call(null,G__13379,G__13380));
})());

(a[(1)] = (function (){var G__13381 = (a[(1)]);
var G__13382 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13381,G__13382) : op.call(null,G__13381,G__13382));
})());

(a[(2)] = (function (){var G__13383 = (a[(2)]);
var G__13384 = (b[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13383,G__13384) : op.call(null,G__13383,G__13384));
})());

return a;
});
G__14309 = function(a,b){
switch(arguments.length){
case 1:
return G__14309__1.call(this,a);
case 2:
return G__14309__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14309.cljs$core$IFn$_invoke$arity$1 = G__14309__1;
G__14309.cljs$core$IFn$_invoke$arity$2 = G__14309__2;
return G__14309;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var G__13386 = arguments.length;
switch (G__13386) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
}));

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
}));

(thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2);

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var G__13388 = arguments.length;
switch (G__13388) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}));

(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
}));

(thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3);

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var G__13390 = arguments.length;
switch (G__13390) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
}));

(thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3);

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var G__13392 = arguments.length;
switch (G__13392) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
}));

(thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4);

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var G__13394 = arguments.length;
switch (G__13394) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$1(null);
}));

(thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1);

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var G__13396 = arguments.length;
switch (G__13396) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$1(null);
}));

(thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$math$core$INormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=thi.ng.geom.vector.js.map
