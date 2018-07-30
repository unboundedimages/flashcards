//make an array wiith numbers to be multiplied
var multiplicand = ["&nbsp 0","&nbsp 1","&nbsp 2", "&nbsp 3","&nbsp 4","&nbsp 5","&nbsp 6","&nbsp 7","&nbsp 8","&nbsp 9", "10","11","12"]; 
var product = [0,9,18,27,36,45,54,63,72,81,90,99,108,]
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
// "<div id= 'eight'>9\n9\n9<br>9\n9\n9<br>9\n9\n9<br>9\n9\n9\n9</div>", //9x12
"<div id='next_'><a href='index.html' class='link'>Next Level</a></div>"
];
var Current = 0;
// this will become the function that launches a popup modal instructing the user to start over or go to the next level
function reset(){
	if (document.getElementById("product").innerHTML === "0") {
		document.getElementById('multiplier').style.display = "none";
		document.getElementById('operator').style.display = "none";
		document.getElementById('nextlevel').style.display = "block";
		console.log("made it")
		alert("Congratulations you did it!!!\n To play again click Next\n    or\nTry the next level")
		// document.getElementById('next_').style.display = "block";
	}else {

		document.getElementById('nextlevel').style.display = "none";
		document.getElementById('multiplier').style.display = "block";
		document.getElementById('operator').style.display = "block";
	}
}

function flipSound(){
	var s = document.getElementById('flip_')
	s.play();
}
////// Music ////////////
var x = document.getElementById("music")
var playSound = false;

function chopin_(){
	var x = document.getElementById("music")
	if (playSound) {
		x.pause()
		playSound = false;
	} else {
		x.play()
		playSound = true;
	}	
	
}

function pause_(){
	x.pause()
}
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
	document.getElementById('multiplier').style.display = "block";
	document.getElementById('operator').style.display = "block";
	document.getElementById("multiplicand").innerHTML = multiplicand[Current];
	document.getElementById("product").innerHTML = product[Current];
	document.getElementById("stars").innerHTML = stars[Current];
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

	// if (document.getElementById("product").innerHTML === "next") {
	// 	reset()
	// }
	reset()
}

/// using arrow keys

document.onkeydown = checkKey;
function checkKey(e) {
	e = e || window.event;

	if (e.keyCode === 38) {
        // up arrow
        if
        (Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
        	Current = 0
        	flipSound();
        }
        else
        {
        	Current++;
        	flipSound();
        }

        document.getElementById("multiplicand").innerHTML = multiplicand[Current];
        document.getElementById("product").innerHTML = product[Current];
        document.getElementById("stars").innerHTML = stars[Current];
        reset()
    }
    else if (e.keyCode === 40) {
        // down arrow
        if(Current == 0){
        	Current = multiplicand.length && product.length - 1 && stars.length -1;
        	flipSound();
        }
        else
        {
        	Current--;
        	flipSound();
        }
        document.getElementById('multiplier').style.display = "block";
        document.getElementById('operator').style.display = "block";
        document.getElementById("multiplicand").innerHTML = multiplicand[Current];
        document.getElementById("product").innerHTML = product[Current];
        document.getElementById("stars").innerHTML = stars[Current];
        document.getElementById('nextlevel').style.display = "none";
    }
    else if (e.keyCode === 37) {
       // left arrow
       if(Current == 0){
       	Current = multiplicand.length && product.length - 1 && stars.length -1;
       	flipSound();
       }
       else
       {
       	Current--;
       	flipSound();
       }
       document.getElementById('multiplier').style.display = "block";
       document.getElementById('operator').style.display = "block";
       document.getElementById("multiplicand").innerHTML = multiplicand[Current];
       document.getElementById("product").innerHTML = product[Current];
       document.getElementById("stars").innerHTML = stars[Current];
       document.getElementById('nextlevel').style.display = "none";
   }
   else if (e.keyCode === 39) {
       // right arrow
       if
       (Current == multiplicand.length -1 && product.length - 1 && stars.length -1){
       	Current = 0
       	flipSound();
       }
       else
       {
       	Current++;
       	flipSound();
       }

       document.getElementById("multiplicand").innerHTML = multiplicand[Current];
       document.getElementById("product").innerHTML = product[Current];
       document.getElementById("stars").innerHTML = stars[Current];
       reset()
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