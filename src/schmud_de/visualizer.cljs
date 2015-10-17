(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]
            [schmud-de.drawing :as liner]
            [schmud-de.filter :as filter]
            [quil.middleware :as m]))

(enable-console-print!)

(defn sine [amplitude frequency duration]
  (let [xs (range 1 (+ duration 1) frequency) ; Hold the series of x points in a sequence
        rads (map q/radians (range))          ; Hold a lazy sequence of radians ... infinity
        ys (take duration (map q/sin rads))   ; Take only as many as we need from the sine function
        scaled-ys (map #(* amplitude %) ys)   ; Multiply each element by the amplitude
        resolution 30]                        ; Must be positive integer. 1 = all sine coordinates.
                                              ; Also, DURATION must be > RESOLUTION
    ; Create a sequence of connected lines
    (liner/line-join-points (take-nth resolution xs) (take-nth resolution scaled-ys))))

(defn frequency []
  ;; TODO: Why does changing frequency screw everything up so bad?
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
  (q/frame-rate 90)
  (q/stroke-weight 1)
  (q/color-mode :hsb)
  ;(q/background 138 12.75 250)
  (let [amplitude 10          ; multipled by the y axis
        frequency (frequency) ; If frequency is set to 1, then it is equivalent to q/frame-rate.
        duration  (duration frequency)  ; length of the sine wave (pixels = freq * duration)
        sine-coordinates (sine amplitude frequency duration)
        ; Grab the coordinates from the halfway point. From the inner expression out:
        ; COUNT the number of coordinates and divide by two.
        ; SUBTRACT 1 from the count because the element count starts at 0, not 1.
        ; TAKE that amount (1/2 the list) & grab the LAST set of coordinates.
        halfway-coordinates (last (take
                                   (- (int (/ (count sine-coordinates) 2)) 1) sine-coordinates))
        ; Grab the two x-axis coordinates and average their amount to get the 1/2 way point.
        halfway-point (/ (+ (first halfway-coordinates) (nth halfway-coordinates 2)) 2)]
    (q/set-state! :coordinates sine-coordinates
                  :halfway     halfway-point))
)

(defn move-wavetable [line dec-amount scaler]
  "Give me a line [x1 y1 x2 y2] and I'll decrement it by the dec-amount to move it
   along the x-axis."
  [(+ (- (first line) dec-amount) scaler) (second line)
   (+ (- (nth line 2) dec-amount) scaler) (nth line 3)]
)

(defn draw-wavetable [wavetable dec-amount scaler]
  "Move a sequence of lines along the x axis."
  (apply q/line (move-wavetable (first wavetable) dec-amount scaler))
  (if (seq (rest wavetable))   ;; Check to see if sequence. If not, it gracefully returns nil.
    (draw-wavetable (rest wavetable) dec-amount scaler)
    nil))

(defn iteration-x-axis-scaler [dec-amount halfway-point]
  "Hi. I scale the x-axis decrement values by whole number multiples of the waveform's halfway point. EX: If the waveform is 200.2 pixels wide, the halfway point is 100.1. The possible values I would then return include (0, 100.1, 200.2, 300.3, 400.4 ...)"
  ; This keeps track of the number of times we have gone 1/2 way through the wavetable
  ; dec-amount = the current x-axis coordinate. The mod of dec-amount/halfway provides the
  ; current iteration number.
  ; TODO: (+ frame 1)?
  (let [wave-iteration (int (/ dec-amount halfway-point))]
    ; EX: Wavetable is 200px long; we have traversed it < 100 times; therefore scaler = 0
    (* wave-iteration halfway-point)))

(defn draw []
"The mathematical model of this drawing is simple: create a waveform 2x longer than the canvas it is going to exist in. Animate this waveform at a distance of 1/2 it's length, starting at 0:
     EXAMPLE: |-=-=|-=-= ANIMATES TO: -=-=|-=-=|.
At the point the waveform has traveled 1/2 the distance of its length, SCALE the x-axis back to 0."
  (q/background 138 12.75 250 8)
  (q/with-translation [0 (/ (q/height) 2)]
    (let [frame (q/frame-count)
          frequency (frequency)
          dec-amount (* frame frequency)
          dec-amount2 (* (* frame 1.2) frequency)
          wavetable (q/state :coordinates)
          halfway-point (q/state :halfway)]
      (q/stroke 137 148 217)
      ;(q/stroke (mod frame 10) 1 1)
      ; parameters for draw-wavetable include the wavetable, the decrement amount, & the SCALER
      (draw-wavetable wavetable dec-amount (iteration-x-axis-scaler dec-amount halfway-point))
      ;(draw-wavetable wavetable dec-amount2 (iteration-x-axis-scaler dec-amount2 halfway-point))
      (if (= 0 (int (rem dec-amount halfway-point)))
        (println dec-amount halfway-point))
)))

(q/defsketch mainBox
  :host "mainBox"         ;; the id of the <canvas> element
  :size [100 25]
  :setup setup
  :draw draw
  :middleware [m/fun-mode])
