(ns core
  (:require [context :refer [canvas]]
            [render :refer [start-rendering]]))


(defn- image []
  (let [jsImage (js/Image.)]
    (set! (.-src jsImage) "/img/opp1_jungle_tiles/sprites/humans/arctic/spr_m_arctic_earwarmer.png")
    jsImage))

(defn- sprite [x y image] {
  :x x
  :y y
  :image image
})

(def sprites [
  (sprite 50 50 (image))
  (sprite 100 100 (image))
])

(defn- add-sprite [x y]
  (set! sprites (conj sprites (sprite x y (image)))))


(defn- mouse-position [event] [(.-clientX event) (.-clientY event)])

(defn- mouse-x [event] (.-clientX event))
(defn- mouse-y [event] (.-clientY event))

;(defn- mouse-moved [event] (println (mouse-position event)))
;(set! (.-onmousemove (canvas)) mouse-moved)

(defn- mouse-clicked [event]
  (println (mouse-position event))
  (add-sprite (mouse-x event) (mouse-y event)))
(set! (.-onclick (canvas)) mouse-clicked)


(defn init []
  (start-rendering (fn [] sprites)))
