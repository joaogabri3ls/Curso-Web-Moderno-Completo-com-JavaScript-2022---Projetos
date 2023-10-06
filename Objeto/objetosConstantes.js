// Pessoa aponta pra um endereço onde está localizado o objeto, e ai podemos alterar os atributos desse objeto
const pessoa = {nome : 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Nesse caso pessoa aponta pra um outro objeto localizado em outro endereço, oq gera um erro pois é uma constante e sempre apontará para o mesmo endereço
//pessoa = {nome: 'Ana'} 

//Congela o objeto, a partir daqui não conseguimos fazer alterações 
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua 123'
delete pessoa.nome 

console.log(pessoa.nome)
console.log(pessoa)

//Cria uma constante que sempre apontará para o objeto no mesmo endereço
//E já congela o objeto para que ele não sofra alterações
const pessoaConstante = Object.freeze({nome: 'João'})