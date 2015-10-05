(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [quil.middleware :as m]))

(enable-console-print!)

(defn sine [amplitude frequency duration]
  (let [xs (range 1 duration frequency)      ; Hold the series of x points in a sequence
        rads (map q/radians (range))         ; Hold a lazy sequence of radians ... infinity
        ys (take duration (map q/sin rads))  ; Take only as many as we need from the sine function
        scaled-ys (map #(* amplitude %) ys)] ; Multiply each element by the amplitude
    (liner/line-join-points xs scaled-ys)))  ; Create a sequency of connected lines

(defn frequency []
  0.09)

(defn duration []
  ;; TODO: remove the hack scale value
  (* (q/width) 25))

(defn setup []
  (q/smooth)
  (q/frame-rate 60)
  (q/stroke-weight 0.25)
  (q/color-mode :hsb 10 1 1)
  (q/background 200)
  (let [amplitude 10          ; multipled by the y axis
        frequency (frequency) ; If frequency is set to 1, then it is equivalent to q/frame-rate.
        duration  (duration)  ; length of the sine wave (in pixels)
        sine-coordinates (sine amplitude frequency duration)]
    (q/set-state! :coordinates sine-coordinates))
)

(defn move-wavetable [line dec-amount]
  "Give me a line [x1 y1 x2 y2] and I'll decrement it by the dec-amount to move it
   along the x-axis."
  ; TODO - dec-amount as a fraction of the frame?
  [(- (first line) dec-amount) (second line) (- (nth line 2) dec-amount) (nth line 3)]
)

(defn draw-wavetable [wavetable dec-amount]
  "Move a sequence of lines along the x axis."
  (apply q/line (move-wavetable (first wavetable) dec-amount))
  (if (seq (rest wavetable))   ;; Check to see if this is a sequence. If it's empty, it will fail.
    (draw-wavetable (rest wavetable) dec-amount)))

(defn draw []
  (q/background 200)
  (q/with-translation [0 (/ (q/height) 2)]
    (let [frame (q/frame-count)
          duration (duration)
          frequency (frequency)]
      (q/stroke 100 1 100)
      ;;(q/stroke (mod frame 10) 1 1)
      (draw-wavetable (q/state :coordinates) (* frame frequency))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [100 25]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
