//make an array wiith numbers to be multiplied
var multiplicand = ["&nbsp 0","&nbsp 1","&nbsp 2", "&nbsp 3","&nbsp 4","&nbsp 5","&nbsp 6","&nbsp 7","&nbsp 8","&nbsp 9", "10","11",12]; 
var product = [0,9,18,27,36,45,54,63,72,81,90,99,108]
var stars = [
"<div id='zeroo'>0</div>",
"<div id='one'>*********</div>",
"<div id='two'>*********\n*********</div>",
"<div id= 'three'>*********<br>*********\n*********</div>",
"<div id= 'three'>*********\n*********<br>*********\n*********</div>",
"<div id= 'three'>*********\n*********<br>*********<br>*********\n*********</div>",
"<div id= 'three'>*********\n*********<br>*********\n*********<br>*********\n*********</div>",
"<div id= 'seven'>*********\n*********<br>*********\n*********\n*********<br>*********\n*********</div>",
"<div id= 'eight'>*********\n*********<br>*********<br>*********\n*********<br>*********<br>*********\n*********</div>",
"<div id= 'seven'>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********</div>",
"<div id= 'ten'>*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********</div>",
"*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********",
"*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********"
];
var Current = 0;

//take the product of those numbers and inject them into product div
//when next button is clicked, the next multiplicand and stars are put into the div
document.getElementById("multiplicand").innerHTML = multiplicand[Current];

function Prev(){
	if(Current == 0){
		Current = multiplicand.length && product.length - 1 && stars.length -1;}
		else{
			Current--;}

			document.getElementById("multiplicand").innerHTML = multiplicand[Current];
			document.getElementById("product").innerHTML = product[Current];
			document.getElementById("stars").innerHTML = stars[Current];
		}

		function Next(){
			if(Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
				Current = 0}
				else{
					Current++;}

					document.getElementById("multiplicand").innerHTML = multiplicand[Current];
					document.getElementById("product").innerHTML = product[Current];
					document.getElementById("stars").innerHTML = stars[Current];
				}

// Dynamically generate the "*"
// function starz(){
 // var i;
 //    for (i = 12; i >= 0; i = i - 1) {
 //        var s;
 //        for (s = 0; s < i; s = s + 1) {
 //            document.write("\n*********");
 //        }
 //        //print a new line
 //        document.write("<br>");

 //    }
// }