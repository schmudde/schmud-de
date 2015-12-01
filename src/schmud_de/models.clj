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
    {:title "Schm&uuml;dde: A Retrospective"
     :synopsis "A Selection of Music Written Between 1998 and 2012."
     :status "Online"
     :link ""
     :tags [{:tag "sound"}]
     :media "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23618316&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
     :video true
     :image false
     :position "twoBox"}
    {:title "Schm&uuml;dde: Film Music"
     :synopsis "Music for Films"
     :status "Online"
     :link ""
     :tags [{:tag "sound"}]
     :media "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/144853848&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
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
   [{:location "C-Base: Home of the Chaos Computer Club in Berlin, Germany"
     :date "July 2015"
     :title "Harvesting Human Intelligence"
     :subtitle "Reframing the Surveillance Discourse"
     :synopsis "The power of large government and corporate surveillance systems feel like an intractable part of our everyday digital lifestyle. However, the raw intelligence of centralized computer systems pale in comparison to decentralized personal computers, each augmented by a human actor. This talk examines how the PC threatens traditional power structures and how those systems have responded."
     :link-status true
     :link "https://digitalegesellschaft.de/2015/07/npa039/"
     :link-name "Digitalegesellschaft: Netzpolitischen Abend #38"
     :media "https://player.vimeo.com/video/132857801"
     :video true
     :image false
     :row-start "<div class='row'>"
     :row-end ""
    }
    {:location "Pecha Kucha, Berlin, Germany"
     :date "July 2015"
     :title "Comptuers & Intimacy"
     :subtitle "The Story of the Largest Machines and the Smallest Details"
     :synopsis "Our thoughts are the material of the Internet. In the midst of ever-evolving man/machine integration, I’ll use declassified documents to show how politicians have used computers to monitor these thoughts in the past, and suggest new ways of thinking about intimacy and computers in the future."
     :link-status true
     :link "http://pechakucha.de/berlin/player/?event=PK_39_1&position=03&presenter=D.%20Schm%C3%BCdde&presentation=Computers%20&%20Intimacy%20%E2%80%93%20The%20Story%20of%20the%20Largest%20Machines%20and%20the%20Smallest%20Details"
     :link-name "Pecha Kucha Slides &amp; Audio"
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
     :link-status false
     :link ""
     :link-name ""
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
     :link-status false
     :link ""
     :link-name ""
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
     :link-status false
     :link ""
     :link-name ""
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
     :synopsis "A discussion of low budget filmmaking techniques for independent filmmakers."
     :link-status false
     :link ""
     :link-name ""
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
     :link-status false
     :link ""
     :link-name ""
     :media ""
     :video false
     :image false
     :row-start "<div class='row'>"
     :row-end "</div> <!-- /row -->"
    }]
   :page-title "Talks"})

(def exhibitions-db
  {:exhibitions
   [{:title "FUSE @ Livestream Public"
     :place "Performance, New York City, 2015"
     :piece "Borderless"
    }
    {:title "Music Hall of Williamsburg"
     :place "Performance, New York City, 2015"
     :piece "Borderless"
     :highlight "strong"
    }
    {:title "ArtStars* Bits & Beats"
     :place "Berlin 2015"
     :piece "Jack and the Machine"
    }
    {:title "310 XNRD"
     :place "2 Day Workshop & Installation, London, 2015"
     :piece "Borderless"
    }
    {:title "Schusev State Museum of Architecture Now&After Festival"
     :place "Installation, Moscow, 2015"
     :piece "Borderless"
     :highlight "strong"
    }
    {:title "IndieWorks"
     :place "New York City, 2015"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "IFP Made in NY Media Center"
     :place "Installation, New York City, 2014"
     :piece "Borderless"
    }
    {:title "Red Hook Film Festival"
     :place "New York City, 2014"
     :piece "The Assassination of Chicago’s Mayor"
    }
    {:title "ShortsHD Channel - Dish Network, DirecTV, AT&T"
     :place "Broadcast, 2014"
     :piece "The Assassination of Chicago’s Mayor"
     :highlight "strong"
    }
    {:title "Filmstock Film Festival"
     :place "Utah, 2013"
     :piece "A Simple Reminder"
    }
    {:title "Hollyshorts"
     :place "New York City, 2013"
     :piece "The Assassination of Chicago's Mayor"
     :highlight "strong"
    }
    {:title "Filmstock Film Festival"
     :place "New Mexico, 2013"
     :piece "Refuge"
    }
    {:title "IndieFlix"
     :place "Internet Distribution, 2014"
     :piece "The Assassination of Chicago's Mayor"
     :highlight "strong"
    }
    {:title "Beneath the Earth Film Festival"
     :place "Internet Distribution, 2012"
     :piece "Refuge"
    }
    {:title "Filmstock Film Festival"
     :place "Arizona, 2012"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "Filmstock Film Festival"
     :place "Arizona, 2012"
     :piece "Refuge"
    }
    {:title "Aesthetica Film Festival"
     :place "York, UK, 2013"
     :piece "The Assassination of Chicago's Mayor"
     :highlight "strong"
    }
    {:title "Hollyshorts"
     :place "Los Angeles, 2012"
     :piece "The Assassination of Chicago's Mayor"
    }
    {:title "MoFest"
     :place "Chicago, 2012"
     :piece "Elements • Spring to Summer to Autumn 2011"
    }
    {:title "Chicago Filmmakers Short Story Showcase"
     :place "Chicago, 2012"
     :piece "Elements • Spring to Summer to Autumn 2011"
    }
    {:title "Moving Pictures Film Festival"
     :place "Quincy, Illinois, 2012"
     :piece "Refuge"
    }
    {:title "ShortsHD Channel - Dish Network, DirecTV, AT&T"
     :place "Broadcast, 2011"
     :piece "Refuge"
     :highlight "strong"
    }
    {:title "Chicago Filmmakers Short Story Film Showcase"
     :place "Chicago, 2011"
     :piece "Refuge"
    }
    {:title "Chicago International Film Festival"
     :place "Chicago, 2010"
     :piece "Refuge"
     :highlight "strong"
    }
    {:title "The New Art Film Festival"
     :place "Champaign-Urbana, Illinois, 2010"
     :piece "I am Concrete"
    }
    {:title "Chicago Filmmakers"
     :place "Chicago, 2008"
     :piece "Aijo"
    }
    {:title "Georgetown Film Fest"
     :place "Washington DC, 2006"
     :piece "Aijo"
    }
    {:title "S.N.O.B Film Festival"
     :place "Boston, 2006"
     :piece "Aijo"
    }
    {:title "River’s Edge International Film Festival"
     :place "Paducah, Kentucky, 2005"
     :piece "Year of the Rooster"
    }
    {:title "Block Museum"
     :place "Evanston, Illinois, 11/2003"
     :piece "Lucid Dream Ensemble"
    }
    {:title "Block Museum"
     :place "Evanston, Illinois, 4/2003"
     :piece "Lucid Dream Ensemble"
    }
    {:title "Chicago Museum of Contemporary Art Version Festival"
     :place "Chicago 2003"
     :piece "Lucid Dream Ensemble"
     :highlight "strong"
    }
    {:title "SEAMUS National Conference"
     :place "Tempe, Arizona, 2003"
     :piece "Lucid Dream Ensemble"
    }]
   :awards
    [{:title "Berlin/New York 2015 Media Residency Program"
      :type "New Media Production Grant"
      :org "Startup Germany, Medienboard"
      :highlight "strong"
     }
     {:title "POV Hackathon 9"
      :type "Competitve Selection"
      :org "PBS"
      :highlight "strong"
     }
     {:title "POV Hackathon 7"
      :type "Competitve Selection"
      :org "PBS"
     }
     {:title "Audience Choice Award, Best Director: &ldquo;The Assassination of Chicago&#39;s Mayor&rdquo;"
      :type "Film Festival Award"
      :org "Red Hook Film Festival 2014"
      :highlight "strong"
     }
     {:title "Audience Choice Award: &ldquo;A Simple Reminder&rdquo;"
      :type "Film Festival Award"
      :org "Digipops Community Film Festival 2014"
     }
     {:title "Tribeca Hacks Winter 2013"
      :type "Competitve Selection"
      :org "Tribeca Film Institute"
     }
     {:title "Best Director, Best of Fest: &ldquo;Refuge&rdquo;"
      :type "Film Festival Award"
      :org "Filmstock Film Festival 2012"
      :highlight "strong"
     }
     {:title "Best Actor: &ldquo;The Assassination of Chicago&#39;s Mayor&rdquo;"
      :type "Film Festival Award"
      :org "Filmstock Film Festival 2012"
     }
     {:title "Best Editing, Best Acting: &ldquo;Refuge&rdquo;"
      :type "Film Festival Award"
      :org "Beneath the Earth Film Festival 2012"
      :highlight "strong"
     }
     {:title "Educator of the Year Nomination"
      :type "Professional Distinction"
      :org "International Academy of Design and Technology 2005"
     }
     {:title "Program for the Study of the Imagination 2003"
      :type "Composition Grant"
      :org "The Program in the Study of Imagination at Northwestern University"
     }
     {:title "Interactive Award - The One Show 1998"
      :type "Competitve Showcase (Bronze Placement)"
      :org "One Club"
     }]
   :affiliations
    [{:org "The FilmShop: a New York Collective of Independent Filmmakers"
      :title "Member"
     }
     {:org "Bushwick Film Festival 2013 &amp; 2014"
      :title "New Media Advisor"
     }
     {:org "Himalaya Project: Education and Healthcare in Dolpo, Nepal"
      :title "Volunteer Media Director and Producer"
     }
     {:org "&lt;StoryCode&gt;: an Immersive Media Meetup"
      :title "Videography Volunteer"
     }
     {:org "The Script Lab"
      :title "Screenwriting Analysis for &ldquo;From Script to Screen&rdquo;"
     }]
   :page-title "Vitae"})

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
