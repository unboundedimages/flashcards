//make an array wiith numbers to be multiplied
var multiplicand = ["&nbsp 0","&nbsp 1","&nbsp 2", "&nbsp 3","&nbsp 4","&nbsp 5","&nbsp 6","&nbsp 7","&nbsp 8","&nbsp 9", "10","11","12"]; 
var product = [0,9,18,27,36,45,54,63,72,81,90,99,108,]
var Current = 0;
// this will become the function that launches a popup modal instructing the user to start over or go to the next level
function reset(){
	if (document.getElementById("product").innerHTML === "0") {
		document.getElementById('multiplier').style.display = "none";
		document.getElementById('operator').style.display = "none";
		document.getElementById('nextlevel').style.display = "block";
		document.getElementById('next_').style.display = "block";
		document.getElementById('product').style.display = "none";
		console.log("made it")
		alert("Thank you for viewing this demo!!!\n To play again click Next or\n Click on the card to go back\n to the prior level")
	}else {

		document.getElementById('nextlevel').style.display = "none";
		document.getElementById('multiplier').style.display = "block";
		document.getElementById('operator').style.display = "block";
		document.getElementById('next_').style.display = "none";
		document.getElementById('product').style.display = "block";
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
// show the  previous card
function Prev(){
	if(Current == 0){
		Current = multiplicand.length && product.length - 1;
	}
	else
	{
		Current--;
	}
	document.getElementById('multiplier').style.display = "block";
	document.getElementById('operator').style.display = "block";
	document.getElementById("product").style.display = "block";
	document.getElementById("multiplicand").innerHTML = multiplicand[Current];
	document.getElementById("product").innerHTML = product[Current];
	document.getElementById("next_").style.display= "none"; 	
	document.getElementById('nextlevel').style.display = "none";
	// document.getElementById("stars").innerHTML = stars[Current];
	flipSound()
}
//advance to the next card
function Next(){
	if
	(Current == multiplicand.length -1 && product.length - 1){
		Current = 0
	}
	else
	{
		Current++;
	}

	document.getElementById("multiplicand").innerHTML = multiplicand[Current];
	document.getElementById("product").innerHTML = product[Current];
	flipSound()
	reset()
}
/// using arrow keys
document.onkeydown =
function checkKey(event) {
	var key = event.keyCode;

	if (key === 38) {
        // up arrow
        Next(event)
    }
    else if (key === 40) {
        // down arrow
        Prev(event)
    }
    else if (key === 37) {
       // left arrow
       Prev(event)
   }
   else if (key === 39) {
       // right arrow
       Next(event)
   }

}