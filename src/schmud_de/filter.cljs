(ns schmud-de.filter
  (:require [dommy.core :as dommy :refer-macros [sel sel1]]
            [clojure.set :as comparer]))

(defn box-parent [elements box-class-name]
  "Find the closest parent with a specifc name on a list"
  (map #(dommy/closest % box-class-name) elements))

(defn htmlize [elements]
  (map #(dommy/html %) elements))

(defn grab-parents [class elements box-class-name all-boxes]
  "If you request to see all the boxes, I just return 'all-boxes.' However, if you request a specific category, I return a list of boxes that have that label contained within."
  (if (= class "show all")
    all-boxes
    ;; filter = 'Do not add a label w/o a parent (nil).'
    (filter (complement nil?) (box-parent elements box-class-name)))
)

(defn click-handler [e]
  "I filter based on what button you press"
  (let [ready-state (. js/document -readyState)
        class (dommy/text (.-currentTarget e))        ;; The class of the current button
        elements (sel (keyword (str "." class)))      ;; Select all the elements w/ that class
        box-class-name ".project-box"
        all-boxes (sel box-class-name)
        ;; Grab all parents of all the label keywords.
        select-boxes (grab-parents class elements box-class-name all-boxes)
        ;; Grab all the Project Boxes we want to hide by finding the difference between
        ;; the *selected* boxes and *all* the boxes on the screen
        hide-boxes (comparer/difference (set all-boxes) (set select-boxes))]

    (doseq [box all-boxes]
      (dommy/remove-class! box "animated")
      (dommy/remove-class! box "bounce")
      (dommy/show! box)
      ;; This little nugget triggers a reflow in between removing and adding the class names.
      ;; The upshot: the boxes in the dom are considered 100% fresh and the animation is triggered
      ;; on every element (source: css-tricks.com/restart-css-animation).
      (dommy/set-px! box :top (dommy/px box :top)))

    (doseq [box hide-boxes]
      (dommy/hide! box))

    (doseq [box select-boxes]
      (dommy/add-class! box "animated bounce"))))

(defn filterer []
  (doseq [buttons (sel [:.filters :li])]
    (dommy/listen! buttons :click click-handler)))

(set! (.-onload js/window) filterer)
