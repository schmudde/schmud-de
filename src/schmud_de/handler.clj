(ns schmud-de.handler
  (:require [compojure.core :refer [defroutes routes]] ;; For Future Route Handler
            [compojure.core :refer [defroutes GET PUT POST DELETE ANY]] ;; For Current RouteHandler
            [compojure.handler :refer [site]] ;; Deprecated in favor of ring defaults
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [schmud-de.controllers :as controller]
            ;; Porting to new handler/controller
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [ring.middleware.defaults :refer :all]
            [hiccup.middleware :refer [wrap-base-url]]
            [schmud-de.controllers :refer [available-routes]]))

(defroutes app
  (GET "/" []
       (controller/index "main"))
  (GET "/projects" []
       (controller/index "projects"))
  (GET "/talks" []
       (controller/index "talks"))
  (GET "/exhibitions" []
       (controller/index "exhibitions"))
  (GET "/weblog" []
       (controller/index "weblog"))
  (GET "/etc" []
       (controller/index "etc"))
  (route/resources "/")
  (route/not-found "Not Found")
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

;;(def sample (env :sample "sample-string-thing"))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn website
  [handler]
  (wrap-defaults handler site-defaults))

(def route-maker
  (-> (routes available-routes app-routes)
      (website)
      (wrap-base-url)))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})
;    (jetty/run-jetty (route-maker) {:port port :join? false})
))
