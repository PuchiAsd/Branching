let valor1 = document.getElementById("valor1");
let operador = document.getElementById("operador");
let valor2 = document.getElementById("valor2");
let resultadotext = document.getElementById("resultado");

let valor1Data = prompt("Ingrese su primer valor");
let operadorData = prompt("Ingrese la Operación a realizar")
let valor2Data = prompt("Ingrese su segundo valor");


if(operadorData == "+"){
	resultado = +valor1Data + +valor2Data
}else if(operadorData == "-"){
	resultado = +valor1Data - +valor2Data
}else if(operadorData == "*"){
	resultado = +valor1Data * +valor2Data
}else if(operadorData == "/"){
	resultado = +valor1Data / +valor2Data
}else{
	resultado = "Ingresalo bien amigo mío"
}

valor1.innerHTML = valor1Data
operador.innerHTML = operadorData
valor2.innerHTML = valor2Data
resultadotext.innerHTML = resultado



