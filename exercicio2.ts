const numero:number = 200;
const numeroString = numero.toString();
// Template String, podemos fazer até expressoes basicas ali como a + b por exemplo.
const fraseComMod: string = `O numero passado para string é o ${numeroString}`;

console.log('O numero passado para string é o ' + numeroString);
console.log(fraseComMod);

function isString(texto:string){
    console.log(true)
}

isString(numeroString);