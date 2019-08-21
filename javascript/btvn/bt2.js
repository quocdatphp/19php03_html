var i;
for (var i = 0; i <= 10; i++) {
	if (i % 2 == 0) {
		document.write(i + ",");
	}
}

document.write('<br>-------------<br>');
//Bt chuyen sach
var binh = 27;
var minh = binh / 3;
var solanchuyen = 0;
while (binh != minh * 2){
	binh--;
	minh++;
	solanchuyen++;
}
document.write("so lan binh chuyen sach cho minh la:" + solanchuyen);


document.write('<br>-------------<br>');
//bt doi keo
var tien= 2000;
var keo = 0;
var vokeo = 0;
while (tien > 0) {
	tien -= 200;
	keo++;
	vokeo++;
}
while (vokeo >= 2){
	vokeo -= 2;
	keo++;
	vokeo++;
}
document.write('so keo mua duoc la:' + keo);


document.write('<br>------------<br>');
//bt tien
var sotiencan = 1000000;
var tien10 = 10000;
var tien20 = 20000;
var tien50 = 50000;
var cachdungtien = 0;
for(var i = 1; i <= sotiencan/tien10; i++) {
	for (var j = 1; j <= sotiencan/tien20; j++) {
		for(var k = 1; k <= sotiencan/tien50; k++) {
			if ((i * tien10 + j * tien20 + k * tien50) == sotiencan) {
				cachdungtien++;
			}
		}
	}

}
document.write(cachdungtien);

document.write('<br>-----------<br>');
//Bt gui ngan hang




//Bt in tam giac
document.write('<br>------------<br>');
var sotunhien = 1;
var sodong = 5;
for (var i = 1; i <= sodong; i++) {
	for(var j = 1; j <= i; j++){
	document.write(sotunhien + '&nbsp');
	sotunhien++;
	}
	document.write('<br>');
}


//Bt doi tien voi keo
document.write('<br>------------<br>');
var sodola = 0;
var soeuro = 0;
var sokeo = 0;
while (sokeo < 50) {
	soeuro += 3;
	sodola -= 5;
	sokeo ++;
	while (soeuro > 0) {
		soeuro -= 2;
		sodola += 3;
		sokeo++;
	}
}
document.write("so dola de mua 50 keo la:" + sodola);



