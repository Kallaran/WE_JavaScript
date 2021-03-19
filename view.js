
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {

  ctx.beginPath();
  ctx.rect(this.x_topLeft, this.y_topLeft, this.width, this.height);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(  this.x_A , this.y_A);
  ctx.lineTo(  this.x_B , this.y_B);
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};


Form.prototype.paint = function(ctx) {
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.thickness;
};