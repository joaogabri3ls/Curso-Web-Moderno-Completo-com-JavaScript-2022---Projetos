function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // '||' Significa 'OU', ou seja, se o trabalho 1 ou 2 derem 'true', o 'Comprar seorvete vai ser true tbm
    const comprarTv50 = trabalho1 && trabalho2 // '&&' Siginifica 'E', ou seja, só retornara true caso os dois valores sejam true
    //const comprarTv32 = !!(trabalho1 ^ trabalho2 ) btwise xor
    const comprarTv32 = trabalho1 != trabalho2 // trabalho1 é diferente de trabalho 2 
    const manterSaudavel = !comprarSorvete // operador unario 

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))