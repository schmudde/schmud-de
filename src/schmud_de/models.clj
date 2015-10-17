(ns schmud-de.models)

(def projects-db
  {:projects
   [{:title "Jack and the Machine"
     :synopsis "Once known as #148445 within the Third Reich, Jack Tramiel rose from the Nazi concentration camps and built the information age's great equalizer: the world's first 'computer for the masses, not the classes.'"
     :status "In Production"
     :link "http://www.jackandthemachine.com"
     :tags [{:tag "documentary"} {:tag "interactive"}]
     :media "https://player.vimeo.com/video/74458487"
     :video true
     :image false
     :position "oneBox"}
    {:title "Borderless"
     :synopsis "Pool party."
     :status "In Exhibition"
     :link ""
     :tags [{:tag "installation"}]
     :media "https://player.vimeo.com/video/119274499"
     :video true
     :image false
     :position "twoBox"}
    {:title "The Assassination of Chicago's Mayor"
     :synopsis "A 19th-century newspaper peddler named Patrick Prendergast has delusions of greatness. Evidently slighted by the mayor, this self-anointed messenger prepares for a glorious rise from ignored lobbyist to influential icon. Prendergast sees himself as a martyr, serving God with a noble purpose. The reality is far different."
     :status "Complete 2012. In distribution"
     :link "https://indieflix.com/indie-films/the-assassination-of-chicagos-mayor-34358/"
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/30803843"
     :video true
     :image false
     :position "twoBox"}
    {:title "A Simple Reminder"
     :synopsis "The essence of memory - a possessor, a liberator."
     :status "Online"
     :link ""
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/46622645"
     :video true
     :image false
     :position "twoBox"}
    {:title "The Invisible Majority"
     :synopsis "Every single day, people volunteer, search for cures, and engineer leaps in efficiency. Unfortunately, media is often usurped by fearmongers and fundamentalists who spread false conceptions as facts. It is up to us, the majority of us who do good day-in and day-out, to guide the larger narrative."
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/52299617"
     :video true
     :image false
     :position "twoBox"}
    {:title "Refuge"
     :synopsis "Grant is trapped with his conscious on the long, lonely drive across the American Midwest. As the endless road stretches on, he is confronted by those he has loved and those he has hurt. REFUGE is a metaphysical journey to truth, quickly turning the open road into a claustrophobic asylum of haunting self-examination."
     :status "Online"
     :link ""
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/8247688"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Spring to Summer to Autumn 2011"
     :synopsis "Human-kind is essential. Without us, who would admire the flower? Who would discover new worlds and pay tribute to old ones?"
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/34661968"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Winter 2011"
     :synopsis "The four elements in winter."
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/21351915"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Fall 2010"
     :synopsis "The beginning of fall as told through the elements."
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/15209878"
     :video true
     :image false
     :position "twoBox"}
    {:title "Lucid Dream Ensemble - 3. Red (2003)"
     :synopsis "Live at the Museum of Contemporary Art in Chicago, SEAMUS in Tempe, AZ, and the Block Museum at Northwestern University."
     :exhibition "Performers: Virgil Moorefield: Founder, V-Drums; D. Schmüdde: Virtual Analog Synthesizers, Analogue Sequencing; Nathan Woleck: Max/MSP, Granular Synthesis; Jeff Weeter: Jitter Visuals"
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/84801854"
     :video true
     :image false
     :position "twoBox"}
    {:title "Reflections"
     :synopsis ""
     :status "Online"
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://www.youtube.com/watch?v=5yB2LWTfSYs"
     :video false
     :image true
     :position "twoBox"}]
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
     :title "Harvesting Human Intelligence"
     :subtitle "Reframing the Surveillance Discourse"
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
     :row-end ""
    }
    {:location "Department of Digital Film and Video, Chicago, IL"
     :date "January 2006 - January 2012"
     :title "Associate Professor"
     :subtitle "Illinois Institute of Art"
     :synopsis "Courses: Sound Design for Film (DFV 365), Survey of Film (DFV 100), Digital Filmmaking Portfolio Preparation I (DFV 330), Digital Filmmaking Portfolio Preparation II (DFV 430), Fundamentals of Audio (DFV 120), Survey of the Music Industry (AUD 100), Music Theory (AUD 201)"
     :link ""
     :media "ai.png"
     :video false
     :image true
     :row-start ""
     :row-end "</div> <!-- /row -->"
    }
    {:location "MFA: Music Composition for the Screen, Chicago, IL"
     :date "October 2009"
     :title "Guest Lecturer"
     :subtitle "Columbia College Chicago"
     :synopsis "Master Class - Hybrid Scores and Atonality"
     :link ""
     :media "ccc.jpg"
     :video false
     :image true
     :row-start "<div class='row'>"
     :row-end ""
    }
    {:location "Video and Animation Department, Chicago, IL"
     :date "January 2005 - June 2007"
     :title "Adjunct Faculty"
     :subtitle "International Academy of Design and Technology"
     :synopsis "Courses: Directing and Producing, Application Design, Digital Production I, Advanced Post Production, Digital Video Editing, Audio Production, Digital Audio Editing, Senior Project for Visual Communications, Career Portfolio Development for Visual Communications, Independent Study"
     :link ""
     :media "iadt.png"
     :video false
     :image true
     :row-start ""
     :row-end ""
    }
    {:location "Midwest Independent Film Festival, Chicago, IL"
     :date "September 2009"
     :title "Moderator"
     :subtitle "&quot;Low Budget Filmmaking&quot;"
     :synopsis "Another synopsis"
     :link ""
     :media "miff.png"
     :video false
     :image true
     :row-start ""
     :row-end "</div> <!-- /row -->"
    }

    {:location "Chicago Actors Casting Summit, Chicago, IL"
     :date "July 2008 &amp; July 2009"
     :title "Panelist"
     :subtitle "&quot;Casting in Student Films&quot;"
     :synopsis "Another synopsis"
     :link ""
     :media ""
     :video false
     :image false
     :row-start "<div class='row'>"
     :row-end "</div> <!-- /row -->"
    }]
   :page-title "Talks"})

(def exhibitions-db
  {:exhibitions
   [{:title "Livestream Public (Performance, New York City, 2015)"
     :piece "Borderless"
    }
    {:title "Music Hall of Williamsburg (Performance, New York City, 2015)"
     :piece "Borderless"
    }
    {:title "ArtStars* Bits & Beats (Berlin 2015)"
     :piece "Jack and the Machine"
    }
    {:title "310 XNRD in London (2 Day Workshop & Installation, 2015)"
     :piece "Borderless"
    }
    {:title "Now&After Festival 2015, Schusev State Museum of Architecture in Moscow (Installation)"
     :piece "Borderless"
    }
    {:title "IndieWorks 2015 (New York City)"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "IFP Made in NY Media Center (Installation, 2014)"
     :piece "Borderless"
    }
    {:title "Red Hook Film Festival 2014 (New York City)"
     :piece "The Assassination of Chicago’s Mayor"
    }
    {:title "ShortsHD Channel - Dish Network, DirecTV, AT&T (Broadcast, 2014)"
     :piece "The Assassination of Chicago’s Mayor"
    }
    {:title "Filmstock Film Festival 2013 (Utah)"
     :piece "A Simple Reminder"
    }
    {:title "Hollyshorts 2013 (New York)"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "Filmstock Film Festival 2013 (New Mexico)"
     :piece "Refuge"
    }
    {:title "IndieFlix (Internet Distribution, 2014)"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "Beneath the Earth Film Festival 2012"
     :piece "Refuge"
    }
    {:title "Filmstock Film Festival 2012 (Arizona) "
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "Filmstock Film Festival 2012 (Arizona) "
     :piece "Refuge"
    }
    {:title "Aesthetica Film Festival 2012 (York, UK)"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "Hollyshorts 2012 (Los Angeles, CA)"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "MoFest 2012 (Chicago, IL)"
     :piece "Elements • Spring to Summer to Autumn 2011"
    }
    {:title "Short Story Showcase 2012, Chicago Filmmakers"
     :piece "Elements • Spring to Summer to Autumn 2011"
    }
    {:title "Moving Pictures Film Festival 2012 (Quincy, IL)"
     :piece "Refuge"
    }
    {:title "ShortsHD Channel - Dish Network, DirecTV, AT&T (Broadcast, 2011)"
     :piece "Refuge"
    }
    {:title "Short Story Film Showcase 2011, Chicago Filmmakers"
     :piece "Refuge"
    }
    {:title "Chicago International Film Festival 2010"
     :piece "Refuge"
    }
    {:title "The New Art Film Festival 2010 (Champaign-Urbana, IL)"
     :piece "I am Concrete"
    }
    {:title "Chicago Filmmakers 2008"
     :piece "Aijo"
    }
    {:title "Georgetown Film Fest 2006 (Washington, DC)"
     :piece "Aijo"
    }
    {:title "S.N.O.B Film Festival 2006 (Boston, MA)"
     :piece "Aijo"
    }
    {:title "River’s Edge International Film Festival 2005 (Paducah, Kentucky)"
     :piece "Year of the Rooster"
    }
    {:title "Block Museum (Evanston, IL, 11/2003)"
     :piece "Lucid Dream Ensemble"
    }
    {:title "Block Museum (Evanston, IL, 4/2003)"
     :piece "Lucid Dream Ensemble"
    }
    {:title "Version 2003, Chicago Museum of Contemporary Art"
     :piece "Lucid Dream Ensemble"
    }
    {:title "SEAMUS national conference (Tempe, Az, 3/2003)"
     :piece "Lucid Dream Ensemble"
    }
    ]
   :page-title "Exhibitions"})

(def weblog-db
  {:exhibitions
   [{:location "C-Base: home of the Chaos Computer Club in Berlin, Germany"
    }
    {:location "Pecha Kucha, Berlin, Germany"
    }]
   :page-title "Weblog"})

(def database
  {:talks talks-db
   :projects projects-db
   :exhibitions exhibitions-db
   :weblog weblog-db})
