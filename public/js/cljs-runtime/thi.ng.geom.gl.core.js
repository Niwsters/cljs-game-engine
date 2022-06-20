goog.provide('thi.ng.geom.gl.core');

/**
 * @interface
 */
thi.ng.geom.gl.core.IGLConvert = function(){};

var thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$dyn_17584 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.as_gl_buffer_spec["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IGLConvert.as-gl-buffer-spec",_);
}
}
});
thi.ng.geom.gl.core.as_gl_buffer_spec = (function thi$ng$geom$gl$core$as_gl_buffer_spec(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2(_,opts);
} else {
return thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$dyn_17584(_,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IRelease = function(){};

var thi$ng$geom$gl$core$IRelease$release$dyn_17585 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.release[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.release["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRelease.release",_);
}
}
});
thi.ng.geom.gl.core.release = (function thi$ng$geom$gl$core$release(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IRelease$release$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IRelease$release$arity$1(_);
} else {
return thi$ng$geom$gl$core$IRelease$release$dyn_17585(_);
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IBind = function(){};

var thi$ng$geom$gl$core$IBind$bind$dyn_17586 = (function() {
var G__17587 = null;
var G__17587__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.bind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBind.bind",_);
}
}
});
var G__17587__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.bind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.bind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IBind.bind",_);
}
}
});
G__17587 = function(_,opts){
switch(arguments.length){
case 1:
return G__17587__1.call(this,_);
case 2:
return G__17587__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17587.cljs$core$IFn$_invoke$arity$1 = G__17587__1;
G__17587.cljs$core$IFn$_invoke$arity$2 = G__17587__2;
return G__17587;
})()
;
thi.ng.geom.gl.core.bind = (function thi$ng$geom$gl$core$bind(var_args){
var G__17430 = arguments.length;
switch (G__17430) {
case 1:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$bind$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$1(_);
} else {
return thi$ng$geom$gl$core$IBind$bind$dyn_17586(_);
}
}));

(thi.ng.geom.gl.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$bind$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IBind$bind$arity$2(_,opts);
} else {
return thi$ng$geom$gl$core$IBind$bind$dyn_17586(_,opts);
}
}));

(thi.ng.geom.gl.core.bind.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$gl$core$IBind$unbind$dyn_17589 = (function() {
var G__17590 = null;
var G__17590__1 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.unbind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBind.unbind",_);
}
}
});
var G__17590__2 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.unbind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.unbind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IBind.unbind",_);
}
}
});
G__17590 = function(_,opts){
switch(arguments.length){
case 1:
return G__17590__1.call(this,_);
case 2:
return G__17590__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17590.cljs$core$IFn$_invoke$arity$1 = G__17590__1;
G__17590.cljs$core$IFn$_invoke$arity$2 = G__17590__2;
return G__17590;
})()
;
thi.ng.geom.gl.core.unbind = (function thi$ng$geom$gl$core$unbind(var_args){
var G__17434 = arguments.length;
switch (G__17434) {
case 1:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$unbind$arity$1 == null)))))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$1(_);
} else {
return thi$ng$geom$gl$core$IBind$unbind$dyn_17589(_);
}
}));

(thi.ng.geom.gl.core.unbind.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IBind$unbind$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IBind$unbind$arity$2(_,opts);
} else {
return thi$ng$geom$gl$core$IBind$unbind$dyn_17589(_,opts);
}
}));

(thi.ng.geom.gl.core.unbind.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.gl.core.IConfigure = function(){};

var thi$ng$geom$gl$core$IConfigure$configure$dyn_17592 = (function (_,opts){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.configure[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5391__auto__.call(null,_,opts));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.configure["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__5389__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IConfigure.configure",_);
}
}
});
thi.ng.geom.gl.core.configure = (function thi$ng$geom$gl$core$configure(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IConfigure$configure$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IConfigure$configure$arity$2(_,opts);
} else {
return thi$ng$geom$gl$core$IConfigure$configure$dyn_17592(_,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.ITexture = function(){};

var thi$ng$geom$gl$core$ITexture$set_texture_filter$dyn_17593 = (function (_,min,mag){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.set_texture_filter[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,min,mag) : m__5391__auto__.call(null,_,min,mag));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.set_texture_filter["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,min,mag) : m__5389__auto__.call(null,_,min,mag));
} else {
throw cljs.core.missing_protocol("ITexture.set-texture-filter",_);
}
}
});
thi.ng.geom.gl.core.set_texture_filter = (function thi$ng$geom$gl$core$set_texture_filter(_,min,mag){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3 == null)))))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_filter$arity$3(_,min,mag);
} else {
return thi$ng$geom$gl$core$ITexture$set_texture_filter$dyn_17593(_,min,mag);
}
});

var thi$ng$geom$gl$core$ITexture$set_texture_wrap$dyn_17594 = (function (_,wrap_s,wrap_t){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.set_texture_wrap[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,wrap_s,wrap_t) : m__5391__auto__.call(null,_,wrap_s,wrap_t));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.set_texture_wrap["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,wrap_s,wrap_t) : m__5389__auto__.call(null,_,wrap_s,wrap_t));
} else {
throw cljs.core.missing_protocol("ITexture.set-texture-wrap",_);
}
}
});
thi.ng.geom.gl.core.set_texture_wrap = (function thi$ng$geom$gl$core$set_texture_wrap(_,wrap_s,wrap_t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3 == null)))))){
return _.thi$ng$geom$gl$core$ITexture$set_texture_wrap$arity$3(_,wrap_s,wrap_t);
} else {
return thi$ng$geom$gl$core$ITexture$set_texture_wrap$dyn_17594(_,wrap_s,wrap_t);
}
});


/**
 * @interface
 */
thi.ng.geom.gl.core.IFramebuffer = function(){};

var thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$dyn_17595 = (function (_,tex){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,tex) : m__5391__auto__.call(null,_,tex));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.set_fbo_color_texture["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,tex) : m__5389__auto__.call(null,_,tex));
} else {
throw cljs.core.missing_protocol("IFramebuffer.set-fbo-color-texture",_);
}
}
});
thi.ng.geom.gl.core.set_fbo_color_texture = (function thi$ng$geom$gl$core$set_fbo_color_texture(_,tex){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$arity$2(_,tex);
} else {
return thi$ng$geom$gl$core$IFramebuffer$set_fbo_color_texture$dyn_17595(_,tex);
}
});

var thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$dyn_17596 = (function (_,depth_buffer){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,depth_buffer) : m__5391__auto__.call(null,_,depth_buffer));
} else {
var m__5389__auto__ = (thi.ng.geom.gl.core.set_fbo_depth_buffer["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,depth_buffer) : m__5389__auto__.call(null,_,depth_buffer));
} else {
throw cljs.core.missing_protocol("IFramebuffer.set-fbo-depth-buffer",_);
}
}
});
thi.ng.geom.gl.core.set_fbo_depth_buffer = (function thi$ng$geom$gl$core$set_fbo_depth_buffer(_,depth_buffer){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2 == null)))))){
return _.thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$arity$2(_,depth_buffer);
} else {
return thi$ng$geom$gl$core$IFramebuffer$set_fbo_depth_buffer$dyn_17596(_,depth_buffer);
}
});

thi.ng.geom.gl.core.zero_fill_coll = (function thi$ng$geom$gl$core$zero_fill_coll(coll,stride){
var len = cljs.core.count(coll);
if((len < stride)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(stride,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
} else {
if((len > stride)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(stride,coll);
} else {
return coll;

}
}
});
thi.ng.geom.gl.core.fill_buffer_vec2 = (function thi$ng$geom$gl$core$fill_buffer_vec2(buf,idx,v,num,stride){
var vbuf_17597 = v.buf;
var idx_17598__$1 = (0);
var num_17599__$1 = num;
while(true){
if((num_17599__$1 > (0))){
buf.set(vbuf_17597,idx_17598__$1);

var G__17600 = (idx_17598__$1 + stride);
var G__17601 = (num_17599__$1 - (1));
idx_17598__$1 = G__17600;
num_17599__$1 = G__17601;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer_vec3 = (function thi$ng$geom$gl$core$fill_buffer_vec3(buf,idx,v,num,stride){
var vbuf_17602 = v.buf;
var idx_17603__$1 = (0);
var num_17604__$1 = num;
while(true){
if((num_17604__$1 > (0))){
buf.set(vbuf_17602,idx_17603__$1);

var G__17605 = (idx_17603__$1 + stride);
var G__17606 = (num_17604__$1 - (1));
idx_17603__$1 = G__17605;
num_17604__$1 = G__17606;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_buffer = (function thi$ng$geom$gl$core$fill_buffer(buf,idx,coll,n,stride){
var b = thi.ng.typedarrays.core.float32(thi.ng.geom.gl.core.zero_fill_coll(coll,stride));
var i_17607 = idx;
var n_17608__$1 = n;
while(true){
if((n_17608__$1 > (0))){
buf.set(b,i_17607);

var G__17609 = (i_17607 + stride);
var G__17610 = (n_17608__$1 - (1));
i_17607 = G__17609;
n_17608__$1 = G__17610;
continue;
} else {
}
break;
}

return buf;
});
thi.ng.geom.gl.core.fill_vertex_buffer = (function thi$ng$geom$gl$core$fill_vertex_buffer(buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var G__17611 = (thi.ng.dstruct.streams.into_float_buffer(cljs.core.first(coll__$1),buf,stride,i) | (0));
var G__17612 = cljs.core.next(coll__$1);
i = G__17611;
coll__$1 = G__17612;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.fill_vertex_buffer_faces = (function thi$ng$geom$gl$core$fill_vertex_buffer_faces(f,buf,coll,stride){
var i = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var fv = cljs.core.first(coll__$1);
var G__17613 = ((function (){var G__17435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fv,(2));
var G__17436 = buf;
var G__17437 = stride;
var G__17438 = (function (){var G__17439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fv,(1));
var G__17440 = buf;
var G__17441 = stride;
var G__17442 = (function (){var G__17443 = cljs.core.first(fv);
var G__17444 = buf;
var G__17445 = stride;
var G__17446 = i;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17443,G__17444,G__17445,G__17446) : f.call(null,G__17443,G__17444,G__17445,G__17446));
})();
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17439,G__17440,G__17441,G__17442) : f.call(null,G__17439,G__17440,G__17441,G__17442));
})();
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17435,G__17436,G__17437,G__17438) : f.call(null,G__17435,G__17436,G__17437,G__17438));
})() | (0));
var G__17614 = cljs.core.next(coll__$1);
i = G__17613;
coll__$1 = G__17614;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.face_normals_buffer = (function thi$ng$geom$gl$core$face_normals_buffer(faces){
var buf = thi.ng.typedarrays.core.float32(((cljs.core.count(faces) * (3)) * (3)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(cljs.core.first(faces__$1)).buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__17615 = cljs.core.next(faces__$1);
var G__17616 = (idx + (9));
faces__$1 = G__17615;
idx = G__17616;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_face_normals_buffer = (function thi$ng$geom$gl$core$mesh_face_normals_buffer(m){
var fnorms = thi.ng.geom.core.face_normals(m,true);
var faces = thi.ng.geom.core.faces(m);
var buf = thi.ng.typedarrays.core.float32((cljs.core.count(faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var nbuf = (function (){var G__17448 = cljs.core.first(faces__$1);
return (fnorms.cljs$core$IFn$_invoke$arity$1 ? fnorms.cljs$core$IFn$_invoke$arity$1(G__17448) : fnorms.call(null,G__17448));
})().buf;
buf.set(nbuf,idx);

buf.set(nbuf,(idx + (3)));

buf.set(nbuf,(idx + (6)));

var G__17617 = (idx + (9));
var G__17618 = cljs.core.next(faces__$1);
faces__$1 = G__17617;
idx = G__17618;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.mesh_vertex_normals_buffer = (function thi$ng$geom$gl$core$mesh_vertex_normals_buffer(m){
var vnorms = thi.ng.geom.core.vertex_normals(m,true);
var faces = thi.ng.geom.core.faces(m);
var buf = thi.ng.typedarrays.core.float32((cljs.core.count(faces) * (9)));
var faces__$1 = faces;
var idx = (0);
while(true){
if(cljs.core.truth_(faces__$1)){
var f = cljs.core.first(faces__$1);
buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.first(f)).buf,idx);

buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,(1))).buf,(idx + (3)));

buf.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vnorms,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(f,(2))).buf,(idx + (6)));

var G__17619 = (idx + (9));
var G__17620 = cljs.core.next(faces__$1);
faces__$1 = G__17619;
idx = G__17620;
continue;
} else {
return buf;
}
break;
}
});
thi.ng.geom.gl.core.common_attrib_buffer_specs = (function thi$ng$geom$gl$core$common_attrib_buffer_specs(p__17449,p__17450){
var map__17451 = p__17449;
var map__17451__$1 = cljs.core.__destructure_map(map__17451);
var acc = map__17451__$1;
var num_vertices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051));
var map__17452 = p__17450;
var map__17452__$1 = cljs.core.__destructure_map(map__17452);
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var fixed_normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463));
var uv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fixed_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17452__$1,new cljs.core.Keyword(null,"fixed-color","fixed-color",1717626731));
var c_stride = (cljs.core.truth_(colors)?cljs.core.count(cljs.core.first(colors)):(cljs.core.truth_(fixed_color)?cljs.core.count(fixed_color):null));
var G__17453 = acc;
var G__17453__$1 = (cljs.core.truth_(normals)?cljs.core.assoc_in(G__17453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),normals,new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17453);
var G__17453__$2 = (cljs.core.truth_(fixed_normal)?cljs.core.assoc_in(G__17453__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer_vec3(thi.ng.typedarrays.core.float32((num_vertices * (3))),(0),fixed_normal,num_vertices,(3)),new cljs.core.Keyword(null,"size","size",1098693007),(3)], null)):G__17453__$1);
var G__17453__$3 = (cljs.core.truth_(uv)?cljs.core.assoc_in(G__17453__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32(((2) * cljs.core.count(uv))),uv,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)):G__17453__$2);
var G__17453__$4 = (cljs.core.truth_(colors)?cljs.core.assoc_in(G__17453__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((c_stride * cljs.core.count(colors))),colors,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null)):G__17453__$3);
if(cljs.core.truth_(fixed_color)){
return cljs.core.assoc_in(G__17453__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.Keyword(null,"color","color",1011675173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_buffer(thi.ng.typedarrays.core.float32((num_vertices * c_stride)),(0),fixed_color,num_vertices,c_stride),new cljs.core.Keyword(null,"size","size",1098693007),c_stride], null));
} else {
return G__17453__$4;
}
});
thi.ng.geom.gl.core.into_float_buffer_vec2 = (function thi$ng$geom$gl$core$into_float_buffer_vec2(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
thi.ng.geom.gl.core.into_float_buffer_vec3 = (function thi$ng$geom$gl$core$into_float_buffer_vec3(v,buf,stride,idx){
buf.set(v.buf,idx);

return (idx + stride);
});
(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.typedarrays.core.float32(___$1);
}));

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,buf,stride,idx){
var ___$1 = this;
var t = cljs.core.type(cljs.core.first(___$1));
var into_STAR_ = (function (){var pred__17454 = cljs.core._EQ_;
var expr__17455 = t;
if(cljs.core.truth_((pred__17454.cljs$core$IFn$_invoke$arity$2 ? pred__17454.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.Vec2,expr__17455) : pred__17454.call(null,thi.ng.geom.vector.Vec2,expr__17455)))){
return thi.ng.geom.gl.core.into_float_buffer_vec2;
} else {
if(cljs.core.truth_((pred__17454.cljs$core$IFn$_invoke$arity$2 ? pred__17454.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.Vec3,expr__17455) : pred__17454.call(null,thi.ng.geom.vector.Vec3,expr__17455)))){
return thi.ng.geom.gl.core.into_float_buffer_vec3;
} else {
return thi.ng.dstruct.streams.into_float_buffer;
}
}
})();
var G__17457 = cljs.core.count(___$1);
switch (G__17457) {
case (2):
var G__17458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__17459 = buf;
var G__17460 = stride;
var G__17461 = (function (){var G__17462 = cljs.core.first(___$1);
var G__17463 = buf;
var G__17464 = stride;
var G__17465 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17462,G__17463,G__17464,G__17465) : into_STAR_.call(null,G__17462,G__17463,G__17464,G__17465));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17458,G__17459,G__17460,G__17461) : into_STAR_.call(null,G__17458,G__17459,G__17460,G__17461));

break;
case (3):
var G__17466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(2));
var G__17467 = buf;
var G__17468 = stride;
var G__17469 = (function (){var G__17470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__17471 = buf;
var G__17472 = stride;
var G__17473 = (function (){var G__17474 = cljs.core.first(___$1);
var G__17475 = buf;
var G__17476 = stride;
var G__17477 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17474,G__17475,G__17476,G__17477) : into_STAR_.call(null,G__17474,G__17475,G__17476,G__17477));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17470,G__17471,G__17472,G__17473) : into_STAR_.call(null,G__17470,G__17471,G__17472,G__17473));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17466,G__17467,G__17468,G__17469) : into_STAR_.call(null,G__17466,G__17467,G__17468,G__17469));

break;
case (4):
var G__17478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(3));
var G__17479 = buf;
var G__17480 = stride;
var G__17481 = (function (){var G__17482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(2));
var G__17483 = buf;
var G__17484 = stride;
var G__17485 = (function (){var G__17486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(___$1,(1));
var G__17487 = buf;
var G__17488 = stride;
var G__17489 = (function (){var G__17490 = cljs.core.first(___$1);
var G__17491 = buf;
var G__17492 = stride;
var G__17493 = idx;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17490,G__17491,G__17492,G__17493) : into_STAR_.call(null,G__17490,G__17491,G__17492,G__17493));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17486,G__17487,G__17488,G__17489) : into_STAR_.call(null,G__17486,G__17487,G__17488,G__17489));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17482,G__17483,G__17484,G__17485) : into_STAR_.call(null,G__17482,G__17483,G__17484,G__17485));
})();
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17478,G__17479,G__17480,G__17481) : into_STAR_.call(null,G__17478,G__17479,G__17480,G__17481));

break;
default:
var idx__$1 = idx;
var xs = ___$1;
while(true){
if(cljs.core.truth_(xs)){
var G__17622 = (function (){var G__17498 = cljs.core.first(xs);
var G__17499 = buf;
var G__17500 = stride;
var G__17501 = idx__$1;
return (into_STAR_.cljs$core$IFn$_invoke$arity$4 ? into_STAR_.cljs$core$IFn$_invoke$arity$4(G__17498,G__17499,G__17500,G__17501) : into_STAR_.call(null,G__17498,G__17499,G__17500,G__17501));
})();
var G__17623 = cljs.core.next(xs);
idx__$1 = G__17622;
xs = G__17623;
continue;
} else {
return idx__$1;
}
break;
}

}
}));
(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__17502,p__17503){
var map__17504 = p__17502;
var map__17504__$1 = cljs.core.__destructure_map(map__17504);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17504__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__17505 = p__17503;
var map__17505__$1 = cljs.core.__destructure_map(map__17505);
var spec = map__17505__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17505__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var map__17506 = this;
var map__17506__$1 = cljs.core.__destructure_map(map__17506);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17506__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count(points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
}));
(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.LineStrip3.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (p__17507,p__17508){
var map__17509 = p__17507;
var map__17509__$1 = cljs.core.__destructure_map(map__17509);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17509__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var map__17510 = p__17508;
var map__17510__$1 = cljs.core.__destructure_map(map__17510);
var spec = map__17510__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17510__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var map__17511 = this;
var map__17511__$1 = cljs.core.__destructure_map(map__17511);
var points__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17511__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var numv = cljs.core.count(points__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((numv * stride)),points__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.line_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),numv], null),spec);
}));
(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Rect2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (r,p__17512){
var map__17513 = p__17512;
var map__17513__$1 = cljs.core.__destructure_map(map__17513);
var spec = map__17513__$1;
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17513__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17513__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var r__$1 = this;
var vec__17514 = thi.ng.geom.core.vertices(r__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17514,(3),null);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32(((4) * stride)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,d,c], null),stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangle_strip,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),(4)], null),(cljs.core.truth_(normals)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
}));
(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Polygon2.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__17517){
var map__17518 = p__17517;
var map__17518__$1 = cljs.core.__destructure_map(map__17518);
var spec = map__17518__$1;
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17518__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17518__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(2));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17518__$1,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.gl.webgl.constants.triangles,mode)){
var faces = thi.ng.geom.core.tessellate(___$1);
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),(cljs.core.truth_(normals)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"fixed-normal","fixed-normal",-1816259463),thi.ng.geom.vector.V3Z),new cljs.core.Keyword(null,"normals","normals",-1508109067)):spec));
} else {
var verts = thi.ng.geom.core.vertices(___$1);
var verts__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(verts,cljs.core.first(verts));
var num_verts = cljs.core.count(verts__$1);
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer(thi.ng.typedarrays.core.float32((num_verts * stride)),verts__$1,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067)));
}
}));
(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__17520){
var map__17521 = p__17520;
var map__17521__$1 = cljs.core.__destructure_map(map__17521);
var spec = map__17521__$1;
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17521__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17521__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17521__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate(___$1):___$1);
var faces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17519_SHARP_){
return thi.ng.geom.core.vertices(p1__17519_SHARP_,m);
}),thi.ng.geom.core.faces(m));
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces(thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer(m):null)));
}));
(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.GMesh.prototype.thi$ng$geom$gl$core$IGLConvert$as_gl_buffer_spec$arity$2 = (function (_,p__17523){
var map__17524 = p__17523;
var map__17524__$1 = cljs.core.__destructure_map(map__17524);
var spec = map__17524__$1;
var vnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17524__$1,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284));
var fnormals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17524__$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),true);
var tessellate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17524__$1,new cljs.core.Keyword(null,"tessellate","tessellate",950164340),true);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17524__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(3));
var ___$1 = this;
var m = (cljs.core.truth_(tessellate)?thi.ng.geom.core.tessellate(___$1):___$1);
var faces = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17522_SHARP_){
return thi.ng.geom.core.vertices(p1__17522_SHARP_,m);
}),thi.ng.geom.core.faces(m));
var num_faces = cljs.core.count(faces);
var num_verts = (num_faces * (3));
var normals = (cljs.core.truth_(vnormals)?thi.ng.geom.gl.core.mesh_vertex_normals_buffer(m):(cljs.core.truth_(fnormals)?thi.ng.geom.gl.core.mesh_face_normals_buffer(m):null
));
return thi.ng.geom.gl.core.common_attrib_buffer_specs(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribs","attribs",-137878093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),thi.ng.geom.gl.core.fill_vertex_buffer_faces(thi.ng.geom.gl.core.into_float_buffer_vec3,thi.ng.typedarrays.core.float32((num_verts * stride)),faces,stride),new cljs.core.Keyword(null,"size","size",1098693007),stride], null)], null),new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051),num_verts,new cljs.core.Keyword(null,"num-faces","num-faces",2117588532),num_faces], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"normals","normals",-1508109067),normals));
}));
thi.ng.geom.gl.core.context_default_attribs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",333849513),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",173664672),false,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",-307675636),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",-529745663),false,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),false], null);
thi.ng.geom.gl.core.gl_context = (function thi$ng$geom$gl$core$gl_context(var_args){
var G__17527 = arguments.length;
switch (G__17527) {
case 1:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$1 = (function (canvas){
return thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2(canvas,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.gl.core.gl_context.cljs$core$IFn$_invoke$arity$2 = (function (canvas,attribs){
var canvas__$1 = ((typeof canvas === 'string')?document.getElementById(canvas):canvas);
var attribs__$1 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thi.ng.geom.gl.core.context_default_attribs,attribs], 0)));
var getctx = (function (p1__17525_SHARP_){
try{var ctx = canvas__$1.getContext(p1__17525_SHARP_,attribs__$1);
(canvas__$1.onselectstart = cljs.core.constantly(false));

return ctx;
}catch (e17528){if((e17528 instanceof Error)){
var e = e17528;
return null;
} else {
throw e17528;

}
}});
var ctx = (function (){var ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null);
while(true){
if(cljs.core.truth_(ids)){
var temp__5802__auto__ = getctx(cljs.core.first(ids));
if(cljs.core.truth_(temp__5802__auto__)){
var ctx = temp__5802__auto__;
return ctx;
} else {
var G__17625 = cljs.core.next(ids);
ids = G__17625;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ctx;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1("WebGL not available");
}
}));

(thi.ng.geom.gl.core.gl_context.cljs$lang$maxFixedArity = 2);

thi.ng.geom.gl.core.clear_color_buffer = (function thi$ng$geom$gl$core$clear_color_buffer(var_args){
var G__17530 = arguments.length;
switch (G__17530) {
case 2:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$2 = (function (gl,col){
var c = thi.ng.color.core.as_rgba(col);
return thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5(gl,c.r,c.g,c.b,c.a);
}));

(thi.ng.geom.gl.core.clear_color_buffer.cljs$core$IFn$_invoke$arity$5 = (function (gl,r,g,b,a){
var G__17531 = gl;
G__17531.clearColor(r,g,b,a);

G__17531.clear(thi.ng.geom.gl.webgl.constants.color_buffer_bit);

return G__17531;
}));

(thi.ng.geom.gl.core.clear_color_buffer.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.clear_depth_buffer = (function thi$ng$geom$gl$core$clear_depth_buffer(gl,d){
var G__17532 = gl;
G__17532.clearDepth(d);

G__17532.clear(thi.ng.geom.gl.webgl.constants.depth_buffer_bit);

return G__17532;
});
thi.ng.geom.gl.core.clear_color_and_depth_buffer = (function thi$ng$geom$gl$core$clear_color_and_depth_buffer(var_args){
var G__17534 = arguments.length;
switch (G__17534) {
case 3:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$3 = (function (gl,col,d){
var c = thi.ng.color.core.as_rgba(col);
return thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6(gl,c.r,c.g,c.b,c.a,d);
}));

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$core$IFn$_invoke$arity$6 = (function (gl,r,g,b,a,d){
var G__17535 = gl;
G__17535.clearColor(r,g,b,a);

G__17535.clearDepth(d);

G__17535.clear((thi.ng.geom.gl.webgl.constants.depth_buffer_bit | thi.ng.geom.gl.webgl.constants.color_buffer_bit));

return G__17535;
}));

(thi.ng.geom.gl.core.clear_color_and_depth_buffer.cljs$lang$maxFixedArity = 6);

thi.ng.geom.gl.core.disable = (function thi$ng$geom$gl$core$disable(gl,flag){
gl.disable(flag);

return gl;
});
thi.ng.geom.gl.core.enable = (function thi$ng$geom$gl$core$enable(gl,flag){
gl.enable(flag);

return gl;
});
thi.ng.geom.gl.core.scissor_test = (function thi$ng$geom$gl$core$scissor_test(var_args){
var G__17537 = arguments.length;
switch (G__17537) {
case 2:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__17538){
var map__17539 = p__17538;
var map__17539__$1 = cljs.core.__destructure_map(map__17539);
var vec__17540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17540,(1),null);
var vec__17543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17539__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17543,(1),null);
return thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5(gl,x,y,w,h);
}));

(thi.ng.geom.gl.core.scissor_test.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
var G__17546 = gl;
G__17546.enable(thi.ng.geom.gl.webgl.constants.scissor_test);

G__17546.scissor(x,y,w,h);

return G__17546;
}));

(thi.ng.geom.gl.core.scissor_test.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.cull_faces = (function thi$ng$geom$gl$core$cull_faces(gl,side){
var G__17547 = gl;
G__17547.enable(thi.ng.geom.gl.webgl.constants.cull_face);

G__17547.cullFace(side);

return G__17547;
});
thi.ng.geom.gl.core.set_viewport = (function thi$ng$geom$gl$core$set_viewport(var_args){
var G__17549 = arguments.length;
switch (G__17549) {
case 2:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 5:
return thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$2 = (function (gl,p__17550){
var map__17551 = p__17550;
var map__17551__$1 = cljs.core.__destructure_map(map__17551);
var vec__17552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17551__$1,new cljs.core.Keyword(null,"p","p",151049309));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(1),null);
var vec__17555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17551__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17555,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17555,(1),null);
gl.viewport(x,y,w,h);

return gl;
}));

(thi.ng.geom.gl.core.set_viewport.cljs$core$IFn$_invoke$arity$5 = (function (gl,x,y,w,h){
gl.viewport(x,y,w,h);

return gl;
}));

(thi.ng.geom.gl.core.set_viewport.cljs$lang$maxFixedArity = 5);

thi.ng.geom.gl.core.get_viewport_rect = (function thi$ng$geom$gl$core$get_viewport_rect(gl){
var b = gl.getParameter(thi.ng.geom.gl.webgl.constants.viewport);
return thi.ng.geom.rect.rect.cljs$core$IFn$_invoke$arity$4((b[(0)]),(b[(1)]),(b[(2)]),(b[(3)]));
});
thi.ng.geom.gl.core.perspective = thi.ng.geom.matrix.perspective;
thi.ng.geom.gl.core.ortho = thi.ng.geom.matrix.ortho;
thi.ng.geom.gl.core.float_ext_ids = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_color_buffer_float","EXT_color_buffer_half_float"], null);
thi.ng.geom.gl.core.get_extension = (function thi$ng$geom$gl$core$get_extension(gl,ext){
return gl.getExtension(ext);
});
thi.ng.geom.gl.core.get_float_extension = (function thi$ng$geom$gl$core$get_float_extension(gl,spec){
var vec__17559 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17558_SHARP_){
return gl.getExtension(p1__17558_SHARP_);
}),thi.ng.geom.gl.core.float_ext_ids);
var s_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(0),null);
var h_tex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(1),null);
var s_lin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(2),null);
var h_lin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(3),null);
var s_fbo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(4),null);
var h_fbo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17559,(5),null);
var ext = vec__17559;
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (pref,score){
if(cljs.core.truth_((c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(pref) : c.call(null,pref)))){
return score;
} else {
return (0);
}
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"prefer","prefer",1694203909)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(64),(32),(16),(8),(4),(2),(1)], null))));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,c){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"texture","texture",-266291651));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.every_QMARK_(c,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"require","require",-468001333)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,c);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),s_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),s_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),s_fbo,new cljs.core.Keyword(null,"type","type",1174270348),thi.ng.geom.gl.webgl.constants.float$,new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"single","single",1551466437),new cljs.core.Keyword(null,"single","single",1551466437),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",-266291651),h_tex,new cljs.core.Keyword(null,"filterable","filterable",-1588312341),h_lin,new cljs.core.Keyword(null,"renderable","renderable",-1247325782),h_fbo,new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(h_tex)?h_tex.HALF_FLOAT_OES:null),new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.Keyword(null,"half","half",741990005),new cljs.core.Keyword(null,"half","half",741990005),true], null)], null)))));
});
thi.ng.geom.gl.core.get_supported_extensions = (function thi$ng$geom$gl$core$get_supported_extensions(gl){
return gl.getSupportedExtensions();
});
thi.ng.geom.gl.core.make_array_buffer = (function thi$ng$geom$gl$core$make_array_buffer(gl,target,mode,data){
var buffer = gl.createBuffer();
gl.bindBuffer(target,buffer);

gl.bufferData(target,data,mode);

return buffer;
});
thi.ng.geom.gl.core.make_attribute_buffers = (function thi$ng$geom$gl$core$make_attribute_buffers(gl,mode,attribs){
return cljs.core.reduce_kv((function (attribs__$1,id,p__17562){
var map__17563 = p__17562;
var map__17563__$1 = cljs.core.__destructure_map(map__17563);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17563__$1,new cljs.core.Keyword(null,"target","target",253001721),thi.ng.geom.gl.webgl.constants.array_buffer);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(attribs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer(gl,target,mode,data),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null));
}),attribs,attribs);
});
thi.ng.geom.gl.core.make_buffers_in_spec = (function thi$ng$geom$gl$core$make_buffers_in_spec(spec,gl,mode){
var spec__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093),(function (p1__17564_SHARP_){
return thi.ng.geom.gl.core.make_attribute_buffers(gl,mode,p1__17564_SHARP_);
}));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343),(function (p1__17565_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__17565_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),thi.ng.geom.gl.core.make_array_buffer(gl,thi.ng.geom.gl.webgl.constants.element_array_buffer,mode,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__17565_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377))),new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764),mode], null)], 0));
}));
} else {
return spec__$1;
}
});
thi.ng.geom.gl.core.update_buffer_in_spec = (function thi$ng$geom$gl$core$update_buffer_in_spec(gl,spec,id,coll){
var map__17566 = (function (){var G__17567 = new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(spec);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__17567) : id.call(null,G__17567));
})();
var map__17566__$1 = cljs.core.__destructure_map(map__17566);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"target","target",253001721));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var buffer_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"buffer-mode","buffer-mode",871768764));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17566__$1,new cljs.core.Keyword(null,"size","size",1098693007));
thi.ng.geom.gl.core.fill_vertex_buffer(data,coll,size);

gl.bindBuffer(target,buffer);

gl.bufferData(target,data,buffer_mode);

return gl;
});
thi.ng.geom.gl.core.begin_shader = (function thi$ng$geom$gl$core$begin_shader(gl,shader,uniforms,attribs,indices){
gl.useProgram(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"program","program",781564284)));

thi.ng.geom.gl.shaders.apply_default_uniforms(shader,uniforms);

cljs.core.reduce_kv((function (p1__17570_SHARP_,p2__17568_SHARP_,p3__17569_SHARP_){
return thi.ng.geom.gl.shaders.set_uniform(shader,uniforms,p2__17568_SHARP_,p3__17569_SHARP_);
}),null,uniforms);

cljs.core.reduce_kv((function (p1__17573_SHARP_,p2__17571_SHARP_,p3__17572_SHARP_){
return thi.ng.geom.gl.shaders.set_attribute(gl,shader,p2__17571_SHARP_,p3__17572_SHARP_);
}),null,attribs);

if(cljs.core.truth_(indices)){
return gl.bindBuffer(thi.ng.geom.gl.webgl.constants.element_array_buffer,cljs.core.get.cljs$core$IFn$_invoke$arity$2(indices,new cljs.core.Keyword(null,"buffer","buffer",617295198)));
} else {
return null;
}
});
thi.ng.geom.gl.core.end_shader = (function thi$ng$geom$gl$core$end_shader(gl,shader){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17575_SHARP_,p2__17574_SHARP_){
return thi.ng.geom.gl.shaders.disable_attribute(gl,shader,cljs.core.key(p2__17574_SHARP_));
}),null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.Keyword(null,"attribs","attribs",-137878093)));
});
thi.ng.geom.gl.core.bind_sequentially = (function thi$ng$geom$gl$core$bind_sequentially(coll){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
var temp__5804__auto___17630 = cljs.core.first(coll__$1);
if(cljs.core.truth_(temp__5804__auto___17630)){
var x_17631 = temp__5804__auto___17630;
thi.ng.geom.gl.core.bind(x_17631,i);
} else {
}

var G__17632 = (i + (1));
var G__17633 = cljs.core.next(coll__$1);
i = G__17632;
coll__$1 = G__17633;
continue;
} else {
return null;
}
break;
}
});
/**
 * Takes a GL context and shader spec, sets GL render flags stored
 *   under :state key (only if :state is present).
 */
thi.ng.geom.gl.core.prepare_render_state = (function thi$ng$geom$gl$core$prepare_render_state(gl,p__17576){
var map__17577 = p__17576;
var map__17577__$1 = cljs.core.__destructure_map(map__17577);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17577__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(state)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"depth-test","depth-test",2006034246),true))){
thi.ng.geom.gl.core.enable(gl,thi.ng.geom.gl.webgl.constants.depth_test);
} else {
thi.ng.geom.gl.core.disable(gl,thi.ng.geom.gl.webgl.constants.depth_test);
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"blend","blend",249565561)))){
var vec__17578_17634 = (function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"blend-fn","blend-fn",-1294135525));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.gl.webgl.constants.src_alpha,thi.ng.geom.gl.webgl.constants.one], null);
}
})();
var src_17635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17578_17634,(0),null);
var dest_17636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17578_17634,(1),null);
var eq_17637 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"blend-eq","blend-eq",1223359361),thi.ng.geom.gl.webgl.constants.func_add);
var G__17581_17638 = gl;
thi.ng.geom.gl.core.enable(G__17581_17638,thi.ng.geom.gl.webgl.constants.blend);

G__17581_17638.blendFunc(src_17635,dest_17636);

G__17581_17638.blendEquation(eq_17637);

} else {
thi.ng.geom.gl.core.disable(gl,thi.ng.geom.gl.webgl.constants.blend);
}

var temp__5804__auto___17639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"tex","tex",1307057959));
if(cljs.core.truth_(temp__5804__auto___17639)){
var tex_17640 = temp__5804__auto___17639;
if(cljs.core.sequential_QMARK_(tex_17640)){
thi.ng.geom.gl.core.bind_sequentially(tex_17640);
} else {
thi.ng.geom.gl.core.bind(tex_17640,(0));
}
} else {
}
} else {
}

return gl;
});
thi.ng.geom.gl.core.compute_normal_matrix = (function thi$ng$geom$gl$core$compute_normal_matrix(m,v){
return thi.ng.math.core.transpose(thi.ng.math.core.invert(thi.ng.math.core._STAR_(v,m)));
});
thi.ng.geom.gl.core.auto_normal_matrix = (function thi$ng$geom$gl$core$auto_normal_matrix(model_id,view_id){
return (function (shader,uniforms){
return thi.ng.geom.gl.core.compute_normal_matrix((function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uniforms,model_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),model_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})(),(function (){var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uniforms,view_id);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shader,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),view_id,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})());
});
});
thi.ng.geom.gl.core.inject_normal_matrix = (function thi$ng$geom$gl$core$inject_normal_matrix(spec,model_mat,view_mat,normal_mat_id){
var model_mat__$1 = (((model_mat instanceof cljs.core.Keyword))?model_mat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):model_mat);
var view_mat__$1 = (((view_mat instanceof cljs.core.Keyword))?view_mat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(spec)):view_mat);
return cljs.core.assoc_in(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),normal_mat_id], null),thi.ng.geom.gl.core.compute_normal_matrix(model_mat__$1,view_mat__$1));
});
thi.ng.geom.gl.core.draw = (function thi$ng$geom$gl$core$draw(gl,spec){
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"mode","mode",654403691),thi.ng.geom.gl.webgl.constants.triangles);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)))){
gl.drawElements(mode,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"num-items","num-items",-887909266)),thi.ng.geom.gl.webgl.constants.unsigned_short,(0));
} else {
gl.drawArrays(mode,(0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"num-vertices","num-vertices",-1450089051)));
}

return gl;
});
thi.ng.geom.gl.core.draw_with_shader = (function thi$ng$geom$gl$core$draw_with_shader(gl,p__17582){
var map__17583 = p__17582;
var map__17583__$1 = cljs.core.__destructure_map(map__17583);
var spec = map__17583__$1;
var shader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17583__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
thi.ng.geom.gl.core.prepare_render_state(gl,shader);

thi.ng.geom.gl.core.begin_shader(gl,shader,cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"attribs","attribs",-137878093)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.Keyword(null,"indices","indices",-1218138343)));

thi.ng.geom.gl.core.draw(gl,spec);

thi.ng.geom.gl.core.end_shader(gl,shader);

return gl;
});

//# sourceMappingURL=thi.ng.geom.gl.core.js.map
