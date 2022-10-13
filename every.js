// Métodos de Array

// O .every verifica se TODOS os itens da array são números (TRUE) - Se no array tiver outro tipo além de número dará false
const array = [1, 2, 3, 4, 5];

const todosItensSaoNumeros = array.every(item => {
    return typeof item === 'number';
});

document.body.innerText = JSON.stringify(todosItensSaoNumeros)

