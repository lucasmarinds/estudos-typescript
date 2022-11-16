// 1 - tipo de objeto para funcao com interface

interface Product{
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetailTeste(product: Product){
    console.log(`Nome do produto é ${product.name}, e seu preco é R$${product.price}`);
    if(product.isAvailable){
        console.log("O Produto está disponivel.");
    } else {
        console.log("Produto indisponivel!");
    }
}

const shirt:Product = {
    name: "Camisola",
    price: 19.99,
    isAvailable: false
}

showProductDetailTeste(shirt);

// 2 - interface com tipo opcional

interface User{
    name: string,
    role?: string
}

function showDetailUser(user: User){
    console.log(`Bem vindo ${user.name}`);
    if(user.role){
        console.log(`Cargo é ${user.role}`);
    }
}

const U1: User = {name: "Marin"}
const U2: User = {name: "Leafar", role: "Tester"}

// propriedades readOnly, todo atributo que for readOnly apenas pode ser atributo na hora da instancia do objeto.
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {brand: "VW", wheels: 4}
console.log(fusca);

// Intersection Types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    type: "Pistol",
    caliber: 0.40,
    name: "Arnold"
}

console.log(arnold);

// Tuplas são tipos de array que definimos tamanho e tipo para o array, abaixo definimos que o array terá 5 dados e são do tipo number
type fiveNumbers = [number,number,number,number,number]
const arrNumber: fiveNumbers = [1,2,3,4,5]
type nameAndAge = [string,number];
const lucas = ["Lucas",26];
console.log(lucas[0]);

// Tuplas with readOnly
function showNumbers(numbers: readonly[number,number]):void{
    // numbers[1] = 3;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([10,20]);