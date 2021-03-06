const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

//Modules
// const CreateSearchItems = require('./pixabay');
const createImagesObject = require('./imagesObject');
const formWeatherObject = require('./weatherObject')
const geoNamesServices = require('./geonames');
const { Console } = require('console');
const { response } = require('express');

// CONSTANTS FROM ENVIRONMENT 
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});
const port = process.env.PORT

pixabayURL = `https://pixabay.com/api/?key=20462252-df3c282cc8150591166158d7d&q=granada+spain&image_type=photo`

const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
WEATHERBIT_URL = process.env.WEATHERBIT_URL;
GEONAMES = process.env.GEONAMES;
PIXABAY = process.env.PIXABAY;
PIXABAY_URL = process.env.PIXABAY_URL;


// APP Configuration 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../../dist')));
app.use(cors());

// app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));


app.post('/weather', async (req, res) => {

// console.log(req.body)
weather_url = `https://api.weatherbit.io/v2.0/current?lat=${req.body.lat}&lon=${req.body.lng}&units=I&key=${process.env.WEATHERBIT_KEY}`
   
  await axios
       .get(weather_url)
       .then((data) => {        
         res.send(formWeatherObject(data.data));
       })
  
       .catch((error) => {
         console.log('ERROR');
         console.log(error);
       });

});


app.post('/pixabay', async (req, res) => {

const newURL = await geoNamesServices(req);

const urlOne = newURL[0];
const urlTwo = newURL[1];
const urlThree = newURL[2];

// console.log('URL One:' ,urlOne)
// console.log('URL Two:' ,urlTwo)
// console.log('URL Three:' ,urlThree)

const responseOne = await axios.get(urlOne);
// console.log(responseOne)
const responseTwo = await axios.get(urlTwo);
const responseThree = await axios.get(urlThree);


const totalResponseHits = responseOne.data.hits.concat(responseTwo.data.hits).concat(responseThree.data.hits);
const images = await createImagesObject(totalResponseHits);
res.send(images);

});

app.listen(port, () => console.log(`listening on port ${port}`));