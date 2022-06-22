(ns core
  (:require [render :refer [start-rendering]]
            [mouse :refer [listen-mouse-click!]]
            [reagent.dom :as rd]))

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

(defn start-game [canvas]
  (listen-mouse-click! canvas mouse-clicked)
  (start-rendering canvas (fn [] sprites)))

(defn component []
  [:h1 "oh hi"])

(defn canvas []
    [:canvas {:id "main"
              :width "640"
              :height "480"
              :ref start-game}])

(defn mount [component]
  (rd/render [component]
    (.getElementById js/document "game")))

(defn init []
  (mount canvas))
