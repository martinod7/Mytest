Runjump.Game_Over = function(game) {
	this.final;
	this.VolverMenu;
	this.VolverAtras;
	this.ultima;
	this.puntuacionfinal;
	this.millorpunt;
	this.millorpuntnum;
	this.millorpuntnumtot = 0;
	this.puta;
	
};

Runjump.Game_Over.prototype = {
	
	create:function() {
		var styleTit = { font:"bold 30px Comic Sans MS ", fill: "#ffffff", tabs: 132 }
	this.add.sprite(0, 0, 'fondo');
	final = this.add.image(105, -35, 'gameovertit');

	VolverAtras = this.add.button(105, 170, 'tornar');
	VolverAtras.events.onInputDown.addOnce(this.VolvAtras, this);
	VolverAtras.input.useHandCursor = true;

	VolverMenu = this.add.button(105, 240, 'menugo');
	VolverMenu.events.onInputDown.addOnce(this.VolvMenu, this);
	VolverMenu.input.useHandCursor = true;
	
	ultima = this.add.image(-5,95,'ultimapun');
	puntuacionfinal = this.add.text(450,263,""+score,styleTit);

	millorpunt = this.add.image(330,80,'millorpun');
	localStorage.setItem('millorpuntnum',this.millorpuntnum);
	var high = localStorage.getItem('millorpuntnum');

	if(score < high) {
		this.millorpuntnumtot = high;
		puta = this.add.text(590,263,""+this.millorpuntnumtot,styleTit);
	}else{
		this.millorpuntnumtot = score;
		puta = this.add.text(590,263,""+this.millorpuntnumtot,styleTit);
	}
	},

	VolvAtras: function (pointer) {

    	this.state.start('Game');
	
	},

	VolvMenu: function (pointer) {

    	this.state.start('StartMenu');
	
	}
};