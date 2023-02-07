export const laRandom = (total) => {
    const maxPokes = total; // Número màxim de pokes (1008)
    const matriuIdsPk = [];
    const exemplars = 10;
    let differentIds = 0;

    do {
        matriuIdsPk.push(parseInt(Math.random() * maxPokes));
        let setIdsPk = new Set(matriuIdsPk); //Set per evitar duplicats
        differentIds = setIdsPk.size;
    }

    while (differentIds < exemplars && matriuIdsPk.length < exemplars)
    //Per evitar que accidentalment apareguin 11 he hagut de reforçar la condicional
    return matriuIdsPk;
};
