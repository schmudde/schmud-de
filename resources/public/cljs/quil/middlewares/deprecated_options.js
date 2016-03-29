// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.cst$kw$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$no_DASH_safe_DASH_draw) : features__$1.call(null,cljs.core.cst$kw$no_DASH_safe_DASH_draw)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.cst$kw$no_DASH_safe_DASH_draw);
});
/**
 * Checks if options map contains deprected options and removes them.
 * Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__5279__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__10072(s__10073){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__10073__$1 = s__10073;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10073__$1);
if(temp__4425__auto__){
var s__10073__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10073__$2)){
var c__5277__auto__ = cljs.core.chunk_first(s__10073__$2);
var size__5278__auto__ = cljs.core.count(c__5277__auto__);
var b__10075 = cljs.core.chunk_buffer(size__5278__auto__);
if((function (){var i__10074 = (0);
while(true){
if((i__10074 < size__5278__auto__)){
var vec__10082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5277__auto__,i__10074);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10082,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10082,(1),null);
cljs.core.chunk_append(b__10075,(function (){var temp__4423__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10083 = temp__4423__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10083,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10083,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__10086 = (i__10074 + (1));
i__10074 = G__10086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10075),quil$middlewares$deprecated_options$deprecated_options_$_iter__10072(cljs.core.chunk_rest(s__10073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10075),null);
}
} else {
var vec__10084 = cljs.core.first(s__10073__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(1),null);
return cljs.core.cons((function (){var temp__4423__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10085 = temp__4423__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10085,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__10072(cljs.core.rest(s__10073__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__5279__auto__(options__$1);
})()));
});
