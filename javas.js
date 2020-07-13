var teste = "Olá, mundo!";
var teste1 = 10;
console.log(teste, teste1);

var vetor = [1, 2, 3, 4];
var soma = (valorAnterior, valorAtual) => valorAnterior + valorAtual;
var somaVetor = vetor.reduce(soma, 0);
console.log("soma", somaVetor);
