console.log("=== AULA DE FILTER ===");

let numeros = [1,2,3,4,5,6];

console.log("array origina: ", numeros);

let pares = numeros.filter(function(numero){
    return numero % 2 === 0 ;
});


console.log("numeros pares: ", pares);

let maiorQueTres = numeros.filter(numero => numero > 3);
console.log("maiores que tres:", maiorQueTres);
