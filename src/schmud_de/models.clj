(ns schmud-de.models)

(def projects-db
  {:projects
   [{:title "Jack and the Machine"
     :synopsis "Bad stuff leads to good things."
     :status "In Production"
     :link "http://www.jackandthemachine.com"
     :tags [{:tag "documentary"} {:tag "interactive"}]
     :media "https://player.vimeo.com/video/132857801"
     :video true
     :image false
     :position "oneColumn"
     :row-start "<div class='row'>"
     :row-end "</div> <!-- /row -->"}
    {:title "Borderless"
     :synopsis "Pool party."
     :status "In Exhibition"
     :link ""
     :tags [{:tag "installation"}]
     :media "intimacy.jpg"
     :video false
     :image true
     :position "twoColumns"
     :row-start "<div class='row'>"
     :row-end ""}
    {:title "The Assassination of Chicago's Mayor"
     :synopsis "Shoots"
     :status "Complete 2012. In distribution"
     :link ""
     :tags [{:tag "narrative"}]
     :media ""
     :video true
     :image false
     :position "twoColumns"
     :row-start ""
     :row-end "</div> <!-- /row -->"}]
   :page-title "Projects"
   :tags [{:tag "documentary"}
          {:tag "narrative"}
          {:tag "installation"}
          {:tag "interactive"}
          {:tag "sound"}]
   })

(def talks-db
  {:talks
   [{:location "C-Base: home of the Chaos Computer Club in Berlin, Germany"
     :date "July 2015"
     :title "Harvesting Human Intelligence – Reframing the Surveillance Discourse"
     :synopsis "Digitalegesellschaft: Netzpolitischen Abend #38: The history of surveillance machines and the restrictions of engeneering"
     :link ""
     :media "https://player.vimeo.com/video/132857801"
     :video true
     :image false
     :row-start "<div class='row'>"
     :row-end ""
    }
    {:location "Pecha Kucha, Berlin, Germany"
     :date "July 2015"
     :title "Comptuers & Intimacy"
     :synopsis "The Story of the Largest Machines and the Smallest Details"
     :link "http://pechakucha.de/berlin/player/?event=PK_39_1&position=03&presenter=D.%20Schm%C3%BCdde&presentation=Computers%20&%20Intimacy%20%E2%80%93%20The%20Story%20of%20the%20Largest%20Machines%20and%20the%20Smallest%20Details"
     :media "intimacy.jpg"
     :video false
     :image true
     :row-start ""
     :row-end "</div> <!-- /row -->"
    }
    {:location "Department of Digital Film and Video, Chicago, IL"
     :date "January 2006 - January 2012"
     :title "Associate Professor, Illinois Institute of Art"
     :synopsis "Survey of Film (DFV 100), Sound Design for Film (DFV 365), Digital Filmmaking Portfolio Preparation I (DFV 330), Digital Filmmaking Portfolio Preparation II (DFV 430), Fundamentals of Audio (DFV 120), Survey of the Music Industry (AUD 100), Music Theory (AUD 201)"
     :link ""
     :media "ai.png"
     :video false
     :image true
     :row-start "<div class='row'>"
     :row-end ""
    }
    {:location "MFA: Music Composition for the Screen, Chicago, IL"
     :date "October 2009"
     :title "Guest Lecturer, Columbia College Chicago"
     :synopsis "Master Class - Hybrid Scores and Atonality"
     :link ""
     :media "ccc.jpg"
     :video false
     :image true
     :row-start ""
     :row-end "</div> <!-- /row -->"
    }
    {:location "Video and Animation Department, Chicago, IL"
     :date "January 2005 - June 2007"
     :title "Adjunct Faculty, International Academy of Design and Technology"
     :synopsis "Directing and Producing, Application Design, Digital Production I, Advanced Post Production, Digital Video Editing, Audio Production, Digital Audio Editing, Senior Project for Visual Communications, Career Portfolio Development for Visual Communications, Independent Study"
     :link ""
     :media "iadt.png"
     :video false
     :image true
     :row-start "<div class='row'>"
     :row-end ""
    }
    {:location "Midwest Independent Film Festival, Chicago, IL"
     :date "September 2009"
     :title "Moderator: Low Budget Filmmaking"
     :synopsis "Another synopsis"
     :link ""
     :media "panel.jpg"
     :video false
     :image true
     :row-start ""
     :row-end "</div> <!-- /row -->"
    }

    {:location "Chicago Actors Casting Summit, Chicago, IL"
     :date "July 2008 &amp; July 2009"
     :title "Chicago Actors Meetup, Panelist: Casting in Student Films"
     :synopsis "Another synopsis"
     :link ""
     :media ""
     :video false
     :image false
     :row-start "<div class='row'>"
     :row-end "</div> <!-- /row -->"
    }]
   :page-title "Talks"})

(def database
  {:talks talks-db
   :projects projects-db})
