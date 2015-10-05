(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [quil.middleware :as m]))

;;(enable-console-print!)

(defn sine [amplitude frequency duration]
  (let [xs (range 1 duration frequency)      ; Hold the series of x points in a sequence
        rads (map q/radians (range))         ; Hold a lazy sequence of radians ... infinity
        ys (take duration (map q/sin rads))  ; Take only as many as we need from the sine function
        scaled-ys (map #(* amplitude %) ys)] ; Multiply each element by the amplitude
    (liner/line-join-points xs scaled-ys)    ; Create a sequency of connected lines
))

(defn duration []
  400)

(defn setup []
  (q/smooth)
  (q/frame-rate 60)
  (q/color-mode :hsb 10 1 1)
  (q/background 200)
  (let [amplitude 50          ; multipled by the y axis
        frequency 0.5         ; If frequency is set to 1, then it is equivalent to q/frame-rate.
        duration (duration)   ; length of the sine wave (in pixels)
        sine-coordinates (sine amplitude frequency duration)]
    (q/set-state! :coordinates sine-coordinates))
)

(defn draw []
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (let [frame (q/frame-count)
          duration (duration)]
      (q/stroke (mod frame 10) 1 1)
      (if (< frame duration)
        (apply q/line (nth (q/state :coordinates) frame)))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [323 200]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
