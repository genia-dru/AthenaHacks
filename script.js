var minute = 24;
var sec = 60;

setInterval(function() {
      sec--;
      if (sec == 00) {
        minute --;
        sec = 59;
        if (minute == 0) {
          minute = 24;
        }
      }
      if (sec < 10){
        document.getElementById("timer").innerHTML = minute + " : 0" + sec;
      }
      else{
        document.getElementById("timer").innerHTML = minute + " : " + sec;
      }
      if(sec == 0 && minute == 0){
        studyTime = false;
      }
    }, 1000);
