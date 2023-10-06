const pessoa = {
    nome: 'Rebeca',
    idede: 2,
    peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable: false,
    value: '01/01/2021'
})

pessoa.dataNascimento = '01/01/1019'
console.log(pessoa.dataNascimento)
console.log(pessoa)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1} //Objeto de destino, onde os outros objetos serão atribuidos
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) //neste caso por se repetir a propriedade a que valerá sera a de 'o2' pois está em último na fila

Object.freeze(obj)
obj.c = 1234
console.log(obj)