var Runjump = {};

Runjump.Boot = function(game) {};

Runjump.Boot.prototype = {
	preload: function() {

	},

	create: function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE
		this.scale.minWidth = 270;
		this.scale.minHeight = 480;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize = true;

		this.input.addPointer();
		this.stage.backgroundColor = '#124184';

		this.state.start('Preloader');
	}
}