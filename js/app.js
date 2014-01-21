var hadoukenSound = false;
function playHadouken () {
	hadoukenSound = !hadoukenSound;
	if (hadoukenSound) {
		$('#hadouken-sound')[0].load()
		$('#hadouken-sound')[0].play();
	}
}

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-action').hide();	
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'margin-left': '1000px'},
				1000,
				function() {
					$(this).stop();
					$(this).hide();
					$(this).css('margin-left', 420);
				}
			);
	})
	.mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 32) {
			$('.ryu-action').hide();
			$('.ryu-jump').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 32) {
			$('.ryu-action').hide();
			$('.ryu-ready').show();
		}
	})
});