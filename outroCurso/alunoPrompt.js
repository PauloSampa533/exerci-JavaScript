let readline = require("readline-sync");
let media;
let nome = readline.question("Aluno:");
let nota1 = readline.questionFloat("Digite a Primeira nota: \n");
let nota2 = readline.questionFloat("Digite a Segunda nota: \n");
let nota3 = readline.questionFloat("Digite a Terceira nota: \n");
let nota4 = readline.questionFloat("Digite a Quarta nota: \n");

media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

if(media < 5){
    console.log(`O aluno ${nome} , foi REPROVADO com a média ${media}`);
}else if(media < 7){
    console.log(`O aluno ${nome} , esta de RECUPERAÇÃO com a média ${media}`);
}else if(media >= 7){
    console.log(`O aluno ${nome} , foi APROVADO com a média ${media}`);
}
