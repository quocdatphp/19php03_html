function validateform(){
	var name = document.getElementById('fullname');
	var sodiendau = document.getElementById('firstnumber');
	var sodiencuoi = document.getElementById('lastnumber');
	var ngaydau = document.getElementById('firstday');
	var ngaycuoi = document.getElementById('lastday');
	var sochudien = Number(sodiencuoi.value) - Number(sodiendau.value);
	var thanhtien = 0;
	var printContent = "";

	if (name.value == "") {
		document.getElementById("errname").innerHTML = "Bạn chưa nhập họ tên";
		name.style.border = "1px solid red";
	}else{
		document.getElementById("errname").innerHTML = "";
		name.style.border = "none";
	}
	if (sodiendau.value == "") {
		document.getElementById("errfirstnumber").innerHTML = "Bạn chưa nhập số điện kì đầu";
		sodiendau.style.border = "1px solid red";
	}else{
		document.getElementById("errfirstnumber").innerHTML = "";
		sodiendau.style.border = "none";
	}
	if (sodiencuoi.value == "") {
		document.getElementById("errlastnumber").innerHTML = "Bạn chưa nhập số điện kì cuối";
		sodiencuoi.style.border = "1px solid red";
	}else {
		document.getElementById("errlastnumber").innerHTML = "";
		sodiencuoi.style.border = "none";
	}
	if (ngaydau.value > ngaycuoi.value){
		document.getElementById("errfirstday").innerHTML = "Ngày đầu không được lớn hơn ngày cuối";
	}

	if (sochudien <= 100) {
		thanhtien = sochudien * 1500;}
	if (sochudien >= 101 && sochudien <= 300) {
		thanhtien = 1500 * 100 + (sochudien - 100) * 2000;
		}
	if (sochudien > 300) {
		thanhtien = 1500 * 100 + 2000 * 200 + (sochudien - 300) * 3500;
	}
	printContent += "<p>Ho ten: " + name.value + "</p>";
	printContent += "<p>So ki dau: " + sodiendau.value + "</p>";
	printContent += "<p>So ki cuoi: " + sodiencuoi.value + "</p>";
	printContent += "<p>Ngay dau ki: " + ngaydau.value + "</p>";
	printContent += "<p>Ngay cuoi ki: " + ngaycuoi.value + "</p>";
	printContent += "<p>Tong tien: " + thanhtien + "</p>";
	document.getElementById("printContent").innerHTML = printContent;
}




