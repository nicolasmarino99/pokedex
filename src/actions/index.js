export const savePokemon = pokemon => { 
    console.log(pokemon, 'savpokemon')
    return ({
    type: 'SAVE_POKEMON',
    pokemon,
})};