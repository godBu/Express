const express = require('express'); //npm i express
const handleBars = require('express-handlebars'); //npm i express-handlebars // https://handlebarsjs.com
const path = require('path'); //built-in module like fs
const app = express(); // initialising the express function and its features - https://npmjs.com/package/express
require('dotenv').config();

const openWeatherMap = require('./lib/WeatherMap') // multiple imports
const openHarryPotter = require('./lib/HarryPotter')
const openNASA = require('./lib/NASA')
const openPokemon = require('./lib/Pokemon')
const openSuperHero = require('./lib/SuperHero')

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', handleBars({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs')

app.get('/', async (req, res) => {
    let weatherData = await openWeatherMap.getWeather();
    console.log(weatherData);
    let temp = weatherData.main.temp;
    let name = weatherData.name;
    let country = weatherData.sys.country;
    let main = weatherData.weather[0].main; //weather is an array
    let description = weatherData.weather[0].description; //weather is an array
    let longitude = weatherData.coord.lon;
    let latitude = weatherData.coord.lat;
    let base = weatherData.base;
    let clouds = weatherData.clouds.all;
    //res.send(weatherData);
    //let data = await openWeatherMap.anotherFunction();
    //console.log(data);
    res.render('index', { temp, name, country, main, description, longitude, latitude, base, clouds })
});

app.get('/harrypotter', async (req, res) => {
    let hatData = await openHarryPotter.getSortingHat();
    console.log(hatData);
    res.render('harrypotter', { hatData })
});

app.get('/nasa', async (req, res) => {
    let photoData = await openNASA.getNASAPhotoData();
    console.log(photoData);
    let copyright = photoData.copyright;
    let date = photoData.date;
    res.render('nasa', { copyright, date });
    /*boolean: true*/
});

app.get('/nasaasteroid', async (req, res) => {
    let asteroidData = await openNASA.getNASAAsteroidData();
    console.log(asteroidData);
    let element_count = asteroidData.element_count
    res.render('nasaasteroid', { element_count });
})

app.get('/pokemon', async (req, res) => {
    let pokeData = await openPokemon.getPokemon();
    console.log(pokeData);
    let name = pokeData.name;
    let abilityOne = pokeData.abilities[0].ability.name;
    let abilityTwo = pokeData.abilities[1].ability.name;
    res.render('pokemon', { name, abilityOne, abilityTwo })
})

app.get('/superhero', async (req, res) => {
    let powerData = await openSuperHero.getCharacterPowerStats();
    console.log(powerData);
    let name = powerData.name;
    let intelligence = powerData.intelligence;
    res.render('superhero', { name, intelligence });
})

app.listen(3000, () => {
    console.log('listen to port');

})
/*app.get('/page2', (req, res) => {
    res.send('Yooooo again');

});*/