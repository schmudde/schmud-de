(ns schmud-de.weblog
  (:use feedparser-clj.core)
  (:require [clojure.string :as string]))

(defn feeder [] (parse-feed "http://beyondthefra-me.tumblr.com/rss"))
