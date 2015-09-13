(ns schmud-de.controllers.projects
  (:require
   [clostache.parser :as clostache]))

(defn read-template [template-name]
  (slurp (clojure.java.io/resource
          (str "templates/" template-name ".mustache"))))

(defn render-template
  "Pass in the template name (a string, sans its .mustache filename extension), the data for the template (a map), and a list of partials (keywords) corresponding to like-named template filenames."
  [template-file params]
  (clostache/render (read-template template-file) params))

(defn index []
  (clostache/render-resource
   (str "templates/" "main.mustache")
   {:name "Schmooodes"}
   (reduce (fn [accum pt] ;; "pt" is the name (as a keyword) of the partial
             (assoc accum pt (slurp (clojure.java.io/resource
                                     (str "templates/"
                                          (name pt)
                                          ".mustache")))))
             {}
             [:header :footer])))

;  (render-template "main" {:name "Schmoodes"}))
