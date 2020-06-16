var slideIndex = 1;
showSlides(slideIndex);	//slideIndex = 1 means first slide

// Next/previous controls
function plusSlides(n) {	//n can be +1 or -1, to go back or forward a slide	
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {	//This function is used when the user select the exact slide they want
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	document.getElementsByClassName("next")[0].style.display = "block";	//Make sure next and previous divs are not hidden
	document.getElementsByClassName("prev")[0].style.display = "block";

	if (n > slides.length || n == 1) {
		slideIndex = 1;	//Restart the counter to 1
		document.getElementsByClassName("next")[0].style.display = "block";	//Show next button
		document.getElementsByClassName("prev")[0].style.display = "none";	 //Hide previous button
	}

	if (n < 1 || n == slides.length) {
		slideIndex = slides.length;	//Set slide index to the last slide
		document.getElementsByClassName("prev")[0].style.display = "block";	//Hide next button
		document.getElementsByClassName("next")[0].style.display = "none";	//Show previous button
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";	//Make sure all old slide pictures are hidden
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");	//Make sure the slide dots aren't highlighted
	}

	slides[slideIndex-1].style.display = "block";	//Show the correct image
	dots[slideIndex-1].className += " active";	//Highlight the dot 
}

var model = "11-pro";
var color = 0;

function changeColor (i) { //Change image by selected color
	color = i;
	
	if (i == 0) {
		document.getElementById("phone").src = "images/" + model + "/iphone-" + model + "-space.png";

	}else if (i == 1) {
		document.getElementById("phone").src = "images/" + model + "/iphone-" + model + "-silver-select-2019_GEO_EMEA.png";

	}else if (i == 2) {
		document.getElementById("phone").src = "images/" + model + "/iphone-" + model + "-midnight-green-select-2019_GEO_EMEA.png";

	}else if (i == 3) {
		document.getElementById("phone").src = "images/" + model + "/iphone-" + model + "-gold-select-2019_GEO_EMEA.png";
	}
}

function changeModel (i) {	//Change model
	if (i == 0) {
		
		model = "11-pro";

	} else if (i == 1) {

		model = "11-pro-max";
	}
	
	changeColor(color);	//Correct color after changing the model

}



  


