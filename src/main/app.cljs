(ns app)

(def body (.-body js/document))

(def canvas (.getElementById js/document "main"))

(def image2 (js/Image.))
(set! (.-src image2) "/img/food.png")

(defn context [] (.getContext canvas "2d"))

(defn clear []
  (.clearRect (context) 0 0 (.-width canvas) (.-height canvas)))

(defn render []
  (clear)
  (.drawImage (context) image2 0 0))

(render)

(defn init []
  (render))
