(ns core)

(def body (.-body js/document))

(defn canvas [] (.getElementById js/document "main"))

(defn image []
  (let [jsImage (js/Image.)]
    (set! (.-src jsImage) "/img/opp1_jungle_tiles/sprites/humans/arctic/spr_m_arctic_earwarmer.png")
    jsImage))

(defn sprite [x y image] {
  :x x
  :y y
  :image image
})

(def sprites [
  (sprite 50 50 (image))
  (sprite 100 100 (image))
])

(defn context [] (.getContext (canvas) "2d"))

(defn clear []
  (.clearRect (context) 0 0 (.-width (canvas)) (.-height (canvas))))

(defn render-sprite [sprite]
  (.drawImage (context) (get sprite :image) (get sprite :x) (get sprite :y)))

(defn elapsed [timestamp lastTimestamp]
  (- timestamp lastTimestamp))

(defn request-animation-frame [callback]
  (.requestAnimationFrame js/window callback))

(defn render-sprites
  [sprites]
    (if (> (count sprites) 0)
      (do
        (render-sprite (first sprites))
        (render-sprites (rest sprites)))
      ()))

(defn render-frame [sprites]
  (clear)
  (render-sprites sprites))

(defn fps [] (/ 1000 60))

(defn start-loop [func timestamp lastTimestamp]
  (if (> (elapsed timestamp lastTimestamp) (fps))
    (do
      (func)
      (request-animation-frame (fn [t] (start-loop func t timestamp))))
    (request-animation-frame (fn [timestamp] (start-loop func timestamp lastTimestamp)))))

(defn start-rendering [sprites]
  (start-loop (fn [] (render-frame sprites)) 0 0))

(defn init []
  (clear)
  (start-rendering sprites))
