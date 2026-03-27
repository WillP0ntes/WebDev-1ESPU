// Exercicio 1: Condicional de acesso
let nivelAcesso = 3 

if (nivelAcesso === 3) {
    console.log("Acesso Total")
} else if (nivelAcesso === 2 ) {
    console.log("Acesso Parcial")
} else if (nivelAcesso === 1) {
    console.log("Acesso Negado")
} else {
    console.log("Nivel de acesso invalido")
}

// Exercicio 2: Avaliação de notas
let nota = 4

switch (nota) {
    case 10:
        console.log("Nota Maxima")
        break;
    case 8:
    case 9:
        console.log("Muito Bom")
        break;
    case 7:
    case 6:
        console.log("Bom")
        break;
    case 5:
        console.log("Regular")
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Nota insuficiente")
        break;
    default:
        console.log("Nota invalida")
        break;
}

// Exercicio 3: Lista de numeros pares
for (let num = 2; num <= 10; num =  num + 2) {
    console.log(num);
}