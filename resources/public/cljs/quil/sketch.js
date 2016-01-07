// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(){
var args18900 = [];
var len__14481__auto___18903 = arguments.length;
var i__14482__auto___18904 = (0);
while(true){
if((i__14482__auto___18904 < len__14481__auto___18903)){
args18900.push((arguments[i__14482__auto___18904]));

var G__18905 = (i__14482__auto___18904 + (1));
i__14482__auto___18904 = G__18905;
continue;
} else {
}
break;
}

var G__18902 = args18900.length;
switch (G__18902) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18900.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__18915 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__18916 = null;
var count__18917 = (0);
var i__18918 = (0);
while(true){
if((i__18918 < count__18917)){
var vec__18919 = chunk__18916.cljs$core$IIndexed$_nth$arity$2(null,i__18918);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18919,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18919,(1),null);
var temp__4425__auto___18923 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___18923)){
var handler_18924 = temp__4425__auto___18923;
(prc[cljs.core.name(processing_name)] = ((function (seq__18915,chunk__18916,count__18917,i__18918,handler_18924,temp__4425__auto___18923,vec__18919,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_18920 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_18924.cljs$core$IFn$_invoke$arity$0 ? handler_18924.cljs$core$IFn$_invoke$arity$0() : handler_18924.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_18920;
}});})(seq__18915,chunk__18916,count__18917,i__18918,handler_18924,temp__4425__auto___18923,vec__18919,processing_name,quil_name))
);
} else {
}

var G__18925 = seq__18915;
var G__18926 = chunk__18916;
var G__18927 = count__18917;
var G__18928 = (i__18918 + (1));
seq__18915 = G__18925;
chunk__18916 = G__18926;
count__18917 = G__18927;
i__18918 = G__18928;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18915);
if(temp__4425__auto__){
var seq__18915__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18915__$1)){
var c__14226__auto__ = cljs.core.chunk_first(seq__18915__$1);
var G__18929 = cljs.core.chunk_rest(seq__18915__$1);
var G__18930 = c__14226__auto__;
var G__18931 = cljs.core.count(c__14226__auto__);
var G__18932 = (0);
seq__18915 = G__18929;
chunk__18916 = G__18930;
count__18917 = G__18931;
i__18918 = G__18932;
continue;
} else {
var vec__18921 = cljs.core.first(seq__18915__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(1),null);
var temp__4425__auto___18933__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___18933__$1)){
var handler_18934 = temp__4425__auto___18933__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__18915,chunk__18916,count__18917,i__18918,handler_18934,temp__4425__auto___18933__$1,vec__18921,processing_name,quil_name,seq__18915__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_18922 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_18934.cljs$core$IFn$_invoke$arity$0 ? handler_18934.cljs$core$IFn$_invoke$arity$0() : handler_18934.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_18922;
}});})(seq__18915,chunk__18916,count__18917,i__18918,handler_18934,temp__4425__auto___18933__$1,vec__18921,processing_name,quil_name,seq__18915__$1,temp__4425__auto__))
);
} else {
}

var G__18935 = cljs.core.next(seq__18915__$1);
var G__18936 = null;
var G__18937 = (0);
var G__18938 = (0);
seq__18915 = G__18935;
chunk__18916 = G__18936;
count__18917 = G__18937;
i__18918 = G__18938;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__18939_SHARP_){
return (p1__18939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18939_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__18939_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__13442__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__13442__auto__)){
return or__13442__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__18940_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__18940_SHARP_)){
return (p1__18940_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__18940_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__18940_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__18941_SHARP_){
if(cljs.core.truth_(p1__18941_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__18943 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__18941_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18941_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18943) : p1__18941_SHARP_.call(null,G__18943));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(){
var args__14488__auto__ = [];
var len__14481__auto___18946 = arguments.length;
var i__14482__auto___18947 = (0);
while(true){
if((i__14482__auto___18947 < len__14481__auto___18946)){
args__14488__auto__.push((arguments[i__14482__auto___18947]));

var G__18948 = (i__14482__auto___18947 + (1));
i__14482__auto___18947 = G__18948;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((0) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__14489__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__18945 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__18945);
})();
var renderer = (function (){var or__13442__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__13442__auto__)){
return or__13442__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq18944){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18944));
});
quil.sketch.sketch_init_list = (function (){var G__18949 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18949) : cljs.core.atom.call(null,G__18949));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_();
var seq__18954 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__18955 = null;
var count__18956 = (0);
var i__18957 = (0);
while(true){
if((i__18957 < count__18956)){
var sk = chunk__18955.cljs$core$IIndexed$_nth$arity$2(null,i__18957);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__18958 = seq__18954;
var G__18959 = chunk__18955;
var G__18960 = count__18956;
var G__18961 = (i__18957 + (1));
seq__18954 = G__18958;
chunk__18955 = G__18959;
count__18956 = G__18960;
i__18957 = G__18961;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18954);
if(temp__4425__auto__){
var seq__18954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18954__$1)){
var c__14226__auto__ = cljs.core.chunk_first(seq__18954__$1);
var G__18962 = cljs.core.chunk_rest(seq__18954__$1);
var G__18963 = c__14226__auto__;
var G__18964 = cljs.core.count(c__14226__auto__);
var G__18965 = (0);
seq__18954 = G__18962;
chunk__18955 = G__18963;
count__18956 = G__18964;
i__18957 = G__18965;
continue;
} else {
var sk = cljs.core.first(seq__18954__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__18966 = cljs.core.next(seq__18954__$1);
var G__18967 = null;
var G__18968 = (0);
var G__18969 = (0);
seq__18954 = G__18966;
chunk__18955 = G__18967;
count__18956 = G__18968;
i__18957 = G__18969;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
