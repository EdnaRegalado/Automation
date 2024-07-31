// Ejercicio 1

let resultado = BigInt(2) ** BigInt (1000);
let resultadoStr = resultado.toString();
let suma = 0;


for(let i = 0; i < resultadoStr.length; i++){
    suma += parseInt(resultadoStr[i],10);
}

console.log(suma);