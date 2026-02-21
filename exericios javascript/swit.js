console.log("=== EXEMPLO DE SWITCH CASE===");

const pompt = requiere("prompt-sync")();


let dia = 3
"digite um numero de 1 a 7 para representar o dia da semana:\n"+
"1 - Domingo\n" +
"2 - Domingo\n" +
"3 - Domingo\n" +
"4 - Domingo\n" +
"5 - Domingo\n" +
"6 - Domingo\n" +
"7 - Domingo\n" +
);

dia= number(dia)


switch(dia){
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sabado");
        break;
