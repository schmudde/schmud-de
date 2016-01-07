// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__18325){
var vec__18329 = p__18325;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
var ks = cljs.core.nthnext(vec__18329,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__13430__auto__ = ks;
if(cljs.core.truth_(and__13430__auto__)){
return dommy$utils$dissoc_in((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)),ks);
} else {
return and__13430__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [cljs.core.str((function (){var G__18331 = cljs.core.namespace(s);
var G__18331__$1 = (((G__18331 == null))?null:[cljs.core.str(G__18331),cljs.core.str("/")].join(''));
return G__18331__$1;
})()),cljs.core.str(cljs.core.name(s))].join('');
} else {
return s;
}
});
/**
 * Does `class-name` string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_match_QMARK_ = (function dommy$utils$class_match_QMARK_(class_name,class$,idx){
var and__13430__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__13430__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__13430__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_index = (function dommy$utils$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.utils.class_match_QMARK_(class_name,class$,i)){
return i;
} else {
var G__18332 = (i + class$.length);
start_from = G__18332;
continue;
}
} else {
return null;
}
break;
}
});
dommy.utils.remove_class_str = (function dommy$utils$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4423__auto__ = dommy.utils.class_index(class_name,class$);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
var G__18333 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__18333;
continue;
} else {
return class_name;
}
break;
}
});
