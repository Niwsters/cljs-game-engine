(ns editor.editor
  (:require
   [canvas :refer [canvas]]
   [editor.state :as state]
   [editor.menu :refer [menu]]
   [mouse :refer [listen-mouse-click!]]
   [reagent.core :as r]))

(defn- select-sprite! [state sprite]
  (swap! state (fn [] (state/select-sprite @state sprite))))

(defn- add-sprite! [state x y]
  (swap! state (fn [] (state/editor-add-sprite @state x y))))

(defn- mouse-clicked [state x y]
  (add-sprite! state x y))

(defn- on-canvas-init [canvas state]
  (listen-mouse-click! canvas (fn [x y] (mouse-clicked state x y))))

(defn editor []
  (let [state (r/atom (state/init))]
    [:div {:style {:display "flex"}}
      [canvas
       (fn [] (state/sprites @state))
       (fn [canvas] (on-canvas-init canvas state))]
      [menu state (fn [sprite] (select-sprite! state sprite))]]))
