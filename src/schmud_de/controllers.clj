(ns schmud-de.controllers
  (:require [clostache.parser :as clostache]
            [schmud-de.models :as models]))
;; 2) Function that returns a template (view) which is an appropriate match to the map. Is there a way to combine smaller functions - each one that returns the view for the data being supplied?

(defn read-template [template-name]
  (slurp (clojure.java.io/resource
          (str "templates/" (name template-name) ".mustache"))))

(defn render-template
;; Deprecated
  "Pass in the template name (a string, sans its .mustache filename extension), the data for the template (a map), and a list of partials (keywords) corresponding to like-named template filenames."
  [template-file params]
  (clostache/render (read-template template-file) params))

(defn data-model
  "This function returns a map of data to pass along to the view."
  [template-type]
  (models/database (keyword template-type))
)

(defn index-builder [template-type]
  (clostache/render-resource
   (str "templates/" template-type ".mustache")
   (data-model template-type)
   (reduce (fn [accum pt] ;; "pt" is the name (as a keyword) of the partial
             (assoc accum pt (read-template pt)))
             {}
             [:header :footer])))

(defn index
  "Right now this expects 'main', 'projects', or 'talks'"
  [template-type]
  (index-builder template-type))
