(ns render
  (:require [context :refer [context clear render-image]]))

(defn- render-sprite [context sprite]
  (render-image context (get sprite :image) (get sprite :x) (get sprite :y)))

(defn- request-animation-frame [callback]
  (.requestAnimationFrame js/window callback))

(defn- render-sprites [context sprites]
  (if (> (count sprites) 0)
    (do
      (render-sprite context (first sprites))
      (render-sprites context (rest sprites)))
    ()))

(defn- render-frame [context sprites]
  (clear context)
  (render-sprites context sprites))

(defn- fps [] (/ 1000 60))

(defn- start-loop [func timestamp lastTimestamp]
  (if (> (- timestamp lastTimestamp) (fps))
    (do
      (func)
      (request-animation-frame (fn [t] (start-loop func t timestamp))))
    (request-animation-frame (fn [timestamp] (start-loop func timestamp lastTimestamp)))))

(defn start-rendering [sprites]
  (start-loop (fn [] (render-frame (context) (sprites))) 0 0))
