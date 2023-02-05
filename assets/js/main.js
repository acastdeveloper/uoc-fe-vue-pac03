// IMPORTACIONS
import { laRandom } from "./random.js"
import { totalPokes, laFetch } from "./fetching.js";
import { detectCache, clearCache, putCache } from "./cache.js";
import { render, deletRender } from "./render.js";
import { router } from "./routerByHash.js";
import { filtrar } from "./filter.js";

// inicialitzacions i scope global
const total = await totalPokes();
let randIds = []; // Arr Ids aleatoris
const pokesPaquet = []; // Arr d'objectes de 10 pokemons a l'atzar
let conta = 0;



//CREAR MATRIU D'IDS ALEATÒRIA
const randIdsZator = () => {
    randIds = [...laRandom(total)]
}

// CREAR PAQUET DE 10 POKEMONS objectes
const createPokePaquet = async () => {
    if (randIds.length === 0) { randIdsZator(); }
    for (let i = 0; i < randIds.length; i++) {
        pokesPaquet[i] = await laFetch(randIds[i]);
        localStorage.setItem('cachePokes', JSON.stringify(pokesPaquet));
    }
    return pokesPaquet;
}

// RESET
const reset = () => {
    console.clear();
    clearCache();

    //BUIDEM MATRIUS
    randIds.length = 0;
    pokesPaquet.length = 0;
    deletRender();
    main();
}



// DIRECTRIU
const main = () => {
    let watcherInt = setInterval(() => {
        conta++;
        if (detectCache() == false) {
            randIdsZator();
            createPokePaquet();
            putCache(pokesPaquet);
        } else {
            render();
            filtrar();
            clearInterval(watcherInt);
        }
        // console.log(detectCache(), conta);
    }
        , 1000);
};

const dev = () => { // PER FER PROVATURES
    console.log("dev");
}

const auto = (() => {
    main();
    // dev();
})();

// INTERACTIVITAT
// Botó POKE ME!
const pokeme = document.querySelector("#pokeme-button");
pokeme.addEventListener('click', () => {
    reset();
});


//CANVIS DE HASH
window.addEventListener("hashchange", () => {
    router();
}, false);
