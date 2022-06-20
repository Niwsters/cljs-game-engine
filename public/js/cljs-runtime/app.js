goog.provide('app');
app.body = document.body;
app.canvas = document.getElementById("main");
app.image2 = (new Image());
(app.image2.src = "/img/food.png");
app.context = (function app$context(){
return app.canvas.getContext("2d");
});
app.clear = (function app$clear(){
return app.context().clearRect((0),(0),app.canvas.width,app.canvas.height);
});
app.render = (function app$render(){
app.clear();

return app.context().drawImage(app.image2,(0),(0));
});
app.render();
app.init = (function app$init(){
return app.render();
});

//# sourceMappingURL=app.js.map
