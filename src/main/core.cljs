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

(defn print-frame [timestamp]
  (println timestamp))

(defn elapsed [timestamp lastTimestamp]
  (- timestamp lastTimestamp))

(defn requestAnimationFrame [callback]
  (.requestAnimationFrame js/window callback))

(defn frame [timestamp lastTimestamp]
  (if (> (elapsed timestamp lastTimestamp) 1000)
    (render
    (sprite 50 50 (image)))
    nil)
  (if (> (elapsed timestamp lastTimestamp) 1000)
    (requestAnimationFrame (fn [t] (frame t timestamp)))
    (requestAnimationFrame (fn [timestamp] (frame timestamp lastTimestamp)))))

(defn startRendering []
  (frame 0 0))

(defn init []
  (startRendering))
