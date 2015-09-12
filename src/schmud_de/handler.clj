(ns schmud-de.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [schmud-de.controllers.projects :as projects-controller]))

(defroutes app-routes
  (GET "/" [] "Hello World")
;TODO: Add this back in once the "Hello World" is working on Heroku. Needs to be called web.clj?
;(projects-controller/index))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
