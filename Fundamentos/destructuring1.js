 //nono recurso do ES2015

 const pessoa = {
    nome: 'Ana Júlia',
    idade: 16,
    endereco: {
        logradouro: 'Meu coração',
        numero: 20
    }
 }

 const {nome, idade} = pessoa
 console.log(nome, idade)

 const {nome: n, idade: i} = pessoa
 console.log(n, i)

 const {sobrenome, bemHumorada = true} = pessoa
 console.log(sobrenome, bemHumorada)

 const {endereco: {logradouro, numero, cep}} = pessoa
 console.log(logradouro, numero, cep)

 const {conta: {ag, num}} = pessoa
 console.log(ag, num)