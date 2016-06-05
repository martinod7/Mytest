var Runjump = {};

Runjump.Boot = function(game) {

};

Runjump.Boot.prototype = {
	preload: function() {	

	},
	// Configuración inicial
	create: function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE // No escalar, quiere decir que no se adaptara por completo a una table o movil
		this.scale.minWidth = 270; // Ancho minimo
		this.scale.minHeight = 480; // Alto minimo
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize = true;

		this.input.addPointer();
		

		this.state.start('Preloader'); // llamada / iniciacion del Estado Preloader
	}
}