// Array original do Fibonacci
const originalFibonnacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

// Valor escolhido para começar o Fibonacci customizado (junto com o 0)
const inputValue = 4;

// Array do Fibonacci Customizado
let customFibonacci = [0, inputValue];

// Função que cria a sequencia de fibonacci customizado
function fibonacci() {
  for (let i = 0; i < 10; i++) {
    customFibonacci.push(
      customFibonacci[customFibonacci.length - 1] +
        customFibonacci[customFibonacci.length - 2]
    );
  }
}

// Função que checa se o número escolhido pertence à sequência original de Fibonacci
function checkNumberInOriginalFibonacci() {
  const find = originalFibonnacci.indexOf(inputValue);
  return find !== -1;
}

// Chamada da função para criar a sequencia fibonacci
fibonacci();

// Console.log para imprimir a sequencia de fibonacci a partir do número inputado e se o valor inputado faz parte da sequência fibonacci original
console.log({
  myCustomFibonacci: customFibonacci,
  isEntryInFibonnaci: checkNumberInOriginalFibonacci(),
});
