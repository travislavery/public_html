var mouseAnimation=(function(){
	var $corgi = $('#corgF3');
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
	var $follower = $('.follow');
	var $fBtn = $('#mouseBtn');
	var xp = 0, yp = 0;
	var loop = setInterval(followCorg, 30);
	//var loop2 = setInterval(tryhard, 500);

	$fBtn.on('click', toggleFollow);

	function toggleFollow() {
		$follower.toggleClass('hidden');
		$follower.toggleClass('follow stay');
	}

	function followCorg() {
		xp += (mouseX - xp) / 12;
		yp += (mouseY - yp) / 12;
		$follower.css({left:xp, top:yp});
		//if(mouseX > mouseY)
	}
	function tryhard() {
		$corgi.css('background', defCorg+'-172px'+left);
		$corgi.css('background', defCorg+'-344px'+left);
		
		//$corgi.css('background', 'url("../images/corgi1.png") 0 -150px');
		//$corgi.css('background', 'url("../images/corgi1.png") -172px -150px');

	}

	function trygood() {
		$corgi.toggleClass('corgi3 corgi4');
		//$corgi.css('background', defCorg+(i*2)+'px'+left);
	}

	/*function swapSpriteTile(dir) {
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
	}*/
})()