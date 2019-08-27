var banco;
for (var i = 1; i <= 8 ; i++) 
{	
	for (var j = 1; j <= 8; j++)
	{
		banco = i + j;
		if (banco % 2 == 0)
		{
			document.write("<div class='box_black'></div>");
		}
		else 
		{
			document.write("<div class='box_white'></div>");
		}
		
	}document.write('<br>');
}

