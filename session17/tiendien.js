function validateform(){
	var name = document.getElementById('fullname');
	var sodiendau = document.getElementById('firstnumber');
	var sodiencuoi = document.getElementById('lastnumber');
	var ngaydau = document.getElementById('firstday');
	var ngaycuoi = document.getElementById('lastday');
	var sochudien = Number(sodiencuoi.value) - Number(sodiendau.value);
	var thanhtien = 0;
	if (name.value == "") {
		// document.getElementById("errname").innerHTML = "Bạn chưa nhập tên";
		// name.style.background = "red";
		alert("Bạn hãy nhập tên");
		name.focus();
		return false;
	}
	if (sochudien <= 100) {
		thanhtien = sochudien * 1500;}
	if (sochudien >= 101 && sochudien <= 300) {
		thanhtien = (1500 * 100) + ((sodiencuoi - 100) * 2000);
		}
	if (sodiencuoi > 300) {
		thanhtien = (1500 * 100) * (2000 * 200) + (sodiencuoi - 300) * 3500;
		}
	alert(thanhtien);
	if(sodiendau.value == ""){
		alert("Bạn hãy nhập số điện đầu kì");
		sodiendau.focus();
		return false;
	}
	if (sodiencuoi.value == "") {
		alert("Bạn hãy nhập số điện cuối kì");
		sodiencuoi.focus();
		return false;
	}
	if (ngaydau.value == "" && ngaycuoi.value == "") {
		alert("Ngày không được bỏ trống");
		return false;
	}
}



