function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto('celular', 1500))
console.log(criarProduto('Carro', 48000))