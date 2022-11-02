/**
 * o tipo any significa que podemos colocar
 * qualquer tipo de dado dentro do nosso array
 * indo contra a logica do typescript que nasceu
 * para deixar o JS de forma mais tipada.
 */
const naoHomogeneio: Array<any> = [1,'teste',true];
console.log(naoHomogeneio);