var h = prompt("moi ban nhap so hang");
for (var i = 0; i < h; i++) {
    // i tăng từ 0 h-1 nên i < h
	for(var j = 0; j <= 2 * h; j++) {
        // j chạy từ trái sang phải
		if(j >= (h-1-i) && j <= (h-1+i)) {
			document.write('&nbsp', '*');
		}     
		else {
			document.write('&nbsp','&nbsp','&nbsp');
		} 
	}
		document.write('<br>');
} 
/*
    tam giac ngược
    var h = prompt("moi ban nhap so hang");
    for (var i = 1; i <= h; i++)
    {
        // in ky tu khoang trang
        for (var j = 1; j < i; j++)
        {
            document.write('&nbsp');
        }
        //in ki tu ngoi sao
        for (var j = 1; j <= 2*h - (2*i-1)); j++)
        {
        document.write("*");
        }
        document.write('<br>');
        }
    }
*/


document.write('<br>------------------<br>');
var a = prompt("moi ban nhap so thu nhat");
var b = prompt("moi ban nhap so thu hai");
var c =prompt("moi ban nhap so thu ba");
document.write(a);
document.write('<br>');
document.write(b);
document.write('<br>');
document.write(c);
document.write('<br>');
function maxnumber(so1, so2, so3) {
	so1 = parseInt(so1);
	so2 = parseInt(so2);
	so3 = parseInt(so3);
	var max = so1;
	if (max < so2) {
		max = so2;
	}
	if (max < so3) {
		max = so3;
	}
	return max;
}
document.write('<br>');
document.write('so lon nhat la:' + maxnumber(a, b, c));


document.write('<br>--------------<br>');
var mangso = [" không "," một "," hai "," ba "," bốn "," năm "," sáu "," bảy "," tám "," chín "];
var n = prompt("nhap so n");
document.write(n);
function dochangchuc(so, daydu) {
    var chuoi = "";
    chuc = Math.floor(so / 10);
    donvi = so % 10;
    if (chuc > 1) {
        chuoi = " " + mangso[chuc] + " mươi";
        if (donvi == 1) {
            chuoi += " mốt";
        }
    } else if (chuc == 1) {
        chuoi = " mười";
        if (donvi == 1) {
            chuoi += " một";
        }
    } else if (daydu && donvi > 0) {
        chuoi = " lẻ";
    }
    
    if (donvi == 5 && chuc >= 1) {
        chuoi += " lăm";
    } else if (donvi > 1 || (donvi == 1 && chuc == 0)) {
        chuoi += " " + mangso[donvi];    
    }
    return chuoi;
}

function dochangtram(so, daydu) {
    var chuoi = "";
    tram = Math.floor(so / 100);
    so = so % 100;
    if (daydu || tram > 0) {
        chuoi = " " + mangso[tram] + " trăm";
        chuoi += dochangchuc(so, true);
    } else {
        chuoi = dochangchuc(so, false);
    }
    return chuoi;
}

function dochangtrieu(so, daydu) {
    var chuoi = "";
    trieu = Math.floor(so / 1000000);
    so = so % 1000000;
    if (trieu > 0) {
        chuoi = dochangtram(trieu, daydu) + " triệu";
        daydu = true;
    }
    nghin = Math.floor(so / 1000);
    so = so % 1000;
    if (nghin > 0) {
        chuoi += dochangtram(nghin, daydu) + " nghìn";
        daydu = true;
    }
    if (so > 0) {
        chuoi += dochangtram(so, daydu);
    }
    return chuoi;
}

function docso(so) {
    if (so == 0) return mangso[0];
    var chuoi = "",
        hauto = "";
    do {
        ty = so % 1000000000;
        so = Math.floor(so / 1000000000);
        if (so > 0) {
            chuoi = dochangtrieu(ty, true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty, false) + hauto + chuoi;
        }
        hauto = " tỷ";
    } while (so > 0);
    return chuoi;
}
document.write('so nay doc la:' + docso(n));

