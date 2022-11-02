/**
 * Union Type nada mais é que fazer com que 
 * o parametro da funcao aceite mais de um tipo
 * igual exemplo abaixo.
 */
function showBalance(balance: string | number){
    if(typeof balance === 'boolean'){
        return console.log(`Saldo de ${balance}`)
    }
    return console.log(`Saldo dee ${balance}`);
}

showBalance(100);
showBalance('2000');