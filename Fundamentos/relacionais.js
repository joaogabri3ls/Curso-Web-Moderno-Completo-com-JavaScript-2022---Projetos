console.log('1)', '1' == 1) // '1' é igual a 1? Sim pois o simbolo de '==' analiza apenas os valores
console.log('2)', '1' === 1 ) // '1' é extritamente igual a 1? Não, pois '1' é uma string e 1 não. 
console.log('3)', 2 === 1 ) // 2 é extritamente igaul a 1? Não, embora os dois sejam 'numbers' o valor 2 é diferente de 1 

console.log('4)', '3' != 3) // '3' é diferente de 3? Não, os valores são os mesmos 
console.log('5)', '3' !== 3) // '3' é extritamente diferente de 3? Sim, pois um é string e o outro não

// Aqui é simples maior, menor, maior igaul, menor igual...
console.log('6)', 3 < 2)
console.log('7)', 3 > 2)
console.log('8)', 3 <= 2)
console.log('9)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('10)', d1 === d2)
console.log('11)', d1 == d2)
console.log('12)', d1.getTime() === d2)

console.log('13)', undefined == null)
console.log('14)', undefined === null)