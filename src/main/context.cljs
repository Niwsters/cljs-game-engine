(ns context)

(defn context [canvas] (.getContext canvas "2d"))

(defn clear [canvas]
  (.clearRect (context canvas) 0 0 (.-width canvas) (.-height canvas)))
