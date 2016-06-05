Runjump.Game = function(game) {
	// Declaracion variables
	var score = -1;

	var player;
	var asteroide;
	var gasp;

	var pauseButton;
	var timertext;
	var scoretext;
	var trueScore = 1;
	var bestScore = 0;
	var topScore;
	var moviment;
	var explosion;
	var spacekey;
	var topScore;
	var saltoSound;
	var muerte;

};
Runjump.Game.prototype = {

	preload: function() {

		
	},
 
	create: function() {

		var RandomMap = Math.floor(Math.random()*3)+1;

		this.add.sprite(0, 0, 'background4');
		// Creación del sprite "jugador" en las coordenadas especificadas, previamente cargada la imagen de este 
		player = this.add.sprite(60, 250, 'p1');
		// Sirve para especificar la escala del mencionado anteriormente, aunque tambien se puede modificarlo cuando se carga la imagen
		player.scale.setTo(0.8, 0.8);
		
		gasp = this.add.sprite(-100, -100, 'gasp');
		// Añadimos la fisica al juego
		this.physics.startSystem(Phaser.Physics.ARCADE);
		// La fisica esta inicializada, ahora debemos habilitarla 
		this.physics.enable(player, Phaser.Physics.ARCADE);
		// Le aplicamos la gravedad
		player.body.gravity.set(0, 550);
		
		player.anchor.setTo(0.4, 0.4);

		score = 0;
		// Añadir sonidos 
		saltoSound = this.add.audio('salto'); 
		muerte = this.add.audio('boom'); 
		// Insertar texto coordenadas 
		scoretext = this.add.text(380, 10,style);
		// Cuando presionamos el raton ejecuta funcion salto
		this.input.onDown.add(this.jump, this);
		this.input.onDown.add(this.reproducir,this);
		//Creacion del grupo enemigos
		this.enemigos = this.add.group();
		// Creando numero de enemigos junto a la imagen cargada 
		this.enemigos.createMultiple(10, 'asteroid');
		// Aparicion de grupo de asteroides cada 2 seg 
		this.timer1 = this.time.events.loop(2000, this.add_row_of_pipes, this);

		var style = { font: "bold 25px Comic Sans MS", fill: "#fff", tabs: 132 };

		this.timer = 0;
		// Detecion barra espacio 
		spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
		// Declaracion de texto
		timertext = this.add.text(185, 10, "Time: "+this.timer,style );
		scoretext = this.add.text(290, 10, "Puntuació: ",style );
		this.label_score = this.add.text(415, 10, "0", style);
		this.label_scoretop = localStorage.getItem("mejor")==null?0:localStorage.getItem("mejor");
		// Incremento de los segundos al lado del contador score
		this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

	},

	update: function() {
		// Si el jugador cae por debajo del mundo , se ejecuto sonido y funcion que llama al GameOver
		if (player.inWorld === false) {

			muerte.play();

            this.restart_game(); 
        }
       
        if (player.angle < 20) {
            player.angle += 0.5;
        }
        // Si jugador colisiona con un elemento del grupo, se ejecuto animacion, muere el jugador y se resetea el juego
        if(this.physics.arcade.collide(player, this.enemigos)){
        	this.explosion = this.add.sprite(player.body.x,player.body.y,'explosion');
        	this.explosion.animations.add('left',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],10,true);
			this.explosion.animations.play('left');
			player.kill();
			muerte.play();
			this.time.events.add(Phaser.Timer.SECOND * 2.3, this.restart_game, this);
        }
        // Verificacion que el jugador pasa por encima del espacio de puntuación, y ejecuto la funcion de sumar un punto al marcador
        if (this.checkOverlap(player, gasp)) {
            if (trueScore === 1) {
            	this.Puntuacion();
            }
        }
        
        if (player.x < 60) {
            player.x = 60;
        }
        // Si la barra del teclado se presiona , el juego entra en pausa
        if(spaceKey.isDown) {
        	this.Pausa();
        }
	},
	// Incremento del Timer de Juego(No aparicion del grupo de asteroides)
	updateCounter: function() { 
		this.timer ++;
		timertext.setText("Time: "+this.timer);
	},
	// Reproduccion del sonido al saltar
	reproducir : function() {
		saltoSound.play();
	},
	// Funcions para parar el juego
	Pausa: function() {
		this.game.paused = true;
		var pausedText = this.add.button(400, 200,'pausa');
		pausedText.anchor.set(0.5);
		this.input.onDown.add(function(){
			pausedText.destroy();
			this.game.paused = false;
		}, this);
	},

	jump: function() {

		if(player.alive === false) {

			return;
		}

		player.body.velocity.setTo(0, -320);
		this.add.tween(player).to({angle: -20}, 250).start();

	},
	// Se borra la insercion de enemigos, llamada estado Game over
	restart_game: function() {

		this.time.events.remove(this.timer1);
		this.state.start('Game_Over');
	},
	// Creacion del enemigo en coordenadas junto espacio de puntuacion
	add_row_of_pipes: function() {
		var hole = Math.floor(Math.random()*5)+1;

		for (var i = 0; i < 8; i++) {
			if (i != hole && i != hole +1) {
				this.Añadir_enemigo(320, i*60+5);
			}
			}
			for(var t = 0; t < 1; t++) {
				this.addTransparent(320, hole * 60 + 30);
			}
	},
	// Declaracion del enemigo junto a su secuencia de animacion
	Añadir_enemigo: function(x, y) {
		asteroide = this.enemigos.getFirstDead();
		asteroide.reset(x, y);
		this.physics.enable(asteroide, Phaser.Physics.ARCADE);
		asteroide.scale.setTo(0.8, 0.8);
		asteroide.body.velocity.setTo(-220, 0);
        asteroide.body.bounce.set(0);
        asteroide.checkWorldBounds = true;
        asteroide.outOfBoundsKill = true;
        // Declaracion de los frames y el lado hacia donde rotaran
        asteroide.animations.add('left',[31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],10,true);
		asteroide.animations.play('left');

        trueScore = 1;
	},
	// Declaracion espacio para puntuar junto a sus atributos
	addTransparent: function(x, y) {
        gasp = this.add.sprite(x, y, 'gasp');
        gasp.alpha = 0;
        gasp.scale.setTo(0.8, 0.8);
        this.physics.enable(gasp, Phaser.Physics.ARCADE);
        gasp.body.velocity.setTo(-220, 0);
        gasp.enableBody = false;
        gasp.checkWorldBounds = true;
        gasp.outOfBoundsKill = true;
    },
    // Cada vez que jugador passa por encima del hueco llamada a esta funcion para incrementar el score
    Puntuacion: function() {
    	gasp.destroy();
        score = score + 1; 
        this.label_score.text = score;
        trueScore = 0;
    },
    // Verificacion
    checkOverlap: function(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};