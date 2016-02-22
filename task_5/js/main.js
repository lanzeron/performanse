(function() {
	"use strict";
	var contLoad = document.getElementById("contentLoad");
	var load = document.getElementById("onload");

	document.addEventListener("DOMContentLoaded", print);

	function print() {
		contLoad.textContent = "content loaded";
	}


	var image = document.createElement('img');
	image.src = "images/wolverine.jpg";
	document.body.appendChild(image);
	image.onload = function() {
	load.textContent = "Image is loaded";
};

})();