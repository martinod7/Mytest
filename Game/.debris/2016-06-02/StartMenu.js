Runjump.StartMenu = function(game) {
	//this.startBG;
	//this.startBG2;
	//this.startPrompt;
	this.titulo;
	this.començar;
	this.opcions;
	this.credits;
	this.button;
	this.classificacio;
	
};

Runjump.StartMenu.prototype = {

	create: function () {

		this.add.sprite(0, 0, 'fondo');

		titulo = this.add.sprite(200, this.world.centerY-240, 'titulo');
		
		començar = this.add.button(this.world.centerX-100, this.world.centerY,'començar',this.cambiar, this, 1, 0);
		començar.events.onInputDown.addOnce(this.startGame, this);
		començar.input.useHandCursor = true;

		classificacio = this.add.button(this.world.centerX-104, this.world.centerY+60,'classificacio',this.classificacio, this, 1, 0);
		classificacio.events.onInputDown.addOnce(this.classificacio, this);
		classificacio.input.useHandCursor = true;
		

		credits = this.add.button(this.world.centerX-125, this.world.centerY+120,'puta',this.credits, this, 1, 0);
		credits.input.useHandCursor = true;
		credits.events.onInputDown.addOnce(this.credits, this);
	},
	
	startGame: function (pointer) {
		this.state.start('Game');
	},

	classificacio: function (pointer) {
		this.state.start('Classificacio');
	},
	credits : function (pointer) {
		this.state.start('Credits');
	}


};