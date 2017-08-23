var background = (function(){
	var $backCarousel = $('#backgroundPics');
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
	$(document).on('scroll', myNavStuff);

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
		var topE = $('#experienceDiv').offset().top;
		var bottomE = $('#resumeDoc').offset().top - 150;
		bottomE = $(document).height() - bottomE;
		$('#myNav').affix({
			offset: {
			top: topE,
			bottom: bottomE
			}
		});
		var activeNav;
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
