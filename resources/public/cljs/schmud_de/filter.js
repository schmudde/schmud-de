// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){
return console.log("You clicked",e.selectedTarget);
});
schmud_de.filter.filterer = (function schmud_de$filter$filterer(){
cljs.core.println.call(null,dommy.core.html.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)])));

var buttons_9307 = dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li"));
cljs.core.println.call(null,dommy.core.html.call(null,cljs.core.first.call(null,buttons_9307)));

cljs.core.println.call(null,cljs.core.first.call(null,buttons_9307),dommy.core.listen_BANG_.call(null,cljs.core.second.call(null,buttons_9307),new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler));

var seq__9303 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9304 = null;
var count__9305 = (0);
var i__9306 = (0);
while(true){
if((i__9306 < count__9305)){
var buttons = cljs.core._nth.call(null,chunk__9304,i__9306);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9308 = seq__9303;
var G__9309 = chunk__9304;
var G__9310 = count__9305;
var G__9311 = (i__9306 + (1));
seq__9303 = G__9308;
chunk__9304 = G__9309;
count__9305 = G__9310;
i__9306 = G__9311;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9303);
if(temp__4425__auto__){
var seq__9303__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9303__$1)){
var c__8899__auto__ = cljs.core.chunk_first.call(null,seq__9303__$1);
var G__9312 = cljs.core.chunk_rest.call(null,seq__9303__$1);
var G__9313 = c__8899__auto__;
var G__9314 = cljs.core.count.call(null,c__8899__auto__);
var G__9315 = (0);
seq__9303 = G__9312;
chunk__9304 = G__9313;
count__9305 = G__9314;
i__9306 = G__9315;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9303__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9316 = cljs.core.next.call(null,seq__9303__$1);
var G__9317 = null;
var G__9318 = (0);
var G__9319 = (0);
seq__9303 = G__9316;
chunk__9304 = G__9317;
count__9305 = G__9318;
i__9306 = G__9319;
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