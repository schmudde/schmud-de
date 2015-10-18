// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){
return console.log("You clicked",e.selectedTarget);
});
schmud_de.filter.filterer = (function schmud_de$filter$filterer(){
cljs.core.println.call(null,dommy.core.html.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)])));

var buttons_9310 = dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li"));
cljs.core.println.call(null,dommy.core.html.call(null,cljs.core.first.call(null,buttons_9310)));

cljs.core.println.call(null,cljs.core.first.call(null,buttons_9310),dommy.core.listen_BANG_.call(null,cljs.core.second.call(null,buttons_9310),new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler));

var seq__9306 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9307 = null;
var count__9308 = (0);
var i__9309 = (0);
while(true){
if((i__9309 < count__9308)){
var buttons = cljs.core._nth.call(null,chunk__9307,i__9309);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9311 = seq__9306;
var G__9312 = chunk__9307;
var G__9313 = count__9308;
var G__9314 = (i__9309 + (1));
seq__9306 = G__9311;
chunk__9307 = G__9312;
count__9308 = G__9313;
i__9309 = G__9314;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9306);
if(temp__4425__auto__){
var seq__9306__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9306__$1)){
var c__8902__auto__ = cljs.core.chunk_first.call(null,seq__9306__$1);
var G__9315 = cljs.core.chunk_rest.call(null,seq__9306__$1);
var G__9316 = c__8902__auto__;
var G__9317 = cljs.core.count.call(null,c__8902__auto__);
var G__9318 = (0);
seq__9306 = G__9315;
chunk__9307 = G__9316;
count__9308 = G__9317;
i__9309 = G__9318;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9306__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9319 = cljs.core.next.call(null,seq__9306__$1);
var G__9320 = null;
var G__9321 = (0);
var G__9322 = (0);
seq__9306 = G__9319;
chunk__9307 = G__9320;
count__9308 = G__9321;
i__9309 = G__9322;
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