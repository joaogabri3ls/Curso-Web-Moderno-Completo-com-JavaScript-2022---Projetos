let a = 3  

global.b = 123  

this.c = 456
this.d = false  
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando variavel sem let ou var
abc = 3 // Não fazer isso!

//module.exports = { e: 456, f: false, g: 'Teste' }

// Entender melhor os runtimes e sempre evitar o escopo global