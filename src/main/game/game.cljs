(ns game.game 
  (:require 
   [canvas :refer [canvas]]
   [mouse :refer [listen-mouse-click!]]
   [sprite :refer [sprite]]))

(defn init-sprites [] (atom [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
]))

(defn- add-sprite [sprites x y]
  (->> (sprite x y :arctic)
       (conj sprites)))

(defn- add-sprite! [sprites x y]
  (swap! sprites #(add-sprite (deref sprites) x y)))

(defn- mouse-clicked [sprites x y]
  (add-sprite! sprites x y))

(defn- start-game [sprites canvas]
  (listen-mouse-click! canvas (fn [x y] (mouse-clicked sprites x y))))

(defn game []
  (let [sprites (init-sprites)]
    (canvas (fn [] @sprites) (fn [canvas] (start-game sprites canvas)))))
