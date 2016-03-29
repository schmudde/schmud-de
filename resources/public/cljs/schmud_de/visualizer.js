// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.visualizer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('schmud_de.filter');
goog.require('schmud_de.lister');
goog.require('quil.middleware');
goog.require('schmud_de.drawing');
cljs.core.enable_console_print_BANG_();
schmud_de.visualizer.frequency = (function schmud_de$visualizer$frequency(){
return 0.12;
});
schmud_de.visualizer.cycle_point = (function schmud_de$visualizer$cycle_point(ys,position){

if(((cljs.core.first(ys) < (0))) && ((cljs.core.second(ys) >= (0)))){
return (position | (0));
} else {
if(cljs.core.seq_QMARK_(ys)){
return schmud_de$visualizer$cycle_point(cljs.core.rest(ys),(position + (1)));
} else {
return null;
}
}
});
schmud_de.visualizer.range_scaler = (function schmud_de$visualizer$range_scaler(value,original_min,original_max,destination_min,destination_max){

var destination_range = (destination_max - destination_min);
var original_range = (original_max - original_min);
var absolute_difference = (value - original_min);
var scaler = (absolute_difference / original_range);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_range,(0))){
return ((destination_min * ((1) - scaler)) + (destination_max * scaler));
} else {
return (0);
}
});
schmud_de.visualizer.duration = (function schmud_de$visualizer$duration(ys){
return schmud_de.visualizer.cycle_point(ys,(0));
});
schmud_de.visualizer.window_size = (function schmud_de$visualizer$window_size(frequency){

var sine_box_width = document.getElementById("mainBox").offsetWidth;
var arbitrary_width = (100);
if((sine_box_width > (0))){
return ((sine_box_width / frequency) * (2));
} else {
return ((arbitrary_width / frequency) * (2));
}
});
schmud_de.visualizer.sine_ys = (function schmud_de$visualizer$sine_ys(amplitude){
var rads = cljs.core.map.cljs$core$IFn$_invoke$arity$2(quil.core.radians,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(quil.core.sin,rads);
var scaled_ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rads,ys){
return (function (p1__8893_SHARP_){
return (amplitude * p1__8893_SHARP_);
});})(rads,ys))
,ys);
return scaled_ys;
});
schmud_de.visualizer.sine = (function schmud_de$visualizer$sine(frequency,linear_duration,ys){
var xs = cljs.core.range.cljs$core$IFn$_invoke$arity$3((1),(linear_duration + (1)),frequency);
var scaled_ys = cljs.core.take.cljs$core$IFn$_invoke$arity$2(schmud_de.visualizer.window_size(frequency),ys);
var resolution = (30);
return schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$2(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(resolution,xs),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(resolution,scaled_ys));
});
schmud_de.visualizer.setup = (function schmud_de$visualizer$setup(){
quil.core.smooth.cljs$core$IFn$_invoke$arity$0();

quil.core.frame_rate((25));

quil.core.stroke_weight((1));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

var amplitude = (10);
var frequency = schmud_de.visualizer.frequency();
var ys = schmud_de.visualizer.sine_ys(amplitude);
var linear_cycle_duration = schmud_de.visualizer.duration(ys);
var scaled_cycle_duration = (linear_cycle_duration * frequency);
var sine_coordinates = schmud_de.visualizer.sine(frequency,linear_cycle_duration,ys);
return quil.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$coordinates,sine_coordinates,cljs.core.cst$kw$one_DASH_cycle,scaled_cycle_duration], 0));
});
schmud_de.visualizer.move_wavetable = (function schmud_de$visualizer$move_wavetable(line,dec_amount,scaler){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.first(line) - dec_amount) + scaler),cljs.core.second(line),((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line,(2)) - dec_amount) + scaler),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line,(3))], null);
});
schmud_de.visualizer.draw_wavetable = (function schmud_de$visualizer$draw_wavetable(wavetable,dec_amount,scaler){

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.line,schmud_de.visualizer.move_wavetable(cljs.core.first(wavetable),dec_amount,scaler));

if(cljs.core.seq(cljs.core.rest(wavetable))){
return schmud_de$visualizer$draw_wavetable(cljs.core.rest(wavetable),dec_amount,scaler);
} else {
return null;
}
});
schmud_de.visualizer.iteration_x_axis_scaler = (function schmud_de$visualizer$iteration_x_axis_scaler(dec_amount,one_cycle_length){

var wave_iteration = ((dec_amount / one_cycle_length) | (0));
return (wave_iteration * one_cycle_length);
});
schmud_de.visualizer.draw = (function schmud_de$visualizer$draw(){

quil.core.background.cljs$core$IFn$_invoke$arity$4((138),12.75,(250),(0));

var tr__8421__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__8421__auto__);

var frame = quil.core.frame_count();
var frequency = schmud_de.visualizer.frequency();
var dec_amount = frame;
var dec_amount2 = (frame * 0.75);
var dec_amount3 = (frame * 1.45);
var wavetable = quil.core.state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$coordinates);
var one_cycle = quil.core.state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$one_DASH_cycle);
var hue = (137);
var window_height_max = (document.documentElement.offsetHeight - window.innerHeight);
var scroll_placement = window.pageYOffset;
var color_xformer = schmud_de.visualizer.range_scaler(scroll_placement,(0),window_height_max,(1),((255) - hue));
quil.core.stroke.cljs$core$IFn$_invoke$arity$3((hue + color_xformer),(148),(217));

quil.core.stroke_weight(((1) + schmud_de.visualizer.range_scaler(scroll_placement,(0),window_height_max,(0),(1))));

schmud_de.visualizer.draw_wavetable(wavetable,dec_amount,schmud_de.visualizer.iteration_x_axis_scaler(dec_amount,one_cycle));

schmud_de.visualizer.draw_wavetable(wavetable,dec_amount2,schmud_de.visualizer.iteration_x_axis_scaler(dec_amount2,one_cycle));

return schmud_de.visualizer.draw_wavetable(wavetable,dec_amount3,schmud_de.visualizer.iteration_x_axis_scaler(dec_amount3,one_cycle));
}finally {quil.core.pop_matrix();
}});
var path_8898 = window.location.pathname;
var G__8897_8899 = path_8898;
switch (G__8897_8899) {
case "/projects":
window.onload = schmud_de.filter.filterer;

break;
case "/distant":
window.onload = schmud_de.lister.lister;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(path_8898)].join('')));

}
schmud_de.visualizer.mainBox = (function schmud_de$visualizer$mainBox(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"mainBox",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(25)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(schmud_de.visualizer.setup))?(function() { 
var G__8901__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schmud_de.visualizer.setup,args);
};
var G__8901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8902__i = 0, G__8902__a = new Array(arguments.length -  0);
while (G__8902__i < G__8902__a.length) {G__8902__a[G__8902__i] = arguments[G__8902__i + 0]; ++G__8902__i;}
  args = new cljs.core.IndexedSeq(G__8902__a,0);
} 
return G__8901__delegate.call(this,args);};
G__8901.cljs$lang$maxFixedArity = 0;
G__8901.cljs$lang$applyTo = (function (arglist__8903){
var args = cljs.core.seq(arglist__8903);
return G__8901__delegate(args);
});
G__8901.cljs$core$IFn$_invoke$arity$variadic = G__8901__delegate;
return G__8901;
})()
:schmud_de.visualizer.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(schmud_de.visualizer.draw))?(function() { 
var G__8904__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schmud_de.visualizer.draw,args);
};
var G__8904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8905__i = 0, G__8905__a = new Array(arguments.length -  0);
while (G__8905__i < G__8905__a.length) {G__8905__a[G__8905__i] = arguments[G__8905__i + 0]; ++G__8905__i;}
  args = new cljs.core.IndexedSeq(G__8905__a,0);
} 
return G__8904__delegate.call(this,args);};
G__8904.cljs$lang$maxFixedArity = 0;
G__8904.cljs$lang$applyTo = (function (arglist__8906){
var args = cljs.core.seq(arglist__8906);
return G__8904__delegate(args);
});
G__8904.cljs$core$IFn$_invoke$arity$variadic = G__8904__delegate;
return G__8904;
})()
:schmud_de.visualizer.draw)], 0));
});
goog.exportSymbol('schmud_de.visualizer.mainBox', schmud_de.visualizer.mainBox);

if(cljs.core.truth_(cljs.core.some((function (p1__7721__7722__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__7721__7722__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,schmud_de.visualizer.mainBox,cljs.core.cst$kw$host_DASH_id,"mainBox"], null));
}
