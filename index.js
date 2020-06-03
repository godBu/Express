const express = require('express'); //npm i express
const handleBars = require('express-handlebars'); //npm i express-handlebars // https://handlebarsjs.com
const path = require('path'); //built-in module like fs
const app = express(); // initialising the express function and its features - https://npmjs.com/package/express
const bodyParser = require('body-parser'); //npm i body-parser
require('dotenv').config();
const PORT = process.env.PORT

const openWeatherMap = require('./lib/WeatherMap') // multiple imports
const openHarryPotter = require('./lib/HarryPotter')
const openNASA = require('./lib/NASA')
const Pokemon = require('./lib/Pokemon') // single imports
const SuperHero = require('./lib/SuperHero')

app.use(bodyParser.urlencoded({extended: false})); //ignore data types and make everything a string
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); //

app.engine('.hbs', handleBars({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs')

app.get('/', async (req, res) => {
    res.render('index')
});

app.get('/weathermap', async (req, res) => {
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
    res.render('weathermap', { temp, name, country, main, description, longitude, latitude, base, clouds })
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
    let explanation = photoData.explanation;
    let image = photoData.url;
    res.render('nasa', { photoData: { copyright, date, explanation }, image});
    /*boolean: true*/
});

app.get('/nasaasteroid', async (req, res) => {
    let asteroidData = await openNASA.getNASAAsteroidData();
    console.log(asteroidData);
    let element_count = asteroidData.element_count
    res.render('nasaasteroid', { element_count });
})

app.get('/pokemon', async (req, res) => {
    res.render('pokemon');
})

app.post('/pokemon', async (req, res) => {
    let id = req.body.id
    let response = await Pokemon(id);
    console.log(response);
    res.render('pokemon', { response });
})

app.get('/superhero', async (req, res) => {
    //let powerData = await openSuperHero.getCharacterPowerStats();
    //console.log(powerData);
    //let name = powerData.name;
    //let intelligence = powerData.intelligence;
    res.render('superhero' /*{ name, intelligence }/*/);
})

app.post('/superhero', async (req, res) => {
    let number = req.body.number
    let response = await SuperHero(number);
    console.log(response);
    //let response  = await openSuperHero.getCharacterPowerStats(number);
    //let name = powerData.name;
    //let intelligence = powerData.intelligence;
    res.render('superhero', { response });
})

app.listen(3000, () => {
    console.log(`listen to 3000`);

})









/*app.get('/page2', (req, res) => {
    res.send('Yooooo again');

});*/