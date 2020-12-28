var Interval;

var mins = 0;
var tens = 0;
var seconds = 0;

var minsReset = document.getElementById("mins");
var tensReset = document.getElementById("tens");
var secondsReset = document.getElementById("seconds")

var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonReset = document.getElementById("reset");


buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
  }

buttonReset.onclick = function() {
     clearInterval(Interval);
     mins = "00";
     tens = "00";
     seconds = "00";
     
     minsReset.innerHTML = mins;
     tensReset.innerHTML = tens;
     secondsReset.innerHTML = seconds;
  }
 
 function startTimer() {
     tens++;
     
     if (tens < 9){
         tensReset.innerHTML = "0" + tens;
     }
     if (tens > 9){
         tensReset.innerHTML = tens;
     }
     
     if (tens > 99){
         seconds++;
         secondsReset.innerHTML = "0" + seconds;
         tens = 0;
         tensReset.innerHTML = "0" + tens;
     }
     if (seconds > 9){
         secondsReset.innerHTML = seconds;
     }
     if (seconds > 59){
         mins++;
         minsReset.innerHTML = "0" + mins;
         seconds = 0;
         secondsReset.innerHTML = "0" + seconds;
     }
     if (mins > 9){
         minsReset.innerHTML = mins;
     }
 }