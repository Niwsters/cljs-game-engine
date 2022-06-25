(ns editor.sprite-selector
  (:require
   [editor.state :as state]
   [image :refer [image-component]]))

(defn- sprite-selector-style [image-id selected-sprite]
  (if (= image-id selected-sprite)
    {:border-color :red}
    {}))

(defn sprite-selector [image-id state select-sprite!]
  [:button
   {:style (sprite-selector-style image-id (state/selected-sprite @state))
    :on-click (fn [] (select-sprite! image-id))}
   [image-component image-id]])
