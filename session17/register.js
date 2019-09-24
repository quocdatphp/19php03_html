function validate() {
	var fullname = document.getElementById('fullname');
	var ngaysinh = document.getElementById('day');
	var gioitinh = document.getElementById('gender');
	var city = document.getElementById('errcity');
	var year = new Date(ngaysinh.value).getFullYear();
	var age = 2019 - year;
	if (fullname.value == "") {
		document.getElementById('errnam').innerHTML = "Tên không được để trống";
		fullname.style.border = "1px solid red";
		fullname.focus();
	}else {
		document.getElementById('errnam').innerHTML = "";
		fullname.style.border = "none";
	}

	if (ngaysinh.value == "") {
		document.getElementById('errday').innerHTML = "Ngày sinh không được để trống";
		ngaysinh.style.border = "1px solid red";
		ngaysinh.focus();
	}else {
		document.getElementById('errday').innerHTML = "";
		fullname.style.border = "none";
	}
	if ((age > 18) && (age <= 21)) {
		document.getElementById("container").style.background = "lightblue";
	}
	else if (age > 21) {
		document.getElementById("container").style.background = "yellow";
	}
	else {
		document.getElementById("container").style.background = "#1FE11A";
	}
}