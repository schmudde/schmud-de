// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
schmud_de.filter.doc_ready_handler = (function schmud_de$filter$doc_ready_handler(){
cljs.core.println.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)]));

return dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)]),"new text");
});
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){
return console.log("You clicked",e.selectedTarget);
});
schmud_de.filter.filterer = (function schmud_de$filter$filterer(){
cljs.core.println.call(null,dommy.core.html.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)])));

var buttons_5709 = dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li"));
cljs.core.println.call(null,dommy.core.html.call(null,cljs.core.first.call(null,buttons_5709)));

cljs.core.println.call(null,cljs.core.first.call(null,buttons_5709),dommy.core.listen_BANG_.call(null,cljs.core.second.call(null,buttons_5709),new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler));

var seq__5705 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__5706 = null;
var count__5707 = (0);
var i__5708 = (0);
while(true){
if((i__5708 < count__5707)){
var buttons = cljs.core._nth.call(null,chunk__5706,i__5708);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5710 = seq__5705;
var G__5711 = chunk__5706;
var G__5712 = count__5707;
var G__5713 = (i__5708 + (1));
seq__5705 = G__5710;
chunk__5706 = G__5711;
count__5707 = G__5712;
i__5708 = G__5713;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__5705);
if(temp__4425__auto__){
var seq__5705__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5705__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__5705__$1);
var G__5714 = cljs.core.chunk_rest.call(null,seq__5705__$1);
var G__5715 = c__5310__auto__;
var G__5716 = cljs.core.count.call(null,c__5310__auto__);
var G__5717 = (0);
seq__5705 = G__5714;
chunk__5706 = G__5715;
count__5707 = G__5716;
i__5708 = G__5717;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__5705__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__5718 = cljs.core.next.call(null,seq__5705__$1);
var G__5719 = null;
var G__5720 = (0);
var G__5721 = (0);
seq__5705 = G__5718;
chunk__5706 = G__5719;
count__5707 = G__5720;
i__5708 = G__5721;
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