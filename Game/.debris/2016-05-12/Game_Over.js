Runjump.Game_Over = function(game) {
	this.final;
	this.VolverMenu;
	this.VolverAtras;
	
};

Runjump.Game_Over.prototype = {
	
	create:function() {
	var styleCom = { font: "40px Courier", fill: "#fff", tabs: 132 };

	this.stage.backgroundColor = "#124184";
	final = this.add.image(125, 25, 'gameover');

	VolverAtras = this.add.text(375, this.world.centerY+100, " Volver a jugar", styleCom);
	VolverAtras.anchor.setTo(0.5, 0.5);
	VolverAtras.inputEnabled = true;
	VolverAtras.events.onInputDown.addOnce(this.VolvAtras, this);

	VolverMenu = this.add.text(375, this.world.centerY+150, "Menú", styleCom);
	VolverMenu.anchor.setTo(0.5, 0.5);
	VolverMenu.inputEnabled = true;
	VolverMenu.events.onInputDown.addOnce(this.VolvMenu, this);



	
	},

	VolvAtras: function () {

    	this.state.start('Game');
	
	},

	VolvMenu: function () {

    	this.state.start('StartMenu');
	
	}



};