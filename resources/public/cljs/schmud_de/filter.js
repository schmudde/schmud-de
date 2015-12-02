// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9807_SHARP_){
return dommy.core.closest.call(null,p1__9807_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9808_SHARP_){
return dommy.core.html.call(null,p1__9808_SHARP_);
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
var seq__9821_9833 = cljs.core.seq.call(null,all_boxes);
var chunk__9822_9834 = null;
var count__9823_9835 = (0);
var i__9824_9836 = (0);
while(true){
if((i__9824_9836 < count__9823_9835)){
var box_9837 = cljs.core._nth.call(null,chunk__9822_9834,i__9824_9836);
dommy.core.remove_class_BANG_.call(null,box_9837,"animated");

dommy.core.remove_class_BANG_.call(null,box_9837,"bounce");

dommy.core.show_BANG_.call(null,box_9837);

dommy.core.set_px_BANG_.call(null,box_9837,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9837,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9838 = seq__9821_9833;
var G__9839 = chunk__9822_9834;
var G__9840 = count__9823_9835;
var G__9841 = (i__9824_9836 + (1));
seq__9821_9833 = G__9838;
chunk__9822_9834 = G__9839;
count__9823_9835 = G__9840;
i__9824_9836 = G__9841;
continue;
} else {
var temp__4425__auto___9842 = cljs.core.seq.call(null,seq__9821_9833);
if(temp__4425__auto___9842){
var seq__9821_9843__$1 = temp__4425__auto___9842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9821_9843__$1)){
var c__9407__auto___9844 = cljs.core.chunk_first.call(null,seq__9821_9843__$1);
var G__9845 = cljs.core.chunk_rest.call(null,seq__9821_9843__$1);
var G__9846 = c__9407__auto___9844;
var G__9847 = cljs.core.count.call(null,c__9407__auto___9844);
var G__9848 = (0);
seq__9821_9833 = G__9845;
chunk__9822_9834 = G__9846;
count__9823_9835 = G__9847;
i__9824_9836 = G__9848;
continue;
} else {
var box_9849 = cljs.core.first.call(null,seq__9821_9843__$1);
dommy.core.remove_class_BANG_.call(null,box_9849,"animated");

dommy.core.remove_class_BANG_.call(null,box_9849,"bounce");

dommy.core.show_BANG_.call(null,box_9849);

dommy.core.set_px_BANG_.call(null,box_9849,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9849,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9850 = cljs.core.next.call(null,seq__9821_9843__$1);
var G__9851 = null;
var G__9852 = (0);
var G__9853 = (0);
seq__9821_9833 = G__9850;
chunk__9822_9834 = G__9851;
count__9823_9835 = G__9852;
i__9824_9836 = G__9853;
continue;
}
} else {
}
}
break;
}

var seq__9825_9854 = cljs.core.seq.call(null,hide_boxes);
var chunk__9826_9855 = null;
var count__9827_9856 = (0);
var i__9828_9857 = (0);
while(true){
if((i__9828_9857 < count__9827_9856)){
var box_9858 = cljs.core._nth.call(null,chunk__9826_9855,i__9828_9857);
dommy.core.hide_BANG_.call(null,box_9858);

var G__9859 = seq__9825_9854;
var G__9860 = chunk__9826_9855;
var G__9861 = count__9827_9856;
var G__9862 = (i__9828_9857 + (1));
seq__9825_9854 = G__9859;
chunk__9826_9855 = G__9860;
count__9827_9856 = G__9861;
i__9828_9857 = G__9862;
continue;
} else {
var temp__4425__auto___9863 = cljs.core.seq.call(null,seq__9825_9854);
if(temp__4425__auto___9863){
var seq__9825_9864__$1 = temp__4425__auto___9863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9825_9864__$1)){
var c__9407__auto___9865 = cljs.core.chunk_first.call(null,seq__9825_9864__$1);
var G__9866 = cljs.core.chunk_rest.call(null,seq__9825_9864__$1);
var G__9867 = c__9407__auto___9865;
var G__9868 = cljs.core.count.call(null,c__9407__auto___9865);
var G__9869 = (0);
seq__9825_9854 = G__9866;
chunk__9826_9855 = G__9867;
count__9827_9856 = G__9868;
i__9828_9857 = G__9869;
continue;
} else {
var box_9870 = cljs.core.first.call(null,seq__9825_9864__$1);
dommy.core.hide_BANG_.call(null,box_9870);

var G__9871 = cljs.core.next.call(null,seq__9825_9864__$1);
var G__9872 = null;
var G__9873 = (0);
var G__9874 = (0);
seq__9825_9854 = G__9871;
chunk__9826_9855 = G__9872;
count__9827_9856 = G__9873;
i__9828_9857 = G__9874;
continue;
}
} else {
}
}
break;
}

var seq__9829 = cljs.core.seq.call(null,select_boxes);
var chunk__9830 = null;
var count__9831 = (0);
var i__9832 = (0);
while(true){
if((i__9832 < count__9831)){
var box = cljs.core._nth.call(null,chunk__9830,i__9832);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9875 = seq__9829;
var G__9876 = chunk__9830;
var G__9877 = count__9831;
var G__9878 = (i__9832 + (1));
seq__9829 = G__9875;
chunk__9830 = G__9876;
count__9831 = G__9877;
i__9832 = G__9878;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9829);
if(temp__4425__auto__){
var seq__9829__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9829__$1)){
var c__9407__auto__ = cljs.core.chunk_first.call(null,seq__9829__$1);
var G__9879 = cljs.core.chunk_rest.call(null,seq__9829__$1);
var G__9880 = c__9407__auto__;
var G__9881 = cljs.core.count.call(null,c__9407__auto__);
var G__9882 = (0);
seq__9829 = G__9879;
chunk__9830 = G__9880;
count__9831 = G__9881;
i__9832 = G__9882;
continue;
} else {
var box = cljs.core.first.call(null,seq__9829__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9883 = cljs.core.next.call(null,seq__9829__$1);
var G__9884 = null;
var G__9885 = (0);
var G__9886 = (0);
seq__9829 = G__9883;
chunk__9830 = G__9884;
count__9831 = G__9885;
i__9832 = G__9886;
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
var seq__9891 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9892 = null;
var count__9893 = (0);
var i__9894 = (0);
while(true){
if((i__9894 < count__9893)){
var buttons = cljs.core._nth.call(null,chunk__9892,i__9894);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9895 = seq__9891;
var G__9896 = chunk__9892;
var G__9897 = count__9893;
var G__9898 = (i__9894 + (1));
seq__9891 = G__9895;
chunk__9892 = G__9896;
count__9893 = G__9897;
i__9894 = G__9898;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9891);
if(temp__4425__auto__){
var seq__9891__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9891__$1)){
var c__9407__auto__ = cljs.core.chunk_first.call(null,seq__9891__$1);
var G__9899 = cljs.core.chunk_rest.call(null,seq__9891__$1);
var G__9900 = c__9407__auto__;
var G__9901 = cljs.core.count.call(null,c__9407__auto__);
var G__9902 = (0);
seq__9891 = G__9899;
chunk__9892 = G__9900;
count__9893 = G__9901;
i__9894 = G__9902;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9891__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9903 = cljs.core.next.call(null,seq__9891__$1);
var G__9904 = null;
var G__9905 = (0);
var G__9906 = (0);
seq__9891 = G__9903;
chunk__9892 = G__9904;
count__9893 = G__9905;
i__9894 = G__9906;
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