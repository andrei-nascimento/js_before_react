// Template Literals

/* Maneira comum de apresentar o valor
const name = 'Andrei'
const message = 'Bem-vindo, ' + name;

document.body.innerText = message
*/

// Uma das maneiras usadas no React para apresentar o valor
const name = 'Andrei'
const message = `Bem-vindo, ${name ?? 'visitante'}`; //Se o name não existir aparecerá escrito 'visitante

document.body.innerText = message