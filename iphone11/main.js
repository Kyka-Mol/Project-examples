var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	document.getElementsByClassName("next")[0].style.display = "block";
	document.getElementsByClassName("prev")[0].style.display = "block";

	if (n > slides.length || n == 1) {
		slideIndex = 1;
		document.getElementsByClassName("next")[0].style.display = "block";
		document.getElementsByClassName("prev")[0].style.display = "none";
	}

	if (n < 1 || n == slides.length) {
		slideIndex = slides.length;
		document.getElementsByClassName("prev")[0].style.display = "block";
		document.getElementsByClassName("next")[0].style.display = "none";
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

var model = "11-pro";
var color = 0;

function changeColor (i) {
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

function changeModel (i) {
	if (i == 0) {
		
		model = "11-pro";

	} else if (i == 1) {

		model = "11-pro-max";
	}
	
	changeColor(color);

}



  


