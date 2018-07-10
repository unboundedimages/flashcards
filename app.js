//make an array wiith numbers to be multiplied
var multiplicand = [0,1,2,3,4,5,6,7,8,9,10,11,12]; 
var product = [0,9,18,27,36,45,54,63,72,81,90,99,108]
var stars = [
0,
"*********",
"*********\n*********",
"*********<br>*********\n*********",
"*********\n*********<br>*********\n*********",
"*********\n*********<br>*********<br>*********\n*********",
"*********\n*********<br>*********\n*********<br>*********\n*********",
"*********\n*********<br>*********\n*********\n*********<br>*********\n*********",
"*********\n*********<br>*********<br>*********\n*********<br>*********<br>*********\n*********",
"*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********",
"*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********",
"*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********",
"*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********<br>*********\n*********\n*********"
]
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


