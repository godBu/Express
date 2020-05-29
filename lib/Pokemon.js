const fetch = require('node-fetch');
const URL = `https://pokeapi.co/api/v2/pokemon/`

const getPokemon = async () => {
    let data = await fetch(URL + `mewtwo`);
    let jsonObj = await data.json();
    return jsonObj;
}

module.exports = {
    getPokemon
}