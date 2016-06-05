window.onload = function(){

var game = new Phaser.Game(1600, 800, Phaser.CANVAS, 'contenedor', { preload: preload, create: create, update:update });

  function preload(){

    game.load.image('sky', 'IMG/sky.png');
    game.load.image('ground', 'IMG/platform.png');
    game.load.spritesheet('ex', 'IMG/explode.png');

  }

////////////////////////////////////
  var obstaculo;                  //
  var obstaculo1;                 //
  var obstaculo1_2;               //
  var obstaculo2;                 //
  var arbol;                      //
  var map;                        //
////////////////////////////////////
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
  var explosions                  //                
////////////////////////////////////
  var player;                     //
  var cursors;                    //
  var platformsArriba;            //
  var platformsDebajo;            //
  var nubes;                      //
////////////////////////////////////
  var stars;                      //
  var score = 0;                  //
  var scoreText;                  //
  var numeroScore;                //
  var numeroTimerCont = 0;
  var numeroTimer = 0;
  var scoreText2;                 //
  var contador = 0;               //
  var timer;                      //
  var ayuda;                      //
////////////////////////////////////

function create() {

 

  var style = { font: "20px Courier", fill: "#fff", tabs: 132 };

  scoreText = game.add.text(100, 64, "Score\t Time\tPlayer 1", style);
  ayuda = game.add.text(100, 64, "Cliqui la tecla ESPAI per saltar ", style);
  numeroScore = game.add.text(90, 904,"0", { font: "20px Courier", fill: "#fff", align: "center" });
  numeroTimer = game.add.text(100, 64,"0", { font: "20px Courier", fill: "#fff", align: "center" });
  
  timer = game.time.create(false);
  timer.loop(1000, updateCounter, this);

  timer.start();

  var cat = [
   '.344...433....',
    '.3344..3344...',
    '.33384.33344..',
    '44444288888888',
    '33333444444444',
    '33333444444444',
    '33333440444044',
    '33333444888444',
    '33333444000444',
    '3333344F222F44',
    '33333442020244',
    '3333344F222F44',
    '33333444444444',
    '33.3344...3344',
    '33.3344...3344'
    
    ];

    var catMin = [

    '.344...433....',
    '.3344..3344...',
    '.33384.33344..',
    '44444288888888',
    '33333444444444',
    '33333444444444',
    '33333440444044',
    '33333444888444',
    '33333444000444',
    '3333344F222F44',
    '33333442020244',
    '3333344F222F44',
    '33333444444444',
    '33.3344...3344',
    '33.3344...3344'
    

    ];

   /*

    '....443...443.',//
    '...4433..4433.',//
    '..44333.48333.',//
    '88888888244444',//
    '44444444433333',//
    '44444444433333',//
    '44044404433333',//
    '44488844433333',//
    '44400044433333',//
    '44F222F4433333',//
    '44202024433333',//
    '44F222F4433333',//
    '44444444433333',//
    '4433...4433.33',
    '4433...4433.33' */

    var tub = [
    '..EEEEEBBBBBBABBAAAAABAEEEEE..',// 4 //
    '..EEEABBBBBBBABBAAAABABEEEEE..',// 5 //
    '..EEEABBBBBBBABBAAAAABABAEEE..',// 6 //
    '..9BBABBBBBBBABBAAAABABABEEE..',// 7 //
    '..9BBABBBBBBBABBAAAAABABABBE..',// 8 //
    '..9BBABBBBBBBABBAAAABABABBBE..',// 9 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 10 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 11 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 12 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 13 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 14 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 15 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 16 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 17 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 18 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 19 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 20 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 21 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 22 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 23 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 24 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 25 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 26 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 27 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 28 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 29 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 30 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 31 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 32 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 33 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 34 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 35 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 36 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 37 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 38 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 39 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 40 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 41 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 43 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 44 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 45 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 46 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 47 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 48 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 49 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 50 //
    '999999999999999999999999999999',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9BBBABBBBBBBBBABBAAABABABABAB9',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9AAAABBBBBBBBBAAAAAAAAAAAAAAA9',
    '9BBBBBBBBBBBBBBBBBBBBBBBBBBBB9',
    '999999999999999999999999999999',
    ];

      var tub1 = [
    '999999999999999999999999999999',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9BBBABBBBBBBBBABBAAABABABABAB9',
    '9BBBABBBBBBBBBABBAAAABABABABB9',
    '9AAAABBBBBBBBBAAAAAAAAAAAAAAA9',
    '9BBBBBBBBBBBBBBBBBBBBBBBBBBBB9',
    '999999999999999999999999999999',
    '..9BBABBBBBBBABBAAAABABABBB9..',// 1 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 2 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 3 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 4 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 5 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 6 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 7 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 8 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 9 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 10 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 11 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 12 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 13 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 14 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 15 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 16 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 17 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 18 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 19 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 20 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 21 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 22 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 23 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 24 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 25 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 26 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 27 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 28 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 29 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 30 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 31 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 32 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 33 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 34 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 35 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 36 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 37 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 38 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 39 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 40 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 41 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 42 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 43 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 44 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 45 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 46 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 47 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 48 //
    '..9BBABBBBBBBABBAAAAABABABB9..',// 49 //
    '..9BBABBBBBBBABBAAAABABABBB9..',// 50 //
    ];

    var nube = [
      '...0000000000...',
      '..022222211110..',
      '.02222222221110.',
      '.02222222222110.',
      '.02222222222110.',
      '0222220220222110',
      '0222220220222110',
      '0222220220222110',
      '0222222222222110',
      '0222222222222110',
      '0122202222022110',
      '.02222000022110.',
      '.01222211222110.',
      '.01111111111110.',
      '..011110011110..',
      '...0000..0000...',
    ];
  
  // Habilita la fisica ARCADE
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.physics.startSystem(Phaser.Physics.P2JS);

  game.stage.backgroundColor = '#01A9DB';

  game.create.texture('cat', cat, 4, 4, 0);
  game.create.texture('catMin', cat, 2, 2, 0);
  game.create.texture('tub', tub, 5, 6, 0);
  game.create.texture('tub1', tub1, 5, 6, 0);
  game.create.texture('nube', nube, 9, 7, 0);

  platformsArriba = game.add.group();
  platformsDebajo = game.add.group();
  nubes = game.add.group();

  platformsArriba.enableBody = true;
  platformsDebajo.enableBody = true;
  nubes.enableBody = true;

  var ancho = [500, 900, 1300, 1700, 2100, 2500, 2900, 3300, 3700];
  var alturarriba = [0, 15, 30, 45, 60, 75];
  var alturadebajo = [545, 530, 515, 500, 485, 470, 455];

  var lancho = ancho.length;

  for(var i = 0; i < lancho; i++){

  var randomheight = Math.floor(Math.random() * alturarriba.length);
  var randomheightbajo = Math.floor(Math.random() * alturadebajo.length);

  var numerorandomheight = alturarriba[randomheight];
  var numerorandomheight1 = alturadebajo[randomheightbajo];

  var randomwidth = Math.floor(Math.random() * ancho.length);
  var numerorandomwidth = ancho[i]; // se comparte

  

  var ground = platformsArriba.create(numerorandomwidth,numerorandomheight, 'tub');
  var ground1 = platformsDebajo.create(numerorandomwidth,numerorandomheight1, 'tub1');

  var ground2 = nubes.create(numerorandomwidth,numerorandomheight, 'nube');
  
  ground.body.immovable = true;
  ground1.body.immovable = true;
  ground2.body.immovable = true;


  }

  player = game.add.sprite(200, 400, 'cat');
  player.anchor.set(0.5);

  game.physics.arcade.enable(player);
  game.physics.p2.enable(player);
  game.camera.follow(player);
  game.world.setBounds(0, 0, 4000, 800);

  scoreText.fixedToCamera = true;
  scoreText.cameraOffset.setTo(10,700);

  numeroScore.anchor.setTo(0.5, 0.5);
  numeroScore.fixedToCamera = true;
  numeroScore.cameraOffset.setTo(40,750);

  numeroTimer.anchor.setTo(0.5, 0.5);
  numeroTimer.fixedToCamera = true;
  numeroTimer.cameraOffset.setTo(175,750);

  catMin = game.add.sprite(400, 400, 'catMin');
  catMin.fixedToCamera = true;
  catMin.cameraOffset.setTo(300,730);

  ayuda.fixedToCamera = true;
  ayuda.cameraOffset.setTo(600,750);

  player.body.bounce.y = 0.2;
  player.body.gravity.y = 2000;
  player.body.collideWorldBounds = true;


  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


}

function updateCounter() {

  numeroTimerCont++;
}

function update() {

  game.physics.arcade.collide(player, platformsArriba);
  game.physics.arcade.collide(player, platformsDebajo);

  player.body.velocity.x = 400;
  player.body.velocity.y = 250;// caida jugador



  /*if (cursors.left.isDown)
  {
   
    player.body.velocity.x = -200;
    player.scale.x = 1;
    
  }
  else if (cursors.right.isDown)
  {
   
    player.body.velocity.x = 200;
    player.scale.x = -1;

  }*/
  if(jumpButton.isDown){

    player.body.velocity.y = -500;

    }
    if(jumpButton.isDown){
    contador++;

    numeroScore.setText(contador);
  }

    numeroTimer.setText(numeroTimerCont + " seg ");

}

	
};