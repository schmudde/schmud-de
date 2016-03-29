// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8771_SHARP_){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2(p1__8771_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8772_SHARP_){
return dommy.core.html(p1__8772_SHARP_);
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
var seq__8785_8797 = cljs.core.seq(all_boxes);
var chunk__8786_8798 = null;
var count__8787_8799 = (0);
var i__8788_8800 = (0);
while(true){
if((i__8788_8800 < count__8787_8799)){
var box_8801 = chunk__8786_8798.cljs$core$IIndexed$_nth$arity$2(null,i__8788_8800);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_8801,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_8801,"bounce");

dommy.core.show_BANG_(box_8801);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_8801,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_8801,cljs.core.cst$kw$top)], 0));

var G__8802 = seq__8785_8797;
var G__8803 = chunk__8786_8798;
var G__8804 = count__8787_8799;
var G__8805 = (i__8788_8800 + (1));
seq__8785_8797 = G__8802;
chunk__8786_8798 = G__8803;
count__8787_8799 = G__8804;
i__8788_8800 = G__8805;
continue;
} else {
var temp__4425__auto___8806 = cljs.core.seq(seq__8785_8797);
if(temp__4425__auto___8806){
var seq__8785_8807__$1 = temp__4425__auto___8806;
if(cljs.core.chunked_seq_QMARK_(seq__8785_8807__$1)){
var c__5310__auto___8808 = cljs.core.chunk_first(seq__8785_8807__$1);
var G__8809 = cljs.core.chunk_rest(seq__8785_8807__$1);
var G__8810 = c__5310__auto___8808;
var G__8811 = cljs.core.count(c__5310__auto___8808);
var G__8812 = (0);
seq__8785_8797 = G__8809;
chunk__8786_8798 = G__8810;
count__8787_8799 = G__8811;
i__8788_8800 = G__8812;
continue;
} else {
var box_8813 = cljs.core.first(seq__8785_8807__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_8813,"animated");

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(box_8813,"bounce");

dommy.core.show_BANG_(box_8813);

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(box_8813,cljs.core.array_seq([cljs.core.cst$kw$top,dommy.core.px(box_8813,cljs.core.cst$kw$top)], 0));

var G__8814 = cljs.core.next(seq__8785_8807__$1);
var G__8815 = null;
var G__8816 = (0);
var G__8817 = (0);
seq__8785_8797 = G__8814;
chunk__8786_8798 = G__8815;
count__8787_8799 = G__8816;
i__8788_8800 = G__8817;
continue;
}
} else {
}
}
break;
}

var seq__8789_8818 = cljs.core.seq(hide_boxes);
var chunk__8790_8819 = null;
var count__8791_8820 = (0);
var i__8792_8821 = (0);
while(true){
if((i__8792_8821 < count__8791_8820)){
var box_8822 = chunk__8790_8819.cljs$core$IIndexed$_nth$arity$2(null,i__8792_8821);
dommy.core.hide_BANG_(box_8822);

var G__8823 = seq__8789_8818;
var G__8824 = chunk__8790_8819;
var G__8825 = count__8791_8820;
var G__8826 = (i__8792_8821 + (1));
seq__8789_8818 = G__8823;
chunk__8790_8819 = G__8824;
count__8791_8820 = G__8825;
i__8792_8821 = G__8826;
continue;
} else {
var temp__4425__auto___8827 = cljs.core.seq(seq__8789_8818);
if(temp__4425__auto___8827){
var seq__8789_8828__$1 = temp__4425__auto___8827;
if(cljs.core.chunked_seq_QMARK_(seq__8789_8828__$1)){
var c__5310__auto___8829 = cljs.core.chunk_first(seq__8789_8828__$1);
var G__8830 = cljs.core.chunk_rest(seq__8789_8828__$1);
var G__8831 = c__5310__auto___8829;
var G__8832 = cljs.core.count(c__5310__auto___8829);
var G__8833 = (0);
seq__8789_8818 = G__8830;
chunk__8790_8819 = G__8831;
count__8791_8820 = G__8832;
i__8792_8821 = G__8833;
continue;
} else {
var box_8834 = cljs.core.first(seq__8789_8828__$1);
dommy.core.hide_BANG_(box_8834);

var G__8835 = cljs.core.next(seq__8789_8828__$1);
var G__8836 = null;
var G__8837 = (0);
var G__8838 = (0);
seq__8789_8818 = G__8835;
chunk__8790_8819 = G__8836;
count__8791_8820 = G__8837;
i__8792_8821 = G__8838;
continue;
}
} else {
}
}
break;
}

var seq__8793 = cljs.core.seq(select_boxes);
var chunk__8794 = null;
var count__8795 = (0);
var i__8796 = (0);
while(true){
if((i__8796 < count__8795)){
var box = chunk__8794.cljs$core$IIndexed$_nth$arity$2(null,i__8796);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__8839 = seq__8793;
var G__8840 = chunk__8794;
var G__8841 = count__8795;
var G__8842 = (i__8796 + (1));
seq__8793 = G__8839;
chunk__8794 = G__8840;
count__8795 = G__8841;
i__8796 = G__8842;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8793);
if(temp__4425__auto__){
var seq__8793__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8793__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8793__$1);
var G__8843 = cljs.core.chunk_rest(seq__8793__$1);
var G__8844 = c__5310__auto__;
var G__8845 = cljs.core.count(c__5310__auto__);
var G__8846 = (0);
seq__8793 = G__8843;
chunk__8794 = G__8844;
count__8795 = G__8845;
i__8796 = G__8846;
continue;
} else {
var box = cljs.core.first(seq__8793__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(box,"animated bounce");

var G__8847 = cljs.core.next(seq__8793__$1);
var G__8848 = null;
var G__8849 = (0);
var G__8850 = (0);
seq__8793 = G__8847;
chunk__8794 = G__8848;
count__8795 = G__8849;
i__8796 = G__8850;
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
var seq__8855 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".filters li")));
var chunk__8856 = null;
var count__8857 = (0);
var i__8858 = (0);
while(true){
if((i__8858 < count__8857)){
var buttons = chunk__8856.cljs$core$IIndexed$_nth$arity$2(null,i__8858);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__8859 = seq__8855;
var G__8860 = chunk__8856;
var G__8861 = count__8857;
var G__8862 = (i__8858 + (1));
seq__8855 = G__8859;
chunk__8856 = G__8860;
count__8857 = G__8861;
i__8858 = G__8862;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8855);
if(temp__4425__auto__){
var seq__8855__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8855__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8855__$1);
var G__8863 = cljs.core.chunk_rest(seq__8855__$1);
var G__8864 = c__5310__auto__;
var G__8865 = cljs.core.count(c__5310__auto__);
var G__8866 = (0);
seq__8855 = G__8863;
chunk__8856 = G__8864;
count__8857 = G__8865;
i__8858 = G__8866;
continue;
} else {
var buttons = cljs.core.first(seq__8855__$1);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(buttons,cljs.core.array_seq([cljs.core.cst$kw$click,schmud_de.filter.click_handler], 0));

var G__8867 = cljs.core.next(seq__8855__$1);
var G__8868 = null;
var G__8869 = (0);
var G__8870 = (0);
seq__8855 = G__8867;
chunk__8856 = G__8868;
count__8857 = G__8869;
i__8858 = G__8870;
continue;
}
} else {
return null;
}
}
break;
}
});
