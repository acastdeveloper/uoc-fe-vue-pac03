import "./theme.js";
import { getFetch, totalSpecs } from "./fetching.js";
import { randM } from "./random.js";
import { setLocalPokes, getLocalPokes, detectLocalPokes, clearPokes } from "./db.js";
import { render, deletRender } from "./render.js";
import { } from "./filter.js";

//reset
const reset = () => {
    console.clear();
    clearPokes();
    console.log("Des de reset");
    deletRender();
    main();
};

// Generació de cache local de Pokemons a l'atzar
const getPokes = async () => {
    // Matriu que obtenim de l'api de pokemons a l'atzar
    let pokesM = await getFetch(randM(totalSpecs()));

    // Cas que encara no s'hagi guardat a la local storage del navegador ...
    while (!detectLocalPokes()) {
        // ...establim la caché de pokemons
        setLocalPokes(pokesM);
    }
    //retornem la caché de pokemons
    return getLocalPokes();
};

// Principal
const main = async () => {
    render(await getPokes());
}

// Equivalent a onload
const auto = (() => {
    main();
})();

//INTERACTIVITAT
document.querySelector("#pokeme").addEventListener("click", reset);
