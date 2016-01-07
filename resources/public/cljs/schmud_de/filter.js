// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__14626_SHARP_){
return dommy.core.closest.call(null,p1__14626_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__14627_SHARP_){
return dommy.core.html.call(null,p1__14627_SHARP_);
}),elements);
});
schmud_de.filter.grab_parents = (function schmud_de$filter$grab_parents(class$,elements,box_class_name,all_boxes){

if(cljs.core._EQ_.call(null,class$,"show all")){
return all_boxes;
} else {
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),schmud_de.filter.box_parent.call(null,elements,box_class_name));
}
});
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){

var ready_state = document.readyState;
var class$ = dommy.core.text.call(null,e.currentTarget);
var elements = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("."),cljs.core.str(class$)].join('')))));
var box_class_name = ".project-box";
var all_boxes = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,box_class_name)));
var select_boxes = schmud_de.filter.grab_parents.call(null,class$,elements,box_class_name,all_boxes);
var hide_boxes = clojure.set.difference.call(null,cljs.core.set.call(null,all_boxes),cljs.core.set.call(null,select_boxes));
var seq__14640_14652 = cljs.core.seq.call(null,all_boxes);
var chunk__14641_14653 = null;
var count__14642_14654 = (0);
var i__14643_14655 = (0);
while(true){
if((i__14643_14655 < count__14642_14654)){
var box_14656 = cljs.core._nth.call(null,chunk__14641_14653,i__14643_14655);
dommy.core.remove_class_BANG_.call(null,box_14656,"animated");

dommy.core.remove_class_BANG_.call(null,box_14656,"bounce");

dommy.core.show_BANG_.call(null,box_14656);

dommy.core.set_px_BANG_.call(null,box_14656,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_14656,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__14657 = seq__14640_14652;
var G__14658 = chunk__14641_14653;
var G__14659 = count__14642_14654;
var G__14660 = (i__14643_14655 + (1));
seq__14640_14652 = G__14657;
chunk__14641_14653 = G__14658;
count__14642_14654 = G__14659;
i__14643_14655 = G__14660;
continue;
} else {
var temp__4425__auto___14661 = cljs.core.seq.call(null,seq__14640_14652);
if(temp__4425__auto___14661){
var seq__14640_14662__$1 = temp__4425__auto___14661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14640_14662__$1)){
var c__14226__auto___14663 = cljs.core.chunk_first.call(null,seq__14640_14662__$1);
var G__14664 = cljs.core.chunk_rest.call(null,seq__14640_14662__$1);
var G__14665 = c__14226__auto___14663;
var G__14666 = cljs.core.count.call(null,c__14226__auto___14663);
var G__14667 = (0);
seq__14640_14652 = G__14664;
chunk__14641_14653 = G__14665;
count__14642_14654 = G__14666;
i__14643_14655 = G__14667;
continue;
} else {
var box_14668 = cljs.core.first.call(null,seq__14640_14662__$1);
dommy.core.remove_class_BANG_.call(null,box_14668,"animated");

dommy.core.remove_class_BANG_.call(null,box_14668,"bounce");

dommy.core.show_BANG_.call(null,box_14668);

dommy.core.set_px_BANG_.call(null,box_14668,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_14668,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__14669 = cljs.core.next.call(null,seq__14640_14662__$1);
var G__14670 = null;
var G__14671 = (0);
var G__14672 = (0);
seq__14640_14652 = G__14669;
chunk__14641_14653 = G__14670;
count__14642_14654 = G__14671;
i__14643_14655 = G__14672;
continue;
}
} else {
}
}
break;
}

var seq__14644_14673 = cljs.core.seq.call(null,hide_boxes);
var chunk__14645_14674 = null;
var count__14646_14675 = (0);
var i__14647_14676 = (0);
while(true){
if((i__14647_14676 < count__14646_14675)){
var box_14677 = cljs.core._nth.call(null,chunk__14645_14674,i__14647_14676);
dommy.core.hide_BANG_.call(null,box_14677);

var G__14678 = seq__14644_14673;
var G__14679 = chunk__14645_14674;
var G__14680 = count__14646_14675;
var G__14681 = (i__14647_14676 + (1));
seq__14644_14673 = G__14678;
chunk__14645_14674 = G__14679;
count__14646_14675 = G__14680;
i__14647_14676 = G__14681;
continue;
} else {
var temp__4425__auto___14682 = cljs.core.seq.call(null,seq__14644_14673);
if(temp__4425__auto___14682){
var seq__14644_14683__$1 = temp__4425__auto___14682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14644_14683__$1)){
var c__14226__auto___14684 = cljs.core.chunk_first.call(null,seq__14644_14683__$1);
var G__14685 = cljs.core.chunk_rest.call(null,seq__14644_14683__$1);
var G__14686 = c__14226__auto___14684;
var G__14687 = cljs.core.count.call(null,c__14226__auto___14684);
var G__14688 = (0);
seq__14644_14673 = G__14685;
chunk__14645_14674 = G__14686;
count__14646_14675 = G__14687;
i__14647_14676 = G__14688;
continue;
} else {
var box_14689 = cljs.core.first.call(null,seq__14644_14683__$1);
dommy.core.hide_BANG_.call(null,box_14689);

var G__14690 = cljs.core.next.call(null,seq__14644_14683__$1);
var G__14691 = null;
var G__14692 = (0);
var G__14693 = (0);
seq__14644_14673 = G__14690;
chunk__14645_14674 = G__14691;
count__14646_14675 = G__14692;
i__14647_14676 = G__14693;
continue;
}
} else {
}
}
break;
}

var seq__14648 = cljs.core.seq.call(null,select_boxes);
var chunk__14649 = null;
var count__14650 = (0);
var i__14651 = (0);
while(true){
if((i__14651 < count__14650)){
var box = cljs.core._nth.call(null,chunk__14649,i__14651);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__14694 = seq__14648;
var G__14695 = chunk__14649;
var G__14696 = count__14650;
var G__14697 = (i__14651 + (1));
seq__14648 = G__14694;
chunk__14649 = G__14695;
count__14650 = G__14696;
i__14651 = G__14697;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14648);
if(temp__4425__auto__){
var seq__14648__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14648__$1)){
var c__14226__auto__ = cljs.core.chunk_first.call(null,seq__14648__$1);
var G__14698 = cljs.core.chunk_rest.call(null,seq__14648__$1);
var G__14699 = c__14226__auto__;
var G__14700 = cljs.core.count.call(null,c__14226__auto__);
var G__14701 = (0);
seq__14648 = G__14698;
chunk__14649 = G__14699;
count__14650 = G__14700;
i__14651 = G__14701;
continue;
} else {
var box = cljs.core.first.call(null,seq__14648__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__14702 = cljs.core.next.call(null,seq__14648__$1);
var G__14703 = null;
var G__14704 = (0);
var G__14705 = (0);
seq__14648 = G__14702;
chunk__14649 = G__14703;
count__14650 = G__14704;
i__14651 = G__14705;
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
var seq__14710 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__14711 = null;
var count__14712 = (0);
var i__14713 = (0);
while(true){
if((i__14713 < count__14712)){
var buttons = cljs.core._nth.call(null,chunk__14711,i__14713);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__14714 = seq__14710;
var G__14715 = chunk__14711;
var G__14716 = count__14712;
var G__14717 = (i__14713 + (1));
seq__14710 = G__14714;
chunk__14711 = G__14715;
count__14712 = G__14716;
i__14713 = G__14717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14710);
if(temp__4425__auto__){
var seq__14710__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14710__$1)){
var c__14226__auto__ = cljs.core.chunk_first.call(null,seq__14710__$1);
var G__14718 = cljs.core.chunk_rest.call(null,seq__14710__$1);
var G__14719 = c__14226__auto__;
var G__14720 = cljs.core.count.call(null,c__14226__auto__);
var G__14721 = (0);
seq__14710 = G__14718;
chunk__14711 = G__14719;
count__14712 = G__14720;
i__14713 = G__14721;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__14710__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__14722 = cljs.core.next.call(null,seq__14710__$1);
var G__14723 = null;
var G__14724 = (0);
var G__14725 = (0);
seq__14710 = G__14722;
chunk__14711 = G__14723;
count__14712 = G__14724;
i__14713 = G__14725;
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