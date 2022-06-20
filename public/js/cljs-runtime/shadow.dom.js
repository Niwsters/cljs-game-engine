goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18943 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18943(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18944 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18944(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17711 = coll;
var G__17712 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17711,G__17712) : shadow.dom.lazy_native_coll_seq.call(null,G__17711,G__17712));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17910 = arguments.length;
switch (G__17910) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17971 = arguments.length;
switch (G__17971) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18025 = arguments.length;
switch (G__18025) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18052 = arguments.length;
switch (G__18052) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18102 = arguments.length;
switch (G__18102) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18127 = arguments.length;
switch (G__18127) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18151){if((e18151 instanceof Object)){
var e = e18151;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18151;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18174 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18175 = null;
var count__18176 = (0);
var i__18177 = (0);
while(true){
if((i__18177 < count__18176)){
var el = chunk__18175.cljs$core$IIndexed$_nth$arity$2(null,i__18177);
var handler_18951__$1 = ((function (seq__18174,chunk__18175,count__18176,i__18177,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18174,chunk__18175,count__18176,i__18177,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18951__$1);


var G__18952 = seq__18174;
var G__18953 = chunk__18175;
var G__18954 = count__18176;
var G__18955 = (i__18177 + (1));
seq__18174 = G__18952;
chunk__18175 = G__18953;
count__18176 = G__18954;
i__18177 = G__18955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18174);
if(temp__5804__auto__){
var seq__18174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18174__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__18174__$1);
var G__18956 = cljs.core.chunk_rest(seq__18174__$1);
var G__18957 = c__5565__auto__;
var G__18958 = cljs.core.count(c__5565__auto__);
var G__18959 = (0);
seq__18174 = G__18956;
chunk__18175 = G__18957;
count__18176 = G__18958;
i__18177 = G__18959;
continue;
} else {
var el = cljs.core.first(seq__18174__$1);
var handler_18960__$1 = ((function (seq__18174,chunk__18175,count__18176,i__18177,el,seq__18174__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18174,chunk__18175,count__18176,i__18177,el,seq__18174__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18960__$1);


var G__18961 = cljs.core.next(seq__18174__$1);
var G__18962 = null;
var G__18963 = (0);
var G__18964 = (0);
seq__18174 = G__18961;
chunk__18175 = G__18962;
count__18176 = G__18963;
i__18177 = G__18964;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18214 = arguments.length;
switch (G__18214) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18223 = cljs.core.seq(events);
var chunk__18224 = null;
var count__18225 = (0);
var i__18226 = (0);
while(true){
if((i__18226 < count__18225)){
var vec__18239 = chunk__18224.cljs$core$IIndexed$_nth$arity$2(null,i__18226);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18239,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18966 = seq__18223;
var G__18967 = chunk__18224;
var G__18968 = count__18225;
var G__18969 = (i__18226 + (1));
seq__18223 = G__18966;
chunk__18224 = G__18967;
count__18225 = G__18968;
i__18226 = G__18969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18223);
if(temp__5804__auto__){
var seq__18223__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18223__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__18223__$1);
var G__18970 = cljs.core.chunk_rest(seq__18223__$1);
var G__18971 = c__5565__auto__;
var G__18972 = cljs.core.count(c__5565__auto__);
var G__18973 = (0);
seq__18223 = G__18970;
chunk__18224 = G__18971;
count__18225 = G__18972;
i__18226 = G__18973;
continue;
} else {
var vec__18242 = cljs.core.first(seq__18223__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18974 = cljs.core.next(seq__18223__$1);
var G__18975 = null;
var G__18976 = (0);
var G__18977 = (0);
seq__18223 = G__18974;
chunk__18224 = G__18975;
count__18225 = G__18976;
i__18226 = G__18977;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18246 = cljs.core.seq(styles);
var chunk__18247 = null;
var count__18248 = (0);
var i__18249 = (0);
while(true){
if((i__18249 < count__18248)){
var vec__18261 = chunk__18247.cljs$core$IIndexed$_nth$arity$2(null,i__18249);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18261,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18978 = seq__18246;
var G__18979 = chunk__18247;
var G__18980 = count__18248;
var G__18981 = (i__18249 + (1));
seq__18246 = G__18978;
chunk__18247 = G__18979;
count__18248 = G__18980;
i__18249 = G__18981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18246);
if(temp__5804__auto__){
var seq__18246__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18246__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__18246__$1);
var G__18987 = cljs.core.chunk_rest(seq__18246__$1);
var G__18988 = c__5565__auto__;
var G__18989 = cljs.core.count(c__5565__auto__);
var G__18990 = (0);
seq__18246 = G__18987;
chunk__18247 = G__18988;
count__18248 = G__18989;
i__18249 = G__18990;
continue;
} else {
var vec__18269 = cljs.core.first(seq__18246__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18269,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18994 = cljs.core.next(seq__18246__$1);
var G__18995 = null;
var G__18996 = (0);
var G__18997 = (0);
seq__18246 = G__18994;
chunk__18247 = G__18995;
count__18248 = G__18996;
i__18249 = G__18997;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18277_18998 = key;
var G__18277_18999__$1 = (((G__18277_18998 instanceof cljs.core.Keyword))?G__18277_18998.fqn:null);
switch (G__18277_18999__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19004 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_19004,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_19004,"aria-");
}
})())){
el.setAttribute(ks_19004,value);
} else {
(el[ks_19004] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18299){
var map__18300 = p__18299;
var map__18300__$1 = cljs.core.__destructure_map(map__18300);
var props = map__18300__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18300__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18301 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18301,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18301,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18301,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18304 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18304,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18304;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18306 = arguments.length;
switch (G__18306) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18307){
var vec__18309 = p__18307;
var seq__18310 = cljs.core.seq(vec__18309);
var first__18311 = cljs.core.first(seq__18310);
var seq__18310__$1 = cljs.core.next(seq__18310);
var nn = first__18311;
var first__18311__$1 = cljs.core.first(seq__18310__$1);
var seq__18310__$2 = cljs.core.next(seq__18310__$1);
var np = first__18311__$1;
var nc = seq__18310__$2;
var node = vec__18309;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18313 = nn;
var G__18314 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18313,G__18314) : create_fn.call(null,G__18313,G__18314));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18316 = nn;
var G__18317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18316,G__18317) : create_fn.call(null,G__18316,G__18317));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18320 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320,(1),null);
var seq__18325_19008 = cljs.core.seq(node_children);
var chunk__18326_19009 = null;
var count__18327_19010 = (0);
var i__18328_19011 = (0);
while(true){
if((i__18328_19011 < count__18327_19010)){
var child_struct_19012 = chunk__18326_19009.cljs$core$IIndexed$_nth$arity$2(null,i__18328_19011);
var children_19013 = shadow.dom.dom_node(child_struct_19012);
if(cljs.core.seq_QMARK_(children_19013)){
var seq__18419_19014 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19013));
var chunk__18421_19015 = null;
var count__18422_19016 = (0);
var i__18423_19017 = (0);
while(true){
if((i__18423_19017 < count__18422_19016)){
var child_19018 = chunk__18421_19015.cljs$core$IIndexed$_nth$arity$2(null,i__18423_19017);
if(cljs.core.truth_(child_19018)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19018);


var G__19019 = seq__18419_19014;
var G__19020 = chunk__18421_19015;
var G__19021 = count__18422_19016;
var G__19022 = (i__18423_19017 + (1));
seq__18419_19014 = G__19019;
chunk__18421_19015 = G__19020;
count__18422_19016 = G__19021;
i__18423_19017 = G__19022;
continue;
} else {
var G__19023 = seq__18419_19014;
var G__19024 = chunk__18421_19015;
var G__19025 = count__18422_19016;
var G__19026 = (i__18423_19017 + (1));
seq__18419_19014 = G__19023;
chunk__18421_19015 = G__19024;
count__18422_19016 = G__19025;
i__18423_19017 = G__19026;
continue;
}
} else {
var temp__5804__auto___19027 = cljs.core.seq(seq__18419_19014);
if(temp__5804__auto___19027){
var seq__18419_19028__$1 = temp__5804__auto___19027;
if(cljs.core.chunked_seq_QMARK_(seq__18419_19028__$1)){
var c__5565__auto___19029 = cljs.core.chunk_first(seq__18419_19028__$1);
var G__19030 = cljs.core.chunk_rest(seq__18419_19028__$1);
var G__19031 = c__5565__auto___19029;
var G__19032 = cljs.core.count(c__5565__auto___19029);
var G__19033 = (0);
seq__18419_19014 = G__19030;
chunk__18421_19015 = G__19031;
count__18422_19016 = G__19032;
i__18423_19017 = G__19033;
continue;
} else {
var child_19034 = cljs.core.first(seq__18419_19028__$1);
if(cljs.core.truth_(child_19034)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19034);


var G__19035 = cljs.core.next(seq__18419_19028__$1);
var G__19036 = null;
var G__19037 = (0);
var G__19038 = (0);
seq__18419_19014 = G__19035;
chunk__18421_19015 = G__19036;
count__18422_19016 = G__19037;
i__18423_19017 = G__19038;
continue;
} else {
var G__19039 = cljs.core.next(seq__18419_19028__$1);
var G__19040 = null;
var G__19041 = (0);
var G__19042 = (0);
seq__18419_19014 = G__19039;
chunk__18421_19015 = G__19040;
count__18422_19016 = G__19041;
i__18423_19017 = G__19042;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19013);
}


var G__19043 = seq__18325_19008;
var G__19044 = chunk__18326_19009;
var G__19045 = count__18327_19010;
var G__19046 = (i__18328_19011 + (1));
seq__18325_19008 = G__19043;
chunk__18326_19009 = G__19044;
count__18327_19010 = G__19045;
i__18328_19011 = G__19046;
continue;
} else {
var temp__5804__auto___19047 = cljs.core.seq(seq__18325_19008);
if(temp__5804__auto___19047){
var seq__18325_19048__$1 = temp__5804__auto___19047;
if(cljs.core.chunked_seq_QMARK_(seq__18325_19048__$1)){
var c__5565__auto___19049 = cljs.core.chunk_first(seq__18325_19048__$1);
var G__19050 = cljs.core.chunk_rest(seq__18325_19048__$1);
var G__19051 = c__5565__auto___19049;
var G__19052 = cljs.core.count(c__5565__auto___19049);
var G__19053 = (0);
seq__18325_19008 = G__19050;
chunk__18326_19009 = G__19051;
count__18327_19010 = G__19052;
i__18328_19011 = G__19053;
continue;
} else {
var child_struct_19055 = cljs.core.first(seq__18325_19048__$1);
var children_19056 = shadow.dom.dom_node(child_struct_19055);
if(cljs.core.seq_QMARK_(children_19056)){
var seq__18456_19057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19056));
var chunk__18458_19058 = null;
var count__18459_19059 = (0);
var i__18460_19060 = (0);
while(true){
if((i__18460_19060 < count__18459_19059)){
var child_19062 = chunk__18458_19058.cljs$core$IIndexed$_nth$arity$2(null,i__18460_19060);
if(cljs.core.truth_(child_19062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19062);


var G__19063 = seq__18456_19057;
var G__19064 = chunk__18458_19058;
var G__19065 = count__18459_19059;
var G__19066 = (i__18460_19060 + (1));
seq__18456_19057 = G__19063;
chunk__18458_19058 = G__19064;
count__18459_19059 = G__19065;
i__18460_19060 = G__19066;
continue;
} else {
var G__19067 = seq__18456_19057;
var G__19068 = chunk__18458_19058;
var G__19069 = count__18459_19059;
var G__19070 = (i__18460_19060 + (1));
seq__18456_19057 = G__19067;
chunk__18458_19058 = G__19068;
count__18459_19059 = G__19069;
i__18460_19060 = G__19070;
continue;
}
} else {
var temp__5804__auto___19071__$1 = cljs.core.seq(seq__18456_19057);
if(temp__5804__auto___19071__$1){
var seq__18456_19072__$1 = temp__5804__auto___19071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18456_19072__$1)){
var c__5565__auto___19073 = cljs.core.chunk_first(seq__18456_19072__$1);
var G__19074 = cljs.core.chunk_rest(seq__18456_19072__$1);
var G__19075 = c__5565__auto___19073;
var G__19076 = cljs.core.count(c__5565__auto___19073);
var G__19077 = (0);
seq__18456_19057 = G__19074;
chunk__18458_19058 = G__19075;
count__18459_19059 = G__19076;
i__18460_19060 = G__19077;
continue;
} else {
var child_19078 = cljs.core.first(seq__18456_19072__$1);
if(cljs.core.truth_(child_19078)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19078);


var G__19079 = cljs.core.next(seq__18456_19072__$1);
var G__19080 = null;
var G__19081 = (0);
var G__19082 = (0);
seq__18456_19057 = G__19079;
chunk__18458_19058 = G__19080;
count__18459_19059 = G__19081;
i__18460_19060 = G__19082;
continue;
} else {
var G__19083 = cljs.core.next(seq__18456_19072__$1);
var G__19084 = null;
var G__19085 = (0);
var G__19086 = (0);
seq__18456_19057 = G__19083;
chunk__18458_19058 = G__19084;
count__18459_19059 = G__19085;
i__18460_19060 = G__19086;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19056);
}


var G__19088 = cljs.core.next(seq__18325_19048__$1);
var G__19089 = null;
var G__19090 = (0);
var G__19091 = (0);
seq__18325_19008 = G__19088;
chunk__18326_19009 = G__19089;
count__18327_19010 = G__19090;
i__18328_19011 = G__19091;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18510 = cljs.core.seq(node);
var chunk__18512 = null;
var count__18513 = (0);
var i__18514 = (0);
while(true){
if((i__18514 < count__18513)){
var n = chunk__18512.cljs$core$IIndexed$_nth$arity$2(null,i__18514);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19096 = seq__18510;
var G__19097 = chunk__18512;
var G__19098 = count__18513;
var G__19099 = (i__18514 + (1));
seq__18510 = G__19096;
chunk__18512 = G__19097;
count__18513 = G__19098;
i__18514 = G__19099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18510);
if(temp__5804__auto__){
var seq__18510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18510__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__18510__$1);
var G__19100 = cljs.core.chunk_rest(seq__18510__$1);
var G__19101 = c__5565__auto__;
var G__19102 = cljs.core.count(c__5565__auto__);
var G__19103 = (0);
seq__18510 = G__19100;
chunk__18512 = G__19101;
count__18513 = G__19102;
i__18514 = G__19103;
continue;
} else {
var n = cljs.core.first(seq__18510__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19104 = cljs.core.next(seq__18510__$1);
var G__19105 = null;
var G__19106 = (0);
var G__19107 = (0);
seq__18510 = G__19104;
chunk__18512 = G__19105;
count__18513 = G__19106;
i__18514 = G__19107;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18532 = arguments.length;
switch (G__18532) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18537 = arguments.length;
switch (G__18537) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18539 = arguments.length;
switch (G__18539) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___19115 = arguments.length;
var i__5767__auto___19116 = (0);
while(true){
if((i__5767__auto___19116 < len__5766__auto___19115)){
args__5772__auto__.push((arguments[i__5767__auto___19116]));

var G__19117 = (i__5767__auto___19116 + (1));
i__5767__auto___19116 = G__19117;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18566_19118 = cljs.core.seq(nodes);
var chunk__18567_19119 = null;
var count__18568_19120 = (0);
var i__18569_19121 = (0);
while(true){
if((i__18569_19121 < count__18568_19120)){
var node_19122 = chunk__18567_19119.cljs$core$IIndexed$_nth$arity$2(null,i__18569_19121);
fragment.appendChild(shadow.dom._to_dom(node_19122));


var G__19123 = seq__18566_19118;
var G__19124 = chunk__18567_19119;
var G__19125 = count__18568_19120;
var G__19126 = (i__18569_19121 + (1));
seq__18566_19118 = G__19123;
chunk__18567_19119 = G__19124;
count__18568_19120 = G__19125;
i__18569_19121 = G__19126;
continue;
} else {
var temp__5804__auto___19127 = cljs.core.seq(seq__18566_19118);
if(temp__5804__auto___19127){
var seq__18566_19128__$1 = temp__5804__auto___19127;
if(cljs.core.chunked_seq_QMARK_(seq__18566_19128__$1)){
var c__5565__auto___19129 = cljs.core.chunk_first(seq__18566_19128__$1);
var G__19130 = cljs.core.chunk_rest(seq__18566_19128__$1);
var G__19131 = c__5565__auto___19129;
var G__19132 = cljs.core.count(c__5565__auto___19129);
var G__19133 = (0);
seq__18566_19118 = G__19130;
chunk__18567_19119 = G__19131;
count__18568_19120 = G__19132;
i__18569_19121 = G__19133;
continue;
} else {
var node_19134 = cljs.core.first(seq__18566_19128__$1);
fragment.appendChild(shadow.dom._to_dom(node_19134));


var G__19136 = cljs.core.next(seq__18566_19128__$1);
var G__19137 = null;
var G__19138 = (0);
var G__19139 = (0);
seq__18566_19118 = G__19136;
chunk__18567_19119 = G__19137;
count__18568_19120 = G__19138;
i__18569_19121 = G__19139;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18560){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18560));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18583_19140 = cljs.core.seq(scripts);
var chunk__18584_19141 = null;
var count__18585_19142 = (0);
var i__18586_19143 = (0);
while(true){
if((i__18586_19143 < count__18585_19142)){
var vec__18601_19144 = chunk__18584_19141.cljs$core$IIndexed$_nth$arity$2(null,i__18586_19143);
var script_tag_19145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601_19144,(0),null);
var script_body_19146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18601_19144,(1),null);
eval(script_body_19146);


var G__19147 = seq__18583_19140;
var G__19148 = chunk__18584_19141;
var G__19149 = count__18585_19142;
var G__19150 = (i__18586_19143 + (1));
seq__18583_19140 = G__19147;
chunk__18584_19141 = G__19148;
count__18585_19142 = G__19149;
i__18586_19143 = G__19150;
continue;
} else {
var temp__5804__auto___19151 = cljs.core.seq(seq__18583_19140);
if(temp__5804__auto___19151){
var seq__18583_19152__$1 = temp__5804__auto___19151;
if(cljs.core.chunked_seq_QMARK_(seq__18583_19152__$1)){
var c__5565__auto___19153 = cljs.core.chunk_first(seq__18583_19152__$1);
var G__19154 = cljs.core.chunk_rest(seq__18583_19152__$1);
var G__19155 = c__5565__auto___19153;
var G__19156 = cljs.core.count(c__5565__auto___19153);
var G__19157 = (0);
seq__18583_19140 = G__19154;
chunk__18584_19141 = G__19155;
count__18585_19142 = G__19156;
i__18586_19143 = G__19157;
continue;
} else {
var vec__18607_19158 = cljs.core.first(seq__18583_19152__$1);
var script_tag_19159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607_19158,(0),null);
var script_body_19160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607_19158,(1),null);
eval(script_body_19160);


var G__19162 = cljs.core.next(seq__18583_19152__$1);
var G__19163 = null;
var G__19164 = (0);
var G__19165 = (0);
seq__18583_19140 = G__19162;
chunk__18584_19141 = G__19163;
count__18585_19142 = G__19164;
i__18586_19143 = G__19165;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18612){
var vec__18613 = p__18612;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18631 = arguments.length;
switch (G__18631) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18654 = cljs.core.seq(style_keys);
var chunk__18655 = null;
var count__18656 = (0);
var i__18657 = (0);
while(true){
if((i__18657 < count__18656)){
var it = chunk__18655.cljs$core$IIndexed$_nth$arity$2(null,i__18657);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19172 = seq__18654;
var G__19173 = chunk__18655;
var G__19174 = count__18656;
var G__19175 = (i__18657 + (1));
seq__18654 = G__19172;
chunk__18655 = G__19173;
count__18656 = G__19174;
i__18657 = G__19175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18654);
if(temp__5804__auto__){
var seq__18654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18654__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__18654__$1);
var G__19176 = cljs.core.chunk_rest(seq__18654__$1);
var G__19177 = c__5565__auto__;
var G__19178 = cljs.core.count(c__5565__auto__);
var G__19179 = (0);
seq__18654 = G__19176;
chunk__18655 = G__19177;
count__18656 = G__19178;
i__18657 = G__19179;
continue;
} else {
var it = cljs.core.first(seq__18654__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19180 = cljs.core.next(seq__18654__$1);
var G__19181 = null;
var G__19182 = (0);
var G__19183 = (0);
seq__18654 = G__19180;
chunk__18655 = G__19181;
count__18656 = G__19182;
i__18657 = G__19183;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k18667,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__18677 = k18667;
var G__18677__$1 = (((G__18677 instanceof cljs.core.Keyword))?G__18677.fqn:null);
switch (G__18677__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18667,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__18685){
var vec__18686 = p__18685;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18686,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18666){
var self__ = this;
var G__18666__$1 = this;
return (new cljs.core.RecordIter((0),G__18666__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18668,other18669){
var self__ = this;
var this18668__$1 = this;
return (((!((other18669 == null)))) && ((((this18668__$1.constructor === other18669.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18668__$1.x,other18669.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18668__$1.y,other18669.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18668__$1.__extmap,other18669.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k18667){
var self__ = this;
var this__5347__auto____$1 = this;
var G__18714 = k18667;
var G__18714__$1 = (((G__18714 instanceof cljs.core.Keyword))?G__18714.fqn:null);
switch (G__18714__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18667);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__18666){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__18715 = cljs.core.keyword_identical_QMARK_;
var expr__18716 = k__5349__auto__;
if(cljs.core.truth_((pred__18715.cljs$core$IFn$_invoke$arity$2 ? pred__18715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18716) : pred__18715.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18716)))){
return (new shadow.dom.Coordinate(G__18666,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18715.cljs$core$IFn$_invoke$arity$2 ? pred__18715.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18716) : pred__18715.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18716)))){
return (new shadow.dom.Coordinate(self__.x,G__18666,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__18666),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__18666){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18666,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18671){
var extmap__5382__auto__ = (function (){var G__18737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18671,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18737);
} else {
return G__18737;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18671),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18671),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k18752,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__18760 = k18752;
var G__18760__$1 = (((G__18760 instanceof cljs.core.Keyword))?G__18760.fqn:null);
switch (G__18760__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18752,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__18761){
var vec__18762 = p__18761;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18762,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18751){
var self__ = this;
var G__18751__$1 = this;
return (new cljs.core.RecordIter((0),G__18751__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18753,other18754){
var self__ = this;
var this18753__$1 = this;
return (((!((other18754 == null)))) && ((((this18753__$1.constructor === other18754.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.w,other18754.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.h,other18754.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18753__$1.__extmap,other18754.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k18752){
var self__ = this;
var this__5347__auto____$1 = this;
var G__18773 = k18752;
var G__18773__$1 = (((G__18773 instanceof cljs.core.Keyword))?G__18773.fqn:null);
switch (G__18773__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18752);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__18751){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__18774 = cljs.core.keyword_identical_QMARK_;
var expr__18775 = k__5349__auto__;
if(cljs.core.truth_((pred__18774.cljs$core$IFn$_invoke$arity$2 ? pred__18774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18775) : pred__18774.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18775)))){
return (new shadow.dom.Size(G__18751,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18774.cljs$core$IFn$_invoke$arity$2 ? pred__18774.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18775) : pred__18774.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18775)))){
return (new shadow.dom.Size(self__.w,G__18751,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__18751),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__18751){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18751,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18755){
var extmap__5382__auto__ = (function (){var G__18781 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18755,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18755)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18781);
} else {
return G__18781;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18755),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18755),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__19242 = (i + (1));
var G__19243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19242;
ret = G__19243;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18789){
var vec__18790 = p__18789;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18790,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18800 = arguments.length;
switch (G__18800) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19249 = ps;
var G__19250 = (i + (1));
el__$1 = G__19249;
i = G__19250;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18815 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18815,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18815,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18815,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18818_19251 = cljs.core.seq(props);
var chunk__18819_19252 = null;
var count__18820_19253 = (0);
var i__18821_19254 = (0);
while(true){
if((i__18821_19254 < count__18820_19253)){
var vec__18828_19255 = chunk__18819_19252.cljs$core$IIndexed$_nth$arity$2(null,i__18821_19254);
var k_19256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828_19255,(0),null);
var v_19257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18828_19255,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19256);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19256),v_19257);


var G__19258 = seq__18818_19251;
var G__19259 = chunk__18819_19252;
var G__19260 = count__18820_19253;
var G__19261 = (i__18821_19254 + (1));
seq__18818_19251 = G__19258;
chunk__18819_19252 = G__19259;
count__18820_19253 = G__19260;
i__18821_19254 = G__19261;
continue;
} else {
var temp__5804__auto___19262 = cljs.core.seq(seq__18818_19251);
if(temp__5804__auto___19262){
var seq__18818_19263__$1 = temp__5804__auto___19262;
if(cljs.core.chunked_seq_QMARK_(seq__18818_19263__$1)){
var c__5565__auto___19264 = cljs.core.chunk_first(seq__18818_19263__$1);
var G__19265 = cljs.core.chunk_rest(seq__18818_19263__$1);
var G__19266 = c__5565__auto___19264;
var G__19267 = cljs.core.count(c__5565__auto___19264);
var G__19268 = (0);
seq__18818_19251 = G__19265;
chunk__18819_19252 = G__19266;
count__18820_19253 = G__19267;
i__18821_19254 = G__19268;
continue;
} else {
var vec__18833_19269 = cljs.core.first(seq__18818_19263__$1);
var k_19270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19269,(0),null);
var v_19271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19269,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19270);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19270),v_19271);


var G__19272 = cljs.core.next(seq__18818_19263__$1);
var G__19273 = null;
var G__19274 = (0);
var G__19275 = (0);
seq__18818_19251 = G__19272;
chunk__18819_19252 = G__19273;
count__18820_19253 = G__19274;
i__18821_19254 = G__19275;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18840 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18840,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18840,(1),null);
var seq__18843_19276 = cljs.core.seq(node_children);
var chunk__18845_19277 = null;
var count__18846_19278 = (0);
var i__18847_19279 = (0);
while(true){
if((i__18847_19279 < count__18846_19278)){
var child_struct_19280 = chunk__18845_19277.cljs$core$IIndexed$_nth$arity$2(null,i__18847_19279);
if((!((child_struct_19280 == null)))){
if(typeof child_struct_19280 === 'string'){
var text_19281 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19281),child_struct_19280].join(''));
} else {
var children_19282 = shadow.dom.svg_node(child_struct_19280);
if(cljs.core.seq_QMARK_(children_19282)){
var seq__18861_19283 = cljs.core.seq(children_19282);
var chunk__18863_19284 = null;
var count__18864_19285 = (0);
var i__18865_19286 = (0);
while(true){
if((i__18865_19286 < count__18864_19285)){
var child_19287 = chunk__18863_19284.cljs$core$IIndexed$_nth$arity$2(null,i__18865_19286);
if(cljs.core.truth_(child_19287)){
node.appendChild(child_19287);


var G__19288 = seq__18861_19283;
var G__19289 = chunk__18863_19284;
var G__19290 = count__18864_19285;
var G__19291 = (i__18865_19286 + (1));
seq__18861_19283 = G__19288;
chunk__18863_19284 = G__19289;
count__18864_19285 = G__19290;
i__18865_19286 = G__19291;
continue;
} else {
var G__19295 = seq__18861_19283;
var G__19296 = chunk__18863_19284;
var G__19297 = count__18864_19285;
var G__19298 = (i__18865_19286 + (1));
seq__18861_19283 = G__19295;
chunk__18863_19284 = G__19296;
count__18864_19285 = G__19297;
i__18865_19286 = G__19298;
continue;
}
} else {
var temp__5804__auto___19299 = cljs.core.seq(seq__18861_19283);
if(temp__5804__auto___19299){
var seq__18861_19300__$1 = temp__5804__auto___19299;
if(cljs.core.chunked_seq_QMARK_(seq__18861_19300__$1)){
var c__5565__auto___19301 = cljs.core.chunk_first(seq__18861_19300__$1);
var G__19302 = cljs.core.chunk_rest(seq__18861_19300__$1);
var G__19303 = c__5565__auto___19301;
var G__19304 = cljs.core.count(c__5565__auto___19301);
var G__19305 = (0);
seq__18861_19283 = G__19302;
chunk__18863_19284 = G__19303;
count__18864_19285 = G__19304;
i__18865_19286 = G__19305;
continue;
} else {
var child_19306 = cljs.core.first(seq__18861_19300__$1);
if(cljs.core.truth_(child_19306)){
node.appendChild(child_19306);


var G__19307 = cljs.core.next(seq__18861_19300__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__18861_19283 = G__19307;
chunk__18863_19284 = G__19308;
count__18864_19285 = G__19309;
i__18865_19286 = G__19310;
continue;
} else {
var G__19311 = cljs.core.next(seq__18861_19300__$1);
var G__19312 = null;
var G__19313 = (0);
var G__19314 = (0);
seq__18861_19283 = G__19311;
chunk__18863_19284 = G__19312;
count__18864_19285 = G__19313;
i__18865_19286 = G__19314;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19282);
}
}


var G__19315 = seq__18843_19276;
var G__19316 = chunk__18845_19277;
var G__19317 = count__18846_19278;
var G__19318 = (i__18847_19279 + (1));
seq__18843_19276 = G__19315;
chunk__18845_19277 = G__19316;
count__18846_19278 = G__19317;
i__18847_19279 = G__19318;
continue;
} else {
var G__19319 = seq__18843_19276;
var G__19320 = chunk__18845_19277;
var G__19321 = count__18846_19278;
var G__19322 = (i__18847_19279 + (1));
seq__18843_19276 = G__19319;
chunk__18845_19277 = G__19320;
count__18846_19278 = G__19321;
i__18847_19279 = G__19322;
continue;
}
} else {
var temp__5804__auto___19323 = cljs.core.seq(seq__18843_19276);
if(temp__5804__auto___19323){
var seq__18843_19324__$1 = temp__5804__auto___19323;
if(cljs.core.chunked_seq_QMARK_(seq__18843_19324__$1)){
var c__5565__auto___19325 = cljs.core.chunk_first(seq__18843_19324__$1);
var G__19326 = cljs.core.chunk_rest(seq__18843_19324__$1);
var G__19327 = c__5565__auto___19325;
var G__19328 = cljs.core.count(c__5565__auto___19325);
var G__19329 = (0);
seq__18843_19276 = G__19326;
chunk__18845_19277 = G__19327;
count__18846_19278 = G__19328;
i__18847_19279 = G__19329;
continue;
} else {
var child_struct_19330 = cljs.core.first(seq__18843_19324__$1);
if((!((child_struct_19330 == null)))){
if(typeof child_struct_19330 === 'string'){
var text_19331 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19331),child_struct_19330].join(''));
} else {
var children_19332 = shadow.dom.svg_node(child_struct_19330);
if(cljs.core.seq_QMARK_(children_19332)){
var seq__18868_19333 = cljs.core.seq(children_19332);
var chunk__18870_19334 = null;
var count__18871_19335 = (0);
var i__18872_19336 = (0);
while(true){
if((i__18872_19336 < count__18871_19335)){
var child_19337 = chunk__18870_19334.cljs$core$IIndexed$_nth$arity$2(null,i__18872_19336);
if(cljs.core.truth_(child_19337)){
node.appendChild(child_19337);


var G__19338 = seq__18868_19333;
var G__19339 = chunk__18870_19334;
var G__19340 = count__18871_19335;
var G__19341 = (i__18872_19336 + (1));
seq__18868_19333 = G__19338;
chunk__18870_19334 = G__19339;
count__18871_19335 = G__19340;
i__18872_19336 = G__19341;
continue;
} else {
var G__19342 = seq__18868_19333;
var G__19343 = chunk__18870_19334;
var G__19344 = count__18871_19335;
var G__19345 = (i__18872_19336 + (1));
seq__18868_19333 = G__19342;
chunk__18870_19334 = G__19343;
count__18871_19335 = G__19344;
i__18872_19336 = G__19345;
continue;
}
} else {
var temp__5804__auto___19346__$1 = cljs.core.seq(seq__18868_19333);
if(temp__5804__auto___19346__$1){
var seq__18868_19347__$1 = temp__5804__auto___19346__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18868_19347__$1)){
var c__5565__auto___19348 = cljs.core.chunk_first(seq__18868_19347__$1);
var G__19349 = cljs.core.chunk_rest(seq__18868_19347__$1);
var G__19350 = c__5565__auto___19348;
var G__19351 = cljs.core.count(c__5565__auto___19348);
var G__19352 = (0);
seq__18868_19333 = G__19349;
chunk__18870_19334 = G__19350;
count__18871_19335 = G__19351;
i__18872_19336 = G__19352;
continue;
} else {
var child_19353 = cljs.core.first(seq__18868_19347__$1);
if(cljs.core.truth_(child_19353)){
node.appendChild(child_19353);


var G__19354 = cljs.core.next(seq__18868_19347__$1);
var G__19355 = null;
var G__19356 = (0);
var G__19357 = (0);
seq__18868_19333 = G__19354;
chunk__18870_19334 = G__19355;
count__18871_19335 = G__19356;
i__18872_19336 = G__19357;
continue;
} else {
var G__19358 = cljs.core.next(seq__18868_19347__$1);
var G__19359 = null;
var G__19360 = (0);
var G__19361 = (0);
seq__18868_19333 = G__19358;
chunk__18870_19334 = G__19359;
count__18871_19335 = G__19360;
i__18872_19336 = G__19361;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19332);
}
}


var G__19362 = cljs.core.next(seq__18843_19324__$1);
var G__19363 = null;
var G__19364 = (0);
var G__19365 = (0);
seq__18843_19276 = G__19362;
chunk__18845_19277 = G__19363;
count__18846_19278 = G__19364;
i__18847_19279 = G__19365;
continue;
} else {
var G__19366 = cljs.core.next(seq__18843_19324__$1);
var G__19367 = null;
var G__19368 = (0);
var G__19369 = (0);
seq__18843_19276 = G__19366;
chunk__18845_19277 = G__19367;
count__18846_19278 = G__19368;
i__18847_19279 = G__19369;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___19370 = arguments.length;
var i__5767__auto___19371 = (0);
while(true){
if((i__5767__auto___19371 < len__5766__auto___19370)){
args__5772__auto__.push((arguments[i__5767__auto___19371]));

var G__19372 = (i__5767__auto___19371 + (1));
i__5767__auto___19371 = G__19372;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18881){
var G__18882 = cljs.core.first(seq18881);
var seq18881__$1 = cljs.core.next(seq18881);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18882,seq18881__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18884 = arguments.length;
switch (G__18884) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__14365__auto___19377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_18903){
var state_val_18907 = (state_18903[(1)]);
if((state_val_18907 === (1))){
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(2),once_or_cleanup);
} else {
if((state_val_18907 === (2))){
var inst_18900 = (state_18903[(2)]);
var inst_18901 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18903__$1 = (function (){var statearr_18911 = state_18903;
(statearr_18911[(7)] = inst_18900);

return statearr_18911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18903__$1,inst_18901);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14016__auto__ = null;
var shadow$dom$state_machine__14016__auto____0 = (function (){
var statearr_18915 = [null,null,null,null,null,null,null,null];
(statearr_18915[(0)] = shadow$dom$state_machine__14016__auto__);

(statearr_18915[(1)] = (1));

return statearr_18915;
});
var shadow$dom$state_machine__14016__auto____1 = (function (state_18903){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_18903);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e18927){var ex__14020__auto__ = e18927;
var statearr_18928_19380 = state_18903;
(statearr_18928_19380[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_18903[(4)]))){
var statearr_18929_19381 = state_18903;
(statearr_18929_19381[(1)] = cljs.core.first((state_18903[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19382 = state_18903;
state_18903 = G__19382;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
shadow$dom$state_machine__14016__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14016__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14016__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14016__auto____0;
shadow$dom$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14016__auto____1;
return shadow$dom$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_18936 = f__14366__auto__();
(statearr_18936[(6)] = c__14365__auto___19377);

return statearr_18936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
