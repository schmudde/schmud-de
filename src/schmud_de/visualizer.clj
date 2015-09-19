(ns schmud-de.visualizer
  (:require [quil.core :as q :include-macros true]))

(defn setup []
  (q/smooth)               ;; Turn on anti-aliasing
  (q/frame-rate 1)         ;; Set framerate to 1 FPS
  (q/background 200))      ;; Set background to grey

(defn draw []
  (q/stroke (q/random 255))
  (q/stroke-weight (q/random 10))
  (q/fill (q/random 255)))

;; (def image-width (.-clientWidth (.querySelector js/document "#mainBox")))
(q/defsketch mainBox
  :setup setup
  :host "mainBox"         ;; the id of the <canvas> element
  ;; :draw draw ;; needed?
  :size [323 200])

(defn render []
  (q/with-sketch (q/get-sketch-by-id "mainBox")
    (draw)))

(defn hello [] "hello")
