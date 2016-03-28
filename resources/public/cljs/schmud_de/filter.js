// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22477_SHARP_){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(p1__22477_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22478_SHARP_){
return dommy.core.html(p1__22478_SHARP_);
}),elements);
});
schmud_de.filter.grab_parents = (function schmud_de$filter$grab_parents(class$,elements,box_class_name,all_boxes){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class$,"show all")){
return all_boxes;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),schmud_de.filter.box_parent(elements,box_class_name));
}
});
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){

var ready_state = document.readyState;
var class$ = dommy.core.text(e.currentTarget);
var elements = dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str("."),cljs.core.str(class$)].join('')))));
var box_class_name = ".project-box";
var all_boxes = dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(box_class_name)));
var select_boxes = schmud_de.filter.grab_parents(class$,elements,box_class_name,all_boxes);
var hide_boxes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_boxes),cljs.core.set(select_boxes));
var seq__22491_22503 = cljs.core.seq(all_boxes);
var chunk__22492_22504 = null;
var count__22493_22505 = (0);
var i__22494_22506 = (0);
while(true){
if((i__22494_22506 < count__22493_22505)){
var box_22507 = chunk__22492_22504.cljs$core$IIndexed$_nth$arity$2(null,i__22494_22506);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_22507,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_22507,"bounce");

dommy.core.show_BANG_(box_22507);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_22507,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_22507,cljs.core.cst$kw$top)], 0));

var G__22508 = seq__22491_22503;
var G__22509 = chunk__22492_22504;
var G__22510 = count__22493_22505;
var G__22511 = (i__22494_22506 + (1));
seq__22491_22503 = G__22508;
chunk__22492_22504 = G__22509;
count__22493_22505 = G__22510;
i__22494_22506 = G__22511;
continue;
} else {
var temp__4425__auto___22512 = cljs.core.seq(seq__22491_22503);
if(temp__4425__auto___22512){
var seq__22491_22513__$1 = temp__4425__auto___22512;
if(cljs.core.chunked_seq_QMARK_(seq__22491_22513__$1)){
var c__5310__auto___22514 = cljs.core.chunk_first(seq__22491_22513__$1);
var G__22515 = cljs.core.chunk_rest(seq__22491_22513__$1);
var G__22516 = c__5310__auto___22514;
var G__22517 = cljs.core.count(c__5310__auto___22514);
var G__22518 = (0);
seq__22491_22503 = G__22515;
chunk__22492_22504 = G__22516;
count__22493_22505 = G__22517;
i__22494_22506 = G__22518;
continue;
} else {
var box_22519 = cljs.core.first(seq__22491_22513__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_22519,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_22519,"bounce");

dommy.core.show_BANG_(box_22519);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_22519,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_22519,cljs.core.cst$kw$top)], 0));

var G__22520 = cljs.core.next(seq__22491_22513__$1);
var G__22521 = null;
var G__22522 = (0);
var G__22523 = (0);
seq__22491_22503 = G__22520;
chunk__22492_22504 = G__22521;
count__22493_22505 = G__22522;
i__22494_22506 = G__22523;
continue;
}
} else {
}
}
break;
}

var seq__22495_22524 = cljs.core.seq(hide_boxes);
var chunk__22496_22525 = null;
var count__22497_22526 = (0);
var i__22498_22527 = (0);
while(true){
if((i__22498_22527 < count__22497_22526)){
var box_22528 = chunk__22496_22525.cljs$core$IIndexed$_nth$arity$2(null,i__22498_22527);
dommy.core.hide_BANG_(box_22528);

var G__22529 = seq__22495_22524;
var G__22530 = chunk__22496_22525;
var G__22531 = count__22497_22526;
var G__22532 = (i__22498_22527 + (1));
seq__22495_22524 = G__22529;
chunk__22496_22525 = G__22530;
count__22497_22526 = G__22531;
i__22498_22527 = G__22532;
continue;
} else {
var temp__4425__auto___22533 = cljs.core.seq(seq__22495_22524);
if(temp__4425__auto___22533){
var seq__22495_22534__$1 = temp__4425__auto___22533;
if(cljs.core.chunked_seq_QMARK_(seq__22495_22534__$1)){
var c__5310__auto___22535 = cljs.core.chunk_first(seq__22495_22534__$1);
var G__22536 = cljs.core.chunk_rest(seq__22495_22534__$1);
var G__22537 = c__5310__auto___22535;
var G__22538 = cljs.core.count(c__5310__auto___22535);
var G__22539 = (0);
seq__22495_22524 = G__22536;
chunk__22496_22525 = G__22537;
count__22497_22526 = G__22538;
i__22498_22527 = G__22539;
continue;
} else {
var box_22540 = cljs.core.first(seq__22495_22534__$1);
dommy.core.hide_BANG_(box_22540);

var G__22541 = cljs.core.next(seq__22495_22534__$1);
var G__22542 = null;
var G__22543 = (0);
var G__22544 = (0);
seq__22495_22524 = G__22541;
chunk__22496_22525 = G__22542;
count__22497_22526 = G__22543;
i__22498_22527 = G__22544;
continue;
}
} else {
}
}
break;
}

var seq__22499 = cljs.core.seq(select_boxes);
var chunk__22500 = null;
var count__22501 = (0);
var i__22502 = (0);
while(true){
if((i__22502 < count__22501)){
var box = chunk__22500.cljs$core$IIndexed$_nth$arity$2(null,i__22502);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__22545 = seq__22499;
var G__22546 = chunk__22500;
var G__22547 = count__22501;
var G__22548 = (i__22502 + (1));
seq__22499 = G__22545;
chunk__22500 = G__22546;
count__22501 = G__22547;
i__22502 = G__22548;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__22499);
if(temp__4425__auto__){
var seq__22499__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22499__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__22499__$1);
var G__22549 = cljs.core.chunk_rest(seq__22499__$1);
var G__22550 = c__5310__auto__;
var G__22551 = cljs.core.count(c__5310__auto__);
var G__22552 = (0);
seq__22499 = G__22549;
chunk__22500 = G__22550;
count__22501 = G__22551;
i__22502 = G__22552;
continue;
} else {
var box = cljs.core.first(seq__22499__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__22553 = cljs.core.next(seq__22499__$1);
var G__22554 = null;
var G__22555 = (0);
var G__22556 = (0);
seq__22499 = G__22553;
chunk__22500 = G__22554;
count__22501 = G__22555;
i__22502 = G__22556;
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
var seq__22561 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".filters li")));
var chunk__22562 = null;
var count__22563 = (0);
var i__22564 = (0);
while(true){
if((i__22564 < count__22563)){
var buttons = chunk__22562.cljs$core$IIndexed$_nth$arity$2(null,i__22564);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__22565 = seq__22561;
var G__22566 = chunk__22562;
var G__22567 = count__22563;
var G__22568 = (i__22564 + (1));
seq__22561 = G__22565;
chunk__22562 = G__22566;
count__22563 = G__22567;
i__22564 = G__22568;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__22561);
if(temp__4425__auto__){
var seq__22561__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22561__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__22561__$1);
var G__22569 = cljs.core.chunk_rest(seq__22561__$1);
var G__22570 = c__5310__auto__;
var G__22571 = cljs.core.count(c__5310__auto__);
var G__22572 = (0);
seq__22561 = G__22569;
chunk__22562 = G__22570;
count__22563 = G__22571;
i__22564 = G__22572;
continue;
} else {
var buttons = cljs.core.first(seq__22561__$1);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__22573 = cljs.core.next(seq__22561__$1);
var G__22574 = null;
var G__22575 = (0);
var G__22576 = (0);
seq__22561 = G__22573;
chunk__22562 = G__22574;
count__22563 = G__22575;
i__22564 = G__22576;
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
