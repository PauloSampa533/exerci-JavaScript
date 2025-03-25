let nota1 = 8.0;
let nota2 = 6.0;
let nota3 = 7.5;
let nota4 = 7.0;
let media;

media = (nota1 + nota2 + nota3 + nota4) / 4

if(media < 5.0){
    console.log(`O aluno foi reprovado com a média de: ${media}`)
}else if(media < 7.0){
    console.log(`O aluno esta de recuperação com a média de: ${media}`)
}else if(media >= 7.0){
    console.log(`O aluno foi aprovado com a media de: ${media}`)
}