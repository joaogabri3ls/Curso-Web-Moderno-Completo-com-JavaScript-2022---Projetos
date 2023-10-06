const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'Bmw',
    valor:120000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua A',
            numero: 123
        }
    },
    condutores: [{
        nome: 'João',
        idade: 18
    },  {
        nome: 'Maria',
        idade: 21
    }],
    calcularValorSeguro: function(){

    }
}

carro.proprietario.endereco.numero = 321
carro['proprietario']['endereco']['logradouro'] = 'Rua B'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) //O codigo da erro pois deletamos os 'condutores' e estamos tentando acessar os atributos desse objeto que ficou nulo