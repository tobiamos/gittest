$(".navbar-collapse ul li a[href^='#']").on('click', function(e){
	e.preventDefault();
	//store hash
	var hash = this.hash;
	//animate
	$('html,body').animate({
		scrollTop : $(this.hash).offset().top -50
	}, 800, function(){
		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

$("a.navbar-brand[href^='#']").on('click', function(e){
	e.preventDefault();
	//store hash
	var hash = this.hash;
	//animate
	$('html,body').animate({
		scrollTop : $(this.hash).offset().top -50
	}, 800, function(){
		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

$("#back-to-top a[href^='#']").on('click', function(e){
	e.preventDefault();
	//store hash
	var hash = this.hash;
	//animate
	$('html,body').animate({
		scrollTop : $(this.hash).offset().top -50
	}, 800, function(){
		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

$(".col-md-4 a[href^='#']").on('click', function(e){
	e.preventDefault();
	//store hash
	var hash = this.hash;
	//animate
	$('html,body').animate({
		scrollTop : $(this.hash).offset().top -50
	}, 800, function(){
		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});