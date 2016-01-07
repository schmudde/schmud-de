(defproject schmud-de "0.1.0-SNAPSHOT"
  :description "Personal homepage: schmud.de"
  :url "http://schmud.de"
  :license {:name "Eclipse Public License v1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [environ "1.0.0"]
                 [de.ubercode.clostache/clostache "1.4.0"]
                 [quil "2.2.6"]
                 [org.clojure/clojurescript "1.7.48"]
                 [prismatic/dommy "1.1.0"]
                 [org.clojars.scsibug/feedparser-clj "0.4.0"]
                 [ring/ring-servlet "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [hiccup "1.0.5"]
                 [twitter-api "0.7.8"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.3.1"]
            [cider/cider-nrepl "0.10.0"]
            [lein-cljsbuild "1.1.0"]
            [lein-ring "0.9.7"]]
  :ring {:handler schmud-de.handler/-main
         :init schmud-de.handler/init
         :destroy schmud-de.handler/destroy
         :open-browser? false
         :uberwar-name home.war}
  :hooks [environ.leiningen.hooks leiningen.cljsbuild]
;  :uberjar-name "schmud-de-standalone.jar" ; Need for Heroku
;  :uberwar-name "schmud-de-standalone.war" ; Need for Tomcat
  :cljsbuild {
      :builds [
               {:source-paths ["src"]
                :compiler
                   {:output-to "resources/public/js/visual.js"
                    :output-dir "resources/public/cljs"
                    :main "schmud-de.visualizer"
                    :asset-path "cljs"
                    :optimizations :none
                    :pretty-print true}}]}
  :profiles {:production {:env {:production true}}})
