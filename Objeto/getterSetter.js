const sequencia = {
    _valor: 1, //O '_' é uma convenção entre os programadores indicando que a variavel é pretendida ser acessada apenas dentro do objeto mas não é uma regra
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
