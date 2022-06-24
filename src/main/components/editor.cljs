(ns components.editor
  (:require
   [components.canvas :refer [canvas]]
   [image :refer [image-component]]
   [sprite :refer [sprite]]))

(defn init-sprites [] (atom [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
]))

(defn- menu []
  [:div {:style {:padding "1rem"
                 :background "white"
                 :margin-left "1rem"}}
   [:button (image-component :arctic)]])

(defn editor []
  (let [sprites (init-sprites)]
    [:div {:style {:display "flex"}}
      [canvas sprites #()]
      [menu]]))
