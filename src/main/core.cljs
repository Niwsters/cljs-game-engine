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

(defn context [] (.getContext (canvas) "2d"))

(defn clear []
  (.clearRect (context) 0 0 (.-width (canvas)) (.-height (canvas))))

(defn render [sprite]
  (clear)
  (.drawImage (context) (get sprite :image) (get sprite :x) (get sprite :y)))

(defn elapsed [timestamp lastTimestamp]
  (- timestamp lastTimestamp))

(defn request-animation-frame [callback]
  (.requestAnimationFrame js/window callback))

(defn render-frame []
  (render
    (sprite 50 50 (image))))

(defn fps [] (/ 1000 60))

(defn start-loop [func timestamp lastTimestamp]
  (if (> (elapsed timestamp lastTimestamp) (fps))
    (do
      (render-frame)
      (request-animation-frame (fn [t] (start-loop func t timestamp))))
    (request-animation-frame (fn [timestamp] (start-loop func timestamp lastTimestamp)))))

(defn start-rendering []
  (start-loop render-frame 0 0))

(defn init []
  (clear)
  (start-rendering))
