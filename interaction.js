
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'

	// Developper les 3 fonctions gérant les événements

	// Associer les fonctions précédentes aux évènements du canvas.



	this.x_InitialPos = 0;
	this.y_InitialPos = 0; 
	this.x_FinalPos = 0; 
	this.y_FinalPos = 0; 

	this.isPressed = false;

	this.canvas = canvas;
	this.interactor = interactor;


	this.pression = function (evt) {
		this.isPressed = true;
		this.x_InitialPos = getMousePosition(this.canvas, evt).x;
		this.y_InitialPos = getMousePosition(this.canvas, evt).y;
		console.log("pression : " , this.x_InitialPos , this.y_InitialPos);
	}.bind(this);

	this.deplacement = function (evt) {
		if(this.isPressed){
			this.x_FinalPos = getMousePosition(this.canvas, evt).x;
			this.y_FinalPos = getMousePosition(this.canvas, evt).y;
			console.log("deplacement :" , this.x_FinalPos , this.y_FinalPos);

		}
	}.bind(this);

	this.relachement = function (evt) {
		this.isPressed = false;
		this.x_FinalPos = getMousePosition(this.canvas, evt).x;
		this.y_FinalPos = getMousePosition(this.canvas, evt).y;
		console.log("relachement :" ,this.x_FinalPos , this.y_FinalPos);

	}.bind(this);



	canvas.addEventListener('mousedown', this.pression, false);
	canvas.addEventListener('mousemove', this.deplacement, false);
	canvas.addEventListener('mouseup', this.relachement, false);
};





// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



