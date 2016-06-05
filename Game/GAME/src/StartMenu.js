Runjump.StartMenu = function(game) {

	
	this.titulo;
	this.començar;
	this.opcions;
	this.credits;
	this.button;
	this.classificacio;
	
};

Runjump.StartMenu.prototype = {

	//Creacion del menu cuyas propiedades llaman a las funciones que 
	create: function () {

		this.add.sprite(0, 0, 'fondo');

		titulo = this.add.sprite(200, this.world.centerY-240, 'titulo');
		
		començar = this.add.button(this.world.centerX-100, this.world.centerY,'començar',this.startGame, this, 1, 0); // especificacion coordenadas de insercion, llamada de la funcion que llama al estado
		començar.events.onInputDown.addOnce(this.startGame, this);// habilitar el boton
		començar.input.useHandCursor = true; // visualizar el puntero como mano

		classificacio = this.add.button(this.world.centerX-104, this.world.centerY+60,'opcions',this.opcions, this, 1, 0);
		classificacio.events.onInputDown.addOnce(this.opcions, this);
		classificacio.input.useHandCursor = true;
		

		credits = this.add.button(this.world.centerX-125, this.world.centerY+120,'puta',this.credits, this, 1, 0);
		credits.input.useHandCursor = true;
		credits.events.onInputDown.addOnce(this.credits, this);
	},
	
	// Declaracion de funciones que llaman a distintos estado
	startGame: function (pointer) {
		this.state.start('Game');
	},

	opcions: function (pointer) {
		this.state.start('Opcions');
	},
	credits : function (pointer) {
		this.state.start('Credits');
	}


};