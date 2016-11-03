


var $animate = $('.animate');

$animate.waypoint(function(){
	$animate.addClass('animate-animated animated fadeInLeft');
	console.log("this works")
}, { offset: '90%' });