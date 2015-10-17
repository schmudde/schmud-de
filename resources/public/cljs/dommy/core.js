// Compiled by ClojureScript 1.7.48 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4526__auto__ = elem.textContent;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(){
var args6378 = [];
var len__5565__auto___6381 = arguments.length;
var i__5566__auto___6382 = (0);
while(true){
if((i__5566__auto___6382 < len__5565__auto___6381)){
args6378.push((arguments[i__5566__auto___6382]));

var G__6383 = (i__5566__auto___6382 + (1));
i__5566__auto___6382 = G__6383;
continue;
} else {
}
break;
}

var G__6380 = args6378.length;
switch (G__6380) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6378.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var args6385 = [];
var len__5565__auto___6388 = arguments.length;
var i__5566__auto___6389 = (0);
while(true){
if((i__5566__auto___6389 < len__5565__auto___6388)){
args6385.push((arguments[i__5566__auto___6389]));

var G__6390 = (i__5566__auto___6389 + (1));
i__5566__auto___6389 = G__6390;
continue;
} else {
}
break;
}

var G__6387 = args6385.length;
switch (G__6387) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6385.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var args6393 = [];
var len__5565__auto___6396 = arguments.length;
var i__5566__auto___6397 = (0);
while(true){
if((i__5566__auto___6397 < len__5565__auto___6396)){
args6393.push((arguments[i__5566__auto___6397]));

var G__6398 = (i__5566__auto___6397 + (1));
i__5566__auto___6397 = G__6398;
continue;
} else {
}
break;
}

var G__6395 = args6393.length;
switch (G__6395) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6393.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6392_SHARP_){
return !((p1__6392_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6408 = arguments.length;
var i__5566__auto___6409 = (0);
while(true){
if((i__5566__auto___6409 < len__5565__auto___6408)){
args__5572__auto__.push((arguments[i__5566__auto___6409]));

var G__6410 = (i__5566__auto___6409 + (1));
i__5566__auto___6409 = G__6410;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__6402_6411 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6403_6412 = null;
var count__6404_6413 = (0);
var i__6405_6414 = (0);
while(true){
if((i__6405_6414 < count__6404_6413)){
var vec__6406_6415 = cljs.core._nth.call(null,chunk__6403_6412,i__6405_6414);
var k_6416 = cljs.core.nth.call(null,vec__6406_6415,(0),null);
var v_6417 = cljs.core.nth.call(null,vec__6406_6415,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6416),v_6417);

var G__6418 = seq__6402_6411;
var G__6419 = chunk__6403_6412;
var G__6420 = count__6404_6413;
var G__6421 = (i__6405_6414 + (1));
seq__6402_6411 = G__6418;
chunk__6403_6412 = G__6419;
count__6404_6413 = G__6420;
i__6405_6414 = G__6421;
continue;
} else {
var temp__4425__auto___6422 = cljs.core.seq.call(null,seq__6402_6411);
if(temp__4425__auto___6422){
var seq__6402_6423__$1 = temp__4425__auto___6422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6402_6423__$1)){
var c__5310__auto___6424 = cljs.core.chunk_first.call(null,seq__6402_6423__$1);
var G__6425 = cljs.core.chunk_rest.call(null,seq__6402_6423__$1);
var G__6426 = c__5310__auto___6424;
var G__6427 = cljs.core.count.call(null,c__5310__auto___6424);
var G__6428 = (0);
seq__6402_6411 = G__6425;
chunk__6403_6412 = G__6426;
count__6404_6413 = G__6427;
i__6405_6414 = G__6428;
continue;
} else {
var vec__6407_6429 = cljs.core.first.call(null,seq__6402_6423__$1);
var k_6430 = cljs.core.nth.call(null,vec__6407_6429,(0),null);
var v_6431 = cljs.core.nth.call(null,vec__6407_6429,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_6430),v_6431);

var G__6432 = cljs.core.next.call(null,seq__6402_6423__$1);
var G__6433 = null;
var G__6434 = (0);
var G__6435 = (0);
seq__6402_6411 = G__6432;
chunk__6403_6412 = G__6433;
count__6404_6413 = G__6434;
i__6405_6414 = G__6435;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6400){
var G__6401 = cljs.core.first.call(null,seq6400);
var seq6400__$1 = cljs.core.next.call(null,seq6400);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6401,seq6400__$1);
});
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6442 = arguments.length;
var i__5566__auto___6443 = (0);
while(true){
if((i__5566__auto___6443 < len__5565__auto___6442)){
args__5572__auto__.push((arguments[i__5566__auto___6443]));

var G__6444 = (i__5566__auto___6443 + (1));
i__5566__auto___6443 = G__6444;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__6438_6445 = cljs.core.seq.call(null,keywords);
var chunk__6439_6446 = null;
var count__6440_6447 = (0);
var i__6441_6448 = (0);
while(true){
if((i__6441_6448 < count__6440_6447)){
var kw_6449 = cljs.core._nth.call(null,chunk__6439_6446,i__6441_6448);
style.removeProperty(dommy.utils.as_str.call(null,kw_6449));

var G__6450 = seq__6438_6445;
var G__6451 = chunk__6439_6446;
var G__6452 = count__6440_6447;
var G__6453 = (i__6441_6448 + (1));
seq__6438_6445 = G__6450;
chunk__6439_6446 = G__6451;
count__6440_6447 = G__6452;
i__6441_6448 = G__6453;
continue;
} else {
var temp__4425__auto___6454 = cljs.core.seq.call(null,seq__6438_6445);
if(temp__4425__auto___6454){
var seq__6438_6455__$1 = temp__4425__auto___6454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6438_6455__$1)){
var c__5310__auto___6456 = cljs.core.chunk_first.call(null,seq__6438_6455__$1);
var G__6457 = cljs.core.chunk_rest.call(null,seq__6438_6455__$1);
var G__6458 = c__5310__auto___6456;
var G__6459 = cljs.core.count.call(null,c__5310__auto___6456);
var G__6460 = (0);
seq__6438_6445 = G__6457;
chunk__6439_6446 = G__6458;
count__6440_6447 = G__6459;
i__6441_6448 = G__6460;
continue;
} else {
var kw_6461 = cljs.core.first.call(null,seq__6438_6455__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_6461));

var G__6462 = cljs.core.next.call(null,seq__6438_6455__$1);
var G__6463 = null;
var G__6464 = (0);
var G__6465 = (0);
seq__6438_6445 = G__6462;
chunk__6439_6446 = G__6463;
count__6440_6447 = G__6464;
i__6441_6448 = G__6465;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq6436){
var G__6437 = cljs.core.first.call(null,seq6436);
var seq6436__$1 = cljs.core.next.call(null,seq6436);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6437,seq6436__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6474 = arguments.length;
var i__5566__auto___6475 = (0);
while(true){
if((i__5566__auto___6475 < len__5565__auto___6474)){
args__5572__auto__.push((arguments[i__5566__auto___6475]));

var G__6476 = (i__5566__auto___6475 + (1));
i__5566__auto___6475 = G__6476;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6468_6477 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6469_6478 = null;
var count__6470_6479 = (0);
var i__6471_6480 = (0);
while(true){
if((i__6471_6480 < count__6470_6479)){
var vec__6472_6481 = cljs.core._nth.call(null,chunk__6469_6478,i__6471_6480);
var k_6482 = cljs.core.nth.call(null,vec__6472_6481,(0),null);
var v_6483 = cljs.core.nth.call(null,vec__6472_6481,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6482,[cljs.core.str(v_6483),cljs.core.str("px")].join(''));

var G__6484 = seq__6468_6477;
var G__6485 = chunk__6469_6478;
var G__6486 = count__6470_6479;
var G__6487 = (i__6471_6480 + (1));
seq__6468_6477 = G__6484;
chunk__6469_6478 = G__6485;
count__6470_6479 = G__6486;
i__6471_6480 = G__6487;
continue;
} else {
var temp__4425__auto___6488 = cljs.core.seq.call(null,seq__6468_6477);
if(temp__4425__auto___6488){
var seq__6468_6489__$1 = temp__4425__auto___6488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6468_6489__$1)){
var c__5310__auto___6490 = cljs.core.chunk_first.call(null,seq__6468_6489__$1);
var G__6491 = cljs.core.chunk_rest.call(null,seq__6468_6489__$1);
var G__6492 = c__5310__auto___6490;
var G__6493 = cljs.core.count.call(null,c__5310__auto___6490);
var G__6494 = (0);
seq__6468_6477 = G__6491;
chunk__6469_6478 = G__6492;
count__6470_6479 = G__6493;
i__6471_6480 = G__6494;
continue;
} else {
var vec__6473_6495 = cljs.core.first.call(null,seq__6468_6489__$1);
var k_6496 = cljs.core.nth.call(null,vec__6473_6495,(0),null);
var v_6497 = cljs.core.nth.call(null,vec__6473_6495,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_6496,[cljs.core.str(v_6497),cljs.core.str("px")].join(''));

var G__6498 = cljs.core.next.call(null,seq__6468_6489__$1);
var G__6499 = null;
var G__6500 = (0);
var G__6501 = (0);
seq__6468_6477 = G__6498;
chunk__6469_6478 = G__6499;
count__6470_6479 = G__6500;
i__6471_6480 = G__6501;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq6466){
var G__6467 = cljs.core.first.call(null,seq6466);
var seq6466__$1 = cljs.core.next.call(null,seq6466);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6467,seq6466__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 * (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 * (set-attr! elem :id "some-id"
 * :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var args6502 = [];
var len__5565__auto___6517 = arguments.length;
var i__5566__auto___6518 = (0);
while(true){
if((i__5566__auto___6518 < len__5565__auto___6517)){
args6502.push((arguments[i__5566__auto___6518]));

var G__6519 = (i__5566__auto___6518 + (1));
i__5566__auto___6518 = G__6519;
continue;
} else {
}
break;
}

var G__6508 = args6502.length;
switch (G__6508) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6502.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5584__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__6509 = elem;
(G__6509[k__$1] = v);

return G__6509;
} else {
var G__6510 = elem;
G__6510.setAttribute(k__$1,v);

return G__6510;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__6511_6521 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__6512_6522 = null;
var count__6513_6523 = (0);
var i__6514_6524 = (0);
while(true){
if((i__6514_6524 < count__6513_6523)){
var vec__6515_6525 = cljs.core._nth.call(null,chunk__6512_6522,i__6514_6524);
var k_6526__$1 = cljs.core.nth.call(null,vec__6515_6525,(0),null);
var v_6527__$1 = cljs.core.nth.call(null,vec__6515_6525,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_6526__$1,v_6527__$1);

var G__6528 = seq__6511_6521;
var G__6529 = chunk__6512_6522;
var G__6530 = count__6513_6523;
var G__6531 = (i__6514_6524 + (1));
seq__6511_6521 = G__6528;
chunk__6512_6522 = G__6529;
count__6513_6523 = G__6530;
i__6514_6524 = G__6531;
continue;
} else {
var temp__4425__auto___6532 = cljs.core.seq.call(null,seq__6511_6521);
if(temp__4425__auto___6532){
var seq__6511_6533__$1 = temp__4425__auto___6532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6511_6533__$1)){
var c__5310__auto___6534 = cljs.core.chunk_first.call(null,seq__6511_6533__$1);
var G__6535 = cljs.core.chunk_rest.call(null,seq__6511_6533__$1);
var G__6536 = c__5310__auto___6534;
var G__6537 = cljs.core.count.call(null,c__5310__auto___6534);
var G__6538 = (0);
seq__6511_6521 = G__6535;
chunk__6512_6522 = G__6536;
count__6513_6523 = G__6537;
i__6514_6524 = G__6538;
continue;
} else {
var vec__6516_6539 = cljs.core.first.call(null,seq__6511_6533__$1);
var k_6540__$1 = cljs.core.nth.call(null,vec__6516_6539,(0),null);
var v_6541__$1 = cljs.core.nth.call(null,vec__6516_6539,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_6540__$1,v_6541__$1);

var G__6542 = cljs.core.next.call(null,seq__6511_6533__$1);
var G__6543 = null;
var G__6544 = (0);
var G__6545 = (0);
seq__6511_6521 = G__6542;
chunk__6512_6522 = G__6543;
count__6513_6523 = G__6544;
i__6514_6524 = G__6545;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6503){
var G__6504 = cljs.core.first.call(null,seq6503);
var seq6503__$1 = cljs.core.next.call(null,seq6503);
var G__6505 = cljs.core.first.call(null,seq6503__$1);
var seq6503__$2 = cljs.core.next.call(null,seq6503__$1);
var G__6506 = cljs.core.first.call(null,seq6503__$2);
var seq6503__$3 = cljs.core.next.call(null,seq6503__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6504,G__6505,G__6506,seq6503__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var args6546 = [];
var len__5565__auto___6556 = arguments.length;
var i__5566__auto___6557 = (0);
while(true){
if((i__5566__auto___6557 < len__5565__auto___6556)){
args6546.push((arguments[i__5566__auto___6557]));

var G__6558 = (i__5566__auto___6557 + (1));
i__5566__auto___6557 = G__6558;
continue;
} else {
}
break;
}

var G__6551 = args6546.length;
switch (G__6551) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6546.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_6560__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6560__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_6560__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__6552_6561 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__6553_6562 = null;
var count__6554_6563 = (0);
var i__6555_6564 = (0);
while(true){
if((i__6555_6564 < count__6554_6563)){
var k_6565__$1 = cljs.core._nth.call(null,chunk__6553_6562,i__6555_6564);
dommy.core.remove_attr_BANG_.call(null,elem,k_6565__$1);

var G__6566 = seq__6552_6561;
var G__6567 = chunk__6553_6562;
var G__6568 = count__6554_6563;
var G__6569 = (i__6555_6564 + (1));
seq__6552_6561 = G__6566;
chunk__6553_6562 = G__6567;
count__6554_6563 = G__6568;
i__6555_6564 = G__6569;
continue;
} else {
var temp__4425__auto___6570 = cljs.core.seq.call(null,seq__6552_6561);
if(temp__4425__auto___6570){
var seq__6552_6571__$1 = temp__4425__auto___6570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6552_6571__$1)){
var c__5310__auto___6572 = cljs.core.chunk_first.call(null,seq__6552_6571__$1);
var G__6573 = cljs.core.chunk_rest.call(null,seq__6552_6571__$1);
var G__6574 = c__5310__auto___6572;
var G__6575 = cljs.core.count.call(null,c__5310__auto___6572);
var G__6576 = (0);
seq__6552_6561 = G__6573;
chunk__6553_6562 = G__6574;
count__6554_6563 = G__6575;
i__6555_6564 = G__6576;
continue;
} else {
var k_6577__$1 = cljs.core.first.call(null,seq__6552_6571__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_6577__$1);

var G__6578 = cljs.core.next.call(null,seq__6552_6571__$1);
var G__6579 = null;
var G__6580 = (0);
var G__6581 = (0);
seq__6552_6561 = G__6578;
chunk__6553_6562 = G__6579;
count__6554_6563 = G__6580;
i__6555_6564 = G__6581;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq6547){
var G__6548 = cljs.core.first.call(null,seq6547);
var seq6547__$1 = cljs.core.next.call(null,seq6547);
var G__6549 = cljs.core.first.call(null,seq6547__$1);
var seq6547__$2 = cljs.core.next.call(null,seq6547__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6548,G__6549,seq6547__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var args6582 = [];
var len__5565__auto___6585 = arguments.length;
var i__5566__auto___6586 = (0);
while(true){
if((i__5566__auto___6586 < len__5565__auto___6585)){
args6582.push((arguments[i__5566__auto___6586]));

var G__6587 = (i__5566__auto___6586 + (1));
i__5566__auto___6586 = G__6587;
continue;
} else {
}
break;
}

var G__6584 = args6582.length;
switch (G__6584) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6582.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var args6589 = [];
var len__5565__auto___6607 = arguments.length;
var i__5566__auto___6608 = (0);
while(true){
if((i__5566__auto___6608 < len__5565__auto___6607)){
args6589.push((arguments[i__5566__auto___6608]));

var G__6609 = (i__5566__auto___6608 + (1));
i__5566__auto___6608 = G__6609;
continue;
} else {
}
break;
}

var G__6594 = args6589.length;
switch (G__6594) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6589.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___6611 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___6611)){
var class_list_6612 = temp__4423__auto___6611;
var seq__6595_6613 = cljs.core.seq.call(null,classes__$1);
var chunk__6596_6614 = null;
var count__6597_6615 = (0);
var i__6598_6616 = (0);
while(true){
if((i__6598_6616 < count__6597_6615)){
var c_6617 = cljs.core._nth.call(null,chunk__6596_6614,i__6598_6616);
class_list_6612.add(c_6617);

var G__6618 = seq__6595_6613;
var G__6619 = chunk__6596_6614;
var G__6620 = count__6597_6615;
var G__6621 = (i__6598_6616 + (1));
seq__6595_6613 = G__6618;
chunk__6596_6614 = G__6619;
count__6597_6615 = G__6620;
i__6598_6616 = G__6621;
continue;
} else {
var temp__4425__auto___6622 = cljs.core.seq.call(null,seq__6595_6613);
if(temp__4425__auto___6622){
var seq__6595_6623__$1 = temp__4425__auto___6622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6595_6623__$1)){
var c__5310__auto___6624 = cljs.core.chunk_first.call(null,seq__6595_6623__$1);
var G__6625 = cljs.core.chunk_rest.call(null,seq__6595_6623__$1);
var G__6626 = c__5310__auto___6624;
var G__6627 = cljs.core.count.call(null,c__5310__auto___6624);
var G__6628 = (0);
seq__6595_6613 = G__6625;
chunk__6596_6614 = G__6626;
count__6597_6615 = G__6627;
i__6598_6616 = G__6628;
continue;
} else {
var c_6629 = cljs.core.first.call(null,seq__6595_6623__$1);
class_list_6612.add(c_6629);

var G__6630 = cljs.core.next.call(null,seq__6595_6623__$1);
var G__6631 = null;
var G__6632 = (0);
var G__6633 = (0);
seq__6595_6613 = G__6630;
chunk__6596_6614 = G__6631;
count__6597_6615 = G__6632;
i__6598_6616 = G__6633;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6599_6634 = cljs.core.seq.call(null,classes__$1);
var chunk__6600_6635 = null;
var count__6601_6636 = (0);
var i__6602_6637 = (0);
while(true){
if((i__6602_6637 < count__6601_6636)){
var c_6638 = cljs.core._nth.call(null,chunk__6600_6635,i__6602_6637);
var class_name_6639 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6639,c_6638))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6639 === ""))?c_6638:[cljs.core.str(class_name_6639),cljs.core.str(" "),cljs.core.str(c_6638)].join('')));
}

var G__6640 = seq__6599_6634;
var G__6641 = chunk__6600_6635;
var G__6642 = count__6601_6636;
var G__6643 = (i__6602_6637 + (1));
seq__6599_6634 = G__6640;
chunk__6600_6635 = G__6641;
count__6601_6636 = G__6642;
i__6602_6637 = G__6643;
continue;
} else {
var temp__4425__auto___6644 = cljs.core.seq.call(null,seq__6599_6634);
if(temp__4425__auto___6644){
var seq__6599_6645__$1 = temp__4425__auto___6644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6645__$1)){
var c__5310__auto___6646 = cljs.core.chunk_first.call(null,seq__6599_6645__$1);
var G__6647 = cljs.core.chunk_rest.call(null,seq__6599_6645__$1);
var G__6648 = c__5310__auto___6646;
var G__6649 = cljs.core.count.call(null,c__5310__auto___6646);
var G__6650 = (0);
seq__6599_6634 = G__6647;
chunk__6600_6635 = G__6648;
count__6601_6636 = G__6649;
i__6602_6637 = G__6650;
continue;
} else {
var c_6651 = cljs.core.first.call(null,seq__6599_6645__$1);
var class_name_6652 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6652,c_6651))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_6652 === ""))?c_6651:[cljs.core.str(class_name_6652),cljs.core.str(" "),cljs.core.str(c_6651)].join('')));
}

var G__6653 = cljs.core.next.call(null,seq__6599_6645__$1);
var G__6654 = null;
var G__6655 = (0);
var G__6656 = (0);
seq__6599_6634 = G__6653;
chunk__6600_6635 = G__6654;
count__6601_6636 = G__6655;
i__6602_6637 = G__6656;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__6603_6657 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__6604_6658 = null;
var count__6605_6659 = (0);
var i__6606_6660 = (0);
while(true){
if((i__6606_6660 < count__6605_6659)){
var c_6661 = cljs.core._nth.call(null,chunk__6604_6658,i__6606_6660);
dommy.core.add_class_BANG_.call(null,elem,c_6661);

var G__6662 = seq__6603_6657;
var G__6663 = chunk__6604_6658;
var G__6664 = count__6605_6659;
var G__6665 = (i__6606_6660 + (1));
seq__6603_6657 = G__6662;
chunk__6604_6658 = G__6663;
count__6605_6659 = G__6664;
i__6606_6660 = G__6665;
continue;
} else {
var temp__4425__auto___6666 = cljs.core.seq.call(null,seq__6603_6657);
if(temp__4425__auto___6666){
var seq__6603_6667__$1 = temp__4425__auto___6666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6603_6667__$1)){
var c__5310__auto___6668 = cljs.core.chunk_first.call(null,seq__6603_6667__$1);
var G__6669 = cljs.core.chunk_rest.call(null,seq__6603_6667__$1);
var G__6670 = c__5310__auto___6668;
var G__6671 = cljs.core.count.call(null,c__5310__auto___6668);
var G__6672 = (0);
seq__6603_6657 = G__6669;
chunk__6604_6658 = G__6670;
count__6605_6659 = G__6671;
i__6606_6660 = G__6672;
continue;
} else {
var c_6673 = cljs.core.first.call(null,seq__6603_6667__$1);
dommy.core.add_class_BANG_.call(null,elem,c_6673);

var G__6674 = cljs.core.next.call(null,seq__6603_6667__$1);
var G__6675 = null;
var G__6676 = (0);
var G__6677 = (0);
seq__6603_6657 = G__6674;
chunk__6604_6658 = G__6675;
count__6605_6659 = G__6676;
i__6606_6660 = G__6677;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq6590){
var G__6591 = cljs.core.first.call(null,seq6590);
var seq6590__$1 = cljs.core.next.call(null,seq6590);
var G__6592 = cljs.core.first.call(null,seq6590__$1);
var seq6590__$2 = cljs.core.next.call(null,seq6590__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6591,G__6592,seq6590__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var args6678 = [];
var len__5565__auto___6688 = arguments.length;
var i__5566__auto___6689 = (0);
while(true){
if((i__5566__auto___6689 < len__5565__auto___6688)){
args6678.push((arguments[i__5566__auto___6689]));

var G__6690 = (i__5566__auto___6689 + (1));
i__5566__auto___6689 = G__6690;
continue;
} else {
}
break;
}

var G__6683 = args6678.length;
switch (G__6683) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6678.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___6692 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___6692)){
var class_list_6693 = temp__4423__auto___6692;
class_list_6693.remove(c__$1);
} else {
var class_name_6694 = dommy.core.class$.call(null,elem);
var new_class_name_6695 = dommy.utils.remove_class_str.call(null,class_name_6694,c__$1);
if((class_name_6694 === new_class_name_6695)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_6695);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__6684 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__6685 = null;
var count__6686 = (0);
var i__6687 = (0);
while(true){
if((i__6687 < count__6686)){
var c = cljs.core._nth.call(null,chunk__6685,i__6687);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__6696 = seq__6684;
var G__6697 = chunk__6685;
var G__6698 = count__6686;
var G__6699 = (i__6687 + (1));
seq__6684 = G__6696;
chunk__6685 = G__6697;
count__6686 = G__6698;
i__6687 = G__6699;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6684);
if(temp__4425__auto__){
var seq__6684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6684__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__6684__$1);
var G__6700 = cljs.core.chunk_rest.call(null,seq__6684__$1);
var G__6701 = c__5310__auto__;
var G__6702 = cljs.core.count.call(null,c__5310__auto__);
var G__6703 = (0);
seq__6684 = G__6700;
chunk__6685 = G__6701;
count__6686 = G__6702;
i__6687 = G__6703;
continue;
} else {
var c = cljs.core.first.call(null,seq__6684__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__6704 = cljs.core.next.call(null,seq__6684__$1);
var G__6705 = null;
var G__6706 = (0);
var G__6707 = (0);
seq__6684 = G__6704;
chunk__6685 = G__6705;
count__6686 = G__6706;
i__6687 = G__6707;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq6679){
var G__6680 = cljs.core.first.call(null,seq6679);
var seq6679__$1 = cljs.core.next.call(null,seq6679);
var G__6681 = cljs.core.first.call(null,seq6679__$1);
var seq6679__$2 = cljs.core.next.call(null,seq6679__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6680,G__6681,seq6679__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var args6708 = [];
var len__5565__auto___6711 = arguments.length;
var i__5566__auto___6712 = (0);
while(true){
if((i__5566__auto___6712 < len__5565__auto___6711)){
args6708.push((arguments[i__5566__auto___6712]));

var G__6713 = (i__5566__auto___6712 + (1));
i__5566__auto___6712 = G__6713;
continue;
} else {
}
break;
}

var G__6710 = args6708.length;
switch (G__6710) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6708.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___6715 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___6715)){
var class_list_6716 = temp__4423__auto___6715;
class_list_6716.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var args6717 = [];
var len__5565__auto___6720 = arguments.length;
var i__5566__auto___6721 = (0);
while(true){
if((i__5566__auto___6721 < len__5565__auto___6720)){
args6717.push((arguments[i__5566__auto___6721]));

var G__6722 = (i__5566__auto___6721 + (1));
i__5566__auto___6721 = G__6722;
continue;
} else {
}
break;
}

var G__6719 = args6717.length;
switch (G__6719) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6717.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var args6724 = [];
var len__5565__auto___6727 = arguments.length;
var i__5566__auto___6728 = (0);
while(true){
if((i__5566__auto___6728 < len__5565__auto___6727)){
args6724.push((arguments[i__5566__auto___6728]));

var G__6729 = (i__5566__auto___6728 + (1));
i__5566__auto___6728 = G__6729;
continue;
} else {
}
break;
}

var G__6726 = args6724.length;
switch (G__6726) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6724.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var args6731 = [];
var len__5565__auto___6742 = arguments.length;
var i__5566__auto___6743 = (0);
while(true){
if((i__5566__auto___6743 < len__5565__auto___6742)){
args6731.push((arguments[i__5566__auto___6743]));

var G__6744 = (i__5566__auto___6743 + (1));
i__5566__auto___6743 = G__6744;
continue;
} else {
}
break;
}

var G__6736 = args6731.length;
switch (G__6736) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6731.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__6737 = parent;
G__6737.appendChild(child);

return G__6737;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__6738_6746 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6739_6747 = null;
var count__6740_6748 = (0);
var i__6741_6749 = (0);
while(true){
if((i__6741_6749 < count__6740_6748)){
var c_6750 = cljs.core._nth.call(null,chunk__6739_6747,i__6741_6749);
dommy.core.append_BANG_.call(null,parent,c_6750);

var G__6751 = seq__6738_6746;
var G__6752 = chunk__6739_6747;
var G__6753 = count__6740_6748;
var G__6754 = (i__6741_6749 + (1));
seq__6738_6746 = G__6751;
chunk__6739_6747 = G__6752;
count__6740_6748 = G__6753;
i__6741_6749 = G__6754;
continue;
} else {
var temp__4425__auto___6755 = cljs.core.seq.call(null,seq__6738_6746);
if(temp__4425__auto___6755){
var seq__6738_6756__$1 = temp__4425__auto___6755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6738_6756__$1)){
var c__5310__auto___6757 = cljs.core.chunk_first.call(null,seq__6738_6756__$1);
var G__6758 = cljs.core.chunk_rest.call(null,seq__6738_6756__$1);
var G__6759 = c__5310__auto___6757;
var G__6760 = cljs.core.count.call(null,c__5310__auto___6757);
var G__6761 = (0);
seq__6738_6746 = G__6758;
chunk__6739_6747 = G__6759;
count__6740_6748 = G__6760;
i__6741_6749 = G__6761;
continue;
} else {
var c_6762 = cljs.core.first.call(null,seq__6738_6756__$1);
dommy.core.append_BANG_.call(null,parent,c_6762);

var G__6763 = cljs.core.next.call(null,seq__6738_6756__$1);
var G__6764 = null;
var G__6765 = (0);
var G__6766 = (0);
seq__6738_6746 = G__6763;
chunk__6739_6747 = G__6764;
count__6740_6748 = G__6765;
i__6741_6749 = G__6766;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq6732){
var G__6733 = cljs.core.first.call(null,seq6732);
var seq6732__$1 = cljs.core.next.call(null,seq6732);
var G__6734 = cljs.core.first.call(null,seq6732__$1);
var seq6732__$2 = cljs.core.next.call(null,seq6732__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6733,G__6734,seq6732__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var args6767 = [];
var len__5565__auto___6778 = arguments.length;
var i__5566__auto___6779 = (0);
while(true){
if((i__5566__auto___6779 < len__5565__auto___6778)){
args6767.push((arguments[i__5566__auto___6779]));

var G__6780 = (i__5566__auto___6779 + (1));
i__5566__auto___6779 = G__6780;
continue;
} else {
}
break;
}

var G__6772 = args6767.length;
switch (G__6772) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args6767.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__6773 = parent;
G__6773.insertBefore(child,parent.firstChild);

return G__6773;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__6774_6782 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__6775_6783 = null;
var count__6776_6784 = (0);
var i__6777_6785 = (0);
while(true){
if((i__6777_6785 < count__6776_6784)){
var c_6786 = cljs.core._nth.call(null,chunk__6775_6783,i__6777_6785);
dommy.core.prepend_BANG_.call(null,parent,c_6786);

var G__6787 = seq__6774_6782;
var G__6788 = chunk__6775_6783;
var G__6789 = count__6776_6784;
var G__6790 = (i__6777_6785 + (1));
seq__6774_6782 = G__6787;
chunk__6775_6783 = G__6788;
count__6776_6784 = G__6789;
i__6777_6785 = G__6790;
continue;
} else {
var temp__4425__auto___6791 = cljs.core.seq.call(null,seq__6774_6782);
if(temp__4425__auto___6791){
var seq__6774_6792__$1 = temp__4425__auto___6791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6774_6792__$1)){
var c__5310__auto___6793 = cljs.core.chunk_first.call(null,seq__6774_6792__$1);
var G__6794 = cljs.core.chunk_rest.call(null,seq__6774_6792__$1);
var G__6795 = c__5310__auto___6793;
var G__6796 = cljs.core.count.call(null,c__5310__auto___6793);
var G__6797 = (0);
seq__6774_6782 = G__6794;
chunk__6775_6783 = G__6795;
count__6776_6784 = G__6796;
i__6777_6785 = G__6797;
continue;
} else {
var c_6798 = cljs.core.first.call(null,seq__6774_6792__$1);
dommy.core.prepend_BANG_.call(null,parent,c_6798);

var G__6799 = cljs.core.next.call(null,seq__6774_6792__$1);
var G__6800 = null;
var G__6801 = (0);
var G__6802 = (0);
seq__6774_6782 = G__6799;
chunk__6775_6783 = G__6800;
count__6776_6784 = G__6801;
i__6777_6785 = G__6802;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq6768){
var G__6769 = cljs.core.first.call(null,seq6768);
var seq6768__$1 = cljs.core.next.call(null,seq6768);
var G__6770 = cljs.core.first.call(null,seq6768__$1);
var seq6768__$2 = cljs.core.next.call(null,seq6768__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6769,G__6770,seq6768__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___6803 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___6803)){
var next_6804 = temp__4423__auto___6803;
dommy.core.insert_before_BANG_.call(null,elem,next_6804);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var args6805 = [];
var len__5565__auto___6809 = arguments.length;
var i__5566__auto___6810 = (0);
while(true){
if((i__5566__auto___6810 < len__5565__auto___6809)){
args6805.push((arguments[i__5566__auto___6810]));

var G__6811 = (i__5566__auto___6810 + (1));
i__5566__auto___6810 = G__6811;
continue;
} else {
}
break;
}

var G__6807 = args6805.length;
switch (G__6807) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6805.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__6808 = p;
G__6808.removeChild(elem);

return G__6808;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6813){
var vec__6814 = p__6813;
var special_mouse_event = cljs.core.nth.call(null,vec__6814,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__6814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6814,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__6814,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4526__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4514__auto__ = related_target;
if(cljs.core.truth_(and__4514__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4514__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__6814,special_mouse_event,real_mouse_event))
});})(vec__6814,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4514__auto__ = selected_target;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4514__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4526__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6818 = arguments.length;
var i__5566__auto___6819 = (0);
while(true){
if((i__5566__auto___6819 < len__5565__auto___6818)){
args__5572__auto__.push((arguments[i__5566__auto___6819]));

var G__6820 = (i__5566__auto___6819 + (1));
i__5566__auto___6819 = G__6820;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq6815){
var G__6816 = cljs.core.first.call(null,seq6815);
var seq6815__$1 = cljs.core.next.call(null,seq6815);
var G__6817 = cljs.core.first.call(null,seq6815__$1);
var seq6815__$2 = cljs.core.next.call(null,seq6815__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6816,G__6817,seq6815__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 * (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 * (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 * (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6846 = arguments.length;
var i__5566__auto___6847 = (0);
while(true){
if((i__5566__auto___6847 < len__5565__auto___6846)){
args__5572__auto__.push((arguments[i__5566__auto___6847]));

var G__6848 = (i__5566__auto___6847 + (1));
i__5566__auto___6847 = G__6848;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6823_6849 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6850 = cljs.core.nth.call(null,vec__6823_6849,(0),null);
var selector_6851 = cljs.core.nth.call(null,vec__6823_6849,(1),null);
var seq__6824_6852 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6831_6853 = null;
var count__6832_6854 = (0);
var i__6833_6855 = (0);
while(true){
if((i__6833_6855 < count__6832_6854)){
var vec__6840_6856 = cljs.core._nth.call(null,chunk__6831_6853,i__6833_6855);
var orig_type_6857 = cljs.core.nth.call(null,vec__6840_6856,(0),null);
var f_6858 = cljs.core.nth.call(null,vec__6840_6856,(1),null);
var seq__6834_6859 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6857,new cljs.core.PersistentArrayMap.fromArray([orig_type_6857,cljs.core.identity], true, false)));
var chunk__6836_6860 = null;
var count__6837_6861 = (0);
var i__6838_6862 = (0);
while(true){
if((i__6838_6862 < count__6837_6861)){
var vec__6841_6863 = cljs.core._nth.call(null,chunk__6836_6860,i__6838_6862);
var actual_type_6864 = cljs.core.nth.call(null,vec__6841_6863,(0),null);
var factory_6865 = cljs.core.nth.call(null,vec__6841_6863,(1),null);
var canonical_f_6866 = (cljs.core.truth_(selector_6851)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6850,selector_6851):cljs.core.identity).call(null,factory_6865.call(null,f_6858));
dommy.core.update_event_listeners_BANG_.call(null,elem_6850,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6851,actual_type_6864,f_6858], null),canonical_f_6866);

if(cljs.core.truth_(elem_6850.addEventListener)){
elem_6850.addEventListener(cljs.core.name.call(null,actual_type_6864),canonical_f_6866);
} else {
elem_6850.attachEvent(cljs.core.name.call(null,actual_type_6864),canonical_f_6866);
}

var G__6867 = seq__6834_6859;
var G__6868 = chunk__6836_6860;
var G__6869 = count__6837_6861;
var G__6870 = (i__6838_6862 + (1));
seq__6834_6859 = G__6867;
chunk__6836_6860 = G__6868;
count__6837_6861 = G__6869;
i__6838_6862 = G__6870;
continue;
} else {
var temp__4425__auto___6871 = cljs.core.seq.call(null,seq__6834_6859);
if(temp__4425__auto___6871){
var seq__6834_6872__$1 = temp__4425__auto___6871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6834_6872__$1)){
var c__5310__auto___6873 = cljs.core.chunk_first.call(null,seq__6834_6872__$1);
var G__6874 = cljs.core.chunk_rest.call(null,seq__6834_6872__$1);
var G__6875 = c__5310__auto___6873;
var G__6876 = cljs.core.count.call(null,c__5310__auto___6873);
var G__6877 = (0);
seq__6834_6859 = G__6874;
chunk__6836_6860 = G__6875;
count__6837_6861 = G__6876;
i__6838_6862 = G__6877;
continue;
} else {
var vec__6842_6878 = cljs.core.first.call(null,seq__6834_6872__$1);
var actual_type_6879 = cljs.core.nth.call(null,vec__6842_6878,(0),null);
var factory_6880 = cljs.core.nth.call(null,vec__6842_6878,(1),null);
var canonical_f_6881 = (cljs.core.truth_(selector_6851)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6850,selector_6851):cljs.core.identity).call(null,factory_6880.call(null,f_6858));
dommy.core.update_event_listeners_BANG_.call(null,elem_6850,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6851,actual_type_6879,f_6858], null),canonical_f_6881);

if(cljs.core.truth_(elem_6850.addEventListener)){
elem_6850.addEventListener(cljs.core.name.call(null,actual_type_6879),canonical_f_6881);
} else {
elem_6850.attachEvent(cljs.core.name.call(null,actual_type_6879),canonical_f_6881);
}

var G__6882 = cljs.core.next.call(null,seq__6834_6872__$1);
var G__6883 = null;
var G__6884 = (0);
var G__6885 = (0);
seq__6834_6859 = G__6882;
chunk__6836_6860 = G__6883;
count__6837_6861 = G__6884;
i__6838_6862 = G__6885;
continue;
}
} else {
}
}
break;
}

var G__6886 = seq__6824_6852;
var G__6887 = chunk__6831_6853;
var G__6888 = count__6832_6854;
var G__6889 = (i__6833_6855 + (1));
seq__6824_6852 = G__6886;
chunk__6831_6853 = G__6887;
count__6832_6854 = G__6888;
i__6833_6855 = G__6889;
continue;
} else {
var temp__4425__auto___6890 = cljs.core.seq.call(null,seq__6824_6852);
if(temp__4425__auto___6890){
var seq__6824_6891__$1 = temp__4425__auto___6890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6824_6891__$1)){
var c__5310__auto___6892 = cljs.core.chunk_first.call(null,seq__6824_6891__$1);
var G__6893 = cljs.core.chunk_rest.call(null,seq__6824_6891__$1);
var G__6894 = c__5310__auto___6892;
var G__6895 = cljs.core.count.call(null,c__5310__auto___6892);
var G__6896 = (0);
seq__6824_6852 = G__6893;
chunk__6831_6853 = G__6894;
count__6832_6854 = G__6895;
i__6833_6855 = G__6896;
continue;
} else {
var vec__6843_6897 = cljs.core.first.call(null,seq__6824_6891__$1);
var orig_type_6898 = cljs.core.nth.call(null,vec__6843_6897,(0),null);
var f_6899 = cljs.core.nth.call(null,vec__6843_6897,(1),null);
var seq__6825_6900 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6898,new cljs.core.PersistentArrayMap.fromArray([orig_type_6898,cljs.core.identity], true, false)));
var chunk__6827_6901 = null;
var count__6828_6902 = (0);
var i__6829_6903 = (0);
while(true){
if((i__6829_6903 < count__6828_6902)){
var vec__6844_6904 = cljs.core._nth.call(null,chunk__6827_6901,i__6829_6903);
var actual_type_6905 = cljs.core.nth.call(null,vec__6844_6904,(0),null);
var factory_6906 = cljs.core.nth.call(null,vec__6844_6904,(1),null);
var canonical_f_6907 = (cljs.core.truth_(selector_6851)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6850,selector_6851):cljs.core.identity).call(null,factory_6906.call(null,f_6899));
dommy.core.update_event_listeners_BANG_.call(null,elem_6850,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6851,actual_type_6905,f_6899], null),canonical_f_6907);

if(cljs.core.truth_(elem_6850.addEventListener)){
elem_6850.addEventListener(cljs.core.name.call(null,actual_type_6905),canonical_f_6907);
} else {
elem_6850.attachEvent(cljs.core.name.call(null,actual_type_6905),canonical_f_6907);
}

var G__6908 = seq__6825_6900;
var G__6909 = chunk__6827_6901;
var G__6910 = count__6828_6902;
var G__6911 = (i__6829_6903 + (1));
seq__6825_6900 = G__6908;
chunk__6827_6901 = G__6909;
count__6828_6902 = G__6910;
i__6829_6903 = G__6911;
continue;
} else {
var temp__4425__auto___6912__$1 = cljs.core.seq.call(null,seq__6825_6900);
if(temp__4425__auto___6912__$1){
var seq__6825_6913__$1 = temp__4425__auto___6912__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6825_6913__$1)){
var c__5310__auto___6914 = cljs.core.chunk_first.call(null,seq__6825_6913__$1);
var G__6915 = cljs.core.chunk_rest.call(null,seq__6825_6913__$1);
var G__6916 = c__5310__auto___6914;
var G__6917 = cljs.core.count.call(null,c__5310__auto___6914);
var G__6918 = (0);
seq__6825_6900 = G__6915;
chunk__6827_6901 = G__6916;
count__6828_6902 = G__6917;
i__6829_6903 = G__6918;
continue;
} else {
var vec__6845_6919 = cljs.core.first.call(null,seq__6825_6913__$1);
var actual_type_6920 = cljs.core.nth.call(null,vec__6845_6919,(0),null);
var factory_6921 = cljs.core.nth.call(null,vec__6845_6919,(1),null);
var canonical_f_6922 = (cljs.core.truth_(selector_6851)?cljs.core.partial.call(null,dommy.core.live_listener,elem_6850,selector_6851):cljs.core.identity).call(null,factory_6921.call(null,f_6899));
dommy.core.update_event_listeners_BANG_.call(null,elem_6850,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6851,actual_type_6920,f_6899], null),canonical_f_6922);

if(cljs.core.truth_(elem_6850.addEventListener)){
elem_6850.addEventListener(cljs.core.name.call(null,actual_type_6920),canonical_f_6922);
} else {
elem_6850.attachEvent(cljs.core.name.call(null,actual_type_6920),canonical_f_6922);
}

var G__6923 = cljs.core.next.call(null,seq__6825_6913__$1);
var G__6924 = null;
var G__6925 = (0);
var G__6926 = (0);
seq__6825_6900 = G__6923;
chunk__6827_6901 = G__6924;
count__6828_6902 = G__6925;
i__6829_6903 = G__6926;
continue;
}
} else {
}
}
break;
}

var G__6927 = cljs.core.next.call(null,seq__6824_6891__$1);
var G__6928 = null;
var G__6929 = (0);
var G__6930 = (0);
seq__6824_6852 = G__6927;
chunk__6831_6853 = G__6928;
count__6832_6854 = G__6929;
i__6833_6855 = G__6930;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq6821){
var G__6822 = cljs.core.first.call(null,seq6821);
var seq6821__$1 = cljs.core.next.call(null,seq6821);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6822,seq6821__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 * The following forms are allowed, and will remove all handlers
 * that match the parameters passed in:
 * 
 * (unlisten! [elem :.selector] :click event-listener)
 * 
 * (unlisten! [elem :.selector]
 * :click event-listener
 * :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6956 = arguments.length;
var i__5566__auto___6957 = (0);
while(true){
if((i__5566__auto___6957 < len__5565__auto___6956)){
args__5572__auto__.push((arguments[i__5566__auto___6957]));

var G__6958 = (i__5566__auto___6957 + (1));
i__5566__auto___6957 = G__6958;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__6933_6959 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_6960 = cljs.core.nth.call(null,vec__6933_6959,(0),null);
var selector_6961 = cljs.core.nth.call(null,vec__6933_6959,(1),null);
var seq__6934_6962 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__6941_6963 = null;
var count__6942_6964 = (0);
var i__6943_6965 = (0);
while(true){
if((i__6943_6965 < count__6942_6964)){
var vec__6950_6966 = cljs.core._nth.call(null,chunk__6941_6963,i__6943_6965);
var orig_type_6967 = cljs.core.nth.call(null,vec__6950_6966,(0),null);
var f_6968 = cljs.core.nth.call(null,vec__6950_6966,(1),null);
var seq__6944_6969 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_6967,new cljs.core.PersistentArrayMap.fromArray([orig_type_6967,cljs.core.identity], true, false)));
var chunk__6946_6970 = null;
var count__6947_6971 = (0);
var i__6948_6972 = (0);
while(true){
if((i__6948_6972 < count__6947_6971)){
var vec__6951_6973 = cljs.core._nth.call(null,chunk__6946_6970,i__6948_6972);
var actual_type_6974 = cljs.core.nth.call(null,vec__6951_6973,(0),null);
var __6975 = cljs.core.nth.call(null,vec__6951_6973,(1),null);
var keys_6976 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6961,actual_type_6974,f_6968], null);
var canonical_f_6977 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6960),keys_6976);
dommy.core.update_event_listeners_BANG_.call(null,elem_6960,dommy.utils.dissoc_in,keys_6976);

if(cljs.core.truth_(elem_6960.removeEventListener)){
elem_6960.removeEventListener(cljs.core.name.call(null,actual_type_6974),canonical_f_6977);
} else {
elem_6960.detachEvent(cljs.core.name.call(null,actual_type_6974),canonical_f_6977);
}

var G__6978 = seq__6944_6969;
var G__6979 = chunk__6946_6970;
var G__6980 = count__6947_6971;
var G__6981 = (i__6948_6972 + (1));
seq__6944_6969 = G__6978;
chunk__6946_6970 = G__6979;
count__6947_6971 = G__6980;
i__6948_6972 = G__6981;
continue;
} else {
var temp__4425__auto___6982 = cljs.core.seq.call(null,seq__6944_6969);
if(temp__4425__auto___6982){
var seq__6944_6983__$1 = temp__4425__auto___6982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6944_6983__$1)){
var c__5310__auto___6984 = cljs.core.chunk_first.call(null,seq__6944_6983__$1);
var G__6985 = cljs.core.chunk_rest.call(null,seq__6944_6983__$1);
var G__6986 = c__5310__auto___6984;
var G__6987 = cljs.core.count.call(null,c__5310__auto___6984);
var G__6988 = (0);
seq__6944_6969 = G__6985;
chunk__6946_6970 = G__6986;
count__6947_6971 = G__6987;
i__6948_6972 = G__6988;
continue;
} else {
var vec__6952_6989 = cljs.core.first.call(null,seq__6944_6983__$1);
var actual_type_6990 = cljs.core.nth.call(null,vec__6952_6989,(0),null);
var __6991 = cljs.core.nth.call(null,vec__6952_6989,(1),null);
var keys_6992 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6961,actual_type_6990,f_6968], null);
var canonical_f_6993 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6960),keys_6992);
dommy.core.update_event_listeners_BANG_.call(null,elem_6960,dommy.utils.dissoc_in,keys_6992);

if(cljs.core.truth_(elem_6960.removeEventListener)){
elem_6960.removeEventListener(cljs.core.name.call(null,actual_type_6990),canonical_f_6993);
} else {
elem_6960.detachEvent(cljs.core.name.call(null,actual_type_6990),canonical_f_6993);
}

var G__6994 = cljs.core.next.call(null,seq__6944_6983__$1);
var G__6995 = null;
var G__6996 = (0);
var G__6997 = (0);
seq__6944_6969 = G__6994;
chunk__6946_6970 = G__6995;
count__6947_6971 = G__6996;
i__6948_6972 = G__6997;
continue;
}
} else {
}
}
break;
}

var G__6998 = seq__6934_6962;
var G__6999 = chunk__6941_6963;
var G__7000 = count__6942_6964;
var G__7001 = (i__6943_6965 + (1));
seq__6934_6962 = G__6998;
chunk__6941_6963 = G__6999;
count__6942_6964 = G__7000;
i__6943_6965 = G__7001;
continue;
} else {
var temp__4425__auto___7002 = cljs.core.seq.call(null,seq__6934_6962);
if(temp__4425__auto___7002){
var seq__6934_7003__$1 = temp__4425__auto___7002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6934_7003__$1)){
var c__5310__auto___7004 = cljs.core.chunk_first.call(null,seq__6934_7003__$1);
var G__7005 = cljs.core.chunk_rest.call(null,seq__6934_7003__$1);
var G__7006 = c__5310__auto___7004;
var G__7007 = cljs.core.count.call(null,c__5310__auto___7004);
var G__7008 = (0);
seq__6934_6962 = G__7005;
chunk__6941_6963 = G__7006;
count__6942_6964 = G__7007;
i__6943_6965 = G__7008;
continue;
} else {
var vec__6953_7009 = cljs.core.first.call(null,seq__6934_7003__$1);
var orig_type_7010 = cljs.core.nth.call(null,vec__6953_7009,(0),null);
var f_7011 = cljs.core.nth.call(null,vec__6953_7009,(1),null);
var seq__6935_7012 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7010,new cljs.core.PersistentArrayMap.fromArray([orig_type_7010,cljs.core.identity], true, false)));
var chunk__6937_7013 = null;
var count__6938_7014 = (0);
var i__6939_7015 = (0);
while(true){
if((i__6939_7015 < count__6938_7014)){
var vec__6954_7016 = cljs.core._nth.call(null,chunk__6937_7013,i__6939_7015);
var actual_type_7017 = cljs.core.nth.call(null,vec__6954_7016,(0),null);
var __7018 = cljs.core.nth.call(null,vec__6954_7016,(1),null);
var keys_7019 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6961,actual_type_7017,f_7011], null);
var canonical_f_7020 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6960),keys_7019);
dommy.core.update_event_listeners_BANG_.call(null,elem_6960,dommy.utils.dissoc_in,keys_7019);

if(cljs.core.truth_(elem_6960.removeEventListener)){
elem_6960.removeEventListener(cljs.core.name.call(null,actual_type_7017),canonical_f_7020);
} else {
elem_6960.detachEvent(cljs.core.name.call(null,actual_type_7017),canonical_f_7020);
}

var G__7021 = seq__6935_7012;
var G__7022 = chunk__6937_7013;
var G__7023 = count__6938_7014;
var G__7024 = (i__6939_7015 + (1));
seq__6935_7012 = G__7021;
chunk__6937_7013 = G__7022;
count__6938_7014 = G__7023;
i__6939_7015 = G__7024;
continue;
} else {
var temp__4425__auto___7025__$1 = cljs.core.seq.call(null,seq__6935_7012);
if(temp__4425__auto___7025__$1){
var seq__6935_7026__$1 = temp__4425__auto___7025__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6935_7026__$1)){
var c__5310__auto___7027 = cljs.core.chunk_first.call(null,seq__6935_7026__$1);
var G__7028 = cljs.core.chunk_rest.call(null,seq__6935_7026__$1);
var G__7029 = c__5310__auto___7027;
var G__7030 = cljs.core.count.call(null,c__5310__auto___7027);
var G__7031 = (0);
seq__6935_7012 = G__7028;
chunk__6937_7013 = G__7029;
count__6938_7014 = G__7030;
i__6939_7015 = G__7031;
continue;
} else {
var vec__6955_7032 = cljs.core.first.call(null,seq__6935_7026__$1);
var actual_type_7033 = cljs.core.nth.call(null,vec__6955_7032,(0),null);
var __7034 = cljs.core.nth.call(null,vec__6955_7032,(1),null);
var keys_7035 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_6961,actual_type_7033,f_7011], null);
var canonical_f_7036 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_6960),keys_7035);
dommy.core.update_event_listeners_BANG_.call(null,elem_6960,dommy.utils.dissoc_in,keys_7035);

if(cljs.core.truth_(elem_6960.removeEventListener)){
elem_6960.removeEventListener(cljs.core.name.call(null,actual_type_7033),canonical_f_7036);
} else {
elem_6960.detachEvent(cljs.core.name.call(null,actual_type_7033),canonical_f_7036);
}

var G__7037 = cljs.core.next.call(null,seq__6935_7026__$1);
var G__7038 = null;
var G__7039 = (0);
var G__7040 = (0);
seq__6935_7012 = G__7037;
chunk__6937_7013 = G__7038;
count__6938_7014 = G__7039;
i__6939_7015 = G__7040;
continue;
}
} else {
}
}
break;
}

var G__7041 = cljs.core.next.call(null,seq__6934_7003__$1);
var G__7042 = null;
var G__7043 = (0);
var G__7044 = (0);
seq__6934_6962 = G__7041;
chunk__6941_6963 = G__7042;
count__6942_6964 = G__7043;
i__6943_6965 = G__7044;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq6931){
var G__6932 = cljs.core.first.call(null,seq6931);
var seq6931__$1 = cljs.core.next.call(null,seq6931);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6932,seq6931__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___7054 = arguments.length;
var i__5566__auto___7055 = (0);
while(true){
if((i__5566__auto___7055 < len__5565__auto___7054)){
args__5572__auto__.push((arguments[i__5566__auto___7055]));

var G__7056 = (i__5566__auto___7055 + (1));
i__5566__auto___7055 = G__7056;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7047_7057 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7058 = cljs.core.nth.call(null,vec__7047_7057,(0),null);
var selector_7059 = cljs.core.nth.call(null,vec__7047_7057,(1),null);
var seq__7048_7060 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7049_7061 = null;
var count__7050_7062 = (0);
var i__7051_7063 = (0);
while(true){
if((i__7051_7063 < count__7050_7062)){
var vec__7052_7064 = cljs.core._nth.call(null,chunk__7049_7061,i__7051_7063);
var type_7065 = cljs.core.nth.call(null,vec__7052_7064,(0),null);
var f_7066 = cljs.core.nth.call(null,vec__7052_7064,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7065,((function (seq__7048_7060,chunk__7049_7061,count__7050_7062,i__7051_7063,vec__7052_7064,type_7065,f_7066,vec__7047_7057,elem_7058,selector_7059){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7065,dommy$core$this_fn);

return f_7066.call(null,e);
});})(seq__7048_7060,chunk__7049_7061,count__7050_7062,i__7051_7063,vec__7052_7064,type_7065,f_7066,vec__7047_7057,elem_7058,selector_7059))
);

var G__7067 = seq__7048_7060;
var G__7068 = chunk__7049_7061;
var G__7069 = count__7050_7062;
var G__7070 = (i__7051_7063 + (1));
seq__7048_7060 = G__7067;
chunk__7049_7061 = G__7068;
count__7050_7062 = G__7069;
i__7051_7063 = G__7070;
continue;
} else {
var temp__4425__auto___7071 = cljs.core.seq.call(null,seq__7048_7060);
if(temp__4425__auto___7071){
var seq__7048_7072__$1 = temp__4425__auto___7071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7048_7072__$1)){
var c__5310__auto___7073 = cljs.core.chunk_first.call(null,seq__7048_7072__$1);
var G__7074 = cljs.core.chunk_rest.call(null,seq__7048_7072__$1);
var G__7075 = c__5310__auto___7073;
var G__7076 = cljs.core.count.call(null,c__5310__auto___7073);
var G__7077 = (0);
seq__7048_7060 = G__7074;
chunk__7049_7061 = G__7075;
count__7050_7062 = G__7076;
i__7051_7063 = G__7077;
continue;
} else {
var vec__7053_7078 = cljs.core.first.call(null,seq__7048_7072__$1);
var type_7079 = cljs.core.nth.call(null,vec__7053_7078,(0),null);
var f_7080 = cljs.core.nth.call(null,vec__7053_7078,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7079,((function (seq__7048_7060,chunk__7049_7061,count__7050_7062,i__7051_7063,vec__7053_7078,type_7079,f_7080,seq__7048_7072__$1,temp__4425__auto___7071,vec__7047_7057,elem_7058,selector_7059){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7079,dommy$core$this_fn);

return f_7080.call(null,e);
});})(seq__7048_7060,chunk__7049_7061,count__7050_7062,i__7051_7063,vec__7053_7078,type_7079,f_7080,seq__7048_7072__$1,temp__4425__auto___7071,vec__7047_7057,elem_7058,selector_7059))
);

var G__7081 = cljs.core.next.call(null,seq__7048_7072__$1);
var G__7082 = null;
var G__7083 = (0);
var G__7084 = (0);
seq__7048_7060 = G__7081;
chunk__7049_7061 = G__7082;
count__7050_7062 = G__7083;
i__7051_7063 = G__7084;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq7045){
var G__7046 = cljs.core.first.call(null,seq7045);
var seq7045__$1 = cljs.core.next.call(null,seq7045);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7046,seq7045__$1);
});

//# sourceMappingURL=core.js.map