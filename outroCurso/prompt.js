let readline = require("readline-sync") 
let nome = readline.question("Qual seu nome?\n")
let idade = readline.questionFloat("Qual a sua idade ? \n")

console.log(`O nome informado foi ${nome}`);
console.log(`Idade informadoa foi ${idade}`);