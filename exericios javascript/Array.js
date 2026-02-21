console.log("=== EXEMPLO DE ARRAY===");

let frutas = ["Maça","banana","uva","laranja"];
console.log("lista de frutas ", frutas);

//indices:
//"maça" -> posiçao 0
//"banana" -> posiçao 1
//"uva" -> posiçao 2
//"laranja" -> posiçao 3

console.log("primeira fruta", frutas[0]);
console.log("segunda fruta", frutas[1]);

//alterando valor de um elemento no array
frutas[1] = "morango";

//adicionando elemento 
frutas.push("abacaxi");

//Removendo elemento do arrey
frutas.pop();

//Percorrer array com for 
for(let i = 0; i < frutas.length; i++){
    console.log("fruta, ",frutas[i]);
}

//percorrer array com foreach
frutas.forEach(function(fruta){
    console.log("fruta: ", fruta);
})
