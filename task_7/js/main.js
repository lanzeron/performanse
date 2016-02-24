(function(){
	"use strict";

	if (localStorage.getItem('counter')) {
		counter();
	} else {
	localStorage.setItem('counter', 50);
	}

	function counter() {
		var count = localStorage.getItem('counter');
		count++;
		localStorage.setItem('counter', count);
		$('#counter').text(count);
		console.log(count);
	}

})();