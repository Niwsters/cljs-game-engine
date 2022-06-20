goog.provide('thi.ng.geom.gl.shaders.basic');
thi.ng.geom.gl.shaders.basic.make_shader_spec = (function thi$ng$geom$gl$shaders$basic$make_shader_spec(var_args){
var G__16012 = arguments.length;
switch (G__16012) {
case 0:
return thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$1(null);
}));

(thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$1 = (function (p__16013){
var map__16015 = p__16013;
var map__16015__$1 = cljs.core.__destructure_map(map__16015);
var attr_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16015__$1,new cljs.core.Keyword(null,"color-attrib?","color-attrib?",1764513819));
var is3d_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16015__$1,new cljs.core.Keyword(null,"3d","3d",-1024035737),true);
var spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vs","vs",-2022097090),["void main(){",(cljs.core.truth_(attr_QMARK_)?"vCol=color;":null),"gl_Position=proj*",(cljs.core.truth_(is3d_QMARK_)?"view*model*vec4(position,1.0)":"view*model*vec4(position,0.0,1.0)"),";}"].join(''),new cljs.core.Keyword(null,"fs","fs",-2122926244),["void main(){gl_FragColor=",(cljs.core.truth_(attr_QMARK_)?"vCol":"color"),";}"].join(''),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"proj","proj",1560823673),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mat4","mat4",-237531594),thi.ng.geom.matrix.M44], null),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mat4","mat4",-237531594),thi.ng.geom.matrix.M44], null)], null),new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(is3d_QMARK_)?new cljs.core.Keyword(null,"vec3","vec3",1116680488):new cljs.core.Keyword(null,"vec2","vec2",-762258640))], null)], null);
var spec__$1 = (cljs.core.truth_(attr_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"vec4","vec4",631182126)),new cljs.core.Keyword(null,"varying","varying",685535123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vCol","vCol",-1213581462),new cljs.core.Keyword(null,"vec4","vec4",631182126)], null)):cljs.core.assoc_in(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.Keyword(null,"vec4","vec4",631182126)));
return spec__$1;
}));

(thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$lang$maxFixedArity = 1);

thi.ng.geom.gl.shaders.basic.make_shader_spec_2d = (function thi$ng$geom$gl$shaders$basic$make_shader_spec_2d(color_attrib_QMARK_){
return thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color-attrib?","color-attrib?",1764513819),color_attrib_QMARK_,new cljs.core.Keyword(null,"3d","3d",-1024035737),false], null));
});
thi.ng.geom.gl.shaders.basic.make_shader_spec_3d = (function thi$ng$geom$gl$shaders$basic$make_shader_spec_3d(color_attrib_QMARK_){
return thi.ng.geom.gl.shaders.basic.make_shader_spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color-attrib?","color-attrib?",1764513819),color_attrib_QMARK_,new cljs.core.Keyword(null,"3d","3d",-1024035737),true], null));
});

//# sourceMappingURL=thi.ng.geom.gl.shaders.basic.js.map
