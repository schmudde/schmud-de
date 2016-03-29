(ns schmud-de.lister
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))


(defn timed-putter [list-item multiplier]
  (let [base-time 7100]
    (.setTimeout js/window
                 #(dommy/toggle! list-item) (* base-time multiplier))
    (dommy/add-class! list-item "animated fadeIn")
    (.setTimeout js/window
                 #(dommy/toggle! list-item) (* base-time (inc multiplier)))
))

(defn lister []
  (let [number-of-tweets 100
        tweets           (take number-of-tweets (cycle (sel [:#distant-tweets :li])))
        multiplier       (range number-of-tweets)]
    (dorun (map timed-putter tweets multiplier))))

(set! (.-onload js/window) lister)
