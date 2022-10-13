// Promises
// Sempre irá contar com os métodos .then e .catch (Se deu certo ou não)

/*Exemplo 1
const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => { // Retorno uma promessa que pode dar certo ou não
        setTimeout(() => {
            resolve(a + b); // Retorna a soma dos dois números
        }, 2000); // Essa promessa demora 2 segundos pra resolver
    });
}

somaDoisNumeros(1, 3) // Demora 2 segundos para aparecer o resultado da soma (4)
    .then(soma => {
        document.body.innerText = soma
    })
    .catch(err => { // Método que chamo quando dá algum erro
        console.log(err)
    })
*/

/* Exemplo 2
fetch('https://api.github.com/users/diego3g') //A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. 
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
    .finally (() => { // Executa mesmo que de certo ou errado, porém somente depois que ela carrega
        console.log('deu')
    }) 
*/

/* Exemplo 3
async function buscaDadosNoGithub() {
    const response = await fetch('https://api.github.com/users/diego3g');
    const body = await response.json();

    console.log(body);
}

buscaDadosNoGithub();
*/

// Exemplo 4
async function buscaDadosNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();

        return body.name;
    } catch (err) {
        console.log(err);
    } finally {
        console.log('deu')
    }
}

buscaDadosNoGithub().then(name => {
    console.log(name)
});
