/** Narrowing é quando fazemos validaçoes de tipos e valores etc.. */

// 01 - type guard sintaxe < typeof variavel === "tipo" >
function sum(a: string | number, b: string | number){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b);
    } else {
        console.log("Impossivel realizar a soma");
    }

}
sum("10.5","10,5");
sum(10, 25);

// Validação por valor, caso nos passamos alguma variavel com valor ela será true.

function operation(values:number[], operation?: string){
    if(operation){
        if(operation === "sum"){
            const sum = values.reduce((i,total) => i + total);
            console.log(sum);
        } else if(operation === "multiply"){
            const multiply = values.reduce((i,total) => i * total);
            console.log(multiply);
        }
    } else {
        console.log("insira uma operação.");
    }
}

operation([1,2,3]);
operation([1,2,3], "sum");
operation([1,2,3], "multiply");

/** Narrowing com instanceOf para validar */
class User{
    name
    constructor(name:string){
        this.name = name
    }
}

class SuperUser extends User{
    constructor(nome:string){
        super(nome);
    }
}

class Anonimo {
}

const user = new User("teste");
const superUser = new SuperUser("suppppaaausa");
const anonimo = new Anonimo();

function verifyUser(user:object){
    if(user instanceof SuperUser){
        console.log("Ele é um super USSSSER");
    }else if(user instanceof User){
        console.log("Ele é um user");
    }
    else{
        console.log("Ele não é um user");
    }
}

verifyUser(user);
verifyUser(superUser);
verifyUser(anonimo);

// - Operador IN

class Dog{
    name;
    breed;
    constructor(name:string, breed?:string){
        this.name = name;
        if(breed){
            this.breed = breed;
        }
    }
}

const turca = new Dog("Spipi");
const mickey = new Dog("Sabbat", "Alemao");

function showDogDetails(dog:Dog){

    if("breed" in dog){
        console.log(`O cachorro é da raça ${dog.breed}`);
    } else {
        console.log("O cachorro é um SRD");
    }
}

showDogDetails(turca);
showDogDetails(mickey);
console.log(turca);

console.log("teste");