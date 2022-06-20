goog.provide('thi.ng.geom.gl.glmesh');






/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.GLMesh = (function (vertices,fnormals,vnormals,uvs,cols,id,attribs){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.id = id;
this.attribs = attribs;
});
(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
var G__17672_17851 = (function (p1__17666_SHARP_){
return thi.ng.geom.core.transform_vector(tx,p1__17666_SHARP_);
});
var G__17673_17852 = self__.vertices;
var G__17674_17853 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17672_17851,G__17673_17852,G__17674_17853) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17672_17851,G__17673_17852,G__17674_17853));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,faces){
var self__ = this;
var ___$1 = this;
if((faces instanceof thi.ng.geom.gl.glmesh.GLMesh)){
return (thi.ng.geom.gl.glmesh.into_glmesh_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.into_glmesh_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,faces) : thi.ng.geom.gl.glmesh.into_glmesh_STAR_.call(null,___$1,faces));
} else {
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.gl.glmesh.add_face_STAR_,faces);
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__17678_17855 = (function (p1__17662_SHARP_){
return thi.ng.math.core._STAR__BANG_(p1__17662_SHARP_,s);
});
var G__17679_17856 = self__.vertices;
var G__17680_17857 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17678_17855,G__17679_17856,G__17680_17857) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17678_17855,G__17679_17856,G__17680_17857));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_17861 = ___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null);
var G__17684_17862 = (function (p1__17663_SHARP_){
return thi.ng.math.core.madd_BANG_(thi.ng.math.core.__BANG_(p1__17663_SHARP_,c_17861),s,c_17861);
});
var G__17685_17863 = self__.vertices;
var G__17686_17864 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17684_17862,G__17685_17863,G__17686_17864) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17684_17862,G__17685_17863,G__17686_17864));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),k)){
return self__.id;
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),k)){
(self__.id = v);
} else {
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);
}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (9));
var acc = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__17866 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__17867 = (i + (3));
acc = G__17866;
i = G__17867;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,f) : thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,___$1,f));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var G__17699_17869 = (function (p1__17665_SHARP_){
return thi.ng.math.core._PLUS__BANG_(p1__17665_SHARP_,t);
});
var G__17700_17870 = self__.vertices;
var G__17701_17871 = (self__.id * (9));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17699_17869,G__17700_17870,G__17701_17871) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17699_17869,G__17700_17870,G__17701_17871));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ICenter$center$arity$2(null,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ITranslate$translate$arity$2(null,thi.ng.math.core._(o,___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17708 = ((self__.vertices.length / (9)) | (0));
var G__17709 = self__.attribs;
return (thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2(G__17708,G__17709) : thi.ng.geom.gl.glmesh.gl_mesh.call(null,G__17708,G__17709));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.id = (0));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.GLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__17720){
var self__ = this;
var map__17721 = p__17720;
var map__17721__$1 = cljs.core.__destructure_map(map__17721);
var opts = map__17721__$1;
var attribs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17721__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__17722 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)]);
var G__17722__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17722,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17722);
var G__17722__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17722__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17722__$1);
var G__17722__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17722__$2,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__17722__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17722__$3,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__17722__$3;
}
})(),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (self__.id * (3));
}
})(),new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
}));

(thi.ng.geom.gl.glmesh.GLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
}));

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$type = true);

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/GLMesh");

(thi.ng.geom.gl.glmesh.GLMesh.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"thi.ng.geom.gl.glmesh/GLMesh");
}));

/**
 * Positional factory function for thi.ng.geom.gl.glmesh/GLMesh.
 */
thi.ng.geom.gl.glmesh.__GT_GLMesh = (function thi$ng$geom$gl$glmesh$__GT_GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(vertices,fnormals,vnormals,uvs,cols,id,attribs));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.IFaceAccess}
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {thi.ng.geom.core.IMutableProps}
 * @implements {thi.ng.geom.core.ICenter}
 * @implements {thi.ng.geom.gl.core.IGLConvert}
 * @implements {thi.ng.geom.core.IBounds}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.geom.core.IBoundingSphere}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {thi.ng.geom.core.IGeomContainer}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {thi.ng.geom.core.IVertexAccess}
*/
thi.ng.geom.gl.glmesh.IndexedGLMesh = (function (vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
this.vertices = vertices;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.uvs = uvs;
this.cols = cols;
this.indices = indices;
this.attribs = attribs;
this.index = index;
this.id = id;
this.fid = fid;
});
(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,tx){
var self__ = this;
var ___$1 = this;
var G__17742_17879 = (function (p1__17740_SHARP_){
return thi.ng.geom.core.transform_vector(tx,p1__17740_SHARP_);
});
var G__17743_17880 = self__.vertices;
var G__17744_17881 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17742_17879,G__17743_17880,G__17744_17881) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17742_17879,G__17743_17880,G__17744_17881));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IGeomContainer$into$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if((m instanceof thi.ng.geom.gl.glmesh.IndexedGLMesh)){
return (thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,m) : thi.ng.geom.gl.glmesh.into_iglmesh_STAR_.call(null,___$1,m));
} else {
return thi.ng.geom.utils.into_mesh(___$1,thi.ng.geom.gl.glmesh.add_face_indexed_STAR_,m);
}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__17748_17883 = (function (p1__17734_SHARP_){
return thi.ng.math.core._STAR__BANG_(p1__17734_SHARP_,s);
});
var G__17749_17884 = self__.vertices;
var G__17750_17885 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17748_17883,G__17749_17884,G__17750_17885) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17748_17883,G__17749_17884,G__17750_17885));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IScale$scale_size$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var c_17886 = ___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null);
var G__17752_17887 = (function (p1__17735_SHARP_){
return thi.ng.math.core.madd_BANG_(thi.ng.math.core.__BANG_(p1__17735_SHARP_,c_17886),s,c_17886);
});
var G__17753_17888 = self__.vertices;
var G__17754_17889 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17752_17887,G__17753_17888,G__17754_17889) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17752_17887,G__17753_17888,G__17754_17889));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$get_prop$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__17759 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__17759__$1 = (((G__17759 instanceof cljs.core.Keyword))?G__17759.fqn:null);
switch (G__17759__$1) {
case "id":
return self__.id;

break;
case "fid":
return self__.fid;

break;
case "index":
return self__.index;

break;
default:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var G__17760_17891 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__17760_17892__$1 = (((G__17760_17891 instanceof cljs.core.Keyword))?G__17760_17891.fqn:null);
switch (G__17760_17892__$1) {
case "id":
(self__.id = v);

break;
case "fid":
(self__.fid = v);

break;
case "index":
(self__.index = v);

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 = (function (_,k,f){
var self__ = this;
var ___$1 = this;
var G__17761_17894 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var G__17761_17895__$1 = (((G__17761_17894 instanceof cljs.core.Keyword))?G__17761_17894.fqn:null);
switch (G__17761_17895__$1) {
case "id":
(self__.id = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.id) : f.call(null,self__.id)));

break;
case "fid":
(self__.fid = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.fid) : f.call(null,self__.fid)));

break;
case "index":
(self__.index = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.index) : f.call(null,self__.index)));

break;
default:
thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(k);

}

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IVertexAccess$vertices$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var num = (self__.id * (3));
var acc = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var i = (0);
while(true){
if((i < num)){
var G__17902 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(new thi.ng.geom.vector.Vec3(self__.vertices.slice(i,(i + (3))),null,null)));
var G__17903 = (i + (3));
acc = G__17902;
i = G__17903;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$add_face$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return (thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2(___$1,f) : thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,___$1,f));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IFaceAccess$faces$arity$2 = (function (_,opts){
var self__ = this;
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,t){
var self__ = this;
var ___$1 = this;
var G__17766_17905 = (function (p1__17739_SHARP_){
return thi.ng.math.core._PLUS__BANG_(p1__17739_SHARP_,t);
});
var G__17767_17906 = self__.vertices;
var G__17768_17907 = (self__.id * (3));
(thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.gl.glmesh.transform_vertices.cljs$core$IFn$_invoke$arity$3(G__17766_17905,G__17767_17906,G__17768_17907) : thi.ng.geom.gl.glmesh.transform_vertices.call(null,G__17766_17905,G__17767_17906,G__17768_17907));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ICenter$center$arity$2(null,thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$center$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$ITranslate$translate$arity$2(null,thi.ng.math.core._(o,___$1.thi$ng$geom$core$ICenter$centroid$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$ICenter$centroid$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.centroid(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__17774 = ((self__.vertices.length / (9)) | (0));
var G__17775 = self__.attribs;
return (thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2(G__17774,G__17775) : thi.ng.geom.gl.glmesh.indexed_gl_mesh.call(null,G__17774,G__17775));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.id = (0));

(self__.fid = (0));

return ___$1;
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.bounding_box(cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$width$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((0),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$height$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((1),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$core$IBounds$depth$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.utils.axis_range((2),cljs.core.seq(___$1.thi$ng$geom$core$IVertexAccess$vertices$arity$1(null)));
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__17778){
var self__ = this;
var map__17779 = p__17778;
var map__17779__$1 = cljs.core.__destructure_map(map__17779);
var opts = map__17779__$1;
var attribs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17779__$1,new cljs.core.Keyword(null,"attribs","attribs",-137878093));
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (){var G__17780 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vertices,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)]);
var G__17780__$1 = (cljs.core.truth_(self__.fnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17780,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.fnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17780);
var G__17780__$2 = (cljs.core.truth_(self__.vnormals)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17780__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302),new cljs.core.Keyword(null,"normal","normal",-1519123858)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.vnormals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17780__$1);
var G__17780__$3 = (cljs.core.truth_(self__.uvs)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17780__$2,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"uv","uv",-1197749379)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.uvs,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__17780__$2);
if(cljs.core.truth_(self__.cols)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17780__$3,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attribs__$1,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),self__.cols,new cljs.core.Keyword(null,"size","size",1098693007),(4)], null));
} else {
return G__17780__$3;
}
})(),new cljs.core.Keyword(null,"indices","indices",-1218138343),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),self__.indices], null),new cljs.core.Keyword(null,"num-items","num-items",-887909266),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"num-items","num-items",-887909266),self__.fid),new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),self__.id,new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles)], null);
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"uvs","uvs",-877600659,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cols","cols",-274269768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Float32Array","js/Float32Array",319618377,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"indices","indices",422393184,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Uint16Array","js/Uint16Array",-221456844,null)], null)),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null),cljs.core.with_meta(new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"fid","fid",639980196,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$type = true);

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorStr = "thi.ng.geom.gl.glmesh/IndexedGLMesh");

(thi.ng.geom.gl.glmesh.IndexedGLMesh.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"thi.ng.geom.gl.glmesh/IndexedGLMesh");
}));

/**
 * Positional factory function for thi.ng.geom.gl.glmesh/IndexedGLMesh.
 */
thi.ng.geom.gl.glmesh.__GT_IndexedGLMesh = (function thi$ng$geom$gl$glmesh$__GT_IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(vertices,fnormals,vnormals,uvs,cols,indices,attribs,index,id,fid));
});

/**
 * Builds a fixed size mesh with given face count & attribs (a set of
 *   #{:fnorm :vnorm :uv :col}). All attributes (incl. vertices) are
 *   stored directly in typed array buffers.
 */
thi.ng.geom.gl.glmesh.gl_mesh = (function thi$ng$geom$gl$glmesh$gl_mesh(var_args){
var G__17786 = arguments.length;
switch (G__17786) {
case 1:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2(numf,null);
}));

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.GLMesh(thi.ng.typedarrays.core.float32((numf * (9))),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32((numf * (6))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32((numf * (12))):null),(0),attribs));
}));

(thi.ng.geom.gl.glmesh.gl_mesh.cljs$lang$maxFixedArity = 2);

/**
 * Builds a fixed size, indexed mesh with given face count & optional
 *   attribs (a set of #{:fnorm :vnorm :uv :col}). All attributes (incl.
 *   vertices) are stored directly in typed array buffers. Internally
 *   builds index of unique vertices (position + attribs) and re-uses
 *   indices where possible.
 */
thi.ng.geom.gl.glmesh.indexed_gl_mesh = (function thi$ng$geom$gl$glmesh$indexed_gl_mesh(var_args){
var G__17788 = arguments.length;
switch (G__17788) {
case 1:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$1 = (function (numf){
return thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2(numf,null);
}));

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$core$IFn$_invoke$arity$2 = (function (numf,attribs){
return (new thi.ng.geom.gl.glmesh.IndexedGLMesh(thi.ng.typedarrays.core.float32((numf * (9))),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)))?thi.ng.typedarrays.core.float32((numf * (9))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)))?thi.ng.typedarrays.core.float32((numf * (6))):null),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)))?thi.ng.typedarrays.core.float32((numf * (12))):null),thi.ng.typedarrays.core.uint16((numf * (3))),attribs,cljs.core.PersistentArrayMap.EMPTY,(0),(0)));
}));

(thi.ng.geom.gl.glmesh.indexed_gl_mesh.cljs$lang$maxFixedArity = 2);

thi.ng.geom.gl.glmesh.add_face_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_STAR_(m,p__17800){
var vec__17801 = p__17800;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(1),null);
var f = vec__17801;
if((cljs.core.count(verts) > (3))){
cljs.core.run_BANG_((function (p1__17797_SHARP_){
return (thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_STAR_.cljs$core$IFn$_invoke$arity$2(m,p1__17797_SHARP_) : thi.ng.geom.gl.glmesh.add_face_STAR_.call(null,m,p1__17797_SHARP_));
}),thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first)(f));
} else {
var vertices_17918 = m.vertices;
var fnormals_17919 = m.fnormals;
var vnormals_17920 = m.vnormals;
var uvs_17921 = m.uvs;
var cols_17922 = m.cols;
var id_17923 = m.id;
var idv_17924 = (id_17923 * (9));
var iduv_17925 = (id_17923 * (6));
var idcol_17926 = (id_17923 * (12));
vertices_17918.set(cljs.core.first(verts).buf,idv_17924);

vertices_17918.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(1)).buf,(idv_17924 + (3)));

vertices_17918.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(2)).buf,(idv_17924 + (6)));

if(cljs.core.truth_(fnormals_17919)){
var n_17927 = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(verts);
}
})();
var nb_17928 = n_17927.buf;
fnormals_17919.set(nb_17928,idv_17924);

fnormals_17919.set(nb_17928,(idv_17924 + (3)));

fnormals_17919.set(nb_17928,(idv_17924 + (6)));
} else {
}

var temp__5804__auto___17929 = (cljs.core.truth_(vnormals_17920)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"vnorm","vnorm",327368302)):null);
if(cljs.core.truth_(temp__5804__auto___17929)){
var vn_17930 = temp__5804__auto___17929;
vnormals_17920.set(cljs.core.first(vn_17930).buf,idv_17924);

vnormals_17920.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vn_17930,(1)).buf,(idv_17924 + (3)));

vnormals_17920.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vn_17930,(2)).buf,(idv_17924 + (6)));
} else {
}

var temp__5804__auto___17931 = (cljs.core.truth_(uvs_17921)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"uv","uv",-1197749379)):null);
if(cljs.core.truth_(temp__5804__auto___17931)){
var uv_17932 = temp__5804__auto___17931;
uvs_17921.set(cljs.core.first(uv_17932).buf,iduv_17925);

uvs_17921.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uv_17932,(1)).buf,(iduv_17925 + (2)));

uvs_17921.set(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(uv_17932,(2)).buf,(iduv_17925 + (4)));
} else {
}

var temp__5804__auto___17933 = (cljs.core.truth_(cols_17922)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"col","col",-1959363084)):null);
if(cljs.core.truth_(temp__5804__auto___17933)){
var col_17934 = temp__5804__auto___17933;
thi.ng.dstruct.streams.into_float_buffer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_17934,(2)),cols_17922,(4),thi.ng.dstruct.streams.into_float_buffer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_17934,(1)),cols_17922,(4),thi.ng.dstruct.streams.into_float_buffer(cljs.core.first(col_17934),cols_17922,(4),idcol_17926)));
} else {
}

(m.id = (id_17923 + (1)));
}

return m;
});
thi.ng.geom.gl.glmesh.index_vertex_STAR_ = (function thi$ng$geom$gl$glmesh$index_vertex_STAR_(m,va,vertices,fnormals,vnormals,cols,uvs){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m.thi$ng$geom$core$IMutableProps$get_prop$arity$2(null,new cljs.core.Keyword(null,"index","index",-1531685915)),va);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var index = m.index;
var id = m.id;
var idv = (id * (3));
var vec__17809 = va;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(0),null);
var fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(1),null);
var vn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(3),null);
var uv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17809,(4),null);
vertices.set(v.buf,idv);

if(cljs.core.truth_((cljs.core.truth_(fnormals)?fn:null))){
fnormals.set(fn.buf,idv);
} else {
if(cljs.core.truth_((cljs.core.truth_(vnormals)?vn:null))){
vnormals.set(vn.buf,idv);
} else {
}
}

if(cljs.core.truth_((cljs.core.truth_(cols)?col:null))){
thi.ng.dstruct.streams.into_float_buffer(col,cols,(4),(id * (4)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(uvs)?uv:null))){
uvs.set(uv.buf,(id * (2)));
} else {
}

(m.index = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,va,id));

(m.id = (id + (1)));

return id;
}
});
thi.ng.geom.gl.glmesh.add_face_indexed_STAR_ = (function thi$ng$geom$gl$glmesh$add_face_indexed_STAR_(m,p__17815){
var vec__17817 = p__17815;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17817,(1),null);
var f = vec__17817;
if((cljs.core.count(verts) > (3))){
cljs.core.run_BANG_((function (p1__17814_SHARP_){
return (thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.cljs$core$IFn$_invoke$arity$2(m,p1__17814_SHARP_) : thi.ng.geom.gl.glmesh.add_face_indexed_STAR_.call(null,m,p1__17814_SHARP_));
}),thi.ng.geom.utils.tessellate_face(thi.ng.geom.utils.tessellate_with_first)(f));
} else {
var vertices_17937 = m.vertices;
var fnormals_17938 = m.fnormals;
var vnormals_17939 = m.vnormals;
var uvs_17940 = m.uvs;
var cols_17941 = m.cols;
var indices_17942 = m.indices;
var fid_17943 = m.fid;
var map__17821_17944 = attribs;
var map__17821_17945__$1 = cljs.core.__destructure_map(map__17821_17944);
var vnorm_17946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821_17945__$1,new cljs.core.Keyword(null,"vnorm","vnorm",327368302));
var uv_17947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821_17945__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var col_17948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17821_17945__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var fnorm_17949 = (cljs.core.truth_(fnormals_17938)?(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"fnorm","fnorm",1433045408));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(verts);
}
})():null);
(indices_17942[fid_17943] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(0)),fnorm_17949,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_17946,(0),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_17948,(0),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_17947,(0),null)], null),vertices_17937,fnormals_17938,vnormals_17939,cols_17941,uvs_17940));

(indices_17942[(fid_17943 + (1))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(1)),fnorm_17949,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_17946,(1),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_17948,(1),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_17947,(1),null)], null),vertices_17937,fnormals_17938,vnormals_17939,cols_17941,uvs_17940));

(indices_17942[(fid_17943 + (2))] = thi.ng.geom.gl.glmesh.index_vertex_STAR_(m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(verts,(2)),fnorm_17949,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vnorm_17946,(2),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(col_17948,(2),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(uv_17947,(2),null)], null),vertices_17937,fnormals_17938,vnormals_17939,cols_17941,uvs_17940));

(m.fid = (fid_17943 + (3)));
}

return m;
});
thi.ng.geom.gl.glmesh.transform_vertices = (function thi$ng$geom$gl$glmesh$transform_vertices(f,buf,num){
var tv = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((0));
var tb = tv.buf;
var i = (0);
while(true){
if((i < num)){
tb.set(buf.slice(i,(i + (3))),(0));

buf.set((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tv) : f.call(null,tv)).buf,i);

var G__17951 = (i + (3));
i = G__17951;
continue;
} else {
return null;
}
break;
}
});
thi.ng.geom.gl.glmesh.into_glmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_glmesh_STAR_(dest,src){
var map__17828 = src;
var map__17828__$1 = cljs.core.__destructure_map(map__17828);
var sverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var sfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var svn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var scol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var suv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__17829 = dest;
var map__17829__$1 = cljs.core.__destructure_map(map__17829);
var dverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dvn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var duv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var did = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17829__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sidv = (sid * (9));
var didv = (did * (9));
dverts.set(sverts.slice((0),sidv),didv);

if(cljs.core.truth_((cljs.core.truth_(dfn)?sfn:null))){
dfn.set(sfn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dvn)?svn:null))){
dvn.set(svn.slice((0),sidv),didv);
} else {
}

if(cljs.core.truth_((cljs.core.truth_(dcol)?scol:null))){
dcol.set(scol.slice((0),(sid * (12))),(did * (12)));
} else {
}

if(cljs.core.truth_((cljs.core.truth_(duv)?suv:null))){
duv.set(suv.slice((0),(sid * (6))),(did * (6)));
} else {
}

(dest.id = (did + sid));

return dest;
});
thi.ng.geom.gl.glmesh.build_rindex = (function thi$ng$geom$gl$glmesh$build_rindex(dindex,sindex,start){
return cljs.core.reduce_kv((function (p__17834,v,id){
var vec__17835 = p__17834;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835,(0),null);
var nid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835,(1),null);
var s = vec__17835;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dindex,v))){
return s;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(idx,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nid,v], null)),(nid + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),start], null),sindex);
});
thi.ng.geom.gl.glmesh.merge_index = (function thi$ng$geom$gl$glmesh$merge_index(dindex,rindex){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(dindex,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (kv){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(cljs.core.val(kv)),cljs.core.key(kv)], null);
})),rindex);
});
thi.ng.geom.gl.glmesh.into_iglmesh_STAR_ = (function thi$ng$geom$gl$glmesh$into_iglmesh_STAR_(dest,src){
var map__17842 = src;
var map__17842__$1 = cljs.core.__destructure_map(map__17842);
var suv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sfid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var sfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var sidx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var svn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var sindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var sverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17842__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var map__17843 = dest;
var map__17843__$1 = cljs.core.__destructure_map(map__17843);
var didx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var dverts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"vertices","vertices",2008905731));
var dfid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"fid","fid",-1000551331));
var dvn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var dindex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var dfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563));
var dcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var did = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var duv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17843__$1,new cljs.core.Keyword(null,"uvs","uvs",1776835110));
var vec__17844 = thi.ng.geom.gl.glmesh.build_rindex(dindex,sindex,did);
var rindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17844,(0),null);
var did_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17844,(1),null);
var dindex__$1 = thi.ng.geom.gl.glmesh.merge_index(dindex,cljs.core.persistent_BANG_(rindex));
var sidv = sfid;
var fn_QMARK_ = (cljs.core.truth_(dfn)?sfn:null);
var vn_QMARK_ = (cljs.core.truth_(dvn)?svn:null);
var col_QMARK_ = (cljs.core.truth_(dcol)?scol:null);
var uv_QMARK_ = (cljs.core.truth_(duv)?suv:null);
var i_17953 = (0);
while(true){
if((i_17953 < sidv)){
var temp__5802__auto___17954 = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rindex,(sidx[i_17953])));
if(cljs.core.truth_(temp__5802__auto___17954)){
var nid_17955 = temp__5802__auto___17954;
var sid_17956__$1 = (sidx[i_17953]);
var sidv_17957__$1 = (sid_17956__$1 * (3));
var didv_17958 = (nid_17955 * (3));
var sidcol_17959 = (sid_17956__$1 * (4));
var siduv_17960 = (sid_17956__$1 * (2));
(didx[(dfid + i_17953)] = nid_17955);

dverts.set(sverts.slice(sidv_17957__$1,(sidv_17957__$1 + (3))),didv_17958);

if(cljs.core.truth_(fn_QMARK_)){
dfn.set(sfn.slice(sidv_17957__$1,(sidv_17957__$1 + (3))),didv_17958);
} else {
}

if(cljs.core.truth_(vn_QMARK_)){
dvn.set(svn.slice(sidv_17957__$1,(sidv_17957__$1 + (3))),didv_17958);
} else {
}

if(cljs.core.truth_(col_QMARK_)){
dcol.set(scol.slice(sidcol_17959,(sidcol_17959 + (4))),(nid_17955 * (4)));
} else {
}

if(cljs.core.truth_(uv_QMARK_)){
duv.set(suv.slice(siduv_17960,(siduv_17960 + (2))),(nid_17955 * (2)));
} else {
}
} else {
(didx[(dfid + i_17953)] = (sidx[i_17953]));
}

var G__17961 = (i_17953 + (1));
i_17953 = G__17961;
continue;
} else {
}
break;
}

(dest.index = dindex__$1);

(dest.id = did_SINGLEQUOTE_);

(dest.fid = (dfid + sfid));

return dest;
});

//# sourceMappingURL=thi.ng.geom.gl.glmesh.js.map
