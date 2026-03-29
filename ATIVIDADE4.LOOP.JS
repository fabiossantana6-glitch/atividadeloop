
let notas = [8.5, 6.0, 9.0, 4.5, 7.0, 5.5, 10.0];

let aprovados = 0;
let reprovados = 0;
let soma = 0;
let maiornota = notas[0];

for (let i = 0; i < notas.length; i++) {

    soma += notas[i];

    if (notas[i] >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }

    if (notas[i] > maiornota) {
        maiornota = notas[i];
    }
}

let media = soma / notas.length;

console.log("alunos aprovados:", aprovados);
console.log("alunos reprovados:", reprovados);
console.log("Média de notas:", media);
console.log("maior nota:", maiornota);