let multiplier = 8;
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
var result = range(1, 15); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
var combined = multiplier * result;
let uu;
let text = [];
for (uu = 0; uu < result.length; uu++) {
  text.push(result[uu] * multiplier);
}

document.getElementById("user-selects").onchange = function() {
  let userSelect = document.getElementById("user-selects").value;
  document.getElementById("multiplier").innerText = userSelect;

  let product = Number(userSelect) * 8;
  console.log(product);
};

document.getElementById("multiplicand").innerText = text[8];
document.getElementById("product").innerText = result[2];

console.log(result);
console.log(text);
