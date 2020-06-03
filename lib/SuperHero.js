const fetch = require('node-fetch');

const getCharacter = async (number) => {
    const URL = `https://superheroapi.com/api/${process.env.ACCESSTOKEN}/${number}/powerstats`;
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
};

const sortData = async (number) => {
    let data = await getCharacter(number);
    let response = {
        name: data.name,
        intelligence: data.intelligence
    }
    return response;
}

module.exports = sortData

