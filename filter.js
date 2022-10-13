// Métodos de Array

// O .filter não altera os valores do array, ele faz apenas a seleção ou a retirada

/* Mostra apenas os números pares do array
const array = [1, 2, 3, 4, 5];

const novoArray = array.filter(item => item % 2 === 0)

document.body.innerText = JSON.stringify(novoArray)
*/

/* Mostra apenas os números ímpares do array
const array = [1, 2, 3, 4, 5];

const novoArray = array.filter(item => item % 2 !== 0)

document.body.innerText = JSON.stringify(novoArray)
*/

// Usando os dois métodos, .map e .filter - Mostra apenas os números ímpares e multiplica esses números ímpares por dez
const array = [1, 2, 3, 4, 5];

const novoArray = array
    .filter(item => item % 2 !== 0)
    .map(item => item * 10)

document.body.innerText = JSON.stringify(novoArray)