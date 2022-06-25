(ns components.canvas
  (:require
   [render :refer [start-rendering]]))

(defn- canvas-changed [canvas get-sprites func]
  (if (nil? canvas)
    ()
    (do
      (start-rendering canvas get-sprites)
      (func canvas))))

(defn canvas [get-sprites func]
    [:canvas {:id "main"
              :width "640"
              :height "480"
              :ref (fn [canvas]
                     (canvas-changed canvas get-sprites func))}])
