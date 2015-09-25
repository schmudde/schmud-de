// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.visualizer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
schmud_de.visualizer.setup = (function schmud_de$visualizer$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(1));

return quil.core.background.call(null,(200));
});
schmud_de.visualizer.draw = (function schmud_de$visualizer$draw(){
quil.core.stroke.call(null,quil.core.random.call(null,(255)));

quil.core.stroke_weight.call(null,quil.core.random.call(null,(10)));

return quil.core.fill.call(null,quil.core.random.call(null,(255)));
});
schmud_de.visualizer.mainBox = (function schmud_de$visualizer$mainBox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mainBox",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.setup))?(function() { 
var G__9655__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.setup,args);
};
var G__9655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9656__i = 0, G__9656__a = new Array(arguments.length -  0);
while (G__9656__i < G__9656__a.length) {G__9656__a[G__9656__i] = arguments[G__9656__i + 0]; ++G__9656__i;}
  args = new cljs.core.IndexedSeq(G__9656__a,0);
} 
return G__9655__delegate.call(this,args);};
G__9655.cljs$lang$maxFixedArity = 0;
G__9655.cljs$lang$applyTo = (function (arglist__9657){
var args = cljs.core.seq(arglist__9657);
return G__9655__delegate(args);
});
G__9655.cljs$core$IFn$_invoke$arity$variadic = G__9655__delegate;
return G__9655;
})()
:schmud_de.visualizer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.draw))?(function() { 
var G__9658__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.draw,args);
};
var G__9658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9659__i = 0, G__9659__a = new Array(arguments.length -  0);
while (G__9659__i < G__9659__a.length) {G__9659__a[G__9659__i] = arguments[G__9659__i + 0]; ++G__9659__i;}
  args = new cljs.core.IndexedSeq(G__9659__a,0);
} 
return G__9658__delegate.call(this,args);};
G__9658.cljs$lang$maxFixedArity = 0;
G__9658.cljs$lang$applyTo = (function (arglist__9660){
var args = cljs.core.seq(arglist__9660);
return G__9658__delegate(args);
});
G__9658.cljs$core$IFn$_invoke$arity$variadic = G__9658__delegate;
return G__9658;
})()
:schmud_de.visualizer.draw));
});
goog.exportSymbol('schmud_de.visualizer.mainBox', schmud_de.visualizer.mainBox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9211__9212__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__9211__9212__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),schmud_de.visualizer.mainBox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mainBox"], null));
}
schmud_de.visualizer.render = (function schmud_de$visualizer$render(){
var _STAR_applet_STAR_9662 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = quil.core.get_sketch_by_id.call(null,"mainBox");

try{return schmud_de.visualizer.draw.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9662;
}});
schmud_de.visualizer.hello = (function schmud_de$visualizer$hello(){
return "hello";
});

//# sourceMappingURL=visualizer.js.map