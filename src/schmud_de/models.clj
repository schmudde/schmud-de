(ns schmud-de.models)

(def projects-db
  {:projects
   [{:title "Jack and the Machine"
     :synopsis "Once known as #148445 within the Third Reich, Jack Tramiel rose from the Nazi concentration camps and built the information age's great equalizer: the world's first 'computer for the masses, not the classes.'"
     :status "In Production"
     :link-status true
     :link "http://www.jackandthemachine.com"
     :tags [{:tag "documentary"} {:tag "interactive"}]
     :media "https://player.vimeo.com/video/74458487"
     :video true
     :image false
     :position "oneBox"
     :technology "Clojure, PHP, JavaScript"
     :desc "Interactive documentary based on the life and times of Jack Tramiel, the founder of Commodore Business Machines."}
    {:title "Borderless"
     :synopsis "&ldquo;Borderless&rdquo; is an exploration of unconscious interactions among strangers. The piece examines the way we shape and are shaped by our surroundings, creating invisible movement within society's social fabric. &ldquo;Borderless&rdquo; tests the idea that by recreating unconscious interactions within a tactile and visible medium, we can unveil nuances in social behavior and response. A collaboration with artist Kim Burgas."
     :status "Performance Premier: Music Hall of Williamsburg 2015 (USA); Exhibition Premier: Schusev State Museum of Architecture Now&After Festival 2015 (World)"
     :link-status true
     :link "http://www.beyondthefra.me/borderless.html"
     :tags [{:tag "installation"}]
     :media "https://player.vimeo.com/video/119274499"
     :video true
     :image false
     :position "twoBox"
     :technology "Clojure, Overtone, Kinect, TSPS, Blackmagic Cinema Camera, portable projection"
     :desc "Dance installation that consists of a video projection accompanied by soundscapes generated in real-time using data acquired from a Kinect."}
    {:title "The Rhythm of Time"
     :synopsis "&ldquo;The Rhythm of Time&rdquo; weaves past and future in musical counterpoint as it explores the life and times of an enigmatic instrumentalist hailing from an unexpected place."
     :status "New Release"
     :link-status true
     :link "http://rhythmoftime.xyz"
     :tags [{:tag "documentary"}{:tag "interactive"}]
     :media "rhythm-16x9.jpg"
     :video false
     :image true
     :position "twoBox"
     :technology "ClojureScript, FigWheel, Quil, JavaScript, Canon 7D, Final Cut X, Logic X"
     :desc "Interactive documentary on the life and times of enigmatic synthesist Suit & Tie Guy."}
    {:title "Distant Apologies"
     :synopsis "The closer you are, the more difficult it is to say, &quot;I'm sorry.&quot;"
     :status "New Release"
     :link-status true
     :link "http://schmud.de/distant"
     :tags [{:tag "narrative"}{:tag "interactive"}]
     :media "https://player.vimeo.com/video/160771838"
     :video true
     :image false
     :position "twoBox"
     :technology "Clojure, Leiningen, Tomcat, Twitter API, Super 8 Kodak Film, Final Cut X, Logic X"
     :desc "Short film mixes rich NASA archival, original Super 8 footage, and a stream of recent apologies scraped from Twitter."}
    {:title "The Assassination of Chicago's Mayor"
     :synopsis "A 19th-century newspaper peddler named Patrick Prendergast has delusions of greatness. Evidently slighted by the mayor, this self-anointed messenger prepares for a glorious rise from ignored lobbyist to influential icon. Prendergast sees himself as a martyr, serving God with a noble purpose. The reality is far different."
     :status "Festival Premier: Hollyshorts 2012 (USA), Aesthetica Film Festival 2012 (World); Broadcast Premier: ShortsHD Channel - Dish Network, DirecTV, AT&T; Internet: IndieFlix"
     :link-status true
     :link "https://indieflix.com/indie-films/the-assassination-of-chicagos-mayor-34358/"
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/30803843"
     :video true
     :image false
     :position "twoBox"}
    {:title "A Simple Reminder"
     :synopsis "The essence of memory - a possessor, a liberator."
     :status "Festival Premier: Filmstock Film Festival 2013"
     :link-status false
     :link ""
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/46622645"
     :video true
     :image false
     :position "twoBox"}
    {:title "The Invisible Majority"
     :synopsis "Every single day, people volunteer, search for cures, and engineer leaps in efficiency. Unfortunately, media is often usurped by fearmongers and fundamentalists who spread false conceptions as facts. It is up to us, the majority of us who do good day-in and day-out, to guide the larger narrative."
     :status "Online"
     :link-status false
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/52299617"
     :video true
     :image false
     :position "twoBox"}
    {:title "Refuge"
     :synopsis "Grant is trapped with his conscious on the long, lonely drive across the American Midwest. As the endless road stretches on, he is confronted by those he has loved and those he has hurt. &ldquo;Refuge&rdquo; is a metaphysical journey to truth, quickly turning the open road into a claustrophobic asylum of haunting self-examination."
     :status "Festival Premier: Chicago International Film Festival 2010; Broadcast Premier: ShortsHD Channel - Dish Network, DirecTV, AT&T"
     :link-status false
     :link ""
     :tags [{:tag "narrative"}]
     :media "https://player.vimeo.com/video/8247688"
     :video true
     :image false
     :position "twoBox"}
    {:title "Schm&uuml;dde: A Retrospective"
     :synopsis "A Selection of Music Written Between 1998 and 2012."
     :status "Online"
     :link-status true
     :link "https://soundcloud.com/schmudde/sets/schmudde-a-retrospective"
     :tags [{:tag "sound"}]
     :media "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/23618316&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
     :video true
     :image false
     :position "twoBox"}
    {:title "Schm&uuml;dde: Film Music"
     :synopsis "Music for Films"
     :status "Online"
     :link-status true
     :link "https://soundcloud.com/schmudde/sets/film-scores"
     :tags [{:tag "sound"}]
     :media "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/144853848&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Spring to Summer to Autumn 2011"
     :synopsis "Human-kind is essential. Without us, who would admire the flower? Who would discover new worlds and pay tribute to old ones?"
     :status "Festival Premier: Chicago Filmmakers Short Story Showcase 2011"
     :link-status false
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/34661968"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Winter 2011"
     :synopsis "The four elements in winter."
     :status "Online"
     :link-status false
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/21351915"
     :video true
     :image false
     :position "twoBox"}
    {:title "Elements: Fall 2010"
     :synopsis "The beginning of fall as told through the elements."
     :status "Online"
     :link-status false
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/15209878"
     :video true
     :image false
     :position "twoBox"}
    {:title "Lucid Dream Ensemble - 3. Red (2003)"
     :synopsis "A live digital arts performance ensemble. Performers: Virgil Moorefield: Founder, V-Drums; D. Schm&uuml;dde: Virtual Analog Synthesizers, Analogue Sequencing; Nathan Woleck: Max/MSP, Granular Synthesis; Jeff Weeter: Jitter Visuals."
     :status "Performance Premier: SEAMUS National Conference; Noted Performance: Museum of Contemporary Art in Chicago"
     :link-status false
     :link ""
     :tags [{:tag "documentary"}]
     :media "https://player.vimeo.com/video/84801854"
     :video true
     :image false
     :position "twoBox"}
    {:title "Reflections"
     :synopsis "&ldquo;Continuing to explore human truths in a vox populi format, Ginsburg trains his camera on Chicago citizens to ask &#39;What is freedom?&#39; The answer is always surprising. Like their previous films &#39;Aijo&#39; and &#39;The Year of the Rooster,&#39; narrative elements add suspense and a poignant dimension to the interviews featured on screen.&rdquo; -- Todd Lillethum, August 2009, Programming Director, Chicago Filmmakers"
     :status "Online"
     :link-status true
     :link "https://www.youtube.com/watch?v=5yB2LWTfSYs"
     :tags [{:tag "documentary"}]
     :media "reflections.jpg"
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

(def employment-db
  {:employers
   [{:subtitle "Nextjournal"
     :date "9/2017 - Present"
     :title "Developer"
     :technology "Clojure, ClojureScript, Datomic"
     :desc "Developer for open science platform that emphasizes running code, reproducibility, and collaboration tools; Developed the user group management feature from database calls to front end design and layout; Tackled abstract problems such as new user onboarding flows."
     }
    {:subtitle "Beyond the Frame"
     :date "1/2005 - Present"
     :title "Creative Technologist"
     :technology "Clojure, Apache, Tomcat, Digital and 35mm Cameras, Final Cut X, Logic X, Asana, GitHub"
     :desc "Responsibilities include creative development, client and vendor communication, programming, production, and post-production; Project awards include a three (3) month Medienboard-sponsored residency in Berlin, Germany and multiple 'Best of Festival' distinctions; Negotiated distribution and exhibition agreements for short films ('Refuge'), installations ('Borderless'), and interactive work ('Jack and the Machine'); Clients include Harper's Bazaar, Elks National Foundation, Bushwick Film Festival, Himalaya Project, University of California, Soul Pancake, and Throughline Films;"
     }
    {:subtitle "Penguin Random House"
     :date "10/2015 - 4/2016"
     :title "Developer"
     :technology "PHP, JavaScript, Wordpress"
     :desc "Developer for independent author sites and initiatives at the Crown Publishing Group subsidiary of Random House; Managed client relations, delivery timelines, review process, and cost estimates; Wrote custom code for Wordpress sites and conformed to corporate security standards; Sites included Hogarth Shakespeare, Arianna Huffington, and Carol Burnett;"
     }
    {:subtitle "NetGalley"
     :date "12/2013 - 4/2015"
     :title "Front End Developer"
     :technology "Symfony 2, Symfony 1, PHP, JavaScript, JQuery, Less, Doctrine, GitHub."
     :desc "Developer for publishing web site with 40,000+ members and 100K+ uniques/month; Full stack responsibilities with an emphasis on front end: I wrote queries, pagination, templates, and styling; Released code every two weeks, accurately hitting sprint targets while committing quality code;"
     }
    {:subtitle "F#"
     :date "9/2012 - 12/2012"
     :title "Digital Project Manager/Digital Producer"
     :technology "Jira, Spotify API"
     :desc "Managed the creation of interactive advertising campaigns; Led ideation process for wireframe design, development, content management solution, and launch; Led agile production process that included teams on three continents making culture awareness and time zone management key; Clients included Universal Pictures, Chevrolet, Philips, Gap, and Spotify;"
     }]
})

(defn positioner [position row-position]
  (case position
        1 ({:row-start "<div class='row'>" :row-end ""} row-position)
        2 ({:row-start "" :row-end ""} row-position)
        3 ({:row-start "" :row-end "</div><!-- /row -->"} row-position)))

(def talks-db
  {:talks
   [{:location "I T.A.K.E Unconference (Keynote), Bucharest, Romania"
     :date "May 2017"
     :title "Aesthetics and Narrative"
     :subtitle "Programming What Cannot Be Programmed"
     :synopsis "Declarative programming has been the style of choice for implementing countless creative applications, from &quot;Zork&quot; to Harold Cohen's &quot;AARON.&quot; We'll explore why it helps to reason about machine creativity in this way and use Clojure's Overtone toolkit and clojure.spec to illustrate abstract concerns and domain intelligence."
     :link-status true
     :link "http://itakeunconf.com/sessions/aesthetics-and-narrative-programming-what-cannot-be-programmed/"
     :link-name "I T.A.K.E Unconference profile"
     :media "https://www.youtube.com/watch?v=loksl7ED0Hg"
     :video true
     :image true
     :row-start (positioner 1 :row-start)
     :row-end (positioner 1 :row-end)
     }
    {:location "Codes & Modes Symposium hosted by Hunter College"
     :date "March 2017"
     :title "The Grammar of the Internet"
     :subtitle ""
     :synopsis "Cinematic language is robust enough to clearly depict the flow of time through a collection of shots - whether they span centuries, seconds, or instant conceptual leaps. Early experiments in hypertext and interactive media often attempted to reconcile the new mediums by adopting the rules of cinema. This talk nods to the elegance of cinematic grammar and examines an idiosyncratic path forward for interconnected, interactive, nonfiction media."
     :link-status true
     :link "http://www.hunterintegratedmedia.org/reframe/speaker-lineup/dschmudde/"
     :link-name "Codes & Modes profile"
     :media "hunter-sm.jpg"
     :video false
     :image true
     :row-start (positioner 2 :row-start)
     :row-end (positioner 2 :row-end)
     }
    {:location "Clojure/conj, Austin, TX"
     :date "December 2016"
     :title "Aesthetics and Narrative"
     :subtitle "Programming What Cannot Be Programmed"
     :synopsis "Declarative programming has been the style of choice for implementing countless creative applications, from &quot;Zork&quot; to Harold Cohen's &quot;AARON.&quot; We'll explore why it helps to reason about machine creativity in this way and use Clojure's Overtone toolkit and clojure.spec to illustrate abstract concerns and domain intelligence."
     :link-status true
     :link "http://2016.clojure-conj.org/aesthetics-and-narrative/"
     :link-name "Clojure/conj"
     :media "https://www.youtube.com/embed/UJ1pD-Z6PEY"
     :video true
     :image false
     :row-start (positioner 3 :row-start)
     :row-end (positioner 3 :row-end)
    }
    {:location "ClojureBridge New York City"
     :date "June 2017"
     :title "Workshop Instructor"
     :subtitle "The Fundamentals of Functional Programming and Clojure: A Workshop for Programmers"
     :synopsis "ClojureBridge is an all-volunteer organization dedicated to increasing diversity in the Clojure community. I lectured and provided hands-on support for experienced engineers looking to learn functional programming based on a collaboratively prepared curriculum."
     :link-status true
     :link " http://www.clojurebridge.org/events/2017-05-26-new-york-ny"
     :link-name "ClojureBridge Event Information"
     :media "clojurebridge.png"
     :video false
     :image true
     :row-start (positioner 1 :row-start)
     :row-end (positioner 1 :row-end)
     }
    {:location "Society for the History of Technology, Philadelphia, PA"
     :date "October 2017"
     :title "Unlikely Harbingers"
     :subtitle "Office Machinery in the Mainframe Era"
     :synopsis "This paper focuses on the significance of common mid-century desktop tools through the lens of Commodore Business Machines, a small company with a penchant for international deal-making. Commodore competed with very little capital against much larger players, and in doing so utilized emerging business practices that would come to define today's entrepreneurial climate."
     :link-status true
     :link "http://sites.library.queensu.ca/transmissions/computers-and-futures/"
     :link-name "Computers and Futures Retrospective on Transmissions"
     :media ""
     :video false
     :image false
     :row-start (positioner 2 :row-start)
     :row-end (positioner 2 :row-end)
     }
    {:location "New York City Digital Humanities Festival"
     :date "February 2017"
     :title "Workshop Instructor"
     :subtitle "Strategies for Interactive and Immersive Dance"
     :synopsis "This workshop focuses on strategies for creating cross-domain experiences. We dive deep into visual projection, software, sound, and dance while respecting each medium's idiosyncratic strengths."
     :link-status true
     :link "http://dhweek.nycdh.org/event/strategies-for-interactive-and-immersive-dance/"
     :link-name "NYCDH Workshop Page"
     :media "nycdh.png"
     :video false
     :image true
     :row-start (positioner 3 :row-start)
     :row-end (positioner 3 :row-end)
     }
    {:location "College of Arts and Letters, Hoboken, NJ"
     :date "January 2017 - Present"
     :title "Adjunct Professor"
     :subtitle "Stevens Institute of Technology"
     :synopsis "<em>Computers and Society</em> (HSS-371)<br /><br />An examination of the politics and culture embodied by powerful technology. This includes internet governance (multi-stakeholderism, online communities, decentralization vs. centralization), ethical issues in computing (hacking, artificial intelligence, participatory design), privacy, intellectual property, and the global digital divide."
     :link-status true
     :link "http://beyondtheframe.digital/computersandsociety/"
     :link-name "<em>Computers and Society</em> class website"
     :media "stevens.png"
     :video false
     :image true
     :row-start (positioner 1 :row-start)
     :row-end (positioner 1 :row-end)
     :desc ""
    }
    {:location "C-Base: Home of the Chaos Computer Club, Berlin, Germany"
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
     :row-start (positioner 2 :row-start)
     :row-end (positioner 2 :row-end)
     }
    {:location "Vintage Computer Festival Midwest 11, Elk Grove, IL"
     :date "September 2016"
     :title "Accidentally Arming a Hacker Revolution"
     :subtitle "The Role of Commodore and Jack Tramiel"
     :synopsis "The popularity of Commodore computers and modems hastened the spread and associated public fears of hacking. This is partially due to Jack Tramiel's ethos, which inadvertently aligned with hacker principles."
     :link-status true
     :link "https://www.youtube.com/watch?v=1lBaqC6kKEo"
     :link-name "Vintage Computer Festival on YouTube"
     :media "https://www.youtube.com/embed/1lBaqC6kKEo"
     :video true
     :image false
     :row-start (positioner 3 :row-start)
     :row-end (positioner 3 :row-end)
     }
    {:location "Pecha Kucha, Berlin, Germany"
     :date "July 2015"
     :title "Computers & Intimacy"
     :subtitle "The Story of the Largest Machines and the Smallest Details"
     :synopsis "Our thoughts are the material of the Internet. In the midst of ever-evolving man/machine integration, I’ll use declassified documents to show how politicians have used computers to monitor these thoughts in the past, and suggest new ways of thinking about intimacy and computers in the future."
     :link-status true
     :link "http://pechakucha.de/berlin/player/?event=PK_39_1&position=03&presenter=D.%20Schm%C3%BCdde&presentation=Computers%20&%20Intimacy%20%E2%80%93%20The%20Story%20of%20the%20Largest%20Machines%20and%20the%20Smallest%20Details"
     :link-name "Pecha Kucha Slides &amp; Audio"
     :media "intimacy.jpg"
     :video false
     :image true
     :row-start (positioner 1 :row-start)
     :row-end (positioner 1 :row-end)
    }
    {:location "Department of Digital Film and Video, Chicago, IL"
     :date "January 2006 - January 2012"
     :title "Associate Professor"
     :subtitle "Illinois Institute of Art"
     :synopsis "Courses: Sound Design for Film <span class='small'>(DFV 365)</span>, Survey of Film <span class='small'>(DFV 100)</span>, Digital Filmmaking Portfolio Preparation I <span class='small'>(DFV 330)</span>, Digital Filmmaking Portfolio Preparation II <span class='small'>(DFV 430)</span>, Fundamentals of Audio <span class='small'>(DFV 120)</span>, Survey of the Music Industry <span class='small'>(AUD 100)</span>, Music Theory <span class='small'>(AUD 201)</span>"
     :link-status false
     :link ""
     :link-name ""
     :media "ai.png"
     :video false
     :image true
     :row-start (positioner 2 :row-start)
     :row-end (positioner 2 :row-end)
     :desc "Core curriculum design and development for the Bachelors in Audio Engineering; Faculty advisor for Audio Club; Portfolio review: regular seat on faculty committee for senior film portfolio defense;"
    }
    {:location "MFA: Music Composition for the Screen, Chicago, IL"
     :date "October 2009"
     :title "Visiting Lecturer"
     :subtitle "Columbia College Chicago"
     :synopsis "<em>Hybrid Scores and Atonality</em><blockquote><p>It may be that in order to make the cinematic image sound authentically, in its full diapason, music has to be abandoned.</p><footer>Andrei Tarkovsky</footer></blockquote>A master class that examines the intersection between sound design and traditional notions of composing music for the screen."
     :link-status true
     :link "http://beyondthefra-me.tumblr.com/post/5545059622"
     :link-name "D. Schm&uuml;dde: &quot;Composing for <em>The Assassination of Chicago&#39;s Mayor</em>&quot;"
     :media "ccc.jpg"
     :video false
     :image true
     :row-start (positioner 3 :row-start)
     :row-end (positioner 3 :row-end)
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
     :row-start (positioner 1 :row-start)
     :row-end (positioner 1 :row-end)
     :desc "Core curriculum design and development for the Interactive Multimedia Track; IADT kiosk: class developed and implemented public informational kiosk that aided visitors new to the campus;"
    }
    {:location "Midwest Independent Film Festival, Chicago, IL"
     :date "September 2009"
     :title "Moderator"
     :subtitle "&quot;Low Budget Filmmaking&quot;"
     :synopsis "A discussion of low budget filmmaking techniques for independent filmmakers."
     :link-status true
     :link "http://beyondthefra-me.tumblr.com/post/53206393777"
     :link-name "D. Schm&uuml;dde: &quot;The Magic of M&#233;li&#232s: Low Budget Filmmaking&quot;"
     :media "miff.png"
     :video false
     :image true
     :row-start (positioner 2 :row-start)
     :row-end (positioner 2 :row-end)
    }
    {:location "Chicago Actors Casting Summit, Chicago, IL"
     :date "July 2008 &amp; July 2009"
     :title "Panelist"
     :subtitle "&quot;Casting in Student Films&quot;"
     :synopsis "A discussion with actors on the benefits and concerns associated with working on student-run film sets."
     :link-status true
     :link "http://beyondthefra-me.tumblr.com/post/28430696505"
     :link-name "D. Schm&uuml;dde: &quot;Reader Question: Student/Actor Expectations&quot;"
     :media "16x9spacer.gif"
     :video false
     :image true
     :row-start (positioner 3 :row-start)
     :row-end (positioner 3 :row-end)
    }]
   :page-title "Talks"})

(def exhibitions-db
  {:exhibitions
   [{:title "Bushwick Film Festival"
     :place "New York City, 2017"
     :piece "Distant Apologies"
     }
    {:title "Blow-Up Arthouse International Film Festival"
     :place "Chicago, 2017"
     :piece "Distant Apologies"
     }
    {:title "Blow-Up Arthouse International Film Festival"
     :place "Chicago, 2017"
     :piece "The Rhythm of Time"
     }
    {:title "YoFiFest Film Festival"
     :place "Yonkers, New York, 2017"
     :piece "Distant Apologies"
    }
    {:title "Holocenter: Center for the Holographic Arts"
     :place "Installation, New York City, 2017"
     :piece "Borderless IV"
    }
    {:title "Hack && Tell"
     :place "Presentation, New York City, 2016"
     :piece "The Rhythm of Time"
    }
    {:title "Third Shift @ Third Space Gallery"
     :place "Installation, Saint John, N.B., Canada, 2016"
     :piece "Borderless IV"
    }
    {:title "FUSE @ Livestream Public"
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
    {:title "Fonlad International Exhibition of Video Art"
     :place "Cologne, Germany, 2014"
     :piece "Borderless"
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
   [{:title "2017 Space:Light Artist Residency"
      :type "Residency"
      :org "Holocenter: Center for the Holographic Arts"
      }
    {:title "Berlin/New York 2015 Media Residency Program"
      :type "New Media Production Grant"
      :org "Startup Germany, Medienboard"
      :highlight "strong"
      }
     {:title "Interactive Co/Lab, Detroit, MI"
      :type "Competitive Selection"
      :org "Tribeca Film Institute"
     }
     {:title "POV Hackathon 9, Chicago, IL"
      :type "Competitive Selection"
      :org "PBS"
      :highlight "strong"
     }
     {:title "POV Hackathon 7, New York, NY"
      :type "Competitive Selection"
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
     {:title "Tribeca Hacks 2013, New York, NY"
      :type "Competitive Selection"
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
      :type "Competitive Showcase (Bronze Placement)"
      :org "One Club"
     }]
   :affiliations
    [{:org "Kitchen Table Coders: A Studio for Creative Coding"
      :title "Member"
     }
     {:org "The FilmShop: A New York Collective of Independent Filmmakers"
      :title "Member"
     }
     {:org "Bushwick Film Festival 2013 &amp; 2014"
      :title "New Media Advisor"
     }
     {:org "Himalaya Project: Education and Healthcare in Dolpo, Nepal"
      :title "Volunteer Media Director and Producer"
     }
     {:org "&lt;StoryCode&gt;: An Immersive Media Meetup"
      :title "Videography Volunteer"
     }
     {:org "The Script Lab"
      :title "Screenwriting Analysis for &ldquo;From Script to Screen&rdquo;"
     }]
   :education
    [{:subtitle "Northwestern University"
      :title "Masters in Music (Magna Cum Laude)"
      :technology "Electroacoustic Performance, Composition, Intermedia Studies"
      :date "2002 - 2004"
     }
     {:subtitle "University of Northern Iowa"
      :title "Bachelor of Arts in Computer Science"
      :technology "Artificial Intelligence, Creative Computing and the Visual Arts"
      :date "1997 - 2001"
     }
     {:subtitle "DID Deutsch-Institut, Berlin, Germany"
      :title "Language Intensive"
      :technology "German"
      :date "2005"
     }]
   :publications
    [{:title "Our Lives, Encoded"
      :publication "Broken Toilets and shared by <a href='http://epodharvard.tumblr.com/post/146951238165/five-favorites-7516' target='_blank'>Evidence for Policy Design at Harvard University</a>"
      :link "http://brokentoilets.org/article/year-twenty-megabytes/"
      :date "May 20, 2016"
      }
     {:title "The Computer Revolution Has Yet to Happen"
      :publication "Endless Magazine/The Absurdist"
      :link "https://medium.com/absurdist/the-computer-revolution-has-yet-to-happen-f1dbf983d477"
      :date "November 24, 2015"
      }
     {:title "Beyond the Frame"
      :publication "A Weekly Weblog With 57,000 Subscribers"
      :link "http://beyondthefra-me.tumblr.com"
      }
     {:title "A Brief History of Machine Personalities - The Character &amp; Ephemera From a Century of Machine Thinking"
      :publication "Self-Published"
      :link "https://medium.com/@dschmudde/a-brief-history-of-machine-personalities-f7116c85c2ed"
      :date "May 15, 2015"
      }
     {:title "From Script to Screen: &quot;Five Easy Pieces&quot; - Bobby &amp; Rayette"
      :publication "The Script Lab"
      :link "http://thescriptlab.com/screenwriting-101/screenplay/from-script-to-screen/1228-five-easy-pieces-1970-bobby-a-rayette"
      :date "2011"
      }
     {:title "From Script to Screen: &quot;The Matrix&quot; - Lobby Scene"
      :publication "The Script Lab"
      :link "http://thescriptlab.com/screenwriting-101/screenplay/from-script-to-screen/1231-the-matrix-1999-lobby-scene"
      :date "2011"
      }]
   :page-title "Curriculum Vitae"})

(def database
  {:talks talks-db
   :projects projects-db
   :exhibitions exhibitions-db
   :employment employment-db
})
