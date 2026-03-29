let consumo = [27, 55, 38, 60, 45, 70, 35];

let total = 0;
let diasAltos = 0;

for (let i = 0; i < consumo.length; i++) {

    total += consumo[i];

    if (consumo[i] > 50) {
        diasAltos++;
    }

    if (consumo[i] > 58) {
        console.log("ALERTA CRÍTICO:", consumo[i]);
    }
}

let media = total / consumo.length;

console.log("consumo total:", total);
console.log("dias > 50:", diasAltos);
console.log("media:", media);