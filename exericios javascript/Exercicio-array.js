console.log("=== ATIVIDADE Calcule o valor total do carrinho===");
//Calcule o valor total do carrinho.
//Gere um array apenas com os nomes dos produtos em promoção.
//Encontre o produto com id = 3.
//Gere um novo array com o subtotal de cada produto (preço × quantidade). ===");

const carrinho = [
  { id: 1, nome: "Notebook", preco: 3000, quantidade: 1, promocao: true },
  { id: 2, nome: "Mouse", preco: 100, quantidade: 2, promocao: false },
  { id: 3, nome: "Teclado", preco: 200, quantidade: 1, promocao: true },
  { id: 4, nome: "Monitor", preco: 1200, quantidade: 1, promocao: false }
];

let soma = carrinho.reduce(function(acc, numero) {
    return acc + numero.preco;

}, 0);

console.log("A soma dos valores: ", soma);

console.log("primeira fruta", frutas[0]);
console.log("segunda fruta", frutas[1]);





