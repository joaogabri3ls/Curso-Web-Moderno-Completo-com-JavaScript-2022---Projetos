const notas = [7.1, 8.7, 9.1, 6.9, 5.2]

for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome:'Júlia',
    idade:18,
    peso:60
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}.`)
}