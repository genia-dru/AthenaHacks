var minute = 24;
var sec = 60;
var switched = true;

var audio = document.getElementById("myAudio");
  
function playSound() {
    audio.play();
}

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
