goog.provide('thi.ng.geom.gl.buffers');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {thi.ng.geom.gl.core.IConfigure}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.Texture2D = (function (gl,id,target,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.target = target;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$gl$core$IBind$bind$arity$2(null,(0));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
self__.gl.activeTexture((thi.ng.geom.gl.webgl.constants.texture0 + unit));

self__.gl.bindTexture(self__.target,self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$gl$core$IBind$unbind$arity$2(null,(0));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$2 = (function (_,unit){
var self__ = this;
var ___$1 = this;
self__.gl.activeTexture((thi.ng.geom.gl.webgl.constants.texture0 + unit));

self__.gl.bindTexture(self__.target,null);

return ___$1;
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17658,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17681 = k17658;
var G__17681__$1 = (((G__17681 instanceof cljs.core.Keyword))?G__17681.fqn:null);
switch (G__17681__$1) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
case "target":
return self__.target;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17658,else__5343__auto__);

}
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteTexture(self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17688){
var vec__17689 = p__17688;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17689,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#thi.ng.geom.gl.buffers.Texture2D{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",253001721),self__.target],null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17657){
var self__ = this;
var G__17657__$1 = this;
return (new cljs.core.RecordIter((0),G__17657__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (407094657 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17659,other17660){
var self__ = this;
var this17659__$1 = this;
return (((!((other17660 == null)))) && ((((this17659__$1.constructor === other17660.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17659__$1.gl,other17660.gl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17659__$1.id,other17660.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17659__$1.target,other17660.target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17659__$1.__extmap,other17660.__extmap)))))))))));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.Texture2D.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__17706){
var self__ = this;
var map__17707 = p__17706;
var map__17707__$1 = cljs.core.__destructure_map(map__17707);
var config = map__17707__$1;
var pixels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"pixels","pixels",-40523077));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17707__$1,new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgb);
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var flip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17707__$1,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var premultiply = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"premultiply","premultiply",1801768564));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var ___$1 = this;
if(cljs.core.truth_(filter)){
var vec__17710_17873 = ((cljs.core.sequential_QMARK_(filter))?filter:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter,filter], null));
var min_17874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710_17873,(0),null);
var mag_17875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710_17873,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_min_filter,min_17874);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_mag_filter,mag_17875);
} else {
}

if(cljs.core.truth_(wrap)){
var vec__17713_17876 = ((cljs.core.sequential_QMARK_(wrap))?wrap:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,wrap], null));
var ws_17877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17713_17876,(0),null);
var wt_17878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17713_17876,(1),null);
self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_s,ws_17877);

self__.gl.texParameteri(self__.target,thi.ng.geom.gl.webgl.constants.texture_wrap_t,wt_17878);
} else {
}

if((!((flip == null)))){
self__.gl.pixelStorei(thi.ng.geom.gl.webgl.constants.unpack_flip_y_webgl,flip);
} else {
}

if((!((premultiply == null)))){
self__.gl.pixelStorei(thi.ng.geom.gl.webgl.constants.unpack_premultiply_alpha_webgl,premultiply);
} else {
}

if(cljs.core.truth_(image)){
self__.gl.texImage2D(self__.target,(0),format,format,type,image);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = width;
if(cljs.core.truth_(and__5041__auto__)){
return height;
} else {
return and__5041__auto__;
}
})())){
self__.gl.texImage2D(self__.target,(0),format,width,height,(0),format,type,pixels);
} else {
}
}

return ___$1;
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"target","target",253001721),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17658){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17723 = k17658;
var G__17723__$1 = (((G__17723 instanceof cljs.core.Keyword))?G__17723.fqn:null);
switch (G__17723__$1) {
case "gl":
case "id":
case "target":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17658);

}
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17657){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17725 = cljs.core.keyword_identical_QMARK_;
var expr__17726 = k__5349__auto__;
if(cljs.core.truth_((pred__17725.cljs$core$IFn$_invoke$arity$2 ? pred__17725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17726) : pred__17725.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17726)))){
return (new thi.ng.geom.gl.buffers.Texture2D(G__17657,self__.id,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17725.cljs$core$IFn$_invoke$arity$2 ? pred__17725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__17726) : pred__17725.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__17726)))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,G__17657,self__.target,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17725.cljs$core$IFn$_invoke$arity$2 ? pred__17725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),expr__17726) : pred__17725.call(null,new cljs.core.Keyword(null,"target","target",253001721),expr__17726)))){
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,G__17657,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17657),null));
}
}
}
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"target","target",253001721),self__.target,null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17657){
var self__ = this;
var this__5339__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.Texture2D(self__.gl,self__.id,self__.target,G__17657,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.Texture2D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(thi.ng.geom.gl.buffers.Texture2D.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"target","target",1893533248,null)], null);
}));

(thi.ng.geom.gl.buffers.Texture2D.cljs$lang$type = true);

(thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"thi.ng.geom.gl.buffers/Texture2D",null,(1),null));
}));

(thi.ng.geom.gl.buffers.Texture2D.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"thi.ng.geom.gl.buffers/Texture2D");
}));

/**
 * Positional factory function for thi.ng.geom.gl.buffers/Texture2D.
 */
thi.ng.geom.gl.buffers.__GT_Texture2D = (function thi$ng$geom$gl$buffers$__GT_Texture2D(gl,id,target){
return (new thi.ng.geom.gl.buffers.Texture2D(gl,id,target,null,null,null));
});

/**
 * Factory function for thi.ng.geom.gl.buffers/Texture2D, taking a map of keywords to field values.
 */
thi.ng.geom.gl.buffers.map__GT_Texture2D = (function thi$ng$geom$gl$buffers$map__GT_Texture2D(G__17664){
var extmap__5382__auto__ = (function (){var G__17741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17664,new cljs.core.Keyword(null,"gl","gl",-246422634),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"target","target",253001721)], 0));
if(cljs.core.record_QMARK_(G__17664)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17741);
} else {
return G__17741;
}
})();
return (new thi.ng.geom.gl.buffers.Texture2D(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__17664),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__17664),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(G__17664),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

thi.ng.geom.gl.buffers.make_texture = (function thi$ng$geom$gl$buffers$make_texture(gl,opts){
var tex = (new thi.ng.geom.gl.buffers.Texture2D(gl,gl.createTexture(),(opts.cljs$core$IFn$_invoke$arity$2 ? opts.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.texture_2d) : opts.call(null,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.texture_2d)),null,null,null));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgba,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.unsigned_byte], null),opts], 0));
tex.thi$ng$geom$gl$core$IBind$bind$arity$1(null);

return tex.thi$ng$geom$gl$core$IConfigure$configure$arity$2(null,opts__$1);
});
thi.ng.geom.gl.buffers.make_canvas_texture = (function thi$ng$geom$gl$buffers$make_canvas_texture(var_args){
var G__17755 = arguments.length;
switch (G__17755) {
case 2:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$2 = (function (gl,canvas){
return thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3(gl,canvas,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.gl.buffers.make_canvas_texture.cljs$core$IFn$_invoke$arity$3 = (function (gl,canvas,opts){
return thi.ng.geom.gl.buffers.make_texture(gl,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"image","image",-58725096),canvas,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.linear,thi.ng.geom.gl.webgl.constants.linear], null),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.clamp_to_edge,thi.ng.geom.gl.webgl.constants.clamp_to_edge], null),new cljs.core.Keyword(null,"flip","flip",2033871302),false,new cljs.core.Keyword(null,"premultiply","premultiply",1801768564),true], null),opts], 0)));
}));

(thi.ng.geom.gl.buffers.make_canvas_texture.cljs$lang$maxFixedArity = 3);

thi.ng.geom.gl.buffers.load_texture = (function thi$ng$geom$gl$buffers$load_texture(gl,opts){
var tex = thi.ng.geom.gl.buffers.make_texture(gl,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.rgba,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.linear,thi.ng.geom.gl.webgl.constants.linear], null),new cljs.core.Keyword(null,"wrap","wrap",851669987),thi.ng.geom.gl.webgl.constants.clamp_to_edge], null),opts], 0)));
var img = (new Image());
(img.onload = (function (){
var G__17762_17904 = tex;
thi.ng.geom.gl.core.bind(G__17762_17904);

thi.ng.geom.gl.core.configure(G__17762_17904,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flip","flip",2033871302),false,new cljs.core.Keyword(null,"image","image",-58725096),img], null),opts], 0)));


var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"callback","callback",-705136228));
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
return (cb.cljs$core$IFn$_invoke$arity$2 ? cb.cljs$core$IFn$_invoke$arity$2(tex,img) : cb.call(null,tex,img));
} else {
return null;
}
}));

var temp__5804__auto___17908 = new cljs.core.Keyword(null,"error-callback","error-callback",-695698903).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___17908)){
var ecb_17909 = temp__5804__auto___17908;
(img.onerror = ecb_17909);
} else {
}

var temp__5804__auto___17910 = new cljs.core.Keyword(null,"cors","cors",1066181665).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto___17910)){
var cors_17911 = temp__5804__auto___17910;
(img.crossOrigin = cors_17911);
} else {
}

(img.src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"src","src",-1651076051)));

return tex;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {thi.ng.geom.gl.core.IConfigure}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.RenderBuffer = (function (gl,id,format,width,height,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.format = format;
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindRenderbuffer(thi.ng.geom.gl.webgl.constants.renderbuffer,self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindRenderbuffer(thi.ng.geom.gl.webgl.constants.renderbuffer,null);

return ___$1;
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17770,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17777 = k17770;
var G__17777__$1 = (((G__17777 instanceof cljs.core.Keyword))?G__17777.fqn:null);
switch (G__17777__$1) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
case "format":
return self__.format;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17770,else__5343__auto__);

}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteRenderbuffer(self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17781){
var vec__17782 = p__17781;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17782,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#thi.ng.geom.gl.buffers.RenderBuffer{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",-1306924766),self__.format],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17769){
var self__ = this;
var G__17769__$1 = this;
return (new cljs.core.RecordIter((0),G__17769__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1359784393 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17771,other17772){
var self__ = this;
var this17771__$1 = this;
return (((!((other17772 == null)))) && ((((this17771__$1.constructor === other17772.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.gl,other17772.gl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.id,other17772.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.format,other17772.format)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.width,other17772.width)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.height,other17772.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17771__$1.__extmap,other17772.__extmap)))))))))))))));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.thi$ng$geom$gl$core$IConfigure$configure$arity$2 = (function (_,p__17798){
var self__ = this;
var map__17799 = p__17798;
var map__17799__$1 = cljs.core.__destructure_map(map__17799);
var format__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17799__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17799__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17799__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var ___$1 = this;
___$1.thi$ng$geom$gl$core$IBind$bind$arity$1(null);

self__.gl.renderbufferStorage(thi.ng.geom.gl.webgl.constants.renderbuffer,format__$1,width__$1,height__$1);

___$1.thi$ng$geom$gl$core$IBind$unbind$arity$1(null);

return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,format__$1,width__$1,height__$1,null,null,null));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",-1306924766),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17770){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17804 = k17770;
var G__17804__$1 = (((G__17804 instanceof cljs.core.Keyword))?G__17804.fqn:null);
switch (G__17804__$1) {
case "gl":
case "id":
case "format":
case "width":
case "height":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17770);

}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17769){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17805 = cljs.core.keyword_identical_QMARK_;
var expr__17806 = k__5349__auto__;
if(cljs.core.truth_((pred__17805.cljs$core$IFn$_invoke$arity$2 ? pred__17805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17806) : pred__17805.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17806)))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(G__17769,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17805.cljs$core$IFn$_invoke$arity$2 ? pred__17805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__17806) : pred__17805.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__17806)))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,G__17769,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17805.cljs$core$IFn$_invoke$arity$2 ? pred__17805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"format","format",-1306924766),expr__17806) : pred__17805.call(null,new cljs.core.Keyword(null,"format","format",-1306924766),expr__17806)))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,G__17769,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17805.cljs$core$IFn$_invoke$arity$2 ? pred__17805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__17806) : pred__17805.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__17806)))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,G__17769,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17805.cljs$core$IFn$_invoke$arity$2 ? pred__17805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622),expr__17806) : pred__17805.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__17806)))){
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,G__17769,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17769),null));
}
}
}
}
}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"format","format",-1306924766),self__.format,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17769){
var self__ = this;
var this__5339__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,G__17769,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(thi.ng.geom.gl.buffers.RenderBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"format","format",333606761,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
}));

(thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$type = true);

(thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"thi.ng.geom.gl.buffers/RenderBuffer",null,(1),null));
}));

(thi.ng.geom.gl.buffers.RenderBuffer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"thi.ng.geom.gl.buffers/RenderBuffer");
}));

/**
 * Positional factory function for thi.ng.geom.gl.buffers/RenderBuffer.
 */
thi.ng.geom.gl.buffers.__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$__GT_RenderBuffer(gl,id,format,width,height){
return (new thi.ng.geom.gl.buffers.RenderBuffer(gl,id,format,width,height,null,null,null));
});

/**
 * Factory function for thi.ng.geom.gl.buffers/RenderBuffer, taking a map of keywords to field values.
 */
thi.ng.geom.gl.buffers.map__GT_RenderBuffer = (function thi$ng$geom$gl$buffers$map__GT_RenderBuffer(G__17773){
var extmap__5382__auto__ = (function (){var G__17808 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17773,new cljs.core.Keyword(null,"gl","gl",-246422634),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], 0));
if(cljs.core.record_QMARK_(G__17773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17808);
} else {
return G__17808;
}
})();
return (new thi.ng.geom.gl.buffers.RenderBuffer(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__17773),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__17773),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(G__17773),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__17773),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__17773),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

thi.ng.geom.gl.buffers.make_render_buffer = (function thi$ng$geom$gl$buffers$make_render_buffer(var_args){
var G__17813 = arguments.length;
switch (G__17813) {
case 1:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$1 = (function (gl){
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2(gl,null);
}));

(thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,opts){
var buf = (new thi.ng.geom.gl.buffers.RenderBuffer(gl,gl.createRenderbuffer(),null,null,null,null,null,null));
if(cljs.core.truth_(opts)){
return buf.thi$ng$geom$gl$core$IConfigure$configure$arity$2(null,opts);
} else {
return buf;
}
}));

(thi.ng.geom.gl.buffers.make_render_buffer.cljs$lang$maxFixedArity = 2);

thi.ng.geom.gl.buffers.make_depth_buffer = (function thi$ng$geom$gl$buffers$make_depth_buffer(var_args){
var G__17820 = arguments.length;
switch (G__17820) {
case 2:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,size){
return thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3(gl,size,size);
}));

(thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,width,height){
return thi.ng.geom.gl.buffers.make_render_buffer.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),thi.ng.geom.gl.webgl.constants.depth_component16,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
}));

(thi.ng.geom.gl.buffers.make_depth_buffer.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.gl.core.IRelease}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.gl.core.IFramebuffer}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.geom.gl.core.IBind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.gl.buffers.FBO = (function (gl,id,__meta,__extmap,__hash){
this.gl = gl;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$bind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindFramebuffer(thi.ng.geom.gl.webgl.constants.framebuffer,self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$bind$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IBind$unbind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.bindFramebuffer(thi.ng.geom.gl.webgl.constants.framebuffer,null);

return ___$1;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k17823,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__17827 = k17823;
var G__17827__$1 = (((G__17827 instanceof cljs.core.Keyword))?G__17827.fqn:null);
switch (G__17827__$1) {
case "gl":
return self__.gl;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17823,else__5343__auto__);

}
}));

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IRelease$release$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
self__.gl.deleteFramebuffer(self__.id);

return ___$1;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__17830){
var vec__17831 = p__17830;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17831,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17831,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#thi.ng.geom.gl.buffers.FBO{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17822){
var self__ = this;
var G__17822__$1 = this;
return (new cljs.core.RecordIter((0),G__17822__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gl","gl",-246422634),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 = (function (_,p__17838){
var self__ = this;
var map__17839 = p__17838;
var map__17839__$1 = cljs.core.__destructure_map(map__17839);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferTexture2D(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.color_attachment0,thi.ng.geom.gl.webgl.constants.texture_2d,id__$1,(0));

(thi.ng.geom.gl.buffers.check_fbo.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.gl.buffers.check_fbo.cljs$core$IFn$_invoke$arity$1(self__.gl) : thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl));

return ___$1;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 = (function (_,p__17840){
var self__ = this;
var map__17841 = p__17840;
var map__17841__$1 = cljs.core.__destructure_map(map__17841);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17841__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
self__.gl.framebufferRenderbuffer(thi.ng.geom.gl.webgl.constants.framebuffer,thi.ng.geom.gl.webgl.constants.depth_attachment,thi.ng.geom.gl.webgl.constants.renderbuffer,id__$1);

(thi.ng.geom.gl.buffers.check_fbo.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.gl.buffers.check_fbo.cljs$core$IFn$_invoke$arity$1(self__.gl) : thi.ng.geom.gl.buffers.check_fbo.call(null,self__.gl));

return ___$1;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-589237252 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17824,other17825){
var self__ = this;
var this17824__$1 = this;
return (((!((other17825 == null)))) && ((((this17824__$1.constructor === other17825.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17824__$1.gl,other17825.gl)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17824__$1.id,other17825.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17824__$1.__extmap,other17825.__extmap)))))))));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gl","gl",-246422634),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k17823){
var self__ = this;
var this__5347__auto____$1 = this;
var G__17847 = k17823;
var G__17847__$1 = (((G__17847 instanceof cljs.core.Keyword))?G__17847.fqn:null);
switch (G__17847__$1) {
case "gl":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17823);

}
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__17822){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__17848 = cljs.core.keyword_identical_QMARK_;
var expr__17849 = k__5349__auto__;
if(cljs.core.truth_((pred__17848.cljs$core$IFn$_invoke$arity$2 ? pred__17848.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17849) : pred__17848.call(null,new cljs.core.Keyword(null,"gl","gl",-246422634),expr__17849)))){
return (new thi.ng.geom.gl.buffers.FBO(G__17822,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17848.cljs$core$IFn$_invoke$arity$2 ? pred__17848.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__17849) : pred__17848.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__17849)))){
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,G__17822,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__17822),null));
}
}
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gl","gl",-246422634),self__.gl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__17822){
var self__ = this;
var this__5339__auto____$1 = this;
return (new thi.ng.geom.gl.buffers.FBO(self__.gl,self__.id,G__17822,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.gl.buffers.FBO.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(thi.ng.geom.gl.buffers.FBO.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"gl","gl",1394108893,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"WebGLRenderingContext","WebGLRenderingContext",1513915178,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(thi.ng.geom.gl.buffers.FBO.cljs$lang$type = true);

(thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"thi.ng.geom.gl.buffers/FBO",null,(1),null));
}));

(thi.ng.geom.gl.buffers.FBO.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"thi.ng.geom.gl.buffers/FBO");
}));

/**
 * Positional factory function for thi.ng.geom.gl.buffers/FBO.
 */
thi.ng.geom.gl.buffers.__GT_FBO = (function thi$ng$geom$gl$buffers$__GT_FBO(gl,id){
return (new thi.ng.geom.gl.buffers.FBO(gl,id,null,null,null));
});

/**
 * Factory function for thi.ng.geom.gl.buffers/FBO, taking a map of keywords to field values.
 */
thi.ng.geom.gl.buffers.map__GT_FBO = (function thi$ng$geom$gl$buffers$map__GT_FBO(G__17826){
var extmap__5382__auto__ = (function (){var G__17854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17826,new cljs.core.Keyword(null,"gl","gl",-246422634),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__17826)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17854);
} else {
return G__17854;
}
})();
return (new thi.ng.geom.gl.buffers.FBO(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(G__17826),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__17826),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

thi.ng.geom.gl.buffers.check_fbo = (function thi$ng$geom$gl$buffers$check_fbo(gl){
var pred__17858 = cljs.core._EQ__EQ_;
var expr__17859 = gl.checkFramebufferStatus(thi.ng.geom.gl.webgl.constants.framebuffer);
if(cljs.core.truth_((pred__17858.cljs$core$IFn$_invoke$arity$2 ? pred__17858.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.framebuffer_unsupported,expr__17859) : pred__17858.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_unsupported,expr__17859)))){
return thi.ng.xerror.core.throw_BANG_("FBO unsupported");
} else {
if(cljs.core.truth_((pred__17858.cljs$core$IFn$_invoke$arity$2 ? pred__17858.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_attachment,expr__17859) : pred__17858.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_attachment,expr__17859)))){
return thi.ng.xerror.core.throw_BANG_("FBO incomplete attachment");
} else {
if(cljs.core.truth_((pred__17858.cljs$core$IFn$_invoke$arity$2 ? pred__17858.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_dimensions,expr__17859) : pred__17858.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_dimensions,expr__17859)))){
return thi.ng.xerror.core.throw_BANG_("FBO incomplete dimensions");
} else {
if(cljs.core.truth_((pred__17858.cljs$core$IFn$_invoke$arity$2 ? pred__17858.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_missing_attachment,expr__17859) : pred__17858.call(null,thi.ng.geom.gl.webgl.constants.framebuffer_incomplete_missing_attachment,expr__17859)))){
return thi.ng.xerror.core.throw_BANG_("FBO incomplete missing attachment");
} else {
return gl;
}
}
}
}
});
thi.ng.geom.gl.buffers.make_fbo = (function thi$ng$geom$gl$buffers$make_fbo(gl){
return (new thi.ng.geom.gl.buffers.FBO(gl,gl.createFramebuffer(),null,null,null));
});
thi.ng.geom.gl.buffers.make_fbo_with_attachments = (function thi$ng$geom$gl$buffers$make_fbo_with_attachments(gl,p__17865){
var map__17868 = p__17865;
var map__17868__$1 = cljs.core.__destructure_map(map__17868);
var tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17868__$1,new cljs.core.Keyword(null,"depth?","depth?",1481823261));
var fbo = thi.ng.geom.gl.buffers.make_fbo(gl);
fbo.thi$ng$geom$gl$core$IBind$bind$arity$1(null);

fbo.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2(null,tex);

if(cljs.core.truth_(depth_QMARK_)){
fbo.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2(null,thi.ng.geom.gl.buffers.make_depth_buffer.cljs$core$IFn$_invoke$arity$3(gl,width,height));
} else {
}

return fbo.thi$ng$geom$gl$core$IBind$unbind$arity$1(null);
});

//# sourceMappingURL=thi.ng.geom.gl.buffers.js.map
