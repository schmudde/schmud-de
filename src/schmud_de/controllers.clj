(ns schmud-de.controllers
  (:require
   [clostache.parser :as clostache]))
;; Controller should call the "model" and inform the view.

;; 2) Function that returns a template (view) which is an appropriate match to the map. Is there a way to combine smaller functions - each one that returns the view for the data being supplied?


(def projects-db
  {:projects
   [{:title "Jack and the Machine"
     :synopsis "Bad stuff leads to good things."
     :status "In Production"
     :media "Vimeo Video"}
    {:title "Borderless"
     :synopsis "Pool party."
     :status "In Exhibition"
     :media "Online Link"}]
   :page-title "Projects"})

(def talks-db
  {:talks
   [{:location "Berlin, Germany"
     :date "April 2015"
     :title "Machines and stuff"
     :synopsis "Comptuers, good or bad?"
     :media "Vimeo Link"}
    {:location "Berlin, Germany"
     :date "March 2015"
     :title "Comptuers & Intimacy"
     :synopsis "Good stuff for fun."
     :media "Vimeo Link"}]
   :page-title "Talks"})

(def database
  {:talks talks-db
   :projects projects-db})

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
  (database (keyword template-type))
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
