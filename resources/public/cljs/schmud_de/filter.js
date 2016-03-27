// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16549_SHARP_){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(p1__16549_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16550_SHARP_){
return dommy.core.html(p1__16550_SHARP_);
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
var seq__16563_16575 = cljs.core.seq(all_boxes);
var chunk__16564_16576 = null;
var count__16565_16577 = (0);
var i__16566_16578 = (0);
while(true){
if((i__16566_16578 < count__16565_16577)){
var box_16579 = chunk__16564_16576.cljs$core$IIndexed$_nth$arity$2(null,i__16566_16578);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16579,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16579,"bounce");

dommy.core.show_BANG_(box_16579);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16579,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16579,cljs.core.cst$kw$top)], 0));

var G__16580 = seq__16563_16575;
var G__16581 = chunk__16564_16576;
var G__16582 = count__16565_16577;
var G__16583 = (i__16566_16578 + (1));
seq__16563_16575 = G__16580;
chunk__16564_16576 = G__16581;
count__16565_16577 = G__16582;
i__16566_16578 = G__16583;
continue;
} else {
var temp__4425__auto___16584 = cljs.core.seq(seq__16563_16575);
if(temp__4425__auto___16584){
var seq__16563_16585__$1 = temp__4425__auto___16584;
if(cljs.core.chunked_seq_QMARK_(seq__16563_16585__$1)){
var c__14232__auto___16586 = cljs.core.chunk_first(seq__16563_16585__$1);
var G__16587 = cljs.core.chunk_rest(seq__16563_16585__$1);
var G__16588 = c__14232__auto___16586;
var G__16589 = cljs.core.count(c__14232__auto___16586);
var G__16590 = (0);
seq__16563_16575 = G__16587;
chunk__16564_16576 = G__16588;
count__16565_16577 = G__16589;
i__16566_16578 = G__16590;
continue;
} else {
var box_16591 = cljs.core.first(seq__16563_16585__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16591,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16591,"bounce");

dommy.core.show_BANG_(box_16591);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16591,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16591,cljs.core.cst$kw$top)], 0));

var G__16592 = cljs.core.next(seq__16563_16585__$1);
var G__16593 = null;
var G__16594 = (0);
var G__16595 = (0);
seq__16563_16575 = G__16592;
chunk__16564_16576 = G__16593;
count__16565_16577 = G__16594;
i__16566_16578 = G__16595;
continue;
}
} else {
}
}
break;
}

var seq__16567_16596 = cljs.core.seq(hide_boxes);
var chunk__16568_16597 = null;
var count__16569_16598 = (0);
var i__16570_16599 = (0);
while(true){
if((i__16570_16599 < count__16569_16598)){
var box_16600 = chunk__16568_16597.cljs$core$IIndexed$_nth$arity$2(null,i__16570_16599);
dommy.core.hide_BANG_(box_16600);

var G__16601 = seq__16567_16596;
var G__16602 = chunk__16568_16597;
var G__16603 = count__16569_16598;
var G__16604 = (i__16570_16599 + (1));
seq__16567_16596 = G__16601;
chunk__16568_16597 = G__16602;
count__16569_16598 = G__16603;
i__16570_16599 = G__16604;
continue;
} else {
var temp__4425__auto___16605 = cljs.core.seq(seq__16567_16596);
if(temp__4425__auto___16605){
var seq__16567_16606__$1 = temp__4425__auto___16605;
if(cljs.core.chunked_seq_QMARK_(seq__16567_16606__$1)){
var c__14232__auto___16607 = cljs.core.chunk_first(seq__16567_16606__$1);
var G__16608 = cljs.core.chunk_rest(seq__16567_16606__$1);
var G__16609 = c__14232__auto___16607;
var G__16610 = cljs.core.count(c__14232__auto___16607);
var G__16611 = (0);
seq__16567_16596 = G__16608;
chunk__16568_16597 = G__16609;
count__16569_16598 = G__16610;
i__16570_16599 = G__16611;
continue;
} else {
var box_16612 = cljs.core.first(seq__16567_16606__$1);
dommy.core.hide_BANG_(box_16612);

var G__16613 = cljs.core.next(seq__16567_16606__$1);
var G__16614 = null;
var G__16615 = (0);
var G__16616 = (0);
seq__16567_16596 = G__16613;
chunk__16568_16597 = G__16614;
count__16569_16598 = G__16615;
i__16570_16599 = G__16616;
continue;
}
} else {
}
}
break;
}

var seq__16571 = cljs.core.seq(select_boxes);
var chunk__16572 = null;
var count__16573 = (0);
var i__16574 = (0);
while(true){
if((i__16574 < count__16573)){
var box = chunk__16572.cljs$core$IIndexed$_nth$arity$2(null,i__16574);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16617 = seq__16571;
var G__16618 = chunk__16572;
var G__16619 = count__16573;
var G__16620 = (i__16574 + (1));
seq__16571 = G__16617;
chunk__16572 = G__16618;
count__16573 = G__16619;
i__16574 = G__16620;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16571);
if(temp__4425__auto__){
var seq__16571__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16571__$1)){
var c__14232__auto__ = cljs.core.chunk_first(seq__16571__$1);
var G__16621 = cljs.core.chunk_rest(seq__16571__$1);
var G__16622 = c__14232__auto__;
var G__16623 = cljs.core.count(c__14232__auto__);
var G__16624 = (0);
seq__16571 = G__16621;
chunk__16572 = G__16622;
count__16573 = G__16623;
i__16574 = G__16624;
continue;
} else {
var box = cljs.core.first(seq__16571__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16625 = cljs.core.next(seq__16571__$1);
var G__16626 = null;
var G__16627 = (0);
var G__16628 = (0);
seq__16571 = G__16625;
chunk__16572 = G__16626;
count__16573 = G__16627;
i__16574 = G__16628;
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
var seq__16633 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".filters li")));
var chunk__16634 = null;
var count__16635 = (0);
var i__16636 = (0);
while(true){
if((i__16636 < count__16635)){
var buttons = chunk__16634.cljs$core$IIndexed$_nth$arity$2(null,i__16636);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16637 = seq__16633;
var G__16638 = chunk__16634;
var G__16639 = count__16635;
var G__16640 = (i__16636 + (1));
seq__16633 = G__16637;
chunk__16634 = G__16638;
count__16635 = G__16639;
i__16636 = G__16640;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16633);
if(temp__4425__auto__){
var seq__16633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16633__$1)){
var c__14232__auto__ = cljs.core.chunk_first(seq__16633__$1);
var G__16641 = cljs.core.chunk_rest(seq__16633__$1);
var G__16642 = c__14232__auto__;
var G__16643 = cljs.core.count(c__14232__auto__);
var G__16644 = (0);
seq__16633 = G__16641;
chunk__16634 = G__16642;
count__16635 = G__16643;
i__16636 = G__16644;
continue;
} else {
var buttons = cljs.core.first(seq__16633__$1);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16645 = cljs.core.next(seq__16633__$1);
var G__16646 = null;
var G__16647 = (0);
var G__16648 = (0);
seq__16633 = G__16645;
chunk__16634 = G__16646;
count__16635 = G__16647;
i__16636 = G__16648;
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
