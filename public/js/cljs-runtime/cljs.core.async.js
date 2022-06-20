goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14504 = arguments.length;
switch (G__14504) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14512 = (function (f,blockable,meta14513){
this.f = f;
this.blockable = blockable;
this.meta14513 = meta14513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14514,meta14513__$1){
var self__ = this;
var _14514__$1 = this;
return (new cljs.core.async.t_cljs$core$async14512(self__.f,self__.blockable,meta14513__$1));
}));

(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14514){
var self__ = this;
var _14514__$1 = this;
return self__.meta14513;
}));

(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14513","meta14513",-446486442,null)], null);
}));

(cljs.core.async.t_cljs$core$async14512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14512");

(cljs.core.async.t_cljs$core$async14512.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async14512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14512.
 */
cljs.core.async.__GT_t_cljs$core$async14512 = (function cljs$core$async$__GT_t_cljs$core$async14512(f__$1,blockable__$1,meta14513){
return (new cljs.core.async.t_cljs$core$async14512(f__$1,blockable__$1,meta14513));
});

}

return (new cljs.core.async.t_cljs$core$async14512(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14538 = arguments.length;
switch (G__14538) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14542 = arguments.length;
switch (G__14542) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14554 = arguments.length;
switch (G__14554) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17593 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17593) : fn1.call(null,val_17593));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17593) : fn1.call(null,val_17593));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14563 = arguments.length;
switch (G__14563) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___17615 = n;
var x_17616 = (0);
while(true){
if((x_17616 < n__5633__auto___17615)){
(a[x_17616] = x_17616);

var G__17617 = (x_17616 + (1));
x_17616 = G__17617;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14576 = (function (flag,meta14577){
this.flag = flag;
this.meta14577 = meta14577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14578,meta14577__$1){
var self__ = this;
var _14578__$1 = this;
return (new cljs.core.async.t_cljs$core$async14576(self__.flag,meta14577__$1));
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14578){
var self__ = this;
var _14578__$1 = this;
return self__.meta14577;
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14577","meta14577",-1169559747,null)], null);
}));

(cljs.core.async.t_cljs$core$async14576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14576");

(cljs.core.async.t_cljs$core$async14576.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async14576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14576.
 */
cljs.core.async.__GT_t_cljs$core$async14576 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14576(flag__$1,meta14577){
return (new cljs.core.async.t_cljs$core$async14576(flag__$1,meta14577));
});

}

return (new cljs.core.async.t_cljs$core$async14576(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14590 = (function (flag,cb,meta14591){
this.flag = flag;
this.cb = cb;
this.meta14591 = meta14591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14592,meta14591__$1){
var self__ = this;
var _14592__$1 = this;
return (new cljs.core.async.t_cljs$core$async14590(self__.flag,self__.cb,meta14591__$1));
}));

(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14592){
var self__ = this;
var _14592__$1 = this;
return self__.meta14591;
}));

(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14591","meta14591",-1886330646,null)], null);
}));

(cljs.core.async.t_cljs$core$async14590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14590");

(cljs.core.async.t_cljs$core$async14590.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async14590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14590.
 */
cljs.core.async.__GT_t_cljs$core$async14590 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14590(flag__$1,cb__$1,meta14591){
return (new cljs.core.async.t_cljs$core$async14590(flag__$1,cb__$1,meta14591));
});

}

return (new cljs.core.async.t_cljs$core$async14590(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14601_SHARP_){
var G__14608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14601_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14608) : fret.call(null,G__14608));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14602_SHARP_){
var G__14609 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14602_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14609) : fret.call(null,G__14609));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17648 = (i + (1));
i = G__17648;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17656 = arguments.length;
var i__5767__auto___17658 = (0);
while(true){
if((i__5767__auto___17658 < len__5766__auto___17656)){
args__5772__auto__.push((arguments[i__5767__auto___17658]));

var G__17659 = (i__5767__auto___17658 + (1));
i__5767__auto___17658 = G__17659;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14634){
var map__14638 = p__14634;
var map__14638__$1 = cljs.core.__destructure_map(map__14638);
var opts = map__14638__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14623){
var G__14624 = cljs.core.first(seq14623);
var seq14623__$1 = cljs.core.next(seq14623);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14624,seq14623__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14676 = arguments.length;
switch (G__14676) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14365__auto___17672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_14712){
var state_val_14713 = (state_14712[(1)]);
if((state_val_14713 === (7))){
var inst_14705 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
var statearr_14721_17676 = state_14712__$1;
(statearr_14721_17676[(2)] = inst_14705);

(statearr_14721_17676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (1))){
var state_14712__$1 = state_14712;
var statearr_14722_17677 = state_14712__$1;
(statearr_14722_17677[(2)] = null);

(statearr_14722_17677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (4))){
var inst_14687 = (state_14712[(7)]);
var inst_14687__$1 = (state_14712[(2)]);
var inst_14688 = (inst_14687__$1 == null);
var state_14712__$1 = (function (){var statearr_14723 = state_14712;
(statearr_14723[(7)] = inst_14687__$1);

return statearr_14723;
})();
if(cljs.core.truth_(inst_14688)){
var statearr_14724_17681 = state_14712__$1;
(statearr_14724_17681[(1)] = (5));

} else {
var statearr_14725_17682 = state_14712__$1;
(statearr_14725_17682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (13))){
var state_14712__$1 = state_14712;
var statearr_14726_17684 = state_14712__$1;
(statearr_14726_17684[(2)] = null);

(statearr_14726_17684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (6))){
var inst_14687 = (state_14712[(7)]);
var state_14712__$1 = state_14712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14712__$1,(11),to,inst_14687);
} else {
if((state_val_14713 === (3))){
var inst_14710 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14712__$1,inst_14710);
} else {
if((state_val_14713 === (12))){
var state_14712__$1 = state_14712;
var statearr_14729_17690 = state_14712__$1;
(statearr_14729_17690[(2)] = null);

(statearr_14729_17690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (2))){
var state_14712__$1 = state_14712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14712__$1,(4),from);
} else {
if((state_val_14713 === (11))){
var inst_14698 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
if(cljs.core.truth_(inst_14698)){
var statearr_14732_17692 = state_14712__$1;
(statearr_14732_17692[(1)] = (12));

} else {
var statearr_14737_17693 = state_14712__$1;
(statearr_14737_17693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (9))){
var state_14712__$1 = state_14712;
var statearr_14738_17697 = state_14712__$1;
(statearr_14738_17697[(2)] = null);

(statearr_14738_17697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (5))){
var state_14712__$1 = state_14712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14739_17699 = state_14712__$1;
(statearr_14739_17699[(1)] = (8));

} else {
var statearr_14740_17700 = state_14712__$1;
(statearr_14740_17700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (14))){
var inst_14703 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
var statearr_14741_17701 = state_14712__$1;
(statearr_14741_17701[(2)] = inst_14703);

(statearr_14741_17701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (10))){
var inst_14695 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
var statearr_14742_17702 = state_14712__$1;
(statearr_14742_17702[(2)] = inst_14695);

(statearr_14742_17702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (8))){
var inst_14691 = cljs.core.async.close_BANG_(to);
var state_14712__$1 = state_14712;
var statearr_14743_17703 = state_14712__$1;
(statearr_14743_17703[(2)] = inst_14691);

(statearr_14743_17703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_14744 = [null,null,null,null,null,null,null,null];
(statearr_14744[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_14744[(1)] = (1));

return statearr_14744;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_14712){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14712);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e14745){var ex__14020__auto__ = e14745;
var statearr_14746_17709 = state_14712;
(statearr_14746_17709[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_14712[(4)]))){
var statearr_14747_17714 = state_14712;
(statearr_14747_17714[(1)] = cljs.core.first((state_14712[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17716 = state_14712;
state_14712 = G__17716;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_14712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_14712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_14759 = f__14366__auto__();
(statearr_14759[(6)] = c__14365__auto___17672);

return statearr_14759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14764){
var vec__14765 = p__14764;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(1),null);
var job = vec__14765;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14365__auto___17722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_14776){
var state_val_14777 = (state_14776[(1)]);
if((state_val_14777 === (1))){
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14776__$1,(2),res,v);
} else {
if((state_val_14777 === (2))){
var inst_14773 = (state_14776[(2)]);
var inst_14774 = cljs.core.async.close_BANG_(res);
var state_14776__$1 = (function (){var statearr_14778 = state_14776;
(statearr_14778[(7)] = inst_14773);

return statearr_14778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14776__$1,inst_14774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_14780 = [null,null,null,null,null,null,null,null];
(statearr_14780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_14780[(1)] = (1));

return statearr_14780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_14776){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14776);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e14781){var ex__14020__auto__ = e14781;
var statearr_14782_17735 = state_14776;
(statearr_14782_17735[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_14776[(4)]))){
var statearr_14783_17736 = state_14776;
(statearr_14783_17736[(1)] = cljs.core.first((state_14776[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17737 = state_14776;
state_14776 = G__17737;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_14787 = f__14366__auto__();
(statearr_14787[(6)] = c__14365__auto___17722);

return statearr_14787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14789){
var vec__14790 = p__14789;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(1),null);
var job = vec__14790;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___17740 = n;
var __17741 = (0);
while(true){
if((__17741 < n__5633__auto___17740)){
var G__14801_17746 = type;
var G__14801_17747__$1 = (((G__14801_17746 instanceof cljs.core.Keyword))?G__14801_17746.fqn:null);
switch (G__14801_17747__$1) {
case "compute":
var c__14365__auto___17749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17741,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = ((function (__17741,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function (state_14821){
var state_val_14822 = (state_14821[(1)]);
if((state_val_14822 === (1))){
var state_14821__$1 = state_14821;
var statearr_14823_17751 = state_14821__$1;
(statearr_14823_17751[(2)] = null);

(statearr_14823_17751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14822 === (2))){
var state_14821__$1 = state_14821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14821__$1,(4),jobs);
} else {
if((state_val_14822 === (3))){
var inst_14817 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14821__$1,inst_14817);
} else {
if((state_val_14822 === (4))){
var inst_14804 = (state_14821[(2)]);
var inst_14805 = process__$1(inst_14804);
var state_14821__$1 = state_14821;
if(cljs.core.truth_(inst_14805)){
var statearr_14824_17755 = state_14821__$1;
(statearr_14824_17755[(1)] = (5));

} else {
var statearr_14825_17757 = state_14821__$1;
(statearr_14825_17757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14822 === (5))){
var state_14821__$1 = state_14821;
var statearr_14826_17759 = state_14821__$1;
(statearr_14826_17759[(2)] = null);

(statearr_14826_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14822 === (6))){
var state_14821__$1 = state_14821;
var statearr_14827_17760 = state_14821__$1;
(statearr_14827_17760[(2)] = null);

(statearr_14827_17760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14822 === (7))){
var inst_14815 = (state_14821[(2)]);
var state_14821__$1 = state_14821;
var statearr_14832_17762 = state_14821__$1;
(statearr_14832_17762[(2)] = inst_14815);

(statearr_14832_17762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17741,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
;
return ((function (__17741,switch__14015__auto__,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_14833 = [null,null,null,null,null,null,null];
(statearr_14833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_14833[(1)] = (1));

return statearr_14833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_14821){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14821);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e14834){var ex__14020__auto__ = e14834;
var statearr_14835_17769 = state_14821;
(statearr_14835_17769[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_14821[(4)]))){
var statearr_14836_17770 = state_14821;
(statearr_14836_17770[(1)] = cljs.core.first((state_14821[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17773 = state_14821;
state_14821 = G__17773;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_14821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_14821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
;})(__17741,switch__14015__auto__,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
})();
var state__14367__auto__ = (function (){var statearr_14837 = f__14366__auto__();
(statearr_14837[(6)] = c__14365__auto___17749);

return statearr_14837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
});})(__17741,c__14365__auto___17749,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
);


break;
case "async":
var c__14365__auto___17778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17741,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = ((function (__17741,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function (state_14853){
var state_val_14854 = (state_14853[(1)]);
if((state_val_14854 === (1))){
var state_14853__$1 = state_14853;
var statearr_14860_17779 = state_14853__$1;
(statearr_14860_17779[(2)] = null);

(statearr_14860_17779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (2))){
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14853__$1,(4),jobs);
} else {
if((state_val_14854 === (3))){
var inst_14848 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14853__$1,inst_14848);
} else {
if((state_val_14854 === (4))){
var inst_14840 = (state_14853[(2)]);
var inst_14841 = async(inst_14840);
var state_14853__$1 = state_14853;
if(cljs.core.truth_(inst_14841)){
var statearr_14861_17782 = state_14853__$1;
(statearr_14861_17782[(1)] = (5));

} else {
var statearr_14864_17783 = state_14853__$1;
(statearr_14864_17783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (5))){
var state_14853__$1 = state_14853;
var statearr_14866_17789 = state_14853__$1;
(statearr_14866_17789[(2)] = null);

(statearr_14866_17789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (6))){
var state_14853__$1 = state_14853;
var statearr_14867_17791 = state_14853__$1;
(statearr_14867_17791[(2)] = null);

(statearr_14867_17791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14854 === (7))){
var inst_14846 = (state_14853[(2)]);
var state_14853__$1 = state_14853;
var statearr_14870_17792 = state_14853__$1;
(statearr_14870_17792[(2)] = inst_14846);

(statearr_14870_17792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17741,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
;
return ((function (__17741,switch__14015__auto__,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_14875 = [null,null,null,null,null,null,null];
(statearr_14875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_14875[(1)] = (1));

return statearr_14875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_14853){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14853);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e14877){var ex__14020__auto__ = e14877;
var statearr_14878_17802 = state_14853;
(statearr_14878_17802[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_14853[(4)]))){
var statearr_14879_17803 = state_14853;
(statearr_14879_17803[(1)] = cljs.core.first((state_14853[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17804 = state_14853;
state_14853 = G__17804;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_14853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_14853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
;})(__17741,switch__14015__auto__,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
})();
var state__14367__auto__ = (function (){var statearr_14882 = f__14366__auto__();
(statearr_14882[(6)] = c__14365__auto___17778);

return statearr_14882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
});})(__17741,c__14365__auto___17778,G__14801_17746,G__14801_17747__$1,n__5633__auto___17740,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14801_17747__$1)].join('')));

}

var G__17805 = (__17741 + (1));
__17741 = G__17805;
continue;
} else {
}
break;
}

var c__14365__auto___17806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_14908){
var state_val_14909 = (state_14908[(1)]);
if((state_val_14909 === (7))){
var inst_14903 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14925_17809 = state_14908__$1;
(statearr_14925_17809[(2)] = inst_14903);

(statearr_14925_17809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (1))){
var state_14908__$1 = state_14908;
var statearr_14926_17810 = state_14908__$1;
(statearr_14926_17810[(2)] = null);

(statearr_14926_17810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (4))){
var inst_14886 = (state_14908[(7)]);
var inst_14886__$1 = (state_14908[(2)]);
var inst_14888 = (inst_14886__$1 == null);
var state_14908__$1 = (function (){var statearr_14930 = state_14908;
(statearr_14930[(7)] = inst_14886__$1);

return statearr_14930;
})();
if(cljs.core.truth_(inst_14888)){
var statearr_14931_17811 = state_14908__$1;
(statearr_14931_17811[(1)] = (5));

} else {
var statearr_14935_17812 = state_14908__$1;
(statearr_14935_17812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (6))){
var inst_14886 = (state_14908[(7)]);
var inst_14893 = (state_14908[(8)]);
var inst_14893__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14895 = [inst_14886,inst_14893__$1];
var inst_14896 = (new cljs.core.PersistentVector(null,2,(5),inst_14894,inst_14895,null));
var state_14908__$1 = (function (){var statearr_14940 = state_14908;
(statearr_14940[(8)] = inst_14893__$1);

return statearr_14940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14908__$1,(8),jobs,inst_14896);
} else {
if((state_val_14909 === (3))){
var inst_14905 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14908__$1,inst_14905);
} else {
if((state_val_14909 === (2))){
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(4),from);
} else {
if((state_val_14909 === (9))){
var inst_14900 = (state_14908[(2)]);
var state_14908__$1 = (function (){var statearr_14950 = state_14908;
(statearr_14950[(9)] = inst_14900);

return statearr_14950;
})();
var statearr_14951_17813 = state_14908__$1;
(statearr_14951_17813[(2)] = null);

(statearr_14951_17813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (5))){
var inst_14891 = cljs.core.async.close_BANG_(jobs);
var state_14908__$1 = state_14908;
var statearr_14959_17814 = state_14908__$1;
(statearr_14959_17814[(2)] = inst_14891);

(statearr_14959_17814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14909 === (8))){
var inst_14893 = (state_14908[(8)]);
var inst_14898 = (state_14908[(2)]);
var state_14908__$1 = (function (){var statearr_14960 = state_14908;
(statearr_14960[(10)] = inst_14898);

return statearr_14960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14908__$1,(9),results,inst_14893);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_14961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_14961[(1)] = (1));

return statearr_14961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_14908){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14908);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e14963){var ex__14020__auto__ = e14963;
var statearr_14964_17816 = state_14908;
(statearr_14964_17816[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_14908[(4)]))){
var statearr_14966_17818 = state_14908;
(statearr_14966_17818[(1)] = cljs.core.first((state_14908[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17821 = state_14908;
state_14908 = G__17821;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_14908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_14908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_14981 = f__14366__auto__();
(statearr_14981[(6)] = c__14365__auto___17806);

return statearr_14981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


var c__14365__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15026){
var state_val_15027 = (state_15026[(1)]);
if((state_val_15027 === (7))){
var inst_15022 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15028_17830 = state_15026__$1;
(statearr_15028_17830[(2)] = inst_15022);

(statearr_15028_17830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (20))){
var state_15026__$1 = state_15026;
var statearr_15029_17831 = state_15026__$1;
(statearr_15029_17831[(2)] = null);

(statearr_15029_17831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (1))){
var state_15026__$1 = state_15026;
var statearr_15030_17834 = state_15026__$1;
(statearr_15030_17834[(2)] = null);

(statearr_15030_17834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (4))){
var inst_14984 = (state_15026[(7)]);
var inst_14984__$1 = (state_15026[(2)]);
var inst_14985 = (inst_14984__$1 == null);
var state_15026__$1 = (function (){var statearr_15031 = state_15026;
(statearr_15031[(7)] = inst_14984__$1);

return statearr_15031;
})();
if(cljs.core.truth_(inst_14985)){
var statearr_15032_17838 = state_15026__$1;
(statearr_15032_17838[(1)] = (5));

} else {
var statearr_15033_17839 = state_15026__$1;
(statearr_15033_17839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (15))){
var inst_15003 = (state_15026[(8)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15026__$1,(18),to,inst_15003);
} else {
if((state_val_15027 === (21))){
var inst_15017 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15034_17843 = state_15026__$1;
(statearr_15034_17843[(2)] = inst_15017);

(statearr_15034_17843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (13))){
var inst_15019 = (state_15026[(2)]);
var state_15026__$1 = (function (){var statearr_15035 = state_15026;
(statearr_15035[(9)] = inst_15019);

return statearr_15035;
})();
var statearr_15036_17844 = state_15026__$1;
(statearr_15036_17844[(2)] = null);

(statearr_15036_17844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (6))){
var inst_14984 = (state_15026[(7)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15026__$1,(11),inst_14984);
} else {
if((state_val_15027 === (17))){
var inst_15012 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
if(cljs.core.truth_(inst_15012)){
var statearr_15037_17846 = state_15026__$1;
(statearr_15037_17846[(1)] = (19));

} else {
var statearr_15041_17847 = state_15026__$1;
(statearr_15041_17847[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (3))){
var inst_15024 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15026__$1,inst_15024);
} else {
if((state_val_15027 === (12))){
var inst_15000 = (state_15026[(10)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15026__$1,(14),inst_15000);
} else {
if((state_val_15027 === (2))){
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15026__$1,(4),results);
} else {
if((state_val_15027 === (19))){
var state_15026__$1 = state_15026;
var statearr_15043_17848 = state_15026__$1;
(statearr_15043_17848[(2)] = null);

(statearr_15043_17848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (11))){
var inst_15000 = (state_15026[(2)]);
var state_15026__$1 = (function (){var statearr_15044 = state_15026;
(statearr_15044[(10)] = inst_15000);

return statearr_15044;
})();
var statearr_15045_17850 = state_15026__$1;
(statearr_15045_17850[(2)] = null);

(statearr_15045_17850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (9))){
var state_15026__$1 = state_15026;
var statearr_15046_17851 = state_15026__$1;
(statearr_15046_17851[(2)] = null);

(statearr_15046_17851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (5))){
var state_15026__$1 = state_15026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15047_17854 = state_15026__$1;
(statearr_15047_17854[(1)] = (8));

} else {
var statearr_15053_17855 = state_15026__$1;
(statearr_15053_17855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (14))){
var inst_15003 = (state_15026[(8)]);
var inst_15006 = (state_15026[(11)]);
var inst_15003__$1 = (state_15026[(2)]);
var inst_15005 = (inst_15003__$1 == null);
var inst_15006__$1 = cljs.core.not(inst_15005);
var state_15026__$1 = (function (){var statearr_15054 = state_15026;
(statearr_15054[(8)] = inst_15003__$1);

(statearr_15054[(11)] = inst_15006__$1);

return statearr_15054;
})();
if(inst_15006__$1){
var statearr_15056_17857 = state_15026__$1;
(statearr_15056_17857[(1)] = (15));

} else {
var statearr_15057_17858 = state_15026__$1;
(statearr_15057_17858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (16))){
var inst_15006 = (state_15026[(11)]);
var state_15026__$1 = state_15026;
var statearr_15058_17860 = state_15026__$1;
(statearr_15058_17860[(2)] = inst_15006);

(statearr_15058_17860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (10))){
var inst_14993 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15063_17862 = state_15026__$1;
(statearr_15063_17862[(2)] = inst_14993);

(statearr_15063_17862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (18))){
var inst_15009 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15070_17865 = state_15026__$1;
(statearr_15070_17865[(2)] = inst_15009);

(statearr_15070_17865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (8))){
var inst_14988 = cljs.core.async.close_BANG_(to);
var state_15026__$1 = state_15026;
var statearr_15071_17866 = state_15026__$1;
(statearr_15071_17866[(2)] = inst_14988);

(statearr_15071_17866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15072[(1)] = (1));

return statearr_15072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15026){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15026);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15073){var ex__14020__auto__ = e15073;
var statearr_15074_17870 = state_15026;
(statearr_15074_17870[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15026[(4)]))){
var statearr_15075_17872 = state_15026;
(statearr_15075_17872[(1)] = cljs.core.first((state_15026[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17873 = state_15026;
state_15026 = G__17873;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15078 = f__14366__auto__();
(statearr_15078[(6)] = c__14365__auto__);

return statearr_15078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

return c__14365__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15080 = arguments.length;
switch (G__15080) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15089 = arguments.length;
switch (G__15089) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15097 = arguments.length;
switch (G__15097) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14365__auto___17890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15146){
var state_val_15147 = (state_15146[(1)]);
if((state_val_15147 === (7))){
var inst_15142 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
var statearr_15150_17891 = state_15146__$1;
(statearr_15150_17891[(2)] = inst_15142);

(statearr_15150_17891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (1))){
var state_15146__$1 = state_15146;
var statearr_15157_17894 = state_15146__$1;
(statearr_15157_17894[(2)] = null);

(statearr_15157_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (4))){
var inst_15120 = (state_15146[(7)]);
var inst_15120__$1 = (state_15146[(2)]);
var inst_15121 = (inst_15120__$1 == null);
var state_15146__$1 = (function (){var statearr_15158 = state_15146;
(statearr_15158[(7)] = inst_15120__$1);

return statearr_15158;
})();
if(cljs.core.truth_(inst_15121)){
var statearr_15161_17898 = state_15146__$1;
(statearr_15161_17898[(1)] = (5));

} else {
var statearr_15162_17900 = state_15146__$1;
(statearr_15162_17900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (13))){
var state_15146__$1 = state_15146;
var statearr_15163_17901 = state_15146__$1;
(statearr_15163_17901[(2)] = null);

(statearr_15163_17901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (6))){
var inst_15120 = (state_15146[(7)]);
var inst_15128 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15120) : p.call(null,inst_15120));
var state_15146__$1 = state_15146;
if(cljs.core.truth_(inst_15128)){
var statearr_15164_17903 = state_15146__$1;
(statearr_15164_17903[(1)] = (9));

} else {
var statearr_15165_17904 = state_15146__$1;
(statearr_15165_17904[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (3))){
var inst_15144 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15146__$1,inst_15144);
} else {
if((state_val_15147 === (12))){
var state_15146__$1 = state_15146;
var statearr_15167_17908 = state_15146__$1;
(statearr_15167_17908[(2)] = null);

(statearr_15167_17908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (2))){
var state_15146__$1 = state_15146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15146__$1,(4),ch);
} else {
if((state_val_15147 === (11))){
var inst_15120 = (state_15146[(7)]);
var inst_15133 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15146__$1,(8),inst_15133,inst_15120);
} else {
if((state_val_15147 === (9))){
var state_15146__$1 = state_15146;
var statearr_15181_17911 = state_15146__$1;
(statearr_15181_17911[(2)] = tc);

(statearr_15181_17911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (5))){
var inst_15123 = cljs.core.async.close_BANG_(tc);
var inst_15124 = cljs.core.async.close_BANG_(fc);
var state_15146__$1 = (function (){var statearr_15192 = state_15146;
(statearr_15192[(8)] = inst_15123);

return statearr_15192;
})();
var statearr_15193_17914 = state_15146__$1;
(statearr_15193_17914[(2)] = inst_15124);

(statearr_15193_17914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (14))){
var inst_15140 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
var statearr_15196_17917 = state_15146__$1;
(statearr_15196_17917[(2)] = inst_15140);

(statearr_15196_17917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (10))){
var state_15146__$1 = state_15146;
var statearr_15199_17919 = state_15146__$1;
(statearr_15199_17919[(2)] = fc);

(statearr_15199_17919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (8))){
var inst_15135 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
if(cljs.core.truth_(inst_15135)){
var statearr_15205_17920 = state_15146__$1;
(statearr_15205_17920[(1)] = (12));

} else {
var statearr_15207_17921 = state_15146__$1;
(statearr_15207_17921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_15220 = [null,null,null,null,null,null,null,null,null];
(statearr_15220[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_15220[(1)] = (1));

return statearr_15220;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_15146){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15146);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15225){var ex__14020__auto__ = e15225;
var statearr_15226_17929 = state_15146;
(statearr_15226_17929[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15146[(4)]))){
var statearr_15227_17935 = state_15146;
(statearr_15227_17935[(1)] = cljs.core.first((state_15146[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17940 = state_15146;
state_15146 = G__17940;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_15146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_15146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15240 = f__14366__auto__();
(statearr_15240[(6)] = c__14365__auto___17890);

return statearr_15240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14365__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15282){
var state_val_15283 = (state_15282[(1)]);
if((state_val_15283 === (7))){
var inst_15278 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15285_17945 = state_15282__$1;
(statearr_15285_17945[(2)] = inst_15278);

(statearr_15285_17945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (1))){
var inst_15258 = init;
var inst_15259 = inst_15258;
var state_15282__$1 = (function (){var statearr_15291 = state_15282;
(statearr_15291[(7)] = inst_15259);

return statearr_15291;
})();
var statearr_15292_17947 = state_15282__$1;
(statearr_15292_17947[(2)] = null);

(statearr_15292_17947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (4))){
var inst_15263 = (state_15282[(8)]);
var inst_15263__$1 = (state_15282[(2)]);
var inst_15265 = (inst_15263__$1 == null);
var state_15282__$1 = (function (){var statearr_15293 = state_15282;
(statearr_15293[(8)] = inst_15263__$1);

return statearr_15293;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15294_17949 = state_15282__$1;
(statearr_15294_17949[(1)] = (5));

} else {
var statearr_15295_17950 = state_15282__$1;
(statearr_15295_17950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (6))){
var inst_15259 = (state_15282[(7)]);
var inst_15269 = (state_15282[(9)]);
var inst_15263 = (state_15282[(8)]);
var inst_15269__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15259,inst_15263) : f.call(null,inst_15259,inst_15263));
var inst_15270 = cljs.core.reduced_QMARK_(inst_15269__$1);
var state_15282__$1 = (function (){var statearr_15297 = state_15282;
(statearr_15297[(9)] = inst_15269__$1);

return statearr_15297;
})();
if(inst_15270){
var statearr_15298_17954 = state_15282__$1;
(statearr_15298_17954[(1)] = (8));

} else {
var statearr_15303_17955 = state_15282__$1;
(statearr_15303_17955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (3))){
var inst_15280 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15282__$1,inst_15280);
} else {
if((state_val_15283 === (2))){
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15282__$1,(4),ch);
} else {
if((state_val_15283 === (9))){
var inst_15269 = (state_15282[(9)]);
var inst_15259 = inst_15269;
var state_15282__$1 = (function (){var statearr_15316 = state_15282;
(statearr_15316[(7)] = inst_15259);

return statearr_15316;
})();
var statearr_15317_17957 = state_15282__$1;
(statearr_15317_17957[(2)] = null);

(statearr_15317_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (5))){
var inst_15259 = (state_15282[(7)]);
var state_15282__$1 = state_15282;
var statearr_15320_17960 = state_15282__$1;
(statearr_15320_17960[(2)] = inst_15259);

(statearr_15320_17960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (10))){
var inst_15276 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15322_17962 = state_15282__$1;
(statearr_15322_17962[(2)] = inst_15276);

(statearr_15322_17962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (8))){
var inst_15269 = (state_15282[(9)]);
var inst_15272 = cljs.core.deref(inst_15269);
var state_15282__$1 = state_15282;
var statearr_15327_17966 = state_15282__$1;
(statearr_15327_17966[(2)] = inst_15272);

(statearr_15327_17966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14016__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14016__auto____0 = (function (){
var statearr_15328 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15328[(0)] = cljs$core$async$reduce_$_state_machine__14016__auto__);

(statearr_15328[(1)] = (1));

return statearr_15328;
});
var cljs$core$async$reduce_$_state_machine__14016__auto____1 = (function (state_15282){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15282);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15329){var ex__14020__auto__ = e15329;
var statearr_15330_17976 = state_15282;
(statearr_15330_17976[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15282[(4)]))){
var statearr_15331_17977 = state_15282;
(statearr_15331_17977[(1)] = cljs.core.first((state_15282[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17978 = state_15282;
state_15282 = G__17978;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14016__auto__ = function(state_15282){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14016__auto____1.call(this,state_15282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14016__auto____0;
cljs$core$async$reduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14016__auto____1;
return cljs$core$async$reduce_$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15332 = f__14366__auto__();
(statearr_15332[(6)] = c__14365__auto__);

return statearr_15332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

return c__14365__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14365__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15338){
var state_val_15339 = (state_15338[(1)]);
if((state_val_15339 === (1))){
var inst_15333 = cljs.core.async.reduce(f__$1,init,ch);
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15338__$1,(2),inst_15333);
} else {
if((state_val_15339 === (2))){
var inst_15335 = (state_15338[(2)]);
var inst_15336 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15335) : f__$1.call(null,inst_15335));
var state_15338__$1 = state_15338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15338__$1,inst_15336);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14016__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14016__auto____0 = (function (){
var statearr_15343 = [null,null,null,null,null,null,null];
(statearr_15343[(0)] = cljs$core$async$transduce_$_state_machine__14016__auto__);

(statearr_15343[(1)] = (1));

return statearr_15343;
});
var cljs$core$async$transduce_$_state_machine__14016__auto____1 = (function (state_15338){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15338);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15345){var ex__14020__auto__ = e15345;
var statearr_15351_17986 = state_15338;
(statearr_15351_17986[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15338[(4)]))){
var statearr_15352_17987 = state_15338;
(statearr_15352_17987[(1)] = cljs.core.first((state_15338[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17990 = state_15338;
state_15338 = G__17990;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14016__auto__ = function(state_15338){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14016__auto____1.call(this,state_15338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14016__auto____0;
cljs$core$async$transduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14016__auto____1;
return cljs$core$async$transduce_$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15356 = f__14366__auto__();
(statearr_15356[(6)] = c__14365__auto__);

return statearr_15356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

return c__14365__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15361 = arguments.length;
switch (G__15361) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14365__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15387){
var state_val_15388 = (state_15387[(1)]);
if((state_val_15388 === (7))){
var inst_15369 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15389_18005 = state_15387__$1;
(statearr_15389_18005[(2)] = inst_15369);

(statearr_15389_18005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (1))){
var inst_15363 = cljs.core.seq(coll);
var inst_15364 = inst_15363;
var state_15387__$1 = (function (){var statearr_15392 = state_15387;
(statearr_15392[(7)] = inst_15364);

return statearr_15392;
})();
var statearr_15393_18012 = state_15387__$1;
(statearr_15393_18012[(2)] = null);

(statearr_15393_18012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (4))){
var inst_15364 = (state_15387[(7)]);
var inst_15367 = cljs.core.first(inst_15364);
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15387__$1,(7),ch,inst_15367);
} else {
if((state_val_15388 === (13))){
var inst_15381 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15394_18014 = state_15387__$1;
(statearr_15394_18014[(2)] = inst_15381);

(statearr_15394_18014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (6))){
var inst_15372 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
if(cljs.core.truth_(inst_15372)){
var statearr_15395_18017 = state_15387__$1;
(statearr_15395_18017[(1)] = (8));

} else {
var statearr_15396_18019 = state_15387__$1;
(statearr_15396_18019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (3))){
var inst_15385 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15387__$1,inst_15385);
} else {
if((state_val_15388 === (12))){
var state_15387__$1 = state_15387;
var statearr_15399_18020 = state_15387__$1;
(statearr_15399_18020[(2)] = null);

(statearr_15399_18020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (2))){
var inst_15364 = (state_15387[(7)]);
var state_15387__$1 = state_15387;
if(cljs.core.truth_(inst_15364)){
var statearr_15400_18023 = state_15387__$1;
(statearr_15400_18023[(1)] = (4));

} else {
var statearr_15401_18024 = state_15387__$1;
(statearr_15401_18024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (11))){
var inst_15378 = cljs.core.async.close_BANG_(ch);
var state_15387__$1 = state_15387;
var statearr_15402_18026 = state_15387__$1;
(statearr_15402_18026[(2)] = inst_15378);

(statearr_15402_18026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (9))){
var state_15387__$1 = state_15387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15409_18030 = state_15387__$1;
(statearr_15409_18030[(1)] = (11));

} else {
var statearr_15410_18031 = state_15387__$1;
(statearr_15410_18031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (5))){
var inst_15364 = (state_15387[(7)]);
var state_15387__$1 = state_15387;
var statearr_15415_18032 = state_15387__$1;
(statearr_15415_18032[(2)] = inst_15364);

(statearr_15415_18032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (10))){
var inst_15383 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15416_18034 = state_15387__$1;
(statearr_15416_18034[(2)] = inst_15383);

(statearr_15416_18034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (8))){
var inst_15364 = (state_15387[(7)]);
var inst_15374 = cljs.core.next(inst_15364);
var inst_15364__$1 = inst_15374;
var state_15387__$1 = (function (){var statearr_15417 = state_15387;
(statearr_15417[(7)] = inst_15364__$1);

return statearr_15417;
})();
var statearr_15418_18035 = state_15387__$1;
(statearr_15418_18035[(2)] = null);

(statearr_15418_18035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_15419 = [null,null,null,null,null,null,null,null];
(statearr_15419[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_15419[(1)] = (1));

return statearr_15419;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_15387){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15387);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15423){var ex__14020__auto__ = e15423;
var statearr_15424_18039 = state_15387;
(statearr_15424_18039[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15387[(4)]))){
var statearr_15429_18041 = state_15387;
(statearr_15429_18041[(1)] = cljs.core.first((state_15387[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_15387;
state_15387 = G__18042;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_15387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_15387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15430 = f__14366__auto__();
(statearr_15430[(6)] = c__14365__auto__);

return statearr_15430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

return c__14365__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15447 = arguments.length;
switch (G__15447) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18055 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18055(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18058 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18058(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18063 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18063(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18068 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18068(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15492 = (function (ch,cs,meta15493){
this.ch = ch;
this.cs = cs;
this.meta15493 = meta15493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15494,meta15493__$1){
var self__ = this;
var _15494__$1 = this;
return (new cljs.core.async.t_cljs$core$async15492(self__.ch,self__.cs,meta15493__$1));
}));

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15494){
var self__ = this;
var _15494__$1 = this;
return self__.meta15493;
}));

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15492.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15493","meta15493",-446878548,null)], null);
}));

(cljs.core.async.t_cljs$core$async15492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15492");

(cljs.core.async.t_cljs$core$async15492.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async15492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15492.
 */
cljs.core.async.__GT_t_cljs$core$async15492 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15492(ch__$1,cs__$1,meta15493){
return (new cljs.core.async.t_cljs$core$async15492(ch__$1,cs__$1,meta15493));
});

}

return (new cljs.core.async.t_cljs$core$async15492(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14365__auto___18078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15666){
var state_val_15667 = (state_15666[(1)]);
if((state_val_15667 === (7))){
var inst_15662 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15668_18079 = state_15666__$1;
(statearr_15668_18079[(2)] = inst_15662);

(statearr_15668_18079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (20))){
var inst_15554 = (state_15666[(7)]);
var inst_15567 = cljs.core.first(inst_15554);
var inst_15568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15567,(0),null);
var inst_15569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15567,(1),null);
var state_15666__$1 = (function (){var statearr_15673 = state_15666;
(statearr_15673[(8)] = inst_15568);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15569)){
var statearr_15674_18081 = state_15666__$1;
(statearr_15674_18081[(1)] = (22));

} else {
var statearr_15675_18083 = state_15666__$1;
(statearr_15675_18083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (27))){
var inst_15517 = (state_15666[(9)]);
var inst_15600 = (state_15666[(10)]);
var inst_15598 = (state_15666[(11)]);
var inst_15605 = (state_15666[(12)]);
var inst_15605__$1 = cljs.core._nth(inst_15598,inst_15600);
var inst_15606 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15605__$1,inst_15517,done);
var state_15666__$1 = (function (){var statearr_15676 = state_15666;
(statearr_15676[(12)] = inst_15605__$1);

return statearr_15676;
})();
if(cljs.core.truth_(inst_15606)){
var statearr_15677_18086 = state_15666__$1;
(statearr_15677_18086[(1)] = (30));

} else {
var statearr_15678_18088 = state_15666__$1;
(statearr_15678_18088[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (1))){
var state_15666__$1 = state_15666;
var statearr_15679_18089 = state_15666__$1;
(statearr_15679_18089[(2)] = null);

(statearr_15679_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (24))){
var inst_15554 = (state_15666[(7)]);
var inst_15574 = (state_15666[(2)]);
var inst_15575 = cljs.core.next(inst_15554);
var inst_15530 = inst_15575;
var inst_15531 = null;
var inst_15532 = (0);
var inst_15533 = (0);
var state_15666__$1 = (function (){var statearr_15680 = state_15666;
(statearr_15680[(13)] = inst_15532);

(statearr_15680[(14)] = inst_15531);

(statearr_15680[(15)] = inst_15530);

(statearr_15680[(16)] = inst_15574);

(statearr_15680[(17)] = inst_15533);

return statearr_15680;
})();
var statearr_15681_18093 = state_15666__$1;
(statearr_15681_18093[(2)] = null);

(statearr_15681_18093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (39))){
var state_15666__$1 = state_15666;
var statearr_15687_18094 = state_15666__$1;
(statearr_15687_18094[(2)] = null);

(statearr_15687_18094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (4))){
var inst_15517 = (state_15666[(9)]);
var inst_15517__$1 = (state_15666[(2)]);
var inst_15518 = (inst_15517__$1 == null);
var state_15666__$1 = (function (){var statearr_15694 = state_15666;
(statearr_15694[(9)] = inst_15517__$1);

return statearr_15694;
})();
if(cljs.core.truth_(inst_15518)){
var statearr_15697_18096 = state_15666__$1;
(statearr_15697_18096[(1)] = (5));

} else {
var statearr_15699_18097 = state_15666__$1;
(statearr_15699_18097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (15))){
var inst_15532 = (state_15666[(13)]);
var inst_15531 = (state_15666[(14)]);
var inst_15530 = (state_15666[(15)]);
var inst_15533 = (state_15666[(17)]);
var inst_15550 = (state_15666[(2)]);
var inst_15551 = (inst_15533 + (1));
var tmp15682 = inst_15532;
var tmp15683 = inst_15531;
var tmp15684 = inst_15530;
var inst_15530__$1 = tmp15684;
var inst_15531__$1 = tmp15683;
var inst_15532__$1 = tmp15682;
var inst_15533__$1 = inst_15551;
var state_15666__$1 = (function (){var statearr_15704 = state_15666;
(statearr_15704[(13)] = inst_15532__$1);

(statearr_15704[(14)] = inst_15531__$1);

(statearr_15704[(15)] = inst_15530__$1);

(statearr_15704[(17)] = inst_15533__$1);

(statearr_15704[(18)] = inst_15550);

return statearr_15704;
})();
var statearr_15705_18104 = state_15666__$1;
(statearr_15705_18104[(2)] = null);

(statearr_15705_18104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (21))){
var inst_15578 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15709_18105 = state_15666__$1;
(statearr_15709_18105[(2)] = inst_15578);

(statearr_15709_18105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (31))){
var inst_15605 = (state_15666[(12)]);
var inst_15609 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15605);
var state_15666__$1 = state_15666;
var statearr_15710_18108 = state_15666__$1;
(statearr_15710_18108[(2)] = inst_15609);

(statearr_15710_18108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (32))){
var inst_15600 = (state_15666[(10)]);
var inst_15597 = (state_15666[(19)]);
var inst_15598 = (state_15666[(11)]);
var inst_15599 = (state_15666[(20)]);
var inst_15611 = (state_15666[(2)]);
var inst_15612 = (inst_15600 + (1));
var tmp15706 = inst_15597;
var tmp15707 = inst_15598;
var tmp15708 = inst_15599;
var inst_15597__$1 = tmp15706;
var inst_15598__$1 = tmp15707;
var inst_15599__$1 = tmp15708;
var inst_15600__$1 = inst_15612;
var state_15666__$1 = (function (){var statearr_15717 = state_15666;
(statearr_15717[(10)] = inst_15600__$1);

(statearr_15717[(19)] = inst_15597__$1);

(statearr_15717[(11)] = inst_15598__$1);

(statearr_15717[(20)] = inst_15599__$1);

(statearr_15717[(21)] = inst_15611);

return statearr_15717;
})();
var statearr_15724_18111 = state_15666__$1;
(statearr_15724_18111[(2)] = null);

(statearr_15724_18111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (40))){
var inst_15630 = (state_15666[(22)]);
var inst_15639 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15630);
var state_15666__$1 = state_15666;
var statearr_15725_18114 = state_15666__$1;
(statearr_15725_18114[(2)] = inst_15639);

(statearr_15725_18114[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (33))){
var inst_15615 = (state_15666[(23)]);
var inst_15620 = cljs.core.chunked_seq_QMARK_(inst_15615);
var state_15666__$1 = state_15666;
if(inst_15620){
var statearr_15731_18116 = state_15666__$1;
(statearr_15731_18116[(1)] = (36));

} else {
var statearr_15732_18117 = state_15666__$1;
(statearr_15732_18117[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (13))){
var inst_15544 = (state_15666[(24)]);
var inst_15547 = cljs.core.async.close_BANG_(inst_15544);
var state_15666__$1 = state_15666;
var statearr_15733_18119 = state_15666__$1;
(statearr_15733_18119[(2)] = inst_15547);

(statearr_15733_18119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (22))){
var inst_15568 = (state_15666[(8)]);
var inst_15571 = cljs.core.async.close_BANG_(inst_15568);
var state_15666__$1 = state_15666;
var statearr_15735_18120 = state_15666__$1;
(statearr_15735_18120[(2)] = inst_15571);

(statearr_15735_18120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (36))){
var inst_15615 = (state_15666[(23)]);
var inst_15623 = cljs.core.chunk_first(inst_15615);
var inst_15624 = cljs.core.chunk_rest(inst_15615);
var inst_15625 = cljs.core.count(inst_15623);
var inst_15597 = inst_15624;
var inst_15598 = inst_15623;
var inst_15599 = inst_15625;
var inst_15600 = (0);
var state_15666__$1 = (function (){var statearr_15737 = state_15666;
(statearr_15737[(10)] = inst_15600);

(statearr_15737[(19)] = inst_15597);

(statearr_15737[(11)] = inst_15598);

(statearr_15737[(20)] = inst_15599);

return statearr_15737;
})();
var statearr_15739_18124 = state_15666__$1;
(statearr_15739_18124[(2)] = null);

(statearr_15739_18124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (41))){
var inst_15615 = (state_15666[(23)]);
var inst_15641 = (state_15666[(2)]);
var inst_15642 = cljs.core.next(inst_15615);
var inst_15597 = inst_15642;
var inst_15598 = null;
var inst_15599 = (0);
var inst_15600 = (0);
var state_15666__$1 = (function (){var statearr_15742 = state_15666;
(statearr_15742[(10)] = inst_15600);

(statearr_15742[(19)] = inst_15597);

(statearr_15742[(11)] = inst_15598);

(statearr_15742[(25)] = inst_15641);

(statearr_15742[(20)] = inst_15599);

return statearr_15742;
})();
var statearr_15744_18130 = state_15666__$1;
(statearr_15744_18130[(2)] = null);

(statearr_15744_18130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (43))){
var state_15666__$1 = state_15666;
var statearr_15747_18132 = state_15666__$1;
(statearr_15747_18132[(2)] = null);

(statearr_15747_18132[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (29))){
var inst_15650 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15755_18133 = state_15666__$1;
(statearr_15755_18133[(2)] = inst_15650);

(statearr_15755_18133[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (44))){
var inst_15659 = (state_15666[(2)]);
var state_15666__$1 = (function (){var statearr_15756 = state_15666;
(statearr_15756[(26)] = inst_15659);

return statearr_15756;
})();
var statearr_15757_18135 = state_15666__$1;
(statearr_15757_18135[(2)] = null);

(statearr_15757_18135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (6))){
var inst_15588 = (state_15666[(27)]);
var inst_15587 = cljs.core.deref(cs);
var inst_15588__$1 = cljs.core.keys(inst_15587);
var inst_15589 = cljs.core.count(inst_15588__$1);
var inst_15590 = cljs.core.reset_BANG_(dctr,inst_15589);
var inst_15596 = cljs.core.seq(inst_15588__$1);
var inst_15597 = inst_15596;
var inst_15598 = null;
var inst_15599 = (0);
var inst_15600 = (0);
var state_15666__$1 = (function (){var statearr_15759 = state_15666;
(statearr_15759[(27)] = inst_15588__$1);

(statearr_15759[(10)] = inst_15600);

(statearr_15759[(19)] = inst_15597);

(statearr_15759[(11)] = inst_15598);

(statearr_15759[(28)] = inst_15590);

(statearr_15759[(20)] = inst_15599);

return statearr_15759;
})();
var statearr_15760_18139 = state_15666__$1;
(statearr_15760_18139[(2)] = null);

(statearr_15760_18139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (28))){
var inst_15597 = (state_15666[(19)]);
var inst_15615 = (state_15666[(23)]);
var inst_15615__$1 = cljs.core.seq(inst_15597);
var state_15666__$1 = (function (){var statearr_15765 = state_15666;
(statearr_15765[(23)] = inst_15615__$1);

return statearr_15765;
})();
if(inst_15615__$1){
var statearr_15767_18141 = state_15666__$1;
(statearr_15767_18141[(1)] = (33));

} else {
var statearr_15768_18142 = state_15666__$1;
(statearr_15768_18142[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (25))){
var inst_15600 = (state_15666[(10)]);
var inst_15599 = (state_15666[(20)]);
var inst_15602 = (inst_15600 < inst_15599);
var inst_15603 = inst_15602;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15603)){
var statearr_15769_18146 = state_15666__$1;
(statearr_15769_18146[(1)] = (27));

} else {
var statearr_15774_18147 = state_15666__$1;
(statearr_15774_18147[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (34))){
var state_15666__$1 = state_15666;
var statearr_15775_18148 = state_15666__$1;
(statearr_15775_18148[(2)] = null);

(statearr_15775_18148[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (17))){
var state_15666__$1 = state_15666;
var statearr_15776_18150 = state_15666__$1;
(statearr_15776_18150[(2)] = null);

(statearr_15776_18150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (3))){
var inst_15664 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15666__$1,inst_15664);
} else {
if((state_val_15667 === (12))){
var inst_15583 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15781_18154 = state_15666__$1;
(statearr_15781_18154[(2)] = inst_15583);

(statearr_15781_18154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (2))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(4),ch);
} else {
if((state_val_15667 === (23))){
var state_15666__$1 = state_15666;
var statearr_15782_18156 = state_15666__$1;
(statearr_15782_18156[(2)] = null);

(statearr_15782_18156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (35))){
var inst_15648 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15783_18157 = state_15666__$1;
(statearr_15783_18157[(2)] = inst_15648);

(statearr_15783_18157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (19))){
var inst_15554 = (state_15666[(7)]);
var inst_15559 = cljs.core.chunk_first(inst_15554);
var inst_15560 = cljs.core.chunk_rest(inst_15554);
var inst_15561 = cljs.core.count(inst_15559);
var inst_15530 = inst_15560;
var inst_15531 = inst_15559;
var inst_15532 = inst_15561;
var inst_15533 = (0);
var state_15666__$1 = (function (){var statearr_15784 = state_15666;
(statearr_15784[(13)] = inst_15532);

(statearr_15784[(14)] = inst_15531);

(statearr_15784[(15)] = inst_15530);

(statearr_15784[(17)] = inst_15533);

return statearr_15784;
})();
var statearr_15786_18162 = state_15666__$1;
(statearr_15786_18162[(2)] = null);

(statearr_15786_18162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (11))){
var inst_15530 = (state_15666[(15)]);
var inst_15554 = (state_15666[(7)]);
var inst_15554__$1 = cljs.core.seq(inst_15530);
var state_15666__$1 = (function (){var statearr_15787 = state_15666;
(statearr_15787[(7)] = inst_15554__$1);

return statearr_15787;
})();
if(inst_15554__$1){
var statearr_15792_18163 = state_15666__$1;
(statearr_15792_18163[(1)] = (16));

} else {
var statearr_15793_18165 = state_15666__$1;
(statearr_15793_18165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (9))){
var inst_15585 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15794_18166 = state_15666__$1;
(statearr_15794_18166[(2)] = inst_15585);

(statearr_15794_18166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (5))){
var inst_15528 = cljs.core.deref(cs);
var inst_15529 = cljs.core.seq(inst_15528);
var inst_15530 = inst_15529;
var inst_15531 = null;
var inst_15532 = (0);
var inst_15533 = (0);
var state_15666__$1 = (function (){var statearr_15795 = state_15666;
(statearr_15795[(13)] = inst_15532);

(statearr_15795[(14)] = inst_15531);

(statearr_15795[(15)] = inst_15530);

(statearr_15795[(17)] = inst_15533);

return statearr_15795;
})();
var statearr_15796_18170 = state_15666__$1;
(statearr_15796_18170[(2)] = null);

(statearr_15796_18170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (14))){
var state_15666__$1 = state_15666;
var statearr_15797_18171 = state_15666__$1;
(statearr_15797_18171[(2)] = null);

(statearr_15797_18171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (45))){
var inst_15656 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15798_18173 = state_15666__$1;
(statearr_15798_18173[(2)] = inst_15656);

(statearr_15798_18173[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (26))){
var inst_15588 = (state_15666[(27)]);
var inst_15652 = (state_15666[(2)]);
var inst_15653 = cljs.core.seq(inst_15588);
var state_15666__$1 = (function (){var statearr_15799 = state_15666;
(statearr_15799[(29)] = inst_15652);

return statearr_15799;
})();
if(inst_15653){
var statearr_15800_18180 = state_15666__$1;
(statearr_15800_18180[(1)] = (42));

} else {
var statearr_15801_18182 = state_15666__$1;
(statearr_15801_18182[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (16))){
var inst_15554 = (state_15666[(7)]);
var inst_15557 = cljs.core.chunked_seq_QMARK_(inst_15554);
var state_15666__$1 = state_15666;
if(inst_15557){
var statearr_15802_18183 = state_15666__$1;
(statearr_15802_18183[(1)] = (19));

} else {
var statearr_15803_18184 = state_15666__$1;
(statearr_15803_18184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (38))){
var inst_15645 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15804_18186 = state_15666__$1;
(statearr_15804_18186[(2)] = inst_15645);

(statearr_15804_18186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (30))){
var state_15666__$1 = state_15666;
var statearr_15805_18188 = state_15666__$1;
(statearr_15805_18188[(2)] = null);

(statearr_15805_18188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (10))){
var inst_15531 = (state_15666[(14)]);
var inst_15533 = (state_15666[(17)]);
var inst_15543 = cljs.core._nth(inst_15531,inst_15533);
var inst_15544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15543,(0),null);
var inst_15545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15543,(1),null);
var state_15666__$1 = (function (){var statearr_15806 = state_15666;
(statearr_15806[(24)] = inst_15544);

return statearr_15806;
})();
if(cljs.core.truth_(inst_15545)){
var statearr_15808_18192 = state_15666__$1;
(statearr_15808_18192[(1)] = (13));

} else {
var statearr_15809_18193 = state_15666__$1;
(statearr_15809_18193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (18))){
var inst_15581 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15810_18195 = state_15666__$1;
(statearr_15810_18195[(2)] = inst_15581);

(statearr_15810_18195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (42))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(45),dchan);
} else {
if((state_val_15667 === (37))){
var inst_15517 = (state_15666[(9)]);
var inst_15630 = (state_15666[(22)]);
var inst_15615 = (state_15666[(23)]);
var inst_15630__$1 = cljs.core.first(inst_15615);
var inst_15632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15630__$1,inst_15517,done);
var state_15666__$1 = (function (){var statearr_15811 = state_15666;
(statearr_15811[(22)] = inst_15630__$1);

return statearr_15811;
})();
if(cljs.core.truth_(inst_15632)){
var statearr_15813_18199 = state_15666__$1;
(statearr_15813_18199[(1)] = (39));

} else {
var statearr_15814_18200 = state_15666__$1;
(statearr_15814_18200[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15667 === (8))){
var inst_15532 = (state_15666[(13)]);
var inst_15533 = (state_15666[(17)]);
var inst_15535 = (inst_15533 < inst_15532);
var inst_15536 = inst_15535;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15536)){
var statearr_15815_18201 = state_15666__$1;
(statearr_15815_18201[(1)] = (10));

} else {
var statearr_15816_18204 = state_15666__$1;
(statearr_15816_18204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14016__auto__ = null;
var cljs$core$async$mult_$_state_machine__14016__auto____0 = (function (){
var statearr_15820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15820[(0)] = cljs$core$async$mult_$_state_machine__14016__auto__);

(statearr_15820[(1)] = (1));

return statearr_15820;
});
var cljs$core$async$mult_$_state_machine__14016__auto____1 = (function (state_15666){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15666);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15823){var ex__14020__auto__ = e15823;
var statearr_15825_18207 = state_15666;
(statearr_15825_18207[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15666[(4)]))){
var statearr_15826_18208 = state_15666;
(statearr_15826_18208[(1)] = cljs.core.first((state_15666[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18209 = state_15666;
state_15666 = G__18209;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14016__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14016__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14016__auto____0;
cljs$core$async$mult_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14016__auto____1;
return cljs$core$async$mult_$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_15828 = f__14366__auto__();
(statearr_15828[(6)] = c__14365__auto___18078);

return statearr_15828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15834 = arguments.length;
switch (G__15834) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18213 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18213(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18215 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18215(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18216 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18216(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18217 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18217(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18218 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18218(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___18219 = arguments.length;
var i__5767__auto___18220 = (0);
while(true){
if((i__5767__auto___18220 < len__5766__auto___18219)){
args__5772__auto__.push((arguments[i__5767__auto___18220]));

var G__18222 = (i__5767__auto___18220 + (1));
i__5767__auto___18220 = G__18222;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15881){
var map__15882 = p__15881;
var map__15882__$1 = cljs.core.__destructure_map(map__15882);
var opts = map__15882__$1;
var statearr_15883_18227 = state;
(statearr_15883_18227[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15884_18231 = state;
(statearr_15884_18231[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15885_18232 = state;
(statearr_15885_18232[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15877){
var G__15878 = cljs.core.first(seq15877);
var seq15877__$1 = cljs.core.next(seq15877);
var G__15879 = cljs.core.first(seq15877__$1);
var seq15877__$2 = cljs.core.next(seq15877__$1);
var G__15880 = cljs.core.first(seq15877__$2);
var seq15877__$3 = cljs.core.next(seq15877__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15878,G__15879,G__15880,seq15877__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15898 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15899){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15899 = meta15899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15900,meta15899__$1){
var self__ = this;
var _15900__$1 = this;
return (new cljs.core.async.t_cljs$core$async15898(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15899__$1));
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15900){
var self__ = this;
var _15900__$1 = this;
return self__.meta15899;
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15899","meta15899",-1035951843,null)], null);
}));

(cljs.core.async.t_cljs$core$async15898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15898");

(cljs.core.async.t_cljs$core$async15898.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async15898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15898.
 */
cljs.core.async.__GT_t_cljs$core$async15898 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15899){
return (new cljs.core.async.t_cljs$core$async15898(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15899));
});

}

return (new cljs.core.async.t_cljs$core$async15898(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14365__auto___18254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_15996){
var state_val_15997 = (state_15996[(1)]);
if((state_val_15997 === (7))){
var inst_15952 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15952)){
var statearr_16001_18258 = state_15996__$1;
(statearr_16001_18258[(1)] = (8));

} else {
var statearr_16002_18259 = state_15996__$1;
(statearr_16002_18259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (20))){
var inst_15943 = (state_15996[(7)]);
var state_15996__$1 = state_15996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15996__$1,(23),out,inst_15943);
} else {
if((state_val_15997 === (1))){
var inst_15925 = calc_state();
var inst_15926 = cljs.core.__destructure_map(inst_15925);
var inst_15927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15926,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15926,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15926,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15931 = inst_15925;
var state_15996__$1 = (function (){var statearr_16011 = state_15996;
(statearr_16011[(8)] = inst_15928);

(statearr_16011[(9)] = inst_15930);

(statearr_16011[(10)] = inst_15927);

(statearr_16011[(11)] = inst_15931);

return statearr_16011;
})();
var statearr_16012_18260 = state_15996__$1;
(statearr_16012_18260[(2)] = null);

(statearr_16012_18260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (24))){
var inst_15934 = (state_15996[(12)]);
var inst_15931 = inst_15934;
var state_15996__$1 = (function (){var statearr_16014 = state_15996;
(statearr_16014[(11)] = inst_15931);

return statearr_16014;
})();
var statearr_16015_18264 = state_15996__$1;
(statearr_16015_18264[(2)] = null);

(statearr_16015_18264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (4))){
var inst_15947 = (state_15996[(13)]);
var inst_15943 = (state_15996[(7)]);
var inst_15942 = (state_15996[(2)]);
var inst_15943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15942,(0),null);
var inst_15944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15942,(1),null);
var inst_15947__$1 = (inst_15943__$1 == null);
var state_15996__$1 = (function (){var statearr_16017 = state_15996;
(statearr_16017[(13)] = inst_15947__$1);

(statearr_16017[(14)] = inst_15944);

(statearr_16017[(7)] = inst_15943__$1);

return statearr_16017;
})();
if(cljs.core.truth_(inst_15947__$1)){
var statearr_16018_18265 = state_15996__$1;
(statearr_16018_18265[(1)] = (5));

} else {
var statearr_16019_18266 = state_15996__$1;
(statearr_16019_18266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (15))){
var inst_15935 = (state_15996[(15)]);
var inst_15968 = (state_15996[(16)]);
var inst_15968__$1 = cljs.core.empty_QMARK_(inst_15935);
var state_15996__$1 = (function (){var statearr_16020 = state_15996;
(statearr_16020[(16)] = inst_15968__$1);

return statearr_16020;
})();
if(inst_15968__$1){
var statearr_16021_18267 = state_15996__$1;
(statearr_16021_18267[(1)] = (17));

} else {
var statearr_16022_18268 = state_15996__$1;
(statearr_16022_18268[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (21))){
var inst_15934 = (state_15996[(12)]);
var inst_15931 = inst_15934;
var state_15996__$1 = (function (){var statearr_16023 = state_15996;
(statearr_16023[(11)] = inst_15931);

return statearr_16023;
})();
var statearr_16024_18272 = state_15996__$1;
(statearr_16024_18272[(2)] = null);

(statearr_16024_18272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (13))){
var inst_15959 = (state_15996[(2)]);
var inst_15961 = calc_state();
var inst_15931 = inst_15961;
var state_15996__$1 = (function (){var statearr_16025 = state_15996;
(statearr_16025[(11)] = inst_15931);

(statearr_16025[(17)] = inst_15959);

return statearr_16025;
})();
var statearr_16026_18273 = state_15996__$1;
(statearr_16026_18273[(2)] = null);

(statearr_16026_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (22))){
var inst_15989 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16028_18274 = state_15996__$1;
(statearr_16028_18274[(2)] = inst_15989);

(statearr_16028_18274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (6))){
var inst_15944 = (state_15996[(14)]);
var inst_15950 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15944,change);
var state_15996__$1 = state_15996;
var statearr_16029_18275 = state_15996__$1;
(statearr_16029_18275[(2)] = inst_15950);

(statearr_16029_18275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (25))){
var state_15996__$1 = state_15996;
var statearr_16030_18276 = state_15996__$1;
(statearr_16030_18276[(2)] = null);

(statearr_16030_18276[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (17))){
var inst_15944 = (state_15996[(14)]);
var inst_15936 = (state_15996[(18)]);
var inst_15970 = (inst_15936.cljs$core$IFn$_invoke$arity$1 ? inst_15936.cljs$core$IFn$_invoke$arity$1(inst_15944) : inst_15936.call(null,inst_15944));
var inst_15971 = cljs.core.not(inst_15970);
var state_15996__$1 = state_15996;
var statearr_16034_18278 = state_15996__$1;
(statearr_16034_18278[(2)] = inst_15971);

(statearr_16034_18278[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (3))){
var inst_15993 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15996__$1,inst_15993);
} else {
if((state_val_15997 === (12))){
var state_15996__$1 = state_15996;
var statearr_16038_18279 = state_15996__$1;
(statearr_16038_18279[(2)] = null);

(statearr_16038_18279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (2))){
var inst_15931 = (state_15996[(11)]);
var inst_15934 = (state_15996[(12)]);
var inst_15934__$1 = cljs.core.__destructure_map(inst_15931);
var inst_15935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15934__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15934__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15934__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15996__$1 = (function (){var statearr_16041 = state_15996;
(statearr_16041[(15)] = inst_15935);

(statearr_16041[(18)] = inst_15936);

(statearr_16041[(12)] = inst_15934__$1);

return statearr_16041;
})();
return cljs.core.async.ioc_alts_BANG_(state_15996__$1,(4),inst_15937);
} else {
if((state_val_15997 === (23))){
var inst_15980 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15980)){
var statearr_16043_18280 = state_15996__$1;
(statearr_16043_18280[(1)] = (24));

} else {
var statearr_16044_18281 = state_15996__$1;
(statearr_16044_18281[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (19))){
var inst_15975 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16045_18282 = state_15996__$1;
(statearr_16045_18282[(2)] = inst_15975);

(statearr_16045_18282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (11))){
var inst_15944 = (state_15996[(14)]);
var inst_15956 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15944);
var state_15996__$1 = state_15996;
var statearr_16052_18283 = state_15996__$1;
(statearr_16052_18283[(2)] = inst_15956);

(statearr_16052_18283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (9))){
var inst_15935 = (state_15996[(15)]);
var inst_15944 = (state_15996[(14)]);
var inst_15965 = (state_15996[(19)]);
var inst_15965__$1 = (inst_15935.cljs$core$IFn$_invoke$arity$1 ? inst_15935.cljs$core$IFn$_invoke$arity$1(inst_15944) : inst_15935.call(null,inst_15944));
var state_15996__$1 = (function (){var statearr_16060 = state_15996;
(statearr_16060[(19)] = inst_15965__$1);

return statearr_16060;
})();
if(cljs.core.truth_(inst_15965__$1)){
var statearr_16061_18284 = state_15996__$1;
(statearr_16061_18284[(1)] = (14));

} else {
var statearr_16062_18285 = state_15996__$1;
(statearr_16062_18285[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (5))){
var inst_15947 = (state_15996[(13)]);
var state_15996__$1 = state_15996;
var statearr_16064_18286 = state_15996__$1;
(statearr_16064_18286[(2)] = inst_15947);

(statearr_16064_18286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (14))){
var inst_15965 = (state_15996[(19)]);
var state_15996__$1 = state_15996;
var statearr_16067_18287 = state_15996__$1;
(statearr_16067_18287[(2)] = inst_15965);

(statearr_16067_18287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (26))){
var inst_15985 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16069_18288 = state_15996__$1;
(statearr_16069_18288[(2)] = inst_15985);

(statearr_16069_18288[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (16))){
var inst_15977 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15977)){
var statearr_16071_18289 = state_15996__$1;
(statearr_16071_18289[(1)] = (20));

} else {
var statearr_16072_18290 = state_15996__$1;
(statearr_16072_18290[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (10))){
var inst_15991 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16073_18292 = state_15996__$1;
(statearr_16073_18292[(2)] = inst_15991);

(statearr_16073_18292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (18))){
var inst_15968 = (state_15996[(16)]);
var state_15996__$1 = state_15996;
var statearr_16076_18293 = state_15996__$1;
(statearr_16076_18293[(2)] = inst_15968);

(statearr_16076_18293[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (8))){
var inst_15943 = (state_15996[(7)]);
var inst_15954 = (inst_15943 == null);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15954)){
var statearr_16079_18295 = state_15996__$1;
(statearr_16079_18295[(1)] = (11));

} else {
var statearr_16080_18296 = state_15996__$1;
(statearr_16080_18296[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14016__auto__ = null;
var cljs$core$async$mix_$_state_machine__14016__auto____0 = (function (){
var statearr_16084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16084[(0)] = cljs$core$async$mix_$_state_machine__14016__auto__);

(statearr_16084[(1)] = (1));

return statearr_16084;
});
var cljs$core$async$mix_$_state_machine__14016__auto____1 = (function (state_15996){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15996);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16086){var ex__14020__auto__ = e16086;
var statearr_16087_18297 = state_15996;
(statearr_16087_18297[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_15996[(4)]))){
var statearr_16088_18298 = state_15996;
(statearr_16088_18298[(1)] = cljs.core.first((state_15996[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18308 = state_15996;
state_15996 = G__18308;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14016__auto__ = function(state_15996){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14016__auto____1.call(this,state_15996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14016__auto____0;
cljs$core$async$mix_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14016__auto____1;
return cljs$core$async$mix_$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_16089 = f__14366__auto__();
(statearr_16089[(6)] = c__14365__auto___18254);

return statearr_16089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18312 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18312(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18319 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18319(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18323 = (function() {
var G__18324 = null;
var G__18324__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18324__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18324 = function(p,v){
switch(arguments.length){
case 1:
return G__18324__1.call(this,p);
case 2:
return G__18324__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18324.cljs$core$IFn$_invoke$arity$1 = G__18324__1;
G__18324.cljs$core$IFn$_invoke$arity$2 = G__18324__2;
return G__18324;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16132 = arguments.length;
switch (G__16132) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18323(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18323(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16146 = arguments.length;
switch (G__16146) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16141_SHARP_){
if(cljs.core.truth_((p1__16141_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16141_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16141_SHARP_.call(null,topic)))){
return p1__16141_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16141_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16157 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16159){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16159 = meta16159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16161,meta16159__$1){
var self__ = this;
var _16161__$1 = this;
return (new cljs.core.async.t_cljs$core$async16157(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16159__$1));
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16161){
var self__ = this;
var _16161__$1 = this;
return self__.meta16159;
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16157.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16159","meta16159",-1226679163,null)], null);
}));

(cljs.core.async.t_cljs$core$async16157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16157");

(cljs.core.async.t_cljs$core$async16157.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async16157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16157.
 */
cljs.core.async.__GT_t_cljs$core$async16157 = (function cljs$core$async$__GT_t_cljs$core$async16157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16159){
return (new cljs.core.async.t_cljs$core$async16157(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16159));
});

}

return (new cljs.core.async.t_cljs$core$async16157(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14365__auto___18363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_16285){
var state_val_16286 = (state_16285[(1)]);
if((state_val_16286 === (7))){
var inst_16279 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16291_18365 = state_16285__$1;
(statearr_16291_18365[(2)] = inst_16279);

(statearr_16291_18365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (20))){
var state_16285__$1 = state_16285;
var statearr_16292_18366 = state_16285__$1;
(statearr_16292_18366[(2)] = null);

(statearr_16292_18366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (1))){
var state_16285__$1 = state_16285;
var statearr_16293_18367 = state_16285__$1;
(statearr_16293_18367[(2)] = null);

(statearr_16293_18367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (24))){
var inst_16259 = (state_16285[(7)]);
var inst_16269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16259);
var state_16285__$1 = state_16285;
var statearr_16296_18371 = state_16285__$1;
(statearr_16296_18371[(2)] = inst_16269);

(statearr_16296_18371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (4))){
var inst_16194 = (state_16285[(8)]);
var inst_16194__$1 = (state_16285[(2)]);
var inst_16196 = (inst_16194__$1 == null);
var state_16285__$1 = (function (){var statearr_16302 = state_16285;
(statearr_16302[(8)] = inst_16194__$1);

return statearr_16302;
})();
if(cljs.core.truth_(inst_16196)){
var statearr_16305_18373 = state_16285__$1;
(statearr_16305_18373[(1)] = (5));

} else {
var statearr_16306_18374 = state_16285__$1;
(statearr_16306_18374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (15))){
var inst_16253 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16307_18375 = state_16285__$1;
(statearr_16307_18375[(2)] = inst_16253);

(statearr_16307_18375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (21))){
var inst_16275 = (state_16285[(2)]);
var state_16285__$1 = (function (){var statearr_16308 = state_16285;
(statearr_16308[(9)] = inst_16275);

return statearr_16308;
})();
var statearr_16310_18376 = state_16285__$1;
(statearr_16310_18376[(2)] = null);

(statearr_16310_18376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (13))){
var inst_16221 = (state_16285[(10)]);
var inst_16225 = cljs.core.chunked_seq_QMARK_(inst_16221);
var state_16285__$1 = state_16285;
if(inst_16225){
var statearr_16324_18377 = state_16285__$1;
(statearr_16324_18377[(1)] = (16));

} else {
var statearr_16325_18378 = state_16285__$1;
(statearr_16325_18378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (22))){
var inst_16266 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
if(cljs.core.truth_(inst_16266)){
var statearr_16326_18382 = state_16285__$1;
(statearr_16326_18382[(1)] = (23));

} else {
var statearr_16328_18383 = state_16285__$1;
(statearr_16328_18383[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (6))){
var inst_16259 = (state_16285[(7)]);
var inst_16261 = (state_16285[(11)]);
var inst_16194 = (state_16285[(8)]);
var inst_16259__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16194) : topic_fn.call(null,inst_16194));
var inst_16260 = cljs.core.deref(mults);
var inst_16261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16260,inst_16259__$1);
var state_16285__$1 = (function (){var statearr_16333 = state_16285;
(statearr_16333[(7)] = inst_16259__$1);

(statearr_16333[(11)] = inst_16261__$1);

return statearr_16333;
})();
if(cljs.core.truth_(inst_16261__$1)){
var statearr_16334_18385 = state_16285__$1;
(statearr_16334_18385[(1)] = (19));

} else {
var statearr_16335_18386 = state_16285__$1;
(statearr_16335_18386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (25))){
var inst_16271 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16336_18387 = state_16285__$1;
(statearr_16336_18387[(2)] = inst_16271);

(statearr_16336_18387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (17))){
var inst_16221 = (state_16285[(10)]);
var inst_16241 = cljs.core.first(inst_16221);
var inst_16244 = cljs.core.async.muxch_STAR_(inst_16241);
var inst_16245 = cljs.core.async.close_BANG_(inst_16244);
var inst_16246 = cljs.core.next(inst_16221);
var inst_16205 = inst_16246;
var inst_16206 = null;
var inst_16207 = (0);
var inst_16208 = (0);
var state_16285__$1 = (function (){var statearr_16345 = state_16285;
(statearr_16345[(12)] = inst_16208);

(statearr_16345[(13)] = inst_16205);

(statearr_16345[(14)] = inst_16206);

(statearr_16345[(15)] = inst_16207);

(statearr_16345[(16)] = inst_16245);

return statearr_16345;
})();
var statearr_16351_18389 = state_16285__$1;
(statearr_16351_18389[(2)] = null);

(statearr_16351_18389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (3))){
var inst_16281 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16285__$1,inst_16281);
} else {
if((state_val_16286 === (12))){
var inst_16255 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16352_18390 = state_16285__$1;
(statearr_16352_18390[(2)] = inst_16255);

(statearr_16352_18390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (2))){
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16285__$1,(4),ch);
} else {
if((state_val_16286 === (23))){
var state_16285__$1 = state_16285;
var statearr_16356_18391 = state_16285__$1;
(statearr_16356_18391[(2)] = null);

(statearr_16356_18391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (19))){
var inst_16261 = (state_16285[(11)]);
var inst_16194 = (state_16285[(8)]);
var inst_16264 = cljs.core.async.muxch_STAR_(inst_16261);
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16285__$1,(22),inst_16264,inst_16194);
} else {
if((state_val_16286 === (11))){
var inst_16221 = (state_16285[(10)]);
var inst_16205 = (state_16285[(13)]);
var inst_16221__$1 = cljs.core.seq(inst_16205);
var state_16285__$1 = (function (){var statearr_16364 = state_16285;
(statearr_16364[(10)] = inst_16221__$1);

return statearr_16364;
})();
if(inst_16221__$1){
var statearr_16365_18392 = state_16285__$1;
(statearr_16365_18392[(1)] = (13));

} else {
var statearr_16366_18393 = state_16285__$1;
(statearr_16366_18393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (9))){
var inst_16257 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16371_18398 = state_16285__$1;
(statearr_16371_18398[(2)] = inst_16257);

(statearr_16371_18398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (5))){
var inst_16202 = cljs.core.deref(mults);
var inst_16203 = cljs.core.vals(inst_16202);
var inst_16204 = cljs.core.seq(inst_16203);
var inst_16205 = inst_16204;
var inst_16206 = null;
var inst_16207 = (0);
var inst_16208 = (0);
var state_16285__$1 = (function (){var statearr_16376 = state_16285;
(statearr_16376[(12)] = inst_16208);

(statearr_16376[(13)] = inst_16205);

(statearr_16376[(14)] = inst_16206);

(statearr_16376[(15)] = inst_16207);

return statearr_16376;
})();
var statearr_16379_18402 = state_16285__$1;
(statearr_16379_18402[(2)] = null);

(statearr_16379_18402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (14))){
var state_16285__$1 = state_16285;
var statearr_16383_18404 = state_16285__$1;
(statearr_16383_18404[(2)] = null);

(statearr_16383_18404[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (16))){
var inst_16221 = (state_16285[(10)]);
var inst_16235 = cljs.core.chunk_first(inst_16221);
var inst_16236 = cljs.core.chunk_rest(inst_16221);
var inst_16238 = cljs.core.count(inst_16235);
var inst_16205 = inst_16236;
var inst_16206 = inst_16235;
var inst_16207 = inst_16238;
var inst_16208 = (0);
var state_16285__$1 = (function (){var statearr_16385 = state_16285;
(statearr_16385[(12)] = inst_16208);

(statearr_16385[(13)] = inst_16205);

(statearr_16385[(14)] = inst_16206);

(statearr_16385[(15)] = inst_16207);

return statearr_16385;
})();
var statearr_16390_18405 = state_16285__$1;
(statearr_16390_18405[(2)] = null);

(statearr_16390_18405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (10))){
var inst_16208 = (state_16285[(12)]);
var inst_16205 = (state_16285[(13)]);
var inst_16206 = (state_16285[(14)]);
var inst_16207 = (state_16285[(15)]);
var inst_16214 = cljs.core._nth(inst_16206,inst_16208);
var inst_16215 = cljs.core.async.muxch_STAR_(inst_16214);
var inst_16216 = cljs.core.async.close_BANG_(inst_16215);
var inst_16217 = (inst_16208 + (1));
var tmp16380 = inst_16205;
var tmp16381 = inst_16206;
var tmp16382 = inst_16207;
var inst_16205__$1 = tmp16380;
var inst_16206__$1 = tmp16381;
var inst_16207__$1 = tmp16382;
var inst_16208__$1 = inst_16217;
var state_16285__$1 = (function (){var statearr_16403 = state_16285;
(statearr_16403[(12)] = inst_16208__$1);

(statearr_16403[(17)] = inst_16216);

(statearr_16403[(13)] = inst_16205__$1);

(statearr_16403[(14)] = inst_16206__$1);

(statearr_16403[(15)] = inst_16207__$1);

return statearr_16403;
})();
var statearr_16405_18406 = state_16285__$1;
(statearr_16405_18406[(2)] = null);

(statearr_16405_18406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (18))){
var inst_16250 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16410_18407 = state_16285__$1;
(statearr_16410_18407[(2)] = inst_16250);

(statearr_16410_18407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16286 === (8))){
var inst_16208 = (state_16285[(12)]);
var inst_16207 = (state_16285[(15)]);
var inst_16210 = (inst_16208 < inst_16207);
var inst_16211 = inst_16210;
var state_16285__$1 = state_16285;
if(cljs.core.truth_(inst_16211)){
var statearr_16417_18412 = state_16285__$1;
(statearr_16417_18412[(1)] = (10));

} else {
var statearr_16419_18413 = state_16285__$1;
(statearr_16419_18413[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_16427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16427[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_16427[(1)] = (1));

return statearr_16427;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16285){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16285);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16429){var ex__14020__auto__ = e16429;
var statearr_16431_18414 = state_16285;
(statearr_16431_18414[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_16285[(4)]))){
var statearr_16432_18418 = state_16285;
(statearr_16432_18418[(1)] = cljs.core.first((state_16285[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18425 = state_16285;
state_16285 = G__18425;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_16445 = f__14366__auto__();
(statearr_16445[(6)] = c__14365__auto___18363);

return statearr_16445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16459 = arguments.length;
switch (G__16459) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16470 = arguments.length;
switch (G__16470) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16473 = arguments.length;
switch (G__16473) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14365__auto___18434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_16572){
var state_val_16573 = (state_16572[(1)]);
if((state_val_16573 === (7))){
var state_16572__$1 = state_16572;
var statearr_16574_18435 = state_16572__$1;
(statearr_16574_18435[(2)] = null);

(statearr_16574_18435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (1))){
var state_16572__$1 = state_16572;
var statearr_16577_18436 = state_16572__$1;
(statearr_16577_18436[(2)] = null);

(statearr_16577_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (4))){
var inst_16532 = (state_16572[(7)]);
var inst_16531 = (state_16572[(8)]);
var inst_16534 = (inst_16532 < inst_16531);
var state_16572__$1 = state_16572;
if(cljs.core.truth_(inst_16534)){
var statearr_16580_18437 = state_16572__$1;
(statearr_16580_18437[(1)] = (6));

} else {
var statearr_16581_18438 = state_16572__$1;
(statearr_16581_18438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (15))){
var inst_16558 = (state_16572[(9)]);
var inst_16563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16558);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16572__$1,(17),out,inst_16563);
} else {
if((state_val_16573 === (13))){
var inst_16558 = (state_16572[(9)]);
var inst_16558__$1 = (state_16572[(2)]);
var inst_16559 = cljs.core.some(cljs.core.nil_QMARK_,inst_16558__$1);
var state_16572__$1 = (function (){var statearr_16586 = state_16572;
(statearr_16586[(9)] = inst_16558__$1);

return statearr_16586;
})();
if(cljs.core.truth_(inst_16559)){
var statearr_16587_18440 = state_16572__$1;
(statearr_16587_18440[(1)] = (14));

} else {
var statearr_16590_18441 = state_16572__$1;
(statearr_16590_18441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (6))){
var state_16572__$1 = state_16572;
var statearr_16592_18442 = state_16572__$1;
(statearr_16592_18442[(2)] = null);

(statearr_16592_18442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (17))){
var inst_16565 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16600 = state_16572;
(statearr_16600[(10)] = inst_16565);

return statearr_16600;
})();
var statearr_16601_18443 = state_16572__$1;
(statearr_16601_18443[(2)] = null);

(statearr_16601_18443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (3))){
var inst_16570 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16572__$1,inst_16570);
} else {
if((state_val_16573 === (12))){
var _ = (function (){var statearr_16607 = state_16572;
(statearr_16607[(4)] = cljs.core.rest((state_16572[(4)])));

return statearr_16607;
})();
var state_16572__$1 = state_16572;
var ex16599 = (state_16572__$1[(2)]);
var statearr_16609_18444 = state_16572__$1;
(statearr_16609_18444[(5)] = ex16599);


if((ex16599 instanceof Object)){
var statearr_16610_18449 = state_16572__$1;
(statearr_16610_18449[(1)] = (11));

(statearr_16610_18449[(5)] = null);

} else {
throw ex16599;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (2))){
var inst_16530 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16531 = cnt;
var inst_16532 = (0);
var state_16572__$1 = (function (){var statearr_16615 = state_16572;
(statearr_16615[(7)] = inst_16532);

(statearr_16615[(11)] = inst_16530);

(statearr_16615[(8)] = inst_16531);

return statearr_16615;
})();
var statearr_16616_18453 = state_16572__$1;
(statearr_16616_18453[(2)] = null);

(statearr_16616_18453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (11))){
var inst_16537 = (state_16572[(2)]);
var inst_16538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16572__$1 = (function (){var statearr_16621 = state_16572;
(statearr_16621[(12)] = inst_16537);

return statearr_16621;
})();
var statearr_16622_18455 = state_16572__$1;
(statearr_16622_18455[(2)] = inst_16538);

(statearr_16622_18455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (9))){
var inst_16532 = (state_16572[(7)]);
var _ = (function (){var statearr_16626 = state_16572;
(statearr_16626[(4)] = cljs.core.cons((12),(state_16572[(4)])));

return statearr_16626;
})();
var inst_16544 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16532) : chs__$1.call(null,inst_16532));
var inst_16545 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16532) : done.call(null,inst_16532));
var inst_16546 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16544,inst_16545);
var ___$1 = (function (){var statearr_16627 = state_16572;
(statearr_16627[(4)] = cljs.core.rest((state_16572[(4)])));

return statearr_16627;
})();
var state_16572__$1 = state_16572;
var statearr_16628_18462 = state_16572__$1;
(statearr_16628_18462[(2)] = inst_16546);

(statearr_16628_18462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (5))){
var inst_16556 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16631 = state_16572;
(statearr_16631[(13)] = inst_16556);

return statearr_16631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16572__$1,(13),dchan);
} else {
if((state_val_16573 === (14))){
var inst_16561 = cljs.core.async.close_BANG_(out);
var state_16572__$1 = state_16572;
var statearr_16634_18467 = state_16572__$1;
(statearr_16634_18467[(2)] = inst_16561);

(statearr_16634_18467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (16))){
var inst_16568 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16638_18468 = state_16572__$1;
(statearr_16638_18468[(2)] = inst_16568);

(statearr_16638_18468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (10))){
var inst_16532 = (state_16572[(7)]);
var inst_16549 = (state_16572[(2)]);
var inst_16550 = (inst_16532 + (1));
var inst_16532__$1 = inst_16550;
var state_16572__$1 = (function (){var statearr_16639 = state_16572;
(statearr_16639[(7)] = inst_16532__$1);

(statearr_16639[(14)] = inst_16549);

return statearr_16639;
})();
var statearr_16640_18469 = state_16572__$1;
(statearr_16640_18469[(2)] = null);

(statearr_16640_18469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16573 === (8))){
var inst_16554 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16641_18470 = state_16572__$1;
(statearr_16641_18470[(2)] = inst_16554);

(statearr_16641_18470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_16642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16642[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_16642[(1)] = (1));

return statearr_16642;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16572){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16572);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16647){var ex__14020__auto__ = e16647;
var statearr_16648_18475 = state_16572;
(statearr_16648_18475[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_16572[(4)]))){
var statearr_16651_18476 = state_16572;
(statearr_16651_18476[(1)] = cljs.core.first((state_16572[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18477 = state_16572;
state_16572 = G__18477;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_16653 = f__14366__auto__();
(statearr_16653[(6)] = c__14365__auto___18434);

return statearr_16653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16658 = arguments.length;
switch (G__16658) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_16698){
var state_val_16699 = (state_16698[(1)]);
if((state_val_16699 === (7))){
var inst_16673 = (state_16698[(7)]);
var inst_16674 = (state_16698[(8)]);
var inst_16673__$1 = (state_16698[(2)]);
var inst_16674__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16673__$1,(0),null);
var inst_16675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16673__$1,(1),null);
var inst_16676 = (inst_16674__$1 == null);
var state_16698__$1 = (function (){var statearr_16701 = state_16698;
(statearr_16701[(9)] = inst_16675);

(statearr_16701[(7)] = inst_16673__$1);

(statearr_16701[(8)] = inst_16674__$1);

return statearr_16701;
})();
if(cljs.core.truth_(inst_16676)){
var statearr_16704_18484 = state_16698__$1;
(statearr_16704_18484[(1)] = (8));

} else {
var statearr_16705_18486 = state_16698__$1;
(statearr_16705_18486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (1))){
var inst_16663 = cljs.core.vec(chs);
var inst_16664 = inst_16663;
var state_16698__$1 = (function (){var statearr_16706 = state_16698;
(statearr_16706[(10)] = inst_16664);

return statearr_16706;
})();
var statearr_16707_18487 = state_16698__$1;
(statearr_16707_18487[(2)] = null);

(statearr_16707_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (4))){
var inst_16664 = (state_16698[(10)]);
var state_16698__$1 = state_16698;
return cljs.core.async.ioc_alts_BANG_(state_16698__$1,(7),inst_16664);
} else {
if((state_val_16699 === (6))){
var inst_16693 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16712_18488 = state_16698__$1;
(statearr_16712_18488[(2)] = inst_16693);

(statearr_16712_18488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (3))){
var inst_16696 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16698__$1,inst_16696);
} else {
if((state_val_16699 === (2))){
var inst_16664 = (state_16698[(10)]);
var inst_16666 = cljs.core.count(inst_16664);
var inst_16667 = (inst_16666 > (0));
var state_16698__$1 = state_16698;
if(cljs.core.truth_(inst_16667)){
var statearr_16716_18489 = state_16698__$1;
(statearr_16716_18489[(1)] = (4));

} else {
var statearr_16718_18490 = state_16698__$1;
(statearr_16718_18490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (11))){
var inst_16664 = (state_16698[(10)]);
var inst_16685 = (state_16698[(2)]);
var tmp16714 = inst_16664;
var inst_16664__$1 = tmp16714;
var state_16698__$1 = (function (){var statearr_16719 = state_16698;
(statearr_16719[(11)] = inst_16685);

(statearr_16719[(10)] = inst_16664__$1);

return statearr_16719;
})();
var statearr_16721_18491 = state_16698__$1;
(statearr_16721_18491[(2)] = null);

(statearr_16721_18491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (9))){
var inst_16674 = (state_16698[(8)]);
var state_16698__$1 = state_16698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16698__$1,(11),out,inst_16674);
} else {
if((state_val_16699 === (5))){
var inst_16691 = cljs.core.async.close_BANG_(out);
var state_16698__$1 = state_16698;
var statearr_16724_18499 = state_16698__$1;
(statearr_16724_18499[(2)] = inst_16691);

(statearr_16724_18499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (10))){
var inst_16689 = (state_16698[(2)]);
var state_16698__$1 = state_16698;
var statearr_16725_18500 = state_16698__$1;
(statearr_16725_18500[(2)] = inst_16689);

(statearr_16725_18500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16699 === (8))){
var inst_16675 = (state_16698[(9)]);
var inst_16673 = (state_16698[(7)]);
var inst_16664 = (state_16698[(10)]);
var inst_16674 = (state_16698[(8)]);
var inst_16679 = (function (){var cs = inst_16664;
var vec__16669 = inst_16673;
var v = inst_16674;
var c = inst_16675;
return (function (p1__16656_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16656_SHARP_);
});
})();
var inst_16681 = cljs.core.filterv(inst_16679,inst_16664);
var inst_16664__$1 = inst_16681;
var state_16698__$1 = (function (){var statearr_16726 = state_16698;
(statearr_16726[(10)] = inst_16664__$1);

return statearr_16726;
})();
var statearr_16727_18502 = state_16698__$1;
(statearr_16727_18502[(2)] = null);

(statearr_16727_18502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_16732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16732[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_16732[(1)] = (1));

return statearr_16732;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16698){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16698);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16733){var ex__14020__auto__ = e16733;
var statearr_16734_18507 = state_16698;
(statearr_16734_18507[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_16698[(4)]))){
var statearr_16735_18508 = state_16698;
(statearr_16735_18508[(1)] = cljs.core.first((state_16698[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18511 = state_16698;
state_16698 = G__18511;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_16741 = f__14366__auto__();
(statearr_16741[(6)] = c__14365__auto___18483);

return statearr_16741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16745 = arguments.length;
switch (G__16745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (7))){
var inst_16754 = (state_16772[(7)]);
var inst_16754__$1 = (state_16772[(2)]);
var inst_16755 = (inst_16754__$1 == null);
var inst_16756 = cljs.core.not(inst_16755);
var state_16772__$1 = (function (){var statearr_16776 = state_16772;
(statearr_16776[(7)] = inst_16754__$1);

return statearr_16776;
})();
if(inst_16756){
var statearr_16777_18521 = state_16772__$1;
(statearr_16777_18521[(1)] = (8));

} else {
var statearr_16778_18522 = state_16772__$1;
(statearr_16778_18522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (1))){
var inst_16748 = (0);
var state_16772__$1 = (function (){var statearr_16779 = state_16772;
(statearr_16779[(8)] = inst_16748);

return statearr_16779;
})();
var statearr_16780_18523 = state_16772__$1;
(statearr_16780_18523[(2)] = null);

(statearr_16780_18523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (4))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16772__$1,(7),ch);
} else {
if((state_val_16773 === (6))){
var inst_16767 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16781_18524 = state_16772__$1;
(statearr_16781_18524[(2)] = inst_16767);

(statearr_16781_18524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (3))){
var inst_16769 = (state_16772[(2)]);
var inst_16770 = cljs.core.async.close_BANG_(out);
var state_16772__$1 = (function (){var statearr_16784 = state_16772;
(statearr_16784[(9)] = inst_16769);

return statearr_16784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16772__$1,inst_16770);
} else {
if((state_val_16773 === (2))){
var inst_16748 = (state_16772[(8)]);
var inst_16751 = (inst_16748 < n);
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16751)){
var statearr_16785_18525 = state_16772__$1;
(statearr_16785_18525[(1)] = (4));

} else {
var statearr_16786_18526 = state_16772__$1;
(statearr_16786_18526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (11))){
var inst_16748 = (state_16772[(8)]);
var inst_16759 = (state_16772[(2)]);
var inst_16760 = (inst_16748 + (1));
var inst_16748__$1 = inst_16760;
var state_16772__$1 = (function (){var statearr_16787 = state_16772;
(statearr_16787[(10)] = inst_16759);

(statearr_16787[(8)] = inst_16748__$1);

return statearr_16787;
})();
var statearr_16788_18527 = state_16772__$1;
(statearr_16788_18527[(2)] = null);

(statearr_16788_18527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (9))){
var state_16772__$1 = state_16772;
var statearr_16789_18528 = state_16772__$1;
(statearr_16789_18528[(2)] = null);

(statearr_16789_18528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (5))){
var state_16772__$1 = state_16772;
var statearr_16790_18529 = state_16772__$1;
(statearr_16790_18529[(2)] = null);

(statearr_16790_18529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (10))){
var inst_16764 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16792_18530 = state_16772__$1;
(statearr_16792_18530[(2)] = inst_16764);

(statearr_16792_18530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (8))){
var inst_16754 = (state_16772[(7)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(11),out,inst_16754);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_16793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16793[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_16793[(1)] = (1));

return statearr_16793;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16772){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16772);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16794){var ex__14020__auto__ = e16794;
var statearr_16795_18533 = state_16772;
(statearr_16795_18533[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_16772[(4)]))){
var statearr_16797_18534 = state_16772;
(statearr_16797_18534[(1)] = cljs.core.first((state_16772[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18535 = state_16772;
state_16772 = G__18535;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_16805 = f__14366__auto__();
(statearr_16805[(6)] = c__14365__auto___18520);

return statearr_16805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16809 = (function (f,ch,meta16810){
this.f = f;
this.ch = ch;
this.meta16810 = meta16810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16811,meta16810__$1){
var self__ = this;
var _16811__$1 = this;
return (new cljs.core.async.t_cljs$core$async16809(self__.f,self__.ch,meta16810__$1));
}));

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16811){
var self__ = this;
var _16811__$1 = this;
return self__.meta16810;
}));

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16820 = (function (f,ch,meta16810,_,fn1,meta16821){
this.f = f;
this.ch = ch;
this.meta16810 = meta16810;
this._ = _;
this.fn1 = fn1;
this.meta16821 = meta16821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16822,meta16821__$1){
var self__ = this;
var _16822__$1 = this;
return (new cljs.core.async.t_cljs$core$async16820(self__.f,self__.ch,self__.meta16810,self__._,self__.fn1,meta16821__$1));
}));

(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16822){
var self__ = this;
var _16822__$1 = this;
return self__.meta16821;
}));

(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16807_SHARP_){
var G__16832 = (((p1__16807_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16807_SHARP_) : self__.f.call(null,p1__16807_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16832) : f1.call(null,G__16832));
});
}));

(cljs.core.async.t_cljs$core$async16820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16810","meta16810",1062035705,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16809","cljs.core.async/t_cljs$core$async16809",-1545979580,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16821","meta16821",-1871937780,null)], null);
}));

(cljs.core.async.t_cljs$core$async16820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16820");

(cljs.core.async.t_cljs$core$async16820.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async16820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16820.
 */
cljs.core.async.__GT_t_cljs$core$async16820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16820(f__$1,ch__$1,meta16810__$1,___$2,fn1__$1,meta16821){
return (new cljs.core.async.t_cljs$core$async16820(f__$1,ch__$1,meta16810__$1,___$2,fn1__$1,meta16821));
});

}

return (new cljs.core.async.t_cljs$core$async16820(self__.f,self__.ch,self__.meta16810,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16847 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16847) : self__.f.call(null,G__16847));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16810","meta16810",1062035705,null)], null);
}));

(cljs.core.async.t_cljs$core$async16809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16809");

(cljs.core.async.t_cljs$core$async16809.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async16809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16809.
 */
cljs.core.async.__GT_t_cljs$core$async16809 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16809(f__$1,ch__$1,meta16810){
return (new cljs.core.async.t_cljs$core$async16809(f__$1,ch__$1,meta16810));
});

}

return (new cljs.core.async.t_cljs$core$async16809(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16865 = (function (f,ch,meta16866){
this.f = f;
this.ch = ch;
this.meta16866 = meta16866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16867,meta16866__$1){
var self__ = this;
var _16867__$1 = this;
return (new cljs.core.async.t_cljs$core$async16865(self__.f,self__.ch,meta16866__$1));
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16867){
var self__ = this;
var _16867__$1 = this;
return self__.meta16866;
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16866","meta16866",-276298300,null)], null);
}));

(cljs.core.async.t_cljs$core$async16865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16865");

(cljs.core.async.t_cljs$core$async16865.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async16865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16865.
 */
cljs.core.async.__GT_t_cljs$core$async16865 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16865(f__$1,ch__$1,meta16866){
return (new cljs.core.async.t_cljs$core$async16865(f__$1,ch__$1,meta16866));
});

}

return (new cljs.core.async.t_cljs$core$async16865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16888 = (function (p,ch,meta16889){
this.p = p;
this.ch = ch;
this.meta16889 = meta16889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16890,meta16889__$1){
var self__ = this;
var _16890__$1 = this;
return (new cljs.core.async.t_cljs$core$async16888(self__.p,self__.ch,meta16889__$1));
}));

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16890){
var self__ = this;
var _16890__$1 = this;
return self__.meta16889;
}));

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16889","meta16889",-295120901,null)], null);
}));

(cljs.core.async.t_cljs$core$async16888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16888");

(cljs.core.async.t_cljs$core$async16888.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async16888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16888.
 */
cljs.core.async.__GT_t_cljs$core$async16888 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16888(p__$1,ch__$1,meta16889){
return (new cljs.core.async.t_cljs$core$async16888(p__$1,ch__$1,meta16889));
});

}

return (new cljs.core.async.t_cljs$core$async16888(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16925 = arguments.length;
switch (G__16925) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_16978){
var state_val_16979 = (state_16978[(1)]);
if((state_val_16979 === (7))){
var inst_16974 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16980_18550 = state_16978__$1;
(statearr_16980_18550[(2)] = inst_16974);

(statearr_16980_18550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (1))){
var state_16978__$1 = state_16978;
var statearr_16981_18551 = state_16978__$1;
(statearr_16981_18551[(2)] = null);

(statearr_16981_18551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (4))){
var inst_16934 = (state_16978[(7)]);
var inst_16934__$1 = (state_16978[(2)]);
var inst_16938 = (inst_16934__$1 == null);
var state_16978__$1 = (function (){var statearr_16988 = state_16978;
(statearr_16988[(7)] = inst_16934__$1);

return statearr_16988;
})();
if(cljs.core.truth_(inst_16938)){
var statearr_16989_18552 = state_16978__$1;
(statearr_16989_18552[(1)] = (5));

} else {
var statearr_16990_18553 = state_16978__$1;
(statearr_16990_18553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (6))){
var inst_16934 = (state_16978[(7)]);
var inst_16963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16934) : p.call(null,inst_16934));
var state_16978__$1 = state_16978;
if(cljs.core.truth_(inst_16963)){
var statearr_16992_18554 = state_16978__$1;
(statearr_16992_18554[(1)] = (8));

} else {
var statearr_16993_18555 = state_16978__$1;
(statearr_16993_18555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (3))){
var inst_16976 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16978__$1,inst_16976);
} else {
if((state_val_16979 === (2))){
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16978__$1,(4),ch);
} else {
if((state_val_16979 === (11))){
var inst_16968 = (state_16978[(2)]);
var state_16978__$1 = state_16978;
var statearr_16995_18557 = state_16978__$1;
(statearr_16995_18557[(2)] = inst_16968);

(statearr_16995_18557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (9))){
var state_16978__$1 = state_16978;
var statearr_16996_18558 = state_16978__$1;
(statearr_16996_18558[(2)] = null);

(statearr_16996_18558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (5))){
var inst_16940 = cljs.core.async.close_BANG_(out);
var state_16978__$1 = state_16978;
var statearr_16997_18559 = state_16978__$1;
(statearr_16997_18559[(2)] = inst_16940);

(statearr_16997_18559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (10))){
var inst_16971 = (state_16978[(2)]);
var state_16978__$1 = (function (){var statearr_16999 = state_16978;
(statearr_16999[(8)] = inst_16971);

return statearr_16999;
})();
var statearr_17000_18561 = state_16978__$1;
(statearr_17000_18561[(2)] = null);

(statearr_17000_18561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16979 === (8))){
var inst_16934 = (state_16978[(7)]);
var state_16978__$1 = state_16978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16978__$1,(11),out,inst_16934);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17013 = [null,null,null,null,null,null,null,null,null];
(statearr_17013[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17013[(1)] = (1));

return statearr_17013;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16978){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16978);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17014){var ex__14020__auto__ = e17014;
var statearr_17015_18562 = state_16978;
(statearr_17015_18562[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_16978[(4)]))){
var statearr_17016_18563 = state_16978;
(statearr_17016_18563[(1)] = cljs.core.first((state_16978[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18564 = state_16978;
state_16978 = G__18564;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_17018 = f__14366__auto__();
(statearr_17018[(6)] = c__14365__auto___18549);

return statearr_17018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17024 = arguments.length;
switch (G__17024) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14365__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_17109){
var state_val_17110 = (state_17109[(1)]);
if((state_val_17110 === (7))){
var inst_17105 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17118_18570 = state_17109__$1;
(statearr_17118_18570[(2)] = inst_17105);

(statearr_17118_18570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (20))){
var inst_17070 = (state_17109[(7)]);
var inst_17086 = (state_17109[(2)]);
var inst_17087 = cljs.core.next(inst_17070);
var inst_17053 = inst_17087;
var inst_17054 = null;
var inst_17055 = (0);
var inst_17056 = (0);
var state_17109__$1 = (function (){var statearr_17119 = state_17109;
(statearr_17119[(8)] = inst_17054);

(statearr_17119[(9)] = inst_17055);

(statearr_17119[(10)] = inst_17053);

(statearr_17119[(11)] = inst_17056);

(statearr_17119[(12)] = inst_17086);

return statearr_17119;
})();
var statearr_17122_18571 = state_17109__$1;
(statearr_17122_18571[(2)] = null);

(statearr_17122_18571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (1))){
var state_17109__$1 = state_17109;
var statearr_17123_18572 = state_17109__$1;
(statearr_17123_18572[(2)] = null);

(statearr_17123_18572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (4))){
var inst_17039 = (state_17109[(13)]);
var inst_17039__$1 = (state_17109[(2)]);
var inst_17040 = (inst_17039__$1 == null);
var state_17109__$1 = (function (){var statearr_17130 = state_17109;
(statearr_17130[(13)] = inst_17039__$1);

return statearr_17130;
})();
if(cljs.core.truth_(inst_17040)){
var statearr_17131_18575 = state_17109__$1;
(statearr_17131_18575[(1)] = (5));

} else {
var statearr_17132_18576 = state_17109__$1;
(statearr_17132_18576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (15))){
var state_17109__$1 = state_17109;
var statearr_17143_18577 = state_17109__$1;
(statearr_17143_18577[(2)] = null);

(statearr_17143_18577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (21))){
var state_17109__$1 = state_17109;
var statearr_17144_18578 = state_17109__$1;
(statearr_17144_18578[(2)] = null);

(statearr_17144_18578[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (13))){
var inst_17054 = (state_17109[(8)]);
var inst_17055 = (state_17109[(9)]);
var inst_17053 = (state_17109[(10)]);
var inst_17056 = (state_17109[(11)]);
var inst_17065 = (state_17109[(2)]);
var inst_17067 = (inst_17056 + (1));
var tmp17140 = inst_17054;
var tmp17141 = inst_17055;
var tmp17142 = inst_17053;
var inst_17053__$1 = tmp17142;
var inst_17054__$1 = tmp17140;
var inst_17055__$1 = tmp17141;
var inst_17056__$1 = inst_17067;
var state_17109__$1 = (function (){var statearr_17145 = state_17109;
(statearr_17145[(8)] = inst_17054__$1);

(statearr_17145[(9)] = inst_17055__$1);

(statearr_17145[(10)] = inst_17053__$1);

(statearr_17145[(11)] = inst_17056__$1);

(statearr_17145[(14)] = inst_17065);

return statearr_17145;
})();
var statearr_17146_18579 = state_17109__$1;
(statearr_17146_18579[(2)] = null);

(statearr_17146_18579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (22))){
var state_17109__$1 = state_17109;
var statearr_17147_18580 = state_17109__$1;
(statearr_17147_18580[(2)] = null);

(statearr_17147_18580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (6))){
var inst_17039 = (state_17109[(13)]);
var inst_17051 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17039) : f.call(null,inst_17039));
var inst_17052 = cljs.core.seq(inst_17051);
var inst_17053 = inst_17052;
var inst_17054 = null;
var inst_17055 = (0);
var inst_17056 = (0);
var state_17109__$1 = (function (){var statearr_17148 = state_17109;
(statearr_17148[(8)] = inst_17054);

(statearr_17148[(9)] = inst_17055);

(statearr_17148[(10)] = inst_17053);

(statearr_17148[(11)] = inst_17056);

return statearr_17148;
})();
var statearr_17154_18581 = state_17109__$1;
(statearr_17154_18581[(2)] = null);

(statearr_17154_18581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (17))){
var inst_17070 = (state_17109[(7)]);
var inst_17074 = cljs.core.chunk_first(inst_17070);
var inst_17077 = cljs.core.chunk_rest(inst_17070);
var inst_17078 = cljs.core.count(inst_17074);
var inst_17053 = inst_17077;
var inst_17054 = inst_17074;
var inst_17055 = inst_17078;
var inst_17056 = (0);
var state_17109__$1 = (function (){var statearr_17155 = state_17109;
(statearr_17155[(8)] = inst_17054);

(statearr_17155[(9)] = inst_17055);

(statearr_17155[(10)] = inst_17053);

(statearr_17155[(11)] = inst_17056);

return statearr_17155;
})();
var statearr_17160_18582 = state_17109__$1;
(statearr_17160_18582[(2)] = null);

(statearr_17160_18582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (3))){
var inst_17107 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17109__$1,inst_17107);
} else {
if((state_val_17110 === (12))){
var inst_17095 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17161_18587 = state_17109__$1;
(statearr_17161_18587[(2)] = inst_17095);

(statearr_17161_18587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (2))){
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17109__$1,(4),in$);
} else {
if((state_val_17110 === (23))){
var inst_17103 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17162_18591 = state_17109__$1;
(statearr_17162_18591[(2)] = inst_17103);

(statearr_17162_18591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (19))){
var inst_17090 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17164_18592 = state_17109__$1;
(statearr_17164_18592[(2)] = inst_17090);

(statearr_17164_18592[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (11))){
var inst_17053 = (state_17109[(10)]);
var inst_17070 = (state_17109[(7)]);
var inst_17070__$1 = cljs.core.seq(inst_17053);
var state_17109__$1 = (function (){var statearr_17165 = state_17109;
(statearr_17165[(7)] = inst_17070__$1);

return statearr_17165;
})();
if(inst_17070__$1){
var statearr_17166_18593 = state_17109__$1;
(statearr_17166_18593[(1)] = (14));

} else {
var statearr_17167_18594 = state_17109__$1;
(statearr_17167_18594[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (9))){
var inst_17097 = (state_17109[(2)]);
var inst_17098 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17109__$1 = (function (){var statearr_17168 = state_17109;
(statearr_17168[(15)] = inst_17097);

return statearr_17168;
})();
if(cljs.core.truth_(inst_17098)){
var statearr_17169_18598 = state_17109__$1;
(statearr_17169_18598[(1)] = (21));

} else {
var statearr_17170_18599 = state_17109__$1;
(statearr_17170_18599[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (5))){
var inst_17045 = cljs.core.async.close_BANG_(out);
var state_17109__$1 = state_17109;
var statearr_17171_18600 = state_17109__$1;
(statearr_17171_18600[(2)] = inst_17045);

(statearr_17171_18600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (14))){
var inst_17070 = (state_17109[(7)]);
var inst_17072 = cljs.core.chunked_seq_QMARK_(inst_17070);
var state_17109__$1 = state_17109;
if(inst_17072){
var statearr_17172_18604 = state_17109__$1;
(statearr_17172_18604[(1)] = (17));

} else {
var statearr_17174_18605 = state_17109__$1;
(statearr_17174_18605[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (16))){
var inst_17093 = (state_17109[(2)]);
var state_17109__$1 = state_17109;
var statearr_17175_18606 = state_17109__$1;
(statearr_17175_18606[(2)] = inst_17093);

(statearr_17175_18606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17110 === (10))){
var inst_17054 = (state_17109[(8)]);
var inst_17056 = (state_17109[(11)]);
var inst_17063 = cljs.core._nth(inst_17054,inst_17056);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17109__$1,(13),out,inst_17063);
} else {
if((state_val_17110 === (18))){
var inst_17070 = (state_17109[(7)]);
var inst_17083 = cljs.core.first(inst_17070);
var state_17109__$1 = state_17109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17109__$1,(20),out,inst_17083);
} else {
if((state_val_17110 === (8))){
var inst_17055 = (state_17109[(9)]);
var inst_17056 = (state_17109[(11)]);
var inst_17058 = (inst_17056 < inst_17055);
var inst_17059 = inst_17058;
var state_17109__$1 = state_17109;
if(cljs.core.truth_(inst_17059)){
var statearr_17176_18610 = state_17109__$1;
(statearr_17176_18610[(1)] = (10));

} else {
var statearr_17177_18611 = state_17109__$1;
(statearr_17177_18611[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_17178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17178[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__);

(statearr_17178[(1)] = (1));

return statearr_17178;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1 = (function (state_17109){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17109);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17180){var ex__14020__auto__ = e17180;
var statearr_17181_18616 = state_17109;
(statearr_17181_18616[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_17109[(4)]))){
var statearr_17182_18617 = state_17109;
(statearr_17182_18617[(1)] = cljs.core.first((state_17109[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18618 = state_17109;
state_17109 = G__18618;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__ = function(state_17109){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1.call(this,state_17109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_17183 = f__14366__auto__();
(statearr_17183[(6)] = c__14365__auto__);

return statearr_17183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));

return c__14365__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17185 = arguments.length;
switch (G__17185) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17192 = arguments.length;
switch (G__17192) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17204 = arguments.length;
switch (G__17204) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_17229){
var state_val_17230 = (state_17229[(1)]);
if((state_val_17230 === (7))){
var inst_17223 = (state_17229[(2)]);
var state_17229__$1 = state_17229;
var statearr_17232_18623 = state_17229__$1;
(statearr_17232_18623[(2)] = inst_17223);

(statearr_17232_18623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (1))){
var inst_17205 = null;
var state_17229__$1 = (function (){var statearr_17235 = state_17229;
(statearr_17235[(7)] = inst_17205);

return statearr_17235;
})();
var statearr_17236_18624 = state_17229__$1;
(statearr_17236_18624[(2)] = null);

(statearr_17236_18624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (4))){
var inst_17208 = (state_17229[(8)]);
var inst_17208__$1 = (state_17229[(2)]);
var inst_17209 = (inst_17208__$1 == null);
var inst_17210 = cljs.core.not(inst_17209);
var state_17229__$1 = (function (){var statearr_17237 = state_17229;
(statearr_17237[(8)] = inst_17208__$1);

return statearr_17237;
})();
if(inst_17210){
var statearr_17238_18625 = state_17229__$1;
(statearr_17238_18625[(1)] = (5));

} else {
var statearr_17239_18626 = state_17229__$1;
(statearr_17239_18626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (6))){
var state_17229__$1 = state_17229;
var statearr_17240_18627 = state_17229__$1;
(statearr_17240_18627[(2)] = null);

(statearr_17240_18627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (3))){
var inst_17225 = (state_17229[(2)]);
var inst_17226 = cljs.core.async.close_BANG_(out);
var state_17229__$1 = (function (){var statearr_17243 = state_17229;
(statearr_17243[(9)] = inst_17225);

return statearr_17243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17229__$1,inst_17226);
} else {
if((state_val_17230 === (2))){
var state_17229__$1 = state_17229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17229__$1,(4),ch);
} else {
if((state_val_17230 === (11))){
var inst_17208 = (state_17229[(8)]);
var inst_17217 = (state_17229[(2)]);
var inst_17205 = inst_17208;
var state_17229__$1 = (function (){var statearr_17244 = state_17229;
(statearr_17244[(10)] = inst_17217);

(statearr_17244[(7)] = inst_17205);

return statearr_17244;
})();
var statearr_17245_18632 = state_17229__$1;
(statearr_17245_18632[(2)] = null);

(statearr_17245_18632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (9))){
var inst_17208 = (state_17229[(8)]);
var state_17229__$1 = state_17229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17229__$1,(11),out,inst_17208);
} else {
if((state_val_17230 === (5))){
var inst_17208 = (state_17229[(8)]);
var inst_17205 = (state_17229[(7)]);
var inst_17212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17208,inst_17205);
var state_17229__$1 = state_17229;
if(inst_17212){
var statearr_17247_18633 = state_17229__$1;
(statearr_17247_18633[(1)] = (8));

} else {
var statearr_17248_18634 = state_17229__$1;
(statearr_17248_18634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (10))){
var inst_17220 = (state_17229[(2)]);
var state_17229__$1 = state_17229;
var statearr_17249_18635 = state_17229__$1;
(statearr_17249_18635[(2)] = inst_17220);

(statearr_17249_18635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17230 === (8))){
var inst_17205 = (state_17229[(7)]);
var tmp17246 = inst_17205;
var inst_17205__$1 = tmp17246;
var state_17229__$1 = (function (){var statearr_17251 = state_17229;
(statearr_17251[(7)] = inst_17205__$1);

return statearr_17251;
})();
var statearr_17253_18636 = state_17229__$1;
(statearr_17253_18636[(2)] = null);

(statearr_17253_18636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17255[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17255[(1)] = (1));

return statearr_17255;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17229){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17229);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17257){var ex__14020__auto__ = e17257;
var statearr_17258_18637 = state_17229;
(statearr_17258_18637[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_17229[(4)]))){
var statearr_17259_18638 = state_17229;
(statearr_17259_18638[(1)] = cljs.core.first((state_17229[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18639 = state_17229;
state_17229 = G__18639;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_17262 = f__14366__auto__();
(statearr_17262[(6)] = c__14365__auto___18622);

return statearr_17262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17273 = arguments.length;
switch (G__17273) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_17317){
var state_val_17318 = (state_17317[(1)]);
if((state_val_17318 === (7))){
var inst_17313 = (state_17317[(2)]);
var state_17317__$1 = state_17317;
var statearr_17321_18644 = state_17317__$1;
(statearr_17321_18644[(2)] = inst_17313);

(statearr_17321_18644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (1))){
var inst_17278 = (new Array(n));
var inst_17279 = inst_17278;
var inst_17280 = (0);
var state_17317__$1 = (function (){var statearr_17323 = state_17317;
(statearr_17323[(7)] = inst_17279);

(statearr_17323[(8)] = inst_17280);

return statearr_17323;
})();
var statearr_17324_18645 = state_17317__$1;
(statearr_17324_18645[(2)] = null);

(statearr_17324_18645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (4))){
var inst_17284 = (state_17317[(9)]);
var inst_17284__$1 = (state_17317[(2)]);
var inst_17285 = (inst_17284__$1 == null);
var inst_17286 = cljs.core.not(inst_17285);
var state_17317__$1 = (function (){var statearr_17326 = state_17317;
(statearr_17326[(9)] = inst_17284__$1);

return statearr_17326;
})();
if(inst_17286){
var statearr_17329_18646 = state_17317__$1;
(statearr_17329_18646[(1)] = (5));

} else {
var statearr_17331_18647 = state_17317__$1;
(statearr_17331_18647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (15))){
var inst_17307 = (state_17317[(2)]);
var state_17317__$1 = state_17317;
var statearr_17332_18648 = state_17317__$1;
(statearr_17332_18648[(2)] = inst_17307);

(statearr_17332_18648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (13))){
var state_17317__$1 = state_17317;
var statearr_17333_18649 = state_17317__$1;
(statearr_17333_18649[(2)] = null);

(statearr_17333_18649[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (6))){
var inst_17280 = (state_17317[(8)]);
var inst_17303 = (inst_17280 > (0));
var state_17317__$1 = state_17317;
if(cljs.core.truth_(inst_17303)){
var statearr_17334_18650 = state_17317__$1;
(statearr_17334_18650[(1)] = (12));

} else {
var statearr_17335_18651 = state_17317__$1;
(statearr_17335_18651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (3))){
var inst_17315 = (state_17317[(2)]);
var state_17317__$1 = state_17317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17317__$1,inst_17315);
} else {
if((state_val_17318 === (12))){
var inst_17279 = (state_17317[(7)]);
var inst_17305 = cljs.core.vec(inst_17279);
var state_17317__$1 = state_17317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17317__$1,(15),out,inst_17305);
} else {
if((state_val_17318 === (2))){
var state_17317__$1 = state_17317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17317__$1,(4),ch);
} else {
if((state_val_17318 === (11))){
var inst_17296 = (state_17317[(2)]);
var inst_17297 = (new Array(n));
var inst_17279 = inst_17297;
var inst_17280 = (0);
var state_17317__$1 = (function (){var statearr_17339 = state_17317;
(statearr_17339[(10)] = inst_17296);

(statearr_17339[(7)] = inst_17279);

(statearr_17339[(8)] = inst_17280);

return statearr_17339;
})();
var statearr_17340_18658 = state_17317__$1;
(statearr_17340_18658[(2)] = null);

(statearr_17340_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (9))){
var inst_17279 = (state_17317[(7)]);
var inst_17294 = cljs.core.vec(inst_17279);
var state_17317__$1 = state_17317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17317__$1,(11),out,inst_17294);
} else {
if((state_val_17318 === (5))){
var inst_17289 = (state_17317[(11)]);
var inst_17279 = (state_17317[(7)]);
var inst_17284 = (state_17317[(9)]);
var inst_17280 = (state_17317[(8)]);
var inst_17288 = (inst_17279[inst_17280] = inst_17284);
var inst_17289__$1 = (inst_17280 + (1));
var inst_17290 = (inst_17289__$1 < n);
var state_17317__$1 = (function (){var statearr_17342 = state_17317;
(statearr_17342[(11)] = inst_17289__$1);

(statearr_17342[(12)] = inst_17288);

return statearr_17342;
})();
if(cljs.core.truth_(inst_17290)){
var statearr_17343_18659 = state_17317__$1;
(statearr_17343_18659[(1)] = (8));

} else {
var statearr_17344_18660 = state_17317__$1;
(statearr_17344_18660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (14))){
var inst_17310 = (state_17317[(2)]);
var inst_17311 = cljs.core.async.close_BANG_(out);
var state_17317__$1 = (function (){var statearr_17347 = state_17317;
(statearr_17347[(13)] = inst_17310);

return statearr_17347;
})();
var statearr_17348_18661 = state_17317__$1;
(statearr_17348_18661[(2)] = inst_17311);

(statearr_17348_18661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (10))){
var inst_17300 = (state_17317[(2)]);
var state_17317__$1 = state_17317;
var statearr_17349_18662 = state_17317__$1;
(statearr_17349_18662[(2)] = inst_17300);

(statearr_17349_18662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17318 === (8))){
var inst_17289 = (state_17317[(11)]);
var inst_17279 = (state_17317[(7)]);
var tmp17345 = inst_17279;
var inst_17279__$1 = tmp17345;
var inst_17280 = inst_17289;
var state_17317__$1 = (function (){var statearr_17352 = state_17317;
(statearr_17352[(7)] = inst_17279__$1);

(statearr_17352[(8)] = inst_17280);

return statearr_17352;
})();
var statearr_17353_18663 = state_17317__$1;
(statearr_17353_18663[(2)] = null);

(statearr_17353_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17356[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17356[(1)] = (1));

return statearr_17356;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17317){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17317);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17358){var ex__14020__auto__ = e17358;
var statearr_17359_18664 = state_17317;
(statearr_17359_18664[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_17317[(4)]))){
var statearr_17360_18665 = state_17317;
(statearr_17360_18665[(1)] = cljs.core.first((state_17317[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18670 = state_17317;
state_17317 = G__18670;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_17361 = f__14366__auto__();
(statearr_17361[(6)] = c__14365__auto___18643);

return statearr_17361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17393 = arguments.length;
switch (G__17393) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14365__auto___18673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14366__auto__ = (function (){var switch__14015__auto__ = (function (state_17462){
var state_val_17463 = (state_17462[(1)]);
if((state_val_17463 === (7))){
var inst_17457 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
var statearr_17465_18674 = state_17462__$1;
(statearr_17465_18674[(2)] = inst_17457);

(statearr_17465_18674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (1))){
var inst_17413 = [];
var inst_17414 = inst_17413;
var inst_17415 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17462__$1 = (function (){var statearr_17466 = state_17462;
(statearr_17466[(7)] = inst_17415);

(statearr_17466[(8)] = inst_17414);

return statearr_17466;
})();
var statearr_17467_18675 = state_17462__$1;
(statearr_17467_18675[(2)] = null);

(statearr_17467_18675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (4))){
var inst_17418 = (state_17462[(9)]);
var inst_17418__$1 = (state_17462[(2)]);
var inst_17419 = (inst_17418__$1 == null);
var inst_17420 = cljs.core.not(inst_17419);
var state_17462__$1 = (function (){var statearr_17469 = state_17462;
(statearr_17469[(9)] = inst_17418__$1);

return statearr_17469;
})();
if(inst_17420){
var statearr_17470_18676 = state_17462__$1;
(statearr_17470_18676[(1)] = (5));

} else {
var statearr_17472_18678 = state_17462__$1;
(statearr_17472_18678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (15))){
var inst_17414 = (state_17462[(8)]);
var inst_17449 = cljs.core.vec(inst_17414);
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17462__$1,(18),out,inst_17449);
} else {
if((state_val_17463 === (13))){
var inst_17443 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
var statearr_17478_18680 = state_17462__$1;
(statearr_17478_18680[(2)] = inst_17443);

(statearr_17478_18680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (6))){
var inst_17414 = (state_17462[(8)]);
var inst_17446 = inst_17414.length;
var inst_17447 = (inst_17446 > (0));
var state_17462__$1 = state_17462;
if(cljs.core.truth_(inst_17447)){
var statearr_17481_18682 = state_17462__$1;
(statearr_17481_18682[(1)] = (15));

} else {
var statearr_17482_18683 = state_17462__$1;
(statearr_17482_18683[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (17))){
var inst_17454 = (state_17462[(2)]);
var inst_17455 = cljs.core.async.close_BANG_(out);
var state_17462__$1 = (function (){var statearr_17484 = state_17462;
(statearr_17484[(10)] = inst_17454);

return statearr_17484;
})();
var statearr_17485_18684 = state_17462__$1;
(statearr_17485_18684[(2)] = inst_17455);

(statearr_17485_18684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (3))){
var inst_17459 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17462__$1,inst_17459);
} else {
if((state_val_17463 === (12))){
var inst_17414 = (state_17462[(8)]);
var inst_17434 = cljs.core.vec(inst_17414);
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17462__$1,(14),out,inst_17434);
} else {
if((state_val_17463 === (2))){
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17462__$1,(4),ch);
} else {
if((state_val_17463 === (11))){
var inst_17418 = (state_17462[(9)]);
var inst_17414 = (state_17462[(8)]);
var inst_17422 = (state_17462[(11)]);
var inst_17430 = inst_17414.push(inst_17418);
var tmp17486 = inst_17414;
var inst_17414__$1 = tmp17486;
var inst_17415 = inst_17422;
var state_17462__$1 = (function (){var statearr_17487 = state_17462;
(statearr_17487[(7)] = inst_17415);

(statearr_17487[(8)] = inst_17414__$1);

(statearr_17487[(12)] = inst_17430);

return statearr_17487;
})();
var statearr_17491_18689 = state_17462__$1;
(statearr_17491_18689[(2)] = null);

(statearr_17491_18689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (9))){
var inst_17415 = (state_17462[(7)]);
var inst_17426 = cljs.core.keyword_identical_QMARK_(inst_17415,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17462__$1 = state_17462;
var statearr_17493_18694 = state_17462__$1;
(statearr_17493_18694[(2)] = inst_17426);

(statearr_17493_18694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (5))){
var inst_17418 = (state_17462[(9)]);
var inst_17423 = (state_17462[(13)]);
var inst_17415 = (state_17462[(7)]);
var inst_17422 = (state_17462[(11)]);
var inst_17422__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17418) : f.call(null,inst_17418));
var inst_17423__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17422__$1,inst_17415);
var state_17462__$1 = (function (){var statearr_17495 = state_17462;
(statearr_17495[(13)] = inst_17423__$1);

(statearr_17495[(11)] = inst_17422__$1);

return statearr_17495;
})();
if(inst_17423__$1){
var statearr_17496_18695 = state_17462__$1;
(statearr_17496_18695[(1)] = (8));

} else {
var statearr_17497_18696 = state_17462__$1;
(statearr_17497_18696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (14))){
var inst_17418 = (state_17462[(9)]);
var inst_17422 = (state_17462[(11)]);
var inst_17436 = (state_17462[(2)]);
var inst_17438 = [];
var inst_17440 = inst_17438.push(inst_17418);
var inst_17414 = inst_17438;
var inst_17415 = inst_17422;
var state_17462__$1 = (function (){var statearr_17498 = state_17462;
(statearr_17498[(14)] = inst_17440);

(statearr_17498[(7)] = inst_17415);

(statearr_17498[(8)] = inst_17414);

(statearr_17498[(15)] = inst_17436);

return statearr_17498;
})();
var statearr_17501_18697 = state_17462__$1;
(statearr_17501_18697[(2)] = null);

(statearr_17501_18697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (16))){
var state_17462__$1 = state_17462;
var statearr_17504_18699 = state_17462__$1;
(statearr_17504_18699[(2)] = null);

(statearr_17504_18699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (10))){
var inst_17428 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
if(cljs.core.truth_(inst_17428)){
var statearr_17505_18700 = state_17462__$1;
(statearr_17505_18700[(1)] = (11));

} else {
var statearr_17507_18701 = state_17462__$1;
(statearr_17507_18701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (18))){
var inst_17451 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
var statearr_17509_18702 = state_17462__$1;
(statearr_17509_18702[(2)] = inst_17451);

(statearr_17509_18702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (8))){
var inst_17423 = (state_17462[(13)]);
var state_17462__$1 = state_17462;
var statearr_17512_18704 = state_17462__$1;
(statearr_17512_18704[(2)] = inst_17423);

(statearr_17512_18704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17514[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17514[(1)] = (1));

return statearr_17514;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17462){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17462);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17515){var ex__14020__auto__ = e17515;
var statearr_17516_18706 = state_17462;
(statearr_17516_18706[(2)] = ex__14020__auto__);


if(cljs.core.seq((state_17462[(4)]))){
var statearr_17518_18707 = state_17462;
(statearr_17518_18707[(1)] = cljs.core.first((state_17462[(4)])));

} else {
throw ex__14020__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18708 = state_17462;
state_17462 = G__18708;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14367__auto__ = (function (){var statearr_17519 = f__14366__auto__();
(statearr_17519[(6)] = c__14365__auto___18673);

return statearr_17519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14367__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
