/** Narrowing é quando fazemos validaçoes de tipos e valores etc.. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 01 - type guard sintaxe < typeof variavel === "tipo" >
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar a soma");
    }
}
sum("10.5", "10,5");
sum(10, 25);
// Validação por valor, caso nos passamos alguma variavel com valor ela será true.
function operation(values, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum_1 = values.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === "multiply") {
            var multiply = values.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log("insira uma operação.");
    }
}
operation([1, 2, 3]);
operation([1, 2, 3], "sum");
operation([1, 2, 3], "multiply");
/** Narrowing com instanceOf para validar */
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(nome) {
        return _super.call(this, nome) || this;
    }
    return SuperUser;
}(User));
var Anonimo = /** @class */ (function () {
    function Anonimo() {
    }
    return Anonimo;
}());
var user = new User("teste");
var superUser = new SuperUser("suppppaaausa");
var anonimo = new Anonimo();
function verifyUser(user) {
    if (user instanceof SuperUser) {
        console.log("Ele é um super USSSSER");
    }
    else if (user instanceof User) {
        console.log("Ele é um user");
    }
    else {
        console.log("Ele não é um user");
    }
}
verifyUser(user);
verifyUser(superUser);
verifyUser(anonimo);
// - Operador IN
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog("Spipi");
var mickey = new Dog("Sabbat", "Alemao");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDogDetails(turca);
showDogDetails(mickey);
console.log(turca);
