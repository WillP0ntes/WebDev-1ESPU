// USO DO CONSOLE:

// Métodos básicos
console.log("Mensagem normal");
console.info("Informação");
console.warn("Aviso");
console.error("Erro");

// Tabelas
console.table([
  { id: 1, tarefa: "Estudar JS" },
  { id: 2, tarefa: "Praticar código" }
]);

// Agrupamento
console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

// Medição de tempo
console.time("Timer");
// ...processamento...
console.timeEnd("Timer");

// COMENTARIOS:

// Comentário de linha única

/* Comentário
   de múltiplas linhas */


// VARIAVEIS:

// Com var (escopo de função)
var antigo = "Forma antiga de declarar variáveis";

// Com let (escopo de bloco, pode ser reatribuída)
let userName = "Maria";
userName = "João"; // permitido

// Com const (escopo de bloco, não pode ser reatribuída)
const API_URL = "https://api.example.com";
// API_URL = "..."; // Erro

// TIPO DE ATRIBUIÇÃO DE VARIAVEIS:

let numero = 42;                  
// Number: valores numéricos.

let isCompleted = false;          
// Boolean: verdadeiro ou falso.

let semValor;                     
// Undefined: variável declarada sem valor.

let nulo = null;                  
// Null: ausência intencional de valor.               
// (typeof null retorna "object", comportamento histórico do JS)

let uniqueId = Symbol("id");      
// Symbol: cria um identificador único.

let bigNumero = 999999999999999999999999n; 
// BigInt: para inteiros muito grandes.

// Objeto 
let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};

console.table(task)

// Vetores (Arrays)
let tasks = [
  { id: 1, title: "Tarefa 1", completed: false },
  { id: 2, title: "Tarefa 2", completed: true }
];

// Identificar padrões
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // true

// CONVERÇÃO DE VARIVEIS:

// Para string
let convertido1 = String(42); // "42"
let convertido2 = 42 + "";  // "42"

// Para numero
Number("42"); // 42
parseInt("42.9");  // 42
parseFloat("42.9"); // 42.9

// Para boolean 
Boolean("texto"); // true
Boolean(""); // false

// OPERADORES:

// Operadores aritimeticos
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// Operadores de incremento e decremento 
let contador = 0;
console.log(++contador); // 1 (pré-incremento)
console.log(contador++); // 1 (pós-incremento, agora contador = 2)

// Operação de atribuição 
let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

// Operação de comparação 
console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

// Operadores logicos
console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)