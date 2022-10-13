// Métodos de Array

// O .some verifica se PELO MENOS UM item da array satisfaz a condição (FALSE) - Se no array tiver outro tipo além de número dará true
const array = [1, 2, 3, 4, 5];

const peloMenosUmItemNaoEUmNumero = array.some(item => {
    return typeof item !== 'number';
});

document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

