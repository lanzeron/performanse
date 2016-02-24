(function(){
	"use strict";

	

	if (!localStorage.getItem('counter')) {
		localStorage.setItem('counter', 50);
	} else {
		counter();
	}

	function counter() {
		var count = localStorage.getItem('counter');
		count++;
		localStorage.setItem('counter', count);
		$('#counter').text(count);
		console.log(count);
	}

})();