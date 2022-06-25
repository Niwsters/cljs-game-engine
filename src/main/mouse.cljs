(ns mouse)

(defn- mouse-x [event] (.-offsetX event))
(defn- mouse-y [event] (.-offsetY event))

(defn listen-mouse-click! [canvas func]
  (set! (.-onclick canvas)
    (fn [event]
      (func (mouse-x event) (mouse-y event)))))
