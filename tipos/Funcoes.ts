/** FUNCOES
 */
// Definindo tipo dos parametros
function soma(numeroUm: number, numeroDois: number){
    return numeroUm + numeroDois;
}
// Definindo tipo do retorno que aceitamos.
function idade(age: number): string{
    if(age > 17){
        // return 20; -- Linha comentada porque mostra erro de compilação PQ o retorno da Function é uma string!
        return 'pode ir trabaia';
    }else{
        return 'vai estudar!';
    }
}

// Funcao Anonima é aquela função que é chamada dentro de outra função ou atributo.
setTimeout(function() {
    const sallary: number = 3000;

    console.log(sallary);
},1000);


// Funcao com parametros opcionais.
function  valuesFromObject(a:number, b:number, c?:number){
    console.log('Valor de A é', a);
    console.log('Valor de B é', b);
    console.log('Valor de C é', c);
    console.log('----------------')
}

valuesFromObject(1,2,3);
// Valor do parametro opcional vai vir como undefined já que ele a variavel existe porém não tem valor.
valuesFromObject(1,2);

// - como validar argumentos opcionais ? 
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return console.log(`Olá ${firstName} ${lastName}`);
    }
    return console.log(`Olá ${firstName}`);
}
advancedGreeting('Lucas');
advancedGreeting('Gabriel', 'Marin');