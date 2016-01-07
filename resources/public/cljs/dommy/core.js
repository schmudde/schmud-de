// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__13442__auto__ = elem.textContent;
if(cljs.core.truth_(or__13442__auto__)){
return or__13442__auto__;
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
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(){
var args17584 = [];
var len__14481__auto___17587 = arguments.length;
var i__14482__auto___17588 = (0);
while(true){
if((i__14482__auto___17588 < len__14481__auto___17587)){
args17584.push((arguments[i__14482__auto___17588]));

var G__17589 = (i__14482__auto___17588 + (1));
i__14482__auto___17588 = G__17589;
continue;
} else {
}
break;
}

var G__17586 = args17584.length;
switch (G__17586) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17584.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index(class_name,c__$1);
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
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
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
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var args17591 = [];
var len__14481__auto___17594 = arguments.length;
var i__14482__auto___17595 = (0);
while(true){
if((i__14482__auto___17595 < len__14481__auto___17594)){
args17591.push((arguments[i__14482__auto___17595]));

var G__17596 = (i__14482__auto___17595 + (1));
i__14482__auto___17595 = G__17596;
continue;
} else {
}
break;
}

var G__17593 = args17591.length;
switch (G__17593) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17591.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var args17599 = [];
var len__14481__auto___17602 = arguments.length;
var i__14482__auto___17603 = (0);
while(true){
if((i__14482__auto___17603 < len__14481__auto___17602)){
args17599.push((arguments[i__14482__auto___17603]));

var G__17604 = (i__14482__auto___17603 + (1));
i__14482__auto___17603 = G__17604;
continue;
} else {
}
break;
}

var G__17601 = args17599.length;
switch (G__17601) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17599.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17598_SHARP_){
return !((p1__17598_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
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
var args__14488__auto__ = [];
var len__14481__auto___17614 = arguments.length;
var i__14482__auto___17615 = (0);
while(true){
if((i__14482__auto___17615 < len__14481__auto___17614)){
args__14488__auto__.push((arguments[i__14482__auto___17615]));

var G__17616 = (i__14482__auto___17615 + (1));
i__14482__auto___17615 = G__17616;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var style = elem.style;
var seq__17608_17617 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__17609_17618 = null;
var count__17610_17619 = (0);
var i__17611_17620 = (0);
while(true){
if((i__17611_17620 < count__17610_17619)){
var vec__17612_17621 = chunk__17609_17618.cljs$core$IIndexed$_nth$arity$2(null,i__17611_17620);
var k_17622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612_17621,(0),null);
var v_17623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612_17621,(1),null);
style.setProperty(dommy.utils.as_str(k_17622),v_17623);

var G__17624 = seq__17608_17617;
var G__17625 = chunk__17609_17618;
var G__17626 = count__17610_17619;
var G__17627 = (i__17611_17620 + (1));
seq__17608_17617 = G__17624;
chunk__17609_17618 = G__17625;
count__17610_17619 = G__17626;
i__17611_17620 = G__17627;
continue;
} else {
var temp__4425__auto___17628 = cljs.core.seq(seq__17608_17617);
if(temp__4425__auto___17628){
var seq__17608_17629__$1 = temp__4425__auto___17628;
if(cljs.core.chunked_seq_QMARK_(seq__17608_17629__$1)){
var c__14226__auto___17630 = cljs.core.chunk_first(seq__17608_17629__$1);
var G__17631 = cljs.core.chunk_rest(seq__17608_17629__$1);
var G__17632 = c__14226__auto___17630;
var G__17633 = cljs.core.count(c__14226__auto___17630);
var G__17634 = (0);
seq__17608_17617 = G__17631;
chunk__17609_17618 = G__17632;
count__17610_17619 = G__17633;
i__17611_17620 = G__17634;
continue;
} else {
var vec__17613_17635 = cljs.core.first(seq__17608_17629__$1);
var k_17636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613_17635,(0),null);
var v_17637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17613_17635,(1),null);
style.setProperty(dommy.utils.as_str(k_17636),v_17637);

var G__17638 = cljs.core.next(seq__17608_17629__$1);
var G__17639 = null;
var G__17640 = (0);
var G__17641 = (0);
seq__17608_17617 = G__17638;
chunk__17609_17618 = G__17639;
count__17610_17619 = G__17640;
i__17611_17620 = G__17641;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq17606){
var G__17607 = cljs.core.first(seq17606);
var seq17606__$1 = cljs.core.next(seq17606);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17607,seq17606__$1);
});
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(){
var args__14488__auto__ = [];
var len__14481__auto___17648 = arguments.length;
var i__14482__auto___17649 = (0);
while(true){
if((i__14482__auto___17649 < len__14481__auto___17648)){
args__14488__auto__.push((arguments[i__14482__auto___17649]));

var G__17650 = (i__14482__auto___17649 + (1));
i__14482__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__17644_17651 = cljs.core.seq(keywords);
var chunk__17645_17652 = null;
var count__17646_17653 = (0);
var i__17647_17654 = (0);
while(true){
if((i__17647_17654 < count__17646_17653)){
var kw_17655 = chunk__17645_17652.cljs$core$IIndexed$_nth$arity$2(null,i__17647_17654);
style.removeProperty(dommy.utils.as_str(kw_17655));

var G__17656 = seq__17644_17651;
var G__17657 = chunk__17645_17652;
var G__17658 = count__17646_17653;
var G__17659 = (i__17647_17654 + (1));
seq__17644_17651 = G__17656;
chunk__17645_17652 = G__17657;
count__17646_17653 = G__17658;
i__17647_17654 = G__17659;
continue;
} else {
var temp__4425__auto___17660 = cljs.core.seq(seq__17644_17651);
if(temp__4425__auto___17660){
var seq__17644_17661__$1 = temp__4425__auto___17660;
if(cljs.core.chunked_seq_QMARK_(seq__17644_17661__$1)){
var c__14226__auto___17662 = cljs.core.chunk_first(seq__17644_17661__$1);
var G__17663 = cljs.core.chunk_rest(seq__17644_17661__$1);
var G__17664 = c__14226__auto___17662;
var G__17665 = cljs.core.count(c__14226__auto___17662);
var G__17666 = (0);
seq__17644_17651 = G__17663;
chunk__17645_17652 = G__17664;
count__17646_17653 = G__17665;
i__17647_17654 = G__17666;
continue;
} else {
var kw_17667 = cljs.core.first(seq__17644_17661__$1);
style.removeProperty(dommy.utils.as_str(kw_17667));

var G__17668 = cljs.core.next(seq__17644_17661__$1);
var G__17669 = null;
var G__17670 = (0);
var G__17671 = (0);
seq__17644_17651 = G__17668;
chunk__17645_17652 = G__17669;
count__17646_17653 = G__17670;
i__17647_17654 = G__17671;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq17642){
var G__17643 = cljs.core.first(seq17642);
var seq17642__$1 = cljs.core.next(seq17642);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17643,seq17642__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var args__14488__auto__ = [];
var len__14481__auto___17680 = arguments.length;
var i__14482__auto___17681 = (0);
while(true){
if((i__14482__auto___17681 < len__14481__auto___17680)){
args__14488__auto__.push((arguments[i__14482__auto___17681]));

var G__17682 = (i__14482__auto___17681 + (1));
i__14482__auto___17681 = G__17682;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var seq__17674_17683 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__17675_17684 = null;
var count__17676_17685 = (0);
var i__17677_17686 = (0);
while(true){
if((i__17677_17686 < count__17676_17685)){
var vec__17678_17687 = chunk__17675_17684.cljs$core$IIndexed$_nth$arity$2(null,i__17677_17686);
var k_17688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678_17687,(0),null);
var v_17689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17678_17687,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_17688,[cljs.core.str(v_17689),cljs.core.str("px")].join('')], 0));

var G__17690 = seq__17674_17683;
var G__17691 = chunk__17675_17684;
var G__17692 = count__17676_17685;
var G__17693 = (i__17677_17686 + (1));
seq__17674_17683 = G__17690;
chunk__17675_17684 = G__17691;
count__17676_17685 = G__17692;
i__17677_17686 = G__17693;
continue;
} else {
var temp__4425__auto___17694 = cljs.core.seq(seq__17674_17683);
if(temp__4425__auto___17694){
var seq__17674_17695__$1 = temp__4425__auto___17694;
if(cljs.core.chunked_seq_QMARK_(seq__17674_17695__$1)){
var c__14226__auto___17696 = cljs.core.chunk_first(seq__17674_17695__$1);
var G__17697 = cljs.core.chunk_rest(seq__17674_17695__$1);
var G__17698 = c__14226__auto___17696;
var G__17699 = cljs.core.count(c__14226__auto___17696);
var G__17700 = (0);
seq__17674_17683 = G__17697;
chunk__17675_17684 = G__17698;
count__17676_17685 = G__17699;
i__17677_17686 = G__17700;
continue;
} else {
var vec__17679_17701 = cljs.core.first(seq__17674_17695__$1);
var k_17702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17679_17701,(0),null);
var v_17703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17679_17701,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_17702,[cljs.core.str(v_17703),cljs.core.str("px")].join('')], 0));

var G__17704 = cljs.core.next(seq__17674_17695__$1);
var G__17705 = null;
var G__17706 = (0);
var G__17707 = (0);
seq__17674_17683 = G__17704;
chunk__17675_17684 = G__17705;
count__17676_17685 = G__17706;
i__17677_17686 = G__17707;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq17672){
var G__17673 = cljs.core.first(seq17672);
var seq17672__$1 = cljs.core.next(seq17672);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17673,seq17672__$1);
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
var args17708 = [];
var len__14481__auto___17723 = arguments.length;
var i__14482__auto___17724 = (0);
while(true){
if((i__14482__auto___17724 < len__14481__auto___17723)){
args17708.push((arguments[i__14482__auto___17724]));

var G__17725 = (i__14482__auto___17724 + (1));
i__14482__auto___17724 = G__17725;
continue;
} else {
}
break;
}

var G__17714 = args17708.length;
switch (G__17714) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17708.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__14500__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__17715 = elem;
(G__17715[k__$1] = v);

return G__17715;
} else {
var G__17716 = elem;
G__17716.setAttribute(k__$1,v);

return G__17716;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var seq__17717_17727 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__17718_17728 = null;
var count__17719_17729 = (0);
var i__17720_17730 = (0);
while(true){
if((i__17720_17730 < count__17719_17729)){
var vec__17721_17731 = chunk__17718_17728.cljs$core$IIndexed$_nth$arity$2(null,i__17720_17730);
var k_17732__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17731,(0),null);
var v_17733__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17731,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_17732__$1,v_17733__$1);

var G__17734 = seq__17717_17727;
var G__17735 = chunk__17718_17728;
var G__17736 = count__17719_17729;
var G__17737 = (i__17720_17730 + (1));
seq__17717_17727 = G__17734;
chunk__17718_17728 = G__17735;
count__17719_17729 = G__17736;
i__17720_17730 = G__17737;
continue;
} else {
var temp__4425__auto___17738 = cljs.core.seq(seq__17717_17727);
if(temp__4425__auto___17738){
var seq__17717_17739__$1 = temp__4425__auto___17738;
if(cljs.core.chunked_seq_QMARK_(seq__17717_17739__$1)){
var c__14226__auto___17740 = cljs.core.chunk_first(seq__17717_17739__$1);
var G__17741 = cljs.core.chunk_rest(seq__17717_17739__$1);
var G__17742 = c__14226__auto___17740;
var G__17743 = cljs.core.count(c__14226__auto___17740);
var G__17744 = (0);
seq__17717_17727 = G__17741;
chunk__17718_17728 = G__17742;
count__17719_17729 = G__17743;
i__17720_17730 = G__17744;
continue;
} else {
var vec__17722_17745 = cljs.core.first(seq__17717_17739__$1);
var k_17746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722_17745,(0),null);
var v_17747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17722_17745,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_17746__$1,v_17747__$1);

var G__17748 = cljs.core.next(seq__17717_17739__$1);
var G__17749 = null;
var G__17750 = (0);
var G__17751 = (0);
seq__17717_17727 = G__17748;
chunk__17718_17728 = G__17749;
count__17719_17729 = G__17750;
i__17720_17730 = G__17751;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq17709){
var G__17710 = cljs.core.first(seq17709);
var seq17709__$1 = cljs.core.next(seq17709);
var G__17711 = cljs.core.first(seq17709__$1);
var seq17709__$2 = cljs.core.next(seq17709__$1);
var G__17712 = cljs.core.first(seq17709__$2);
var seq17709__$3 = cljs.core.next(seq17709__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17710,G__17711,G__17712,seq17709__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var args17752 = [];
var len__14481__auto___17762 = arguments.length;
var i__14482__auto___17763 = (0);
while(true){
if((i__14482__auto___17763 < len__14481__auto___17762)){
args17752.push((arguments[i__14482__auto___17763]));

var G__17764 = (i__14482__auto___17763 + (1));
i__14482__auto___17763 = G__17764;
continue;
} else {
}
break;
}

var G__17757 = args17752.length;
switch (G__17757) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17752.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14500__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_17766__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_17766__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_17766__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__17758_17767 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__17759_17768 = null;
var count__17760_17769 = (0);
var i__17761_17770 = (0);
while(true){
if((i__17761_17770 < count__17760_17769)){
var k_17771__$1 = chunk__17759_17768.cljs$core$IIndexed$_nth$arity$2(null,i__17761_17770);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_17771__$1);

var G__17772 = seq__17758_17767;
var G__17773 = chunk__17759_17768;
var G__17774 = count__17760_17769;
var G__17775 = (i__17761_17770 + (1));
seq__17758_17767 = G__17772;
chunk__17759_17768 = G__17773;
count__17760_17769 = G__17774;
i__17761_17770 = G__17775;
continue;
} else {
var temp__4425__auto___17776 = cljs.core.seq(seq__17758_17767);
if(temp__4425__auto___17776){
var seq__17758_17777__$1 = temp__4425__auto___17776;
if(cljs.core.chunked_seq_QMARK_(seq__17758_17777__$1)){
var c__14226__auto___17778 = cljs.core.chunk_first(seq__17758_17777__$1);
var G__17779 = cljs.core.chunk_rest(seq__17758_17777__$1);
var G__17780 = c__14226__auto___17778;
var G__17781 = cljs.core.count(c__14226__auto___17778);
var G__17782 = (0);
seq__17758_17767 = G__17779;
chunk__17759_17768 = G__17780;
count__17760_17769 = G__17781;
i__17761_17770 = G__17782;
continue;
} else {
var k_17783__$1 = cljs.core.first(seq__17758_17777__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_17783__$1);

var G__17784 = cljs.core.next(seq__17758_17777__$1);
var G__17785 = null;
var G__17786 = (0);
var G__17787 = (0);
seq__17758_17767 = G__17784;
chunk__17759_17768 = G__17785;
count__17760_17769 = G__17786;
i__17761_17770 = G__17787;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq17753){
var G__17754 = cljs.core.first(seq17753);
var seq17753__$1 = cljs.core.next(seq17753);
var G__17755 = cljs.core.first(seq17753__$1);
var seq17753__$2 = cljs.core.next(seq17753__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17754,G__17755,seq17753__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var args17788 = [];
var len__14481__auto___17791 = arguments.length;
var i__14482__auto___17792 = (0);
while(true){
if((i__14482__auto___17792 < len__14481__auto___17791)){
args17788.push((arguments[i__14482__auto___17792]));

var G__17793 = (i__14482__auto___17792 + (1));
i__14482__auto___17792 = G__17793;
continue;
} else {
}
break;
}

var G__17790 = args17788.length;
switch (G__17790) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17788.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var args17795 = [];
var len__14481__auto___17813 = arguments.length;
var i__14482__auto___17814 = (0);
while(true){
if((i__14482__auto___17814 < len__14481__auto___17813)){
args17795.push((arguments[i__14482__auto___17814]));

var G__17815 = (i__14482__auto___17814 + (1));
i__14482__auto___17814 = G__17815;
continue;
} else {
}
break;
}

var G__17800 = args17795.length;
switch (G__17800) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17795.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14500__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4423__auto___17817 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___17817)){
var class_list_17818 = temp__4423__auto___17817;
var seq__17801_17819 = cljs.core.seq(classes__$1);
var chunk__17802_17820 = null;
var count__17803_17821 = (0);
var i__17804_17822 = (0);
while(true){
if((i__17804_17822 < count__17803_17821)){
var c_17823 = chunk__17802_17820.cljs$core$IIndexed$_nth$arity$2(null,i__17804_17822);
class_list_17818.add(c_17823);

var G__17824 = seq__17801_17819;
var G__17825 = chunk__17802_17820;
var G__17826 = count__17803_17821;
var G__17827 = (i__17804_17822 + (1));
seq__17801_17819 = G__17824;
chunk__17802_17820 = G__17825;
count__17803_17821 = G__17826;
i__17804_17822 = G__17827;
continue;
} else {
var temp__4425__auto___17828 = cljs.core.seq(seq__17801_17819);
if(temp__4425__auto___17828){
var seq__17801_17829__$1 = temp__4425__auto___17828;
if(cljs.core.chunked_seq_QMARK_(seq__17801_17829__$1)){
var c__14226__auto___17830 = cljs.core.chunk_first(seq__17801_17829__$1);
var G__17831 = cljs.core.chunk_rest(seq__17801_17829__$1);
var G__17832 = c__14226__auto___17830;
var G__17833 = cljs.core.count(c__14226__auto___17830);
var G__17834 = (0);
seq__17801_17819 = G__17831;
chunk__17802_17820 = G__17832;
count__17803_17821 = G__17833;
i__17804_17822 = G__17834;
continue;
} else {
var c_17835 = cljs.core.first(seq__17801_17829__$1);
class_list_17818.add(c_17835);

var G__17836 = cljs.core.next(seq__17801_17829__$1);
var G__17837 = null;
var G__17838 = (0);
var G__17839 = (0);
seq__17801_17819 = G__17836;
chunk__17802_17820 = G__17837;
count__17803_17821 = G__17838;
i__17804_17822 = G__17839;
continue;
}
} else {
}
}
break;
}
} else {
var seq__17805_17840 = cljs.core.seq(classes__$1);
var chunk__17806_17841 = null;
var count__17807_17842 = (0);
var i__17808_17843 = (0);
while(true){
if((i__17808_17843 < count__17807_17842)){
var c_17844 = chunk__17806_17841.cljs$core$IIndexed$_nth$arity$2(null,i__17808_17843);
var class_name_17845 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_17845,c_17844))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_17845 === ""))?c_17844:[cljs.core.str(class_name_17845),cljs.core.str(" "),cljs.core.str(c_17844)].join('')));
}

var G__17846 = seq__17805_17840;
var G__17847 = chunk__17806_17841;
var G__17848 = count__17807_17842;
var G__17849 = (i__17808_17843 + (1));
seq__17805_17840 = G__17846;
chunk__17806_17841 = G__17847;
count__17807_17842 = G__17848;
i__17808_17843 = G__17849;
continue;
} else {
var temp__4425__auto___17850 = cljs.core.seq(seq__17805_17840);
if(temp__4425__auto___17850){
var seq__17805_17851__$1 = temp__4425__auto___17850;
if(cljs.core.chunked_seq_QMARK_(seq__17805_17851__$1)){
var c__14226__auto___17852 = cljs.core.chunk_first(seq__17805_17851__$1);
var G__17853 = cljs.core.chunk_rest(seq__17805_17851__$1);
var G__17854 = c__14226__auto___17852;
var G__17855 = cljs.core.count(c__14226__auto___17852);
var G__17856 = (0);
seq__17805_17840 = G__17853;
chunk__17806_17841 = G__17854;
count__17807_17842 = G__17855;
i__17808_17843 = G__17856;
continue;
} else {
var c_17857 = cljs.core.first(seq__17805_17851__$1);
var class_name_17858 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_17858,c_17857))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_17858 === ""))?c_17857:[cljs.core.str(class_name_17858),cljs.core.str(" "),cljs.core.str(c_17857)].join('')));
}

var G__17859 = cljs.core.next(seq__17805_17851__$1);
var G__17860 = null;
var G__17861 = (0);
var G__17862 = (0);
seq__17805_17840 = G__17859;
chunk__17806_17841 = G__17860;
count__17807_17842 = G__17861;
i__17808_17843 = G__17862;
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
var seq__17809_17863 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__17810_17864 = null;
var count__17811_17865 = (0);
var i__17812_17866 = (0);
while(true){
if((i__17812_17866 < count__17811_17865)){
var c_17867 = chunk__17810_17864.cljs$core$IIndexed$_nth$arity$2(null,i__17812_17866);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_17867);

var G__17868 = seq__17809_17863;
var G__17869 = chunk__17810_17864;
var G__17870 = count__17811_17865;
var G__17871 = (i__17812_17866 + (1));
seq__17809_17863 = G__17868;
chunk__17810_17864 = G__17869;
count__17811_17865 = G__17870;
i__17812_17866 = G__17871;
continue;
} else {
var temp__4425__auto___17872 = cljs.core.seq(seq__17809_17863);
if(temp__4425__auto___17872){
var seq__17809_17873__$1 = temp__4425__auto___17872;
if(cljs.core.chunked_seq_QMARK_(seq__17809_17873__$1)){
var c__14226__auto___17874 = cljs.core.chunk_first(seq__17809_17873__$1);
var G__17875 = cljs.core.chunk_rest(seq__17809_17873__$1);
var G__17876 = c__14226__auto___17874;
var G__17877 = cljs.core.count(c__14226__auto___17874);
var G__17878 = (0);
seq__17809_17863 = G__17875;
chunk__17810_17864 = G__17876;
count__17811_17865 = G__17877;
i__17812_17866 = G__17878;
continue;
} else {
var c_17879 = cljs.core.first(seq__17809_17873__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_17879);

var G__17880 = cljs.core.next(seq__17809_17873__$1);
var G__17881 = null;
var G__17882 = (0);
var G__17883 = (0);
seq__17809_17863 = G__17880;
chunk__17810_17864 = G__17881;
count__17811_17865 = G__17882;
i__17812_17866 = G__17883;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq17796){
var G__17797 = cljs.core.first(seq17796);
var seq17796__$1 = cljs.core.next(seq17796);
var G__17798 = cljs.core.first(seq17796__$1);
var seq17796__$2 = cljs.core.next(seq17796__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17797,G__17798,seq17796__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var args17884 = [];
var len__14481__auto___17894 = arguments.length;
var i__14482__auto___17895 = (0);
while(true){
if((i__14482__auto___17895 < len__14481__auto___17894)){
args17884.push((arguments[i__14482__auto___17895]));

var G__17896 = (i__14482__auto___17895 + (1));
i__14482__auto___17895 = G__17896;
continue;
} else {
}
break;
}

var G__17889 = args17884.length;
switch (G__17889) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17884.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14500__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4423__auto___17898 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___17898)){
var class_list_17899 = temp__4423__auto___17898;
class_list_17899.remove(c__$1);
} else {
var class_name_17900 = dommy.core.class$(elem);
var new_class_name_17901 = dommy.utils.remove_class_str(class_name_17900,c__$1);
if((class_name_17900 === new_class_name_17901)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_17901);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__17890 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__17891 = null;
var count__17892 = (0);
var i__17893 = (0);
while(true){
if((i__17893 < count__17892)){
var c = chunk__17891.cljs$core$IIndexed$_nth$arity$2(null,i__17893);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__17902 = seq__17890;
var G__17903 = chunk__17891;
var G__17904 = count__17892;
var G__17905 = (i__17893 + (1));
seq__17890 = G__17902;
chunk__17891 = G__17903;
count__17892 = G__17904;
i__17893 = G__17905;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__17890);
if(temp__4425__auto__){
var seq__17890__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17890__$1)){
var c__14226__auto__ = cljs.core.chunk_first(seq__17890__$1);
var G__17906 = cljs.core.chunk_rest(seq__17890__$1);
var G__17907 = c__14226__auto__;
var G__17908 = cljs.core.count(c__14226__auto__);
var G__17909 = (0);
seq__17890 = G__17906;
chunk__17891 = G__17907;
count__17892 = G__17908;
i__17893 = G__17909;
continue;
} else {
var c = cljs.core.first(seq__17890__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__17910 = cljs.core.next(seq__17890__$1);
var G__17911 = null;
var G__17912 = (0);
var G__17913 = (0);
seq__17890 = G__17910;
chunk__17891 = G__17911;
count__17892 = G__17912;
i__17893 = G__17913;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq17885){
var G__17886 = cljs.core.first(seq17885);
var seq17885__$1 = cljs.core.next(seq17885);
var G__17887 = cljs.core.first(seq17885__$1);
var seq17885__$2 = cljs.core.next(seq17885__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17886,G__17887,seq17885__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var args17914 = [];
var len__14481__auto___17917 = arguments.length;
var i__14482__auto___17918 = (0);
while(true){
if((i__14482__auto___17918 < len__14481__auto___17917)){
args17914.push((arguments[i__14482__auto___17918]));

var G__17919 = (i__14482__auto___17918 + (1));
i__14482__auto___17918 = G__17919;
continue;
} else {
}
break;
}

var G__17916 = args17914.length;
switch (G__17916) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17914.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4423__auto___17921 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___17921)){
var class_list_17922 = temp__4423__auto___17921;
class_list_17922.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var args17923 = [];
var len__14481__auto___17926 = arguments.length;
var i__14482__auto___17927 = (0);
while(true){
if((i__14482__auto___17927 < len__14481__auto___17926)){
args17923.push((arguments[i__14482__auto___17927]));

var G__17928 = (i__14482__auto___17927 + (1));
i__14482__auto___17927 = G__17928;
continue;
} else {
}
break;
}

var G__17925 = args17923.length;
switch (G__17925) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17923.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var args17930 = [];
var len__14481__auto___17933 = arguments.length;
var i__14482__auto___17934 = (0);
while(true){
if((i__14482__auto___17934 < len__14481__auto___17933)){
args17930.push((arguments[i__14482__auto___17934]));

var G__17935 = (i__14482__auto___17934 + (1));
i__14482__auto___17934 = G__17935;
continue;
} else {
}
break;
}

var G__17932 = args17930.length;
switch (G__17932) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17930.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var args17937 = [];
var len__14481__auto___17948 = arguments.length;
var i__14482__auto___17949 = (0);
while(true){
if((i__14482__auto___17949 < len__14481__auto___17948)){
args17937.push((arguments[i__14482__auto___17949]));

var G__17950 = (i__14482__auto___17949 + (1));
i__14482__auto___17949 = G__17950;
continue;
} else {
}
break;
}

var G__17942 = args17937.length;
switch (G__17942) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17937.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14500__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__17943 = parent;
G__17943.appendChild(child);

return G__17943;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__17944_17952 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__17945_17953 = null;
var count__17946_17954 = (0);
var i__17947_17955 = (0);
while(true){
if((i__17947_17955 < count__17946_17954)){
var c_17956 = chunk__17945_17953.cljs$core$IIndexed$_nth$arity$2(null,i__17947_17955);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17956);

var G__17957 = seq__17944_17952;
var G__17958 = chunk__17945_17953;
var G__17959 = count__17946_17954;
var G__17960 = (i__17947_17955 + (1));
seq__17944_17952 = G__17957;
chunk__17945_17953 = G__17958;
count__17946_17954 = G__17959;
i__17947_17955 = G__17960;
continue;
} else {
var temp__4425__auto___17961 = cljs.core.seq(seq__17944_17952);
if(temp__4425__auto___17961){
var seq__17944_17962__$1 = temp__4425__auto___17961;
if(cljs.core.chunked_seq_QMARK_(seq__17944_17962__$1)){
var c__14226__auto___17963 = cljs.core.chunk_first(seq__17944_17962__$1);
var G__17964 = cljs.core.chunk_rest(seq__17944_17962__$1);
var G__17965 = c__14226__auto___17963;
var G__17966 = cljs.core.count(c__14226__auto___17963);
var G__17967 = (0);
seq__17944_17952 = G__17964;
chunk__17945_17953 = G__17965;
count__17946_17954 = G__17966;
i__17947_17955 = G__17967;
continue;
} else {
var c_17968 = cljs.core.first(seq__17944_17962__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17968);

var G__17969 = cljs.core.next(seq__17944_17962__$1);
var G__17970 = null;
var G__17971 = (0);
var G__17972 = (0);
seq__17944_17952 = G__17969;
chunk__17945_17953 = G__17970;
count__17946_17954 = G__17971;
i__17947_17955 = G__17972;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq17938){
var G__17939 = cljs.core.first(seq17938);
var seq17938__$1 = cljs.core.next(seq17938);
var G__17940 = cljs.core.first(seq17938__$1);
var seq17938__$2 = cljs.core.next(seq17938__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17939,G__17940,seq17938__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var args17973 = [];
var len__14481__auto___17984 = arguments.length;
var i__14482__auto___17985 = (0);
while(true){
if((i__14482__auto___17985 < len__14481__auto___17984)){
args17973.push((arguments[i__14482__auto___17985]));

var G__17986 = (i__14482__auto___17985 + (1));
i__14482__auto___17985 = G__17986;
continue;
} else {
}
break;
}

var G__17978 = args17973.length;
switch (G__17978) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__14500__auto__ = (new cljs.core.IndexedSeq(args17973.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14500__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__17979 = parent;
G__17979.insertBefore(child,parent.firstChild);

return G__17979;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__17980_17988 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__17981_17989 = null;
var count__17982_17990 = (0);
var i__17983_17991 = (0);
while(true){
if((i__17983_17991 < count__17982_17990)){
var c_17992 = chunk__17981_17989.cljs$core$IIndexed$_nth$arity$2(null,i__17983_17991);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17992);

var G__17993 = seq__17980_17988;
var G__17994 = chunk__17981_17989;
var G__17995 = count__17982_17990;
var G__17996 = (i__17983_17991 + (1));
seq__17980_17988 = G__17993;
chunk__17981_17989 = G__17994;
count__17982_17990 = G__17995;
i__17983_17991 = G__17996;
continue;
} else {
var temp__4425__auto___17997 = cljs.core.seq(seq__17980_17988);
if(temp__4425__auto___17997){
var seq__17980_17998__$1 = temp__4425__auto___17997;
if(cljs.core.chunked_seq_QMARK_(seq__17980_17998__$1)){
var c__14226__auto___17999 = cljs.core.chunk_first(seq__17980_17998__$1);
var G__18000 = cljs.core.chunk_rest(seq__17980_17998__$1);
var G__18001 = c__14226__auto___17999;
var G__18002 = cljs.core.count(c__14226__auto___17999);
var G__18003 = (0);
seq__17980_17988 = G__18000;
chunk__17981_17989 = G__18001;
count__17982_17990 = G__18002;
i__17983_17991 = G__18003;
continue;
} else {
var c_18004 = cljs.core.first(seq__17980_17998__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_18004);

var G__18005 = cljs.core.next(seq__17980_17998__$1);
var G__18006 = null;
var G__18007 = (0);
var G__18008 = (0);
seq__17980_17988 = G__18005;
chunk__17981_17989 = G__18006;
count__17982_17990 = G__18007;
i__17983_17991 = G__18008;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq17974){
var G__17975 = cljs.core.first(seq17974);
var seq17974__$1 = cljs.core.next(seq17974);
var G__17976 = cljs.core.first(seq17974__$1);
var seq17974__$2 = cljs.core.next(seq17974__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17975,G__17976,seq17974__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___18009 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___18009)){
var next_18010 = temp__4423__auto___18009;
dommy.core.insert_before_BANG_(elem,next_18010);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var args18011 = [];
var len__14481__auto___18015 = arguments.length;
var i__14482__auto___18016 = (0);
while(true){
if((i__14482__auto___18016 < len__14481__auto___18015)){
args18011.push((arguments[i__14482__auto___18016]));

var G__18017 = (i__14482__auto___18016 + (1));
i__14482__auto___18016 = G__18017;
continue;
} else {
}
break;
}

var G__18013 = args18011.length;
switch (G__18013) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18011.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$p], 0)))].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__18014 = p;
G__18014.removeChild(elem);

return G__18014;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18019){
var vec__18020 = p__18019;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18020,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18020,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__18020,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__18020,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__13442__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__13442__auto__)){
return or__13442__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__13430__auto__ = related_target;
if(cljs.core.truth_(and__13430__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__13430__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__18020,special_mouse_event,real_mouse_event))
});})(vec__18020,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__13430__auto__ = selected_target;
if(cljs.core.truth_(and__13430__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__13430__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__13442__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__13442__auto__)){
return or__13442__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var args__14488__auto__ = [];
var len__14481__auto___18024 = arguments.length;
var i__14482__auto___18025 = (0);
while(true){
if((i__14482__auto___18025 < len__14481__auto___18024)){
args__14488__auto__.push((arguments[i__14482__auto___18025]));

var G__18026 = (i__14482__auto___18025 + (1));
i__14482__auto___18025 = G__18026;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((2) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__14489__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq18021){
var G__18022 = cljs.core.first(seq18021);
var seq18021__$1 = cljs.core.next(seq18021);
var G__18023 = cljs.core.first(seq18021__$1);
var seq18021__$2 = cljs.core.next(seq18021__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18022,G__18023,seq18021__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
var args__14488__auto__ = [];
var len__14481__auto___18052 = arguments.length;
var i__14482__auto___18053 = (0);
while(true){
if((i__14482__auto___18053 < len__14481__auto___18052)){
args__14488__auto__.push((arguments[i__14482__auto___18053]));

var G__18054 = (i__14482__auto___18053 + (1));
i__14482__auto___18053 = G__18054;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__18029_18055 = dommy.core.elem_and_selector(elem_sel);
var elem_18056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029_18055,(0),null);
var selector_18057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18029_18055,(1),null);
var seq__18030_18058 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18037_18059 = null;
var count__18038_18060 = (0);
var i__18039_18061 = (0);
while(true){
if((i__18039_18061 < count__18038_18060)){
var vec__18046_18062 = chunk__18037_18059.cljs$core$IIndexed$_nth$arity$2(null,i__18039_18061);
var orig_type_18063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046_18062,(0),null);
var f_18064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046_18062,(1),null);
var seq__18040_18065 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18063,new cljs.core.PersistentArrayMap.fromArray([orig_type_18063,cljs.core.identity], true, false)));
var chunk__18042_18066 = null;
var count__18043_18067 = (0);
var i__18044_18068 = (0);
while(true){
if((i__18044_18068 < count__18043_18067)){
var vec__18047_18069 = chunk__18042_18066.cljs$core$IIndexed$_nth$arity$2(null,i__18044_18068);
var actual_type_18070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047_18069,(0),null);
var factory_18071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047_18069,(1),null);
var canonical_f_18072 = (cljs.core.truth_(selector_18057)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18056,selector_18057):cljs.core.identity).call(null,(factory_18071.cljs$core$IFn$_invoke$arity$1 ? factory_18071.cljs$core$IFn$_invoke$arity$1(f_18064) : factory_18071.call(null,f_18064)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18056,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18057,actual_type_18070,f_18064], null),canonical_f_18072], 0));

if(cljs.core.truth_(elem_18056.addEventListener)){
elem_18056.addEventListener(cljs.core.name(actual_type_18070),canonical_f_18072);
} else {
elem_18056.attachEvent(cljs.core.name(actual_type_18070),canonical_f_18072);
}

var G__18073 = seq__18040_18065;
var G__18074 = chunk__18042_18066;
var G__18075 = count__18043_18067;
var G__18076 = (i__18044_18068 + (1));
seq__18040_18065 = G__18073;
chunk__18042_18066 = G__18074;
count__18043_18067 = G__18075;
i__18044_18068 = G__18076;
continue;
} else {
var temp__4425__auto___18077 = cljs.core.seq(seq__18040_18065);
if(temp__4425__auto___18077){
var seq__18040_18078__$1 = temp__4425__auto___18077;
if(cljs.core.chunked_seq_QMARK_(seq__18040_18078__$1)){
var c__14226__auto___18079 = cljs.core.chunk_first(seq__18040_18078__$1);
var G__18080 = cljs.core.chunk_rest(seq__18040_18078__$1);
var G__18081 = c__14226__auto___18079;
var G__18082 = cljs.core.count(c__14226__auto___18079);
var G__18083 = (0);
seq__18040_18065 = G__18080;
chunk__18042_18066 = G__18081;
count__18043_18067 = G__18082;
i__18044_18068 = G__18083;
continue;
} else {
var vec__18048_18084 = cljs.core.first(seq__18040_18078__$1);
var actual_type_18085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048_18084,(0),null);
var factory_18086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18048_18084,(1),null);
var canonical_f_18087 = (cljs.core.truth_(selector_18057)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18056,selector_18057):cljs.core.identity).call(null,(factory_18086.cljs$core$IFn$_invoke$arity$1 ? factory_18086.cljs$core$IFn$_invoke$arity$1(f_18064) : factory_18086.call(null,f_18064)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18056,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18057,actual_type_18085,f_18064], null),canonical_f_18087], 0));

if(cljs.core.truth_(elem_18056.addEventListener)){
elem_18056.addEventListener(cljs.core.name(actual_type_18085),canonical_f_18087);
} else {
elem_18056.attachEvent(cljs.core.name(actual_type_18085),canonical_f_18087);
}

var G__18088 = cljs.core.next(seq__18040_18078__$1);
var G__18089 = null;
var G__18090 = (0);
var G__18091 = (0);
seq__18040_18065 = G__18088;
chunk__18042_18066 = G__18089;
count__18043_18067 = G__18090;
i__18044_18068 = G__18091;
continue;
}
} else {
}
}
break;
}

var G__18092 = seq__18030_18058;
var G__18093 = chunk__18037_18059;
var G__18094 = count__18038_18060;
var G__18095 = (i__18039_18061 + (1));
seq__18030_18058 = G__18092;
chunk__18037_18059 = G__18093;
count__18038_18060 = G__18094;
i__18039_18061 = G__18095;
continue;
} else {
var temp__4425__auto___18096 = cljs.core.seq(seq__18030_18058);
if(temp__4425__auto___18096){
var seq__18030_18097__$1 = temp__4425__auto___18096;
if(cljs.core.chunked_seq_QMARK_(seq__18030_18097__$1)){
var c__14226__auto___18098 = cljs.core.chunk_first(seq__18030_18097__$1);
var G__18099 = cljs.core.chunk_rest(seq__18030_18097__$1);
var G__18100 = c__14226__auto___18098;
var G__18101 = cljs.core.count(c__14226__auto___18098);
var G__18102 = (0);
seq__18030_18058 = G__18099;
chunk__18037_18059 = G__18100;
count__18038_18060 = G__18101;
i__18039_18061 = G__18102;
continue;
} else {
var vec__18049_18103 = cljs.core.first(seq__18030_18097__$1);
var orig_type_18104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049_18103,(0),null);
var f_18105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18049_18103,(1),null);
var seq__18031_18106 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18104,new cljs.core.PersistentArrayMap.fromArray([orig_type_18104,cljs.core.identity], true, false)));
var chunk__18033_18107 = null;
var count__18034_18108 = (0);
var i__18035_18109 = (0);
while(true){
if((i__18035_18109 < count__18034_18108)){
var vec__18050_18110 = chunk__18033_18107.cljs$core$IIndexed$_nth$arity$2(null,i__18035_18109);
var actual_type_18111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050_18110,(0),null);
var factory_18112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18050_18110,(1),null);
var canonical_f_18113 = (cljs.core.truth_(selector_18057)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18056,selector_18057):cljs.core.identity).call(null,(factory_18112.cljs$core$IFn$_invoke$arity$1 ? factory_18112.cljs$core$IFn$_invoke$arity$1(f_18105) : factory_18112.call(null,f_18105)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18056,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18057,actual_type_18111,f_18105], null),canonical_f_18113], 0));

if(cljs.core.truth_(elem_18056.addEventListener)){
elem_18056.addEventListener(cljs.core.name(actual_type_18111),canonical_f_18113);
} else {
elem_18056.attachEvent(cljs.core.name(actual_type_18111),canonical_f_18113);
}

var G__18114 = seq__18031_18106;
var G__18115 = chunk__18033_18107;
var G__18116 = count__18034_18108;
var G__18117 = (i__18035_18109 + (1));
seq__18031_18106 = G__18114;
chunk__18033_18107 = G__18115;
count__18034_18108 = G__18116;
i__18035_18109 = G__18117;
continue;
} else {
var temp__4425__auto___18118__$1 = cljs.core.seq(seq__18031_18106);
if(temp__4425__auto___18118__$1){
var seq__18031_18119__$1 = temp__4425__auto___18118__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18031_18119__$1)){
var c__14226__auto___18120 = cljs.core.chunk_first(seq__18031_18119__$1);
var G__18121 = cljs.core.chunk_rest(seq__18031_18119__$1);
var G__18122 = c__14226__auto___18120;
var G__18123 = cljs.core.count(c__14226__auto___18120);
var G__18124 = (0);
seq__18031_18106 = G__18121;
chunk__18033_18107 = G__18122;
count__18034_18108 = G__18123;
i__18035_18109 = G__18124;
continue;
} else {
var vec__18051_18125 = cljs.core.first(seq__18031_18119__$1);
var actual_type_18126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051_18125,(0),null);
var factory_18127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051_18125,(1),null);
var canonical_f_18128 = (cljs.core.truth_(selector_18057)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_18056,selector_18057):cljs.core.identity).call(null,(factory_18127.cljs$core$IFn$_invoke$arity$1 ? factory_18127.cljs$core$IFn$_invoke$arity$1(f_18105) : factory_18127.call(null,f_18105)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18056,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18057,actual_type_18126,f_18105], null),canonical_f_18128], 0));

if(cljs.core.truth_(elem_18056.addEventListener)){
elem_18056.addEventListener(cljs.core.name(actual_type_18126),canonical_f_18128);
} else {
elem_18056.attachEvent(cljs.core.name(actual_type_18126),canonical_f_18128);
}

var G__18129 = cljs.core.next(seq__18031_18119__$1);
var G__18130 = null;
var G__18131 = (0);
var G__18132 = (0);
seq__18031_18106 = G__18129;
chunk__18033_18107 = G__18130;
count__18034_18108 = G__18131;
i__18035_18109 = G__18132;
continue;
}
} else {
}
}
break;
}

var G__18133 = cljs.core.next(seq__18030_18097__$1);
var G__18134 = null;
var G__18135 = (0);
var G__18136 = (0);
seq__18030_18058 = G__18133;
chunk__18037_18059 = G__18134;
count__18038_18060 = G__18135;
i__18039_18061 = G__18136;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq18027){
var G__18028 = cljs.core.first(seq18027);
var seq18027__$1 = cljs.core.next(seq18027);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18028,seq18027__$1);
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
var args__14488__auto__ = [];
var len__14481__auto___18162 = arguments.length;
var i__14482__auto___18163 = (0);
while(true){
if((i__14482__auto___18163 < len__14481__auto___18162)){
args__14488__auto__.push((arguments[i__14482__auto___18163]));

var G__18164 = (i__14482__auto___18163 + (1));
i__14482__auto___18163 = G__18164;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__18139_18165 = dommy.core.elem_and_selector(elem_sel);
var elem_18166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18139_18165,(0),null);
var selector_18167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18139_18165,(1),null);
var seq__18140_18168 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18147_18169 = null;
var count__18148_18170 = (0);
var i__18149_18171 = (0);
while(true){
if((i__18149_18171 < count__18148_18170)){
var vec__18156_18172 = chunk__18147_18169.cljs$core$IIndexed$_nth$arity$2(null,i__18149_18171);
var orig_type_18173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156_18172,(0),null);
var f_18174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156_18172,(1),null);
var seq__18150_18175 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18173,new cljs.core.PersistentArrayMap.fromArray([orig_type_18173,cljs.core.identity], true, false)));
var chunk__18152_18176 = null;
var count__18153_18177 = (0);
var i__18154_18178 = (0);
while(true){
if((i__18154_18178 < count__18153_18177)){
var vec__18157_18179 = chunk__18152_18176.cljs$core$IIndexed$_nth$arity$2(null,i__18154_18178);
var actual_type_18180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18157_18179,(0),null);
var __18181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18157_18179,(1),null);
var keys_18182 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18167,actual_type_18180,f_18174], null);
var canonical_f_18183 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18166),keys_18182);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18166,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18182], 0));

if(cljs.core.truth_(elem_18166.removeEventListener)){
elem_18166.removeEventListener(cljs.core.name(actual_type_18180),canonical_f_18183);
} else {
elem_18166.detachEvent(cljs.core.name(actual_type_18180),canonical_f_18183);
}

var G__18184 = seq__18150_18175;
var G__18185 = chunk__18152_18176;
var G__18186 = count__18153_18177;
var G__18187 = (i__18154_18178 + (1));
seq__18150_18175 = G__18184;
chunk__18152_18176 = G__18185;
count__18153_18177 = G__18186;
i__18154_18178 = G__18187;
continue;
} else {
var temp__4425__auto___18188 = cljs.core.seq(seq__18150_18175);
if(temp__4425__auto___18188){
var seq__18150_18189__$1 = temp__4425__auto___18188;
if(cljs.core.chunked_seq_QMARK_(seq__18150_18189__$1)){
var c__14226__auto___18190 = cljs.core.chunk_first(seq__18150_18189__$1);
var G__18191 = cljs.core.chunk_rest(seq__18150_18189__$1);
var G__18192 = c__14226__auto___18190;
var G__18193 = cljs.core.count(c__14226__auto___18190);
var G__18194 = (0);
seq__18150_18175 = G__18191;
chunk__18152_18176 = G__18192;
count__18153_18177 = G__18193;
i__18154_18178 = G__18194;
continue;
} else {
var vec__18158_18195 = cljs.core.first(seq__18150_18189__$1);
var actual_type_18196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158_18195,(0),null);
var __18197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18158_18195,(1),null);
var keys_18198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18167,actual_type_18196,f_18174], null);
var canonical_f_18199 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18166),keys_18198);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18166,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18198], 0));

if(cljs.core.truth_(elem_18166.removeEventListener)){
elem_18166.removeEventListener(cljs.core.name(actual_type_18196),canonical_f_18199);
} else {
elem_18166.detachEvent(cljs.core.name(actual_type_18196),canonical_f_18199);
}

var G__18200 = cljs.core.next(seq__18150_18189__$1);
var G__18201 = null;
var G__18202 = (0);
var G__18203 = (0);
seq__18150_18175 = G__18200;
chunk__18152_18176 = G__18201;
count__18153_18177 = G__18202;
i__18154_18178 = G__18203;
continue;
}
} else {
}
}
break;
}

var G__18204 = seq__18140_18168;
var G__18205 = chunk__18147_18169;
var G__18206 = count__18148_18170;
var G__18207 = (i__18149_18171 + (1));
seq__18140_18168 = G__18204;
chunk__18147_18169 = G__18205;
count__18148_18170 = G__18206;
i__18149_18171 = G__18207;
continue;
} else {
var temp__4425__auto___18208 = cljs.core.seq(seq__18140_18168);
if(temp__4425__auto___18208){
var seq__18140_18209__$1 = temp__4425__auto___18208;
if(cljs.core.chunked_seq_QMARK_(seq__18140_18209__$1)){
var c__14226__auto___18210 = cljs.core.chunk_first(seq__18140_18209__$1);
var G__18211 = cljs.core.chunk_rest(seq__18140_18209__$1);
var G__18212 = c__14226__auto___18210;
var G__18213 = cljs.core.count(c__14226__auto___18210);
var G__18214 = (0);
seq__18140_18168 = G__18211;
chunk__18147_18169 = G__18212;
count__18148_18170 = G__18213;
i__18149_18171 = G__18214;
continue;
} else {
var vec__18159_18215 = cljs.core.first(seq__18140_18209__$1);
var orig_type_18216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159_18215,(0),null);
var f_18217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159_18215,(1),null);
var seq__18141_18218 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18216,new cljs.core.PersistentArrayMap.fromArray([orig_type_18216,cljs.core.identity], true, false)));
var chunk__18143_18219 = null;
var count__18144_18220 = (0);
var i__18145_18221 = (0);
while(true){
if((i__18145_18221 < count__18144_18220)){
var vec__18160_18222 = chunk__18143_18219.cljs$core$IIndexed$_nth$arity$2(null,i__18145_18221);
var actual_type_18223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18222,(0),null);
var __18224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160_18222,(1),null);
var keys_18225 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18167,actual_type_18223,f_18217], null);
var canonical_f_18226 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18166),keys_18225);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18166,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18225], 0));

if(cljs.core.truth_(elem_18166.removeEventListener)){
elem_18166.removeEventListener(cljs.core.name(actual_type_18223),canonical_f_18226);
} else {
elem_18166.detachEvent(cljs.core.name(actual_type_18223),canonical_f_18226);
}

var G__18227 = seq__18141_18218;
var G__18228 = chunk__18143_18219;
var G__18229 = count__18144_18220;
var G__18230 = (i__18145_18221 + (1));
seq__18141_18218 = G__18227;
chunk__18143_18219 = G__18228;
count__18144_18220 = G__18229;
i__18145_18221 = G__18230;
continue;
} else {
var temp__4425__auto___18231__$1 = cljs.core.seq(seq__18141_18218);
if(temp__4425__auto___18231__$1){
var seq__18141_18232__$1 = temp__4425__auto___18231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18141_18232__$1)){
var c__14226__auto___18233 = cljs.core.chunk_first(seq__18141_18232__$1);
var G__18234 = cljs.core.chunk_rest(seq__18141_18232__$1);
var G__18235 = c__14226__auto___18233;
var G__18236 = cljs.core.count(c__14226__auto___18233);
var G__18237 = (0);
seq__18141_18218 = G__18234;
chunk__18143_18219 = G__18235;
count__18144_18220 = G__18236;
i__18145_18221 = G__18237;
continue;
} else {
var vec__18161_18238 = cljs.core.first(seq__18141_18232__$1);
var actual_type_18239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161_18238,(0),null);
var __18240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161_18238,(1),null);
var keys_18241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18167,actual_type_18239,f_18217], null);
var canonical_f_18242 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18166),keys_18241);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18166,dommy.utils.dissoc_in,cljs.core.array_seq([keys_18241], 0));

if(cljs.core.truth_(elem_18166.removeEventListener)){
elem_18166.removeEventListener(cljs.core.name(actual_type_18239),canonical_f_18242);
} else {
elem_18166.detachEvent(cljs.core.name(actual_type_18239),canonical_f_18242);
}

var G__18243 = cljs.core.next(seq__18141_18232__$1);
var G__18244 = null;
var G__18245 = (0);
var G__18246 = (0);
seq__18141_18218 = G__18243;
chunk__18143_18219 = G__18244;
count__18144_18220 = G__18245;
i__18145_18221 = G__18246;
continue;
}
} else {
}
}
break;
}

var G__18247 = cljs.core.next(seq__18140_18209__$1);
var G__18248 = null;
var G__18249 = (0);
var G__18250 = (0);
seq__18140_18168 = G__18247;
chunk__18147_18169 = G__18248;
count__18148_18170 = G__18249;
i__18149_18171 = G__18250;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq18137){
var G__18138 = cljs.core.first(seq18137);
var seq18137__$1 = cljs.core.next(seq18137);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18138,seq18137__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var args__14488__auto__ = [];
var len__14481__auto___18260 = arguments.length;
var i__14482__auto___18261 = (0);
while(true){
if((i__14482__auto___18261 < len__14481__auto___18260)){
args__14488__auto__.push((arguments[i__14482__auto___18261]));

var G__18262 = (i__14482__auto___18261 + (1));
i__14482__auto___18261 = G__18262;
continue;
} else {
}
break;
}

var argseq__14489__auto__ = ((((1) < args__14488__auto__.length))?(new cljs.core.IndexedSeq(args__14488__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__14489__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__18253_18263 = dommy.core.elem_and_selector(elem_sel);
var elem_18264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253_18263,(0),null);
var selector_18265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253_18263,(1),null);
var seq__18254_18266 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18255_18267 = null;
var count__18256_18268 = (0);
var i__18257_18269 = (0);
while(true){
if((i__18257_18269 < count__18256_18268)){
var vec__18258_18270 = chunk__18255_18267.cljs$core$IIndexed$_nth$arity$2(null,i__18257_18269);
var type_18271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18258_18270,(0),null);
var f_18272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18258_18270,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18271,((function (seq__18254_18266,chunk__18255_18267,count__18256_18268,i__18257_18269,vec__18258_18270,type_18271,f_18272,vec__18253_18263,elem_18264,selector_18265){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18271,dommy$core$this_fn], 0));

return (f_18272.cljs$core$IFn$_invoke$arity$1 ? f_18272.cljs$core$IFn$_invoke$arity$1(e) : f_18272.call(null,e));
});})(seq__18254_18266,chunk__18255_18267,count__18256_18268,i__18257_18269,vec__18258_18270,type_18271,f_18272,vec__18253_18263,elem_18264,selector_18265))
], 0));

var G__18273 = seq__18254_18266;
var G__18274 = chunk__18255_18267;
var G__18275 = count__18256_18268;
var G__18276 = (i__18257_18269 + (1));
seq__18254_18266 = G__18273;
chunk__18255_18267 = G__18274;
count__18256_18268 = G__18275;
i__18257_18269 = G__18276;
continue;
} else {
var temp__4425__auto___18277 = cljs.core.seq(seq__18254_18266);
if(temp__4425__auto___18277){
var seq__18254_18278__$1 = temp__4425__auto___18277;
if(cljs.core.chunked_seq_QMARK_(seq__18254_18278__$1)){
var c__14226__auto___18279 = cljs.core.chunk_first(seq__18254_18278__$1);
var G__18280 = cljs.core.chunk_rest(seq__18254_18278__$1);
var G__18281 = c__14226__auto___18279;
var G__18282 = cljs.core.count(c__14226__auto___18279);
var G__18283 = (0);
seq__18254_18266 = G__18280;
chunk__18255_18267 = G__18281;
count__18256_18268 = G__18282;
i__18257_18269 = G__18283;
continue;
} else {
var vec__18259_18284 = cljs.core.first(seq__18254_18278__$1);
var type_18285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18259_18284,(0),null);
var f_18286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18259_18284,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18285,((function (seq__18254_18266,chunk__18255_18267,count__18256_18268,i__18257_18269,vec__18259_18284,type_18285,f_18286,seq__18254_18278__$1,temp__4425__auto___18277,vec__18253_18263,elem_18264,selector_18265){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_18285,dommy$core$this_fn], 0));

return (f_18286.cljs$core$IFn$_invoke$arity$1 ? f_18286.cljs$core$IFn$_invoke$arity$1(e) : f_18286.call(null,e));
});})(seq__18254_18266,chunk__18255_18267,count__18256_18268,i__18257_18269,vec__18259_18284,type_18285,f_18286,seq__18254_18278__$1,temp__4425__auto___18277,vec__18253_18263,elem_18264,selector_18265))
], 0));

var G__18287 = cljs.core.next(seq__18254_18278__$1);
var G__18288 = null;
var G__18289 = (0);
var G__18290 = (0);
seq__18254_18266 = G__18287;
chunk__18255_18267 = G__18288;
count__18256_18268 = G__18289;
i__18257_18269 = G__18290;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq18251){
var G__18252 = cljs.core.first(seq18251);
var seq18251__$1 = cljs.core.next(seq18251);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18252,seq18251__$1);
});
