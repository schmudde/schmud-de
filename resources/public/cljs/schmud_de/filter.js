// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9304_SHARP_){
return dommy.core.closest.call(null,p1__9304_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9305_SHARP_){
return dommy.core.html.call(null,p1__9305_SHARP_);
}),elements);
});
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){

var class$ = dommy.core.text.call(null,e.currentTarget);
var elements = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("."),cljs.core.str(class$)].join('')))));
var box_class_name = ".project-box";
var select_boxes = cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),schmud_de.filter.box_parent.call(null,elements,box_class_name));
var all_boxes = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,box_class_name)));
var hide_boxes = clojure.set.difference.call(null,cljs.core.set.call(null,all_boxes),cljs.core.set.call(null,select_boxes));
var seq__9318_9330 = cljs.core.seq.call(null,all_boxes);
var chunk__9319_9331 = null;
var count__9320_9332 = (0);
var i__9321_9333 = (0);
while(true){
if((i__9321_9333 < count__9320_9332)){
var box_9334 = cljs.core._nth.call(null,chunk__9319_9331,i__9321_9333);
dommy.core.remove_class_BANG_.call(null,box_9334,"animated");

dommy.core.remove_class_BANG_.call(null,box_9334,"bounce");

dommy.core.show_BANG_.call(null,box_9334);

var G__9335 = seq__9318_9330;
var G__9336 = chunk__9319_9331;
var G__9337 = count__9320_9332;
var G__9338 = (i__9321_9333 + (1));
seq__9318_9330 = G__9335;
chunk__9319_9331 = G__9336;
count__9320_9332 = G__9337;
i__9321_9333 = G__9338;
continue;
} else {
var temp__4425__auto___9339 = cljs.core.seq.call(null,seq__9318_9330);
if(temp__4425__auto___9339){
var seq__9318_9340__$1 = temp__4425__auto___9339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9318_9340__$1)){
var c__8904__auto___9341 = cljs.core.chunk_first.call(null,seq__9318_9340__$1);
var G__9342 = cljs.core.chunk_rest.call(null,seq__9318_9340__$1);
var G__9343 = c__8904__auto___9341;
var G__9344 = cljs.core.count.call(null,c__8904__auto___9341);
var G__9345 = (0);
seq__9318_9330 = G__9342;
chunk__9319_9331 = G__9343;
count__9320_9332 = G__9344;
i__9321_9333 = G__9345;
continue;
} else {
var box_9346 = cljs.core.first.call(null,seq__9318_9340__$1);
dommy.core.remove_class_BANG_.call(null,box_9346,"animated");

dommy.core.remove_class_BANG_.call(null,box_9346,"bounce");

dommy.core.show_BANG_.call(null,box_9346);

var G__9347 = cljs.core.next.call(null,seq__9318_9340__$1);
var G__9348 = null;
var G__9349 = (0);
var G__9350 = (0);
seq__9318_9330 = G__9347;
chunk__9319_9331 = G__9348;
count__9320_9332 = G__9349;
i__9321_9333 = G__9350;
continue;
}
} else {
}
}
break;
}

var seq__9322_9351 = cljs.core.seq.call(null,hide_boxes);
var chunk__9323_9352 = null;
var count__9324_9353 = (0);
var i__9325_9354 = (0);
while(true){
if((i__9325_9354 < count__9324_9353)){
var box_9355 = cljs.core._nth.call(null,chunk__9323_9352,i__9325_9354);
dommy.core.hide_BANG_.call(null,box_9355);

var G__9356 = seq__9322_9351;
var G__9357 = chunk__9323_9352;
var G__9358 = count__9324_9353;
var G__9359 = (i__9325_9354 + (1));
seq__9322_9351 = G__9356;
chunk__9323_9352 = G__9357;
count__9324_9353 = G__9358;
i__9325_9354 = G__9359;
continue;
} else {
var temp__4425__auto___9360 = cljs.core.seq.call(null,seq__9322_9351);
if(temp__4425__auto___9360){
var seq__9322_9361__$1 = temp__4425__auto___9360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9322_9361__$1)){
var c__8904__auto___9362 = cljs.core.chunk_first.call(null,seq__9322_9361__$1);
var G__9363 = cljs.core.chunk_rest.call(null,seq__9322_9361__$1);
var G__9364 = c__8904__auto___9362;
var G__9365 = cljs.core.count.call(null,c__8904__auto___9362);
var G__9366 = (0);
seq__9322_9351 = G__9363;
chunk__9323_9352 = G__9364;
count__9324_9353 = G__9365;
i__9325_9354 = G__9366;
continue;
} else {
var box_9367 = cljs.core.first.call(null,seq__9322_9361__$1);
dommy.core.hide_BANG_.call(null,box_9367);

var G__9368 = cljs.core.next.call(null,seq__9322_9361__$1);
var G__9369 = null;
var G__9370 = (0);
var G__9371 = (0);
seq__9322_9351 = G__9368;
chunk__9323_9352 = G__9369;
count__9324_9353 = G__9370;
i__9325_9354 = G__9371;
continue;
}
} else {
}
}
break;
}

var seq__9326 = cljs.core.seq.call(null,select_boxes);
var chunk__9327 = null;
var count__9328 = (0);
var i__9329 = (0);
while(true){
if((i__9329 < count__9328)){
var box = cljs.core._nth.call(null,chunk__9327,i__9329);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9372 = seq__9326;
var G__9373 = chunk__9327;
var G__9374 = count__9328;
var G__9375 = (i__9329 + (1));
seq__9326 = G__9372;
chunk__9327 = G__9373;
count__9328 = G__9374;
i__9329 = G__9375;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9326);
if(temp__4425__auto__){
var seq__9326__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9326__$1)){
var c__8904__auto__ = cljs.core.chunk_first.call(null,seq__9326__$1);
var G__9376 = cljs.core.chunk_rest.call(null,seq__9326__$1);
var G__9377 = c__8904__auto__;
var G__9378 = cljs.core.count.call(null,c__8904__auto__);
var G__9379 = (0);
seq__9326 = G__9376;
chunk__9327 = G__9377;
count__9328 = G__9378;
i__9329 = G__9379;
continue;
} else {
var box = cljs.core.first.call(null,seq__9326__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9380 = cljs.core.next.call(null,seq__9326__$1);
var G__9381 = null;
var G__9382 = (0);
var G__9383 = (0);
seq__9326 = G__9380;
chunk__9327 = G__9381;
count__9328 = G__9382;
i__9329 = G__9383;
continue;
}
} else {
return null;
}
}
break;
}
});
schmud_de.filter.filterer = (function schmud_de$filter$filterer(){
var seq__9388 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9389 = null;
var count__9390 = (0);
var i__9391 = (0);
while(true){
if((i__9391 < count__9390)){
var buttons = cljs.core._nth.call(null,chunk__9389,i__9391);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9392 = seq__9388;
var G__9393 = chunk__9389;
var G__9394 = count__9390;
var G__9395 = (i__9391 + (1));
seq__9388 = G__9392;
chunk__9389 = G__9393;
count__9390 = G__9394;
i__9391 = G__9395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9388);
if(temp__4425__auto__){
var seq__9388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9388__$1)){
var c__8904__auto__ = cljs.core.chunk_first.call(null,seq__9388__$1);
var G__9396 = cljs.core.chunk_rest.call(null,seq__9388__$1);
var G__9397 = c__8904__auto__;
var G__9398 = cljs.core.count.call(null,c__8904__auto__);
var G__9399 = (0);
seq__9388 = G__9396;
chunk__9389 = G__9397;
count__9390 = G__9398;
i__9391 = G__9399;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9388__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9400 = cljs.core.next.call(null,seq__9388__$1);
var G__9401 = null;
var G__9402 = (0);
var G__9403 = (0);
seq__9388 = G__9400;
chunk__9389 = G__9401;
count__9390 = G__9402;
i__9391 = G__9403;
continue;
}
} else {
return null;
}
}
break;
}
});
window.onload = schmud_de.filter.filterer;

//# sourceMappingURL=filter.js.map