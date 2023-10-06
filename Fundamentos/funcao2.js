//Armazenando função em vairavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armezando função arrow em variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 3))

//retorno implicito
const subtracao = (a, b) => a-b 
console.log(subtracao(3, 1))

const imprimir2 = a => console.log(a)
imprimir2 ("Legall!!")