// Ejercicio 2

// guardar el valor de la variable
let sum = 0;

// movernos entre el y el 1000
for(let i=1;i<1000;i++){
    if(i%3 === 0 || i%5 === 0){
        sum += i;
    }
    //console.log(sum);
}

console.log(sum);
