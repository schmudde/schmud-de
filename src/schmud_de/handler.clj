(ns schmud-de.handler
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]))

;  (:require [compojure.core :refer :all]
;            [compojure.route :as route]
;            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
;            [schmud-de.controllers.projects :as projects-controller]))

;(defroutes app-routes
;  (GET "/" [] "Hello World")
;TODO: Add this back in once the "Hello World" is working on Heroku. Needs to be called web.clj?
;(projects-controller/index))
;  (route/resources "/")
;  (route/not-found "Not Found"))

;(def app
;  (wrap-defaults app-routes site-defaults))

;(defn splash []
;  {:status 200
;   :headers {"Content-Type" "text/plain"}
;   :body (pr-str ["Hello" :from 'Heroku])})

;(defn -main []
;  ())

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (pr-str ["Hello" :from 'Heroku])})

(defroutes app
;  (GET "/camel" {{input :input} :params}
;       {:status 200
;        :headers {"Content-Type" "text/plain"}
;        :body (kebab/->CamelCase input)})
;  (GET "/snake" {{input :input} :params}
;       {:status 200
;        :headers {"Content-Type" "text/plain"}
;        :body (kebab/->snake_case input)})
;  (GET "/kebab" {{input :input} :params}
;       {:status 200
;        :headers {"Content-Type" "text/plain"}
;        :body (kebab/->kebab-case input)})
  (GET "/" []
       (splash))
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(def sample (env :sample "sample-string-thing"))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
