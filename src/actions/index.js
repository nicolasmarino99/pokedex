export const savePokemon = pokemon => ({
    type: 'SAVE_POKEMON',
    pokemon,
});

export const savePokemonsList = pokemonsList => { 
    console.log(pokemonsList, 'savelist')
    return ({
    type: 'SAVE_POKEMONS_LIST',
    pokemonsList,
})};