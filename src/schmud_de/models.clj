(ns schmud-de.models)

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
     :media "Vimeo Link"}
    {:location "Test 3"
     :date "October"
     :title "Another Test"
     :synopsis "Another synopsis"
     :media "Vimeo Link"}]
   :page-title "Talks"})

(def database
  {:talks talks-db
   :projects projects-db})
