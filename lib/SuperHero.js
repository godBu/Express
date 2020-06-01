const fetch = require('node-fetch');
const URL = `https://superheroapi.com/api/${process.env.ACCESSTOKEN}/3/powerstats`

const getCharacterPowerStats = async () => {
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
}

module.exports = {
    getCharacterPowerStats
}