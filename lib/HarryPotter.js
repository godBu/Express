const fetch = require('node-fetch');
const URL = `https://www.potterapi.com/v1/sortingHat`;

const getSortingHat = async () => { 
    let data = await fetch(URL);
    let jsonObj = await data.json(); //returns in json form 
    return jsonObj;
}

module.exports = {
    getSortingHat
}