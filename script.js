$(document).ready(function(){

	$('.left-button > button').click(function() {
		$(".right-button").css('visibility','visible')

		var current = $('.active')
		var prev = $('.active').prev()
		prev.addClass('active')
		current.removeClass('active')
		
		if(prev.is('.card:first')){
			$('.left-button').css('visibility','hidden')	
		}

		$('.left-button > button').prop('disabled', true);
		var left = parseInt($('.cards-inner').css('left'))
		var width = parseInt($('.cards-inner').css('width'))
		var shift = left+width
		$('.cards-inner').animate({left: shift}, {
			duration: 250, 
			queue: false, 
			complete: function(){
				$('.left-button > button').prop('disabled',false)

		}});
	});

	$('.right-button > button').click(function() {
		$(".left-button").css('visibility','visible')

		var current = $('.active')
		var next = $('.active').next()
		next.addClass('active')
		current.removeClass('active')
		
		if(next.is('.card:last')){
			$('.right-button').css('visibility','hidden')
		}

		$('.right-button > button').prop('disabled', true);
		var left = parseInt($('.cards-inner').css('left'))
		var width = parseInt($('.cards-inner').css('width'))
		var shift = left-width
		$('.cards-inner').animate({left: shift}, {
			duration: 250, 
			queue: false, 
			complete: function(){
				$('.right-button > button').prop('disabled',false)
		}});
	});

});