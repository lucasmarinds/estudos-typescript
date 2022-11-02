// - Funcao sem Retorno
function apresentacao(nome:string):void{
    console.log(`Funcao sem Retorno! ou seja! void! ${apresentacao}`);
}

// 2 - callback com argumento
function apresentacaoDois(name:string):string{
    return `Ola ${name}`;
}

function preApresentacao(f: (name:string) => string, userName:string){
    console.log("Preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}

preApresentacao(apresentacaoDois,"Marin");

// - generic function passamos o <T> no nome da funcao para no parametro dizer
// que ele também é generico passando T ou a letra que você definir, mas ele seria
// generico, lembra o any por não ser um valor certo e sim qualquer coisa.
function generic<T>(arr:T[]): T{
    return arr[0];
}

function mergeObjects<U,BASD>(obj: BASD, obj2: U){
    return {
        ...obj,
        ...obj2
    }
}

const objetoNovo = mergeObjects({name: "Marin", age: 26},{sex: "M"});
console.log(objetoNovo);

// - constraints em metodos generic, isso limita um pouco os tipos que vao ser aceitos.
function biggestNumber<T extends string | number>(a: T, b: T):T{
    let biggest: T;
    if(+a > +b){
        biggest = a
    } else{
        biggest = b
    }
    return biggest
}

// especificando argumentos.
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}
console.log(mergeArrays<string | number>([1,2,3],["L","U","C"]));

// parametros opcional.
function modernGreeting(name:string, lastname?:string):void{
    if(lastname){
        console.log(`Olá ${name} ${lastname}`);
    }else{
        console.log(`Olá ${name}`);
    }
}

modernGreeting("Lucas");
modernGreeting("Pablo","Malheiros");

// parametros default.
function greetingDefault(name:string = "Lucas", lastname:string = "Marin"):void{
    if(lastname){
        console.log(`Olá ${name} ${lastname}`);
    }else{
        console.log(`Olá ${name}`);
    }
}
greetingDefault();
greetingDefault("Rafael","Salame");

// - Tipo Unknown -> quando o argumento passado for um objeto ou um array, é necessário uma validação antes.
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[1]);
    } else {
        console.log(x);
    }
}
doSomething([1,2,3,4]);
doSomething(1);

// Tipo never -> normalmente usado para funções que não tem retorno E tem chance de lançar um Error.
function showErrorMessage(msg: string): never {
    throw new Error(msg);
}
// showErrorMessage("Erro precheca");

// REST OPERATOR o Rest é os "..." após o nome da variavel e o tipo é no que o parametro vai se transformar
// nesse caso abaixo todos numeros no argumento vão virar uma array do tipo number.
function sumAll(...n: number[]) {
    return n.reduce((i,total) => i + total)
}
console.log(sumAll(1,2,3,4,5));

// Destructuring como param > é necessário o nome dos parametros iguais ao do nome do parametro igual do objeto
// e SE quiser dar um novo nome para o atributo do objeto use o ":" na frente do nome do param.
 function showProductDetail({name: nomeProduto, price}: {name: string, price: number}): string{
    return `O nome do produto é ${nomeProduto}, e seu preco é R$${price}`    
 }

 const shirt = {name: "camisa V", price: 40.51};

 console.log(showProductDetail(shirt));