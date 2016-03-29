// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.navigation_2d');
goog.require('cljs.core');
goog.require('quil.core');
quil.middlewares.navigation_2d.missing_navigation_key_error = [cljs.core.str("state map is missing :navigation-2d key. "),cljs.core.str("Did you accidentally removed it from the state in "),cljs.core.str(":update or any other handler?")].join('');
/**
 * Asserts that state map contains :navigation-2d object.
 */
quil.middlewares.navigation_2d.assert_state_has_navigation = (function quil$middlewares$navigation_2d$assert_state_has_navigation(state){
if(cljs.core.truth_(cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_2d.missing_navigation_key_error));
}
});
/**
 * Default position configuration: zoom is neutral and central point is
 * width/2, height/2.
 */
quil.middlewares.navigation_2d.default_position = (function quil$middlewares$navigation_2d$default_position(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0)], null),cljs.core.cst$kw$zoom,(1)], null);
});
/**
 * Custom 'setup' function which creates initial position
 * configuration and puts it to the state map.
 */
quil.middlewares.navigation_2d.setup_2d_nav = (function quil$middlewares$navigation_2d$setup_2d_nav(user_setup,user_settings){
var initial_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([quil.middlewares.navigation_2d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$position,cljs.core.cst$kw$zoom], null))], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d], null),((function (initial_state){
return (function (p1__10111_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([initial_state,p1__10111_SHARP_], 0));
});})(initial_state))
);
});
/**
 * Changes center of the sketch depending on the last mouse move. Takes
 * zoom into account as well.
 */
quil.middlewares.navigation_2d.mouse_dragged = (function quil$middlewares$navigation_2d$mouse_dragged(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

var dx = (cljs.core.cst$kw$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event));
var dy = (cljs.core.cst$kw$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event));
var zoom = cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$position,(0)], null),cljs.core._PLUS_,(dx / zoom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$position,(1)], null),cljs.core._PLUS_,(dy / zoom));
});
/**
 * Changes zoom settings based on scroll.
 */
quil.middlewares.navigation_2d.mouse_wheel = (function quil$middlewares$navigation_2d$mouse_wheel(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_2d,cljs.core.cst$kw$zoom], null),cljs.core._STAR_,((1) + (-0.1 * event)));
});
/**
 * Calls user draw function with necessary all transformations (position
 * and zoom) applied.
 */
quil.middlewares.navigation_2d.draw = (function quil$middlewares$navigation_2d$draw(user_draw,state){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

quil.core.push_matrix();

var nav_2d_10112 = cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(state);
var zoom_10113 = cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(nav_2d_10112);
var pos_10114 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(nav_2d_10112);
quil.core.scale.cljs$core$IFn$_invoke$arity$1(zoom_10113);

var tr__8497__auto___10115 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.width() / (2)) / zoom_10113) - cljs.core.first(pos_10114)),(((quil.core.height() / (2)) / zoom_10113) - cljs.core.second(pos_10114))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__8497__auto___10115);

(user_draw.cljs$core$IFn$_invoke$arity$1 ? user_draw.cljs$core$IFn$_invoke$arity$1(state) : user_draw.call(null,state));
}finally {quil.core.pop_matrix();
}
return quil.core.pop_matrix();
});
/**
 * Enables navigation over 2D sketch. Dragging mouse will move center of the
 * skecth and mouse wheel controls zoom.
 */
quil.middlewares.navigation_2d.navigation_2d = (function quil$middlewares$navigation_2d$navigation_2d(options){
var user_settings = cljs.core.cst$kw$navigation_DASH_2d.cljs$core$IFn$_invoke$arity$1(options);
var user_draw = cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings){
return (function (state){
return null;
});})(user_settings))
);
var user_mouse_dragged = cljs.core.cst$kw$mouse_DASH_dragged.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,user_draw){
return (function (state,_){
return state;
});})(user_settings,user_draw))
);
var user_mouse_wheel = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,user_draw,user_mouse_dragged){
return (function (state,_){
return state;
});})(user_settings,user_draw,user_mouse_dragged))
);
var setup = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,user_draw,user_mouse_dragged,user_mouse_wheel){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(user_settings,user_draw,user_mouse_dragged,user_mouse_wheel))
);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$setup,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_2d.setup_2d_nav,setup,user_settings),cljs.core.array_seq([cljs.core.cst$kw$draw,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(quil.middlewares.navigation_2d.draw,user_draw),cljs.core.cst$kw$mouse_DASH_dragged,((function (user_settings,user_draw,user_mouse_dragged,user_mouse_wheel,setup){
return (function (state,event){
var G__10120 = quil.middlewares.navigation_2d.mouse_dragged(state,event);
var G__10121 = event;
return (user_mouse_dragged.cljs$core$IFn$_invoke$arity$2 ? user_mouse_dragged.cljs$core$IFn$_invoke$arity$2(G__10120,G__10121) : user_mouse_dragged.call(null,G__10120,G__10121));
});})(user_settings,user_draw,user_mouse_dragged,user_mouse_wheel,setup))
,cljs.core.cst$kw$mouse_DASH_wheel,((function (user_settings,user_draw,user_mouse_dragged,user_mouse_wheel,setup){
return (function (state,event){
var G__10122 = quil.middlewares.navigation_2d.mouse_wheel(state,event);
var G__10123 = event;
return (user_mouse_wheel.cljs$core$IFn$_invoke$arity$2 ? user_mouse_wheel.cljs$core$IFn$_invoke$arity$2(G__10122,G__10123) : user_mouse_wheel.call(null,G__10122,G__10123));
});})(user_settings,user_draw,user_mouse_dragged,user_mouse_wheel,setup))
], 0));
});
