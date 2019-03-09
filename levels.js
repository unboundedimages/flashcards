document.getElementById("user-selects").onchange = function() {
  let multiplier = 8;
  let userSelect = document.getElementById("user-selects").value;

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  var result = range(1, 15); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  var combined = multiplier * result;
  let text = [];
  let uu;

  for (uu = 0; uu < result.length; uu++) {
    text.push(result[uu] * userSelect);
  }

  // document.getElementById("user-selects").onchange = function() {
  //   let userSelect = document.getElementById("user-selects").value;
  let userNum = Number(userSelect);
  console.log("THIS IS USER SELECT: ", userNum);

  document.getElementById("multiplicand").innerText = result;
  document.getElementById("multiplier").innerText = userSelect;

  document.getElementById("product").innerText = text;

  console.log(result);
  console.log(text);
};
