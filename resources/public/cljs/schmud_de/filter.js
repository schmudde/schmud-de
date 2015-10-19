// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__5701_SHARP_){
return dommy.core.closest.call(null,p1__5701_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__5702_SHARP_){
return dommy.core.html.call(null,p1__5702_SHARP_);
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
var seq__5715_5727 = cljs.core.seq.call(null,all_boxes);
var chunk__5716_5728 = null;
var count__5717_5729 = (0);
var i__5718_5730 = (0);
while(true){
if((i__5718_5730 < count__5717_5729)){
var box_5731 = cljs.core._nth.call(null,chunk__5716_5728,i__5718_5730);
dommy.core.remove_class_BANG_.call(null,box_5731,"animated");

dommy.core.remove_class_BANG_.call(null,box_5731,"bounce");

dommy.core.show_BANG_.call(null,box_5731);

dommy.core.set_px_BANG_.call(null,box_5731,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_5731,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__5732 = seq__5715_5727;
var G__5733 = chunk__5716_5728;
var G__5734 = count__5717_5729;
var G__5735 = (i__5718_5730 + (1));
seq__5715_5727 = G__5732;
chunk__5716_5728 = G__5733;
count__5717_5729 = G__5734;
i__5718_5730 = G__5735;
continue;
} else {
var temp__4425__auto___5736 = cljs.core.seq.call(null,seq__5715_5727);
if(temp__4425__auto___5736){
var seq__5715_5737__$1 = temp__4425__auto___5736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5715_5737__$1)){
var c__5310__auto___5738 = cljs.core.chunk_first.call(null,seq__5715_5737__$1);
var G__5739 = cljs.core.chunk_rest.call(null,seq__5715_5737__$1);
var G__5740 = c__5310__auto___5738;
var G__5741 = cljs.core.count.call(null,c__5310__auto___5738);
var G__5742 = (0);
seq__5715_5727 = G__5739;
chunk__5716_5728 = G__5740;
count__5717_5729 = G__5741;
i__5718_5730 = G__5742;
continue;
} else {
var box_5743 = cljs.core.first.call(null,seq__5715_5737__$1);
dommy.core.remove_class_BANG_.call(null,box_5743,"animated");

dommy.core.remove_class_BANG_.call(null,box_5743,"bounce");

dommy.core.show_BANG_.call(null,box_5743);

dommy.core.set_px_BANG_.call(null,box_5743,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_5743,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__5744 = cljs.core.next.call(null,seq__5715_5737__$1);
var G__5745 = null;
var G__5746 = (0);
var G__5747 = (0);
seq__5715_5727 = G__5744;
chunk__5716_5728 = G__5745;
count__5717_5729 = G__5746;
i__5718_5730 = G__5747;
continue;
}
} else {
}
}
break;
}

var seq__5719_5748 = cljs.core.seq.call(null,hide_boxes);
var chunk__5720_5749 = null;
var count__5721_5750 = (0);
var i__5722_5751 = (0);
while(true){
if((i__5722_5751 < count__5721_5750)){
var box_5752 = cljs.core._nth.call(null,chunk__5720_5749,i__5722_5751);
dommy.core.hide_BANG_.call(null,box_5752);

var G__5753 = seq__5719_5748;
var G__5754 = chunk__5720_5749;
var G__5755 = count__5721_5750;
var G__5756 = (i__5722_5751 + (1));
seq__5719_5748 = G__5753;
chunk__5720_5749 = G__5754;
count__5721_5750 = G__5755;
i__5722_5751 = G__5756;
continue;
} else {
var temp__4425__auto___5757 = cljs.core.seq.call(null,seq__5719_5748);
if(temp__4425__auto___5757){
var seq__5719_5758__$1 = temp__4425__auto___5757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5719_5758__$1)){
var c__5310__auto___5759 = cljs.core.chunk_first.call(null,seq__5719_5758__$1);
var G__5760 = cljs.core.chunk_rest.call(null,seq__5719_5758__$1);
var G__5761 = c__5310__auto___5759;
var G__5762 = cljs.core.count.call(null,c__5310__auto___5759);
var G__5763 = (0);
seq__5719_5748 = G__5760;
chunk__5720_5749 = G__5761;
count__5721_5750 = G__5762;
i__5722_5751 = G__5763;
continue;
} else {
var box_5764 = cljs.core.first.call(null,seq__5719_5758__$1);
dommy.core.hide_BANG_.call(null,box_5764);

var G__5765 = cljs.core.next.call(null,seq__5719_5758__$1);
var G__5766 = null;
var G__5767 = (0);
var G__5768 = (0);
seq__5719_5748 = G__5765;
chunk__5720_5749 = G__5766;
count__5721_5750 = G__5767;
i__5722_5751 = G__5768;
continue;
}
} else {
}
}
break;
}

var seq__5723 = cljs.core.seq.call(null,select_boxes);
var chunk__5724 = null;
var count__5725 = (0);
var i__5726 = (0);
while(true){
if((i__5726 < count__5725)){
var box = cljs.core._nth.call(null,chunk__5724,i__5726);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__5769 = seq__5723;
var G__5770 = chunk__5724;
var G__5771 = count__5725;
var G__5772 = (i__5726 + (1));
seq__5723 = G__5769;
chunk__5724 = G__5770;
count__5725 = G__5771;
i__5726 = G__5772;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5723);
if(temp__4425__auto__){
var seq__5723__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5723__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__5723__$1);
var G__5773 = cljs.core.chunk_rest.call(null,seq__5723__$1);
var G__5774 = c__5310__auto__;
var G__5775 = cljs.core.count.call(null,c__5310__auto__);
var G__5776 = (0);
seq__5723 = G__5773;
chunk__5724 = G__5774;
count__5725 = G__5775;
i__5726 = G__5776;
continue;
} else {
var box = cljs.core.first.call(null,seq__5723__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__5777 = cljs.core.next.call(null,seq__5723__$1);
var G__5778 = null;
var G__5779 = (0);
var G__5780 = (0);
seq__5723 = G__5777;
chunk__5724 = G__5778;
count__5725 = G__5779;
i__5726 = G__5780;
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
var seq__5785 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__5786 = null;
var count__5787 = (0);
var i__5788 = (0);
while(true){
if((i__5788 < count__5787)){
var buttons = cljs.core._nth.call(null,chunk__5786,i__5788);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5789 = seq__5785;
var G__5790 = chunk__5786;
var G__5791 = count__5787;
var G__5792 = (i__5788 + (1));
seq__5785 = G__5789;
chunk__5786 = G__5790;
count__5787 = G__5791;
i__5788 = G__5792;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5785);
if(temp__4425__auto__){
var seq__5785__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5785__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__5785__$1);
var G__5793 = cljs.core.chunk_rest.call(null,seq__5785__$1);
var G__5794 = c__5310__auto__;
var G__5795 = cljs.core.count.call(null,c__5310__auto__);
var G__5796 = (0);
seq__5785 = G__5793;
chunk__5786 = G__5794;
count__5787 = G__5795;
i__5788 = G__5796;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__5785__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5797 = cljs.core.next.call(null,seq__5785__$1);
var G__5798 = null;
var G__5799 = (0);
var G__5800 = (0);
seq__5785 = G__5797;
chunk__5786 = G__5798;
count__5787 = G__5799;
i__5788 = G__5800;
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