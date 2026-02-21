console.log("=== AULA REDUCE ===")

let numeros = [10, 20, 30, 40];
console.log("Array original:", numeros);

//estrutura do reduce 

//array.reduce(function(acumulaor, elementoatual){
//      return novovalor;
//}, valorinicial);

let soma = numeros.reduce(function(acumulado, numero){
    return acumulador + numero;
},0;

console.log("soma total : ",soma);

let alunos = [
    {nome: "Ana", nota:8},
    {nome: "Bruno", nota:6},
    {nome: "Carlos", nota:10}
];


let totalNotas = alunos.reduce((acumulador, aluno)=>{
    return acumulador + aluno.nota;
},0);

//media = soma das notas / quantidade de alunos 
let media = totalnotas / alunos.length;
console.log("media da turma : ", media);
