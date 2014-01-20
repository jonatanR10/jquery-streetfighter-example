$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$(this).toggleClass('ryu-still ryu-ready');
	})
	.mouseleave(function() {
		$(this).toggleClass('ryu-still ryu-ready');
	}).mousedown(function() {
		$(this).addClass('ryu-throwing');
		var hadouken = '<div class="hadouken"></div>';
		$(this).append(hadouken);
		$('.hadouken').animate(
			{'right': -100}, 
			1000, 
			function() {
				this.remove();
			});
	}).mouseup(function() {
		$(this).removeClass('ryu-throwing');
		$(this).addClass('ryu-still');
	});
});
