var i = parseInt(prompt("numero 1"));

if (  i>1 && i<100) {

if (i % 2 != 0) {
document.write("Odd!(Impar)" + i);
}

else if ( i % 2==0 && i >=2 && i<=5) {
	document.write("Good(Bien)" + i);
}

else if ( i % 2==0 && i>=6 && i <= 20) {
	document.write("Gread(Genial)" + i);
}

else if ( i % 2==0 && i > 20) {
	document.write("Perfect(Perfecto)" + i);
}

}
