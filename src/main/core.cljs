(ns core
  (:require [render :refer [start-rendering]]
            [mouse :refer [listen-mouse-click!]]))

(defn- sprite [x y image] {
  :x x
  :y y
  :image image
})

(def sprites [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
])

(defn- add-sprite! [x y]
  (->> (sprite x y :arctic)
       (conj sprites)
       (set! sprites)))

(defn- mouse-clicked [x y]
  (add-sprite! x y))

(listen-mouse-click! mouse-clicked)


(defn init []
  (start-rendering (fn [] sprites)))
