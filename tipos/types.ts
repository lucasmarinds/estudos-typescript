function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario não aprovado!"
    }
    return `A Função do usuário é : ${role}`
}

console.log(showUserRole(true));
console.log(showUserRole("ADMIN"));

// 12 - type alias.
// podemos criar uma variavel que vai ser um tipo, resumindo o meu ID é um tipo que aceita number e string.
type ID = number | string;

function showId(id: ID) {
    console.log(`O id é ${id}`)
}

showId(10);
showId("100");