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
var args9714 = [];
var len__9662__auto___9717 = arguments.length;
var i__9663__auto___9718 = (0);
while(true){
if((i__9663__auto___9718 < len__9662__auto___9717)){
args9714.push((arguments[i__9663__auto___9718]));

var G__9719 = (i__9663__auto___9718 + (1));
i__9663__auto___9718 = G__9719;
continue;
} else {
}
break;
}

var G__9716 = args9714.length;
switch (G__9716) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9714.length)].join('')));

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
schmud_de.drawing.last_x_point = (function schmud_de$drawing$last_x_point(line){

return cljs.core.last.call(null,cljs.core.drop_last.call(null,line));
});
schmud_de.drawing.line_decomposer = (function schmud_de$drawing$line_decomposer(line_segment){

var x1 = cljs.core.first.call(null,line_segment);
var y1 = cljs.core.second.call(null,line_segment);
var x2 = cljs.core.nth.call(null,line_segment,(2));
var y2 = cljs.core.nth.call(null,line_segment,(3));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null);
});

//# sourceMappingURL=drawing.js.map