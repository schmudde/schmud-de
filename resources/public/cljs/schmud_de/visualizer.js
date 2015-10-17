// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.visualizer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('schmud_de.drawing');
goog.require('schmud_de.filter');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
schmud_de.visualizer.sine = (function schmud_de$visualizer$sine(amplitude,frequency,duration){
var xs = cljs.core.range.call(null,(1),(duration + (1)),frequency);
var rads = cljs.core.map.call(null,quil.core.radians,cljs.core.range.call(null));
var ys = cljs.core.take.call(null,duration,cljs.core.map.call(null,quil.core.sin,rads));
var scaled_ys = cljs.core.map.call(null,((function (xs,rads,ys){
return (function (p1__9775_SHARP_){
return (amplitude * p1__9775_SHARP_);
});})(xs,rads,ys))
,ys);
var resolution = (30);
return schmud_de.drawing.line_join_points.call(null,cljs.core.take_nth.call(null,resolution,xs),cljs.core.take_nth.call(null,resolution,scaled_ys));
});
schmud_de.visualizer.frequency = (function schmud_de$visualizer$frequency(){
return 0.09;
});
schmud_de.visualizer.duration = (function schmud_de$visualizer$duration(frequency){
var sine_box_width = document.getElementById("mainBox").offsetWidth;
var arbitrary_width = (100);
if((sine_box_width > (0))){
return ((sine_box_width / frequency) * (2));
} else {
return ((arbitrary_width / frequency) * (2));
}
});
schmud_de.visualizer.setup = (function schmud_de$visualizer$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(90));

quil.core.stroke_weight.call(null,(1));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(138),12.75,(250));

var amplitude = (10);
var frequency = schmud_de.visualizer.frequency.call(null);
var duration = schmud_de.visualizer.duration.call(null,frequency);
var sine_coordinates = schmud_de.visualizer.sine.call(null,amplitude,frequency,duration);
var halfway_coordinates = cljs.core.last.call(null,cljs.core.take.call(null,(((cljs.core.count.call(null,sine_coordinates) / (2)) | (0)) - (1)),sine_coordinates));
var halfway_point = ((cljs.core.first.call(null,halfway_coordinates) + cljs.core.nth.call(null,halfway_coordinates,(2))) / (2));
return quil.core.set_state_BANG_.call(null,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),sine_coordinates,new cljs.core.Keyword(null,"halfway","halfway",1378068885),halfway_point);
});
schmud_de.visualizer.move_wavetable = (function schmud_de$visualizer$move_wavetable(line,dec_amount,scaler){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.first.call(null,line) - dec_amount) + scaler),cljs.core.second.call(null,line),((cljs.core.nth.call(null,line,(2)) - dec_amount) + scaler),cljs.core.nth.call(null,line,(3))], null);
});
schmud_de.visualizer.draw_wavetable = (function schmud_de$visualizer$draw_wavetable(wavetable,dec_amount,scaler){

cljs.core.apply.call(null,quil.core.line,schmud_de.visualizer.move_wavetable.call(null,cljs.core.first.call(null,wavetable),dec_amount,scaler));

if(cljs.core.seq.call(null,cljs.core.rest.call(null,wavetable))){
return schmud_de$visualizer$draw_wavetable.call(null,cljs.core.rest.call(null,wavetable),dec_amount,scaler);
} else {
return null;
}
});
schmud_de.visualizer.iteration_x_axis_scaler = (function schmud_de$visualizer$iteration_x_axis_scaler(dec_amount,halfway_point){

var wave_iteration = ((dec_amount / halfway_point) | (0));
return (wave_iteration * halfway_point);
});
schmud_de.visualizer.draw = (function schmud_de$visualizer$draw(){

quil.core.background.call(null,(138),12.75,(250));

var tr__9699__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__9699__auto__);

var frame = quil.core.frame_count.call(null);
var frequency = schmud_de.visualizer.frequency.call(null);
var dec_amount = (frame * frequency);
var dec_amount2 = ((frame * 1.2) * frequency);
var wavetable = quil.core.state.call(null,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668));
var halfway_point = quil.core.state.call(null,new cljs.core.Keyword(null,"halfway","halfway",1378068885));
quil.core.stroke.call(null,(137),(148),(217));

schmud_de.visualizer.draw_wavetable.call(null,wavetable,dec_amount,schmud_de.visualizer.iteration_x_axis_scaler.call(null,dec_amount,halfway_point));

return schmud_de.visualizer.draw_wavetable.call(null,wavetable,dec_amount2,schmud_de.visualizer.iteration_x_axis_scaler.call(null,dec_amount2,halfway_point));
}finally {quil.core.pop_matrix.call(null);
}});
schmud_de.visualizer.mainBox = (function schmud_de$visualizer$mainBox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mainBox",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(25)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.setup))?(function() { 
var G__9776__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.setup,args);
};
var G__9776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9777__i = 0, G__9777__a = new Array(arguments.length -  0);
while (G__9777__i < G__9777__a.length) {G__9777__a[G__9777__i] = arguments[G__9777__i + 0]; ++G__9777__i;}
  args = new cljs.core.IndexedSeq(G__9777__a,0);
} 
return G__9776__delegate.call(this,args);};
G__9776.cljs$lang$maxFixedArity = 0;
G__9776.cljs$lang$applyTo = (function (arglist__9778){
var args = cljs.core.seq(arglist__9778);
return G__9776__delegate(args);
});
G__9776.cljs$core$IFn$_invoke$arity$variadic = G__9776__delegate;
return G__9776;
})()
:schmud_de.visualizer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.draw))?(function() { 
var G__9779__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.draw,args);
};
var G__9779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9780__i = 0, G__9780__a = new Array(arguments.length -  0);
while (G__9780__i < G__9780__a.length) {G__9780__a[G__9780__i] = arguments[G__9780__i + 0]; ++G__9780__i;}
  args = new cljs.core.IndexedSeq(G__9780__a,0);
} 
return G__9779__delegate.call(this,args);};
G__9779.cljs$lang$maxFixedArity = 0;
G__9779.cljs$lang$applyTo = (function (arglist__9781){
var args = cljs.core.seq(arglist__9781);
return G__9779__delegate(args);
});
G__9779.cljs$core$IFn$_invoke$arity$variadic = G__9779__delegate;
return G__9779;
})()
:schmud_de.visualizer.draw));
});
goog.exportSymbol('schmud_de.visualizer.mainBox', schmud_de.visualizer.mainBox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9331__9332__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__9331__9332__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),schmud_de.visualizer.mainBox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mainBox"], null));
}

//# sourceMappingURL=visualizer.js.map