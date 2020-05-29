const fetch = require('node-fetch');
const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
const URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-03-23&end_date=2020-03-30&api_key=${process.env.API_KEY}`;

const getNASAPhotoData = async () => {
    let data = await fetch(URL);
    let jsonObj = await data.json();
    return jsonObj;
}

const getNASAAsteroidData = async () => {
    let data = await fetch(URI);
    let jsonObj = await data.json();
    return jsonObj;
}

module.exports = {
    getNASAPhotoData,
    getNASAAsteroidData
}


