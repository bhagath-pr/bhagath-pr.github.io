function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function validateLogin() {
	let luname = document.getElementById("login-username").value;
	if (luname.trim() === "") {
		alert("Username field cannot be empty!");
		return false;
	}
	let lpass = document.getElementById("login-password").value;
	let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	if (!regex.test(lpass)) {
		alert("Password must be at least 8 characters, including a letter and a number.");
		return false;
	}
	else{
		return true;
	}
}

function validateRegister(){
	let name = document.getElementById("name").value;
	let uname = document.getElementById("reg-username").value;
	let dob = document.getElementById("dob").value;
	let email = document.getElementById("email").value;
	let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let pwd = document.getElementById("password").value;
	let pwdregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (name.trim() === "") {
		alert("Name field cannot be empty!");
		return false;
	}
	if (uname.trim() === "") {
		alert("Username field cannot be empty!");
		return false;
	}
	if (dob.trim() === "") {
		alert("Date of Birth cannot be empty!");
        	return false;
    	}
	if (!emailregex.test(email)) {
		alert("Invalid email format!");
		return false;
	}
	if (!pwdregex.test(pwd)) {
		alert("Invalid Password Format");
		return false;
	}
	else{
		return true;
	}
}