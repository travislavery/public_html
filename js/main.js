var homePic = (function(){
	var $background = $('.carouselPic');

	$(window).resize(function() {
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
	var $navBar1 = $('#navBar1');
	var $pxFromTop = $('#overviewDiv').offset().top;
	var $nameText = $('#navbarName');
	var $topTabText = $('#navBar1tabs li a');
	var white = 'rgb(255, 255, 255)';
	var black = 'rgb(0, 0, 0)';
	
	$(window).on('activate.bs.scrollspy', textColorSwap);

	function textColorSwap() {
		if ($nameText.css('color') === black) {
			toWhite();
		} else if ($nameText.css('color') === white) {
			toBlack();
		}
	}
	
	function toWhite() {
		$nameText.css('color', white);
		$topTabText.css({
			'color': white,
			'background-color': black,
			'border-color': white
			});
		$('#navBtn1').css('border-color', white);
		$('#navBtn1 span.icon-bar').css('border-color', white);
	}

	function toBlack() {
		$nameText.css('color', black);
		$topTabText.css({
			'color': black,
			'background-color': white,
			'border-color': black
			});
		$('#navBtn1').css('border-color', black);
		$('#navBtn1 span.icon-bar').css('border-color', black);
	}
	
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

	$($navs).on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash= this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800);
		}
	})

	function myNavStuff() {
		var topE = $('#experienceDiv').offset().top -75;
		var bottomF = $('#moreAboutMeDiv').offset().top - 150;
		var bottomE = $(document).height() - bottomF;
		$('#myNav').affix({
			offset: {
			top: topE,
			bottom: bottomE
			}
		});
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
