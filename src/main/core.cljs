(ns core
  (:require [components.game :refer [game]]
            [components.editor :refer [editor]]
            [reagent.core :as r]
            [reagent.dom :as rd]))

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
