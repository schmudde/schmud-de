// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('clojure.set');
schmud_de.filter.box_parent = (function schmud_de$filter$box_parent(elements,box_class_name){

return cljs.core.map.call(null,(function (p1__9664_SHARP_){
return dommy.core.closest.call(null,p1__9664_SHARP_,box_class_name);
}),elements);
});
schmud_de.filter.htmlize = (function schmud_de$filter$htmlize(elements){
return cljs.core.map.call(null,(function (p1__9665_SHARP_){
return dommy.core.html.call(null,p1__9665_SHARP_);
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
var seq__9678_9690 = cljs.core.seq.call(null,all_boxes);
var chunk__9679_9691 = null;
var count__9680_9692 = (0);
var i__9681_9693 = (0);
while(true){
if((i__9681_9693 < count__9680_9692)){
var box_9694 = cljs.core._nth.call(null,chunk__9679_9691,i__9681_9693);
dommy.core.remove_class_BANG_.call(null,box_9694,"animated");

dommy.core.remove_class_BANG_.call(null,box_9694,"bounce");

dommy.core.show_BANG_.call(null,box_9694);

dommy.core.set_px_BANG_.call(null,box_9694,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9694,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9695 = seq__9678_9690;
var G__9696 = chunk__9679_9691;
var G__9697 = count__9680_9692;
var G__9698 = (i__9681_9693 + (1));
seq__9678_9690 = G__9695;
chunk__9679_9691 = G__9696;
count__9680_9692 = G__9697;
i__9681_9693 = G__9698;
continue;
} else {
var temp__4425__auto___9699 = cljs.core.seq.call(null,seq__9678_9690);
if(temp__4425__auto___9699){
var seq__9678_9700__$1 = temp__4425__auto___9699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9678_9700__$1)){
var c__9264__auto___9701 = cljs.core.chunk_first.call(null,seq__9678_9700__$1);
var G__9702 = cljs.core.chunk_rest.call(null,seq__9678_9700__$1);
var G__9703 = c__9264__auto___9701;
var G__9704 = cljs.core.count.call(null,c__9264__auto___9701);
var G__9705 = (0);
seq__9678_9690 = G__9702;
chunk__9679_9691 = G__9703;
count__9680_9692 = G__9704;
i__9681_9693 = G__9705;
continue;
} else {
var box_9706 = cljs.core.first.call(null,seq__9678_9700__$1);
dommy.core.remove_class_BANG_.call(null,box_9706,"animated");

dommy.core.remove_class_BANG_.call(null,box_9706,"bounce");

dommy.core.show_BANG_.call(null,box_9706);

dommy.core.set_px_BANG_.call(null,box_9706,new cljs.core.Keyword(null,"top","top",-1856271961),dommy.core.px.call(null,box_9706,new cljs.core.Keyword(null,"top","top",-1856271961)));

var G__9707 = cljs.core.next.call(null,seq__9678_9700__$1);
var G__9708 = null;
var G__9709 = (0);
var G__9710 = (0);
seq__9678_9690 = G__9707;
chunk__9679_9691 = G__9708;
count__9680_9692 = G__9709;
i__9681_9693 = G__9710;
continue;
}
} else {
}
}
break;
}

var seq__9682_9711 = cljs.core.seq.call(null,hide_boxes);
var chunk__9683_9712 = null;
var count__9684_9713 = (0);
var i__9685_9714 = (0);
while(true){
if((i__9685_9714 < count__9684_9713)){
var box_9715 = cljs.core._nth.call(null,chunk__9683_9712,i__9685_9714);
dommy.core.hide_BANG_.call(null,box_9715);

var G__9716 = seq__9682_9711;
var G__9717 = chunk__9683_9712;
var G__9718 = count__9684_9713;
var G__9719 = (i__9685_9714 + (1));
seq__9682_9711 = G__9716;
chunk__9683_9712 = G__9717;
count__9684_9713 = G__9718;
i__9685_9714 = G__9719;
continue;
} else {
var temp__4425__auto___9720 = cljs.core.seq.call(null,seq__9682_9711);
if(temp__4425__auto___9720){
var seq__9682_9721__$1 = temp__4425__auto___9720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9682_9721__$1)){
var c__9264__auto___9722 = cljs.core.chunk_first.call(null,seq__9682_9721__$1);
var G__9723 = cljs.core.chunk_rest.call(null,seq__9682_9721__$1);
var G__9724 = c__9264__auto___9722;
var G__9725 = cljs.core.count.call(null,c__9264__auto___9722);
var G__9726 = (0);
seq__9682_9711 = G__9723;
chunk__9683_9712 = G__9724;
count__9684_9713 = G__9725;
i__9685_9714 = G__9726;
continue;
} else {
var box_9727 = cljs.core.first.call(null,seq__9682_9721__$1);
dommy.core.hide_BANG_.call(null,box_9727);

var G__9728 = cljs.core.next.call(null,seq__9682_9721__$1);
var G__9729 = null;
var G__9730 = (0);
var G__9731 = (0);
seq__9682_9711 = G__9728;
chunk__9683_9712 = G__9729;
count__9684_9713 = G__9730;
i__9685_9714 = G__9731;
continue;
}
} else {
}
}
break;
}

var seq__9686 = cljs.core.seq.call(null,select_boxes);
var chunk__9687 = null;
var count__9688 = (0);
var i__9689 = (0);
while(true){
if((i__9689 < count__9688)){
var box = cljs.core._nth.call(null,chunk__9687,i__9689);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9732 = seq__9686;
var G__9733 = chunk__9687;
var G__9734 = count__9688;
var G__9735 = (i__9689 + (1));
seq__9686 = G__9732;
chunk__9687 = G__9733;
count__9688 = G__9734;
i__9689 = G__9735;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9686);
if(temp__4425__auto__){
var seq__9686__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9686__$1)){
var c__9264__auto__ = cljs.core.chunk_first.call(null,seq__9686__$1);
var G__9736 = cljs.core.chunk_rest.call(null,seq__9686__$1);
var G__9737 = c__9264__auto__;
var G__9738 = cljs.core.count.call(null,c__9264__auto__);
var G__9739 = (0);
seq__9686 = G__9736;
chunk__9687 = G__9737;
count__9688 = G__9738;
i__9689 = G__9739;
continue;
} else {
var box = cljs.core.first.call(null,seq__9686__$1);
dommy.core.add_class_BANG_.call(null,box,"animated bounce");

var G__9740 = cljs.core.next.call(null,seq__9686__$1);
var G__9741 = null;
var G__9742 = (0);
var G__9743 = (0);
seq__9686 = G__9740;
chunk__9687 = G__9741;
count__9688 = G__9742;
i__9689 = G__9743;
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
var seq__9748 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9749 = null;
var count__9750 = (0);
var i__9751 = (0);
while(true){
if((i__9751 < count__9750)){
var buttons = cljs.core._nth.call(null,chunk__9749,i__9751);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9752 = seq__9748;
var G__9753 = chunk__9749;
var G__9754 = count__9750;
var G__9755 = (i__9751 + (1));
seq__9748 = G__9752;
chunk__9749 = G__9753;
count__9750 = G__9754;
i__9751 = G__9755;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9748);
if(temp__4425__auto__){
var seq__9748__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9748__$1)){
var c__9264__auto__ = cljs.core.chunk_first.call(null,seq__9748__$1);
var G__9756 = cljs.core.chunk_rest.call(null,seq__9748__$1);
var G__9757 = c__9264__auto__;
var G__9758 = cljs.core.count.call(null,c__9264__auto__);
var G__9759 = (0);
seq__9748 = G__9756;
chunk__9749 = G__9757;
count__9750 = G__9758;
i__9751 = G__9759;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9748__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9760 = cljs.core.next.call(null,seq__9748__$1);
var G__9761 = null;
var G__9762 = (0);
var G__9763 = (0);
seq__9748 = G__9760;
chunk__9749 = G__9761;
count__9750 = G__9762;
i__9751 = G__9763;
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