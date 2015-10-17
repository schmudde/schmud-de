(ns schmud-de.filter
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

(defn click-handler [e]
  (.log js/console "You clicked" (.-selectedTarget e)))

(defn filterer []
  (println (dommy/html (sel1 :h1)))
  (let [buttons (sel [:.filters :li])]
       (println (dommy/html (first buttons)))
       (println (first buttons)
       (dommy/listen! (second buttons) :click click-handler))
  )
  (doseq [buttons (sel [:.filters :li])]
         (dommy/listen! buttons :click click-handler))
)

(set! (.-onload js/window) filterer)
