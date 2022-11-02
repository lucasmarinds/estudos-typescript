function reviewUser(review:number|boolean){
    if(typeof review === "number"){
        switch(review){
            case 1:
                console.log("Muito ruim");
                break;
            case 2:
                console.log("Ruim");
                break;
            case 3:
                console.log("Mediano");
                break;
            case 4:
                console.log("Bom");
                break;
            case 5:
                console.log("Muito bom");
                break;
            default:
                console.log("Valor da nota Superior a 5 ou Inferior a 1 não serão validas");
        }
    } else if (typeof review === "boolean" && review === false) {
        console.log("Não foi deixado nenhum review.");
    } else {
        console.log("Type review not accepted");
    }
}

reviewUser(5);
reviewUser(4);
reviewUser(3);
reviewUser(2);
reviewUser(1);
reviewUser(true);
reviewUser(false);