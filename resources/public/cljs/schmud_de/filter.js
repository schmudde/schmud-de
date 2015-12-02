// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9809_SHARP_){
return dommy.core.closest.call(null,p1__9809_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9810_SHARP_){
return dommy.core.html.call(null,p1__9810_SHARP_);
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
var seq__9823_9835 = cljs.core.seq.call(null,all_boxes);
var chunk__9824_9836 = null;
var count__9825_9837 = (0);
var i__9826_9838 = (0);
while(true){
if((i__9826_9838 < count__9825_9837)){
var box_9839 = cljs.core._nth.call(null,chunk__9824_9836,i__9826_9838);
dommy.core.remove_class_BANG_.call(null,box_9839,"animated");

dommy.core.remove_class_BANG_.call(null,box_9839,"bounce");

dommy.core.show_BANG_.call(null,box_9839);

dommy.core.set_px_BANG_.call(null,box_9839,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9839,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9840 = seq__9823_9835;
var G__9841 = chunk__9824_9836;
var G__9842 = count__9825_9837;
var G__9843 = (i__9826_9838 + (1));
seq__9823_9835 = G__9840;
chunk__9824_9836 = G__9841;
count__9825_9837 = G__9842;
i__9826_9838 = G__9843;
continue;
} else {
var temp__4425__auto___9844 = cljs.core.seq.call(null,seq__9823_9835);
if(temp__4425__auto___9844){
var seq__9823_9845__$1 = temp__4425__auto___9844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9823_9845__$1)){
var c__9409__auto___9846 = cljs.core.chunk_first.call(null,seq__9823_9845__$1);
var G__9847 = cljs.core.chunk_rest.call(null,seq__9823_9845__$1);
var G__9848 = c__9409__auto___9846;
var G__9849 = cljs.core.count.call(null,c__9409__auto___9846);
var G__9850 = (0);
seq__9823_9835 = G__9847;
chunk__9824_9836 = G__9848;
count__9825_9837 = G__9849;
i__9826_9838 = G__9850;
continue;
} else {
var box_9851 = cljs.core.first.call(null,seq__9823_9845__$1);
dommy.core.remove_class_BANG_.call(null,box_9851,"animated");

dommy.core.remove_class_BANG_.call(null,box_9851,"bounce");

dommy.core.show_BANG_.call(null,box_9851);

dommy.core.set_px_BANG_.call(null,box_9851,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9851,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9852 = cljs.core.next.call(null,seq__9823_9845__$1);
var G__9853 = null;
var G__9854 = (0);
var G__9855 = (0);
seq__9823_9835 = G__9852;
chunk__9824_9836 = G__9853;
count__9825_9837 = G__9854;
i__9826_9838 = G__9855;
continue;
}
} else {
}
}
break;
}

var seq__9827_9856 = cljs.core.seq.call(null,hide_boxes);
var chunk__9828_9857 = null;
var count__9829_9858 = (0);
var i__9830_9859 = (0);
while(true){
if((i__9830_9859 < count__9829_9858)){
var box_9860 = cljs.core._nth.call(null,chunk__9828_9857,i__9830_9859);
dommy.core.hide_BANG_.call(null,box_9860);

var G__9861 = seq__9827_9856;
var G__9862 = chunk__9828_9857;
var G__9863 = count__9829_9858;
var G__9864 = (i__9830_9859 + (1));
seq__9827_9856 = G__9861;
chunk__9828_9857 = G__9862;
count__9829_9858 = G__9863;
i__9830_9859 = G__9864;
continue;
} else {
var temp__4425__auto___9865 = cljs.core.seq.call(null,seq__9827_9856);
if(temp__4425__auto___9865){
var seq__9827_9866__$1 = temp__4425__auto___9865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9827_9866__$1)){
var c__9409__auto___9867 = cljs.core.chunk_first.call(null,seq__9827_9866__$1);
var G__9868 = cljs.core.chunk_rest.call(null,seq__9827_9866__$1);
var G__9869 = c__9409__auto___9867;
var G__9870 = cljs.core.count.call(null,c__9409__auto___9867);
var G__9871 = (0);
seq__9827_9856 = G__9868;
chunk__9828_9857 = G__9869;
count__9829_9858 = G__9870;
i__9830_9859 = G__9871;
continue;
} else {
var box_9872 = cljs.core.first.call(null,seq__9827_9866__$1);
dommy.core.hide_BANG_.call(null,box_9872);

var G__9873 = cljs.core.next.call(null,seq__9827_9866__$1);
var G__9874 = null;
var G__9875 = (0);
var G__9876 = (0);
seq__9827_9856 = G__9873;
chunk__9828_9857 = G__9874;
count__9829_9858 = G__9875;
i__9830_9859 = G__9876;
continue;
}
} else {
}
}
break;
}

var seq__9831 = cljs.core.seq.call(null,select_boxes);
var chunk__9832 = null;
var count__9833 = (0);
var i__9834 = (0);
while(true){
if((i__9834 < count__9833)){
var box = cljs.core._nth.call(null,chunk__9832,i__9834);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9877 = seq__9831;
var G__9878 = chunk__9832;
var G__9879 = count__9833;
var G__9880 = (i__9834 + (1));
seq__9831 = G__9877;
chunk__9832 = G__9878;
count__9833 = G__9879;
i__9834 = G__9880;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9831);
if(temp__4425__auto__){
var seq__9831__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9831__$1)){
var c__9409__auto__ = cljs.core.chunk_first.call(null,seq__9831__$1);
var G__9881 = cljs.core.chunk_rest.call(null,seq__9831__$1);
var G__9882 = c__9409__auto__;
var G__9883 = cljs.core.count.call(null,c__9409__auto__);
var G__9884 = (0);
seq__9831 = G__9881;
chunk__9832 = G__9882;
count__9833 = G__9883;
i__9834 = G__9884;
continue;
} else {
var box = cljs.core.first.call(null,seq__9831__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9885 = cljs.core.next.call(null,seq__9831__$1);
var G__9886 = null;
var G__9887 = (0);
var G__9888 = (0);
seq__9831 = G__9885;
chunk__9832 = G__9886;
count__9833 = G__9887;
i__9834 = G__9888;
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
var seq__9893 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9894 = null;
var count__9895 = (0);
var i__9896 = (0);
while(true){
if((i__9896 < count__9895)){
var buttons = cljs.core._nth.call(null,chunk__9894,i__9896);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9897 = seq__9893;
var G__9898 = chunk__9894;
var G__9899 = count__9895;
var G__9900 = (i__9896 + (1));
seq__9893 = G__9897;
chunk__9894 = G__9898;
count__9895 = G__9899;
i__9896 = G__9900;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9893);
if(temp__4425__auto__){
var seq__9893__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9893__$1)){
var c__9409__auto__ = cljs.core.chunk_first.call(null,seq__9893__$1);
var G__9901 = cljs.core.chunk_rest.call(null,seq__9893__$1);
var G__9902 = c__9409__auto__;
var G__9903 = cljs.core.count.call(null,c__9409__auto__);
var G__9904 = (0);
seq__9893 = G__9901;
chunk__9894 = G__9902;
count__9895 = G__9903;
i__9896 = G__9904;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9893__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9905 = cljs.core.next.call(null,seq__9893__$1);
var G__9906 = null;
var G__9907 = (0);
var G__9908 = (0);
seq__9893 = G__9905;
chunk__9894 = G__9906;
count__9895 = G__9907;
i__9896 = G__9908;
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