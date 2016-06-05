Runjump.StartMenu = function(game) {
	//this.startBG;
	//this.startBG2;
	//this.startPrompt;
	this.titulo;
	this.començar;
	this.opcions;
	this.credits;
	
};

Runjump.StartMenu.prototype = {

	create: function () {
		var styleCom = { font:"bold 35px Comic Sans MS ", fill: "#fff", tabs: 132 };
		var styleTit = { font:"bold 90px Comic Sans MS ", fill: "#F2F5A9", tabs: 132 }
		/*startBG = this.add.image(125, 25, 'titlescreen');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame,this);

		startBG2 = this.add.image(340, 75,'subtitle');
		startBG2.inputEnabled = true;
		startBG2.events.onInputDown.addOnce(this.startGame,this);*/
		titulo = this.add.text(240, this.world.centerY-170, "Runjump", styleTit );
		titulo.stroke = '#00000';
		titulo.strokeThickness = 2;
		titulo.setShadow = (2, 2, '#333333',2, true, false);

		començar = this.add.text(25, this.world.centerY+10, "COMENÇAR", styleCom);
		començar.inputEnabled = true;
		començar.stroke = '#00000';
		començar.strokeThickness = 16;
		començar.setShadow = (2, 2, '#333333',2, true, false);
		començar.events.onInputDown.addOnce(this.startGame, this);
		començar.inputEnabled = true;
		començar.input.useHandCursor = true;
		//començar.events.onInputOver.add(this.over, this);
		//començar.events.onInputOut.add(this.out,this);

		opcions = this.add.text(25, this.world.centerY+70, "OPCIONS", styleCom);
		opcions.inputEnabled = true;
		opcions.input.useHandCursor = true;
		opcions.stroke = '#000000';
		opcions.strokeThickness = 16;
		opcions.setShadow = (2, 2, '#333333',2, true, false);
		opcions.events.onInputDown.addOnce(this.opcions, this);
		opcions.inputEnabled = true;
		//opcions.events.onInputOver.add(this.over, this);
		//opcions.events.onInputOut.add(this.out,this);

		

		credits = this.add.text(25, this.world.centerY+130, "CREDITS", styleCom);
		credits.inputEnabled = true;
		credits.input.useHandCursor = true;
		credits.stroke = '#00000';
		credits.strokeThickness = 16;
		credits.setShadow = (2, 2, '#333333',2, true, false);
		credits.events.onInputDown.addOnce(this.startGame, this);

		
		/*
		startPrompt = this.add.text(375, this.world.centerY+100, "Pressiona per començar", styleCom);
		startPrompt.anchor.setTo(0.5, 0.5);
		startPrompt.inputEnabled = true;
		startPrompt.events.onInputDown.addOnce(this.startGame, this);*/
	},

	
	/*out:function () {
		començar.fill = '#fff';
		opcions.fill = '#fff'; 
	},
	over:function () {
		començar.fill = '#F2F5A9';
		opcions.fill = '#F2F5A9';
	},*/
	
	startGame: function (pointer) {
		this.state.start('Game');
	},

	opcions: function (pointer) {
		this.state.start('Opcions');
	}
};