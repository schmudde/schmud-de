(ns schmud-de.controllers
  (:require
   [clostache.parser :as clostache]))
;; Will there ever be parameters needed to change how a controller behaves?
;; Such an idea is very *imperative* and should not be used.
;; Controller should call the "model" and inform the view.

;; 1) Function that returns a map of key/paramater pairs (model) that will be applied to the template (view).
;; 2) Function that returns a template (view) which is an appropriate match to the map. Is there a way to combine smaller functions - each one that returns the view for the data being supplied?


(def projects-db '({}))

(def talks-db
  '({:name template-type :number 2}
   {:location "Berlin, Germany"
    :date "April 2015"}
   {:location "Berlin, Germany"
    :date "March 2015"}))

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
  ;; TODO: Setup database for all types.
  (first (database (keyword template-type)))
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

;  (render-template "main" {:name "Schmoodes"}))
