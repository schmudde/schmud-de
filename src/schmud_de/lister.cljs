(ns lister.filter
  (:require
   [dommy.core :as dommy :refer-macros [sel sel1]]))


(defn timed-putter [list-item multiplier]
  (let [base-time 12000]
    (.setTimeout js/window
                 #(dommy/toggle! list-item) (* base-time multiplier))
    (dommy/add-class! list-item "animated fadeIn")
    (.setTimeout js/window
                 #(dommy/toggle! list-item) (* base-time (inc multiplier)))
))


(defn lister []
  (let [tweets (sel [:#distant-tweets :li])
        multiplier (range 10)]
    (dorun (map timed-putter tweets multiplier))))

(set! (.-onload js/window) lister)
