
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


function Drawing() {
  this.forms = [];
};


function Form(color, thickness){
	this.color = color;
	this.thickness = thickness;
};

function Rectangle(color, thickness, x_topLeft, y_topLeft, width, height) {
  Form.call(this, color, thickness)

  this.x_topLeft = x_topLeft;
  this.y_topLeft = y_topLeft;
  this.width = width;
  this.height = height;
};


function Line(color, thickness, x_A, y_A, x_B, y_B) {
  Form.call(this, color, thickness)

  this.x_A = x_A;
  this.y_A = y_A;
  this.x_B = x_B;
  this.y_B = y_B;
};
