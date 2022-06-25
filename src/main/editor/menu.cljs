(ns editor.menu
  (:require
   [editor.sprite-selector :refer [sprite-selector]]
   [image :refer [image-ids]]))

(defn menu [state select-sprite!]
  [:div {:style {:padding "1rem"
                 :background "white"
                 :margin-left "1rem"}}
   (map-indexed (fn [index image-id]
                  [:div {:key index}
                   [sprite-selector image-id state select-sprite!]])
                (image-ids))])
