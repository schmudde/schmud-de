(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [schmud-de.filter :as filter]
            [quil.middleware :as m]))

(enable-console-print!)

(defn frequency [] 0.12)

(defn cycle-point [ys position]
"Find the point on the x-axis when a sinusoidal cycle has been completed"
    (if (and (< (first ys) 0)
             (>= (second ys) 0))
      (int position)
      (if (seq? ys)   ;; Check to see if sequence. If not, it gracefully returns nil.
        (cycle-point (rest ys) (inc position))
        nil)))

(defn duration [ys]
  (cycle-point ys 0))

(defn window-size [frequency]
"Return the size of the onscreen window scaled to the frequency (the same frequency value that the sine wave itself is scaled to)."
  (let [sine-box-width (.-offsetWidth (js/document.getElementById "mainBox"))
        arbitrary-width 100]
    (if (> sine-box-width 0)             ; If JS call succeeds, use width, else default to 100px
      (* (/ sine-box-width frequency) 2) ; Scale the width of the box by the frequency that the
      (* (/ arbitrary-width frequency) 2)))) ;; waveform is scaled by and double it.

(defn sine-ys [amplitude]
  (let [rads (map q/radians (range))          ; Hold a lazy sequence of radians ... infinity
        ys (map q/sin rads)
        scaled-ys (map #(* amplitude %) ys)]  ; Multiply each element by the amplitude
    scaled-ys))

(defn sine [frequency linear-duration ys]
  (let [xs (range 1 (+ linear-duration 1) frequency) ; Hold the series of x points in a sequence
        scaled-ys (take (window-size frequency) ys)  ; Take enough Y values to fill the window x2
        resolution 30]                        ; Must be positive integer. 1 = all sine coordinates.
    ; Create a sequence of connected lines
    (liner/line-join-points (take-nth resolution xs) (take-nth resolution scaled-ys))))

(defn setup []
  (q/smooth)
  (q/frame-rate 25)
  (q/stroke-weight 1)
  (q/color-mode :hsb)
  (let [amplitude 10           ; Eventually multipled by the y axis
        frequency (frequency)  ; If frequency is set to 1, then it is equivalent to q/frame-rate
        ys (sine-ys amplitude) ; Grab a lazy sequence of y values
        linear-cycle-duration (duration ys) ; Find out how long it takes to complete 1 cycle
        scaled-cycle-duration (* linear-cycle-duration frequency) ; Scale cycle to the frequency
        sine-coordinates (sine frequency linear-cycle-duration ys)] ; Create a seq of coordinates
        (q/set-state! :coordinates sine-coordinates
                      :one-cycle   scaled-cycle-duration)))

(defn move-wavetable [line dec-amount scaler]
  "Give me a line [x1 y1 x2 y2] and I'll decrement it by the dec-amount to move it
   along the x-axis."
  [(+ (- (first line) dec-amount) scaler) (second line)
   (+ (- (nth line 2) dec-amount) scaler) (nth line 3)])

(defn draw-wavetable [wavetable dec-amount scaler]
  "Move a sequence of lines along the x axis."
  (apply q/line (move-wavetable (first wavetable) dec-amount scaler))
  (if (seq (rest wavetable))   ;; Check to see if sequence. If not, it gracefully returns nil.
    (draw-wavetable (rest wavetable) dec-amount scaler)
    nil))

(defn iteration-x-axis-scaler [dec-amount one-cycle-length]
  "This keeps track of the number of times we have moved 1 waveform cycle length dec-amount = the current x-axis coordinate. The mod of dec-amount/cycle-length provides the current iteration #."
  (let [wave-iteration (int (/ dec-amount one-cycle-length))]
    ; EX: Wavetable is 200px long; we have traversed it < 100 times; therefore scaler = 0
    (* wave-iteration one-cycle-length)))

(defn draw []
"The mathematical model of this drawing is simple: create a waveform 2x longer than the canvas it is going to exist in. Animate this waveform at a distance of one (scaled) cycle length, starting at 0. Once one cycle length is traversed, seamlessly reset the waveform back to 0 w/ a scalar value"
  (q/background 138 12.75 250 0)
  (q/with-translation [0 (/ (q/height) 2)]
    (let [frame (q/frame-count)
          frequency (frequency)
          dec-amount frame
          dec-amount2 (* frame 0.75)
          dec-amount3 (* frame 1.45)
          wavetable (q/state :coordinates)
          one-cycle (q/state :one-cycle)
          hue 137
          color-xformer (min js/window.pageYOffset (- 255 hue))]
      (q/stroke (+ hue color-xformer) 148 217)
      (q/stroke-weight (+ 1 (/ color-xformer 50)))
      ; parameters for draw-wavetable include the wavetable, the decrement amount, & the SCALER
      (draw-wavetable wavetable dec-amount (iteration-x-axis-scaler dec-amount one-cycle))
      (draw-wavetable wavetable dec-amount2 (iteration-x-axis-scaler dec-amount2 one-cycle))
      (draw-wavetable wavetable dec-amount3 (iteration-x-axis-scaler dec-amount3 one-cycle))
      ;;(if (= 0 (int (rem dec-amount one-cycle)))
      ;;  (.log js/console js/window.pageYOffset js/document.documentElement.scrollTop))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [100 25]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
