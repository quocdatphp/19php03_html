// cach hien thi du lieu html
//1:
// alert('aaaaa');
// 2:document.getElementById('demo1').innerHTML='test output js';
// 3
// document.wrie('test output 3');
// 4
// var i=8;
// i=t+9;
 //console.log(i);
//bien trong javascript
var user_name;
var phone;
var Email ='test@sdc.vn';
var date_of_birth;
var x = 7, y = 9;
document.write("tong cua x va y la x + y =");
document.write(x+y);

//ham trong script
function myFunctionName() {
	document.write('test funtion');
}
document.write('<br>');
//goi ham trong javascript
myFunctionName();

function sumnumber(){
	var a=3, b=5;
	document.write('tong la' + (a + b));
}
// viet 2 ham tinh tong va tich 2 so cho truoc va in ket qua 
// vong lap for, while, do while
//cau dieu kien: if else, switch case

//tham so cua ham
function mySum3(a,b){
	var c;
	c = a + b;
	return c;
}
document.write('br');
var y;
y = mySum3(6, 9);
document.write(y);

document.write('<br>');
document.write(mySum3(5, 3));

//cau lenh dieu kien
//1. thuc hien neu dieu kien la dung
var a = 4;
if (a==5) {
	document.write("so a la 5");
}

//2. 
var a=4;
if (a==5){
	document.write("so a la 5");
}
else {
	document.write("so a khong phai la 5");
	document.write("......<br>");
	document.write("test if else");


//3.
// if(dk1){
	// thuc hien cac lenh o day neu dieu kien la dung
//}else if (dk2){
	// thuc hien cac lenh o day neu dieu kien 2 la dung
// }else {
	// thuc hien cac lenh o day neu dieu kien 2 la sai
// }
var a =7 ;
if (a==5){
	document.write("so a la so 5");
}else if ("a==6") {
	document.write("so a la so 6");
}else{
	document.write("so a khong phai la so 5 hoac 6");
}

//
var a=5;
var b=8;
if ((a==5) || (a==8)){
	document.write("so a la 5 hoac 8");
}else if ((a==6) && (b==7)) {
	document.write("so a khong phai la 6 hoac 7");
}else{
	document.write("so a khong phai la 5 hoac 6 hoac 8");
}



