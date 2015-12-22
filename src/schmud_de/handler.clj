(ns schmud-de.handler
  (:require [compojure.core :refer [defroutes routes]]
            [compojure.route :as route]
            [hiccup.middleware :refer [wrap-base-url]]
            [ring.middleware.defaults :refer :all]
            [schmud-de.controllers :refer [available-routes]]
            ;; Porting to new handler/controller
            ;; [ring.middleware.resource :refer [wrap-resource]]
            ;; [ring.middleware.file-info :refer [wrap-file-info]]
	        ; Heroku
            [clojure.java.io :as io] ;; For Heroku Deployment
            [ring.adapter.jetty :as jetty] ;; For Heroku Deployment
            [environ.core :refer [env]] ;; For Heroku Deployment
            ))

(defroutes app-routes
  (route/resources "/")
  (route/not-found "Not Found"))

(defn website
  [handler]
  (wrap-defaults handler site-defaults))

(def test-route {:server-port 80
                 :server-name "127.0.0.1"
                 :remote-addr "127.0.0.1"
                 :uri "/"
                 :scheme :http
                 :headers {}
                 :request-method :get})

(defn init []
  (println "Ring initializing"))

(defn destroy []
  (println "Ring shutting down"))

;; -main for the Tomcat deployment
;; (def -main
;;   (-> (routes available-routes app-routes)
;;       (website)
;;       (wrap-base-url)))

;; function for Heroku deployment
(def route-maker
 (-> (routes available-routes app-routes)
     (website)
     (wrap-base-url)))

(defn -main [& [port]]
  "-main for the Heroku deployment"
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty #'route-maker {:port port :join? false})))
