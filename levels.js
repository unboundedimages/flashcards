let userSelect = document.getElementById("user-selects");
document.getElementById("user-selects").onchange = function() {
  console.log(userSelect.value);
  document.getElementById("multiplier").innerText = userSelect.value;
  playSound = false;
  getRange();
};

function getRange() {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  var multiplicand = range(1, 15); // [9, 10, 11, 12, ....]
  let productArray = [],
    Current = 0;
  let uu;
  for (uu = 0; uu < multiplicand.length; uu++) {
    productArray.push(multiplicand[uu] * userSelect.value);
    let userNum = Number(userSelect.value);
    console.log("THIS IS USER SELECT: ", userNum);
    document.getElementById("multiplicand").innerText = multiplicand[Current];
    document.getElementById("product").innerText = productArray[Current];

    console.log("THIS IS THE multiplicand", multiplicand);
    console.log("THIS IS PRODUCTARRAY: ", productArray);
  }
  function Next() {
    document.getElementById("next").onclick = function() {
      if (Current == multiplicand.length - 1 && productArray.length - 1) {
        Current = 0;
      } else {
        Current++;
      }
      document.getElementById("multiplicand").innerHTML = multiplicand[Current];
      document.getElementById("product").innerHTML = productArray[Current];
      flipSound();
    };
  }
  Next();

  function Previous() {
    document.getElementById("prev").onclick = function() {
      if (Current === 0) {
        Current = multiplicand.length - 1 && productArray.length - 1;
      } else {
        Current--;
      }
      document.getElementById("multiplicand").innerHTML = multiplicand[Current];
      document.getElementById("product").innerHTML = productArray[Current];
      flipSound();
    };
  }
  Previous();
  if (userSelect.value >= 1) {
    document.getElementById("number-range").style.display = "none";
    playSound = false;
  }
}
getRange();

function Reset() {
  document.getElementById("reset").onclick = function() {
    document.getElementById("number-range").style.display = "block";
  };
}
Reset();

function flipSound() {
  var s = document.getElementById("flip_");
  s.play();
}

var playSound = false;

function chopin_() {
  var x = document.getElementById("music");
  if (playSound) {
    x.pause();
    playSound = false;
  } else {
    x.play();
    playSound = true;
  }
}
chopin_();
