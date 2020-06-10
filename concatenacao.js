/*
 nome: caractere
 numero: real
inicio
// Seção de Comandos 

escreva("Digite o nome: ")
leia(nome)
escreva("Digite o número: ")
leia(numero)

      escreva(nome, " : ", numero, 15)
*/
var nome, numero;

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu numero")

document.getElementById("paragrafo").innerText = nome + " : " + numero