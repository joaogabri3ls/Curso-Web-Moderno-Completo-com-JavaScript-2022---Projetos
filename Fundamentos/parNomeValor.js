// par Nome/Valor
const saudacao = 'Olá' //Contexto léxico 1 

function exec() {
    const saudacao = 'Oiiii' //Contexto léxico 2 
    return saudacao
}

//Objetos são grupos aninhados de par Nome/Valor
const cliente = {
    nome: 'Pedro',
    idade: 18,
    peso: 83,
    endereço: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
