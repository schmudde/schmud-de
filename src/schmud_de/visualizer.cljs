(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [quil.middleware :as m]))

(enable-console-print!)

(defn sine [amplitude frequency duration]
  (let [xs (range 1 (+ duration 1) frequency) ; Hold the series of x points in a sequence
        rads (map q/radians (range))          ; Hold a lazy sequence of radians ... infinity
        ys (take duration (map q/sin rads))   ; Take only as many as we need from the sine function
        scaled-ys (map #(* amplitude %) ys)   ; Multiply each element by the amplitude
        resolution 30]                         ; Must be positive integer. 1 = all sine coordinates.
    ; Create a sequence of connected lines
    (liner/line-join-points (take-nth resolution xs) (take-nth resolution scaled-ys))))

(defn frequency []
  0.09)

(defn duration [frequency]
  ;; TODO: remove the hack scale value
  ;; TODO: Flex "mainBox" window size?
  (let [sine-box-width (.-offsetWidth (js/document.getElementById "mainBox"))
        arbitrary-width 100]
    (if (> sine-box-width 0)             ; If JS call succeeds, use width, else default to 100px
      (* (/ sine-box-width frequency) 2) ; Draw the waveform the length of the box and then * 2
      (* (/ arbitrary-width frequency) 2))))

(defn setup []
  (q/smooth)
  (q/frame-rate 60)
  (q/stroke-weight 1)
  (q/color-mode :hsb)
  (q/background 138 12.75 250)
  (let [amplitude 10          ; multipled by the y axis
        frequency (frequency) ; If frequency is set to 1, then it is equivalent to q/frame-rate.
        duration  (duration frequency)  ; length of the sine wave (in pixels)
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
  (q/background 138 12.75 250)
  (q/with-translation [0 (/ (q/height) 2)]
    (let [frame (q/frame-count)
          frequency (frequency)
          wavetable (q/state :coordinates)
          wavetable-length (count (q/state :coordinates))]
      (q/stroke 137 148 217)
      ;;(q/stroke (mod frame 10) 1 1)
      (draw-wavetable wavetable (* frame frequency))
      ;(println wavetable-length)
      ;(println frame)
      (if (= (mod frame 100) 0)
        (println frame))
      (if (> frame (/ wavetable-length 2))
          (println "half way there!"))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [100 25]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
