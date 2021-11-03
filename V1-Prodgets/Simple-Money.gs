var Money = 0;
var Muiti = 1; //DO NOT GO UNDER 1

//Give money function callback is GiveMoney
function GiveMoney(time) {
  timedLoop(time, function() {
    Money = Money + 1 * Muiti;
  });
}

//To use the callback, just call the funtion GiveMoney with time


//Update Log
//V1
//Created the Code
//Nothing Else
