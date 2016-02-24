(function(){
	"use strict";
	
	

	if (!localStorage.getItem('counter')) {
		$('#counter').text('reload page and counter will start');
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