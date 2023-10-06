const [a] = [10] // a esquerda do '=' temos o operador destructuring, a direita temos uma array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 9, 8, 7] 
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)