let temperatura = [97, 90, 93, 40, 87, 78];

let soma = 0;
let media = 0;
let padrao = 0;
let maior90 = 0;

for (let i = 0; i < temperatura.length; i++) {

    soma += temperatura[i];

    if (temperatura[i] > 80) {
        padrao++;
    }

    if (temperatura[i] > 90) {
        console.log("ALERTA CRÍTICO:", temperatura[i]);
    }

    if (temperatura[i] > maior90) {
        maior90 = temperatura[i];
    }
}

media = soma / temperatura.length;

console.log("Média da temperatura:", media);
console.log("Temperaturas abaixo de 80:", padrao);
