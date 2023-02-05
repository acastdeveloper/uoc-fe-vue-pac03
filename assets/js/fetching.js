export const totalPokes = async () => {
    let countSpecies;
    const url = `https://pokeapi.co/api/v2/pokemon-species/`;
    await fetch(url).then(response => response.json()).then(data => countSpecies = data.count);
    return countSpecies;
};

export const laFetch = async (id) => {
    const individu = {};
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
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
}

export const laFetchInd = async (laId) => {
    console.log(laId);
    return "laFetchInd";
};
