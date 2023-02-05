import { getCache } from "./cache.js";
let criterium = "";
const pokeM = getCache();
let pokeMF = []; // Matriu d'elements filtrats
let pokeMId = []; //Matriu de les Ids dels elements Filtrats
let pokeTotesId = []; //Matriu de totes les ids

const iterar = (c) => {
    pokeMF = pokeM.filter(element => element.nom.includes(c.toLowerCase()));
    return pokeMF;
}

const getPokeId = () => {
    pokeMId = pokeMF.map(element => element.id);
    return pokeMId;
};

const ocultarTotesCards = () => {
    pokeTotesId.forEach(element => { document.querySelector(`section[data-id="#${element}"]`).style.display = "none" });
};

const mostrarTotesCards = () => {
    pokeTotesId.forEach(element => { document.querySelector(`section[data-id="#${element}"]`).style.display = "flex" });
};

const mostrarNomesFiltrades = () => {
    pokeMId.forEach(element => { document.querySelector(`section[data-id="#${element}"]`).style.display = "flex" });
}



export const filtrar = () => {

};


//INTERACTIVITAT
document.querySelector("#filtradora").addEventListener("keyup", () => {
    criterium = document.querySelector("#filtradora").value;
    console.log("FILTRE: " + criterium);
    iterar(criterium);
    console.log("ITERAR: ", iterar(criterium));
    console.log("pokeId", getPokeId());

    pokeTotesId = pokeM.map(element => element.id);

    if (criterium.length > 0) {
        ocultarTotesCards();
        mostrarNomesFiltrades();
    } else {
        mostrarTotesCards();
    }


});
