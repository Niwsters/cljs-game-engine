(ns core
  (:require [components.game :refer [game]]
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
