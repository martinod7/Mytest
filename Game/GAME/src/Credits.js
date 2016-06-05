Runjump.Credits = function(game) {
	this.creditsTit;
	this.creditsfinals;
	this.tornarmenu;
	
};

Runjump.Credits.prototype = {

	create: function () {

		this.add.sprite(0, 0, 'fondo');
		creditsTit  = this.add.sprite(100, this.world.centerY-275, 'creditsTit');
		creditsfinals = this.add.sprite(50, this.world.centerY-150, 'creditsfinals');

		tornarmenu = this.add.button(-180,250, 'tornarmenu');
		tornarmenu.events.onInputDown.addOnce(this.backagain, this);
		tornarmenu.input.useHandCursor = true;

	},

	backagain: function (pointer) {
		this.state.start('StartMenu');
	}
};