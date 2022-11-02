function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return "A Fun\u00E7\u00E3o do usu\u00E1rio \u00E9 : ".concat(role);
}
console.log(showUserRole(true));
console.log(showUserRole("ADMIN"));
function showId(id) {
    console.log("O id \u00E9 ".concat(id));
}
showId(10);
showId("100");
