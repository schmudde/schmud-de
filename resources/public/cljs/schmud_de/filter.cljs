(ns schmud-de.filter
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]))

(defn doc-ready-handler []
  (println (sel1 :h1))
  (dommy/set-text! (sel1 :h1) "new text"))

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

;(defn on-doc-ready []
;  (aset js/document "onreadystatechange" filterer))

(set! (.-onload js/window) filterer)
