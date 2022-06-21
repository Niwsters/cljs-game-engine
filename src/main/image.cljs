(ns image)

(defn- image [src]
  (let [jsImage (js/Image.)]
    (set! (.-src jsImage) src)
    jsImage))

(defn images []
  {
    :arctic (image "/img/opp1_jungle_tiles/sprites/humans/arctic/spr_m_arctic_earwarmer.png")
  })
