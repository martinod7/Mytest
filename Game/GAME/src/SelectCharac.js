Runjump.SelectCharac = function(game) {
	this.selecionar;
	this.escena1;
	this.escena2;
	this.escena3;
	
}

Runjump.SelectCharac.prototype = {

	create: function () {
	var styleCom = { font: "20px Courier", fill: "#fff", tabs: 132 };
	selecionar = this.add.text(375, this.world.centerY-150, "Pressiona per selecionar", styleCom);
	selecionar.anchor.setTo(0.5, 0.5);
	selecionar.inputEnabled = true;
	selecionar.events.onInputDown.addOnce(this.starSelect, this);

	escena1 = this.add.image(50, 250,'escena1');
	escena1.inputEnabled = true;
	escena1.events.onInputDown.addOnce(this.starSelect, this);

	escena2 = this.add.image(300, 250,'escena2');
	escena2.inputEnabled = true;
	escena2.events.onInputDown.addOnce(this.starSelect, this);

	escena3 = this.add.image(550, 250,'escena3');
	escena3.inputEnabled = true;
	escena3.events.onInputDown.addOnce(this.starSelect, this);
	
	},

	starSelect: function (pointer) {
		this.state.start('Game');
		//alert($(this).attr('src'));
	}

};