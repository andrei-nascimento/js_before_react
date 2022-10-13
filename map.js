// Métodos de Array

const array = [1, 2, 3, 4, 5];

/* Percorrendo um array
for(const i of array) {
    document.body.innerText += i;
}
*/

/* Percorrendo um array (Não recomendado)
array.forEach(item => {
    document.body.innerText += item;
})
*/


/*Com .map é possível percorrer o array e ainda dar um retorno. Ele sempre retorna um vetor com o mesmo tamanho do array original

//Exemplo 1 - Multiplicando os itens por dois
const novoArray = array.map(item => {
    return item * 2;
})

document.body.innerText = JSON.stringify(novoArray)
*/

//Exemplo 2 - Multiplicando os itens pares por dez
const novoArray = array.map(item => {
    if(item % 2 === 0) {
        return item * 10;
    }
    return item;
})

document.body.innerText = JSON.stringify(novoArray)