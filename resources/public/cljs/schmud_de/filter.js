// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16543_SHARP_){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(p1__16543_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16544_SHARP_){
return dommy.core.html(p1__16544_SHARP_);
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
var seq__16557_16569 = cljs.core.seq(all_boxes);
var chunk__16558_16570 = null;
var count__16559_16571 = (0);
var i__16560_16572 = (0);
while(true){
if((i__16560_16572 < count__16559_16571)){
var box_16573 = chunk__16558_16570.cljs$core$IIndexed$_nth$arity$2(null,i__16560_16572);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16573,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16573,"bounce");

dommy.core.show_BANG_(box_16573);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16573,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16573,cljs.core.cst$kw$top)], 0));

var G__16574 = seq__16557_16569;
var G__16575 = chunk__16558_16570;
var G__16576 = count__16559_16571;
var G__16577 = (i__16560_16572 + (1));
seq__16557_16569 = G__16574;
chunk__16558_16570 = G__16575;
count__16559_16571 = G__16576;
i__16560_16572 = G__16577;
continue;
} else {
var temp__4425__auto___16578 = cljs.core.seq(seq__16557_16569);
if(temp__4425__auto___16578){
var seq__16557_16579__$1 = temp__4425__auto___16578;
if(cljs.core.chunked_seq_QMARK_(seq__16557_16579__$1)){
var c__14226__auto___16580 = cljs.core.chunk_first(seq__16557_16579__$1);
var G__16581 = cljs.core.chunk_rest(seq__16557_16579__$1);
var G__16582 = c__14226__auto___16580;
var G__16583 = cljs.core.count(c__14226__auto___16580);
var G__16584 = (0);
seq__16557_16569 = G__16581;
chunk__16558_16570 = G__16582;
count__16559_16571 = G__16583;
i__16560_16572 = G__16584;
continue;
} else {
var box_16585 = cljs.core.first(seq__16557_16579__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16585,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16585,"bounce");

dommy.core.show_BANG_(box_16585);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16585,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16585,cljs.core.cst$kw$top)], 0));

var G__16586 = cljs.core.next(seq__16557_16579__$1);
var G__16587 = null;
var G__16588 = (0);
var G__16589 = (0);
seq__16557_16569 = G__16586;
chunk__16558_16570 = G__16587;
count__16559_16571 = G__16588;
i__16560_16572 = G__16589;
continue;
}
} else {
}
}
break;
}

var seq__16561_16590 = cljs.core.seq(hide_boxes);
var chunk__16562_16591 = null;
var count__16563_16592 = (0);
var i__16564_16593 = (0);
while(true){
if((i__16564_16593 < count__16563_16592)){
var box_16594 = chunk__16562_16591.cljs$core$IIndexed$_nth$arity$2(null,i__16564_16593);
dommy.core.hide_BANG_(box_16594);

var G__16595 = seq__16561_16590;
var G__16596 = chunk__16562_16591;
var G__16597 = count__16563_16592;
var G__16598 = (i__16564_16593 + (1));
seq__16561_16590 = G__16595;
chunk__16562_16591 = G__16596;
count__16563_16592 = G__16597;
i__16564_16593 = G__16598;
continue;
} else {
var temp__4425__auto___16599 = cljs.core.seq(seq__16561_16590);
if(temp__4425__auto___16599){
var seq__16561_16600__$1 = temp__4425__auto___16599;
if(cljs.core.chunked_seq_QMARK_(seq__16561_16600__$1)){
var c__14226__auto___16601 = cljs.core.chunk_first(seq__16561_16600__$1);
var G__16602 = cljs.core.chunk_rest(seq__16561_16600__$1);
var G__16603 = c__14226__auto___16601;
var G__16604 = cljs.core.count(c__14226__auto___16601);
var G__16605 = (0);
seq__16561_16590 = G__16602;
chunk__16562_16591 = G__16603;
count__16563_16592 = G__16604;
i__16564_16593 = G__16605;
continue;
} else {
var box_16606 = cljs.core.first(seq__16561_16600__$1);
dommy.core.hide_BANG_(box_16606);

var G__16607 = cljs.core.next(seq__16561_16600__$1);
var G__16608 = null;
var G__16609 = (0);
var G__16610 = (0);
seq__16561_16590 = G__16607;
chunk__16562_16591 = G__16608;
count__16563_16592 = G__16609;
i__16564_16593 = G__16610;
continue;
}
} else {
}
}
break;
}

var seq__16565 = cljs.core.seq(select_boxes);
var chunk__16566 = null;
var count__16567 = (0);
var i__16568 = (0);
while(true){
if((i__16568 < count__16567)){
var box = chunk__16566.cljs$core$IIndexed$_nth$arity$2(null,i__16568);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16611 = seq__16565;
var G__16612 = chunk__16566;
var G__16613 = count__16567;
var G__16614 = (i__16568 + (1));
seq__16565 = G__16611;
chunk__16566 = G__16612;
count__16567 = G__16613;
i__16568 = G__16614;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16565);
if(temp__4425__auto__){
var seq__16565__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16565__$1)){
var c__14226__auto__ = cljs.core.chunk_first(seq__16565__$1);
var G__16615 = cljs.core.chunk_rest(seq__16565__$1);
var G__16616 = c__14226__auto__;
var G__16617 = cljs.core.count(c__14226__auto__);
var G__16618 = (0);
seq__16565 = G__16615;
chunk__16566 = G__16616;
count__16567 = G__16617;
i__16568 = G__16618;
continue;
} else {
var box = cljs.core.first(seq__16565__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16619 = cljs.core.next(seq__16565__$1);
var G__16620 = null;
var G__16621 = (0);
var G__16622 = (0);
seq__16565 = G__16619;
chunk__16566 = G__16620;
count__16567 = G__16621;
i__16568 = G__16622;
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
var seq__16627 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".filters li")));
var chunk__16628 = null;
var count__16629 = (0);
var i__16630 = (0);
while(true){
if((i__16630 < count__16629)){
var buttons = chunk__16628.cljs$core$IIndexed$_nth$arity$2(null,i__16630);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16631 = seq__16627;
var G__16632 = chunk__16628;
var G__16633 = count__16629;
var G__16634 = (i__16630 + (1));
seq__16627 = G__16631;
chunk__16628 = G__16632;
count__16629 = G__16633;
i__16630 = G__16634;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16627);
if(temp__4425__auto__){
var seq__16627__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16627__$1)){
var c__14226__auto__ = cljs.core.chunk_first(seq__16627__$1);
var G__16635 = cljs.core.chunk_rest(seq__16627__$1);
var G__16636 = c__14226__auto__;
var G__16637 = cljs.core.count(c__14226__auto__);
var G__16638 = (0);
seq__16627 = G__16635;
chunk__16628 = G__16636;
count__16629 = G__16637;
i__16630 = G__16638;
continue;
} else {
var buttons = cljs.core.first(seq__16627__$1);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16639 = cljs.core.next(seq__16627__$1);
var G__16640 = null;
var G__16641 = (0);
var G__16642 = (0);
seq__16627 = G__16639;
chunk__16628 = G__16640;
count__16629 = G__16641;
i__16630 = G__16642;
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
