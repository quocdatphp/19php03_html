function validateRegister() {
	var username, password;
	username = document.getElementById('username').value;
	password = document.getElementById('password').value;
	
	if (username == '') {
		alert('please input your name');
	}
	if (password == '') {
		alert('please input your password');
	}
	if ((username != '') && (password != '')) {
		alert('Register success');
	}
}
