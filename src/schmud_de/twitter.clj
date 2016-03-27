(ns schmud-de.twitter
  (:require [twitter.oauth :as oauth]
            [twitter.callbacks.handlers]
            [twitter.api.restful :as rest]
            [twitter.api.search :as searchy]
            [clojure.string :as str])
 (:import
   (twitter.callbacks.protocols SyncSingleCallback)))

(def my-creds (oauth/make-oauth-creds "7kEwqS6DA3EZobaQEWtO7gdze"
                                "bzL9snEfu9bdQOcok0Gs4VUWUlcue4CKS20uQpYflXBb7Cf5mt"
                                "191852002-ny4NXev5hlohXF0OSu1zmY06EXU34knicWA15TZE"
                                "tdAmTKWBLloZ1TTdToSqKfJyhJBaWpLBYa39vWSaP4EF8"))

(defn date-formatter
  "Takes a Twitter-formatted date and returns only the date w/ no time"
  [date]
  (str/join " " (take 3 (str/split date #" "))))

(defn hashtag-remover
  "Removes the hashtag at the end of a tweet. Only tested on END hashtags."
  [tweet]
  (str/trim (first (str/split tweet #"#"))))

(defn tweet-builder
  "Expects a vector of tweet maps and an empty vector []. Returns a vector of key value pairs -
   eg [{:text 'string' :created-at 'string} {:text 'string' :created-at 'string}]"
  [query-results mapped-results]
  (if (not (empty? query-results))
    (let [formatted-map {:text (hashtag-remover ((first query-results) :text))
                         :created_at (date-formatter ((first query-results) :created_at))}]
      (tweet-builder (rest query-results)
                     (conj mapped-results formatted-map)))
    mapped-results
    ))

(defn twitter-map
  "Returns a Twitter map of useful information"
  []
  (let [bio (rest/users-show :oauth-creds my-creds :params {:screen-name "dschmudde"})
        query (searchy/search :oauth-creds my-creds
                              :params {:from "dschmudde"
                                       :q "%23%E4%BE%98%E5%AF%82"})
        results (tweet-builder ((query :body) :statuses ) [])]
    {:tweets results :bio bio}))

(defn twitter-map-distant
  "Returns a Twitter map of useful information"
  []
  (let [bio (rest/users-show :oauth-creds my-creds :params {:screen-name "dschmudde"})
        query (searchy/search :oauth-creds my-creds
                              :params {:q "\"I%20apologize\"%20pain%20-killers%20-killer%20-lol%20-pills%20-meds%20-liver%20-laugh%20-laughing%20-filter:retweets"})
        results (tweet-builder ((query :body) :statuses ) [])]
    {:tweets results :bio bio}))
