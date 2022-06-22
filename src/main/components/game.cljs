(ns components.game
  (:require [mouse :refer [listen-mouse-click!]]
            [render :refer [start-rendering]]))

(defn- sprite [x y image] {
  :x x
  :y y
  :image image
})

(defn init-sprites [] (atom [
  (sprite 50 50 :arctic)
  (sprite 100 100 :arctic)
]))

(defn- add-sprite [sprites x y]
  (->> (sprite x y :arctic)
       (conj sprites)))

(defn- add-sprite! [sprites x y]
  (swap! sprites #(add-sprite (deref sprites) x y)))

(defn- mouse-clicked [sprites x y]
  (add-sprite! sprites x y))

(defn- start-game [sprites canvas]
  (listen-mouse-click! canvas (fn [x y] (mouse-clicked sprites x y)))
  (start-rendering canvas (fn [] (deref sprites))))

(defn- canvas-changed [sprites canvas]
  (if (nil? canvas)
    ()
    (start-game sprites canvas)))

(defn- canvas [sprites]
    [:canvas {:id "main"
              :width "640"
              :height "480"
              :ref (fn [canvas] (canvas-changed sprites canvas))}])

(defn game []
  (let [sprites (init-sprites)]
    (canvas sprites)))
