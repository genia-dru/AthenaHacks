  var minute = 25;
  var sec = 60;
  setInterval(function() {
    document.getElementById("timer").innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute --;
      sec = 60;
      if (minute == 0) {
        minute = 25;
      }
    }
  }, 1000);
