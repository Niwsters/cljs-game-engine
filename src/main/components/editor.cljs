(ns components.editor
  (:require
   [components.canvas :refer [canvas]]
   [image :refer [image-component]]
   [mouse :refer [listen-mouse-click!]]
   [reagent.core :as r]
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

(defn- add-sprite [sprites image-id x y]
  (->> (sprite x y image-id)
       (conj sprites)))

(defn- add-sprite! [sprites selected-sprite x y]
  (swap! sprites (fn [] (add-sprite @sprites @selected-sprite x y))))

(defn- mouse-clicked [sprites selected-sprite x y]
  (add-sprite! sprites selected-sprite x y))

(defn- on-canvas-init [sprites canvas selected-sprite]
  (listen-mouse-click! canvas (fn [x y] (mouse-clicked sprites selected-sprite x y))))

(defn editor []
  (let [sprites (init-sprites)
        selected-sprite (r/atom :arctic)]
    [:div {:style {:display "flex"}}
      [canvas sprites (fn [canvas] (on-canvas-init sprites canvas selected-sprite))]
      [menu selected-sprite (fn [sprite] (select-sprite! selected-sprite sprite))]]))
