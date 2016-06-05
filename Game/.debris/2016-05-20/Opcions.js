Runjump.Opcions = function(game) {
	
	this.tituloOpc;
	this.atras;
	this.play;
	this.on;
	this.separacio;
	this.off;

	this.playmusic;
	this.onmusic;
	this.offmusic;
	this.separaciomusic;

	this.musica;
	
};

Runjump.Opcions.prototype = {

	create: function () {
		var styleCom = { font:"bold 35px Comic Sans MS ", fill: "#fff", tabs: 132, cursor:"pointer"};
		var styleTit = { font:"bold 90px Comic Sans MS ", fill: "#F2F5A9", tabs: 132 }

		musica = this.add.audio('musi');
		
		this.add.sprite(0, 0, 'fondo');
		tituloOpc  = this.add.sprite(100, this.world.centerY-275, 'opcionstit');

		atras = this.add.button(-180,250, 'tornarmenu');
		atras.events.onInputDown.addOnce(this.backagain, this);
		atras.input.useHandCursor = true;

		///////// HABILITA SONIDO //////////
		play = this.add.text(160, this.world.centerY-45, "Habilita so", styleCom );
		play.inputEnabled = true;
		play.stroke = '#00000';
		play.strokeThickness = 16;
		play.setShadow = (2, 2, '#333333',2, true, false);

		on = this.add.text(450, this.world.centerY-45, "ON", styleCom );
		on.inputEnabled = true;
		on.stroke = '#00000';
		on.strokeThickness = 16;
		on.setShadow = (2, 2, '#333333',2, true, false);
		on.events.onInputDown.addOnce(this.backagain, this);
		on.inputEnabled = true;
		on.input.useHandCursor = true;

		separacio = this.add.text(525, this.world.centerY-45, "/", styleCom );
		separacio.inputEnabled = true;
		separacio.stroke = '#00000';
		separacio.strokeThickness = 16;
		separacio.setShadow = (2, 2, '#333333',2, true, false);
		separacio.events.onInputDown.addOnce(this.backagain, this);
		separacio.inputEnabled = true;

		off = this.add.text(560, this.world.centerY-45, "OFF", styleCom );
		off.inputEnabled = true;
		off.stroke = '#00000';
		off.strokeThickness = 16;
		off.setShadow = (2, 2, '#333333',2, true, false);
		off.events.onInputDown.addOnce(this.backagain, this);
		off.inputEnabled = true;
		off.input.useHandCursor = true;

		///////// HABILITA MUSICA //////////
		playmusic = this.add.text(160, this.world.centerY+25, "Habilita musica", styleCom );
		playmusic.inputEnabled = true;
		playmusic.stroke = '#00000';
		playmusic.strokeThickness = 16;
		playmusic.setShadow = (2, 2, '#333333',2, true, false);
		playmusic.events.onInputDown.addOnce(this.backagain, this);
		playmusic.inputEnabled = true;

		onmusic = this.add.text(450, this.world.centerY+25, "ON", styleCom );
		onmusic.inputEnabled = true;
		onmusic.stroke = '#00000';
		onmusic.strokeThickness = 16;
		onmusic.setShadow = (2, 2, '#333333',2, true, false);
		onmusic.events.onInputDown.addOnce(this.reproducir, this);
		onmusic.inputEnabled = true;
		onmusic.input.useHandCursor = true;

		separaciomusic = this.add.text(525, this.world.centerY+25, "/", styleCom );
		separaciomusic.inputEnabled = true;
		separaciomusic.stroke = '#00000';
		separaciomusic.strokeThickness = 16;
		separaciomusic.setShadow = (2, 2, '#333333',2, true, false);
		separaciomusic.events.onInputDown.addOnce(this.backagain, this);
		separaciomusic.inputEnabled = true;

		offmusic = this.add.text(560, this.world.centerY+25, "OFF", styleCom );
		offmusic.inputEnabled = true;
		offmusic.stroke = '#00000';
		offmusic.strokeThickness = 16;
		offmusic.setShadow = (2, 2, '#333333',2, true, false);
		offmusic.events.onInputDown.addOnce(this.parar, this);
		offmusic.inputEnabled = true;
		offmusic.input.useHandCursor = true;

		
		

	},

	reproducir: function(pointer) {
		musica.play();
	},

	parar: function(pointer) {
		musica.pause();
	},

	backagain: function (pointer) {
		this.state.start('StartMenu');
	},

	actionOnClick: function() {
		background.visible =! background.visible;
	}
};