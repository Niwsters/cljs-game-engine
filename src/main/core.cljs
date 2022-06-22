(ns core
  (:require [render :refer [start-rendering]]
            [mouse :refer [listen-mouse-click!]]
            [reagent.core :as r]
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

(defn- start-game [canvas]
  (listen-mouse-click! canvas mouse-clicked)
  (start-rendering canvas (fn [] sprites)))

(defn- canvas-changed [canvas]
  (if (nil? canvas)
    ()
    (start-game canvas)))

(defn- canvas []
    [:canvas {:id "main"
              :width "640"
              :height "480"
              :ref canvas-changed}])

(defn- home [] [:div "home"])

(defn- game [] [canvas])

(defn- editor [] [:div "editor"])

(defn- route [page]
  (case page
    :game game
    :editor editor))

(defn- app []
  (let [current-page (r/atom :game)]
    (fn []
      [:div
       [:button {:on-click #(swap! current-page (fn [] :game))} "game"]
       [:button {:on-click #(swap! current-page (fn [] :editor))} "level editor"]
       [:div ((route @current-page))]])))

(defn- mount [component]
  (rd/render [component]
    (.getElementById js/document "game")))

(defn init []
  (mount app))
