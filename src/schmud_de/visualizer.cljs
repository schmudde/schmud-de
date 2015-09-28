(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [quil.middleware :as m]))

;;(enable-console-print!)

(defn setup []
  (q/smooth)
  (q/frame-rate 60)
  (q/color-mode :hsb 10 1 1)
  (q/background 200)
)

(defn sine [amplitude frequency]
  (let [xs (range 100)
        rads (map q/radians (range))
        ys (map q/sin rads)]
))

(defn draw []
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (let [t (/ (q/frame-count) 10)
          angle (q/sin t)
          amplitude 100
          frequency 3]
      (q/stroke (mod t 10) 1 1)

      (q/point (* t frequency)
              (* amplitude angle))
;;      (println angle)
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [323 200]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
