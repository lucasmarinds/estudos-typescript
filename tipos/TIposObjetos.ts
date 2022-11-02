/**
 * Tipos de Objetos
 */
function passCar(car: {model: string, year: number}){
    console.log("Modelo do carro é"+ car.model);
    console.log("Ano do carro é", car.year);
}

const car = {
    model: 'Onix',
    year: 2013,
    placa: '0000x1'
}

const car2:{model: string, year: number, placa: string} = {
    model: 'Ford Ka',
    year: 2013,
    placa: '0000x3'
}

passCar(car);
