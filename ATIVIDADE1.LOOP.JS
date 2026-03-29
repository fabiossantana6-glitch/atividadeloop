let vendas = [65,103,85,75,98,36,55];

let total = 0;
let dias = 0;
let maior = vendas[0];
let media = 0;

for (let i = 0; i < vendas.length; i++) {
    total += vendas[i];

    if (vendas[i] > 100) {
        dias++;
    }

    if (vendas[i] > maior) {
        maior = vendas[i];
    }
}

media = total / vendas.length;

console.log("Total:", total);
console.log("Média:", media);
console.log("Maior:", maior);
console.log("Dias > 100:", dias);