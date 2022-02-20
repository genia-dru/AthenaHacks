var minute = 24;
var sec = 60;
var switched = true;

var audio = document.getElementById("myAudio");
//audios
var audio1 = new Audio('waterdrops.wav');
var audio2 = new Audio('lightrain.mp3');
var audio3 = new Audio('heavyrain.wav');
var audio4 = new Audio('thunder.wav');
var audio5 = new Audio('birdscrickets.wav');
var audio6 = new Audio('frogs.wav');

function timer(){
setInterval(function() {
      sec--;
      if (sec == 00 && minute > 1) {
        minute --;
        sec = 59;
      }
      if (minute == 0 && sec == 0) {
        switched = !switched;
        if(switched){
          minute = 24;
          sec = 60;
          document.getElementById("start").innerHTML = "Studying...";

        }
        else {
          minute = 4;
          sec = 60;
          document.getElementById("start").innerHTML = "Break Time...";
        }
      }
      if (sec < 10){
        document.getElementById("timer").innerHTML = minute + " : 0" + sec;
      }
      else{
        document.getElementById("timer").innerHTML = minute + " : " + sec;
      }
    }, 1000);
  }
  //run
  timer();

  function play(a){
  a.play()
  }
document.getElementById("sound1").addEventListener("click", function(){play(audio1)}, false);
document.getElementById("sound2").addEventListener("click", function(){play(audio2)}, false);
document.getElementById("sound3").addEventListener("click", function(){play(audio3)}, false);
document.getElementById("sound4").addEventListener("click", function(){play(audio4)}, false);
document.getElementById("sound5").addEventListener("click", function(){play(audio5)}, false);
document.getElementById("sound6").addEventListener("click", function(){play(audio6)}, false);
