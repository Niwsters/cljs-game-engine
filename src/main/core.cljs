(ns core
  (:require [game.game :refer [game]]
            [editor.editor :refer [editor]]
            [reagent.core :as r]
            [reagent.dom :as rd]))

(defn- route [page]
  (case page
    :game game
    :editor editor))

(defn- app []
  (let [current-page (r/atom :editor)]
    (fn []
      [:div
       [:button {:on-click #(swap! current-page (fn [] :game))} "game"]
       [:button {:on-click #(swap! current-page (fn [] :editor))} "level editor"]
       [:div ((route @current-page))]])))

(defn- mount [component]
  (rd/render [component]
    (.getElementById js/document "game")))

(mount app)

(defn init []
  ())
