(ns schmud-de.filter
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

(defn click-handler [e]
  (.log js/console "You clicks " (.-currentTarget e) " did you know?"))

(defn filterer []
  (println (dommy/html (sel1 :h1)))
  (let [buttons (sel [:.filters :li])]

       (println (dommy/html (first buttons)))
       (println (first buttons)))

       (doseq [buttons (sel [:.filters :li])]
         (println (dommy/html buttons))
         (dommy/listen! buttons :click click-handler))
;  (dommy/listen! (sel1 :.documentary) :click click-handler)
)

(set! (.-onload js/window) filterer)
