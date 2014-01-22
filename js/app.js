$(document).ready(function() {
	doIntro();
	playGame();
});

var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].load()
    $('#hadouken-sound')[0].play();
  }
}

var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    // $('#cool')[0].load()
    $('#cool')[0].play();
  }
}


function playGame() {
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
        {'margin-left': '800px'},
        800,
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
    if (e.keyCode == 88) {
      playCool();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
    }
  });
}

function doIntro() {
  $('#theme-song')[0].play();
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
