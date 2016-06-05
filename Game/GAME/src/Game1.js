Runjump.Game1 = function(game) {
	this._player = null;
	this._startGroup = null;
	this._spawnStarTimer = 0;
	this._fontStyle = null;
	this._pause_label = null;
	Runjump._scoreText = null;
	Runjump._score = 0;

};

Runjump.Game1.prototype = {
	create: function() {
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 1200;

		this.add.sprite(0, 0, 'background');
		this.add.sprite(10, 5, 'score-bg');
		this._pause_label = this.add.text(Runjump.GAME_WIDTH-96-10, 5, this.managePause, this);

		this._player = this.add.sprite(0, 0, 'cat');
		this._spawnStarTimer = 0;

		this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
		Runjump._scoreText = this.add.text(120, 20, "0", this._fontStyle);

		this._startGroup = this.add.group();
		Runjump.item.spawnStarts(this);
	},
	managePause: function() {
		this.game.paused = true;
		var pausedText = this.add.text(100, 250, "Game paused. \nTap anywhere to continue.", this._fontStyle);
		this.input.onDown.add(function(){
			pausedText.destroy();
			this.game.paused = false;
		}, this);
	},
	update: function() {
		this._spawnStarTimer += this.time.elapsed;
		if(this._spawnStarTimer > 1000) {
			this._spawnStarTimer = 0;
			Runjump.item.spawnStarts(this);
		}
		this._startGroup.foreach(function(star){
			star.angle += star.rotateMe;
		});
	}
};

Runjump.item = {
	spawnStarts: function(game) {
		var dropPos = Math.floor(Math.random()*Runjump.GAME_WIDTH);
		var dropOffset = [-27,-36,-36,-38,-48];
		var starType = Math.floor(Math.random()*5);
		var star = game.add.sprite(dropPos, dropOffset[starType], 'star');

		game.physics.enable(star, Phaser.Physics.ARCADE);
		star.inputEnabled = true;
		star.events.onInputDown.add(this.clickStar, this);

		star.checkWorldBounds = true;
		star.events.onOutOfBounds.add(this.removeStar, this);
		star.anchor.setTo(0.5, 0.5);
		star.rotateMe = (Math.random()*4)-2;
		game._startGroup.add(star);

	},
	clickStar: function(star) {
		star.kill();
		Runjump._score += 1;
		Runjump._scoreText.setText(RunJump._score);
	},
	removeStar: function(star) {
		star.kill();
		RunJump._health -= 10;
	},

};