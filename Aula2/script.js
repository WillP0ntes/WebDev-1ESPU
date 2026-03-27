// USO IF ELSE

// if:
let tarefaConcluida = true;

if (tarefaConcluida) {
    console.log("A tarefa está concluída!");
}

//if, else: 
let prioridade = 2; // 1: baixa, 2: média, 3: alta

if (prioridade === 3) {
    console.log("Prioridade Alta");
} else {
    console.log("Prioridade não é alta");
}

//if, else if, else:
if (prioridade === 1) {
    console.log("Prioridade Baixa");
} else if (prioridade === 2) {
    console.log("Prioridade Média");
} else if (prioridade === 3) {
    console.log("Prioridade Alta");
} else {
    console.log("Prioridade desconhecida");
}

// SWITCH CASE

let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.
console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;
    default:
        console.log("Dia inválido");
        break;
}

// LOOPS

// for:
for (let i = 0; i < 5; i++) {
  console.log("Contagem:", i);
}

// while:
let contador = 0;
while (contador < 5) {
     console.log("Contagem:", contador);
      contador++;
}

// do/while
let numero = 5;
do {
     console.log("Número é:", numero);
     numero--;
} while (numero > 0);
