var corgi= (function(){
	var game = new Phaser.Game(1280, 150, Phaser.AUTO, null, 'gameDiv');
	game.state.add('boot', bootState);
	game.state.add('load', loadState);
	game.state.add('play', playState);
	game.state.start('boot');

	var bootState = {
		create: function() {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.state.start('load');
		}
	}

	var loadState={
		preload: function() {
			loadCorg();
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.PageAlignHorizontally = true;
			game.scale.PageAlignVertically = true;
			game.stage.backgroundColor = '#000000';
		},
		create: function(){
			game.state.start('play');
		}
	}

	function loadCorg() {
		game.load.image('floor','assets/platform.png')
		game.load.image('edge','assets/edge.png')
		game.load.spritesheet('corgiChar','assets/corgi1.png', 172, 150);
	}

	var platforms, corgi, edges;
	var playState ={
		create: function(){
			platforms = game.add.group();
			platforms.enableBody=true;
			ground = platforms.create(0, game.world.height-10, 'floor');
			ground.body.imovable = true;
			edges = game.add.group();
			edges.enableBody=true;
			edgeL = edges.create(0, game.world.height-10, 'edge');
			edgeR = edges.create(1280, game.world.height-10, 'edge');
			corgi = game.add.sprite(100, game.world.height-1, 'corgiChar');
			corgi.anchor.setTo(0.5,0.5);
			corgi.enableBody = true;
			game.physics.arcade.enable(corgi);
			corgi.collideWorldBounds = true;
			corgi.body.gravity.y=300;
			corgi.body.velocity.x=150;
			corgi.animations.add('left', [5,4,5,6], 10, true);
			corgi.animations.add('right', [10,9,10,11], 10, true);
		},
		update: function(){
			game.physics.arcade.collide(corgi, platforms);
			game.physics.arcade.collide(corgi, edges, reverse, null, this);
		}
	}

	function reverse() {
		if (corgi.body.velocity.x > 0) {
			corgi.body.velocity.x = -150;
			corgi.animations.play('left');
		} else if (corgi.body.velocity.x < 0) {
			corgi.body.velocity.x = 150;
			corgi.animations.play('right');
		}
	}
})()