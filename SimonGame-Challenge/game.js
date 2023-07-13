let buttonColours = ['red', 'blue', 'green', 'yellow'];

let gamePatterns = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function startOver(){
    level = 0
    gamePatterns = []
    started = false
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePatterns[currentLevel]) {
    if (userClickedPattern.length === gamePatterns.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      console.log('Success');
    }
  } else {
    playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    }, 200)

    $("#level-title").text("Game Over, Press Any Key to Restart")
    startOver()
  }
}

function nextSequence() {
  userClickedPattern = [];

  level++;
  $('#level-title').text('Level ' + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePatterns.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');

  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}
