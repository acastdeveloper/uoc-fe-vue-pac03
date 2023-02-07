// PRIMERA EXTRACCIÓ D'INFORMACIÓ
const url = `https://pokeapi.co/api/v2/pokemon-species/`;

// Obtenció del número d'especies
export let countSpecies;

await fetch(url).then(response => response.json()).then(data => countSpecies = data.count);

export const totalSpecs = () => { return countSpecies; };


const getOneFetch = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const individu = {};
    await fetch(url).then(response => response.json()).then(data => {
        individu.id = id;
        individu.nom = data.name;
        individu.frontal = data.sprites.front_default;
        individu.darrera = data.sprites.back_default;
        individu.tipus = data.types;
        individu.atac = data.stats[1].base_stat;
        individu.defensa = data.stats[2].base_stat;
    });
    return individu;
};

export const getFetch = async (M) => {
    const pokeM = [];
    for (let i = 0; i < 10; i++) {
        pokeM.push(await getOneFetch(M[i]));
    }
    return pokeM;
};


const main = async () => {
    console.log("main des de fetching.js...");
};

const auto = (() => {
    main();
})();
