function Tinhtong() {
	var a = document.getElementById('soa');
	var b = document.getElementById('sob');
	if (soa.value == "") {
		// alert("moi ban nhap so a");
		document.getElementById("error_soa").innerHTML = "bạn chưa nhập số a";
		document.getElementById("error_soa").classList.add("error");
		soa.classList.add("input_error");
		soa.focus();
		// focus để nguyên lại vị trí cũ
		return false;
	}
	else if (sob.value == "") {
		// alert("moi ban nhap so b");
		document.getElementById("error_sob").innerHTML = "bạn chưa nhập số b";
		document.getElementById("error_sob").classList.add("error");
		sob.focus();
		return false;
	}
	var tong = Number(a.value) + Number(b.value);
	// xuất
	var kq = document.getElementById("kq");
	kq.value = tong;
}

function checkError(id) {
	item = document.getElementById(id);
	if (item.value !== "") {
		document.getElementById("error_" + id).innerHTML = "";
		item.classList.remove("input_error");
	}
	else {
		document.getElementById("error_" + id).innerHTML = "";
		item.classList.add("input_error");
	}
}

document.write('<br---------------br>');
var images = ["img/avatar.jpg", "img/vanhau.jpg", "img/vanlam.jpg", "img/xuantruong.jpg", "img/ronaldo.jpg", "img/torres.jpg", "img/reus.jpg"
];
var num = 0;
function next() {
	// lấy phàn tử img để hiện ảnh
	var slider = document.getElementById("slider");
	num++;
	if (num >= images.length) {
		num = 0;
	}
	// thiết lập thuộc tính src của ảnh mới
	slider.src = images[num];
}
function prev() {
	var slider = document.getElementById("slider");
	num--;
	if (num < 0) {
		num = images.length -1;
	}
	slider.src = images[num];
}