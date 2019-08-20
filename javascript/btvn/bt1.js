// function sumnumber(a, b)
// {
// 	document.write('tong cua a va b la:' + (a + b));
// 	document.write('<br>');
// 	document.write('tich cua a va b la:' + (a * b));
// }
// var a=9, b=10;
// sumnumber(a, b);

// var ngay=2;
// var a=9;
// switch(ngay){
// 	case 2:
// 	document.write("hom nay la thu 2<br>");
// 	if (a==9) {
// 		document.write('a la so 9');
// 	}
// 	break;
// 	case 3:
// 	document.write("hom nay la thu 3");
// 	break;
// 	case 4:
// 	document.write("hom nay la thu 4");
// 	break;
// 	case 5:
// 	document.write("hom nay la thu 5");
// 	break;
// 	case 6:
// 	document.write("hom nay la thu 6");
// 	break;
// 	case 7:
// 	document.write("hom nay la thu 7");
// 	break;
// 	case 8:
// 	document.write("hom nay la chu nhat");
// 	break;

// 	default:
// 	document.write("nhap ngay khong hop le");
// 	break;
// }
	
// var thang = 2;
// var nam = 2019;
// switch(thang){
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 	document.write("thang co 31 ngay");
// 	break;

// 	case 2:
// 	document.write("thang co 28 hoac 29 ngay<br>");
// 	if ((nam%4==0)||(nam%100!=0)){
// 		document.write("thang co 29 ngay<br>");
// 	}
// 	break;

// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 	document.write("thang co 30 ngay");
// 	break;
// }

//vong lap
// var i;
// for (var i = 10; i>=0; i--) {
// 	document.write(i);
// 	document.write('<br>');
// }
// //vong lap while
// var n =5;
// while (n<10){
// 	document.write(n);
// 	document.write('<br>');
// 	n++;
// }

// var n =5;
// do {
// 	document.write(n);
// 	n++;
// }while(n<5);

var i;
for (var  i= 1;  i<=100; i++) {
	if (i % 3==0) {
		document.write("cac so chia het cho 3 la:" + i);
		document.write('<br>');
	}
	if (i % 5 == 0) {
		document.write("cac so chia het cho 5 la:" + i);
		document.write('<br>');
	}
	else if (i % 15 == 0) {
		document.write("cac so chia het cho 15 la:" + i);
		document.write('<br>');
	}
	else {
		document.write("cac so khong chia het cho 3, 5 ,15 la:" + i);
		document.write('<br>');
	}
	
}