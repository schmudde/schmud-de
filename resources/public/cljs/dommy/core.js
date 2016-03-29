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
var args8670 = [];
var len__5565__auto___8673 = arguments.length;
var i__5566__auto___8674 = (0);
while(true){
if((i__5566__auto___8674 < len__5565__auto___8673)){
args8670.push((arguments[i__5566__auto___8674]));

var G__8675 = (i__5566__auto___8674 + (1));
i__5566__auto___8674 = G__8675;
continue;
} else {
}
break;
}

var G__8672 = args8670.length;
switch (G__8672) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8670.length)].join('')));

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
var args8677 = [];
var len__5565__auto___8680 = arguments.length;
var i__5566__auto___8681 = (0);
while(true){
if((i__5566__auto___8681 < len__5565__auto___8680)){
args8677.push((arguments[i__5566__auto___8681]));

var G__8682 = (i__5566__auto___8681 + (1));
i__5566__auto___8681 = G__8682;
continue;
} else {
}
break;
}

var G__8679 = args8677.length;
switch (G__8679) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8677.length)].join('')));

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
var args8685 = [];
var len__5565__auto___8688 = arguments.length;
var i__5566__auto___8689 = (0);
while(true){
if((i__5566__auto___8689 < len__5565__auto___8688)){
args8685.push((arguments[i__5566__auto___8689]));

var G__8690 = (i__5566__auto___8689 + (1));
i__5566__auto___8689 = G__8690;
continue;
} else {
}
break;
}

var G__8687 = args8685.length;
switch (G__8687) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8685.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__8684_SHARP_){
return !((p1__8684_SHARP_ === base));
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
var args__5572__auto__ = [];
var len__5565__auto___8700 = arguments.length;
var i__5566__auto___8701 = (0);
while(true){
if((i__5566__auto___8701 < len__5565__auto___8700)){
args__5572__auto__.push((arguments[i__5566__auto___8701]));

var G__8702 = (i__5566__auto___8701 + (1));
i__5566__auto___8701 = G__8702;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var style = elem.style;
var seq__8694_8703 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__8695_8704 = null;
var count__8696_8705 = (0);
var i__8697_8706 = (0);
while(true){
if((i__8697_8706 < count__8696_8705)){
var vec__8698_8707 = chunk__8695_8704.cljs$core$IIndexed$_nth$arity$2(null,i__8697_8706);
var k_8708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698_8707,(0),null);
var v_8709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8698_8707,(1),null);
style.setProperty(dommy.utils.as_str(k_8708),v_8709);

var G__8710 = seq__8694_8703;
var G__8711 = chunk__8695_8704;
var G__8712 = count__8696_8705;
var G__8713 = (i__8697_8706 + (1));
seq__8694_8703 = G__8710;
chunk__8695_8704 = G__8711;
count__8696_8705 = G__8712;
i__8697_8706 = G__8713;
continue;
} else {
var temp__4425__auto___8714 = cljs.core.seq(seq__8694_8703);
if(temp__4425__auto___8714){
var seq__8694_8715__$1 = temp__4425__auto___8714;
if(cljs.core.chunked_seq_QMARK_(seq__8694_8715__$1)){
var c__5310__auto___8716 = cljs.core.chunk_first(seq__8694_8715__$1);
var G__8717 = cljs.core.chunk_rest(seq__8694_8715__$1);
var G__8718 = c__5310__auto___8716;
var G__8719 = cljs.core.count(c__5310__auto___8716);
var G__8720 = (0);
seq__8694_8703 = G__8717;
chunk__8695_8704 = G__8718;
count__8696_8705 = G__8719;
i__8697_8706 = G__8720;
continue;
} else {
var vec__8699_8721 = cljs.core.first(seq__8694_8715__$1);
var k_8722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8699_8721,(0),null);
var v_8723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8699_8721,(1),null);
style.setProperty(dommy.utils.as_str(k_8722),v_8723);

var G__8724 = cljs.core.next(seq__8694_8715__$1);
var G__8725 = null;
var G__8726 = (0);
var G__8727 = (0);
seq__8694_8703 = G__8724;
chunk__8695_8704 = G__8725;
count__8696_8705 = G__8726;
i__8697_8706 = G__8727;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8692){
var G__8693 = cljs.core.first(seq8692);
var seq8692__$1 = cljs.core.next(seq8692);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8693,seq8692__$1);
});
/**
 * Remove the style of `elem` using keywords:
 * 
 * (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___8734 = arguments.length;
var i__5566__auto___8735 = (0);
while(true){
if((i__5566__auto___8735 < len__5565__auto___8734)){
args__5572__auto__.push((arguments[i__5566__auto___8735]));

var G__8736 = (i__5566__auto___8735 + (1));
i__5566__auto___8735 = G__8736;
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
var seq__8730_8737 = cljs.core.seq(keywords);
var chunk__8731_8738 = null;
var count__8732_8739 = (0);
var i__8733_8740 = (0);
while(true){
if((i__8733_8740 < count__8732_8739)){
var kw_8741 = chunk__8731_8738.cljs$core$IIndexed$_nth$arity$2(null,i__8733_8740);
style.removeProperty(dommy.utils.as_str(kw_8741));

var G__8742 = seq__8730_8737;
var G__8743 = chunk__8731_8738;
var G__8744 = count__8732_8739;
var G__8745 = (i__8733_8740 + (1));
seq__8730_8737 = G__8742;
chunk__8731_8738 = G__8743;
count__8732_8739 = G__8744;
i__8733_8740 = G__8745;
continue;
} else {
var temp__4425__auto___8746 = cljs.core.seq(seq__8730_8737);
if(temp__4425__auto___8746){
var seq__8730_8747__$1 = temp__4425__auto___8746;
if(cljs.core.chunked_seq_QMARK_(seq__8730_8747__$1)){
var c__5310__auto___8748 = cljs.core.chunk_first(seq__8730_8747__$1);
var G__8749 = cljs.core.chunk_rest(seq__8730_8747__$1);
var G__8750 = c__5310__auto___8748;
var G__8751 = cljs.core.count(c__5310__auto___8748);
var G__8752 = (0);
seq__8730_8737 = G__8749;
chunk__8731_8738 = G__8750;
count__8732_8739 = G__8751;
i__8733_8740 = G__8752;
continue;
} else {
var kw_8753 = cljs.core.first(seq__8730_8747__$1);
style.removeProperty(dommy.utils.as_str(kw_8753));

var G__8754 = cljs.core.next(seq__8730_8747__$1);
var G__8755 = null;
var G__8756 = (0);
var G__8757 = (0);
seq__8730_8737 = G__8754;
chunk__8731_8738 = G__8755;
count__8732_8739 = G__8756;
i__8733_8740 = G__8757;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq8728){
var G__8729 = cljs.core.first(seq8728);
var seq8728__$1 = cljs.core.next(seq8728);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8729,seq8728__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___8766 = arguments.length;
var i__5566__auto___8767 = (0);
while(true){
if((i__5566__auto___8767 < len__5565__auto___8766)){
args__5572__auto__.push((arguments[i__5566__auto___8767]));

var G__8768 = (i__5566__auto___8767 + (1));
i__5566__auto___8767 = G__8768;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$kvs))], 0)))].join('')));
}

var seq__8760_8769 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__8761_8770 = null;
var count__8762_8771 = (0);
var i__8763_8772 = (0);
while(true){
if((i__8763_8772 < count__8762_8771)){
var vec__8764_8773 = chunk__8761_8770.cljs$core$IIndexed$_nth$arity$2(null,i__8763_8772);
var k_8774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8764_8773,(0),null);
var v_8775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8764_8773,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_8774,[cljs.core.str(v_8775),cljs.core.str("px")].join('')], 0));

var G__8776 = seq__8760_8769;
var G__8777 = chunk__8761_8770;
var G__8778 = count__8762_8771;
var G__8779 = (i__8763_8772 + (1));
seq__8760_8769 = G__8776;
chunk__8761_8770 = G__8777;
count__8762_8771 = G__8778;
i__8763_8772 = G__8779;
continue;
} else {
var temp__4425__auto___8780 = cljs.core.seq(seq__8760_8769);
if(temp__4425__auto___8780){
var seq__8760_8781__$1 = temp__4425__auto___8780;
if(cljs.core.chunked_seq_QMARK_(seq__8760_8781__$1)){
var c__5310__auto___8782 = cljs.core.chunk_first(seq__8760_8781__$1);
var G__8783 = cljs.core.chunk_rest(seq__8760_8781__$1);
var G__8784 = c__5310__auto___8782;
var G__8785 = cljs.core.count(c__5310__auto___8782);
var G__8786 = (0);
seq__8760_8769 = G__8783;
chunk__8761_8770 = G__8784;
count__8762_8771 = G__8785;
i__8763_8772 = G__8786;
continue;
} else {
var vec__8765_8787 = cljs.core.first(seq__8760_8781__$1);
var k_8788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8765_8787,(0),null);
var v_8789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8765_8787,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_8788,[cljs.core.str(v_8789),cljs.core.str("px")].join('')], 0));

var G__8790 = cljs.core.next(seq__8760_8781__$1);
var G__8791 = null;
var G__8792 = (0);
var G__8793 = (0);
seq__8760_8769 = G__8790;
chunk__8761_8770 = G__8791;
count__8762_8771 = G__8792;
i__8763_8772 = G__8793;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq8758){
var G__8759 = cljs.core.first(seq8758);
var seq8758__$1 = cljs.core.next(seq8758);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8759,seq8758__$1);
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
var args8794 = [];
var len__5565__auto___8809 = arguments.length;
var i__5566__auto___8810 = (0);
while(true){
if((i__5566__auto___8810 < len__5565__auto___8809)){
args8794.push((arguments[i__5566__auto___8810]));

var G__8811 = (i__5566__auto___8810 + (1));
i__5566__auto___8810 = G__8811;
continue;
} else {
}
break;
}

var G__8800 = args8794.length;
switch (G__8800) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args8794.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5584__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__8801 = elem;
(G__8801[k__$1] = v);

return G__8801;
} else {
var G__8802 = elem;
G__8802.setAttribute(k__$1,v);

return G__8802;
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

var seq__8803_8813 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__8804_8814 = null;
var count__8805_8815 = (0);
var i__8806_8816 = (0);
while(true){
if((i__8806_8816 < count__8805_8815)){
var vec__8807_8817 = chunk__8804_8814.cljs$core$IIndexed$_nth$arity$2(null,i__8806_8816);
var k_8818__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8807_8817,(0),null);
var v_8819__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8807_8817,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_8818__$1,v_8819__$1);

var G__8820 = seq__8803_8813;
var G__8821 = chunk__8804_8814;
var G__8822 = count__8805_8815;
var G__8823 = (i__8806_8816 + (1));
seq__8803_8813 = G__8820;
chunk__8804_8814 = G__8821;
count__8805_8815 = G__8822;
i__8806_8816 = G__8823;
continue;
} else {
var temp__4425__auto___8824 = cljs.core.seq(seq__8803_8813);
if(temp__4425__auto___8824){
var seq__8803_8825__$1 = temp__4425__auto___8824;
if(cljs.core.chunked_seq_QMARK_(seq__8803_8825__$1)){
var c__5310__auto___8826 = cljs.core.chunk_first(seq__8803_8825__$1);
var G__8827 = cljs.core.chunk_rest(seq__8803_8825__$1);
var G__8828 = c__5310__auto___8826;
var G__8829 = cljs.core.count(c__5310__auto___8826);
var G__8830 = (0);
seq__8803_8813 = G__8827;
chunk__8804_8814 = G__8828;
count__8805_8815 = G__8829;
i__8806_8816 = G__8830;
continue;
} else {
var vec__8808_8831 = cljs.core.first(seq__8803_8825__$1);
var k_8832__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8808_8831,(0),null);
var v_8833__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8808_8831,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_8832__$1,v_8833__$1);

var G__8834 = cljs.core.next(seq__8803_8825__$1);
var G__8835 = null;
var G__8836 = (0);
var G__8837 = (0);
seq__8803_8813 = G__8834;
chunk__8804_8814 = G__8835;
count__8805_8815 = G__8836;
i__8806_8816 = G__8837;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq8795){
var G__8796 = cljs.core.first(seq8795);
var seq8795__$1 = cljs.core.next(seq8795);
var G__8797 = cljs.core.first(seq8795__$1);
var seq8795__$2 = cljs.core.next(seq8795__$1);
var G__8798 = cljs.core.first(seq8795__$2);
var seq8795__$3 = cljs.core.next(seq8795__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8796,G__8797,G__8798,seq8795__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var args8838 = [];
var len__5565__auto___8848 = arguments.length;
var i__5566__auto___8849 = (0);
while(true){
if((i__5566__auto___8849 < len__5565__auto___8848)){
args8838.push((arguments[i__5566__auto___8849]));

var G__8850 = (i__5566__auto___8849 + (1));
i__5566__auto___8849 = G__8850;
continue;
} else {
}
break;
}

var G__8843 = args8838.length;
switch (G__8843) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args8838.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_8852__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_8852__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_8852__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__8844_8853 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__8845_8854 = null;
var count__8846_8855 = (0);
var i__8847_8856 = (0);
while(true){
if((i__8847_8856 < count__8846_8855)){
var k_8857__$1 = chunk__8845_8854.cljs$core$IIndexed$_nth$arity$2(null,i__8847_8856);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_8857__$1);

var G__8858 = seq__8844_8853;
var G__8859 = chunk__8845_8854;
var G__8860 = count__8846_8855;
var G__8861 = (i__8847_8856 + (1));
seq__8844_8853 = G__8858;
chunk__8845_8854 = G__8859;
count__8846_8855 = G__8860;
i__8847_8856 = G__8861;
continue;
} else {
var temp__4425__auto___8862 = cljs.core.seq(seq__8844_8853);
if(temp__4425__auto___8862){
var seq__8844_8863__$1 = temp__4425__auto___8862;
if(cljs.core.chunked_seq_QMARK_(seq__8844_8863__$1)){
var c__5310__auto___8864 = cljs.core.chunk_first(seq__8844_8863__$1);
var G__8865 = cljs.core.chunk_rest(seq__8844_8863__$1);
var G__8866 = c__5310__auto___8864;
var G__8867 = cljs.core.count(c__5310__auto___8864);
var G__8868 = (0);
seq__8844_8853 = G__8865;
chunk__8845_8854 = G__8866;
count__8846_8855 = G__8867;
i__8847_8856 = G__8868;
continue;
} else {
var k_8869__$1 = cljs.core.first(seq__8844_8863__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_8869__$1);

var G__8870 = cljs.core.next(seq__8844_8863__$1);
var G__8871 = null;
var G__8872 = (0);
var G__8873 = (0);
seq__8844_8853 = G__8870;
chunk__8845_8854 = G__8871;
count__8846_8855 = G__8872;
i__8847_8856 = G__8873;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq8839){
var G__8840 = cljs.core.first(seq8839);
var seq8839__$1 = cljs.core.next(seq8839);
var G__8841 = cljs.core.first(seq8839__$1);
var seq8839__$2 = cljs.core.next(seq8839__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8840,G__8841,seq8839__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var args8874 = [];
var len__5565__auto___8877 = arguments.length;
var i__5566__auto___8878 = (0);
while(true){
if((i__5566__auto___8878 < len__5565__auto___8877)){
args8874.push((arguments[i__5566__auto___8878]));

var G__8879 = (i__5566__auto___8878 + (1));
i__5566__auto___8878 = G__8879;
continue;
} else {
}
break;
}

var G__8876 = args8874.length;
switch (G__8876) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8874.length)].join('')));

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
var args8881 = [];
var len__5565__auto___8899 = arguments.length;
var i__5566__auto___8900 = (0);
while(true){
if((i__5566__auto___8900 < len__5565__auto___8899)){
args8881.push((arguments[i__5566__auto___8900]));

var G__8901 = (i__5566__auto___8900 + (1));
i__5566__auto___8900 = G__8901;
continue;
} else {
}
break;
}

var G__8886 = args8881.length;
switch (G__8886) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args8881.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4423__auto___8903 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___8903)){
var class_list_8904 = temp__4423__auto___8903;
var seq__8887_8905 = cljs.core.seq(classes__$1);
var chunk__8888_8906 = null;
var count__8889_8907 = (0);
var i__8890_8908 = (0);
while(true){
if((i__8890_8908 < count__8889_8907)){
var c_8909 = chunk__8888_8906.cljs$core$IIndexed$_nth$arity$2(null,i__8890_8908);
class_list_8904.add(c_8909);

var G__8910 = seq__8887_8905;
var G__8911 = chunk__8888_8906;
var G__8912 = count__8889_8907;
var G__8913 = (i__8890_8908 + (1));
seq__8887_8905 = G__8910;
chunk__8888_8906 = G__8911;
count__8889_8907 = G__8912;
i__8890_8908 = G__8913;
continue;
} else {
var temp__4425__auto___8914 = cljs.core.seq(seq__8887_8905);
if(temp__4425__auto___8914){
var seq__8887_8915__$1 = temp__4425__auto___8914;
if(cljs.core.chunked_seq_QMARK_(seq__8887_8915__$1)){
var c__5310__auto___8916 = cljs.core.chunk_first(seq__8887_8915__$1);
var G__8917 = cljs.core.chunk_rest(seq__8887_8915__$1);
var G__8918 = c__5310__auto___8916;
var G__8919 = cljs.core.count(c__5310__auto___8916);
var G__8920 = (0);
seq__8887_8905 = G__8917;
chunk__8888_8906 = G__8918;
count__8889_8907 = G__8919;
i__8890_8908 = G__8920;
continue;
} else {
var c_8921 = cljs.core.first(seq__8887_8915__$1);
class_list_8904.add(c_8921);

var G__8922 = cljs.core.next(seq__8887_8915__$1);
var G__8923 = null;
var G__8924 = (0);
var G__8925 = (0);
seq__8887_8905 = G__8922;
chunk__8888_8906 = G__8923;
count__8889_8907 = G__8924;
i__8890_8908 = G__8925;
continue;
}
} else {
}
}
break;
}
} else {
var seq__8891_8926 = cljs.core.seq(classes__$1);
var chunk__8892_8927 = null;
var count__8893_8928 = (0);
var i__8894_8929 = (0);
while(true){
if((i__8894_8929 < count__8893_8928)){
var c_8930 = chunk__8892_8927.cljs$core$IIndexed$_nth$arity$2(null,i__8894_8929);
var class_name_8931 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_8931,c_8930))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_8931 === ""))?c_8930:[cljs.core.str(class_name_8931),cljs.core.str(" "),cljs.core.str(c_8930)].join('')));
}

var G__8932 = seq__8891_8926;
var G__8933 = chunk__8892_8927;
var G__8934 = count__8893_8928;
var G__8935 = (i__8894_8929 + (1));
seq__8891_8926 = G__8932;
chunk__8892_8927 = G__8933;
count__8893_8928 = G__8934;
i__8894_8929 = G__8935;
continue;
} else {
var temp__4425__auto___8936 = cljs.core.seq(seq__8891_8926);
if(temp__4425__auto___8936){
var seq__8891_8937__$1 = temp__4425__auto___8936;
if(cljs.core.chunked_seq_QMARK_(seq__8891_8937__$1)){
var c__5310__auto___8938 = cljs.core.chunk_first(seq__8891_8937__$1);
var G__8939 = cljs.core.chunk_rest(seq__8891_8937__$1);
var G__8940 = c__5310__auto___8938;
var G__8941 = cljs.core.count(c__5310__auto___8938);
var G__8942 = (0);
seq__8891_8926 = G__8939;
chunk__8892_8927 = G__8940;
count__8893_8928 = G__8941;
i__8894_8929 = G__8942;
continue;
} else {
var c_8943 = cljs.core.first(seq__8891_8937__$1);
var class_name_8944 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_8944,c_8943))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_8944 === ""))?c_8943:[cljs.core.str(class_name_8944),cljs.core.str(" "),cljs.core.str(c_8943)].join('')));
}

var G__8945 = cljs.core.next(seq__8891_8937__$1);
var G__8946 = null;
var G__8947 = (0);
var G__8948 = (0);
seq__8891_8926 = G__8945;
chunk__8892_8927 = G__8946;
count__8893_8928 = G__8947;
i__8894_8929 = G__8948;
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
var seq__8895_8949 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__8896_8950 = null;
var count__8897_8951 = (0);
var i__8898_8952 = (0);
while(true){
if((i__8898_8952 < count__8897_8951)){
var c_8953 = chunk__8896_8950.cljs$core$IIndexed$_nth$arity$2(null,i__8898_8952);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_8953);

var G__8954 = seq__8895_8949;
var G__8955 = chunk__8896_8950;
var G__8956 = count__8897_8951;
var G__8957 = (i__8898_8952 + (1));
seq__8895_8949 = G__8954;
chunk__8896_8950 = G__8955;
count__8897_8951 = G__8956;
i__8898_8952 = G__8957;
continue;
} else {
var temp__4425__auto___8958 = cljs.core.seq(seq__8895_8949);
if(temp__4425__auto___8958){
var seq__8895_8959__$1 = temp__4425__auto___8958;
if(cljs.core.chunked_seq_QMARK_(seq__8895_8959__$1)){
var c__5310__auto___8960 = cljs.core.chunk_first(seq__8895_8959__$1);
var G__8961 = cljs.core.chunk_rest(seq__8895_8959__$1);
var G__8962 = c__5310__auto___8960;
var G__8963 = cljs.core.count(c__5310__auto___8960);
var G__8964 = (0);
seq__8895_8949 = G__8961;
chunk__8896_8950 = G__8962;
count__8897_8951 = G__8963;
i__8898_8952 = G__8964;
continue;
} else {
var c_8965 = cljs.core.first(seq__8895_8959__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_8965);

var G__8966 = cljs.core.next(seq__8895_8959__$1);
var G__8967 = null;
var G__8968 = (0);
var G__8969 = (0);
seq__8895_8949 = G__8966;
chunk__8896_8950 = G__8967;
count__8897_8951 = G__8968;
i__8898_8952 = G__8969;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq8882){
var G__8883 = cljs.core.first(seq8882);
var seq8882__$1 = cljs.core.next(seq8882);
var G__8884 = cljs.core.first(seq8882__$1);
var seq8882__$2 = cljs.core.next(seq8882__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8883,G__8884,seq8882__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var args8970 = [];
var len__5565__auto___8980 = arguments.length;
var i__5566__auto___8981 = (0);
while(true){
if((i__5566__auto___8981 < len__5565__auto___8980)){
args8970.push((arguments[i__5566__auto___8981]));

var G__8982 = (i__5566__auto___8981 + (1));
i__5566__auto___8981 = G__8982;
continue;
} else {
}
break;
}

var G__8975 = args8970.length;
switch (G__8975) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args8970.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4423__auto___8984 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___8984)){
var class_list_8985 = temp__4423__auto___8984;
class_list_8985.remove(c__$1);
} else {
var class_name_8986 = dommy.core.class$(elem);
var new_class_name_8987 = dommy.utils.remove_class_str(class_name_8986,c__$1);
if((class_name_8986 === new_class_name_8987)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_8987);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__8976 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__8977 = null;
var count__8978 = (0);
var i__8979 = (0);
while(true){
if((i__8979 < count__8978)){
var c = chunk__8977.cljs$core$IIndexed$_nth$arity$2(null,i__8979);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__8988 = seq__8976;
var G__8989 = chunk__8977;
var G__8990 = count__8978;
var G__8991 = (i__8979 + (1));
seq__8976 = G__8988;
chunk__8977 = G__8989;
count__8978 = G__8990;
i__8979 = G__8991;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8976);
if(temp__4425__auto__){
var seq__8976__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8976__$1)){
var c__5310__auto__ = cljs.core.chunk_first(seq__8976__$1);
var G__8992 = cljs.core.chunk_rest(seq__8976__$1);
var G__8993 = c__5310__auto__;
var G__8994 = cljs.core.count(c__5310__auto__);
var G__8995 = (0);
seq__8976 = G__8992;
chunk__8977 = G__8993;
count__8978 = G__8994;
i__8979 = G__8995;
continue;
} else {
var c = cljs.core.first(seq__8976__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__8996 = cljs.core.next(seq__8976__$1);
var G__8997 = null;
var G__8998 = (0);
var G__8999 = (0);
seq__8976 = G__8996;
chunk__8977 = G__8997;
count__8978 = G__8998;
i__8979 = G__8999;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq8971){
var G__8972 = cljs.core.first(seq8971);
var seq8971__$1 = cljs.core.next(seq8971);
var G__8973 = cljs.core.first(seq8971__$1);
var seq8971__$2 = cljs.core.next(seq8971__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8972,G__8973,seq8971__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var args9000 = [];
var len__5565__auto___9003 = arguments.length;
var i__5566__auto___9004 = (0);
while(true){
if((i__5566__auto___9004 < len__5565__auto___9003)){
args9000.push((arguments[i__5566__auto___9004]));

var G__9005 = (i__5566__auto___9004 + (1));
i__5566__auto___9004 = G__9005;
continue;
} else {
}
break;
}

var G__9002 = args9000.length;
switch (G__9002) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9000.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4423__auto___9007 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___9007)){
var class_list_9008 = temp__4423__auto___9007;
class_list_9008.toggle(c__$1);
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
var args9009 = [];
var len__5565__auto___9012 = arguments.length;
var i__5566__auto___9013 = (0);
while(true){
if((i__5566__auto___9013 < len__5565__auto___9012)){
args9009.push((arguments[i__5566__auto___9013]));

var G__9014 = (i__5566__auto___9013 + (1));
i__5566__auto___9013 = G__9014;
continue;
} else {
}
break;
}

var G__9011 = args9009.length;
switch (G__9011) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9009.length)].join('')));

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
var args9016 = [];
var len__5565__auto___9019 = arguments.length;
var i__5566__auto___9020 = (0);
while(true){
if((i__5566__auto___9020 < len__5565__auto___9019)){
args9016.push((arguments[i__5566__auto___9020]));

var G__9021 = (i__5566__auto___9020 + (1));
i__5566__auto___9020 = G__9021;
continue;
} else {
}
break;
}

var G__9018 = args9016.length;
switch (G__9018) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9016.length)].join('')));

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
var args9023 = [];
var len__5565__auto___9034 = arguments.length;
var i__5566__auto___9035 = (0);
while(true){
if((i__5566__auto___9035 < len__5565__auto___9034)){
args9023.push((arguments[i__5566__auto___9035]));

var G__9036 = (i__5566__auto___9035 + (1));
i__5566__auto___9035 = G__9036;
continue;
} else {
}
break;
}

var G__9028 = args9023.length;
switch (G__9028) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args9023.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9029 = parent;
G__9029.appendChild(child);

return G__9029;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9030_9038 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__9031_9039 = null;
var count__9032_9040 = (0);
var i__9033_9041 = (0);
while(true){
if((i__9033_9041 < count__9032_9040)){
var c_9042 = chunk__9031_9039.cljs$core$IIndexed$_nth$arity$2(null,i__9033_9041);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_9042);

var G__9043 = seq__9030_9038;
var G__9044 = chunk__9031_9039;
var G__9045 = count__9032_9040;
var G__9046 = (i__9033_9041 + (1));
seq__9030_9038 = G__9043;
chunk__9031_9039 = G__9044;
count__9032_9040 = G__9045;
i__9033_9041 = G__9046;
continue;
} else {
var temp__4425__auto___9047 = cljs.core.seq(seq__9030_9038);
if(temp__4425__auto___9047){
var seq__9030_9048__$1 = temp__4425__auto___9047;
if(cljs.core.chunked_seq_QMARK_(seq__9030_9048__$1)){
var c__5310__auto___9049 = cljs.core.chunk_first(seq__9030_9048__$1);
var G__9050 = cljs.core.chunk_rest(seq__9030_9048__$1);
var G__9051 = c__5310__auto___9049;
var G__9052 = cljs.core.count(c__5310__auto___9049);
var G__9053 = (0);
seq__9030_9038 = G__9050;
chunk__9031_9039 = G__9051;
count__9032_9040 = G__9052;
i__9033_9041 = G__9053;
continue;
} else {
var c_9054 = cljs.core.first(seq__9030_9048__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_9054);

var G__9055 = cljs.core.next(seq__9030_9048__$1);
var G__9056 = null;
var G__9057 = (0);
var G__9058 = (0);
seq__9030_9038 = G__9055;
chunk__9031_9039 = G__9056;
count__9032_9040 = G__9057;
i__9033_9041 = G__9058;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq9024){
var G__9025 = cljs.core.first(seq9024);
var seq9024__$1 = cljs.core.next(seq9024);
var G__9026 = cljs.core.first(seq9024__$1);
var seq9024__$2 = cljs.core.next(seq9024__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9025,G__9026,seq9024__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var args9059 = [];
var len__5565__auto___9070 = arguments.length;
var i__5566__auto___9071 = (0);
while(true){
if((i__5566__auto___9071 < len__5565__auto___9070)){
args9059.push((arguments[i__5566__auto___9071]));

var G__9072 = (i__5566__auto___9071 + (1));
i__5566__auto___9071 = G__9072;
continue;
} else {
}
break;
}

var G__9064 = args9059.length;
switch (G__9064) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5584__auto__ = (new cljs.core.IndexedSeq(args9059.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5584__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9065 = parent;
G__9065.insertBefore(child,parent.firstChild);

return G__9065;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9066_9074 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__9067_9075 = null;
var count__9068_9076 = (0);
var i__9069_9077 = (0);
while(true){
if((i__9069_9077 < count__9068_9076)){
var c_9078 = chunk__9067_9075.cljs$core$IIndexed$_nth$arity$2(null,i__9069_9077);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_9078);

var G__9079 = seq__9066_9074;
var G__9080 = chunk__9067_9075;
var G__9081 = count__9068_9076;
var G__9082 = (i__9069_9077 + (1));
seq__9066_9074 = G__9079;
chunk__9067_9075 = G__9080;
count__9068_9076 = G__9081;
i__9069_9077 = G__9082;
continue;
} else {
var temp__4425__auto___9083 = cljs.core.seq(seq__9066_9074);
if(temp__4425__auto___9083){
var seq__9066_9084__$1 = temp__4425__auto___9083;
if(cljs.core.chunked_seq_QMARK_(seq__9066_9084__$1)){
var c__5310__auto___9085 = cljs.core.chunk_first(seq__9066_9084__$1);
var G__9086 = cljs.core.chunk_rest(seq__9066_9084__$1);
var G__9087 = c__5310__auto___9085;
var G__9088 = cljs.core.count(c__5310__auto___9085);
var G__9089 = (0);
seq__9066_9074 = G__9086;
chunk__9067_9075 = G__9087;
count__9068_9076 = G__9088;
i__9069_9077 = G__9089;
continue;
} else {
var c_9090 = cljs.core.first(seq__9066_9084__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_9090);

var G__9091 = cljs.core.next(seq__9066_9084__$1);
var G__9092 = null;
var G__9093 = (0);
var G__9094 = (0);
seq__9066_9074 = G__9091;
chunk__9067_9075 = G__9092;
count__9068_9076 = G__9093;
i__9069_9077 = G__9094;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq9060){
var G__9061 = cljs.core.first(seq9060);
var seq9060__$1 = cljs.core.next(seq9060);
var G__9062 = cljs.core.first(seq9060__$1);
var seq9060__$2 = cljs.core.next(seq9060__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9061,G__9062,seq9060__$2);
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
var temp__4423__auto___9095 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___9095)){
var next_9096 = temp__4423__auto___9095;
dommy.core.insert_before_BANG_(elem,next_9096);
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
var args9097 = [];
var len__5565__auto___9101 = arguments.length;
var i__5566__auto___9102 = (0);
while(true){
if((i__5566__auto___9102 < len__5565__auto___9101)){
args9097.push((arguments[i__5566__auto___9102]));

var G__9103 = (i__5566__auto___9102 + (1));
i__5566__auto___9102 = G__9103;
continue;
} else {
}
break;
}

var G__9099 = args9097.length;
switch (G__9099) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9097.length)].join('')));

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
var G__9100 = p;
G__9100.removeChild(elem);

return G__9100;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9105){
var vec__9106 = p__9105;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9106,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__9106,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__9106,special_mouse_event,real_mouse_event){
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
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4514__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__9106,special_mouse_event,real_mouse_event))
});})(vec__9106,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4514__auto__ = selected_target;
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__4514__auto__;
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
var or__4526__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___9110 = arguments.length;
var i__5566__auto___9111 = (0);
while(true){
if((i__5566__auto___9111 < len__5565__auto___9110)){
args__5572__auto__.push((arguments[i__5566__auto___9111]));

var G__9112 = (i__5566__auto___9111 + (1));
i__5566__auto___9111 = G__9112;
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
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq9107){
var G__9108 = cljs.core.first(seq9107);
var seq9107__$1 = cljs.core.next(seq9107);
var G__9109 = cljs.core.first(seq9107__$1);
var seq9107__$2 = cljs.core.next(seq9107__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9108,G__9109,seq9107__$2);
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
var args__5572__auto__ = [];
var len__5565__auto___9138 = arguments.length;
var i__5566__auto___9139 = (0);
while(true){
if((i__5566__auto___9139 < len__5565__auto___9138)){
args__5572__auto__.push((arguments[i__5566__auto___9139]));

var G__9140 = (i__5566__auto___9139 + (1));
i__5566__auto___9139 = G__9140;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__9115_9141 = dommy.core.elem_and_selector(elem_sel);
var elem_9142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9115_9141,(0),null);
var selector_9143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9115_9141,(1),null);
var seq__9116_9144 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__9123_9145 = null;
var count__9124_9146 = (0);
var i__9125_9147 = (0);
while(true){
if((i__9125_9147 < count__9124_9146)){
var vec__9132_9148 = chunk__9123_9145.cljs$core$IIndexed$_nth$arity$2(null,i__9125_9147);
var orig_type_9149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9132_9148,(0),null);
var f_9150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9132_9148,(1),null);
var seq__9126_9151 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_9149,new cljs.core.PersistentArrayMap.fromArray([orig_type_9149,cljs.core.identity], true, false)));
var chunk__9128_9152 = null;
var count__9129_9153 = (0);
var i__9130_9154 = (0);
while(true){
if((i__9130_9154 < count__9129_9153)){
var vec__9133_9155 = chunk__9128_9152.cljs$core$IIndexed$_nth$arity$2(null,i__9130_9154);
var actual_type_9156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9133_9155,(0),null);
var factory_9157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9133_9155,(1),null);
var canonical_f_9158 = (cljs.core.truth_(selector_9143)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_9142,selector_9143):cljs.core.identity).call(null,(factory_9157.cljs$core$IFn$_invoke$arity$1 ? factory_9157.cljs$core$IFn$_invoke$arity$1(f_9150) : factory_9157.call(null,f_9150)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9142,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9143,actual_type_9156,f_9150], null),canonical_f_9158], 0));

if(cljs.core.truth_(elem_9142.addEventListener)){
elem_9142.addEventListener(cljs.core.name(actual_type_9156),canonical_f_9158);
} else {
elem_9142.attachEvent(cljs.core.name(actual_type_9156),canonical_f_9158);
}

var G__9159 = seq__9126_9151;
var G__9160 = chunk__9128_9152;
var G__9161 = count__9129_9153;
var G__9162 = (i__9130_9154 + (1));
seq__9126_9151 = G__9159;
chunk__9128_9152 = G__9160;
count__9129_9153 = G__9161;
i__9130_9154 = G__9162;
continue;
} else {
var temp__4425__auto___9163 = cljs.core.seq(seq__9126_9151);
if(temp__4425__auto___9163){
var seq__9126_9164__$1 = temp__4425__auto___9163;
if(cljs.core.chunked_seq_QMARK_(seq__9126_9164__$1)){
var c__5310__auto___9165 = cljs.core.chunk_first(seq__9126_9164__$1);
var G__9166 = cljs.core.chunk_rest(seq__9126_9164__$1);
var G__9167 = c__5310__auto___9165;
var G__9168 = cljs.core.count(c__5310__auto___9165);
var G__9169 = (0);
seq__9126_9151 = G__9166;
chunk__9128_9152 = G__9167;
count__9129_9153 = G__9168;
i__9130_9154 = G__9169;
continue;
} else {
var vec__9134_9170 = cljs.core.first(seq__9126_9164__$1);
var actual_type_9171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9134_9170,(0),null);
var factory_9172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9134_9170,(1),null);
var canonical_f_9173 = (cljs.core.truth_(selector_9143)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_9142,selector_9143):cljs.core.identity).call(null,(factory_9172.cljs$core$IFn$_invoke$arity$1 ? factory_9172.cljs$core$IFn$_invoke$arity$1(f_9150) : factory_9172.call(null,f_9150)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9142,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9143,actual_type_9171,f_9150], null),canonical_f_9173], 0));

if(cljs.core.truth_(elem_9142.addEventListener)){
elem_9142.addEventListener(cljs.core.name(actual_type_9171),canonical_f_9173);
} else {
elem_9142.attachEvent(cljs.core.name(actual_type_9171),canonical_f_9173);
}

var G__9174 = cljs.core.next(seq__9126_9164__$1);
var G__9175 = null;
var G__9176 = (0);
var G__9177 = (0);
seq__9126_9151 = G__9174;
chunk__9128_9152 = G__9175;
count__9129_9153 = G__9176;
i__9130_9154 = G__9177;
continue;
}
} else {
}
}
break;
}

var G__9178 = seq__9116_9144;
var G__9179 = chunk__9123_9145;
var G__9180 = count__9124_9146;
var G__9181 = (i__9125_9147 + (1));
seq__9116_9144 = G__9178;
chunk__9123_9145 = G__9179;
count__9124_9146 = G__9180;
i__9125_9147 = G__9181;
continue;
} else {
var temp__4425__auto___9182 = cljs.core.seq(seq__9116_9144);
if(temp__4425__auto___9182){
var seq__9116_9183__$1 = temp__4425__auto___9182;
if(cljs.core.chunked_seq_QMARK_(seq__9116_9183__$1)){
var c__5310__auto___9184 = cljs.core.chunk_first(seq__9116_9183__$1);
var G__9185 = cljs.core.chunk_rest(seq__9116_9183__$1);
var G__9186 = c__5310__auto___9184;
var G__9187 = cljs.core.count(c__5310__auto___9184);
var G__9188 = (0);
seq__9116_9144 = G__9185;
chunk__9123_9145 = G__9186;
count__9124_9146 = G__9187;
i__9125_9147 = G__9188;
continue;
} else {
var vec__9135_9189 = cljs.core.first(seq__9116_9183__$1);
var orig_type_9190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9135_9189,(0),null);
var f_9191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9135_9189,(1),null);
var seq__9117_9192 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_9190,new cljs.core.PersistentArrayMap.fromArray([orig_type_9190,cljs.core.identity], true, false)));
var chunk__9119_9193 = null;
var count__9120_9194 = (0);
var i__9121_9195 = (0);
while(true){
if((i__9121_9195 < count__9120_9194)){
var vec__9136_9196 = chunk__9119_9193.cljs$core$IIndexed$_nth$arity$2(null,i__9121_9195);
var actual_type_9197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9136_9196,(0),null);
var factory_9198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9136_9196,(1),null);
var canonical_f_9199 = (cljs.core.truth_(selector_9143)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_9142,selector_9143):cljs.core.identity).call(null,(factory_9198.cljs$core$IFn$_invoke$arity$1 ? factory_9198.cljs$core$IFn$_invoke$arity$1(f_9191) : factory_9198.call(null,f_9191)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9142,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9143,actual_type_9197,f_9191], null),canonical_f_9199], 0));

if(cljs.core.truth_(elem_9142.addEventListener)){
elem_9142.addEventListener(cljs.core.name(actual_type_9197),canonical_f_9199);
} else {
elem_9142.attachEvent(cljs.core.name(actual_type_9197),canonical_f_9199);
}

var G__9200 = seq__9117_9192;
var G__9201 = chunk__9119_9193;
var G__9202 = count__9120_9194;
var G__9203 = (i__9121_9195 + (1));
seq__9117_9192 = G__9200;
chunk__9119_9193 = G__9201;
count__9120_9194 = G__9202;
i__9121_9195 = G__9203;
continue;
} else {
var temp__4425__auto___9204__$1 = cljs.core.seq(seq__9117_9192);
if(temp__4425__auto___9204__$1){
var seq__9117_9205__$1 = temp__4425__auto___9204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9117_9205__$1)){
var c__5310__auto___9206 = cljs.core.chunk_first(seq__9117_9205__$1);
var G__9207 = cljs.core.chunk_rest(seq__9117_9205__$1);
var G__9208 = c__5310__auto___9206;
var G__9209 = cljs.core.count(c__5310__auto___9206);
var G__9210 = (0);
seq__9117_9192 = G__9207;
chunk__9119_9193 = G__9208;
count__9120_9194 = G__9209;
i__9121_9195 = G__9210;
continue;
} else {
var vec__9137_9211 = cljs.core.first(seq__9117_9205__$1);
var actual_type_9212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9137_9211,(0),null);
var factory_9213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9137_9211,(1),null);
var canonical_f_9214 = (cljs.core.truth_(selector_9143)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_9142,selector_9143):cljs.core.identity).call(null,(factory_9213.cljs$core$IFn$_invoke$arity$1 ? factory_9213.cljs$core$IFn$_invoke$arity$1(f_9191) : factory_9213.call(null,f_9191)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9142,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9143,actual_type_9212,f_9191], null),canonical_f_9214], 0));

if(cljs.core.truth_(elem_9142.addEventListener)){
elem_9142.addEventListener(cljs.core.name(actual_type_9212),canonical_f_9214);
} else {
elem_9142.attachEvent(cljs.core.name(actual_type_9212),canonical_f_9214);
}

var G__9215 = cljs.core.next(seq__9117_9205__$1);
var G__9216 = null;
var G__9217 = (0);
var G__9218 = (0);
seq__9117_9192 = G__9215;
chunk__9119_9193 = G__9216;
count__9120_9194 = G__9217;
i__9121_9195 = G__9218;
continue;
}
} else {
}
}
break;
}

var G__9219 = cljs.core.next(seq__9116_9183__$1);
var G__9220 = null;
var G__9221 = (0);
var G__9222 = (0);
seq__9116_9144 = G__9219;
chunk__9123_9145 = G__9220;
count__9124_9146 = G__9221;
i__9125_9147 = G__9222;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq9113){
var G__9114 = cljs.core.first(seq9113);
var seq9113__$1 = cljs.core.next(seq9113);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9114,seq9113__$1);
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
var len__5565__auto___9248 = arguments.length;
var i__5566__auto___9249 = (0);
while(true){
if((i__5566__auto___9249 < len__5565__auto___9248)){
args__5572__auto__.push((arguments[i__5566__auto___9249]));

var G__9250 = (i__5566__auto___9249 + (1));
i__5566__auto___9249 = G__9250;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__9225_9251 = dommy.core.elem_and_selector(elem_sel);
var elem_9252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9225_9251,(0),null);
var selector_9253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9225_9251,(1),null);
var seq__9226_9254 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__9233_9255 = null;
var count__9234_9256 = (0);
var i__9235_9257 = (0);
while(true){
if((i__9235_9257 < count__9234_9256)){
var vec__9242_9258 = chunk__9233_9255.cljs$core$IIndexed$_nth$arity$2(null,i__9235_9257);
var orig_type_9259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9242_9258,(0),null);
var f_9260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9242_9258,(1),null);
var seq__9236_9261 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_9259,new cljs.core.PersistentArrayMap.fromArray([orig_type_9259,cljs.core.identity], true, false)));
var chunk__9238_9262 = null;
var count__9239_9263 = (0);
var i__9240_9264 = (0);
while(true){
if((i__9240_9264 < count__9239_9263)){
var vec__9243_9265 = chunk__9238_9262.cljs$core$IIndexed$_nth$arity$2(null,i__9240_9264);
var actual_type_9266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9243_9265,(0),null);
var __9267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9243_9265,(1),null);
var keys_9268 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9253,actual_type_9266,f_9260], null);
var canonical_f_9269 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_9252),keys_9268);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9252,dommy.utils.dissoc_in,cljs.core.array_seq([keys_9268], 0));

if(cljs.core.truth_(elem_9252.removeEventListener)){
elem_9252.removeEventListener(cljs.core.name(actual_type_9266),canonical_f_9269);
} else {
elem_9252.detachEvent(cljs.core.name(actual_type_9266),canonical_f_9269);
}

var G__9270 = seq__9236_9261;
var G__9271 = chunk__9238_9262;
var G__9272 = count__9239_9263;
var G__9273 = (i__9240_9264 + (1));
seq__9236_9261 = G__9270;
chunk__9238_9262 = G__9271;
count__9239_9263 = G__9272;
i__9240_9264 = G__9273;
continue;
} else {
var temp__4425__auto___9274 = cljs.core.seq(seq__9236_9261);
if(temp__4425__auto___9274){
var seq__9236_9275__$1 = temp__4425__auto___9274;
if(cljs.core.chunked_seq_QMARK_(seq__9236_9275__$1)){
var c__5310__auto___9276 = cljs.core.chunk_first(seq__9236_9275__$1);
var G__9277 = cljs.core.chunk_rest(seq__9236_9275__$1);
var G__9278 = c__5310__auto___9276;
var G__9279 = cljs.core.count(c__5310__auto___9276);
var G__9280 = (0);
seq__9236_9261 = G__9277;
chunk__9238_9262 = G__9278;
count__9239_9263 = G__9279;
i__9240_9264 = G__9280;
continue;
} else {
var vec__9244_9281 = cljs.core.first(seq__9236_9275__$1);
var actual_type_9282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_9281,(0),null);
var __9283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_9281,(1),null);
var keys_9284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9253,actual_type_9282,f_9260], null);
var canonical_f_9285 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_9252),keys_9284);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9252,dommy.utils.dissoc_in,cljs.core.array_seq([keys_9284], 0));

if(cljs.core.truth_(elem_9252.removeEventListener)){
elem_9252.removeEventListener(cljs.core.name(actual_type_9282),canonical_f_9285);
} else {
elem_9252.detachEvent(cljs.core.name(actual_type_9282),canonical_f_9285);
}

var G__9286 = cljs.core.next(seq__9236_9275__$1);
var G__9287 = null;
var G__9288 = (0);
var G__9289 = (0);
seq__9236_9261 = G__9286;
chunk__9238_9262 = G__9287;
count__9239_9263 = G__9288;
i__9240_9264 = G__9289;
continue;
}
} else {
}
}
break;
}

var G__9290 = seq__9226_9254;
var G__9291 = chunk__9233_9255;
var G__9292 = count__9234_9256;
var G__9293 = (i__9235_9257 + (1));
seq__9226_9254 = G__9290;
chunk__9233_9255 = G__9291;
count__9234_9256 = G__9292;
i__9235_9257 = G__9293;
continue;
} else {
var temp__4425__auto___9294 = cljs.core.seq(seq__9226_9254);
if(temp__4425__auto___9294){
var seq__9226_9295__$1 = temp__4425__auto___9294;
if(cljs.core.chunked_seq_QMARK_(seq__9226_9295__$1)){
var c__5310__auto___9296 = cljs.core.chunk_first(seq__9226_9295__$1);
var G__9297 = cljs.core.chunk_rest(seq__9226_9295__$1);
var G__9298 = c__5310__auto___9296;
var G__9299 = cljs.core.count(c__5310__auto___9296);
var G__9300 = (0);
seq__9226_9254 = G__9297;
chunk__9233_9255 = G__9298;
count__9234_9256 = G__9299;
i__9235_9257 = G__9300;
continue;
} else {
var vec__9245_9301 = cljs.core.first(seq__9226_9295__$1);
var orig_type_9302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9245_9301,(0),null);
var f_9303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9245_9301,(1),null);
var seq__9227_9304 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_9302,new cljs.core.PersistentArrayMap.fromArray([orig_type_9302,cljs.core.identity], true, false)));
var chunk__9229_9305 = null;
var count__9230_9306 = (0);
var i__9231_9307 = (0);
while(true){
if((i__9231_9307 < count__9230_9306)){
var vec__9246_9308 = chunk__9229_9305.cljs$core$IIndexed$_nth$arity$2(null,i__9231_9307);
var actual_type_9309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9246_9308,(0),null);
var __9310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9246_9308,(1),null);
var keys_9311 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9253,actual_type_9309,f_9303], null);
var canonical_f_9312 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_9252),keys_9311);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9252,dommy.utils.dissoc_in,cljs.core.array_seq([keys_9311], 0));

if(cljs.core.truth_(elem_9252.removeEventListener)){
elem_9252.removeEventListener(cljs.core.name(actual_type_9309),canonical_f_9312);
} else {
elem_9252.detachEvent(cljs.core.name(actual_type_9309),canonical_f_9312);
}

var G__9313 = seq__9227_9304;
var G__9314 = chunk__9229_9305;
var G__9315 = count__9230_9306;
var G__9316 = (i__9231_9307 + (1));
seq__9227_9304 = G__9313;
chunk__9229_9305 = G__9314;
count__9230_9306 = G__9315;
i__9231_9307 = G__9316;
continue;
} else {
var temp__4425__auto___9317__$1 = cljs.core.seq(seq__9227_9304);
if(temp__4425__auto___9317__$1){
var seq__9227_9318__$1 = temp__4425__auto___9317__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9227_9318__$1)){
var c__5310__auto___9319 = cljs.core.chunk_first(seq__9227_9318__$1);
var G__9320 = cljs.core.chunk_rest(seq__9227_9318__$1);
var G__9321 = c__5310__auto___9319;
var G__9322 = cljs.core.count(c__5310__auto___9319);
var G__9323 = (0);
seq__9227_9304 = G__9320;
chunk__9229_9305 = G__9321;
count__9230_9306 = G__9322;
i__9231_9307 = G__9323;
continue;
} else {
var vec__9247_9324 = cljs.core.first(seq__9227_9318__$1);
var actual_type_9325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9247_9324,(0),null);
var __9326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9247_9324,(1),null);
var keys_9327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9253,actual_type_9325,f_9303], null);
var canonical_f_9328 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_9252),keys_9327);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_9252,dommy.utils.dissoc_in,cljs.core.array_seq([keys_9327], 0));

if(cljs.core.truth_(elem_9252.removeEventListener)){
elem_9252.removeEventListener(cljs.core.name(actual_type_9325),canonical_f_9328);
} else {
elem_9252.detachEvent(cljs.core.name(actual_type_9325),canonical_f_9328);
}

var G__9329 = cljs.core.next(seq__9227_9318__$1);
var G__9330 = null;
var G__9331 = (0);
var G__9332 = (0);
seq__9227_9304 = G__9329;
chunk__9229_9305 = G__9330;
count__9230_9306 = G__9331;
i__9231_9307 = G__9332;
continue;
}
} else {
}
}
break;
}

var G__9333 = cljs.core.next(seq__9226_9295__$1);
var G__9334 = null;
var G__9335 = (0);
var G__9336 = (0);
seq__9226_9254 = G__9333;
chunk__9233_9255 = G__9334;
count__9234_9256 = G__9335;
i__9235_9257 = G__9336;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq9223){
var G__9224 = cljs.core.first(seq9223);
var seq9223__$1 = cljs.core.next(seq9223);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9224,seq9223__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___9346 = arguments.length;
var i__5566__auto___9347 = (0);
while(true){
if((i__5566__auto___9347 < len__5565__auto___9346)){
args__5572__auto__.push((arguments[i__5566__auto___9347]));

var G__9348 = (i__5566__auto___9347 + (1));
i__5566__auto___9347 = G__9348;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$even_QMARK_,cljs.core.list(cljs.core.cst$sym$count,cljs.core.cst$sym$type_DASH_fs))], 0)))].join('')));
}

var vec__9339_9349 = dommy.core.elem_and_selector(elem_sel);
var elem_9350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9339_9349,(0),null);
var selector_9351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9339_9349,(1),null);
var seq__9340_9352 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__9341_9353 = null;
var count__9342_9354 = (0);
var i__9343_9355 = (0);
while(true){
if((i__9343_9355 < count__9342_9354)){
var vec__9344_9356 = chunk__9341_9353.cljs$core$IIndexed$_nth$arity$2(null,i__9343_9355);
var type_9357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9344_9356,(0),null);
var f_9358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9344_9356,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_9357,((function (seq__9340_9352,chunk__9341_9353,count__9342_9354,i__9343_9355,vec__9344_9356,type_9357,f_9358,vec__9339_9349,elem_9350,selector_9351){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_9357,dommy$core$this_fn], 0));

return (f_9358.cljs$core$IFn$_invoke$arity$1 ? f_9358.cljs$core$IFn$_invoke$arity$1(e) : f_9358.call(null,e));
});})(seq__9340_9352,chunk__9341_9353,count__9342_9354,i__9343_9355,vec__9344_9356,type_9357,f_9358,vec__9339_9349,elem_9350,selector_9351))
], 0));

var G__9359 = seq__9340_9352;
var G__9360 = chunk__9341_9353;
var G__9361 = count__9342_9354;
var G__9362 = (i__9343_9355 + (1));
seq__9340_9352 = G__9359;
chunk__9341_9353 = G__9360;
count__9342_9354 = G__9361;
i__9343_9355 = G__9362;
continue;
} else {
var temp__4425__auto___9363 = cljs.core.seq(seq__9340_9352);
if(temp__4425__auto___9363){
var seq__9340_9364__$1 = temp__4425__auto___9363;
if(cljs.core.chunked_seq_QMARK_(seq__9340_9364__$1)){
var c__5310__auto___9365 = cljs.core.chunk_first(seq__9340_9364__$1);
var G__9366 = cljs.core.chunk_rest(seq__9340_9364__$1);
var G__9367 = c__5310__auto___9365;
var G__9368 = cljs.core.count(c__5310__auto___9365);
var G__9369 = (0);
seq__9340_9352 = G__9366;
chunk__9341_9353 = G__9367;
count__9342_9354 = G__9368;
i__9343_9355 = G__9369;
continue;
} else {
var vec__9345_9370 = cljs.core.first(seq__9340_9364__$1);
var type_9371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9345_9370,(0),null);
var f_9372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9345_9370,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_9371,((function (seq__9340_9352,chunk__9341_9353,count__9342_9354,i__9343_9355,vec__9345_9370,type_9371,f_9372,seq__9340_9364__$1,temp__4425__auto___9363,vec__9339_9349,elem_9350,selector_9351){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_9371,dommy$core$this_fn], 0));

return (f_9372.cljs$core$IFn$_invoke$arity$1 ? f_9372.cljs$core$IFn$_invoke$arity$1(e) : f_9372.call(null,e));
});})(seq__9340_9352,chunk__9341_9353,count__9342_9354,i__9343_9355,vec__9345_9370,type_9371,f_9372,seq__9340_9364__$1,temp__4425__auto___9363,vec__9339_9349,elem_9350,selector_9351))
], 0));

var G__9373 = cljs.core.next(seq__9340_9364__$1);
var G__9374 = null;
var G__9375 = (0);
var G__9376 = (0);
seq__9340_9352 = G__9373;
chunk__9341_9353 = G__9374;
count__9342_9354 = G__9375;
i__9343_9355 = G__9376;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq9337){
var G__9338 = cljs.core.first(seq9337);
var seq9337__$1 = cljs.core.next(seq9337);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9338,seq9337__$1);
});
