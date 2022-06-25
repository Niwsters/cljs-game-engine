(ns editor.state
  (:require
   [sprite :refer [sprite]]))

(defn- init-sprites [] [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
])

(defn init []
  {:sprites (init-sprites)
   :selected-sprite :arctic})

(defn selected-sprite [state]
  (get state :selected-sprite))

(defn sprites [state]
  (get state :sprites))

(defn select-sprite [state sprite]
  (assoc state :selected-sprite sprite))

(defn- add-sprite [sprites image-id x y]
  (->> (sprite x y image-id)
       (conj sprites)))

(defn editor-add-sprite [state x y]
  (assoc state
         :sprites
         (add-sprite
           (sprites state)
           (selected-sprite state) x y)))
