Runjump.Game = function(game) {
	var score = -1;

	var player;
	var pipe;
	var gasp;

	var pauseButton;
	var timertext;
	var scoretext;
	var trueScore = 1;
	var bestScore = 0;
	var topScore;

};
Runjump.Game.prototype = {

	preload: function() {

		
	},
 
	create: function() {

		this.add.sprite(0, 0, 'background3');
		// Creación del sprite "jugador" en las coordenadas especificadas, previamente cargada la imagen de este 
		player = this.add.sprite(60, 250, 'cat');
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

		scoretext = this.add.text(380, 10, "-",style);

		this.input.onDown.add(this.jump, this);

		this.pipes = this.add.group();

		this.pipes.createMultiple(11, 'pipe');

		this.timer1 = this.time.events.loop(1700, this.add_row_of_pipes, this);

		var style = { font: "25px Courier", fill: "#fff", tabs: 132 };

		this.label_score = this.add.text(475, 10, "0", style);

		this.timer = 0;

		pauseButton = this.add.button(780,5, 'button-pause', this.managePause, this);
		pauseButton.anchor.set(1,0);
		pauseButton.input.useHandCursor = true;

		timertext = this.add.text(270, 10, "Time: "+this.timer,style );
		scoretext = this.add.text(390, 10, "Score: ",style );

		this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	},

	update: function() {

		if (player.inWorld === false) {

			$(document).ready(function() {
				var cont = 0;

				$("#LeaderBoard").append("<h2>Partida : "+score+"</h2>");			
			});
            this.restart_game(); 
        }
       
        if (player.angle < 20) {
            player.angle += 0.5;
        }
        
        if (player.alive === true) {
        	this.physics.arcade.collide(player, this.pipes, this.hit_pipe, null, this);
        }

        if (this.checkOverlap(player, gasp)) {
            if (trueScore === 1) {
            	this.addScore();
            }
        }
        
        if (player.x < 60) {
            player.x = 60;
        }
	},

	updateCounter: function() {
		this.timer ++;
		timertext.setText("Time: "+this.timer);
	},


	managePause: function() {
		this.game.paused = true;
		var pausedText = this.add.text(300, 380, "Game paused, \ntap anywhere to continue.", this.fontMessage);
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

	hit_pipe: function() {

		if (player.alive === false) {
            return;
        }

        pipe.body.moves = false;
        gasp.body.moves = false;

        player.alive = false;

        this.time.events.remove(this.timer1);
     
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
            p.body.velocity.y = 0;
        }, this);
	},

	restart_game: function() {
		this.time.events.remove(this.timer1);
		this.state.start('Game_Over');
	},

	add_row_of_pipes: function() {
		var hole = Math.floor(Math.random()*5)+1;

		for (var i = 0; i < 8; i++) {
			if (i != hole && i != hole +1) {
				this.add_one_pipe(320, i*60+5);
			}
			}
			for(var t = 0; t < 1; t++) {
				this.addTransparent(320, hole * 60 + 30);
			}
	},

	add_one_pipe: function(x, y) {
		pipe = this.pipes.getFirstDead();
		pipe.reset(x, y);
		this.physics.enable(pipe, Phaser.Physics.ARCADE);
		pipe.scale.setTo(0.8, 0.8);
		pipe.body.velocity.setTo(-220, 0);
        pipe.body.bounce.set(0);
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;

        trueScore = 1;
        
	},
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
    addScore: function() {
    	gasp.destroy();
        score = score + 1; 
        this.label_score.text = score;
        trueScore = 0;
    },
    checkOverlap: function(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};