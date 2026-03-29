
let estoque = [10, 0, 3, 7, 0, 2, 15];

let semestoque = 0;
let baixoEstoque = 0;
let total = 0;

for (let i = 0; i < estoque.length; i++) {

    total += estoque[i];

    if (estoque[i] === 0) {
        semestoque++;
    }

    if (estoque[i] < 5) {
        baixoEstoque++;
    }
}

console.log("Sem estoque:", semestoque);
console.log("Baixo estoque (<5):", baixoEstoque);
console.log("Estoque total:", total);