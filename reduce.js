// Métodos de Array

// Reduce
const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item + ' --- '
    return acc + item // Acumulator
}, 0) // Ponto inicial

document.body.innerText = JSON.stringify(soma)