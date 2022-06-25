(ns components.editor
  (:require
   [components.canvas :refer [canvas]]
   [image :refer [image-component image-ids]]
   [mouse :refer [listen-mouse-click!]]
   [reagent.core :as r]
   [sprite :refer [sprite]]))

(defn- init-sprites [] [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
])

(defn- sprite-selector-style [image-id selected-sprite]
  (if (= image-id selected-sprite)
    {:border-color :red}
    {}))

(defn- editor-selected-sprite [state]
  (get state :selected-sprite))

(defn- sprite-selector [image-id state select-sprite!]
  [:button
   {:style (sprite-selector-style image-id (editor-selected-sprite @state))
    :on-click (fn [] (select-sprite! image-id))}
   [image-component image-id]])

(defn- init-state []
  {:sprites (init-sprites)
   :selected-sprite :arctic})

(defn- editor-sprites [state]
  (get state :sprites))

(defn- menu [state select-sprite!]
  [:div {:style {:padding "1rem"
                 :background "white"
                 :margin-left "1rem"}}
   (map-indexed (fn [index image-id]
                  [:div {:key index}
                   [sprite-selector image-id state select-sprite!]])
                (image-ids))])

(defn select-sprite [state sprite]
  (assoc state :selected-sprite sprite))

(defn- select-sprite! [state sprite]
  (swap! state (fn [] (select-sprite @state sprite))))

(defn- add-sprite [sprites image-id x y]
  (->> (sprite x y image-id)
       (conj sprites)))

(defn editor-add-sprite [state x y]
  (assoc state
         :sprites
         (add-sprite
           (editor-sprites state)
           (editor-selected-sprite state) x y)))

(defn- add-sprite! [state x y]
  (swap! state (fn [] (editor-add-sprite @state x y))))

(defn- mouse-clicked [state x y]
  (add-sprite! state x y))

(defn- on-canvas-init [canvas state]
  (listen-mouse-click! canvas (fn [x y] (mouse-clicked state x y))))

(defn editor []
  (let [state (r/atom (init-state))]
    [:div {:style {:display "flex"}}
      [canvas
       (fn [] (editor-sprites @state))
       (fn [canvas] (on-canvas-init canvas state))]
      [menu state (fn [sprite] (select-sprite! state sprite))]]))
