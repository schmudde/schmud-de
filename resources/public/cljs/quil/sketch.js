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
var args9986 = [];
var len__5565__auto___9989 = arguments.length;
var i__5566__auto___9990 = (0);
while(true){
if((i__5566__auto___9990 < len__5565__auto___9989)){
args9986.push((arguments[i__5566__auto___9990]));

var G__9991 = (i__5566__auto___9990 + (1));
i__5566__auto___9990 = G__9991;
continue;
} else {
}
break;
}

var G__9988 = args9986.length;
switch (G__9988) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9986.length)].join('')));

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
var seq__10001 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__10002 = null;
var count__10003 = (0);
var i__10004 = (0);
while(true){
if((i__10004 < count__10003)){
var vec__10005 = chunk__10002.cljs$core$IIndexed$_nth$arity$2(null,i__10004);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10005,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10005,(1),null);
var temp__4425__auto___10009 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___10009)){
var handler_10010 = temp__4425__auto___10009;
(prc[cljs.core.name(processing_name)] = ((function (seq__10001,chunk__10002,count__10003,i__10004,handler_10010,temp__4425__auto___10009,vec__10005,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_10006 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_10010.cljs$core$IFn$_invoke$arity$0 ? handler_10010.cljs$core$IFn$_invoke$arity$0() : handler_10010.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10006;
}});})(seq__10001,chunk__10002,count__10003,i__10004,handler_10010,temp__4425__auto___10009,vec__10005,processing_name,quil_name))
);
} else {
}

var G__10011 = seq__10001;
var G__10012 = chunk__10002;
var G__10013 = count__10003;
var G__10014 = (i__10004 + (1));
seq__10001 = G__10011;
chunk__10002 = G__10012;
count__10003 = G__10013;
i__10004 = G__10014;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10001);
if(temp__4425__auto__){
var seq__10001__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10001__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__10001__$1);
var G__10015 = cljs.core.chunk_rest(seq__10001__$1);
var G__10016 = c__5310__auto__;
var G__10017 = cljs.core.count(c__5310__auto__);
var G__10018 = (0);
seq__10001 = G__10015;
chunk__10002 = G__10016;
count__10003 = G__10017;
i__10004 = G__10018;
continue;
} else {
var vec__10007 = cljs.core.first(seq__10001__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(1),null);
var temp__4425__auto___10019__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___10019__$1)){
var handler_10020 = temp__4425__auto___10019__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__10001,chunk__10002,count__10003,i__10004,handler_10020,temp__4425__auto___10019__$1,vec__10007,processing_name,quil_name,seq__10001__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_10008 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_10020.cljs$core$IFn$_invoke$arity$0 ? handler_10020.cljs$core$IFn$_invoke$arity$0() : handler_10020.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_10008;
}});})(seq__10001,chunk__10002,count__10003,i__10004,handler_10020,temp__4425__auto___10019__$1,vec__10007,processing_name,quil_name,seq__10001__$1,temp__4425__auto__))
);
} else {
}

var G__10021 = cljs.core.next(seq__10001__$1);
var G__10022 = null;
var G__10023 = (0);
var G__10024 = (0);
seq__10001 = G__10021;
chunk__10002 = G__10022;
count__10003 = G__10023;
i__10004 = G__10024;
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
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__10025_SHARP_){
return (p1__10025_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10025_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__10025_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__4526__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__10026_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__10026_SHARP_)){
return (p1__10026_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__10026_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__10026_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__10027_SHARP_){
if(cljs.core.truth_(p1__10027_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__10029 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__10027_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10027_SHARP_.cljs$core$IFn$_invoke$arity$1(G__10029) : p1__10027_SHARP_.call(null,G__10029));
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
var args__5572__auto__ = [];
var len__5565__auto___10032 = arguments.length;
var i__5566__auto___10033 = (0);
while(true){
if((i__5566__auto___10033 < len__5565__auto___10032)){
args__5572__auto__.push((arguments[i__5566__auto___10033]));

var G__10034 = (i__5566__auto___10033 + (1));
i__5566__auto___10033 = G__10034;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__10031 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__10031);
})();
var renderer = (function (){var or__4526__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
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

quil.sketch.sketch.cljs$lang$applyTo = (function (seq10030){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10030));
});
quil.sketch.sketch_init_list = (function (){var G__10035 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10035) : cljs.core.atom.call(null,G__10035));
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
var seq__10040 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__10041 = null;
var count__10042 = (0);
var i__10043 = (0);
while(true){
if((i__10043 < count__10042)){
var sk = chunk__10041.cljs$core$IIndexed$_nth$arity$2(null,i__10043);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__10044 = seq__10040;
var G__10045 = chunk__10041;
var G__10046 = count__10042;
var G__10047 = (i__10043 + (1));
seq__10040 = G__10044;
chunk__10041 = G__10045;
count__10042 = G__10046;
i__10043 = G__10047;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10040);
if(temp__4425__auto__){
var seq__10040__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10040__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__10040__$1);
var G__10048 = cljs.core.chunk_rest(seq__10040__$1);
var G__10049 = c__5310__auto__;
var G__10050 = cljs.core.count(c__5310__auto__);
var G__10051 = (0);
seq__10040 = G__10048;
chunk__10041 = G__10049;
count__10042 = G__10050;
i__10043 = G__10051;
continue;
} else {
var sk = cljs.core.first(seq__10040__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__10052 = cljs.core.next(seq__10040__$1);
var G__10053 = null;
var G__10054 = (0);
var G__10055 = (0);
seq__10040 = G__10052;
chunk__10041 = G__10053;
count__10042 = G__10054;
i__10043 = G__10055;
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
