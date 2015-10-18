(ns schmud-de.filter
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [clojure.set :as comparer]))

(defn box-parent [elements]
  (map #(dommy/closest % ".project-box") elements))

(defn htmlize [elements]
  (map #(dommy/html %) elements))

(defn click-handler [e]
  (let [class (dommy/text (.-currentTarget e))
        elements (sel (keyword (str "." class)))
        select-boxes (filter (complement nil?) (box-parent elements))
        all-boxes (sel ".project-box")
        hide-boxes (comparer/difference (set all-boxes) (set select-boxes))]

    (doseq [box all-boxes]
        (dommy/show! box))

    (doseq [box hide-boxes]
        (dommy/hide! box))))

(defn filterer []
  (doseq [buttons (sel [:.filters :li])]
    (dommy/listen! buttons :click click-handler)))

(set! (.-onload js/window) filterer)
