//make an array wiith numbers to be multiplied
// multiply => {
	var multiplier = 9;
	var multiplicand = Math.floor(Math.random() * 13);
	var product = multiplier * multiplicand;
// var product = "";
// }
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
// document.getElementById("multiplicand").innerHTML = multiplicand[Current];
// show the  previous card
function Prev(){

	var x = 9;
	var y = Math.floor(Math.random() * 13);
	var z = x * y;
	document.getElementById("product").innerHTML = z;

	if(y >= 10) {
		document.getElementById("multiplicand").innerHTML = y;
	} else {
		document.getElementById("multiplicand").innerHTML = "&nbsp;" + "&nbsp;" + y;
	}
	flipSound()
}
//advance to the next card
function Next(){
	Prev()
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