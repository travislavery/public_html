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

var overview= (function(){
	var $xClose = $('.close1');

	$xClose.on('click', closeMessage)

	function closeMessage() {
		var curr= $(event.target).closest('.panel');
		curr.addClass('hidden');
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
		$active.toggleClass('activeP hidden');
		$target.toggleClass('activeP hidden');
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
		$current= $(event.target).closest('.modal');
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
	var $docHeight = $(document).height();

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
		var currentHeight = $(document).height();
		var $textCode = $box.val();
		$('#hText'+$textCode).toggleClass('hidden');
		$($box).toggleClass('col-md-8');
		$($box).toggleClass('col-md-push-2');
		//if (currentHeight >= $docHeight) {
		//	$('.bg').css('overflow', 'scroll');
		//} else {
		//	$('.bg').css('overflow', 'hidden');
		//}
	}


})()