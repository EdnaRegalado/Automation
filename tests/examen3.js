let sumOfSquares = 0;

for(let i = 1; i <= 100; i++){
    sumOfSquares += i ** 2;
}

let sumOfNumbers = 0;

for(let i = 1; i <= 100; i++){
    sumOfNumbers += i;
}
let squareSum = sumOfNumbers**2;

console.log("resultado " + (squareSum - sumOfSquares));
