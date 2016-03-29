// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.drawing');
goog.require('cljs.core');
/**
 * Takes either a seq of x y (and z) point coords tuples or two
 * separate lists of x and y (and z) coords independently and creates a
 * lazy list of line args (vectors of 4 (or 6) elements) suitable for
 * use with the line fn.
 * 
 * (line-join-points [1 2 3] [4 5 6])     ;=> ([1 4 2 5] [2 5 3 6])
 * (line-join-points [[1 4] [2 5] [3 6]]) ;=> ([1 4 2 5] [2 5 3 6])
 * (line-join-points [[1 4 0] [2 5 1] [3 6 2]]) ;=> ([1 4 0 2 5 1]
 * [2 5 1 3 6 2])
 * (line-join-points [1 2 3] [4 5 6] [0 1 2])   ;=> ([1 4 0 2 5 1]
 * [2 5 1 3 6 2])
 */
schmud_de.drawing.line_join_points = (function schmud_de$drawing$line_join_points(){
var args7285 = [];
var len__5565__auto___7288 = arguments.length;
var i__5566__auto___7289 = (0);
while(true){
if((i__5566__auto___7289 < len__5565__auto___7288)){
args7285.push((arguments[i__5566__auto___7289]));

var G__7290 = (i__5566__auto___7289 + (1));
i__5566__auto___7289 = G__7290;
continue;
} else {
}
break;
}

var G__7287 = args7285.length;
switch (G__7287) {
case 1:
return schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7285.length)].join('')));

}
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$1 = (function (interleaved_points){
return (new cljs.core.LazySeq(null,(function (){
var head = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),interleaved_points);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(head))){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,head),schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),interleaved_points)));
} else {
return null;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.next(xs)) && (cljs.core.next(ys))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.first(ys),cljs.core.second(xs),cljs.core.second(ys)], null),schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$2(cljs.core.next(xs),cljs.core.next(ys)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$3 = (function (xs,ys,zs){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.next(xs)) && (cljs.core.next(ys)) && (cljs.core.next(zs))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs),cljs.core.first(ys),cljs.core.first(zs),cljs.core.second(xs),cljs.core.second(ys),cljs.core.second(zs)], null),schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$3(cljs.core.next(xs),cljs.core.next(ys),cljs.core.next(zs)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$lang$maxFixedArity = 3;
schmud_de.drawing.last_x_point = (function schmud_de$drawing$last_x_point(line){

return cljs.core.last(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(line));
});
schmud_de.drawing.line_decomposer = (function schmud_de$drawing$line_decomposer(line_segment){

var x1 = cljs.core.first(line_segment);
var y1 = cljs.core.second(line_segment);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line_segment,(2));
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(line_segment,(3));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,x1,cljs.core.cst$kw$y1,y1,cljs.core.cst$kw$x2,x2,cljs.core.cst$kw$y2,y2], null);
});
