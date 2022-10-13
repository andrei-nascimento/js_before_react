// Optional Chaining

// Intro
const user = {
    name: 'Andrei',
    age: 23,
    address: {
        street: 'Rua teste',
        number: 300,
        zip: {
            code: '89160000', 
            city: 'São Paulo'
        }
    },
};

// document.body.innerText = user.address.street // Rua teste

// document.body.innerText = user.address?.zip.code ?? 'Não informado'; // Não informado

document.body.innerText = user.address?.zip?.code ?? 'Não informado'; // 89160000

// O '?' é colocado antes do ponto de acesso '.' em cada propriedade que pode não existir. No caso, testando e apresentando se foi informado ou não. Se não existir ele não vai tentar acessar as subpastas