(ns mouse)

(defn- mouse-x [event] (.-clientX event))
(defn- mouse-y [event] (.-clientY event))

(defn listen-mouse-click! [canvas func]
  (set! (.-onclick canvas)
    (fn [event]
      (func (mouse-x event) (mouse-y event)))))
