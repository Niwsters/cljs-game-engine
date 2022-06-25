(ns image)

(defn- image [src]
  (let [jsImage (js/Image.)]
    (set! (.-src jsImage) src)
    jsImage))

(defn- image-srcs []
  {:arctic "/img/opp1_jungle_tiles/sprites/humans/arctic/spr_m_arctic_earwarmer.png"
   :arctic-old "/img/opp1_jungle_tiles/sprites/humans/arctic/spr_f_arctic_old.png"})

(defn- images []
  {:arctic (image (get (image-srcs) :arctic))})

(defn get-image [image-id]
  (get (images) image-id))

(defn image-component [image-id]
  [:img
   {:src (get (image-srcs) image-id)}])
