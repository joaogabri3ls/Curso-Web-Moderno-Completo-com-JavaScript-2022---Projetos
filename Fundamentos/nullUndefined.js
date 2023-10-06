let valor //Não inicializada, a variavel foi criado mas não definida
console.log(valor)

valor = null //Ausencia de um valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined, deixa que a linguagem faça isso, optar pelo nulo ao invés
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)