function myFunction() {
	var x = document.getElementById("myDIV");
	var div = "<div>&nbsp;&nbsp;&nbsp;9</div>"
	if (x.innerHTML ==="" ) {
		x.innerHTML =  div +
		"<div>x 1</div>" +
		"<div>___</div>" +
		"<div>&nbsp;&nbsp;&nbsp;9</div>";
	} else if(x.innerHTML ===  div +
	"<div>x 1</div>" +
	"<div>___</div>" +
	"<div>&nbsp;&nbsp;&nbsp;9</div>") {
		x.innerHTML =  "<div id='1'><ol>" +
		"<li>*** *** ***</li>" +
		"</ol></div>";
	} 
	
	else {
		x.innerHTML = "<div>&nbsp;&nbsp;&nbsp;9</div>"+
		"<div>x 3</div>" +
		"<div>___</div>" +
		"<div>&nbsp;27</div>";
	}
}