const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const axios = require('axios');

const app = express();


// CONSTANTS FROM ENVIRONMENT 
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});
const port = process.env.PORT


const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
WEATHERBIT_URL = process.env.WEATHERBIT_URL;
GEONAMES = process.env.GEONAMES;
PIXABAY = process.env.PIXABAY;
PIXABAY_URL = process.env.PIXABAY_URL;


// APP Configuration 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../../dist')));
// app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));


app.post('/call', async (req, res) => {

console.log(req.body)
weather_url = `https://api.weatherbit.io/v2.0/current?lat=${req.body.lat}&lon=${req.body.lng}&key=${process.env.WEATHERBIT_KEY}`
   
await axios
      .get(weather_url)
      .then((data) => {
        // console.log('data package', data.data);
        res.send(data.data);
      })
  
      .catch((error) => {
        console.log('ERROR');
        console.log(error);
      });
  });


app.listen(port, () => console.log(`listening on port ${port}`));