(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [quil.middleware :as m]))

(enable-console-print!)

(defn setup []
  (q/smooth)
  (q/frame-rate 60)
  (q/color-mode :hsb 10 1 1)
  (q/background 200)
)


(defn sine [amplitude frequency duration]
  (let [xs (range duration)
        rads (map q/radians (range))
        ys (take duration (map q/sin rads))
        scaled-ys (map #(* amplitude %) ys)]
    (liner/line-join-points xs scaled-ys)
))

(defn draw []
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (let [t (/ (q/frame-count) 10)
          angle (q/sin t)
          amplitude 100
          frequency 30
          duration 300]
      (q/stroke (mod t 10) 1 1)
      (if (< t duration)
;;        (println (int t)))
        (apply q/line (nth (sine amplitude frequency duration) (int t))))
      (q/point (* t frequency)
              (* amplitude angle))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [323 200]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
