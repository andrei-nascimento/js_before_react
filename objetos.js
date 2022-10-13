// Objetos

const user = {
    name: 'Andrei',
    age: 23,
    address: {
        street: 'Rua teste',
        number: 300,
    },
};


// Método 'in' - Verifica se existe determinada informação dentro do objeto 
    document.body.innerText = ('name' in user) // true
    document.body.innerText = ('nickname' in user) // false


// Obter informações expefícicas de um objeto:

// Método 'keys' - Retorna um vetor com todas as chaves criadas
  document.body.innerText = Object.keys(user) // name, age, address

// Método 'values' - Retorna todos os valores do objeto
  document.body.innerText = Object.values(user) // Andrei, 23, [object Object]

// Método 'values' com JSON.stringify - Mostra as estruturas de dados mais complexas
document.body.innerText = JSON.stringify(Object.values(user)) 

// Método 'entries' com JSON.stringify - Retorna os dados num vetor com vários vetores dentro
document.body.innerText = JSON.stringify(Object.entries(user)) 


// Desestruturação (Conseguir remover parte do objeto para uma variável a parte)

/* Forma Comum
const address = user.address
document.body.innerText = JSON.stringify(address)  
*/

/* Com Desestruturação
const { address } = user
document.body.innerText = JSON.stringify(address) 
*/

/* Utilizando Desestruturação e Incluindo novo valor no objeto
const { address, age, nickname = 'Sangue Truta' } = user 
document.body.innerText = JSON.stringify({ address, age, nickname }) 
*/


// Desestruturação em Funções

/*Forma Comum
function mostraIdade(user) {
    return user.age;
}

document.body.innerText = mostraIdade(user)
*/

// Com Desestruturação
/*
function mostraIdade({ age }) {
    return age;
}

document.body.innerText = mostraIdade(user)
*/


// Rest Operator 

/* --- Pega todas as infos do objeto com '...' menos no caso, 'name'---
const { name, ...rest } = user;
document.body.innerText = JSON.stringify(rest)
*/

/* --- Pega todas as infos do objeto com '...' menos no caso, 'name' e 'age' ---
const { name, age, ...rest } = user;
document.body.innerText = JSON.stringify(rest)
*/


/* Forma Comum
const { name, age, ...rest } = user;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const first = array[0];

document.body.innerText = JSON.stringify(first) // Resultado: 1
*/

/* Com Desestruturação utilizando array
const { name, age, ...rest } = user;

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second] = array;

document.body.innerText = JSON.stringify({first, second}) // 1, 2
*/

/* Com Desestruturação utilizando array e Rest Operator
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, ...rest] = array;

document.body.innerText = JSON.stringify({first, second, rest}) // Mostra o restante
*/

/* Outro exemplo
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, , third, ...rest] = array; //Pulo o segundo valor, não mostro

document.body.innerText = JSON.stringify({first, third, rest}) 
*/


// Short Syntax
/*
const nome = 'Andrei';
const idade = 23;

const usuario = {
    nome,
    idade,
};

document.body.innerText = JSON.stringify(usuario)
*/

