// Nullish Coalescing Operator (Operador para lidar com valores nulos)

const idade = 0;
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');
//Resultado: 0


/* 
0, '', [], false, undefined, null => falsy (Valores não válidos quando usamos o operador ||)

const idade = 0;
document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado');
Resultado: Não informado
*/