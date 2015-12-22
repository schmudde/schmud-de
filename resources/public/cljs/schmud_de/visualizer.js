// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.visualizer');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('schmud_de.drawing');
goog.require('schmud_de.filter');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
schmud_de.visualizer.frequency = (function schmud_de$visualizer$frequency(){
return 0.12;
});
schmud_de.visualizer.cycle_point = (function schmud_de$visualizer$cycle_point(ys,position){

if(((cljs.core.first.call(null,ys) < (0))) && ((cljs.core.second.call(null,ys) >= (0)))){
return (position | (0));
} else {
if(cljs.core.seq_QMARK_.call(null,ys)){
return schmud_de$visualizer$cycle_point.call(null,cljs.core.rest.call(null,ys),(position + (1)));
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
if(cljs.core.not_EQ_.call(null,original_range,(0))){
return ((destination_min * ((1) - scaler)) + (destination_max * scaler));
} else {
return (0);
}
});
schmud_de.visualizer.duration = (function schmud_de$visualizer$duration(ys){
return schmud_de.visualizer.cycle_point.call(null,ys,(0));
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
var rads = cljs.core.map.call(null,quil.core.radians,cljs.core.range.call(null));
var ys = cljs.core.map.call(null,quil.core.sin,rads);
var scaled_ys = cljs.core.map.call(null,((function (rads,ys){
return (function (p1__10240_SHARP_){
return (amplitude * p1__10240_SHARP_);
});})(rads,ys))
,ys);
return scaled_ys;
});
schmud_de.visualizer.sine = (function schmud_de$visualizer$sine(frequency,linear_duration,ys){
var xs = cljs.core.range.call(null,(1),(linear_duration + (1)),frequency);
var scaled_ys = cljs.core.take.call(null,schmud_de.visualizer.window_size.call(null,frequency),ys);
var resolution = (30);
return schmud_de.drawing.line_join_points.call(null,cljs.core.take_nth.call(null,resolution,xs),cljs.core.take_nth.call(null,resolution,scaled_ys));
});
schmud_de.visualizer.setup = (function schmud_de$visualizer$setup(){
quil.core.smooth.call(null);

quil.core.frame_rate.call(null,(25));

quil.core.stroke_weight.call(null,(1));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

var amplitude = (10);
var frequency = schmud_de.visualizer.frequency.call(null);
var ys = schmud_de.visualizer.sine_ys.call(null,amplitude);
var linear_cycle_duration = schmud_de.visualizer.duration.call(null,ys);
var scaled_cycle_duration = (linear_cycle_duration * frequency);
var sine_coordinates = schmud_de.visualizer.sine.call(null,frequency,linear_cycle_duration,ys);
return quil.core.set_state_BANG_.call(null,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),sine_coordinates,new cljs.core.Keyword(null,"one-cycle","one-cycle",468436980),scaled_cycle_duration);
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
schmud_de.visualizer.iteration_x_axis_scaler = (function schmud_de$visualizer$iteration_x_axis_scaler(dec_amount,one_cycle_length){

var wave_iteration = ((dec_amount / one_cycle_length) | (0));
return (wave_iteration * one_cycle_length);
});
schmud_de.visualizer.draw = (function schmud_de$visualizer$draw(){

quil.core.background.call(null,(138),12.75,(250),(0));

var tr__10164__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__10164__auto__);

var frame = quil.core.frame_count.call(null);
var frequency = schmud_de.visualizer.frequency.call(null);
var dec_amount = frame;
var dec_amount2 = (frame * 0.75);
var dec_amount3 = (frame * 1.45);
var wavetable = quil.core.state.call(null,new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668));
var one_cycle = quil.core.state.call(null,new cljs.core.Keyword(null,"one-cycle","one-cycle",468436980));
var hue = (137);
var window_height_max = (document.documentElement.offsetHeight - window.innerHeight);
var scroll_placement = window.pageYOffset;
var color_xformer = schmud_de.visualizer.range_scaler.call(null,scroll_placement,(0),window_height_max,(1),((255) - hue));
quil.core.stroke.call(null,(hue + color_xformer),(148),(217));

quil.core.stroke_weight.call(null,((1) + schmud_de.visualizer.range_scaler.call(null,scroll_placement,(0),window_height_max,(0),(1))));

schmud_de.visualizer.draw_wavetable.call(null,wavetable,dec_amount,schmud_de.visualizer.iteration_x_axis_scaler.call(null,dec_amount,one_cycle));

schmud_de.visualizer.draw_wavetable.call(null,wavetable,dec_amount2,schmud_de.visualizer.iteration_x_axis_scaler.call(null,dec_amount2,one_cycle));

return schmud_de.visualizer.draw_wavetable.call(null,wavetable,dec_amount3,schmud_de.visualizer.iteration_x_axis_scaler.call(null,dec_amount3,one_cycle));
}finally {quil.core.pop_matrix.call(null);
}});
schmud_de.visualizer.mainBox = (function schmud_de$visualizer$mainBox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mainBox",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(25)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.setup))?(function() { 
var G__10241__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.setup,args);
};
var G__10241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10242__i = 0, G__10242__a = new Array(arguments.length -  0);
while (G__10242__i < G__10242__a.length) {G__10242__a[G__10242__i] = arguments[G__10242__i + 0]; ++G__10242__i;}
  args = new cljs.core.IndexedSeq(G__10242__a,0);
} 
return G__10241__delegate.call(this,args);};
G__10241.cljs$lang$maxFixedArity = 0;
G__10241.cljs$lang$applyTo = (function (arglist__10243){
var args = cljs.core.seq(arglist__10243);
return G__10241__delegate(args);
});
G__10241.cljs$core$IFn$_invoke$arity$variadic = G__10241__delegate;
return G__10241;
})()
:schmud_de.visualizer.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,schmud_de.visualizer.draw))?(function() { 
var G__10244__delegate = function (args){
return cljs.core.apply.call(null,schmud_de.visualizer.draw,args);
};
var G__10244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10245__i = 0, G__10245__a = new Array(arguments.length -  0);
while (G__10245__i < G__10245__a.length) {G__10245__a[G__10245__i] = arguments[G__10245__i + 0]; ++G__10245__i;}
  args = new cljs.core.IndexedSeq(G__10245__a,0);
} 
return G__10244__delegate.call(this,args);};
G__10244.cljs$lang$maxFixedArity = 0;
G__10244.cljs$lang$applyTo = (function (arglist__10246){
var args = cljs.core.seq(arglist__10246);
return G__10244__delegate(args);
});
G__10244.cljs$core$IFn$_invoke$arity$variadic = G__10244__delegate;
return G__10244;
})()
:schmud_de.visualizer.draw));
});
goog.exportSymbol('schmud_de.visualizer.mainBox', schmud_de.visualizer.mainBox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9796__9797__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__9796__9797__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),schmud_de.visualizer.mainBox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mainBox"], null));
}

//# sourceMappingURL=visualizer.js.map