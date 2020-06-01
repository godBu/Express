const fetch = require('node-fetch');

const getCharacterPowerStats = async (number) => {
    const URL = `https://superheroapi.com/api/${process.env.ACCESSTOKEN}/${number}/powerstats`
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
}

module.exports = {
    getCharacterPowerStats
}

