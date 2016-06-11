// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16553_SHARP_){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(p1__16553_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16554_SHARP_){
return dommy.core.html(p1__16554_SHARP_);
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
var seq__16567_16579 = cljs.core.seq(all_boxes);
var chunk__16568_16580 = null;
var count__16569_16581 = (0);
var i__16570_16582 = (0);
while(true){
if((i__16570_16582 < count__16569_16581)){
var box_16583 = chunk__16568_16580.cljs$core$IIndexed$_nth$arity$2(null,i__16570_16582);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16583,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16583,"bounce");

dommy.core.show_BANG_(box_16583);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16583,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16583,cljs.core.cst$kw$top)], 0));

var G__16584 = seq__16567_16579;
var G__16585 = chunk__16568_16580;
var G__16586 = count__16569_16581;
var G__16587 = (i__16570_16582 + (1));
seq__16567_16579 = G__16584;
chunk__16568_16580 = G__16585;
count__16569_16581 = G__16586;
i__16570_16582 = G__16587;
continue;
} else {
var temp__4425__auto___16588 = cljs.core.seq(seq__16567_16579);
if(temp__4425__auto___16588){
var seq__16567_16589__$1 = temp__4425__auto___16588;
if(cljs.core.chunked_seq_QMARK_(seq__16567_16589__$1)){
var c__14236__auto___16590 = cljs.core.chunk_first(seq__16567_16589__$1);
var G__16591 = cljs.core.chunk_rest(seq__16567_16589__$1);
var G__16592 = c__14236__auto___16590;
var G__16593 = cljs.core.count(c__14236__auto___16590);
var G__16594 = (0);
seq__16567_16579 = G__16591;
chunk__16568_16580 = G__16592;
count__16569_16581 = G__16593;
i__16570_16582 = G__16594;
continue;
} else {
var box_16595 = cljs.core.first(seq__16567_16589__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16595,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_16595,"bounce");

dommy.core.show_BANG_(box_16595);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_16595,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_16595,cljs.core.cst$kw$top)], 0));

var G__16596 = cljs.core.next(seq__16567_16589__$1);
var G__16597 = null;
var G__16598 = (0);
var G__16599 = (0);
seq__16567_16579 = G__16596;
chunk__16568_16580 = G__16597;
count__16569_16581 = G__16598;
i__16570_16582 = G__16599;
continue;
}
} else {
}
}
break;
}

var seq__16571_16600 = cljs.core.seq(hide_boxes);
var chunk__16572_16601 = null;
var count__16573_16602 = (0);
var i__16574_16603 = (0);
while(true){
if((i__16574_16603 < count__16573_16602)){
var box_16604 = chunk__16572_16601.cljs$core$IIndexed$_nth$arity$2(null,i__16574_16603);
dommy.core.hide_BANG_(box_16604);

var G__16605 = seq__16571_16600;
var G__16606 = chunk__16572_16601;
var G__16607 = count__16573_16602;
var G__16608 = (i__16574_16603 + (1));
seq__16571_16600 = G__16605;
chunk__16572_16601 = G__16606;
count__16573_16602 = G__16607;
i__16574_16603 = G__16608;
continue;
} else {
var temp__4425__auto___16609 = cljs.core.seq(seq__16571_16600);
if(temp__4425__auto___16609){
var seq__16571_16610__$1 = temp__4425__auto___16609;
if(cljs.core.chunked_seq_QMARK_(seq__16571_16610__$1)){
var c__14236__auto___16611 = cljs.core.chunk_first(seq__16571_16610__$1);
var G__16612 = cljs.core.chunk_rest(seq__16571_16610__$1);
var G__16613 = c__14236__auto___16611;
var G__16614 = cljs.core.count(c__14236__auto___16611);
var G__16615 = (0);
seq__16571_16600 = G__16612;
chunk__16572_16601 = G__16613;
count__16573_16602 = G__16614;
i__16574_16603 = G__16615;
continue;
} else {
var box_16616 = cljs.core.first(seq__16571_16610__$1);
dommy.core.hide_BANG_(box_16616);

var G__16617 = cljs.core.next(seq__16571_16610__$1);
var G__16618 = null;
var G__16619 = (0);
var G__16620 = (0);
seq__16571_16600 = G__16617;
chunk__16572_16601 = G__16618;
count__16573_16602 = G__16619;
i__16574_16603 = G__16620;
continue;
}
} else {
}
}
break;
}

var seq__16575 = cljs.core.seq(select_boxes);
var chunk__16576 = null;
var count__16577 = (0);
var i__16578 = (0);
while(true){
if((i__16578 < count__16577)){
var box = chunk__16576.cljs$core$IIndexed$_nth$arity$2(null,i__16578);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16621 = seq__16575;
var G__16622 = chunk__16576;
var G__16623 = count__16577;
var G__16624 = (i__16578 + (1));
seq__16575 = G__16621;
chunk__16576 = G__16622;
count__16577 = G__16623;
i__16578 = G__16624;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16575);
if(temp__4425__auto__){
var seq__16575__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16575__$1)){
var c__14236__auto__ = cljs.core.chunk_first(seq__16575__$1);
var G__16625 = cljs.core.chunk_rest(seq__16575__$1);
var G__16626 = c__14236__auto__;
var G__16627 = cljs.core.count(c__14236__auto__);
var G__16628 = (0);
seq__16575 = G__16625;
chunk__16576 = G__16626;
count__16577 = G__16627;
i__16578 = G__16628;
continue;
} else {
var box = cljs.core.first(seq__16575__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__16629 = cljs.core.next(seq__16575__$1);
var G__16630 = null;
var G__16631 = (0);
var G__16632 = (0);
seq__16575 = G__16629;
chunk__16576 = G__16630;
count__16577 = G__16631;
i__16578 = G__16632;
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
var seq__16637 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".filters li")));
var chunk__16638 = null;
var count__16639 = (0);
var i__16640 = (0);
while(true){
if((i__16640 < count__16639)){
var buttons = chunk__16638.cljs$core$IIndexed$_nth$arity$2(null,i__16640);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16641 = seq__16637;
var G__16642 = chunk__16638;
var G__16643 = count__16639;
var G__16644 = (i__16640 + (1));
seq__16637 = G__16641;
chunk__16638 = G__16642;
count__16639 = G__16643;
i__16640 = G__16644;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16637);
if(temp__4425__auto__){
var seq__16637__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16637__$1)){
var c__14236__auto__ = cljs.core.chunk_first(seq__16637__$1);
var G__16645 = cljs.core.chunk_rest(seq__16637__$1);
var G__16646 = c__14236__auto__;
var G__16647 = cljs.core.count(c__14236__auto__);
var G__16648 = (0);
seq__16637 = G__16645;
chunk__16638 = G__16646;
count__16639 = G__16647;
i__16640 = G__16648;
continue;
} else {
var buttons = cljs.core.first(seq__16637__$1);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__16649 = cljs.core.next(seq__16637__$1);
var G__16650 = null;
var G__16651 = (0);
var G__16652 = (0);
seq__16637 = G__16649;
chunk__16638 = G__16650;
count__16639 = G__16651;
i__16640 = G__16652;
continue;
}
} else {
return null;
}
}
break;
}
});
