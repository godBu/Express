const fetch = require('node-fetch');

const getPokemon = async (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
};

const sortData = async (id) => {
	let data = await getPokemon(id);
	let response = {
        name: data.forms[0].name,
	}
	return response;
}

module.exports = sortData



//pkill -9 node