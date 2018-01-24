"use strict";
var state = "on";
var timeLeft = 5;
var timebuff;
var setting;
var timestart = false;

function toggleLight() {
var image = document.getElementById('image');
if ( state == "on" ) {
state = "off";
image.src = "img/off.jpg";
}
else {
state = "on";
image.src = "img/on.jpg";
}
}


function countDownTimer() {
timeLeft = timeLeft - 1;
if (timeLeft == 0) {
document.getElementById("image").src = "img/off.jpg";
timeLeft = timebuff;
clearInterval(setting);
timestart = false;
}
document.getElementById("timer").innerHTML = timeLeft;
}

function timeropen() {
         if (timestart == false){
         timestart = true;
         timebuff = timeLeft;
         setting = setInterval(countDownTimer, 1000);
         }
         }

function clearinputtext() {
var cleartext = document.getElementById('input');
cleartext.value = ""
         }

function timerset() {
              if (timestart == false){
var settext = document.getElementById('input');
if (settext.value > 0){
timeLeft = parseInt(settext.value);
document.getElementById("timer").innerHTML = timeLeft;
}
else{
     settext.value = "";
     alert("錯誤!請輸入數字或數字需大於0");
     }
         }
         }
