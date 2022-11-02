/**
 * O TS faz com que caso a gente tente compilar o código ele vai mostrar as falhas.
 */
// Método de definição de tipo de variavel automatica sem precisar definir -> Inference
let nome = 'Lucas';
// Método de definição de tipo de variavel manualmente - > Annotation
let nome2: string = 'Marin';
console.log(nome, nome2);
//nome = 20;

let isNoob:boolean = true;
console.log(isNoob);

// Igual o JS o TS também só tem number para valor INTEIRO e PONTO FLUTUANTE
// por isso conseguimos fazer de 11 para 11.23 na mesma variavel.
let numero = 11;
let numero2 = 22.50;
console.log(numero, numero2);
numero = 11.23;
