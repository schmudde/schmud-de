// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements){
return cljs.core.map.call(null,(function (p1__5701_SHARP_){
return dommy.core.closest.call(null,p1__5701_SHARP_,".project-box");
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__5702_SHARP_){
return dommy.core.html.call(null,p1__5702_SHARP_);
}),elements);
});
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){
var class$ = dommy.core.text.call(null,e.currentTarget);
var elements = dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,cljs.core.keyword.call(null,[cljs.core.str("."),cljs.core.str(class$)].join('')))));
var select_boxes = cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),schmud_de.filter.box_parent.call(null,elements));
var all_boxes = dommy.utils.__GT_Array.call(null,document.getElementsByClassName("project-box"));
var hide_boxes = clojure.set.difference.call(null,cljs.core.set.call(null,all_boxes),cljs.core.set.call(null,select_boxes));
var seq__5711_5719 = cljs.core.seq.call(null,all_boxes);
var chunk__5712_5720 = null;
var count__5713_5721 = (0);
var i__5714_5722 = (0);
while(true){
if((i__5714_5722 < count__5713_5721)){
var box_5723 = cljs.core._nth.call(null,chunk__5712_5720,i__5714_5722);
dommy.core.show_BANG_.call(null,box_5723);

var G__5724 = seq__5711_5719;
var G__5725 = chunk__5712_5720;
var G__5726 = count__5713_5721;
var G__5727 = (i__5714_5722 + (1));
seq__5711_5719 = G__5724;
chunk__5712_5720 = G__5725;
count__5713_5721 = G__5726;
i__5714_5722 = G__5727;
continue;
} else {
var temp__4425__auto___5728 = cljs.core.seq.call(null,seq__5711_5719);
if(temp__4425__auto___5728){
var seq__5711_5729__$1 = temp__4425__auto___5728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5711_5729__$1)){
var c__5310__auto___5730 = cljs.core.chunk_first.call(null,seq__5711_5729__$1);
var G__5731 = cljs.core.chunk_rest.call(null,seq__5711_5729__$1);
var G__5732 = c__5310__auto___5730;
var G__5733 = cljs.core.count.call(null,c__5310__auto___5730);
var G__5734 = (0);
seq__5711_5719 = G__5731;
chunk__5712_5720 = G__5732;
count__5713_5721 = G__5733;
i__5714_5722 = G__5734;
continue;
} else {
var box_5735 = cljs.core.first.call(null,seq__5711_5729__$1);
dommy.core.show_BANG_.call(null,box_5735);

var G__5736 = cljs.core.next.call(null,seq__5711_5729__$1);
var G__5737 = null;
var G__5738 = (0);
var G__5739 = (0);
seq__5711_5719 = G__5736;
chunk__5712_5720 = G__5737;
count__5713_5721 = G__5738;
i__5714_5722 = G__5739;
continue;
}
} else {
}
}
break;
}

var seq__5715 = cljs.core.seq.call(null,hide_boxes);
var chunk__5716 = null;
var count__5717 = (0);
var i__5718 = (0);
while(true){
if((i__5718 < count__5717)){
var box = cljs.core._nth.call(null,chunk__5716,i__5718);
dommy.core.hide_BANG_.call(null,box);

var G__5740 = seq__5715;
var G__5741 = chunk__5716;
var G__5742 = count__5717;
var G__5743 = (i__5718 + (1));
seq__5715 = G__5740;
chunk__5716 = G__5741;
count__5717 = G__5742;
i__5718 = G__5743;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5715);
if(temp__4425__auto__){
var seq__5715__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5715__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__5715__$1);
var G__5744 = cljs.core.chunk_rest.call(null,seq__5715__$1);
var G__5745 = c__5310__auto__;
var G__5746 = cljs.core.count.call(null,c__5310__auto__);
var G__5747 = (0);
seq__5715 = G__5744;
chunk__5716 = G__5745;
count__5717 = G__5746;
i__5718 = G__5747;
continue;
} else {
var box = cljs.core.first.call(null,seq__5715__$1);
dommy.core.hide_BANG_.call(null,box);

var G__5748 = cljs.core.next.call(null,seq__5715__$1);
var G__5749 = null;
var G__5750 = (0);
var G__5751 = (0);
seq__5715 = G__5748;
chunk__5716 = G__5749;
count__5717 = G__5750;
i__5718 = G__5751;
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
var seq__5756 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__5757 = null;
var count__5758 = (0);
var i__5759 = (0);
while(true){
if((i__5759 < count__5758)){
var buttons = cljs.core._nth.call(null,chunk__5757,i__5759);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5760 = seq__5756;
var G__5761 = chunk__5757;
var G__5762 = count__5758;
var G__5763 = (i__5759 + (1));
seq__5756 = G__5760;
chunk__5757 = G__5761;
count__5758 = G__5762;
i__5759 = G__5763;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5756);
if(temp__4425__auto__){
var seq__5756__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5756__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__5756__$1);
var G__5764 = cljs.core.chunk_rest.call(null,seq__5756__$1);
var G__5765 = c__5310__auto__;
var G__5766 = cljs.core.count.call(null,c__5310__auto__);
var G__5767 = (0);
seq__5756 = G__5764;
chunk__5757 = G__5765;
count__5758 = G__5766;
i__5759 = G__5767;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__5756__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5768 = cljs.core.next.call(null,seq__5756__$1);
var G__5769 = null;
var G__5770 = (0);
var G__5771 = (0);
seq__5756 = G__5768;
chunk__5757 = G__5769;
count__5758 = G__5770;
i__5759 = G__5771;
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