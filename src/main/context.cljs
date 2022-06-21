(ns context)

(defn canvas [] (.getElementById js/document "main"))

(defn context [] (.getContext (canvas) "2d"))

(defn clear [context]
  (.clearRect context 0 0 (.-width (canvas)) (.-height (canvas))))

(defn render-image [context image x y]
  (.drawImage context image x y))
