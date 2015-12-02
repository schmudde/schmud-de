// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9836_SHARP_){
return dommy.core.closest.call(null,p1__9836_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9837_SHARP_){
return dommy.core.html.call(null,p1__9837_SHARP_);
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
var seq__9850_9862 = cljs.core.seq.call(null,all_boxes);
var chunk__9851_9863 = null;
var count__9852_9864 = (0);
var i__9853_9865 = (0);
while(true){
if((i__9853_9865 < count__9852_9864)){
var box_9866 = cljs.core._nth.call(null,chunk__9851_9863,i__9853_9865);
dommy.core.remove_class_BANG_.call(null,box_9866,"animated");

dommy.core.remove_class_BANG_.call(null,box_9866,"bounce");

dommy.core.show_BANG_.call(null,box_9866);

dommy.core.set_px_BANG_.call(null,box_9866,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9866,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9867 = seq__9850_9862;
var G__9868 = chunk__9851_9863;
var G__9869 = count__9852_9864;
var G__9870 = (i__9853_9865 + (1));
seq__9850_9862 = G__9867;
chunk__9851_9863 = G__9868;
count__9852_9864 = G__9869;
i__9853_9865 = G__9870;
continue;
} else {
var temp__4425__auto___9871 = cljs.core.seq.call(null,seq__9850_9862);
if(temp__4425__auto___9871){
var seq__9850_9872__$1 = temp__4425__auto___9871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9850_9872__$1)){
var c__9436__auto___9873 = cljs.core.chunk_first.call(null,seq__9850_9872__$1);
var G__9874 = cljs.core.chunk_rest.call(null,seq__9850_9872__$1);
var G__9875 = c__9436__auto___9873;
var G__9876 = cljs.core.count.call(null,c__9436__auto___9873);
var G__9877 = (0);
seq__9850_9862 = G__9874;
chunk__9851_9863 = G__9875;
count__9852_9864 = G__9876;
i__9853_9865 = G__9877;
continue;
} else {
var box_9878 = cljs.core.first.call(null,seq__9850_9872__$1);
dommy.core.remove_class_BANG_.call(null,box_9878,"animated");

dommy.core.remove_class_BANG_.call(null,box_9878,"bounce");

dommy.core.show_BANG_.call(null,box_9878);

dommy.core.set_px_BANG_.call(null,box_9878,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9878,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9879 = cljs.core.next.call(null,seq__9850_9872__$1);
var G__9880 = null;
var G__9881 = (0);
var G__9882 = (0);
seq__9850_9862 = G__9879;
chunk__9851_9863 = G__9880;
count__9852_9864 = G__9881;
i__9853_9865 = G__9882;
continue;
}
} else {
}
}
break;
}

var seq__9854_9883 = cljs.core.seq.call(null,hide_boxes);
var chunk__9855_9884 = null;
var count__9856_9885 = (0);
var i__9857_9886 = (0);
while(true){
if((i__9857_9886 < count__9856_9885)){
var box_9887 = cljs.core._nth.call(null,chunk__9855_9884,i__9857_9886);
dommy.core.hide_BANG_.call(null,box_9887);

var G__9888 = seq__9854_9883;
var G__9889 = chunk__9855_9884;
var G__9890 = count__9856_9885;
var G__9891 = (i__9857_9886 + (1));
seq__9854_9883 = G__9888;
chunk__9855_9884 = G__9889;
count__9856_9885 = G__9890;
i__9857_9886 = G__9891;
continue;
} else {
var temp__4425__auto___9892 = cljs.core.seq.call(null,seq__9854_9883);
if(temp__4425__auto___9892){
var seq__9854_9893__$1 = temp__4425__auto___9892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9854_9893__$1)){
var c__9436__auto___9894 = cljs.core.chunk_first.call(null,seq__9854_9893__$1);
var G__9895 = cljs.core.chunk_rest.call(null,seq__9854_9893__$1);
var G__9896 = c__9436__auto___9894;
var G__9897 = cljs.core.count.call(null,c__9436__auto___9894);
var G__9898 = (0);
seq__9854_9883 = G__9895;
chunk__9855_9884 = G__9896;
count__9856_9885 = G__9897;
i__9857_9886 = G__9898;
continue;
} else {
var box_9899 = cljs.core.first.call(null,seq__9854_9893__$1);
dommy.core.hide_BANG_.call(null,box_9899);

var G__9900 = cljs.core.next.call(null,seq__9854_9893__$1);
var G__9901 = null;
var G__9902 = (0);
var G__9903 = (0);
seq__9854_9883 = G__9900;
chunk__9855_9884 = G__9901;
count__9856_9885 = G__9902;
i__9857_9886 = G__9903;
continue;
}
} else {
}
}
break;
}

var seq__9858 = cljs.core.seq.call(null,select_boxes);
var chunk__9859 = null;
var count__9860 = (0);
var i__9861 = (0);
while(true){
if((i__9861 < count__9860)){
var box = cljs.core._nth.call(null,chunk__9859,i__9861);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9904 = seq__9858;
var G__9905 = chunk__9859;
var G__9906 = count__9860;
var G__9907 = (i__9861 + (1));
seq__9858 = G__9904;
chunk__9859 = G__9905;
count__9860 = G__9906;
i__9861 = G__9907;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9858);
if(temp__4425__auto__){
var seq__9858__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9858__$1)){
var c__9436__auto__ = cljs.core.chunk_first.call(null,seq__9858__$1);
var G__9908 = cljs.core.chunk_rest.call(null,seq__9858__$1);
var G__9909 = c__9436__auto__;
var G__9910 = cljs.core.count.call(null,c__9436__auto__);
var G__9911 = (0);
seq__9858 = G__9908;
chunk__9859 = G__9909;
count__9860 = G__9910;
i__9861 = G__9911;
continue;
} else {
var box = cljs.core.first.call(null,seq__9858__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9912 = cljs.core.next.call(null,seq__9858__$1);
var G__9913 = null;
var G__9914 = (0);
var G__9915 = (0);
seq__9858 = G__9912;
chunk__9859 = G__9913;
count__9860 = G__9914;
i__9861 = G__9915;
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
var seq__9920 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9921 = null;
var count__9922 = (0);
var i__9923 = (0);
while(true){
if((i__9923 < count__9922)){
var buttons = cljs.core._nth.call(null,chunk__9921,i__9923);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9924 = seq__9920;
var G__9925 = chunk__9921;
var G__9926 = count__9922;
var G__9927 = (i__9923 + (1));
seq__9920 = G__9924;
chunk__9921 = G__9925;
count__9922 = G__9926;
i__9923 = G__9927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9920);
if(temp__4425__auto__){
var seq__9920__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9920__$1)){
var c__9436__auto__ = cljs.core.chunk_first.call(null,seq__9920__$1);
var G__9928 = cljs.core.chunk_rest.call(null,seq__9920__$1);
var G__9929 = c__9436__auto__;
var G__9930 = cljs.core.count.call(null,c__9436__auto__);
var G__9931 = (0);
seq__9920 = G__9928;
chunk__9921 = G__9929;
count__9922 = G__9930;
i__9923 = G__9931;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9920__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9932 = cljs.core.next.call(null,seq__9920__$1);
var G__9933 = null;
var G__9934 = (0);
var G__9935 = (0);
seq__9920 = G__9932;
chunk__9921 = G__9933;
count__9922 = G__9934;
i__9923 = G__9935;
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