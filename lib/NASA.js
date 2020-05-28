const fetch = require('node-fetch');
const URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`

const getNASAData = async () => {
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
}

module.exports = {
    getNASAData
}