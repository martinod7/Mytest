Runjump.Opcions = function(game) {
	
	this.tituloOpc;
};

Runjump.Opcions.prototype = {

	create: function () {
		var styleCom = { font:"bold 35px Comic Sans MS ", fill: "#fff", tabs: 132 };
		var styleTit = { font:"bold 90px Comic Sans MS ", fill: "#F2F5A9", tabs: 132 }
		
		tituloOpc = this.add.text(200, this.world.centerY-240, "OPCIONS", styleTit );
		tituloOpc.stroke = '#00000';
		tituloOpc.strokeThickness = 2;
		tituloOpc.setShadow = (2, 2, '#333333',2, true, false);

		
	}
};