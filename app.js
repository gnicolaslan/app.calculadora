const calculadora = require("./calculadora")

const process = require('process')

let resultado = 0;
let operacion = process.argv[2];
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA, numeroB)
}else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA, numeroB)
}else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA, numeroB)
}else if(operacion === "dividir"){
    resultado = calculadora.dividir(numeroA, numeroB)
    { if(resultado === 0){
        resultado = "No se puede dividir por cero"
    } else if(resultado === Infinity){
        resultado = "No se puede dividir por cero" }}
}else {
    resultado = "ERROR: operación no válida"
}


console.log(resultado)