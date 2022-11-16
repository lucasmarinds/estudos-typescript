/** Quando usamos interface imagine que interface no TS */
interface Point{
    x: number;
    y: number;
    z: number; 
}



function showCoords(obj: Point){
    return obj.x+" "+obj.y+" "+obj.z+" ";
}

const coordObject:Point = {
    x: 10,
    y: 11,
    z: 12
}

console.log(showCoords(coordObject));

/** Veja que a passada de um objeto por parametro ficou mais limpo do que fazermos
 * function showCoords(obj: {x:number, y:number, z:number}){}
 */

/** Usamos o type quando queremos um object que nao seja possivel alterar seu tipo
 * e a interface quando sabemos que iremos alterar a estrutura futuramente.
*/