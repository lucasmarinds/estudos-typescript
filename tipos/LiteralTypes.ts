/** O Literal Type é muito usado com Union Type porque podemos
 * validações até com tipos primitos por exemplo o de baixo.
 */
function showDirection(direcao: "left" | "right" | "up"){
    console.log(`A direção escolhida é ${direcao}`);
}
showDirection("up");
// Veja que ele não aceita porque utilizamos do Literal Type junto ao Union, LITERAL TYPE é quando definimos o tipo de uma variavel sendo primitivo tipo < let texto: "text" > 
showDirection("zapzap2");
