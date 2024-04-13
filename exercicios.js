// Exercicíos de Javascript //                                                                                                 /* by Xande :3 */

/* Exexcicício 1 : Olá mundo!, crie um script que imprima "Olá mundo!" no console. */

console.log("Olá mundo!")

/* Exercicío 2 : Dado o valor de uma string "1234", converta-o em número e exiba o tipo de variável no console */

const numeroParaConverter = "1234";

const numeroConvertido = Number(numeroParaConverter);

console.log(numeroConvertido);
console.log(typeof numeroConvertido);

/* Exercicío 3 : Dado uma string "Javascript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase*/

const palavra = "Javascript é incrível";
const numeroDeCaracteres = palavra.length;
const numeroDePalavras = palavra.split(" ").length;

console.log("A quantidade de letras é : " + numeroDeCaracteres);
console.log("A quantidade de palavras é : " + numeroDePalavras);

/* Exercicío 4 : Crie um array com 5 nomes. Use um loop for para imprimir cada nome no console. */

const nomes = ["Lana del Rey", "Chimbinha", "Joelma", "Washington Brasileiro", "Silvano Sales"]

for(let i = 0; i < nomes.length; i++){
    
    console.log(nomes[i]);
}

/* Exercicío 5: Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. */

/* Exercício 6: Crie uma função que some dois números.*/

/* Exercício 7: Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop. */

/* Exercício 8: Crie uma função que some dois números.*/



/* Exercício 9: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.*/

/* Exercício 10: Calcular a média de todos os números de um array. */
