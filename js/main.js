var navBar = (function(){
	var $navB = $('#navBar1');
	var $ul = $navB.find('ul');
	var $navTabs = $navB.find('.option');
	var $activeTab = $navB.find('.active');
	var $body = $('#pageBody');
	var $activeDiv = $body.find('.activeD');

	$navTabs.on('click', swapNavTab);

	render();
	hideMenu();

	function render() {
		$activeTab = $navB.find('.active');
		$activeDiv = $body.find('.activeD')
	}

	function swapNavTab() {
		console.log($navTabs)
		$activeTab.removeClass('active');
		var $valInfo = $(this).attr('value');
		$(this).addClass('active');
		swapBody($activeDiv, $body, $valInfo);
		render();
	}

	function swapBody($active, $area, val) {
		var $target = $area.find(val);
		$active.toggleClass('activeD nonActive');
		$target.toggleClass('nonActive activeD');
	}

	function hideMenu(){
		$(document).click(function (e) {
    		e.stopPropagation();
    		var container = $("#navBar1");

    		//check if the clicked area is dropDown or not
    		if (container.has(e.target).length === 0 && $('#collapsedNav').attr('aria-expanded') === 'true') {
        		$('#navBtn1').click();
        	}
		})
	}
})()

var moreAboutMe= (function(){
	var $mDiv = $('#moreAboutMeDiv');
	var $buttons = $mDiv.find('li');
	var $activeB = $mDiv.find('.active');
	var $activeP = $mDiv.find('.activeP');

	$buttons.on('click', swapSection);
	render();

	function render() {
		$activeB = $mDiv.find('.active');
		$activeP = $mDiv.find('.activeP');
	}

	function swapSection() {
		$activeB.removeClass('active');
		var $href = $(this).attr('value');
		$(this).addClass('active');
		swapBody($activeP, $mDiv, $href);
		render();
	}

	function swapBody($active, $area, val) {
		var $target = $area.find(val);
		$active.toggleClass('activeP nonActive');
		$target.toggleClass('nonActive activeP');
	}
})()

var books=(function() {
	var $bDiv = $('#bookDiv');
	var $books = $bDiv.find('.bookPic');

	$books.hover(showActiveBook, deactivateBook);

	function showActiveBook() {
		$(this).addClass('blueB');
	}

	function deactivateBook() {
		$(this).removeClass('blueB');
	}
})()

var contactMe= (function(){
	var $body = $('#pageBody');
	var $modalBtn = $('#modalBtn');
	var $messageDiv = $('#messageModal');
	var $cDiv = $('#contactDiv');
	var $modal = $cDiv.find(".modal");
	var $closeX = $body.find('.close');
	var $message = $cDiv.find('#messageBtn');


	$modalBtn.on('click', openModal);
	$closeX.on('click', closeModal);
	$message.on('click', messageGo);

	function openModal() {
		$cDiv.addClass('show');
	}
	function closeModal() {
		$current= $(event.target).closest('.modal')
		$current.removeClass('show');
	}
	function messageGo() {
		closeModal();
		$messageDiv.addClass('show');
	}

})()

var formSubmit=(function() {
	var $form = $('#contactForm');
	var $name = $form.find('#fullName').val();
	var $company = $form.find('#company').val();
	var $phone = $form.find('#phone').val();
	var $email = $form.find('#email').val();
	var $comment = $form.find('#comment').val();
	var $submitBtn = $form.find('#submitBtn').val();
})()

var history= (function() {
	var $hDiv = $('#experienceDiv');
	var $tBox = $hDiv.find('.history');
	var $activeTBox = $hDiv.find('.active');

	$tBox.on("click", pressed);


	function render() {
		$activeTBox = $hDiv.find('.active');
	}

	function pressed() {
		$activeTBox.removeClass('active');
		var $current = $(event.target).closest('.btn');
		$current.addClass('active');
		enlarge($current);
		render();
	}

	function enlarge($box) {
		var $textCode = $box.val();
		$('#hText'+$textCode).toggleClass('hidden');
		$($box).toggleClass('col-md-8');
		$($box).toggleClass('col-md-push-2');
	}
})()

var mouseAnimation=(function(){
	var $corgi = $('#corgF2');
	var defCorg = "url('../images/corgi1.png') ";
	var down = " 0"
	var left = " -150px";
	var right = " -300px"
	var up = " -450px"
	var i = -172;
	var mouseX = 0, mouseY = 0;
	$(document).mousemove(function(e){ 
		mouseX = e.pageX;
		mouseY = e.pageY;
		
	});
	var $follower = $('#follower');
	var xp = 0, yp = 0;
	var loop = setInterval(followCorg, 30);
	var loop2 = setInterval(swapSpriteTile(left), 100);
	function followCorg() {
		xp += (mouseX - xp) / 12;
		yp += (mouseY - yp) / 12;
		$follower.css({left:xp, top:yp});
		//if(mouseX > mouseY)
	}
	function tryhard() {
		$corgi.css('background', defCorg+(i)+'px'+left);
		
		//$corgi.css('background', 'url("../images/corgi1.png") 0 -150px');
		//$corgi.css('background', 'url("../images/corgi1.png") -172px -150px');

	}

	function trygood() {
		$corgi.css('background', defCorg+(i*2)+'px'+left);
	}

	function swapSpriteTile(dir) {
		if (dir === "left") {
			//play animation L1-L3
			$corgi.css('background', defCorg+(i)+'px'+left);
			$corgi.css('background', defCorg+(i*2)+'px'+left);
			$corgi.css('background', defCorg+(i)+'px'+left);
		} else if (dir === "right") {
			//play animation r1-r3
		} else if (dir === "up") {
			//play animation u1-u3
		} else if (dir === "down") {
			//play animation d1-d3
		} else {
			//lay down animation
		}
	}
})()

/*var corgi= (function(){
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
})()*/

