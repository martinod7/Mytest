
	var game = new Phaser.Game(1600, 800, Phaser.CANVAS, 'contenedor', { preload: preload, create: create, update:update, render: render});
  var randomCloud = Math.floor(Math.random()*150);
	
  function preload(){

    game.load.image('ground_3x1', 'IMG/ground_3x1.png');
    game.load.spritesheet('cloud', 'IMG/cloud.png');
    game.load.spritesheet('snowflakes', 'IMG/snowflakes.png', 17,17);
    game.load.spritesheet('snowflakes_large','IMG/snowflakes_large.png', 64, 64);
    game.load.audio('Jingle', 'SOUNDS/JingleBellRock.mp3');
    game.load.spritesheet('kaboom', 'IMG/explode.png', 128, 128);
    game.load.image('star', 'IMG/star2.png');

  }
 ///////////////////////////////////
  var obstaculo;                  //
  var obstaculo1;                 //
  var obstaculo1_2;               //
  var obstaculo2;                 //
  var arbol;                      //
  var map;                        //
 ///////////////////////////////////
  var cloud;                      //
  var cont = 0;                   //
  var posicionCloud = 100;        //
  var jumpTimer = 0;              //
  var jumpButton;                 //
  var max = 0;                    //
  var front_emitter;              //
  var mid_emitter;                //
  var back_emitter;               //
  var update_interval = 4 * 60;   //
  var i = 0;                      //
  var music;                      //
  var explosions;                 //
////////////////////////////////////
  var player;                     //
  var cursors;                    //
  var platforms;                  //
////////////////////////////////////
  var stars;                      //
  var score = 0;                  //
  var scoreText;                  //
////////////////////////////////////
 var tub1 = [
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '..9BBABBBBBBBABBAAAAABABABB9..',
    '..9BBABBBBBBBABBAAAABABABBB9..',
    '999999999999999999999999999999',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9BBBABBBBBBBBBABBAAABABABABAB9',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9AAAABBBBBBBBBAAAAAAAAAAAAAAA9',
    '9BBBBBBBBBBBBBBBBBBBBBBBBBBBB9',
    '999999999999999999999999999999',
    ];

	function create(){

    game.create.texture('tubo1', tub1, 4, 4, 0);

    // Habilita la fisica ARCADE
	  game.physics.startSystem(Phaser.Physics.ARCADE);

    // Habilita la fisica P2JS
    game.physics.startSystem(Phaser.Physics.P2JS);

    game.stage.backgroundColor = '#01A9DB';
    game.input.touchpreventDefault = false;

    // La plataforma contiene 1 tubo
    platforms = game.add.group();

    // Habilita la fisica en cualquier objeto que se cree en el grupo
    platforms.enableBody = true;

    // Se crean los tubos
    var grounnd = platforms.create(0, game.world.height - 64, 'tub1');

    //
    ground.scale.setTo(2, 2);

    //
    ground.body.immovable = true;

    //
    var ledge = platforms.create(400, 400, 'tub1');
    ledge.body.immovable = true;

    music = game.add.audio('Jingle');
    music.onDecoded.add(start, this);

    map = game.add.sprite(0, 770, 'ground_3x1',100);

    var randomCloudHorin = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900,5000];
    var randomCloudVerti = [20,40,60,80,100,120,140,160,180,200,220,240,260,280,300];

      for(var i = 0; i < 20; i++){

        var randCloudHorizontal = randomCloudHorin[Math.floor(Math.random() * randomCloudHorin.length)];
        var randCloudVertical = randomCloudVerti[Math.floor(Math.random() * randomCloudVerti.length)];
        cloud = game.add.sprite(randCloudHorizontal, randCloudVertical, 'cloud',100);

      }
   
		var cat = [
      '....443...443.',
      '...4433..4433.',
      '..44333.48333.',
      '88888888244444',
      '44444444433333',
      '44444444433333',
      '44044404433333',
      '44488844433333',
      '44400044433333',
      '44F202F4433333',
      '44202024433333',
      '44F222F4433333',
      '44444444433333',
      '4433...4433.33',
      '4433...4433.33'
    ];

    var tub = [
    '999999999999999999999999999999',
    '9BBBBBBBBBBBBBBBBBBBBBBBBBBBB9',
    '9BBBBBBBBBBBBBBBBBBBBBBBBBBBB9',
    '9AAAABBBBBBBBBAAAAAAAAAAAAAAA9',
    '9BBBABBBBBBBBBABBAAABABABABAB9',
    '9BBBABBBBBBBBBABBAAAABABABABA9',
    '9BBBABBBBBBBBBABBAAABABABABAB9',
    '999999999999999999999999999999',
    '..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',
   	'..9BBABBBBBBBABBAAAAABABABB9..',
   	'..9BBABBBBBBBABBAAAABABABBB9..',

    ];

    // 0 = negro,1 = gris,2 = blanco, 3 = rojo, 4 = rosa, 5 = marron fuerte, 6 = marron flojo, 7 = naranja, 8 = amarilla flojo, 9 = azul fuerte, A = verde fuerte, B = verde flojo, C = azul fuerte , D = azul medio fuerte, K = azul flojo, f = azul celeste
    var arbol = [
    '..............0................',
    '.............0B0...............',
    '............0BBB0..............',
    '............66BB0..............',
    '...........6886BB0.............',
    '...........6886BB0.............',
    '..........0B66BBBB0............',
    '..........0BBBBBBB0............',
    '.........022B22B2220...........',
    '.........02222222220...........',
    '..........00200200CCC..........',
    '..........0B0BB0BCDDDC.........',
    '.........0BBBBBBCDFFFDC........',
    '........0BBBBBBBCDF2FDC........',
    '........0BBBBBBBCDFFFDC........',
    '.......0BBBBBBBBBCDDDC.........',
    '.......02BBB22BBBBCCC0.........',
    '......0222B2222B2222220........',
    '.....333322200222002020........',
    '....34444320AA020AA0A0.........',
    '....3422430AAAA0AAAAA0.........',
    '....342243AABBAAABBBAA0........',
    '....344443ABBBBBBBBBBAA0.......',
    '.....3333BABBBBBBBBBBA666......',
    '....0AAABBBCCCBBBBBBB68886.....',
    '....0AAABBCDDDCBBBBBB68886.....',
    '...0AAABBBCDFDCBBBBBB68886.....',
    '...0A1ABB2CDDDC2B2BBB26660.....',
    '..0A112B222CCC22222B22211A0....',
    '..0111222222222222222222110....',
    '.011102220022200202220201110...',
    '.0110A020AA020AA0A020A0A0110...',
    '..00AAA0AAAA0AAAAAA0AAAAA00....',
    '...0AAAABBBAAABBABAAABABA0.....',
    '..666AABBBBBBBBBBBBBBBBBAA0....',
    '.68886BBBBBBBBBBBBBBBBBBBAA0...',
    '6888886BBBBBBBBBBBBBBBBBBACC...',
    '6888886BBBBBBBBBBBBBBBBBBCF2C..',
    '6888886BBBBBBB3333BBBBBBBCFFC..',
    '.68886BBBBBBB344443BBBBBBBCCA0.',
    '..666.......34444443BBBBBBBAA0.',
    '............34422443........AA0',
    '............34422443........AA0',
    '............34444443........AA.0.',
      '    .........344443............0...',
      '  . ...........3333............0..'
    ];
    
    //game.create.texture('arbol', arbol, 6, 6, 0);
    //game.create.texture('tubo', tub, 4, 4, 0);

    game.create.texture('cat', cat, 4, 4, 0);

    arbol = game.add.sprite(1200, 300, 'arbol');
    arbol.anchor.set(0.5);

    obstaculo = game.add.sprite(800, 645, 'tubo');
    obstaculo.anchor.set(0.5);

    obstaculo1 = game.add.sprite(800, 200, 'tubo1');
    obstaculo1.anchor.set(0.5);

    player = game.add.sprite(300, 300, 'cat');
    player.anchor.set(0.5);
    
    game.physics.arcade.enable([player, map, cloud,obstaculo,obstaculo1]);
    game.physics.p2.enable(player);
    game.camera.follow(player);
    game.physics.arcade.collide(star,obstaculo1);
    game.world.setBounds(0, 0, 5000, 800);
    
    game.physics.arcade.gravity.y = 1;
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(map);
    game.physics.arcade.enable(obstaculo);
    game.physics.arcade.enable(obstaculo1);
    game.physics.arcade.enable(arbol);

    player.body.bounce.y = 0.25;
    player.body.collideWorldBounds = true;
    player.enableBody = true;

    map.body.allowGravity = false;
    map.body.immovable = true;
    map.enableBody = true;

    cloud.body.allowGravity = false;
    cloud.body.immovable = true;

    obstaculo.body.allowGravity = false;
    obstaculo.body.immovable = true;
    obstaculo.enableBody = true;

    obstaculo1.body.allowGravity = false;
    obstaculo1.body.immovable = true;
    obstaculo1.enableBody = true;
    cloud.body.immovable = true;

    arbol.body.allowGravity = false;
    arbol.body.immovable = true;
    arbol.enableBody = true;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    
    back_emitter = game.add.emitter(game.world.centerX, -32, 600);
    back_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    back_emitter.maxParticleScale = 0.6;
    back_emitter.minParticleScale = 0.2;
    back_emitter.setYSpeed(20, 100);
    back_emitter.gravity = 1;
    back_emitter.width = game.world.width * 1.5;
    back_emitter.minRotation = 0;
    back_emitter.maxRotation = 40;

    mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
    mid_emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    mid_emitter.maxParticleScale = 1.2;
    mid_emitter.minParticleScale = 0.8;
    mid_emitter.setYSpeed(50, 150);
    mid_emitter.gravity = 1;
    mid_emitter.width = game.world.width * 1.5;
    mid_emitter.minRotation = 0;
    mid_emitter.maxRotation = 40;

    front_emitter = game.add.emitter(game.world.centerX, -32, 50);
    front_emitter.makeParticles('snowflakes_large', [0, 1, 2, 3, 4, 5]);
    front_emitter.maxParticleScale = 1;
    front_emitter.minParticleScale = 0.5;
    front_emitter.setYSpeed(100, 200);
    front_emitter.gravity = 1;
    front_emitter.width = game.world.width * 1.5;
    front_emitter.minRotation = 0;
    front_emitter.maxRotation = 40;

    changeWindDirection();

    back_emitter.start(false, 14000, 20);
    mid_emitter.start(false, 12000, 40);
    front_emitter.start(false, 6000, 1000);

    stars = game.add.group();
    stars.enableBody = true;

    for (var i = 0; i < 12; i++)

    {
      
      var  star = stars.create(i * 70, 0, 'star');

      star.body.gravity.y = 300;

      star.body.bounce.y = 0.7 + Math.random() * 0.2;

    }

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
	}

  function start(){

    music.fadeIn(4000);
  }

  /*function toggleBody(){

    if(map.body.enable)
    {
      map.body.enable = false;
    }
    else
    {
      map.body.enable = true;
    }
    /////////////////////////////
    if(obstaculo.body.enable)
    {
      obstaculo.body.enable = false;
    }
    else
    {
      obstaculo.body.enable = true;
    }
  }*/

	function update() {

    game.physics.arcade.collide(player, platforms)
    game.physics.arcade.collide(player, obstaculo);
    game.physics.arcade.collide(player, map);
    game.physics.arcade.collide(player, obstaculo1);
    game.physics.arcade.collide(player, obstaculo2);
    game.physics.arcade.collide(player, arbol);
    game.physics.arcade.collide(player, obstaculo1_2);
    game.physics.arcade.collide(stars, obstaculo1_2);
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
		
	  player.body.velocity.x = 100;
    player.body.velocity.y = 100;// caida jugador

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -200;
        player.scale.x = 1;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 200;
        player.scale.x = -1;
    }

   /* if (cursors.up.isDown)
    {
        player.body.velocity.y = -400;
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 200;
    }*/

    if(jumpButton.isDown){

      player.body.velocity.y = -500;

    }

    i++;

    if (i === update_interval)
    {
        changeWindDirection();
        update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
        i = 0;
    }
  
	}

  function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}

  function changeWindDirection() {

    var multi = Math.floor((max + 200) / 4),
        frag = (Math.floor(Math.random() * 100) - multi);
        max = max + frag;

    if (max > 200) max = 150;
    if (max < -200) max = -150;

    setXSpeed(back_emitter, max);
    setXSpeed(mid_emitter, max);
    setXSpeed(front_emitter, max);

}

function setXSpeed(emitter, max) {

    emitter.setXSpeed(max - 20, max);
    emitter.forEachAlive(setParticleXSpeed, this, max);

}

function setParticleXSpeed(particle, max) {

    particle.body.velocity.y = 100;

}

	function render(){

		game.debug.text('DEVELOPED BY MR MARTIN', 350, 90);

  }