//make an array wiith numbers to be multiplied
var multiplicand = ["&nbsp 0","&nbsp 1","&nbsp 2", "&nbsp 3","&nbsp 4","&nbsp 5","&nbsp 6","&nbsp 7","&nbsp 8","&nbsp 9", "10","11","12"]; 
var product = [0,9,18,27,36,45,54,63,72,81,90,99,108]
var stars = [
"<div id='zeroo'>0</div>", //0
"<div id='zeroo'>9</div>", // 9x1
"<div id='two'>9<br>9</div>",// 9x2 
"<div id= 'three'>9<br>9\n9</div>",		//9x3
"<div id= 'three'>9\n9<br>9\n9</div>",  //9x4
"<div id= 'five'>9\n9<br>9<br>9\n9</div>", //9x5
"<div id= 'six'>9\n9<br>9\n9<br>9\n9</div>", //9x6
"<div id= 'six'>9\n9<br>9\n9\n9<br>9\n9</div>", //9x7
"<div id= 'eight'>9<br>9\n9\n9<br>9\n9\n9<br>9</div>", //9x8
"<div id= 'nine'>9\n9\n9<br>9\n9\n9<br>9\n9\n9</div>", //9x9
"<div id= 'eight'>9\n9<br>9\n9\n9<br>9\n9\n9<br>9\n9</div>", //9x10
"<div id= 'eight'>9\n9<br>9\n9\n9<br>9\n9\n9<br>9\n9\n9</div>", //9x11
"<div id= 'eight'>9\n9\n9<br>9\n9\n9<br>9\n9\n9<br>9\n9\n9</div>", //9x12
];
var Current = 0;

//take the product of those numbers and inject them into product div
//when next button is clicked, the next multiplicand and stars are put into the div
document.getElementById("multiplicand").innerHTML = multiplicand[Current];

function Prev(){
	if(Current == 0){
		Current = multiplicand.length && product.length - 1 && stars.length -1;
	}
	else
	{
		Current--;
	}

	document.getElementById("multiplicand").innerHTML = multiplicand[Current];
	document.getElementById("product").innerHTML = product[Current];
	document.getElementById("stars").innerHTML = stars[Current];
	var flipSound =  new Audio();	
	flipSound.src = "media/Card_Flip_.m4a"
	flipSound.play();
}

function Next(){
	if
	(Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
		Current = 0
	}
	else
	{
		Current++;
	}

	document.getElementById("multiplicand").innerHTML = multiplicand[Current];
	document.getElementById("product").innerHTML = product[Current];
	document.getElementById("stars").innerHTML = stars[Current];
	var flipSound =  new Audio();	
	flipSound.src = "media/Card_Flip_.m4a"
	flipSound.play();
}


document.onkeyup = checkKey;

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '38') {
        // up arrow
        if
        (Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
        	Current = 0
        }
        else
        {
        	Current++;
        }

        document.getElementById("multiplicand").innerHTML = multiplicand[Current];
        document.getElementById("product").innerHTML = product[Current];
        document.getElementById("stars").innerHTML = stars[Current];
        var flipSound =  new Audio();	
        flipSound.src = "media/Card_Flip_.m4a"
        flipSound.play();
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(Current == 0){
        	Current = multiplicand.length && product.length - 1 && stars.length -1;
        }
        else
        {
        	Current--;
        }

        document.getElementById("multiplicand").innerHTML = multiplicand[Current];
        document.getElementById("product").innerHTML = product[Current];
        document.getElementById("stars").innerHTML = stars[Current];
        var flipSound =  new Audio();	
        flipSound.src = "media/Card_Flip_.m4a"
        flipSound.play();
    }
    else if (e.keyCode == '37') {
       // left arrow
       if(Current == 0){
       	Current = multiplicand.length && product.length - 1 && stars.length -1;
       }
       else
       {
       	Current--;
       }

       document.getElementById("multiplicand").innerHTML = multiplicand[Current];
       document.getElementById("product").innerHTML = product[Current];
       document.getElementById("stars").innerHTML = stars[Current];
       var flipSound =  new Audio();	
       flipSound.src = "media/Card_Flip_.m4a"
       flipSound.play();
   }
   else if (e.keyCode == '39') {
       // right arrow
       if
       (Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
       	Current = 0
       }
       else
       {
       	Current++;
       }

       document.getElementById("multiplicand").innerHTML = multiplicand[Current];
       document.getElementById("product").innerHTML = product[Current];
       document.getElementById("stars").innerHTML = stars[Current];
       var flipSound =  new Audio();	
       flipSound.src = "media/Card_Flip_.m4a"
       flipSound.play();
   }

}
// function touch(){
	
// 	document.getElementById("front_nine").classList.toggle("back_nine");
// 	console.log("fire in the whole")
// };

// function retouch(){
	
// 	document.getElementById("back_nine").classList.toggle("card");
// };


// Dynamically generate the "*"
// function starz(){
	// var i;
	// for (i = 12; i >= 0; i = i - 1) {
	// 	// var s;
	// 	for (s = 0; s < i; s = s + 1) {
	// 		document.write("\n9");
	// 	}
 //        //print a new line
 //        document.write("<br>");

 //    }
// }
// starz()