/* Criar 2 variáveis
    Objeitvo: Trocar o valor das variáveis => a = b e b = a
*/

let a = 94;

let b = 100;

let temp; // Cria-se uma variável auxiliar para guardar um dos valores

temp = a; // temp = 94

a = b; // a = 100

b = temp; // b = temp = 94

console.log("A = " + a);
console.log("B = " + b);