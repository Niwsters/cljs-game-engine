(ns render
  (:require [context :refer [context clear]]
            [image :refer [get-image]]))

(defn- render-image [context image x y]
  (.drawImage
    context
    image
    (- x (/ (.-width image) 2))
    (- y (/ (.-height image) 2))))

(defn- render-sprite [context sprite]
  (render-image context (get-image (get sprite :image)) (get sprite :x) (get sprite :y)))

(defn- request-animation-frame [callback]
  (.requestAnimationFrame js/window callback))

(defn- render-sprites [context sprites]
  (if (> (count sprites) 0)
    (do
      (render-sprite context (first sprites))
      (render-sprites context (rest sprites)))
    ()))

(defn- render-frame [canvas sprites]
  (clear canvas)
  (render-sprites (context canvas) sprites))

(defn- fps [] (/ 1000 60))

(defn- start-loop [func timestamp lastTimestamp canvas]
  (if (nil? canvas)
    ()
    (if (> (- timestamp lastTimestamp) (fps))
      (do
        (func canvas)
        (request-animation-frame (fn [t] (start-loop func t timestamp canvas))))
      (request-animation-frame (fn [timestamp] (start-loop func timestamp lastTimestamp canvas))))))

(defn start-rendering [canvas sprites]
  (start-loop (fn [canvas] (render-frame canvas (sprites))) 0 0 canvas))
