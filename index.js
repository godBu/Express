const express = require('express'); //npm i express
const handleBars = require('express-handlebars'); //npm i express-handlebars // https://handlebarsjs.com
const path = require('path'); //built-in module like fs
const app = express(); // initialising the express function and its features - https://npmjs.com/package/express
require('dotenv').config();

const openWeatherMap = require('./lib/WeatherMap') // multiple imports
const openHarryPotter = require('./lib/HarryPotter')
const openNASA = require('./lib/NASA')

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
    let potterData = await openHarryPotter.getSortingHat();
    console.log(potterData);
    res.render('harrypotter', { potterData })
});

app.get('/nasa', async (req, res) => {
    let nasaData = await openNASA.getNASAData();
    console.log(nasaData);
    res.render('nasa', { nasaData })
})

app.listen(3000, () => {
    console.log('listen to port');

})
/*app.get('/page2', (req, res) => {
    res.send('Yooooo again');

});*/