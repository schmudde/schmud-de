(defproject schmud-de "0.1.0-SNAPSHOT"
  :description "Personal homepage: schmud.de"
  :url "http://schmud.de"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]]
  :plugins [[lein-ring "0.9.6"]]
  :ring {:handler schmud-de.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
