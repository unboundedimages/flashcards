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

// Dynamically generate the "*"
let starzArray = [];
let joinStarz = [];
// let starsA = starzArray.split(["0,"]);
var i;
var s;
function starz(index) {
  for (i = 0; i <= 12; i = i + 1) {
    for (s = 0; s <= i; s = s + 1) {
      document.write("\n9");
      // document.getElementById("stars").innerHTML = document.write("\n9");
      starzArray.push(s && "*");
      let starsA = starzArray.toString();
      // let starsAA = starsA.split("0");
      // console.log(starsAA);
    }
    //print a new line
    // document.getElementById("stars").innerHTML = document.write("<br>");
    // console.log(starzArray);
    document.write("<br>");
    // starzArray.push(i);
    // starzArray.push(i & s);
  }
  for (var iii = 1; iii < starzArray.length; iii++) {
    // if (starzArray[iii] === 0) {
    //   starzArray.splice(iii, 1);
    // }
    console.log(starzArray[iii]);
  }
  joinStarz.push(starzArray.join(""));
  // console.log(index);
}
starz();
// starzArray.join("-");
// console.log(starzArray.join(" "));
// console.log(starzArray.split(ff));
console.log("join me ", joinStarz);
