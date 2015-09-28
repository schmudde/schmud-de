// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.visualizer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('schmud_de.drawing');
goog.require('quil.middleware');
schmud_de.visualizer.setup = (function schmud_de$visualizer$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(10),(1),(1));

return quil.core.background.call(null,(200));
});
schmud_de.visualizer.sine = (function schmud_de$visualizer$sine(amplitude,frequency){
var xs = cljs.core.range.call(null,(100));
var rads = cljs.core.map.call(null,quil.core.radians,cljs.core.range.call(null));
var ys = cljs.core.map.call(null,quil.core.sin,rads);
return null;
});
schmud_de.visualizer.draw = (function schmud_de$visualizer$draw(){
var tr__6015__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__6015__auto__);

var t = (quil.core.frame_count.call(null) / (10));
var angle = quil.core.sin.call(null,t);
var amplitude = (100);
var frequency = (3);
quil.core.stroke.call(null,cljs.core.mod.call(null,t,(10)),(1),(1));

return quil.core.point.call(null,(t * frequency),(amplitude * angle));
}finally {quil.core.pop_matrix.call(null);
}});
schmud_de.visualizer.mainBox = (function schmud_de$visualizer$mainBox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mainBox",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(323),(200)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.setup))?(function() { 
var G__6091__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.setup,args);
};
var G__6091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6092__i = 0, G__6092__a = new Array(arguments.length -  0);
while (G__6092__i < G__6092__a.length) {G__6092__a[G__6092__i] = arguments[G__6092__i + 0]; ++G__6092__i;}
  args = new cljs.core.IndexedSeq(G__6092__a,0);
} 
return G__6091__delegate.call(this,args);};
G__6091.cljs$lang$maxFixedArity = 0;
G__6091.cljs$lang$applyTo = (function (arglist__6093){
var args = cljs.core.seq(arglist__6093);
return G__6091__delegate(args);
});
G__6091.cljs$core$IFn$_invoke$arity$variadic = G__6091__delegate;
return G__6091;
})()
:schmud_de.visualizer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.draw))?(function() { 
var G__6094__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.draw,args);
};
var G__6094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6095__i = 0, G__6095__a = new Array(arguments.length -  0);
while (G__6095__i < G__6095__a.length) {G__6095__a[G__6095__i] = arguments[G__6095__i + 0]; ++G__6095__i;}
  args = new cljs.core.IndexedSeq(G__6095__a,0);
} 
return G__6094__delegate.call(this,args);};
G__6094.cljs$lang$maxFixedArity = 0;
G__6094.cljs$lang$applyTo = (function (arglist__6096){
var args = cljs.core.seq(arglist__6096);
return G__6094__delegate(args);
});
G__6094.cljs$core$IFn$_invoke$arity$variadic = G__6094__delegate;
return G__6094;
})()
:schmud_de.visualizer.draw));
});
goog.exportSymbol('schmud_de.visualizer.mainBox', schmud_de.visualizer.mainBox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5647__5648__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5647__5648__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),schmud_de.visualizer.mainBox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mainBox"], null));
}

//# sourceMappingURL=visualizer.js.map