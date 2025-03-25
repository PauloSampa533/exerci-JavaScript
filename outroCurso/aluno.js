let nome = "Paulo Ricardo"
let nota1 = 8;
let nota2 = 6;
let nota3 = 7.5;
let nota4 = 7;
let media;

media = (nota1 + nota2 + nota3 + nota4) / 4

if(media < 5){
    console.log(`O aluno ${nome}, foi reprovado com a média de: ${media}`)
}else if(media < 7){
    console.log(`O aluno ${nome}, esta de recuperação com a média de: ${media}`)
}else if(media >= 7){
    console.log(`O aluno ${nome}, foi aprovado com a media de: ${media}`)
}