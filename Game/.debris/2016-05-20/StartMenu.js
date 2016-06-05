Runjump.StartMenu = function(game) {
	//this.startBG;
	//this.startBG2;
	//this.startPrompt;
	this.titulo;
	this.començar;
	this.opcions;
	this.credits;
	this.button;
	
};

Runjump.StartMenu.prototype = {

	create: function () {

		this.add.sprite(0, 0, 'fondo');

		titulo = this.add.sprite(200, this.world.centerY-240, 'titulo');
		
		començar = this.add.button(this.world.centerX-100, this.world.centerY,'començar',this.cambiar, this, 1, 0);
		començar.events.onInputDown.addOnce(this.startGame, this);
		començar.input.useHandCursor = true;

		opcions = this.add.button(this.world.centerX-100, this.world.centerY+60,'opcions',this.opcions, this, 1, 0);
		opcions.events.onInputDown.addOnce(this.startGame, this);
		
		opcions.input.useHandCursor = true;
		opcions.events.onInputDown.addOnce(this.opcions, this);

		credits = this.add.button(this.world.centerX-100, this.world.centerY+120,'puta',this.credits, this, 1, 0);
		credits.input.useHandCursor = true;
		credits.events.onInputDown.addOnce(this.credits, this);
	},
	
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