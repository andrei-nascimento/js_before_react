// Métodos de Array

/* O .find encontra o PRIMEIRO item que satisfaça a condição. No caso, um item par (2). Se não existir ele retorna undefined.
const array = [1, 2, 3, 4, 5];

const par = array.find(item => item % 2 === 0);

document.body.innerText = JSON.stringify(par)
*/

// O .findIndex faz a mesma coisa que o find, porém, ao invés de retornar o primeiro valor do item que ele encontrou, ele retorna o índice daquele valor no array (1)
const array = [1, 2, 3, 4, 5];

const par = array.findIndex(item => item % 2 === 0);

document.body.innerText = JSON.stringify(par)