"use strict";

function advanceCard() {
  let userSelect = document.getElementById("user-selects");
  let product = document.getElementById("product");
  var x = userSelect.value;
  var y = Math.floor(Math.random() * 16);
  var z = x * y;
  product.innerHTML = z;

  document.getElementById("multiplicand").innerHTML = y;
  document.getElementById("multiplier").innerHTML = x;
  document.getElementById("colad").checked = false;
  product.style.fontSize = "4em";
  product.style.top = "35%";

  //   if (y >= 10) {
  //     document.getElementById("multiplicand").innerHTML = y;
  //   } else {
  //     document.getElementById("multiplicand").innerHTML = "&nbsp;" + "&nbsp;" + y;
  //   }
  function flipSound() {
    var s = document.getElementById("flip_");
    s.play();
  }
  flipSound();
}
advanceCard();
document.getElementById("user-selects").onchange = () => advanceCard();
document.getElementById("next").onclick = () => advanceCard();
document.getElementById("prev").onclick = () => advanceCard();

// var playSound = false;

var music = document.getElementById("music");
function chopin_() {
  music.pause();
}

function startMusic() {
  music.play();
}
window.onload = () => startMusic();

function restartMusic() {
  music.pause();
  music.currentTime = 0;
}

document.getElementById("stop").onclick = () => restartMusic();
document.getElementById("play").onclick = () => startMusic();
