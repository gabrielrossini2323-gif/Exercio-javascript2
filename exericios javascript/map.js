console.log("=== AULA DE MAP===");

let numeros = [1,2,3,4,5];
console.log("Array original: ", numeros);


//estrutura do map:

//array.map(function (elemento){
//          return transformacao});

let dobrados = numeros.map(function(numero){
    return numero * 2;
});

console.log("arrey dobrado: ", dobrados);

//Exemplo com arow function
let tripicados = numeros.map( numero => numero * 3);
    console.log("arrey triplicado: ", tripicados);

    let alunos = [
        {nome: "Ana", nota:8},
        {nome: "Bruno", nota:6},
        {nome: "carlos", nota:9},
    ];

    let nomes = alunos.map(aluno =>{
        return aluno.nome;
    })

    //exibindo novo array 
    console.log("somente nomes: ", nomes);

    let nomess =["Ana", "maria", "luana"]

    //retorna um novo array com nomes em maisculo
    let maiusculos = nomess.map(nome =>{
        return nome.toUpperCase();
    });
