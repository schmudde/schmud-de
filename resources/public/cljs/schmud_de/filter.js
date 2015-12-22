// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9781_SHARP_){
return dommy.core.closest.call(null,p1__9781_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9782_SHARP_){
return dommy.core.html.call(null,p1__9782_SHARP_);
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
var seq__9795_9807 = cljs.core.seq.call(null,all_boxes);
var chunk__9796_9808 = null;
var count__9797_9809 = (0);
var i__9798_9810 = (0);
while(true){
if((i__9798_9810 < count__9797_9809)){
var box_9811 = cljs.core._nth.call(null,chunk__9796_9808,i__9798_9810);
dommy.core.remove_class_BANG_.call(null,box_9811,"animated");

dommy.core.remove_class_BANG_.call(null,box_9811,"bounce");

dommy.core.show_BANG_.call(null,box_9811);

dommy.core.set_px_BANG_.call(null,box_9811,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9811,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9812 = seq__9795_9807;
var G__9813 = chunk__9796_9808;
var G__9814 = count__9797_9809;
var G__9815 = (i__9798_9810 + (1));
seq__9795_9807 = G__9812;
chunk__9796_9808 = G__9813;
count__9797_9809 = G__9814;
i__9798_9810 = G__9815;
continue;
} else {
var temp__4425__auto___9816 = cljs.core.seq.call(null,seq__9795_9807);
if(temp__4425__auto___9816){
var seq__9795_9817__$1 = temp__4425__auto___9816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9795_9817__$1)){
var c__9381__auto___9818 = cljs.core.chunk_first.call(null,seq__9795_9817__$1);
var G__9819 = cljs.core.chunk_rest.call(null,seq__9795_9817__$1);
var G__9820 = c__9381__auto___9818;
var G__9821 = cljs.core.count.call(null,c__9381__auto___9818);
var G__9822 = (0);
seq__9795_9807 = G__9819;
chunk__9796_9808 = G__9820;
count__9797_9809 = G__9821;
i__9798_9810 = G__9822;
continue;
} else {
var box_9823 = cljs.core.first.call(null,seq__9795_9817__$1);
dommy.core.remove_class_BANG_.call(null,box_9823,"animated");

dommy.core.remove_class_BANG_.call(null,box_9823,"bounce");

dommy.core.show_BANG_.call(null,box_9823);

dommy.core.set_px_BANG_.call(null,box_9823,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9823,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9824 = cljs.core.next.call(null,seq__9795_9817__$1);
var G__9825 = null;
var G__9826 = (0);
var G__9827 = (0);
seq__9795_9807 = G__9824;
chunk__9796_9808 = G__9825;
count__9797_9809 = G__9826;
i__9798_9810 = G__9827;
continue;
}
} else {
}
}
break;
}

var seq__9799_9828 = cljs.core.seq.call(null,hide_boxes);
var chunk__9800_9829 = null;
var count__9801_9830 = (0);
var i__9802_9831 = (0);
while(true){
if((i__9802_9831 < count__9801_9830)){
var box_9832 = cljs.core._nth.call(null,chunk__9800_9829,i__9802_9831);
dommy.core.hide_BANG_.call(null,box_9832);

var G__9833 = seq__9799_9828;
var G__9834 = chunk__9800_9829;
var G__9835 = count__9801_9830;
var G__9836 = (i__9802_9831 + (1));
seq__9799_9828 = G__9833;
chunk__9800_9829 = G__9834;
count__9801_9830 = G__9835;
i__9802_9831 = G__9836;
continue;
} else {
var temp__4425__auto___9837 = cljs.core.seq.call(null,seq__9799_9828);
if(temp__4425__auto___9837){
var seq__9799_9838__$1 = temp__4425__auto___9837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9799_9838__$1)){
var c__9381__auto___9839 = cljs.core.chunk_first.call(null,seq__9799_9838__$1);
var G__9840 = cljs.core.chunk_rest.call(null,seq__9799_9838__$1);
var G__9841 = c__9381__auto___9839;
var G__9842 = cljs.core.count.call(null,c__9381__auto___9839);
var G__9843 = (0);
seq__9799_9828 = G__9840;
chunk__9800_9829 = G__9841;
count__9801_9830 = G__9842;
i__9802_9831 = G__9843;
continue;
} else {
var box_9844 = cljs.core.first.call(null,seq__9799_9838__$1);
dommy.core.hide_BANG_.call(null,box_9844);

var G__9845 = cljs.core.next.call(null,seq__9799_9838__$1);
var G__9846 = null;
var G__9847 = (0);
var G__9848 = (0);
seq__9799_9828 = G__9845;
chunk__9800_9829 = G__9846;
count__9801_9830 = G__9847;
i__9802_9831 = G__9848;
continue;
}
} else {
}
}
break;
}

var seq__9803 = cljs.core.seq.call(null,select_boxes);
var chunk__9804 = null;
var count__9805 = (0);
var i__9806 = (0);
while(true){
if((i__9806 < count__9805)){
var box = cljs.core._nth.call(null,chunk__9804,i__9806);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9849 = seq__9803;
var G__9850 = chunk__9804;
var G__9851 = count__9805;
var G__9852 = (i__9806 + (1));
seq__9803 = G__9849;
chunk__9804 = G__9850;
count__9805 = G__9851;
i__9806 = G__9852;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9803);
if(temp__4425__auto__){
var seq__9803__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9803__$1)){
var c__9381__auto__ = cljs.core.chunk_first.call(null,seq__9803__$1);
var G__9853 = cljs.core.chunk_rest.call(null,seq__9803__$1);
var G__9854 = c__9381__auto__;
var G__9855 = cljs.core.count.call(null,c__9381__auto__);
var G__9856 = (0);
seq__9803 = G__9853;
chunk__9804 = G__9854;
count__9805 = G__9855;
i__9806 = G__9856;
continue;
} else {
var box = cljs.core.first.call(null,seq__9803__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9857 = cljs.core.next.call(null,seq__9803__$1);
var G__9858 = null;
var G__9859 = (0);
var G__9860 = (0);
seq__9803 = G__9857;
chunk__9804 = G__9858;
count__9805 = G__9859;
i__9806 = G__9860;
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
var seq__9865 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9866 = null;
var count__9867 = (0);
var i__9868 = (0);
while(true){
if((i__9868 < count__9867)){
var buttons = cljs.core._nth.call(null,chunk__9866,i__9868);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9869 = seq__9865;
var G__9870 = chunk__9866;
var G__9871 = count__9867;
var G__9872 = (i__9868 + (1));
seq__9865 = G__9869;
chunk__9866 = G__9870;
count__9867 = G__9871;
i__9868 = G__9872;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9865);
if(temp__4425__auto__){
var seq__9865__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9865__$1)){
var c__9381__auto__ = cljs.core.chunk_first.call(null,seq__9865__$1);
var G__9873 = cljs.core.chunk_rest.call(null,seq__9865__$1);
var G__9874 = c__9381__auto__;
var G__9875 = cljs.core.count.call(null,c__9381__auto__);
var G__9876 = (0);
seq__9865 = G__9873;
chunk__9866 = G__9874;
count__9867 = G__9875;
i__9868 = G__9876;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9865__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9877 = cljs.core.next.call(null,seq__9865__$1);
var G__9878 = null;
var G__9879 = (0);
var G__9880 = (0);
seq__9865 = G__9877;
chunk__9866 = G__9878;
count__9867 = G__9879;
i__9868 = G__9880;
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