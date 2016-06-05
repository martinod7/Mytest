Runjump.Preloader = function(game) {
	this.titleText = null;
	this.ready = false;
};

Runjump.Preloader.prototype = {

	preload: function () {
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-150, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('escena1','IMG/Scene1min.png');
		this.load.image('escena2','IMG/Scene2min.png');
		this.load.image('escena3','IMG/Scene3min.png');
		this.load.image('gameover', 'IMG/GameOver.png');


		this.load.image('cat', 'IMG/cat1.png');
		this.load.image('p1', 'IMG/spaceship.png');
		this.load.image('button-pause', 'IMG/button-pause.png');
		this.load.image('pipe', 'IMG/ghost.png')
		this.load.image('gasp', 'IMG/ghost.png');
		this.load.image('background1', 'IMG/Scene1.png');
		this.load.image('background2', 'IMG/Scene2.png');
		this.load.image('background3', 'IMG/Scene3.png');
		this.load.image('background4', 'IMG/Scene4.png');
		this.load.image('background5', 'IMG/Scene5.png');
		this.load.image('enemies1', 'IMG/asteroid.png');
		this.load.spritesheet('explosion', 'IMG/explosion.png',64,64,24);
		this.load.spritesheet('asteroid','IMG/animated_asteroid2.png',60,60,32);
		this.load.spritesheet('em','IMG/button-start.png');
		this.load.audio('musi', 'SKRILLEX-Bangarang.mp3');
	},

	update: function () {
		this.ready = true;
		this.state.start('StartMenu');
	}
};