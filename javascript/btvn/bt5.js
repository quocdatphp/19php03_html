var n = 1000000, socach = 0, si, sj, i, j ,k;
for(i = n / 10000; i >= 0; i--)
{
	si = n - i * 10000;
	for (j = si / 20000; j >= 0; j--)
	{
		sj = si - j * 20000;
		for (k = sj / 50000; k >= 0; k--)
		{
			if(i * 10000 + j * 20000 + k * 50000 == 1000000)
				{
					document.write(i + j + k);
					document.write('<br>');
					socach++;
				}
		}
	}
}
document.write("co tat ca" + socach + "cach chon");

