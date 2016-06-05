Runjump.Preloader = function(game) {
	this.titleText = null;
	this.ready = false;
};

Runjump.Preloader.prototype = {

	preload: function () {

		// Carga Imagenes, Sonido, y sprites , que mas tarde se llamaran en los diferentes estados

		this.titleText = this.add.image(this.world.centerX, this.world.centerY-150, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
		this.load.image('gameover', 'IMG/GameOver.png');
		this.load.image('cat', 'IMG/cat1.png');
		this.load.image('p1', 'IMG/spaceship.png');
		this.load.image('button-pause', 'IMG/button-pause.png');
		this.load.image('pipe', 'IMG/ghost.png')
		this.load.image('gasp', 'IMG/spaceship.png');
		this.load.image('background4', 'IMG/Scene4.png');
		this.load.image('enemies1', 'IMG/asteroid.png');
		this.load.spritesheet('explosion', 'IMG/explosion.png',64,64,24);
		this.load.spritesheet('asteroid','IMG/animated_asteroid2.png',60,60,32);
		this.load.image('fondo', 'IMG/map.png');
		this.load.image('titulo', 'IMG/titulo.png');
		this.load.image('començar', 'IMG/començar.png');
		this.load.image('opcions', 'IMG/opcions.png');
		this.load.image('opcionstit', 'IMG/opcionstit.png');
		this.load.image('puta', 'IMG/puta.png');
		this.load.image('creditsTit', 'IMG/credits1.png');
		this.load.image('creditsfinals', 'IMG/creditsfinals.png');
		this.load.image('gameovertit', 'IMG/gameover.png');
		this.load.image('tornar', 'IMG/tornar.png');
		this.load.image('menugo', 'IMG/menugo.png');
		this.load.image('tornarmenu', 'IMG/tornarmenu.png');
		this.load.image('pausa', 'IMG/pausa.png');
		this.load.audio('musi', 'SKRILLEX-Bangarang.mp3');
		this.load.image('habilitaso','IMG/habilita.png');
		this.load.image('habilitamu','IMG/habilitamu.png');
		this.load.audio('salto','sonido.mp3');
		this.load.audio('boom','boom.mp3');
		this.load.image('ultimapun','IMG/ultimapos.png');
		this.load.image('millorpun','IMG/millorpun.png')
		this.load.image('classificacio','IMG/classificacio.png')
		this.load.image('classificaciotit','IMG/classificaciotit.png');
	},

	update: function () {
		this.ready = true;
		this.state.start('StartMenu'); // llamada al estado Menu
	}
};