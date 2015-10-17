// Compiled by ClojureScript 1.7.48 {}
goog.provide('schmud_de.filter');
goog.require('cljs.core');
goog.require('dommy.core');
schmud_de.filter.click_handler = (function schmud_de$filter$click_handler(e){
return console.log("You clicked",e.selectedTarget);
});
schmud_de.filter.filterer = (function schmud_de$filter$filterer(){
cljs.core.println.call(null,dommy.core.html.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h1"))[(0)])));

var buttons_9286 = dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li"));
cljs.core.println.call(null,dommy.core.html.call(null,cljs.core.first.call(null,buttons_9286)));

cljs.core.println.call(null,cljs.core.first.call(null,buttons_9286),dommy.core.listen_BANG_.call(null,cljs.core.second.call(null,buttons_9286),new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler));

var seq__9282 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".filters li")));
var chunk__9283 = null;
var count__9284 = (0);
var i__9285 = (0);
while(true){
if((i__9285 < count__9284)){
var buttons = cljs.core._nth.call(null,chunk__9283,i__9285);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9287 = seq__9282;
var G__9288 = chunk__9283;
var G__9289 = count__9284;
var G__9290 = (i__9285 + (1));
seq__9282 = G__9287;
chunk__9283 = G__9288;
count__9284 = G__9289;
i__9285 = G__9290;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9282);
if(temp__4425__auto__){
var seq__9282__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9282__$1)){
var c__8878__auto__ = cljs.core.chunk_first.call(null,seq__9282__$1);
var G__9291 = cljs.core.chunk_rest.call(null,seq__9282__$1);
var G__9292 = c__8878__auto__;
var G__9293 = cljs.core.count.call(null,c__8878__auto__);
var G__9294 = (0);
seq__9282 = G__9291;
chunk__9283 = G__9292;
count__9284 = G__9293;
i__9285 = G__9294;
continue;
} else {
var buttons = cljs.core.first.call(null,seq__9282__$1);
dommy.core.listen_BANG_.call(null,buttons,new cljs.core.Keyword(null,"click","click",1912301393),schmud_de.filter.click_handler);

var G__9295 = cljs.core.next.call(null,seq__9282__$1);
var G__9296 = null;
var G__9297 = (0);
var G__9298 = (0);
seq__9282 = G__9295;
chunk__9283 = G__9296;
count__9284 = G__9297;
i__9285 = G__9298;
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