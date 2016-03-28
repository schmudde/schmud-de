// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('lister.filter');
goog.require('cljs.core');
goog.require('dommy.core');
lister.filter.timed_putter = (function lister$filter$timed_putter(list_item,multiplier){
var base_time = (12000);
window.setTimeout(((function (base_time){
return (function (){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(list_item);
});})(base_time))
,(base_time * multiplier));

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(list_item,"animated fadeIn");

return window.setTimeout(((function (base_time){
return (function (){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1(list_item);
});})(base_time))
,(base_time * (multiplier + (1))));
});
lister.filter.lister = (function lister$filter$lister(){
var tweets = dommy.utils.__GT_Array(document.querySelectorAll("#distant-tweets li"));
var multiplier = cljs.core.range.cljs$core$IFn$_invoke$arity$1((10));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(lister.filter.timed_putter,tweets,multiplier));
});
window.onload = lister.filter.lister;
