(ns components.editor
  (:require
   [reagent.core :as r]
   [components.canvas :refer [canvas]]
   [image :refer [image-component]]
   [sprite :refer [sprite]]))

(defn- init-sprites [] (atom [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
]))

(defn- sprite-selector-style [image-id selected-sprite]
  (if (= image-id selected-sprite)
    {:border-color :red}
    {}))

(defn- sprite-selector [image-id selected-sprite select-sprite!]
  [:button
   {:style (sprite-selector-style image-id @selected-sprite)
    :on-click (fn [] (select-sprite! image-id))}
   [image-component image-id]])

(defn- menu [selected-sprite select-sprite!]
  [:div {:style {:padding "1rem"
                 :background "white"
                 :margin-left "1rem"}}
   [sprite-selector :arctic selected-sprite select-sprite!]
   [sprite-selector :arctic-old selected-sprite select-sprite!]])

(defn- select-sprite! [selected-sprite sprite]
  (swap! selected-sprite (fn [] sprite)))

(defn editor []
  (let [sprites (init-sprites)
        selected-sprite (r/atom :arctic)]
    [:div {:style {:display "flex"}}
      [canvas sprites #()]
      [menu selected-sprite (fn [sprite] (select-sprite! selected-sprite sprite))]]))
