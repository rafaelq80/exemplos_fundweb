// Cria um array, do tipo number, chamado notas e inicializa
const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

/* Mostra na tela todas as notas adicionadas */
console.table(notas);

/* Adiciona uma nova Nota */
notas.push(4.0);

// Mostra a posição (indice) de uma determinada nota
console.log("\nA posição da nota 5 é: " + notas.indexOf(5));

// Mostra se uma determinada nota existe no array
console.log("\nA nota 5 existe no array? " + notas.includes(5));

// Mostra a nota inserida em uma determinada posição (indice)
console.log("\nNa posição 1 da array, a nota é: " + notas[1]);

// Altera a nota 5.0 para 6.0 e mostra que a alteração foi efetuada
notas[notas.indexOf(5)] = 6.0;

// Apaga a nota 4.0 e mostra que a exclusão foi efetuada.
notas.splice(notas.indexOf(4.0), 1);

// Exibe o tamanho do array (numero de elementos)
console.log("\nO tamanho do array é: " + notas.length);

/* Mostra na tela todas as nota */
console.table(notas);