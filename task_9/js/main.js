(function(){
	"use strict";
	var username = $('#userName')[0],
		password = $('#password')[0],
		login = $('#login')[0],
		logout = $('#logout')[0];

	if (sessionStorage.getItem('username')) {
		$('h1').text('You are login now');
		username.value = sessionStorage.getItem('username');
		password.value = sessionStorage.getItem('password');


	}

	login.onclick = function() {
		sessionStorage.setItem('username', username.value);
		sessionStorage.setItem('password', password.value);
		
		
	};

	logout.onclick = function() {
		sessionStorage.clear('username');
		username.value = "";
		password.value = "";
		$('h1').text('');

	}



	console.log(login);


})();