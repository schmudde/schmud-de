// Compiled by ClojureScript 1.7.48 {}
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
var args9201 = [];
var len__9149__auto___9204 = arguments.length;
var i__9150__auto___9205 = (0);
while(true){
if((i__9150__auto___9205 < len__9149__auto___9204)){
args9201.push((arguments[i__9150__auto___9205]));

var G__9206 = (i__9150__auto___9205 + (1));
i__9150__auto___9205 = G__9206;
continue;
} else {
}
break;
}

var G__9203 = args9201.length;
switch (G__9203) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9201.length)].join('')));

}
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$1 = (function (interleaved_points){
return (new cljs.core.LazySeq(null,(function (){
var head = cljs.core.take.call(null,(2),interleaved_points);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,head))){
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,head),schmud_de.drawing.line_join_points.call(null,cljs.core.drop.call(null,(1),interleaved_points)));
} else {
return null;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.next.call(null,xs)) && (cljs.core.next.call(null,ys))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.first.call(null,ys),cljs.core.second.call(null,xs),cljs.core.second.call(null,ys)], null),schmud_de.drawing.line_join_points.call(null,cljs.core.next.call(null,xs),cljs.core.next.call(null,ys)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$core$IFn$_invoke$arity$3 = (function (xs,ys,zs){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.next.call(null,xs)) && (cljs.core.next.call(null,ys)) && (cljs.core.next.call(null,zs))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.first.call(null,ys),cljs.core.first.call(null,zs),cljs.core.second.call(null,xs),cljs.core.second.call(null,ys),cljs.core.second.call(null,zs)], null),schmud_de.drawing.line_join_points.call(null,cljs.core.next.call(null,xs),cljs.core.next.call(null,ys),cljs.core.next.call(null,zs)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),null,null));
});

schmud_de.drawing.line_join_points.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=drawing.js.map