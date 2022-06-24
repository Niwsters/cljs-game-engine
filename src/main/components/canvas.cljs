(ns components.canvas
  (:require
   [render :refer [start-rendering]]))

(defn- canvas-changed [canvas sprites func]
  (if (nil? canvas)
    ()
    (do
      (start-rendering canvas #(deref sprites))
      (func canvas))))

(defn canvas [sprites func]
    [:canvas {:id "main"
              :width "640"
              :height "480"
              :ref (fn [canvas]
                     (canvas-changed canvas sprites func))}])
