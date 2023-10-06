const escola = "Cod3r"

console.log(escola.charAt(4)) //Pegar um determinado caractere dentro da string, Começando a contagem a partir do 0, no caso "0 = C"
console.log(escola.charAt(5)) //Aqui o JS não apresentará erra, porém o espaço ficará vazio
console.log(escola.charCodeAt(3)) //Pegar o código de um determinado caractere
console.log(escola.indexOf("3")) //pegar o indice de um determinado caractere

console.log(escola.substring(1)) //O programa escreve a partir do caractere que voce seleciona
console.log(escola.substring(0, 3)) //O programa escreve a partir do caractere que voce escolhe e acaba na segunda especificação

console.log("Escola ".concat(escola.concat("!"))) //Faz a função de concatenação, porém é possivel usar o "+" no caso de String
console.log("Escola "+ escola + "!") // Exemplo com o "+"
console.log(escola.replace(3, "e")) //Troca o caractere "3" por "e"  

console.log('Ana, Maria, Pedro'.split(",")) //Quebrar a string em uma Array