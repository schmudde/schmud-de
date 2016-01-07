(ns schmud-de.controllers
  (:require [clostache.parser :as clostache]
            [compojure.core :refer :all]
            [schmud-de.models :as models]
            ;; [schmud-de.twitter :as twitter]
            [schmud-de.weblog :as weblog]))

(defn read-template [template-name]
  (slurp (clojure.java.io/resource
          (str "templates/" (name template-name) ".mustache"))))

(defn data-model
  "This function returns a map of data to pass along to the view."
  [template-type]
  (models/database (keyword template-type))
)

(defn weblog-parser []
  (let [rss (weblog/feeder)]
    {:posts (:entries rss)
     :page-title "The Beyond the Frame Weblog"
     :page-subtitle "Composition, Time Dilation, and an Opportunity for the Sublime and Serendipitous."}))

(defn index-builder [template-type]
  (clostache/render-resource
   (str "templates/" template-type ".mustache")
   (if (= template-type "weblog")
     (weblog-parser)
     (data-model template-type))
   (reduce (fn [accum pt] ;; "pt" is the name (as a keyword) of the partial
             (assoc accum pt (read-template pt)))
             {}
             [:header :footer])))

(defn index
  "Right now this expects 'main', 'projects', 'talks', 'exhibitions', 'weblog', 'etc'"
  [template-type]
  (index-builder template-type))

(defroutes available-routes
  (GET "/" []
       (index "main"))
  (GET "/projects" []
       (index "projects"))
  (GET "/talks" []
       (index "talks"))
  (GET "/exhibitions" []
       (index "exhibitions"))
  (GET "/weblog" []
       (index "weblog"))
  (GET "/etc" []
       (index "etc")))
