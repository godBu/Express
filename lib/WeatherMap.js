const fetch = require('node-fetch');
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.APPID}`;
//const fs = require('fs');
//const APPID = 'ebf52f9e0d4f6e129914eb11e713212d';

const getWeather = async () => {
    let data = await fetch(URL); // promises - accepted, reject, pending
    let jsonObj = await data.json(); // promises
    return jsonObj;
}

/*const anotherFunction = () => {
    console.log('hello')
}*/

module.exports = {
    getWeather
}

//console.log(data);
    //console.log(await data.json());
    //fs.writeFileSync('./data.json', JSON.stringify(jsonObj)); // put quatation marks on data.json objects


//module.exports = getWeather;

/*const main = async() => {
    console.log(await getWeather());
}

main();*/