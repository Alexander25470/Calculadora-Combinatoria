function factorial (n) {
	var total = 1; 
	for (let i=1; i<=n; i++) {
		total *= i; 
	}
	return total; 
}
function calcularVariacion(n,r){
var variacionFactorial=factorial(n-r);
var nFactorial=factorial(n);
var resultado=nFactorial/variacionFactorial;
var resultadomostrar=document.getElementById("resultado");
resultadomostrar.textContent="El resultado es: "+resultado;

}
function calcularCombinacion(n,r){
    var variacionFactorial=factorial(n-r);
    var nFactorial=factorial(n);
    var rFactorial=factorial(r);
    var resultado=nFactorial/(rFactorial*variacionFactorial);
    var resultadomostrar=document.getElementById("resultado");
    resultadomostrar.textContent="El resultado es: "+resultado;
}