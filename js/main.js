var homePic = (function(){
	var $background = $('.carouselPic');
	var $navBar1 = $('#navBar1');
	var $pxFromTop = $navBar1.offset().top;
	if ($pxFromTop >= 200) {
		$navBar1.addClass('navbar-default navbar-fixed-top');
		$('#navBar1tabs').addClass('nav-pills');
	} else if ($pxFromTop < 200) {
		if ($navBar1.hasClass('navbar-default')) {
			$navBar1.removeClass('navbar-default navbar-fixed-top');
		} 
	}
	
	

	$(window).resize(function() {
		console.log(window);
		if ($($background).length>0) {	
			if ($(window).width()>=968) {
				$background.width($(window).width());
				$('#backgroundDiv').width($(window).width());
			} else if ($(window).width() < 968) {
				$background.width(968);
			}
			if ($(window).height() >= 500) {
				$background.height($(window).height());
				$('#backgroundDiv').height($(window).height());
				//$background.css('min-height', $('#overviewDiv').offset().top+'px');
			} else if ($(window).height() < 500) {
				$background.height(500);
			}
			
		}
	})
})()

var navBar = (function(){
	$(document).click(function (e) {
  		e.stopPropagation();
   		var container = $("#navBar1");
   		if (container.has(e.target).length === 0 && $('#collapsedNav').attr('aria-expanded') === 'true') {
       		$('#navBtn1').click();
        }
	})
})()

var overview= (function(){
	var $navs = $('body').find('nav a');
	myNavStuff();

	$(window).on('scroll', checkScroll);

	$($navs).on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash= this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}

	})

	function myNavStuff() {
		var topE = $('#experienceDiv').offset().top -50;
		var bottomF = $('#moreAboutMeDiv').offset().top - 150;
		var bottomE = $(document).height() - bottomF;
		$('#myNav').affix({
			offset: {
			top: topE,
			bottom: bottomE
			}
		});
	}
	//var activeBox = $('#t1');
	function checkScroll() {
		if (window){}
		/*switch (window.location.hash) {
		case '#t1':
			activeBox.removeClass('active');
			activateBox("#t1");
			break;
		case '#t2':
			activeBox.removeClass('active');
			activateBox("#t2");
			break;
		case '#t3':
			activeBox.removeClass('active');
			activateBox("#t3");
			break;
		case '#t4':
			activeBox.removeClass('active');
			activateBox("#t4");
			break;
		case '#t5':
			activeBox.removeClass('active');
			activateBox("#t5");
			break;
		case '#t6':
			activeBox.removeClass('active');
			activateBox("#t6");
			break;
		case '#t7':
			activeBox.removeClass('active');
			activateBox("#t7");
			break;
		case '#t8':
			activeBox.removeClass('active');
			activateBox("#t8");
	}}

	function activateBox(hash) {
		activeBox = $(hash);
		activeBox.addClass('active');
	}*/
}
	
})()

var moreAboutMe= (function(){
	var tabs = $('#aboutMeTabs').find('ul.nav a');

	tabs.on('click', enableTab);

	function enableTab(e)  {
		e.preventDefault();
		$(this).tab('show');
	}


})()
var books=(function() {
	var $bDiv = $('#bookDiv');
	var $books = $bDiv.find('.bookPic');

	$books.hover(showActiveBook);

	function showActiveBook() {
		$(this).toggleClass('blueB');
	}
})()

var contactMe= (function(){

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
	var $timeBox = $('#timelineBox');
	var $tBox = $timeBox.find('.history');
	var $activeTBox = $timeBox.find('.active');
	var $hash = $hDiv.offset().top;



	$tBox.on("click", pressed);


	function render() {
		$activeTBox = $timeBox.find('.active');
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
		$($box).toggleClass('col-sm-12');
	}
})()
