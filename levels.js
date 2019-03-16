let userSelect = document.getElementById("user-selects");
let userNum;
let fin = "";
document.getElementById("user-selects").onchange = function() {
  console.log(userSelect.value);
  document.getElementById("multiplier").innerText = userSelect.value;
  playSound = false;
  getRange();
  let starzArray = [];
  let joinStarz = [];
  let starString = "";
  var i;
  var s;
  function starz() {
    userNum;
    for (i = 0; i <= 15; i = i + 1) {
      userNum;
      for (s = 0; s <= i; s = s + 1) {
        userNum;
        starzArray.push(s && userNum);
      }
    }
    for (var iii = 0; iii < starzArray.length; iii++) {
      console.log(starzArray[iii]);
    }
    // joinStarz.push(starzArray.join(" - "));
    joinStarz.push(starzArray.join("  "));
    starString = joinStarz[0].toString();
    fin = starString.split("0");
    fin.shift();
    fin.shift();
    fin.unshift("0");
    console.log("this userNum inside of starz: ", userNum);
  }
  starz();
  // document.getElementById("stars").innerHTML = userNum;
  document.getElementById("stars").innerHTML = fin[0];
  console.log("grand finale ", fin);
  console.log("this is the fn userNum:  ", userNum);
};

function getRange() {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  // var multiplicand = range(1, 15); // [9, 10, 11, 12, ....]
  var multiplicand = range(0, 15); // [9, 10, 11, 12, ....]
  let productArray = [],
    Current = 0;
  let uu;
  for (uu = 0; uu < multiplicand.length; uu++) {
    productArray.push(multiplicand[uu] * userSelect.value);
    userNum = userSelect.value.toString();
    // userNum = Number(userSelect.value).toString();
    console.log("THIS IS USER SELECT: ", userNum);
    document.getElementById("multiplicand").innerText = multiplicand[Current];
    document.getElementById("product").innerText = productArray[Current];

    console.log("THIS IS THE multiplicand", multiplicand);
    console.log("THIS IS PRODUCTARRAY: ", productArray);
  }
  function Next() {
    document.getElementById("next").onclick = function() {
      if (
        Current == multiplicand.length - 1 &&
        productArray.length - 1 &&
        fin.length - 1
      ) {
        Current = 0;
      } else {
        Current++;
      }
      document.getElementById("multiplicand").innerHTML = multiplicand[Current];
      document.getElementById("product").innerHTML = fin[Current];
      // document.getElementById("product").innerHTML = productArray[Current];
      document.getElementById("stars").innerHTML = fin[Current];
      flipSound();
    };
  }
  Next();

  function Previous() {
    document.getElementById("prev").onclick = function() {
      if (Current == 0) {
        Current = multiplicand.length && productArray.length - 1;
      } else {
        Current--;
      }
      document.getElementById("multiplicand").innerHTML = multiplicand[Current];
      document.getElementById("product").innerHTML = productArray[Current];
      document.getElementById("stars").innerHTML = fin[Current];
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
