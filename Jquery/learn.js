$('.change_content').click(function(){
	$('#demo').html('demo change');
});

$('#change').click(function(){
	$('.demo2').attr('src','img/pic1.jpg');
	$('.demo2').attr('alt','VN - Thái Lan');
});

$('#register').click(function(){
	var name = $('#name').val();
	alert(name);
});

// ----------------