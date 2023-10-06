const soma = function (x, y) {
    return x + y
}

const imprimirResulatdo = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResulatdo(3, 4)
imprimirResulatdo(3, 4, soma)
imprimirResulatdo(3, 4, function (x, y) {
    return x - y
})
imprimirResulatdo(3, 4, (x,y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()